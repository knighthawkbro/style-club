import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import G from '../game.js';
import {ShopperBrain} from '../src/shoppers.mjs';
import {buildCharacter} from '../src/model3d.mjs';
import {SeatMotion,interactionFrame} from '../src/interactions.mjs';
import {footStep,poseFrame,STRIDE_LENGTH,HEEL_STRIDE_LENGTH} from '../src/motion.mjs';

test('heel steps are shorter, lower and planted in world space',()=>{
  assert.ok(HEEL_STRIDE_LENGTH<STRIDE_LENGTH);
  const phase=.6,next=phase+.02/HEEL_STRIDE_LENGTH*Math.PI*2;
  assert.ok(Math.abs(footStep(next,true).z-footStep(phase,true).z+.02)<1e-10);
  assert.equal(footStep(phase,true).lift,0);
  assert.ok(footStep(Math.PI*1.65,true).lift<footStep(Math.PI*1.65).lift);
  assert.notDeepEqual(poseFrame(0,0,1,1,false,true),poseFrame(0,0,1,1));
});
test('seating turns by the shortest route, lowers gradually and can be interrupted',()=>{
  const motion=new SeatMotion(),standing={x:1.3,z:0},seat={x:.4,z:0,yaw:-3.1,height:.66};
  motion.update(0,standing,3.1);motion.set(seat,standing,3.1);
  let last=motion.current;
  for(let i=0;i<75;i++){
    const now=motion.update(1/60,standing,3.1);
    assert.ok(Math.hypot(now.x-last.x,now.z-last.z)<.06);assert.ok(Math.abs(now.blend-last.blend)<.035);assert.ok(Math.abs(Math.atan2(Math.sin(now.yaw-last.yaw),Math.cos(now.yaw-last.yaw)))<.015);last=now;
  }
  assert.equal(motion.current.blend,1);assert.equal(motion.current.x,seat.x);
  motion.set(null,standing,3.1);motion.update(.25,standing,3.1);const partial={...motion.current};
  motion.set(seat,standing,3.1);assert.deepEqual(motion.current,partial);
  for(let i=0;i<80;i++)motion.update(1/60,standing,3.1);
  motion.set(null,standing,3.1,true);assert.equal(motion.current.blend,0);assert.equal(motion.busy,false);
});
test('interaction actions move the free hand and return to the chosen pose',()=>{
  const frame=poseFrame(0,8),before=structuredClone(frame);
  for(const kind of ['reach','dress','brush','hair']){
    assert.deepEqual(interactionFrame(frame,{kind,progress:0}),frame);
    const active=interactionFrame(frame,{kind,progress:.5});assert.notDeepEqual(active.hands[1],frame.hands[1]);assert.deepEqual(active.hands[0],frame.hands[0]);
    assert.deepEqual(interactionFrame(frame,{kind,progress:1}),frame);
  }
  assert.deepEqual(frame,before,'actions do not mutate saved pose frames');
});
test('brush and sponge follow the right hand while the left arm keeps a pet cradled',()=>{
  const doll=buildCharacter(G.wear(G.defaultOutfit(),'bow-kitten'),G.byId);
  const pet=doll.root.getObjectByName('Miss Mittens'),hand=doll.bones.arms[0].forearm.getObjectByName('hand'),brush=doll.root.getObjectByName('makeup brush in hand');
  for(const tool of ['brush','sponge']){
    doll.animate(1,8,{seatHeight:.83,action:{kind:'brush',progress:.5,tool,color:'#bda5d8'}});doll.root.updateMatrixWorld(true);
    assert.equal(brush.visible,true);assert.equal(brush.getObjectByName('makeup sponge').visible,tool==='sponge');
    assert.ok(hand.getWorldPosition(new THREE.Vector3()).distanceTo(pet.getWorldPosition(new THREE.Vector3()))<.13);
    const tip=brush.getObjectByName(tool==='brush'?'soft brush tip':'makeup sponge'),cheek=new THREE.Vector3(.255,-.114,.298).applyMatrix4(doll.bones.head.matrixWorld);
    assert.ok(tip.getWorldPosition(new THREE.Vector3()).distanceTo(cheek)<.12,`${tool} reaches the cheek`);
  }
  doll.animate(2,8);assert.equal(brush.visible,false);doll.dispose();
});
test('skirt transitions stay finite and restore after standing even with heels',()=>{
  for(const clothing of ['petal','velvet-gown','witch-dress','pleated']){
    const doll=buildCharacter(G.wear(G.wear(G.defaultOutfit(),clothing),'party-heels'),G.byId),shell=doll.root.getObjectByName('full skirt shell'),original=shell?.geometry.attributes.position.array.slice();
    for(let i=0;i<=20;i++){doll.animate(i/20,0,{seatHeight:.66,seatBlend:i/20});doll.root.traverse(p=>{if(p.geometry)assert.ok(p.geometry.attributes.position.array.every(Number.isFinite));});}
    for(let i=20;i>=0;i--)doll.animate(2-i/20,0,{seatHeight:.66,seatBlend:i/20});
    if(shell)assert.deepEqual(shell.geometry.attributes.position.array,original);doll.dispose();
  }
});
test('matching clothes keeps identities and never changes the player or shares mutable pieces',()=>{
  const player=G.wear(G.defaultOutfit(),'witch-dress'),friend=new ShopperBrain(G,1).outfit,before=G.clone(player);
  const matched=G.matchOutfit(player,friend);
  for(const key of ['skin','hair','hairColor','makeup','makeupColor'])assert.equal(matched[key],friend[key]);
  assert.deepEqual(matched.dress,player.dress);matched.dress.color='#edcc82';assert.deepEqual(player,before);
});
test('styled friends keep their chosen clothes while browsing, following and being dismissed',()=>{
  for(let i=0;i<3;i++){
    const brain=new ShopperBrain(G,i),chosen=G.wear(brain.outfit,'witch-dress');brain.style(chosen);
    for(let frame=0;frame<2000;frame++)brain.tick(.05,{x:0,z:5.3});
    assert.deepEqual(brain.outfit,chosen);assert.ok(brain.visits>0);brain.invite();brain.dismiss();assert.equal(brain.styled,true);
    brain.resumeShopping();brain.nextStation();brain.tryClothes();assert.notDeepEqual(brain.outfit,chosen);
  }
});
test('friend styles and group runway photos survive backup restore, including old backups',()=>{
  const friends=G.FRIEND_NAMES.map((name,i)=>({name,outfit:new ShopperBrain(G,i).outfit})),friendStyles=Object.fromEntries(friends.map((f,i)=>[f.name,{outfit:f.outfit,occasion:G.STYLING_REQUESTS[i].id}]));
  const look={id:'group-test',name:'Together',outfit:G.defaultOutfit(),themeId:'garden',pose:15,date:'2026-09-29T12:00:00.000Z',friends};
  const restored=G.readBackupData(JSON.stringify({format:'style-club-lookbook',version:1,looks:[look],friendStyles}));
  assert.deepEqual(restored,{looks:[look],friendStyles});assert.deepEqual(G.readBackupData('{"format":"style-club-lookbook","version":1,"looks":[]}'),{looks:[],friendStyles:{}});
  assert.deepEqual(G.sanitizeFriendStyles({Stranger:{outfit:{}}}),{});assert.equal(G.sanitizeFriends([...friends,...friends,{name:'Stranger',outfit:{}}]).length,3);
});
