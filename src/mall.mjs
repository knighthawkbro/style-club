import * as THREE from 'three';
import { STORES, STATIONS, BENCH_BANKS, shopStock } from './world-rules.mjs';

const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.78,...extra});
const cream=mat('#fff7e9'),stone=mat('#eee6df'),gold=mat('#c1a06c',{metalness:.45,roughness:.4});
function mesh(parent,geometry,material,position){const m=new THREE.Mesh(geometry,material);m.position.set(...position);m.receiveShadow=true;parent.add(m);return m;}
const box=(p,size,m,pos)=>mesh(p,new THREE.BoxGeometry(...size),m,pos);
const cylinder=(p,r,h,m,pos)=>mesh(p,new THREE.CylinderGeometry(r,r,h,28),m,pos);
function sphere(p,scale,m,pos){const b=mesh(p,new THREE.SphereGeometry(1,16,12),m,pos);b.scale.set(...scale);return b;}
function sign(parent,title,subtitle,color,width=4.4){
  const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=240;const ctx=canvas.getContext('2d');
  ctx.fillStyle=color;ctx.fillRect(0,0,1024,240);ctx.strokeStyle='#ffffff55';ctx.lineWidth=3;ctx.strokeRect(17,17,990,206);
  ctx.fillStyle='#fff9ec';ctx.textAlign='center';ctx.font='600 62px Georgia, serif';ctx.fillText(title,512,108);
  ctx.font='500 24px Segoe UI, sans-serif';ctx.fillText(subtitle.toUpperCase(),512,174);
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
  return mesh(parent,new THREE.PlaneGeometry(width,width*240/1024),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide}),[0,0,0]);
}
function plant(p,x,z){
  cylinder(p,.30,.48,cream,[x,.24,z]);const leaf=mat('#769479');
  for(let i=0;i<6;i++){const a=i/6*Math.PI*2,b=sphere(p,[.13,.48,.16],leaf,[x+Math.sin(a)*.15,.77,z+Math.cos(a)*.15]);b.rotation.z=Math.sin(a)*.4;}
}
export function buildMall(scene,catalog,{makeRack,makeDisplay,makeMirror,label,arch}){
  const room=new THREE.Group();room.name='Style Club one-floor mall';scene.add(room);
  const tile=new THREE.BoxGeometry(.995,.06,.995),floor=[mat('#efeae3'),mat('#e8e4df')],tiles=floor.map(m=>new THREE.InstancedMesh(tile,m,338));
  const indices=[0,0],matrix=new THREE.Matrix4();
  for(let x=0;x<26;x++)for(let z=0;z<26;z++){const kind=(x+z)%2;matrix.makeTranslation(x-12.5,-.055,z-12.5);tiles[kind].setMatrixAt(indices[kind]++,matrix);}
  tiles.forEach(t=>{t.receiveShadow=true;room.add(t);});
  const wall=mat('#eadde5'),walls={back:new THREE.Group(),left:new THREE.Group(),right:new THREE.Group()},partitions=[];
  Object.values(walls).forEach(w=>room.add(w));
  box(walls.back,[25.4,4.5,.16],wall,[0,2.2,-12.65]);
  for(const side of[-1,1]){
    box(walls[side<0?'left':'right'],[.16,4.5,25.4],wall,[side*12.65,2.2,0]);
    box(room,[.13,.025,25.2],gold,[side*4.45,-.012,0]);
    box(room,[.36,.025,25.2],mat('#cfbdad'),[side*4.17,-.01,0]);
    for(const z of[-12,-6,0,6,12]){
      const partition=new THREE.Group();room.add(partition);
      box(partition,[7.9,3.6,.18],stone,[side*8.35,1.8,z]);box(partition,[7.9,.1,.2],gold,[side*8.35,.15,z]);
      partitions.push({group:partition,z,side});
      box(room,[.38,4.5,.38],cream,[side*4.5,2.22,z]);box(room,[.52,.17,.52],gold,[side*4.5,.15,z]);
    }
    for(const z of[-10.8,10.8])plant(room,side*2.85,z);
  }
  const benchWood=mat('#b18b74');
  for(const bank of BENCH_BANKS){
    const pair=new THREE.Group();pair.name='Back-to-back promenade benches';pair.position.set(bank.x,0,bank.z);room.add(pair);
    box(pair,[.16,.60,1.7],benchWood,[0,.80,0]);
    box(pair,[.18,.035,1.72],gold,[0,1.115,0]);
    for(const side of[-1,1]){
      box(pair,[.60,.18,1.7],benchWood,[side*.38,.52,0]);
      for(const dz of[-.6,.6])box(pair,[.45,.5,.12],gold,[side*.38,.25,dz]);
    }
  }
  const banners=[];
  for(const store of STORES){
    const {side,z,color}=store,x=side*8.45,tint=mat(color),front=new THREE.Group();room.add(front);
    box(room,[7.55,.04,5.8],mat(store.id==='makeup'?'#eee9e9':new THREE.Color(color).lerp(new THREE.Color('#fff8ef'),.72)),[x,-.015,z]);
    box(front,[.22,1.02,5.65],tint,[side*4.58,3.78,z]);
    const board=sign(front,store.name,store.detail,store.beauty?'#35313d':new THREE.Color(color).multiplyScalar(.64).getStyle(),5.2);board.position.set(side*4.44,3.78,z);board.rotation.y=-side*Math.PI/2;
    banners.push({group:front,side,z});
    // Open entrances are flanked by little display windows.
    for(const dz of[-2.33,2.33]){
      box(room,[.52,.25,.95],cream,[side*4.91,.125,z+dz]);
      box(room,[.055,2.42,.90],mat('#cee3e5',{transparent:true,opacity:.18,roughness:.1,depthWrite:false}),[side*4.70,1.48,z+dz]);
      box(room,[.08,2.5,.06],gold,[side*4.67,1.4,z+dz-.48]);box(room,[.08,2.5,.06],gold,[side*4.67,1.4,z+dz+.48]);
    }
    cylinder(room,.43,.13,cream,[x,3.66,z]);cylinder(room,.016,.55,gold,[x,4,z]);
    cylinder(room,.37,.035,mat('#fff4d2',{emissive:'#fff0be',emissiveIntensity:.5}),[x,3.58,z]);
    if(store.id==='makeup'){
      for(let i=0;i<10;i++)box(walls.left,[.04,3.3,.32],mat(i%2?'#fbf4f1':'#35313d'),[-12.53,1.75,z-2.7+i*.57]);
    }
    if(store.id==='vip'){
      box(room,[5.6,.025,2.3],mat('#9a6688'),[side*7.35,.01,z]);
      for(const dz of[-1.8,1.8]){cylinder(room,.04,1.05,gold,[side*5.2,.525,z+dz]);sphere(room,[.095,.095,.095],gold,[side*5.2,1.1,z+dz]);}
    }
    if(store.id==='halloween')for(const dz of[-2.1,2.1]){
      sphere(room,[.34,.31,.31],mat('#e6a05c'),[side*5.35,.36,z+dz]);cylinder(room,.04,.12,mat('#79916e'),[side*5.35,.7,z+dz]);
      for(const d of[-.10,.10])sphere(room,[.025,.042,.02],mat('#674a5a'),[side*5.35+d,.43,z+dz+.29]);
    }
  }
  // A fountain, benches and a directory give the centre a mall feel.
  cylinder(room,1.12,.27,cream,[0,.12,-.8]);cylinder(room,.96,.035,mat('#95c5d0',{metalness:.3,roughness:.2}),[0,.26,-.8]);
  cylinder(room,.17,.8,gold,[0,.60,-.8]);cylinder(room,.50,.11,cream,[0,1.0,-.8]);
  const water=sphere(room,[.33,.35,.33],mat('#b9dfe0',{transparent:true,opacity:.72}),[0,1.27,-.8]);
  box(room,[.93,1.1,.55],mat('#a68194'),[-1.8,.55,7.4]);
  const directory=sign(room,'STYLE CLUB','8 boutiques · one lovely day','#926e89',1.6);directory.position.set(-1.8,1.50,7.4);
  const interactions=shopStock(catalog).map(fixture=>fixture.kind==='rack'?makeRack(room,fixture,catalog):fixture.kind==='shelf'?makeDisplay(room,fixture,catalog):makeMirror(room,fixture));
  for(const station of STATIONS){
    if(station.id==='runway'){
      const runway=new THREE.Group();room.add(runway);runway.position.set(station.x,0,station.z);runway.userData.station=station;
      cylinder(runway,1.3,.08,cream,[0,.025,0]);arch(runway,2.8,4,mat('#c6a1bd'),-.8);arch(runway,2.4,3.76,mat('#e4c6d6'),-.66);
      label(runway,'THE RUNWAY',[0,3.97,-.55],'#895675',2.6);
      for(const side of[-1,1])for(let i=0;i<6;i++)sphere(runway,[.05,.05,.05],mat('#fff5d6',{emissive:'#ffe7ad',emissiveIntensity:.7}),[side*1.14,.4+i*.5,-.49]);
      interactions.push(runway);
    }
  }
  return{room,wall,walls,interactions,update(camera,position,time){
    walls.left.visible=camera.position.x>-12.3;walls.right.visible=camera.position.x<12.3;walls.back.visible=camera.position.z>-12.3;
    // Lower the wall between the camera and the player, like a dollhouse.
    for(const p of partitions){const crossing=(camera.position.z-p.z)*(position.z-p.z)<0&&camera.position.x*p.side>4.25;
      p.group.scale.y=crossing?.10:1;}
    for(const b of banners)b.group.visible=!(position.x*b.side>4.6&&camera.position.x*b.side<4.6&&Math.abs(position.z-b.z)<3);
    water.scale.y=.35+Math.sin(time*1.4)*.018;
  }};
}
