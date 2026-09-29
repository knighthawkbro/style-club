import * as THREE from 'three';

// All distances are in the same body coordinate system. Garments are complete
// elliptical surfaces; sleeves and trouser legs share the character's joints.
export const BODY_PROFILE = [
  [1.46, .31, .205], [1.58, .30, .195], [1.78, .255, .175],
  [1.99, .29, .19], [2.15, .335, .205], [2.23, .32, .185], [2.30, .13, .13]
];
const UP = new THREE.Vector3(0, 1, 0);
const FORWARD = new THREE.Vector3(0, 0, 1);
const ivory = '#fff4df';
const colorMix = (color, target, amount) => new THREE.Color(color).lerp(new THREE.Color(target), amount);
const material = (color, options = {}) => new THREE.MeshStandardMaterial({ color, roughness: .76, metalness: 0, ...options });

export function profileAt(profile, y) {
  const sorted = [...profile].sort((a, b) => a[0] - b[0]);
  if (y <= sorted[0][0]) return sorted[0].slice(1);
  for (let i = 1; i < sorted.length; i++) {
    if (y <= sorted[i][0]) {
      const a = sorted[i - 1], b = sorted[i], t = (y - a[0]) / (b[0] - a[0]);
      return [THREE.MathUtils.lerp(a[1], b[1], t), THREE.MathUtils.lerp(a[2], b[2], t)];
    }
  }
  return sorted.at(-1).slice(1);
}

export function fittedProfile(profile, ease = .02) { return profile.map(([y, x, z]) => [y, x + ease, z + ease]); }

export function loftGeometry(profile, { pleats = 0, segments = 48, subdivisions = 3 } = {}) {
  const rings = [];
  for (let i = 0; i < profile.length - 1; i++) {
    for (let j = 0; j < subdivisions; j++) {
      const t = j / subdivisions;
      rings.push(profile[i].map((n, k) => THREE.MathUtils.lerp(n, profile[i + 1][k], t)));
    }
  }
  rings.push(profile.at(-1));
  const vertices = [], indices = [], uvs = [];
  rings.forEach(([y, rx, rz], row) => {
    for (let col = 0; col <= segments; col++) {
      const angle = col / segments * Math.PI * 2;
      const fold = pleats * Math.cos(angle * 16) * (1 - row / (rings.length - 1));
      vertices.push((rx + fold) * Math.sin(angle), y, (rz + fold) * Math.cos(angle));
      uvs.push(col / segments, row / (rings.length - 1));
      if (row < rings.length - 1 && col < segments) {
        const a = row * (segments + 1) + col, b = a + segments + 1;
        indices.push(a, a + 1, b, a + 1, b + 1, b);
      }
    }
  });
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices); geometry.computeVertexNormals(); geometry.computeBoundingBox();
  return geometry;
}

function mesh(parent, name, geometry, mat, position = [0, 0, 0], scale = [1, 1, 1]) {
  const result = new THREE.Mesh(geometry, mat);
  result.name = name; result.position.set(...position); result.scale.set(...scale);
  result.castShadow = true; result.receiveShadow = true; parent.add(result); return result;
}
function ball(parent, name, mat, position, scale, detail = 20) {
  return mesh(parent, name, new THREE.SphereGeometry(1, detail, Math.max(12, detail / 2)), mat, position, scale);
}
function group(parent, name, position = [0, 0, 0]) { const g = new THREE.Group(); g.name = name; g.position.set(...position); parent.add(g); return g; }
function capsule(parent, name, mat, center, radius, length) {
  return mesh(parent, name, new THREE.CapsuleGeometry(radius, Math.max(.001, length - radius * 2), 6, 16), mat, center);
}
function curve(parent, name, points, radius, mat, closed = false) {
  return mesh(parent, name, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)), closed), Math.max(16, points.length * 6), radius, 7, closed), mat);
}
function ring(parent, name, y, rx, rz, thickness, mat) {
  return curve(parent, name, Array.from({ length: 24 }, (_, i) => { const a = i / 24 * Math.PI * 2; return [Math.sin(a) * rx, y, Math.cos(a) * rz]; }), thickness, mat, true);
}
function flower(parent, size, petalMat, centerMat) {
  for (let i = 0; i < 5; i++) {
    const a = i * Math.PI * 2 / 5;
    const petal = ball(parent, 'flower petal', petalMat, [Math.sin(a) * size * .51, Math.cos(a) * size * .51, 0], [size * .34, size * .5, size * .16], 12);
    petal.rotation.z = -a;
  }
  ball(parent, 'flower center', centerMat, [0, 0, size * .15], [size * .29, size * .29, size * .20], 12);
}
function star(parent, size, mat) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const a = i * Math.PI / 5, r = i % 2 ? size * .45 : size;
    const x = Math.sin(a) * r, y = Math.cos(a) * r;
    if (i) shape.lineTo(x, y); else shape.moveTo(x, y);
  }
  shape.closePath();
  mesh(parent, 'embroidered star', new THREE.ExtrudeGeometry(shape, { depth: .005, bevelEnabled: true, bevelThickness: .002, bevelSize: .002, bevelSegments: 1, steps: 1 }), mat);
}
function bow(parent, position, size, mat) {
  const b = group(parent, 'ribbon bow', position);
  for (const side of [-1, 1]) {
    const loop = ball(b, 'ribbon loop', mat, [side * size * .58, .015, 0], [size * .65, size * .43, size * .22]); loop.rotation.z = side * .3;
    const tail = ball(b, 'ribbon tail', mat, [side * size * .35, -size * .65, -.005], [size * .17, size * .65, size * .1]); tail.rotation.z = side * .3;
  }
  ball(b, 'ribbon knot', mat, [0, 0, size * .1], [size * .23, size * .30, size * .27]);
  return b;
}
function disposeTree(object) {
  const geometries = new Set(), materials = new Set();
  object.traverse(child => {
    if (child.geometry) geometries.add(child.geometry);
    if (child.material) for (const m of [child.material].flat()) materials.add(m);
  });
  geometries.forEach(g => g.dispose()); materials.forEach(m => m.dispose());
}

