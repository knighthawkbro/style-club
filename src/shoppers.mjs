import { STATIONS, planPath, movePlayer, walkable, advancePath, itemsForStation } from './world-rules.mjs';

const PROFILES = [
  { name: 'Poppy', skin: '#e8b99a', hair: 'twin-tails', hairColor: '#8d5136', start: [-1.8,2.5], clothes: ['rainbow-dress','maryjanes','cat-ears'], route: ['dresses','extras','makeup','vip','runway','hair'] },
  { name: 'Nova', skin: '#925c43', hair: 'puff-buns', hairColor: '#241e24', start: [1.8,2.5], clothes: ['varsity','cargo','high-tops','headphones'], route: ['bottoms','tops','halloween','runway','shoes','makeup'] },
  { name: 'Jules', skin: '#d39c79', hair: 'side-braid', hairColor: '#d394a7', start: [1.6,-3.3], clothes: ['butterfly-dress','star-boots','tiara'], route: ['hair','shoes','vip','makeup','extras','halloween'] }
];

// Local, deterministic shoppers: no account, network, or generated conversation.
export class ShopperBrain {
  constructor(game, index) {
    this.game=game;this.index=index;this.profile=PROFILES[index%PROFILES.length];this.name=this.profile.name;
    this.position={x:this.profile.start[0],z:this.profile.start[1]};this.yaw=0;
    this.outfit=game.defaultOutfit();this.outfit.extras=Object.fromEntries(Object.keys(this.outfit.extras).map(slot=>[slot,null]));
    for(const id of this.profile.clothes)this.outfit=game.wear(this.outfit,id);
    Object.assign(this.outfit,{skin:this.profile.skin,hair:this.profile.hair,hairColor:this.profile.hairColor});
    this.phase='posing';this.remaining=.3+index*.7;this.routeIndex=-1;this.path=[];this.changes=0;this.visits=0;this.blocked=0;this.pose=0;
  }
  nextStation() {
    this.routeIndex=(this.routeIndex+1)%this.profile.route.length;
    this.station=STATIONS.find(station=>station.id===this.profile.route[this.routeIndex]);
    this.path=planPath(this.position,{x:this.station.approach[0],z:this.station.approach[1]});
    this.phase='walking';this.pose=0;this.blocked=0;
  }
  tryClothes() {
    if(this.station.id==='runway'){this.pose=8+(this.visits%8);return false;}
    const choices=itemsForStation(this.game.byId,this.station).filter(item=>!this.game.selection(this.outfit,item));
    if(!choices.length)return false;
    const item=choices[(this.visits*3+this.index*5)%choices.length];
    this.outfit=this.game.wear(this.outfit,item.id);
    if(!['hair','makeup'].includes(item.category)&&this.visits%2===0)this.outfit=this.game.recolor(this.outfit,item.id,this.game.COLORS[(this.visits+this.index*3)%this.game.COLORS.length].hex);
    this.changes++;this.pose=8+(this.changes%8);return true;
  }
  greet(player,pose=2){this.phase='chatting';this.remaining=6;this.pose=pose;this.yaw=Math.atan2(player.x-this.position.x,player.z-this.position.z);}
  tick(seconds, player, neighbors=[]) {
    const dt=Math.min(.05,Math.max(0,seconds)),before={...this.position};let changed=false,walking=false;
    if(this.phase==='walking') {
      const next=this.path[0];
      if(!next) {
        this.phase='browsing';this.remaining=1.8+this.index*.35;this.visits++;
        this.yaw=Math.atan2(this.station.x-this.position.x,this.station.z-this.position.z);
      } else {
        const dx=next.x-this.position.x,dz=next.z-this.position.z,dist=Math.max(.0001,Math.hypot(dx,dz));
        {
          const others=[...(player?[{...player,radius:1.12}]:[]),...neighbors.map(other=>({...other,radius:.82}))];
          const crowded=candidate=>others.some(other=>Math.hypot(candidate.x-other.x,candidate.z-other.z)<other.radius&&Math.hypot(candidate.x-other.x,candidate.z-other.z)<Math.hypot(this.position.x-other.x,this.position.z-other.z));
          const advance=advancePath(this.position,this.path,dt,1.32);let candidate=advance.position;
          if(crowded(candidate)) {
            this.blocked+=dt;
            // Step politely aside instead of piling up around a busy rack.
            if(this.blocked>1.0) {
              const side=this.index%2?1:-1;
              candidate=movePlayer(this.position,{x:-dz/dist*side,z:dx/dist*side},dt*.32);
              if(crowded(candidate))candidate=this.position;
            }else candidate=this.position;
            if(this.blocked>4)this.nextStation();
          }else{this.blocked=0;this.path=advance.path;}
          if(walkable(candidate.x,candidate.z)) {
            const moved=Math.hypot(candidate.x-this.position.x,candidate.z-this.position.z);
            if(moved>.00001){const heading=Math.atan2(candidate.x-this.position.x,candidate.z-this.position.z);this.yaw+=Math.atan2(Math.sin(heading-this.yaw),Math.cos(heading-this.yaw))*(1-Math.exp(-dt*9));walking=true;}
            this.position=candidate;
            if(this.blocked>1&&moved>.00001)this.path=planPath(this.position,{x:this.station.approach[0],z:this.station.approach[1]});
          }
        }
      }
    }else {
      this.remaining-=dt;
      if(this.remaining<=0) {
        if(this.phase==='browsing'){changed=this.tryClothes();this.phase='posing';this.remaining=this.station.id==='runway'?3.2:2.1;}
        else this.nextStation();
      }
    }
    return {changed,walking,distance:Math.hypot(this.position.x-before.x,this.position.z-before.z),pose:this.pose};
  }
  description() {
    if(this.phase==='chatting')return 'saying hello and posing with you';
    if(this.phase==='walking')return `visiting ${this.station.name.toLowerCase()}`;
    if(this.phase==='browsing')return `choosing ${this.station.name.toLowerCase()}`;
    return this.station?.id==='runway'?'posing on the runway':'showing a new look';
  }
}
