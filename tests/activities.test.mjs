import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import G from '../game.js';
import {ACTIVITIES,activityDestination,walkable,planPath,advancePath,clearSegment,STATIONS} from '../src/world-rules.mjs';
import {ShopperBrain} from '../src/shoppers.mjs';
import {outfitSuggestion} from '../src/friend-talk.mjs';
import {buildCharacter} from '../src/model3d.mjs';
import {buildActivitySpots} from '../src/activity-spots.mjs';

test('each activity can be reached from every shop without crossing furniture',()=>{
  for(const source of STATIONS)for(const activity of ACTIVITIES){
    const destination=activityDestination(activity.id,{x:source.approach[0],z:source.approach[1]}),target={x:destination.approach[0],z:destination.approach[1]};
    assert.ok(walkable(target.x,target.z),activity.id);
    let previous={x:source.approach[0],z:source.approach[1]},path=planPath(previous,target);
    assert.ok(path.length,`${source.id} to ${activity.id}`);
    for(const point of path){assert.ok(clearSegment(previous,point));previous=point;}
    assert.ok(Math.hypot(previous.x-target.x,previous.z-target.z)<.01);
  }
});
test('invited friends follow between shops, join a bench, stand up and resume their own shopping',()=>{
  for(let index=0;index<3;index++){
    const brain=new ShopperBrain(G,index);brain.invite();
    let player={x:0,z:5.3,yaw:0};
    for(const station of [STATIONS.find(s=>s.id==='vip'),STATIONS.find(s=>s.id==='makeup')]){
      let route=planPath(player,{x:station.approach[0],z:station.approach[1]});
      for(let frame=0;frame<800;frame++){
        const previous=player,next=advancePath(player,route,.05);route=next.path;player={...next.position,yaw:next.distance?Math.atan2(next.position.x-previous.x,next.position.z-previous.z):player.yaw};
        brain.tick(.05,player);assert.ok(walkable(brain.position.x,brain.position.z));
      }
      assert.ok(Math.hypot(brain.position.x-player.x,brain.position.z-player.z)<3,`${brain.name} reaches ${station.id}`);
      assert.equal(brain.changes,0,'a companion keeps the outfit she was invited in');
    }
    const bench=activityDestination('bench-1',player);player={x:bench.seat.x,z:bench.seat.z,yaw:bench.yaw};brain.sitWith(bench.friendSeat);
    for(let frame=0;frame<800&&!brain.seat;frame++)brain.tick(.05,player);
    assert.ok(brain.seat,`${brain.name} takes the neighboring seat`);assert.equal(brain.description(),'sitting with you');
    brain.stand();assert.equal(brain.seat,null);assert.equal(brain.following,true);
    brain.dismiss();brain.tick(.05,player);assert.equal(brain.following,false);
  }
});
test('seated clothes and pets stay finite, feet stay above the floor, and standing restores geometry',()=>{
  for(const id of['petal','velvet-gown','rainbow-dress','witch-dress','pleated','jeans']){
    const doll=buildCharacter(G.wear(G.wear(G.defaultOutfit(),id),'bow-kitten'),G.byId),shell=doll.root.getObjectByName('full skirt shell'),before=shell?.geometry.attributes.position.array.slice();
    for(const seatHeight of[.66,.83,.75]){
      doll.animate(0,8,{seatHeight});doll.root.updateMatrixWorld(true);
      for(const leg of doll.bones.legs){const foot=leg.foot.getWorldPosition(new THREE.Vector3());assert.ok(foot.y>.12,`${id}: feet above floor`);}
      doll.root.traverse(part=>{if(part.geometry)assert.ok(part.geometry.attributes.position.array.every(Number.isFinite));});
      const pet=doll.root.getObjectByName('Miss Mittens'),hand=doll.bones.arms[0].forearm.getObjectByName('hand');assert.ok(hand.getWorldPosition(new THREE.Vector3()).distanceTo(pet.getWorldPosition(new THREE.Vector3()))<.13);
    }
    doll.pose(1,0);if(shell)assert.deepEqual(shell.geometry.attributes.position.array,before,'standing restores the original skirt');doll.dispose();
  }
});
test('boutique activity props have their own physical click targets and outfit mirrors',()=>{
  const scene=new THREE.Group(),spots=buildActivitySpots(scene,()=>{});
  assert.equal(spots.objects.length,ACTIVITIES.length-2);assert.equal(spots.mirrors.length,8);
  for(const object of spots.objects){assert.ok(object.userData.activity);assert.ok(new THREE.Box3().setFromObject(object).max.y>3);}
});
test('high heels stay attached, keep their heels above the floor and do not accumulate height while posing',()=>{
  for(const id of['bow-heels','party-heels']){
    const doll=buildCharacter(G.wear(G.wear(G.defaultOutfit(),'shorts'),id),G.byId);
    for(let frame=0;frame<180;frame++)doll.animate(frame/60,8,{distance:frame<80?.04:0,dt:1/60});
    assert.ok(doll.root.position.y<.3,'heels add a fixed amount of height');
    for(const seatHeight of[null,.66,.83]){
      doll.animate(3,0,{seatHeight});doll.root.updateMatrixWorld(true);
      for(const leg of doll.bones.legs){const heel=leg.foot.getObjectByName('raised heel');assert.ok(heel);assert.ok(new THREE.Box3().setFromObject(heel).min.y>-.03,`${id}: heel stays on the floor`);}
    }
    doll.dispose();
  }
});
test('friend outfit ideas are wearable, relevant to the shop and never change the player',()=>{
  const outfit=G.defaultOutfit(),before=G.clone(outfit);
  for(const shop of['dresses','tops','bottoms','shoes','hair','vip','halloween',null])for(let turn=0;turn<4;turn++){
    const idea=outfitSuggestion(outfit,G,shop,turn);assert.ok(idea);assert.equal(G.selection(outfit,G.byId[idea.id]),false);
    if(['vip','halloween'].includes(shop))assert.equal(G.byId[idea.id].collection,shop);
    assert.deepEqual(G.sanitizeOutfit(G.wear(outfit,idea.id)),G.wear(outfit,idea.id));
  }
  assert.deepEqual(outfit,before);
});
test('photo recipes preserve friends, pets, poses and sticker positions through saving and backup restore',()=>{
  const photo={background:'halloween',friends:[{name:'Poppy',outfit:G.wear(G.defaultOutfit(),'rainbow-dress')}],stickers:[{id:'pumpkin',x:.18,y:.8,size:.1}]};
  const look={id:'photo-test',name:'Boo friends',outfit:G.wear(G.defaultOutfit(),'bow-kitten'),pose:12,themeId:'garden',date:'2026-09-29T12:00:00.000Z',photo};
  assert.deepEqual(G.sanitizeLooks([look])[0],look);
  const restored=G.readBackup(JSON.stringify({format:'style-club-lookbook',version:1,looks:[look]}));assert.deepEqual(restored,[look]);
  assert.equal(G.mergeLooks([],restored).added,1);assert.equal(G.mergeLooks([look],restored).added,0);
  const older={...look,name:'My existing name'};assert.equal(G.mergeLooks([older],restored).looks[0].name,older.name);
});
test('invalid photo and backup data is constrained without corrupting existing looks',()=>{
  const photo=G.sanitizePhoto({background:'<img>',friends:[{name:'Stranger',outfit:{}},{name:'Poppy',outfit:{}},{name:'Poppy',outfit:{}}],stickers:[{id:'__proto__'},{id:'star',x:Infinity,y:-90,size:100}]});
  assert.equal(photo.background,'rose');assert.equal(photo.friends.length,1);assert.deepEqual(photo.stickers,[{id:'star',x:.5,y:.04,size:.16}]);
  for(const text of['no','{}','{"format":"style-club-lookbook","version":2,"looks":[]}'])assert.throws(()=>G.readBackup(text));
  const full=Array.from({length:40},(_,i)=>({id:`look-${i}`,outfit:G.defaultOutfit()}));assert.throws(()=>G.mergeLooks(full,[{id:'new',outfit:G.defaultOutfit()}]),/40 looks/);
  assert.equal(G.sanitizePhoto({stickers:Array.from({length:100},()=>({id:'star'}))}).stickers.length,12);
});