function addHair(head, style, color) {
  const hair = group(head, 'hair'), mat = material(color, { roughness: .68 });
  const glint = material(colorMix(color, '#f2d4a2', .12));
  // A shaped hairline exposes the forehead at the front and covers the back.
  const positions = [], indices = [], cols = 48, rows = 18;
  for (let row = 0; row <= rows; row++) for (let col = 0; col <= cols; col++) {
    const angle = col / cols * Math.PI * 2;
    const edge = 1.04 + 1.38 * (1 - Math.max(0, Math.cos(angle)));
    const theta = row / rows * edge;
    positions.push(.452 * Math.sin(theta) * Math.sin(angle), .565 * Math.cos(theta) + .035, .407 * Math.sin(theta) * Math.cos(angle) - .015);
    if (row < rows && col < cols) { const a = row * (cols + 1) + col, b = a + cols + 1; indices.push(a, b, a + 1, b, b + 1, a + 1); }
  }
  const cap = new THREE.BufferGeometry(); cap.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3)); cap.setIndex(indices); cap.computeVertexNormals();
  mesh(hair, 'fitted hair cap', cap, mat);
  if (style === 'curls') {
    for (let row = 0; row < 4; row++) for (let i = 0; i < 13; i++) {
      const angle = i * Math.PI * 2 / 13 + row * .17;
      if (Math.cos(angle) > .35 && row >= 1) continue;
      const radius = row === 0 ? .33 : .47;
      ball(hair, 'soft curl', mat, [Math.sin(angle) * radius, .42 - row * .25, Math.cos(angle) * radius * .8 - .04], [.18, .2, .18], 16);
    }
    for (let i = -2; i <= 2; i++) ball(hair, 'forehead curl', mat, [i * .14, .40 - Math.abs(i) * .027, .28], [.12, .115, .13], 16);
  } else {
    for (let i = 0; i < 5; i++) {
      curve(hair, 'side-swept fringe', [[-.39 + i * .025, .18 + i * .026, .22], [-.24 + i * .04, .36 + i * .023, .31], [.03 + i * .03, .45 + i * .015, .31], [.28 + i * .02, .31 + i * .01, .19]], .054, mat);
    }
    if (style === 'waves' || style === 'bob') {
      for (let i = 0; i < 12; i++) {
        const a = .98 + i / 11 * (Math.PI * 2 - 1.96), x = Math.sin(a) * .39, z = Math.cos(a) * .33;
        const length = style === 'bob' ? .46 : .98;
        curve(hair, 'rounded hair lock', [[x * .8, .35, z], [x * 1.12, -.12, z * 1.15], [x * 1.04, -length * .7, z * 1.17], [x * 1.19, -length, z * .97]], style === 'bob' ? .10 : .079, mat);
        if (i % 3 === 0) curve(hair, 'hair highlight', [[x * .82, .29, z * 1.13], [x * 1.19, -.15, z * 1.25], [x * 1.12, -length * .84, z * 1.28]], .009, glint);
      }
    }
    if (style === 'buns') for (const side of [-1, 1]) {
      ball(hair, 'space bun', mat, [side * .42, .43, -.06], [.24, .25, .22]);
      const wrap = ring(hair, 'bun ribbon', .40, .20, .20, .015, glint); wrap.position.x = side * .42; wrap.position.z = -.06;
    }
    if (style === 'pony') {
      ball(hair, 'ponytail tie', material('#dfacc1'), [.11, .4, -.38], [.14, .11, .12]);
      for (let i = 0; i < 6; i++) curve(hair, 'ponytail strand', [[.1 + i * .012, .43, -.37], [.39 + i * .015, .26, -.46], [.43 + i * .015, -.20, -.40], [.32 + i * .019, -.83, -.40]], .083, mat);
    }
    if (style === 'braids') for (const side of [-1, 1]) {
      for (let strand = 0; strand < 3; strand++) {
        const points = Array.from({ length: 25 }, (_, i) => { const angle = i * .64 + strand * Math.PI * 2 / 3; return [side * .38 + Math.sin(angle) * .046, -.16 - i / 24 * .74, .07 + Math.cos(angle) * .046]; });
        curve(hair, 'woven braid', points, .041, mat);
      }
      bow(hair, [side * .38, -.9, .10], .07, material('#dfa6bd'));
    }
  }
  return hair;
}

function addFace(head, skin, hairColor) {
  const white = material('#fffdf5', { roughness: .38 }), dark = material('#38292f'), iris = material('#765040', { roughness: .4 });
  for (const side of [-1, 1]) {
    ball(head, 'ear', skin, [side * .422, -.03, -.005], [.065, .11, .069]);
    const eye = group(head, 'eye', [side * .16, .057, .354]); eye.rotation.y = side * .18;
    ball(eye, 'eye white', white, [0, 0, 0], [.087, .112, .037]);
    ball(eye, 'iris', iris, [-side * .009, -.007, .032], [.048, .070, .018]);
    ball(eye, 'pupil', dark, [-side * .009, -.006, .047], [.027, .048, .009]);
    ball(eye, 'eye sparkle', white, [-.016, .025, .054], [.018, .023, .008], 12);
    curve(eye, 'upper lash', [[-.085, .041, .008], [0, .103, .016], [.078, .059, .007]], .008, dark);
    curve(head, 'eyebrow', [[side * .09, .225, .339], [side * .16, .246, .328], [side * .225, .222, .294]], .014, material(hairColor));
    const cheek = ball(head, 'rosy cheek', material('#dc8b8b', { transparent: true, opacity: .27 }), [side * .255, -.114, .298], [.064, .031, .012]); cheek.rotation.y = side * .45;
  }
  ball(head, 'button nose', skin, [0, -.075, .378], [.05, .068, .067]);
  curve(head, 'smile', [[-.075, -.215, .333], [0, -.244, .354], [.075, -.215, .333]], .012, material('#9b4f62'));
  curve(head, 'smile highlight', [[-.051, -.216, .346], [0, -.225, .36], [.05, -.216, .347]], .007, white);
}

