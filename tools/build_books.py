"""Bygger js/books.js (biblioteket) ur Dans manus och kopplar spelets dikter till sin plats.

Körs lokalt:  python3 tools/build_books.py ECHOES.docx HEARTS.docx FIRE.docx
Manusfilerna ligger hos Dan och läggs inte i repot. Texten ändras inte, utom de rättelser
Dan har godkänt (CORRECTIONS). Skriptet uppdaterar också fälten src och play i js/poems.js.
"""
import json, re, sys
from docx import Document

# Layout only: lines are split where the manuscript lost a line break; words are never changed.
CORRECTIONS = [("I’ve came up", "I’ve come up"), ("deerly bought", "dearly bought"), ("demarkations", "demarcations")]
BOOKS = {
    "echoes": dict(title="Echoes of Life", skip_headings={"Echoes of Life", "Contents"}, intro={"Foreword"},
                   skip_paras={"By Dan Engström"}),
    "hearts": dict(title="Hearts Around the Fire", skip_headings={"HEARTS AROUND THE FIRE"}, intro={"OUR HOME BY THE RIVER"},
                   skip_paras=set()),
    "fire": dict(title="Fire in Bælwythe", skip_headings={"Fire in Bælwythe"}, intro={"Directions"}, skip_paras=set(), speech=True),
}

def fix(t):
    for a, b in CORRECTIONS:
        t = t.replace(a, b)
    return t

def segs(p):
    """Paragraph as text, or as [[text, 1/0], ...] when it mixes italic and roman."""
    out = []
    for r in p.runs:
        t = fix(r.text)
        if not t:
            continue
        it = 1 if r.italic else 0
        if out and out[-1][1] == it:
            out[-1][0] += t
        else:
            out.append([t, it])
    if not out:
        return fix(p.text)
    if len(out) == 1 and out[0][1] == 0:
        return out[0][0]
    return out

def plain(s):
    return s if isinstance(s, str) else "".join(t for t, _ in s)

def split_lines(s):
    """Soft line breaks inside a paragraph become separate verse lines."""
    if isinstance(s, str):
        return [x for x in s.split("\n")]
    lines, cur = [], []
    for t, it in s:
        parts = t.split("\n")
        for k, part in enumerate(parts):
            if k:
                lines.append(cur); cur = []
            if part:
                cur.append([part, it])
    lines.append(cur)
    return [l[0][0] if len(l) == 1 and l[0][1] == 0 else l for l in lines if l]

def all_italic(s):
    return not isinstance(s, str) and all(it for _, it in s)

def slug(t, used):
    b = re.sub(r"[^a-z0-9]+", "-", t.lower().replace("æ", "ae")).strip("-") or "s"
    s, n = b, 2
    while s in used:
        s = f"{b}-{n}"; n += 1
    used.add(s)
    return s

def build(path, cfg):
    d = Document(path)
    blocks, used, nline, stanza, in_intro, started = [], set(), 0, None, False, False
    heads = []          # current heading stack: [(level, text)]
    lines_meta = []     # per verse line: (plain text, heading stack copy)
    def close():
        nonlocal stanza
        if stanza:
            blocks.append(["s", stanza[0], stanza[1]])
            stanza = None
    for p in d.paragraphs:
        st, text = p.style.name, fix(p.text).strip()
        if re.search(r"\t\d+\s*$", p.text):
            continue  # table of contents
        if st.startswith("Heading") or st == "Title":
            close()
            if not text or text in cfg["skip_headings"]:
                continue
            lvl = int(st.split()[-1]) if st.startswith("Heading") else 1
            started = True
            in_intro = lvl == 1 and text in cfg["intro"] or (in_intro and lvl > 1)
            heads = [h for h in heads if h[0] < lvl] + [(lvl, text)]
            blocks.append(["h", lvl, text, slug(text, used), 1 if (lvl == 1 and text in cfg["intro"]) else 0])
            continue
        if not started:
            continue
        if not text:
            close(); continue
        if plain(segs(p)).strip() in cfg["skip_paras"]:
            continue
        s = segs(p)
        sentences = re.search(r"[.?!](\s|$)", text) is not None
        merged = len(text) > 115 and not sentences and not in_intro
        if merged:
            # Verse lines that lost their line breaks in the manuscript: split where a new line starts with a capital.
            s = "\n".join(re.split(r"(?<=[a-z,;!?’]) (?=[A-Z])", plain(s)))
        prose = not merged and (in_intro or len(text) > 115 or all_italic(s) or (cfg.get("speech") and len(text) >= 60 and sentences))
        if prose:
            close()
            blocks.append(["p", s if isinstance(s, str) else s, 1 if all_italic(s) else 0])
            continue
        for ln in split_lines(s):
            if not plain(ln).strip():
                continue
            if isinstance(ln, str):
                ln = ln.rstrip()
                if ln.startswith(" ") and not ln.startswith("  "):
                    ln = ln[1:]  # a stray single space; deliberate indents (2+ spaces) are kept
            if stanza is None:
                stanza = [nline, []]
            stanza[1].append(ln)
            lines_meta.append((plain(ln).strip(), [h[1] for h in heads]))
            nline += 1
    close()
    # A lone line that is a spoken sentence or a date is prose, not a one-line stanza.
    for i, bl in enumerate(blocks):
        if bl[0] == "s" and len(bl[2]) == 1:
            t = plain(bl[2][0]).strip()
            if (cfg.get("speech") and re.search(r"[.?!]$", t)) or re.match(r"^[A-Z][a-z]+ \d{1,2}(st|nd|rd|th)?, \d{4}$", t):
                blocks[i] = ["p", bl[2][0], 0]
    return blocks, lines_meta

