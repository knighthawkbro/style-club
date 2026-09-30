const clamp=value=>Math.max(0,Math.min(1,value));
export const ease=value=>{const t=clamp(value);return t*t*(3-2*t);};
const mix=(a,b,t)=>a+(b-a)*t;
const turn=(a,b,t)=>a+Math.atan2(Math.sin(b-a),Math.cos(b-a))*t;
export const ACTION_DURATION={reach:1.05,dress:1.3,brush:2.25,hair:1.65};

// A seat owns its transition so changing clothes does not restart the movement.
export class SeatMotion {
  constructor(){this.current=null;this.target=null;this.seat=null;this.elapsed=0;this.busy=false;}
  set(seat,position,yaw,reduced=false){
    seat=seat||null;
    if(seat===this.seat)return;
    this.seat=seat;
    this.from={...(this.current||{...position,yaw,blend:0,height:seat?.height??.66})};
    this.target={x:seat?.x??position.x,z:seat?.z??position.z,yaw:seat?.yaw??yaw,blend:seat?1:0,height:seat?.height??this.from.height};
    this.duration=reduced?0:seat?1.15:.78;this.elapsed=0;this.busy=!!this.duration;
    if(reduced)this.current={...this.target};
  }
  update(dt,position,yaw){
    if(this.busy){
      this.elapsed+=Math.max(0,dt);const t=clamp(this.elapsed/this.duration),entering=!!this.seat;
      const travel=ease(entering?t/.66:(t-.35)/.65),lower=ease(entering?(t-.25)/.75:t/.7);
      this.current={x:mix(this.from.x,this.target.x,travel),z:mix(this.from.z,this.target.z,travel),yaw:turn(this.from.yaw,this.target.yaw,ease(t/.65)),blend:mix(this.from.blend,this.target.blend,lower),height:this.target.height};
      if(t===1){this.busy=false;this.current={...this.target};}
    }else if(!this.seat)this.current={...position,yaw,blend:0,height:this.current?.height??.66};
    return this.current||{...position,yaw,blend:0,height:.66};
  }
}

// Add a brief upper-body action while preserving the chosen pose and pet arm.
export function interactionFrame(frame,action){
  if(!action||!ACTION_DURATION[action.kind])return frame;
  const p=clamp(action.progress),weight=ease(p/.22)*(1-ease((p-.76)/.24));
  if(!weight)return frame;
  const result={...frame,torso:[...frame.torso],head:[...frame.head],hands:frame.hands.map(h=>[...h])};
  let hand;
  if(action.kind==='brush'){
    const sponge=action.tool==='sponge';
    hand=[(sponge?.34:.41)+Math.sin(p*24)*.018,(sponge?2.68:2.64)+Math.cos(p*24)*.016,sponge?.24:.18];
    result.head[2]=mix(result.head[2],-.07,weight);
  }else if(action.kind==='hair')hand=[.46,2.86,.10];
  else if(action.kind==='reach'){
    hand=[.55,1.94,.78];result.torso[0]=mix(result.torso[0],.055,weight);result.head[1]=mix(result.head[1],-.1,weight);
  }else hand=[.26,2.20,.34+Math.sin(p*12)*.025];
  result.hands[1]=result.hands[1].map((v,i)=>mix(v,hand[i],weight));
  return result;
}
