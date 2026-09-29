export const ROOM_LIMIT = 6.35;
export const PLAYER_RADIUS = .29;
export const WALK_SPEED = 2.65;
export const STATIONS = [
  { id: 'dresses', name: 'Dresses', x: -5.4, z: -1.6, approach: [-3.9, -1.6], color: '#dfa2ba', rotation: Math.PI / 2 },
  { id: 'tops', name: 'Tops', x: -5.4, z: 3.1, approach: [-3.9, 3.1], color: '#b8a3d2', rotation: Math.PI / 2 },
  { id: 'bottoms', name: 'Bottoms', x: 5.4, z: 3.1, approach: [3.9, 3.1], color: '#9ab8bd', rotation: -Math.PI / 2 },
  { id: 'shoes', name: 'Shoes', x: 5.4, z: -1.6, approach: [3.9, -1.6], color: '#ddbe87', rotation: -Math.PI / 2 },
  { id: 'extras', name: 'Accessories', x: -3.6, z: -5.6, approach: [-3.6, -4.3], color: '#bfacd6', rotation: 0 },
  { id: 'hair', name: 'Hair & you', x: 3.6, z: -5.6, approach: [3.6, -4.3], color: '#a5bb9a', rotation: 0 },
  { id: 'makeup', name: 'Makeup', x: -3.6, z: 5.8, approach: [-3.6, 4.5], color: '#d3aac0', rotation: Math.PI },
  { id: 'runway', name: 'The runway', x: 0, z: -5.15, approach: [0, -3.7], color: '#d69bb5', rotation: 0 }
];
export const OBSTACLES = [
  { x: -5.4, z: -1.6, halfX: .5, halfZ: 1.3 },
  { x: -5.4, z: 3.1, halfX: .5, halfZ: 1.3 },
  { x: 5.4, z: 3.1, halfX: .5, halfZ: 1.3 },
  { x: 5.4, z: -1.6, halfX: .5, halfZ: 1.3 },
  { x: -3.6, z: -5.6, halfX: 1.15, halfZ: .43 },
  { x: 3.6, z: -5.6, halfX: 1.15, halfZ: .43 },
  { x: -3.6, z: 5.8, halfX: 1.15, halfZ: .43 },
  { x: -2.2, z: 1, halfX: .6, halfZ: .6 },
  { x: 2.1, z: 1, halfX: .6, halfZ: .6 }
];
export function walkable(x, z, obstacles = OBSTACLES, radius = PLAYER_RADIUS) {
  if (Math.abs(x) > ROOM_LIMIT || Math.abs(z) > ROOM_LIMIT) return false;
  return obstacles.every(box => {
    const nearestX = Math.max(box.x - box.halfX, Math.min(x, box.x + box.halfX));
    const nearestZ = Math.max(box.z - box.halfZ, Math.min(z, box.z + box.halfZ));
    return Math.hypot(x - nearestX, z - nearestZ) > radius;
  });
}
export function movePlayer(position, input, seconds, obstacles = OBSTACLES) {
  const length = Math.hypot(input.x, input.z), normal = Math.max(1, length);
  const dt = Math.min(.05, Math.max(0, seconds));
  const dx = input.x / normal * WALK_SPEED * dt, dz = input.z / normal * WALK_SPEED * dt;
  let x = position.x, z = position.z;
  if (walkable(x + dx, z, obstacles)) x += dx;
  if (walkable(x, z + dz, obstacles)) z += dz;
  return { x, z };
}
export function nearbyStation(position) {
  return STATIONS.map(s => ({ station: s, distance: Math.hypot(position.x - s.approach[0], position.z - s.approach[1]) }))
    .filter(result => result.distance < 1.4).sort((a, b) => a.distance - b.distance)[0]?.station || null;
}

// A small grid makes click-to-walk go around racks instead of through them.
export function planPath(start, goal, obstacles = OBSTACLES) {
  const step = .4, limit = 15, key = (x,z) => `${x},${z}`;
  const cells=[];
  for(let x=-limit;x<=limit;x++)for(let z=-limit;z<=limit;z++)if(walkable(x*step,z*step,obstacles,PLAYER_RADIUS+.07))cells.push({x,z});
  const nearest = point => cells.reduce((best,cell) => Math.hypot(cell.x*step-point.x,cell.z*step-point.z)<Math.hypot(best.x*step-point.x,best.z*step-point.z)?cell:best,cells[0]);
  const first=nearest(start),last=nearest(goal),allowed=new Set(cells.map(c=>key(c.x,c.z))),queue=[first],parents=new Map([[key(first.x,first.z),null]]);
  const deltas=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];
  let found=false;
  for(let i=0;i<queue.length;i++){
    const current=queue[i];
    if(current.x===last.x&&current.z===last.z){found=true;break;}
    for(const [dx,dz]of deltas){const x=current.x+dx,z=current.z+dz,k=key(x,z);
      if(!allowed.has(k)||parents.has(k))continue;
      if(dx&&dz&&(!allowed.has(key(current.x+dx,current.z))||!allowed.has(key(current.x,current.z+dz))))continue;
      parents.set(k,current);queue.push({x,z});
    }
  }
  if(!found)return[];
  const path=[];let cursor=last;
  while(cursor){path.unshift({x:cursor.x*step,z:cursor.z*step});cursor=parents.get(key(cursor.x,cursor.z));}
  if(path.length&&Math.hypot(path[0].x-start.x,path[0].z-start.z)<.25)path.shift();
  return path;
}