function butterfly(parent, size, mat, accent) {
  for (const side of [-1, 1]) {
    const wing = ball(parent, 'butterfly wing', mat, [side * size * .43, size * .15, 0], [size * .43, size * .55, size * .065], 12);
    wing.rotation.z = -side * .35;
    ball(parent, 'butterfly lower wing', accent, [side * size * .29, -size * .35, .003], [size * .28, size * .28, size * .07], 12);
  }
  capsule(parent, 'butterfly body', accent, [0, 0, .008], size * .065, size * .75);
}

function addMakeup(head, outfit, catalog) {
  const style = catalog[outfit.makeup]?.shape || 'none';
  const paint = group(head, 'makeup'); paint.userData.style = style;
  if (style === 'none') return;
  const tint = outfit.makeupColor || catalog[outfit.makeup].color;
  const mat = material(tint, { roughness: .58 }), pale = material(colorMix(tint, '#fff3d6', .5));
  const gold = material('#ebc875', { metalness: .25, roughness: .35 });
  if (['rosy', 'sunset', 'stardust'].includes(style)) {
    for (const side of [-1, 1]) {
      const blush = ball(paint, 'blush', material(tint, { transparent: true, opacity: .54 }), [side * .255, -.117, .309], [.071, .037, .008]); blush.rotation.y = side * .46;
      if (style !== 'rosy') curve(paint, 'eyeshadow', [[side * .08, .16, .356], [side * .15, .193, .345], [side * .23, .15, .315]], .018, mat);
    }
    curve(paint, 'lip color', [[-.068, -.221, .342], [0, -.246, .364], [.068, -.221, .342]], .015, mat);
  }
  for (const side of [-1, 1]) {
    const cheek = group(paint, 'face paint', [side * .25, -.12, .318]); cheek.rotation.y = side * .48;
    if (style === 'stardust') {
      const sparkle = group(cheek, 'cheek star'); star(sparkle, .046, gold);
      for (const [x,y] of [[-.06,.025],[.057,.035],[.028,-.053]]) ball(cheek, 'glitter dot', pale, [x,y,.001], [.012,.012,.004],12);
    }
    if (style === 'freckles') for (const [x,y] of [[-.046,.018],[-.008,.027],[.031,.014],[.052,-.016],[-.027,-.021],[.013,-.019]]) ball(cheek, 'freckle', material('#a06a49'), [x,y,.002], [.008,.007,.003],12);
    if (style === 'rainbow') {
      ['#db91a5','#edcc82',tint].forEach((color, i) => {
        const r=.076-i*.018;
        curve(cheek, 'rainbow paint', Array.from({length:13},(_,j)=>{const a=j/12*Math.PI;return [Math.cos(a)*r,Math.sin(a)*r-.032,.003+i*.002];}), .009, material(color));
      });
    }
    if (style === 'butterfly') {
      const wings = group(paint, 'eye butterfly', [side*.247,.071,.334]); wings.rotation.y=side*.45;
      butterfly(wings,.124,mat,pale);
      // Keep the inner eye and pupil uncovered.
      wings.position.x += side*.045;
    }
    if (style === 'kitty') for (let i=0;i<3;i++) curve(cheek,'painted whisker',[[0,.013-i*.019,.005],[side*.068,.036-i*.037,-.003]],.006,material('#755a69'));
  }
  if (style === 'kitty') ball(paint,'kitty nose',mat,[0,-.087,.442],[.044,.028,.012],16);
  // Face paint hugs the head's surface instead of floating like an accessory.
  paint.updateWorldMatrix(true,true);
  const headInverse=head.matrixWorld.clone().invert(),replacedMaterials=new Set();let paintLayer=1;
  paint.traverse(part=>{
    if(!part.isMesh)return;
    part.castShadow=false;
    if(['lip color','kitty nose'].includes(part.name))return;
    replacedMaterials.add(part.material);
    part.material=new THREE.MeshBasicMaterial({color:part.material.color.clone(),transparent:part.material.transparent,opacity:part.material.opacity,depthWrite:false});
    part.renderOrder=paintLayer++;
    const transform=new THREE.Matrix4().multiplyMatrices(headInverse,part.matrixWorld),inverse=transform.clone().invert();
    const original=part.geometry,positions=original.attributes.position,index=original.index,vertices=[];
    const count=index?index.count:positions.count;
    for(let i=0;i<count;i+=3) {
      const triangle=[0,1,2].map(offset=>new THREE.Vector3().fromBufferAttribute(positions,index?index.getX(i+offset):i+offset).applyMatrix4(transform));
      const normal=new THREE.Vector3().subVectors(triangle[1],triangle[0]).cross(new THREE.Vector3().subVectors(triangle[2],triangle[0]));
      if(normal.z<=0)continue;
      for(const point of triangle){point.z=.375*Math.sqrt(Math.max(.001,1-(point.x/.424)**2-(point.y/.525)**2))+.006;point.applyMatrix4(inverse);vertices.push(point.x,point.y,point.z);}
    }
    const surface=new THREE.BufferGeometry();surface.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));surface.computeVertexNormals();part.geometry=surface;original.dispose();
  });
  const retainedMaterials=new Set();paint.traverse(part=>{if(part.material)retainedMaterials.add(part.material);});replacedMaterials.forEach(mat=>{if(!retainedMaterials.has(mat))mat.dispose();});
}

