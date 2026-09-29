import { build } from 'esbuild';
import { copyFile, mkdir } from 'node:fs/promises';
await mkdir('vendor', { recursive: true });
await build({ entryPoints: ['src/scene3d.mjs'], bundle: true, format: 'iife', globalName: 'Style3D', outfile: 'scene3d.js', minify: true, target: ['es2020'], legalComments: 'eof' });
await copyFile('node_modules/three/LICENSE', 'vendor/THREE-LICENSE.txt');
console.log('Built the offline 3D game.');
