'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const G = require('../game.js');
const A = require('../art.js');

function assertPlayable(outfit) {
  assert.ok(outfit.dress ? !outfit.top && !outfit.bottom : outfit.top && outfit.bottom, 'an outfit must have a dress or complete separates');
  assert.ok(outfit.shoes);
  assert.equal(G.byId[outfit.hair].category, 'hair');
  assert.equal(G.byId[outfit.makeup].category, 'makeup');
  for (const p of G.worn(outfit)) { assert.ok(G.byId[p.id]); assert.ok(G.COLORS.some(c => c.hex === p.color)); }
  for (const [slot, p] of Object.entries(outfit.extras)) if (p) assert.equal(G.byId[p.id].slot, slot);
}

test('every possible sequential pair of wardrobe choices stays clothed and valid', () => {
  for (const first of G.ITEMS) for (const second of G.ITEMS) {
    const before = G.defaultOutfit(), original = G.clone(before);
    assertPlayable(G.equip(G.equip(before, first.id), second.id));
    assert.deepEqual(before, original, 'equipping must preserve the undo snapshot');
  }
});

test('separates replace a dress, and a new dress removes both separates', () => {
  let outfit = G.equip(G.defaultOutfit(), 'sweater');
  assert.equal(outfit.dress, null); assert.equal(outfit.top.id, 'sweater'); assert.ok(outfit.bottom);
  outfit = G.equip(outfit, 'jeans'); assert.equal(outfit.top.id, 'sweater'); assert.equal(outfit.bottom.id, 'jeans');
  outfit = G.equip(outfit, 'cloud'); assert.equal(outfit.dress.id, 'cloud'); assert.equal(outfit.top, null); assert.equal(outfit.bottom, null);
});

test('accessories coexist by slot, replace within a slot, and toggle off', () => {
  let outfit = G.equip(G.defaultOutfit(), 'wings');
  outfit = G.equip(outfit, 'bag'); outfit = G.equip(outfit, 'pearls'); outfit = G.equip(outfit, 'tiara');
  assert.deepEqual(Object.values(outfit.extras).map(p => p.id), ['tiara', 'bag', 'pearls', 'wings']);
  outfit = G.equip(outfit, 'tiara'); assert.equal(outfit.extras.head, null); assert.equal(outfit.extras.back.id, 'wings');
});

test('colors affect only the selected piece and survive selecting it again', () => {
  const original = G.defaultOutfit();
  let outfit = G.recolor(original, 'petal', '#8eafd1');
  assert.equal(outfit.dress.color, '#8eafd1'); assert.equal(original.dress.color, '#db91a5');
  assert.deepEqual(outfit.shoes, original.shoes);
  outfit = G.equip(outfit, 'petal'); assert.equal(outfit.dress.color, '#8eafd1');
  assert.deepEqual(G.recolor(outfit, 'cloud', '#bda5d8'), outfit, 'an unworn item cannot be recolored');
  assert.deepEqual(G.recolor(outfit, 'petal', 'url(https://example.com)'), outfit);
});

test('unknown and prototype-like item IDs cannot enter outfit state', () => {
  for (const id of ['missing', '__proto__', 'constructor', 'toString']) {
    const outfit = G.defaultOutfit();
    assert.deepEqual(G.equip(outfit, id), outfit); assert.deepEqual(G.recolor(outfit, id, '#8eafd1'), outfit);
  }
});

test('random looks preserve skin tone and always form a complete outfit', () => {
  let seed = 23;
  const random = () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296);
  const outfit = G.defaultOutfit(); outfit.skin = '#65402f';
  const signatures = new Set();
  for (let i = 0; i < 200; i++) { const next = G.randomOutfit(outfit, random); assertPlayable(next); assert.equal(next.skin, outfit.skin); signatures.add(JSON.stringify(next)); }
  assert.ok(signatures.size > 180);
});

test('stars reward themes without judging skin tone or hairstyle', () => {
  const outfit = G.defaultOutfit();
  for (const theme of G.THEMES) {
    const expected = G.score(outfit, theme.id);
    assert.ok(expected.stars >= 3 && expected.stars <= 5);
    for (const skin of G.SKIN_TONES) for (const hair of G.ITEMS.filter(i => i.category === 'hair')) {
      assert.deepEqual(G.score({ ...outfit, skin: skin.hex, hair: hair.id, hairColor: '#a58ebd' }, theme.id), expected);
    }
  }
  assert.equal(G.score(outfit, 'garden').stars, 5);
  let casual = G.equip(G.equip(G.equip(outfit, 'tee'), 'shorts'), 'sneakers');
  casual = G.equip(casual, 'hair-bow');
  assert.equal(G.score(casual, 'starlight').stars, 3);
});

