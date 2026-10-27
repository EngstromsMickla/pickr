/* Pickr: game engine. Texts live in content.js and poems.js. */
(function () {
  'use strict';
  var C = window.PICKR, P = window.PICKR_POEMS, U = C.ui;
  var app = document.getElementById('app');

  /* ---------- storage (per browser, optional) ---------- */
  var KEY = 'pickr.v1';
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  var S = load(); S.solved = S.solved || {}; if (typeof S.muted !== 'boolean') S.muted = false;
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage unavailable */ } }

  /* ---------- helpers ---------- */
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function fmt(s, o) { return s.replace(/\{(\w+)\}/g, function (m, k) { return o[k]; }); }
  function lineHTML(t) { return esc(t).replace(/ \| /g, '<span class="cz"> </span>'); }
  function scanHTML(t) { return esc(t).replace(/\[([^\]]+)\]/g, '<b>$1</b>').replace(/ \| /g, '<span class="cz"> </span>'); }
  function idx(id) { for (var i = 0; i < P.length; i++) if (P[i].id === id) return i; return -1; }
  function shortTitle(p) { return p.title + (p.excerpt && /^Act /.test(p.excerpt) ? ', ' + p.excerpt.split(',')[0] : ''); }
  function nLines(p) { return p.stanzas.reduce(function (a, s) { return a + s.length; }, 0); }
  function shuffled(a) { a = a.slice(); for (var j = a.length - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[r]; a[r] = t; } return a; }
  /* A round is ten poems drawn from the pool, easy ones first. */
  function drawRound() {
    var out = [];
    ['easy', 'medium', 'hard'].forEach(function (lv) {
      out = out.concat(shuffled(P.filter(function (p) { return p.level === lv; }).map(function (p) { return p.id; })).slice(0, C.round[lv]));
    });
    return out;
  }
  function validRound(r) { return Array.isArray(r) && r.length && r.every(function (id) { return idx(id) >= 0; }); }
  if (!validRound(S.round)) { S.round = drawRound(); S.solved = {}; save(); }
  function newRound() { S.round = drawRound(); S.solved = {}; save(); }
  function rpos(id) { return S.round.indexOf(id); }
  function RP() { return S.round.map(function (id) { return P[idx(id)]; }); }
  function solvedCount() { return S.round.filter(function (id) { return S.solved[id]; }).length; }
  function firstUnsolved(from) {
    var start = from || 0, n = S.round.length;
    for (var k = 0; k < n; k++) { var id = S.round[(start + k) % n]; if (!S.solved[id]) return P[idx(id)]; }
    return null;
  }

  /* ---------- sound ---------- */
  var AC = null;
  function tone(f, dur, when, type) {
    if (S.muted) return;
    try {
      AC = AC || new (window.AudioContext || window.webkitAudioContext)();
      if (AC.state === 'suspended') AC.resume();
      var t = AC.currentTime + (when || 0), o = AC.createOscillator(), g = AC.createGain();
      o.type = type || 'square'; o.frequency.setValueAtTime(f, t);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.05, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(AC.destination); o.start(t); o.stop(t + dur + 0.03);
    } catch (e) { /* no audio */ }
  }
  var sfx = {
    drop: function () { [700, 560, 430, 330].forEach(function (f, i) { tone(f, .08, i * .06); }); },
    swap: function () { tone(620, .05, 0, 'triangle'); tone(820, .05, .05, 'triangle'); },
    close: function () { tone(440, .12); tone(370, .16, .12); },
    part: function () { [523, 659, 784].forEach(function (f, i) { tone(f, .1, i * .08, 'triangle'); }); },
    win: function () { [523, 659, 784, 1047, 784, 1047].forEach(function (f, i) { tone(f, .12, i * .1, 'triangle'); }); },
    hint: function () { tone(990, .06, 0, 'triangle'); tone(1320, .08, .07, 'triangle'); },
    boing: function () { tone(300, .06, 0, 'triangle'); tone(520, .08, .05, 'triangle'); }
  };
  var soundbtn = document.getElementById('soundbtn');
  function paintSound() { soundbtn.textContent = U.sound + ' ' + (S.muted ? U.off : U.on); soundbtn.setAttribute('aria-pressed', S.muted ? 'false' : 'true'); }
  soundbtn.addEventListener('click', function () { S.muted = !S.muted; save(); paintSound(); sfx.boing(); });
  paintSound();

  /* ---------- Pickr, drawn as pixels ---------- */
  var BODY = [
    '.......aa.......',
    '.......aa.......',
    '.......ss.......',
    '...dddddddddd...',
    '..dggggggggggd..',
    '..dgkkkkkkkkgd..',
    '..dgkeekkeekgd..',
    '..dgkeekkeekgd..',
    '..dgkkkkkkkkgd..',
    '..dggggggggggd..',
    '...dddddddddd...',
    '......dddd......',
    '.LLBBBBBBBBBBMM.',
    'L..BWWWWWWWWB..M',
    'L..BWRRWWWWWB..M',
    'LL.BWWWWWWWWB.MM',
    '...BBBBBBBBBB...',
    '....ff....ff....'
  ];
  var HAPPY = [[5, 6], [6, 6], [4, 7], [7, 7], [9, 6], [10, 6], [8, 7], [11, 7]];
  var COL = { a: '#a57a12', s: '#1f4a41', d: '#1f4a41', g: '#2f6b5e', k: '#1f2a27', e: '#f3d27a', L: '#b8532c', M: '#b8532c', B: '#2f6b5e', W: '#f6f4ef', R: '#b8532c', f: '#1f2a27' };
  var PART = { a: 'ant', s: 'ant', d: 'head', g: 'head', k: 'head', e: 'eyes', L: 'armL', M: 'armR', B: 'body', W: 'body', R: 'body', f: 'feet' };
  var ROBOT = (function () {
    var parts = { ant: '', head: '', eyes: '', armL: '', armR: '', body: '', feet: '' };
    BODY.forEach(function (row, y) {
      for (var x = 0; x < row.length; x++) {
        var c = row[x]; if (c === '.') continue;
        parts[PART[c]] += '<rect x="' + x + '" y="' + y + '" width="1.02" height="1.02" fill="' + COL[c] + '"/>';
      }
    });
    var happy = HAPPY.map(function (p) { return '<rect x="' + p[0] + '" y="' + p[1] + '" width="1.02" height="1.02" fill="#f3d27a"/>'; }).join('');
    return '<svg class="pickr" viewBox="-1 -1 18 20" shape-rendering="crispEdges" role="img" aria-label="Pickr, a small green robot">' +
      '<g class="p-feet">' + parts.feet + '</g><g class="p-body">' + parts.body + '</g>' +
      '<g class="p-armL">' + parts.armL + '</g><g class="p-armR">' + parts.armR + '</g>' +
      '<g class="p-ant">' + parts.ant + '</g><g class="p-head">' + parts.head + '</g>' +
      '<g class="p-eyes">' + parts.eyes + '</g><g class="p-happy">' + happy + '</g></svg>';
  })();

  function stageHTML(text, big) {
    return '<div class="stage' + (big ? ' big' : '') + '"><button class="bot" id="bot" type="button" aria-label="Pickr">' + ROBOT + '</button>' +
      '<div class="bubble" id="bubble" role="status" aria-live="polite">' + esc(text) + '</div></div>';
  }
  var moodTimer = null;
  function say(text, mood, keep) {
    var b = document.getElementById('bubble'), bot = document.getElementById('bot');
    if (!b) return;
    b.textContent = text; b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop');
    if (bot) {
      bot.className = 'bot'; void bot.offsetWidth;
      if (mood) bot.classList.add(mood);
      clearTimeout(moodTimer);
      if (mood && !keep) moodTimer = setTimeout(function () { bot.className = 'bot'; }, 1700);
    }
  }
  function confetti() {
    var st = document.querySelector('.stage'); if (!st) return;
    var box = document.createElement('div'); box.className = 'confetti';
    var cols = ['#2f6b5e', '#a57a12', '#b8532c', '#f3d27a', '#1f4a41'];
    for (var i = 0; i < 36; i++) {
      var c = document.createElement('i');
      c.style.left = (20 + Math.random() * 60) + 'px';
      c.style.background = pick(cols);
      c.style.setProperty('--x', (Math.random() * 360 - 60) + 'px');
      c.style.setProperty('--r', (Math.random() * 720 - 360) + 'deg');
      c.style.animationDelay = (Math.random() * .4) + 's';
      box.appendChild(c);
    }
    st.appendChild(box);
    setTimeout(function () { box.remove(); }, 2400);
  }
  function wireBot() {
    var bot = document.getElementById('bot');
    if (bot) bot.addEventListener('click', function () { sfx.boing(); say(pick(C.pickr.idle), 'joy'); });
  }

  /* ---------- footer ---------- */
  document.getElementById('footer').innerHTML =
    '<span class="maker"><img src="img/mickla.png" alt="Mickla" width="22" height="22">' + esc(C.copyright) + '</span>' +
    '<span><a href="' + esc(C.licenceUrl) + '" rel="license noopener" target="_blank">' + esc(C.licence) + '</a></span>' +
    '<span>' + esc(C.name) + ' · ' + esc(C.version) + '</span>';

  /* ---------- home ---------- */
  function renderHome() {
    var n = solvedCount(), next = firstUnsolved();
    var playHref = next ? '#play/' + next.id : '#poems';
    app.innerHTML =
      '<section class="hero">' + stageHTML(n ? pick(C.pickr.idle) : pick(C.pickr.drop), true) +
      '<h1>' + esc(C.name) + '</h1><p class="tagline">' + esc(C.tagline) + '</p><p>' + esc(C.lede) + '</p>' +
      '<div class="actions"><a class="btn" href="' + playHref + '">' + esc(n ? C.continueBtn : C.play) + '</a>' +
      '<a class="btn ghost" href="#poems">' + esc(C.choose) + '</a><a class="btn ghost" href="#guide">' + esc(C.guide.title) + '</a></div>' +
      (n ? '<p class="progress">' + esc(U.progress(n, S.round.length)) + '</p>' + restartHTML() : '') + '</section>' +
      '<section class="card"><h2>' + esc(C.howTitle) + '</h2><ol class="process">' +
      C.steps.map(function (s) { return '<li><b>' + esc(s.t) + '</b><span>' + esc(s.d) + '</span></li>'; }).join('') +
      '</ol><p class="note">' + esc(C.hintNote) + '</p></section>' +
      '<section class="card"><h2>' + esc(C.aboutTitle) + '</h2>' + C.about.map(function (p) { return '<p>' + p + '</p>'; }).join('') + '</section>';
    wireBot(); wireRestart();
  }

  /* ---------- start over ---------- */
  function restartHTML() {
    return '<div class="restart" id="restart"><button class="linkbtn" type="button" data-r="ask">' + esc(U.restart) + '</button></div>';
  }
  function wireRestart() {
    var box = document.getElementById('restart'); if (!box) return;
    box.addEventListener('click', function (e) {
      var r = e.target.getAttribute('data-r'); if (!r) return;
      if (r === 'ask') {
        box.innerHTML = '<p>' + esc(U.restartAsk) + '</p><div class="actions"><button class="btn ochre" type="button" data-r="yes">' + esc(U.restartYes) + '</button>' +
          '<button class="btn ghost" type="button" data-r="no">' + esc(U.restartNo) + '</button></div>';
      } else if (r === 'no') {
        box.innerHTML = restartHTML().replace(/^<div[^>]*>|<\/div>$/g, '');
      } else if (r === 'yes') {
        newRound(); G = null;
        if (location.hash && location.hash !== '#') location.hash = '#'; else route();
        setTimeout(function () { say(U.restartDone, 'oops'); sfx.drop(); }, 50);
      }
    });
  }

  /* ---------- poem list ---------- */
  function renderList() {
    var html = '<div class="playhead"><a href="#">' + esc(U.home) + '</a><span>' + esc(U.progress(solvedCount(), S.round.length)) + '</span></div>' +
      '<p class="small">' + esc(U.roundNote) + '</p>';
    if (solvedCount() === S.round.length) html += '<div class="note"><p>' + esc(U.allDone) + '</p><div class="actions"><a class="btn" href="#summary">' + esc(U.roundDone) + '</a><button class="btn ghost" type="button" id="newround">' + esc(U.newRound) + '</button></div></div>';
    ['easy', 'medium', 'hard'].forEach(function (lv) {
      html += '<section class="level"><h2>' + esc(C.levels[lv]) + '</h2><div class="tiles">';
      RP().forEach(function (p, i) {
        if (p.level !== lv) return;
        var s = S.solved[p.id];
        html += '<a class="tile' + (s ? ' solved' : '') + '" href="#' + (s ? 'done/' : 'play/') + p.id + '"><span class="n">' + (i + 1) + '</span>' +
          (s ? '<span class="t">' + esc(shortTitle(p)) + '</span><span class="f">' + esc(p.form) + '</span>' + snakesHTML(s.snakes || 1, true)
             : '<span class="t">?</span><span class="f">' + nLines(p) + ' ' + esc(U.lines) + '</span>') + '</a>';
      });
      html += '</div></section>';
    });
    if (solvedCount()) html += restartHTML();
    app.innerHTML = html;
    wireRestart();
    var nr = document.getElementById('newround');
    if (nr) nr.addEventListener('click', function () { newRound(); renderList(); window.scrollTo(0, 0); });
  }

  /* ---------- game ---------- */
  var G = null;
  function flatLines(p) {
    var k = 0, out = [];
    p.stanzas.forEach(function (st, si) { st.forEach(function (t, li) { out.push({ text: t, mark: p.marks[k++], end: li === st.length - 1 && si < p.stanzas.length - 1 }); }); });
    return out;
  }
  /* How many other lines the player may ask for: one per further stanza,
     or a third of the lines in a one-stanza poem, always leaving at least three lines to place. */
  function maxOthers(p) {
    var n = nLines(p), S = p.stanzas.length, k = S > 1 ? S - 1 : Math.floor(n / 3);
    return Math.max(0, Math.min(k, n - 4));
  }
  /* Pick the other lines strategically. In a poem with several stanzas Pickr gives the opening
     line of other stanzas, spread out and largest first; in a one-stanza poem, lines spread evenly. */
  function chooseLines(p, first, others) {
    var fixed = {}, given = [];
    if (first) { fixed[0] = true; given.push(0); }
    var cands = [];
    if (p.stanzas.length > 1) { var k = 0; p.stanzas.forEach(function (st, si) { if (si > 0) cands.push({ line: k, size: st.length }); k += st.length; }); }
    else for (var i = 1; i < nLines(p); i++) cands.push({ line: i, size: 1 });
    for (var n = 0; n < others; n++) {
      var best = null, bestScore = -1;
      cands.forEach(function (c) {
        if (fixed[c.line]) return;
        var dist = given.length ? Math.min.apply(null, given.map(function (g) { return Math.abs(g - c.line); })) : c.line + 1;
        var score = dist * 10 + c.size + c.line / 1000;
        if (score > bestScore) { bestScore = score; best = c; }
      });
      if (!best) break;
      fixed[best.line] = true; given.push(best.line);
    }
    return fixed;
  }
  function inPlace(order, lines, i) { return lines[order[i]].text === lines[i].text; }
  function shuffle(lines, fixed) {
    var free = [], pos = [];
    for (var i = 0; i < lines.length; i++) if (!fixed[i]) { free.push(i); pos.push(i); }
    var best = null, bestScore = 1e9;
    for (var tries = 0; tries < 200; tries++) {
      var a = free.slice();
      for (var j = a.length - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)); var t = a[j]; a[j] = a[r]; a[r] = t; }
      var order = []; var q = 0;
      for (var m = 0; m < lines.length; m++) order[m] = fixed[m] ? m : a[q++];
      var score = 0; pos.forEach(function (p) { if (inPlace(order, lines, p)) score++; });
      if (score < bestScore) { best = order; bestScore = score; }
      if (score === 0) break;
    }
    return best;
  }
  function colourFor(mark) {
    if (mark === 'soft') return '#a57a12';
    if (mark === 'hard') return '#2f6b5e';
    var cols = ['#2f6b5e', '#a57a12', '#b8532c', '#1f4a41', '#8a6a1a', '#8a3d22', '#4f8a7c', '#5f6b67', '#6d5a2e'];
    return cols[(mark.charCodeAt(0) - 65 + cols.length * 4) % cols.length];
  }
  function helpPrefs(p) {
    var h = S.help || {};
    return { first: h.first !== false, marks: p.markLabel === 'none' ? false : (h.marks !== false), others: Math.min(typeof h.others === 'number' ? h.others : 1, maxOthers(p)) };
  }
  function renderSetup(id) {
    var i = idx(id); if (i < 0) { location.hash = '#poems'; return; }
    var p = P[i], one = p.stanzas.length === 1, h = helpPrefs(p), k = maxOthers(p), pos = rpos(id), Hs = U.setup;
    var head = (pos >= 0 ? U.poem + ' ' + (pos + 1) + ' ' + U.of + ' ' + S.round.length + ' · ' : '') + nLines(p) + ' ' + U.lines + (one ? '' : ', ' + p.stanzas.length + ' ' + U.stanzas);
    var opts = '';
    for (var n = 0; n <= k; n++) opts += '<label class="chip"><input type="radio" name="others" value="' + n + '"' + (n === h.others ? ' checked' : '') + '><span>' + n + '</span></label>';
    app.innerHTML = '<div class="playhead"><a href="#poems">' + esc(U.allPoems) + '</a><span>' + esc(head) + '</span></div>' +
      stageHTML(pick(C.pickr.setup), false) +
      '<section class="card setup"><h2>' + esc(Hs.title) + '</h2>' +
      '<label class="opt"><input type="checkbox" id="o-first"' + (h.first ? ' checked' : '') + '><span>' + esc(Hs.firstLine) + '</span></label>' +
      (p.markLabel === 'none' ? '<p class="small">' + esc(Hs.noRhyme) + '</p>' :
        '<label class="opt"><input type="checkbox" id="o-marks"' + (h.marks ? ' checked' : '') + '><span>' + esc(Hs.marks[p.markLabel]) + '</span></label>') +
      (k > 0 ? '<fieldset class="others"><legend>' + esc(Hs.otherLines) + '</legend><div class="chips">' + opts + '</div>' +
        '<p class="small">' + esc(one ? Hs.strategicOne : Hs.strategic) + '</p></fieldset>' : '') +
      '<div class="actions"><button class="btn" id="go" type="button">' + esc(Hs.go) + '</button></div></section>';
    wireBot();
    document.getElementById('go').addEventListener('click', function () {
      var first = document.getElementById('o-first').checked;
      var mk = document.getElementById('o-marks'), marks = mk ? mk.checked : false;
      var oth = app.querySelector('input[name="others"]:checked'), others = oth ? +oth.value : 0;
      var old = S.help || {};
      S.help = { first: first, marks: mk ? marks : old.marks, others: k > 0 ? others : old.others };
      save();
      startGame(id, first, marks, others);
    });
  }
  function startGame(id, first, marks, others) {
    var i = idx(id), p = P[i];
    G = { p: p, i: i, lines: flatLines(p), hints: 0, checks: 0, help: { first: first, marks: marks, others: others }, marks: marks, sel: null, checked: false, fixed: chooseLines(p, first, others) };
    G.order = shuffle(G.lines, G.fixed);
    renderPlay(true);
    say(pick(C.pickr.drop), 'oops'); sfx.drop();
  }
  function cur() { return G.lines; }
  function renderPlay(drop) {
    var p = G.p, n = nLines(p), pos = rpos(p.id);
    var html = '<div class="playhead"><a href="#poems">' + esc(U.allPoems) + '</a><span>' + (pos >= 0 ? esc(U.poem) + ' ' + (pos + 1) + ' ' + esc(U.of) + ' ' + S.round.length + ' · ' : '') + n + ' ' + esc(U.lines) + '</span></div>' +
      stageHTML('', false);
    html += '<ol class="lines" id="lines"></ol><p class="help">' + esc(U.dragHelp) + '</p>' +
      '<p class="hintline" id="hintline">' + (G.marks ? esc(U.hintMarks[p.markLabel]) : '') + '</p>' +
      '<div class="controls"><button class="btn" id="check" type="button">' + esc(U.check) + '</button>' +
      '<button class="btn ghost" id="hint" type="button">' + esc(U.hint) + '</button>' +
      '<button class="linkbtn" id="morehelp" type="button" aria-expanded="false">' + esc(U.more.button) + '</button>' +
      '<button class="linkbtn" id="reshuffle" type="button">' + esc(U.reshuffle) + '</button></div>' +
      '<div id="helppanel"></div>';
    app.innerHTML = html;
    wireBot();
    document.getElementById('check').addEventListener('click', check);
    document.getElementById('hint').addEventListener('click', hint);
    document.getElementById('morehelp').addEventListener('click', toggleHelp);
    document.getElementById('reshuffle').addEventListener('click', function () {
      G.order = shuffle(cur(), G.fixed); G.checked = false; G.sel = null; renderLines(true); say(pick(C.pickr.drop), 'oops'); sfx.drop();
    });
    renderLines(drop);
  }
  var GRIP = '<svg viewBox="0 0 6 10" aria-hidden="true"><g fill="currentColor"><rect x="0" y="0" width="2" height="2"/><rect x="4" y="0" width="2" height="2"/><rect x="0" y="4" width="2" height="2"/><rect x="4" y="4" width="2" height="2"/><rect x="0" y="8" width="2" height="2"/><rect x="4" y="8" width="2" height="2"/></g></svg>';
  function renderLines(drop) {
    var list = document.getElementById('lines'), lines = cur();
    list.classList.remove('drop');
    list.innerHTML = G.order.map(function (li, pos) {
      var l = lines[li], cls = 'line';
      if (G.fixed[pos]) cls += ' locked';
      else if (G.checked) cls += inPlace(G.order, lines, pos) ? ' home' : ' away';
      if (G.sel === pos) cls += ' sel';
      if (lines[pos].end) cls += ' gap';
      var mark = G.marks && l.mark !== '-' ? '<span class="mark" style="background:' + colourFor(l.mark) + '">' + esc(l.mark) + '</span>' : '';
      var style = drop ? ' style="--d:' + (pos * 55) + 'ms;--dx:' + Math.round(Math.random() * 60 - 30) + 'px;--dr:' + Math.round(Math.random() * 16 - 8) + 'deg"' : '';
      return '<li class="' + cls + '" data-pos="' + pos + '"' + style + '><span class="grip">' + GRIP + '</span>' +
        '<button class="txt" type="button"' + (G.fixed[pos] ? ' aria-disabled="true"' : '') + '>' + lineHTML(l.text) + '</button>' + mark + '</li>';
    }).join('');
    if (drop) { void list.offsetWidth; list.classList.add('drop'); }
    Array.prototype.forEach.call(list.children, function (li) {
      var pos = +li.dataset.pos;
      li.querySelector('.txt').addEventListener('click', function () { tap(pos); });
      li.querySelector('.grip').addEventListener('pointerdown', function (e) { startDrag(e, li); });
    });
  }
  function changed() { G.checked = false; }
  /* ---------- more help during play ---------- */
  function toggleHelp() {
    var box = document.getElementById('helppanel'), btn = document.getElementById('morehelp');
    if (box.innerHTML) { box.innerHTML = ''; btn.setAttribute('aria-expanded', 'false'); return; }
    btn.setAttribute('aria-expanded', 'true');
    var p = G.p, Hs = U.setup, M = U.more, k = maxOthers(p), one = p.stanzas.length === 1, h = G.help;
    var opts = '';
    for (var n = 0; n <= k; n++) opts += '<label class="chip"><input type="radio" name="mothers" value="' + n + '"' + (n === h.others ? ' checked' : '') + (n < h.others ? ' disabled' : '') + '><span>' + n + '</span></label>';
    box.innerHTML = '<section class="card setup"><h2>' + esc(M.title) + '</h2><p class="small">' + esc(M.intro) + '</p>' +
      '<label class="opt"><input type="checkbox" id="m-first"' + (h.first ? ' checked disabled' : '') + '><span>' + esc(Hs.firstLine) + '</span></label>' +
      (p.markLabel === 'none' ? '' : '<label class="opt"><input type="checkbox" id="m-marks"' + (G.marks ? ' checked disabled' : '') + '><span>' + esc(Hs.marks[p.markLabel]) + '</span></label>') +
      (k > 0 ? '<fieldset class="others"><legend>' + esc(Hs.otherLines) + '</legend><div class="chips">' + opts + '</div><p class="small">' + esc(one ? Hs.strategicOne : Hs.strategic) + '</p></fieldset>' : '') +
      '<p class="small">' + esc(M.more) + '</p>' +
      '<div class="actions"><button class="btn" id="m-apply" type="button">' + esc(M.apply) + '</button><button class="btn ghost" id="m-cancel" type="button">' + esc(M.cancel) + '</button></div></section>';
    document.getElementById('m-cancel').addEventListener('click', toggleHelp);
    document.getElementById('m-apply').addEventListener('click', applyHelp);
    box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  function applyHelp() {
    var p = G.p, lines = cur();
    var first = document.getElementById('m-first').checked;
    var mk = document.getElementById('m-marks'), marks = mk ? mk.checked : G.marks;
    var oth = app.querySelector('input[name="mothers"]:checked'), others = oth ? +oth.value : G.help.others;
    var want = chooseLines(p, first, others), added = 0;
    if (G.help.first !== first || G.help.others !== others) {
      var prevGiven = chooseLines(p, G.help.first, G.help.others);
      Object.keys(prevGiven).forEach(function (k) { want[k] = true; });
    }
    Object.keys(want).forEach(function (key) {
      var i = +key; if (G.fixed[i]) return;
      if (!inPlace(G.order, lines, i)) {
        for (var j = 0; j < lines.length; j++) {
          if (!G.fixed[j] && j !== i && lines[G.order[j]].text === lines[i].text) { var t = G.order[i]; G.order[i] = G.order[j]; G.order[j] = t; break; }
        }
      }
      G.fixed[i] = true; added++;
    });
    var marksAdded = marks && !G.marks;
    G.help = { first: first, marks: G.help.marks || marks, others: others };
    G.marks = G.marks || marks;
    document.getElementById('helppanel').innerHTML = '';
    document.getElementById('morehelp').setAttribute('aria-expanded', 'false');
    document.getElementById('hintline').textContent = G.marks ? U.hintMarks[p.markLabel] : '';
    changed(); G.sel = null;
    var all = true; for (var q = 0; q < lines.length; q++) if (!inPlace(G.order, lines, q)) all = false;
    if (all) return chunkDone();
    renderLines();
    if (added || marksAdded) { sfx.hint(); say(pick(C.pickr.moreHelp), 'joy'); } else say(U.more.nothing, 'think');
    var list = document.getElementById('lines'); if (list) list.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  function tap(pos) {
    if (G.fixed[pos]) return;
    if (G.sel === null) { G.sel = pos; renderLines(); return; }
    if (G.sel === pos) { G.sel = null; renderLines(); return; }
    var t = G.order[G.sel]; G.order[G.sel] = G.order[pos]; G.order[pos] = t;
    G.sel = null; changed(); sfx.swap(); renderLines();
  }
  function startDrag(e, li) {
    var pos = +li.dataset.pos;
    if (G.fixed[pos]) return;
    if (e.button !== undefined && e.button !== 0) return;
    e.preventDefault();
    G.sel = null;
    var list = li.parentNode, r = li.getBoundingClientRect(), offY = e.clientY - r.top;
    var ph = document.createElement('li'); ph.className = 'line ph'; ph.style.height = r.height + 'px';
    list.insertBefore(ph, li.nextSibling);
    li.classList.add('dragging'); li.style.width = r.width + 'px'; li.style.left = r.left + 'px'; li.style.top = r.top + 'px';
    var lastY = e.clientY, raf = null;
    function place(y) {
      li.style.top = (y - offY) + 'px';
      var items = Array.prototype.filter.call(list.children, function (x) { return x !== li && x !== ph; }), before = null;
      for (var k = 0; k < items.length; k++) { var b = items[k].getBoundingClientRect(); if (y < b.top + b.height / 2) { before = items[k]; break; } }
      if (before) { if (ph.nextSibling !== before) list.insertBefore(ph, before); } else if (list.lastChild !== ph) list.appendChild(ph);
    }
    function scroller() {
      var edge = 70, v = 0;
      if (lastY < edge) v = -Math.ceil((edge - lastY) / 6); else if (lastY > innerHeight - edge) v = Math.ceil((lastY - (innerHeight - edge)) / 6);
      if (v) { window.scrollBy(0, v); place(lastY); }
      raf = requestAnimationFrame(scroller);
    }
    raf = requestAnimationFrame(scroller);
    function move(ev) { lastY = ev.clientY; place(ev.clientY); }
    function up() {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); window.removeEventListener('pointercancel', up);
      list.insertBefore(li, ph); ph.remove();
      var domFree = Array.prototype.map.call(list.children, function (x) { return +x.dataset.pos; })
        .filter(function (p) { return !G.fixed[p]; }).map(function (p) { return G.order[p]; });
      var neu = [], q = 0;
      for (var m = 0; m < G.order.length; m++) neu[m] = G.fixed[m] ? G.order[m] : domFree[q++];
      var moved = neu.some(function (v, k) { return v !== G.order[k]; });
      G.order = neu; if (moved) { changed(); sfx.swap(); }
      renderLines();
    }
    window.addEventListener('pointermove', move); window.addEventListener('pointerup', up); window.addEventListener('pointercancel', up);
  }
  function check() {
    var lines = cur(), N = lines.length, n = 0;
    for (var i = 0; i < N; i++) if (inPlace(G.order, lines, i)) n++;
    G.checked = true; G.sel = null; G.checks++;
    for (var f = 0; f < N; f++) if (inPlace(G.order, lines, f)) G.fixed[f] = true;
    if (n === N) return chunkDone();
    renderLines();
    if (n === 0) { say(pick(C.pickr.none), 'oops'); } else { say(fmt(pick(C.pickr.close), { n: n, N: N }), 'think'); }
    sfx.close();
  }
  function hint() {
    var lines = cur();
    G.hints++; G.sel = null;
    if (!G.marks && G.p.markLabel !== 'none') {
      G.marks = true;
      document.getElementById('hintline').textContent = U.hintMarks[G.p.markLabel];
      say(pick(C.pickr.hintMarks), 'think'); sfx.hint(); renderLines(); return;
    }
    for (var i = 0; i < lines.length; i++) {
      if (G.fixed[i]) continue;
      if (!inPlace(G.order, lines, i)) {
        for (var j = 0; j < lines.length; j++) {
          if (!G.fixed[j] && j !== i && lines[G.order[j]].text === lines[i].text) { var t = G.order[i]; G.order[i] = G.order[j]; G.order[j] = t; break; }
        }
      }
      G.fixed[i] = true; break;
    }
    changed(); sfx.hint(); say(pick(C.pickr.hintFix), 'think');
    var all = true; for (var k = 0; k < lines.length; k++) if (!inPlace(G.order, lines, k)) all = false;
    if (all) return chunkDone();
    renderLines();
  }
  function snakesFor(checks, n) {
    var ok = Math.ceil(n / 6) + 1;
    return checks <= ok ? 3 : checks <= ok * 2 ? 2 : 1;
  }
  function snakesHTML(k, small) {
    var h = '<span class="snakes' + (small ? ' sm' : '') + '" role="img" aria-label="' + esc(U.snakes.label(k)) + '">';
    for (var i = 0; i < 3; i++) h += '<img src="img/mickla.png" alt="" class="' + (i < k ? 'on' : 'off') + '">';
    return h + '</span>';
  }
  function chunkDone() {
    G.checked = true;
    var p = G.p, prev = S.solved[p.id] || {};
    var help = (G.help.first ? 1 : 0) + (G.help.marks ? 1 : 0) + G.help.others + G.hints;
    S.solved[p.id] = { hints: G.hints, checks: G.checks, snakes: snakesFor(G.checks, nLines(p)), help: help, setup: G.help, quiz: prev.quiz };
    save();
    var id = p.id;
    renderLines();
    document.getElementById('check').disabled = true; document.getElementById('hint').disabled = true;
    sfx.win(); say(pick(C.pickr.win), 'win', true); confetti();
    setTimeout(function () { location.hash = '#done/' + id; }, 1600);
  }

  /* ---------- Pickr's quiz ---------- */
  function normScheme(marks) {
    var map = {}, next = 0;
    return marks.map(function (m) { if (m === '-') return 'x'; if (!(m in map)) map[m] = String.fromCharCode(65 + next++); return map[m]; }).join('');
  }
  function repeatTo(pattern, n) {
    var out = '', g = 0;
    while (out.length < n) {
      out += pattern.replace(/[A-Z]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) + g); });
      g += (pattern.match(/[A-Z]/g) || []).reduce(function (a, c) { return Math.max(a, c.charCodeAt(0) - 64); }, 0);
    }
    return out.slice(0, n);
  }
  function schemeChoices(correct) {
    var n = correct.length, c = [];
    ['AABB', 'ABAB', 'ABBA', 'xAxA', 'AABA'].forEach(function (pt) {
      if (n > 4 && n % 4 === 2) { var body = repeatTo(pt, n - 2), top = body.replace(/x/g, '').split('').reduce(function (m, ch) { return Math.max(m, ch.charCodeAt(0)); }, 64); var e = String.fromCharCode(top + 1); c.push(body + e + e); }
      else c.push(repeatTo(pt, n));
    });
    c.push(repeatTo('A', n).replace(/./g, 'A'));
    if (n === 7) c.push('ABABBCC'); if (n === 8) c.push('ABABABCC'); if (n === 5) c.push('ABABB'); if (n === 3) c.push('xAA', 'ABA');
    var seen = {}; seen[correct] = 1;
    c = c.map(function (s) { return s.indexOf('x') >= 0 ? s : normScheme(s.split('')); }).filter(function (s) { if (seen[s]) return false; seen[s] = 1; return true; });
    return shuffled(c).slice(0, 2);
  }
  function family(f) {
    f = f.toLowerCase();
    var fams = [['sonnet', 'sonnet'], ['ballad', 'ballad'], ['common metre', 'ballad'], ['hymn', 'ballad'], ['couplet', 'couplet'], ['ottava', 'ottava'], ['rhyme royal', 'royal'], ['free', 'free'], ['alliterative', 'allit'], ['blank', 'blank'], ['pantoum', 'pantoum'], ['quatrain', 'quatrain'], ['tercet', 'tercet'], ['cinquain', 'cinquain'], ['rubai', 'rubai']];
    for (var i = 0; i < fams.length; i++) if (f.indexOf(fams[i][0]) >= 0) return fams[i][1];
    return f;
  }
  function makeQuiz(p) {
    var pos = rpos(p.id), type = pos < 0 ? 'form' : pos < 3 ? 'scheme' : pos < 7 ? (pos % 2 ? 'form' : 'scheme') : (pos % 2 ? 'metre' : 'form');
    var Q = U.quiz, first = p.marks.slice(0, p.stanzas[0].length), correct = normScheme(first);
    if (type === 'scheme' && (p.markLabel !== 'rhyme' || correct.length < 3 || !/[A-Z]/.test(correct))) type = 'form';
    var answer, options;
    if (type === 'scheme') { answer = correct; options = [correct].concat(schemeChoices(correct)); }
    else if (type === 'metre') {
      answer = Q.beats[p.beat];
      options = [answer].concat(shuffled(Object.keys(Q.beats).filter(function (k) { return k !== p.beat; })).slice(0, 2).map(function (k) { return Q.beats[k]; }));
    } else {
      answer = p.form; var fams = {}; fams[family(p.form)] = 1; options = [answer];
      shuffled(P).forEach(function (q) { var f = family(q.form); if (options.length < 3 && !fams[f]) { fams[f] = 1; options.push(q.form); } });
    }
    var question = type === 'scheme' ? (p.stanzas.length > 1 ? Q.scheme : Q.schemeOne) : Q[type];
    return { type: type, question: question, options: shuffled(options), answer: answer, chosen: null };
  }
  function quizHTML(q) {
    var answered = q.chosen !== null;
    var h = '<section class="card quiz" id="quiz"><p class="kicker">' + esc(U.quiz.kicker) + '</p><h2>' + esc(q.question) + '</h2><div class="qopts">';
    q.options.forEach(function (o, k) {
      var cls = 'qopt' + (q.type === 'scheme' ? ' mono' : '');
      if (answered && o === q.answer) cls += ' right'; else if (answered && o === q.chosen) cls += ' wrong';
      h += '<button type="button" class="' + cls + '" data-q="' + k + '"' + (answered ? ' disabled' : '') + '>' + esc(o) + '</button>';
    });
    h += '</div>';
    if (answered) h += '<p class="qfb ' + (q.chosen === q.answer ? 'ok' : 'no') + '">' + esc(q.chosen === q.answer ? U.quiz.right : fmt(U.quiz.wrong, { a: q.answer })) + ' ' + esc(U.quiz.then) + '</p>';
    else h += '<p class="small">' + esc(U.quiz.note) + '</p>';
    return h + '</section>';
  }

  /* ---------- reveal ---------- */
  function renderDone(id) {
    var i = idx(id); if (i < 0 || !S.solved[id]) { location.hash = '#play/' + id; return; }
    var p = P[i], sv = S.solved[id];
    if (!sv.quiz) { sv.quiz = makeQuiz(p); save(); }
    var q = sv.quiz, answered = q.chosen !== null;
    var pos = rpos(id), next = firstUnsolved(pos >= 0 ? pos + 1 : 0);
    var sub = p.partOf ? U.from + ' ' + p.partOf : (p.excerpt || '');
    var html = '<div class="playhead"><a href="#poems">' + esc(U.allPoems) + '</a><span>' + (pos >= 0 ? esc(U.poem) + ' ' + (pos + 1) + ' ' + esc(U.of) + ' ' + S.round.length : '') + '</span></div>' +
      stageHTML(answered ? pick(C.pickr.win) : pick(C.pickr.quiz), false) +
      '<div class="result">' + snakesHTML(sv.snakes || 1) + '<p class="kicker">' + esc(U.snakes.label(sv.snakes || 1)) + ' · ' + esc(U.hintsUsed(sv.hints)) + '</p></div>' +
      '<h1 class="ptitle">' + esc(p.title) + '</h1>' + (sub ? '<p class="partof">' + esc(sub) + '</p>' : '') +
      '<div class="poemtext">' + p.stanzas.map(function (s) { return '<p>' + s.map(lineHTML).join('<br>') + '</p>'; }).join('') + '</div>' +
      quizHTML(q);
    if (answered) {
      html += '<section class="card form"><h2>' + esc(U.form) + ': ' + esc(p.form) + '</h2>' +
        '<dl><dt>' + esc(U.scheme) + '</dt><dd>' + esc(p.scheme) + '</dd><dt>' + esc(U.metre) + '</dt><dd>' + esc(p.metre) + '</dd></dl>' +
        '<h3>' + esc(U.scansion) + '</h3><p class="scan">' + scanHTML(p.sample) + '</p><p class="small">' + esc(U.scansionNote) + '</p>' +
        '<h3>' + esc(U.how) + '</h3><p>' + esc(p.how) + '</p>' +
        '<h3>' + esc(U.character) + '</h3><p>' + esc(p.character) + '</p>' +
        '<h3>' + esc(U.use) + '</h3><p>' + esc(p.use) + '</p>' +
        '<h3>' + esc(U.inPoem) + '</h3><p>' + esc(p.poem) + '</p><p class="small"><a href="#guide">' + esc(C.guide.title) + '</a></p></section>' +
        '<p class="small">' + esc(U.snakes.note) + '</p>' +
        '<div class="actions">' + (next ? '<a class="btn" href="#play/' + next.id + '">' + esc(U.next) + '</a>' : (pos >= 0 ? '<a class="btn" href="#summary">' + esc(U.roundDone) + '</a>' : '')) +
        '<a class="btn ghost" href="#play/' + p.id + '">' + esc(U.again) + '</a>' +
        '<a class="btn ghost" href="#poems">' + esc(U.allPoems) + '</a></div>';
    }
    app.innerHTML = html;
    wireBot();
    var bot = document.getElementById('bot'); if (bot && answered) bot.classList.add('joy');
    Array.prototype.forEach.call(app.querySelectorAll('.qopt'), function (b) {
      b.addEventListener('click', function () {
        q.chosen = q.options[+b.dataset.q]; save();
        var right = q.chosen === q.answer;
        if (right) { sfx.part(); } else { sfx.close(); }
        renderDone(id);
        say(pick(right ? C.pickr.quizRight : C.pickr.quizWrong), right ? 'win' : 'oops');
        if (right) confetti();
        var f = app.querySelector('.form'); if (f) f.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
    if (!answered) confetti();
  }

  /* ---------- round summary ---------- */
  function renderSummary() {
    if (solvedCount() < S.round.length) { location.hash = '#poems'; return; }
    var R = RP(), snakes = 0, right = 0, asked = 0, best = null, forms = [], Su = U.summary;
    R.forEach(function (p) {
      var s = S.solved[p.id]; snakes += s.snakes || 1;
      if (s.quiz && s.quiz.chosen !== null) { asked++; if (s.quiz.chosen === s.quiz.answer) right++; }
      if (!best || s.help < S.solved[best.id].help || (s.help === S.solved[best.id].help && (s.snakes || 1) > (S.solved[best.id].snakes || 1))) best = p;
      if (forms.indexOf(p.form) < 0) forms.push(p.form);
    });
    var html = '<div class="playhead"><a href="#">' + esc(U.home) + '</a><a href="#poems">' + esc(U.allPoems) + '</a></div>' +
      stageHTML(Su.pickr, false) +
      '<h1 class="ptitle">' + esc(Su.title) + '</h1>' +
      '<div class="sumgrid"><div class="card stat"><span class="big">' + snakes + '</span><span>' + esc(Su.snakes(snakes, R.length * 3)) + '</span></div>' +
      '<div class="card stat"><span class="big">' + right + '</span><span>' + esc(Su.quiz(right, asked)) + '</span></div></div>' +
      '<section class="card"><h2>' + esc(Su.poems) + '</h2><ol class="sumlist">' +
      R.map(function (p) {
        var s = S.solved[p.id], qq = s.quiz && s.quiz.chosen !== null ? (s.quiz.chosen === s.quiz.answer ? '<span class="qok">' + esc(Su.knew) + '</span>' : '<span class="qno">' + esc(Su.missed) + '</span>') : '';
        return '<li><a href="#done/' + p.id + '">' + esc(shortTitle(p)) + '</a> <span class="small">' + esc(p.form) + '</span> ' + snakesHTML(s.snakes || 1, true) + ' ' + qq + '</li>';
      }).join('') + '</ol>' +
      '<p>' + esc(fmt(Su.leastHelp, { t: shortTitle(best) })) + '</p></section>' +
      '<section class="card"><h2>' + esc(Su.forms) + '</h2><p>' + forms.map(esc).join(' · ') + '</p><p class="small"><a href="#guide">' + esc(C.guide.title) + '</a></p></section>' +
      '<div class="actions"><button class="btn" type="button" id="newround">' + esc(U.newRound) + '</button><a class="btn ghost" href="#guide">' + esc(C.guide.title) + '</a></div>';
    app.innerHTML = html;
    wireBot(); var bot = document.getElementById('bot'); if (bot) bot.classList.add('joy');
    confetti();
    document.getElementById('newround').addEventListener('click', function () { newRound(); location.hash = '#poems'; });
  }

  /* ---------- guide ---------- */
  function slug(t) { return 'g-' + t.toLowerCase().replace(/[^a-z0-9]+/g, '-'); }
  function renderGuide() {
    var g = C.guide, forms = [], byForm = {};
    P.forEach(function (p, i) {
      if (!byForm[p.form]) { byForm[p.form] = { p: p, poems: [] }; forms.push(p.form); }
      if (rpos(p.id) >= 0) byForm[p.form].poems.push(i);
    });
    var secs = g.sections.map(function (s) { return s.h; }).concat([g.formsTitle]);
    var html = '<div class="playhead"><a href="#">' + esc(U.home) + '</a><a href="#poems">' + esc(U.allPoems) + '</a></div>' +
      '<h1 class="ptitle">' + esc(g.title) + '</h1><p>' + esc(g.intro) + '</p>' +
      '<nav class="toc" aria-label="' + esc(g.contents) + '">' + secs.map(function (h) { return '<button type="button" data-jump="' + slug(h) + '">' + esc(h) + '</button>'; }).join('') + '</nav>';
    g.sections.forEach(function (s) {
      html += '<section class="card guide" id="' + slug(s.h) + '"><h2>' + esc(s.h) + '</h2><dl class="terms">' +
        s.items.map(function (it) { return '<dt>' + esc(it.t) + '</dt><dd>' + esc(it.d) + (it.ex ? '<span class="ex">' + lineHTML(it.ex) + '</span>' : '') + '</dd>'; }).join('') + '</dl></section>';
    });
    html += '<section class="card guide" id="' + slug(g.formsTitle) + '"><h2>' + esc(g.formsTitle) + '</h2><p class="small">' + esc(g.formsIntro) + '</p>';
    forms.forEach(function (f) {
      var e = byForm[f], p = e.p;
      html += '<div class="gform"><h3>' + esc(f) + '</h3><p class="small">' + esc(p.scheme) + ' · ' + esc(p.metre) + '</p><p>' + esc(p.how) + '</p>' +
        '<p class="small">' + esc(p.use) + '</p>' + (e.poems.length ? '<p class="meet">' + esc(g.meet) + ': ' + e.poems.map(function (i) {
          var q = P[i], s = S.solved[q.id];
          return '<a href="#' + (s ? 'done/' : 'play/') + q.id + '">' + (s ? esc(shortTitle(q)) : esc(U.poem) + ' ' + (rpos(q.id) + 1)) + '</a>';
        }).join(', ') + '</p>' : '') + '</div>';
    });
    html += '</section>';
    app.innerHTML = html;
    Array.prototype.forEach.call(app.querySelectorAll('[data-jump]'), function (b) {
      b.addEventListener('click', function () { var t = document.getElementById(b.dataset.jump); if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    });
  }

  /* ---------- routing ---------- */
  function route() {
    var h = location.hash.replace(/^#/, ''), parts = h.split('/');
    window.scrollTo(0, 0);
    if (parts[0] === 'poems') renderList();
    else if (parts[0] === 'play' && parts[1]) renderSetup(parts[1]);
    else if (parts[0] === 'done' && parts[1]) renderDone(parts[1]);
    else if (parts[0] === 'guide') renderGuide();
    else if (parts[0] === 'summary') renderSummary();
    else renderHome();
    app.focus({ preventScroll: true });
  }
  window.addEventListener('hashchange', route);
  route();
})();
