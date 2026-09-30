/**
 * Local photo labelling tool.
 *
 *   node scripts/label-photos.mjs        # then open http://localhost:4123
 *
 * Walks you through the photos in public/images/productimgs one at a time and
 * asks you to pick the product, colourway and view from dropdowns. It saves
 * progress as you go so you can stop and resume, and it will not rename
 * anything until you press the final button.
 *
 * The point of this tool is that you do the seeing. I cannot look at images, so
 * the human is the only one who can decide that a photograph is the Sky Wash
 * colourway rather than the Sage Field one.
 */

import { createServer } from 'node:http';
import { readFile, readdir, writeFile, rename, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.join(root, 'public', 'images', 'productimgs');
const MAP_TSV = path.join(root, 'data', 'photo-renames.tsv');
const PROGRESS = path.join(root, '.label-progress.json');
const PORT = Number(process.env.PORT ?? 4123);

const IMAGE_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.heic', '.avif']);
const VIEWS = ['drape', 'detail', 'flat'];

/* ------------------------------------------------------------------ *
 * Catalogue
 * ------------------------------------------------------------------ */

async function loadCatalogue() {
  const tsv = await readFile(MAP_TSV, 'utf8');
  const rows = tsv
    .split('\n')
    .slice(1)
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const [slug, colourway, base] = l.split('\t');
      return { slug, colourway, base };
    });

  const byProduct = new Map();
  for (const r of rows) {
    if (!byProduct.has(r.slug)) byProduct.set(r.slug, []);
    byProduct.get(r.slug).push({ colourway: r.colourway, base: r.base });
  }
  return { rows, products: [...byProduct.entries()].map(([slug, cws]) => ({ slug, cws })) };
}

async function loadPhotos() {
  const names = await readdir(SRC);
  return names
    .filter((n) => IMAGE_EXT.has(path.extname(n).toLowerCase()))
    .filter((n) => !n.includes('--')) // already named
    .sort();
}

/* ------------------------------------------------------------------ *
 * Progress
 * ------------------------------------------------------------------ */

async function loadProgress() {
  try {
    return JSON.parse(await readFile(PROGRESS, 'utf8'));
  } catch {
    return { done: {}, skipped: [] };
  }
}

async function saveProgress(p) {
  await writeFile(PROGRESS, JSON.stringify(p, null, 2));
}

/* ------------------------------------------------------------------ *
 * Rename
 * ------------------------------------------------------------------ */

async function applyRenames(progress, catalogue) {
  const validBases = new Set(catalogue.rows.map((r) => r.base));
  const applied = [];
  const problems = [];

  for (const [file, name] of Object.entries(progress.done)) {
    // Stored as "<product>--<colourway>--<view>", where only the first two
    // segments come from photo-renames.tsv and the last is the chosen view.
    const i = name.lastIndexOf('--');
    const base = i > 0 ? name.slice(0, i) : name;
    const view = i > 0 ? name.slice(i + 2) : '';

    if (!validBases.has(base)) {
      problems.push(`${file}: "${base}" is not a known colourway in photo-renames.tsv`);
      continue;
    }
    if (!VIEWS.includes(view)) {
      problems.push(`${file}: "${view}" is not one of ${VIEWS.join(' / ')}`);
      continue;
    }

    const ext = path.extname(file);
    const target = path.join(SRC, `${base}--${view}${ext}`);
    const source = path.join(SRC, file);

    try {
      await stat(source);
    } catch {
      problems.push(`${file}: source file is gone`);
      continue;
    }
    try {
      await rename(source, target);
      applied.push(`${file}  ->  ${path.basename(target)}`);
    } catch (e) {
      problems.push(`${file}: ${e.message}`);
    }
  }
  return { applied, problems };
}

/* ------------------------------------------------------------------ *
 * Server
 * ------------------------------------------------------------------ */

