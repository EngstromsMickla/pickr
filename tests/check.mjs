// Kontroller före publicering av pickr.mickla.se. Körs i GitHub Actions; stoppar publiceringen vid fel.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import vm from 'node:vm';

const errors = [];
const fail = (m) => errors.push(m);

// 1. Inga externa resurser: inga skript, typsnitt, stilmallar, bilder eller anrop från andra domäner.
function walk(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    if (f.startsWith('.') || f === 'tests' || f === 'node_modules') return [];
    return statSync(p).isDirectory() ? walk(p) : [p];
  });
}
for (const f of walk('.').filter((f) => /\.(html|css|js)$/.test(f))) {
  const s = readFileSync(f, 'utf8');
  if (/<(script|link|img|iframe|source|video|audio)[^>]+(src|href)=["']?(https?:)?\/\//i.test(s)) fail(`${f}: extern resurs i HTML`);
  if (/url\(\s*["']?(https?:)?\/\//i.test(s)) fail(`${f}: extern url() i CSS`);
  if (/\b(fetch|XMLHttpRequest|sendBeacon|WebSocket|importScripts)\s*\(/.test(s)) fail(`${f}: nätverksanrop`);
  if (/@import/.test(s)) fail(`${f}: @import`);
  if (/\beval\s*\(|new Function\s*\(/.test(s)) fail(`${f}: eval`);
}

// 2. Innehållet: tjugo dikter, rätt antal markeringar, alla fält ifyllda, inga tankstreck i Claudes texter.
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(readFileSync('js/content.js', 'utf8'), ctx);
vm.runInContext(readFileSync('js/poems.js', 'utf8'), ctx);
const P = ctx.window.PICKR_POEMS, C = ctx.window.PICKR;
if (!Array.isArray(P) || P.length !== 60) fail('Det ska finnas 60 dikter');
for (const lv of ['easy', 'medium', 'hard']) if ((P || []).filter((p) => p.level === lv).length < C.round[lv]) fail(`För få dikter i nivån ${lv}`);
const ids = new Set();
const dash = /[–—]/;
for (const p of P || []) {
  if (ids.has(p.id)) fail(`Dubblett: ${p.id}`); ids.add(p.id);
  const n = p.stanzas.reduce((a, s) => a + s.length, 0);
  if (p.marks.length !== n) fail(`${p.id}: ${p.marks.length} markeringar men ${n} rader`);
  for (const k of ['title', 'level', 'form', 'scheme', 'metre', 'sample', 'how', 'character', 'use', 'poem', 'markLabel']) {
    if (!p[k]) fail(`${p.id}: saknar ${k}`);
  }
  if (!C.ui.hintMarks[p.markLabel]) fail(`${p.id}: okänd markLabel ${p.markLabel}`);
  if (!['easy', 'medium', 'hard'].includes(p.level)) fail(`${p.id}: okänd nivå`);
  // Claudes texter får inte ha tankstreck. Dikterna och Dans titlar lämnas orörda.
  for (const k of ['form', 'scheme', 'metre', 'sample', 'how', 'character', 'use', 'poem', 'excerpt']) {
    if (p[k] && dash.test(p[k])) fail(`${p.id}.${k}: tankstreck`);
  }
  if (!/\[[^\]]+\]/.test(p.sample)) fail(`${p.id}: exempelraden saknar betoningar`);
}
const siteText = JSON.stringify(C, (k, v) => (typeof v === 'function' ? v.toString() : v));
if (dash.test(siteText)) fail('content.js: tankstreck i webbplatsens texter');

if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log('Alla kontroller gick igenom.');
