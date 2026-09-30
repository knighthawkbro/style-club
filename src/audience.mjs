import * as THREE from 'three';

const sphere=new THREE.SphereGeometry(1,12,8),limb=new THREE.CylinderGeometry(1,1,1,8),torso=new THREE.CylinderGeometry(.28,.23,.62,12);
const material=color=>new THREE.MeshStandardMaterial({color,roughness:.85});
const shades=['#f1cfad','#dba780','#ac775b','#7d503d','#c28e70','#ebbd9f'].map(material);
const shirts=['#a79ac8','#86b6ad','#e4abbd','#ddc08b','#93b0cc','#b191a9'].map(material);
const hair=['#453238','#8b5638','#d4af72','#302831'].map(material),dark=material('#65536e'),cream=material('#fff4df'),ink=material('#41323f');
function part(p,geo,mat,pos,scale){const m=new THREE.Mesh(geo,mat);m.position.set(...pos);if(scale)m.scale.set(...scale);p.add(m);return m;}
function link(mesh,a,b,radius){const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),direction=end.clone().sub(start);mesh.position.copy(start.add(end).multiplyScalar(.5));mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.clone().normalize());mesh.scale.set(radius,direction.length(),radius);}

export function makeAudience(parent,{label,reduced=false}={}){
  const root=new THREE.Group();root.name='Cheering runway guests';parent.add(root);const people=[];
  for(const side of[-1,1])for(let row=0;row<6;row++){
    const index=row+(side>0?6:0),skin=shades[index%6],shirt=shirts[(index*3+row)%6],person=new THREE.Group();
    root.add(person);person.position.set(side*(2.7+(row%2)*.14),0,1.05-row*1.43);person.scale.setScalar(.90+(index%3)*.035);
    const body=part(person,torso,shirt,[0,1.45,0]);body.rotation.z=side*.035;
    part(person,limb,skin,[0,1.90,0],[.095,.15,.095]);
    part(person,sphere,skin,[0,2.20,0],[.29,.35,.265]);
    part(person,sphere,hair[index%4],[0,2.38,-.07],[.32,.235,.255]);
    if(index%3===0)part(person,sphere,hair[index%4],[.22,2.58,-.1],[.16,.17,.16]);
    for(const s of[-1,1]){
      part(person,sphere,ink,[s*.10,2.23,.245],[.025,.036,.012]);part(person,sphere,cream,[s*.096,2.239,.255],[.008,.01,.005]);
      part(person,limb,dark,[s*.145,.70,0],[.11,.92,.12]);part(person,sphere,cream,[s*.145,.18,.09],[.13,.09,.23]);
    }
    const smile=part(person,new THREE.TorusGeometry(.06,.012,5,10,Math.PI),ink,[0,2.10,.255]);smile.rotation.z=Math.PI;
    const arms=[-1,1].map(s=>({side:s,upper:part(person,limb,shirt,[0,0,0]),lower:part(person,limb,skin,[0,0,0]),hand:part(person,sphere,skin,[0,0,0],[.067,.087,.06])}));
    const cheering=index%4===0;
    if(label&&index%4===1)label(person,['SO STYLISH!','YOU SHINE!','YAY!'][Math.floor(index/4)],[0,2.93,0],'#91617d',1.5);
    people.push({person,arms,index,side,cheering});
  }
  function update(time,heroZ=0){
    for(const {person,arms,index,side,cheering}of people){
      const t=reduced?index*.9:time+index*.57,clap=(Math.sin(t*7)+1)/2;
      person.rotation.y=Math.atan2(-person.position.x,heroZ-person.position.z);
      for(const arm of arms){const s=arm.side;
        const hand=cheering?[s*(.45+Math.sin(t*3+s)*.12),2.60+Math.sin(t*3)*.045,.12]:[s*(.045+clap*.19),1.83,.51];
        const elbow=cheering?[s*.57,2.1,.02]:[s*.43,1.47,.23];
        link(arm.upper,[s*.29,1.7,0],elbow,.085);link(arm.lower,elbow,hand,.066);arm.hand.position.set(...hand);
      }
      person.position.y=reduced?0:Math.sin(t*3)*.012;
    }
  }
  update(0);return{root,people,update};
}
