import * as THREE from 'three';
import { buildCharacter, loftGeometry } from './model3d.mjs';
import { STATIONS, OBSTACLES, movePlayer, nearbyStation, planPath } from './world-rules.mjs';
import { ShopperBrain } from './shoppers.mjs';

const material = (color, options = {}) => new THREE.MeshStandardMaterial({ color, roughness: .76, ...options });
const cream = material('#f7ecdc'), pink = material('#dba8b9'), gold = material('#c6a66e', { metalness: .55, roughness: .36 });
const floorMat = material('#f3e9df'), altFloor = material('#e5d9d6');
function add(parent, geometry, mat, position, scale) {
  const mesh = new THREE.Mesh(geometry, mat); if(position)mesh.position.set(...position);if(scale)mesh.scale.set(...scale);
  mesh.castShadow = true;mesh.receiveShadow = true;parent.add(mesh);return mesh;
}
const box = (p, size, mat, pos) => add(p, new THREE.BoxGeometry(...size), mat, pos);
const ball = (p, scale, mat, pos) => add(p, new THREE.SphereGeometry(1, 16, 12), mat, pos, scale);
const cylinder = (p,radius,height,mat,pos) => add(p,new THREE.CylinderGeometry(radius,radius,height,24),mat,pos);
function tube(p,points,radius,mat){return add(p,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(v=>new THREE.Vector3(...v))),24,radius,7,false),mat);}
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
function plant(parent,x,z){
  cylinder(parent,.27,.42,cream,[x,.21,z]);
  const leaves=material('#80997c');
  for(let i=0;i<7;i++){const a=i/7*Math.PI*2;const leaf=ball(parent,[.11,.43,.19],leaves,[x+Math.sin(a)*.15,.64+Math.cos(i)*.1,z+Math.cos(a)*.15]);leaf.rotation.z=Math.sin(a)*.38;leaf.rotation.x=Math.cos(a)*.38;}
}
function stockDisplay(display,station,catalog,build){
  const items=Object.values(catalog).filter(item=>item.category===station.id).sort((a,b)=>Number(!!b.fresh)-Number(!!a.fresh));
  const groups=items.map((item,index)=>{const group=new THREE.Group();group.userData.itemId=item.id;display.add(group);build(group,item,index%4);return group;});
  display.userData.stock=groups;display.userData.page=0;display.userData.pages=Math.ceil(groups.length/4);
  display.userData.setPage=page=>{display.userData.page=page%display.userData.pages;groups.forEach((group,i)=>{group.visible=Math.floor(i/4)===display.userData.page;});};
  display.userData.setPage(0);
}
function makeRack(parent,station,catalog){
  const rack=new THREE.Group();parent.add(rack);rack.position.set(station.x,0,station.z);rack.rotation.y=station.rotation;rack.userData.station=station;
  box(rack,[2.55,.18,.7],cream,[0,.12,0]);
  for(const x of[-1.14,1.14]){cylinder(rack,.036,2.7,gold,[x,1.45,0]);ball(rack,[.072,.072,.072],gold,[x,2.83,0]);}
  const rail=cylinder(rack,.034,2.3,gold,[0,2.7,0]);rail.rotation.z=Math.PI/2;
  for(let i=0;i<4;i++){
    const x=(i-1.5)*.56;
    tube(rack,[[x-.19,2.4,0],[x,2.58,0],[x+.19,2.4,0],[x-.19,2.4,0]],.014,cream);
    tube(rack,[[x,2.59,0],[x,2.75,0],[x+.055,2.76,0]],.012,gold);
  }
  stockDisplay(rack,station,catalog,(garment,item,i)=>{
    const x=(i-1.5)*.56,cloth=material(item.color,{side:THREE.DoubleSide});
    garment.position.x=x;
    if(station.id==='dresses'){
      add(garment,loftGeometry([[item.shape==='cosmic'?.68:1.14,.265,.13],[1.5,.20,.10],[1.9,.125,.07],[2.2,.20,.07],[2.35,.10,.06]]),cloth);
      if(item.shape==='rainbow')for(let band=0;band<4;band++)add(garment,loftGeometry([[1.15+band*.16,.27-band*.035,.136-band*.016],[1.3+band*.16,.238-band*.033,.121-band*.016]]),material(['#bda5d8','#8eafd1','#83bfb7','#edcc82'][band],{side:THREE.DoubleSide}));
      if(['cosmic','starlight','butterfly','cupcake'].includes(item.shape))for(let j=0;j<4;j++)ball(garment,[.025,.03,.02],cream,[Math.sin(j*3)*.11,1.30+j*.21,.12]);
    }else if(station.id==='tops'){
      box(garment,[.32,.58,.14],cloth,[0,2.06,0]);
      for(const side of[-1,1]){const sleeve=box(garment,[.14,['tee','stripes'].includes(item.shape)?.28:.47,.14],item.shape==='varsity'?cream:cloth,[side*.21,2.13,0]);sleeve.rotation.z=side*.4;}
      box(garment,[.023,.47,.016],cream,[0,2.05,.08]);
    }else{
      if(['jeans','trousers','shorts','cargo','flare'].includes(item.shape))for(const side of[-1,1])box(garment,[.17,item.shape==='shorts'?.5:1.02,.16],cloth,[side*.095,item.shape==='shorts'?1.99:1.73,0]);
      else add(garment,loftGeometry([[1.52,.29,.13],[2.29,.17,.085]]),cloth);
      box(garment,[.37,.13,.17],cloth,[0,2.29,0]);
    }
  });
  label(rack,station.name,[0,3.23,0]);return rack;
}
function makeDisplay(parent,station,catalog){
  const display=new THREE.Group();parent.add(display);display.position.set(station.x,0,station.z);display.rotation.y=station.rotation;display.userData.station=station;
  const tint=material(station.color);
  box(display,[2.4,1,.7],tint,[0,.5,0]);box(display,[2.55,.12,.85],cream,[0,1.05,0]);
  for(const x of[-.65,0,.65])ball(display,[.05,.05,.02],gold,[x,.72,.36]);
  if(['hair','makeup'].includes(station.id)){
    const mirror=arch(display,1.65,1.92,material('#b9cbd0',{metalness:.52,roughness:.15}),-.15);mirror.position.y=1.1;
    const frame=arch(display,1.82,2.08,gold,-.25);frame.position.y=1.04;
    for(const side of[-1,1])for(let i=0;i<4;i++)ball(display,[.06,.06,.06],material('#fff4c9',{emissive:'#f5dc9a',emissiveIntensity:.5}),[side*.91,1.35+i*.37,0]);
    for(const x of[-.8,.75]){cylinder(display,.08,.28,material(x<0?'#b9a5ce':'#ddb188'),[x,1.27,.21]);cylinder(display,.035,.06,gold,[x,1.44,.21]);}
  }else{
    box(display,[2.42,.08,.7],cream,[0,1.9,0]);
  }
  stockDisplay(display,station,catalog,(stock,item,i)=>{
    stock.position.set((i-1.5)*.55,['hair','makeup'].includes(station.id)?1.16:(i<2?1.18:2.02),.12);
    const fabric=material(item.color);
    if(station.id==='shoes')for(const side of[-1,1]){ball(stock,[.09,.10,.22],fabric,[side*.095,.03,0]);if(['boot','starboot','laceboot','hightop'].includes(item.shape))cylinder(stock,.078,.27,fabric,[side*.095,.17,-.10]);}
    else if(station.id==='makeup'){cylinder(stock,.19,.04,gold,[0,0,0]);for(const x of[-.07,.07])for(const z of[-.07,.07])cylinder(stock,.06,.035,material(x<0?item.color:'#eab7c6'),[x,.032,z]);}
    else if(station.id==='hair'){ball(stock,[.13,.17,.11],cream,[0,.16,0]);ball(stock,[.16,.135,.14],fabric,[0,.28,-.025]);}
    else if(item.shape==='headphones'){tube(stock,[[-.18,.02,0],[-.17,.28,0],[0,.37,0],[.17,.28,0],[.18,.02,0]],.027,cream);for(const s of[-1,1])ball(stock,[.055,.10,.085],fabric,[s*.18,.035,0]);}
    else if(item.shape==='catears'){tube(stock,[[-.19,0,0],[0,.16,0],[.19,0,0]],.025,fabric);for(const s of[-1,1])add(stock,new THREE.ConeGeometry(.09,.17,3),fabric,[s*.14,.18,0]);}
    else if(item.shape==='cape')add(stock,loftGeometry([[0,.22,.10],[.4,.09,.06]]),fabric);
    else {ball(stock,[.18,.17,.09],fabric,[0,.14,0]);tube(stock,[[-.10,.27,0],[0,.43,0],[.10,.27,0]],.023,gold);}
  });
  label(display,station.name,[0,3.52,0]);return display;
}
function makeRoom(scene,catalog){
  const room=new THREE.Group();scene.add(room);
  const tile=new THREE.BoxGeometry(.99,.055,.99),counts=[0,0];
  for(let x=0;x<14;x++)for(let z=0;z<14;z++)counts[(x+z)%2]++;
  const tiles=[new THREE.InstancedMesh(tile,floorMat,counts[0]),new THREE.InstancedMesh(tile,altFloor,counts[1])],indices=[0,0],matrix=new THREE.Matrix4();
  for(let x=0;x<14;x++)for(let z=0;z<14;z++){const kind=(x+z)%2;matrix.makeTranslation(x-6.5,-.04,z-6.5);tiles[kind].setMatrixAt(indices[kind]++,matrix);}
  tiles.forEach(t=>{t.receiveShadow=true;room.add(t);});
  const wall=material('#ead7df'),walls={back:new THREE.Group(),left:new THREE.Group(),right:new THREE.Group()};
  Object.values(walls).forEach(group=>room.add(group));
  box(walls.back,[14,4.7,.16],wall,[0,2.3,-7]);box(walls.left,[.16,4.7,14],wall,[-7,2.3,0]);box(walls.right,[.16,4.7,14],wall,[7,2.3,0]);
  box(walls.back,[14,.16,.15],cream,[0,.17,-6.86]);box(walls.left,[.15,.16,14],cream,[-6.86,.17,0]);box(walls.right,[.15,.16,14],cream,[6.86,.17,0]);
  for(const x of[-6.3,-4.2,-2.1,0,2.1,4.2,6.3])box(walls.back,[.045,4.2,.045],cream,[x,2.2,-6.88]);
  for(const x of[-2.2,2.1]){
    ball(room,[.63,.20,.57],material('#c3adc8'),[x,.53,1]);
    cylinder(room,.49,.36,gold,[x,.25,1]);
  }
  for(const [x,z]of[[-6.2,-6.3],[6.2,-6.3],[-6.2,5.9],[6.2,5.9]])plant(room,x,z);
  box(room,[1.85,.016,6.8],pink,[0,.005,-1.15]);
  const interactions=[];
  for(const station of STATIONS){
    if(station.id==='runway'){
      const runway=new THREE.Group();room.add(runway);runway.position.set(station.x,0,station.z);runway.userData.station=station;
      cylinder(runway,1.32,.08,cream,[0,.025,0]);
      const backdrop=arch(runway,2.5,3.9,material('#d2b4ca'),-.75);backdrop.castShadow=false;
      const inset=arch(runway,2.16,3.60,material('#e5cbd8'),-.64);inset.position.y=.04;
      label(runway,'THE RUNWAY',[0,3.96,-.6],'#986279',2.4);
      for(const side of[-1,1])for(let i=0;i<6;i++)ball(runway,[.046,.046,.046],material('#fff2c5',{emissive:'#ffeabd',emissiveIntensity:.7}),[side*1.05,.35+i*.49,-.49]);
      interactions.push(runway);
    }else interactions.push(['dresses','tops','bottoms'].includes(station.id)?makeRack(room,station,catalog):makeDisplay(room,station,catalog));
  }
  return {room,interactions,wall,walls};
}
function setupRenderer(container){
  const renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true,powerPreference:'high-performance'});
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
  constructor(container,{catalog,game,onStation=()=>{},onNearby=()=>{},onView=()=>{},onGrab=()=>{},onDrag=()=>{},onDrop=()=>{},onHover=()=>{},onRackPage=()=>{}}={}){
    this.container=container;this.catalog=catalog;this.onStation=onStation;this.onNearby=onNearby;this.onView=onView;
    this.onGrab=onGrab;this.onDrag=onDrag;this.onDrop=onDrop;this.onHover=onHover;this.onRackPage=onRackPage;
    this.renderer=setupRenderer(container);this.canvas=this.renderer.domElement;
    this.canvas.setAttribute('aria-label','3D boutique. Drag a piece from a rack onto your character to wear it. Use WASD or arrow keys to walk, E to browse, and drag the floor to look around.');
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#eedfe5');this.scene.fog=new THREE.Fog('#eedfe5',18,34);
    this.camera=new THREE.PerspectiveCamera(43,1,.1,60);lightScene(this.scene);this.environment=makeRoom(this.scene,catalog);
    this.shoppers=new THREE.Group();this.scene.add(this.shoppers);this.friendsVisible=true;this.npcs=[];
    if(game)for(let i=0;i<3;i++) {
      const brain=new ShopperBrain(game,i),anchor=new THREE.Group();anchor.scale.setScalar(.88);this.shoppers.add(anchor);
      label(anchor,brain.name,[0,3.82,0],'#865e77',1.12);
      const npc={brain,anchor,character:null};this.npcs.push(npc);this.dressShopper(npc);
    }
    this.fittingStage=new THREE.Group();this.scene.add(this.fittingStage);this.fittingStage.visible=false;
    cylinder(this.fittingStage,1.10,.10,cream,[0,.05,0]);cylinder(this.fittingStage,1.12,.035,gold,[0,.035,0]);
    const fittingFloor=box(this.fittingStage,[60,.05,60],material('#e9dbe4'),[0,-.07,0]);fittingFloor.castShadow=false;
    this.anchor=new THREE.Group();this.scene.add(this.anchor);this.position={x:0,z:3.6};this.yaw=0;this.cameraYaw=.18;this.pitch=.43;this.view='walk';this.poseStyle=0;this.active=true;
    this.keys=new Set();this.virtual=new Set();this.path=[];this.destinationStation=null;this.nearby=null;this.disposed=false;this.elapsed=0;this.lastFrame=performance.now();this.dragging=false;this.stockSource=null;
    this.camera.position.set(3,6,12);this.target=new THREE.Vector3(0,1.5,3.6);this.abort=new AbortController();
    this.bind();this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(container);this.resize();this.loop();
  }
  setOutfit(outfit){this.character?.dispose();this.character=buildCharacter(outfit,this.catalog);this.anchor.add(this.character.root);this.outfit=outfit;this.canvas.dataset.outfit=JSON.stringify(outfit);this.draw(0);}
  setTheme(theme){this.environment.wall.color.set(theme.bg);}
  setActive(active){this.active=active;if(!active){this.keys.clear();this.virtual.clear();this.path=[];this.destinationStation=null;}else this.resize();}
  setPose(pose){this.poseStyle=pose;this.canvas.dataset.pose=String(pose);this.setView('fit');}
  setView(mode){const changed=this.view!==mode;this.view=mode;this.canvas.dataset.view=mode;this.path=[];this.destinationStation=null;this.keys.clear();this.virtual.clear();if(changed){this.pitch=mode==='face'?.025:mode==='fit'?.16:.43;if(mode!=='walk')this.yaw=this.cameraYaw;}this.onView(mode);}
  resetCamera(){const mode=this.view==='face'?'face':'fit';this.setView(mode);this.cameraYaw=.18;this.pitch=mode==='face'?.025:.16;this.yaw=.18;}
  turn(amount){this.setView(this.view==='face'?'face':'fit');this.cameraYaw+=amount;}
  setMove(direction,pressed){if(pressed){this.virtual.add(direction);if(this.view!=='walk'){this.view='walk';this.pitch=.43;this.onView('walk');}}else this.virtual.delete(direction);}
  interact(){if(this.nearby)this.onStation(this.nearby);}
  dressShopper(npc){npc.character?.dispose();npc.character=buildCharacter(npc.brain.outfit,this.catalog);npc.character.root.traverse(part=>{if(part.isMesh)part.castShadow=false;});npc.anchor.add(npc.character.root);}
  setFriends(visible){this.friendsVisible=visible;this.shoppers.visible=visible&&this.view==='walk';this.canvas.dataset.friends=String(visible);}
  cycleRack(){const rack=this.environment.interactions.find(group=>group.userData.station?.id===this.nearby?.id);if(!rack?.userData.setPage)return; rack.userData.setPage(rack.userData.page+1);this.onRackPage(rack.userData.page+1,rack.userData.pages);}
  rackPages(){return this.environment.interactions.find(group=>group.userData.station?.id===this.nearby?.id)?.userData.pages||0;}
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
      if(['w','a','s','d','arrowup','arrowleft','arrowdown','arrowright'].includes(key)){event.preventDefault();this.keys.add(key);if(this.view!=='walk'){this.view='walk';this.pitch=.43;this.onView('walk');}this.path=[];}
      if(key==='e'){event.preventDefault();this.interact();}
    },{signal});
    document.addEventListener('keyup',event=>this.keys.delete(event.key.toLowerCase()),{signal});
    window.addEventListener('blur',()=>{this.keys.clear();this.virtual.clear();if(this.dragging)this.onDrop(null,true);},{signal});
    document.addEventListener('visibilitychange',()=>{if(document.hidden){this.keys.clear();this.virtual.clear();}},{signal});
    canvas.addEventListener('blur',()=>this.keys.clear(),{signal});
    let pointer=null;
    canvas.addEventListener('pointerdown',event=>{if(event.button!==0)return;canvas.focus({preventScroll:true});canvas.setPointerCapture(event.pointerId);pointer={id:event.pointerId,x:event.clientX,y:event.clientY,startX:event.clientX,startY:event.clientY,moved:false,item:this.itemAt(event),started:false};},{signal});
    canvas.addEventListener('pointermove',event=>{
      if(!pointer){const item=this.itemAt(event);this.canvas.style.cursor=item?'grab':'move';this.onHover(item?.userData.itemId||null,event);return;}
      const dx=event.clientX-pointer.x,dy=event.clientY-pointer.y;pointer.moved ||= Math.hypot(event.clientX-pointer.startX,event.clientY-pointer.startY)>6;
      if(pointer.moved){
        if(pointer.item){if(!pointer.started){pointer.started=true;this.setDressDrag(true,pointer.item);this.onGrab(pointer.item.userData.itemId,event);}if(this.dragging)this.onDrag(event);}
        else{this.cameraYaw-=dx*.009;this.pitch=THREE.MathUtils.clamp(this.pitch+dy*.004,.025,.85);}
      }
      pointer.x=event.clientX;pointer.y=event.clientY;
    },{signal});
    canvas.addEventListener('pointerup',event=>{if(!pointer)return;const click=!pointer.moved,started=pointer.started;pointer=null;if(canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);if(started&&this.dragging)this.onDrop(event,false);else if(click&&this.view==='walk')this.pick(event);},{signal});
    canvas.addEventListener('pointercancel',()=>{pointer=null;if(this.dragging)this.onDrop(null,true);},{signal});
    canvas.addEventListener('pointerleave',()=>this.onHover(null),{signal});
  }
  pick(event){
    const ray=this.rayAt(event),hit=this.rackHit(event);
    let station=null;
    if(hit){let obj=hit.object;while(obj&&!obj.userData.station)obj=obj.parent;station=obj?.userData.station;}
    const goal=new THREE.Vector3();
    if(station){goal.set(station.approach[0],0,station.approach[1]);this.destinationStation=station;if(Math.hypot(goal.x-this.position.x,goal.z-this.position.z)<1.3){this.onStation(station);return;}}
    else {if(!ray.ray.intersectPlane(new THREE.Plane(new THREE.Vector3(0,1,0),0),goal))return;this.destinationStation=null;}
    this.path=planPath(this.position,{x:goal.x,z:goal.z});
    this.canvas.dataset.destination=station?.id||'floor';
  }
  walk(dt){
    const all=new Set([...this.keys,...this.virtual]);
    let x=Number(all.has('d')||all.has('arrowright')||all.has('right'))-Number(all.has('a')||all.has('arrowleft')||all.has('left'));
    let z=Number(all.has('s')||all.has('arrowdown')||all.has('down'))-Number(all.has('w')||all.has('arrowup')||all.has('up'));
    if(x||z){const originalX=x;x=x*Math.cos(this.cameraYaw)+z*Math.sin(this.cameraYaw);z=z*Math.cos(this.cameraYaw)-originalX*Math.sin(this.cameraYaw);this.path=[];this.destinationStation=null;}
    else if(this.path.length){const next=this.path[0],dx=next.x-this.position.x,dz=next.z-this.position.z,dist=Math.hypot(dx,dz);if(dist<.09)this.path.shift();else{x=dx/dist;z=dz/dist;}}
    const next=movePlayer(this.position,{x,z},dt,OBSTACLES),distance=Math.hypot(next.x-this.position.x,next.z-this.position.z);
    if(distance>.0001){const heading=Math.atan2(next.x-this.position.x,next.z-this.position.z);this.yaw+=Math.atan2(Math.sin(heading-this.yaw),Math.cos(heading-this.yaw))*Math.min(1,dt*12);this.poseStyle=0;}
    this.position=next;
    if(!this.path.length&&this.destinationStation){if(Math.hypot(next.x-this.destinationStation.approach[0],next.z-this.destinationStation.approach[1])<1.4)this.onStation(this.destinationStation);this.destinationStation=null;}
    const nearby=nearbyStation(this.position);if(nearby?.id!==this.nearby?.id){this.nearby=nearby;this.onNearby(nearby);}
    this.canvas.dataset.position=`${next.x.toFixed(2)},${next.z.toFixed(2)}`;return distance>.0001;
  }
  draw(dt){
    const walking=this.view==='walk'&&!this.dragging&&this.walk(dt),time=this.elapsed;
    if(this.character){this.anchor.position.set(this.position.x,this.view==='walk'?-.04:.08,this.position.z);this.anchor.rotation.y=this.yaw;this.character.pose(time,this.poseStyle,walking);}
    const distance=this.view==='face'?2.20:this.view==='fit'?5.35:8.8,height=this.view==='face'?2.88:this.view==='fit'?1.78:1.4;
    this.target.set(this.position.x,height,this.position.z);
    const desired=new THREE.Vector3(this.position.x+Math.sin(this.cameraYaw)*distance*Math.cos(this.pitch),height+Math.sin(this.pitch)*distance,this.position.z+Math.cos(this.cameraYaw)*distance*Math.cos(this.pitch));
    this.camera.position.lerp(desired,dt?1-Math.exp(-dt*7):1);this.camera.lookAt(this.target);
    this.environment.room.visible=this.view==='walk';this.fittingStage.visible=this.view!=='walk';this.fittingStage.position.set(this.position.x,0,this.position.z);
    this.shoppers.visible=this.view==='walk'&&this.friendsVisible;
    for(const npc of this.npcs){
      const result=this.shoppers.visible&&!this.dragging?npc.brain.tick(dt,this.position,this.npcs.filter(other=>other!==npc).map(other=>other.brain.position)):{walking:false,pose:0};
      if(result.changed)this.dressShopper(npc);
      npc.anchor.position.set(npc.brain.position.x,-.04,npc.brain.position.z);npc.anchor.rotation.y=npc.brain.yaw;npc.character.pose(time+this.npcs.indexOf(npc),result.pose,result.walking);
    }
    if(!this.lastNpcReport||time-this.lastNpcReport>.5){this.canvas.dataset.shoppers=JSON.stringify(this.npcs.map(({brain})=>({name:brain.name,activity:brain.description(),x:+brain.position.x.toFixed(2),z:+brain.position.z.toFixed(2),changes:brain.changes})));this.lastNpcReport=time;}
    this.environment.walls.left.visible=this.camera.position.x>-6.5;this.environment.walls.right.visible=this.camera.position.x<6.5;this.environment.walls.back.visible=this.camera.position.z>-6.5;
    this.renderer.render(this.scene,this.camera);
    this.canvas.dataset.facing=this.cameraYaw.toFixed(2);this.canvas.dataset.view=this.view;this.canvas.dataset.ready='true';
  }
  loop(){if(this.disposed)return;this.frame=requestAnimationFrame(()=>this.loop());const now=performance.now(),dt=Math.min((now-this.lastFrame)/1000,.05);this.lastFrame=now;if(this.active&&!document.hidden&&!document.querySelector('dialog[open]')){this.elapsed+=dt;this.draw(dt);}}
  portrait(outfit){return portrait(outfit,this.catalog);}
  dispose(){this.disposed=true;cancelAnimationFrame(this.frame);this.abort.abort();this.resizeObserver.disconnect();this.character?.dispose();this.npcs.forEach(npc=>npc.character.dispose());this.renderer.dispose();}
}

