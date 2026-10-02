import * as THREE from 'three';
import { buildCharacter } from './model3d.mjs';
import { shapeHeadPoint, HEAD_PROFILES } from './face-paint.mjs';

export function mirrorCameraFrame(face,yaw,aspect=1){
  const distance=Math.max(2.35,1.35/(2*Math.tan(47*Math.PI/360)*Math.max(.35,aspect)));
  return{target:new THREE.Vector3(face.x,face.y+.025,face.z),position:new THREE.Vector3(face.x+Math.sin(yaw)*distance,face.y+.025,face.z+Math.cos(yaw)*distance)};
}

// A still, front-facing mirror makes every stroke land exactly under the pointer.
// Each completed gesture is one undoable, saved stroke; leaving the face breaks it.
export class MakeupMirror {
  constructor(container,{catalog,limits,onStroke=()=>{},onStatus=()=>{}}){
    this.container=container;this.catalog=catalog;this.limits=limits;this.onStroke=onStroke;this.onStatus=onStatus;this.strokes=[];
    this.settings={tool:'brush',color:'#db91a5',size:.045,mirror:true};this.keyboardPoint=[.72,.63];
    this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,preserveDrawingBuffer:true});
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75));this.renderer.localClippingEnabled=true;
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.15;
    this.canvas=this.renderer.domElement;this.canvas.className='makeup-canvas';this.canvas.tabIndex=0;
    this.canvas.setAttribute('aria-label','Makeup mirror. Draw on your face with the mouse or a finger. Arrow keys move the brush; Space paints a dot. Escape cancels the current stroke.');
    this.cursor=document.createElement('span');this.cursor.className='paint-cursor';this.cursor.hidden=true;this.cursor.setAttribute('aria-hidden','true');container.replaceChildren(this.canvas,this.cursor);
    this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#f4e5ea');
    this.scene.add(new THREE.HemisphereLight('#fff8ed','#b79eb1',2.5));
    const light=new THREE.DirectionalLight('#fff7ed',3);light.position.set(-2,4,5);this.scene.add(light);
    this.camera=new THREE.PerspectiveCamera(47,1,.1,20);
    this.abort=new AbortController();this.bind();this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(container);
  }
  setOutfit(outfit){
    this.cancel();this.character?.dispose();this.outfit=outfit;this.strokes=outfit.facePaint||[];
    this.character=buildCharacter(outfit,this.catalog);this.character.pose(0,0);this.scene.add(this.character.root);
    this.canvas.dataset.headShape=outfit.headShape||'oval';this.canvas.dataset.strokes=String(this.strokes.length);this.canvas.dataset.paint=JSON.stringify(this.strokes);this.resize();
  }
  configure(settings){this.settings={...this.settings,...settings};this.canvas.dataset.tool=this.settings.tool;this.cursor.style.borderColor=this.settings.tool==='eraser'?'#79546e':this.settings.color;}
  resize(){
    const {width,height}=this.container.getBoundingClientRect();if(width<2||height<2||!this.character)return;
    this.renderer.setSize(width,height,false);this.camera.aspect=width/height;
    this.character.root.updateWorldMatrix(true,true);const face=this.character.bones.head.getWorldPosition(new THREE.Vector3());
    const frame=mirrorCameraFrame(face,0,this.camera.aspect);this.camera.position.copy(frame.position);this.camera.lookAt(frame.target);this.camera.updateProjectionMatrix();this.render();
  }
  render(){if(this.character)this.renderer.render(this.scene,this.camera);}
  hit(event){
    if(!this.character)return null;const r=this.canvas.getBoundingClientRect(),ray=new THREE.Raycaster();
    ray.setFromCamera(new THREE.Vector2((event.clientX-r.left)/r.width*2-1,1-(event.clientY-r.top)/r.height*2),this.camera);
    const hit=ray.intersectObject(this.character.paintSurface)[0];
    return hit?[hit.uv.x,1-hit.uv.y]:null;
  }
  moveCursor(event,point){
    const r=this.canvas.getBoundingClientRect();this.cursor.hidden=!point;
    if(point){const width=.848*(HEAD_PROFILES[this.outfit.headShape]?.[0]||1)*r.height/(2.35*2*Math.tan(47*Math.PI/360));this.cursor.style.width=`${Math.max(7,width*this.settings.size)}px`;this.cursor.style.height=this.cursor.style.width;this.cursor.style.left=`${event.clientX-r.left}px`;this.cursor.style.top=`${event.clientY-r.top}px`;}
  }
  begin(point,id){
    const used=this.strokes.reduce((n,s)=>n+s.points.length,0);
    if(this.strokes.length>=this.limits.strokes||used>=this.limits.points){this.onStatus('Your drawing is full. Undo a stroke or clear your drawing to make more room.');return false;}
    this.pending={...this.settings,points:[point]};this.pointerId=id;this.pointBudget=Math.min(this.limits.perStroke,this.limits.points-used);this.preview();return true;
  }
  extend(point){
    if(!this.pending)return;const points=this.pending.points,last=points.at(-1);
    if(!point&&!last)return;
    if(point&&last&&Math.hypot(point[0]-last[0],point[1]-last[1])<.004)return;
    if(points.length>=this.pointBudget){this.onStatus('Lift your brush to finish this stroke. Undo or clear if your drawing is full.');return;}
    points.push(point);this.preview();
  }
  preview(){this.character.setFacePaint([...this.strokes,this.pending]);this.render();}
  finish(){if(!this.pending)return;const stroke=this.pending;this.pending=null;this.pointerId=null;this.onStroke(stroke);}
  cancel(){if(!this.pending)return;this.pending=null;this.pointerId=null;this.character?.setFacePaint(this.strokes);this.render();}
  hide(){this.cancel();this.cursor.hidden=true;}
  bind(){
    const signal=this.abort.signal;
    this.canvas.addEventListener('pointerdown',event=>{
      if(event.button!==0||this.pending)return;event.preventDefault();this.canvas.focus({preventScroll:true});const point=this.hit(event);
      if(point&&this.begin(point,event.pointerId))this.canvas.setPointerCapture(event.pointerId);this.moveCursor(event,point);
    },{signal});
    this.canvas.addEventListener('pointermove',event=>{const point=this.hit(event);this.moveCursor(event,point);if(this.pending&&event.pointerId===this.pointerId)this.extend(point);},{signal});
    this.canvas.addEventListener('pointerup',event=>{if(event.pointerId!==this.pointerId)return;this.extend(this.hit(event));this.finish();if(this.canvas.hasPointerCapture(event.pointerId))this.canvas.releasePointerCapture(event.pointerId);},{signal});
    for(const type of ['pointercancel','lostpointercapture'])this.canvas.addEventListener(type,()=>this.cancel(),{signal});
    this.canvas.addEventListener('pointerleave',()=>{this.cursor.hidden=true;},{signal});
    window.addEventListener('blur',()=>this.cancel(),{signal});
    this.canvas.addEventListener('keydown',event=>{
      if(event.key==='Escape'&&this.pending){event.preventDefault();event.stopPropagation();this.cancel();return;}
      const steps={ArrowLeft:[-.025,0],ArrowRight:[.025,0],ArrowUp:[0,-.025],ArrowDown:[0,.025]};
      if(steps[event.key]){
        event.preventDefault();this.keyboardPoint=this.keyboardPoint.map((n,i)=>THREE.MathUtils.clamp(n+steps[event.key][i],.12,.88));
        const [u,v]=this.keyboardPoint,point=shapeHeadPoint(new THREE.Vector3((u-.5)*.848,(.5-v)*1.05,.375*Math.sqrt(Math.max(0,1-(u*2-1)**2-(1-v*2)**2))+.01),this.outfit.headShape);
        point.applyMatrix4(this.character.bones.head.matrixWorld).project(this.camera);const r=this.canvas.getBoundingClientRect();this.moveCursor({clientX:r.left+(point.x+1)*r.width/2,clientY:r.top+(1-point.y)*r.height/2},this.keyboardPoint);
      }else if(event.code==='Space'){event.preventDefault();if(this.begin([...this.keyboardPoint],null))this.finish();}
    },{signal});
  }
  dispose(){this.hide();this.abort.abort();this.resizeObserver.disconnect();this.character?.dispose();this.renderer.dispose();}
}
