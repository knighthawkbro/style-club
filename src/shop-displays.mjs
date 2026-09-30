import * as THREE from 'three';
import { buildDisplayItem } from './model3d.mjs';

const material=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.72,...extra});
const cream=material('#fff6e7'),gold=material('#c6a66e',{metalness:.45,roughness:.4});
function mesh(parent,geometry,mat,position){const part=new THREE.Mesh(geometry,mat);part.position.set(...position);part.receiveShadow=true;parent.add(part);return part;}
const box=(p,size,mat,pos)=>mesh(p,new THREE.BoxGeometry(...size),mat,pos);
const pole=(p,r,h,mat,pos)=>mesh(p,new THREE.CylinderGeometry(r,r,h,12),mat,pos);
function tube(parent,points,radius,mat){return mesh(parent,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),16,radius,6,false),mat,[0,0,0]);}
function plaque(parent,text,x,y,z,width=.66,height=.16){
  const canvas=document.createElement('canvas');canvas.width=384;canvas.height=96;
  const ctx=canvas.getContext('2d');ctx.fillStyle='#fffaf1';ctx.fillRect(0,0,384,96);ctx.fillStyle='#614c61';
  ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='600 30px Segoe UI, sans-serif';
  const words=text.split(' '),lines=[''];
  for(const word of words){const i=lines.length-1;if(ctx.measureText(`${lines[i]} ${word}`).width>360&&lines[i])lines.push(word);else lines[i]+=(lines[i]?' ':'')+word;}
  lines.slice(0,2).forEach((line,i)=>ctx.fillText(line,192,lines.length>1?28+i*39:48));
  const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
  return mesh(parent,new THREE.PlaneGeometry(width,height),new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide}),[x,y,z]);
}
function fixtureRoot(parent,fixture){
  const root=new THREE.Group();root.name=`${fixture.store.name} display`;parent.add(root);
  root.position.set(fixture.x,0,fixture.z);root.rotation.y=fixture.rotation;
  root.userData.station=fixture.station;root.userData.stock=[];
  box(root,[fixture.width,.17,.80],cream,[0,.12,0]);
  return root;
}
function displayPiece(root,item,catalog,x,y,{hanging=false}={}){
  const stock=new THREE.Group();stock.userData.itemId=item.id;stock.name=item.name;stock.position.set(x,y,.07);root.add(stock);
  const preview=buildDisplayItem(item,catalog),size=new THREE.Box3().setFromObject(preview).getSize(new THREE.Vector3());
  const maxHeight=hanging?Math.min(1.75,size.y*.8):.77;
  const scale=hanging?maxHeight/size.y:Math.min(.61/size.x,maxHeight/size.y,.58/size.z);
  preview.scale.set(Math.min(scale,.62/size.x),scale,Math.min(scale,.56/size.z));
  preview.position.y=hanging?-maxHeight:0;
  stock.add(preview);
  // Generous invisible grab areas make small jewelry and gaps in a garment
  // easy to pick up without accidentally turning the camera.
  const hitHeight=hanging?maxHeight:Math.max(.45,size.y*scale);
  const grab=mesh(stock,new THREE.BoxGeometry(.68,hitHeight+.12,.66),new THREE.MeshBasicMaterial({visible:false}),[0,(hanging?-1:1)*hitHeight/2,.03]);
  grab.name=`Grab ${item.name}`;
  plaque(stock,item.name,0,hanging?-maxHeight-.13:-.095,.36);
  root.userData.stock.push(stock);
  return stock;
}
export function makeRack(parent,fixture,catalog){
  const rack=fixtureRoot(parent,fixture),width=fixture.width;
  const backdrop=material(new THREE.Color(fixture.store.color).lerp(new THREE.Color('#fffaf0'),.80));
  box(rack,[width-.12,2.48,.055],backdrop,[0,1.48,-.32]);
  for(const x of[-width/2+.10,width/2-.10])pole(rack,.035,2.77,gold,[x,1.56,0]);
  const rail=pole(rack,.033,width-.18,gold,[0,2.79,0]);rail.rotation.z=Math.PI/2;
  fixture.items.forEach((item,i)=>{
    const x=(i-(fixture.items.length-1)/2)*.75;
    tube(rack,[[x-.20,2.45,0],[x,2.65,0],[x+.20,2.45,0],[x-.20,2.45,0]],.012,gold);
    tube(rack,[[x,2.65,0],[x,2.81,0],[x+.05,2.83,0]],.012,gold);
    displayPiece(rack,item,catalog,x,2.45,{hanging:true});
  });
  plaque(rack,'PICK A PIECE · DRAG TO WEAR',0,3.01,.02,2.5,.21);
  return rack;
}
export function makeDisplay(parent,fixture,catalog){
  const display=fixtureRoot(parent,fixture),width=fixture.width,tint=material(fixture.store.beauty?'#35313d':fixture.store.color);
  box(display,[width-.12,.54,.73],tint,[0,.47,-.02]);
  box(display,[width-.12,2.35,.06],material(new THREE.Color(fixture.store.color).lerp(new THREE.Color('#fff8ee'),.78)),[0,1.70,-.33]);
  for(const x of[-width/2+.08,width/2-.08])pole(display,.027,2.70,gold,[x,1.58,-.27]);
  for(const y of[.85,1.90])box(display,[width,.07,.80],cream,[0,y,0]);
  fixture.items.forEach((item,i)=>{
    const row=Math.floor(i/6),columns=Math.min(6,fixture.items.length-row*6),x=(i%6-(columns-1)/2)*.75;
    displayPiece(display,item,catalog,x,.90+row*1.05);
  });
  const categories=new Set(fixture.items.map(item=>item.category));
  const title=categories.size>1?'LITTLE FINISHING TOUCHES':({hair:'HAIR STUDIO',makeup:'THE BEAUTY BAR',shoes:'FIND YOUR HAPPY FEET',extras:'BAGS, JEWELS & LITTLE FRIENDS'})[fixture.items[0]?.category];
  plaque(display,title||'YOUR NEXT FAVORITE',0,3.01,.02,3,.23);
  return display;
}
export function makeMirror(parent,fixture){
  const display=fixtureRoot(parent,fixture);
  box(display,[4.5,.7,.68],material(fixture.store.color),[0,.55,-.02]);
  box(display,[2.7,1.94,.12],gold,[0,1.96,-.23]);
  box(display,[2.54,1.79,.04],material('#b8cdd2',{metalness:.6,roughness:.19}),[0,1.96,-.15]);
  const bulb=material('#fff5dc',{emissive:'#ffe5b0',emissiveIntensity:.35});
  for(const x of[-1.49,1.49])for(let i=0;i<4;i++)mesh(display,new THREE.SphereGeometry(.065,10,8),bulb,[x,1.29+i*.43,-.06]);
  plaque(display,fixture.store.id==='halloween'?'LOOKING BOO-TIFUL!':'HELLO, STYLE STAR!',0,3.12,0,2.6,.22);
  return display;
}
