import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import G from '../game.js';
import { buildCharacter, buildDisplayItem, BODY_PROFILE, fittedProfile, loftGeometry } from '../src/model3d.mjs';
import { STATIONS, STORES, BENCH_BANKS, OBSTACLES, movePlayer, planPath, walkable, nearbyStation, ROOM_LIMIT, WALK_SPEED, advancePath, clearSegment, itemsForStation, shopStock, storeAt } from '../src/world-rules.mjs';
import { ShopperBrain } from '../src/shoppers.mjs';
import { footStep, STRIDE_LENGTH } from '../src/motion.mjs';
import { makeAudience } from '../src/audience.mjs';
import { outfitNotice, friendlyGreeting } from '../src/friend-talk.mjs';

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
  p={x:-8,z:-1.7};assert.ok(walkable(p.x,p.z));for(let i=0;i<150;i++)p=movePlayer(p,{x:0,z:1},.05);
  assert.ok(p.z<-.29);assert.ok(walkable(p.x,p.z));
  p={x:0,z:2};for(let i=0;i<150;i++)p=movePlayer(p,{x:0,z:-1},.05);
  assert.ok(p.z>.6);assert.ok(walkable(p.x,p.z));
});

test('click-to-walk routes reach every station without crossing furniture', () => {
  for(const station of STATIONS){
    const path=planPath({x:0,z:3.6},{x:station.approach[0],z:station.approach[1]});
    assert.ok(path.length, station.id);
    for(const p of path)assert.ok(walkable(p.x,p.z),`${station.id}: route must be walkable`);
    const last=path.at(-1);assert.equal(nearbyStation(last)?.id,station.id);
  }
});

test('central seating leaves both storefront paths and the starting position clear',()=>{
  assert.ok(walkable(0,5.3),'the player starts outside the new benches');
  for(const bank of BENCH_BANKS)assert.equal(walkable(bank.x,bank.z),false,'seating has a solid collision boundary');
  for(const side of[-1,1]){
    assert.ok(clearSegment({x:side*3.6,z:-11.8},{x:side*3.6,z:11.8}),'the path along the shops is clear');
    for(const z of[-4.4,4.5])assert.ok(walkable(side*2.85,z),'old bench locations no longer block walking');
  }
});

test('routes cannot cut diagonally through a rack corner', () => {
  const path=planPath({x:-6,z:1},{x:-3,z:4});
  for(let i=1;i<path.length;i++){
    const a=path[i-1],b=path[i];
    for(let step=0;step<=8;step++)assert.ok(walkable(a.x+(b.x-a.x)*step/8,a.z+(b.z-a.z)*step/8,OBSTACLES));
  }
});