const json = (res, code, body) => {
  res.writeHead(code, { 'content-type': 'application/json' });
  res.end(JSON.stringify(body));
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  try {
    if (url.pathname === '/api/state') {
      const [catalogue, photos] = await Promise.all([loadCatalogue(), loadPhotos()]);
      return json(res, 200, {
        catalogue,
        photos,
        progress: await loadProgress(),
      });
    }

    if (url.pathname === '/api/progress' && req.method === 'POST') {
      const body = await readBody(req);
      const progress = await loadProgress();
      progress.done = body.done ?? {};
      progress.skipped = body.skipped ?? [];
      await saveProgress(progress);
      return json(res, 200, { ok: true, labelled: Object.keys(progress.done).length });
    }

    if (url.pathname === '/api/reset' && req.method === 'POST') {
      await writeFile(PROGRESS, JSON.stringify({ done: {}, skipped: [] }, null, 2));
      return json(res, 200, { ok: true });
    }

    if (url.pathname === '/api/apply' && req.method === 'POST') {
      const catalogue = await loadCatalogue();
      const progress = await loadProgress();
      const result = await applyRenames(progress, catalogue);
      if (!result.problems.length) await writeFile(PROGRESS, JSON.stringify({ done: {}, skipped: [] }, null, 2));
      return json(res, 200, result);
    }

    // Serve a photo. Guarded so the tool cannot read outside the folder.
    if (url.pathname.startsWith('/photo/')) {
      const name = decodeURIComponent(url.pathname.slice('/photo/'.length));
      if (name.includes('/') || name.includes('..')) {
        res.writeHead(400);
        return res.end('bad name');
      }
      try {
        const buf = await readFile(path.join(SRC, name));
        res.writeHead(200, { 'content-type': 'image/jpeg' });
        return res.end(buf);
      } catch {
        res.writeHead(404);
        return res.end('not found');
      }
    }

    if (url.pathname === '/') {
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
      return res.end(PAGE);
    }

    res.writeHead(404);
    res.end('not found');
  } catch (e) {
    json(res, 500, { error: e.message });
  }
});

