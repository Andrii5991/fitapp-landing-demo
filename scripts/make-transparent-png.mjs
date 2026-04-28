/**
 * Remove iOS Simulator black letterboxing by flood-filling from image edges
 * through near-black pixels (RGB max <= threshold) and setting them transparent.
 * Does not remove in-app blacks that are not connected to the outer frame.
 */
import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, '../public/screenshots');

const FILES = ['training-day.png', 'new-training.png', 'add-exercise.png'];

/** Pixels at or below this level are treated as removable chrome (letterbox). */
const CHROME_MAX = 26;

function isChrome(r, g, b) {
  return r <= CHROME_MAX && g <= CHROME_MAX && b <= CHROME_MAX;
}

async function processFile(name) {
  const inputPath = path.join(dir, name);
  const img = sharp(inputPath).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const stride = 4;
  const len = w * h;
  const visited = new Uint8Array(len);
  const queue = [];

  const idx = (x, y) => y * w + x;
  const pxAt = (i) => {
    const o = i * stride;
    return [data[o], data[o + 1], data[o + 2]];
  };

  function tryPush(x, y) {
    if (x < 0 || x >= w || y < 0 || y >= h) return;
    const i = idx(x, y);
    if (visited[i]) return;
    const [r, g, b] = pxAt(i);
    if (!isChrome(r, g, b)) return;
    visited[i] = 1;
    queue.push(x, y);
  }

  for (let x = 0; x < w; x++) {
    tryPush(x, 0);
    tryPush(x, h - 1);
  }
  for (let y = 0; y < h; y++) {
    tryPush(0, y);
    tryPush(w - 1, y);
  }

  let qi = 0;
  while (qi < queue.length) {
    const x = queue[qi++];
    const y = queue[qi++];
    tryPush(x - 1, y);
    tryPush(x + 1, y);
    tryPush(x, y - 1);
    tryPush(x, y + 1);
  }

  const out = Buffer.from(data);
  for (let i = 0; i < len; i++) {
    if (visited[i]) {
      out[i * stride + 3] = 0;
    }
  }

  const outPath = path.join(dir, name);
  await sharp(out, { raw: { width: w, height: h, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(outPath);

  console.log('OK', name, '→ transparent letterbox removed');
}

for (const f of FILES) {
  await processFile(f);
}