function addSleeves(bones, shape, mat, trimMat) {
  const long = ['sweater', 'hoodie', 'vest', 'bomber', 'denim', 'varsity'].includes(shape);
  const puff = ['petal', 'cloud', 'bow', 'gown', 'blouse', 'cosmic', 'butterfly', 'cupcake'].includes(shape);
  if (shape === 'varsity') mat = material(ivory, { side: THREE.DoubleSide });
  for (const arm of bones.arms) {
    const sleeve = group(arm.upper, 'fitted sleeve'); sleeve.userData.garmentPart = 'sleeve';
    arm.upperSkin.visible = false;
    const profile = long ? [[-.49,.105,.104],[-.39,.115,.114],[-.16,.133,.128],[.02,.125,.12],[.055,.06,.065]] : puff ? [[-.28,.108,.106],[-.24,.156,.145],[-.12,.172,.153],[0,.145,.13],[.05,.068,.066]] : [[-.27,.122,.12],[-.14,.135,.13],[.02,.125,.12],[.05,.063,.065]];
    mesh(sleeve, 'sleeve shell', loftGeometry(profile), mat);
    ring(sleeve, 'sleeve hem', long ? -.47 : -.27, long ? .108 : .117, long ? .108 : .113, .013, trimMat);
    if (long) {
      arm.lowerUpperSkin.visible = false; arm.forearmSkin.visible = false;
      mesh(arm.forearm, 'fitted forearm sleeve', loftGeometry([[-.425,.087,.088],[-.25,.106,.101],[0,.111,.109],[.035,.098,.098]]), mat);
      ring(arm.forearm, 'cuff', -.41, .091, .091, .017, trimMat);
    }
  }
}

function decorateSurface(parent, profile, shape, color) {
  const cream = material(ivory), gold = material('#e9c578', { metalness: .2, roughness: .4 });
  const bottom = profile[0][0], top = profile.at(-1)[0];
  if (['petal', 'meadow', 'flower', 'star', 'gown', 'sparkle', 'cosmic', 'star-skirt', 'butterfly'].includes(shape)) {
    for (let row = 0; row < 3; row++) for (let col = 0; col < 7; col++) {
      const angle = col / 7 * Math.PI * 2 + row * .42;
      const y = bottom + (top - bottom) * (.18 + row * .29);
      const [rx, rz] = profileAt(profile, y);
      const motif = group(parent, 'woven decoration', [Math.sin(angle) * (rx + .01), y, Math.cos(angle) * (rz + .01)]);
      motif.quaternion.setFromUnitVectors(FORWARD, new THREE.Vector3(Math.sin(angle) / rx, .12, Math.cos(angle) / rz).normalize());
      if (['star','gown','sparkle','cosmic','star-skirt'].includes(shape)) star(motif, .037, gold);
      else if (shape === 'butterfly') butterfly(motif,.047,material(colorMix(color,'#db91a5',.6)),gold);
      else flower(motif, .032, cream, gold);
    }
  }
  if (['cloud', 'tutu'].includes(shape)) {
    for (let i = 1; i <= 3; i++) {
      const y = bottom + (top - bottom) * i / 4, [rx, rz] = profileAt(profile, y);
      ring(parent, 'tiered ruffle', y, rx + .006, rz + .006, .015, material(colorMix(color, '#fff9ee', .23)));
    }
  }
}

function stripes(parent, profile, colors, count, label = 'fabric stripe') {
  const bottom=profile[0][0],top=profile.at(-1)[0];
  for(let i=0;i<count;i++) {
    const y1=bottom+(top-bottom)*i/count,y2=bottom+(top-bottom)*(i+.98)/count;
    const section=[[y1,...profileAt(profile,y1)],...profile.filter(p=>p[0]>y1&&p[0]<y2),[y2,...profileAt(profile,y2)]];
    mesh(parent,label,loftGeometry(fittedProfile(section,.006)),material(colors[i%colors.length],{side:THREE.DoubleSide}));
  }
}

