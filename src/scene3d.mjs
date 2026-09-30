import * as THREE from 'three';
import { buildCharacter } from './model3d.mjs';
import { makeRack, makeDisplay, makeMirror } from './shop-displays.mjs';
import { STATIONS, STORES, ACTIVITIES, activityDestination, OBSTACLES, movePlayer, nearbyStation, planPath, advancePath, storeAt, clearSegment } from './world-rules.mjs';
import { ShopperBrain } from './shoppers.mjs';
import { buildMall } from './mall.mjs';
import { makeAudience } from './audience.mjs';
import { outfitNotice, friendlyGreeting, outfitSuggestion } from './friend-talk.mjs';
export { STATIONS, STORES, ACTIVITIES };
export { photo, stickerImage } from './photo-booth.mjs';

const material = (color, options = {}) => new THREE.MeshStandardMaterial({ color, roughness: .76, ...options });
const cream = material('#f7ecdc'), pink = material('#dba8b9'), gold = material('#c6a66e', { metalness: .55, roughness: .36 });
function add(parent, geometry, mat, position, scale) {
  const mesh = new THREE.Mesh(geometry, mat); if(position)mesh.position.set(...position);if(scale)mesh.scale.set(...scale);
  mesh.castShadow = true;mesh.receiveShadow = true;parent.add(mesh);return mesh;
}
const box = (p, size, mat, pos) => add(p, new THREE.BoxGeometry(...size), mat, pos);
const ball = (p, scale, mat, pos) => add(p, new THREE.SphereGeometry(1, 16, 12), mat, pos, scale);
const cylinder = (p,radius,height,mat,pos) => add(p,new THREE.CylinderGeometry(radius,radius,height,24),mat,pos);
function label(parent,text,position,color='#795365',width=2.1){
  const canvas=document.createElement('canvas');canvas.width=640;canvas.height=128;
  const ctx=canvas.getContext('2d');ctx.fillStyle='#fffaf2';ctx.beginPath();ctx.roundRect(8,8,624,112,48);ctx.fill();
  ctx.strokeStyle='#e4c6ce';ctx.lineWidth=3;ctx.stroke();ctx.font='600 42px Segoe UI, sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=color;ctx.fillText(text,320,68);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
  const sprite=new THREE.Sprite(new THREE.SpriteMaterial({map:texture,depthTest:true}));sprite.position.set(...position);sprite.scale.set(width,width/5,1);parent.add(sprite);return sprite;
}
function arch(parent,width,height,mat,z){
  const shape=new THREE.Shape(),r=width/2;
  shape.moveTo(-r,0);shape.lineTo(r,0);shape.lineTo(r,height-r);shape.absarc(0,height-r,r,0,Math.PI,false);shape.lineTo(-r,0);
  return add(parent,new THREE.ExtrudeGeometry(shape,{depth:.09,bevelEnabled:true,bevelSize:.035,bevelThickness:.035,bevelSegments:2,steps:1}),mat,[0,0,z]);
}
function setupRenderer(container){
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});
  renderer.localClippingEnabled=true;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFShadowMap;
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.25;
  renderer.domElement.className='world-canvas';renderer.domElement.tabIndex=0;
  container.replaceChildren(renderer.domElement);return renderer;
}
function lightScene(scene){
  scene.add(new THREE.HemisphereLight('#fff4e2','#aa8ba5',2.3));
  const sun=new THREE.DirectionalLight('#fff4de',3.2);sun.position.set(-3,8,5);sun.castShadow=true;
  sun.shadow.mapSize.set(1024,1024);sun.shadow.camera.left=-10;sun.shadow.camera.right=10;sun.shadow.camera.top=10;sun.shadow.camera.bottom=-10;sun.shadow.camera.far=28;sun.shadow.normalBias=.035;sun.shadow.bias=-.0001;scene.add(sun);
  const fill=new THREE.DirectionalLight('#dddeff',1.0);fill.position.set(5,4,-4);scene.add(fill);
}

