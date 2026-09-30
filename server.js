'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = __dirname;
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || '127.0.0.1';
const publicFiles = new Set(['index.html', 'styles.css', 'world.css', 'game.js', 'art.js', 'scene3d.js', 'app.js', 'favicon.svg', 'vendor/THREE-LICENSE.txt']);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') { res.writeHead(405, { Allow: 'GET, HEAD' }); return res.end(); }
  let file;
  try { file = decodeURIComponent(new URL(req.url, 'http://localhost').pathname).slice(1) || 'index.html'; }
  catch { res.writeHead(400); return res.end('Bad request'); }
  if (!publicFiles.has(file)) { res.writeHead(404); return res.end('Not found'); }
  fs.readFile(path.join(root, file), (error, data) => {
    if (error) { res.writeHead(500); return res.end('Unable to read file'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store', 'CDN-Cache-Control': 'no-store', 'Cloudflare-CDN-Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'none'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'" });
    res.end(req.method === 'HEAD' ? undefined : data);
  });
});
server.on('error', (error) => { console.error(error.code === 'EADDRINUSE' ? `Port ${port} is in use. Set PORT to another port and try again.` : error.message); process.exitCode = 1; });
server.listen(port, host, () => {
  const displayHost = host.includes(':') ? `[${host}]` : host;
  console.log(`Style Club is ready at http://${displayHost}:${server.address().port}`);
});