function addClothes(root, bones, body, outfit, catalog) {
  const item = catalog[outfit.dress?.id || outfit.top?.id];
  const color = (outfit.dress || outfit.top).color;
  const cloth = material(color, { side: THREE.DoubleSide }), trim = material(colorMix(color, '#fff5e6', .3));
  body.visible = false;
  const bodice = group(root, item.name); bodice.userData.itemId = item.id; bodice.userData.fitted = true;
  // Finish the top at the waist, so it cannot poke through a skirt or trousers.
  const profile = fittedProfile([[1.72, ...profileAt(BODY_PROFILE, 1.72)], ...BODY_PROFILE.filter(point => point[0] > 1.72)], .019);
  mesh(bodice, 'tailored bodice', loftGeometry(profile), cloth);
  ring(bodice, 'neckline', 2.30, .15, .15, .018, trim);
  addSleeves(bones, item.shape, cloth, trim);
  if (['bow','blouse'].includes(item.shape)) bow(bodice, [0, 2.17, .238], .082, trim);
  if (item.shape === 'tee') { const f = group(bodice, 'sunshine embroidery', [0,2.02,.219]); flower(f,.066,material('#ecc570'),material('#bc8359')); }
  if (item.shape === 'sun') for (const y of [1.87, 2.0, 2.13]) ball(bodice, 'button', trim, [0,y,profileAt(profile,y)[1]+.012],[.018,.018,.008],12);
  if (item.shape === 'sweater') for (let i = -3; i <= 3; i++) {
    const angle = i * .22;
    curve(bodice,'knit rib',[[Math.sin(angle)*.283,1.68,Math.cos(angle)*.203],[Math.sin(angle)*.28,1.82,Math.cos(angle)*.198],[Math.sin(angle)*.314,2.1,Math.cos(angle)*.217]],.004,trim);
  }
  if (item.shape === 'hoodie') {
    ball(bodice,'hood',cloth,[0,2.22,-.16],[.26,.17,.16]);
    for(const side of [-1,1])curve(bodice,'hood drawstring',[[side*.10,2.25,.16],[side*.10,2.08,.223],[side*.12,1.95,.217]],.009,material(ivory));
    ball(bodice,'front pocket',trim,[0,1.77,.196],[.16,.09,.025]);
  }
  if (item.shape === 'vest' || item.shape === 'sailor') {
    const collar = material(ivory);
    curve(bodice,'V collar',[[-.135,2.3,.12],[-.115,2.21,.21],[0,2.06,.223],[.115,2.21,.21],[.135,2.3,.12]],.024,collar);
    if(item.shape==='sailor')bow(bodice,[0,2.08,.245],.068,material('#607894'));
  }
  if (['bomber','denim','varsity'].includes(item.shape)) {
    const piping=material(ivory),metal=material('#dfbf7e',{metalness:.4,roughness:.4});
    curve(bodice,'jacket fastening',[[0,1.73,.211],[0,1.99,.219],[0,2.22,.218]],.013,item.shape==='denim'?trim:piping);
    ring(bodice,'ribbed jacket hem',1.735,.299,.214,.027,trim);
    for(const side of [-1,1]) {
      const pocket=mesh(bodice,'jacket pocket',new THREE.BoxGeometry(.115,.12,.02),trim,[side*.167,1.89,.191]);pocket.rotation.y=side*.25;
      ball(bodice,'pocket button',metal,[side*.167,1.931,.208],[.012,.012,.006],12);
    }
    const patch=group(bodice,'jacket badge',[-.17,2.08,.202]);patch.rotation.y=-.25;
    star(patch,item.shape==='varsity'?.065:.045,piping);
    if(item.shape==='denim') for(const y of [1.8,1.94,2.08,2.21])ball(bodice,'denim button',metal,[.025,y,profileAt(profile,y)[1]+.012],[.015,.015,.008],12);
  }
  if(item.shape==='stripes')stripes(bodice,profile,[color,ivory],9);
  if(item.shape==='rainbow')stripes(bodice,profile,[color,'#edcc82','#83bfb7','#8eafd1','#bda5d8'],5);
  if(['sparkle','cosmic'].includes(item.shape))decorateSurface(bodice,[[1.84,.271,.196],[2.18,.352,.224]],'sparkle',color);
  if(outfit.dress){
    const long = ['gown','cosmic'].includes(item.shape), bottom = long ? .15 : 1.0;
    const skirtProfile = long ? [[.15,.85,.65],[.39,.78,.60],[.9,.53,.40],[1.38,.34,.255],[1.73,.291,.203]] : [[bottom,.55,.39],[1.16,.48,.343],[1.4,.357,.266],[1.73,.291,.203]];
    const skirt = group(root, 'fitted dress skirt'); skirt.userData.itemId=item.id; skirt.userData.fitted=true;
    mesh(skirt,'full skirt shell',loftGeometry(skirtProfile,{pleats:item.shape==='rainbow'?0:.016}),cloth);
    ring(skirt,'finished hem',bottom,.55+(long?.30:0),.39+(long?.26:0),.013,trim);
    ring(skirt,'waist seam',1.72,.292,.205,.02,trim);
    bow(skirt,[0,1.73,.22],.064,trim);
    decorateSurface(skirt,skirtProfile,item.shape,color);
    if(item.shape==='rainbow')stripes(skirt,skirtProfile,['#bda5d8','#8eafd1','#83bfb7','#edcc82',color],5);
    if(item.shape==='cupcake')for(let i=0;i<3;i++) {
      const low=1+i*.205,high=low+.27,[rx,rz]=profileAt(skirtProfile,low),[topX,topZ]=profileAt(skirtProfile,high);
      const ruffle=material(colorMix(color,ivory,i*.15),{side:THREE.DoubleSide});
      mesh(skirt,'layered cupcake ruffle',loftGeometry([[low,rx+.045,rz+.035],[low+.07,rx+.018,rz+.012],[high,topX+.008,topZ+.008]],{pleats:.025}),ruffle);
      ring(skirt,'ruffle trim',low,rx+.045,rz+.035,.012,trim);
    }
    if(['petal','meadow','star'].includes(item.shape))decorateSurface(bodice,[[1.82,.271,.196],[2.18,.352,.224]],item.shape,color);
    if(item.shape==='bow')bow(skirt,[0,1.69,-.228],.13,trim);
    return;
  }
  const lower = catalog[outfit.bottom.id], lowerColor=outfit.bottom.color;
  const lowerMat=material(lowerColor,{side:THREE.DoubleSide}), lowerTrim=material(colorMix(lowerColor,'#fff8e9',.2));
  const bottomGroup=group(root,lower.name);bottomGroup.userData.itemId=lower.id;bottomGroup.userData.fitted=true;
  if(['jeans','trousers','shorts','cargo','flare'].includes(lower.shape)){
    const shorts=lower.shape==='shorts';
    const flare=lower.shape==='flare'&&!['boot','starboot','laceboot'].includes(catalog[outfit.shoes.id].shape);
    mesh(bottomGroup,'tailored waistband',loftGeometry([[1.35,.33,.219],[1.49,.325,.218],[1.62,.304,.21],[1.72,.28,.202]]),lowerMat);
    for(const leg of bones.legs){
      const upper=group(leg.hip,'fitted trouser leg'); upper.userData.itemId=lower.id; upper.userData.fitted=true;
      mesh(upper,'upper trouser shell',loftGeometry(shorts?[[-.37,.157,.169],[-.1,.174,.198],[.08,.163,.189]]:[[-.685,.139,.149],[-.45,.146,.164],[-.16,.166,.187],[.08,.163,.19]]),lowerMat);
      if(!shorts){
        leg.thighSkin.visible=false;leg.shinSkin.visible=false;
        mesh(leg.knee,'lower trouser shell',loftGeometry([[-.64,flare?.205:.132,flare?.19:.15],[-.37,flare?.166:.139,flare?.17:.153],[-.07,.139,.15],[.04,.142,.15]]),lowerMat);
        ring(leg.knee,'trouser cuff',-.63,flare?.205:.133,flare?.19:.151,.012,lowerTrim);
      }else ring(upper,'shorts cuff',-.365,.16,.171,.014,lowerTrim);
      if(lower.shape==='cargo') {
        mesh(upper,'cargo pocket',new THREE.BoxGeometry(.055,.24,.19),lowerTrim,[leg.side*.146,-.32,.025]);
        mesh(upper,'cargo pocket flap',new THREE.BoxGeometry(.06,.065,.20),lowerMat,[leg.side*.158,-.23,.025]);
      }
    }
  }else{
    const skirtProfile=[[1.02,.53,.375],[1.29,.404,.291],[1.5,.324,.227],[1.72,.279,.201]];
    mesh(bottomGroup,'full skirt shell',loftGeometry(skirtProfile,{pleats:lower.shape==='pleated'?.025:.012}),lowerMat);
    ring(bottomGroup,'skirt hem',1.02,.531,.377,.016,lowerTrim);decorateSurface(bottomGroup,skirtProfile,lower.shape,lowerColor);
  }
  ring(bottomGroup,'waistband',1.72,.284,.207,.027,lowerTrim);
}

