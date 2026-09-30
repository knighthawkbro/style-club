export const ROOM_LIMIT = 12.25;
export const PLAYER_RADIUS = .29;
export const WALK_SPEED = 2.9;
export const BENCH_BANKS = [-6.8,7].map(z=>({x:0,z,halfX:.70,halfZ:.85}));
export const ACTIVITIES = [
  ...BENCH_BANKS.map((bank,i)=>({id:`bench-${i}`,kind:'bench',name:i?'Promenade benches':'Fountain benches',x:bank.x,z:bank.z,approach:[1.3,bank.z-.43],yaw:Math.PI/2})),
  {id:'salon',kind:'salon',name:'Salon chair',x:7.1,z:-3,approach:[6,-3],yaw:Math.PI/2,storeId:'hair'},
  {id:'beauty',kind:'beauty',name:'Makeup vanity',x:-7.1,z:-3,approach:[-6,-3],yaw:-Math.PI/2,storeId:'makeup'},
  ...[['dresses',-1,-9],['tops',-1,3],['bottoms',1,3],['halloween',-1,9],['vip',1,9],['shoes',1,-9]].map(([storeId,side,z])=>({id:`mirror-${storeId}`,kind:'mirror',name:'Dressing mirror',x:side*7.1,z,approach:[side*6.1,z],yaw:side*Math.PI/2,storeId})),
  {id:'photo',kind:'photo',name:'The photo booth',x:0,z:11.5,approach:[0,10],yaw:Math.PI}
];
export function activityDestination(id,position={x:1,z:0}){
  const source=ACTIVITIES.find(a=>a.id===id);if(!source)return null;
  const activity={...source,approach:[...source.approach]};
  if(activity.kind==='bench'){
    const side=position.x<0?-1:1;
    activity.approach=[side*1.3,activity.z-.43];activity.yaw=side*Math.PI/2;
    activity.seat={x:side*.40,z:activity.z-.43,height:.66,yaw:activity.yaw};
    activity.friendSeat={x:side*.40,z:activity.z+.43,height:.66,yaw:activity.yaw,approach:[side*1.3,activity.z+1.25]};
  }else if(['salon','beauty'].includes(activity.kind))activity.seat={x:activity.x,z:activity.z,height:.83,yaw:activity.yaw};
  return activity;
}
export const STORES = [
  {id:'dresses',name:'Petal & Thread',detail:'Dresses & daydreams',side:-1,z:-9,color:'#dba5b9'},
  {id:'makeup',name:'GLOW beauty',detail:'Makeup & face paint',side:-1,z:-3,color:'#df9bae',beauty:true},
  {id:'tops',name:'Sunday Studio',detail:'Tops, jackets & cozy things',side:-1,z:3,color:'#a5b8cc'},
  {id:'halloween',name:'BOO-tique',detail:'Happy Halloween costumes',side:-1,z:9,color:'#b99bd0',collection:'halloween'},
  {id:'shoes',name:'Sole Mates',detail:'Shoes for every adventure',side:1,z:-9,color:'#a6c4bb'},
  {id:'hair',name:'Charm & Co.',detail:'Hair & finishing touches',side:1,z:-3,color:'#c0add6'},
  {id:'bottoms',name:'Mix & Match',detail:'Skirts, trousers & playwear',side:1,z:3,color:'#d7b485'},
  {id:'vip',name:'The Velvet Lounge',detail:'VIP collection · everyone welcome',side:1,z:9,color:'#aa90bf',collection:'vip'}
];
export const STATIONS = STORES.map(store=>({...store,storeId:store.id,category:store.collection?'dresses':store.id,x:store.side*10.7,z:store.z,approach:[store.side*8.85,store.z],rotation:-store.side*Math.PI/2}));
STATIONS.find(s=>s.id==='hair').z=-4.15;
STATIONS.find(s=>s.id==='hair').approach=[8.85,-4.15];
STATIONS.push(
  {id:'extras',storeId:'hair',category:'extras',name:'Charm accessories',detail:'Bows, bags & lovely extras',x:10.7,z:-1.55,approach:[8.85,-1.55],color:'#c0add6',rotation:-Math.PI/2},
  {id:'runway',name:'The grand runway',detail:'Your moment to shine',x:0,z:-11.1,approach:[0,-9],color:'#d69bb5',rotation:0}
);
export function itemsForStation(catalog,station){
  return Object.values(catalog).filter(item=>station.collection?item.collection===station.collection:!item.collection&&item.category===station.category).sort((a,b)=>Number(!!b.fresh)-Number(!!a.fresh));
}
// Three perimeter fixtures leave the centre and entrances open for walking.
// Rendering and collision share these measurements.
export const STORE_FIXTURES = STORES.flatMap(store=>[
  {x:store.side*11.65,z:store.z,rotation:-store.side*Math.PI/2,halfX:.43,halfZ:2.35},
  {x:store.side*8.3,z:store.z-2.5,rotation:0,halfX:2.35,halfZ:.43},
  {x:store.side*8.3,z:store.z+2.5,rotation:Math.PI,halfX:2.35,halfZ:.43}
].map((fixture,index)=>({...fixture,id:`${store.id}-${index}`,storeId:store.id,width:4.7})));
export function shopStock(catalog){
  return STORES.flatMap(store=>{
    const stations=STATIONS.filter(s=>s.storeId===store.id),stock=stations.flatMap(s=>itemsForStation(catalog,s));
    const clothing=stock.filter(item=>['dresses','tops','bottoms'].includes(item.category));
    const accessories=stock.filter(item=>!clothing.includes(item));
    const batches=[];
    for(const [items,kind,capacity]of[[clothing,'rack',6],[accessories,'shelf',12]]){
      for(let i=0;i<items.length;i+=capacity)batches.push({kind,items:items.slice(i,i+capacity)});
    }
    if(batches.length>3)throw new Error(`${store.name} needs another physical display`);
    return STORE_FIXTURES.filter(f=>f.storeId===store.id).map((fixture,i)=>{
      const batch=batches[i]||{kind:'decor',items:[]};
      const station=stations.find(s=>s.category===batch.items[0]?.category)||stations[0];
      return {...fixture,...batch,store,station};
    });
  });
}
export function storeAt(position){
  if(Math.abs(position.x)<4.6)return null;
  return STORES.find(s=>Math.sign(position.x)===s.side&&Math.abs(position.z-s.z)<2.9)||null;
}
export const OBSTACLES = [
  ...[-1,1].flatMap(side=>[-12,-6,0,6,12].map(z=>({x:side*8.35,z,halfX:3.95,halfZ:.09}))),
  ...STORE_FIXTURES,
  {x:0,z:-.8,halfX:1.13,halfZ:1.13},
  {x:-1.8,z:7.4,halfX:.48,halfZ:.30},
  ...STORES.flatMap(s=>[-2.33,2.33].map(dz=>({x:s.side*4.91,z:s.z+dz,halfX:.29,halfZ:.49}))),
  ...BENCH_BANKS,
  ...ACTIVITIES.filter(a=>['salon','beauty'].includes(a.kind)).flatMap(a=>[
    {x:a.x,z:a.z,halfX:.43,halfZ:.43},
    {x:a.x+Math.sign(a.x)*1.02,z:a.z,halfX:.22,halfZ:.85}
  ]),
  ...ACTIVITIES.filter(a=>a.kind==='mirror').map(a=>({x:a.x,z:a.z,halfX:.16,halfZ:.73})),
  {x:0,z:12,halfX:1.3,halfZ:.2},
  ...[-1,1].flatMap(side=>[-10.8,10.8].map(z=>({x:side*2.85,z,halfX:.32,halfZ:.32})))
];
export function walkable(x,z,obstacles=OBSTACLES,radius=PLAYER_RADIUS){
  if(Math.abs(x)>ROOM_LIMIT||Math.abs(z)>ROOM_LIMIT)return false;
  return obstacles.every(box=>{
    const nx=Math.max(box.x-box.halfX,Math.min(x,box.x+box.halfX)),nz=Math.max(box.z-box.halfZ,Math.min(z,box.z+box.halfZ));
    return Math.hypot(x-nx,z-nz)>radius;
  });
}
export function movePlayer(position,input,seconds,obstacles=OBSTACLES){
  const normal=Math.max(1,Math.hypot(input.x,input.z)),dt=Math.min(.05,Math.max(0,seconds));
  const dx=input.x/normal*WALK_SPEED*dt,dz=input.z/normal*WALK_SPEED*dt;let{x,z}=position;
  if(walkable(x+dx,z,obstacles))x+=dx;
  if(walkable(x,z+dz,obstacles))z+=dz;
  return{x,z};
}
export function nearbyStation(position){
  return STATIONS.map(station=>({station,distance:Math.hypot(position.x-station.approach[0],position.z-station.approach[1])})).filter(r=>r.distance<1.15).sort((a,b)=>a.distance-b.distance)[0]?.station||null;
}
export function clearSegment(a,b,obstacles=OBSTACLES,radius=PLAYER_RADIUS+.035){
  const samples=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.z-a.z)/.1));
  for(let i=0;i<=samples;i++)if(!walkable(a.x+(b.x-a.x)*i/samples,a.z+(b.z-a.z)*i/samples,obstacles,radius))return false;
  return true;
}
let defaultGrid;
function navigationGrid(obstacles){
  if(obstacles===OBSTACLES&&defaultGrid)return defaultGrid;
  const step=.4,limit=Math.floor(ROOM_LIMIT/step),cells=[],allowed=new Set();
  for(let x=-limit;x<=limit;x++)for(let z=-limit;z<=limit;z++)if(walkable(x*step,z*step,obstacles,PLAYER_RADIUS+.045)){cells.push({x,z});allowed.add(`${x},${z}`);}
  const result={cells,allowed,step};if(obstacles===OBSTACLES)defaultGrid=result;return result;
}
export function planPath(start,goal,obstacles=OBSTACLES){
  const{cells,allowed,step}=navigationGrid(obstacles);if(!cells.length)return[];
  const key=(x,z)=>`${x},${z}`;
  const nearest=point=>cells.reduce((best,c)=>Math.hypot(c.x*step-point.x,c.z*step-point.z)<Math.hypot(best.x*step-point.x,best.z*step-point.z)?c:best,cells[0]);
  const first=nearest(start),last=nearest(goal),queue=[first],parents=new Map([[key(first.x,first.z),null]]);
  const deltas=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];let found=false;
  for(let i=0;i<queue.length;i++){
    const c=queue[i];if(c.x===last.x&&c.z===last.z){found=true;break;}
    for(const[dx,dz]of deltas){const x=c.x+dx,z=c.z+dz,k=key(x,z);
      if(!allowed.has(k)||parents.has(k))continue;
      if(dx&&dz&&(!allowed.has(key(c.x+dx,c.z))||!allowed.has(key(c.x,c.z+dz))))continue;
      parents.set(k,c);queue.push({x,z});
    }
  }
  if(!found)return[];
  const path=[];let cursor=last;
  while(cursor){path.unshift({x:cursor.x*step,z:cursor.z*step});cursor=parents.get(key(cursor.x,cursor.z));}
  if(clearSegment(path.at(-1),goal,obstacles))path.push({...goal});
  // Smooth sight lines remove the grid stair-step from the walk.
  const smooth=[];let anchor=start,index=0;
  while(index<path.length){let furthest=index;for(let j=index;j<path.length;j++){if(clearSegment(anchor,path[j],obstacles))furthest=j;else break;}
    const next=path[furthest];if(Math.hypot(next.x-anchor.x,next.z-anchor.z)>.01)smooth.push(next);anchor=next;index=furthest+1;
  }
  return smooth;
}
// Spend the entire frame's travel distance, including across route points.
export function advancePath(position,path,seconds,speed=WALK_SPEED,obstacles=OBSTACLES){
  let remaining=Math.min(.05,Math.max(0,seconds))*speed,distance=0,current={...position};const pending=path.slice();
  while(pending.length&&remaining>1e-7){
    const next=pending[0],dx=next.x-current.x,dz=next.z-current.z,length=Math.hypot(dx,dz);
    if(length<1e-7){pending.shift();continue;}
    const travel=Math.min(remaining,length),candidate={x:current.x+dx/length*travel,z:current.z+dz/length*travel};
    if(!clearSegment(current,candidate,obstacles,PLAYER_RADIUS))break;
    current=candidate;distance+=travel;remaining-=travel;if(travel>=length-1e-7)pending.shift();
  }
  return{position:current,path:pending,distance};
}
