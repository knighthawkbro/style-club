import * as THREE from 'three';
import { ACTIVITIES } from './world-rules.mjs';

const material=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.65,...extra});
const ivory=material('#fff6e7'),gold=material('#c3a16d',{metalness:.5,roughness:.35}),rose=material('#c490ad'),plum=material('#775876');
function box(parent,size,mat,position){const mesh=new THREE.Mesh(new THREE.BoxGeometry(...size),mat);mesh.position.set(...position);mesh.receiveShadow=true;parent.add(mesh);return mesh;}
function round(parent,radius,height,mat,position){const mesh=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,height,24),mat);mesh.position.set(...position);parent.add(mesh);return mesh;}
export function buildActivitySpots(room,label){
  const objects=[],mirrors=[];
  for(const activity of ACTIVITIES.filter(a=>a.kind!=='bench')){
    const group=new THREE.Group();group.name=activity.name;group.userData.activity=activity.id;group.position.set(activity.x,0,activity.z);group.rotation.y=activity.yaw;room.add(group);objects.push(group);
    if(activity.kind==='photo'){
      box(group,[2.6,.08,1.8],rose,[0,.01,.0]);
      box(group,[2.6,3.55,.15],plum,[0,1.78,-.52]);
      box(group,[2.35,3.25,.03],material('#d5b4d4'),[0,1.8,-.41]);
      for(const side of[-1,1]){box(group,[.22,3.7,.65],gold,[side*1.35,1.85,-.3]);for(let i=0;i<7;i++)round(group,.07,.1,ivory,[side*1.35,.4+i*.45,.08]).rotation.x=Math.PI/2;}
      label(group,'THE PHOTO BOOTH',[0,3.95,0],'#79516f',2.8);
      label(group,'Friends · pets · happy memories',[0,3.47,0],'#79516f',2.7);
      box(group,[.42,.5,.3],plum,[1.7,1.8,.6]);round(group,.11,.12,gold,[1.7,1.8,.80]).rotation.x=Math.PI/2;
      round(group,.035,1.65,gold,[1.7,.825,.6]);continue;
    }
    const vanity=['salon','beauty'].includes(activity.kind),mirrorZ=vanity?1.02:0;
    box(group,[1.6,2.8,.12],gold,[0,1.85,mirrorZ]);
    const mirrorMaterial=new THREE.MeshBasicMaterial({color:'#e4eef0',side:THREE.DoubleSide});
    const mirror=new THREE.Mesh(new THREE.PlaneGeometry(1.45,2.62),mirrorMaterial);mirror.position.set(0,1.85,mirrorZ-.071);mirror.rotation.y=Math.PI;group.add(mirror);mirrors.push({id:activity.id,material:mirrorMaterial});
    const reverseMirror=mirror.clone();reverseMirror.position.z=mirrorZ+.071;group.add(reverseMirror);
    if(vanity){
      round(group,.42,.09,gold,[0,.06,0]);round(group,.065,.7,gold,[0,.39,0]);
      box(group,[.79,.19,.76],rose,[0,.72,0]);box(group,[.79,.71,.12],rose,[0,1.05,-.36]);
      for(const side of[-1,1])box(group,[.09,.13,.61],gold,[side*.44,1.03,0]);
      box(group,[1.65,.1,.50],ivory,[0,1.25,mirrorZ-.09]);
      for(const side of[-1,1])for(let i=0;i<5;i++)round(group,.065,.07,ivory,[side*.90,1.55+i*.35,mirrorZ-.1]).rotation.x=Math.PI/2;
      if(activity.kind==='beauty'){
        box(group,[.57,.05,.24],plum,[-.3,1.32,mirrorZ-.1]);
        for(let i=0;i<4;i++)round(group,.054,.025,material(['#db91a5','#bda5d8','#83bfb7','#edcc82'][i]),[-.5+i*.14,1.36,mirrorZ-.1]);
        round(group,.11,.18,gold,[.54,1.39,mirrorZ-.1]);
        for(let i=0;i<3;i++){round(group,.018,.37,plum,[.48+i*.055,1.55,mirrorZ-.1]);round(group,.042,.1,rose,[.48+i*.055,1.75,mirrorZ-.1]);}
      }else{
        box(group,[.29,.04,.16],plum,[-.47,1.34,mirrorZ-.15]);
        for(let i=0;i<6;i++)box(group,[.018,.09,.1],gold,[-.59+i*.045,1.38,mirrorZ-.15]);
        round(group,.07,.24,rose,[.48,1.42,mirrorZ-.1]);
      }
    }else{
      box(group,[1.7,.07,1.35],rose,[0,.025,-.65]);
      for(const side of[-1,1])box(group,[.16,3.2,.14],rose,[side*.93,1.6,0]);
    }
    label(group,activity.kind==='salon'?'SIT & STYLE':activity.kind==='beauty'?'BRUSHES & BLUSH':'TRY IT IN THE MIRROR',[0,3.43,mirrorZ],'#8f6482',2.2);
  }
  return{objects,mirrors};
}