let photoRenderer;
export function portrait(outfit,catalog,pose=1){
  photoRenderer ||= new THREE.WebGLRenderer({antialias:true,alpha:true,preserveDrawingBuffer:true});
  photoRenderer.setSize(440,600);photoRenderer.setPixelRatio(1);photoRenderer.outputColorSpace=THREE.SRGBColorSpace;photoRenderer.toneMapping=THREE.ACESFilmicToneMapping;photoRenderer.toneMappingExposure=1.2;
  const scene=new THREE.Scene();lightScene(scene);const doll=buildCharacter(outfit,catalog);scene.add(doll.root);doll.pose(.7,pose,false);doll.root.rotation.y-=.15;
  const camera=new THREE.PerspectiveCamera(35,440/600,.1,30);camera.position.set(0,2.0,6.8);camera.lookAt(0,1.72,0);photoRenderer.render(scene,camera);
  const data=photoRenderer.domElement.toDataURL('image/png');doll.dispose();return data;
}

export class Runway {
  constructor(container,catalog){
    this.container=container;this.catalog=catalog;this.renderer=setupRenderer(container);this.renderer.domElement.tabIndex=-1;this.renderer.domElement.setAttribute('aria-label','Your character walking the 3D runway');
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#dec4d5');lightScene(this.scene);
    const floor=box(this.scene,[9,.10,16],cream,[0,-.08,0]);floor.receiveShadow=true;box(this.scene,[2.1,.016,14],pink,[0,-.018,0]);
    for(const side of[-1,1])for(let i=0;i<9;i++){cylinder(this.scene,.04,.75,gold,[side*1.8,.37,-i]);ball(this.scene,[.07,.07,.07],material('#fff4cf',{emissive:'#fff0bb',emissiveIntensity:.8}),[side*1.8,.8,-i]);}
    this.camera=new THREE.PerspectiveCamera(36,1,.1,40);this.camera.position.set(.1,2.05,6.6);this.camera.lookAt(0,1.65,0);
    this.anchor=new THREE.Group();this.scene.add(this.anchor);this.active=false;this.reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(container);this.loop();
  }
  resize(){const {width,height}=this.container.getBoundingClientRect();if(width<2||height<2)return;this.renderer.setSize(width,height,false);this.camera.aspect=width/height;this.camera.updateProjectionMatrix();}
  show(outfit,pose=1){this.character?.dispose();this.character=buildCharacter(outfit,this.catalog);this.anchor.add(this.character.root);this.poseStyle=pose;this.started=performance.now();this.active=true;this.resize();}
  hide(){this.active=false;}
  loop(){this.frame=requestAnimationFrame(()=>this.loop());if(!this.active||document.hidden)return;const elapsed=(performance.now()-this.started)/1000,walking=!this.reduced&&elapsed<3.5;this.anchor.position.z=walking?-3.2*(1-elapsed/3.5):0;this.anchor.rotation.y=walking?0:Math.sin((elapsed-3.5)*.5)*.28;this.character?.pose(elapsed,walking?0:this.poseStyle,walking);this.renderer.render(this.scene,this.camera);}
}
