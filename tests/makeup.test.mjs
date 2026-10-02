import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import G from '../game.js';
import A from '../art.js';
import {buildCharacter} from '../src/model3d.mjs';
import {HEAD_PROFILES,shapeHeadPoint,strokePaths,drawFacePaint} from '../src/face-paint.mjs';
import {mirrorCameraFrame} from '../src/makeup-mirror.mjs';

const stroke={tool:'brush',color:'#bda5d8',size:.045,mirror:true,points:[[.7,.62],[.76,.65],[.8,.62]]};

test('drawings are bounded, validated and preserve eraser order and broken strokes',()=>{
  const paint=[stroke,{...stroke,tool:'eraser',mirror:false,points:[[.72,.62],null,[.8,.6]]}],before=G.clone(paint);
  assert.deepEqual(G.sanitizeFacePaint(paint),paint);assert.deepEqual(paint,before);
  assert.deepEqual(G.sanitizeFacePaint([{...stroke,tool:'<script>'},{...stroke,points:[[NaN,0],[0,Infinity]]}]),[]);
  const bad=G.sanitizeFacePaint([{...stroke,size:99,color:'url(x)',points:[[-5,2]]}])[0];assert.equal(bad.size,.13);assert.deepEqual(bad.points,[[0,1]]);assert.equal(bad.color,G.COLORS[0].hex);
  const full=G.sanitizeFacePaint(Array.from({length:99},()=>({...stroke,points:Array.from({length:200},()=>[.2,.4])})));
  assert.ok(full.length<=G.PAINT_LIMITS.strokes);assert.ok(full.every(s=>s.points.length<=G.PAINT_LIMITS.perStroke));assert.ok(full.reduce((n,s)=>n+s.points.length,0)<=G.PAINT_LIMITS.points);
  assert.equal(G.addPaintStroke({...G.defaultOutfit(),facePaint:full},stroke),null,'full drawings are retained, not silently truncated to accept a new stroke');
});

test('paint and head shapes survive outfits, group photos, backups and matching',()=>{
  let outfit=G.addPaintStroke(G.defaultOutfit(),stroke);outfit.headShape='heart';
  assert.deepEqual(G.sanitizeOutfit(outfit),outfit);assert.deepEqual(G.randomOutfit(outfit).facePaint,outfit.facePaint);assert.equal(G.randomOutfit(outfit).headShape,'heart');
  assert.deepEqual(G.matchOutfit(G.defaultOutfit(),outfit).facePaint,outfit.facePaint);assert.equal(G.matchOutfit(G.defaultOutfit(),outfit).headShape,'heart');
  const look={id:'painted-friends',name:'Our own makeup',outfit,themeId:'garden',pose:9,date:'2026-10-01T12:00:00.000Z',friends:[{name:'Nova',outfit}],photo:{background:'halloween',friends:[{name:'Poppy',outfit}],stickers:[]}};
  const backup={format:'style-club-lookbook',version:1,looks:[look],friendStyles:{Poppy:{outfit,occasion:'halloween'}}};
  assert.deepEqual(G.readBackupData(JSON.stringify(backup)),{looks:[look],friendStyles:backup.friendStyles});
  const old=G.defaultOutfit();delete old.facePaint;delete old.headShape;
  assert.equal(G.sanitizeOutfit(old).headShape,'oval');assert.deepEqual(G.sanitizeOutfit(old).facePaint,[]);
  assert.equal(G.sanitizeOutfit({...old,headShape:'__proto__'}).headShape,'oval');
  assert.deepEqual(G.score(outfit,'garden'),G.score(G.defaultOutfit(),'garden'));
});

test('wash off removes custom paint even when the base is already a fresh face',()=>{
  const painted=G.addPaintStroke(G.defaultOutfit(),stroke),snapshot=G.clone(painted);
  assert.equal(G.equip(painted,'fresh-face').facePaint.length,0);assert.equal(G.wear(painted,'fresh-face').facePaint.length,0);
  assert.equal(G.wear(painted,'butterfly-paint').facePaint.length,1);assert.deepEqual(painted,snapshot);
});

test('a full lookbook of painted groups fits in a restorable backup',()=>{
  const outfit=G.defaultOutfit();outfit.facePaint=G.sanitizeFacePaint(Array.from({length:48},()=>({...stroke,points:Array.from({length:128},()=>[.765,.543])})));
  const friends=G.FRIEND_NAMES.map(name=>({name,outfit})),looks=G.sanitizeLooks(Array.from({length:40},(_,i)=>({id:`paint-${i}`,name:'Our painted party',themeId:'garden',date:'2026-10-01T12:00:00.000Z',outfit,friends,photo:{background:'halloween',friends,stickers:[]}})));
  const friendStyles=G.sanitizeFriendStyles(Object.fromEntries(friends.map(({name,outfit})=>[name,{outfit,occasion:'halloween'}])));
  const backup=JSON.stringify({format:'style-club-lookbook',version:1,looks,friendStyles});
  assert.ok(Buffer.byteLength(backup)<G.MAX_BACKUP_BYTES,'exported custom makeup must not exceed the restore limit');
  assert.deepEqual(G.readBackupData(backup),{looks,friendStyles});
});

