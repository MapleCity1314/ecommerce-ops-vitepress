import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const docsDir = path.join(root, 'docs');
const manifestFile = path.join(docsDir, '.vitepress', 'theme', 'data', 'generated-manifest.json');
const mojibakePattern = /(?:涓|銆|鈥|鍥|绋|瀵|骞|鏂|�)/;

async function exists(file) {
  try {
    await fs.access(file);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await exists(manifestFile))) {
    throw new Error('Missing generated manifest. Run pnpm prepare:docs first.');
  }

  const manifest = JSON.parse(await fs.readFile(manifestFile, 'utf8'));
  const failures = [];

  for (const mod of manifest.modules) {
    const mdFile = path.join(docsDir, `${mod.route.slice(1)}.md`);
    if (!(await exists(mdFile))) {
      failures.push(`Missing page: ${mod.route}`);
      continue;
    }
    const markdown = await fs.readFile(mdFile, 'utf8');
    if (mojibakePattern.test(markdown)) {
      failures.push(`Potential mojibake in ${mod.route}`);
    }
    if (/\]\(\s*\)/.test(markdown) || /\.\/index/.test(markdown)) {
      failures.push(`Potential dead empty link in ${mod.route}`);
    }
    for (const match of markdown.matchAll(/!\[[^\]]*\]\(((?:\.\.\/\.\.\/)?\/?assets\/[^)]+)\)/g)) {
      const assetPath = path.join(docsDir, 'public', match[1].replace(/^(\.\.\/\.\.\/)+/, '').replace(/^\/+/, ''));
      if (!(await exists(assetPath))) {
        failures.push(`Missing image asset in ${mod.route}: ${match[1]}`);
      }
    }
  }

  if (failures.length) {
    console.error(failures.join('\n'));
    process.exit(1);
  }

  console.log(`Docs check passed: ${manifest.modules.length} pages.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