function addShoes(bones,item,color,skinColor){
  const mat=material(color,{roughness:.55}),sole=material(colorMix(color,'#fff6de',.45)),detail=material(ivory);
  const boots=['boot','starboot','laceboot','hightop'].includes(item.shape);
  for(const leg of bones.legs){
    const shoe=group(leg.knee,item.name,[0,-.67,.07]);shoe.userData.itemId=item.id;shoe.userData.fitted=true;
    leg.footSkin.visible=false;
    ball(shoe,'rounded shoe',mat,[0,-.025,.063],[.142,.103,.254]);
    ball(shoe,'shoe sole',sole,[0,-.081,.063],[.147,.045,.262]);
    if(boots){
      const height=item.shape==='hightop'?.24:.46;
      mesh(shoe,'boot shaft',loftGeometry([[.005,.149,.17],[height*.45,.151,.166],[height,.154,.166]]),mat,[0,0,-.07]);
      ring(shoe,'boot top',height,.154,.166,.015,sole).position.z=-.07;
      if(item.shape==='starboot'){const s=group(shoe,'boot star',[0,.25,.101]);star(s,.05,detail);}
      else if(['laceboot','hightop'].includes(item.shape))for(let i=0;i<4;i++) {
        const y=.06+i*(height-.1)/4;
        curve(shoe,'crossed boot laces',[[-.061,y,.091],[.061,y+.04,.091]],.008,detail);
        curve(shoe,'crossed boot laces',[[.061,y,.092],[-.061,y+.04,.092]],.008,detail);
      }
      else for(const y of [.12,.22,.32])curve(shoe,'boot stitching',[[-.06,y,.087],[0,y,.101],[.06,y,.087]],.008,sole);
    }else if(item.shape==='sneaker'){
      for(const z of [.03,.09,.15])curve(shoe,'shoelace',[[-.07,.052,z],[0,.065,z+.008],[.07,.052,z]],.009,detail);
    }else if(item.shape==='sandal'){
      ball(shoe,'sandal opening',material(skinColor),[0,.025,.07],[.112,.071,.218]);
      for(const z of [-.03,.19])curve(shoe,'sandal strap',[[-.128,-.005,z],[-.095,.06,z],[0,.075,z],[.095,.06,z],[.128,-.005,z]],.028,mat);
    }else if(item.shape==='slipper'){
      ball(shoe,'fluffy slipper front',sole,[0,.04,.20],[.14,.095,.15]);
      for(const side of[-1,1])ball(shoe,'bunny ear',sole,[side*.06,.15,.16],[.032,.09,.03]);
    }else{
      curve(shoe,'mary jane strap',[[-.13,0,.035],[-.08,.07,.035],[0,.09,.035],[.08,.07,.035],[.13,0,.035]],.019,sole);
      bow(shoe,[0,.065,.22],.037,sole).rotation.x=-.7;
    }
  }
}