test('all sixteen poses are distinct and switching out of a twirl restores the body', () => {
  const doll=buildCharacter(G.defaultOutfit(),G.byId),poses=new Set();
  for(let i=0;i<G.POSES.length;i++) {
    doll.pose(.9,i,false);doll.root.updateMatrixWorld(true);
    poses.add(JSON.stringify([doll.root.rotation.toArray(),...doll.bones.arms.map(a=>a.forearm.matrixWorld.elements)]));
    const bounds=new THREE.Box3().setFromObject(doll.root);assert.ok(Number.isFinite(bounds.max.y));
  }
  assert.equal(poses.size,16);doll.pose(1,0,false);assert.equal(doll.root.rotation.y,0);doll.dispose();
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

test('every mall shop is stocked correctly and reachable from every other shop', () => {
  assert.equal(STORES.length,8);
  const available=new Set();
  for(const station of STATIONS){
    if(station.id!=='runway'){
      const stock=itemsForStation(G.byId,station);assert.ok(stock.length,station.id);
      for(const item of stock){available.add(item.id);assert.equal(item.collection||'',station.collection||'');}
      assert.equal(storeAt({x:station.approach[0],z:station.approach[1]})?.id,station.storeId);
    }
    for(const target of STATIONS){if(target===station)continue;
      let position={x:station.approach[0],z:station.approach[1]},path=planPath(position,{x:target.approach[0],z:target.approach[1]});
      assert.ok(path.length,`${station.id} to ${target.id}`);
      for(const point of path){assert.ok(clearSegment(position,point),`${station.id} to ${target.id}: no shortcut through walls`);position=point;}
      assert.equal(nearbyStation(position)?.id,target.id);
    }
  }
  assert.equal(available.size,G.ITEMS.length,'every item appears on a physical shop rack or counter');
});

test('the entire catalog is out on physical fixtures without pages or hidden pieces',()=>{
  const fixtures=shopStock(G.byId),ids=fixtures.flatMap(f=>f.items.map(item=>item.id));
  assert.equal(new Set(ids).size,G.ITEMS.length);assert.equal(ids.length,G.ITEMS.length,'each unique piece has a display spot');
  for(const fixture of fixtures){
    assert.ok(fixture.items.length<=(fixture.kind==='rack'?6:12),'pieces fit without overlapping');
    for(const item of fixture.items)assert.equal(item.collection||'',fixture.station.collection||'');
    const front={x:fixture.x+Math.sin(fixture.rotation)*1.1,z:fixture.z+Math.cos(fixture.rotation)*1.1};
    assert.ok(walkable(front.x,front.z),`${fixture.id}: the display can be reached`);
  }
});

test('shop previews use detailed wearable geometry and are batched for a full mall',()=>{
  let drawCalls=0;
  for(const item of G.ITEMS){
    const preview=buildDisplayItem(item,G.byId),bounds=new THREE.Box3().setFromObject(preview);
    assert.equal(preview.userData.itemId,item.id);
    assert.ok(Math.abs(bounds.min.y)<.00001,`${item.id}: preview sits on its shelf`);
    assert.ok(bounds.max.y>0&&bounds.max.z-bounds.min.z>0,`${item.id}: a real 3D object`);
    preview.traverse(part=>{
      if(!part.isMesh)return;drawCalls++;
      assert.ok(part.geometry.attributes.position.array.every(Number.isFinite),item.id);
      assert.equal(part.material.vertexColors,true);part.geometry.dispose();part.material.dispose();
    });
  }
  assert.ok(drawCalls<G.ITEMS.length*4,'detail is baked into a few meshes per item');
});

test('click routes spend the full movement budget across route points without pausing',()=>{
  const advance=advancePath({x:0,z:3.6},[{x:.01,z:3.6},{x:.06,z:3.6},{x:1,z:3.6}],.05);
  assert.ok(Math.abs(advance.distance-WALK_SPEED*.05)<1e-9);assert.ok(Math.abs(advance.position.x-WALK_SPEED*.05)<1e-9);assert.equal(advance.path.length,1);
  let position={x:0,z:5.3},path=planPath(position,{x:8.85,z:9}),frames=0;
  while(path.length&&frames++<300){const result=advancePath(position,path,.05);assert.ok(result.distance>.0001,'a planned route never gets stuck');position=result.position;path=result.path;}
  assert.equal(path.length,0);assert.equal(nearbyStation(position)?.id,'vip');
});

test('the planted foot cancels body travel and ankles keep the soles level',()=>{
  const phase=.2,travel=.08,nextPhase=phase+travel/STRIDE_LENGTH*Math.PI*2;
  assert.equal(footStep(phase).lift,0);assert.ok(Math.abs(footStep(nextPhase).z+travel-footStep(phase).z)<1e-9);
  const doll=buildCharacter(G.equip(G.defaultOutfit(),'shorts'),G.byId);
  for(let i=0;i<120;i++){
    doll.animate(i/60,8,{distance:.035,dt:1/60});doll.root.updateMatrixWorld(true);
    for(const leg of doll.bones.legs){const foot=leg.foot.getWorldPosition(new THREE.Vector3());assert.ok(foot.y>.15&&foot.y<.34);}
  }
  for(let i=0;i<100;i++)doll.animate(2+i/60,8,{distance:0,dt:1/60});
  const final=doll.bones.torso.rotation.toArray();doll.pose(4,8,false);
  for(let i=0;i<3;i++)assert.ok(Math.abs(final[i]-doll.bones.torso.rotation.toArray()[i])<.0001,'chosen pose returns after walking');
  doll.dispose();
});

test('held pets stay cradled and jewelry follows its body joint through every pose',()=>{
  let outfit=G.defaultOutfit();for(const id of['bow-kitten','flower-earrings','charm-bracelet','bag'])outfit=G.equip(outfit,id);
  const doll=buildCharacter(outfit,G.byId),pet=doll.root.getObjectByName('Miss Mittens');
  assert.equal(pet.parent,doll.bones.torso);
  assert.equal(doll.root.getObjectByName('Daisy drops').parent,doll.bones.head);
  assert.equal(doll.root.getObjectByName('Lucky little charms').parent,doll.bones.arms[1].forearm);
  for(let pose=0;pose<G.POSES.length;pose++)for(const walking of[false,true]){
    doll.pose(.9,pose,walking);doll.root.updateMatrixWorld(true);
    const hand=doll.bones.arms[0].forearm.getObjectByName('hand').getWorldPosition(new THREE.Vector3());
    assert.ok(hand.distanceTo(pet.getWorldPosition(new THREE.Vector3()))<.13,`pose ${pose}: a hand supports the pet`);
  }
  doll.dispose();
});

test('walking out of a long twirl takes a short turn instead of spinning backwards',()=>{
  const doll=buildCharacter(G.defaultOutfit(),G.byId);doll.animate(120,5,{dt:1/60});
  let previous=doll.root.rotation.y;
  for(let i=1;i<60;i++){doll.animate(120+i/60,5,{distance:.04,dt:1/60});assert.ok(Math.abs(doll.root.rotation.y-previous)<.4);previous=doll.root.rotation.y;}
  doll.dispose();
});

test('the runway audience claps and waves, with still poses for reduced motion',()=>{
  const scene=new THREE.Group(),audience=makeAudience(scene);assert.equal(audience.people.length,12);
  const first=audience.people[1].arms[0].hand.position.clone();audience.update(.4);
  assert.ok(first.distanceTo(audience.people[1].arms[0].hand.position)>.01);
  const quiet=makeAudience(scene,{reduced:true}),before=quiet.people[0].arms[1].hand.position.clone();quiet.update(5);
  assert.deepEqual(quiet.people[0].arms[1].hand.position,before);
});

test('dresses conceal moving legs above the hem and long gowns stay above the floor',()=>{
  for(const id of['petal','rainbow-dress','velvet-gown','pearl-gown','witch-dress','pleated','sequin-skirt']){
    const doll=buildCharacter(G.equip(G.defaultOutfit(),id),G.byId),anchor=new THREE.Group();anchor.add(doll.root);anchor.position.set(4,0,-3);anchor.rotation.y=.9;
    const long=['velvet-gown','pearl-gown','witch-dress'].includes(id),hem=long?.15:id==='pleated'||id==='sequin-skirt'?1.02:1;
    for(let step=0;step<50;step++){
      doll.animate(step/60,8,{distance:.048,dt:1/60});
      const lift=long?Math.max(0,-doll.root.position.y-.035):0;
      const hiddenPoint=doll.root.localToWorld(new THREE.Vector3(0,hem+lift+.06,.1)),visiblePoint=doll.root.localToWorld(new THREE.Vector3(0,hem+lift-.03,.1));
      assert.ok(doll.coveredLegs.distanceToPoint(hiddenPoint)<0,`${id}: skin above the moving hem is concealed`);
      assert.ok(doll.coveredLegs.distanceToPoint(visiblePoint)>0,`${id}: legs below the hem remain visible`);
      if(long)assert.ok(doll.root.localToWorld(new THREE.Vector3(0,hem+lift,0)).y>.10,'the gown does not sink into the floor');
    }
    for(const leg of doll.bones.legs)leg.hip.traverse(part=>{if(part.isMesh)assert.equal(part.material.clippingPlanes[0],doll.coveredLegs);});
    assert.ok(!doll.root.getObjectByName('tailored bodice').material.clippingPlanes,'only covered leg pieces are masked');
    doll.dispose();
  }
});

test('friendly shoppers notice styling changes, ignore unchanged outfits, and support greetings',()=>{
  const before=G.defaultOutfit();assert.equal(outfitNotice(before,G.clone(before),G),null);
  assert.match(outfitNotice(before,G.wear(before,'bow-kitten'),G),/Miss Mittens/);
  assert.match(outfitNotice(before,G.wear(before,'side-braid'),G),/Storybook braid/);
  assert.match(outfitNotice(before,G.recolor(before,'waves','#54a99f'),G),/Mermaid teal/);
  assert.match(outfitNotice(before,G.wear(before,'diamond-earrings'),G),/Premiere drops/);
  assert.match(outfitNotice(before,G.wear(before,'pumpkin-dress'),G),/Pumpkin patch/);
  assert.match(outfitNotice(before,G.wear(before,'ghost-paint'),G),/Boo cheeks/);
  assert.equal(outfitNotice(before,{...before,skin:'#65402f'},G),null,'comments concern styling, not skin or body');
  const greetings=new Set(Array.from({length:6},(_,i)=>friendlyGreeting(before,G,i)));assert.equal(greetings.size,6);
  const brain=new ShopperBrain(G,0);brain.greet({x:0,z:4},8);const start={...brain.position};
  const frame=brain.tick(.05,{x:0,z:4});assert.equal(frame.pose,8);assert.equal(frame.walking,false);assert.deepEqual(brain.position,start);
  for(let i=0;i<125;i++)brain.tick(.05,{x:0,z:4});assert.equal(brain.phase,'walking','the friend returns to shopping after chatting');
});
