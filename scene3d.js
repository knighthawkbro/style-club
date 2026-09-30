var Style3D=(()=>{var El=Object.defineProperty;var mf=Object.getOwnPropertyDescriptor;var gf=Object.getOwnPropertyNames;var _f=Object.prototype.hasOwnProperty;var xf=(i,t)=>{for(var e in t)El(i,e,{get:t[e],enumerable:!0})},vf=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of gf(t))!_f.call(i,s)&&s!==e&&El(i,s,{get:()=>t[s],enumerable:!(n=mf(t,s))||n.enumerable});return i};var yf=i=>vf(El({},"__esModule",{value:!0}),i);var ev={};xf(ev,{Boutique:()=>fh,Runway:()=>ph,STATIONS:()=>Sn,STORES:()=>ci,portrait:()=>of});var au=0,oc=1,ou=2;var Gi=1,lu=2,Ls=3,wi=0,Qe=1,Ce=2,Gn=0,Ds=1,lc=2,cc=3,hc=4,cu=5;var Wi=100,hu=101,uu=102,du=103,fu=104,pu=200,mu=201,gu=202,_u=203,uc=204,dc=205,xu=206,vu=207,yu=208,Mu=209,Su=210,bu=211,Eu=212,wu=213,Tu=214,La=0,Da=1,Na=2,_s=3,Ua=4,Fa=5,Oa=6,Ba=7,fc=0,Au=1,Ru=2,Cn=0,pc=1,mc=2,gc=3,Ns=4,_c=5,xc=6,vc=7;var yc=300,Ti=301,Xi=302,go=303,_o=304,kr=306,za=1e3,Bn=1001,ka=1002,Be=1003,Cu=1004;var Vr=1005;var ke=1006,xo=1007;var Ai=1008;var nn=1009,Mc=1010,Sc=1011,Us=1012,vo=1013,In=1014,vn=1015,Pn=1016,yo=1017,Mo=1018,Fs=1020,bc=35902,Ec=35899,wc=1021,Tc=1022,yn=1023,Vn=1026,Ri=1027,So=1028,bo=1029,Ci=1030,Eo=1031;var wo=1033,Hr=33776,Gr=33777,Wr=33778,Xr=33779,To=35840,Ao=35841,Ro=35842,Co=35843,Io=36196,Po=37492,Lo=37496,Do=37488,No=37489,qr=37490,Uo=37491,Fo=37808,Oo=37809,Bo=37810,zo=37811,ko=37812,Vo=37813,Ho=37814,Go=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,Zo=37820,Jo=37821,$o=36492,Ko=36494,jo=36495,Qo=36283,tl=36284,Yr=36285,el=36286;var or=2300,Va=2301,Ia=2302,$l=2303,Kl=2400,jl=2401,Ql=2402;var Iu=3200;var nl=0,Pu=1,oi="",Re="srgb",lr="srgb-linear",cr="linear",de="srgb";var Pa=7680;var Lu=519,Du=512,Nu=513,Uu=514,il=515,Fu=516,Ou=517,sl=518,Bu=519,Ac=35044;var Rc="300 es",Rn=2e3,xs=2001;function Mf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Sf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function hr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zu(){let i=hr("canvas");return i.style.display="block",i}var Th={},vs=null;function ur(...i){let t="THREE."+i.shift();vs?vs("log",t,...i):console.log(t,...i)}function ku(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=ku(i);let t="THREE."+i.shift();if(vs)vs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function zt(...i){i=ku(i);let t="THREE."+i.shift();if(vs)vs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Oi(...i){let t=i.join(" ");t in Th||(Th[t]=!0,kt(...i))}function Vu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Hu={[La]:Da,[Na]:Oa,[Ua]:Ba,[_s]:Fa,[Da]:La,[Oa]:Na,[Ba]:Ua,[Fa]:_s},Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ah=1234567,ir=Math.PI/180,ys=180/Math.PI;function kn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Cc(i,t){return(i%t+t)%t}function bf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ef(i,t,e){return i!==t?(e-i)/(t-i):0}function sr(i,t,e){return(1-e)*i+e*t}function wf(i,t,e,n){return sr(i,t,1-Math.exp(-e*n))}function Tf(i,t=1){return t-Math.abs(Cc(i,t*2)-t)}function Af(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function If(i,t){return i+Math.random()*(t-i)}function Pf(i){return i*(.5-Math.random())}function Lf(i){i!==void 0&&(Ah=i);let t=Ah+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Df(i){return i*ir}function Nf(i){return i*ys}function Uf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ff(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Of(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Bf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),d=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),h=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*d,l*u,l*f,o*c);break;case"YZY":i.set(l*f,o*d,l*u,o*c);break;case"ZXZ":i.set(l*u,l*f,o*d,o*c);break;case"XZX":i.set(o*d,l*p,l*h,o*c);break;case"YXY":i.set(l*h,o*d,l*p,o*c);break;case"ZYZ":i.set(l*p,l*h,o*d,o*c);break;default:kt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var tn={DEG2RAD:ir,RAD2DEG:ys,generateUUID:kn,clamp:jt,euclideanModulo:Cc,mapLinear:bf,inverseLerp:Ef,lerp:sr,damp:wf,pingpong:Tf,smoothstep:Af,smootherstep:Rf,randInt:Cf,randFloat:If,randFloatSpread:Pf,seededRandom:Lf,degToRad:Df,radToDeg:Nf,isPowerOfTwo:Uf,ceilPowerOfTwo:Ff,floorPowerOfTwo:Of,setQuaternionFromProperEuler:Bf,normalize:pe,denormalize:An},Uc=class Uc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uc.prototype.isVector2=!0;var rt=Uc,_n=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],u=n[s+3],f=r[a+0],h=r[a+1],p=r[a+2],x=r[a+3];if(u!==x||l!==f||c!==h||d!==p){let g=l*f+c*h+d*p+u*x;g<0&&(f=-f,h=-h,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let b=Math.acos(g),w=Math.sin(b);m=Math.sin(m*b)/w,o=Math.sin(o*b)/w,l=l*m+f*o,c=c*m+h*o,d=d*m+p*o,u=u*m+x*o}else{l=l*m+f*o,c=c*m+h*o,d=d*m+p*o,u=u*m+x*o;let b=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=b,c*=b,d*=b,u*=b}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],u=r[a],f=r[a+1],h=r[a+2],p=r[a+3];return t[e]=o*p+d*u+l*h-c*f,t[e+1]=l*p+d*f+c*u-o*h,t[e+2]=c*p+d*h+o*f-l*u,t[e+3]=d*p-o*u-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),u=o(r/2),f=l(n/2),h=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=f*d*u+c*h*p,this._y=c*h*u-f*d*p,this._z=c*d*p+f*h*u,this._w=c*d*u-f*h*p;break;case"YXZ":this._x=f*d*u+c*h*p,this._y=c*h*u-f*d*p,this._z=c*d*p-f*h*u,this._w=c*d*u+f*h*p;break;case"ZXY":this._x=f*d*u-c*h*p,this._y=c*h*u+f*d*p,this._z=c*d*p+f*h*u,this._w=c*d*u-f*h*p;break;case"ZYX":this._x=f*d*u-c*h*p,this._y=c*h*u+f*d*p,this._z=c*d*p-f*h*u,this._w=c*d*u+f*h*p;break;case"YZX":this._x=f*d*u+c*h*p,this._y=c*h*u+f*d*p,this._z=c*d*p-f*h*u,this._w=c*d*u-f*h*p;break;case"XZY":this._x=f*d*u-c*h*p,this._y=c*h*u-f*d*p,this._z=c*d*p+f*h*u,this._w=c*d*u+f*h*p;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],d=e[6],u=e[10],f=n+o+u;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>u){let h=2*Math.sqrt(1+n-o-u);this._w=(d-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>u){let h=2*Math.sqrt(1+o-n-u);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+d)/h}else{let h=2*Math.sqrt(1+u-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,e=Math.sin(e*c)/d,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fc=class Fc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),d=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*d,this.y=n+l*d+o*c-r*u,this.z=s+l*u+r*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return wl.copy(this).projectOnVector(t),this.sub(wl)}reflect(t){return this.sub(wl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fc.prototype.isVector3=!0;var P=Fc,wl=new P,Rh=new _n,Oc=class Oc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let d=this.elements;return d[0]=t,d[1]=s,d[2]=o,d[3]=e,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],h=n[5],p=n[8],x=s[0],g=s[3],m=s[6],b=s[1],w=s[4],v=s[7],M=s[2],S=s[5],A=s[8];return r[0]=a*x+o*b+l*M,r[3]=a*g+o*w+l*S,r[6]=a*m+o*v+l*A,r[1]=c*x+d*b+u*M,r[4]=c*g+d*w+u*S,r[7]=c*m+d*v+u*A,r[2]=f*x+h*b+p*M,r[5]=f*g+h*w+p*S,r[8]=f*m+h*v+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=d*a-o*c,f=o*l-d*r,h=c*r-a*l,p=e*u+n*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=u*x,t[1]=(s*c-d*n)*x,t[2]=(o*n-s*a)*x,t[3]=f*x,t[4]=(d*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=h*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Oi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tl.makeScale(t,e)),this}rotate(t){return Oi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tl.makeRotation(-t)),this}translate(t,e){return Oi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Oc.prototype.isMatrix3=!0;var Xt=Oc,Tl=new Xt,Ch=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){let i={enabled:!0,workingColorSpace:lr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=gs(s.r),s.g=gs(s.g),s.b=gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===oi?cr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Oi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Oi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[lr]:{primaries:t,whitePoint:n,transfer:cr,toXYZ:Ch,fromXYZ:Ih,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:n,transfer:de,toXYZ:Ch,fromXYZ:Ih,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),i}var ne=zf();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ji,Ha=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ji===void 0&&(ji=hr("canvas")),ji.width=t.width,ji.height=t.height;let s=ji.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=hr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kf=0,Ms=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Al(s[a].image)):r.push(Al(s[a]))}else r=Al(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Al(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var Vf=0,Rl=new P,Ke=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=ke,a=Ai,o=yn,l=nn,c=i.DEFAULT_ANISOTROPY,d=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=kn(),this.name="",this.source=new Ms(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case za:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case za:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=yc;Ke.DEFAULT_ANISOTROPY=1;var Bc=class Bc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],d=l[4],u=l[8],f=l[1],h=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(h+1)/2,M=(m+1)/2,S=(d+f)/4,A=(u+x)/4,_=(p+g)/4;return w>v&&w>M?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=S/n,r=A/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=_/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=_/r),this.set(n,s,r,e),this}let b=Math.sqrt((g-p)*(g-p)+(u-x)*(u-x)+(f-d)*(f-d));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(u-x)/b,this.z=(f-d)/b,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bc.prototype.isVector4=!0;var be=Bc,Ga=class extends Hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ke(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ms(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends Ga{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},dr=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Wa=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Be,this.minFilter=Be,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var mo=class mo{constructor(t,e,n,s,r,a,o,l,c,d,u,f,h,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,d,u,f,h,p,x,g)}set(t,e,n,s,r,a,o,l,c,d,u,f,h,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=d,m[10]=u,m[14]=f,m[3]=h,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Qi.setFromMatrixColumn(t,0).length(),r=1/Qi.setFromMatrixColumn(t,1).length(),a=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*d,h=a*u,p=o*d,x=o*u;e[0]=l*d,e[4]=-l*u,e[8]=c,e[1]=h+p*c,e[5]=f-x*c,e[9]=-o*l,e[2]=x-f*c,e[6]=p+h*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*d,h=l*u,p=c*d,x=c*u;e[0]=f+x*o,e[4]=p*o-h,e[8]=a*c,e[1]=a*u,e[5]=a*d,e[9]=-o,e[2]=h*o-p,e[6]=x+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*d,h=l*u,p=c*d,x=c*u;e[0]=f-x*o,e[4]=-a*u,e[8]=p+h*o,e[1]=h+p*o,e[5]=a*d,e[9]=x-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*d,h=a*u,p=o*d,x=o*u;e[0]=l*d,e[4]=p*c-h,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=h*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,h=a*c,p=o*l,x=o*c;e[0]=l*d,e[4]=x-f*u,e[8]=p*u+h,e[1]=u,e[5]=a*d,e[9]=-o*d,e[2]=-c*d,e[6]=h*u+p,e[10]=f-x*u}else if(t.order==="XZY"){let f=a*l,h=a*c,p=o*l,x=o*c;e[0]=l*d,e[4]=-u,e[8]=c*d,e[1]=f*u+x,e[5]=a*d,e[9]=h*u-p,e[2]=p*u-h,e[6]=o*d,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hf,t,Gf)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),pi.crossVectors(n,an),pi.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),pi.crossVectors(n,an)),pi.normalize(),ra.crossVectors(an,pi),s[0]=pi.x,s[4]=ra.x,s[8]=an.x,s[1]=pi.y,s[5]=ra.y,s[9]=an.y,s[2]=pi.z,s[6]=ra.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],h=n[13],p=n[2],x=n[6],g=n[10],m=n[14],b=n[3],w=n[7],v=n[11],M=n[15],S=s[0],A=s[4],_=s[8],T=s[12],R=s[1],I=s[5],D=s[9],O=s[13],L=s[2],B=s[6],W=s[10],H=s[14],tt=s[3],q=s[7],j=s[11],K=s[15];return r[0]=a*S+o*R+l*L+c*tt,r[4]=a*A+o*I+l*B+c*q,r[8]=a*_+o*D+l*W+c*j,r[12]=a*T+o*O+l*H+c*K,r[1]=d*S+u*R+f*L+h*tt,r[5]=d*A+u*I+f*B+h*q,r[9]=d*_+u*D+f*W+h*j,r[13]=d*T+u*O+f*H+h*K,r[2]=p*S+x*R+g*L+m*tt,r[6]=p*A+x*I+g*B+m*q,r[10]=p*_+x*D+g*W+m*j,r[14]=p*T+x*O+g*H+m*K,r[3]=b*S+w*R+v*L+M*tt,r[7]=b*A+w*I+v*B+M*q,r[11]=b*_+w*D+v*W+M*j,r[15]=b*T+w*O+v*H+M*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],d=t[2],u=t[6],f=t[10],h=t[14],p=t[3],x=t[7],g=t[11],m=t[15],b=l*h-c*f,w=o*h-c*u,v=o*f-l*u,M=a*h-c*d,S=a*f-l*d,A=a*u-o*d;return e*(x*b-g*w+m*v)-n*(p*b-g*M+m*S)+s*(p*w-x*M+m*A)-r*(p*v-x*S+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],d=t[10];return e*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],d=t[8],u=t[9],f=t[10],h=t[11],p=t[12],x=t[13],g=t[14],m=t[15],b=e*o-n*a,w=e*l-s*a,v=e*c-r*a,M=n*l-s*o,S=n*c-r*o,A=s*c-r*l,_=d*x-u*p,T=d*g-f*p,R=d*m-h*p,I=u*g-f*x,D=u*m-h*x,O=f*m-h*g,L=b*O-w*D+v*I+M*R-S*T+A*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=(o*O-l*D+c*I)*B,t[1]=(s*D-n*O-r*I)*B,t[2]=(x*A-g*S+m*M)*B,t[3]=(f*S-u*A-h*M)*B,t[4]=(l*R-a*O-c*T)*B,t[5]=(e*O-s*R+r*T)*B,t[6]=(g*v-p*A-m*w)*B,t[7]=(d*A-f*v+h*w)*B,t[8]=(a*D-o*R+c*_)*B,t[9]=(n*R-e*D-r*_)*B,t[10]=(p*S-x*v+m*b)*B,t[11]=(u*v-d*S-h*b)*B,t[12]=(o*T-a*I-l*_)*B,t[13]=(e*I-n*T+s*_)*B,t[14]=(x*w-p*M-g*b)*B,t[15]=(d*M-u*w+f*b)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,d=a+a,u=o+o,f=r*c,h=r*d,p=r*u,x=a*d,g=a*u,m=o*u,b=l*c,w=l*d,v=l*u,M=n.x,S=n.y,A=n.z;return s[0]=(1-(x+m))*M,s[1]=(h+v)*M,s[2]=(p-w)*M,s[3]=0,s[4]=(h-v)*S,s[5]=(1-(f+m))*S,s[6]=(g+b)*S,s[7]=0,s[8]=(p+w)*A,s[9]=(g-b)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Qi.set(s[0],s[1],s[2]).length(),o=Qi.set(s[4],s[5],s[6]).length(),l=Qi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),En.copy(this);let c=1/a,d=1/o,u=1/l;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=d,En.elements[5]*=d,En.elements[6]*=d,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Rn,l=!1){let c=this.elements,d=2*r/(e-t),u=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===Rn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===xs)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Rn,l=!1){let c=this.elements,d=2/(e-t),u=2/(n-s),f=-(e+t)/(e-t),h=-(n+s)/(n-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===Rn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===xs)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};mo.prototype.isMatrix4=!0;var le=mo,Qi=new P,En=new le,Hf=new P(0,0,0),Gf=new P(1,1,1),pi=new P,ra=new P,an=new P,Ph=new le,Lh=new _n,ii=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],u=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lh.setFromEuler(this),this.setFromQuaternion(Lh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wf=0,Dh=new P,ts=new _n,$n=new le,aa=new P,Ys=new P,Xf=new P,qf=new _n,Nh=new P(1,0,0),Uh=new P(0,1,0),Fh=new P(0,0,1),Oh={type:"added"},Yf={type:"removed"},es={type:"childadded",child:null},Cl={type:"childremoved",child:null},Ve=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new P,e=new ii,n=new _n,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Xt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Nh,t)}rotateY(t){return this.rotateOnAxis(Uh,t)}rotateZ(t){return this.rotateOnAxis(Fh,t)}translateOnAxis(t,e){return Dh.copy(t).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nh,t)}translateY(t){return this.translateOnAxis(Uh,t)}translateZ(t){return this.translateOnAxis(Fh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?aa.copy(t):aa.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(Ys,aa,this.up):$n.lookAt(aa,Ys,this.up),this.quaternion.setFromRotationMatrix($n),s&&($n.extractRotation(s.matrixWorld),ts.setFromRotationMatrix($n),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oh),es.child=t,this.dispatchEvent(es),es.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yf),Cl.child=t,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oh),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,t,Xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),u=a(t.shapes),f=a(t.skeletons),h=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ve.DEFAULT_UP=new P(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var oe=class extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zf={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new oe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new oe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new oe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new oe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mi={h:0,s:0,l:0},oa={h:0,s:0,l:0};function Il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ft=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Cc(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Il(a,r,t+1/3),this.g=Il(a,r,t),this.b=Il(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Re){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let n=Gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=gs(t.r),this.g=gs(t.g),this.b=gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return ne.workingToColorSpace(We.copy(this),t),Math.round(jt(We.r*255,0,255))*65536+Math.round(jt(We.g*255,0,255))*256+Math.round(jt(We.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(We.copy(this),e);let n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=d<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Re){ne.workingToColorSpace(We.copy(this),t);let e=We.r,n=We.g,s=We.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(mi),this.setHSL(mi.h+t,mi.s+e,mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mi),t.getHSL(oa);let n=sr(mi.h,oa.h,e),s=sr(mi.s,oa.s,e),r=sr(mi.l,oa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Ft;Ft.NAMES=Gu;var fr=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bi=class extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wn=new P,Kn=new P,Pl=new P,jn=new P,ns=new P,is=new P,Bh=new P,Ll=new P,Dl=new P,Nl=new P,Ul=new be,Fl=new be,Ol=new be,ei=class i{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Kn.subVectors(n,e),Pl.subVectors(t,e);let a=wn.dot(wn),o=wn.dot(Kn),l=wn.dot(Pl),c=Kn.dot(Kn),d=Kn.dot(Pl),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,h=(c*l-o*d)*f,p=(a*d-o*l)*f;return r.set(1-h-p,p,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,jn.x),l.addScaledVector(a,jn.y),l.addScaledVector(o,jn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ul.setScalar(0),Fl.setScalar(0),Ol.setScalar(0),Ul.fromBufferAttribute(t,e),Fl.fromBufferAttribute(t,n),Ol.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ul,r.x),a.addScaledVector(Fl,r.y),a.addScaledVector(Ol,r.z),a}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Kn.subVectors(t,e),wn.cross(Kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),wn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ns.subVectors(s,n),is.subVectors(r,n),Ll.subVectors(t,n);let l=ns.dot(Ll),c=is.dot(Ll);if(l<=0&&c<=0)return e.copy(n);Dl.subVectors(t,s);let d=ns.dot(Dl),u=is.dot(Dl);if(d>=0&&u<=d)return e.copy(s);let f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(ns,a);Nl.subVectors(t,r);let h=ns.dot(Nl),p=is.dot(Nl);if(p>=0&&h<=p)return e.copy(r);let x=h*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(is,o);let g=d*p-h*u;if(g<=0&&u-d>=0&&h-p>=0)return Bh.subVectors(r,s),o=(u-d)/(u-d+(h-p)),e.copy(s).addScaledVector(Bh,o);let m=1/(g+x+f);return a=x*m,o=f*m,e.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xe=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(t.matrixWorld),this.expandByPoint(Tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),la.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(t.matrixWorld),this.union(la)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Tn),Tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Zs),ca.subVectors(this.max,Zs),ss.subVectors(t.a,Zs),rs.subVectors(t.b,Zs),as.subVectors(t.c,Zs),gi.subVectors(rs,ss),_i.subVectors(as,rs),Di.subVectors(ss,as);let e=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Di.z,Di.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Di.z,0,-Di.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Di.y,Di.x,0];return!Bl(e,ss,rs,as,ca)||(e=[1,0,0,0,1,0,0,0,1],!Bl(e,ss,rs,as,ca))?!1:(ha.crossVectors(gi,_i),e=[ha.x,ha.y,ha.z],Bl(e,ss,rs,as,ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Qn=[new P,new P,new P,new P,new P,new P,new P,new P],Tn=new P,la=new Xe,ss=new P,rs=new P,as=new P,gi=new P,_i=new P,Di=new P,Zs=new P,ca=new P,ha=new P,Ni=new P;function Bl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ni.fromArray(i,r);let o=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),d=n.dot(Ni);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Le=new P,ua=new rt,Jf=0,Oe=class extends Hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ac,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ua.fromBufferAttribute(this,e),ua.applyMatrix3(t),this.setXY(e,ua.x,ua.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var pr=class extends Oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mr=class extends Oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Zt=class extends Oe{constructor(t,e,n){super(new Float32Array(t),e,n)}},$f=new Xe,Js=new P,zl=new P,vi=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$f.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Js.subVectors(t,this.center);let e=Js.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Js,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(zl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Js.copy(t.center).add(zl)),this.expandByPoint(Js.copy(t.center).sub(zl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kf=0,gn=new le,kl=new Ve,os=new P,on=new Xe,$s=new Xe,Ue=new P,_e=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mf(t)?mr:pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return kl.lookAt(t),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(on.min,$s.min),on.expandByPoint(Ue),Ue.addVectors(on.max,$s.max),on.expandByPoint(Ue)):(on.expandByPoint($s.min),on.expandByPoint($s.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ue.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(t,c),Ue.add(os)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Oe(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new P,l[_]=new P;let c=new P,d=new P,u=new P,f=new rt,h=new rt,p=new rt,x=new P,g=new P;function m(_,T,R){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),f.fromBufferAttribute(r,_),h.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),d.sub(c),u.sub(c),h.sub(f),p.sub(f);let I=1/(h.x*p.y-p.x*h.y);isFinite(I)&&(x.copy(d).multiplyScalar(p.y).addScaledVector(u,-h.y).multiplyScalar(I),g.copy(u).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(I),o[_].add(x),o[T].add(x),o[R].add(x),l[_].add(g),l[T].add(g),l[R].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,T=b.length;_<T;++_){let R=b[_],I=R.start,D=R.count;for(let O=I,L=I+D;O<L;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let w=new P,v=new P,M=new P,S=new P;function A(_){M.fromBufferAttribute(s,_),S.copy(M);let T=o[_];w.copy(T),w.sub(M.multiplyScalar(M.dot(T))).normalize(),v.crossVectors(S,T);let I=v.dot(l[_])<0?-1:1;a.setXYZW(_,w.x,w.y,w.z,I)}for(let _=0,T=b.length;_<T;++_){let R=b[_],I=R.start,D=R.count;for(let O=I,L=I+D;O<L;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,d=new P,u=new P;if(t)for(let f=0,h=t.count;f<h;f+=3){let p=t.getX(f+0),x=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(d),l.add(d),c.add(d),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),d.subVectors(a,r),u.subVectors(s,r),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){let c=o.array,d=o.itemSize,u=o.normalized,f=new c.constructor(l.length*d),h=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?h=l[x]*o.data.stride+o.offset:h=l[x]*d;for(let m=0;m<d;m++)f[p++]=c[h++]}return new Oe(f,d,u)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,u=c.length;d<u;d++){let f=c[d],h=t(f,n);l.push(h)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){let h=c[u];d.push(h.toJSON(t.data))}d.length>0&&(s[l]=d,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(e))}let r=t.morphAttributes;for(let c in r){let d=[],u=r[c];for(let f=0,h=u.length;f<h;f++)d.push(u[f].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,d=a.length;c<d;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},gr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ac,this.updateRanges=[],this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Je=new P,Es=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ur("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ur("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vl=new P,jf=new P,Qf=new Xt,$e=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Vl.subVectors(n,e).cross(jf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Vl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Qf.getNormalMatrix(t),s=this.coplanarPoint(Vl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},tp=0,si=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=Ds,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=dc,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new $e().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new rt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ws=class extends si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ls,Ks=new P,cs=new P,hs=new P,us=new rt,js=new rt,Wu=new le,da=new P,Qs=new P,fa=new P,zh=new rt,Hl=new rt,kh=new rt,_r=class extends Ve{constructor(t=new ws){if(super(),this.isSprite=!0,this.type="Sprite",ls===void 0){ls=new _e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new gr(e,5);ls.setIndex([0,1,2,0,2,3]),ls.setAttribute("position",new Es(n,3,0,!1)),ls.setAttribute("uv",new Es(n,2,3,!1))}this.geometry=ls,this.material=t,this.center=new rt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),cs.setFromMatrixScale(this.matrixWorld),Wu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),hs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&cs.multiplyScalar(-hs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;pa(da.set(-.5,-.5,0),hs,a,cs,s,r),pa(Qs.set(.5,-.5,0),hs,a,cs,s,r),pa(fa.set(.5,.5,0),hs,a,cs,s,r),zh.set(0,0),Hl.set(1,0),kh.set(1,1);let o=t.ray.intersectTriangle(da,Qs,fa,!1,Ks);if(o===null&&(pa(Qs.set(-.5,.5,0),hs,a,cs,s,r),Hl.set(0,1),o=t.ray.intersectTriangle(da,fa,Qs,!1,Ks),o===null))return;let l=t.ray.origin.distanceTo(Ks);l<t.near||l>t.far||e.push({distance:l,point:Ks.clone(),uv:ei.getInterpolation(Ks,da,Qs,fa,zh,Hl,kh,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pa(i,t,e,n,s,r){us.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(js.x=r*us.x-s*us.y,js.y=s*us.x+r*us.y):js.copy(us),i.copy(t),i.x+=js.x,i.y+=js.y,i.applyMatrix4(Wu)}var ti=new P,Gl=new P,ma=new P,ga=new P,xr=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Gl.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),ga.copy(this.origin).sub(Gl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(ma),o=ga.dot(this.direction),l=-ga.dot(ma),c=ga.lengthSq(),d=Math.abs(1-a*a),u,f,h,p;if(d>0)if(u=a*l-o,f=a*o-l,p=r*d,u>=0)if(f>=-p)if(f<=p){let x=1/d;u*=x,f*=x,h=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),h=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),h=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),h=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Gl).addScaledVector(ma,f),h}intersectSphere(t,e){if(t.radius<0)return null;ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),d>=0?(r=(t.min.y-f.y)*d,a=(t.max.y-f.y)*d):(r=(t.max.y-f.y)*d,a=(t.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,u=t.x-a.x,f=t.y-a.y,h=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=n.x-a.x,b=n.y-a.y,w=n.z-a.z,v=Math.abs(l),M=Math.abs(c),S=Math.abs(d),A,_,T,R,I,D,O,L,B,W,H,tt;if(v>=M&&v>=S?(T=l,D=u,B=p,tt=m,l>=0?(A=c,_=d,R=f,I=h,O=x,L=g,W=b,H=w):(A=d,_=c,R=h,I=f,O=g,L=x,W=w,H=b)):M>=S?(T=c,D=f,B=x,tt=b,c>=0?(A=d,_=l,R=h,I=u,O=g,L=p,W=w,H=m):(A=l,_=d,R=u,I=h,O=p,L=g,W=m,H=w)):(T=d,D=h,B=g,tt=w,d>=0?(A=l,_=c,R=u,I=f,O=p,L=x,W=m,H=b):(A=c,_=l,R=f,I=u,O=x,L=p,W=b,H=m)),T===0)return null;let q=A/T,j=_/T,K=1/T,Ct=R-q*D,Et=I-j*D,se=O-q*B,Qt=L-j*B,re=W-q*tt,J=H-j*tt,et=re*Qt-J*se,_t=Ct*J-Et*re,Vt=se*Et-Qt*Ct;if(s){if(et<0||_t<0||Vt<0)return null}else if((et<0||_t<0||Vt<0)&&(et>0||_t>0||Vt>0))return null;let bt=et+_t+Vt;if(bt===0)return null;let Ht=K*(et*D+_t*B+Vt*tt);return(bt>0?Ht<0:Ht>0)?null:this.at(Ht/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xn=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=fc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Vh=new le,Ui=new xr,_a=new vi,Hh=new P,xa=new P,va=new P,ya=new P,Wl=new P,Ma=new P,Gh=new P,Sa=new P,Se=class extends Ve{constructor(t=new _e,e=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ma.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],u=r[l];d!==0&&(Wl.fromBufferAttribute(u,t),a?Ma.addScaledVector(Wl,d):Ma.addScaledVector(Wl.sub(e),d))}e.add(Ma)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(_a.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(_a,Hh)===null||Ui.origin.distanceToSquared(Hh)>(t.far-t.near)**2))&&(Vh.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Vh),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,u=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=a[g.materialIndex],b=Math.max(g.start,h.start),w=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let v=b,M=w;v<M;v+=3){let S=o.getX(v),A=o.getX(v+1),_=o.getX(v+2);s=ba(this,m,t,n,c,d,u,S,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let b=o.getX(g),w=o.getX(g+1),v=o.getX(g+2);s=ba(this,a,t,n,c,d,u,b,w,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=f.length;p<x;p++){let g=f[p],m=a[g.materialIndex],b=Math.max(g.start,h.start),w=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let v=b,M=w;v<M;v+=3){let S=v,A=v+1,_=v+2;s=ba(this,m,t,n,c,d,u,S,A,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let g=p,m=x;g<m;g+=3){let b=g,w=g+1,v=g+2;s=ba(this,a,t,n,c,d,u,b,w,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function ep(i,t,e,n,s,r,a,o){let l;if(t.side===Qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===wi,o),l===null)return null;Sa.copy(o),Sa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Sa);return c<e.near||c>e.far?null:{distance:c,point:Sa.clone(),object:i}}function ba(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,xa),i.getVertexPosition(l,va),i.getVertexPosition(c,ya);let d=ep(i,t,e,n,xa,va,ya,Gh);if(d){let u=new P;ei.getBarycoord(Gh,xa,va,ya,u),s&&(d.uv=ei.getInterpolatedAttribute(s,o,l,c,u,new rt)),r&&(d.uv1=ei.getInterpolatedAttribute(r,o,l,c,u,new rt)),a&&(d.normal=ei.getInterpolatedAttribute(a,o,l,c,u,new P),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new P,materialIndex:0};ei.getNormal(xa,va,ya,f.normal),d.face=f,d.barycoord=u}return d}var vr=class extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Be,d=Be,u,f){super(null,a,o,l,c,d,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ts=class extends Oe{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ds=new le,Wh=new le,Ea=[],Xh=new Xe,np=new le,tr=new Se,er=new vi,yr=class extends Se{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ts(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,np)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Xe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),Xh.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(Xh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ds),er.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(er)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(tr.geometry=this.geometry,tr.material=this.material,tr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),er.copy(this.boundingSphere),er.applyMatrix4(n),t.ray.intersectsSphere(er)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),Wh.multiplyMatrices(n,ds),tr.matrixWorld=Wh,tr.raycast(t,Ea);for(let a=0,o=Ea.length;a<o;a++){let l=Ea[a];l.instanceId=r,l.object=this,e.push(l)}Ea.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Ts(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vr(new Float32Array(s*this.count),s,this.count,So,vn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fi=new vi,ip=new rt(.5,.5),wa=new P,As=class{constructor(t=new $e,e=new $e,n=new $e,s=new $e,r=new $e,a=new $e){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],u=r[5],f=r[6],h=r[7],p=r[8],x=r[9],g=r[10],m=r[11],b=r[12],w=r[13],v=r[14],M=r[15];if(s[0].setComponents(c-a,h-d,m-p,M-b).normalize(),s[1].setComponents(c+a,h+d,m+p,M+b).normalize(),s[2].setComponents(c+o,h+u,m+x,M+w).normalize(),s[3].setComponents(c-o,h-u,m-x,M-w).normalize(),n)s[4].setComponents(l,f,g,v).normalize(),s[5].setComponents(c-l,h-f,m-g,M-v).normalize();else if(s[4].setComponents(c-l,h-f,m-g,M-v).normalize(),e===Rn)s[5].setComponents(c+l,h+f,m+g,M+v).normalize();else if(e===xs)s[5].setComponents(l,f,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);let e=ip.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(wa.x=s.normal.x>0?t.max.x:t.min.x,wa.y=s.normal.y>0?t.max.y:t.min.y,wa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Mr=class extends Ke{constructor(t=[],e=Ti,n,s,r,a,o,l,c,d){super(t,e,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ri=class extends Ke{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var yi=class extends Ke{constructor(t,e,n=In,s,r,a,o=Be,l=Be,c,d=Vn,u=1){if(d!==Vn&&d!==Ri)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ms(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Xa=class extends yi{constructor(t,e=In,n=Ti,s,r,a=Be,o=Be,l,c=Vn){let d={width:t,height:t,depth:1},u=[d,d,d,d,d,d];super(t,t,e,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Sr=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ze=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],u=[],f=0,h=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(u,2));function p(x,g,m,b,w,v,M,S,A,_,T){let R=v/A,I=M/_,D=v/2,O=M/2,L=S/2,B=A+1,W=_+1,H=0,tt=0,q=new P;for(let j=0;j<W;j++){let K=j*I-O;for(let Ct=0;Ct<B;Ct++){let Et=Ct*R-D;q[x]=Et*b,q[g]=K*w,q[m]=L,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[m]=S>0?1:-1,d.push(q.x,q.y,q.z),u.push(Ct/A),u.push(1-j/_),H+=1}}for(let j=0;j<_;j++)for(let K=0;K<A;K++){let Ct=f+K+B*j,Et=f+K+B*(j+1),se=f+(K+1)+B*(j+1),Qt=f+(K+1)+B*j;l.push(Ct,Et,Qt),l.push(Et,se,Qt),tt+=6}o.addGroup(h,tt,T),h+=tt,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},br=class i extends _e{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],d=e/2,u=Math.PI/2*t,f=e,h=2*u+f,p=n*2+r,x=s+1,g=new P,m=new P;for(let b=0;b<=p;b++){let w=0,v=0,M=0,S=0;if(b<=n){let T=b/n,R=T*Math.PI/2;v=-d-t*Math.cos(R),M=t*Math.sin(R),S=-t*Math.cos(R),w=T*u}else if(b<=n+r){let T=(b-n)/r;v=-d+T*e,M=t,S=0,w=u+T*f}else{let T=(b-n-r)/n,R=T*Math.PI/2;v=d+t*Math.sin(R),M=t*Math.cos(R),S=t*Math.sin(R),w=u+f+T*u}let A=Math.max(0,Math.min(1,w/h)),_=0;b===0?_=.5/s:b===p&&(_=-.5/s);for(let T=0;T<=s;T++){let R=T/s,I=R*Math.PI*2,D=Math.sin(I),O=Math.cos(I);m.x=-M*O,m.y=v,m.z=M*D,o.push(m.x,m.y,m.z),g.set(-M*O,S,M*D),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+_,A)}if(b>0){let T=(b-1)*x;for(let R=0;R<s;R++){let I=T+R,D=T+R+1,O=b*x+R,L=b*x+R+1;a.push(I,D,O),a.push(D,L,O)}}}this.setIndex(a),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var qe=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],u=[],f=[],h=[],p=0,x=[],g=n/2,m=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(h,2));function b(){let v=new P,M=new P,S=0,A=(e-t)/n;for(let _=0;_<=r;_++){let T=[],R=_/r,I=R*(e-t)+t;for(let D=0;D<=s;D++){let O=D/s,L=O*l+o,B=Math.sin(L),W=Math.cos(L);M.x=I*B,M.y=-R*n+g,M.z=I*W,u.push(M.x,M.y,M.z),v.set(B,A,W).normalize(),f.push(v.x,v.y,v.z),h.push(O,1-R),T.push(p++)}x.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let R=x[T][_],I=x[T+1][_],D=x[T+1][_+1],O=x[T][_+1];(t>0||T!==0)&&(d.push(R,I,O),S+=3),(e>0||T!==r-1)&&(d.push(I,D,O),S+=3)}c.addGroup(m,S,0),m+=S}function w(v){let M=p,S=new rt,A=new P,_=0,T=v===!0?t:e,R=v===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,g*R,0),f.push(0,R,0),h.push(.5,.5),p++;let I=p;for(let D=0;D<=s;D++){let L=D/s*l+o,B=Math.cos(L),W=Math.sin(L);A.x=T*W,A.y=g*R,A.z=T*B,u.push(A.x,A.y,A.z),f.push(0,R,0),S.x=B*.5+.5,S.y=W*.5*R+.5,h.push(S.x,S.y),p++}for(let D=0;D<s;D++){let O=M+D,L=I+D;v===!0?d.push(L,L+1,O):d.push(L+1,L,O),_+=3}c.addGroup(m,_,v===!0?1:2),m+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},zi=class i extends qe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qa=class i extends _e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),d(),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(r.slice(),3)),this.setAttribute("uv",new Zt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let w=new P,v=new P,M=new P;for(let S=0;S<e.length;S+=3)h(e[S+0],w),h(e[S+1],v),h(e[S+2],M),l(w,v,M,b)}function l(b,w,v,M){let S=M+1,A=[];for(let _=0;_<=S;_++){A[_]=[];let T=b.clone().lerp(v,_/S),R=w.clone().lerp(v,_/S),I=S-_;for(let D=0;D<=I;D++)D===0&&_===S?A[_][D]=T:A[_][D]=T.clone().lerp(R,D/I)}for(let _=0;_<S;_++)for(let T=0;T<2*(S-_)-1;T++){let R=Math.floor(T/2);T%2===0?(f(A[_][R+1]),f(A[_+1][R]),f(A[_][R])):(f(A[_][R+1]),f(A[_+1][R+1]),f(A[_+1][R]))}}function c(b){let w=new P;for(let v=0;v<r.length;v+=3)w.x=r[v+0],w.y=r[v+1],w.z=r[v+2],w.normalize().multiplyScalar(b),r[v+0]=w.x,r[v+1]=w.y,r[v+2]=w.z}function d(){let b=new P;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let v=g(b)/2/Math.PI+.5,M=m(b)/Math.PI+.5;a.push(v,1-M)}p(),u()}function u(){for(let b=0;b<a.length;b+=6){let w=a[b+0],v=a[b+2],M=a[b+4],S=Math.max(w,v,M),A=Math.min(w,v,M);S>.9&&A<.1&&(w<.2&&(a[b+0]+=1),v<.2&&(a[b+2]+=1),M<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function h(b,w){let v=b*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function p(){let b=new P,w=new P,v=new P,M=new P,S=new rt,A=new rt,_=new rt;for(let T=0,R=0;T<r.length;T+=9,R+=6){b.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),S.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),_.set(a[R+4],a[R+5]),M.copy(b).add(w).add(v).divideScalar(3);let I=g(M);x(S,R+0,b,I),x(A,R+2,w,I),x(_,R+4,v,I)}}function x(b,w,v,M){M<0&&b.x===1&&(a[w]=b.x-1),v.x===0&&v.z===0&&(a[w]=M/2/Math.PI+.5)}function g(b){return Math.atan2(b.z,-b.x)}function m(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var ln=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],f=n[s+1]-d,h=(a-d)/f;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new rt:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new le;for(let h=0;h<=t;h++){let p=h/t;s[h]=this.getTangentAt(p,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(jt(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,p))}a[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(jt(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(h=-h);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],h*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Rs=class extends ln{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new rt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*d-h*u+this.aX,c=f*u+h*d+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ya=class extends Rs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ic(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,u){let f=(a-r)/c-(o-r)/(c+d)+(o-a)/d,h=(o-a)/d-(l-a)/(d+u)+(l-o)/u;f*=d,h*=d,s(a,o,f,h)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var qh=new P,Yh=new P,Xl=new Ic,ql=new Ic,Yl=new Ic,Mi=class extends ln{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(Yh.subVectors(s[0],s[1]).add(s[0]),c=Yh);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(qh.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=qh),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(u),h),x=Math.pow(u.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(d),h);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Xl.initNonuniformCatmullRom(c.x,u.x,f.x,d.x,p,x,g),ql.initNonuniformCatmullRom(c.y,u.y,f.y,d.y,p,x,g),Yl.initNonuniformCatmullRom(c.z,u.z,f.z,d.z,p,x,g)}else this.curveType==="catmullrom"&&(Xl.initCatmullRom(c.x,u.x,f.x,d.x,this.tension),ql.initCatmullRom(c.y,u.y,f.y,d.y,this.tension),Yl.initCatmullRom(c.z,u.z,f.z,d.z,this.tension));return n.set(Xl.calc(l),ql.calc(l),Yl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Zh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function sp(i,t){let e=1-i;return e*e*t}function rp(i,t){return 2*(1-i)*i*t}function ap(i,t){return i*i*t}function rr(i,t,e,n){return sp(i,t)+rp(i,e)+ap(i,n)}function op(i,t){let e=1-i;return e*e*e*t}function lp(i,t){let e=1-i;return 3*e*e*i*t}function cp(i,t){return 3*(1-i)*i*i*t}function hp(i,t){return i*i*i*t}function ar(i,t,e,n,s){return op(i,t)+lp(i,e)+cp(i,n)+hp(i,s)}var Er=class extends ln{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ar(t,s.x,r.x,a.x,o.x),ar(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Za=class extends ln{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ar(t,s.x,r.x,a.x,o.x),ar(t,s.y,r.y,a.y,o.y),ar(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wr=class extends ln{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ja=class extends ln{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tr=class extends ln{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(t,s.x,r.x,a.x),rr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ar=class extends ln{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(t,s.x,r.x,a.x),rr(t,s.y,r.y,a.y),rr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rr=class extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Zh(o,l.x,c.x,d.x,u.x),Zh(o,l.y,c.y,d.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new rt().fromArray(s))}return this}},$a=Object.freeze({__proto__:null,ArcCurve:Ya,CatmullRomCurve3:Mi,CubicBezierCurve:Er,CubicBezierCurve3:Za,EllipseCurve:Rs,LineCurve:wr,LineCurve3:Ja,QuadraticBezierCurve:Tr,QuadraticBezierCurve3:Ar,SplineCurve:Rr}),Ka=class extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $a[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new $a[s.type]().fromJSON(s))}return this}},Cr=class extends Ka{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new wr(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Tr(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Er(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Rr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+c,e+d,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Rs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},je=class extends Cr{constructor(t){super(t),this.uuid=kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Cr().fromJSON(s))}return this}};function up(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Xu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=gp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let d=o,u=l;for(let f=e;f<s;f+=e){let h=i[f],p=i[f+1];h<o&&(o=h),p<l&&(l=p),h>d&&(d=h),p>u&&(u=p)}c=Math.max(d-o,u-l),c=c!==0?32767/c:0}return Ir(r,a,e,o,l,c,0),a}function Xu(i,t,e,n,s){let r;if(s===Ap(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Jh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Jh(a/n|0,i[a],i[a+1],r);return r&&Cs(r,r.next)&&(Lr(r),r=r.next),r}function ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cs(e,e.next)||Te(e.prev,e,e.next)===0)){if(Lr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ir(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Mp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?fp(i,n,s,r):dp(i)){t.push(l.i,i.i,c.i),Lr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=pp(ki(i),t),Ir(i,t,e,n,s,r,2)):a===2&&mp(i,t,e,n,s,r):Ir(ki(i),t,e,n,s,r,1);break}}}function dp(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,d=Math.min(s,r,a),u=Math.min(o,l,c),f=Math.max(s,r,a),h=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=d&&p.x<=f&&p.y>=u&&p.y<=h&&nr(s,o,r,l,a,c,p.x,p.y)&&Te(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function fp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Te(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,d=s.y,u=r.y,f=a.y,h=Math.min(o,l,c),p=Math.min(d,u,f),x=Math.max(o,l,c),g=Math.max(d,u,f),m=tc(h,p,t,e,n),b=tc(x,g,t,e,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=m&&v&&v.z<=b;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==a&&nr(o,d,l,u,c,f,w.x,w.y)&&Te(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==a&&nr(o,d,l,u,c,f,v.x,v.y)&&Te(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=m;){if(w.x>=h&&w.x<=x&&w.y>=p&&w.y<=g&&w!==s&&w!==a&&nr(o,d,l,u,c,f,w.x,w.y)&&Te(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=b;){if(v.x>=h&&v.x<=x&&v.y>=p&&v.y<=g&&v!==s&&v!==a&&nr(o,d,l,u,c,f,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function pp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Cs(n,s)&&Yu(n,e,e.next,s)&&Pr(n,s)&&Pr(s,n)&&(t.push(n.i,e.i,s.i),Lr(e),Lr(e.next),e=i=s),e=e.next}while(e!==i);return ki(e)}function mp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ep(a,o)){let l=Zu(a,o);a=ki(a,a.next),l=ki(l,l.next),Ir(a,t,e,n,s,r,0),Ir(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function gp(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Xu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(bp(c))}s.sort(_p);for(let r=0;r<s.length;r++)e=xp(s[r],e);return e}function _p(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function xp(i,t){let e=vp(i,t);if(!e)return t;let n=Zu(e,i);return ki(n,n.next),ki(e,e.next)}function vp(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Cs(i,e))return e;do{if(Cs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,a=e.x<e.next.x?e:e.next,u===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,d=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&qu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let u=Math.abs(s-e.y)/(n-e.x);Pr(e,i)&&(u<d||u===d&&(e.x>a.x||e.x===a.x&&yp(a,e)))&&(a=e,d=u)}e=e.next}while(e!==o);return a}function yp(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function Mp(i,t,e,n){let s=i;do s.z===0&&(s.z=tc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sp(s)}function Sp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function tc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function bp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function qu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function nr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&qu(i,t,e,n,s,r,a,o)}function Ep(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!wp(i,t)&&(Pr(i,t)&&Pr(t,i)&&Tp(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||Cs(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cs(i,t){return i.x===t.x&&i.y===t.y}function Yu(i,t,e,n){let s=Aa(Te(i,t,e)),r=Aa(Te(i,t,n)),a=Aa(Te(e,n,i)),o=Aa(Te(e,n,t));return!!(s!==r&&a!==o||s===0&&Ta(i,e,t)||r===0&&Ta(i,n,t)||a===0&&Ta(e,i,n)||o===0&&Ta(e,t,n))}function Ta(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Aa(i){return i>0?1:i<0?-1:0}function wp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Pr(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function Tp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Zu(i,t){let e=ec(i.i,i.x,i.y),n=ec(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jh(i,t,e,n){let s=ec(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ec(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ap(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var nc=class{static triangulate(t,e,n=2){return up(t,e,n)}},zn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];$h(t),Kh(n,t);let a=t.length;e.forEach($h);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Kh(n,e[l]);let o=nc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function $h(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Kh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var cn=class i extends _e{constructor(t=new je([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:h-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Rp,w,v=!1,M,S,A,_;if(m){w=m.getSpacedPoints(d),v=!0,f=!1;let nt=m.isCatmullRomCurve3?m.closed:!1;M=m.computeFrenetFrames(d,nt),S=new P,A=new P,_=new P}f||(g=0,h=0,p=0,x=0);let T=o.extractPoints(c),R=T.shape,I=T.holes;if(!zn.isClockWise(R)){R=R.reverse();for(let nt=0,st=I.length;nt<st;nt++){let at=I[nt];zn.isClockWise(at)&&(I[nt]=at.reverse())}}function O(nt){let at=10000000000000001e-36,ot=nt[0];for(let ht=1;ht<=nt.length;ht++){let Ot=ht%nt.length,Ut=nt[Ot],Gt=Ut.x-ot.x,qt=Ut.y-ot.y,N=Gt*Gt+qt*qt,ce=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(ot.x),Math.abs(ot.y)),te=at*ce*ce;if(N<=te){nt.splice(Ot,1),ht--;continue}ot=Ut}}O(R),I.forEach(O);let L=I.length,B=R;for(let nt=0;nt<L;nt++){let st=I[nt];R=R.concat(st)}function W(nt,st,at){return st||zt("ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(st,at)}let H=R.length;function tt(nt,st,at){let ot,ht,Ot,Ut=nt.x-st.x,Gt=nt.y-st.y,qt=at.x-nt.x,N=at.y-nt.y,ce=Ut*Ut+Gt*Gt,te=Ut*N-Gt*qt;if(Math.abs(te)>Number.EPSILON){let C=Math.sqrt(ce),y=Math.sqrt(qt*qt+N*N),z=st.x-Gt/C,G=st.y+Ut/C,Y=at.x-N/y,lt=at.y+qt/y,ct=((Y-z)*N-(lt-G)*qt)/(Ut*N-Gt*qt);ot=z+Ut*ct-nt.x,ht=G+Gt*ct-nt.y;let Z=ot*ot+ht*ht;if(Z<=2)return new rt(ot,ht);Ot=Math.sqrt(Z/2)}else{let C=!1;Ut>Number.EPSILON?qt>Number.EPSILON&&(C=!0):Ut<-Number.EPSILON?qt<-Number.EPSILON&&(C=!0):Math.sign(Gt)===Math.sign(N)&&(C=!0),C?(ot=-Gt,ht=Ut,Ot=Math.sqrt(ce)):(ot=Ut,ht=Gt,Ot=Math.sqrt(ce/2))}return new rt(ot/Ot,ht/Ot)}let q=[];for(let nt=0,st=B.length,at=st-1,ot=nt+1;nt<st;nt++,at++,ot++)at===st&&(at=0),ot===st&&(ot=0),q[nt]=tt(B[nt],B[at],B[ot]);let j=[],K,Ct=q.concat();for(let nt=0,st=L;nt<st;nt++){let at=I[nt];K=[];for(let ot=0,ht=at.length,Ot=ht-1,Ut=ot+1;ot<ht;ot++,Ot++,Ut++)Ot===ht&&(Ot=0),Ut===ht&&(Ut=0),K[ot]=tt(at[ot],at[Ot],at[Ut]);j.push(K),Ct=Ct.concat(K)}let Et;if(g===0)Et=zn.triangulateShape(B,I);else{let nt=[],st=[];for(let at=0;at<g;at++){let ot=at/g,ht=h*Math.cos(ot*Math.PI/2),Ot=p*Math.sin(ot*Math.PI/2)+x;for(let Ut=0,Gt=B.length;Ut<Gt;Ut++){let qt=W(B[Ut],q[Ut],Ot);_t(qt.x,qt.y,-ht),ot===0&&nt.push(qt)}for(let Ut=0,Gt=L;Ut<Gt;Ut++){let qt=I[Ut];K=j[Ut];let N=[];for(let ce=0,te=qt.length;ce<te;ce++){let C=W(qt[ce],K[ce],Ot);_t(C.x,C.y,-ht),ot===0&&N.push(C)}ot===0&&st.push(N)}}Et=zn.triangulateShape(nt,st)}let se=Et.length,Qt=p+x;for(let nt=0;nt<H;nt++){let st=f?W(R[nt],Ct[nt],Qt):R[nt];v?(A.copy(M.normals[0]).multiplyScalar(st.x),S.copy(M.binormals[0]).multiplyScalar(st.y),_.copy(w[0]).add(A).add(S),_t(_.x,_.y,_.z)):_t(st.x,st.y,0)}for(let nt=1;nt<=d;nt++)for(let st=0;st<H;st++){let at=f?W(R[st],Ct[st],Qt):R[st];v?(A.copy(M.normals[nt]).multiplyScalar(at.x),S.copy(M.binormals[nt]).multiplyScalar(at.y),_.copy(w[nt]).add(A).add(S),_t(_.x,_.y,_.z)):_t(at.x,at.y,u/d*nt)}for(let nt=g-1;nt>=0;nt--){let st=nt/g,at=h*Math.cos(st*Math.PI/2),ot=p*Math.sin(st*Math.PI/2)+x;for(let ht=0,Ot=B.length;ht<Ot;ht++){let Ut=W(B[ht],q[ht],ot);_t(Ut.x,Ut.y,u+at)}for(let ht=0,Ot=I.length;ht<Ot;ht++){let Ut=I[ht];K=j[ht];for(let Gt=0,qt=Ut.length;Gt<qt;Gt++){let N=W(Ut[Gt],K[Gt],ot);v?_t(N.x,N.y+w[d-1].y,w[d-1].x+at):_t(N.x,N.y,u+at)}}}re(),J();function re(){let nt=s.length/3;if(f){let st=0,at=H*st;for(let ot=0;ot<se;ot++){let ht=Et[ot];Vt(ht[2]+at,ht[1]+at,ht[0]+at)}st=d+g*2,at=H*st;for(let ot=0;ot<se;ot++){let ht=Et[ot];Vt(ht[0]+at,ht[1]+at,ht[2]+at)}}else{for(let st=0;st<se;st++){let at=Et[st];Vt(at[2],at[1],at[0])}for(let st=0;st<se;st++){let at=Et[st];Vt(at[0]+H*d,at[1]+H*d,at[2]+H*d)}}n.addGroup(nt,s.length/3-nt,0)}function J(){let nt=s.length/3,st=0;et(B,st),st+=B.length;for(let at=0,ot=I.length;at<ot;at++){let ht=I[at];et(ht,st),st+=ht.length}n.addGroup(nt,s.length/3-nt,1)}function et(nt,st){let at=nt.length;for(;--at>=0;){let ot=at,ht=at-1;ht<0&&(ht=nt.length-1);for(let Ot=0,Ut=d+g*2;Ot<Ut;Ot++){let Gt=H*Ot,qt=H*(Ot+1),N=st+ot+Gt,ce=st+ht+Gt,te=st+ht+qt,C=st+ot+qt;bt(N,ce,te,C)}}}function _t(nt,st,at){l.push(nt),l.push(st),l.push(at)}function Vt(nt,st,at){Ht(nt),Ht(st),Ht(at);let ot=s.length/3,ht=b.generateTopUV(n,s,ot-3,ot-2,ot-1);fe(ht[0]),fe(ht[1]),fe(ht[2])}function bt(nt,st,at,ot){Ht(nt),Ht(st),Ht(ot),Ht(st),Ht(at),Ht(ot);let ht=s.length/3,Ot=b.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);fe(Ot[0]),fe(Ot[1]),fe(Ot[3]),fe(Ot[1]),fe(Ot[2]),fe(Ot[3])}function Ht(nt){s.push(l[nt*3+0]),s.push(l[nt*3+1]),s.push(l[nt*3+2])}function fe(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Cp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new $a[s.type]().fromJSON(s)),new i(n,t.options)}},Rp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],d=t[s*3+1];return[new rt(r,a),new rt(o,l),new rt(c,d)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],d=t[n*3+1],u=t[n*3+2],f=t[s*3],h=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-d)<Math.abs(a-c)?[new rt(a,1-l),new rt(c,1-u),new rt(f,1-p),new rt(x,1-m)]:[new rt(o,1-l),new rt(d,1-u),new rt(h,1-p),new rt(g,1-m)]}};function Cp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Vi=class i extends qa{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},ai=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,u=t/o,f=e/l,h=[],p=[],x=[],g=[];for(let m=0;m<d;m++){let b=m*f-a;for(let w=0;w<c;w++){let v=w*u-r;p.push(v,-b,0),x.push(0,0,1),g.push(w/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let w=b+c*m,v=b+c*(m+1),M=b+1+c*(m+1),S=b+1+c*m;h.push(w,v,S),h.push(v,M,S)}this.setIndex(h),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Dr=class i extends _e{constructor(t=new je([new rt(0,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let d=0;d<t.length;d++)c(t[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Zt(s,3)),this.setAttribute("normal",new Zt(r,3)),this.setAttribute("uv",new Zt(a,2));function c(d){let u=s.length/3,f=d.extractPoints(e),h=f.shape,p=f.holes;zn.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){let b=p[g];zn.isClockWise(b)===!0&&(p[g]=b.reverse())}let x=zn.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){let b=p[g];h=h.concat(b)}for(let g=0,m=h.length;g<m;g++){let b=h[g];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let g=0,m=x.length;g<m;g++){let b=x[g],w=b[0]+u,v=b[1]+u,M=b[2]+u;n.push(w,v,M),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Ip(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function Ip(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var hn=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],u=new P,f=new P,h=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let b=[],w=m/n,v=a+w*o,M=t*Math.cos(v),S=Math.sqrt(t*t-M*M),A=0;m===0&&a===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let _=0;_<=e;_++){let T=_/e,R=s+T*r;u.x=-S*Math.cos(R),u.y=M,u.z=S*Math.sin(R),p.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(T+A,1-w),b.push(c++)}d.push(b)}for(let m=0;m<n;m++)for(let b=0;b<e;b++){let w=d[m][b+1],v=d[m][b],M=d[m+1][b],S=d[m+1][b+1];(m!==0||a>0)&&h.push(w,v,S),(m!==n-1||l<Math.PI)&&h.push(v,M,S)}this.setIndex(h),this.setAttribute("position",new Zt(p,3)),this.setAttribute("normal",new Zt(x,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Nr=class i extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],d=[],u=[],f=new P,h=new P,p=new P;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let m=0;m<=s;m++){let b=m/s*r;h.x=(t+e*Math.cos(g))*Math.cos(b),h.y=(t+e*Math.cos(g))*Math.sin(b),h.z=e*Math.sin(g),c.push(h.x,h.y,h.z),f.x=t*Math.cos(b),f.y=t*Math.sin(b),p.subVectors(h,f).normalize(),d.push(p.x,p.y,p.z),u.push(m/s),u.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,b=(s+1)*(x-1)+g-1,w=(s+1)*(x-1)+g,v=(s+1)*x+g;l.push(m,b,v),l.push(b,w,v)}this.setIndex(l),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Hi=class i extends _e{constructor(t=new Ar(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new rt,d=new P,u=[],f=[],h=[],p=[];x(),this.setIndex(p),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(f,3)),this.setAttribute("uv",new Zt(h,2));function x(){for(let w=0;w<e;w++)g(w);g(r===!1?e:0),b(),m()}function g(w){d=t.getPointAt(w/e,d);let v=a.normals[w],M=a.binormals[w];for(let S=0;S<=s;S++){let A=S/s*Math.PI*2,_=Math.sin(A),T=-Math.cos(A);l.x=T*v.x+_*M.x,l.y=T*v.y+_*M.y,l.z=T*v.z+_*M.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let w=1;w<=e;w++)for(let v=1;v<=s;v++){let M=(s+1)*(w-1)+(v-1),S=(s+1)*w+(v-1),A=(s+1)*w+v,_=(s+1)*(w-1)+v;p.push(M,S,_),p.push(S,A,_)}}function b(){for(let w=0;w<=e;w++)for(let v=0;v<=s;v++)c.x=w/e,c.y=v/s,h.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new $a[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function qi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(jh(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(jh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ye(i){let t={};for(let e=0;e<i.length;e++){let n=qi(i[e]);for(let s in n)t[s]=n[s]}return t}function jh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Pp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Ju={clone:qi,merge:Ye},Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qi(t.uniforms),this.uniformsGroups=Pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ft().setHex(s.value);break;case"v2":this.uniforms[n].value=new rt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ja=class extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},dn=class extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Qa=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},to=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function fs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Zl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Si=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},eo=class extends Si{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Kl,endingEnd:Kl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case jl:r=t,o=2*e-n;break;case Ql:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jl:a=t,l=2*n-e;break;case Ql:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-f*g+2*f*x-f*p,b=(1+f)*g+(-1.5-2*f)*x+(-.5+f)*p+1,w=(-1-h)*g+(1.5+h)*x+.5*p,v=h*g-h*x;for(let M=0;M!==o;++M)r[M]=m*a[d+M]+b*a[c+M]+w*a[l+M]+v*a[u+M];return r}},no=class extends Si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=(n-e)/(s-e),u=1-d;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*d;return r}},io=class extends Si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},so=class extends Si{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,d=this.inTangents,u=this.outTangents;if(!d||!u){let p=(n-e)/(s-e),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let f=o*2,h=t-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=h*f+p*2,b=u[m],w=u[m+1],v=t*f+p*2,M=d[v],S=d[v+1],A=Up(n,e,b,M,s);r[p]=$u(A,x,w,S,g)}return r}};function $u(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Np(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Up(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=$u(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Np(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=fs(e,this.TimeBufferType),this.values=fs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:fs(t.times,Array),values:fs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Zl(t.settings)&&(n.settings={inTangents:fs(t.settings.inTangents,Array),outTangents:fs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new so(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case or:e=this.InterpolantFactoryMethodDiscrete;break;case Va:e=this.InterpolantFactoryMethodLinear;break;case Ia:e=this.InterpolantFactoryMethodSmooth;break;case $l:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return or;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return Ia;case this.InterpolantFactoryMethodBezier:return $l}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Zl(this.settings)&&(Qh(this.settings.inTangents,t),Qh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){zt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Sf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){zt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ia,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],d=t[o+1];if(c!==d&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*n,f=u-n,h=u+n;for(let p=0;p!==n;++p){let x=e[u+p];if(x!==e[f+p]||x!==e[h+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*n,f=a*n;for(let h=0;h!==n;++h)e[f+h]=e[u+h]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Zl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Qh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Va;var bi=class extends fn{constructor(t,e,n){super(t,e,n)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=or;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};ro.prototype.ValueTypeName="color";var ao=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};ao.prototype.ValueTypeName="number";var oo=class extends Si{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let d=c+o;c!==d;c+=4)_n.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ur=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new oo(this.times,this.values,this.getValueSize(),t)}};Ur.prototype.ValueTypeName="quaternion";Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends fn{constructor(t,e,n){super(t,e,n)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=or;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};lo.prototype.ValueTypeName="vector";var co=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){let u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){let h=c[u],p=c[u+1];if(h.global&&(h.lastIndex=0),h.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ku=new co,ho=class{constructor(t){this.manager=t!==void 0?t:Ku,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ho.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fr=class extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Or=class extends Fr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Jl=new le,tu=new P,eu=new P,uo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new As,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(tu),eu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(eu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Jl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===xs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Jl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ra=new P,Ca=new _n,On=new P,Br=class extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ra,Ca,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ra,Ca,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ra,Ca,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xi=new P,nu=new rt,iu=new rt,Fe=class extends Br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ys*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,nu,iu),e.subVectors(iu,nu)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ir*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Is=class extends Br{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ic=class extends uo{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ps=class extends Fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new ic}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ps=-90,ms=1,fo=class extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fe(ps,ms,t,e);s.layers=this.layers,this.add(s);let r=new Fe(ps,ms,t,e);r.layers=this.layers,this.add(r);let a=new Fe(ps,ms,t,e);a.layers=this.layers,this.add(a);let o=new Fe(ps,ms,t,e);o.layers=this.layers,this.add(o);let l=new Fe(ps,ms,t,e);l.layers=this.layers,this.add(l);let c=new Fe(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(u,f,h),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},po=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Lc="\\[\\]\\.:\\/",Fp=new RegExp("["+Lc+"]","g"),Dc="[^"+Lc+"]",Op="[^"+Lc.replace("\\.","")+"]",Bp=/((?:WC+[\/:])*)/.source.replace("WC",Dc),zp=/(WCOD+)?/.source.replace("WCOD",Op),kp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),Vp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),Hp=new RegExp("^"+Bp+zp+kp+Vp+"$"),Gp=["material","materials","bones","map"],sc=class{constructor(t,e,n){let s=n||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Me=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Fp,"")}static parseTrackName(t){let e=Hp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=sc;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iv=new Float32Array(1);var su=new le,zr=class{constructor(t,e,n=0,s=1/0){this.ray=new xr(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return su.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(su),this}intersectObject(t,e=!0,n=[]){return rc(t,this,n,e),n.sort(ru),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)rc(t[s],this,n,e);return n.sort(ru),n}};function ru(i,t){return i.distance-t.distance}function rc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)rc(r[a],t,e,!0)}}var zc=class zc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};zc.prototype.isMatrix2=!0;var ac=zc;function Nc(i,t,e,n){let s=Wp(n);switch(e){case wc:return i*t;case So:return i*t/s.components*s.byteLength;case bo:return i*t/s.components*s.byteLength;case Ci:return i*t*2/s.components*s.byteLength;case Eo:return i*t*2/s.components*s.byteLength;case Tc:return i*t*3/s.components*s.byteLength;case yn:return i*t*4/s.components*s.byteLength;case wo:return i*t*4/s.components*s.byteLength;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wr:case Xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:case Co:return Math.max(i,16)*Math.max(t,8)/4;case To:case Ro:return Math.max(i,8)*Math.max(t,8)/2;case Io:case Po:case Do:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lo:case qr:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Jo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case $o:case Ko:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qo:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yr:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wp(i){switch(i){case nn:case Mc:return{byteLength:1,components:1};case Us:case Sc:case Pn:return{byteLength:2,components:1};case yo:case Mo:return{byteLength:2,components:4};case In:case vo:case vn:return{byteLength:4,components:1};case bc:case Ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function vd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jp(i){let t=new WeakMap;function e(o,l){let c=o.array,d=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let d=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,d);else{u.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<u.length;h++){let p=u[f],x=u[h];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++f,u[f]=x)}u.length=f+1;for(let h=0,p=u.length;h<p;h++){let x=u[h];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=t.get(o);(!d||d.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var $p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,em=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,im=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,om=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ym=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Sm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Em=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Am=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Im=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Om=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Hm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Gm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ym=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$m=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Km=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,a0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,v0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,M0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,L0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,U0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,k0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,V0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,H0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,G0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,X0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ig=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ag=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,mg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,_g=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:$p,alphahash_pars_fragment:Kp,alphamap_fragment:jp,alphamap_pars_fragment:Qp,alphatest_fragment:tm,alphatest_pars_fragment:em,aomap_fragment:nm,aomap_pars_fragment:im,batching_pars_vertex:sm,batching_vertex:rm,begin_vertex:am,beginnormal_vertex:om,bsdfs:lm,iridescence_fragment:cm,bumpmap_pars_fragment:hm,clipping_planes_fragment:um,clipping_planes_pars_fragment:dm,clipping_planes_pars_vertex:fm,clipping_planes_vertex:pm,color_fragment:mm,color_pars_fragment:gm,color_pars_vertex:_m,color_vertex:xm,common:vm,cube_uv_reflection_fragment:ym,defaultnormal_vertex:Mm,displacementmap_pars_vertex:Sm,displacementmap_vertex:bm,emissivemap_fragment:Em,emissivemap_pars_fragment:wm,colorspace_fragment:Tm,colorspace_pars_fragment:Am,envmap_fragment:Rm,envmap_common_pars_fragment:Cm,envmap_pars_fragment:Im,envmap_pars_vertex:Pm,envmap_physical_pars_fragment:Hm,envmap_vertex:Lm,fog_vertex:Dm,fog_pars_vertex:Nm,fog_fragment:Um,fog_pars_fragment:Fm,gradientmap_pars_fragment:Om,lightmap_pars_fragment:Bm,lights_lambert_fragment:zm,lights_lambert_pars_fragment:km,lights_pars_begin:Vm,lights_toon_fragment:Gm,lights_toon_pars_fragment:Wm,lights_phong_fragment:Xm,lights_phong_pars_fragment:qm,lights_physical_fragment:Ym,lights_physical_pars_fragment:Zm,lights_fragment_begin:Jm,lights_fragment_maps:$m,lights_fragment_end:Km,lightprobes_pars_fragment:jm,logdepthbuf_fragment:Qm,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:a0,metalnessmap_fragment:o0,metalnessmap_pars_fragment:l0,morphinstance_vertex:c0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:d0,morphtarget_vertex:f0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:_0,normal_vertex:x0,normalmap_pars_fragment:v0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:M0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:b0,opaque_fragment:E0,packing:w0,premultiplied_alpha_fragment:T0,project_vertex:A0,dithering_fragment:R0,dithering_pars_fragment:C0,roughnessmap_fragment:I0,roughnessmap_pars_fragment:P0,shadowmap_pars_fragment:L0,shadowmap_pars_vertex:D0,shadowmap_vertex:N0,shadowmask_pars_fragment:U0,skinbase_vertex:F0,skinning_pars_vertex:O0,skinning_vertex:B0,skinnormal_vertex:z0,specularmap_fragment:k0,specularmap_pars_fragment:V0,tonemapping_fragment:H0,tonemapping_pars_fragment:G0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:q0,uv_pars_vertex:Y0,uv_vertex:Z0,worldpos_vertex:J0,background_vert:$0,background_frag:K0,backgroundCube_vert:j0,backgroundCube_frag:Q0,cube_vert:tg,cube_frag:eg,depth_vert:ng,depth_frag:ig,distance_vert:sg,distance_frag:rg,equirect_vert:ag,equirect_frag:og,linedashed_vert:lg,linedashed_frag:cg,meshbasic_vert:hg,meshbasic_frag:ug,meshlambert_vert:dg,meshlambert_frag:fg,meshmatcap_vert:pg,meshmatcap_frag:mg,meshnormal_vert:gg,meshnormal_frag:_g,meshphong_vert:xg,meshphong_frag:vg,meshphysical_vert:yg,meshphysical_frag:Mg,meshtoon_vert:Sg,meshtoon_frag:bg,points_vert:Eg,points_frag:wg,shadow_vert:Tg,shadow_frag:Ag,sprite_vert:Rg,sprite_frag:Cg},gt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Xn={basic:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ye([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ye([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ye([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ye([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ye([gt.points,gt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ye([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ye([gt.common,gt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ye([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ye([gt.sprite,gt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Ye([gt.common,gt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Ye([gt.lights,gt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Xn.physical={uniforms:Ye([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var rl={r:0,b:0,g:0},Ig=new le,yd=new Xt;yd.set(-1,0,0,0,1,0,0,0,1);function Pg(i,t,e,n,s,r){let a=new Ft(0),o=s===!0?0:1,l,c,d=null,u=0,f=null;function h(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let v=b.backgroundBlurriness>0;w=t.get(w,v)}return w}function p(b){let w=!1,v=h(b);v===null?g(a,o):v&&v.isColor&&(g(v,1),w=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,w){let v=h(w);v&&(v.isCubeTexture||v.mapping===kr)?(c===void 0&&(c=new Se(new ze(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:qi(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ig.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(yd),c.material.toneMapped=ne.getTransfer(v.colorSpace)!==de,(d!==v||u!==v.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Se(new ai(2,2),new un({name:"BackgroundMaterial",uniforms:qi(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==de,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,u=v.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,w){b.getRGB(rl,Pc(i)),e.buffers.color.setClear(rl.r,rl.g,rl.b,w,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,g(a,o)},render:p,addToRenderList:x,dispose:m}}function Lg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(I,D,O,L,B){let W=!1,H=u(I,L,O,D);r!==H&&(r=H,c(r.object)),W=h(I,L,O,B),W&&p(I,L,O,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(I,D,O,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function d(I){return i.deleteVertexArray(I)}function u(I,D,O,L){let B=L.wireframe===!0,W=n[D.id];W===void 0&&(W={},n[D.id]=W);let H=I.isInstancedMesh===!0?I.id:0,tt=W[H];tt===void 0&&(tt={},W[H]=tt);let q=tt[O.id];q===void 0&&(q={},tt[O.id]=q);let j=q[B];return j===void 0&&(j=f(l()),q[B]=j),j}function f(I){let D=[],O=[],L=[];for(let B=0;B<e;B++)D[B]=0,O[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:L,object:I,attributes:{},index:null}}function h(I,D,O,L){let B=r.attributes,W=D.attributes,H=0,tt=O.getAttributes();for(let q in tt)if(tt[q].location>=0){let K=B[q],Ct=W[q];if(Ct===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Ct=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Ct=I.instanceColor)),K===void 0||K.attribute!==Ct||Ct&&K.data!==Ct.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function p(I,D,O,L){let B={},W=D.attributes,H=0,tt=O.getAttributes();for(let q in tt)if(tt[q].location>=0){let K=W[q];K===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(K=I.instanceColor));let Ct={};Ct.attribute=K,K&&K.data&&(Ct.data=K.data),B[q]=Ct,H++}r.attributes=B,r.attributesNum=H,r.index=L}function x(){let I=r.newAttributes;for(let D=0,O=I.length;D<O;D++)I[D]=0}function g(I){m(I,0)}function m(I,D){let O=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;O[I]=1,L[I]===0&&(i.enableVertexAttribArray(I),L[I]=1),B[I]!==D&&(i.vertexAttribDivisor(I,D),B[I]=D)}function b(){let I=r.newAttributes,D=r.enabledAttributes;for(let O=0,L=D.length;O<L;O++)D[O]!==I[O]&&(i.disableVertexAttribArray(O),D[O]=0)}function w(I,D,O,L,B,W,H){H===!0?i.vertexAttribIPointer(I,D,O,B,W):i.vertexAttribPointer(I,D,O,L,B,W)}function v(I,D,O,L){x();let B=L.attributes,W=O.getAttributes(),H=D.defaultAttributeValues;for(let tt in W){let q=W[tt];if(q.location>=0){let j=B[tt];if(j===void 0&&(tt==="instanceMatrix"&&I.instanceMatrix&&(j=I.instanceMatrix),tt==="instanceColor"&&I.instanceColor&&(j=I.instanceColor)),j!==void 0){let K=j.normalized,Ct=j.itemSize,Et=t.get(j);if(Et===void 0)continue;let se=Et.buffer,Qt=Et.type,re=Et.bytesPerElement,J=Qt===i.INT||Qt===i.UNSIGNED_INT||j.gpuType===vo;if(j.isInterleavedBufferAttribute){let et=j.data,_t=et.stride,Vt=j.offset;if(et.isInstancedInterleavedBuffer){for(let bt=0;bt<q.locationSize;bt++)m(q.location+bt,et.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let bt=0;bt<q.locationSize;bt++)g(q.location+bt);i.bindBuffer(i.ARRAY_BUFFER,se);for(let bt=0;bt<q.locationSize;bt++)w(q.location+bt,Ct/q.locationSize,Qt,K,_t*re,(Vt+Ct/q.locationSize*bt)*re,J)}else{if(j.isInstancedBufferAttribute){for(let et=0;et<q.locationSize;et++)m(q.location+et,j.meshPerAttribute);I.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let et=0;et<q.locationSize;et++)g(q.location+et);i.bindBuffer(i.ARRAY_BUFFER,se);for(let et=0;et<q.locationSize;et++)w(q.location+et,Ct/q.locationSize,Qt,K,Ct*re,Ct/q.locationSize*et*re,J)}}else if(H!==void 0){let K=H[tt];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(q.location,K);break;case 3:i.vertexAttrib3fv(q.location,K);break;case 4:i.vertexAttrib4fv(q.location,K);break;default:i.vertexAttrib1fv(q.location,K)}}}}b()}function M(){T();for(let I in n){let D=n[I];for(let O in D){let L=D[O];for(let B in L){let W=L[B];for(let H in W)d(W[H].object),delete W[H];delete L[B]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let D=n[I.id];for(let O in D){let L=D[O];for(let B in L){let W=L[B];for(let H in W)d(W[H].object),delete W[H];delete L[B]}}delete n[I.id]}function A(I){for(let D in n){let O=n[D];for(let L in O){let B=O[L];if(B[I.id]===void 0)continue;let W=B[I.id];for(let H in W)d(W[H].object),delete W[H];delete B[I.id]}}}function _(I){for(let D in n){let O=n[D],L=I.isInstancedMesh===!0?I.id:0,B=O[L];if(B!==void 0){for(let W in B){let H=B[W];for(let tt in H)d(H[tt].object),delete H[tt];delete B[W]}delete O[L],Object.keys(O).length===0&&delete n[D]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function Dg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),e.update(c,n,d))}function o(l,c,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let f=0;for(let h=0;h<d;h++)f+=c[h];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Ng(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==yn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==nn&&A!==vn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",d=l(c);d!==c&&(kt("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:v,maxSamples:M,samples:S}}function Ug(i){let t=this,e=null,n=0,s=!1,r=!1,a=new $e,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let h=u.length!==0||f||n!==0||s;return s=f,n=u.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=d(u,f,0)},this.setState=function(u,f,h){let p=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||r&&!g)r?d(null):c();else{let b=r?0:n,w=b*4,v=m.clippingState||null;l.value=v,v=d(p,f,w,h);for(let M=0;M!==w;++M)v[M]=e[M];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,f,h,p){let x=u!==null?u.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=h+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let w=0,v=h;w!==x;++w,v+=4)a.copy(u[w]).applyMatrix4(b,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Bs=4,Fg=6,Og=20,Bg=256,Zr=new Is,ju=new Ft,kc=null,Vc=0,Hc=0,Gc=!1,zg=new P,Yi=new P,ol=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=zg}=r;kc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kc,Vc,Hc),this._renderer.xr.enabled=Gc,t.scissorTest=!1,Os(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Xi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kc=this._renderer.getRenderTarget(),Vc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Pn,format:yn,colorSpace:lr,depthBuffer:!1},s=Qu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=kg(r)),this._blurMaterial=Hg(r,t,e),this._ggxMaterial=Vg(r,t,e)}return s}_compileMaterial(t){let e=new Se(new _e,t);this._renderer.compile(e,Zr)}_sceneToCubeUV(t,e,n,s,r){let l=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(ju),u.toneMapping=Cn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Se(new ze,new xn({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,m=!0):(g.color.copy(ju),m=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[w],r.y,r.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[w]));let M=this._cubeSize;Os(s,v*M,w>2?M:0,M,M),u.setRenderTarget(s),m&&u.render(x,l),u.render(t,l)}u.toneMapping=h,u.autoClear=f,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ti||t.mapping===Xi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Os(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Zr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-d*d),f=c*1.25,h=u*f,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-Bs?n-p+Bs:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=h,l.mipInt.value=p-e,Os(r,g,m,3*x,2*x),s.setRenderTarget(r),s.render(o,Zr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Os(t,g,m,3*x,2*x),s.setRenderTarget(t),s.render(o,Zr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],u=3*d*(s>this._lodMax-Bs?s-this._lodMax+Bs:0),f=4*(this._cubeSize-d);Os(e,u,f,3*d,2*d),a.setRenderTarget(e),a.render(l,Zr)}};function kg(i){let t=[],e=[],n=i,s=i-Bs+1+Fg;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,h=3,p=new Float32Array(h*f*u),x=new Float32Array(h*f*u);for(let m=0;m<u;m++){let b=m%3*2/3-1,w=m>2?0:-1,v=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];p.set(v,h*f*m);for(let M=0;M<f;M++){let S=d[M*2]*2-1,A=d[M*2+1]*2-1;m===0?Yi.set(1,A,S):m===1?Yi.set(-S,1,-A):m===2?Yi.set(-S,A,1):m===3?Yi.set(-1,A,-S):m===4?Yi.set(-S,-1,A):Yi.set(S,A,-1),Yi.toArray(x,(m*f+M)*h)}}let g=new _e;g.setAttribute("position",new Oe(p,h)),g.setAttribute("outputDirection",new Oe(x,h)),e.push(new Se(g,null)),n>Bs&&n--}return{lodMeshes:e,sizeLods:t}}function Qu(i,t,e){let n=new en(i,t,e);return n.texture.mapping=kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Vg(i,t,e){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Hg(i,t,e){return new un({name:"SphericalGaussianBlur",defines:{SAMPLES:Og,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:cl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function td(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function ed(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function cl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ll=class extends en{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ze(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:qi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Gn});r.uniforms.tEquirect.value=e;let a=new Se(s,r),o=e.minFilter;return e.minFilter===Ai&&(e.minFilter=ke),new fo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Gg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,h=!1){return f==null?null:h?a(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===go||h===_o)if(t.has(f)){let p=t.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let x=new ll(p.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let h=f.mapping,p=h===go||h===_o,x=h===Ti||h===Xi;if(p||x){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new ol(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let b=f.image;return p&&b&&b.height>0||x&&b&&l(b)?(n===null&&(n=new ol(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",d),g.texture):null}}}return f}function o(f,h){return h===go?f.mapping=Ti:h===_o&&(f.mapping=Xi),f}function l(f){let h=0,p=6;for(let x=0;x<p;x++)f[x]!==void 0&&h++;return h===p}function c(f){let h=f.target;h.removeEventListener("dispose",c);let p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function d(f){let h=f.target;h.removeEventListener("dispose",d);let p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function Wg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Oi("WebGLRenderer: "+n+" extension not supported."),s}}}function Xg(i,t,e,n){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete s[f.id];let h=r.get(f);h&&(t.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let h in f)t.update(f[h],i.ARRAY_BUFFER)}function c(u){let f=[],h=u.index,p=u.attributes.position,x=0;if(p===void 0)return;if(h!==null){let b=h.array;x=h.version;for(let w=0,v=b.length;w<v;w+=3){let M=b[w+0],S=b[w+1],A=b[w+2];f.push(M,S,S,A,A,M)}}else{let b=p.array;x=p.version;for(let w=0,v=b.length/3-1;w<v;w+=3){let M=w+0,S=w+1,A=w+2;f.push(M,S,S,A,A,M)}}let g=new(p.count>=65535?mr:pr)(f,1);g.version=x;let m=r.get(u);m&&t.remove(m),r.set(u,g)}function d(u){let f=r.get(u);if(f){let h=u.index;h!==null&&f.version<h.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:d}}function qg(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,u*a,h),e.update(f,n,h))}function d(u,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,h);let x=0;for(let g=0;g<h;g++)x+=f[g];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Yg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zg(i,t,e){let n=new WeakMap,s=new be;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=d!==void 0?d.length:0,f=n.get(o);if(f===void 0||f.count!==u){let T=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",T)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;h===!0&&(w=1),p===!0&&(w=2),x===!0&&(w=3);let v=o.attributes.position.count*w,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*M*4*u),A=new dr(S,v,M,u);A.type=vn,A.needsUpdate=!0;let _=w*4;for(let R=0;R<u;R++){let I=g[R],D=m[R],O=b[R],L=v*M*4*R;for(let B=0;B<I.count;B++){let W=B*_;h===!0&&(s.fromBufferAttribute(I,B),S[L+W+0]=s.x,S[L+W+1]=s.y,S[L+W+2]=s.z,S[L+W+3]=0),p===!0&&(s.fromBufferAttribute(D,B),S[L+W+4]=s.x,S[L+W+5]=s.y,S[L+W+6]=s.z,S[L+W+7]=0),x===!0&&(s.fromBufferAttribute(O,B),S[L+W+8]=s.x,S[L+W+9]=s.y,S[L+W+10]=s.z,S[L+W+11]=O.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new rt(v,M)},n.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];let p=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Jg(i,t,e,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,u=c.geometry,f=t.get(c,u);if(r.get(f)!==d&&(t.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return f}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:a,dispose:o}}var $g={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[gc]:"CINEON_TONE_MAPPING",[Ns]:"ACES_FILMIC_TONE_MAPPING",[xc]:"AGX_TONE_MAPPING",[vc]:"NEUTRAL_TONE_MAPPING",[_c]:"CUSTOM_TONE_MAPPING"};function Kg(i,t,e,n,s,r){let a=new en(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new _e;c.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Zt([0,2,0,0,2,0],2));let d=new ja({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Se(c,d),f=new Is(-1,1,1,-1,0,1),h=null,p=null,x=!1,g,m=null,b=[],w=!1;this.setSize=function(v,M){a.setSize(v,M),o!==null&&o.setSize(v,M),l!==null&&l.setSize(v,M);for(let S=0;S<b.length;S++){let A=b[S];A.setSize&&A.setSize(v,M)}},this.setEffects=function(v){b=v,w=b.length>0&&b[0].isRenderPass===!0;let M=a.width,S=a.height;b.length>0&&o===null&&(o=new en(M,S,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new en(M,S,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){let _=b[A];_.setSize&&_.setSize(M,S)}},this.begin=function(v,M){if(x||v.toneMapping===Cn&&b.length===0)return!1;if(m=M,M!==null){let S=M.width,A=M.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return w===!1&&v.setRenderTarget(a),g=v.toneMapping,v.toneMapping=Cn,!0},this.hasRenderPass=function(){return w},this.end=function(v,M){v.toneMapping=g,x=!0;let S=a,A=o;for(let _=0;_<b.length;_++){let T=b[_];T.enabled!==!1&&(T.render(v,A,S,M),T.needsSwap!==!1&&(S=A,A=A===o?l:o))}if(h!==v.outputColorSpace||p!==v.toneMapping){h=v.outputColorSpace,p=v.toneMapping,d.defines={},ne.getTransfer(h)===de&&(d.defines.SRGB_TRANSFER="");let _=$g[p];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(m),v.render(u,f),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var Md=new Ke,qc=new yi(1,1),Sd=new dr,bd=new Wa,Ed=new Mr,nd=[],id=[],sd=new Float32Array(16),rd=new Float32Array(9),ad=new Float32Array(4);function ks(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=nd[s];if(r===void 0&&(r=new Float32Array(s),nd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ne(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function hl(i,t){let e=id[t];e===void 0&&(e=new Int32Array(t),id[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ne(e,t)}}function t_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ne(e,t)}}function e_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ne(e,t)}}function n_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;ad.set(n),i.uniformMatrix2fv(this.addr,!1,ad),Ne(e,n)}}function i_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;rd.set(n),i.uniformMatrix3fv(this.addr,!1,rd),Ne(e,n)}}function s_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(De(e,n))return;sd.set(n),i.uniformMatrix4fv(this.addr,!1,sd),Ne(e,n)}}function r_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function a_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ne(e,t)}}function o_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ne(e,t)}}function l_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ne(e,t)}}function c_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function h_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ne(e,t)}}function u_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ne(e,t)}}function d_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ne(e,t)}}function f_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(qc.compareFunction=e.isReversedDepthBuffer()?sl:il,r=qc):r=Md,e.setTexture2D(t||r,s)}function p_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||bd,s)}function m_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ed,s)}function g_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Sd,s)}function __(i){switch(i){case 5126:return jg;case 35664:return Qg;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return s_;case 5124:case 35670:return r_;case 35667:case 35671:return a_;case 35668:case 35672:return o_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return d_;case 35678:case 36198:case 36298:case 36306:case 35682:return f_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return g_}}function x_(i,t){i.uniform1fv(this.addr,t)}function v_(i,t){let e=ks(t,this.size,2);i.uniform2fv(this.addr,e)}function y_(i,t){let e=ks(t,this.size,3);i.uniform3fv(this.addr,e)}function M_(i,t){let e=ks(t,this.size,4);i.uniform4fv(this.addr,e)}function S_(i,t){let e=ks(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function b_(i,t){let e=ks(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E_(i,t){let e=ks(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function w_(i,t){i.uniform1iv(this.addr,t)}function T_(i,t){i.uniform2iv(this.addr,t)}function A_(i,t){i.uniform3iv(this.addr,t)}function R_(i,t){i.uniform4iv(this.addr,t)}function C_(i,t){i.uniform1uiv(this.addr,t)}function I_(i,t){i.uniform2uiv(this.addr,t)}function P_(i,t){i.uniform3uiv(this.addr,t)}function L_(i,t){i.uniform4uiv(this.addr,t)}function D_(i,t,e){let n=this.cache,s=t.length,r=hl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=qc:a=Md;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function N_(i,t,e){let n=this.cache,s=t.length,r=hl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||bd,r[a])}function U_(i,t,e){let n=this.cache,s=t.length,r=hl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Ed,r[a])}function F_(i,t,e){let n=this.cache,s=t.length,r=hl(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ne(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Sd,r[a])}function O_(i){switch(i){case 5126:return x_;case 35664:return v_;case 35665:return y_;case 35666:return M_;case 35674:return S_;case 35675:return b_;case 35676:return E_;case 5124:case 35670:return w_;case 35667:case 35671:return T_;case 35668:case 35672:return A_;case 35669:case 35673:return R_;case 5125:return C_;case 36294:return I_;case 36295:return P_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return D_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return U_;case 36289:case 36303:case 36311:case 36292:return F_}}var Yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=__(e.type)}},Zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O_(e.type)}},Jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wc=/(\w+)(\])?(\[|\.)?/g;function od(i,t){i.seq.push(t),i.map[t.id]=t}function B_(i,t,e){let n=i.name,s=n.length;for(Wc.lastIndex=0;;){let r=Wc.exec(n),a=Wc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){od(e,c===void 0?new Yc(o,i,t):new Zc(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Jc(o),od(e,u)),e=u}}}var zs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);B_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ld(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var z_=37297,k_=0;function V_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var cd=new Xt;function H_(i){ne._getMatrix(cd,ne.workingColorSpace,i);let t=`mat3( ${cd.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case cr:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function hd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+V_(i.getShaderSource(t),o)}else return r}function G_(i,t){let e=H_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var W_={[pc]:"Linear",[mc]:"Reinhard",[gc]:"Cineon",[Ns]:"ACESFilmic",[xc]:"AgX",[vc]:"Neutral",[_c]:"Custom"};function X_(i,t){let e=W_[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var al=new P;function q_(){ne.getLuminanceCoefficients(al);let i=al.x.toFixed(4),t=al.y.toFixed(4),e=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($r).join(`
`)}function Z_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function J_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function $r(i){return i!==""}function ud(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $_=/^[ \t]*#include +<([\w\d./]+)>/gm;function $c(i){return i.replace($_,j_)}var K_=new Map;function j_(i,t){let e=Kt[t];if(e===void 0){let n=K_.get(t);if(n!==void 0)e=Kt[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return $c(e)}var Q_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(i){return i.replace(Q_,tx)}function tx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var ex={[Gi]:"SHADOWMAP_TYPE_PCF",[Ls]:"SHADOWMAP_TYPE_VSM"};function nx(i){return ex[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ix={[Ti]:"ENVMAP_TYPE_CUBE",[Xi]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE_UV"};function sx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ix[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var rx={[Xi]:"ENVMAP_MODE_REFRACTION"};function ax(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":rx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ox={[fc]:"ENVMAP_BLENDING_MULTIPLY",[Au]:"ENVMAP_BLENDING_MIX",[Ru]:"ENVMAP_BLENDING_ADD"};function lx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ox[i.combine]||"ENVMAP_BLENDING_NONE"}function cx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function hx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=nx(e),c=sx(e),d=ax(e),u=lx(e),f=cx(e),h=Y_(e),p=Z_(r),x=s.createProgram(),g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter($r).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter($r).join(`
`),m.length>0&&(m+=`
`)):(g=[pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($r).join(`
`),m=[pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?X_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,G_("linearToOutputTexel",e.outputColorSpace),q_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter($r).join(`
`)),a=$c(a),a=ud(a,e),a=dd(a,e),o=$c(o),o=ud(o,e),o=dd(o,e),a=fd(a),o=fd(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Rc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let w=b+g+a,v=b+m+o,M=ld(s,s.VERTEX_SHADER,w),S=ld(s,s.FRAGMENT_SHADER,v);s.attachShader(x,M),s.attachShader(x,S),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(I){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(M)||"",L=s.getShaderInfoLog(S)||"",B=D.trim(),W=O.trim(),H=L.trim(),tt=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,S);else{let j=hd(s,M,"vertex"),K=hd(s,S,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+B+`
`+j+`
`+K)}else B!==""?kt("WebGLProgram: Program Info Log:",B):(W===""||H==="")&&(q=!1);q&&(I.diagnostics={runnable:tt,programLog:B,vertexShader:{log:W,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(M),s.deleteShader(S),_=new zs(s,x),T=J_(s,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,z_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=S,this}var ux=0,Kc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jc(t),e.set(t,n)),n}},jc=class{constructor(t){this.id=ux++,this.code=t,this.usedTimes=0}};function dx(i){return i===Ci||i===qr||i===Yr}function fx(i,t,e,n,s,r){let a=new Ss,o=new Kc,l=new Set,c=[],d=new Map,u=n.logarithmicDepthBuffer,f=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,T,R,I,D,O){let L=I.fog,B=D.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,tt=t.get(_.envMap||W,H),q=tt&&tt.mapping===kr?tt.image.height:null,j=h[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&kt("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ct=K!==void 0?K.length:0,Et=0;B.morphAttributes.position!==void 0&&(Et=1),B.morphAttributes.normal!==void 0&&(Et=2),B.morphAttributes.color!==void 0&&(Et=3);let se,Qt,re,J;if(j){let xe=Xn[j];se=xe.vertexShader,Qt=xe.fragmentShader}else{se=_.vertexShader,Qt=_.fragmentShader;let xe=o.getVertexShaderStage(_),he=o.getFragmentShaderStage(_);o.update(_,xe,he),re=xe.id,J=he.id}let et=i.getRenderTarget(),_t=i.state.buffers.depth.getReversed(),Vt=D.isInstancedMesh===!0,bt=D.isBatchedMesh===!0,Ht=!!_.map,fe=!!_.matcap,nt=!!tt,st=!!_.aoMap,at=!!_.lightMap,ot=!!_.bumpMap&&_.wireframe===!1,ht=!!_.normalMap,Ot=!!_.displacementMap,Ut=!!_.emissiveMap,Gt=!!_.metalnessMap,qt=!!_.roughnessMap,N=_.anisotropy>0,ce=_.clearcoat>0,te=_.dispersion>0,C=_.retroreflectivity>0,y=_.iridescence>0,z=_.sheen>0,G=_.transmission>0,Y=N&&!!_.anisotropyMap,lt=ce&&!!_.clearcoatMap,ct=ce&&!!_.clearcoatNormalMap,Z=ce&&!!_.clearcoatRoughnessMap,Q=y&&!!_.iridescenceMap,ut=y&&!!_.iridescenceThicknessMap,Lt=z&&!!_.sheenColorMap,mt=z&&!!_.sheenRoughnessMap,dt=!!_.specularMap,Dt=!!_.specularColorMap,Bt=!!_.specularIntensityMap,Yt=G&&!!_.transmissionMap,F=G&&!!_.thicknessMap,ft=!!_.gradientMap,$=!!_.alphaMap,pt=_.alphaTest>0,St=!!_.alphaHash,it=!!_.extensions,Nt=Cn;_.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let It={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:se,fragmentShader:Qt,defines:_.defines,customVertexShaderID:re,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:bt,batchingColor:bt&&D._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&D.instanceColor!==null,instancingMorph:Vt&&D.morphTexture!==null,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ht,matcap:fe,envMap:nt,envMapMode:nt&&tt.mapping,envMapCubeUVHeight:q,aoMap:st,lightMap:at,bumpMap:ot,normalMap:ht,displacementMap:Ot,emissiveMap:Ut,normalMapObjectSpace:ht&&_.normalMapType===Pu,normalMapTangentSpace:ht&&_.normalMapType===nl,packedNormalMap:ht&&_.normalMapType===nl&&dx(_.normalMap.format),metalnessMap:Gt,roughnessMap:qt,anisotropy:N,anisotropyMap:Y,clearcoat:ce,clearcoatMap:lt,clearcoatNormalMap:ct,clearcoatRoughnessMap:Z,dispersion:te,retroreflection:C,iridescence:y,iridescenceMap:Q,iridescenceThicknessMap:ut,sheen:z,sheenColorMap:Lt,sheenRoughnessMap:mt,specularMap:dt,specularColorMap:Dt,specularIntensityMap:Bt,transmission:G,transmissionMap:Yt,thicknessMap:F,gradientMap:ft,opaque:_.transparent===!1&&_.blending===Ds&&_.alphaToCoverage===!1,alphaMap:$,alphaTest:pt,alphaHash:St,combine:_.combine,mapUv:Ht&&p(_.map.channel),aoMapUv:st&&p(_.aoMap.channel),lightMapUv:at&&p(_.lightMap.channel),bumpMapUv:ot&&p(_.bumpMap.channel),normalMapUv:ht&&p(_.normalMap.channel),displacementMapUv:Ot&&p(_.displacementMap.channel),emissiveMapUv:Ut&&p(_.emissiveMap.channel),metalnessMapUv:Gt&&p(_.metalnessMap.channel),roughnessMapUv:qt&&p(_.roughnessMap.channel),anisotropyMapUv:Y&&p(_.anisotropyMap.channel),clearcoatMapUv:lt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:ct&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:mt&&p(_.sheenRoughnessMap.channel),specularMapUv:dt&&p(_.specularMap.channel),specularColorMapUv:Dt&&p(_.specularColorMap.channel),specularIntensityMapUv:Bt&&p(_.specularIntensityMap.channel),transmissionMapUv:Yt&&p(_.transmissionMap.channel),thicknessMapUv:F&&p(_.thicknessMap.channel),alphaMapUv:$&&p(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ht||N),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!B.attributes.uv&&(Ht||$),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&ht===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_t,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Et,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Ht&&_.map.isVideoTexture===!0&&ne.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:Ut&&_.emissiveMap.isVideoTexture===!0&&ne.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ce,flipSided:_.side===Qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:it&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&_.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return It.vertexUv1s=l.has(1),It.vertexUv2s=l.has(2),It.vertexUv3s=l.has(3),l.clear(),It}function g(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)T.push(R),T.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(m(T,_),b(T,_),T.push(i.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function m(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function b(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function w(_){let T=h[_.type],R;if(T){let I=Xn[T];R=Ju.clone(I.uniforms)}else R=_.uniforms;return R}function v(_,T){let R=d.get(T);return R!==void 0?++R.usedTimes:(R=new hx(i,T,_,s),c.push(R),d.set(T,R)),R}function M(_){if(--_.usedTimes===0){let T=c.indexOf(_);c[T]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:w,acquireProgram:v,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:A}}function px(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function mx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function md(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function gd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,p,x,g,m){let b=i[t];return b===void 0?(b={id:f.id,object:f,geometry:h,material:p,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:m},i[t]=b):(b.id=f.id,b.object=f,b.geometry=h,b.material=p,b.materialVariant=a(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=g,b.group=m),t++,b}function l(f,h,p,x,g,m,b){b.reversedDepth===!0&&(g=-g);let w=o(f,h,p,x,g,m);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):e.push(w)}function c(f,h,p,x,g,m){let b=o(f,h,p,x,g,m);p.transmission>0?n.unshift(b):p.transparent===!0?s.unshift(b):e.unshift(b)}function d(f,h){e.length>1&&e.sort(f||mx),n.length>1&&n.sort(h||md),s.length>1&&s.sort(h||md)}function u(){for(let f=t,h=i.length;f<h;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:d}}function gx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new gd,i.set(n,[a])):s>=r.length?(a=new gd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function _x(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new P,color:new Ft};break;case"SpotLight":e={position:new P,direction:new P,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function xx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var vx=0;function yx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mx(i){let t=new _x,e=xx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new le,a=new le;function o(c){let d=0,u=0,f=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let h=0,p=0,x=0,g=0,m=0,b=0,w=0,v=0,M=0,S=0,A=0,_=0,T=0,R=0;c.sort(yx);for(let D=0,O=c.length;D<O;D++){let L=c[D],B=L.color,W=L.intensity,H=L.distance,tt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ci?tt=L.shadow.map.texture:tt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=B.r*W,u+=B.g*W,f+=B.b*W;else if(L.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(L.sh.coefficients[q],W);R++}else if(L.isSunLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,K=e.get(L);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[p]=K,n.sunShadowMap[p]=tt;let Ct=j.getViewportCount();for(let Et=0;Et<Ct;Et++)n.sunShadowMatrix[x+Et]=j.getMatrix(Et),n.sunShadowCascade[x+Et]=j._cascadeData[Et];x+=Ct,p++}n.sun[h]=q,h++}else if(L.isDirectionalLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,K=e.get(L);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,n.directionalShadow[g]=K,n.directionalShadowMap[g]=tt,n.directionalShadowMatrix[g]=L.shadow.matrix,M++}n.directional[g]=q,g++}else if(L.isSpotLight){let q=t.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(B).multiplyScalar(W),q.distance=H,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,n.spot[b]=q;let j=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,j.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[b]=j.matrix,L.castShadow){let K=e.get(L);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,n.spotShadow[b]=K,n.spotShadowMap[b]=tt,A++}b++}else if(L.isRectAreaLight){let q=t.get(L);q.color.copy(B).multiplyScalar(W),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),n.rectArea[w]=q,w++}else if(L.isPointLight){let q=t.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let j=L.shadow,K=e.get(L);K.shadowIntensity=j.intensity,K.shadowBias=j.bias,K.shadowNormalBias=j.normalBias,K.shadowRadius=j.radius,K.shadowMapSize=j.mapSize,K.shadowCameraNear=j.camera.near,K.shadowCameraFar=j.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=tt,n.pointShadowMatrix[m]=L.shadow.matrix,S++}n.point[m]=q,m++}else if(L.isHemisphereLight){let q=t.get(L);q.skyColor.copy(L.color).multiplyScalar(W),q.groundColor.copy(L.groundColor).multiplyScalar(W),n.hemi[v]=q,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;let I=n.hash;(I.sunLength!==h||I.directionalLength!==g||I.pointLength!==m||I.spotLength!==b||I.rectAreaLength!==w||I.hemiLength!==v||I.numSunShadows!==p||I.numDirectionalShadows!==M||I.numPointShadows!==S||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=g,n.spot.length=b,n.rectArea.length=w,n.point.length=m,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-T,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,I.sunLength=h,I.directionalLength=g,I.pointLength=m,I.spotLength=b,I.rectAreaLength=w,I.hemiLength=v,I.numSunShadows=p,I.numDirectionalShadows=M,I.numPointShadows=S,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=R,n.version=vx++)}function l(c,d){let u=0,f=0,h=0,p=0,x=0,g=0,m=d.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let v=c[b];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(v.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(v.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(v.isPointLight){let M=n.point[h];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function _d(i){let t=new Mx(i),e=[],n=[],s=[];function r(f){u.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function d(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Sx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new _d(i),t.set(s,[o])):r>=a.length?(o=new _d(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ex=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,wx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],Tx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],xd=new le,Jr=new P,Xc=new P;function Ax(i,t,e){let n=new As,s=new rt,r=new rt,a=new be,o=new Qa,l=new to,c={},d=e.maxTextureSize,u={[wi]:Qe,[Qe]:wi,[Ce]:Ce},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:bx,fragmentShader:Ex}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new _e;p.setAttribute("position",new Oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Se(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gi;let m=this.type;this.render=function(S,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;this.type===lu&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gi);let T=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Gn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=m!==this.type;O&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=S.length;L<B;L++){let W=S[L],H=W.shadow;if(H===void 0){kt("WebGLShadowMap:",W,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let tt=H.getFrameExtents();s.multiply(tt),r.copy(H.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/tt.x),s.x=r.x*tt.x,H.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/tt.y),s.y=r.y*tt.y,H.mapSize.y=r.y));let q=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=q,H.map===null||O===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ls){if(W.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new en(s.x,s.y,{format:Ci,type:Pn,minFilter:ke,magFilter:ke,generateMipmaps:!1}),H.map.texture.name=W.name+".shadowMap",H.map.depthTexture=new yi(s.x,s.y,vn),H.map.depthTexture.name=W.name+".shadowMapDepth",H.map.depthTexture.format=Vn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Be,H.map.depthTexture.magFilter=Be}else W.isPointLight?(H.map=new ll(s.x),H.map.depthTexture=new Xa(s.x,In)):(H.map=new en(s.x,s.y),H.map.depthTexture=new yi(s.x,s.y,In)),H.map.depthTexture.name=W.name+".shadowMap",H.map.depthTexture.format=Vn,this.type===Gi?(H.map.depthTexture.compareFunction=q?sl:il,H.map.depthTexture.minFilter=ke,H.map.depthTexture.magFilter=ke):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Be,H.map.depthTexture.magFilter=Be);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let j=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();W.isPointLight!==!0&&H.updateMatrices(W,_);for(let K=0;K<j;K++){let Ct=H.getCamera(K);if(W.isPointLight){let Et=H.camera,se=H.matrix,Qt=W.distance||Et.far;Qt!==Et.far&&(Et.far=Qt,Et.updateProjectionMatrix()),Jr.setFromMatrixPosition(W.matrixWorld),Et.position.copy(Jr),Xc.copy(Et.position),Xc.add(wx[K]),Et.up.copy(Tx[K]),Et.lookAt(Xc),Et.updateMatrixWorld(),se.makeTranslation(-Jr.x,-Jr.y,-Jr.z),xd.multiplyMatrices(Et.projectionMatrix,Et.matrixWorldInverse),H._frustum.setFromProjectionMatrix(xd,Et.coordinateSystem,Et.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,K),i.clear();else{K===0&&(i.setRenderTarget(H.map),i.clear());let Et=H.getViewport(K);a.set(r.x*Et.x,r.y*Et.y,r.x*Et.z,r.y*Et.w),D.viewport(a)}n=H.getFrustum(K),v(A,_,Ct,W,this.type)}H.isPointLightShadow!==!0&&this.type===Ls&&b(H,_),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(T,R,I)};function b(S,A){let _=t.update(x);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,h.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),S.mapPass===null?S.mapPass=new en(s.x,s.y,{format:Ci,type:Pn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(A,null,_,f,x,null),h.uniforms.shadow_pass.value=S.mapPass.texture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(A,null,_,h,x,null)}function w(S,A,_,T){let R=null,I=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)R=I;else if(R=_.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=R.uuid,O=A.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let B=L[O];B===void 0&&(B=R.clone(),L[O]=B,A.addEventListener("dispose",M)),R=B}if(R.visible=A.visible,R.wireframe=A.wireframe,T===Ls?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:u[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let D=i.properties.get(R);D.light=_}return R}function v(S,A,_,T,R){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Ls)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let O=t.update(S),L=S.material;if(Array.isArray(L)){let B=O.groups;for(let W=0,H=B.length;W<H;W++){let tt=B[W],q=L[tt.materialIndex];if(q&&q.visible){let j=w(S,q,T,R);S.onBeforeShadow(i,S,A,_,O,j,tt),i.renderBufferDirect(_,null,O,j,S,tt),S.onAfterShadow(i,S,A,_,O,j,tt)}}}else if(L.visible){let B=w(S,L,T,R);S.onBeforeShadow(i,S,A,_,O,B,null),i.renderBufferDirect(_,null,O,B,S,null),S.onAfterShadow(i,S,A,_,O,B,null)}}let D=S.children;for(let O=0,L=D.length;O<L;O++)v(D[O],A,_,T,R)}function M(S){S.target.removeEventListener("dispose",M);for(let _ in c){let T=c[_],R=S.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function Rx(i,t){function e(){let F=!1,ft=new be,$=null,pt=new be(0,0,0,0);return{setMask:function(St){$!==St&&!F&&(i.colorMask(St,St,St,St),$=St)},setLocked:function(St){F=St},setClear:function(St,it,Nt,It,xe){xe===!0&&(St*=It,it*=It,Nt*=It),ft.set(St,it,Nt,It),pt.equals(ft)===!1&&(i.clearColor(St,it,Nt,It),pt.copy(ft))},reset:function(){F=!1,$=null,pt.set(-1,0,0,0)}}}function n(){let F=!1,ft=!1,$=null,pt=null,St=null;return{setReversed:function(it){if(ft!==it){let Nt=t.get("EXT_clip_control");it?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),ft=it;let It=St;St=null,this.setClear(It)}},getReversed:function(){return ft},setTest:function(it){it?et(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(it){$!==it&&!F&&(i.depthMask(it),$=it)},setFunc:function(it){if(ft&&(it=Hu[it]),pt!==it){switch(it){case La:i.depthFunc(i.NEVER);break;case Da:i.depthFunc(i.ALWAYS);break;case Na:i.depthFunc(i.LESS);break;case _s:i.depthFunc(i.LEQUAL);break;case Ua:i.depthFunc(i.EQUAL);break;case Fa:i.depthFunc(i.GEQUAL);break;case Oa:i.depthFunc(i.GREATER);break;case Ba:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=it}},setLocked:function(it){F=it},setClear:function(it){St!==it&&(St=it,ft&&(it=1-it),i.clearDepth(it))},reset:function(){F=!1,$=null,pt=null,St=null,ft=!1}}}function s(){let F=!1,ft=null,$=null,pt=null,St=null,it=null,Nt=null,It=null,xe=null;return{setTest:function(he){F||(he?et(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(he){ft!==he&&!F&&(i.stencilMask(he),ft=he)},setFunc:function(he,bn,Un){($!==he||pt!==bn||St!==Un)&&(i.stencilFunc(he,bn,Un),$=he,pt=bn,St=Un)},setOp:function(he,bn,Un){(it!==he||Nt!==bn||It!==Un)&&(i.stencilOp(he,bn,Un),it=he,Nt=bn,It=Un)},setLocked:function(he){F=he},setClear:function(he){xe!==he&&(i.clearStencil(he),xe=he)},reset:function(){F=!1,ft=null,$=null,pt=null,St=null,it=null,Nt=null,It=null,xe=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},u={},f={},h=new WeakMap,p=[],x=null,g=!1,m=null,b=null,w=null,v=null,M=null,S=null,A=null,_=new Ft(0,0,0),T=0,R=!1,I=null,D=null,O=null,L=null,B=null,W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,tt=0,q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=tt>=1):q.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=tt>=2);let j=null,K={},Ct=i.getParameter(i.SCISSOR_BOX),Et=i.getParameter(i.VIEWPORT),se=new be().fromArray(Ct),Qt=new be().fromArray(Et);function re(F,ft,$,pt){let St=new Uint8Array(4),it=i.createTexture();i.bindTexture(F,it),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<$;Nt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(ft+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return it}let J={};J[i.TEXTURE_2D]=re(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=re(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=re(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=re(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(_s),ot(!1),ht(oc),et(i.CULL_FACE),st(Gn);function et(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function _t(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function Vt(F,ft){return f[F]!==ft?(i.bindFramebuffer(F,ft),f[F]=ft,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ft),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function bt(F,ft){let $=p,pt=!1;if(F){$=h.get(ft),$===void 0&&($=[],h.set(ft,$));let St=F.textures;if($.length!==St.length||$[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Nt=St.length;it<Nt;it++)$[it]=i.COLOR_ATTACHMENT0+it;$.length=St.length,pt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,pt=!0);pt&&i.drawBuffers($)}function Ht(F){return x!==F?(i.useProgram(F),x=F,!0):!1}let fe={[Wi]:i.FUNC_ADD,[hu]:i.FUNC_SUBTRACT,[uu]:i.FUNC_REVERSE_SUBTRACT};fe[du]=i.MIN,fe[fu]=i.MAX;let nt={[pu]:i.ZERO,[mu]:i.ONE,[gu]:i.SRC_COLOR,[uc]:i.SRC_ALPHA,[Su]:i.SRC_ALPHA_SATURATE,[yu]:i.DST_COLOR,[xu]:i.DST_ALPHA,[_u]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[Mu]:i.ONE_MINUS_DST_COLOR,[vu]:i.ONE_MINUS_DST_ALPHA,[bu]:i.CONSTANT_COLOR,[Eu]:i.ONE_MINUS_CONSTANT_COLOR,[wu]:i.CONSTANT_ALPHA,[Tu]:i.ONE_MINUS_CONSTANT_ALPHA};function st(F,ft,$,pt,St,it,Nt,It,xe,he){if(F===Gn){g===!0&&(_t(i.BLEND),g=!1);return}if(g===!1&&(et(i.BLEND),g=!0),F!==cu){if(F!==m||he!==R){if((b!==Wi||M!==Wi)&&(i.blendEquation(i.FUNC_ADD),b=Wi,M=Wi),he)switch(F){case Ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lc:i.blendFunc(i.ONE,i.ONE);break;case cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",F);break}else switch(F){case Ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case cc:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hc:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",F);break}w=null,v=null,S=null,A=null,_.set(0,0,0),T=0,m=F,R=he}return}St=St||ft,it=it||$,Nt=Nt||pt,(ft!==b||St!==M)&&(i.blendEquationSeparate(fe[ft],fe[St]),b=ft,M=St),($!==w||pt!==v||it!==S||Nt!==A)&&(i.blendFuncSeparate(nt[$],nt[pt],nt[it],nt[Nt]),w=$,v=pt,S=it,A=Nt),(It.equals(_)===!1||xe!==T)&&(i.blendColor(It.r,It.g,It.b,xe),_.copy(It),T=xe),m=F,R=!1}function at(F,ft){F.side===Ce?_t(i.CULL_FACE):et(i.CULL_FACE);let $=F.side===Qe;ft&&($=!$),ot($),F.blending===Ds&&F.transparent===!1?st(Gn):st(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let pt=F.stencilWrite;o.setTest(pt),pt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ut(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function ht(F){F!==au?(et(i.CULL_FACE),F!==D&&(F===oc?i.cullFace(i.BACK):F===ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),D=F}function Ot(F){F!==O&&(H&&i.lineWidth(F),O=F)}function Ut(F,ft,$){F?(et(i.POLYGON_OFFSET_FILL),(L!==ft||B!==$)&&(L=ft,B=$,a.getReversed()&&(ft=-ft),i.polygonOffset(ft,$))):_t(i.POLYGON_OFFSET_FILL)}function Gt(F){F?et(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function qt(F){F===void 0&&(F=i.TEXTURE0+W-1),j!==F&&(i.activeTexture(F),j=F)}function N(F,ft,$){$===void 0&&(j===null?$=i.TEXTURE0+W-1:$=j);let pt=K[$];pt===void 0&&(pt={type:void 0,texture:void 0},K[$]=pt),(pt.type!==F||pt.texture!==ft)&&(j!==$&&(i.activeTexture($),j=$),i.bindTexture(F,ft||J[F]),pt.type=F,pt.texture=ft)}function ce(){let F=K[j];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{i.compressedTexImage2D(...arguments)}catch(F){zt("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){zt("WebGLState:",F)}}function y(){try{i.texSubImage2D(...arguments)}catch(F){zt("WebGLState:",F)}}function z(){try{i.texSubImage3D(...arguments)}catch(F){zt("WebGLState:",F)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(F){zt("WebGLState:",F)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(F){zt("WebGLState:",F)}}function lt(){try{i.texStorage2D(...arguments)}catch(F){zt("WebGLState:",F)}}function ct(){try{i.texStorage3D(...arguments)}catch(F){zt("WebGLState:",F)}}function Z(){try{i.texImage2D(...arguments)}catch(F){zt("WebGLState:",F)}}function Q(){try{i.texImage3D(...arguments)}catch(F){zt("WebGLState:",F)}}function ut(F){return u[F]!==void 0?u[F]:i.getParameter(F)}function Lt(F,ft){u[F]!==ft&&(i.pixelStorei(F,ft),u[F]=ft)}function mt(F){se.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),se.copy(F))}function dt(F){Qt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Qt.copy(F))}function Dt(F,ft){let $=c.get(ft);$===void 0&&($=new WeakMap,c.set(ft,$));let pt=$.get(F);pt===void 0&&(pt=i.getUniformBlockIndex(ft,F.name),$.set(F,pt))}function Bt(F,ft){let pt=c.get(ft).get(F);l.get(ft)!==pt&&(i.uniformBlockBinding(ft,pt,F.__bindingPointIndex),l.set(ft,pt))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},u={},j=null,K={},f={},h=new WeakMap,p=[],x=null,g=!1,m=null,b=null,w=null,v=null,M=null,S=null,A=null,_=new Ft(0,0,0),T=0,R=!1,I=null,D=null,O=null,L=null,B=null,se.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:_t,bindFramebuffer:Vt,drawBuffers:bt,useProgram:Ht,setBlending:st,setMaterial:at,setFlipSided:ot,setCullFace:ht,setLineWidth:Ot,setPolygonOffset:Ut,setScissorTest:Gt,activeTexture:qt,bindTexture:N,unbindTexture:ce,compressedTexImage2D:te,compressedTexImage3D:C,texImage2D:Z,texImage3D:Q,pixelStorei:Lt,getParameter:ut,updateUBOMapping:Dt,uniformBlockBinding:Bt,texStorage2D:lt,texStorage3D:ct,texSubImage2D:y,texSubImage3D:z,compressedTexSubImage2D:G,compressedTexSubImage3D:Y,scissor:mt,viewport:dt,reset:Yt}}function Cx(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,d=new WeakMap,u=new Set,f,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,y){return p?new OffscreenCanvas(C,y):hr("canvas")}function g(C,y,z){let G=1,Y=te(C);if((Y.width>z||Y.height>z)&&(G=z/Math.max(Y.width,Y.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let lt=Math.floor(G*Y.width),ct=Math.floor(G*Y.height);f===void 0&&(f=x(lt,ct));let Z=y?x(lt,ct):f;return Z.width=lt,Z.height=ct,Z.getContext("2d").drawImage(C,0,0,lt,ct),kt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+lt+"x"+ct+")."),Z}else return"data"in C&&kt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),C;return C}function m(C){return C.generateMipmaps}function b(C){i.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(C,y,z,G,Y,lt=!1){if(C!==null){if(i[C]!==void 0)return i[C];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct;G&&(ct=t.get("EXT_texture_norm16"),ct||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===i.RED&&(z===i.FLOAT&&(Z=i.R32F),z===i.HALF_FLOAT&&(Z=i.R16F),z===i.UNSIGNED_BYTE&&(Z=i.R8),z===i.UNSIGNED_SHORT&&ct&&(Z=ct.R16_EXT),z===i.SHORT&&ct&&(Z=ct.R16_SNORM_EXT)),y===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.R8UI),z===i.UNSIGNED_SHORT&&(Z=i.R16UI),z===i.UNSIGNED_INT&&(Z=i.R32UI),z===i.BYTE&&(Z=i.R8I),z===i.SHORT&&(Z=i.R16I),z===i.INT&&(Z=i.R32I)),y===i.RG&&(z===i.FLOAT&&(Z=i.RG32F),z===i.HALF_FLOAT&&(Z=i.RG16F),z===i.UNSIGNED_BYTE&&(Z=i.RG8),z===i.UNSIGNED_SHORT&&ct&&(Z=ct.RG16_EXT),z===i.SHORT&&ct&&(Z=ct.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RG8UI),z===i.UNSIGNED_SHORT&&(Z=i.RG16UI),z===i.UNSIGNED_INT&&(Z=i.RG32UI),z===i.BYTE&&(Z=i.RG8I),z===i.SHORT&&(Z=i.RG16I),z===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),z===i.UNSIGNED_INT&&(Z=i.RGB32UI),z===i.BYTE&&(Z=i.RGB8I),z===i.SHORT&&(Z=i.RGB16I),z===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),z===i.UNSIGNED_INT&&(Z=i.RGBA32UI),z===i.BYTE&&(Z=i.RGBA8I),z===i.SHORT&&(Z=i.RGBA16I),z===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&(z===i.UNSIGNED_SHORT&&ct&&(Z=ct.RGB16_EXT),z===i.SHORT&&ct&&(Z=ct.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),y===i.RGBA){let Q=lt?cr:ne.getTransfer(Y);z===i.FLOAT&&(Z=i.RGBA32F),z===i.HALF_FLOAT&&(Z=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Z=Q===de?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&ct&&(Z=ct.RGBA16_EXT),z===i.SHORT&&ct&&(Z=ct.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function M(C,y){let z;return C?y===null||y===In||y===Fs?z=i.DEPTH24_STENCIL8:y===vn?z=i.DEPTH32F_STENCIL8:y===Us&&(z=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===In||y===Fs?z=i.DEPTH_COMPONENT24:y===vn?z=i.DEPTH_COMPONENT32F:y===Us&&(z=i.DEPTH_COMPONENT16),z}function S(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Be&&C.minFilter!==ke?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){let y=C.target;y.removeEventListener("dispose",A),T(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&u.delete(y)}function _(C){let y=C.target;y.removeEventListener("dispose",_),I(y)}function T(C){let y=n.get(C);if(y.__webglInit===void 0)return;let z=C.source,G=h.get(z);if(G){let Y=G[y.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(C),Object.keys(G).length===0&&h.delete(z)}n.remove(C)}function R(C){let y=n.get(C);i.deleteTexture(y.__webglTexture);let z=C.source,G=h.get(z);delete G[y.__cacheKey],a.memory.textures--}function I(C){let y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let Y=0;Y<y.__webglFramebuffer[G].length;Y++)i.deleteFramebuffer(y.__webglFramebuffer[G][Y]);else i.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)i.deleteFramebuffer(y.__webglFramebuffer[G]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let z=C.textures;for(let G=0,Y=z.length;G<Y;G++){let lt=n.get(z[G]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),a.memory.textures--),n.remove(z[G])}n.remove(C)}let D=0;function O(){D=0}function L(){return D}function B(C){D=C}function W(){let C=D;return C>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,C}function H(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function tt(C,y){let z=n.get(C);if(C.isVideoTexture&&N(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){let G=C.image;if(G===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(z,C,y);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+y)}function q(C,y){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){_t(z,C,y);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+y)}function j(C,y){let z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){_t(z,C,y);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+y)}function K(C,y){let z=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&z.__version!==C.version){Vt(z,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+y)}let Ct={[za]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[ka]:i.MIRRORED_REPEAT},Et={[Be]:i.NEAREST,[Cu]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[xo]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},se={[Du]:i.NEVER,[Bu]:i.ALWAYS,[Nu]:i.LESS,[il]:i.LEQUAL,[Uu]:i.EQUAL,[sl]:i.GEQUAL,[Fu]:i.GREATER,[Ou]:i.NOTEQUAL};function Qt(C,y){if(y.type===vn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===ke||y.magFilter===xo||y.magFilter===Vr||y.magFilter===Ai||y.minFilter===ke||y.minFilter===xo||y.minFilter===Vr||y.minFilter===Ai)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Ct[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Ct[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Ct[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Et[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Et[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,se[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Be||y.minFilter!==Vr&&y.minFilter!==Ai||y.type===vn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function re(C,y){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));let G=y.source,Y=h.get(G);Y===void 0&&(Y={},h.set(G,Y));let lt=H(y);if(lt!==C.__cacheKey){Y[lt]===void 0&&(Y[lt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Y[lt].usedTimes++;let ct=Y[C.__cacheKey];ct!==void 0&&(Y[C.__cacheKey].usedTimes--,ct.usedTimes===0&&R(y)),C.__cacheKey=lt,C.__webglTexture=Y[lt].texture}return z}function J(C,y,z){return Math.floor(Math.floor(C/z)/y)}function et(C,y,z,G){let lt=C.updateRanges;if(lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,z,G,y.data);else{lt.sort((Lt,mt)=>Lt.start-mt.start);let ct=0;for(let Lt=1;Lt<lt.length;Lt++){let mt=lt[ct],dt=lt[Lt],Dt=mt.start+mt.count,Bt=J(dt.start,y.width,4),Yt=J(mt.start,y.width,4);dt.start<=Dt+1&&Bt===Yt&&J(dt.start+dt.count-1,y.width,4)===Bt?mt.count=Math.max(mt.count,dt.start+dt.count-mt.start):(++ct,lt[ct]=dt)}lt.length=ct+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Lt=0,mt=lt.length;Lt<mt;Lt++){let dt=lt[Lt],Dt=Math.floor(dt.start/4),Bt=Math.ceil(dt.count/4),Yt=Dt%y.width,F=Math.floor(Dt/y.width),ft=Bt,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Yt,F,ft,$,z,G,y.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function _t(C,y,z){let G=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=i.TEXTURE_3D);let Y=re(C,y),lt=y.source;e.bindTexture(G,C.__webglTexture,i.TEXTURE0+z);let ct=n.get(lt);if(lt.version!==ct.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let $=ne.getPrimaries(ne.workingColorSpace),pt=y.colorSpace===oi?null:ne.getPrimaries(y.colorSpace),St=y.colorSpace===oi||$===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let Q=g(y.image,!1,s.maxTextureSize);Q=ce(y,Q);let ut=r.convert(y.format,y.colorSpace),Lt=r.convert(y.type),mt=v(y.internalFormat,ut,Lt,y.normalized,y.colorSpace,y.isVideoTexture);Qt(G,y);let dt,Dt=y.mipmaps,Bt=y.isVideoTexture!==!0,Yt=ct.__version===void 0||Y===!0,F=lt.dataReady,ft=S(y,Q);if(y.isDepthTexture)mt=M(y.format===Ri,y.type),Yt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,mt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,mt,Q.width,Q.height,0,ut,Lt,null));else if(y.isDataTexture)if(Dt.length>0){Bt&&Yt&&e.texStorage2D(i.TEXTURE_2D,ft,mt,Dt[0].width,Dt[0].height);for(let $=0,pt=Dt.length;$<pt;$++)dt=Dt[$],Bt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,ut,Lt,dt.data):e.texImage2D(i.TEXTURE_2D,$,mt,dt.width,dt.height,0,ut,Lt,dt.data);y.generateMipmaps=!1}else Bt?(Yt&&e.texStorage2D(i.TEXTURE_2D,ft,mt,Q.width,Q.height),F&&et(y,Q,ut,Lt)):e.texImage2D(i.TEXTURE_2D,0,mt,Q.width,Q.height,0,ut,Lt,Q.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Bt&&Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,mt,Dt[0].width,Dt[0].height,Q.depth);for(let $=0,pt=Dt.length;$<pt;$++)if(dt=Dt[$],y.format!==yn)if(ut!==null)if(Bt){if(F)if(y.layerUpdates.size>0){let St=Nc(dt.width,dt.height,y.format,y.type);for(let it of y.layerUpdates){let Nt=dt.data.subarray(it*St/dt.data.BYTES_PER_ELEMENT,(it+1)*St/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,it,dt.width,dt.height,1,ut,Nt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,Q.depth,ut,dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,mt,dt.width,dt.height,Q.depth,0,dt.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,Q.depth,ut,Lt,dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,mt,dt.width,dt.height,Q.depth,0,ut,Lt,dt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Bt&&Yt&&e.texStorage2D(i.TEXTURE_2D,ft,mt,Dt[0].width,Dt[0].height);for(let $=0,pt=Dt.length;$<pt;$++)dt=Dt[$],y.format!==yn?ut!==null?Bt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,ut,dt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,mt,dt.width,dt.height,0,dt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,dt.width,dt.height,ut,Lt,dt.data):e.texImage2D(i.TEXTURE_2D,$,mt,dt.width,dt.height,0,ut,Lt,dt.data)}else if(y.isDataArrayTexture)if(Bt){if(Yt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,mt,Q.width,Q.height,Q.depth),F)if(y.layerUpdates.size>0){let $=Nc(Q.width,Q.height,y.format,y.type);for(let pt of y.layerUpdates){let St=Q.data.subarray(pt*$/Q.data.BYTES_PER_ELEMENT,(pt+1)*$/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,Q.width,Q.height,1,ut,Lt,St)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ut,Lt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,Q.width,Q.height,Q.depth,0,ut,Lt,Q.data);else if(y.isData3DTexture)Bt?(Yt&&e.texStorage3D(i.TEXTURE_3D,ft,mt,Q.width,Q.height,Q.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ut,Lt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,mt,Q.width,Q.height,Q.depth,0,ut,Lt,Q.data);else if(y.isFramebufferTexture){if(Yt)if(Bt)e.texStorage2D(i.TEXTURE_2D,ft,mt,Q.width,Q.height);else{let $=Q.width,pt=Q.height;for(let St=0;St<ft;St++)e.texImage2D(i.TEXTURE_2D,St,mt,$,pt,0,ut,Lt,null),$>>=1,pt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Q.parentNode!==$){$.appendChild(Q),u.add(y),$.onpaint=pt=>{let St=pt.changedElements;for(let it of u)St.includes(it.image)&&(it.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let St=i.RGBA,it=i.RGBA,Nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,St,it,Nt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Bt&&Yt){let $=te(Dt[0]);e.texStorage2D(i.TEXTURE_2D,ft,mt,$.width,$.height)}for(let $=0,pt=Dt.length;$<pt;$++)dt=Dt[$],Bt?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ut,Lt,dt):e.texImage2D(i.TEXTURE_2D,$,mt,ut,Lt,dt);y.generateMipmaps=!1}else if(Bt){if(Yt){let $=te(Q);e.texStorage2D(i.TEXTURE_2D,ft,mt,$.width,$.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Lt,Q)}else e.texImage2D(i.TEXTURE_2D,0,mt,ut,Lt,Q);m(y)&&b(G),ct.__version=lt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Vt(C,y,z){if(y.image.length!==6)return;let G=re(C,y),Y=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);let lt=n.get(Y);if(Y.version!==lt.__version||G===!0){e.activeTexture(i.TEXTURE0+z);let ct=ne.getPrimaries(ne.workingColorSpace),Z=y.colorSpace===oi?null:ne.getPrimaries(y.colorSpace),Q=y.colorSpace===oi||ct===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ut=y.isCompressedTexture||y.image[0].isCompressedTexture,Lt=y.image[0]&&y.image[0].isDataTexture,mt=[];for(let it=0;it<6;it++)!ut&&!Lt?mt[it]=g(y.image[it],!0,s.maxCubemapSize):mt[it]=Lt?y.image[it].image:y.image[it],mt[it]=ce(y,mt[it]);let dt=mt[0],Dt=r.convert(y.format,y.colorSpace),Bt=r.convert(y.type),Yt=v(y.internalFormat,Dt,Bt,y.normalized,y.colorSpace),F=y.isVideoTexture!==!0,ft=lt.__version===void 0||G===!0,$=Y.dataReady,pt=S(y,dt);Qt(i.TEXTURE_CUBE_MAP,y);let St;if(ut){F&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Yt,dt.width,dt.height);for(let it=0;it<6;it++){St=mt[it].mipmaps;for(let Nt=0;Nt<St.length;Nt++){let It=St[Nt];y.format!==yn?Dt!==null?F?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,0,0,It.width,It.height,Dt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,Yt,It.width,It.height,0,It.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,0,0,It.width,It.height,Dt,Bt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt,Yt,It.width,It.height,0,Dt,Bt,It.data)}}}else{if(St=y.mipmaps,F&&ft){St.length>0&&pt++;let it=te(mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Yt,it.width,it.height)}for(let it=0;it<6;it++)if(Lt){F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,mt[it].width,mt[it].height,Dt,Bt,mt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Yt,mt[it].width,mt[it].height,0,Dt,Bt,mt[it].data);for(let Nt=0;Nt<St.length;Nt++){let xe=St[Nt].image[it].image;F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,0,0,xe.width,xe.height,Dt,Bt,xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,Yt,xe.width,xe.height,0,Dt,Bt,xe.data)}}else{F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Dt,Bt,mt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Yt,Dt,Bt,mt[it]);for(let Nt=0;Nt<St.length;Nt++){let It=St[Nt];F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,0,0,Dt,Bt,It.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Nt+1,Yt,Dt,Bt,It.image[it])}}}m(y)&&b(i.TEXTURE_CUBE_MAP),lt.__version=Y.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function bt(C,y,z,G,Y,lt){let ct=r.convert(z.format,z.colorSpace),Z=r.convert(z.type),Q=v(z.internalFormat,ct,Z,z.normalized,z.colorSpace),ut=n.get(y),Lt=n.get(z);if(Lt.__renderTarget=y,!ut.__hasExternalTextures){let mt=Math.max(1,y.width>>lt),dt=Math.max(1,y.height>>lt);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,lt,Q,mt,dt,y.depth,0,ct,Z,null):e.texImage2D(Y,lt,Q,mt,dt,0,ct,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,Y,Lt.__webglTexture,0,Gt(y)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,Y,Lt.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(C,y,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){let G=y.depthTexture,Y=G&&G.isDepthTexture?G.type:null,lt=M(y.stencilBuffer,Y),ct=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;qt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(y),lt,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(y),lt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,lt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,C)}else{let G=y.textures;for(let Y=0;Y<G.length;Y++){let lt=G[Y],ct=r.convert(lt.format,lt.colorSpace),Z=r.convert(lt.type),Q=v(lt.internalFormat,ct,Z,lt.normalized,lt.colorSpace);qt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt(y),Q,y.width,y.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt(y),Q,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Q,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(C,y,z){let G=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(y.depthTexture);if(Y.__renderTarget=y,(!Y.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,y.depthTexture);let ut=r.convert(y.depthTexture.format),Lt=r.convert(y.depthTexture.type),mt;y.depthTexture.format===Vn?mt=i.DEPTH_COMPONENT24:y.depthTexture.format===Ri&&(mt=i.DEPTH24_STENCIL8);for(let dt=0;dt<6;dt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,mt,y.width,y.height,0,ut,Lt,null)}}else tt(y.depthTexture,0);let lt=Y.__webglTexture,ct=Gt(y),Z=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,Q=y.depthTexture.format===Ri?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Vn)qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,lt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,lt,0);else if(y.depthTexture.format===Ri)qt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,Z,lt,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,Q,Z,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nt(C){let y=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){let Y=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",Y)};G.addEventListener("dispose",Y),y.__depthDisposeCallback=Y}y.__boundDepthTexture=G}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(z)for(let G=0;G<6;G++)fe(y.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?fe(y.__webglFramebuffer[0],C,0):fe(y.__webglFramebuffer,C,0)}else if(z){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=i.createRenderbuffer(),Ht(y.__webglDepthbuffer[G],C,!1);else{let Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,lt)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ht(y.__webglDepthbuffer,C,!1);else{let Y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(C,y,z){let G=n.get(C);y!==void 0&&bt(G.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&nt(C)}function at(C){let y=C.texture,z=n.get(C),G=n.get(y);C.addEventListener("dispose",_);let Y=C.textures,lt=C.isWebGLCubeRenderTarget===!0,ct=Y.length>1;if(ct||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=y.version,a.memory.textures++),lt){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let Q=0;Q<y.mipmaps.length;Q++)z.__webglFramebuffer[Z][Q]=i.createFramebuffer()}else z.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)z.__webglFramebuffer[Z]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ct)for(let Z=0,Q=Y.length;Z<Q;Z++){let ut=n.get(Y[Z]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&qt(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let Q=Y[Z];z.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);let ut=r.convert(Q.format,Q.colorSpace),Lt=r.convert(Q.type),mt=v(Q.internalFormat,ut,Lt,Q.normalized,Q.colorSpace,C.isXRRenderTarget===!0),dt=Gt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(z.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)bt(z.__webglFramebuffer[Z][Q],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else bt(z.__webglFramebuffer[Z],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(y)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let Z=0,Q=Y.length;Z<Q;Z++){let ut=Y[Z],Lt=n.get(ut),mt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,Lt.__webglTexture),Qt(mt,ut),bt(z.__webglFramebuffer,C,ut,i.COLOR_ATTACHMENT0+Z,mt,0),m(ut)&&b(mt)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,G.__webglTexture),Qt(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let Q=0;Q<y.mipmaps.length;Q++)bt(z.__webglFramebuffer[Q],C,y,i.COLOR_ATTACHMENT0,Z,Q);else bt(z.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,Z,0);m(y)&&b(Z),e.unbindTexture()}C.depthBuffer&&nt(C)}function ot(C){let y=C.textures;for(let z=0,G=y.length;z<G;z++){let Y=y[z];if(m(Y)){let lt=w(C),ct=n.get(Y).__webglTexture;e.bindTexture(lt,ct),b(lt),e.unbindTexture()}}}let ht=[],Ot=[];function Ut(C){if(C.samples>0){if(qt(C)===!1){let y=C.textures,z=C.width,G=C.height,Y=i.COLOR_BUFFER_BIT,lt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(C),Z=y.length>1;if(Z)for(let ut=0;ut<y.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);let Q=C.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<y.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Lt=n.get(y[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,z,G,0,0,z,G,Y,i.NEAREST),l===!0&&(ht.length=0,Ot.length=0,ht.push(i.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ht.push(lt),Ot.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ut=0;ut<y.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);let Lt=n.get(y[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Gt(C){return Math.min(s.maxSamples,C.samples)}function qt(C){let y=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function N(C){let y=a.render.frame;d.get(C)!==y&&(d.set(C,y),C.update())}function ce(C,y){let z=C.colorSpace,G=C.format,Y=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==lr&&z!==oi&&(ne.getTransfer(z)===de?(G!==yn||Y!==nn)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",z)),y}function te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=O,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=tt,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=K,this.rebindTextures=st,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ix(i,t){function e(n,s=oi){let r,a=ne.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ec)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mc)return i.BYTE;if(n===Sc)return i.SHORT;if(n===Us)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===In)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===wc)return i.ALPHA;if(n===Tc)return i.RGB;if(n===yn)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===So)return i.RED;if(n===bo)return i.RED_INTEGER;if(n===Ci)return i.RG;if(n===Eo)return i.RG_INTEGER;if(n===wo)return i.RGBA_INTEGER;if(n===Hr||n===Gr||n===Wr||n===Xr)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===To||n===Ao||n===Ro||n===Co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===To)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Io||n===Po||n===Lo||n===Do||n===No||n===qr||n===Uo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Io||n===Po)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Do)return r.COMPRESSED_R11_EAC;if(n===No)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qr)return r.COMPRESSED_RG11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===Jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Jo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===$o||n===Ko||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===$o)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===tl||n===Yr||n===el)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Fs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Px=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Sr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new un({vertexShader:Px,fragmentShader:Lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Se(new ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},th=class extends Hn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,u=null,f=null,h=null,p=null,x=typeof XRWebGLBinding<"u",g=new Qc,m={},b=e.getContextAttributes(),w=null,v=null,M=[],S=[],A=new rt,_=null,T=null,R=new Fe;R.viewport=new be;let I=new Fe;I.viewport=new be;let D=[R,I],O=new po,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let et=M[J];return et===void 0&&(et=new bs,M[J]=et),et.getTargetRaySpace()},this.getControllerGrip=function(J){let et=M[J];return et===void 0&&(et=new bs,M[J]=et),et.getGripSpace()},this.getHand=function(J){let et=M[J];return et===void 0&&(et=new bs,M[J]=et),et.getHandSpace()};function W(J){let et=S.indexOf(J.inputSource);if(et===-1)return;let _t=M[et];_t!==void 0&&(_t.update(J.inputSource,J.frame,c||a),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",tt);for(let J=0;J<M.length;J++){let et=S[J];et!==null&&(S[J]=null,M[J].disconnect(et))}L=null,B=null,g.reset();for(let J in m)delete m[J];if(t.setRenderTarget(w),h=null,f=null,u=null,s=null,v=null,re.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",H),s.addEventListener("inputsourceschange",tt),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,Vt=null,bt=null;b.depth&&(bt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,_t=b.stencil?Ri:Vn,Vt=b.stencil?Fs:In);let Ht={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Ht),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new en(f.textureWidth,f.textureHeight,{format:yn,type:nn,depthTexture:new yi(f.textureWidth,f.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let _t={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,_t),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),v=new en(h.framebufferWidth,h.framebufferHeight,{format:yn,type:nn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function tt(J){for(let et=0;et<J.removed.length;et++){let _t=J.removed[et],Vt=S.indexOf(_t);Vt>=0&&(S[Vt]=null,M[Vt].disconnect(_t))}for(let et=0;et<J.added.length;et++){let _t=J.added[et],Vt=S.indexOf(_t);if(Vt===-1){for(let Ht=0;Ht<M.length;Ht++)if(Ht>=S.length){S.push(_t),Vt=Ht;break}else if(S[Ht]===null){S[Ht]=_t,Vt=Ht;break}if(Vt===-1)break}let bt=M[Vt];bt&&bt.connect(_t)}}let q=new P,j=new P;function K(J,et,_t){q.setFromMatrixPosition(et.matrixWorld),j.setFromMatrixPosition(_t.matrixWorld);let Vt=q.distanceTo(j),bt=et.projectionMatrix.elements,Ht=_t.projectionMatrix.elements,fe=bt[14]/(bt[10]-1),nt=bt[14]/(bt[10]+1),st=(bt[9]+1)/bt[5],at=(bt[9]-1)/bt[5],ot=(bt[8]-1)/bt[0],ht=(Ht[8]+1)/Ht[0],Ot=fe*ot,Ut=fe*ht,Gt=Vt/(-ot+ht),qt=Gt*-ot;if(et.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(qt),J.translateZ(Gt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),bt[10]===-1)J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let N=fe+Gt,ce=nt+Gt,te=Ot-qt,C=Ut+(Vt-qt),y=st*nt/ce*N,z=at*nt/ce*N;J.projectionMatrix.makePerspective(te,C,y,z,N,ce),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Ct(J,et){et===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(et.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let et=J.near,_t=J.far;g.texture!==null&&(g.depthNear>0&&(et=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),O.near=I.near=R.near=et,O.far=I.far=R.far=_t,(L!==O.near||B!==O.far)&&(s.updateRenderState({depthNear:O.near,depthFar:O.far}),L=O.near,B=O.far),O.layers.mask=J.layers.mask|6,R.layers.mask=O.layers.mask&-5,I.layers.mask=O.layers.mask&-3;let Vt=J.parent,bt=O.cameras;Ct(O,Vt);for(let Ht=0;Ht<bt.length;Ht++)Ct(bt[Ht],Vt);bt.length===2?K(O,R,I):O.projectionMatrix.copy(R.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),Et(J,O,Vt)};function Et(J,et,_t){_t===null?J.matrix.copy(et.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(et.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ys*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(J){return m[J]};let se=null;function Qt(J,et){if(d=et.getViewerPose(c||a),p=et,d!==null){let _t=d.views;h!==null&&(t.setRenderTargetFramebuffer(v,h.framebuffer),t.setRenderTarget(v));let Vt=!1;_t.length!==O.cameras.length&&(O.cameras.length=0,Vt=!0);for(let nt=0;nt<_t.length;nt++){let st=_t[nt],at=null;if(h!==null)at=h.getViewport(st);else{let ht=u.getViewSubImage(f,st);at=ht.viewport,nt===0&&(t.setRenderTargetTextures(v,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(v))}let ot=D[nt];ot===void 0&&(ot=new Fe,ot.layers.enable(nt),ot.viewport=new be,D[nt]=ot),ot.matrix.fromArray(st.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(st.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(at.x,at.y,at.width,at.height),nt===0&&(O.matrix.copy(ot.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Vt===!0&&O.cameras.push(ot)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let nt=u.getDepthInformation(_t[0]);nt&&nt.isValid&&nt.texture&&g.init(nt,s.renderState)}if(bt&&bt.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let nt=0;nt<_t.length;nt++){let st=_t[nt].camera;if(st){let at=m[st];at||(at=new Sr,m[st]=at);let ot=u.getCameraImage(st);at.sourceTexture=ot}}}}for(let _t=0;_t<M.length;_t++){let Vt=S[_t],bt=M[_t];Vt!==null&&bt!==void 0&&bt.update(Vt,et,c||a)}se&&se(J,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}let re=new vd;re.setAnimationLoop(Qt),this.setAnimationLoop=function(J){se=J},this.dispose=function(){}}},Dx=new le,wd=new Xt;wd.set(-1,0,0,0,1,0,0,0,1);function Nx(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Pc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,w,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),d(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&h(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,b,w):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Qe&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Qe&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),w=b.envMap,v=b.envMapRotation;w&&(g.envMap.value=w,g.envMapRotation.value.setFromMatrix4(Dx.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(wd),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,w){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=w*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function d(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qe&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ux(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let S=M.program;n.uniformBlockBinding(v,S)}function c(v,M){let S=s[v.id];S===void 0&&(g(v),S=d(v),s[v.id]=S,v.addEventListener("dispose",b));let A=M.program;n.updateUBOMapping(v,A);let _=t.render.frame;r[v.id]!==_&&(f(v),r[v.id]=_)}function d(v){let M=u();v.__bindingPointIndex=M;let S=i.createBuffer(),A=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let M=s[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,T=S.length;_<T;_++){let R=S[_];if(Array.isArray(R))for(let I=0,D=R.length;I<D;I++)h(R[I],_,I,A);else h(R,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,M,S,A){if(x(v,M,S,A)===!0){let _=v.__offset,T=v.value;if(Array.isArray(T)){let R=0;for(let I=0;I<T.length;I++){let D=T[I],O=m(D);p(D,v.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function p(v,M,S){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,S)}function x(v,M,S,A){let _=v.value,T=M+"_"+S;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let R=A[T];if(typeof _=="number"||typeof _=="boolean"){if(R!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(R.equals(_)===!1)return R.copy(_),!0}}return!1}function g(v){let M=v.uniforms,S=0,A=16;for(let T=0,R=M.length;T<R;T++){let I=Array.isArray(M[T])?M[T]:[M[T]];for(let D=0,O=I.length;D<O;D++){let L=I[D],B=Array.isArray(L.value)?L.value:[L.value];for(let W=0,H=B.length;W<H;W++){let tt=B[W],q=m(tt),j=S%A,K=j%q.boundary,Ct=j+K;S+=K,Ct!==0&&A-Ct<q.storage&&(S+=A-Ct),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=S,S+=q.storage}}}let _=S%A;return _>0&&(S+=A-_),v.__size=S,v.__cache={},this}function m(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",v),M}function b(v){let M=v.target;M.removeEventListener("dispose",b);let S=a.indexOf(M.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}var Fx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function Ox(){return Wn===null&&(Wn=new vr(Fx,16,16,Ci,Pn),Wn.name="DFG_LUT",Wn.minFilter=ke,Wn.magFilter=ke,Wn.wrapS=Bn,Wn.wrapT=Bn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var Kr=class{constructor(t={}){let{canvas:e=zu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:h=nn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=h,g=new Set([wo,Eo,bo]),m=new Set([nn,In,Us,Fs,yo,Mo]),b=new Uint32Array(4),w=new Int32Array(4),v=new P,M=null,S=null,A=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Cn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,D=null,O=null,L=null,B=null;this._outputColorSpace=Re;let W=0,H=0,tt=null,q=-1,j=null,K=new be,Ct=new be,Et=null,se=new Ft(0),Qt=0,re=e.width,J=e.height,et=1,_t=null,Vt=null,bt=new be(0,0,re,J),Ht=new be(0,0,re,J),fe=!1,nt=new As,st=!1,at=!1,ot=new le,ht=new P,Ot=new be,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function qt(){return tt===null?et:1}let N=n;function ce(E,U){return e.getContext(E,U)}let te,C,y,z,G,Y,lt,ct,Z,Q,ut,Lt,mt,dt,Dt,Bt,Yt,F,ft,$,pt,St,it;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",bn,!1),N===null){let U="webgl2";if(N=ce(U,E),N===null)throw ce(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(E){throw e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),zt("WebGLRenderer: "+E.message),E}function Nt(){te=new Wg(N),te.init(),pt=new Ix(N,te),C=new Ng(N,te,t,pt),y=new Rx(N,te),C.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),O=N.createFramebuffer(),L=N.createFramebuffer(),B=N.createFramebuffer(),z=new Yg(N),G=new px,Y=new Cx(N,te,y,G,C,pt,z),lt=new Gg(R),ct=new Jp(N),St=new Lg(N,ct),Z=new Xg(N,ct,z,St),Q=new Jg(N,Z,ct,St,z),F=new Zg(N,C,Y),Dt=new Ug(G),ut=new fx(R,lt,te,C,St,Dt),Lt=new Nx(R,G),mt=new gx,dt=new Sx(te),Yt=new Pg(R,lt,y,Q,p,l),Bt=new Ax(R,Q,C),it=new Ux(N,z,C,y),ft=new Dg(N,te,z),$=new qg(N,te,z),z.programs=ut.programs,R.capabilities=C,R.extensions=te,R.properties=G,R.renderLists=mt,R.shadowMap=Bt,R.state=y,R.info=z}x!==nn&&(T=new Kg(x,e.width,e.height,o,s,r));let It=new th(R,N);this.xr=It,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let E=te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(E){E!==void 0&&(et=E,this.setSize(re,J,!1))},this.getSize=function(E){return E.set(re,J)},this.setSize=function(E,U,X=!0){if(It.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}re=E,J=U,e.width=Math.floor(E*et),e.height=Math.floor(U*et),X===!0&&(e.style.width=E+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(re*et,J*et).floor()},this.setDrawingBufferSize=function(E,U,X){re=E,J=U,et=X,e.width=Math.floor(E*X),e.height=Math.floor(U*X),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(x===nn){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(bt)},this.setViewport=function(E,U,X,k){E.isVector4?bt.set(E.x,E.y,E.z,E.w):bt.set(E,U,X,k),y.viewport(K.copy(bt).multiplyScalar(et).round())},this.getScissor=function(E){return E.copy(Ht)},this.setScissor=function(E,U,X,k){E.isVector4?Ht.set(E.x,E.y,E.z,E.w):Ht.set(E,U,X,k),y.scissor(Ct.copy(Ht).multiplyScalar(et).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(E){y.setScissorTest(fe=E)},this.setOpaqueSort=function(E){_t=E},this.setTransparentSort=function(E){Vt=E},this.getClearColor=function(E){return E.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,X=!0){let k=0;if(E){let V=!1;if(tt!==null){let vt=tt.texture.format;V=g.has(vt)}if(V){let vt=tt.texture.type,Tt=m.has(vt),xt=Yt.getClearColor(),At=Yt.getClearAlpha(),Pt=xt.r,$t=xt.g,ee=xt.b;Tt?(b[0]=Pt,b[1]=$t,b[2]=ee,b[3]=At,N.clearBufferuiv(N.COLOR,0,b)):(w[0]=Pt,w[1]=$t,w[2]=ee,w[3]=At,N.clearBufferiv(N.COLOR,0,w))}else k|=N.COLOR_BUFFER_BIT}U&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),D=E},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",bn,!1),Yt.dispose(),mt.dispose(),dt.dispose(),G.dispose(),lt.dispose(),Q.dispose(),St.dispose(),it.dispose(),ut.dispose(),It.dispose(),It.removeEventListener("sessionstart",_h),It.removeEventListener("sessionend",xh),Li.stop()};function xe(E){E.preventDefault(),ur("WebGLRenderer: Context Lost."),I=!0}function he(){ur("WebGLRenderer: Context Restored."),I=!1;let E=z.autoReset,U=Bt.enabled,X=Bt.autoUpdate,k=Bt.needsUpdate,V=Bt.type;Nt(),z.autoReset=E,Bt.enabled=U,Bt.autoUpdate=X,Bt.needsUpdate=k,Bt.type=V}function bn(E){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Un(E){let U=E.target;U.removeEventListener("dispose",Un),lf(U)}function lf(E){cf(E),G.remove(E)}function cf(E){let U=G.get(E).programs;U!==void 0&&(U.forEach(function(X){ut.releaseProgram(X)}),E.isShaderMaterial&&ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,X,k,V,vt){U===null&&(U=Ut);let Tt=V.isMesh&&V.matrixWorld.determinantAffine()<0,xt=df(E,U,X,k,V);y.setMaterial(k,Tt);let At=X.index,Pt=1;if(k.wireframe===!0){if(At=Z.getWireframeAttribute(X),At===void 0)return;Pt=2}let $t=X.drawRange,ee=X.attributes.position,Rt=$t.start*Pt,ue=($t.start+$t.count)*Pt;vt!==null&&(Rt=Math.max(Rt,vt.start*Pt),ue=Math.min(ue,(vt.start+vt.count)*Pt)),At!==null?(Rt=Math.max(Rt,0),ue=Math.min(ue,At.count)):ee!=null&&(Rt=Math.max(Rt,0),ue=Math.min(ue,ee.count));let Pe=ue-Rt;if(Pe<0||Pe===1/0)return;St.setup(V,k,xt,X,At);let ye,ge=ft;if(At!==null&&(ye=ct.get(At),ge=$,ge.setIndex(ye)),V.isMesh)k.wireframe===!0?(y.setLineWidth(k.wireframeLinewidth*qt()),ge.setMode(N.LINES)):ge.setMode(N.TRIANGLES);else if(V.isLine){let He=k.linewidth;He===void 0&&(He=1),y.setLineWidth(He*qt()),V.isLineSegments?ge.setMode(N.LINES):V.isLineLoop?ge.setMode(N.LINE_LOOP):ge.setMode(N.LINE_STRIP)}else V.isPoints?ge.setMode(N.POINTS):V.isSprite&&ge.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(te.get("WEBGL_multi_draw"))ge.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let He=V._multiDrawStarts,wt=V._multiDrawCounts,Ze=V._multiDrawCount,ae=At?ct.get(At).bytesPerElement:1,mn=G.get(k).currentProgram.getUniforms();for(let Fn=0;Fn<Ze;Fn++)mn.setValue(N,"_gl_DrawID",Fn),ge.render(He[Fn]/ae,wt[Fn])}else if(V.isInstancedMesh)ge.renderInstances(Rt,Pe,V.count);else if(X.isInstancedBufferGeometry){let He=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,wt=Math.min(X.instanceCount,He);ge.renderInstances(Rt,Pe,wt)}else ge.render(Rt,Pe)};function gh(E,U,X,k){D!==null&&E.isNodeMaterial&&D.setObject(k,E),st===!0&&Dt.setState(E,X,!1),E.transparent===!0&&E.side===Ce&&E.forceSinglePass===!1?(E.side=Qe,E.needsUpdate=!0,sa(E,U,k),E.side=wi,E.needsUpdate=!0,sa(E,U,k),E.side=Ce):sa(E,U,k)}this.compile=function(E,U,X=null){X===null&&(X=E),D!==null&&D.renderStart(E,U,X),S=dt.get(X),S.init(U),_.push(S),X.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),E!==X&&E.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(S.pushLight(V),V.castShadow&&S.pushShadow(V))}),S.setupLights(),D!==null&&D.updateLights(S.state.lightsArray),at=this.localClippingEnabled,st=Dt.init(this.clippingPlanes,at),st===!0&&Dt.setGlobalState(this.clippingPlanes,U),D!==null&&Bt.render(S.state.shadowsArray,X,U);let k=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let vt=V.material;if(vt)if(Array.isArray(vt))for(let Tt=0;Tt<vt.length;Tt++){let xt=vt[Tt];gh(xt,X,U,V),k.add(xt)}else gh(vt,X,U,V),k.add(vt)}),S=_.pop(),D!==null&&D.renderEnd(),k},this.compileAsync=function(E,U,X=null){let k=this.compile(E,U,X);return new Promise(V=>{function vt(){if(k.forEach(function(Tt){let At=G.get(Tt).currentProgram;(At===void 0||At.isReady())&&k.delete(Tt)}),k.size===0){V(E);return}setTimeout(vt,10)}te.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let Sl=null;function hf(E){Sl&&Sl(E)}function _h(){Li.stop()}function xh(){Li.start()}let Li=new vd;Li.setAnimationLoop(hf),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(E){Sl=E,It.setAnimationLoop(E),E===null?Li.stop():Li.start()},It.addEventListener("sessionstart",_h),It.addEventListener("sessionend",xh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;D!==null&&D.renderStart(E,U);let X=It.enabled===!0&&It.isPresenting===!0,k=T!==null&&(tt===null||X)&&T.begin(R,tt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(U),U=It.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,U,tt),S=dt.get(E,_.length),S.init(U),S.state.textureUnits=Y.getTextureUnits(),_.push(S),ot.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),nt.setFromProjectionMatrix(ot,Rn,U.reversedDepth),at=this.localClippingEnabled,st=Dt.init(this.clippingPlanes,at),M=mt.get(E,A.length),M.init(),A.push(M),It.enabled===!0&&It.isPresenting===!0){let Tt=R.xr.getDepthSensingMesh();Tt!==null&&bl(Tt,U,-1/0,R.sortObjects)}bl(E,U,0,R.sortObjects),M.finish(),D!==null&&D.updateLights(S.state.lightsArray),R.sortObjects===!0&&M.sort(_t,Vt),Gt=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Gt&&Yt.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Dt.beginShadows();let V=S.state.shadowsArray;if(Bt.render(V,E,U),st===!0&&Dt.endShadows(),(k&&T.hasRenderPass())===!1){let Tt=M.opaque,xt=M.transmissive;if(S.setupLights(),U.isArrayCamera){let At=U.cameras;if(xt.length>0)for(let Pt=0,$t=At.length;Pt<$t;Pt++){let ee=At[Pt];yh(Tt,xt,E,ee)}Gt&&Yt.render(E);for(let Pt=0,$t=At.length;Pt<$t;Pt++){let ee=At[Pt];vh(M,E,ee,ee.viewport)}}else xt.length>0&&yh(Tt,xt,E,U),Gt&&Yt.render(E),vh(M,E,U)}tt!==null&&H===0&&(Y.updateMultisampleRenderTarget(tt),Y.updateRenderTargetMipmap(tt)),k&&T.end(R),E.isScene===!0&&E.onAfterRender(R,E,U),St.resetDefaultState(),q=-1,j=null,_.pop(),_.length>0?(S=_[_.length-1],Y.setTextureUnits(S.state.textureUnits),st===!0&&Dt.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,D!==null&&D.renderEnd()};function bl(E,U,X,k){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(nt)){k&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ot);let Tt=Q.update(E),xt=E.material;xt.visible&&M.push(E,Tt,xt,X,Ot.z,null,U)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(nt))){let Tt=Q.update(E),xt=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),Ot.copy(Tt.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(ot)),Array.isArray(xt)){let At=Tt.groups;for(let Pt=0,$t=At.length;Pt<$t;Pt++){let ee=At[Pt],Rt=xt[ee.materialIndex];Rt&&Rt.visible&&M.push(E,Tt,Rt,X,Ot.z,ee,U)}}else xt.visible&&M.push(E,Tt,xt,X,Ot.z,null,U)}}let vt=E.children;for(let Tt=0,xt=vt.length;Tt<xt;Tt++)bl(vt[Tt],U,X,k)}function vh(E,U,X,k){let{opaque:V,transmissive:vt,transparent:Tt}=E;S.setupLightsView(X),st===!0&&Dt.setGlobalState(R.clippingPlanes,X),k&&y.viewport(K.copy(k)),V.length>0&&ia(V,U,X),vt.length>0&&ia(vt,U,X),Tt.length>0&&ia(Tt,U,X),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function yh(E,U,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[k.id]===void 0){let Rt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[k.id]=new en(1,1,{generateMipmaps:!0,type:Rt?Pn:nn,minFilter:Ai,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let vt=S.state.transmissionRenderTarget[k.id],Tt=k.viewport||K;vt.setSize(Tt.z*R.transmissionResolutionScale,Tt.w*R.transmissionResolutionScale);let xt=R.getRenderTarget(),At=R.getActiveCubeFace(),Pt=R.getActiveMipmapLevel();R.setRenderTarget(vt),R.getClearColor(se),Qt=R.getClearAlpha(),Qt<1&&R.setClearColor(16777215,.5),R.clear(),Gt&&Yt.render(X);let $t=R.toneMapping;R.toneMapping=Cn;let ee=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),S.setupLightsView(k),st===!0&&Dt.setGlobalState(R.clippingPlanes,k),ia(E,X,k),Y.updateMultisampleRenderTarget(vt),Y.updateRenderTargetMipmap(vt),te.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ue=0,Pe=U.length;ue<Pe;ue++){let ye=U[ue],{object:ge,geometry:He,material:wt,group:Ze}=ye;if(wt.side===Ce&&ge.layers.test(k.layers)){let ae=wt.side;wt.side=Qe,wt.needsUpdate=!0,Mh(ge,X,k,He,wt,Ze),wt.side=ae,wt.needsUpdate=!0,Rt=!0}}Rt===!0&&(Y.updateMultisampleRenderTarget(vt),Y.updateRenderTargetMipmap(vt))}R.setRenderTarget(xt,At,Pt),R.setClearColor(se,Qt),ee!==void 0&&(k.viewport=ee),R.toneMapping=$t}function ia(E,U,X){let k=U.isScene===!0?U.overrideMaterial:null;for(let V=0,vt=E.length;V<vt;V++){let Tt=E[V],{object:xt,geometry:At,group:Pt}=Tt,$t=Tt.material;$t.allowOverride===!0&&k!==null&&($t=k),xt.layers.test(X.layers)&&Mh(xt,U,X,At,$t,Pt)}}function Mh(E,U,X,k,V,vt){D!==null&&V.isNodeMaterial&&D.setObject(E,V),E.onBeforeRender(R,U,X,k,V,vt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(R,U,X,k,E,vt),V.transparent===!0&&V.side===Ce&&V.forceSinglePass===!1?(V.side=Qe,V.needsUpdate=!0,R.renderBufferDirect(X,U,k,V,E,vt),V.side=wi,V.needsUpdate=!0,R.renderBufferDirect(X,U,k,V,E,vt),V.side=Ce):R.renderBufferDirect(X,U,k,V,E,vt),E.onAfterRender(R,U,X,k,V,vt)}function sa(E,U,X){U.isScene!==!0&&(U=Ut);let k=G.get(E),V=S.state.lights,vt=S.state.shadowsArray,Tt=V.state.version,xt=ut.getParameters(E,V.state,vt,U,X,S.state.lightProbeGridArray),At=ut.getProgramCacheKey(xt),Pt=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let $t=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=lt.get(E.envMap||k.environment,$t),k.envMapRotation=k.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Pt===void 0&&(E.addEventListener("dispose",Un),Pt=new Map,k.programs=Pt);let ee=Pt.get(At);if(ee!==void 0){if(k.currentProgram===ee&&k.lightsStateVersion===Tt)return bh(E,xt),ee}else xt.uniforms=ut.getUniforms(E),D!==null&&E.isNodeMaterial&&D.build(E,X,xt),E.onBeforeCompile(xt,R),ee=ut.acquireProgram(xt,At),Pt.set(At,ee),k.uniforms=xt.uniforms;let Rt=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Rt.clippingPlanes=Dt.uniform),bh(E,xt),k.needsLights=pf(E),k.lightsStateVersion=Tt,k.needsLights&&(Rt.ambientLightColor.value=V.state.ambient,Rt.lightProbe.value=V.state.probe,Rt.sunLights.value=V.state.sun,Rt.sunLightShadows.value=V.state.sunShadow,Rt.directionalLights.value=V.state.directional,Rt.directionalLightShadows.value=V.state.directionalShadow,Rt.spotLights.value=V.state.spot,Rt.spotLightShadows.value=V.state.spotShadow,Rt.rectAreaLights.value=V.state.rectArea,Rt.ltc_1.value=V.state.rectAreaLTC1,Rt.ltc_2.value=V.state.rectAreaLTC2,Rt.pointLights.value=V.state.point,Rt.pointLightShadows.value=V.state.pointShadow,Rt.hemisphereLights.value=V.state.hemi,Rt.sunShadowMatrix.value=V.state.sunShadowMatrix,Rt.sunShadowCascade.value=V.state.sunShadowCascade,Rt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Rt.spotLightMatrix.value=V.state.spotLightMatrix,Rt.spotLightMap.value=V.state.spotLightMap,Rt.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=S.state.lightProbeGridArray.length>0,k.currentProgram=ee,k.uniformsList=null,ee}function Sh(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=zs.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function bh(E,U){let X=G.get(E);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function uf(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let X=0,k=E.length;X<k;X++){let V=E[X];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function df(E,U,X,k,V){U.isScene!==!0&&(U=Ut),Y.resetTextureUnits();let vt=U.fog,Tt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,xt=tt===null?R.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:ne.workingColorSpace,At=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Pt=lt.get(k.envMap||Tt,At),$t=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ee=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Rt=!!X.morphAttributes.position,ue=!!X.morphAttributes.normal,Pe=!!X.morphAttributes.color,ye=Cn;k.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(ye=R.toneMapping);let ge=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,He=ge!==void 0?ge.length:0,wt=G.get(k),Ze=S.state.lights;if(st===!0&&(at===!0||E!==j)){let ve=E===j&&k.id===q;Dt.setState(k,E,ve)}let ae=!1;k.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Ze.state.version||wt.outputColorSpace!==xt||V.isBatchedMesh&&wt.batching===!1||!V.isBatchedMesh&&wt.batching===!0||V.isBatchedMesh&&wt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&wt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&wt.instancing===!1||!V.isInstancedMesh&&wt.instancing===!0||V.isSkinnedMesh&&wt.skinning===!1||!V.isSkinnedMesh&&wt.skinning===!0||V.isInstancedMesh&&wt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&wt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&wt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&wt.instancingMorph===!1&&V.morphTexture!==null||wt.envMap!==Pt||k.fog===!0&&wt.fog!==vt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Dt.numPlanes||wt.numIntersection!==Dt.numIntersection)||wt.vertexAlphas!==$t||wt.vertexTangents!==ee||wt.morphTargets!==Rt||wt.morphNormals!==ue||wt.morphColors!==Pe||wt.toneMapping!==ye||wt.morphTargetsCount!==He||!!wt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(ae=!0):(ae=!0,wt.__version=k.version);let mn=wt.currentProgram;ae===!0&&(mn=sa(k,U,V),D&&k.isNodeMaterial&&D.onUpdateProgram(k,mn,wt));let Fn=!1,ui=!1,$i=!1,me=mn.getUniforms(),Ae=wt.uniforms;if(y.useProgram(mn.program)&&(Fn=!0,ui=!0,$i=!0),k.id!==q&&(q=k.id,ui=!0),wt.needsLights){let ve=uf(S.state.lightProbeGridArray,V);wt.lightProbeGrid!==ve&&(wt.lightProbeGrid=ve,ui=!0)}if(Fn||j!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),me.setValue(N,"projectionMatrix",E.projectionMatrix),me.setValue(N,"viewMatrix",E.matrixWorldInverse);let fi=me.map.cameraPosition;fi!==void 0&&fi.setValue(N,ht.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&me.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&me.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,ui=!0,$i=!0)}if(wt.needsLights&&(Ze.state.sunShadowMap.length>0&&me.setValue(N,"sunShadowMap",Ze.state.sunShadowMap,Y),Ze.state.directionalShadowMap.length>0&&me.setValue(N,"directionalShadowMap",Ze.state.directionalShadowMap,Y),Ze.state.spotShadowMap.length>0&&me.setValue(N,"spotShadowMap",Ze.state.spotShadowMap,Y),Ze.state.pointShadowMap.length>0&&me.setValue(N,"pointShadowMap",Ze.state.pointShadowMap,Y)),V.isSkinnedMesh){me.setOptional(N,V,"bindMatrix"),me.setOptional(N,V,"bindMatrixInverse");let ve=V.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),me.setValue(N,"boneTexture",ve.boneTexture,Y))}V.isBatchedMesh&&(me.setOptional(N,V,"batchingTexture"),me.setValue(N,"batchingTexture",V._matricesTexture,Y),me.setOptional(N,V,"batchingIdTexture"),me.setValue(N,"batchingIdTexture",V._indirectTexture,Y),me.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&me.setValue(N,"batchingColorTexture",V._colorsTexture,Y));let di=X.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&F.update(V,X,mn),(ui||wt.receiveShadow!==V.receiveShadow)&&(wt.receiveShadow=V.receiveShadow,me.setValue(N,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Ae.envMapIntensity.value=U.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=Ox()),ui){if(me.setValue(N,"toneMappingExposure",R.toneMappingExposure),wt.needsLights&&ff(Ae,$i),vt&&k.fog===!0&&Lt.refreshFogUniforms(Ae,vt),Lt.refreshMaterialUniforms(Ae,k,et,J,S.state.transmissionRenderTarget[E.id]),wt.needsLights&&wt.lightProbeGrid){let ve=wt.lightProbeGrid;Ae.probesSH.value=ve.texture,Ae.probesMin.value.copy(ve.boundingBox.min),Ae.probesMax.value.copy(ve.boundingBox.max),Ae.probesResolution.value.copy(ve.resolution)}zs.upload(N,Sh(wt),Ae,Y)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(zs.upload(N,Sh(wt),Ae,Y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&me.setValue(N,"center",V.center),me.setValue(N,"modelViewMatrix",V.modelViewMatrix),me.setValue(N,"normalMatrix",V.normalMatrix),me.setValue(N,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let ve=k.uniformsGroups;for(let fi=0,Ki=ve.length;fi<Ki;fi++){let wh=ve[fi];it.update(wh,mn),it.bind(wh,mn)}}return mn}function ff(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function pf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(E,U,X){let k=G.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=U,G.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let X=G.get(E);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,X=0){tt=E,W=U,H=X;let k=null,V=!1,vt=!1;if(E){let xt=G.get(E);if(xt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(N.FRAMEBUFFER,xt.__webglFramebuffer),K.copy(E.viewport),Ct.copy(E.scissor),Et=E.scissorTest,y.viewport(K),y.scissor(Ct),y.setScissorTest(Et),q=-1;return}else if(xt.__webglFramebuffer===void 0)Y.setupRenderTarget(E);else if(xt.__hasExternalTextures)Y.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let $t=E.depthTexture;if(xt.__boundDepthTexture!==$t){if($t!==null&&G.has($t)&&(E.width!==$t.image.width||E.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(E)}}let At=E.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(vt=!0);let Pt=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Pt[U])?k=Pt[U][X]:k=Pt[U],V=!0):E.samples>0&&Y.useMultisampledRTT(E)===!1?k=G.get(E).__webglMultisampledFramebuffer:Array.isArray(Pt)?k=Pt[X]:k=Pt,K.copy(E.viewport),Ct.copy(E.scissor),Et=E.scissorTest}else K.copy(bt).multiplyScalar(et).floor(),Ct.copy(Ht).multiplyScalar(et).floor(),Et=fe;if(X!==0&&(k=O),y.bindFramebuffer(N.FRAMEBUFFER,k)&&y.drawBuffers(E,k),y.viewport(K),y.scissor(Ct),y.setScissorTest(Et),V){let xt=G.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,xt.__webglTexture,X)}else if(vt){let xt=U;for(let At=0;At<E.textures.length;At++){let Pt=G.get(E.textures[At]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+At,Pt.__webglTexture,X,xt)}}else if(E!==null&&X!==0){let xt=G.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,xt.__webglTexture,X)}q=-1};function Eh(E){let U=G.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=C.textureFormatReadable(E.format),U.__typeReadable=C.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,X,k,V,vt,Tt,xt=0){if(!(E&&E.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At){y.bindFramebuffer(N.FRAMEBUFFER,At);try{let Pt=E.textures[xt],$t=Pt.format,ee=Pt.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xt);let Rt=Eh(Pt);if(Rt.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-k&&X>=0&&X<=E.height-V&&N.readPixels(U,X,k,V,pt.convert($t),pt.convert(ee),vt)}finally{let Pt=tt!==null?G.get(tt).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(E,U,X,k,V,vt,Tt,xt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Tt!==void 0&&(At=At[Tt]),At)if(U>=0&&U<=E.width-k&&X>=0&&X<=E.height-V){y.bindFramebuffer(N.FRAMEBUFFER,At);let Pt=E.textures[xt],$t=Pt.format,ee=Pt.type;E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+xt);let Rt=Eh(Pt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ue),N.bufferData(N.PIXEL_PACK_BUFFER,vt.byteLength,N.STREAM_READ),N.readPixels(U,X,k,V,pt.convert($t),pt.convert(ee),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Pe=tt!==null?G.get(tt).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,Pe);let ye=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Vu(N,ye,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ue),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,vt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ue),N.deleteSync(ye),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,X=0){let k=Math.pow(2,-X),V=Math.floor(E.image.width*k),vt=Math.floor(E.image.height*k),Tt=U!==null?U.x:0,xt=U!==null?U.y:0;Y.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,X,0,0,Tt,xt,V,vt),y.unbindTexture()},this.copyTextureToTexture=function(E,U,X=null,k=null,V=0,vt=0){let Tt,xt,At,Pt,$t,ee,Rt,ue,Pe,ye=E.isCompressedTexture?E.mipmaps[vt]:E.image;if(X!==null)Tt=X.max.x-X.min.x,xt=X.max.y-X.min.y,At=X.isBox3?X.max.z-X.min.z:1,Pt=X.min.x,$t=X.min.y,ee=X.isBox3?X.min.z:0;else{let Ae=Math.pow(2,-V);Tt=Math.floor(ye.width*Ae),xt=Math.floor(ye.height*Ae),E.isDataArrayTexture?At=ye.depth:E.isData3DTexture?At=Math.floor(ye.depth*Ae):At=1,Pt=0,$t=0,ee=0}k!==null?(Rt=k.x,ue=k.y,Pe=k.z):(Rt=0,ue=0,Pe=0);let ge=pt.convert(U.format),He=pt.convert(U.type),wt;U.isData3DTexture?(Y.setTexture3D(U,0),wt=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),wt=N.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),wt=N.TEXTURE_2D),y.activeTexture(N.TEXTURE0),y.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),y.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),y.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Ze=y.getParameter(N.UNPACK_ROW_LENGTH),ae=y.getParameter(N.UNPACK_IMAGE_HEIGHT),mn=y.getParameter(N.UNPACK_SKIP_PIXELS),Fn=y.getParameter(N.UNPACK_SKIP_ROWS),ui=y.getParameter(N.UNPACK_SKIP_IMAGES);y.pixelStorei(N.UNPACK_ROW_LENGTH,ye.width),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ye.height),y.pixelStorei(N.UNPACK_SKIP_PIXELS,Pt),y.pixelStorei(N.UNPACK_SKIP_ROWS,$t),y.pixelStorei(N.UNPACK_SKIP_IMAGES,ee);let $i=E.isDataArrayTexture||E.isData3DTexture,me=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Ae=G.get(E),di=G.get(U),ve=G.get(Ae.__renderTarget),fi=G.get(di.__renderTarget);y.bindFramebuffer(N.READ_FRAMEBUFFER,ve.__webglFramebuffer),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,fi.__webglFramebuffer);for(let Ki=0;Ki<At;Ki++)$i&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(E).__webglTexture,V,ee+Ki),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(U).__webglTexture,vt,Pe+Ki)),N.blitFramebuffer(Pt,$t,Tt,xt,Rt,ue,Tt,xt,N.DEPTH_BUFFER_BIT,N.NEAREST);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||G.has(E)){let Ae=G.get(E),di=G.get(U);y.bindFramebuffer(N.READ_FRAMEBUFFER,L),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let ve=0;ve<At;ve++)$i?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.__webglTexture,V,ee+ve):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ae.__webglTexture,V),me?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,di.__webglTexture,vt,Pe+ve):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,di.__webglTexture,vt),V!==0?N.blitFramebuffer(Pt,$t,Tt,xt,Rt,ue,Tt,xt,N.COLOR_BUFFER_BIT,N.NEAREST):me?N.copyTexSubImage3D(wt,vt,Rt,ue,Pe+ve,Pt,$t,Tt,xt):N.copyTexSubImage2D(wt,vt,Rt,ue,Pt,$t,Tt,xt);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else me?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(wt,vt,Rt,ue,Pe,Tt,xt,At,ge,He,ye.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(wt,vt,Rt,ue,Pe,Tt,xt,At,ge,ye.data):N.texSubImage3D(wt,vt,Rt,ue,Pe,Tt,xt,At,ge,He,ye):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,vt,Rt,ue,Tt,xt,ge,He,ye.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,vt,Rt,ue,ye.width,ye.height,ge,ye.data):N.texSubImage2D(N.TEXTURE_2D,vt,Rt,ue,Tt,xt,ge,He,ye);y.pixelStorei(N.UNPACK_ROW_LENGTH,Ze),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ae),y.pixelStorei(N.UNPACK_SKIP_PIXELS,mn),y.pixelStorei(N.UNPACK_SKIP_ROWS,Fn),y.pixelStorei(N.UNPACK_SKIP_IMAGES,ui),vt===0&&U.generateMipmaps&&N.generateMipmap(wt),y.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&Y.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Y.setTextureCube(E,0):E.isData3DTexture?Y.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Y.setTexture2DArray(E,0):Y.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){W=0,H=0,tt=null,y.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};function Ad(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new _e,c=0;for(let d=0;d<i.length;++d){let u=i[d],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in u.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(u.attributes[h]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in u.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(u.morphAttributes[h])}if(t){let h;if(e)h=u.index.count;else if(u.attributes.position!==void 0)h=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+d+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,d),c+=h}}if(e){let d=0,u=[];for(let f=0;f<i.length;++f){let h=i[f].index;for(let p=0;p<h.count;++p)u.push(h.getX(p)+d);d+=i[f].attributes.position.count}l.setIndex(u)}for(let d in r){let u=Td(r[d]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" attribute."),null;l.setAttribute(d,u)}for(let d in a){let u=a[d][0].length;if(u!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[d]=[];for(let f=0;f<u;++f){let h=[];for(let x=0;x<a[d].length;++x)h.push(a[d][x][f]);let p=Td(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+d+" morphAttribute."),null;l.morphAttributes[d].push(p)}}}return l}function Td(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let d=i[c];if(t===void 0&&(t=d.array.constructor),t!==d.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=d.itemSize),e!==d.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=d.normalized),n!==d.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=d.gpuType),s!==d.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=d.count*e}let a=new t(r),o=new Oe(a,e,n),l=0;for(let c=0;c<i.length;++c){let d=i[c];if(d.isInterleavedBufferAttribute){let u=l/e;for(let f=0,h=d.count;f<h;f++)for(let p=0;p<e;p++){let x=d.getComponent(f,p);o.setComponent(f+u,p,x)}}else a.set(d.array,l);l+=d.count*e}return s!==void 0&&(o.gpuType=s),o}var Bx=Math.PI*2,zx=(i,t,e)=>i+(t-i)*e,Rd=(i,t,e)=>i.map((n,s)=>zx(n,t[s],e)),ul=1.65;function kx(i){let t=(i/Bx%1+1)%1,e=.62,n=ul*e;if(t<e)return{z:n/2-ul*t,lift:0,pitch:0};let s=(t-e)/(1-e),r=s*s*(3-2*s);return{z:-n/2+n*r,lift:Math.sin(Math.PI*s)*.145,pitch:-Math.sin(Math.PI*s)*.16}}function eh(i=0,t=0,e=0,n=0,s=!1){let r={position:[0,-.035,0],rotation:[0,0,0],torso:[0,0,0],head:[0,0,0],hands:[[-.49,1.27,.05],[.49,1.27,.05]],feet:[[-.155,0,0,0],[.155,0,0,0]]},a=l=>[l*.33,1.78,.17];if(t===1&&(r.position[0]=.045,r.torso=[0,.16,-.055],r.head=[-.025,-.1,-.06],r.hands[1]=a(1),r.feet[0]=[-.12,0,.22,0]),t===2&&(r.hands[0]=[-.65,2.96,.12+Math.sin(i*3)*.035],r.head=[0,-.1,.05],r.torso[2]=-.025),t===3&&(r.hands=[[-1.05,2.61,.12],[1.05,2.61,.12]],r.feet=[[-.25,0,0,0],[.25,0,0,0]],r.head[0]=-.045),t===4&&(r.hands=[[-.065,1.98,.59],[.065,1.98,.59]],r.head[2]=-.065),t===5&&(r.rotation[1]=i*.75,r.hands=[[-1.12,2.1,.06],[1.12,2.1,.06]],r.head[0]=-.04,r.feet[0]=[-.13,.025,.24,.09]),t===6&&(r.position[1]=-.135,r.torso[0]=.1,r.hands=[[-.62,1.39,.03],[.62,1.39,.03]],r.feet=[[-.1,0,.21,0],[.18,0,-.24,0]]),t===7&&(r.hands=[a(-1),a(1)],r.feet=[[-.27,0,0,0],[.27,0,0,0]],r.torso[1]=.08,r.head[0]=-.07),t===8&&(r.position[0]=.065,r.rotation[1]=-.22,r.torso=[0,.28,-.06],r.head=[-.035,-.1,-.075],r.hands[1]=a(1),r.feet=[[-.045,0,.32,0],[.16,0,-.12,0]]),t===9&&(r.position[0]=-.065,r.rotation[1]=.16,r.torso=[-.025,-.25,.06],r.head=[-.055,.12,.04],r.hands=[[-.22,2.3,.3],a(1)],r.feet=[[-.16,0,-.12,0],[.055,0,.31,0]]),t===10&&(r.rotation[1]=-.92,r.torso=[0,-.2,-.03],r.head=[0,.83,-.06],r.hands[1]=[.32,1.77,-.1],r.feet=[[-.2,0,-.18,0],[.18,0,.24,0]]),t===11&&(r.rotation[1]=.23,r.torso=[0,-.23,.045],r.head=[-.04,0,-.04],r.feet=[[-.12,0,-.2,0],[-.045,0,.4,0]],r.hands=[[-.65,1.46,.18],[.37,1.8,.21]]),t===12&&(r.position[0]=-.04,r.hands=[[-.39,2.78,.43],a(1)],r.head=[.035,-.12,.12],r.torso=[0,.17,.035],r.feet[1]=[.12,0,.28,0]),t===13&&(r.rotation[1]=-.16,r.hands=[a(-1),[.55,1.34,.2]],r.feet=[[-.27,0,-.08,0],[.27,0,.16,0]],r.torso=[-.025,.2,-.055],r.head=[-.07,0,.04]),t===14&&(r.position[0]=-.075,r.feet=[[-.17,0,0,0],[.42,.07,.26,.28]],r.hands=[a(-1),[.77,1.65,.1]],r.torso=[0,-.12,.06],r.head=[-.025,.15,-.06]),t===15&&(r.rotation[1]=-.2,r.hands=[a(-1),[.75,2.97,.07]],r.torso=[-.02,.24,-.075],r.head=[-.06,-.08,-.045],r.feet=[[-.15,0,-.13,0],[.07,0,.33,0]]),!n)return r;let o={position:[Math.sin(e)*.018,-.12+(1-Math.cos(e*2))*.006,0],rotation:[0,0,0],torso:[.018,-Math.sin(e)*.055,Math.sin(e)*.022],head:[0,Math.sin(e)*.035,-Math.sin(e)*.013],hands:[],feet:[]};for(let l=0;l<2;l++){let c=l?1:-1,d=kx(e+l*Math.PI);o.feet.push([c*(s?.11:.155),d.lift,d.z,d.pitch]),o.hands.push([c*.48,1.29+Math.sin(e+l*Math.PI)*.016,-Math.cos(e+l*Math.PI)*.24+.06])}for(let l of["position","torso","head"])r[l]=Rd(r[l],o[l],n);r.rotation=r.rotation.map((l,c)=>l+Math.atan2(Math.sin(o.rotation[c]-l),Math.cos(o.rotation[c]-l))*n);for(let l of["hands","feet"])r[l]=r[l].map((c,d)=>Rd(c,o[l][d],n));return r}var ih=[[1.46,.31,.205],[1.58,.3,.195],[1.78,.255,.175],[1.99,.29,.19],[2.15,.335,.205],[2.23,.32,.185],[2.3,.13,.13]],hS=new P(0,1,0),Vx=new P(0,0,1),sn="#fff4df",Yn=(i,t,e)=>new Ft(i).lerp(new Ft(t),e),Mt=(i,t={})=>new dn({color:i,roughness:.76,metalness:0,...t});function Ln(i,t){let e=[...i].sort((n,s)=>n[0]-s[0]);if(t<=e[0][0])return e[0].slice(1);for(let n=1;n<e.length;n++)if(t<=e[n][0]){let s=e[n-1],r=e[n],a=(t-s[0])/(r[0]-s[0]);return[tn.lerp(s[1],r[1],a),tn.lerp(s[2],r[2],a)]}return e.at(-1).slice(1)}function Cd(i,t=.02){return i.map(([e,n,s])=>[e,n+t,s+t])}function Mn(i,{pleats:t=0,segments:e=48,subdivisions:n=3}={}){let s=[];for(let c=0;c<i.length-1;c++)for(let d=0;d<n;d++){let u=d/n;s.push(i[c].map((f,h)=>tn.lerp(f,i[c+1][h],u)))}s.push(i.at(-1));let r=[],a=[],o=[];s.forEach(([c,d,u],f)=>{for(let h=0;h<=e;h++){let p=h/e*Math.PI*2,x=t*Math.cos(p*16)*(1-f/(s.length-1));if(r.push((d+x)*Math.sin(p),c,(u+x)*Math.cos(p)),o.push(h/e,f/(s.length-1)),f<s.length-1&&h<e){let g=f*(e+1)+h,m=g+e+1;a.push(g,g+1,m,g+1,m+1,m)}}});let l=new _e;return l.setAttribute("position",new Zt(r,3)),l.setAttribute("uv",new Zt(o,2)),l.setIndex(a),l.computeVertexNormals(),l.computeBoundingBox(),l}function ie(i,t,e,n,s=[0,0,0],r=[1,1,1]){let a=new Se(e,n);return a.name=t,a.position.set(...s),a.scale.set(...r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function yt(i,t,e,n,s,r=20){return ie(i,t,new hn(1,r,Math.max(12,r/2)),e,n,s)}function Jt(i,t,e=[0,0,0]){let n=new oe;return n.name=t,n.position.set(...e),i.add(n),n}function li(i,t,e,n,s,r){return ie(i,t,new br(s,Math.max(.001,r-s*2),6,16),e,n)}function Wt(i,t,e,n,s,r=!1){return ie(i,t,new Hi(new Mi(e.map(a=>new P(...a)),r),Math.max(16,e.length*6),n,7,r),s)}function Ee(i,t,e,n,s,r,a){return Wt(i,t,Array.from({length:24},(o,l)=>{let c=l/24*Math.PI*2;return[Math.sin(c)*n,e,Math.cos(c)*s]}),r,a,!0)}function Qr(i,t,e,n){for(let s=0;s<5;s++){let r=s*Math.PI*2/5,a=yt(i,"flower petal",e,[Math.sin(r)*t*.51,Math.cos(r)*t*.51,0],[t*.34,t*.5,t*.16],12);a.rotation.z=-r}yt(i,"flower center",n,[0,0,t*.15],[t*.29,t*.29,t*.2],12)}function qn(i,t,e){let n=new je;for(let s=0;s<10;s++){let r=s*Math.PI/5,a=s%2?t*.45:t,o=Math.sin(r)*a,l=Math.cos(r)*a;s?n.lineTo(o,l):n.moveTo(o,l)}n.closePath(),ie(i,"embroidered star",new cn(n,{depth:.005,bevelEnabled:!0,bevelThickness:.002,bevelSize:.002,bevelSegments:1,steps:1}),e)}function rn(i,t,e,n){let s=Jt(i,"ribbon bow",t);for(let r of[-1,1]){let a=yt(s,"ribbon loop",n,[r*e*.58,.015,0],[e*.65,e*.43,e*.22]);a.rotation.z=r*.3;let o=yt(s,"ribbon tail",n,[r*e*.35,-e*.65,-.005],[e*.17,e*.65,e*.1]);o.rotation.z=r*.3}return yt(s,"ribbon knot",n,[0,0,e*.1],[e*.23,e*.3,e*.27]),s}function Id(i){let t=new Set,e=new Set;i.traverse(n=>{if(n.geometry&&t.add(n.geometry),n.material)for(let s of[n.material].flat())e.add(s)}),t.forEach(n=>n.dispose()),e.forEach(n=>n.dispose())}function Pd(i,t,e){let n=Jt(i,"hair"),s=Mt(e,{roughness:.68}),r=Mt(Yn(e,"#f2d4a2",.12)),a=[],o=[],l=48,c=18;for(let u=0;u<=c;u++)for(let f=0;f<=l;f++){let h=f/l*Math.PI*2,p=1.04+1.38*(1-Math.max(0,Math.cos(h))),x=u/c*p;if(a.push(.452*Math.sin(x)*Math.sin(h),.565*Math.cos(x)+.035,.407*Math.sin(x)*Math.cos(h)-.015),u<c&&f<l){let g=u*(l+1)+f,m=g+l+1;o.push(g,m,g+1,m,m+1,g+1)}}let d=new _e;if(d.setAttribute("position",new Zt(a,3)),d.setIndex(o),d.computeVertexNormals(),ie(n,"fitted hair cap",d,s),t==="curls"){for(let u=0;u<4;u++)for(let f=0;f<13;f++){let h=f*Math.PI*2/13+u*.17;if(Math.cos(h)>.35&&u>=1)continue;let p=u===0?.33:.47;yt(n,"soft curl",s,[Math.sin(h)*p,.42-u*.25,Math.cos(h)*p*.8-.04],[.18,.2,.18],16)}for(let u=-2;u<=2;u++)yt(n,"forehead curl",s,[u*.14,.4-Math.abs(u)*.027,.28],[.12,.115,.13],16)}else{for(let u=0;u<5;u++)Wt(n,"side-swept fringe",[[-.39+u*.025,.18+u*.026,.22],[-.24+u*.04,.36+u*.023,.31],[.03+u*.03,.45+u*.015,.31],[.28+u*.02,.31+u*.01,.19]],.054,s);if(t==="waves"||t==="bob"||t==="straight")for(let u=0;u<12;u++){let f=.98+u/11*(Math.PI*2-1.96),h=Math.sin(f)*.39,p=Math.cos(f)*.33,x=t==="bob"?.46:t==="straight"?1.28:.98;Wt(n,"rounded hair lock",[[h*.8,.35,p],[h*1.12,-.12,p*1.15],[h*1.04,-x*.7,p*1.17],[h*1.19,-x,p*.97]],t==="bob"?.1:.079,s),u%3===0&&Wt(n,"hair highlight",[[h*.82,.29,p*1.13],[h*1.19,-.15,p*1.25],[h*1.12,-x*.84,p*1.28]],.009,r)}if(t==="buns")for(let u of[-1,1]){yt(n,"space bun",s,[u*.42,.43,-.06],[.24,.25,.22]);let f=Ee(n,"bun ribbon",.4,.2,.2,.015,r);f.position.x=u*.42,f.position.z=-.06}if(t==="pony"){yt(n,"ponytail tie",Mt("#dfacc1"),[.11,.4,-.38],[.14,.11,.12]);for(let u=0;u<6;u++)Wt(n,"ponytail strand",[[.1+u*.012,.43,-.37],[.39+u*.015,.26,-.46],[.43+u*.015,-.2,-.4],[.32+u*.019,-.83,-.4]],.083,s)}if(t==="braids")for(let u of[-1,1]){for(let f=0;f<3;f++){let h=Array.from({length:25},(p,x)=>{let g=x*.64+f*Math.PI*2/3;return[u*.38+Math.sin(g)*.046,-.16-x/24*.74,.07+Math.cos(g)*.046]});Wt(n,"woven braid",h,.041,s)}rn(n,[u*.38,-.9,.1],.07,Mt("#dfa6bd"))}if(t==="twintails")for(let u of[-1,1]){rn(n,[u*.4,.29,-.04],.085,Mt("#dfacc1"));for(let f=0;f<5;f++)Wt(n,"twin ponytail",[[u*.4,.28,-.06],[u*(.6+f*.017),-.1,-.08],[u*(.55+f*.016),-.68,-.05],[u*.44,-.98,-.12]],.071,s)}if(t==="topknot"){yt(n,"top knot",s,[0,.68,-.1],[.25,.24,.23]);for(let u=0;u<4;u++)Ee(n,"bun wrap",.56+u*.07,.22-u*.015,.21-u*.015,.012,r).position.z=-.1;rn(n,[0,.57,.12],.09,Mt("#dba8b9"))}if(t==="puffs")for(let u of[-1,1]){yt(n,"round puff",s,[u*.48,.4,-.04],[.27,.28,.26]);for(let f=0;f<12;f++){let h=f/12*Math.PI*2;yt(n,"puff curl",s,[u*.48+Math.cos(h)*.21,.4+Math.sin(h)*.22,.11],[.1,.105,.1],12)}}if(t==="pixie")for(let u of[-1,1])Wt(n,"pixie side",[[u*.31,.31,.17],[u*.42,.08,.06],[u*.4,-.16,-.02]],.075,s);if(t==="sidebraid"){for(let u=0;u<3;u++)Wt(n,"long side braid",Array.from({length:30},(f,h)=>{let p=h*.67+u*Math.PI*2/3;return[.36+Math.sin(p)*.055,-.12-h/29*1.16,.14+Math.cos(p)*.055]}),.047,s);rn(n,[.36,-1.27,.17],.085,Mt("#dba8b9"))}}return n}function Ld(i,t,e){let n=Mt("#fffdf5",{roughness:.38}),s=Mt("#38292f"),r=Mt("#765040",{roughness:.4});for(let a of[-1,1]){yt(i,"ear",t,[a*.422,-.03,-.005],[.065,.11,.069]);let o=Jt(i,"eye",[a*.16,.057,.354]);o.rotation.y=a*.18,yt(o,"eye white",n,[0,0,0],[.087,.112,.037]),yt(o,"iris",r,[-a*.009,-.007,.032],[.048,.07,.018]),yt(o,"pupil",s,[-a*.009,-.006,.047],[.027,.048,.009]),yt(o,"eye sparkle",n,[-.016,.025,.054],[.018,.023,.008],12),Wt(o,"upper lash",[[-.085,.041,.008],[0,.103,.016],[.078,.059,.007]],.008,s),Wt(i,"eyebrow",[[a*.09,.225,.339],[a*.16,.246,.328],[a*.225,.222,.294]],.014,Mt(e));let l=yt(i,"rosy cheek",Mt("#dc8b8b",{transparent:!0,opacity:.27}),[a*.255,-.114,.298],[.064,.031,.012]);l.rotation.y=a*.45}yt(i,"button nose",t,[0,-.075,.378],[.05,.068,.067]),Wt(i,"smile",[[-.075,-.215,.333],[0,-.244,.354],[.075,-.215,.333]],.012,Mt("#9b4f62")),Wt(i,"smile highlight",[[-.051,-.216,.346],[0,-.225,.36],[.05,-.216,.347]],.007,n)}function Dd(i,t,e,n){for(let s of[-1,1]){let r=yt(i,"butterfly wing",e,[s*t*.43,t*.15,0],[t*.43,t*.55,t*.065],12);r.rotation.z=-s*.35,yt(i,"butterfly lower wing",n,[s*t*.29,-t*.35,.003],[t*.28,t*.28,t*.07],12)}li(i,"butterfly body",n,[0,0,.008],t*.065,t*.75)}function Nd(i,t,e){let n=e[t.makeup]?.shape||"none",s=Jt(i,"makeup");if(s.userData.style=n,n==="none")return;let r=t.makeupColor||e[t.makeup].color,a=Mt(r,{roughness:.58}),o=Mt(Yn(r,"#fff3d6",.5)),l=Mt("#ebc875",{metalness:.25,roughness:.35});if(["rosy","sunset","stardust","diamond"].includes(n)){for(let h of[-1,1]){let p=yt(s,"blush",Mt(r,{transparent:!0,opacity:.54}),[h*.255,-.117,.309],[.071,.037,.008]);p.rotation.y=h*.46,n!=="rosy"&&Wt(s,"eyeshadow",[[h*.08,.16,.356],[h*.15,.193,.345],[h*.23,.15,.315]],.018,a)}Wt(s,"lip color",[[-.068,-.221,.342],[0,-.246,.364],[.068,-.221,.342]],.015,a)}for(let h of[-1,1]){let p=Jt(s,"face paint",[h*.25,-.12,.318]);if(p.rotation.y=h*.48,n==="stardust"){let x=Jt(p,"cheek star");qn(x,.046,l);for(let[g,m]of[[-.06,.025],[.057,.035],[.028,-.053]])yt(p,"glitter dot",o,[g,m,.001],[.012,.012,.004],12)}if(n==="diamond"){qn(p,.047,o);for(let x of[-.057,.057])yt(p,"pearl face gem",o,[x,.01,0],[.014,.014,.005],12)}if(n==="ghost"){yt(p,"friendly ghost paint",a,[0,0,0],[.049,.06,.006],16);for(let x of[-.021,0,.021])yt(p,"ghost scallop",a,[x,-.039,0],[.018,.027,.006],12);for(let x of[-.017,.017])yt(p,"ghost eye",Mt("#514859"),[x,.012,.009],[.007,.011,.003],12)}if(n==="freckles")for(let[x,g]of[[-.046,.018],[-.008,.027],[.031,.014],[.052,-.016],[-.027,-.021],[.013,-.019]])yt(p,"freckle",Mt("#a06a49"),[x,g,.002],[.008,.007,.003],12);if(n==="rainbow"&&["#db91a5","#edcc82",r].forEach((x,g)=>{let m=.076-g*.018;Wt(p,"rainbow paint",Array.from({length:13},(b,w)=>{let v=w/12*Math.PI;return[Math.cos(v)*m,Math.sin(v)*m-.032,.003+g*.002]}),.009,Mt(x))}),n==="butterfly"){let x=Jt(s,"eye butterfly",[h*.247,.071,.334]);x.rotation.y=h*.45,Dd(x,.124,a,o),x.position.x+=h*.045}if(n==="kitty")for(let x=0;x<3;x++)Wt(p,"painted whisker",[[0,.013-x*.019,.005],[h*.068,.036-x*.037,-.003]],.006,Mt("#755a69"))}n==="kitty"&&yt(s,"kitty nose",a,[0,-.087,.442],[.044,.028,.012],16),s.updateWorldMatrix(!0,!0);let c=i.matrixWorld.clone().invert(),d=new Set,u=1;s.traverse(h=>{if(!h.isMesh||(h.castShadow=!1,["lip color","kitty nose"].includes(h.name)))return;d.add(h.material),h.material=new xn({color:h.material.color.clone(),transparent:h.material.transparent,opacity:h.material.opacity,depthWrite:!1}),h.renderOrder=u++;let p=new le().multiplyMatrices(c,h.matrixWorld),x=p.clone().invert(),g=h.geometry,m=g.attributes.position,b=g.index,w=[],v=b?b.count:m.count;for(let S=0;S<v;S+=3){let A=[0,1,2].map(T=>new P().fromBufferAttribute(m,b?b.getX(S+T):S+T).applyMatrix4(p));if(!(new P().subVectors(A[1],A[0]).cross(new P().subVectors(A[2],A[0])).z<=0))for(let T of A)T.z=.375*Math.sqrt(Math.max(.001,1-(T.x/.424)**2-(T.y/.525)**2))+.006,T.applyMatrix4(x),w.push(T.x,T.y,T.z)}let M=new _e;M.setAttribute("position",new Zt(w,3)),M.computeVertexNormals(),h.geometry=M,g.dispose()});let f=new Set;s.traverse(h=>{h.material&&f.add(h.material)}),d.forEach(h=>{f.has(h)||h.dispose()})}function Hx(i,t,e,n){let s=["sweater","hoodie","vest","bomber","denim","varsity"].includes(t),r=["petal","cloud","bow","gown","long","blouse","cosmic","butterfly","cupcake"].includes(t);t==="varsity"&&(e=Mt(sn,{side:Ce}));for(let a of i.arms){let o=Jt(a.upper,"fitted sleeve");o.userData.garmentPart="sleeve",a.upperSkin.visible=!1,ie(o,"sleeve shell",Mn(s?[[-.49,.105,.104],[-.39,.115,.114],[-.16,.133,.128],[.02,.125,.12],[.055,.06,.065]]:r?[[-.28,.108,.106],[-.24,.156,.145],[-.12,.172,.153],[0,.145,.13],[.05,.068,.066]]:[[-.27,.122,.12],[-.14,.135,.13],[.02,.125,.12],[.05,.063,.065]]),e),Ee(o,"sleeve hem",s?-.47:-.27,s?.108:.117,s?.108:.113,.013,n),s&&(a.lowerUpperSkin.visible=!1,a.forearmSkin.visible=!1,ie(a.forearm,"fitted forearm sleeve",Mn([[-.425,.087,.088],[-.25,.106,.101],[0,.111,.109],[.035,.098,.098]]),e),Ee(a.forearm,"cuff",-.41,.091,.091,.017,n))}}function dl(i,t,e,n){let s=Mt(sn),r=Mt("#e9c578",{metalness:.2,roughness:.4}),a=t[0][0],o=t.at(-1)[0];if(["petal","meadow","flower","star","gown","sparkle","cosmic","star-skirt","butterfly"].includes(e))for(let l=0;l<3;l++)for(let c=0;c<7;c++){let d=c/7*Math.PI*2+l*.42,u=a+(o-a)*(.18+l*.29),[f,h]=Ln(t,u),p=Jt(i,"woven decoration",[Math.sin(d)*(f+.01),u,Math.cos(d)*(h+.01)]);p.quaternion.setFromUnitVectors(Vx,new P(Math.sin(d)/f,.12,Math.cos(d)/h).normalize()),["star","gown","sparkle","cosmic","star-skirt"].includes(e)?qn(p,.037,r):e==="butterfly"?Dd(p,.047,Mt(Yn(n,"#db91a5",.6)),r):Qr(p,.032,s,r)}if(["cloud","tutu"].includes(e))for(let l=1;l<=3;l++){let c=a+(o-a)*l/4,[d,u]=Ln(t,c);Ee(i,"tiered ruffle",c,d+.006,u+.006,.015,Mt(Yn(n,"#fff9ee",.23)))}}function fl(i,t,e,n,s="fabric stripe"){let r=t[0][0],a=t.at(-1)[0];for(let o=0;o<n;o++){let l=r+(a-r)*o/n,c=r+(a-r)*(o+.98)/n,d=[[l,...Ln(t,l)],...t.filter(u=>u[0]>l&&u[0]<c),[c,...Ln(t,c)]];ie(i,s,Mn(Cd(d,.006)),Mt(e[o%e.length],{side:Ce}))}}var Gx={velvet:"long",pearl:"long",aurora:"long",diamond:"petal",tweed:"denim",tuxedo:"blouse",witch:"long",pumpkin:"petal",ghost:"cloud",vampire:"long",skeleton:"sweater",cherry:"meadow",plaid:"bow",raincoat:"bomber",sport:"tee"};function nh(i,t,e,n){let s=Mt(sn),r=Mt("#e7c57f",{metalness:.35}),a=Mt("#32313f");if(["pearl","diamond","velvet","cherry","sequin"].includes(e))for(let o=0;o<3;o++)for(let l=0;l<9;l++){let c=l/9*Math.PI*2+o*.2,d=t[0][0]+(t.at(-1)[0]-t[0][0])*(.15+o*.3),[u,f]=Ln(t,d),h=Jt(i,"boutique fabric detail",[Math.sin(c)*(u+.018),d,Math.cos(c)*(f+.018)]);if(h.rotation.y=c,e==="pearl")yt(h,"sewn pearl",s,[0,0,0],[.022,.022,.015],12);else if(e==="cherry"){for(let p of[-1,1])yt(h,"cherry",Mt("#a95665"),[p*.024,0,0],[.028,.029,.014],12);Wt(h,"cherry stem",[[-.023,.012,0],[0,.07,0],[.023,.012,0]],.006,Mt("#708d74"))}else e==="velvet"?o===0&&qn(h,.022,r):ie(h,"sewn crystal",new Vi(.025),e==="diamond"?s:r)}if(e==="aurora"&&fl(i,t,["#bda5d8","#8eafd1","#83bfb7",n,"#f2e9d8"],7),e==="plaid"||e==="tweed"){for(let o=0;o<6;o++){let l=t[0][0]+(t.at(-1)[0]-t[0][0])*(o+.2)/6,[c,d]=Ln(t,l);Ee(i,"woven check",l,c+.009,d+.009,.006,s)}for(let o=0;o<12;o++){let l=o/12*Math.PI*2;Wt(i,"vertical check",t.map(([c,d,u])=>[Math.sin(l)*(d+.01),c,Math.cos(l)*(u+.01)]),.005,s)}}}function Ud(i,t,e,n,s){let r=s[n.dress?.id||n.top?.id];if(r){let f=r.shape,h={...r,shape:Gx[f]||f},p=(n.dress||n.top).color,x=Mt(p,{side:Ce}),g=Mt(Yn(p,"#fff5e6",.3));e.visible=!1;let m=Jt(i,h.name);m.userData.itemId=h.id,m.userData.fitted=!0;let b=Cd([[1.72,...Ln(ih,1.72)],...ih.filter(w=>w[0]>1.72)],.019);if(ie(m,"tailored bodice",Mn(b),x),nh(m,b,f,p),Ee(m,"neckline",2.3,.15,.15,.018,g),Hx(t,h.shape,x,g),f==="tuxedo"){rn(m,[0,2.23,.21],.067,Mt("#32313f"));for(let w of[-1,1])Wt(m,"satin lapel",[[w*.14,2.29,.13],[w*.22,2.13,.19],[0,1.85,.22]],.043,Mt(sn))}if(f==="skeleton"){let w=Mt(sn);Wt(m,"skeleton spine",[[0,1.78,.22],[0,2.18,.235]],.022,w);for(let v of[-1,1])for(let M=0;M<4;M++)Wt(m,"friendly rib",[[0,2.13-M*.08,.23],[v*.16,2.14-M*.08,.23],[v*.205,2.1-M*.08,.18]],.016,w)}if(["ghost","pumpkin"].includes(f)){let w=Mt("#32313f");for(let v of[-1,1])yt(m,"costume eye",w,[v*.1,2.06,.233],[.03,.045,.014],12);if(Wt(m,"costume smile",[[-.1,1.92,.217],[0,1.87,.23],[.1,1.92,.217]],.017,w),f==="pumpkin")for(let v of[-1,1]){let M=yt(m,"pumpkin collar leaf",Mt("#80966b"),[v*.1,2.28,.14],[.1,.025,.075]);M.rotation.z=v*.3}}if(f==="witch")for(let w=0;w<3;w++)for(let v of[-1,1])Wt(m,"golden costume lacing",[[v*.08,1.82+w*.1,.23],[-v*.08,1.92+w*.1,.23]],.009,Mt("#edcc82"));if(f==="vampire")for(let w of[-1,1]){let v=new je;v.moveTo(w*.1,2.27),v.lineTo(w*.32,2.58),v.lineTo(w*.37,2.23),v.closePath(),ie(m,"storybook collar",new cn(v,{depth:.045,bevelEnabled:!1}),Mt("#32313f"),[0,0,-.13])}if(["bow","blouse"].includes(h.shape)&&rn(m,[0,2.17,.238],.082,g),h.shape==="tee"){let w=Jt(m,"sunshine embroidery",[0,2.02,.219]);Qr(w,.066,Mt("#ecc570"),Mt("#bc8359"))}if(h.shape==="sun")for(let w of[1.87,2,2.13])yt(m,"button",g,[0,w,Ln(b,w)[1]+.012],[.018,.018,.008],12);if(h.shape==="sweater")for(let w=-3;w<=3;w++){let v=w*.22;Wt(m,"knit rib",[[Math.sin(v)*.283,1.68,Math.cos(v)*.203],[Math.sin(v)*.28,1.82,Math.cos(v)*.198],[Math.sin(v)*.314,2.1,Math.cos(v)*.217]],.004,g)}if(h.shape==="hoodie"){yt(m,"hood",x,[0,2.22,-.16],[.26,.17,.16]);for(let w of[-1,1])Wt(m,"hood drawstring",[[w*.1,2.25,.16],[w*.1,2.08,.223],[w*.12,1.95,.217]],.009,Mt(sn));yt(m,"front pocket",g,[0,1.77,.196],[.16,.09,.025])}if(h.shape==="vest"||h.shape==="sailor"){let w=Mt(sn);Wt(m,"V collar",[[-.135,2.3,.12],[-.115,2.21,.21],[0,2.06,.223],[.115,2.21,.21],[.135,2.3,.12]],.024,w),h.shape==="sailor"&&rn(m,[0,2.08,.245],.068,Mt("#607894"))}if(["bomber","denim","varsity"].includes(h.shape)){let w=Mt(sn),v=Mt("#dfbf7e",{metalness:.4,roughness:.4});Wt(m,"jacket fastening",[[0,1.73,.211],[0,1.99,.219],[0,2.22,.218]],.013,h.shape==="denim"?g:w),Ee(m,"ribbed jacket hem",1.735,.299,.214,.027,g);for(let S of[-1,1]){let A=ie(m,"jacket pocket",new ze(.115,.12,.02),g,[S*.167,1.89,.191]);A.rotation.y=S*.25,yt(m,"pocket button",v,[S*.167,1.931,.208],[.012,.012,.006],12)}let M=Jt(m,"jacket badge",[-.17,2.08,.202]);if(M.rotation.y=-.25,qn(M,h.shape==="varsity"?.065:.045,w),h.shape==="denim")for(let S of[1.8,1.94,2.08,2.21])yt(m,"denim button",v,[.025,S,Ln(b,S)[1]+.012],[.015,.015,.008],12)}if(h.shape==="stripes"&&fl(m,b,[p,sn],9),h.shape==="rainbow"&&fl(m,b,[p,"#edcc82","#83bfb7","#8eafd1","#bda5d8"],5),["sparkle","cosmic"].includes(h.shape)&&dl(m,[[1.84,.271,.196],[2.18,.352,.224]],"sparkle",p),n.dress){let w=["gown","cosmic","long"].includes(h.shape),v=w?.15:1,M=w?[[.15,.85,.65],[.39,.78,.6],[.9,.53,.4],[1.38,.34,.255],[1.73,.291,.203]]:[[v,.55,.39],[1.16,.48,.343],[1.4,.357,.266],[1.73,.291,.203]],S=Jt(i,"fitted dress skirt");if(S.userData.itemId=h.id,S.userData.fitted=!0,ie(S,"full skirt shell",Mn(M,{pleats:h.shape==="rainbow"?0:.016}),x),Ee(S,"finished hem",v,.55+(w?.3:0),.39+(w?.26:0),.013,g),Ee(S,"waist seam",1.72,.292,.205,.02,g),rn(S,[0,1.73,.22],.064,g),dl(S,M,r.shape,p),nh(S,M,f,p),h.shape==="rainbow"&&fl(S,M,["#bda5d8","#8eafd1","#83bfb7","#edcc82",p],5),h.shape==="cupcake")for(let A=0;A<3;A++){let _=1+A*.205,T=_+.27,[R,I]=Ln(M,_),[D,O]=Ln(M,T),L=Mt(Yn(p,sn,A*.15),{side:Ce});ie(S,"layered cupcake ruffle",Mn([[_,R+.045,I+.035],[_+.07,R+.018,I+.012],[T,D+.008,O+.008]],{pleats:.025}),L),Ee(S,"ruffle trim",_,R+.045,I+.035,.012,g)}["petal","meadow","star"].includes(h.shape)&&dl(m,[[1.82,.271,.196],[2.18,.352,.224]],h.shape,p),h.shape==="bow"&&rn(S,[0,1.69,-.228],.13,g);return}}if(!n.bottom)return;let a=s[n.bottom.id],o={...a,shape:{palazzo:"flare",sequin:"star-skirt",skeleton:"trousers"}[a.shape]||a.shape},l=n.bottom.color,c=Mt(l,{side:Ce}),d=Mt(Yn(l,"#fff8e9",.2)),u=Jt(i,o.name);if(u.userData.itemId=o.id,u.userData.fitted=!0,["jeans","trousers","shorts","cargo","flare"].includes(o.shape)){let f=o.shape==="shorts",h=o.shape==="flare"&&!["boot","starboot","laceboot"].includes(s[n.shoes?.id]?.shape);ie(u,"tailored waistband",Mn([[1.35,.33,.219],[1.49,.325,.218],[1.62,.304,.21],[1.72,.28,.202]]),c);for(let p of t.legs){let x=Jt(p.hip,"fitted trouser leg");if(x.userData.itemId=o.id,x.userData.fitted=!0,ie(x,"upper trouser shell",Mn(f?[[-.37,.157,.169],[-.1,.174,.198],[.08,.163,.189]]:[[-.685,.139,.149],[-.45,.146,.164],[-.16,.166,.187],[.08,.163,.19]]),c),f?Ee(x,"shorts cuff",-.365,.16,.171,.014,d):(p.thighSkin.visible=!1,p.shinSkin.visible=!1,ie(p.knee,"lower trouser shell",Mn([[-.64,h?.205:.132,h?.19:.15],[-.37,h?.166:.139,h?.17:.153],[-.07,.139,.15],[.04,.142,.15]]),c),Ee(p.knee,"trouser cuff",-.63,h?.205:.133,h?.19:.151,.012,d)),o.shape==="cargo"&&(ie(x,"cargo pocket",new ze(.055,.24,.19),d,[p.side*.146,-.32,.025]),ie(x,"cargo pocket flap",new ze(.06,.065,.2),c,[p.side*.158,-.23,.025])),a.shape==="skeleton"){let g=Mt(sn);Wt(x,"upper leg costume bone",[[0,-.13,.2],[0,-.53,.17]],.026,g),Wt(p.knee,"lower leg costume bone",[[0,-.08,.17],[0,-.52,.17]],.025,g);for(let m of[-.13,-.53])for(let b of[-1,1])yt(x,"bone end",g,[b*.022,m,.2],[.028,.025,.014],12)}}}else{let f=[[1.02,.53,.375],[1.29,.404,.291],[1.5,.324,.227],[1.72,.279,.201]];ie(u,"full skirt shell",Mn(f,{pleats:o.shape==="pleated"?.025:.012}),c),Ee(u,"skirt hem",1.02,.531,.377,.016,d),dl(u,f,o.shape,l),nh(u,f,a.shape,l)}Ee(u,"waistband",1.72,.284,.207,.027,d)}function Fd(i,t,e,n){let s=t.shape;t={...t,shape:{pearlshoe:"maryjane",diamondboot:"starboot",stripeboot:"boot",ribbonshoe:"maryjane"}[s]||s};let r=Mt(e,{roughness:.55}),a=Mt(Yn(e,"#fff6de",.45)),o=Mt(sn),l=["boot","starboot","laceboot","hightop"].includes(t.shape);for(let c of i.legs){let d=Jt(c.foot,t.name,[0,0,.07]);if(d.userData.itemId=t.id,d.userData.fitted=!0,c.footSkin.visible=!1,yt(d,"rounded shoe",r,[0,-.025,.063],[.142,.103,.254]),yt(d,"shoe sole",a,[0,-.081,.063],[.147,.045,.262]),l){let u=Jt(c.knee,"fitted boot calf",[0,-.67,.07]),f=t.shape==="hightop"?.24:.46;if(ie(u,"boot shaft",Mn([[.005,.149,.17],[f*.45,.151,.166],[f,.154,.166]]),r,[0,0,-.07]),Ee(u,"boot top",f,.154,.166,.015,a).position.z=-.07,s==="stripeboot")for(let h of[.09,.19,.29,.39])Ee(u,"costume boot stripe",h,.156,.173,.026,a).position.z=-.07;if(t.shape==="starboot"){let h=Jt(u,"boot star",[0,.25,.101]);qn(h,.05,o)}else if(["laceboot","hightop"].includes(t.shape))for(let h=0;h<4;h++){let p=.06+h*(f-.1)/4;Wt(u,"crossed boot laces",[[-.061,p,.091],[.061,p+.04,.091]],.008,o),Wt(u,"crossed boot laces",[[.061,p,.092],[-.061,p+.04,.092]],.008,o)}else for(let h of[.12,.22,.32])Wt(u,"boot stitching",[[-.06,h,.087],[0,h,.101],[.06,h,.087]],.008,a)}else if(t.shape==="sneaker")for(let u of[.03,.09,.15])Wt(d,"shoelace",[[-.07,.052,u],[0,.065,u+.008],[.07,.052,u]],.009,o);else if(t.shape==="sandal"){yt(d,"sandal opening",Mt(n),[0,.025,.07],[.112,.071,.218]);for(let u of[-.03,.19])Wt(d,"sandal strap",[[-.128,-.005,u],[-.095,.06,u],[0,.075,u],[.095,.06,u],[.128,-.005,u]],.028,r)}else if(t.shape==="slipper"){yt(d,"fluffy slipper front",a,[0,.04,.2],[.14,.095,.15]);for(let u of[-1,1])yt(d,"bunny ear",a,[u*.06,.15,.16],[.032,.09,.03])}else{if(Wt(d,"mary jane strap",[[-.13,0,.035],[-.08,.07,.035],[0,.09,.035],[.08,.07,.035],[.13,0,.035]],.019,a),rn(d,[0,.065,.22],.037,a).rotation.x=-.7,s==="pearlshoe")for(let u of[-.08,0,.08])yt(d,"shoe pearl",o,[u,.095,.035],[.022,.022,.022],12);s==="ribbonshoe"&&(rn(d,[0,.1,.06],.065,r).rotation.x=-.7)}}}function Od(i,t,e,n){for(let[s,r]of Object.entries(e.extras)){if(!r)continue;let a=n[r.id],o=a.shape,l={...a,shape:{royalcrown:"tiara",quiltedbag:"bag",starcape:"cape",pumpkinbag:"bag",pumpkinhat:"beret"}[o]||o},c=Mt(r.color,{roughness:.55}),d=Mt(sn),u=Mt("#e6bf69",{metalness:.4,roughness:.4}),f=["head","ears"].includes(s)?t.head:s==="bag"||s==="wrist"?t.arms[1].forearm:i,h=Jt(f,l.name);if(h.userData.itemId=l.id,s==="head"&&e.hair==="curls"&&(h.scale.setScalar(1.22),h.position.y=.025),s==="pet"){h.userData.heldPet=!0,h.position.set(-.23,1.9,.51);let p=c,x=Mt(Yn(r.color,sn,.55)),g=Mt("#382a37");yt(h,"pet body",p,[0,.14,0],[.19,.2,.15]),yt(h,"pet head",p,[0,.35,.055],[.18,.165,.15]);for(let m of[-1,1])if(yt(h,"pet paw",x,[m*.125,.035,.11],[.075,.065,.078]),yt(h,"pet eye",g,[m*.065,.37,.192],[.019,.024,.012],12),yt(h,"pet eye shine",d,[m*.06,.38,.202],[.005,.006,.003],8),l.shape==="petrabbit")yt(h,"bunny ear",p,[m*.085,.59,.04],[.066,.19,.05]);else if(["petcat","petroyalcat"].includes(l.shape)){let b=ie(h,"kitten ear",new zi(.083,.17,3),p,[m*.125,.5,.04]);b.rotation.z=-m*.14}else{let b=yt(h,"puppy ear",l.shape==="petpoodle"?x:Mt(Yn(r.color,"#75513d",.28)),[m*.165,.35,.025],[.075,.14,.08]);b.rotation.z=m*.17}if(yt(h,"pet muzzle",x,[0,.29,.177],[.085,.06,.04]),yt(h,"pet nose",g,[0,.32,.212],[.024,.017,.012],12),rn(h,[.11,.48,.13],.058,l.shape==="petpoodle"?u:Mt("#dba1bc")),Wt(h,"curled pet tail",[[.14,.12,-.08],[.25,.16,-.12],[.28,.31,-.12]],.037,p),l.shape==="petpoodle")for(let m=0;m<7;m++)yt(h,"poodle curl",x,[(m-3)*.045,.5+Math.sin(m)*.02,.06],[.056,.059,.05],12);if(l.shape==="petroyalcat"){Ee(h,"tiny crown",.5,.11,.1,.014,u);for(let m=-1;m<=1;m++)ie(h,"tiny crown point",new zi(.024,.075,4),u,[m*.07,.55,.08])}}if(["heartnecklace","gemnecklace"].includes(l.shape))if(Wt(h,"fine necklace chain",Array.from({length:33},(p,x)=>{let g=x/32*Math.PI*2;return[Math.sin(g)*.19,2.28-Math.max(0,Math.cos(g))*.15,Math.cos(g)*.195]}),.009,u,!0),l.shape==="gemnecklace")ie(h,"necklace gemstone",new Vi(.064),c,[0,2.095,.214]);else{let p=new je;p.moveTo(0,-.06),p.bezierCurveTo(-.12,.01,-.04,.11,0,.04),p.bezierCurveTo(.04,.11,.12,.01,0,-.06),ie(h,"heart pendant",new cn(p,{depth:.018,bevelEnabled:!1}),c,[0,2.1,.209])}if(["flowerearrings","diamondearrings"].includes(l.shape))for(let p of[-1,1]){yt(h,"earring stud",u,[p*.444,-.06,.04],[.025,.025,.025],12);let x=Jt(h,"earring pendant",[p*.449,-.17,.05]);l.shape==="flowerearrings"?Qr(x,.06,c,u):ie(x,"diamond drop",new Vi(.061),c)}if(["bracelet","pearlbracelet"].includes(l.shape)){Ee(h,"bracelet chain",-.375,.094,.098,.012,u);for(let p=0;p<10;p++){let x=p/10*Math.PI*2;yt(h,"bracelet bead",l.shape==="pearlbracelet"?d:c,[Math.sin(x)*.097,-.375,Math.cos(x)*.102],[.02,.022,.02],12)}if(l.shape==="bracelet"){let p=Jt(h,"star charm",[.03,-.43,.1]);qn(p,.035,u)}}if(l.shape==="hairbow"&&(rn(h,[.28,.43,.31],.16,c).rotation.z=-.25),l.shape==="crown"){Ee(h,"flower crown vine",.39,.39,.33,.025,Mt("#91a983"));for(let p=0;p<9;p++){let x=p/9*Math.PI*2,g=Jt(h,"crown flower",[Math.sin(x)*.4,.4,Math.cos(x)*.34]);g.rotation.y=x,Qr(g,.08,c,u)}}if(l.shape==="tiara"){Ee(h,"tiara band",.4,.37,.32,.021,u);for(let p=-2;p<=2;p++){let x=p*.32,g=Math.sin(x)*.375,m=Math.cos(x)*.326,b=.11+(2-Math.abs(p))*.04;Wt(h,"tiara point",[[g-.05,.41,m],[g,.41+b,m],[g+.05,.41,m]],.015,c),yt(h,"tiara jewel",d,[g,.41+b,m],[.028,.035,.02],12)}}if(l.shape==="beret"){let p=yt(h,"beret crown",c,[-.025,.48,-.01],[.49,.17,.43]);if(p.rotation.z=.15,Ee(h,"beret band",.41,.4,.34,.027,c),li(h,"beret tip",c,[-.045,.66,0],.026,.1),o==="pumpkinhat"){li(h,"pumpkin stem",Mt("#719063"),[0,.72,0],.035,.17);let x=yt(h,"pumpkin hat leaf",Mt("#88a277"),[.12,.66,0],[.16,.033,.075]);x.rotation.z=.2}}if(["witchhat","wizardhat","sunhat"].includes(l.shape))if(ie(h,"wide hat brim",new qe(.57,.57,.055,40),c,[0,.43,0]),ie(h,"hat crown",l.shape==="sunhat"?new qe(.32,.36,.24,32):new zi(.34,.77,32),c,[0,l.shape==="sunhat"?.55:.82,0]),Ee(h,"hat ribbon",.51,.33,.33,.036,l.shape==="sunhat"?d:u),l.shape==="wizardhat")for(let[p,x]of[[-.12,.72],[.08,.92],[.02,.61]]){let g=Jt(h,"wizard hat star",[p,x,.26-(x-.6)*.42]);qn(g,.055,u)}else rn(h,[.15,.53,.32],.085,d);if(l.shape==="catears"){Wt(h,"kitten headband",[[-.39,.21,0],[-.31,.43,0],[0,.53,0],[.31,.43,0],[.39,.21,0]],.027,c);for(let p of[-1,1]){let x=new je;x.moveTo(-.14,0),x.lineTo(0,.28),x.lineTo(.14,0),x.closePath();let g=ie(h,"kitten ear",new cn(x,{depth:.07,bevelEnabled:!0,bevelSize:.025,bevelThickness:.02,bevelSegments:2,steps:1}),c,[p*.3,.43,0]);g.rotation.z=-p*.16;let m=ie(g,"pink inner ear",new Dr(x),Mt("#e9b0bd"),[0,.035,.095],[.65,.7,1])}}if(l.shape==="headphones"){Wt(h,"headphone band",[[-.49,-.02,0],[-.46,.35,-.02],[0,.6,-.025],[.46,.35,-.02],[.49,-.02,0]],.041,d);for(let p of[-1,1])yt(h,"headphone cushion",d,[p*.45,-.025,.012],[.1,.16,.13]),yt(h,"headphone cup",c,[p*.515,-.025,.014],[.085,.15,.122])}if(l.shape==="pearls")for(let p=0;p<22;p++){let x=p/22*Math.PI*2;yt(h,"necklace pearl",d,[Math.sin(x)*.19,2.32-.06*Math.max(0,Math.cos(x)),Math.cos(x)*.18],[.026,.026,.026],12)}if(l.shape==="bag"||l.shape==="heartbag")if(h.position.set(.025,-.49,.01),Wt(h,"bag handle",[[-.12,-.04,0],[-.1,.15,0],[.1,.15,0],[.12,-.04,0]],.02,c),l.shape==="bag")if(yt(h,"bag body",c,[0,-.14,0],[.19,.17,.09]),o==="pumpkinbag"){for(let p of[-1,1])yt(h,"pumpkin pail eye",Mt("#32313f"),[p*.065,-.09,.088],[.022,.028,.012],12);Wt(h,"pumpkin pail smile",[[-.075,-.19,.08],[0,-.23,.095],[.075,-.19,.08]],.013,Mt("#32313f"))}else if(o==="quiltedbag"){for(let p of[-.08,0,.08])Wt(h,"quilt seam",[[p-.07,-.2,.08],[p+.07,-.06,.08]],.005,d),Wt(h,"quilt seam",[[p-.07,-.06,.08],[p+.07,-.2,.08]],.005,d);yt(h,"gold clasp",u,[0,-.09,.105],[.035,.025,.014],12)}else{let p=Jt(h,"bag flower",[0,-.14,.092]);Qr(p,.06,d,u)}else{let p=new je;p.moveTo(0,-.31),p.bezierCurveTo(-.36,-.1,-.12,.17,0,-.025),p.bezierCurveTo(.12,.17,.36,-.1,0,-.31),ie(h,"heart purse",new cn(p,{depth:.1,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:3,steps:1}),c,[0,0,-.04])}if(l.shape==="wings"){h.position.set(0,2.05,-.235);for(let p of[-1,1]){let x=Jt(h,"fairy wing");x.rotation.y=p*.18;let g=yt(x,"upper wing",c,[p*.4,.12,-.02],[.38,.5,.04]);g.rotation.z=p*-.6;let m=yt(x,"lower wing",c,[p*.32,-.32,-.02],[.31,.28,.035]);m.rotation.z=p*.6,Wt(x,"wing vein",[[p*.05,0,.025],[p*.32,.1,.03],[p*.6,.38,.025]],.009,d);let b=Jt(x,"wing sparkle",[p*.45,.2,.03]);qn(b,.055,d)}}if(l.shape==="batwings")for(let p of[-1,1]){let x=new je;x.moveTo(0,0),x.quadraticCurveTo(p*.35,.59,p*.94,.42),x.lineTo(p*.79,-.05),x.quadraticCurveTo(p*.6,.1,p*.51,-.27),x.quadraticCurveTo(p*.29,-.09,p*.18,-.43),x.lineTo(0,-.15),ie(h,"friendly bat wing",new cn(x,{depth:.045,bevelEnabled:!0,bevelThickness:.008,bevelSize:.012,bevelSegments:1,steps:1}),c,[0,2.08,-.26]),Wt(h,"bat wing seam",[[0,2.08,-.205],[p*.46,2.4,-.205],[p*.9,2.5,-.205]],.012,d)}if(l.shape==="cape"){let p=[],x=[];for(let v=0;v<=12;v++)for(let M=0;M<=24;M++){let S=v/12,A=(M/24-.5)*2.7,_=.18+S*.55,T=.245+S*.29;if(p.push(Math.sin(A)*_,2.28-S*1.3+Math.sin(M/24*Math.PI)*S*.06,-Math.cos(A)*T-.03),v<12&&M<24){let R=v*25+M;x.push(R,R+1,R+24+1,R+1,R+24+2,R+24+1)}}let b=new _e;b.setAttribute("position",new Zt(p,3)),b.setIndex(x),b.computeVertexNormals(),ie(h,"hero cape fabric",b,Mt(r.color,{side:Ce}));let w=Jt(h,"cape star",[0,1.56,-.446]);w.rotation.y=Math.PI,qn(w,.15,u),Ee(h,"cape collar",2.3,.153,.153,.016,u)}}}function Bd(i,t){let e=new oe,n={arms:[],legs:[],head:Jt(e,"display head")};for(let u of[-1,1]){let f=Jt(e,"display shoulder",[u*.337,2.17,0]);f.rotation.z=u*.22;let h=Jt(f,"display elbow",[0,-.47,0]);n.arms.push({side:u,upper:f,forearm:h,upperSkin:{},lowerUpperSkin:{},forearmSkin:{}});let p=Jt(e,"display hip",[u*.155,1.51,0]),x=Jt(p,"display knee",[0,-.68,0]),g=Jt(x,"display ankle",[0,-.67,0]);n.legs.push({side:u,hip:p,knee:x,foot:g,thighSkin:{},shinSkin:{},footSkin:{}})}let s={id:i.id,color:i.color},r={dress:null,top:null,bottom:null,shoes:null,extras:{},skin:"#e4ba9e",hair:"waves",hairColor:"#493027",makeup:s},a={dresses:"dress",tops:"top",bottoms:"bottom"}[i.category];if(a)r[a]=s,Ud(e,n,{},r,t);else if(i.category==="shoes")Fd(n,i,i.color,r.skin);else if(i.category==="extras")r.extras[i.slot]=s,Od(e,n,r,t),["neck","wrist"].includes(i.slot)&&(e.rotation.x=.35),["cape","starcape"].includes(i.shape)&&(e.rotation.y=Math.PI);else{let u=Mt(r.skin);yt(n.head,"display face",u,[0,0,0],[.424,.525,.375],20),Ld(n.head,u,r.hairColor),i.category==="hair"?Pd(n.head,i.shape,i.color):Nd(n.head,r,t)}e.updateMatrixWorld(!0);let o=new Map;e.traverseVisible(u=>{if(!u.isMesh)return;let f=u.material,h=[f.type,f.roughness,f.metalness,f.transparent,f.opacity,f.side,f.depthWrite,u.renderOrder>0].join("|");if(!o.has(h)){let m=f.clone();m.color.set("#ffffff"),m.vertexColors=!0,o.set(h,{material:m,geometries:[],order:u.renderOrder>0?1:0})}let p=new _e,x=u.geometry.attributes.position;p.setAttribute("position",x.clone()),p.setAttribute("normal",u.geometry.attributes.normal.clone()),p.setIndex(u.geometry.index?u.geometry.index.clone():Array.from({length:x.count},(m,b)=>b));let g=new Float32Array(x.count*3);for(let m=0;m<x.count;m++)g.set([f.color.r,f.color.g,f.color.b],m*3);p.setAttribute("color",new Oe(g,3)),p.applyMatrix4(u.matrixWorld),o.get(h).geometries.push(p)});let l=new oe;l.name=i.name,l.userData.itemId=i.id;for(let u of o.values()){let f=Ad(u.geometries);u.geometries.forEach(p=>p.dispose());let h=new Se(f,u.material);h.renderOrder=u.order,l.add(h)}Id(e);let c=new Xe().setFromObject(l),d=c.getCenter(new P);return l.children.forEach(u=>u.geometry.translate(-d.x,-c.min.y,-d.z)),l}function ta(i,t){let e=new oe;e.name="Style Club fitted character";let n=Mt(i.skin,{roughness:.82}),s={arms:[],legs:[],head:Jt(e,"head joint",[0,2.88,0])},r=ie(e,"body under clothes",Mn(ih),n);li(e,"neck",n,[0,2.36,0],.115,.25),yt(s.head,"head",n,[0,0,0],[.424,.525,.375],32),Ld(s.head,n,i.hairColor),Nd(s.head,i,t),Pd(s.head,t[i.hair].shape,i.hairColor);for(let _ of[-1,1]){let T=Jt(e,_<0?"left shoulder":"right shoulder",[_*.337,2.17,0]),R=li(T,"covered upper arm",n,[0,-.115,0],.102,.285),I=li(T,"visible upper arm",n,[0,-.352,0],.09,.24),D=Jt(T,"elbow joint",[0,-.47,0]),O=li(D,"forearm",n,[0,-.195,0],.082,.43);yt(D,"hand",n,[0,-.48,.007],[.079,.117,.065]),yt(D,"thumb",n,[-_*.062,-.445,.035],[.036,.06,.034]),s.arms.push({side:_,upper:T,forearm:D,upperSkin:R,lowerUpperSkin:I,forearmSkin:O});let L=Jt(e,_<0?"left hip":"right hip",[_*.155,1.51,0]),B=li(L,"thigh",n,[0,-.325,0],.125,.73),W=Jt(L,"knee joint",[0,-.68,0]),H=li(W,"shin",n,[0,-.29,0],.096,.66),tt=Jt(W,"ankle joint",[0,-.67,0]),q=yt(tt,"foot",n,[0,-.03,.11],[.116,.084,.2]);s.legs.push({side:_,hip:L,knee:W,foot:tt,thighSkin:B,shinSkin:H,footSkin:q})}Ud(e,s,r,i,t),Fd(s,t[i.shoes.id],i.shoes.color,i.skin),Od(e,s,i,t);let a=new je;a.moveTo(0,-.12),a.bezierCurveTo(-.26,.01,-.11,.24,0,.095),a.bezierCurveTo(.11,.24,.26,.01,0,-.12);let o=ie(e,"heart for the heart-hug pose",new cn(a,{depth:.025,bevelEnabled:!0,bevelSize:.012,bevelThickness:.008,bevelSegments:2,steps:1}),Mt("#dc8fae"),[0,1.96,.59]);o.visible=!1;let l=Jt(e,"waist joint",[0,1.6,0]);s.torso=l;let c=t[i.dress?.id||i.top?.id]?.name;for(let _ of[...e.children])_!==l&&(_===r||_===s.head||_===o||_.name==="neck"||_.name===c||s.arms.some(T=>T.upper===_)||Object.values(i.extras).some(T=>T&&t[T.id]?.name===_.name))&&(l.add(_),_.position.y-=1.6);let d=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,u=i.dress?e.getObjectByName("fitted dress skirt"):["pleated","tutu","flower","star-skirt","sequin"].includes(t[i.bottom?.id]?.shape)?e.getObjectByName(t[i.bottom.id].name):null,f=!!i.dress&&["gown","cosmic","velvet","pearl","aurora","witch","vampire"].includes(t[i.dress.id].shape),h=f?.15:i.dress?1:1.02,p=u?new $e(new P(0,-1,0),h):null;if(p){let _=new Map;for(let R of s.legs)R.hip.traverse(I=>{if(I.isMesh){if(!_.has(I.material)){let D=I.material.clone();D.clippingPlanes=[p],D.clipShadows=!0,_.set(I.material,D)}I.material=_.get(I.material)}});let T=new Set;e.traverse(R=>{R.material&&T.add(R.material)}),_.forEach((R,I)=>{T.has(I)||I.dispose()})}let x=!!i.extras.pet,g=new P(0,-1,0);function m(_,T){let R=new P(_.side*.337,2.17,0),I=new P(...T),D=I.clone().sub(R),O=Math.min(.948,Math.max(.025,D.length()));D.normalize();let L=new P(_.side*.85,-.08,-.25);L.addScaledVector(D,-L.dot(D)).normalize();let B=(.47**2-.48**2+O**2)/(2*O),W=Math.sqrt(Math.max(0,.47**2-B**2)),H=R.clone().addScaledVector(D,B).addScaledVector(L,W);I.copy(R).addScaledVector(D,O),_.upper.quaternion.setFromUnitVectors(g,H.clone().sub(R).normalize());let tt=new _n().setFromUnitVectors(g,I.sub(H).normalize());_.forearm.quaternion.copy(_.upper.quaternion).invert().multiply(tt)}function b(_,T,R){e.position.set(..._.position),e.rotation.set(..._.rotation);for(let[I,D]of s.legs.entries()){let[O,L,B]=_.feet[I],W=O-e.position.x-D.side*.155,H=B-e.position.z;e.position.y=Math.min(e.position.y,.16+L+Math.sqrt(Math.max(.1,1.342**2-W**2-H**2))-1.51)}l.rotation.set(..._.torso),s.head.rotation.set(..._.head),o.visible=T===4&&R<.1&&!x,s.arms.forEach((I,D)=>m(I,x&&D===0?[-.2,1.93,.55]:_.hands[D]));for(let[I,D]of s.legs.entries()){let[O,L,B,W]=_.feet[I],H=O-e.position.x-D.side*.155,tt=.16+L-e.position.y-1.51,q=B-e.position.z,j=Math.hypot(tt,H),K=Math.min(1.348,Math.hypot(j,q)),Ct=-Math.atan2(q,j)-Math.acos(tn.clamp((.68**2+K*K-.67**2)/(2*.68*K),-1,1)),Et=Math.PI-Math.acos(tn.clamp((.68**2+.67**2-K*K)/(2*.68*.67),-1,1)),se=Math.atan2(H,-tt);D.hip.rotation.set(Ct,0,se,"ZXY"),D.knee.rotation.set(Et,0,0),D.foot.rotation.set(-Ct-Et+W,0,-se,"XZY")}if(u){let I=f?Math.max(0,-e.position.y-.035):0;u.scale.y=1-I/(1.73-h),u.position.y=1.73*(1-u.scale.y),e.updateWorldMatrix(!0,!0),p.set(new P(0,-1,0),h+I+.008).applyMatrix4(e.matrixWorld)}}function w(_=0,T=0,R=!1){b(eh(d?0:_,T,_*8,R?1:0),T,R?1:0)}let v=0,M=0,S=null;function A(_,T,{distance:R=0,dt:I=1/60,strut:D=!1}={}){let O=Math.min(.05,Math.max(0,I));v+=R/ul*Math.PI*2,M=tn.damp(M,R>1e-5?1:0,14,O),M<.001&&(M=0),M>.999&&(M=1);let L=eh(d?0:_,T,v,M,D);if(S){let B=1-Math.exp(-14*O);for(let W of["position","torso","head"])L[W]=L[W].map((H,tt)=>tn.lerp(S[W][tt],H,B));L.rotation=L.rotation.map((W,H)=>S.rotation[H]+Math.atan2(Math.sin(W-S.rotation[H]),Math.cos(W-S.rotation[H]))*B),L.hands=L.hands.map((W,H)=>W.map((tt,q)=>tn.lerp(S.hands[H][q],tt,B))),M<.8&&(L.feet=L.feet.map((W,H)=>W.map((tt,q)=>tn.lerp(S.feet[H][q],tt,B))))}S=L,b(L,T,M)}return w(),{root:e,bones:s,pose:w,animate:A,coveredLegs:p,dispose(){Id(e),e.removeFromParent()}}}var Ii=(i,t={})=>new dn({color:i,roughness:.72,...t}),kd=Ii("#fff6e7"),Vs=Ii("#c6a66e",{metalness:.45,roughness:.4});function Hs(i,t,e,n){let s=new Se(t,e);return s.position.set(...n),s.receiveShadow=!0,i.add(s),s}var Pi=(i,t,e,n)=>Hs(i,new ze(...t),e,n),sh=(i,t,e,n,s)=>Hs(i,new qe(t,t,e,12),n,s);function zd(i,t,e,n){return Hs(i,new Hi(new Mi(t.map(s=>new P(...s))),16,e,6,!1),n,[0,0,0])}function pl(i,t,e,n,s,r=.66,a=.16){let o=document.createElement("canvas");o.width=384,o.height=96;let l=o.getContext("2d");l.fillStyle="#fffaf1",l.fillRect(0,0,384,96),l.fillStyle="#614c61",l.textAlign="center",l.textBaseline="middle",l.font="600 30px Segoe UI, sans-serif";let c=t.split(" "),d=[""];for(let f of c){let h=d.length-1;l.measureText(`${d[h]} ${f}`).width>360&&d[h]?d.push(f):d[h]+=(d[h]?" ":"")+f}d.slice(0,2).forEach((f,h)=>l.fillText(f,192,d.length>1?28+h*39:48));let u=new ri(o);return u.colorSpace=Re,Hs(i,new ai(r,a),new xn({map:u,side:Ce}),[e,n,s])}function rh(i,t){let e=new oe;return e.name=`${t.store.name} display`,i.add(e),e.position.set(t.x,0,t.z),e.rotation.y=t.rotation,e.userData.station=t.station,e.userData.stock=[],Pi(e,[t.width,.17,.8],kd,[0,.12,0]),e}function Vd(i,t,e,n,s,{hanging:r=!1}={}){let a=new oe;a.userData.itemId=t.id,a.name=t.name,a.position.set(n,s,.07),i.add(a);let o=Bd(t,e),l=new Xe().setFromObject(o).getSize(new P),c=r?Math.min(1.75,l.y*.8):.77,d=r?c/l.y:Math.min(.61/l.x,c/l.y,.58/l.z);o.scale.set(Math.min(d,.62/l.x),d,Math.min(d,.56/l.z)),o.position.y=r?-c:0,a.add(o);let u=r?c:Math.max(.45,l.y*d),f=Hs(a,new ze(.68,u+.12,.66),new xn({visible:!1}),[0,(r?-1:1)*u/2,.03]);return f.name=`Grab ${t.name}`,pl(a,t.name,0,r?-c-.13:-.095,.36),i.userData.stock.push(a),a}function Hd(i,t,e){let n=rh(i,t),s=t.width,r=Ii(new Ft(t.store.color).lerp(new Ft("#fffaf0"),.8));Pi(n,[s-.12,2.48,.055],r,[0,1.48,-.32]);for(let o of[-s/2+.1,s/2-.1])sh(n,.035,2.77,Vs,[o,1.56,0]);let a=sh(n,.033,s-.18,Vs,[0,2.79,0]);return a.rotation.z=Math.PI/2,t.items.forEach((o,l)=>{let c=(l-(t.items.length-1)/2)*.75;zd(n,[[c-.2,2.45,0],[c,2.65,0],[c+.2,2.45,0],[c-.2,2.45,0]],.012,Vs),zd(n,[[c,2.65,0],[c,2.81,0],[c+.05,2.83,0]],.012,Vs),Vd(n,o,e,c,2.45,{hanging:!0})}),pl(n,"PICK A PIECE \xB7 DRAG TO WEAR",0,3.01,.02,2.5,.21),n}function Gd(i,t,e){let n=rh(i,t),s=t.width,r=Ii(t.store.beauty?"#35313d":t.store.color);Pi(n,[s-.12,.54,.73],r,[0,.47,-.02]),Pi(n,[s-.12,2.35,.06],Ii(new Ft(t.store.color).lerp(new Ft("#fff8ee"),.78)),[0,1.7,-.33]);for(let l of[-s/2+.08,s/2-.08])sh(n,.027,2.7,Vs,[l,1.58,-.27]);for(let l of[.85,1.9])Pi(n,[s,.07,.8],kd,[0,l,0]);t.items.forEach((l,c)=>{let d=Math.floor(c/6),u=Math.min(6,t.items.length-d*6),f=(c%6-(u-1)/2)*.75;Vd(n,l,e,f,.9+d*1.05)});let o=new Set(t.items.map(l=>l.category)).size>1?"LITTLE FINISHING TOUCHES":{hair:"HAIR STUDIO",makeup:"THE BEAUTY BAR",shoes:"FIND YOUR HAPPY FEET",extras:"BAGS, JEWELS & LITTLE FRIENDS"}[t.items[0]?.category];return pl(n,o||"YOUR NEXT FAVORITE",0,3.01,.02,3,.23),n}function Wd(i,t){let e=rh(i,t);Pi(e,[4.5,.7,.68],Ii(t.store.color),[0,.55,-.02]),Pi(e,[2.7,1.94,.12],Vs,[0,1.96,-.23]),Pi(e,[2.54,1.79,.04],Ii("#b8cdd2",{metalness:.6,roughness:.19}),[0,1.96,-.15]);let n=Ii("#fff5dc",{emissive:"#ffe5b0",emissiveIntensity:.35});for(let s of[-1.49,1.49])for(let r=0;r<4;r++)Hs(e,new hn(.065,10,8),n,[s,1.29+r*.43,-.06]);return pl(e,t.store.id==="halloween"?"LOOKING BOO-TIFUL!":"HELLO, STYLE STAR!",0,3.12,0,2.6,.22),e}var oh=[-6.8,7].map(i=>({x:0,z:i,halfX:.7,halfZ:.85})),ci=[{id:"dresses",name:"Petal & Thread",detail:"Dresses & daydreams",side:-1,z:-9,color:"#dba5b9"},{id:"makeup",name:"GLOW beauty",detail:"Makeup & face paint",side:-1,z:-3,color:"#df9bae",beauty:!0},{id:"tops",name:"Sunday Studio",detail:"Tops, jackets & cozy things",side:-1,z:3,color:"#a5b8cc"},{id:"halloween",name:"BOO-tique",detail:"Happy Halloween costumes",side:-1,z:9,color:"#b99bd0",collection:"halloween"},{id:"shoes",name:"Sole Mates",detail:"Shoes for every adventure",side:1,z:-9,color:"#a6c4bb"},{id:"hair",name:"Charm & Co.",detail:"Hair & finishing touches",side:1,z:-3,color:"#c0add6"},{id:"bottoms",name:"Mix & Match",detail:"Skirts, trousers & playwear",side:1,z:3,color:"#d7b485"},{id:"vip",name:"The Velvet Lounge",detail:"VIP collection \xB7 everyone welcome",side:1,z:9,color:"#aa90bf",collection:"vip"}],Sn=ci.map(i=>({...i,storeId:i.id,category:i.collection?"dresses":i.id,x:i.side*10.7,z:i.z,approach:[i.side*8.85,i.z],rotation:-i.side*Math.PI/2}));Sn.find(i=>i.id==="hair").z=-4.15;Sn.find(i=>i.id==="hair").approach=[8.85,-4.15];Sn.push({id:"extras",storeId:"hair",category:"extras",name:"Charm accessories",detail:"Bows, bags & lovely extras",x:10.7,z:-1.55,approach:[8.85,-1.55],color:"#c0add6",rotation:-Math.PI/2},{id:"runway",name:"The grand runway",detail:"Your moment to shine",x:0,z:-11.1,approach:[0,-9],color:"#d69bb5",rotation:0});function lh(i,t){return Object.values(i).filter(e=>t.collection?e.collection===t.collection:!e.collection&&e.category===t.category).sort((e,n)=>+!!n.fresh-+!!e.fresh)}var Xd=ci.flatMap(i=>[{x:i.side*11.65,z:i.z,rotation:-i.side*Math.PI/2,halfX:.43,halfZ:2.35},{x:i.side*8.3,z:i.z-2.5,rotation:0,halfX:2.35,halfZ:.43},{x:i.side*8.3,z:i.z+2.5,rotation:Math.PI,halfX:2.35,halfZ:.43}].map((t,e)=>({...t,id:`${i.id}-${e}`,storeId:i.id,width:4.7})));function qd(i){return ci.flatMap(t=>{let e=Sn.filter(o=>o.storeId===t.id),n=e.flatMap(o=>lh(i,o)),s=n.filter(o=>["dresses","tops","bottoms"].includes(o.category)),r=n.filter(o=>!s.includes(o)),a=[];for(let[o,l,c]of[[s,"rack",6],[r,"shelf",12]])for(let d=0;d<o.length;d+=c)a.push({kind:l,items:o.slice(d,d+c)});if(a.length>3)throw new Error(`${t.name} needs another physical display`);return Xd.filter(o=>o.storeId===t.id).map((o,l)=>{let c=a[l]||{kind:"decor",items:[]},d=e.find(u=>u.category===c.items[0]?.category)||e[0];return{...o,...c,store:t,station:d}})})}function ch(i){return Math.abs(i.x)<4.6?null:ci.find(t=>Math.sign(i.x)===t.side&&Math.abs(i.z-t.z)<2.9)||null}var Zn=[...[-1,1].flatMap(i=>[-12,-6,0,6,12].map(t=>({x:i*8.35,z:t,halfX:3.95,halfZ:.09}))),...Xd,{x:0,z:-.8,halfX:1.13,halfZ:1.13},{x:-1.8,z:7.4,halfX:.48,halfZ:.3},...ci.flatMap(i=>[-2.33,2.33].map(t=>({x:i.side*4.91,z:i.z+t,halfX:.29,halfZ:.49}))),...oh,...[-1,1].flatMap(i=>[-10.8,10.8].map(t=>({x:i*2.85,z:t,halfX:.32,halfZ:.32})))];function Gs(i,t,e=Zn,n=.29){return Math.abs(i)>12.25||Math.abs(t)>12.25?!1:e.every(s=>{let r=Math.max(s.x-s.halfX,Math.min(i,s.x+s.halfX)),a=Math.max(s.z-s.halfZ,Math.min(t,s.z+s.halfZ));return Math.hypot(i-r,t-a)>n})}function ml(i,t,e,n=Zn){let s=Math.max(1,Math.hypot(t.x,t.z)),r=Math.min(.05,Math.max(0,e)),a=t.x/s*2.9*r,o=t.z/s*2.9*r,{x:l,z:c}=i;return Gs(l+a,c,n)&&(l+=a),Gs(l,c+o,n)&&(c+=o),{x:l,z:c}}function Yd(i){return Sn.map(t=>({station:t,distance:Math.hypot(i.x-t.approach[0],i.z-t.approach[1])})).filter(t=>t.distance<1.15).sort((t,e)=>t.distance-e.distance)[0]?.station||null}function ea(i,t,e=Zn,n=.29+.035){let s=Math.max(1,Math.ceil(Math.hypot(t.x-i.x,t.z-i.z)/.1));for(let r=0;r<=s;r++)if(!Gs(i.x+(t.x-i.x)*r/s,i.z+(t.z-i.z)*r/s,e,n))return!1;return!0}var ah;function Wx(i){if(i===Zn&&ah)return ah;let t=.4,e=Math.floor(12.25/t),n=[],s=new Set;for(let a=-e;a<=e;a++)for(let o=-e;o<=e;o++)Gs(a*t,o*t,i,.29+.045)&&(n.push({x:a,z:o}),s.add(`${a},${o}`));let r={cells:n,allowed:s,step:t};return i===Zn&&(ah=r),r}function Ws(i,t,e=Zn){let{cells:n,allowed:s,step:r}=Wx(e);if(!n.length)return[];let a=(w,v)=>`${w},${v}`,o=w=>n.reduce((v,M)=>Math.hypot(M.x*r-w.x,M.z*r-w.z)<Math.hypot(v.x*r-w.x,v.z*r-w.z)?M:v,n[0]),l=o(i),c=o(t),d=[l],u=new Map([[a(l.x,l.z),null]]),f=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],h=!1;for(let w=0;w<d.length;w++){let v=d[w];if(v.x===c.x&&v.z===c.z){h=!0;break}for(let[M,S]of f){let A=v.x+M,_=v.z+S,T=a(A,_);!s.has(T)||u.has(T)||M&&S&&(!s.has(a(v.x+M,v.z))||!s.has(a(v.x,v.z+S)))||(u.set(T,v),d.push({x:A,z:_}))}}if(!h)return[];let p=[],x=c;for(;x;)p.unshift({x:x.x*r,z:x.z*r}),x=u.get(a(x.x,x.z));ea(p.at(-1),t,e)&&p.push({...t});let g=[],m=i,b=0;for(;b<p.length;){let w=b;for(let M=b;M<p.length&&ea(m,p[M],e);M++)w=M;let v=p[w];Math.hypot(v.x-m.x,v.z-m.z)>.01&&g.push(v),m=v,b=w+1}return g}function gl(i,t,e,n=2.9,s=Zn){let r=Math.min(.05,Math.max(0,e))*n,a=0,o={...i},l=t.slice();for(;l.length&&r>1e-7;){let c=l[0],d=c.x-o.x,u=c.z-o.z,f=Math.hypot(d,u);if(f<1e-7){l.shift();continue}let h=Math.min(r,f),p={x:o.x+d/f*h,z:o.z+u/f*h};if(!ea(o,p,s,.29))break;o=p,a+=h,r-=h,h>=f-1e-7&&l.shift()}return{position:o,path:l,distance:a}}var Zd=[{name:"Poppy",skin:"#e8b99a",hair:"twin-tails",hairColor:"#8d5136",start:[-1.8,2.5],clothes:["rainbow-dress","maryjanes","cat-ears"],route:["dresses","extras","makeup","vip","runway","hair"]},{name:"Nova",skin:"#925c43",hair:"puff-buns",hairColor:"#241e24",start:[1.8,2.5],clothes:["varsity","cargo","high-tops","headphones"],route:["bottoms","tops","halloween","runway","shoes","makeup"]},{name:"Jules",skin:"#d39c79",hair:"side-braid",hairColor:"#d394a7",start:[1.6,-3.3],clothes:["butterfly-dress","star-boots","tiara"],route:["hair","shoes","vip","makeup","extras","halloween"]}],_l=class{constructor(t,e){this.game=t,this.index=e,this.profile=Zd[e%Zd.length],this.name=this.profile.name,this.position={x:this.profile.start[0],z:this.profile.start[1]},this.yaw=0,this.outfit=t.defaultOutfit(),this.outfit.extras=Object.fromEntries(Object.keys(this.outfit.extras).map(n=>[n,null]));for(let n of this.profile.clothes)this.outfit=t.wear(this.outfit,n);Object.assign(this.outfit,{skin:this.profile.skin,hair:this.profile.hair,hairColor:this.profile.hairColor}),this.phase="posing",this.remaining=.3+e*.7,this.routeIndex=-1,this.path=[],this.changes=0,this.visits=0,this.blocked=0,this.pose=0}nextStation(){this.routeIndex=(this.routeIndex+1)%this.profile.route.length,this.station=Sn.find(t=>t.id===this.profile.route[this.routeIndex]),this.path=Ws(this.position,{x:this.station.approach[0],z:this.station.approach[1]}),this.phase="walking",this.pose=0,this.blocked=0}tryClothes(){if(this.station.id==="runway")return this.pose=8+this.visits%8,!1;let t=lh(this.game.byId,this.station).filter(n=>!this.game.selection(this.outfit,n));if(!t.length)return!1;let e=t[(this.visits*3+this.index*5)%t.length];return this.outfit=this.game.wear(this.outfit,e.id),!["hair","makeup"].includes(e.category)&&this.visits%2===0&&(this.outfit=this.game.recolor(this.outfit,e.id,this.game.COLORS[(this.visits+this.index*3)%this.game.COLORS.length].hex)),this.changes++,this.pose=8+this.changes%8,!0}greet(t,e=2){this.phase="chatting",this.remaining=6,this.pose=e,this.yaw=Math.atan2(t.x-this.position.x,t.z-this.position.z)}tick(t,e,n=[]){let s=Math.min(.05,Math.max(0,t)),r={...this.position},a=!1,o=!1;if(this.phase==="walking"){let l=this.path[0];if(!l)this.phase="browsing",this.remaining=1.8+this.index*.35,this.visits++,this.yaw=Math.atan2(this.station.x-this.position.x,this.station.z-this.position.z);else{let c=l.x-this.position.x,d=l.z-this.position.z,u=Math.max(1e-4,Math.hypot(c,d));{let f=[...e?[{...e,radius:1.12}]:[],...n.map(g=>({...g,radius:.82}))],h=g=>f.some(m=>Math.hypot(g.x-m.x,g.z-m.z)<m.radius&&Math.hypot(g.x-m.x,g.z-m.z)<Math.hypot(this.position.x-m.x,this.position.z-m.z)),p=gl(this.position,this.path,s,1.32),x=p.position;if(h(x)){if(this.blocked+=s,this.blocked>1){let g=this.index%2?1:-1;x=ml(this.position,{x:-d/u*g,z:c/u*g},s*.32),h(x)&&(x=this.position)}else x=this.position;this.blocked>4&&this.nextStation()}else this.blocked=0,this.path=p.path;if(Gs(x.x,x.z)){let g=Math.hypot(x.x-this.position.x,x.z-this.position.z);if(g>1e-5){let m=Math.atan2(x.x-this.position.x,x.z-this.position.z);this.yaw+=Math.atan2(Math.sin(m-this.yaw),Math.cos(m-this.yaw))*(1-Math.exp(-s*9)),o=!0}this.position=x,this.blocked>1&&g>1e-5&&(this.path=Ws(this.position,{x:this.station.approach[0],z:this.station.approach[1]}))}}}}else this.remaining-=s,this.remaining<=0&&(this.phase==="browsing"?(a=this.tryClothes(),this.phase="posing",this.remaining=this.station.id==="runway"?3.2:2.1):this.nextStation());return{changed:a,walking:o,distance:Math.hypot(this.position.x-r.x,this.position.z-r.z),pose:this.pose}}description(){return this.phase==="chatting"?"saying hello and posing with you":this.phase==="walking"?`visiting ${this.station.name.toLowerCase()}`:this.phase==="browsing"?`choosing ${this.station.name.toLowerCase()}`:this.station?.id==="runway"?"posing on the runway":"showing a new look"}};var we=(i,t={})=>new dn({color:i,roughness:.78,...t}),Zi=we("#fff7e9"),Xx=we("#eee6df"),Dn=we("#c1a06c",{metalness:.45,roughness:.4});function xl(i,t,e,n){let s=new Se(t,e);return s.position.set(...n),s.receiveShadow=!0,i.add(s),s}var Ie=(i,t,e,n)=>xl(i,new ze(...t),e,n),Nn=(i,t,e,n,s)=>xl(i,new qe(t,t,e,28),n,s);function Xs(i,t,e,n){let s=xl(i,new hn(1,16,12),e,n);return s.scale.set(...t),s}function Jd(i,t,e,n,s=4.4){let r=document.createElement("canvas");r.width=1024,r.height=240;let a=r.getContext("2d");a.fillStyle=n,a.fillRect(0,0,1024,240),a.strokeStyle="#ffffff55",a.lineWidth=3,a.strokeRect(17,17,990,206),a.fillStyle="#fff9ec",a.textAlign="center",a.font="600 62px Georgia, serif",a.fillText(t,512,108),a.font="500 24px Segoe UI, sans-serif",a.fillText(e.toUpperCase(),512,174);let o=new ri(r);return o.colorSpace=Re,xl(i,new ai(s,s*240/1024),new xn({map:o,side:Ce}),[0,0,0])}function qx(i,t,e){Nn(i,.3,.48,Zi,[t,.24,e]);let n=we("#769479");for(let s=0;s<6;s++){let r=s/6*Math.PI*2,a=Xs(i,[.13,.48,.16],n,[t+Math.sin(r)*.15,.77,e+Math.cos(r)*.15]);a.rotation.z=Math.sin(r)*.4}}function $d(i,t,{makeRack:e,makeDisplay:n,makeMirror:s,label:r,arch:a}){let o=new oe;o.name="Style Club one-floor mall",i.add(o);let l=new ze(.995,.06,.995),c=[we("#efeae3"),we("#e8e4df")],d=c.map(M=>new yr(l,M,338)),u=[0,0],f=new le;for(let M=0;M<26;M++)for(let S=0;S<26;S++){let A=(M+S)%2;f.makeTranslation(M-12.5,-.055,S-12.5),d[A].setMatrixAt(u[A]++,f)}d.forEach(M=>{M.receiveShadow=!0,o.add(M)});let h=we("#eadde5"),p={back:new oe,left:new oe,right:new oe},x=[];Object.values(p).forEach(M=>o.add(M)),Ie(p.back,[25.4,4.5,.16],h,[0,2.2,-12.65]);for(let M of[-1,1]){Ie(p[M<0?"left":"right"],[.16,4.5,25.4],h,[M*12.65,2.2,0]),Ie(o,[.13,.025,25.2],Dn,[M*4.45,-.012,0]),Ie(o,[.36,.025,25.2],we("#cfbdad"),[M*4.17,-.01,0]);for(let S of[-12,-6,0,6,12]){let A=new oe;o.add(A),Ie(A,[7.9,3.6,.18],Xx,[M*8.35,1.8,S]),Ie(A,[7.9,.1,.2],Dn,[M*8.35,.15,S]),x.push({group:A,z:S,side:M}),Ie(o,[.38,4.5,.38],Zi,[M*4.5,2.22,S]),Ie(o,[.52,.17,.52],Dn,[M*4.5,.15,S])}for(let S of[-10.8,10.8])qx(o,M*2.85,S)}let g=we("#b18b74");for(let M of oh){let S=new oe;S.name="Back-to-back promenade benches",S.position.set(M.x,0,M.z),o.add(S),Ie(S,[.16,.6,1.7],g,[0,.8,0]),Ie(S,[.18,.035,1.72],Dn,[0,1.115,0]);for(let A of[-1,1]){Ie(S,[.6,.18,1.7],g,[A*.38,.52,0]);for(let _ of[-.6,.6])Ie(S,[.45,.5,.12],Dn,[A*.38,.25,_])}}let m=[];for(let M of ci){let{side:S,z:A,color:_}=M,T=S*8.45,R=we(_),I=new oe;o.add(I),Ie(o,[7.55,.04,5.8],we(M.id==="makeup"?"#eee9e9":new Ft(_).lerp(new Ft("#fff8ef"),.72)),[T,-.015,A]),Ie(I,[.22,1.02,5.65],R,[S*4.58,3.78,A]);let D=Jd(I,M.name,M.detail,M.beauty?"#35313d":new Ft(_).multiplyScalar(.64).getStyle(),5.2);D.position.set(S*4.44,3.78,A),D.rotation.y=-S*Math.PI/2,m.push({group:I,side:S,z:A});for(let O of[-2.33,2.33])Ie(o,[.52,.25,.95],Zi,[S*4.91,.125,A+O]),Ie(o,[.055,2.42,.9],we("#cee3e5",{transparent:!0,opacity:.18,roughness:.1,depthWrite:!1}),[S*4.7,1.48,A+O]),Ie(o,[.08,2.5,.06],Dn,[S*4.67,1.4,A+O-.48]),Ie(o,[.08,2.5,.06],Dn,[S*4.67,1.4,A+O+.48]);if(Nn(o,.43,.13,Zi,[T,3.66,A]),Nn(o,.016,.55,Dn,[T,4,A]),Nn(o,.37,.035,we("#fff4d2",{emissive:"#fff0be",emissiveIntensity:.5}),[T,3.58,A]),M.id==="makeup")for(let O=0;O<10;O++)Ie(p.left,[.04,3.3,.32],we(O%2?"#fbf4f1":"#35313d"),[-12.53,1.75,A-2.7+O*.57]);if(M.id==="vip"){Ie(o,[5.6,.025,2.3],we("#9a6688"),[S*7.35,.01,A]);for(let O of[-1.8,1.8])Nn(o,.04,1.05,Dn,[S*5.2,.525,A+O]),Xs(o,[.095,.095,.095],Dn,[S*5.2,1.1,A+O])}if(M.id==="halloween")for(let O of[-2.1,2.1]){Xs(o,[.34,.31,.31],we("#e6a05c"),[S*5.35,.36,A+O]),Nn(o,.04,.12,we("#79916e"),[S*5.35,.7,A+O]);for(let L of[-.1,.1])Xs(o,[.025,.042,.02],we("#674a5a"),[S*5.35+L,.43,A+O+.29])}}Nn(o,1.12,.27,Zi,[0,.12,-.8]),Nn(o,.96,.035,we("#95c5d0",{metalness:.3,roughness:.2}),[0,.26,-.8]),Nn(o,.17,.8,Dn,[0,.6,-.8]),Nn(o,.5,.11,Zi,[0,1,-.8]);let b=Xs(o,[.33,.35,.33],we("#b9dfe0",{transparent:!0,opacity:.72}),[0,1.27,-.8]);Ie(o,[.93,1.1,.55],we("#a68194"),[-1.8,.55,7.4]),Jd(o,"STYLE CLUB","8 boutiques \xB7 one lovely day","#926e89",1.6).position.set(-1.8,1.5,7.4);let v=qd(t).map(M=>M.kind==="rack"?e(o,M,t):M.kind==="shelf"?n(o,M,t):s(o,M));for(let M of Sn)if(M.id==="runway"){let S=new oe;o.add(S),S.position.set(M.x,0,M.z),S.userData.station=M,Nn(S,1.3,.08,Zi,[0,.025,0]),a(S,2.8,4,we("#c6a1bd"),-.8),a(S,2.4,3.76,we("#e4c6d6"),-.66),r(S,"THE RUNWAY",[0,3.97,-.55],"#895675",2.6);for(let A of[-1,1])for(let _=0;_<6;_++)Xs(S,[.05,.05,.05],we("#fff5d6",{emissive:"#ffe7ad",emissiveIntensity:.7}),[A*1.14,.4+_*.5,-.49]);v.push(S)}return{room:o,wall:h,walls:p,interactions:v,update(M,S,A){p.left.visible=M.position.x>-12.3,p.right.visible=M.position.x<12.3,p.back.visible=M.position.z>-12.3;for(let _ of x){let T=(M.position.z-_.z)*(S.z-_.z)<0&&M.position.x*_.side>4.25;_.group.scale.y=T?.1:1}for(let _ of m)_.group.visible=!(S.x*_.side>4.6&&M.position.x*_.side<4.6&&Math.abs(S.z-_.z)<3);b.scale.y=.35+Math.sin(A*1.4)*.018}}}var Ji=new hn(1,12,8),vl=new qe(1,1,1,8),Yx=new qe(.28,.23,.62,12),qs=i=>new dn({color:i,roughness:.85}),Zx=["#f1cfad","#dba780","#ac775b","#7d503d","#c28e70","#ebbd9f"].map(qs),Jx=["#a79ac8","#86b6ad","#e4abbd","#ddc08b","#93b0cc","#b191a9"].map(qs),Kd=["#453238","#8b5638","#d4af72","#302831"].map(qs),$x=qs("#65536e"),jd=qs("#fff4df"),Qd=qs("#41323f");function pn(i,t,e,n,s){let r=new Se(t,e);return r.position.set(...n),s&&r.scale.set(...s),i.add(r),r}function tf(i,t,e,n){let s=new P(...t),r=new P(...e),a=r.clone().sub(s);i.position.copy(s.add(r).multiplyScalar(.5)),i.quaternion.setFromUnitVectors(new P(0,1,0),a.clone().normalize()),i.scale.set(n,a.length(),n)}function ef(i,{label:t,reduced:e=!1}={}){let n=new oe;n.name="Cheering runway guests",i.add(n);let s=[];for(let a of[-1,1])for(let o=0;o<6;o++){let l=o+(a>0?6:0),c=Zx[l%6],d=Jx[(l*3+o)%6],u=new oe;n.add(u),u.position.set(a*(2.7+o%2*.14),0,1.05-o*1.43),u.scale.setScalar(.9+l%3*.035);let f=pn(u,Yx,d,[0,1.45,0]);f.rotation.z=a*.035,pn(u,vl,c,[0,1.9,0],[.095,.15,.095]),pn(u,Ji,c,[0,2.2,0],[.29,.35,.265]),pn(u,Ji,Kd[l%4],[0,2.38,-.07],[.32,.235,.255]),l%3===0&&pn(u,Ji,Kd[l%4],[.22,2.58,-.1],[.16,.17,.16]);for(let g of[-1,1])pn(u,Ji,Qd,[g*.1,2.23,.245],[.025,.036,.012]),pn(u,Ji,jd,[g*.096,2.239,.255],[.008,.01,.005]),pn(u,vl,$x,[g*.145,.7,0],[.11,.92,.12]),pn(u,Ji,jd,[g*.145,.18,.09],[.13,.09,.23]);let h=pn(u,new Nr(.06,.012,5,10,Math.PI),Qd,[0,2.1,.255]);h.rotation.z=Math.PI;let p=[-1,1].map(g=>({side:g,upper:pn(u,vl,d,[0,0,0]),lower:pn(u,vl,c,[0,0,0]),hand:pn(u,Ji,c,[0,0,0],[.067,.087,.06])})),x=l%4===0;t&&l%4===1&&t(u,["SO STYLISH!","YOU SHINE!","YAY!"][Math.floor(l/4)],[0,2.93,0],"#91617d",1.5),s.push({person:u,arms:p,index:l,side:a,cheering:x})}function r(a,o=0){for(let{person:l,arms:c,index:d,side:u,cheering:f}of s){let h=e?d*.9:a+d*.57,p=(Math.sin(h*7)+1)/2;l.rotation.y=Math.atan2(-l.position.x,o-l.position.z);for(let x of c){let g=x.side,m=f?[g*(.45+Math.sin(h*3+g)*.12),2.6+Math.sin(h*3)*.045,.12]:[g*(.045+p*.19),1.83,.51],b=f?[g*.57,2.1,.02]:[g*.43,1.47,.23];tf(x.upper,[g*.29,1.7,0],b,.085),tf(x.lower,b,m,.066),x.hand.position.set(...m)}l.position.y=e?0:Math.sin(h*3)*.012}}return r(0),{root:n,people:s,update:r}}var hi=(i,t)=>i.byId[t]?.name,Kx=["dress","top","bottom","shoes"];function nf(i,t,e){if(!i||!t)return null;if(i.extras.pet?.id!==t.extras.pet?.id&&t.extras.pet)return`Aww! ${hi(e,t.extras.pet.id)} is such a cute runway buddy!`;if(i.hair!==t.hair)return`You tried ${hi(e,t.hair)}! Your new hairstyle is so fun!`;if(i.hairColor!==t.hairColor)return`${e.HAIR_COLORS.find(s=>s.hex===t.hairColor)?.name||"A new color"} hair! What a lovely idea!`;if(i.makeup!==t.makeup||i.makeupColor!==t.makeupColor)return t.makeup==="fresh-face"?"A fresh face and a fresh idea! What will you try next?":`Ooh, ${hi(e,t.makeup)}! Your new face paint is so creative!`;for(let n of Kx){if(i[n]?.id!==t[n]?.id&&t[n])return`You changed into ${hi(e,t[n].id)}! That is such a cute choice!`;if(i[n]?.color!==t[n]?.color&&t[n])return`I noticed your new ${e.COLORS.find(r=>r.hex===t[n].color)?.name?.toLowerCase()||"outfit"} color. Lovely styling!`}for(let n of["ears","wrist","neck","head","bag","back","pet"]){let s=t.extras[n],r=i.extras[n];if(s?.id!==r?.id&&s)return`You added ${hi(e,s.id)}! Such a lovely finishing touch!`;if(s?.color!==r?.color&&s)return`A new color for ${hi(e,s.id)}! I love trying new combinations too!`;if(r&&!s)return"Mixing things up! I like seeing your new outfit ideas."}return null}function yl(i,t,e=0){let n=hi(t,i.dress?.id||i.top?.id),s=hi(t,i.hair),r=hi(t,i.extras.pet?.id),a=[r?`Hi! ${r} looks ready for a little fashion adventure!`:`Hi! Your ${n} is so cute!`,`I like your ${s} hairstyle! Want to strike a pose together?`,"Have you visited BOO-tique? The little pumpkin outfits make me smile!","You are invited to the VIP lounge too. Let\u2019s try something sparkly!","Picking colors is my favorite part. What a fun day at the mall!",`That ${n} would be lovely on the runway. I\u2019ll cheer for you!`];return a[(e%a.length+a.length)%a.length]}var na=(i,t={})=>new dn({color:i,roughness:.76,...t}),sf=na("#f7ecdc"),jx=na("#dba8b9"),rf=na("#c6a66e",{metalness:.55,roughness:.36});function Ml(i,t,e,n,s){let r=new Se(t,e);return n&&r.position.set(...n),s&&r.scale.set(...s),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}var hh=(i,t,e,n)=>Ml(i,new ze(...t),e,n),Qx=(i,t,e,n)=>Ml(i,new hn(1,16,12),e,n,t),uh=(i,t,e,n,s)=>Ml(i,new qe(t,t,e,24),n,s);function dh(i,t,e,n="#795365",s=2.1){let r=document.createElement("canvas");r.width=640,r.height=128;let a=r.getContext("2d");a.fillStyle="#fffaf2",a.beginPath(),a.roundRect(8,8,624,112,48),a.fill(),a.strokeStyle="#e4c6ce",a.lineWidth=3,a.stroke(),a.font="600 42px Segoe UI, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillStyle=n,a.fillText(t,320,68);let o=new ri(r);o.colorSpace=Re;let l=new _r(new ws({map:o,depthTest:!0}));return l.position.set(...e),l.scale.set(s,s/5,1),i.add(l),l}function tv(i,t,e,n,s){let r=new je,a=t/2;return r.moveTo(-a,0),r.lineTo(a,0),r.lineTo(a,e-a),r.absarc(0,e-a,a,0,Math.PI,!1),r.lineTo(-a,0),Ml(i,new cn(r,{depth:.09,bevelEnabled:!0,bevelSize:.035,bevelThickness:.035,bevelSegments:2,steps:1}),n,[0,0,s])}function af(i){let t=new Kr({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});return t.localClippingEnabled=!0,t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),t.shadowMap.enabled=!0,t.shadowMap.type=Gi,t.outputColorSpace=Re,t.toneMapping=Ns,t.toneMappingExposure=1.25,t.domElement.className="world-canvas",t.domElement.tabIndex=0,i.replaceChildren(t.domElement),t}function mh(i){i.add(new Or("#fff4e2","#aa8ba5",2.3));let t=new Ps("#fff4de",3.2);t.position.set(-3,8,5),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.left=-10,t.shadow.camera.right=10,t.shadow.camera.top=10,t.shadow.camera.bottom=-10,t.shadow.camera.far=28,t.shadow.normalBias=.035,t.shadow.bias=-1e-4,i.add(t);let e=new Ps("#dddeff",1);e.position.set(5,4,-4),i.add(e)}var fh=class{constructor(t,{catalog:e,game:n,onStation:s=()=>{},onNearby:r=()=>{},onView:a=()=>{},onLocation:o=()=>{},onFriend:l=()=>{},onBubble:c=()=>{},onTogether:d=()=>{},onGrab:u=()=>{},onDrag:f=()=>{},onDrop:h=()=>{},onHover:p=()=>{}}={}){if(this.container=t,this.catalog=e,this.onStation=s,this.onNearby=r,this.onView=a,this.onGrab=u,this.onDrag=f,this.onDrop=h,this.onHover=p,this.onLocation=o,this.game=n,this.onFriend=l,this.onBubble=c,this.onTogether=d,this.nextChatAt=9,this.chatCount=0,this.renderer=af(t),this.canvas=this.renderer.domElement,this.canvas.setAttribute("aria-label","3D fashion mall. Drag a piece from a rack onto your character to wear it. Use WASD or arrow keys to walk, E to browse, and drag the floor to look around."),this.scene=new Bi,this.scene.background=new Ft("#eedfe5"),this.scene.fog=new fr("#eedfe5",25,49),this.camera=new Fe(47,1,.1,70),mh(this.scene),this.environment=$d(this.scene,e,{makeRack:Hd,makeDisplay:Gd,makeMirror:Wd,label:dh,arch:tv}),this.canvas.dataset.displayedItems=String(this.environment.interactions.reduce((g,m)=>g+(m.userData.stock?.length||0),0)),this.shoppers=new oe,this.scene.add(this.shoppers),this.friendsVisible=!0,this.npcs=[],n)for(let g=0;g<3;g++){let m=new _l(n,g),b=new oe;b.scale.setScalar(.88),this.shoppers.add(b),b.userData.shopperIndex=g,dh(b,m.name,[0,3.82,0],"#865e77",1.12);let w={brain:m,anchor:b,character:null};this.npcs.push(w),this.dressShopper(w)}this.fittingStage=new oe,this.scene.add(this.fittingStage),this.fittingStage.visible=!1,uh(this.fittingStage,1.1,.1,sf,[0,.05,0]),uh(this.fittingStage,1.12,.035,rf,[0,.035,0]);let x=hh(this.fittingStage,[60,.05,60],na("#e9dbe4"),[0,-.07,0]);x.castShadow=!1,this.anchor=new oe,this.scene.add(this.anchor),this.position={x:0,z:5.3},this.yaw=0,this.cameraYaw=.18,this.pitch=.4,this.view="walk",this.poseStyle=0,this.active=!0,this.keys=new Set,this.virtual=new Set,this.path=[],this.destinationStation=null,this.nearby=null,this.disposed=!1,this.elapsed=0,this.lastFrame=performance.now(),this.dragging=!1,this.stockSource=null,this.camera.position.set(3,6,12),this.target=new P(0,1.5,3.6),this.abort=new AbortController,this.bind(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this.loop()}setOutfit(t){let e=this.game&&nf(this.outfit,t,this.game);e&&this.friendsVisible&&(this.pendingNotice={text:e,created:this.elapsed}),this.character?.dispose(),this.character=ta(t,this.catalog),this.character.pose(this.elapsed,this.poseStyle),this.anchor.add(this.character.root),this.outfit=t,this.canvas.dataset.outfit=JSON.stringify(t),this.draw(0)}setTheme(t){this.environment.wall.color.set(t.bg)}setActive(t){this.active=t,t?this.resize():(this.keys.clear(),this.virtual.clear(),this.path=[],this.destinationStation=null)}setPose(t){this.poseStyle=t,this.canvas.dataset.pose=String(t),this.setView("fit")}setView(t){let e=this.view!==t;this.view=t,this.canvas.dataset.view=t,this.path=[],this.destinationStation=null,this.cameraGoal=null,this.faceShop=!1,this.keys.clear(),this.virtual.clear(),e&&(this.pitch=t==="face"?.025:t==="fit"?.16:.43,t!=="walk"&&(this.yaw=this.cameraYaw)),this.onView(t)}resetCamera(){let t=this.view==="face"?"face":"fit";this.setView(t),this.cameraYaw=.18,this.pitch=t==="face"?.025:.16,this.yaw=.18}turn(t){this.setView(this.view==="face"?"face":"fit"),this.cameraYaw+=t}setMove(t,e){e?(this.virtual.add(t),this.view!=="walk"&&(this.view="walk",this.pitch=.43,this.onView("walk"))):this.virtual.delete(t)}interact(){this.nearby&&this.onStation(this.nearby,{browse:!0})}visit(t){let e=Sn.find(n=>n.id===t);e&&(this.setView("walk"),this.destinationStation=e,this.path=Ws(this.position,{x:e.approach[0],z:e.approach[1]}),ch(this.position)?.id===e.storeId&&(this.cameraGoal=-Math.sign(e.x)*Math.PI/2),this.canvas.dataset.destination=t,this.canvas.focus({preventScroll:!0}))}dressShopper(t){t.character?.dispose(),t.character=ta(t.brain.outfit,this.catalog),t.character.root.traverse(e=>{e.isMesh&&(e.castShadow=!1)}),t.anchor.add(t.character.root)}setFriends(t){this.friendsVisible=t,this.shoppers.visible=t&&this.view==="walk",this.canvas.dataset.friends=String(t),t||(this.speech=null,this.pendingNotice=null,this.friend=null,this.onFriend(null),this.onBubble(null))}canTalk(t){return Math.hypot(t.brain.position.x-this.position.x,t.brain.position.z-this.position.z)<4.8&&ea(this.position,t.brain.position,Zn,.06)}say(t,e,n=2){!t||!this.friendsVisible||this.view!=="walk"||(t.brain.greet(this.position,n),this.speech={npc:t,text:e,until:this.elapsed+6},this.lastSpeechAt=this.elapsed,this.nextChatAt=this.elapsed+22,this.canvas.dataset.lastGreeting=`${t.brain.name}: ${e}`)}greet(){this.friend&&this.say(this.friend,yl(this.outfit,this.game,this.chatCount++))}poseTogether(){if(!this.friend)return;let t=8+this.chatCount++%8;this.poseStyle=t,this.canvas.dataset.pose=String(t),this.yaw=this.cameraYaw,this.path=[],this.destinationStation=null,this.say(this.friend,"Matching poses! Ready\u2026 three, two, one! \u2728",t),this.friend.brain.yaw=this.cameraYaw,this.onTogether(t)}updateFriends(){let t=this.shoppers.visible&&!this.dragging,e=t?this.npcs.filter(a=>this.canTalk(a)).sort((a,o)=>Math.hypot(a.brain.position.x-this.position.x,a.brain.position.z-this.position.z)-Math.hypot(o.brain.position.x-this.position.x,o.brain.position.z-this.position.z))[0]:null;if(e!==this.friend&&(this.friend=e,this.onFriend(e?.brain.name||null)),this.speech&&this.elapsed>=this.speech.until&&(this.speech=null),this.pendingNotice&&this.elapsed-this.pendingNotice.created>45&&(this.pendingNotice=null),e&&this.pendingNotice&&this.elapsed-this.pendingNotice.created>.6&&(!this.speech||this.elapsed-this.lastSpeechAt>3)?(this.say(e,this.pendingNotice.text,1),this.pendingNotice=null):e&&!this.speech&&this.elapsed>this.nextChatAt&&this.say(e,yl(this.outfit,this.game,this.chatCount++)),!this.speech||!t){this.onBubble(null);return}let{npc:n,text:s}=this.speech,r=n.anchor.localToWorld(new P(0,4.05,0)).project(this.camera);if(Math.abs(r.x)>1.12||r.z>1||r.z<-1){this.onBubble(null);return}this.onBubble({name:n.brain.name,text:s,left:tn.clamp((r.x+1)*50,18,82),top:tn.clamp((1-r.y)*50,30,86)})}setDressDrag(t,e=null){this.dragging=t,t?(this.keys.clear(),this.virtual.clear(),this.path=[],this.destinationStation=null,this.stockSource=e,e&&(e.visible=!1)):(this.stockSource&&(this.stockSource.visible=!0),this.stockSource=null),this.canvas.dataset.dragging=String(t)}dropBounds(){if(!this.character)return null;this.anchor.updateWorldMatrix(!0,!0);let t=new Xe().setFromObject(this.character.root),e=this.canvas.getBoundingClientRect(),n=[];for(let l of[t.min.x,t.max.x])for(let c of[t.min.y,t.max.y])for(let d of[t.min.z,t.max.z]){let u=new P(l,c,d).project(this.camera);n.push({x:e.left+(u.x+1)*e.width/2,y:e.top+(1-u.y)*e.height/2})}let s=Math.max(e.left,Math.min(...n.map(l=>l.x))-20),r=Math.max(e.top,Math.min(...n.map(l=>l.y))-15),a=Math.min(e.right,Math.max(...n.map(l=>l.x))+20),o=Math.min(e.bottom,Math.max(...n.map(l=>l.y))+15);return{left:s,top:r,width:a-s,height:o-r}}isCharacterDrop(t,e){let n=this.dropBounds();return!!n&&t>=n.left&&t<=n.left+n.width&&e>=n.top&&e<=n.top+n.height}rayAt(t){let e=this.canvas.getBoundingClientRect(),n=new zr;return n.setFromCamera(new rt((t.clientX-e.left)/e.width*2-1,-(t.clientY-e.top)/e.height*2+1),this.camera),n}rackHit(t){return this.view!=="walk"?null:this.rayAt(t).intersectObjects(this.environment.interactions,!0).find(n=>{for(let s=n.object;s;s=s.parent)if(!s.visible)return!1;return!0})||null}itemAt(t){let n=this.rackHit(t)?.object;for(;n&&!n.userData.itemId;)n=n.parent;return n||null}resize(){let{width:t,height:e}=this.container.getBoundingClientRect();t<2||e<2||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix())}bind(){let t=this.abort.signal,e=this.canvas;document.addEventListener("keydown",s=>{if(!this.active||document.querySelector("dialog[open]")||document.activeElement!==e&&document.activeElement!==document.body)return;let r=s.key.toLowerCase();if(this.dragging){r==="escape"&&this.onDrop(null,!0);return}["w","a","s","d","arrowup","arrowleft","arrowdown","arrowright"].includes(r)&&(s.preventDefault(),this.keys.add(r),this.view!=="walk"&&(this.view="walk",this.pitch=.43,this.onView("walk")),this.path=[]),r==="e"&&(s.preventDefault(),this.interact()),r==="f"&&(s.preventDefault(),this.greet())},{signal:t}),document.addEventListener("keyup",s=>this.keys.delete(s.key.toLowerCase()),{signal:t}),window.addEventListener("blur",()=>{this.keys.clear(),this.virtual.clear(),this.dragging&&this.onDrop(null,!0)},{signal:t}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.keys.clear(),this.virtual.clear())},{signal:t}),e.addEventListener("blur",()=>this.keys.clear(),{signal:t});let n=null;e.addEventListener("pointerdown",s=>{if(s.button!==0)return;e.focus({preventScroll:!0}),e.setPointerCapture(s.pointerId);let r=this.itemAt(s);e.dataset.lastGrab=r?.userData.itemId||"none",n={id:s.pointerId,x:s.clientX,y:s.clientY,startX:s.clientX,startY:s.clientY,moved:!1,item:r,started:!1}},{signal:t}),e.addEventListener("pointermove",s=>{if(!n){let o=this.itemAt(s);this.canvas.style.cursor=o?"grab":"move",this.onHover(o?.userData.itemId||null,s);return}let r=s.clientX-n.x,a=s.clientY-n.y;n.moved||(n.moved=Math.hypot(s.clientX-n.startX,s.clientY-n.startY)>6),n.moved&&(n.item?(n.started||(n.started=!0,this.setDressDrag(!0,n.item),this.onGrab(n.item.userData.itemId,s)),this.dragging&&this.onDrag(s)):(this.cameraGoal=null,this.cameraYaw-=r*.009,this.pitch=tn.clamp(this.pitch+a*.004,.025,.85))),n.x=s.clientX,n.y=s.clientY},{signal:t}),e.addEventListener("pointerup",s=>{if(!n)return;let r=!n.moved,a=n.started;n=null,e.hasPointerCapture(s.pointerId)&&e.releasePointerCapture(s.pointerId),a&&this.dragging?this.onDrop(s,!1):r&&this.view==="walk"&&this.pick(s)},{signal:t}),e.addEventListener("pointercancel",()=>{n=null,this.dragging&&this.onDrop(null,!0)},{signal:t}),e.addEventListener("pointerleave",()=>this.onHover(null),{signal:t})}pick(t){let e=this.rayAt(t),n=this.rackHit(t);if(this.shoppers.visible){let a=e.intersectObjects(this.npcs.map(o=>o.anchor),!0)[0];if(a&&(!n||a.distance<n.distance)){let o=a.object;for(;o&&o.userData.shopperIndex===void 0;)o=o.parent;let l=this.npcs[o?.userData.shopperIndex];if(l&&this.canTalk(l)){this.say(l,yl(this.outfit,this.game,this.chatCount++));return}}}let s=null;if(n){let a=n.object;for(;a&&!a.userData.station;)a=a.parent;s=a?.userData.station}let r=new P;if(s){if(r.set(s.approach[0],0,s.approach[1]),this.destinationStation=s,Math.hypot(r.x-this.position.x,r.z-this.position.z)<1.3){this.onStation(s,{browse:!0});return}}else{if(!e.ray.intersectPlane(new $e(new P(0,1,0),0),r))return;this.destinationStation=null}this.path=Ws(this.position,{x:r.x,z:r.z}),this.canvas.dataset.destination=s?.id||"floor"}walk(t){let e=new Set([...this.keys,...this.virtual]),n=Number(e.has("d")||e.has("arrowright")||e.has("right"))-Number(e.has("a")||e.has("arrowleft")||e.has("left")),s=Number(e.has("s")||e.has("arrowdown")||e.has("down"))-Number(e.has("w")||e.has("arrowup")||e.has("up"));if(n||s){let c=n;n=n*Math.cos(this.cameraYaw)+s*Math.sin(this.cameraYaw),s=s*Math.cos(this.cameraYaw)-c*Math.sin(this.cameraYaw),this.path=[],this.destinationStation=null,this.faceShop=!1,this.cameraGoal=null}let r,a;if(!n&&!s&&this.path.length){let c=gl(this.position,this.path,t);r=c.position,this.path=c.path,a=c.distance}else r=ml(this.position,{x:n,z:s},t,Zn),a=Math.hypot(r.x-this.position.x,r.z-this.position.z);if(a>1e-4){let c=Math.atan2(r.x-this.position.x,r.z-this.position.z);this.yaw+=Math.atan2(Math.sin(c-this.yaw),Math.cos(c-this.yaw))*(1-Math.exp(-t*12))}if(this.position=r,!this.path.length&&this.destinationStation){let c=this.destinationStation;this.destinationStation=null,Math.hypot(r.x-c.approach[0],r.z-c.approach[1])<1.4&&(this.faceShop=c.id!=="runway",this.onStation(c))}let o=Yd(this.position);o?.id!==this.nearby?.id&&(this.nearby=o,this.onNearby(o));let l=ch(r);return l?.id!==this.currentStore?.id&&(this.currentStore=l,this.onLocation(l),this.destinationStation&&(this.cameraGoal=l?-l.side*Math.PI/2:.18)),this.canvas.dataset.position=`${r.x.toFixed(2)},${r.z.toFixed(2)}`,this.canvas.dataset.moving=String(a>1e-4),a}draw(t){let e=this.view==="walk"&&!this.dragging?this.walk(t):0,n=this.elapsed;this.cameraGoal!=null&&(this.cameraYaw+=Math.atan2(Math.sin(this.cameraGoal-this.cameraYaw),Math.cos(this.cameraGoal-this.cameraYaw))*(1-Math.exp(-t*4))),this.faceShop&&!e&&(this.yaw+=Math.atan2(Math.sin(this.cameraYaw-this.yaw),Math.cos(this.cameraYaw-this.yaw))*(1-Math.exp(-t*5))),this.character&&(this.anchor.position.set(this.position.x,this.view==="walk"?-.04:.08,this.position.z),this.anchor.rotation.y=this.yaw,this.character.animate(n,this.poseStyle,{distance:e,dt:t}));let s=this.view==="face"?2.2:this.view==="fit"?5.35:9.7,r=this.view==="face"?2.88:this.view==="fit"?1.78:1.55;this.target.set(this.position.x,r,this.position.z);let a=new P(this.position.x+Math.sin(this.cameraYaw)*s*Math.cos(this.pitch),r+Math.sin(this.pitch)*s,this.position.z+Math.cos(this.cameraYaw)*s*Math.cos(this.pitch));this.camera.position.lerp(a,t?1-Math.exp(-t*7):1),this.camera.lookAt(this.target),this.environment.room.visible=this.view==="walk",this.fittingStage.visible=this.view!=="walk",this.fittingStage.position.set(this.position.x,0,this.position.z),this.shoppers.visible=this.view==="walk"&&this.friendsVisible;for(let o of this.npcs){let l=this.shoppers.visible&&!this.dragging?o.brain.tick(t,this.position,this.npcs.filter(c=>c!==o).map(c=>c.brain.position)):{walking:!1,pose:0};l.changed&&this.dressShopper(o),o.anchor.position.set(o.brain.position.x,-.04,o.brain.position.z),o.anchor.rotation.y=o.brain.yaw,o.character.animate(n+this.npcs.indexOf(o),l.pose,{distance:l.distance||0,dt:t})}(!this.lastNpcReport||n-this.lastNpcReport>.5)&&(this.canvas.dataset.shoppers=JSON.stringify(this.npcs.map(({brain:o})=>({name:o.name,activity:o.description(),x:+o.position.x.toFixed(2),z:+o.position.z.toFixed(2),changes:o.changes}))),this.lastNpcReport=n),this.environment.update(this.camera,this.position,n),this.updateFriends(),this.renderer.render(this.scene,this.camera),this.canvas.dataset.facing=this.cameraYaw.toFixed(2),this.canvas.dataset.view=this.view,this.canvas.dataset.ready="true"}loop(){if(this.disposed)return;this.frame=requestAnimationFrame(()=>this.loop());let t=performance.now(),e=Math.min((t-this.lastFrame)/1e3,.05);this.lastFrame=t,this.active&&!document.hidden&&!document.querySelector("dialog[open]")&&(this.elapsed+=e,this.draw(e))}portrait(t){return of(t,this.catalog)}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),this.abort.abort(),this.resizeObserver.disconnect(),this.character?.dispose(),this.npcs.forEach(t=>t.character.dispose()),this.renderer.dispose()}},Jn;function of(i,t,e=1){Jn||(Jn=new Kr({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})),Jn.localClippingEnabled=!0,Jn.setSize(440,600),Jn.setPixelRatio(1),Jn.outputColorSpace=Re,Jn.toneMapping=Ns,Jn.toneMappingExposure=1.2;let n=new Bi;mh(n);let s=ta(i,t);n.add(s.root),s.pose(.7,e,!1),s.root.rotation.y-=.15;let r=new Fe(35,440/600,.1,30);r.position.set(0,2,6.8),r.lookAt(0,1.72,0),Jn.render(n,r);let a=Jn.domElement.toDataURL("image/png");return s.dispose(),a}var ph=class{constructor(t,e){this.container=t,this.catalog=e,this.renderer=af(t),this.renderer.domElement.tabIndex=-1,this.renderer.domElement.setAttribute("aria-label","Your character walking the 3D runway"),this.scene=new Bi,this.scene.background=new Ft("#dec4d5"),mh(this.scene);let n=hh(this.scene,[9,.1,16],sf,[0,-.08,0]);n.receiveShadow=!0,hh(this.scene,[2.1,.016,14],jx,[0,-.018,0]);for(let s of[-1,1])for(let r=0;r<9;r++)uh(this.scene,.04,.75,rf,[s*1.8,.37,-r]),Qx(this.scene,[.07,.07,.07],na("#fff4cf",{emissive:"#fff0bb",emissiveIntensity:.8}),[s*1.8,.8,-r]);this.camera=new Fe(43,1,.1,40),this.camera.position.set(.1,2.9,8.4),this.camera.lookAt(0,1.5,-.9),this.anchor=new oe,this.scene.add(this.anchor),this.active=!1,this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.audience=ef(this.scene,{label:dh,reduced:this.reduced}),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.loop()}resize(){let{width:t,height:e}=this.container.getBoundingClientRect();t<2||e<2||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix())}show(t,e=1){this.character?.dispose(),this.character=ta(t,this.catalog),this.anchor.add(this.character.root),this.poseStyle=e,this.started=performance.now(),this.lastTime=0,this.anchor.position.z=this.reduced?0:-3.2,this.active=!0,this.renderer.domElement.dataset.audience=String(this.audience.people.length),this.resize()}hide(){this.active=!1}loop(){if(this.frame=requestAnimationFrame(()=>this.loop()),!this.active||document.hidden)return;let t=(performance.now()-this.started)/1e3,e=Math.min(.05,t-this.lastTime);this.lastTime=t;let n=this.reduced?1:Math.min(1,t/3.5),s=n<.85?n:.85+(n-.85)-(n-.85)**2/.3,a=-3.2+3.2*Math.min(1,s/.925),o=Math.abs(a-this.anchor.position.z);this.anchor.position.z=a,this.anchor.rotation.y=n<1||this.reduced?0:Math.sin((t-3.5)*.4)*.14,this.character?.animate(t,this.poseStyle,{distance:Math.min(o,.1),dt:e,strut:!0}),this.audience.update(t,a),this.renderer.render(this.scene,this.camera)}};return yf(ev);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
