import * as THREE from 'three';

export const HEAD_PROFILES={oval:[1,1,1],round:[1.11,.90,1.02],heart:[1.04,1,1],square:[1.02,.96,1]};
export function shapeHeadPoint(point,shape){
  const jaw=THREE.MathUtils.clamp(-point.y/.525,0,1);
  // Fit the hair around the jaw without widening or pinching its long ends.
  const influence=THREE.MathUtils.smoothstep(point.y,-.9,-.525);
  if(shape==='heart')point.x*=1-.25*jaw*influence;
  if(shape==='square')point.x*=1+.46*jaw*jaw*influence;
  return point;
}

// Apply the same gentle shape to skin, facial features, hair, and head accessories.
// Paint keeps its original UVs, so a drawing follows a change in head shape.
export function shapeHead(head,shape='oval'){
  if(!Object.hasOwn(HEAD_PROFILES,shape))shape='oval';
  if(shape==='heart'||shape==='square'){
    head.updateWorldMatrix(true,true);const inverse=head.matrixWorld.clone().invert();
    head.traverse(part=>{
      if(!part.isMesh)return;
      const matrix=inverse.clone().multiply(part.matrixWorld),back=matrix.clone().invert(),positions=part.geometry.attributes.position;
      for(let i=0;i<positions.count;i++){
        const point=new THREE.Vector3().fromBufferAttribute(positions,i).applyMatrix4(matrix);
        shapeHeadPoint(point,shape).applyMatrix4(back);positions.setXYZ(i,point.x,point.y,point.z);
      }
      positions.needsUpdate=true;part.geometry.computeVertexNormals();part.geometry.computeBoundingSphere();
    });
  }
  head.scale.set(...HEAD_PROFILES[shape]);head.userData.headShape=shape;
}

export function strokePaths(stroke){
  const paths=[];let path=[];
  for(const point of stroke.points){if(point)path.push(point);else if(path.length){paths.push(path);path=[];}}
  if(path.length)paths.push(path);
  return stroke.mirror?[...paths,...paths.map(p=>p.map(([x,y])=>[1-x,y]))]:paths;
}
export function drawFacePaint(context,strokes,size=512){
  context.clearRect(0,0,size,size);context.save();
  context.lineCap='round';context.lineJoin='round';
  for(const stroke of strokes){
    context.globalCompositeOperation=stroke.tool==='eraser'?'destination-out':'source-over';
    context.globalAlpha=stroke.tool==='blush'?.28:1;
    context.strokeStyle=stroke.color;context.fillStyle=stroke.color;context.lineWidth=stroke.size*size;
    for(const points of strokePaths(stroke)){
      if(points.length===1){context.beginPath();context.arc(points[0][0]*size,points[0][1]*size,context.lineWidth/2,0,Math.PI*2);context.fill();}
      else{context.beginPath();points.forEach(([x,y],i)=>i?context.lineTo(x*size,y*size):context.moveTo(x*size,y*size));context.stroke();}
    }
  }
  context.restore();
}

export function createFacePaint(head,strokes=[]){
  // The front half of the head is also the drawing hit target when it is blank.
  const geometry=new THREE.SphereGeometry(1,64,40,0,Math.PI);
  const position=geometry.attributes.position,uv=geometry.attributes.uv;
  for(let i=0;i<position.count;i++){
    const x=position.getX(i),y=position.getY(i),z=position.getZ(i);
    position.setXYZ(i,x*.424,y*.525,z*.375+.009);uv.setXY(i,(x+1)/2,(y+1)/2);
  }
  geometry.computeVertexNormals();geometry.computeBoundingSphere();
  const canvas=typeof document==='undefined'?null:document.createElement('canvas');
  if(canvas){canvas.width=512;canvas.height=512;}
  const texture=canvas?new THREE.CanvasTexture(canvas):new THREE.DataTexture(new Uint8Array(4),1,1);
  texture.colorSpace=THREE.SRGBColorSpace;
  const paint=new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false}));
  paint.name='hand-drawn makeup';paint.renderOrder=100;head.add(paint);
  const update=next=>{if(canvas)drawFacePaint(canvas.getContext('2d'),next);texture.needsUpdate=true;paint.userData.strokeCount=next.length;};
  update(strokes);return{mesh:paint,update};
}
