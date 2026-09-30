import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { poseFrame, STRIDE_LENGTH } from './motion.mjs';

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
    if (style === 'waves' || style === 'bob' || style==='straight') {
      for (let i = 0; i < 12; i++) {
        const a = .98 + i / 11 * (Math.PI * 2 - 1.96), x = Math.sin(a) * .39, z = Math.cos(a) * .33;
        const length = style === 'bob' ? .46 : style==='straight'?1.28:.98;
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
    if(style==='twintails')for(const side of[-1,1]){
      bow(hair,[side*.40,.29,-.04],.085,material('#dfacc1'));
      for(let i=0;i<5;i++)curve(hair,'twin ponytail',[[side*.40,.28,-.06],[side*(.60+i*.017),-.1,-.08],[side*(.55+i*.016),-.68,-.05],[side*.44,-.98,-.12]],.071,mat);
    }
    if(style==='topknot'){ball(hair,'top knot',mat,[0,.68,-.10],[.25,.24,.23]);for(let i=0;i<4;i++)ring(hair,'bun wrap',.56+i*.07,.22-i*.015,.21-i*.015,.012,glint).position.z=-.1;bow(hair,[0,.57,.12],.09,material('#dba8b9'));}
    if(style==='puffs')for(const side of[-1,1]){ball(hair,'round puff',mat,[side*.48,.4,-.04],[.27,.28,.26]);for(let i=0;i<12;i++){const a=i/12*Math.PI*2;ball(hair,'puff curl',mat,[side*.48+Math.cos(a)*.21,.4+Math.sin(a)*.22,.11],[.10,.105,.1],12);}}
    if(style==='pixie')for(const side of[-1,1])curve(hair,'pixie side',[ [side*.31,.31,.17],[side*.42,.08,.06],[side*.40,-.16,-.02] ],.075,mat);
    if(style==='sidebraid'){
      for(let strand=0;strand<3;strand++)curve(hair,'long side braid',Array.from({length:30},(_,i)=>{const a=i*.67+strand*Math.PI*2/3;return[.36+Math.sin(a)*.055,-.12-i/29*1.16,.14+Math.cos(a)*.055];}),.047,mat);
      bow(hair,[.36,-1.27,.17],.085,material('#dba8b9'));
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
  if (['rosy', 'sunset', 'stardust', 'diamond'].includes(style)) {
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
    if(style==='diamond') {star(cheek,.047,pale);for(const x of[-.057,.057])ball(cheek,'pearl face gem',pale,[x,.01,0],[.014,.014,.005],12);}
    if(style==='ghost') {
      ball(cheek,'friendly ghost paint',mat,[0,0,0],[.049,.06,.006],16);
      for(const x of[-.021,0,.021])ball(cheek,'ghost scallop',mat,[x,-.039,0],[.018,.027,.006],12);
      for(const x of[-.017,.017])ball(cheek,'ghost eye',material('#514859'),[x,.012,.009],[.007,.011,.003],12);
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
  const puff = ['petal', 'cloud', 'bow', 'gown', 'long', 'blouse', 'cosmic', 'butterfly', 'cupcake'].includes(shape);
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

const CLOTH_BASE={velvet:'long',pearl:'long',aurora:'long',diamond:'petal',tweed:'denim',tuxedo:'blouse',witch:'long',pumpkin:'petal',ghost:'cloud',vampire:'long',skeleton:'sweater',cherry:'meadow',plaid:'bow',raincoat:'bomber',sport:'tee'};
function specialFabric(parent,profile,style,color){
  const cream=material(ivory),gold=material('#e7c57f',{metalness:.35}),dark=material('#32313f');
  if(['pearl','diamond','velvet','cherry','sequin'].includes(style))for(let row=0;row<3;row++)for(let col=0;col<9;col++){
    const angle=col/9*Math.PI*2+row*.2,y=profile[0][0]+(profile.at(-1)[0]-profile[0][0])*(.15+row*.3),[rx,rz]=profileAt(profile,y);
    const motif=group(parent,'boutique fabric detail',[Math.sin(angle)*(rx+.018),y,Math.cos(angle)*(rz+.018)]);motif.rotation.y=angle;
    if(style==='pearl')ball(motif,'sewn pearl',cream,[0,0,0],[.022,.022,.015],12);
    else if(style==='cherry'){for(const side of[-1,1])ball(motif,'cherry',material('#a95665'),[side*.024,0,0],[.028,.029,.014],12);curve(motif,'cherry stem',[[-.023,.012,0],[0,.07,0],[.023,.012,0]],.006,material('#708d74'));}
    else if(style==='velvet'){if(row===0)star(motif,.022,gold);}
    else mesh(motif,'sewn crystal',new THREE.OctahedronGeometry(.025),style==='diamond'?cream:gold);
  }
  if(style==='aurora')stripes(parent,profile,['#bda5d8','#8eafd1','#83bfb7',color,'#f2e9d8'],7);
  if(style==='plaid'||style==='tweed'){
    for(let row=0;row<6;row++){const y=profile[0][0]+(profile.at(-1)[0]-profile[0][0])*(row+.2)/6,[rx,rz]=profileAt(profile,y);ring(parent,'woven check',y,rx+.009,rz+.009,.006,cream);}
    for(let col=0;col<12;col++){const a=col/12*Math.PI*2;curve(parent,'vertical check',profile.map(([y,rx,rz])=>[Math.sin(a)*(rx+.01),y,Math.cos(a)*(rz+.01)]),.005,cream);}
  }
}
function addClothes(root, bones, body, outfit, catalog) {
  const source = catalog[outfit.dress?.id || outfit.top?.id];
  if(source){
  const style=source.shape;
  const item = {...source,shape:CLOTH_BASE[style]||style};
  const color = (outfit.dress || outfit.top).color;
  const cloth = material(color, { side: THREE.DoubleSide }), trim = material(colorMix(color, '#fff5e6', .3));
  body.visible = false;
  const bodice = group(root, item.name); bodice.userData.itemId = item.id; bodice.userData.fitted = true;
  // Finish the top at the waist, so it cannot poke through a skirt or trousers.
  const profile = fittedProfile([[1.72, ...profileAt(BODY_PROFILE, 1.72)], ...BODY_PROFILE.filter(point => point[0] > 1.72)], .019);
  mesh(bodice, 'tailored bodice', loftGeometry(profile), cloth);
  specialFabric(bodice,profile,style,color);
  ring(bodice, 'neckline', 2.30, .15, .15, .018, trim);
  addSleeves(bones, item.shape, cloth, trim);
  if(style==='tuxedo') {bow(bodice,[0,2.23,.21],.067,material('#32313f'));for(const side of[-1,1])curve(bodice,'satin lapel',[[side*.14,2.29,.13],[side*.22,2.13,.19],[0,1.85,.22]],.043,material(ivory));}
  if(style==='skeleton'){
    const bone=material(ivory);curve(bodice,'skeleton spine',[[0,1.78,.22],[0,2.18,.235]],.022,bone);
    for(const side of[-1,1])for(let i=0;i<4;i++)curve(bodice,'friendly rib',[[0,2.13-i*.08,.23],[side*.16,2.14-i*.08,.23],[side*.205,2.10-i*.08,.18]],.016,bone);
  }
  if(['ghost','pumpkin'].includes(style)){
    const ink=material('#32313f');for(const side of[-1,1])ball(bodice,'costume eye',ink,[side*.10,2.06,.233],[.03,.045,.014],12);
    curve(bodice,'costume smile',[[-.10,1.92,.217],[0,1.87,.23],[.10,1.92,.217]],.017,ink);
    if(style==='pumpkin')for(const side of[-1,1]){const leaf=ball(bodice,'pumpkin collar leaf',material('#80966b'),[side*.10,2.28,.14],[.10,.025,.075]);leaf.rotation.z=side*.3;}
  }
  if(style==='witch'){for(let i=0;i<3;i++)for(const side of[-1,1])curve(bodice,'golden costume lacing',[[side*.08,1.82+i*.10,.23],[-side*.08,1.92+i*.10,.23]],.009,material('#edcc82'));}
  if(style==='vampire')for(const side of[-1,1]){const collar=new THREE.Shape();collar.moveTo(side*.1,2.27);collar.lineTo(side*.32,2.58);collar.lineTo(side*.37,2.23);collar.closePath();mesh(bodice,'storybook collar',new THREE.ExtrudeGeometry(collar,{depth:.045,bevelEnabled:false}),material('#32313f'),[0,0,-.13]);}
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
    const long = ['gown','cosmic','long'].includes(item.shape), bottom = long ? .15 : 1.0;
    const skirtProfile = long ? [[.15,.85,.65],[.39,.78,.60],[.9,.53,.40],[1.38,.34,.255],[1.73,.291,.203]] : [[bottom,.55,.39],[1.16,.48,.343],[1.4,.357,.266],[1.73,.291,.203]];
    const skirt = group(root, 'fitted dress skirt'); skirt.userData.itemId=item.id; skirt.userData.fitted=true;
    mesh(skirt,'full skirt shell',loftGeometry(skirtProfile,{pleats:item.shape==='rainbow'?0:.016}),cloth);
    ring(skirt,'finished hem',bottom,.55+(long?.30:0),.39+(long?.26:0),.013,trim);
    ring(skirt,'waist seam',1.72,.292,.205,.02,trim);
    bow(skirt,[0,1.73,.22],.064,trim);
    decorateSurface(skirt,skirtProfile,source.shape,color);specialFabric(skirt,skirtProfile,style,color);
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
  }
  if(!outfit.bottom)return;
  const lowerSource=catalog[outfit.bottom.id],lower={...lowerSource,shape:({palazzo:'flare',sequin:'star-skirt',skeleton:'trousers'})[lowerSource.shape]||lowerSource.shape}, lowerColor=outfit.bottom.color;
  const lowerMat=material(lowerColor,{side:THREE.DoubleSide}), lowerTrim=material(colorMix(lowerColor,'#fff8e9',.2));
  const bottomGroup=group(root,lower.name);bottomGroup.userData.itemId=lower.id;bottomGroup.userData.fitted=true;
  if(['jeans','trousers','shorts','cargo','flare'].includes(lower.shape)){
    const shorts=lower.shape==='shorts';
    const flare=lower.shape==='flare'&&!['boot','starboot','laceboot'].includes(catalog[outfit.shoes?.id]?.shape);
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
      if(lowerSource.shape==='skeleton'){
        const bone=material(ivory);curve(upper,'upper leg costume bone',[[0,-.13,.20],[0,-.53,.17]],.026,bone);curve(leg.knee,'lower leg costume bone',[[0,-.08,.17],[0,-.52,.17]],.025,bone);
        for(const y of[-.13,-.53])for(const side of[-1,1])ball(upper,'bone end',bone,[side*.022,y,.20],[.028,.025,.014],12);
      }
    }
  }else{
    const skirtProfile=[[1.02,.53,.375],[1.29,.404,.291],[1.5,.324,.227],[1.72,.279,.201]];
    mesh(bottomGroup,'full skirt shell',loftGeometry(skirtProfile,{pleats:lower.shape==='pleated'?.025:.012}),lowerMat);
    ring(bottomGroup,'skirt hem',1.02,.531,.377,.016,lowerTrim);decorateSurface(bottomGroup,skirtProfile,lower.shape,lowerColor);
    specialFabric(bottomGroup,skirtProfile,lowerSource.shape,lowerColor);
  }
  ring(bottomGroup,'waistband',1.72,.284,.207,.027,lowerTrim);
}

function addShoes(bones,item,color,skinColor){
  const style=item.shape;item={...item,shape:({pearlshoe:'maryjane',diamondboot:'starboot',stripeboot:'boot',ribbonshoe:'maryjane'})[style]||style};
  const mat=material(color,{roughness:.55}),sole=material(colorMix(color,'#fff6de',.45)),detail=material(ivory);
  const boots=['boot','starboot','laceboot','hightop'].includes(item.shape);
  for(const leg of bones.legs){
    const shoe=group(leg.foot,item.name,[0,0,.07]);shoe.userData.itemId=item.id;shoe.userData.fitted=true;
    leg.footSkin.visible=false;
    ball(shoe,'rounded shoe',mat,[0,-.025,.063],[.142,.103,.254]);
    ball(shoe,'shoe sole',sole,[0,-.081,.063],[.147,.045,.262]);
    if(boots){
      const shaft=group(leg.knee,'fitted boot calf',[0,-.67,.07]);
      const height=item.shape==='hightop'?.24:.46;
      mesh(shaft,'boot shaft',loftGeometry([[.005,.149,.17],[height*.45,.151,.166],[height,.154,.166]]),mat,[0,0,-.07]);
      ring(shaft,'boot top',height,.154,.166,.015,sole).position.z=-.07;
      if(style==='stripeboot')for(const y of[.09,.19,.29,.39])ring(shaft,'costume boot stripe',y,.156,.173,.026,sole).position.z=-.07;
      if(item.shape==='starboot'){const s=group(shaft,'boot star',[0,.25,.101]);star(s,.05,detail);}
      else if(['laceboot','hightop'].includes(item.shape))for(let i=0;i<4;i++) {
        const y=.06+i*(height-.1)/4;
        curve(shaft,'crossed boot laces',[[-.061,y,.091],[.061,y+.04,.091]],.008,detail);
        curve(shaft,'crossed boot laces',[[.061,y,.092],[-.061,y+.04,.092]],.008,detail);
      }
      else for(const y of [.12,.22,.32])curve(shaft,'boot stitching',[[-.06,y,.087],[0,y,.101],[.06,y,.087]],.008,sole);
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
      if(style==='pearlshoe')for(const x of[-.08,0,.08])ball(shoe,'shoe pearl',detail,[x,.095,.035],[.022,.022,.022],12);
      if(style==='ribbonshoe')bow(shoe,[0,.10,.06],.065,mat).rotation.x=-.7;
    }
  }
}

function addAccessories(root,bones,outfit,catalog){
  for(const [slot,piece] of Object.entries(outfit.extras)){
    if(!piece)continue;const source=catalog[piece.id],style=source.shape,item={...source,shape:({royalcrown:'tiara',quiltedbag:'bag',starcape:'cape',pumpkinbag:'bag',pumpkinhat:'beret'})[style]||style},mat=material(piece.color,{roughness:.55}),cream=material(ivory),gold=material('#e6bf69',{metalness:.4,roughness:.4});
    const target=['head','ears'].includes(slot)?bones.head:slot==='bag'||slot==='wrist'?bones.arms[1].forearm:root;
    const accessory=group(target,item.name);accessory.userData.itemId=item.id;
    if(slot==='head' && outfit.hair==='curls'){accessory.scale.setScalar(1.22);accessory.position.y=.025;}
    if(slot==='pet'){
      accessory.userData.heldPet=true;accessory.position.set(-.23,1.9,.51);
      const fur=mat,soft=material(colorMix(piece.color,ivory,.55)),ink=material('#382a37');
      ball(accessory,'pet body',fur,[0,.14,0],[.19,.20,.15]);ball(accessory,'pet head',fur,[0,.35,.055],[.18,.165,.15]);
      for(const side of[-1,1]){
        ball(accessory,'pet paw',soft,[side*.125,.035,.11],[.075,.065,.078]);
        ball(accessory,'pet eye',ink,[side*.065,.37,.192],[.019,.024,.012],12);
        ball(accessory,'pet eye shine',cream,[side*.06,.38,.202],[.005,.006,.003],8);
        if(item.shape==='petrabbit')ball(accessory,'bunny ear',fur,[side*.085,.59,.04],[.066,.19,.05]);
        else if(['petcat','petroyalcat'].includes(item.shape)){const ear=mesh(accessory,'kitten ear',new THREE.ConeGeometry(.083,.17,3),fur,[side*.125,.50,.04]);ear.rotation.z=-side*.14;}
        else {const ear=ball(accessory,'puppy ear',item.shape==='petpoodle'?soft:material(colorMix(piece.color,'#75513d',.28)),[side*.165,.35,.025],[.075,.14,.08]);ear.rotation.z=side*.17;}
      }
      ball(accessory,'pet muzzle',soft,[0,.29,.177],[.085,.06,.04]);ball(accessory,'pet nose',ink,[0,.32,.212],[.024,.017,.012],12);
      bow(accessory,[.11,.48,.13],.058,item.shape==='petpoodle'?gold:material('#dba1bc'));
      curve(accessory,'curled pet tail',[[.14,.12,-.08],[.25,.16,-.12],[.28,.31,-.12]],.037,fur);
      if(item.shape==='petpoodle')for(let i=0;i<7;i++)ball(accessory,'poodle curl',soft,[(i-3)*.045,.50+Math.sin(i)*.02,.06],[.056,.059,.05],12);
      if(item.shape==='petroyalcat'){ring(accessory,'tiny crown',.50,.11,.1,.014,gold);for(let i=-1;i<=1;i++)mesh(accessory,'tiny crown point',new THREE.ConeGeometry(.024,.075,4),gold,[i*.07,.55,.08]);}
    }
    if(['heartnecklace','gemnecklace'].includes(item.shape)){
      curve(accessory,'fine necklace chain',Array.from({length:33},(_,i)=>{const a=i/32*Math.PI*2;return[Math.sin(a)*.19,2.28-Math.max(0,Math.cos(a))*.15,Math.cos(a)*.195];}),.009,gold,true);
      if(item.shape==='gemnecklace')mesh(accessory,'necklace gemstone',new THREE.OctahedronGeometry(.064),mat,[0,2.095,.214]);
      else {const heart=new THREE.Shape();heart.moveTo(0,-.06);heart.bezierCurveTo(-.12,.01,-.04,.11,0,.04);heart.bezierCurveTo(.04,.11,.12,.01,0,-.06);mesh(accessory,'heart pendant',new THREE.ExtrudeGeometry(heart,{depth:.018,bevelEnabled:false}),mat,[0,2.10,.209]);}
    }
    if(['flowerearrings','diamondearrings'].includes(item.shape))for(const side of[-1,1]){
      ball(accessory,'earring stud',gold,[side*.444,-.06,.04],[.025,.025,.025],12);
      const pendant=group(accessory,'earring pendant',[side*.449,-.17,.05]);
      if(item.shape==='flowerearrings')flower(pendant,.060,mat,gold);else mesh(pendant,'diamond drop',new THREE.OctahedronGeometry(.061),mat);
    }
    if(['bracelet','pearlbracelet'].includes(item.shape)){
      ring(accessory,'bracelet chain',-.375,.094,.098,.012,gold);
      for(let i=0;i<10;i++){const a=i/10*Math.PI*2;ball(accessory,'bracelet bead',item.shape==='pearlbracelet'?cream:mat,[Math.sin(a)*.097,-.375,Math.cos(a)*.102],[.020,.022,.020],12);}
      if(item.shape==='bracelet'){const charm=group(accessory,'star charm',[.03,-.43,.10]);star(charm,.035,gold);}
    }
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
      if(style==='pumpkinhat'){capsule(accessory,'pumpkin stem',material('#719063'),[0,.72,0],.035,.17);const leaf=ball(accessory,'pumpkin hat leaf',material('#88a277'),[.12,.66,0],[.16,.033,.075]);leaf.rotation.z=.2;}
    }
    if(['witchhat','wizardhat','sunhat'].includes(item.shape)){
      mesh(accessory,'wide hat brim',new THREE.CylinderGeometry(.57,.57,.055,40),mat,[0,.43,0]);
      mesh(accessory,'hat crown',item.shape==='sunhat'?new THREE.CylinderGeometry(.32,.36,.24,32):new THREE.ConeGeometry(.34,.77,32),mat,[0,item.shape==='sunhat'?.55:.82,0]);
      ring(accessory,'hat ribbon',.51,.33,.33,.036,item.shape==='sunhat'?cream:gold);
      if(item.shape==='wizardhat')for(const[x,y]of[[-.12,.72],[.08,.92],[.02,.61]]){const s=group(accessory,'wizard hat star',[x,y,.26-(y-.6)*.42]);star(s,.055,gold);}
      else bow(accessory,[.15,.53,.32],.085,cream);
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
        ball(accessory,'bag body',mat,[0,-.14,0],[.19,.17,.09]);
        if(style==='pumpkinbag'){for(const side of[-1,1])ball(accessory,'pumpkin pail eye',material('#32313f'),[side*.065,-.09,.088],[.022,.028,.012],12);curve(accessory,'pumpkin pail smile',[[-.075,-.19,.08],[0,-.23,.095],[.075,-.19,.08]],.013,material('#32313f'));}
        else if(style==='quiltedbag'){for(const x of[-.08,0,.08]){curve(accessory,'quilt seam',[[x-.07,-.2,.08],[x+.07,-.06,.08]],.005,cream);curve(accessory,'quilt seam',[[x-.07,-.06,.08],[x+.07,-.2,.08]],.005,cream);}ball(accessory,'gold clasp',gold,[0,-.09,.105],[.035,.025,.014],12);}
        else {const f=group(accessory,'bag flower',[0,-.14,.092]);flower(f,.06,cream,gold);}
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
    if(item.shape==='batwings')for(const side of[-1,1]){
      const wing=new THREE.Shape();wing.moveTo(0,0);wing.quadraticCurveTo(side*.35,.59,side*.94,.42);wing.lineTo(side*.79,-.05);wing.quadraticCurveTo(side*.6,.1,side*.51,-.27);wing.quadraticCurveTo(side*.29,-.09,side*.18,-.43);wing.lineTo(0,-.15);
      mesh(accessory,'friendly bat wing',new THREE.ExtrudeGeometry(wing,{depth:.045,bevelEnabled:true,bevelThickness:.008,bevelSize:.012,bevelSegments:1,steps:1}),mat,[0,2.08,-.26]);
      curve(accessory,'bat wing seam',[[0,2.08,-.205],[side*.46,2.4,-.205],[side*.9,2.5,-.205]],.012,cream);
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

// Shop stock uses the same garment builders as the character. Bake the joints
// into a few vertex-coloured meshes so the entire wardrobe can stay on display.
export function buildDisplayItem(item,catalog){
  const source=new THREE.Group(),bones={arms:[],legs:[],head:group(source,'display head')};
  for(const side of[-1,1]){
    const upper=group(source,'display shoulder',[side*.337,2.17,0]);upper.rotation.z=side*.22;
    const forearm=group(upper,'display elbow',[0,-.47,0]);
    bones.arms.push({side,upper,forearm,upperSkin:{},lowerUpperSkin:{},forearmSkin:{}});
    const hip=group(source,'display hip',[side*.155,1.51,0]),knee=group(hip,'display knee',[0,-.68,0]),foot=group(knee,'display ankle',[0,-.67,0]);
    bones.legs.push({side,hip,knee,foot,thighSkin:{},shinSkin:{},footSkin:{}});
  }
  const piece={id:item.id,color:item.color},outfit={dress:null,top:null,bottom:null,shoes:null,extras:{},skin:'#e4ba9e',hair:'waves',hairColor:'#493027',makeup:piece};
  const slot={dresses:'dress',tops:'top',bottoms:'bottom'}[item.category];
  if(slot){outfit[slot]=piece;addClothes(source,bones,{},outfit,catalog);}
  else if(item.category==='shoes')addShoes(bones,item,item.color,outfit.skin);
  else if(item.category==='extras'){
    outfit.extras[item.slot]=piece;addAccessories(source,bones,outfit,catalog);
    if(['neck','wrist'].includes(item.slot))source.rotation.x=.35;
    if(['cape','starcape'].includes(item.shape))source.rotation.y=Math.PI;
  }else{
    const skin=material(outfit.skin);
    ball(bones.head,'display face',skin,[0,0,0],[.424,.525,.375],20);
    addFace(bones.head,skin,outfit.hairColor);
    if(item.category==='hair')addHair(bones.head,item.shape,item.color);
    else addMakeup(bones.head,outfit,catalog);
  }
  source.updateMatrixWorld(true);
  const batches=new Map();
  source.traverseVisible(part=>{
    if(!part.isMesh)return;
    const m=part.material,key=[m.type,m.roughness,m.metalness,m.transparent,m.opacity,m.side,m.depthWrite,part.renderOrder>0].join('|');
    if(!batches.has(key)){
      const baked=m.clone();baked.color.set('#ffffff');baked.vertexColors=true;
      batches.set(key,{material:baked,geometries:[],order:part.renderOrder>0?1:0});
    }
    const geometry=new THREE.BufferGeometry(),position=part.geometry.attributes.position;
    geometry.setAttribute('position',position.clone());geometry.setAttribute('normal',part.geometry.attributes.normal.clone());
    geometry.setIndex(part.geometry.index?part.geometry.index.clone():Array.from({length:position.count},(_,i)=>i));
    const colors=new Float32Array(position.count*3);
    for(let i=0;i<position.count;i++)colors.set([m.color.r,m.color.g,m.color.b],i*3);
    geometry.setAttribute('color',new THREE.BufferAttribute(colors,3));geometry.applyMatrix4(part.matrixWorld);
    batches.get(key).geometries.push(geometry);
  });
  const display=new THREE.Group();display.name=item.name;display.userData.itemId=item.id;
  for(const batch of batches.values()){
    const geometry=mergeGeometries(batch.geometries);batch.geometries.forEach(g=>g.dispose());
    const part=new THREE.Mesh(geometry,batch.material);part.renderOrder=batch.order;display.add(part);
  }
  disposeTree(source);
  const bounds=new THREE.Box3().setFromObject(display),center=bounds.getCenter(new THREE.Vector3());
  display.children.forEach(part=>part.geometry.translate(-center.x,-bounds.min.y,-center.z));
  return display;
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
    const foot=group(knee,'ankle joint',[0,-.67,0]);
    const footSkin=ball(foot,'foot',skin,[0,-.03,.11],[.116,.084,.20]);
    bones.legs.push({side,hip,knee,foot,thighSkin,shinSkin,footSkin});
  }
  addClothes(root,bones,body,outfit,catalog);addShoes(bones,catalog[outfit.shoes.id],outfit.shoes.color,outfit.skin);addAccessories(root,bones,outfit,catalog);
  const heartShape=new THREE.Shape();heartShape.moveTo(0,-.12);heartShape.bezierCurveTo(-.26,.01,-.11,.24,0,.095);heartShape.bezierCurveTo(.11,.24,.26,.01,0,-.12);
  const poseHeart=mesh(root,'heart for the heart-hug pose',new THREE.ExtrudeGeometry(heartShape,{depth:.025,bevelEnabled:true,bevelSize:.012,bevelThickness:.008,bevelSegments:2,steps:1}),material('#dc8fae'),[0,1.96,.59]);poseHeart.visible=false;
  // A waist pivot lets the shoulders and fitted clothing turn together.
  const torso=group(root,'waist joint',[0,1.6,0]);bones.torso=torso;
  const garmentName=catalog[outfit.dress?.id||outfit.top?.id]?.name;
  for(const child of [...root.children])if(child!==torso&&(
    child===body||child===bones.head||child===poseHeart||child.name==='neck'||child.name===garmentName||
    bones.arms.some(arm=>arm.upper===child)||Object.values(outfit.extras).some(piece=>piece&&catalog[piece.id]?.name===child.name)
  )){torso.add(child);child.position.y-=1.6;}
  const reducedMotion=typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  const skirt=outfit.dress?root.getObjectByName('fitted dress skirt'):
    ['pleated','tutu','flower','star-skirt','sequin'].includes(catalog[outfit.bottom?.id]?.shape)?root.getObjectByName(catalog[outfit.bottom.id].name):null;
  const longSkirt=!!outfit.dress&&['gown','cosmic','velvet','pearl','aurora','witch','vampire'].includes(catalog[outfit.dress.id].shape);
  const hem=longSkirt?.15:outfit.dress?1:1.02,coveredLegs=skirt?new THREE.Plane(new THREE.Vector3(0,-1,0),hem):null;
  if(coveredLegs){
    const clipped=new Map();
    for(const leg of bones.legs)leg.hip.traverse(part=>{
      if(!part.isMesh)return;
      // Only the skin/shoes below the skirt hem are visible. The articulated
      // knees can bend freely without poking through the surrounding fabric.
      if(!clipped.has(part.material)){
        const copy=part.material.clone();copy.clippingPlanes=[coveredLegs];copy.clipShadows=true;clipped.set(part.material,copy);
      }
      part.material=clipped.get(part.material);
    });
    const retained=new Set();root.traverse(part=>{if(part.material)retained.add(part.material);});
    clipped.forEach((copy,original)=>{if(!retained.has(original))original.dispose();});
  }
  const heldPet=!!outfit.extras.pet,down=new THREE.Vector3(0,-1,0);
  function placeArm(arm,hand){
    const shoulder=new THREE.Vector3(arm.side*.337,2.17,0),target=new THREE.Vector3(...hand);
    const direction=target.clone().sub(shoulder),length=Math.min(.948,Math.max(.025,direction.length()));direction.normalize();
    const bend=new THREE.Vector3(arm.side*.85,-.08,-.25);bend.addScaledVector(direction,-bend.dot(direction)).normalize();
    const along=(.47**2-.48**2+length**2)/(2*length),height=Math.sqrt(Math.max(0,.47**2-along**2));
    const elbow=shoulder.clone().addScaledVector(direction,along).addScaledVector(bend,height);
    target.copy(shoulder).addScaledVector(direction,length);
    arm.upper.quaternion.setFromUnitVectors(down,elbow.clone().sub(shoulder).normalize());
    const lower=new THREE.Quaternion().setFromUnitVectors(down,target.sub(elbow).normalize());
    arm.forearm.quaternion.copy(arm.upper.quaternion).invert().multiply(lower);
  }
  function applyFrame(frame,style,walking){
    root.position.set(...frame.position);root.rotation.set(...frame.rotation);
    // Lower the hips just enough for both legs to reach their planted feet.
    for(const [i,leg] of bones.legs.entries()){
      const [x,lift,z]=frame.feet[i],dx=x-root.position.x-leg.side*.155,dz=z-root.position.z;
      root.position.y=Math.min(root.position.y,.16+lift+Math.sqrt(Math.max(.1,1.342**2-dx**2-dz**2))-1.51);
    }
    torso.rotation.set(...frame.torso);bones.head.rotation.set(...frame.head);
    poseHeart.visible=style===4&&walking<.1&&!heldPet;
    bones.arms.forEach((arm,i)=>placeArm(arm,heldPet&&i===0?[-.20,1.93,.55]:frame.hands[i]));
    for(const [i,leg] of bones.legs.entries()){
      const [x,lift,z,pitch]=frame.feet[i],dx=x-root.position.x-leg.side*.155,dy=.16+lift-root.position.y-1.51,dz=z-root.position.z;
      const vertical=Math.hypot(dy,dx),d=Math.min(1.348,Math.hypot(vertical,dz));
      const hipX=-Math.atan2(dz,vertical)-Math.acos(THREE.MathUtils.clamp((.68**2+d*d-.67**2)/(2*.68*d),-1,1));
      const kneeX=Math.PI-Math.acos(THREE.MathUtils.clamp((.68**2+.67**2-d*d)/(2*.68*.67),-1,1)),hipZ=Math.atan2(dx,-dy);
      leg.hip.rotation.set(hipX,0,hipZ,'ZXY');leg.knee.rotation.set(kneeX,0,0);
      leg.foot.rotation.set(-hipX-kneeX+pitch,0,-hipZ,'XZY');
    }
    if(skirt){
      const lift=longSkirt?Math.max(0,-root.position.y-.035):0;
      skirt.scale.y=1-lift/(1.73-hem);skirt.position.y=1.73*(1-skirt.scale.y);
      root.updateWorldMatrix(true,true);
      coveredLegs.set(new THREE.Vector3(0,-1,0),hem+lift+.008).applyMatrix4(root.matrixWorld);
    }
  }
  function pose(time=0,style=0,walking=false){applyFrame(poseFrame(reducedMotion?0:time,style,time*8,walking?1:0),style,walking?1:0);}
  let phase=0,walkWeight=0,previous=null;
  function animate(time,style,{distance=0,dt=1/60,strut=false}={}){
    const seconds=Math.min(.05,Math.max(0,dt));phase+=distance/STRIDE_LENGTH*Math.PI*2;
    walkWeight=THREE.MathUtils.damp(walkWeight,distance>.00001?1:0,14,seconds);
    if(walkWeight<.001)walkWeight=0;if(walkWeight>.999)walkWeight=1;
    const frame=poseFrame(reducedMotion?0:time,style,phase,walkWeight,strut);
    // Ease between poses, but leave the distance-driven steps unsmoothed.
    if(previous){const alpha=1-Math.exp(-14*seconds);
      for(const key of['position','torso','head'])frame[key]=frame[key].map((v,i)=>THREE.MathUtils.lerp(previous[key][i],v,alpha));
      frame.rotation=frame.rotation.map((v,i)=>previous.rotation[i]+Math.atan2(Math.sin(v-previous.rotation[i]),Math.cos(v-previous.rotation[i]))*alpha);
      frame.hands=frame.hands.map((hand,i)=>hand.map((v,j)=>THREE.MathUtils.lerp(previous.hands[i][j],v,alpha)));
      if(walkWeight<.8)frame.feet=frame.feet.map((foot,i)=>foot.map((v,j)=>THREE.MathUtils.lerp(previous.feet[i][j],v,alpha)));
    }
    previous=frame;applyFrame(frame,style,walkWeight);
  }
  pose();
  return {root,bones,pose,animate,coveredLegs,dispose(){disposeTree(root);root.removeFromParent();}};
}
