import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../.vercel/output', import.meta.url));

function walk(dir, files = []) {
  if (!existsSync(dir)) return files;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

if (!existsSync(root)) {
  process.exit(0);
}

for (const file of walk(root)) {
  if (!file.endsWith('.vc-config.json')) continue;
  const raw = readFileSync(file, 'utf8');
  const next = raw.replaceAll('nodejs18.x', 'nodejs24.x').replaceAll('nodejs20.x', 'nodejs24.x');
  if (next !== raw) writeFileSync(file, next);
}