function readBody(req) {
  return new Promise((resolve, reject) => {
    let d = '';
    req.on('data', (c) => (d += c));
    req.on('end', () => {
      try {
        resolve(JSON.parse(d || '{}'));
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

const PAGE = `<!doctype html>
<html><head><meta charset="utf-8"><title>Label AMARTQ photos</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body { margin:0; font:15px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
         background:#f6f5f2; color:#0b2545; }
  header { padding:18px 24px; border-bottom:1px solid #e2ded4; background:#fff;
           display:flex; gap:18px; align-items:center; flex-wrap:wrap; }
  h1 { font-size:16px; margin:0; letter-spacing:.02em; }
  .muted { color:#6b7280; font-size:13px; }
  main { display:grid; grid-template-columns: 1fr 320px; gap:24px; padding:24px;
         align-items:start; max-width:1200px; margin:0 auto; }
  .stage { background:#fff; border:1px solid #e2ded4; border-radius:10px;
           padding:16px; display:grid; place-items:center; min-height:420px; }
  .stage img { max-width:100%; max-height:62vh; display:block; border-radius:6px; }
  .panel { background:#fff; border:1px solid #e2ded4; border-radius:10px; padding:18px; }
  label { display:block; font-size:12px; text-transform:uppercase; letter-spacing:.06em;
          color:#6b7280; margin:14px 0 6px; }
  select { width:100%; padding:9px; border:1px solid #cfcabd; border-radius:6px;
           font:inherit; background:#fff; }
  .views { display:flex; gap:8px; }
  .views button { flex:1; padding:9px; border:1px solid #cfcabd; background:#fff;
                  border-radius:6px; cursor:pointer; font:inherit; }
  .views button[aria-pressed="true"] { background:#0b2545; color:#fff; border-color:#0b2545; }
  .row { display:flex; gap:10px; margin-top:18px; }
  button.primary { flex:1; padding:12px; background:#c2410c; color:#fff; border:0;
                   border-radius:6px; cursor:pointer; font:inherit; font-weight:600; }
  button.ghost { padding:12px 16px; background:#fff; border:1px solid #cfcabd;
                 border-radius:6px; cursor:pointer; font:inherit; }
  .preview { margin-top:10px; font-size:12px; color:#6b7280; word-break:break-all; }
  .done { padding:40px; text-align:center; }
  pre { text-align:left; background:#0b2545; color:#e6f0ff; padding:16px; border-radius:8px;
        overflow:auto; font-size:12px; }
  .bad { color:#b91c1c; }
  .ok { color:#15803d; }
</style></head>
<body>
<header>
  <h1>Label AMARTQ photos</h1>
  <span class="muted" id="progress"></span>
  <span style="flex:1"></span>
  <button class="ghost" id="reset">Start over</button>
</header>
<main id="main"></main>
<script>
let CAT, PHOTOS, DONE, SKIPPED, IDX = 0;

const el = (t, a = {}, ...kids) => {
  const n = Object.assign(document.createElement(t), a);
  kids.flat().forEach(k => n.append(k));
  return n;
};
const save = () => fetch('/api/progress', {
  method:'POST', headers:{'content-type':'application/json'},
  body: JSON.stringify({ done: DONE, skipped: SKIPPED })
});

async function boot() {
  const s = await (await fetch('/api/state')).json();
  CAT = s.catalogue; PHOTOS = s.photos; DONE = s.progress.done; SKIPPED = s.progress.skipped;
  IDX = Math.max(0, PHOTOS.findIndex(p => !DONE[p] && !SKIPPED.includes(p)));
  render();
}

function render() {
  const main = document.getElementById('main');
  main.innerHTML = '';
  const todo = PHOTOS.filter(p => !DONE[p] && !SKIPPED.includes(p));
  document.getElementById('progress').textContent =
    Object.keys(DONE).length + ' labelled  |  ' + SKIPPED.length + ' skipped  |  ' +
    todo.length + ' to go';

  if (!todo.length) { main.append(finish()); return; }
  const file = todo[0];
  const cur = DONE[file] ? DONE[file] : (SKIPPED.includes(file) ? 'SKIP' : '');

  const stage = el('div', { className:'stage' },
    el('img', { src:'/photo/' + encodeURIComponent(file), alt:file }));

  const pSel = el('select', { id:'p' });
  pSel.append(el('option', { value:'' }, 'Choose a product...'));
  for (const p of CAT.products) pSel.append(el('option', { value:p.slug }, p.slug));

  const cSel = el('select', { id:'c' });
  const fillColourways = () => {
    cSel.innerHTML = '';
    cSel.append(el('option', { value:'' }, 'Choose a colourway...'));
    const p = CAT.products.find(x => x.slug === pSel.value);
    if (p) for (const c of p.cws) cSel.append(el('option', { value:c.base }, c.colourway));
  };
  fillColourways();
  pSel.onchange = fillColourways;

  const vRow = el('div', { className:'views' });
  let view = '';
  for (const v of VIEWS) {
    const b = el('button', { type:'button' }, v);
    b.onclick = () => { view = v; paintViews(); };
    b.dataset.v = v;
    vRow.append(b);
  }
  const paintViews = () => {
    for (const b of vRow.children) b.setAttribute('aria-pressed', String(b.dataset.v === view));
  };

  if (cur && cur !== 'SKIP') {
    const [pslug, ...rest] = cur.split('--');
    pSel.value = pslug;
    fillColourways();
    cSel.value = cur;
    view = (cur.split('--')[2] || '');
    paintViews();
  }
  if (cur === 'SKIP') paintViews();

  const preview = el('div', { className:'preview' });
  const setPreview = () => {
    preview.textContent = cSel.value && view ? cSel.value + '--' + view + '.jpg' : '';
  };
  cSel.onchange = setPreview;

  const commit = async (skip) => {
    if (skip) { SKIPPED = [...new Set([...SKIPPED, file])]; }
    else if (cSel.value && view) { DONE[file] = cSel.value + '--' + view; }
    else { return; }
    await save();
    IDX++; render();
  };

  main.append(stage, el('div', { className:'panel' },
    el('label', {}, 'File'), el('div', { className:'muted' }, file),
    el('label', {}, 'Product'), pSel,
    el('label', {}, 'Colourway'), cSel,
    el('label', {}, 'View'), vRow,
    preview,
    el('div', { className:'row' },
      el('button', { className:'primary', onclick:() => commit(false) }, 'Save & next'),
      el('button', { className:'ghost', onclick:() => commit(true) }, 'Skip')),
    el('div', { className:'row' },
      el('button', { className:'ghost', onclick: async () => {
        const p = Object.fromEntries(Object.entries(DONE).reverse());
        localStorage.setItem('amartq.apply', JSON.stringify(p));
        alert('Ready to rename. Run:  node scripts/apply-labels.mjs');
      } }, 'I am done'))));
  setPreview();
}

function finish() {
  return el('div', { className:'panel done', style:'grid-column:1/-1' },
    el('h2', {}, 'All photos labelled'),
    el('p', { className:'muted' },
      'Press the button to rename the files on disk. Nothing has been changed yet.'),
    el('button', { className:'primary', style:'max-width:320px;margin:0 auto',
      onclick: async () => {
        const r = await (await fetch('/api/apply', { method:'POST' })).json();
        const out = el('div');
        if (r.problems.length) {
          out.append(el('h3', { className:'bad' }, 'Problems'));
          out.append(el('pre', {}, r.problems.join('\\n')));
        }
        out.append(el('h3', { className:'ok' }, 'Renamed ' + r.applied.length));
        out.append(el('pre', {}, r.applied.join('\\n')));
        document.getElementById('main').innerHTML = '';
        document.getElementById('main').append(out);
      } }, 'Rename files now'));
}

document.getElementById('reset').onclick = async () => {
  await fetch('/api/reset', { method:'POST' });
  location.reload();
};

boot();
</script></body></html>`;

server.listen(PORT, async () => {
  const photos = await loadPhotos();
  const { rows } = await loadCatalogue();
  console.log(`\n  Labelling tool running at http://localhost:${PORT}\n`);
  console.log(`  ${photos.length} photo(s) still to name`);
  console.log(`  ${rows.length} product/colourway combinations available\n`);
  console.log('  Nothing is renamed until you press the final button.\n');
});