def norm(t):
    return re.sub(r"\s+", " ", t.replace(" | ", " ")).strip().lower()

def locate(lines_meta, poem_lines):
    want = [norm(l) for l in poem_lines]
    have = [norm(t) for t, _ in lines_meta]
    for i in range(len(have) - len(want) + 1):
        if have[i:i + len(want)] == want:
            return i
    # tolerate small differences: first two lines must match
    for i in range(len(have) - 1):
        if have[i] == want[0] and (len(want) < 2 or have[i + 1] == want[1]):
            return i
    return -1

def nice(h):
    return h.title() if h.isupper() else h

def main(echoes, hearts, fire):
    out, metas = {}, {}
    meta = {
        "echoes": dict(title="Echoes of Life", by="Dan Engström", pub="Piratpensionat Produktion", year="2025",
                       about="Short poems on noticing, connection, doubt and resistance, with four sonnets, The Edge of Perception, at their heart."),
        "hearts": dict(title="Hearts Around the Fire", by="Dan Engström", pub="Piratpensionat Produktion", year="2026",
                       about="Bælwythe, an imagined town at a river's bend, told through the voices of the people who live there."),
        "fire": dict(title="Fire in Bælwythe", by="Dan Engström", pub="Piratpensionat Produktion", year="2026",
                     sub="A monodrama in one act, adapted from the world of Hearts Around the Fire. Performed by the Jester.",
                     about="A one-act play for a single actor: the Jester tells the story of Bælwythe, using poems from Hearts Around the Fire."),
    }
    for key, path in (("echoes", echoes), ("hearts", hearts), ("fire", fire)):
        blocks, lm = build(path, BOOKS[key])
        out[key] = dict(meta[key], blocks=blocks)
        metas[key] = lm
    src = open("js/poems.js").read()
    head = src[:src.index("window.PICKR_POEMS")]
    P = json.loads(src[src.index("["):src.rindex("]") + 1])
    missing = []
    for p in P:
        flat = [l for s in p["stanzas"] for l in s]
        i = locate(metas[p["book"]], flat)
        if i < 0:
            missing.append(p["id"]); continue
        path = [nice(h) for h in metas[p["book"]][i][1] if h != p["title"]]
        p["src"] = dict(l=i, n=len(flat), path=" · ".join(path))
        p.pop("play", None)
        if p["book"] == "hearts":
            j = locate(metas["fire"], flat)
            if j >= 0:
                p["play"] = dict(l=j, n=len(flat), path=" · ".join(nice(h) for h in metas["fire"][j][1]))
    open("js/poems.js", "w").write(head + "window.PICKR_POEMS = " + json.dumps(P, ensure_ascii=False, indent=1) + ";\n")
    open("js/books.js", "w").write("/* Pickr: the library. Dan Engström, CC BY-NC-SA. Built by tools/build_books.py; edit the manuscripts, not this file. */\n"
                                   "window.PICKR_BOOKS = " + json.dumps(out, ensure_ascii=False, separators=(",", ":")) + ";\n")
    print("missing:", missing)
    print("in play:", [p["id"] for p in P if p.get("play")])
    print({k: (len(v["blocks"]), len(metas[k])) for k, v in out.items()})

if __name__ == "__main__":
    main(*sys.argv[1:4])