test('both-cheek strokes reflect horizontally, break off-face and erase only the drawing layer',()=>{
  const paths=strokePaths({...stroke,points:[[.7,.6],null,[.8,.7]]});
  assert.equal(paths.length,4);assert.deepEqual(paths[0],[[.7,.6]]);assert.ok(Math.abs(paths[2][0][0]-.3)<1e-9);
  const operations=[],ctx={save(){},restore(){},clearRect(){operations.push('clear');},beginPath(){},arc(){},fill(){operations.push(this.globalCompositeOperation);},moveTo(){},lineTo(){},stroke(){operations.push(this.globalCompositeOperation);}};
  drawFacePaint(ctx,[stroke,{...stroke,tool:'eraser',mirror:false}]);assert.deepEqual(operations,['clear','source-over','source-over','destination-out']);
});

test('all head shapes fit every hairstyle and retain the same paint coordinates',()=>{
  assert.deepEqual(Object.keys(HEAD_PROFILES).sort(),G.HEAD_SHAPES.map(s=>s.id).sort());
  const silhouettes=new Set();let expectedUV;
  for(const shape of G.HEAD_SHAPES){
    for(const hair of G.ITEMS.filter(i=>i.category==='hair')){
      const outfit={...G.addPaintStroke(G.defaultOutfit(),stroke),headShape:shape.id,hair:hair.id},doll=buildCharacter(outfit,G.byId);
      doll.pose(0,0);doll.root.updateMatrixWorld(true);
      const skin=doll.root.getObjectByName('head'),bounds=new THREE.Box3().setFromObject(skin);assert.ok(bounds.min.y>2.2);assert.ok(bounds.max.y<3.55);
      doll.root.traverse(part=>{if(part.isMesh)assert.ok(part.geometry.attributes.position.array.every(Number.isFinite),`${shape.id} / ${hair.id}`);});
      const uv=doll.paintSurface.geometry.attributes.uv.array;if(!expectedUV)expectedUV=uv.slice();assert.deepEqual(uv,expectedUV,'paint does not slide when the head shape changes');
      if(hair.id==='waves')silhouettes.add(JSON.stringify([bounds.min.toArray(),bounds.max.toArray()]));
      const u=.7,v=.64,point=shapeHeadPoint(new THREE.Vector3((u-.5)*.848,(.5-v)*1.05,.375*Math.sqrt(1-(u*2-1)**2-(1-v*2)**2)+.009),shape.id).applyMatrix4(doll.bones.head.matrixWorld);
      const ray=new THREE.Raycaster(point.clone().add(new THREE.Vector3(0,0,2)),new THREE.Vector3(0,0,-1)),hit=ray.intersectObject(doll.paintSurface)[0];
      assert.ok(hit);assert.ok(Math.abs(hit.uv.x-u)<.004);assert.ok(Math.abs(1-hit.uv.y-v)<.004);
      let disposed=false;doll.paintSurface.material.map.addEventListener('dispose',()=>disposed=true);doll.dispose();assert.equal(disposed,true,'paint textures are released with the character');
    }
  }
  assert.equal(silhouettes.size,4);
});

test('the mirror camera faces the character squarely and fits a face on narrow screens',()=>{
  const face={x:7,y:2.13,z:-4};
  for(const yaw of [0,Math.PI/2,Math.PI,4.5])for(const aspect of [.5,1,1.8]){
    const frame=mirrorCameraFrame(face,yaw,aspect),forward=new THREE.Vector3(Math.sin(yaw),0,Math.cos(yaw));
    assert.ok(frame.position.clone().sub(frame.target).normalize().dot(forward)>.999);
    const camera=new THREE.PerspectiveCamera(47,aspect,.1,30);camera.position.copy(frame.position);camera.lookAt(frame.target);camera.updateMatrixWorld();
    for(const [x,y]of [[-.6,-.6],[.6,.7]]){const point=new THREE.Vector3(x,y,0).applyAxisAngle(new THREE.Vector3(0,1,0),yaw).add(new THREE.Vector3(face.x,face.y,face.z)).project(camera);assert.ok(Math.abs(point.x)<.99&&Math.abs(point.y)<.99);}
  }
});

test('illustrated backups include custom strokes and keep eraser masks and input safe',()=>{
  const outfit={...G.defaultOutfit(),headShape:'round',facePaint:[stroke,{...stroke,tool:'eraser'}]},svg=A.avatar(outfit,G.byId);
  assert.match(svg,/#bda5d8/);assert.match(svg,/<mask/);assert.match(svg,/scale\(1.11 .90\)/);assert.doesNotMatch(svg,/NaN|undefined/);
  const unsafe=A.avatar({...outfit,facePaint:[{...stroke,color:'"><script>alert(1)</script>'}]},G.byId);assert.doesNotMatch(unsafe,/<script/);
});