export class Boutique {
  constructor(container,{catalog,game,onStation=()=>{},onNearby=()=>{},onView=()=>{},onLocation=()=>{},onFriend=()=>{},onBubble=()=>{},onTogether=()=>{},onCompanion=()=>{},onActivity=()=>{},onPaint=()=>{},onGrab=()=>{},onDrag=()=>{},onDrop=()=>{},onHover=()=>{}}={}){
    this.container=container;this.catalog=catalog;this.onStation=onStation;this.onNearby=onNearby;this.onView=onView;
    this.onGrab=onGrab;this.onDrag=onDrag;this.onDrop=onDrop;this.onHover=onHover;this.onLocation=onLocation;
    this.game=game;this.onFriend=onFriend;this.onBubble=onBubble;this.onTogether=onTogether;this.nextChatAt=9;this.chatCount=0;
    this.onCompanion=onCompanion;this.onActivity=onActivity;this.onPaint=onPaint;this.activity=null;this.activityGoal=null;this.companion=null;this.mirrorRevision=0;
    this.renderer=setupRenderer(container);this.canvas=this.renderer.domElement;
    this.canvas.setAttribute('aria-label','3D fashion mall. Drag a piece from a rack onto your character to wear it. Use WASD or arrow keys to walk, E to browse, and drag the floor to look around.');
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#eedfe5');this.scene.fog=new THREE.Fog('#eedfe5',25,49);
    this.camera=new THREE.PerspectiveCamera(47,1,.1,70);lightScene(this.scene);this.environment=buildMall(this.scene,catalog,{makeRack,makeDisplay,makeMirror,label,arch});
    this.canvas.dataset.displayedItems=String(this.environment.interactions.reduce((n,fixture)=>n+(fixture.userData.stock?.length||0),0));
    this.shoppers=new THREE.Group();this.scene.add(this.shoppers);this.friendsVisible=true;this.npcs=[];
    if(game)for(let i=0;i<3;i++) {
      const brain=new ShopperBrain(game,i),anchor=new THREE.Group();anchor.scale.setScalar(.88);this.shoppers.add(anchor);
      anchor.userData.shopperIndex=i;
      label(anchor,brain.name,[0,3.82,0],'#865e77',1.12);
      const npc={brain,anchor,character:null};this.npcs.push(npc);this.dressShopper(npc);
    }
    this.fittingStage=new THREE.Group();this.scene.add(this.fittingStage);this.fittingStage.visible=false;
    cylinder(this.fittingStage,1.10,.10,cream,[0,.05,0]);cylinder(this.fittingStage,1.12,.035,gold,[0,.035,0]);
    const fittingFloor=box(this.fittingStage,[60,.05,60],material('#e9dbe4'),[0,-.07,0]);fittingFloor.castShadow=false;
    this.anchor=new THREE.Group();this.scene.add(this.anchor);this.position={x:0,z:5.3};this.yaw=0;this.cameraYaw=.18;this.pitch=.40;this.view='walk';this.poseStyle=0;this.active=true;
    this.keys=new Set();this.virtual=new Set();this.path=[];this.destinationStation=null;this.nearby=null;this.disposed=false;this.elapsed=0;this.lastFrame=performance.now();this.dragging=false;this.stockSource=null;
    this.camera.position.set(3,6,12);this.target=new THREE.Vector3(0,1.5,3.6);this.abort=new AbortController();
    this.bind();this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(container);this.resize();this.loop();
  }
  setOutfit(outfit){const notice=this.game&&outfitNotice(this.outfit,outfit,this.game);if(notice&&this.friendsVisible)this.pendingNotice={text:notice,created:this.elapsed};this.character?.dispose();this.character=buildCharacter(outfit,this.catalog);this.character.pose(this.elapsed,this.poseStyle);this.anchor.add(this.character.root);this.outfit=outfit;this.canvas.dataset.outfit=JSON.stringify(outfit);this.refreshMirror();this.draw(0);}
  setTheme(theme){this.environment.wall.color.set(theme.bg);}
  setActive(active){this.active=active;if(!active){this.keys.clear();this.virtual.clear();this.path=[];this.destinationStation=null;}else this.resize();}
  setPose(pose){this.poseStyle=pose;this.canvas.dataset.pose=String(pose);if(this.activity)this.refreshMirror();else this.setView('fit');}
  setView(mode){this.leaveActivity();const changed=this.view!==mode;this.view=mode;this.canvas.dataset.view=mode;this.path=[];this.destinationStation=null;this.cameraGoal=null;this.faceShop=false;this.keys.clear();this.virtual.clear();if(changed){this.pitch=mode==='face'?.025:mode==='fit'?.16:.43;if(mode!=='walk')this.yaw=this.cameraYaw;}this.onView(mode);}
  resetCamera(){const mode=this.view==='face'?'face':'fit';this.setView(mode);this.cameraYaw=.18;this.pitch=mode==='face'?.025:.16;this.yaw=.18;}
  turn(amount){this.setView(this.view==='face'?'face':'fit');this.cameraYaw+=amount;}
  setMove(direction,pressed){if(pressed){this.leaveActivity();this.virtual.add(direction);if(this.view!=='walk'){this.view='walk';this.pitch=.43;this.onView('walk');}}else this.virtual.delete(direction);}
  interact(){if(this.nearby?.kind)this.startActivity(this.nearby.id);else if(this.nearby)this.onStation(this.nearby,{browse:true});}
  startActivity(id){
    if(id==='bench')id=ACTIVITIES.filter(a=>a.kind==='bench').sort((a,b)=>Math.abs(a.z-this.position.z)-Math.abs(b.z-this.position.z))[0].id;
    if(id==='mirror')id=`mirror-${['dresses','tops','bottoms','halloween','vip','shoes'].includes(this.currentStore?.id)?this.currentStore.id:'dresses'}`;
    const activity=activityDestination(id,this.position);if(!activity)return;
    this.setView('walk');this.activityGoal=activity;this.path=planPath(this.position,{x:activity.approach[0],z:activity.approach[1]});
    this.canvas.dataset.destination=id;this.canvas.focus({preventScroll:true});
    if(Math.hypot(this.position.x-activity.approach[0],this.position.z-activity.approach[1])<.18)this.enterActivity(activity);
  }
  enterActivity(activity){
    this.activityGoal=null;this.path=[];this.destinationStation=null;this.keys.clear();this.virtual.clear();
    if(activity.kind==='photo'){this.onActivity(activity);return;}
    this.activity=activity;this.yaw=activity.yaw;this.cameraYaw=activity.yaw+(activity.kind==='bench'?.4:1.05);this.pitch=.16;this.faceShop=false;this.cameraGoal=null;
    if(activity.friendSeat)this.companion?.brain.sitWith(activity.friendSeat);
    this.canvas.dataset.activity=activity.id;this.onActivity(activity);this.refreshMirror();
  }
  leaveActivity(){
    this.activityGoal=null;if(!this.activity)return;
    this.activity=null;this.companion?.brain.stand();this.pitch=.43;this.onActivity(null);this.canvas.dataset.activity='';
  }
  refreshMirror(){
    const mirror=this.environment?.mirrors.find(m=>m.id===this.activity?.id);if(!mirror||!this.outfit)return;
    const revision=++this.mirrorRevision,image=new Image();
    image.onload=()=>{if(revision!==this.mirrorRevision||this.disposed)return;const canvas=document.createElement('canvas');canvas.width=440;canvas.height=600;const ctx=canvas.getContext('2d');ctx.fillStyle='#d9e7e8';ctx.fillRect(0,0,440,600);ctx.translate(440,0);ctx.scale(-1,1);ctx.drawImage(image,0,0);mirror.material.map?.dispose();const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;mirror.material.map=texture;mirror.material.color.set('#ffffff');mirror.material.needsUpdate=true;};
    image.src=portrait(this.outfit,this.catalog,this.poseStyle,this.activity.seat?.height??null);
  }
  invite(name){
    const npc=this.npcs.find(n=>n.brain.name===name);if(!npc)return;
    this.companion?.brain.dismiss();this.companion=npc;this.setFriends(true);npc.brain.invite();this.canvas.dataset.companion=name;this.onCompanion(name);
    if(this.activity?.friendSeat)npc.brain.sitWith(this.activity.friendSeat);
  }
  dismissCompanion(){this.companion?.brain.dismiss();this.companion=null;this.canvas.dataset.companion='';this.onCompanion(null);}
  friendLooks(){return this.npcs.map(({brain})=>({name:brain.name,outfit:this.game.clone(brain.outfit)}));}
  companionLook(){return this.companion?{name:this.companion.brain.name,outfit:this.game.clone(this.companion.brain.outfit)}:null;}
  suggest(themeId){const npc=this.companion||this.friend;if(!npc)return null;const idea=outfitSuggestion(this.outfit,this.game,this.currentStore?.id,this.chatCount++,themeId);if(idea)this.say(npc,idea.text,1);return idea;}
  visit(id){const station=STATIONS.find(s=>s.id===id);if(!station)return;this.setView('walk');this.destinationStation=station;this.path=planPath(this.position,{x:station.approach[0],z:station.approach[1]});if(storeAt(this.position)?.id===station.storeId)this.cameraGoal=-Math.sign(station.x)*Math.PI/2;this.canvas.dataset.destination=id;this.canvas.focus({preventScroll:true});}
  dressShopper(npc){npc.character?.dispose();npc.character=buildCharacter(npc.brain.outfit,this.catalog);npc.character.root.traverse(part=>{if(part.isMesh)part.castShadow=false;});npc.anchor.add(npc.character.root);}
  setFriends(visible){this.friendsVisible=visible;this.shoppers.visible=visible&&this.view==='walk';this.canvas.dataset.friends=String(visible);if(!visible){this.dismissCompanion();this.speech=null;this.pendingNotice=null;this.friend=null;this.onFriend(null);this.onBubble(null);}}
  canTalk(npc){return Math.hypot(npc.brain.position.x-this.position.x,npc.brain.position.z-this.position.z)<4.8&&clearSegment(this.position,npc.brain.position,OBSTACLES,.06);}
  say(npc,text,pose=2){
    if(!npc||!this.friendsVisible||this.view!=='walk')return;
    if(!npc.brain.seat&&!npc.brain.seatGoal)npc.brain.greet(this.position,pose);this.speech={npc,text,until:this.elapsed+6};this.lastSpeechAt=this.elapsed;this.nextChatAt=this.elapsed+22;
    this.canvas.dataset.lastGreeting=`${npc.brain.name}: ${text}`;
  }
  greet(){if(this.friend)this.say(this.friend,friendlyGreeting(this.outfit,this.game,this.chatCount++));}
  poseTogether(){
    if(!this.friend)return;const pose=8+(this.chatCount++%8);
    this.poseStyle=pose;this.canvas.dataset.pose=String(pose);if(!this.activity?.seat)this.yaw=this.cameraYaw;this.path=[];this.destinationStation=null;this.refreshMirror();
    this.say(this.friend,'Matching poses! Ready… three, two, one! ✨',pose);this.friend.brain.yaw=this.cameraYaw;this.onTogether(pose);
  }
  updateFriends(){
    const canSpeak=this.shoppers.visible&&!this.dragging;
    const friend=canSpeak?this.npcs.filter(n=>n.anchor.visible&&this.canTalk(n)).sort((a,b)=>Math.hypot(a.brain.position.x-this.position.x,a.brain.position.z-this.position.z)-Math.hypot(b.brain.position.x-this.position.x,b.brain.position.z-this.position.z))[0]:null;
    if(friend!==this.friend){this.friend=friend;this.onFriend(friend?.brain.name||null);}
    if(this.speech&&this.elapsed>=this.speech.until)this.speech=null;
    if(this.pendingNotice&&this.elapsed-this.pendingNotice.created>45)this.pendingNotice=null;
    if(friend&&this.pendingNotice&&this.elapsed-this.pendingNotice.created>.6&&(!this.speech||this.elapsed-this.lastSpeechAt>3)){
      this.say(friend,this.pendingNotice.text,1);this.pendingNotice=null;
    }else if(friend&&!this.speech&&this.elapsed>this.nextChatAt)this.say(friend,friendlyGreeting(this.outfit,this.game,this.chatCount++));
    if(!this.speech||!canSpeak||!this.speech.npc.anchor.visible){this.onBubble(null);return;}
    const {npc,text}=this.speech,point=npc.anchor.localToWorld(new THREE.Vector3(0,4.05,0)).project(this.camera);
    if(Math.abs(point.x)>1.12||point.z>1||point.z< -1){this.onBubble(null);return;}
    this.onBubble({name:npc.brain.name,text,left:THREE.MathUtils.clamp((point.x+1)*50,18,82),top:THREE.MathUtils.clamp((1-point.y)*50,30,86)});
  }
  setDressDrag(value,source=null){this.dragging=value;if(value){this.keys.clear();this.virtual.clear();this.path=[];this.destinationStation=null;this.stockSource=source;if(source)source.visible=false;}else{if(this.stockSource)this.stockSource.visible=true;this.stockSource=null;}this.canvas.dataset.dragging=String(value);}
  dropBounds(){
    if(!this.character)return null;
    this.anchor.updateWorldMatrix(true,true);const box=new THREE.Box3().setFromObject(this.character.root),rect=this.canvas.getBoundingClientRect(),points=[];
    for(const x of[box.min.x,box.max.x])for(const y of[box.min.y,box.max.y])for(const z of[box.min.z,box.max.z]){const p=new THREE.Vector3(x,y,z).project(this.camera);points.push({x:rect.left+(p.x+1)*rect.width/2,y:rect.top+(1-p.y)*rect.height/2});}
    const left=Math.max(rect.left,Math.min(...points.map(p=>p.x))-20),top=Math.max(rect.top,Math.min(...points.map(p=>p.y))-15),right=Math.min(rect.right,Math.max(...points.map(p=>p.x))+20),bottom=Math.min(rect.bottom,Math.max(...points.map(p=>p.y))+15);
    return {left,top,width:right-left,height:bottom-top};
  }
  isCharacterDrop(x,y){const b=this.dropBounds();return !!b&&x>=b.left&&x<=b.left+b.width&&y>=b.top&&y<=b.top+b.height;}
  rayAt(event){const rect=this.canvas.getBoundingClientRect(),ray=new THREE.Raycaster();ray.setFromCamera(new THREE.Vector2((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1),this.camera);return ray;}
  rackHit(event){
    if(this.view!=='walk')return null;
    const hits=this.rayAt(event).intersectObjects(this.environment.interactions,true);
    return hits.find(hit=>{for(let p=hit.object;p;p=p.parent)if(!p.visible)return false;return true;})||null;
  }
  itemAt(event){const hit=this.rackHit(event);let object=hit?.object;while(object&&!object.userData.itemId)object=object.parent;return object||null;}
  resize(){const {width,height}=this.container.getBoundingClientRect();if(width<2||height<2)return;this.renderer.setSize(width,height,false);this.camera.aspect=width/height;this.camera.updateProjectionMatrix();}
  bind(){
    const signal=this.abort.signal,canvas=this.canvas;
    document.addEventListener('keydown',event=>{
      if(!this.active||document.querySelector('dialog[open]'))return;
      if(document.activeElement!==canvas&&document.activeElement!==document.body)return;
      const key=event.key.toLowerCase();
      if(this.dragging){if(key==='escape')this.onDrop(null,true);return;}
      if(['w','a','s','d','arrowup','arrowleft','arrowdown','arrowright'].includes(key)){event.preventDefault();this.leaveActivity();this.keys.add(key);if(this.view!=='walk'){this.view='walk';this.pitch=.43;this.onView('walk');}this.path=[];}
      if(key==='e'){event.preventDefault();this.interact();}
      if(key==='f'){event.preventDefault();this.greet();}
      if(key==='escape'&&this.activity){event.preventDefault();this.leaveActivity();}
    },{signal});
    document.addEventListener('keyup',event=>this.keys.delete(event.key.toLowerCase()),{signal});
    window.addEventListener('blur',()=>{this.keys.clear();this.virtual.clear();if(this.dragging)this.onDrop(null,true);},{signal});
    document.addEventListener('visibilitychange',()=>{if(document.hidden){this.keys.clear();this.virtual.clear();}},{signal});
    canvas.addEventListener('blur',()=>this.keys.clear(),{signal});
    let pointer=null;
    canvas.addEventListener('pointerdown',event=>{
      if(event.button!==0)return;canvas.focus({preventScroll:true});canvas.setPointerCapture(event.pointerId);
      const item=this.itemAt(event);canvas.dataset.lastGrab=item?.userData.itemId||'none';
      pointer={id:event.pointerId,x:event.clientX,y:event.clientY,startX:event.clientX,startY:event.clientY,moved:false,item,started:false};
    },{signal});
    canvas.addEventListener('pointermove',event=>{
      if(!pointer){const item=this.itemAt(event);this.canvas.style.cursor=item?'grab':'move';this.onHover(item?.userData.itemId||null,event);return;}
      const dx=event.clientX-pointer.x,dy=event.clientY-pointer.y;pointer.moved ||= Math.hypot(event.clientX-pointer.startX,event.clientY-pointer.startY)>6;
      if(pointer.moved){
        if(pointer.item){if(!pointer.started){pointer.started=true;this.setDressDrag(true,pointer.item);this.onGrab(pointer.item.userData.itemId,event);}if(this.dragging)this.onDrag(event);}
        else{this.cameraGoal=null;this.cameraYaw-=dx*.009;this.pitch=THREE.MathUtils.clamp(this.pitch+dy*.004,.025,.85);}
      }
      pointer.x=event.clientX;pointer.y=event.clientY;
    },{signal});
    canvas.addEventListener('pointerup',event=>{if(!pointer)return;const click=!pointer.moved,started=pointer.started;pointer=null;if(canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);if(started&&this.dragging)this.onDrop(event,false);else if(click&&this.view==='walk')this.pick(event);},{signal});
    canvas.addEventListener('pointercancel',()=>{pointer=null;if(this.dragging)this.onDrop(null,true);},{signal});
    canvas.addEventListener('pointerleave',()=>this.onHover(null),{signal});
  }
  pick(event){
    if(this.activity?.kind==='beauty'&&this.isCharacterDrop(event.clientX,event.clientY)){this.onPaint();return;}
    const ray=this.rayAt(event),hit=this.rackHit(event);
    if(this.shoppers.visible){const friendHit=ray.intersectObjects(this.npcs.filter(n=>n.anchor.visible).map(n=>n.anchor),true)[0];
      if(friendHit&&(!hit||friendHit.distance<hit.distance)){let part=friendHit.object;while(part&&part.userData.shopperIndex===undefined)part=part.parent;
        const npc=this.npcs[part?.userData.shopperIndex];if(npc&&this.canTalk(npc)){this.say(npc,friendlyGreeting(this.outfit,this.game,this.chatCount++));return;}}
    }
    let activityPart=hit?.object;while(activityPart&&!activityPart.userData.activity)activityPart=activityPart.parent;
    if(activityPart){this.startActivity(activityPart.userData.activity);return;}
    this.leaveActivity();let station=null;
    if(hit){let obj=hit.object;while(obj&&!obj.userData.station)obj=obj.parent;station=obj?.userData.station;}
    const goal=new THREE.Vector3();
    if(station){goal.set(station.approach[0],0,station.approach[1]);this.destinationStation=station;if(Math.hypot(goal.x-this.position.x,goal.z-this.position.z)<1.3){this.onStation(station,{browse:true});return;}}
    else {if(!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,1,0),0),goal))return;this.destinationStation=null;}
    this.path=planPath(this.position,{x:goal.x,z:goal.z});
    this.canvas.dataset.destination=station?.id||'floor';
  }
  walk(dt){
    const all=new Set([...this.keys,...this.virtual]);
    let x=Number(all.has('d')||all.has('arrowright')||all.has('right'))-Number(all.has('a')||all.has('arrowleft')||all.has('left'));
    let z=Number(all.has('s')||all.has('arrowdown')||all.has('down'))-Number(all.has('w')||all.has('arrowup')||all.has('up'));
    if(x||z){const originalX=x;x=x*Math.cos(this.cameraYaw)+z*Math.sin(this.cameraYaw);z=z*Math.cos(this.cameraYaw)-originalX*Math.sin(this.cameraYaw);this.path=[];this.destinationStation=null;this.faceShop=false;this.cameraGoal=null;}
    let next,distance;
    if(!x&&!z&&this.path.length){const advance=advancePath(this.position,this.path,dt);next=advance.position;this.path=advance.path;distance=advance.distance;}
    else{next=movePlayer(this.position,{x,z},dt,OBSTACLES);distance=Math.hypot(next.x-this.position.x,next.z-this.position.z);}
    if(distance>.0001){const heading=Math.atan2(next.x-this.position.x,next.z-this.position.z);this.yaw+=Math.atan2(Math.sin(heading-this.yaw),Math.cos(heading-this.yaw))*(1-Math.exp(-dt*12));}
    this.position=next;
    if(!this.path.length&&this.activityGoal){const activity=this.activityGoal;this.activityGoal=null;if(Math.hypot(next.x-activity.approach[0],next.z-activity.approach[1])<.35)this.enterActivity(activity);}
    if(!this.path.length&&this.destinationStation){const station=this.destinationStation;this.destinationStation=null;if(Math.hypot(next.x-station.approach[0],next.z-station.approach[1])<1.4){this.faceShop=station.id!=='runway';this.onStation(station);}}
    const activity=ACTIVITIES.map(a=>activityDestination(a.id,this.position)).find(a=>Math.hypot(next.x-a.approach[0],next.z-a.approach[1])<1.05);
    const nearby=activity||nearbyStation(this.position);if(nearby?.id!==this.nearby?.id){this.nearby=nearby;this.onNearby(nearby);}
    const store=storeAt(next);if(store?.id!==this.currentStore?.id){this.currentStore=store;this.onLocation(store);if(this.destinationStation)this.cameraGoal=store?-store.side*Math.PI/2:.18;}
    this.canvas.dataset.position=`${next.x.toFixed(2)},${next.z.toFixed(2)}`;this.canvas.dataset.moving=String(distance>.0001);return distance;
  }
  draw(dt){
    const travelled=this.view==='walk'&&!this.dragging&&!this.activity?this.walk(dt):0,time=this.elapsed;
    if(this.cameraGoal!=null)this.cameraYaw+=Math.atan2(Math.sin(this.cameraGoal-this.cameraYaw),Math.cos(this.cameraGoal-this.cameraYaw))*(1-Math.exp(-dt*4));
    if(this.faceShop&&!travelled)this.yaw+=Math.atan2(Math.sin(this.cameraYaw-this.yaw),Math.cos(this.cameraYaw-this.yaw))*(1-Math.exp(-dt*5));
    const seat=this.activity?.seat,position=seat||this.position;
    if(this.character){this.anchor.position.set(position.x,seat?0:this.view==='walk'?-.04:.08,position.z);this.anchor.rotation.y=this.yaw;this.character.animate(time,this.poseStyle,{distance:travelled,dt,seatHeight:seat?.height??null});}
    const distance=this.activity?.kind==='beauty'?2.65:this.activity?.kind==='bench'?3.9:this.activity?4.1:this.view==='face'?2.20:this.view==='fit'?5.35:9.7,height=seat?(this.activity.kind==='beauty'?2.13:1.45):this.view==='face'?2.88:this.view==='fit'?1.78:1.55;
    this.target.set(position.x,height,position.z);
    const desired=new THREE.Vector3(position.x+Math.sin(this.cameraYaw)*distance*Math.cos(this.pitch),height+Math.sin(this.pitch)*distance,position.z+Math.cos(this.cameraYaw)*distance*Math.cos(this.pitch));
    this.camera.position.lerp(desired,dt?1-Math.exp(-dt*7):1);this.camera.lookAt(this.target);
    this.environment.room.visible=this.view==='walk';this.fittingStage.visible=this.view!=='walk';this.fittingStage.position.set(this.position.x,0,this.position.z);
    this.shoppers.visible=this.view==='walk'&&this.friendsVisible;
    for(const npc of this.npcs){
      const result=this.shoppers.visible&&!this.dragging?npc.brain.tick(dt,{x:position.x,z:position.z,yaw:this.yaw},this.npcs.filter(other=>other!==npc).map(other=>other.brain.position)):{walking:false,pose:0};
      if(result.changed)this.dressShopper(npc);
      const npcSeat=npc.brain.seat,npcPosition=npcSeat||npc.brain.position;
      // Give the seated player room in the close-up while shoppers keep browsing.
      npc.anchor.visible=!(this.activity&&npc!==this.companion&&Math.hypot(npcPosition.x-position.x,npcPosition.z-position.z)<4.5);
      npc.anchor.position.set(npcPosition.x,npcSeat?0:-.04,npcPosition.z);npc.anchor.rotation.y=npcSeat?.yaw??npc.brain.yaw;npc.character.animate(time+this.npcs.indexOf(npc),result.pose,{distance:result.distance||0,dt,seatHeight:npcSeat?npcSeat.height/.88:null});
    }
    if(!this.lastNpcReport||time-this.lastNpcReport>.5){this.canvas.dataset.shoppers=JSON.stringify(this.npcs.map(({brain})=>({name:brain.name,activity:brain.description(),x:+brain.position.x.toFixed(2),z:+brain.position.z.toFixed(2),changes:brain.changes})));this.lastNpcReport=time;}
    this.environment.update(this.camera,this.position,time);
    this.updateFriends();
    this.renderer.render(this.scene,this.camera);
    this.canvas.dataset.facing=this.cameraYaw.toFixed(2);this.canvas.dataset.view=this.view;this.canvas.dataset.ready='true';
  }
  loop(){if(this.disposed)return;this.frame=requestAnimationFrame(()=>this.loop());const now=performance.now(),dt=Math.min((now-this.lastFrame)/1000,.05);this.lastFrame=now;if(this.active&&!document.hidden&&!document.querySelector('dialog[open]')){this.elapsed+=dt;this.draw(dt);}}
  portrait(outfit){return portrait(outfit,this.catalog);}
  dispose(){this.disposed=true;cancelAnimationFrame(this.frame);this.abort.abort();this.resizeObserver.disconnect();this.character?.dispose();this.npcs.forEach(npc=>npc.character.dispose());this.renderer.dispose();}
}

