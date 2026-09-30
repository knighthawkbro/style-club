import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, writeFile, rm, rmdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { assetVersion, versionAssetLinks, versionAssets } from '../version-assets.mjs';

test('an update requests fresh scripts and styles instead of cached older files', () => {
  const page = '<link href="world.css"><script src="app.js"></script><script src="game.js"></script>';
  const before = new Map([['world.css', '.old-rack {}'], ['app.js', 'oldButton.addEventListener()'], ['game.js', 'catalog']]);
  const oldPage = versionAssetLinks(page, before);
  const cachedUrls = [...oldPage.matchAll(/(?:src|href)="([^"]+)"/g)].map(match => match[1]);
  const after = new Map(before).set('world.css', '.mall {}').set('app.js', 'startMall()');
  const newPage = versionAssetLinks(oldPage, after);
  const nextUrls = [...newPage.matchAll(/(?:src|href)="([^"]+)"/g)].map(match => match[1]);
  assert.notEqual(nextUrls[0], cachedUrls[0], 'new styles bypass the old cache entry');
  assert.notEqual(nextUrls[1], cachedUrls[1], 'new startup code bypasses the old cache entry');
  assert.equal(nextUrls[2], cachedUrls[2], 'identical files keep a stable URL');
  assert.equal(versionAssetLinks(newPage, after), newPage, 'rebuilding never accumulates query strings');
  assert.equal(assetVersion('one\r\ntwo\r\n'), assetVersion('one\ntwo\n'));
});

test('versioning keeps navigation and outside URLs unchanged and rejects missing assets', () => {
  const page = '<a href="#wardrobe">Go</a><link href="https://example.com/external.css"><img src="data:image/svg+xml,test"><script src="app.js?v=old"></script>';
  const result = versionAssetLinks(page, new Map([['app.js', 'current']]));
  assert.ok(result.startsWith(page.slice(0, page.indexOf('<script'))));
  assert.doesNotMatch(result, /v=old/);
  assert.throws(() => versionAssetLinks(page, new Map()), /Missing game asset: app.js/);
});

test('Docker-style asset stamping reads the files being shipped, without build dependencies', async t => {
  const directory = await mkdtemp(join(tmpdir(), 'style-club-assets-'));
  t.after(async () => {
    for (const file of ['index.html', 'app.js']) await rm(join(directory, file), { force: true });
    await rmdir(directory);
  });
  await writeFile(join(directory, 'index.html'), '<script src="app.js?v=old"></script>');
  await writeFile(join(directory, 'app.js'), 'first release');
  await versionAssets(directory);
  const before = await readFile(join(directory, 'index.html'), 'utf8');
  await writeFile(join(directory, 'app.js'), 'new release');
  await versionAssets(directory);
  const after = await readFile(join(directory, 'index.html'), 'utf8');
  assert.notEqual(after, before);
  assert.ok(after.includes(assetVersion('new release')));
});
