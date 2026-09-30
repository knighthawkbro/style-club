const TAU=Math.PI*2;
const mix=(a,b,t)=>a+(b-a)*t;
const blend=(a,b,t)=>a.map((value,index)=>mix(value,b[index],t));
export const STRIDE_LENGTH=1.65;

// During the stance part of a step, the foot moves backwards by exactly the
// distance travelled by the body. The swing returns it in a smooth raised arc.
export function footStep(phase){
  const cycle=((phase/TAU)%1+1)%1,stance=.62,reach=STRIDE_LENGTH*stance;
  if(cycle<stance)return{z:reach/2-STRIDE_LENGTH*cycle,lift:0,pitch:0};
  const swing=(cycle-stance)/(1-stance),ease=swing*swing*(3-2*swing);
  return{z:-reach/2+reach*ease,lift:Math.sin(Math.PI*swing)*.145,pitch:-Math.sin(Math.PI*swing)*.16};
}

export function poseFrame(time=0,style=0,phase=0,walkWeight=0,strut=false){
  const f={position:[0,-.035,0],rotation:[0,0,0],torso:[0,0,0],head:[0,0,0],
    hands:[[-.49,1.27,.05],[.49,1.27,.05]],
    feet:[[-.155,0,0,0],[.155,0,0,0]]};
  const hip=(side)=>[side*.33,1.78,.17];
  if(style===1){f.position[0]=.045;f.torso=[0,.16,-.055];f.head=[-.025,-.1,-.06];f.hands[1]=hip(1);f.feet[0]=[-.12,0,.22,0];}
  if(style===2){f.hands[0]=[-.65,2.96,.12+Math.sin(time*3)*.035];f.head=[0,-.1,.05];f.torso[2]=-.025;}
  if(style===3){f.hands=[[-1.05,2.61,.12],[1.05,2.61,.12]];f.feet=[[-.25,0,0,0],[.25,0,0,0]];f.head[0]=-.045;}
  if(style===4){f.hands=[[-.065,1.98,.59],[.065,1.98,.59]];f.head[2]=-.065;}
  if(style===5){f.rotation[1]=time*.75;f.hands=[[-1.12,2.1,.06],[1.12,2.1,.06]];f.head[0]=-.04;f.feet[0]=[-.13,.025,.24,.09];}
  if(style===6){f.position[1]=-.135;f.torso[0]=.10;f.hands=[[-.62,1.39,.03],[.62,1.39,.03]];f.feet=[[-.1,0,.21,0],[.18,0,-.24,0]];}
  if(style===7){f.hands=[hip(-1),hip(1)];f.feet=[[-.27,0,0,0],[.27,0,0,0]];f.torso[1]=.08;f.head[0]=-.07;}
  if(style===8){f.position[0]=.065;f.rotation[1]=-.22;f.torso=[0,.28,-.06];f.head=[-.035,-.10,-.075];f.hands[1]=hip(1);f.feet=[[-.045,0,.32,0],[.16,0,-.12,0]];}
  if(style===9){f.position[0]=-.065;f.rotation[1]=.16;f.torso=[-.025,-.25,.06];f.head=[-.055,.12,.04];f.hands=[[-.22,2.30,.30],hip(1)];f.feet=[[-.16,0,-.12,0],[.055,0,.31,0]];}
  if(style===10){f.rotation[1]=-.92;f.torso=[0,-.20,-.03];f.head=[0,.83,-.06];f.hands[1]=[.32,1.77,-.1];f.feet=[[-.2,0,-.18,0],[.18,0,.24,0]];}
  if(style===11){f.rotation[1]=.23;f.torso=[0,-.23,.045];f.head=[-.04,0,-.04];f.feet=[[-.12,0,-.20,0],[-.045,0,.40,0]];f.hands=[[-.65,1.46,.18],[.37,1.8,.21]];}
  if(style===12){f.position[0]=-.04;f.hands=[[-.39,2.78,.43],hip(1)];f.head=[.035,-.12,.12];f.torso=[0,.17,.035];f.feet[1]=[.12,0,.28,0];}
  if(style===13){f.rotation[1]=-.16;f.hands=[hip(-1),[.55,1.34,.20]];f.feet=[[-.27,0,-.08,0],[.27,0,.16,0]];f.torso=[-.025,.20,-.055];f.head=[-.07,0,.04];}
  if(style===14){f.position[0]=-.075;f.feet=[[-.17,0,0,0],[.42,.07,.26,.28]];f.hands=[hip(-1),[.77,1.65,.10]];f.torso=[0,-.12,.06];f.head=[-.025,.15,-.06];}
  if(style===15){f.rotation[1]=-.20;f.hands=[hip(-1),[.75,2.97,.07]];f.torso=[-.02,.24,-.075];f.head=[-.06,-.08,-.045];f.feet=[[-.15,0,-.13,0],[.07,0,.33,0]];}
  if(!walkWeight)return f;
  const gait={position:[Math.sin(phase)*.018,-.120+(1-Math.cos(phase*2))*.006,0],rotation:[0,0,0],torso:[.018,-Math.sin(phase)*.055,Math.sin(phase)*.022],head:[0,Math.sin(phase)*.035,-Math.sin(phase)*.013],hands:[],feet:[]};
  for(let i=0;i<2;i++){
    const side=i?1:-1,step=footStep(phase+i*Math.PI);
    gait.feet.push([side*(strut?.11:.155),step.lift,step.z,step.pitch]);
    gait.hands.push([side*.48,1.29+Math.sin(phase+i*Math.PI)*.016,-Math.cos(phase+i*Math.PI)*.24+.06]);
  }
  for(const key of ['position','torso','head'])f[key]=blend(f[key],gait[key],walkWeight);
  f.rotation=f.rotation.map((angle,i)=>angle+Math.atan2(Math.sin(gait.rotation[i]-angle),Math.cos(gait.rotation[i]-angle))*walkWeight);
  for(const key of ['hands','feet'])f[key]=f[key].map((values,i)=>blend(values,gait[key][i],walkWeight));
  return f;
}
