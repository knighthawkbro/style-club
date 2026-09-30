import * as THREE from 'three';
import { buildCharacter } from './model3d.mjs';

let renderer;
function star(ctx,x,y,r,color){ctx.fillStyle=color;ctx.beginPath();for(let i=0;i<10;i++){const a=i*Math.PI/5-Math.PI/2,d=i%2?r*.4:r;i?ctx.lineTo(x+Math.cos(a)*d,y+Math.sin(a)*d):ctx.moveTo(x+Math.cos(a)*d,y+Math.sin(a)*d);}ctx.closePath();ctx.fill();}
function circle(ctx,x,y,r,color){ctx.fillStyle=color;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();}
export function drawSticker(ctx,id,x,y,size){
  ctx.save();ctx.translate(x,y);ctx.scale(size/60,size/60);ctx.lineWidth=3;ctx.strokeStyle='#fff9ed';
  if(id==='star'||id==='sparkle'){star(ctx,0,0,28,'#efc45b');if(id==='sparkle'){star(ctx,24,-23,11,'#fff4cd');star(ctx,-23,19,9,'#fff4cd');}}
  else if(id==='heart'){ctx.fillStyle='#d86e96';ctx.beginPath();ctx.moveTo(0,25);ctx.bezierCurveTo(-54,-6,-20,-39,0,-16);ctx.bezierCurveTo(20,-39,54,-6,0,25);ctx.fill();}
  else if(id==='flower'){for(let i=0;i<6;i++)circle(ctx,Math.sin(i*Math.PI/3)*18,Math.cos(i*Math.PI/3)*18,13,'#eab4d9');circle(ctx,0,0,11,'#efca70');}
  else if(id==='pumpkin'){circle(ctx,-9,2,22,'#d78245');circle(ctx,9,2,22,'#eaa051');ctx.fillStyle='#729268';ctx.fillRect(-3,-29,7,13);circle(ctx,-10,-2,3,'#604657');circle(ctx,10,-2,3,'#604657');ctx.strokeStyle='#604657';ctx.beginPath();ctx.arc(0,3,10,0,Math.PI);ctx.stroke();}
  else if(id==='ghost'){ctx.fillStyle='#fff9ef';ctx.beginPath();ctx.arc(0,-4,22,Math.PI,0);ctx.lineTo(22,27);ctx.lineTo(11,20);ctx.lineTo(0,27);ctx.lineTo(-11,20);ctx.lineTo(-22,27);ctx.closePath();ctx.fill();circle(ctx,-8,-3,3,'#745d84');circle(ctx,8,-3,3,'#745d84');circle(ctx,0,10,4,'#e8b1c5');}
  else if(id==='paw'){circle(ctx,0,12,17,'#96758d');for(let i=0;i<4;i++)circle(ctx,(i-1.5)*13,-11+Math.abs(i-1.5)*5,7,'#96758d');}
  else if(id==='bow'){ctx.fillStyle='#d57c9f';for(const side of[-1,1]){ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(side*28,-21);ctx.quadraticCurveTo(side*35,0,side*28,21);ctx.closePath();ctx.fill();}circle(ctx,0,0,8,'#f1b9ce');}
  ctx.restore();
}
function background(ctx,id){
  const colors={rose:['#efd1db','#fcf0df'],stars:['#433b64','#9684b2'],halloween:['#796393','#d7b4cb'],clouds:['#abd6e8','#eee2ef']}[id]||['#efd1db','#fcf0df'];
  const gradient=ctx.createLinearGradient(0,70,0,810);gradient.addColorStop(0,colors[0]);gradient.addColorStop(1,colors[1]);ctx.fillStyle=gradient;ctx.fillRect(24,65,752,760);
  if(id==='halloween'){
    circle(ctx,657,154,57,'#ffe5a3');circle(ctx,681,134,52,colors[0]);
    for(const x of[87,155,670,726])drawSticker(ctx,'pumpkin',x,770,70);
    drawSticker(ctx,'ghost',102,211,82);drawSticker(ctx,'ghost',707,343,67);
    for(let i=0;i<14;i++)star(ctx,54+(i*113)%690,95+(i*67)%620,5,'#fff0cc');
  }else if(id==='stars'){
    for(let i=0;i<45;i++)star(ctx,42+(i*113)%710,85+(i*67)%700,3+i%4,'#fff2ce');
    circle(ctx,660,157,45,'#f8e6b5');
  }else if(id==='clouds'){
    for(const [x,y]of[[100,210],[680,180],[150,580],[660,690]])for(let i=0;i<4;i++)circle(ctx,x+(i-1.5)*25,y-Math.sin(i)*16,35,'#fff9f2');
    ctx.lineWidth=17;for(const [i,color]of['#db9ab6','#eac987','#b4c8ad','#a7bcd8'].entries()){ctx.strokeStyle=color;ctx.beginPath();ctx.arc(400,510,230-i*19,Math.PI,Math.PI*2);ctx.stroke();}
  }else{
    ctx.fillStyle='#fff8ec66';ctx.beginPath();ctx.roundRect(160,131,480,654,[230,230,0,0]);ctx.fill();ctx.strokeStyle='#fff4e4';ctx.lineWidth=5;ctx.stroke();
    for(let i=0;i<7;i++){drawSticker(ctx,'flower',76+Math.sin(i)*18,185+i*86,43);drawSticker(ctx,'flower',723+Math.sin(i)*15,130+i*90,45);}
  }
  ctx.fillStyle='#fff9ed45';ctx.beginPath();ctx.ellipse(400,786,300,27,0,0,Math.PI*2);ctx.fill();
}
export function stickerImage(id){const canvas=document.createElement('canvas');canvas.width=100;canvas.height=100;drawSticker(canvas.getContext('2d'),id,50,50,86);return canvas.toDataURL('image/png');}
export function photo(outfit,catalog,pose=1,options={}){
  renderer ||= new THREE.WebGLRenderer({alpha:true,antialias:true,preserveDrawingBuffer:true});
  renderer.localClippingEnabled=true;renderer.setPixelRatio(1);renderer.setSize(740,710);renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;
  const scene=new THREE.Scene();scene.add(new THREE.HemisphereLight('#fff3e3','#a58ba3',2.5));
  const light=new THREE.DirectionalLight('#fff7ec',3);light.position.set(-3,6,6);scene.add(light);
  const friends=(options.friends||[]).slice(0,3),subjects=[{outfit},...friends],dolls=[];
  try{
    subjects.forEach((subject,i)=>{const doll=buildCharacter(subject.outfit,catalog);dolls.push(doll);doll.pose(.7,pose,false);const anchor=new THREE.Group();anchor.position.x=(i-(subjects.length-1)/2)*1.45;anchor.add(doll.root);scene.add(anchor);});
    const height=Math.max(4.3,(subjects.length*1.45+.45)*710/740),halfWidth=height*740/710/2;
    // Keep everyone on the illustrated floor as the camera widens for friends.
    const center=height/2-.12,camera=new THREE.OrthographicCamera(-halfWidth,halfWidth,height/2,-height/2,.1,30);camera.position.set(0,center,9);camera.lookAt(0,center,0);renderer.render(scene,camera);
    const canvas=document.createElement('canvas');canvas.width=800;canvas.height=900;const ctx=canvas.getContext('2d');
    ctx.fillStyle='#fffaf2';ctx.fillRect(0,0,800,900);background(ctx,options.background||'rose');
    ctx.drawImage(renderer.domElement,30,92,740,710);
    ctx.fillStyle='#86546e';ctx.textAlign='center';ctx.font='italic 28px Georgia, serif';ctx.fillText('a little moment, together.',400,43);
    ctx.font='600 21px Segoe UI, sans-serif';ctx.fillText(friends.length?`You + ${friends.map(f=>f.name).join(' + ')}`:'Made of a little magic',400,860);
    for(const sticker of options.stickers||[])drawSticker(ctx,sticker.id,sticker.x*800,sticker.y*900,sticker.size*800);
    return canvas.toDataURL('image/png');
  }finally{dolls.forEach(doll=>doll.dispose());}
}
