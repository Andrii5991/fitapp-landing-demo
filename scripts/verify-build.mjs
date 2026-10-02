import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../.vercel/output/static/', import.meta.url));

function walk(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

const required = [
  'en/guides/how-to-log-workouts/index.html',
  'en/guides/track-workout-progress/index.html',
  'en/compare/workout-log-vs-notes/index.html',
  'en/what-is-pushlab/index.html',
  'en/blog/index.html',
  'en/blog/why-a-workout-log-beats-memory/index.html',
  'en/blog/rss.xml',
  'llms.txt',
];

const missing = required.filter((rel) => !existsSync(join(dist, rel)));
if (missing.length) {
  console.error('Missing build outputs:\n' + missing.map((item) => `  ${item}`).join('\n'));
  process.exit(1);
}

const htmlFiles = walk(dist).filter((file) => file.endsWith('.html'));
const articleFiles = [
  'en/guides/how-to-log-workouts/index.html',
  'en/guides/track-workout-progress/index.html',
  'en/compare/workout-log-vs-notes/index.html',
  'en/blog/why-a-workout-log-beats-memory/index.html',
].map((rel) => join(dist, rel));

for (const file of articleFiles) {
  const html = readFileSync(file, 'utf8');
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (blocks.length === 0) {
    console.error(`No JSON-LD in ${file}`);
    process.exit(1);
  }
  const types = blocks.map((block) => {
    const json = JSON.parse(block[1]);
    return json['@type'];
  });
  if (!types.some((type) => type === 'Article' || type === 'BlogPosting')) {
    console.error(`Missing Article/BlogPosting JSON-LD in ${file}: ${types.join(', ')}`);
    process.exit(1);
  }
}

const forbidden = ['href="#"', 'href="/#"'];
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  for (const needle of forbidden) {
    if (html.includes(needle)) {
      console.error(`Dead CTA ${needle} in ${file}`);
      process.exit(1);
    }
  }
}

const draftPath = join(dist, 'en/blog/example-draft/index.html');
if (existsSync(draftPath)) {
  console.error('Draft article was published');
  process.exit(1);
}

const llms = readFileSync(join(dist, 'llms.txt'), 'utf8');
const rss = readFileSync(join(dist, 'en/blog/rss.xml'), 'utf8');
if (llms.includes('example-draft') || rss.includes('example-draft')) {
  console.error('Draft article leaked into llms.txt or RSS');
  process.exit(1);
}

console.log('verify-build: ok');
