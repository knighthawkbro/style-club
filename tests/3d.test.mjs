import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import G from '../game.js';
import { buildCharacter, BODY_PROFILE, fittedProfile, loftGeometry } from '../src/model3d.mjs';
import { STATIONS, OBSTACLES, movePlayer, planPath, walkable, nearbyStation, ROOM_LIMIT, WALK_SPEED } from '../src/world-rules.mjs';
import { ShopperBrain } from '../src/shoppers.mjs';

test('every wardrobe item builds finite, volumetric 3D geometry', () => {
  for (const item of G.ITEMS) {
    const outfit = G.equip(G.defaultOutfit(), item.id);
    const doll = buildCharacter(outfit, G.byId);
    const bounds = new THREE.Box3().setFromObject(doll.root);
    assert.ok(bounds.max.y > 3.2 && bounds.max.y < 4.5, item.id);
    assert.ok(bounds.max.z - bounds.min.z > .6, 'the model must have real depth');
    let count = 0;
    doll.root.traverse(child => {
      if (!child.isMesh) return; count++;
      assert.ok(child.material?.isMaterial, `${item.id}: every mesh has a material`);
      const positions = child.geometry.attributes.position.array;
      assert.ok(positions.every(Number.isFinite), `${item.id}: no malformed vertices`);
    });
    assert.ok(count > 25); doll.dispose();
  }
});

test('the bodice has clearance around the entire torso, including the back', () => {
  const fitted = fittedProfile(BODY_PROFILE);
  fitted.forEach((ring, i) => { assert.ok(ring[1] > BODY_PROFILE[i][1]); assert.ok(ring[2] > BODY_PROFILE[i][2]); });
  const geo = loftGeometry(fitted), position = geo.attributes.position;
  for (let row = 0; row < position.count / 49; row++) {
    assert.ok(Math.abs(position.getX(row*49)-position.getX(row*49+48)) < .00001);
    assert.ok(Math.abs(position.getZ(row*49)-position.getZ(row*49+48)) < .00001);
  }
  geo.computeBoundingBox(); assert.ok(geo.boundingBox.min.z < -.2); assert.ok(geo.boundingBox.max.z > .2);
  geo.dispose();
});

test('sleeves follow the arms, trousers follow the knees, and covered skin is hidden', () => {
  let outfit = G.equip(G.equip(G.defaultOutfit(), 'sweater'), 'jeans');
  const doll = buildCharacter(outfit, G.byId);
  assert.equal(doll.root.getObjectByName('body under clothes').visible, false);
  for (const arm of doll.bones.arms) {
    assert.equal(arm.forearmSkin.visible, false);
    const sleeve = arm.upper.getObjectByName('fitted sleeve');
    assert.equal(sleeve.parent, arm.upper);
  }
  for (const leg of doll.bones.legs) {
    assert.equal(leg.thighSkin.visible, false); assert.equal(leg.shinSkin.visible, false);
    assert.equal(leg.knee.getObjectByName('lower trouser shell').parent, leg.knee);
  }
  doll.root.updateMatrixWorld(true);
  const sleeve = doll.bones.arms[0].upper.getObjectByName('fitted sleeve');
  const before = sleeve.matrixWorld.clone(); doll.pose(1, 2); doll.root.updateMatrixWorld(true);
  assert.notDeepEqual(sleeve.matrixWorld.elements, before.elements);
  doll.dispose();
});

test('all six skin tones remain supported without changing the clothing geometry', () => {
  const counts=[];
  for(const skin of G.SKIN_TONES){const outfit=G.defaultOutfit();outfit.skin=skin.hex;const doll=buildCharacter(outfit,G.byId);let vertices=0;doll.root.traverse(m=>{if(m.geometry)vertices+=m.geometry.attributes.position.count;});counts.push(vertices);doll.dispose();}
  assert.equal(new Set(counts).size,1);
});

