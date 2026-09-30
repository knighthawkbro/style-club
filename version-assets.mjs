import { createHash } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const assetLink = /\b(src|href)=(["'])((?:[\w.-]+\/)*[\w.-]+\.(?:css|js|svg))(?:\?[^"']*)?\2/g;

export function assetVersion(source) {
  // Git may change line endings between the development PC and Docker host.
  return createHash('sha256').update(String(source).replace(/\r\n?/g, '\n')).digest('hex').slice(0, 16);
}

export function versionAssetLinks(html, assets) {
  return html.replace(assetLink, (match, attribute, quote, file) => {
    if (!assets.has(file)) throw new Error(`Missing game asset: ${file}`);
    return `${attribute}=${quote}${file}?v=${assetVersion(assets.get(file))}${quote}`;
  });
}

export async function versionAssets(directory = dirname(fileURLToPath(import.meta.url))) {
  const page = resolve(directory, 'index.html'), html = await readFile(page, 'utf8');
  const files = [...new Set([...html.matchAll(assetLink)].map(match => match[3]))];
  const assets = new Map(await Promise.all(files.map(async file => [file, await readFile(resolve(directory, file), 'utf8')])));
  const updated = versionAssetLinks(html, assets);
  if (updated !== html) await writeFile(page, updated);
  return files.length;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  console.log(`Versioned ${await versionAssets()} game assets.`);
}