function addAccessories(root,bones,outfit,catalog){
  for(const [slot,piece] of Object.entries(outfit.extras)){
    if(!piece)continue;const item=catalog[piece.id],mat=material(piece.color,{roughness:.55}),cream=material(ivory),gold=material('#e6bf69',{metalness:.4,roughness:.4});
    const target=slot==='head'?bones.head:slot==='bag'?bones.arms[1].forearm:root;
    const accessory=group(target,item.name);accessory.userData.itemId=item.id;
    if(slot==='head' && outfit.hair==='curls'){accessory.scale.setScalar(1.22);accessory.position.y=.025;}
    if(item.shape==='hairbow')bow(accessory,[.28,.43,.31],.16,mat).rotation.z=-.25;
    if(item.shape==='crown'){
      ring(accessory,'flower crown vine',.39,.39,.33,.025,material('#91a983'));
      for(let i=0;i<9;i++){const a=i/9*Math.PI*2,f=group(accessory,'crown flower',[Math.sin(a)*.40,.4,Math.cos(a)*.34]);f.rotation.y=a;flower(f,.08,mat,gold);}
    }
    if(item.shape==='tiara'){
      ring(accessory,'tiara band',.40,.37,.32,.021,gold);
      for(let i=-2;i<=2;i++){const a=i*.32,x=Math.sin(a)*.375,z=Math.cos(a)*.326,height=.11+(2-Math.abs(i))*.04;curve(accessory,'tiara point',[[x-.05,.41,z],[x,.41+height,z],[x+.05,.41,z]],.015,mat);ball(accessory,'tiara jewel',cream,[x,.41+height,z],[.028,.035,.02],12);}
    }
    if(item.shape==='beret'){
      const hat=ball(accessory,'beret crown',mat,[-.025,.48,-.01],[.49,.17,.43]);hat.rotation.z=.15;
      ring(accessory,'beret band',.41,.40,.34,.027,mat);capsule(accessory,'beret tip',mat,[-.045,.66,0],.026,.10);
    }
    if(item.shape==='catears') {
      curve(accessory,'kitten headband',[[-.39,.21,0],[-.31,.43,0],[0,.53,0],[.31,.43,0],[.39,.21,0]],.027,mat);
      for(const side of[-1,1]) {
        const earShape=new THREE.Shape();earShape.moveTo(-.14,0);earShape.lineTo(0,.28);earShape.lineTo(.14,0);earShape.closePath();
        const ear=mesh(accessory,'kitten ear',new THREE.ExtrudeGeometry(earShape,{depth:.07,bevelEnabled:true,bevelSize:.025,bevelThickness:.02,bevelSegments:2,steps:1}),mat,[side*.30,.43,0]);ear.rotation.z=-side*.16;
        const inner=mesh(ear,'pink inner ear',new THREE.ShapeGeometry(earShape),material('#e9b0bd'),[0,.035,.095],[.65,.70,1]);
      }
    }
    if(item.shape==='headphones') {
      curve(accessory,'headphone band',[[-.49,-.02,0],[-.46,.35,-.02],[0,.60,-.025],[.46,.35,-.02],[.49,-.02,0]],.041,cream);
      for(const side of[-1,1]) {ball(accessory,'headphone cushion',cream,[side*.45,-.025,.012],[.10,.16,.13]);ball(accessory,'headphone cup',mat,[side*.515,-.025,.014],[.085,.15,.122]);}
    }
    if(item.shape==='pearls'){
      for(let i=0;i<22;i++){const a=i/22*Math.PI*2;ball(accessory,'necklace pearl',cream,[Math.sin(a)*.19,2.32-.06*Math.max(0,Math.cos(a)),Math.cos(a)*.18],[.026,.026,.026],12);}
    }
    if(item.shape==='bag'||item.shape==='heartbag'){
      accessory.position.set(.025,-.49,.01);
      curve(accessory,'bag handle',[[-.12,-.04,0],[-.1,.15,0],[.1,.15,0],[.12,-.04,0]],.02,mat);
      if(item.shape==='bag'){
        ball(accessory,'bag body',mat,[0,-.14,0],[.19,.17,.09]);const f=group(accessory,'bag flower',[0,-.14,.092]);flower(f,.06,cream,gold);
      }else{
        const heart=new THREE.Shape();heart.moveTo(0,-.31);heart.bezierCurveTo(-.36,-.1,-.12,.17,0,-.025);heart.bezierCurveTo(.12,.17,.36,-.1,0,-.31);
        mesh(accessory,'heart purse',new THREE.ExtrudeGeometry(heart,{depth:.10,bevelEnabled:true,bevelSize:.025,bevelThickness:.025,bevelSegments:3,steps:1}),mat,[0,0,-.04]);
      }
    }
    if(item.shape==='wings'){
      accessory.position.set(0,2.05,-.235);
      for(const side of [-1,1]){
        const wing=group(accessory,'fairy wing');wing.rotation.y=side*.18;
        const upper=ball(wing,'upper wing',mat,[side*.4,.12,-.02],[.38,.5,.04]);upper.rotation.z=side*-.6;
        const lower=ball(wing,'lower wing',mat,[side*.32,-.32,-.02],[.31,.28,.035]);lower.rotation.z=side*.6;
        curve(wing,'wing vein',[[side*.05,0,.025],[side*.32,.1,.03],[side*.60,.38,.025]],.009,cream);
        const s=group(wing,'wing sparkle',[side*.45,.20,.03]);star(s,.055,cream);
      }
    }
    if(item.shape==='cape') {
      const vertices=[],indices=[],rows=12,cols=24;
      for(let r=0;r<=rows;r++)for(let c=0;c<=cols;c++) {
        const t=r/rows,a=(c/cols-.5)*2.7,rx=.18+t*.55,rz=.245+t*.29;
        vertices.push(Math.sin(a)*rx,2.28-t*1.30+Math.sin(c/cols*Math.PI)*t*.06,-Math.cos(a)*rz-.03);
        if(r<rows&&c<cols){const i=r*(cols+1)+c;indices.push(i,i+1,i+cols+1,i+1,i+cols+2,i+cols+1);}
      }
      const fabric=new THREE.BufferGeometry();fabric.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));fabric.setIndex(indices);fabric.computeVertexNormals();
      mesh(accessory,'hero cape fabric',fabric,material(piece.color,{side:THREE.DoubleSide}));
      const badge=group(accessory,'cape star',[0,1.56,-.446]);badge.rotation.y=Math.PI;star(badge,.15,gold);
      ring(accessory,'cape collar',2.3,.153,.153,.016,gold);
    }
  }
}