test('corrupt or older saved outfits recover to playable, whitelisted values', () => {
  for (const raw of [null, undefined, 5, {}, { extras: {} }, { dress: { id: 'jeans' }, shoes: { id: '__proto__' }, hair: 'nope', skin: '<script>', extras: { head: { id: 'wings' } } }]) assertPlayable(G.sanitizeOutfit(raw));
  const raw = G.defaultOutfit(); raw.dress.color = 'red" onload="alert(1)'; raw.top = { id: 'tee', color: '#edcc82' };
  const recovered = G.sanitizeOutfit(raw); assert.equal(recovered.dress.color, '#db91a5'); assert.equal(recovered.top, null);
});

test('saved look validation handles duplicates, malformed data and storage limits', () => {
  const look = { id: 'look-1', name: 'A'.repeat(90), outfit: G.defaultOutfit(), themeId: 'bogus', date: 'invalid' };
  const output = G.sanitizeLooks([null, look, look, { ...look, id: '<script>' }]);
  assert.equal(output.length, 1); assert.equal(output[0].name.length, 40); assert.equal(output[0].themeId, 'garden');
  assert.equal(G.sanitizeLooks(Array.from({ length: 45 }, (_, i) => ({ ...look, id: `look-${i}` }))).length, 40);
  assert.deepEqual(G.sanitizeLooks({}), []);
});

test('countdown uses elapsed time, rounds up, and never goes negative', () => {
  assert.equal(G.remainingSeconds(180000, 0), 180); assert.equal(G.remainingSeconds(180000, 500), 180);
  assert.equal(G.remainingSeconds(180000, 1000), 179); assert.equal(G.remainingSeconds(180000, 179999), 1);
  assert.equal(G.remainingSeconds(180000, 180000), 0); assert.equal(G.remainingSeconds(180000, 999999), 0);
});

test('every piece produces artwork and adjacent dolls get unique gradient IDs', () => {
  for (const item of G.ITEMS) { const svg = A.thumbnail(item, item.color); assert.ok(svg.startsWith('<svg')); assert.ok(!svg.includes('undefined')); assert.ok(!svg.includes('NaN')); }
  const first = A.avatar(G.defaultOutfit(), G.byId), second = A.avatar(G.defaultOutfit(), G.byId);
  const firstIds = [...first.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
  const secondIds = [...second.matchAll(/id="([^"]+)"/g)].map(m => m[1]);
  assert.ok(firstIds.length > 3); assert.ok(firstIds.every(id => !secondIds.includes(id)));
});

test('downloaded art escapes user-supplied look names', () => {
  const svg = A.portrait(G.defaultOutfit(), G.byId, '<script>alert("x")</script> & test', G.THEMES[0]);
  assert.ok(!svg.includes('<script>')); assert.ok(svg.includes('&lt;script&gt;'));
  assert.ok(svg.includes('&amp; test')); assert.ok(!svg.includes('http://127.0.0.1')); assert.ok(!svg.includes('<image'));
});

test('dropping an accessory on twice keeps it on and preserves its color', () => {
  let outfit=G.wear(G.defaultOutfit(),'cat-ears');
  outfit=G.recolor(outfit,'cat-ears','#bda5d8');
  assert.deepEqual(G.wear(outfit,'cat-ears'),outfit);
  assert.equal(G.equip(outfit,'cat-ears').extras.head,null,'click-to-remove still works');
  assert.deepEqual(G.wear(outfit,'__proto__'),outfit);
});

test('makeup can be colored, washed off, undone, and restored without affecting stars', () => {
  const original=G.defaultOutfit(),expected=G.score(original,'garden');
  const painted=G.recolor(G.equip(original,'butterfly-paint'),'butterfly-paint','#83bfb7');
  assert.equal(painted.makeupColor,'#83bfb7');assert.equal(original.makeup,'fresh-face');
  assert.deepEqual(G.score(painted,'garden'),expected);assert.deepEqual(G.sanitizeOutfit(painted),painted);
  assert.equal(G.equip(painted,'fresh-face').makeup,'fresh-face');
  const legacy={...original};delete legacy.makeup;delete legacy.makeupColor;
  assert.equal(G.sanitizeOutfit(legacy).makeup,'fresh-face');
  assert.equal(G.sanitizeOutfit({...original,makeup:'__proto__',makeupColor:'url(x)'}).makeup,'fresh-face');
});

test('saved poses are retained and invalid pose values recover safely', () => {
  const base={id:'pose-look',outfit:G.defaultOutfit(),name:'My pose'};
  for(let pose=0;pose<G.POSES.length;pose++)assert.equal(G.sanitizeLooks([{...base,pose}])[0].pose,pose);
  for(const pose of[-1,100,NaN,'5'])assert.equal(G.sanitizeLooks([{...base,pose}])[0].pose,1);
});