let photoRenderer;
export function portrait(outfit,catalog,pose=1,seatHeight=null){
  photoRenderer ||= new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});
  photoRenderer.localClippingEnabled=true;
  photoRenderer.setSize(440,600);photoRenderer.setPixelRatio(1);photoRenderer.outputColorSpace=THREE.SRGBColorSpace;photoRenderer.toneMapping=THREE.ACESFilmicToneMapping;photoRenderer.toneMappingExposure=1.2;
  const scene=new THREE.Scene();lightScene(scene);const doll=buildCharacter(outfit,catalog);scene.add(doll.root);doll.pose(.7,pose,false);if(seatHeight!==null)doll.animate(.7,pose,{dt:0,seatHeight});doll.root.rotation.y-=.15;
  const camera=new THREE.PerspectiveCamera(35,440/600,.1,30);camera.position.set(0,seatHeight===null?2:1.4,6.8);camera.lookAt(0,seatHeight===null?1.72:1.2,0);photoRenderer.render(scene,camera);
  const data=photoRenderer.domElement.toDataURL('image/png');doll.dispose();return data;
}

export class Runway {
  constructor(container,catalog){
    this.container=container;this.catalog=catalog;this.renderer=setupRenderer(container);this.renderer.domElement.tabIndex=-1;this.renderer.domElement.setAttribute('aria-label','Your character walking the 3D runway');
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#dec4d5');lightScene(this.scene);
    const floor=box(this.scene,[9,.10,16],cream,[0,-.08,0]);floor.receiveShadow=true;box(this.scene,[2.1,.016,14],pink,[0,-.018,0]);
    for(const side of[-1,1])for(let i=0;i<9;i++){cylinder(this.scene,.04,.75,gold,[side*1.8,.37,-i]);ball(this.scene,[.07,.07,.07],material('#fff4cf',{emissive:'#fff0bb',emissiveIntensity:.8}),[side*1.8,.8,-i]);}
    this.camera=new THREE.PerspectiveCamera(43,1,.1,40);this.camera.position.set(.1,2.9,8.4);this.camera.lookAt(0,1.5,-.9);
    this.anchor=new THREE.Group();this.scene.add(this.anchor);this.active=false;this.reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;this.audience=makeAudience(this.scene,{label,reduced:this.reduced});this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(container);this.loop();
  }
  resize(){const {width,height}=this.container.getBoundingClientRect();if(width<2||height<2)return;this.renderer.setSize(width,height,false);this.camera.aspect=width/height;this.camera.updateProjectionMatrix();}
  show(outfit,pose=1,friend=null){this.character?.dispose();this.friendCharacter?.dispose();this.friendCharacter=null;this.character=buildCharacter(outfit,this.catalog);this.anchor.add(this.character.root);this.anchor.position.x=friend?-.67:0;
    if(friend){this.friendCharacter=buildCharacter(friend.outfit,this.catalog);this.friendAnchor ||= new THREE.Group();this.friendAnchor.position.x=.8;this.friendAnchor.scale.setScalar(.88);this.friendAnchor.add(this.friendCharacter.root);this.scene.add(this.friendAnchor);}
    this.renderer.domElement.dataset.companion=friend?.name||'';this.poseStyle=pose;this.started=performance.now();this.lastTime=0;this.anchor.position.z=this.reduced?0:-3.2;this.active=true;this.renderer.domElement.dataset.audience=String(this.audience.people.length);this.resize();}
  hide(){this.active=false;}
  loop(){this.frame=requestAnimationFrame(()=>this.loop());if(!this.active||document.hidden)return;const elapsed=(performance.now()-this.started)/1000,dt=Math.min(.05,elapsed-this.lastTime);this.lastTime=elapsed;
    const progress=this.reduced?1:Math.min(1,elapsed/3.5),eased=progress<.85?progress:(.85+(progress-.85)-((progress-.85)**2)/.3),end=.925;
    const z=-3.2+3.2*Math.min(1,eased/end),distance=Math.abs(z-this.anchor.position.z);this.anchor.position.z=z;
    this.anchor.rotation.y=progress<1||this.reduced?0:Math.sin((elapsed-3.5)*.4)*.14;
    this.character?.animate(elapsed,this.poseStyle,{distance:Math.min(distance,.1),dt,strut:true});
    if(this.friendCharacter){this.friendAnchor.position.z=z-.22;this.friendAnchor.rotation.y=this.anchor.rotation.y;this.friendCharacter.animate(elapsed,this.poseStyle,{distance:Math.min(distance,.1),dt,strut:true});}
    this.audience.update(elapsed,z);this.renderer.render(this.scene,this.camera);
  }
}
