'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const path = require('node:path');
const { once } = require('node:events');

async function launch(t, host) {
  const env = { ...process.env, PORT: '0' };
  delete env.HOST;
  if (host) env.HOST = host;
  const child = spawn(process.execPath, [path.join(__dirname, '..', 'server.js')], {
    env, windowsHide: true, stdio: ['ignore', 'pipe', 'pipe']
  });
  t.after(async () => {
    if (child.exitCode !== null || child.signalCode !== null) return;
    const exited = once(child, 'exit');
    child.kill();
    await exited;
  });
  return new Promise((resolve, reject) => {
    let output = '', errors = '';
    const timeout = setTimeout(() => reject(new Error('Server did not start: ' + errors)), 8000);
    child.stderr.on('data', data => { errors += data; });
    child.on('error', error => { clearTimeout(timeout); reject(error); });
    child.on('exit', code => { clearTimeout(timeout); reject(new Error(`Server exited (${code}): ${errors}`)); });
    child.stdout.on('data', data => {
      output += data;
      const ready = output.match(/ready at http:\/\/([^:]+):(\d+)/);
      if (ready) {
        clearTimeout(timeout);
        resolve({ host: ready[1], base: `http://127.0.0.1:${ready[2]}` });
      }
    });
  });
}

test('local preview keeps its loopback default', async t => {
  const server = await launch(t);
  assert.equal(server.host, '127.0.0.1');
  const response = await fetch(server.base);
  assert.equal(response.status, 200);
  assert.match(await response.text(), /Style Club/);
});

test('every versioned page asset is served with its normal content type', async t => {
  const server = await launch(t);
  const page = await (await fetch(server.base)).text();
  const urls = [...page.matchAll(/(?:src|href)="([^"?#]+\.(?:js|css|svg)\?v=[a-f0-9]{16})"/g)].map(match => match[1]);
  assert.equal(urls.length, 7, 'all game scripts, styles, and the icon are versioned');
  for (const url of urls) {
    const response = await fetch(server.base + '/' + url);
    assert.equal(response.status, 200, url);
    const type = url.includes('.js?') ? 'text/javascript' : url.includes('.css?') ? 'text/css' : 'image/svg+xml';
    assert.ok(response.headers.get('content-type').startsWith(type), url);
    assert.ok((await response.text()).length > 0);
  }
});

test('container binding serves the complete game and keeps non-public files private', async t => {
  const server = await launch(t, '0.0.0.0');
  assert.equal(server.host, '0.0.0.0');
  for (const file of ['/', '/styles.css', '/world.css', '/game.js', '/art.js', '/app.js', '/scene3d.js', '/favicon.svg', '/vendor/THREE-LICENSE.txt']) {
    const response = await fetch(server.base + file);
    assert.equal(response.status, 200, file);
    assert.ok((await response.text()).length > 0, file);
    assert.equal(response.headers.get('x-content-type-options'), 'nosniff');
    assert.match(response.headers.get('content-security-policy'), /connect-src 'none'/);
  }
  const head = await fetch(server.base, { method: 'HEAD' });
  assert.equal(head.status, 200);
  assert.equal(await head.text(), '');
  for (const file of ['/server.js', '/Dockerfile', '/compose.yaml', '/.env', '/package.json', '/src/model3d.mjs', '/missing']) {
    const response = await fetch(server.base + file);
    assert.equal(response.status, 404, file);
    await response.text();
  }
  const post = await fetch(server.base, { method: 'POST', body: 'no writes' });
  assert.equal(post.status, 405);
  assert.equal(post.headers.get('allow'), 'GET, HEAD');
  await post.text();
});
