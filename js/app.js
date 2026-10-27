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
        newRound(); G = null; lastHints = null;
        if (location.hash && location.hash !== '#') location.hash = '#'; else route();
        setTimeout(function () { say(U.restartDone, 'oops'); sfx.drop(); }, 50);
      }
    });
  }

  /* ---------- poem list ---------- */
  function renderList() {
    var html = '<div class="playhead"><a href="#">' + esc(U.home) + '</a><span>' + esc(U.progress(solvedCount(), S.round.length)) + '</span></div>' +
      '<p class="small">' + esc(U.roundNote) + '</p>';
    if (solvedCount() === S.round.length) html += '<div class="note"><p>' + esc(U.allDone) + '</p><button class="btn" type="button" id="newround">' + esc(U.newRound) + '</button></div>';
    ['easy', 'medium', 'hard'].forEach(function (lv) {
      html += '<section class="level"><h2>' + esc(C.levels[lv]) + '</h2><div class="tiles">';
      RP().forEach(function (p, i) {
        if (p.level !== lv) return;
        var s = S.solved[p.id];
        html += '<a class="tile' + (s ? ' solved' : '') + '" href="#' + (s ? 'done/' : 'play/') + p.id + '"><span class="n">' + (i + 1) + '</span>' +
          (s ? '<span class="t">' + esc(p.title) + '</span><span class="f">' + esc(p.form) + '</span>'
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
  /* Units the player can ask for: stanzas, or single lines when the poem is one stanza. */
  function unitsFor(p) {
    var u = [], k = 0;
    if (p.stanzas.length > 1) p.stanzas.forEach(function (st) { u.push({ from: k, to: k + st.length }); k += st.length; });
    else p.stanzas[0].forEach(function () { u.push({ from: k, to: k + 1 }); k++; });
    return u;
  }
  function maxOthers(p) { return Math.max(0, Math.floor((unitsFor(p).length - 1) / 2)); }
  /* Pick the other units strategically: big ones first, spread out from the ones already given. */
  function chooseUnits(p, first, others) {
    var u = unitsFor(p), given = first ? [0] : [], chosen = [];
    for (var n = 0; n < others; n++) {
      var best = -1, bestScore = -1;
      for (var c = 1; c < u.length; c++) {
        if (chosen.indexOf(c) >= 0) continue;
        var all = given.concat(chosen), dist = all.length ? Math.min.apply(null, all.map(function (g) { return Math.abs(g - c); })) : c + 1;
        var score = (u[c].to - u[c].from) * 2 + dist + c / 100;
        if (score > bestScore) { bestScore = score; best = c; }
      }
      if (best < 0) break;
      chosen.push(best);
    }
    var fixed = {};
    given.concat(chosen).forEach(function (c) { for (var i = u[c].from; i < u[c].to; i++) fixed[i] = true; });
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
      '<label class="opt"><input type="checkbox" id="o-first"' + (h.first ? ' checked' : '') + '><span>' + esc(one ? Hs.firstLine : Hs.firstStanza) + '</span></label>' +
      (p.markLabel === 'none' ? '<p class="small">' + esc(Hs.noRhyme) + '</p>' :
        '<label class="opt"><input type="checkbox" id="o-marks"' + (h.marks ? ' checked' : '') + '><span>' + esc(Hs.marks[p.markLabel]) + '</span></label>') +
      (k > 0 ? '<fieldset class="others"><legend>' + esc(one ? Hs.otherLines : Hs.otherStanzas) + '</legend><div class="chips">' + opts + '</div>' +
        '<p class="small">' + esc(Hs.strategic) + '</p></fieldset>' : '') +
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
    G = { p: p, i: i, lines: flatLines(p), hints: 0, marks: marks, sel: null, checked: false, fixed: chooseUnits(p, first, others) };
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
      '<button class="linkbtn" id="reshuffle" type="button">' + esc(U.reshuffle) + '</button></div>';
    app.innerHTML = html;
    wireBot();
    document.getElementById('check').addEventListener('click', check);
    document.getElementById('hint').addEventListener('click', hint);
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
    G.checked = true; G.sel = null;
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
  function chunkDone() {
    G.checked = true;
    var prev = S.solved[G.p.id];
    S.solved[G.p.id] = { hints: prev ? Math.min(prev.hints, G.hints) : G.hints };
    save();
    var last = G.hints, id = G.p.id;
    renderLines();
    document.getElementById('check').disabled = true; document.getElementById('hint').disabled = true;
    sfx.win(); say(pick(C.pickr.win), 'win', true); confetti();
    setTimeout(function () { lastHints = last; location.hash = '#done/' + id; }, 1600);
  }

  /* ---------- reveal ---------- */
  var lastHints = null;
  function renderDone(id) {
    var i = idx(id); if (i < 0 || !S.solved[id]) { location.hash = '#play/' + id; return; }
    var p = P[i], hints = lastHints !== null ? lastHints : S.solved[id].hints; lastHints = null;
    var pos = rpos(id), next = firstUnsolved(pos >= 0 ? pos + 1 : 0);
    var sub = p.partOf ? U.from + ' ' + p.partOf : (p.excerpt || '');
    app.innerHTML = '<div class="playhead"><a href="#poems">' + esc(U.allPoems) + '</a><span>' + (pos >= 0 ? esc(U.poem) + ' ' + (pos + 1) + ' ' + esc(U.of) + ' ' + S.round.length : '') + '</span></div>' +
      stageHTML(pick(C.pickr.win), false) +
      '<p class="kicker">' + esc(U.hintsUsed(hints)) + '</p>' +
      '<h1 class="ptitle">' + esc(p.title) + '</h1>' + (sub ? '<p class="partof">' + esc(sub) + '</p>' : '') +
      '<div class="poemtext">' + p.stanzas.map(function (s) { return '<p>' + s.map(lineHTML).join('<br>') + '</p>'; }).join('') + '</div>' +
      '<section class="card form"><h2>' + esc(U.form) + ': ' + esc(p.form) + '</h2>' +
      '<dl><dt>' + esc(U.scheme) + '</dt><dd>' + esc(p.scheme) + '</dd><dt>' + esc(U.metre) + '</dt><dd>' + esc(p.metre) + '</dd></dl>' +
      '<h3>' + esc(U.scansion) + '</h3><p class="scan">' + scanHTML(p.sample) + '</p><p class="small">' + esc(U.scansionNote) + '</p>' +
      '<h3>' + esc(U.how) + '</h3><p>' + esc(p.how) + '</p>' +
      '<h3>' + esc(U.character) + '</h3><p>' + esc(p.character) + '</p>' +
      '<h3>' + esc(U.use) + '</h3><p>' + esc(p.use) + '</p>' +
      '<h3>' + esc(U.inPoem) + '</h3><p>' + esc(p.poem) + '</p><p class="small"><a href="#guide">' + esc(C.guide.title) + '</a></p></section>' +
      '<div class="actions">' + (next ? '<a class="btn" href="#play/' + next.id + '">' + esc(U.next) + '</a>' : '<a class="btn" href="#poems">' + esc(U.roundDone) + '</a>') +
      '<a class="btn ghost" href="#play/' + p.id + '">' + esc(U.again) + '</a>' +
      '<a class="btn ghost" href="#poems">' + esc(U.allPoems) + '</a></div>';
    wireBot();
    var bot = document.getElementById('bot'); if (bot) bot.classList.add('joy');
    confetti();
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
          return '<a href="#' + (s ? 'done/' : 'play/') + q.id + '">' + (s ? esc(q.title) : esc(U.poem) + ' ' + (rpos(q.id) + 1)) + '</a>';
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
    else renderHome();
    app.focus({ preventScroll: true });
  }
  window.addEventListener('hashchange', route);
  route();
})();
