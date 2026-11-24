// Checks every story file for mistakes in its shape (not its facts).
// Run:  node tools/check-content.mjs
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const js = join(root, 'js');

// Load in the same order as index.html
const html = readFileSync(join(root, 'index.html'), 'utf8');
const listed = [...html.matchAll(/src="js\/(story-[^"]+\.js)"/g)].map(m => m[1]);
const onDisk = readdirSync(js).filter(f => /^story-.*\.js$/.test(f));
const order = [...listed, ...onDisk.filter(f => !listed.includes(f))];

// In a browser, `window` is the global object, so `window.BBB` and `BBB` are the same thing.
const window = { console, setTimeout, clearTimeout };
window.window = window;
const ctx = vm.createContext(window);
const errors = [], warnings = [];
for (const f of order) {
  if (!listed.includes(f)) warnings.push(`${f} is not loaded by index.html yet`);
  try { vm.runInContext(readFileSync(join(js, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { errors.push(`${f}: ${e.message}`); }
}
for (const f of ['toys.js', 'toys-more.js']) {
  if (!existsSync(join(js, f))) continue;
  try { vm.runInContext(readFileSync(join(js, f), 'utf8'), ctx, { filename: f }); }
  catch (e) { errors.push(`${f}: ${e.message}`); }
}

const B = window.BBB || {};
const chars = B.characters || {}, tracks = B.tracks || {}, toys = B.toys || {};
const ids = new Set();
const perTrack = {};
const BLOCKS = ['h', 'p', 'ul', 'ol', 'table', 'tip', 'warn'];

for (const c of B.chapters || []) {
  const where = c.id || '(chapter with no id)';
  const err = m => errors.push(`${where}: ${m}`);
  if (!c.id) err('missing id');
  if (ids.has(c.id)) err('duplicate id');
  ids.add(c.id);
  if (!tracks[c.track]) err(`unknown track "${c.track}"`);
  perTrack[c.track] = (perTrack[c.track] || 0) + 1;
  for (const k of ['title', 'topic']) if (typeof c[k] !== 'string' || !c[k]) err(`missing ${k}`);
  if (typeof c.minutes !== 'number') err('minutes must be a number');
  if (!Array.isArray(c.story) || !c.story.length) err('story missing');
  else c.story.forEach((l, i) => {
    if (!Array.isArray(l) || l.length !== 2) err(`story line ${i + 1} must be [who, text]`);
    else if (l[0] !== 'n' && !chars[l[0]]) err(`story line ${i + 1}: unknown speaker "${l[0]}"`);
  });
  if (!Array.isArray(c.learn) || !c.learn.length) err('learn missing');
  else c.learn.forEach((b, i) => {
    const keys = Object.keys(b);
    if (keys.length !== 1 || !BLOCKS.includes(keys[0])) err(`learn block ${i + 1} must have exactly one of ${BLOCKS.join(', ')}`);
    if (b.table) {
      const n = (b.table.head || []).length;
      if (!n) err(`learn block ${i + 1}: table has no head`);
      (b.table.rows || []).forEach((r, j) => { if (r.length !== n) err(`learn block ${i + 1}: table row ${j + 1} has ${r.length} cells, head has ${n}`); });
    }
  });
  if (c.analogy) {
    if (!c.analogy.title || !c.analogy.text) err('analogy needs title and text');
    if (!Array.isArray(c.analogy.map) || c.analogy.map.some(r => r.length !== 2)) err('analogy.map rows must be [everyday, technical]');
  }
  if (c.diagram) {
    const d = c.diagram;
    if (!d.flow && !d.stack) err('diagram needs flow or stack');
    if (d.flow && d.flow.length > 6) warnings.push(`${where}: flow has ${d.flow.length} boxes (5 or fewer look best)`);
    (d.flow || d.stack || []).forEach((s, i) => { if (!s.t || !s.s) err(`diagram item ${i + 1} needs t and s`); });
  }
  if (c.toy && !toys[c.toy]) warnings.push(`${where}: toy "${c.toy}" is not built yet`);
  if (!Array.isArray(c.words) || !c.words.length) err('words missing');
  else c.words.forEach((w, i) => { if (!Array.isArray(w) || w.length !== 2) err(`word ${i + 1} must be [term, meaning]`); });
  if (!Array.isArray(c.quiz) || !c.quiz.length) err('quiz missing');
  else c.quiz.forEach((q, i) => {
    if (!q.q || !Array.isArray(q.a) || q.a.length < 2) err(`quiz ${i + 1}: needs q and at least 2 answers`);
    else if (!(q.c >= 0 && q.c < q.a.length)) err(`quiz ${i + 1}: c=${q.c} is not a valid answer index`);
    if (!q.why) err(`quiz ${i + 1}: missing why`);
  });
}

for (const t of B.trackOrder || []) if (!tracks[t]) errors.push(`trackOrder lists unknown track "${t}"`);

console.log('Chapters per part:');
for (const t of B.trackOrder || Object.keys(tracks)) console.log(`  ${(tracks[t] || {}).part || '?'}  ${t.padEnd(12)} ${perTrack[t] || 0}`);
console.log(`Total: ${ids.size} chapters`);
if (warnings.length) { console.log('\nWarnings:'); warnings.forEach(w => console.log('  - ' + w)); }
if (errors.length) { console.log('\nERRORS:'); errors.forEach(e => console.log('  x ' + e)); process.exit(1); }
console.log('\nNo errors.');