export function buildCharacter(outfit,catalog){
  const root=new THREE.Group();root.name='Style Club fitted character';
  const skin=material(outfit.skin,{roughness:.82});
  const bones={arms:[],legs:[],head:group(root,'head joint',[0,2.88,0])};
  const body=mesh(root,'body under clothes',loftGeometry(BODY_PROFILE),skin);
  capsule(root,'neck',skin,[0,2.36,0],.115,.25);
  ball(bones.head,'head',skin,[0,0,0],[.424,.525,.375],32);
  addFace(bones.head,skin,outfit.hairColor);addMakeup(bones.head,outfit,catalog);addHair(bones.head,catalog[outfit.hair].shape,outfit.hairColor);
  for(const side of[-1,1]){
    const upper=group(root,side<0?'left shoulder':'right shoulder',[side*.337,2.17,0]);
    const upperSkin=capsule(upper,'covered upper arm',skin,[0,-.115,0],.102,.285);
    const lowerUpperSkin=capsule(upper,'visible upper arm',skin,[0,-.352,0],.09,.24);
    const forearm=group(upper,'elbow joint',[0,-.47,0]);
    const forearmSkin=capsule(forearm,'forearm',skin,[0,-.195,0],.082,.43);
    ball(forearm,'hand',skin,[0,-.48,.007],[.079,.117,.065]);
    ball(forearm,'thumb',skin,[-side*.062,-.445,.035],[.036,.060,.034]);
    bones.arms.push({side,upper,forearm,upperSkin,lowerUpperSkin,forearmSkin});
    const hip=group(root,side<0?'left hip':'right hip',[side*.155,1.51,0]);
    const thighSkin=capsule(hip,'thigh',skin,[0,-.325,0],.125,.73);
    const knee=group(hip,'knee joint',[0,-.68,0]);
    const shinSkin=capsule(knee,'shin',skin,[0,-.29,0],.096,.66);
    const footSkin=ball(knee,'foot',skin,[0,-.70,.11],[.116,.084,.20]);
    bones.legs.push({side,hip,knee,thighSkin,shinSkin,footSkin});
  }
  addClothes(root,bones,body,outfit,catalog);addShoes(bones,catalog[outfit.shoes.id],outfit.shoes.color,outfit.skin);addAccessories(root,bones,outfit,catalog);
  const heartShape=new THREE.Shape();heartShape.moveTo(0,-.12);heartShape.bezierCurveTo(-.26,.01,-.11,.24,0,.095);heartShape.bezierCurveTo(.11,.24,.26,.01,0,-.12);
  const poseHeart=mesh(root,'heart for the heart-hug pose',new THREE.ExtrudeGeometry(heartShape,{depth:.025,bevelEnabled:true,bevelSize:.012,bevelThickness:.008,bevelSegments:2,steps:1}),material('#dc8fae'),[0,1.96,.59]);poseHeart.visible=false;
  const reducedMotion=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  function pose(time=0,style=0,walking=false){
    const t=reducedMotion?0:time, skirt=!!outfit.dress||['pleated','tutu','flower','star-skirt'].includes(catalog[outfit.bottom?.id]?.shape);
    const stride=walking?(skirt?.12:.28):0;
    root.position.y=Math.abs(Math.sin(t*4))*stride*.07;
    root.rotation.set(0,style===5&&!walking?t*.75:0,0);
    poseHeart.visible=style===4&&!walking;
    if(style===6&&!walking){root.position.y=-.03;root.rotation.x=.10;}
    bones.head.rotation.z=style===1?-.07:style===2?.07:Math.sin(t*.7)*.012;
    for(const arm of bones.arms){
      arm.upper.rotation.set(walking?Math.sin(t*4+arm.side*Math.PI/2)*.20:Math.sin(t)*.025,0,arm.side*.17);
      arm.forearm.rotation.set(-.06,0,0);
      if(style===1&&arm.side===1){arm.upper.rotation.z=.55;arm.forearm.rotation.z=-1.0;arm.forearm.rotation.x=-.28;}
      if(style===2&&arm.side===-1){arm.upper.rotation.z=-2.2;arm.forearm.rotation.z=-.4;}
      if(style===3){arm.upper.rotation.z=arm.side*1.12;arm.forearm.rotation.x=-.1;}
      if(style===4){arm.upper.rotation.x=-.60;arm.upper.rotation.z=arm.side*.18;arm.forearm.rotation.z=-arm.side*1.0;arm.forearm.rotation.x=-1.25;}
      if(style===5){arm.upper.rotation.z=arm.side*.85;arm.forearm.rotation.x=-.20;}
      if(style===6){arm.upper.rotation.z=arm.side*.5;arm.forearm.rotation.x=-.16;}
      if(style===7){arm.upper.rotation.z=arm.side*.70;arm.forearm.rotation.z=-arm.side*1.16;arm.forearm.rotation.x=-.25;}
    }
    for(const leg of bones.legs){const phase=t*4+leg.side*Math.PI/2;leg.hip.rotation.x=Math.sin(phase)*stride;leg.hip.rotation.z=0;leg.knee.rotation.x=Math.max(0,-Math.sin(phase))*stride*.7;
      if(style===1&&leg.side===-1){leg.hip.rotation.z=-.045;leg.knee.rotation.x=.06;}
      if([3,7].includes(style))leg.hip.rotation.z=-leg.side*.07;
      if(style===6){leg.hip.rotation.x=-.19;leg.knee.rotation.x=.28;if(leg.side===-1)leg.hip.rotation.z=-.055;}
    }
  }
  pose();
  return {root,bones,pose,dispose(){disposeTree(root);root.removeFromParent();}};
}