test('tops end at the waistband instead of showing through trousers', () => {
  for (const top of G.ITEMS.filter(item => item.category === 'tops')) {
    const doll = buildCharacter(G.equip(G.equip(G.defaultOutfit(), top.id), 'jeans'), G.byId);
    const bodice = doll.root.getObjectByName('tailored bodice');
    bodice.geometry.computeBoundingBox();
    assert.ok(bodice.geometry.boundingBox.min.y >= 1.719, top.id);
    doll.dispose();
  }
});

test('movement speed is frame based and diagonals cannot move faster', () => {
  const start={x:0,z:4};
  const straight=movePlayer(start,{x:1,z:0},.05),diagonal=movePlayer(start,{x:1,z:1},.05);
  assert.ok(Math.abs(Math.hypot(straight.x,straight.z-4)-WALK_SPEED*.05)<1e-9);
  assert.ok(Math.abs(Math.hypot(diagonal.x,diagonal.z-4)-WALK_SPEED*.05)<1e-9);
  assert.deepEqual(movePlayer(start,{x:1,z:0},10),straight,'a suspended tab cannot teleport the player');
});

test('the player cannot walk through walls or furniture', () => {
  let p={x:ROOM_LIMIT-.02,z:4};p=movePlayer(p,{x:1,z:0},.05);assert.ok(p.x<=ROOM_LIMIT);
  p={x:-4.45,z:-1.6};for(let i=0;i<150;i++)p=movePlayer(p,{x:-1,z:0},.05);
  assert.ok(p.x>-4.7);assert.ok(walkable(p.x,p.z));
});

test('click-to-walk routes reach every station without crossing furniture', () => {
  for(const station of STATIONS){
    const path=planPath({x:0,z:3.6},{x:station.approach[0],z:station.approach[1]});
    assert.ok(path.length, station.id);
    for(const p of path)assert.ok(walkable(p.x,p.z),`${station.id}: route must be walkable`);
    const last=path.at(-1);assert.equal(nearbyStation(last)?.id,station.id);
  }
});

test('routes cannot cut diagonally through a rack corner', () => {
  const path=planPath({x:-6,z:1},{x:-3,z:4});
  for(let i=1;i<path.length;i++){
    const a=path[i-1],b=path[i];
    for(let step=0;step<=8;step++)assert.ok(walkable(a.x+(b.x-a.x)*step/8,a.z+(b.z-a.z)*step/8,OBSTACLES));
  }
});

test('all eight poses are distinct and switching out of a twirl restores the body', () => {
  const doll=buildCharacter(G.defaultOutfit(),G.byId),poses=new Set();
  for(let i=0;i<G.POSES.length;i++) {
    doll.pose(.9,i,false);doll.root.updateMatrixWorld(true);
    poses.add(JSON.stringify([doll.root.rotation.toArray(),...doll.bones.arms.map(a=>a.forearm.matrixWorld.elements)]));
    const bounds=new THREE.Box3().setFromObject(doll.root);assert.ok(Number.isFinite(bounds.max.y));
  }
  assert.equal(poses.size,8);doll.pose(1,0,false);assert.equal(doll.root.rotation.y,0);doll.dispose();
});

test('shoppers wander around furniture, visit stations and change only their own clothes', () => {
  const player=G.defaultOutfit(),before=G.clone(player),brains=[0,1,2].map(i=>new ShopperBrain(G,i));
  const moved=brains.map(()=>false),start=brains.map(b=>({...b.position}));
  for(let step=0;step<3600;step++)for(const [index,brain]of brains.entries()) {
    brain.tick(.05,{x:0,z:3.6},brains.filter(other=>other!==brain).map(other=>other.position));
    assert.ok(walkable(brain.position.x,brain.position.z),`${brain.name} stays out of furniture`);
    if(Math.hypot(brain.position.x-start[index].x,brain.position.z-start[index].z)>1)moved[index]=true;
  }
  assert.ok(moved.every(Boolean));
  for(const brain of brains){assert.ok(brain.changes>=3,`${brain.name} tries several looks`);assert.deepEqual(G.sanitizeOutfit(brain.outfit),brain.outfit);}
  assert.deepEqual(player,before);
});
