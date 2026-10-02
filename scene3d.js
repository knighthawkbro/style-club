var Style3D=(()=>{var Hl=Object.defineProperty;var qf=Object.getOwnPropertyDescriptor;var Yf=Object.getOwnPropertyNames;var Zf=Object.prototype.hasOwnProperty;var Jf=(i,t)=>{for(var e in t)Hl(i,e,{get:t[e],enumerable:!0})},$f=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of Yf(t))!Zf.call(i,s)&&s!==e&&Hl(i,s,{get:()=>t[s],enumerable:!(n=qf(t,s))||n.enumerable});return i};var Kf=i=>$f(Hl({},"__esModule",{value:!0}),i);var Fy={};Jf(Fy,{ACTIVITIES:()=>Si,Boutique:()=>Oh,MakeupMirror:()=>Ol,Runway:()=>zh,STATIONS:()=>Tn,STORES:()=>ri,photo:()=>Uf,portrait:()=>Bh,stickerImage:()=>Nf});var Pu=0,Ec=1,Lu=2;var rs=1,Du=2,$s=3,ki=0,rn=1,Ce=2,Qn=0,Ks=1,wc=2,Tc=3,Ac=4,Nu=5;var as=100,Uu=101,Fu=102,Ou=103,Bu=104,zu=200,ku=201,Hu=202,Vu=203,Rc=204,Cc=205,Gu=206,Wu=207,Xu=208,qu=209,Yu=210,Zu=211,Ju=212,$u=213,Ku=214,Ya=0,Za=1,Ja=2,Os=3,$a=4,Ka=5,ja=6,Qa=7,Ic=0,ju=1,Qu=2,Un=0,Pc=1,Lc=2,Dc=3,ti=4,Nc=5,Uc=6,Fc=7;var Oc=300,Hi=301,os=302,Po=303,Lo=304,ta=306,to=1e3,Yn=1001,eo=1002,He=1003,td=1004;var ea=1005;var Ve=1006,Do=1007;var Vi=1008;var cn=1009,Bc=1010,zc=1011,js=1012,No=1013,Fn=1014,Sn=1015,On=1016,Uo=1017,Fo=1018,Qs=1020,kc=35902,Hc=35899,Vc=1021,Gc=1022,bn=1023,$n=1026,Gi=1027,Oo=1028,Bo=1029,Wi=1030,zo=1031;var ko=1033,na=33776,ia=33777,sa=33778,ra=33779,Ho=35840,Vo=35841,Go=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,Zo=37488,Jo=37489,aa=37490,$o=37491,Ko=37808,jo=37809,Qo=37810,tl=37811,el=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,ul=36492,dl=36494,fl=36495,pl=36283,ml=36284,oa=36285,gl=36286;var Er=2300,no=2301,Xa=2302,fc=2303,pc=2400,mc=2401,gc=2402;var ed=3200;var _l=0,nd=1,yi="",xe="srgb",wr="srgb-linear",Tr="linear",me="srgb";var qa=7680;var id=519,sd=512,rd=513,ad=514,xl=515,od=516,ld=517,yl=518,cd=519,Wc=35044;var Xc="300 es",Ln=2e3,Bs=2001;function jf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Qf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hd(){let i=Ar("canvas");return i.style.display="block",i}var Kh={},zs=null;function Rr(...i){let t="THREE."+i.shift();zs?zs("log",t,...i):console.log(t,...i)}function ud(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=ud(i);let t="THREE."+i.shift();if(zs)zs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Wt(...i){i=ud(i);let t="THREE."+i.shift();if(zs)zs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ji(...i){let t=i.join(" ");t in Kh||(Kh[t]=!0,Xt(...i))}function dd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var fd={[Ya]:Za,[Ja]:ja,[$a]:Qa,[Os]:Ka,[Za]:Ya,[ja]:Ja,[Qa]:$a,[Ka]:Os},Kn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jh=1234567,vr=Math.PI/180,ks=180/Math.PI;function Jn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function ne(i,t,e){return Math.max(t,Math.min(e,i))}function qc(i,t){return(i%t+t)%t}function tp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function ep(i,t,e){return i!==t?(e-i)/(t-i):0}function Mr(i,t,e){return(1-e)*i+e*t}function np(i,t,e,n){return Mr(i,t,1-Math.exp(-e*n))}function ip(i,t=1){return t-Math.abs(qc(i,t*2)-t)}function sp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function rp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ap(i,t){return i+Math.floor(Math.random()*(t-i+1))}function op(i,t){return i+Math.random()*(t-i)}function lp(i){return i*(.5-Math.random())}function cp(i){i!==void 0&&(jh=i);let t=jh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function hp(i){return i*vr}function up(i){return i*ks}function dp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function fp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function pp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mp(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),h=r((n-t)/2),p=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*h,o*c);break;case"YXY":i.set(l*h,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*h,o*u,o*c);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Pn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ge(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ue={DEG2RAD:vr,RAD2DEG:ks,generateUUID:Jn,clamp:ne,euclideanModulo:qc,mapLinear:tp,inverseLerp:ep,lerp:Mr,damp:np,pingpong:ip,smoothstep:sp,smootherstep:rp,randInt:ap,randFloat:op,randFloatSpread:lp,seededRandom:cp,degToRad:hp,radToDeg:up,isPowerOfTwo:dp,ceilPowerOfTwo:fp,floorPowerOfTwo:pp,setQuaternionFromProperEuler:mp,normalize:ge,denormalize:Pn},jc=class jc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jc.prototype.isVector2=!0;var ot=jc,vn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],f=r[a+0],h=r[a+1],p=r[a+2],_=r[a+3];if(d!==_||l!==f||c!==h||u!==p){let g=l*f+c*h+u*p+d*_;g<0&&(f=-f,h=-h,p=-p,_=-_,g=-g);let m=1-o;if(g<.9995){let M=Math.acos(g),b=Math.sin(M);m=Math.sin(m*M)/b,o=Math.sin(o*M)/b,l=l*m+f*o,c=c*m+h*o,u=u*m+p*o,d=d*m+_*o}else{l=l*m+f*o,c=c*m+h*o,u=u*m+p*o,d=d*m+_*o;let M=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=M,c*=M,u*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],h=r[a+2],p=r[a+3];return t[e]=o*p+u*d+l*h-c*f,t[e+1]=l*p+u*f+c*d-o*h,t[e+2]=c*p+u*h+o*f-l*d,t[e+3]=u*p-o*d-l*f-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),h=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"YXZ":this._x=f*u*d+c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"ZXY":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d-f*h*p;break;case"ZYX":this._x=f*u*d-c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d+f*h*p;break;case"YZX":this._x=f*u*d+c*h*p,this._y=c*h*d+f*u*p,this._z=c*u*p-f*h*d,this._w=c*u*d-f*h*p;break;case"XZY":this._x=f*u*d-c*h*p,this._y=c*h*d-f*u*p,this._z=c*u*p+f*h*d,this._w=c*u*d+f*h*p;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+o+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>d){let h=2*Math.sqrt(1+n-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>d){let h=2*Math.sqrt(1+o-n-d);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Qc=class Qc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Qh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Qh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vl.copy(this).projectOnVector(t),this.sub(Vl)}reflect(t){return this.sub(Vl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qc.prototype.isVector3=!0;var I=Qc,Vl=new I,Qh=new vn,th=class th{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],h=n[5],p=n[8],_=s[0],g=s[3],m=s[6],M=s[1],b=s[4],y=s[7],w=s[2],T=s[5],A=s[8];return r[0]=a*_+o*M+l*w,r[3]=a*g+o*b+l*T,r[6]=a*m+o*y+l*A,r[1]=c*_+u*M+d*w,r[4]=c*g+u*b+d*T,r[7]=c*m+u*y+d*A,r[2]=f*_+h*M+p*w,r[5]=f*g+h*b+p*T,r[8]=f*m+h*y+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*l-u*r,h=c*r-a*l,p=e*d+n*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(s*c-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=h*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gl.makeScale(t,e)),this}rotate(t){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gl.makeRotation(-t)),this}translate(t,e){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};th.prototype.isMatrix3=!0;var Zt=th,Gl=new Zt,tu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),eu=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gp(){let i={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===me&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===me&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===yi?Tr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wr]:{primaries:t,whitePoint:n,transfer:Tr,toXYZ:tu,fromXYZ:eu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xe},outputColorSpaceConfig:{drawingBufferColorSpace:xe}},[xe]:{primaries:t,whitePoint:n,transfer:me,toXYZ:tu,fromXYZ:eu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xe}}}),i}var re=gp();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xs,io=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{xs===void 0&&(xs=Ar("canvas")),xs.width=t.width,xs.height=t.height;let s=xs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=xs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ar("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},_p=0,Hs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wl(s[a].image)):r.push(Wl(s[a]))}else r=Wl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?io.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var xp=0,Xl=new I,tn=class i extends Kn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Yn,s=Yn,r=Ve,a=Vi,o=bn,l=cn,c=i.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Jn(),this.name="",this.source=new Hs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xl).x}get height(){return this.source.getSize(Xl).y}get depth(){return this.source.getSize(Xl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Oc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case to:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case to:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Oc;tn.DEFAULT_ANISOTROPY=1;var eh=class eh{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,y=(h+1)/2,w=(m+1)/2,T=(u+f)/4,A=(d+_)/4,x=(p+g)/4;return b>y&&b>w?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=A/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=A/r,s=x/r),this.set(n,s,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(d-_)/M,this.z=(f-u)/M,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};eh.prototype.isVector4=!0;var we=eh,so=class extends Kn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new tn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Hs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ln=class extends so{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Cr=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ro=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=He,this.minFilter=He,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Io=class Io{constructor(t,e,n,s,r,a,o,l,c,u,d,f,h,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,f,h,p,_,g)}set(t,e,n,s,r,a,o,l,c,u,d,f,h,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Io().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ys.setFromMatrixColumn(t,0).length(),r=1/ys.setFromMatrixColumn(t,1).length(),a=1/ys.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*u,h=a*d,p=o*u,_=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=h+p*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=p+h*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*u,h=l*d,p=c*u,_=c*d;e[0]=f+_*o,e[4]=p*o-h,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=h*o-p,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*u,h=l*d,p=c*u,_=c*d;e[0]=f-_*o,e[4]=-a*d,e[8]=p+h*o,e[1]=h+p*o,e[5]=a*u,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*u,h=a*d,p=o*u,_=o*d;e[0]=l*u,e[4]=p*c-h,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=h*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,h=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=_-f*d,e[8]=p*d+h,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=h*d+p,e[10]=f-_*d}else if(t.order==="XZY"){let f=a*l,h=a*c,p=o*l,_=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+_,e[5]=a*u,e[9]=h*d-p,e[2]=p*d-h,e[6]=o*u,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yp,t,vp)}lookAt(t,e,n){let s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),Ri.crossVectors(n,un),Ri.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ri.crossVectors(n,un)),Ri.normalize(),va.crossVectors(un,Ri),s[0]=Ri.x,s[4]=va.x,s[8]=un.x,s[1]=Ri.y,s[5]=va.y,s[9]=un.y,s[2]=Ri.z,s[6]=va.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],h=n[13],p=n[2],_=n[6],g=n[10],m=n[14],M=n[3],b=n[7],y=n[11],w=n[15],T=s[0],A=s[4],x=s[8],S=s[12],R=s[1],P=s[5],O=s[9],z=s[13],L=s[2],B=s[6],N=s[10],H=s[14],K=s[3],V=s[7],Z=s[11],J=s[15];return r[0]=a*T+o*R+l*L+c*K,r[4]=a*A+o*P+l*B+c*V,r[8]=a*x+o*O+l*N+c*Z,r[12]=a*S+o*z+l*H+c*J,r[1]=u*T+d*R+f*L+h*K,r[5]=u*A+d*P+f*B+h*V,r[9]=u*x+d*O+f*N+h*Z,r[13]=u*S+d*z+f*H+h*J,r[2]=p*T+_*R+g*L+m*K,r[6]=p*A+_*P+g*B+m*V,r[10]=p*x+_*O+g*N+m*Z,r[14]=p*S+_*z+g*H+m*J,r[3]=M*T+b*R+y*L+w*K,r[7]=M*A+b*P+y*B+w*V,r[11]=M*x+b*O+y*N+w*Z,r[15]=M*S+b*z+y*H+w*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],h=t[14],p=t[3],_=t[7],g=t[11],m=t[15],M=l*h-c*f,b=o*h-c*d,y=o*f-l*d,w=a*h-c*u,T=a*f-l*u,A=a*d-o*u;return e*(_*M-g*b+m*y)-n*(p*M-g*w+m*T)+s*(p*b-_*w+m*A)-r*(p*y-_*T+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],h=t[11],p=t[12],_=t[13],g=t[14],m=t[15],M=e*o-n*a,b=e*l-s*a,y=e*c-r*a,w=n*l-s*o,T=n*c-r*o,A=s*c-r*l,x=u*_-d*p,S=u*g-f*p,R=u*m-h*p,P=d*g-f*_,O=d*m-h*_,z=f*m-h*g,L=M*z-b*O+y*P+w*R-T*S+A*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/L;return t[0]=(o*z-l*O+c*P)*B,t[1]=(s*O-n*z-r*P)*B,t[2]=(_*A-g*T+m*w)*B,t[3]=(f*T-d*A-h*w)*B,t[4]=(l*R-a*z-c*S)*B,t[5]=(e*z-s*R+r*S)*B,t[6]=(g*y-p*A-m*b)*B,t[7]=(u*A-f*y+h*b)*B,t[8]=(a*O-o*R+c*x)*B,t[9]=(n*R-e*O-r*x)*B,t[10]=(p*T-_*y+m*M)*B,t[11]=(d*y-u*T-h*M)*B,t[12]=(o*S-a*P-l*x)*B,t[13]=(e*P-n*S+s*x)*B,t[14]=(_*b-p*w-g*M)*B,t[15]=(u*w-d*b+f*M)*B,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,f=r*c,h=r*u,p=r*d,_=a*u,g=a*d,m=o*d,M=l*c,b=l*u,y=l*d,w=n.x,T=n.y,A=n.z;return s[0]=(1-(_+m))*w,s[1]=(h+y)*w,s[2]=(p-b)*w,s[3]=0,s[4]=(h-y)*T,s[5]=(1-(f+m))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(p+b)*A,s[9]=(g-M)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ys.set(s[0],s[1],s[2]).length(),o=ys.set(s[4],s[5],s[6]).length(),l=ys.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Rn.copy(this);let c=1/a,u=1/o,d=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,e.setFromRotationMatrix(Rn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=Ln,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),h=(n+s)/(n-s),p,_;if(l)p=r/(a-r),_=a*r/(a-r);else if(o===Ln)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Bs)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ln,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),h=-(n+s)/(n-s),p,_;if(l)p=1/(a-r),_=a/(a-r);else if(o===Ln)p=-2/(a-r),_=-(a+r)/(a-r);else if(o===Bs)p=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Io.prototype.isMatrix4=!0;var le=Io,ys=new I,Rn=new le,yp=new I(0,0,0),vp=new I(1,1,1),Ri=new I,va=new I,un=new I,nu=new le,iu=new vn,gi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],h=s[10];switch(e){case"XYZ":this._y=Math.asin(ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return iu.setFromEuler(this),this.setFromQuaternion(iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};gi.DEFAULT_ORDER="XYZ";var Vs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Mp=0,su=new I,vs=new vn,ci=new le,Ma=new I,hr=new I,Sp=new I,bp=new vn,ru=new I(1,0,0),au=new I(0,1,0),ou=new I(0,0,1),lu={type:"added"},Ep={type:"removed"},Ms={type:"childadded",child:null},ql={type:"childremoved",child:null},Ge=class i extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new gi,n=new vn,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Zt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,e){return vs.setFromAxisAngle(t,e),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(ru,t)}rotateY(t){return this.rotateOnAxis(au,t)}rotateZ(t){return this.rotateOnAxis(ou,t)}translateOnAxis(t,e){return su.copy(t).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ru,t)}translateY(t){return this.translateOnAxis(au,t)}translateZ(t){return this.translateOnAxis(ou,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ma.copy(t):Ma.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(hr,Ma,this.up):ci.lookAt(Ma,hr,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(ci),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Wt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):Wt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ep),ql.child=t,this.dispatchEvent(ql),ql.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lu),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,Sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),h=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ge.DEFAULT_UP=new I(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var te=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},wp={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function Yl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=qc(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Yl(a,r,t+1/3),this.g=Yl(a,r,t),this.b=Yl(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=xe){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){let n=pd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Fs(t.r),this.g=Fs(t.g),this.b=Fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return re.workingToColorSpace(qe.copy(this),t),Math.round(ne(qe.r*255,0,255))*65536+Math.round(ne(qe.g*255,0,255))*256+Math.round(ne(qe.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(qe.copy(this),e);let n=qe.r,s=qe.g,r=qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=xe){re.workingToColorSpace(qe.copy(this),t);let e=qe.r,n=qe.g,s=qe.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ci),this.setHSL(Ci.h+t,Ci.s+e,Ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ci),t.getHSL(Sa);let n=Mr(Ci.h,Sa.h,e),s=Mr(Ci.s,Sa.s,e),r=Mr(Ci.l,Sa.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qe=new Bt;Bt.NAMES=pd;var Ir=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Dn=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Cn=new I,hi=new I,Zl=new I,ui=new I,Ss=new I,bs=new I,cu=new I,Jl=new I,$l=new I,Kl=new I,jl=new we,Ql=new we,tc=new we,pi=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Cn.subVectors(t,e),s.cross(Cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Cn.subVectors(s,e),hi.subVectors(n,e),Zl.subVectors(t,e);let a=Cn.dot(Cn),o=Cn.dot(hi),l=Cn.dot(Zl),c=hi.dot(hi),u=hi.dot(Zl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,h=(c*l-o*u)*f,p=(a*u-o*l)*f;return r.set(1-h-p,p,h)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return jl.setScalar(0),Ql.setScalar(0),tc.setScalar(0),jl.fromBufferAttribute(t,e),Ql.fromBufferAttribute(t,n),tc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(jl,r.x),a.addScaledVector(Ql,r.y),a.addScaledVector(tc,r.z),a}static isFrontFacing(t,e,n,s){return Cn.subVectors(n,e),hi.subVectors(t,e),Cn.cross(hi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Cn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Cn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ss.subVectors(s,n),bs.subVectors(r,n),Jl.subVectors(t,n);let l=Ss.dot(Jl),c=bs.dot(Jl);if(l<=0&&c<=0)return e.copy(n);$l.subVectors(t,s);let u=Ss.dot($l),d=bs.dot($l);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Ss,a);Kl.subVectors(t,r);let h=Ss.dot(Kl),p=bs.dot(Kl);if(p>=0&&h<=p)return e.copy(r);let _=h*c-l*p;if(_<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(bs,o);let g=u*p-h*d;if(g<=0&&d-u>=0&&h-p>=0)return cu.subVectors(r,s),o=(d-u)/(d-u+(h-p)),e.copy(s).addScaledVector(cu,o);let m=1/(g+_+f);return a=_*m,o=f*m,e.copy(n).addScaledVector(Ss,a).addScaledVector(bs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ye=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ba.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(t.matrixWorld),this.union(ba)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ur),Ea.subVectors(this.max,ur),Es.subVectors(t.a,ur),ws.subVectors(t.b,ur),Ts.subVectors(t.c,ur),Ii.subVectors(ws,Es),Pi.subVectors(Ts,ws),Zi.subVectors(Es,Ts);let e=[0,-Ii.z,Ii.y,0,-Pi.z,Pi.y,0,-Zi.z,Zi.y,Ii.z,0,-Ii.x,Pi.z,0,-Pi.x,Zi.z,0,-Zi.x,-Ii.y,Ii.x,0,-Pi.y,Pi.x,0,-Zi.y,Zi.x,0];return!ec(e,Es,ws,Ts,Ea)||(e=[1,0,0,0,1,0,0,0,1],!ec(e,Es,ws,Ts,Ea))?!1:(wa.crossVectors(Ii,Pi),e=[wa.x,wa.y,wa.z],ec(e,Es,ws,Ts,Ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},di=[new I,new I,new I,new I,new I,new I,new I,new I],In=new I,ba=new Ye,Es=new I,ws=new I,Ts=new I,Ii=new I,Pi=new I,Zi=new I,ur=new I,Ea=new I,wa=new I,Ji=new I;function ec(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ji.fromArray(i,r);let o=s.x*Math.abs(Ji.x)+s.y*Math.abs(Ji.y)+s.z*Math.abs(Ji.z),l=t.dot(Ji),c=e.dot(Ji),u=n.dot(Ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var De=new I,Ta=new ot,Tp=0,ke=class extends Kn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wc,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ta.fromBufferAttribute(this,e),Ta.applyMatrix3(t),this.setXY(e,Ta.x,Ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Pr=class extends ke{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Lr=class extends ke{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends ke{constructor(t,e,n){super(new Float32Array(t),e,n)}},Ap=new Ye,dr=new I,nc=new I,Di=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Ap.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dr.subVectors(t,this.center);let e=dr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dr.copy(t.center).add(nc)),this.expandByPoint(dr.copy(t.center).sub(nc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Rp=0,yn=new le,ic=new Ge,As=new I,dn=new Ye,fr=new Ye,ze=new I,ve=class i extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(jf(t)?Lr:Pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ye);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(ze.addVectors(dn.min,fr.min),dn.expandByPoint(ze),ze.addVectors(dn.max,fr.max),dn.expandByPoint(ze)):(dn.expandByPoint(fr.min),dn.expandByPoint(fr.max))}dn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ze.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(t,c),ze.add(As)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new ke(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new I,l[x]=new I;let c=new I,u=new I,d=new I,f=new ot,h=new ot,p=new ot,_=new I,g=new I;function m(x,S,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,R),f.fromBufferAttribute(r,x),h.fromBufferAttribute(r,S),p.fromBufferAttribute(r,R),u.sub(c),d.sub(c),h.sub(f),p.sub(f);let P=1/(h.x*p.y-p.x*h.y);isFinite(P)&&(_.copy(u).multiplyScalar(p.y).addScaledVector(d,-h.y).multiplyScalar(P),g.copy(d).multiplyScalar(h.x).addScaledVector(u,-p.x).multiplyScalar(P),o[x].add(_),o[S].add(_),o[R].add(_),l[x].add(g),l[S].add(g),l[R].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let x=0,S=M.length;x<S;++x){let R=M[x],P=R.start,O=R.count;for(let z=P,L=P+O;z<L;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let b=new I,y=new I,w=new I,T=new I;function A(x){w.fromBufferAttribute(s,x),T.copy(w);let S=o[x];b.copy(S),b.sub(w.multiplyScalar(w.dot(S))).normalize(),y.crossVectors(T,S);let P=y.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,P)}for(let x=0,S=M.length;x<S;++x){let R=M[x],P=R.start,O=R.count;for(let z=P,L=P+O;z<L;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ke(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let f=0,h=t.count;f<h;f+=3){let p=t.getX(f+0),_=t.getX(f+1),g=t.getX(f+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,h=e.count;f<h;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),h=0,p=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let m=0;m<u;m++)f[p++]=c[h++]}return new ke(f,u,d)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=t(f,n);l.push(h)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Wc,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},je=new I,Ws=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),s=ge(s,this.array),r=ge(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Rr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ke(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Rr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sc=new I,Cp=new I,Ip=new Zt,Qe=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=sc.subVectors(n,e).cross(Cp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(sc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ip.getNormalMatrix(t),s=this.coplanarPoint(sc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Pp=0,_i=class extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Ks,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Cc,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qa,this.stencilZFail=qa,this.stencilZPass=qa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Qe().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ot().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Xs=class extends _i{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Rs,pr=new I,Cs=new I,Is=new I,Ps=new ot,mr=new ot,md=new le,Aa=new I,gr=new I,Ra=new I,hu=new ot,rc=new ot,uu=new ot,Nr=class extends Ge{constructor(t=new Xs){if(super(),this.isSprite=!0,this.type="Sprite",Rs===void 0){Rs=new ve;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Dr(e,5);Rs.setIndex([0,1,2,0,2,3]),Rs.setAttribute("position",new Ws(n,3,0,!1)),Rs.setAttribute("uv",new Ws(n,2,3,!1))}this.geometry=Rs,this.material=t,this.center=new ot(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Wt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cs.setFromMatrixScale(this.matrixWorld),md.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cs.multiplyScalar(-Is.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ca(Aa.set(-.5,-.5,0),Is,a,Cs,s,r),Ca(gr.set(.5,-.5,0),Is,a,Cs,s,r),Ca(Ra.set(.5,.5,0),Is,a,Cs,s,r),hu.set(0,0),rc.set(1,0),uu.set(1,1);let o=t.ray.intersectTriangle(Aa,gr,Ra,!1,pr);if(o===null&&(Ca(gr.set(-.5,.5,0),Is,a,Cs,s,r),rc.set(0,1),o=t.ray.intersectTriangle(Aa,Ra,gr,!1,pr),o===null))return;let l=t.ray.origin.distanceTo(pr);l<t.near||l>t.far||e.push({distance:l,point:pr.clone(),uv:pi.getInterpolation(pr,Aa,gr,Ra,hu,rc,uu,new ot),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Ca(i,t,e,n,s,r){Ps.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(mr.x=r*Ps.x-s*Ps.y,mr.y=s*Ps.x+r*Ps.y):mr.copy(Ps),i.copy(t),i.x+=mr.x,i.y+=mr.y,i.applyMatrix4(md)}var fi=new I,ac=new I,Ia=new I,Pa=new I,Ur=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ac.copy(t).add(e).multiplyScalar(.5),Ia.copy(e).sub(t).normalize(),Pa.copy(this.origin).sub(ac);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ia),o=Pa.dot(this.direction),l=-Pa.dot(Ia),c=Pa.lengthSq(),u=Math.abs(1-a*a),d,f,h,p;if(u>0)if(d=a*l-o,f=a*o-l,p=r*u,d>=0)if(f>=-p)if(f<=p){let _=1/u;d*=_,f*=_,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),h=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ac).addScaledVector(Ia,f),h}intersectSphere(t,e){if(t.radius<0)return null;fi.subVectors(t.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,f=t.y-a.y,h=t.z-a.z,p=e.x-a.x,_=e.y-a.y,g=e.z-a.z,m=n.x-a.x,M=n.y-a.y,b=n.z-a.z,y=Math.abs(l),w=Math.abs(c),T=Math.abs(u),A,x,S,R,P,O,z,L,B,N,H,K;if(y>=w&&y>=T?(S=l,O=d,B=p,K=m,l>=0?(A=c,x=u,R=f,P=h,z=_,L=g,N=M,H=b):(A=u,x=c,R=h,P=f,z=g,L=_,N=b,H=M)):w>=T?(S=c,O=f,B=_,K=M,c>=0?(A=u,x=l,R=h,P=d,z=g,L=p,N=b,H=m):(A=l,x=u,R=d,P=h,z=p,L=g,N=m,H=b)):(S=u,O=h,B=g,K=b,u>=0?(A=l,x=c,R=d,P=f,z=p,L=_,N=m,H=M):(A=c,x=l,R=f,P=d,z=_,L=p,N=M,H=m)),S===0)return null;let V=A/S,Z=x/S,J=1/S,lt=R-V*O,ht=P-Z*O,At=z-V*B,pt=L-Z*B,kt=N-V*K,q=H-Z*K,j=kt*pt-q*At,ut=lt*q-ht*kt,Nt=At*ht-pt*lt;if(s){if(j<0||ut<0||Nt<0)return null}else if((j<0||ut<0||Nt<0)&&(j>0||ut>0||Nt>0))return null;let wt=j+ut+Nt;if(wt===0)return null;let Ht=J*(j*O+ut*B+Nt*K);return(wt>0?Ht<0:Ht>0)?null:this.at(Ht/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ze=class extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},du=new le,$i=new Ur,La=new Di,fu=new I,Da=new I,Na=new I,Ua=new I,oc=new I,Fa=new I,pu=new I,Oa=new I,he=class extends Ge{constructor(t=new ve,e=new Ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(oc.fromBufferAttribute(d,t),a?Fa.addScaledVector(oc,u):Fa.addScaledVector(oc.sub(e),u))}e.add(Fa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),$i.copy(t.ray).recast(t.near),!(La.containsPoint($i.origin)===!1&&($i.intersectSphere(La,fu)===null||$i.origin.distanceToSquared(fu)>(t.far-t.near)**2))&&(du.copy(r).invert(),$i.copy(t.ray).applyMatrix4(du),!(n.boundingBox!==null&&$i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$i)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){let g=f[p],m=a[g.materialIndex],M=Math.max(g.start,h.start),b=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let y=M,w=b;y<w;y+=3){let T=o.getX(y),A=o.getX(y+1),x=o.getX(y+2);s=Ba(this,m,t,n,c,u,d,T,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){let M=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);s=Ba(this,a,t,n,c,u,d,M,b,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,_=f.length;p<_;p++){let g=f[p],m=a[g.materialIndex],M=Math.max(g.start,h.start),b=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let y=M,w=b;y<w;y+=3){let T=y,A=y+1,x=y+2;s=Ba(this,m,t,n,c,u,d,T,A,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let g=p,m=_;g<m;g+=3){let M=g,b=g+1,y=g+2;s=Ba(this,a,t,n,c,u,d,M,b,y),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Lp(i,t,e,n,s,r,a,o){let l;if(t.side===rn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ki,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Oa);return c<e.near||c>e.far?null:{distance:c,point:Oa.clone(),object:i}}function Ba(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Da),i.getVertexPosition(l,Na),i.getVertexPosition(c,Ua);let u=Lp(i,t,e,n,Da,Na,Ua,pu);if(u){let d=new I;pi.getBarycoord(pu,Da,Na,Ua,d),s&&(u.uv=pi.getInterpolatedAttribute(s,o,l,c,d,new ot)),r&&(u.uv1=pi.getInterpolatedAttribute(r,o,l,c,d,new ot)),a&&(u.normal=pi.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new I,materialIndex:0};pi.getNormal(Da,Na,Ua,f.normal),u.face=f,u.barycoord=d}return u}var Qi=class extends tn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=He,u=He,d,f){super(null,a,o,l,c,u,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qs=class extends ke{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ls=new le,mu=new le,za=[],gu=new Ye,Dp=new le,_r=new he,xr=new Di,Fr=class extends he{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ye),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),gu.copy(t.boundingBox).applyMatrix4(Ls),this.boundingBox.union(gu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ls),xr.copy(t.boundingSphere).applyMatrix4(Ls),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),t.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ls),mu.multiplyMatrices(n,Ls),_r.matrixWorld=mu,_r.raycast(t,za);for(let a=0,o=za.length;a<o;a++){let l=za[a];l.instanceId=r,l.object=this,e.push(l)}za.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qi(new Float32Array(s*this.count),s,this.count,Oo,Sn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ki=new Di,Np=new ot(.5,.5),ka=new I,Ys=class{constructor(t=new Qe,e=new Qe,n=new Qe,s=new Qe,r=new Qe,a=new Qe){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ln,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],h=r[7],p=r[8],_=r[9],g=r[10],m=r[11],M=r[12],b=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,h-u,m-p,w-M).normalize(),s[1].setComponents(c+a,h+u,m+p,w+M).normalize(),s[2].setComponents(c+o,h+d,m+_,w+b).normalize(),s[3].setComponents(c-o,h-d,m-_,w-b).normalize(),n)s[4].setComponents(l,f,g,y).normalize(),s[5].setComponents(c-l,h-f,m-g,w-y).normalize();else if(s[4].setComponents(c-l,h-f,m-g,w-y).normalize(),e===Ln)s[5].setComponents(c+l,h+f,m+g,w+y).normalize();else if(e===Bs)s[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(t){Ki.center.set(0,0,0);let e=Np.distanceTo(t.center);return Ki.radius=.7071067811865476+e,Ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ka.x=s.normal.x>0?t.max.x:t.min.x,ka.y=s.normal.y>0?t.max.y:t.min.y,ka.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Or=class extends tn{constructor(t=[],e=Hi,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Mn=class extends tn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ni=class extends tn{constructor(t,e,n=Fn,s,r,a,o=He,l=He,c,u=$n,d=1){if(u!==$n&&u!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ao=class extends Ni{constructor(t,e=Fn,n=Hi,s,r,a=He,o=He,l,c=$n){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Br=class extends tn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ue=class i extends ve{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,h=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(d,2));function p(_,g,m,M,b,y,w,T,A,x,S){let R=y/A,P=w/x,O=y/2,z=w/2,L=T/2,B=A+1,N=x+1,H=0,K=0,V=new I;for(let Z=0;Z<N;Z++){let J=Z*P-z;for(let lt=0;lt<B;lt++){let ht=lt*R-O;V[_]=ht*M,V[g]=J*b,V[m]=L,c.push(V.x,V.y,V.z),V[_]=0,V[g]=0,V[m]=T>0?1:-1,u.push(V.x,V.y,V.z),d.push(lt/A),d.push(1-Z/x),H+=1}}for(let Z=0;Z<x;Z++)for(let J=0;J<A;J++){let lt=f+J+B*Z,ht=f+J+B*(Z+1),At=f+(J+1)+B*(Z+1),pt=f+(J+1)+B*Z;l.push(lt,ht,pt),l.push(ht,At,pt),K+=6}o.addGroup(h,K,S),h+=K,f+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},zr=class i extends ve{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=e/2,d=Math.PI/2*t,f=e,h=2*d+f,p=n*2+r,_=s+1,g=new I,m=new I;for(let M=0;M<=p;M++){let b=0,y=0,w=0,T=0;if(M<=n){let S=M/n,R=S*Math.PI/2;y=-u-t*Math.cos(R),w=t*Math.sin(R),T=-t*Math.cos(R),b=S*d}else if(M<=n+r){let S=(M-n)/r;y=-u+S*e,w=t,T=0,b=d+S*f}else{let S=(M-n-r)/n,R=S*Math.PI/2;y=u+t*Math.sin(R),w=t*Math.cos(R),T=t*Math.sin(R),b=d+f+S*d}let A=Math.max(0,Math.min(1,b/h)),x=0;M===0?x=.5/s:M===p&&(x=-.5/s);for(let S=0;S<=s;S++){let R=S/s,P=R*Math.PI*2,O=Math.sin(P),z=Math.cos(P);m.x=-w*z,m.y=y,m.z=w*O,o.push(m.x,m.y,m.z),g.set(-w*z,T,w*O),g.normalize(),l.push(g.x,g.y,g.z),c.push(R+x,A)}if(M>0){let S=(M-1)*_;for(let R=0;R<s;R++){let P=S+R,O=S+R+1,z=M*_+R,L=M*_+R+1;a.push(P,O,z),a.push(O,L,z)}}}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var Fe=class i extends ve{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],h=[],p=0,_=[],g=n/2,m=0;M(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(h,2));function M(){let y=new I,w=new I,T=0,A=(e-t)/n;for(let x=0;x<=r;x++){let S=[],R=x/r,P=R*(e-t)+t;for(let O=0;O<=s;O++){let z=O/s,L=z*l+o,B=Math.sin(L),N=Math.cos(L);w.x=P*B,w.y=-R*n+g,w.z=P*N,d.push(w.x,w.y,w.z),y.set(B,A,N).normalize(),f.push(y.x,y.y,y.z),h.push(z,1-R),S.push(p++)}_.push(S)}for(let x=0;x<s;x++)for(let S=0;S<r;S++){let R=_[S][x],P=_[S+1][x],O=_[S+1][x+1],z=_[S][x+1];(t>0||S!==0)&&(u.push(R,P,z),T+=3),(e>0||S!==r-1)&&(u.push(P,O,z),T+=3)}c.addGroup(m,T,0),m+=T}function b(y){let w=p,T=new ot,A=new I,x=0,S=y===!0?t:e,R=y===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*R,0),f.push(0,R,0),h.push(.5,.5),p++;let P=p;for(let O=0;O<=s;O++){let L=O/s*l+o,B=Math.cos(L),N=Math.sin(L);A.x=S*N,A.y=g*R,A.z=S*B,d.push(A.x,A.y,A.z),f.push(0,R,0),T.x=B*.5+.5,T.y=N*.5*R+.5,h.push(T.x,T.y),p++}for(let O=0;O<s;O++){let z=w+O,L=P+O;y===!0?u.push(L,L+1,z):u.push(L+1,L,z),x+=3}c.addGroup(m,x,y===!0?1:2),m+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ts=class i extends Fe{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},oo=class i extends ve{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let b=new I,y=new I,w=new I;for(let T=0;T<e.length;T+=3)h(e[T+0],b),h(e[T+1],y),h(e[T+2],w),l(b,y,w,M)}function l(M,b,y,w){let T=w+1,A=[];for(let x=0;x<=T;x++){A[x]=[];let S=M.clone().lerp(y,x/T),R=b.clone().lerp(y,x/T),P=T-x;for(let O=0;O<=P;O++)O===0&&x===T?A[x][O]=S:A[x][O]=S.clone().lerp(R,O/P)}for(let x=0;x<T;x++)for(let S=0;S<2*(T-x)-1;S++){let R=Math.floor(S/2);S%2===0?(f(A[x][R+1]),f(A[x+1][R]),f(A[x][R])):(f(A[x][R+1]),f(A[x+1][R+1]),f(A[x+1][R]))}}function c(M){let b=new I;for(let y=0;y<r.length;y+=3)b.x=r[y+0],b.y=r[y+1],b.z=r[y+2],b.normalize().multiplyScalar(M),r[y+0]=b.x,r[y+1]=b.y,r[y+2]=b.z}function u(){let M=new I;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let y=g(M)/2/Math.PI+.5,w=m(M)/Math.PI+.5;a.push(y,1-w)}p(),d()}function d(){for(let M=0;M<a.length;M+=6){let b=a[M+0],y=a[M+2],w=a[M+4],T=Math.max(b,y,w),A=Math.min(b,y,w);T>.9&&A<.1&&(b<.2&&(a[M+0]+=1),y<.2&&(a[M+2]+=1),w<.2&&(a[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function h(M,b){let y=M*3;b.x=t[y+0],b.y=t[y+1],b.z=t[y+2]}function p(){let M=new I,b=new I,y=new I,w=new I,T=new ot,A=new ot,x=new ot;for(let S=0,R=0;S<r.length;S+=9,R+=6){M.set(r[S+0],r[S+1],r[S+2]),b.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),T.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),x.set(a[R+4],a[R+5]),w.copy(M).add(b).add(y).divideScalar(3);let P=g(w);_(T,R+0,M,P),_(A,R+2,b,P),_(x,R+4,y,P)}}function _(M,b,y,w){w<0&&M.x===1&&(a[b]=M.x-1),y.x===0&&y.z===0&&(a[b]=w/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,h=(a-u)/f;return(s+h)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ot:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new le;for(let h=0;h<=t;h++){let p=h/t;s[h]=this.getTangentAt(p,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=t;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ne(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,p))}a[h].crossVectors(s[h],r[h])}if(e===!0){let h=Math.acos(ne(r[0].dot(r[t]),-1,1));h/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(h=-h);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],h*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Zs=class extends fn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new ot){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*u-h*d+this.aX,c=f*d+h*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},lo=class extends Zs{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+d)+(l-o)/d;f*=u,h*=u,s(a,o,f,h)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var _u=new I,xu=new I,lc=new Yc,cc=new Yc,hc=new Yc,Ui=class extends fn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(xu.subVectors(s[0],s[1]).add(s[0]),c=xu);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(_u.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=_u),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),h),_=Math.pow(d.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(u),h);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),lc.initNonuniformCatmullRom(c.x,d.x,f.x,u.x,p,_,g),cc.initNonuniformCatmullRom(c.y,d.y,f.y,u.y,p,_,g),hc.initNonuniformCatmullRom(c.z,d.z,f.z,u.z,p,_,g)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(c.x,d.x,f.x,u.x,this.tension),cc.initCatmullRom(c.y,d.y,f.y,u.y,this.tension),hc.initCatmullRom(c.z,d.z,f.z,u.z,this.tension));return n.set(lc.calc(l),cc.calc(l),hc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Up(i,t){let e=1-i;return e*e*t}function Fp(i,t){return 2*(1-i)*i*t}function Op(i,t){return i*i*t}function Sr(i,t,e,n){return Up(i,t)+Fp(i,e)+Op(i,n)}function Bp(i,t){let e=1-i;return e*e*e*t}function zp(i,t){let e=1-i;return 3*e*e*i*t}function kp(i,t){return 3*(1-i)*i*i*t}function Hp(i,t){return i*i*i*t}function br(i,t,e,n,s){return Bp(i,t)+zp(i,e)+kp(i,n)+Hp(i,s)}var kr=class extends fn{constructor(t=new ot,e=new ot,n=new ot,s=new ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(t,s.x,r.x,a.x,o.x),br(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},co=class extends fn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(br(t,s.x,r.x,a.x,o.x),br(t,s.y,r.y,a.y,o.y),br(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Hr=class extends fn{constructor(t=new ot,e=new ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ot){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ho=class extends fn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vr=class extends fn{constructor(t=new ot,e=new ot,n=new ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ot){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Sr(t,s.x,r.x,a.x),Sr(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Gr=class extends fn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Sr(t,s.x,r.x,a.x),Sr(t,s.y,r.y,a.y),Sr(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Wr=class extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ot){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(yu(o,l.x,c.x,u.x,d.x),yu(o,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new ot().fromArray(s))}return this}},uo=Object.freeze({__proto__:null,ArcCurve:lo,CatmullRomCurve3:Ui,CubicBezierCurve:kr,CubicBezierCurve3:co,EllipseCurve:Zs,LineCurve:Hr,LineCurve3:ho,QuadraticBezierCurve:Vr,QuadraticBezierCurve3:Gr,SplineCurve:Wr}),fo=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new uo[s.type]().fromJSON(s))}return this}},Xr=class extends fo{constructor(t){super(),this.type="Path",this.currentPoint=new ot,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Hr(this.currentPoint.clone(),new ot(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Vr(this.currentPoint.clone(),new ot(t,e),new ot(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new kr(this.currentPoint.clone(),new ot(t,e),new ot(n,s),new ot(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Wr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Zs(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},en=class extends Xr{constructor(t){super(t),this.uuid=Jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Xr().fromJSON(s))}return this}};function Vp(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=gd(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Yp(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,d=l;for(let f=e;f<s;f+=e){let h=i[f],p=i[f+1];h<o&&(o=h),p<l&&(l=p),h>u&&(u=h),p>d&&(d=p)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return qr(r,a,e,o,l,c,0),a}function gd(i,t,e,n,s){let r;if(s===sm(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=vu(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=vu(a/n|0,i[a],i[a+1],r);return r&&Js(r,r.next)&&(Zr(r),r=r.next),r}function es(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Js(e,e.next)||Re(e.prev,e,e.next)===0)){if(Zr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function qr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&jp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Wp(i,n,s,r):Gp(i)){t.push(l.i,i.i,c.i),Zr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Xp(es(i),t),qr(i,t,e,n,s,r,2)):a===2&&qp(i,t,e,n,s,r):qr(es(i),t,e,n,s,r,1);break}}}function Gp(i){let t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),f=Math.max(s,r,a),h=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=f&&p.y>=d&&p.y<=h&&yr(s,o,r,l,a,c,p.x,p.y)&&Re(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Wp(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Re(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,f=a.y,h=Math.min(o,l,c),p=Math.min(u,d,f),_=Math.max(o,l,c),g=Math.max(u,d,f),m=_c(h,p,t,e,n),M=_c(_,g,t,e,n),b=i.prevZ,y=i.nextZ;for(;b&&b.z>=m&&y&&y.z<=M;){if(b.x>=h&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&yr(o,u,l,d,c,f,b.x,b.y)&&Re(b.prev,b,b.next)>=0||(b=b.prevZ,y.x>=h&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&yr(o,u,l,d,c,f,y.x,y.y)&&Re(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;b&&b.z>=m;){if(b.x>=h&&b.x<=_&&b.y>=p&&b.y<=g&&b!==s&&b!==a&&yr(o,u,l,d,c,f,b.x,b.y)&&Re(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;y&&y.z<=M;){if(y.x>=h&&y.x<=_&&y.y>=p&&y.y<=g&&y!==s&&y!==a&&yr(o,u,l,d,c,f,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Xp(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Js(n,s)&&xd(n,e,e.next,s)&&Yr(n,s)&&Yr(s,n)&&(t.push(n.i,e.i,s.i),Zr(e),Zr(e.next),e=i=s),e=e.next}while(e!==i);return es(e)}function qp(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&em(a,o)){let l=yd(a,o);a=es(a,a.next),l=es(l,l.next),qr(a,t,e,n,s,r,0),qr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Yp(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=gd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(tm(c))}s.sort(Zp);for(let r=0;r<s.length;r++)e=Jp(s[r],e);return e}function Zp(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Jp(i,t){let e=$p(i,t);if(!e)return t;let n=yd(e,i);return es(n,n.next),es(e,e.next)}function $p(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Js(i,e))return e;do{if(Js(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&_d(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Yr(e,i)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&Kp(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function Kp(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function jp(i,t,e,n){let s=i;do s.z===0&&(s.z=_c(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qp(s)}function Qp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function _c(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function tm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function _d(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function yr(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&_d(i,t,e,n,s,r,a,o)}function em(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!nm(i,t)&&(Yr(i,t)&&Yr(t,i)&&im(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||Js(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Js(i,t){return i.x===t.x&&i.y===t.y}function xd(i,t,e,n){let s=Va(Re(i,t,e)),r=Va(Re(i,t,n)),a=Va(Re(e,n,i)),o=Va(Re(e,n,t));return!!(s!==r&&a!==o||s===0&&Ha(i,e,t)||r===0&&Ha(i,n,t)||a===0&&Ha(e,i,n)||o===0&&Ha(e,t,n))}function Ha(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Va(i){return i>0?1:i<0?-1:0}function nm(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&xd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Yr(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function im(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function yd(i,t){let e=xc(i.i,i.x,i.y),n=xc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vu(i,t,e,n){let s=xc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Zr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function sm(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var yc=class{static triangulate(t,e,n=2){return Vp(t,e,n)}},Zn=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Mu(t),Su(n,t);let a=t.length;e.forEach(Mu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Su(n,e[l]);let o=yc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Mu(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Su(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var pn=class i extends ve{constructor(t=new en([new ot(.5,.5),new ot(-.5,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,h=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:h-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:rm,b,y=!1,w,T,A,x;if(m){b=m.getSpacedPoints(u),y=!0,f=!1;let tt=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(u,tt),T=new I,A=new I,x=new I}f||(g=0,h=0,p=0,_=0);let S=o.extractPoints(c),R=S.shape,P=S.holes;if(!Zn.isClockWise(R)){R=R.reverse();for(let tt=0,st=P.length;tt<st;tt++){let rt=P[tt];Zn.isClockWise(rt)&&(P[tt]=rt.reverse())}}function z(tt){let rt=10000000000000001e-36,at=tt[0];for(let dt=1;dt<=tt.length;dt++){let Vt=dt%tt.length,zt=tt[Vt],qt=zt.x-at.x,Jt=zt.y-at.y,D=qt*qt+Jt*Jt,de=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(at.x),Math.abs(at.y)),ie=rt*de*de;if(D<=ie){tt.splice(Vt,1),dt--;continue}at=zt}}z(R),P.forEach(z);let L=P.length,B=R;for(let tt=0;tt<L;tt++){let st=P[tt];R=R.concat(st)}function N(tt,st,rt){return st||Wt("ExtrudeGeometry: vec does not exist"),tt.clone().addScaledVector(st,rt)}let H=R.length;function K(tt,st,rt){let at,dt,Vt,zt=tt.x-st.x,qt=tt.y-st.y,Jt=rt.x-tt.x,D=rt.y-tt.y,de=zt*zt+qt*qt,ie=zt*D-qt*Jt;if(Math.abs(ie)>Number.EPSILON){let C=Math.sqrt(de),v=Math.sqrt(Jt*Jt+D*D),k=st.x-qt/C,X=st.y+zt/C,$=rt.x-D/v,ct=rt.y+Jt/v,ft=(($-k)*D-(ct-X)*Jt)/(zt*D-qt*Jt);at=k+zt*ft-tt.x,dt=X+qt*ft-tt.y;let Q=at*at+dt*dt;if(Q<=2)return new ot(at,dt);Vt=Math.sqrt(Q/2)}else{let C=!1;zt>Number.EPSILON?Jt>Number.EPSILON&&(C=!0):zt<-Number.EPSILON?Jt<-Number.EPSILON&&(C=!0):Math.sign(qt)===Math.sign(D)&&(C=!0),C?(at=-qt,dt=zt,Vt=Math.sqrt(de)):(at=zt,dt=qt,Vt=Math.sqrt(de/2))}return new ot(at/Vt,dt/Vt)}let V=[];for(let tt=0,st=B.length,rt=st-1,at=tt+1;tt<st;tt++,rt++,at++)rt===st&&(rt=0),at===st&&(at=0),V[tt]=K(B[tt],B[rt],B[at]);let Z=[],J,lt=V.concat();for(let tt=0,st=L;tt<st;tt++){let rt=P[tt];J=[];for(let at=0,dt=rt.length,Vt=dt-1,zt=at+1;at<dt;at++,Vt++,zt++)Vt===dt&&(Vt=0),zt===dt&&(zt=0),J[at]=K(rt[at],rt[Vt],rt[zt]);Z.push(J),lt=lt.concat(J)}let ht;if(g===0)ht=Zn.triangulateShape(B,P);else{let tt=[],st=[];for(let rt=0;rt<g;rt++){let at=rt/g,dt=h*Math.cos(at*Math.PI/2),Vt=p*Math.sin(at*Math.PI/2)+_;for(let zt=0,qt=B.length;zt<qt;zt++){let Jt=N(B[zt],V[zt],Vt);ut(Jt.x,Jt.y,-dt),at===0&&tt.push(Jt)}for(let zt=0,qt=L;zt<qt;zt++){let Jt=P[zt];J=Z[zt];let D=[];for(let de=0,ie=Jt.length;de<ie;de++){let C=N(Jt[de],J[de],Vt);ut(C.x,C.y,-dt),at===0&&D.push(C)}at===0&&st.push(D)}}ht=Zn.triangulateShape(tt,st)}let At=ht.length,pt=p+_;for(let tt=0;tt<H;tt++){let st=f?N(R[tt],lt[tt],pt):R[tt];y?(A.copy(w.normals[0]).multiplyScalar(st.x),T.copy(w.binormals[0]).multiplyScalar(st.y),x.copy(b[0]).add(A).add(T),ut(x.x,x.y,x.z)):ut(st.x,st.y,0)}for(let tt=1;tt<=u;tt++)for(let st=0;st<H;st++){let rt=f?N(R[st],lt[st],pt):R[st];y?(A.copy(w.normals[tt]).multiplyScalar(rt.x),T.copy(w.binormals[tt]).multiplyScalar(rt.y),x.copy(b[tt]).add(A).add(T),ut(x.x,x.y,x.z)):ut(rt.x,rt.y,d/u*tt)}for(let tt=g-1;tt>=0;tt--){let st=tt/g,rt=h*Math.cos(st*Math.PI/2),at=p*Math.sin(st*Math.PI/2)+_;for(let dt=0,Vt=B.length;dt<Vt;dt++){let zt=N(B[dt],V[dt],at);ut(zt.x,zt.y,d+rt)}for(let dt=0,Vt=P.length;dt<Vt;dt++){let zt=P[dt];J=Z[dt];for(let qt=0,Jt=zt.length;qt<Jt;qt++){let D=N(zt[qt],J[qt],at);y?ut(D.x,D.y+b[u-1].y,b[u-1].x+rt):ut(D.x,D.y,d+rt)}}}kt(),q();function kt(){let tt=s.length/3;if(f){let st=0,rt=H*st;for(let at=0;at<At;at++){let dt=ht[at];Nt(dt[2]+rt,dt[1]+rt,dt[0]+rt)}st=u+g*2,rt=H*st;for(let at=0;at<At;at++){let dt=ht[at];Nt(dt[0]+rt,dt[1]+rt,dt[2]+rt)}}else{for(let st=0;st<At;st++){let rt=ht[st];Nt(rt[2],rt[1],rt[0])}for(let st=0;st<At;st++){let rt=ht[st];Nt(rt[0]+H*u,rt[1]+H*u,rt[2]+H*u)}}n.addGroup(tt,s.length/3-tt,0)}function q(){let tt=s.length/3,st=0;j(B,st),st+=B.length;for(let rt=0,at=P.length;rt<at;rt++){let dt=P[rt];j(dt,st),st+=dt.length}n.addGroup(tt,s.length/3-tt,1)}function j(tt,st){let rt=tt.length;for(;--rt>=0;){let at=rt,dt=rt-1;dt<0&&(dt=tt.length-1);for(let Vt=0,zt=u+g*2;Vt<zt;Vt++){let qt=H*Vt,Jt=H*(Vt+1),D=st+at+qt,de=st+dt+qt,ie=st+dt+Jt,C=st+at+Jt;wt(D,de,ie,C)}}}function ut(tt,st,rt){l.push(tt),l.push(st),l.push(rt)}function Nt(tt,st,rt){Ht(tt),Ht(st),Ht(rt);let at=s.length/3,dt=M.generateTopUV(n,s,at-3,at-2,at-1);ce(dt[0]),ce(dt[1]),ce(dt[2])}function wt(tt,st,rt,at){Ht(tt),Ht(st),Ht(at),Ht(st),Ht(rt),Ht(at);let dt=s.length/3,Vt=M.generateSideWallUV(n,s,dt-6,dt-3,dt-2,dt-1);ce(Vt[0]),ce(Vt[1]),ce(Vt[3]),ce(Vt[1]),ce(Vt[2]),ce(Vt[3])}function Ht(tt){s.push(l[tt*3+0]),s.push(l[tt*3+1]),s.push(l[tt*3+2])}function ce(tt){r.push(tt.x),r.push(tt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return am(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new uo[s.type]().fromJSON(s)),new i(n,t.options)}},rm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new ot(r,a),new ot(o,l),new ot(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],f=t[s*3],h=t[s*3+1],p=t[s*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ot(a,1-l),new ot(c,1-d),new ot(f,1-p),new ot(_,1-m)]:[new ot(o,1-l),new ot(u,1-d),new ot(h,1-p),new ot(g,1-m)]}};function am(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ns=class i extends oo{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},Nn=class i extends ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=e/l,h=[],p=[],_=[],g=[];for(let m=0;m<u;m++){let M=m*f-a;for(let b=0;b<c;b++){let y=b*d-r;p.push(y,-M,0),_.push(0,0,1),g.push(b/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let b=M+c*m,y=M+c*(m+1),w=M+1+c*(m+1),T=M+1+c*m;h.push(b,y,T),h.push(y,w,T)}this.setIndex(h),this.setAttribute("position",new jt(p,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Jr=class i extends ve{constructor(t=new en([new ot(0,.5),new ot(-.5,-.5),new ot(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(r,3)),this.setAttribute("uv",new jt(a,2));function c(u){let d=s.length/3,f=u.extractPoints(e),h=f.shape,p=f.holes;Zn.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,m=p.length;g<m;g++){let M=p[g];Zn.isClockWise(M)===!0&&(p[g]=M.reverse())}let _=Zn.triangulateShape(h,p);for(let g=0,m=p.length;g<m;g++){let M=p[g];h=h.concat(M)}for(let g=0,m=h.length;g<m;g++){let M=h[g];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let g=0,m=_.length;g<m;g++){let M=_[g],b=M[0]+d,y=M[1]+d,w=M[2]+d;n.push(b,y,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return om(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function om(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var nn=class i extends ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new I,f=new I,h=[],p=[],_=[],g=[];for(let m=0;m<=n;m++){let M=[],b=m/n,y=a+b*o,w=t*Math.cos(y),T=Math.sqrt(t*t-w*w),A=0;m===0&&a===0?A=.5/e:m===n&&l===Math.PI&&(A=-.5/e);for(let x=0;x<=e;x++){let S=x/e,R=s+S*r;d.x=-T*Math.cos(R),d.y=w,d.z=T*Math.sin(R),p.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(S+A,1-b),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){let b=u[m][M+1],y=u[m][M],w=u[m+1][M],T=u[m+1][M+1];(m!==0||a>0)&&h.push(b,y,T),(m!==n-1||l<Math.PI)&&h.push(y,w,T)}this.setIndex(h),this.setAttribute("position",new jt(p,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var $r=class i extends ve{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],f=new I,h=new I,p=new I;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let m=0;m<=s;m++){let M=m/s*r;h.x=(t+e*Math.cos(g))*Math.cos(M),h.y=(t+e*Math.cos(g))*Math.sin(M),h.z=e*Math.sin(g),c.push(h.x,h.y,h.z),f.x=t*Math.cos(M),f.y=t*Math.sin(M),p.subVectors(h,f).normalize(),u.push(p.x,p.y,p.z),d.push(m/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let m=(s+1)*_+g-1,M=(s+1)*(_-1)+g-1,b=(s+1)*(_-1)+g,y=(s+1)*_+g;l.push(m,M,y),l.push(M,b,y)}this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var is=class i extends ve{constructor(t=new Gr(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new ot,u=new I,d=[],f=[],h=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(h,2));function _(){for(let b=0;b<e;b++)g(b);g(r===!1?e:0),M(),m()}function g(b){u=t.getPointAt(b/e,u);let y=a.normals[b],w=a.binormals[b];for(let T=0;T<=s;T++){let A=T/s*Math.PI*2,x=Math.sin(A),S=-Math.cos(A);l.x=S*y.x+x*w.x,l.y=S*y.y+x*w.y,l.z=S*y.z+x*w.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let b=1;b<=e;b++)for(let y=1;y<=s;y++){let w=(s+1)*(b-1)+(y-1),T=(s+1)*b+(y-1),A=(s+1)*b+y,x=(s+1)*(b-1)+y;p.push(w,T,x),p.push(T,A,x)}}function M(){for(let b=0;b<=e;b++)for(let y=0;y<=s;y++)c.x=b/e,c.y=y/s,h.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new uo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function ls(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(bu(s))s.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(bu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Je(i){let t={};for(let e=0;e<i.length;e++){let n=ls(i[e]);for(let s in n)t[s]=n[s]}return t}function bu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function lm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var vd={clone:ls,merge:Je},cm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mn=class extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cm,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=lm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new we().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new le().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},po=class extends mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},sn=class extends _i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var mo=class extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ed,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},go=class extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ds(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function uc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Fi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_o=class extends Fi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pc,endingEnd:pc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case mc:r=t,o=2*e-n;break;case gc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mc:a=t,l=2*n-e;break;case gc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(n-e)/(s-e),_=p*p,g=_*p,m=-f*g+2*f*_-f*p,M=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*p+1,b=(-1-h)*g+(1.5+h)*_+.5*p,y=h*g-h*_;for(let w=0;w!==o;++w)r[w]=m*a[u+w]+M*a[c+w]+b*a[l+w]+y*a[d+w];return r}},xo=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},yo=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},vo=class extends Fi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let p=(n-e)/(s-e),_=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*_+a[l+g]*p;return r}let f=o*2,h=t-1;for(let p=0;p!==o;++p){let _=a[c+p],g=a[l+p],m=h*f+p*2,M=d[m],b=d[m+1],y=t*f+p*2,w=u[y],T=u[y+1],A=dm(n,e,M,w,s);r[p]=Md(A,_,b,T,g)}return r}};function Md(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function um(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function dm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Md(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=um(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var gn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ds(e,this.TimeBufferType),this.values=Ds(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ds(t.times,Array),values:Ds(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),uc(t.settings)&&(n.settings={inTangents:Ds(t.settings.inTangents,Array),outTangents:Ds(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _o(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Er:e=this.InterpolantFactoryMethodDiscrete;break;case no:e=this.InterpolantFactoryMethodLinear;break;case Xa:e=this.InterpolantFactoryMethodSmooth;break;case fc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Er;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return Xa;case this.InterpolantFactoryMethodBezier:return fc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;uc(this.settings)&&(Eu(this.settings.inTangents,t),Eu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Wt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Wt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Wt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Wt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Qf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Wt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xa,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,f=d-n,h=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[f+p]||_!==e[h+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let h=0;h!==n;++h)e[f+h]=e[d+h]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,uc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Eu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}gn.prototype.ValueTypeName="";gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=no;var Oi=class extends gn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Er;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};Mo.prototype.ValueTypeName="color";var So=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};So.prototype.ValueTypeName="number";var bo=class extends Fi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)vn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Kr=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new bo(this.times,this.values,this.getValueSize(),t)}};Kr.prototype.ValueTypeName="quaternion";Kr.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends gn{constructor(t,e,n){super(t,e,n)}};Bi.prototype.ValueTypeName="string";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=Er;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Eo=class extends gn{constructor(t,e,n,s){super(t,e,n,s)}};Eo.prototype.ValueTypeName="vector";var wo=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let h=c[d],p=c[d+1];if(h.global&&(h.lastIndex=0),h.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Sd=new wo,To=class{constructor(t){this.manager=t!==void 0?t:Sd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};To.DEFAULT_MATERIAL_NAME="__DEFAULT";var jr=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xi=class extends jr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},dc=new le,wu=new I,Tu=new I,Ao=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=cn,this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ys,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(wu),Tu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){dc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(dc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Bs||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(dc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ga=new I,Wa=new vn,qn=new I,Qr=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Ln,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ga,Wa,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Wa,qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ga,Wa,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Wa,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Li=new I,Au=new ot,Ru=new ot,Ne=class extends Qr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ks*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Li.x,Li.y).multiplyScalar(-t/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-t/Li.z)}getViewSize(t,e){return this.getViewBounds(t,Au,Ru),e.subVectors(Ru,Au)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zi=class extends Qr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},vc=class extends Ao{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jn=class extends jr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new vc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ns=-90,Us=1,Ro=class extends Ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ne(Ns,Us,t,e);s.layers=this.layers,this.add(s);let r=new Ne(Ns,Us,t,e);r.layers=this.layers,this.add(r);let a=new Ne(Ns,Us,t,e);a.layers=this.layers,this.add(a);let o=new Ne(Ns,Us,t,e);o.layers=this.layers,this.add(o);let l=new Ne(Ns,Us,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Ns,Us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ln)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,f,h),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Co=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Jc="\\[\\]\\.:\\/",fm=new RegExp("["+Jc+"]","g"),$c="[^"+Jc+"]",pm="[^"+Jc.replace("\\.","")+"]",mm=/((?:WC+[\/:])*)/.source.replace("WC",$c),gm=/(WCOD+)?/.source.replace("WCOD",pm),_m=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),xm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),ym=new RegExp("^"+mm+gm+_m+xm+"$"),vm=["material","materials","bones","map"],Mc=class{constructor(t,e,n){let s=n||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ee=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(fm,"")}static parseTrackName(t){let e=ym.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Wt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Wt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Wt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Wt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Wt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Wt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Wt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Wt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=Mc;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var By=new Float32Array(1);var Cu=new le,ss=class{constructor(t,e,n=0,s=1/0){this.ray=new Ur(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Vs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Wt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Cu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cu),this}intersectObject(t,e=!0,n=[]){return Sc(t,this,n,e),n.sort(Iu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Sc(t[s],this,n,e);return n.sort(Iu),n}};function Iu(i,t){return i.distance-t.distance}function Sc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Sc(r[a],t,e,!0)}}var nh=class nh{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};nh.prototype.isMatrix2=!0;var bc=nh;function Kc(i,t,e,n){let s=Mm(n);switch(e){case Vc:return i*t;case Oo:return i*t/s.components*s.byteLength;case Bo:return i*t/s.components*s.byteLength;case Wi:return i*t*2/s.components*s.byteLength;case zo:return i*t*2/s.components*s.byteLength;case Gc:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case ko:return i*t*4/s.components*s.byteLength;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:case Wo:return Math.max(i,16)*Math.max(t,8)/4;case Ho:case Go:return Math.max(i,8)*Math.max(t,8)/2;case Xo:case qo:case Zo:case Jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:case aa:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ul:case dl:case fl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*8;case oa:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Mm(i){switch(i){case cn:case Bc:return{byteLength:1,components:1};case js:case zc:case On:return{byteLength:2,components:1};case Uo:case Fo:return{byteLength:2,components:4};case Fn:case No:case Sn:return{byteLength:4,components:1};case kc:case Hc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Wd(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tm(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<d.length;h++){let p=d[f],_=d[h];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,p=d.length;h<p;h++){let _=d[h];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rm=`#ifdef USE_ALPHAHASH
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
#endif`,Cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dm=`#ifdef USE_AOMAP
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
#endif`,Nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um=`#ifdef USE_BATCHING
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
#endif`,Fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,km=`#ifdef USE_IRIDESCENCE
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
#endif`,Hm=`#ifdef USE_BUMPMAP
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
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$m=`#define PI 3.141592653589793
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
} // validated`,Km=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jm=`vec3 transformedNormal = objectNormal;
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
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,t0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,e0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,n0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,i0="gl_FragColor = linearToOutputTexel( gl_FragColor );",s0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,r0=`#ifdef USE_ENVMAP
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
#endif`,a0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,o0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,u0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,d0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,p0=`#ifdef USE_GRADIENTMAP
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
}`,m0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,y0=`#ifdef USE_ENVMAP
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
#endif`,v0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,E0=`PhysicalMaterial material;
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
#endif`,w0=`uniform sampler2D dfgLUT;
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
}`,T0=`
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
#endif`,A0=`#if defined( RE_IndirectDiffuse )
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
#endif`,R0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,I0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,D0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,N0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,U0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,F0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,O0=`#if defined( USE_POINTS_UV )
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
#endif`,B0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,H0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,V0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G0=`#ifdef USE_MORPHTARGETS
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
#endif`,W0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$0=`#ifdef USE_NORMALMAP
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
#endif`,K0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ng=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ag=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,dg=`float getShadowMask() {
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
}`,fg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pg=`#ifdef USE_SKINNING
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
#endif`,mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,_g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Ag=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rg=`uniform sampler2D t2D;
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
}`,Cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`#include <common>
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
}`,Ng=`#if DEPTH_PACKING == 3200
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
}`,Ug=`#define DISTANCE
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
}`,Fg=`#define DISTANCE
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
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`uniform float scale;
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
}`,kg=`uniform vec3 diffuse;
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
}`,Hg=`#include <common>
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Gg=`#define LAMBERT
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
}`,Wg=`#define LAMBERT
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
}`,Xg=`#define MATCAP
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
}`,qg=`#define MATCAP
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
}`,Yg=`#define NORMAL
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
}`,Zg=`#define NORMAL
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
}`,Jg=`#define PHONG
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
}`,$g=`#define PHONG
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
}`,Kg=`#define STANDARD
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
}`,jg=`#define STANDARD
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
}`,Qg=`#define TOON
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
}`,t_=`#define TOON
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
}`,e_=`uniform float size;
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#include <common>
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
}`,s_=`uniform vec3 color;
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
}`,r_=`uniform float rotation;
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
}`,a_=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Am,alphahash_pars_fragment:Rm,alphamap_fragment:Cm,alphamap_pars_fragment:Im,alphatest_fragment:Pm,alphatest_pars_fragment:Lm,aomap_fragment:Dm,aomap_pars_fragment:Nm,batching_pars_vertex:Um,batching_vertex:Fm,begin_vertex:Om,beginnormal_vertex:Bm,bsdfs:zm,iridescence_fragment:km,bumpmap_pars_fragment:Hm,clipping_planes_fragment:Vm,clipping_planes_pars_fragment:Gm,clipping_planes_pars_vertex:Wm,clipping_planes_vertex:Xm,color_fragment:qm,color_pars_fragment:Ym,color_pars_vertex:Zm,color_vertex:Jm,common:$m,cube_uv_reflection_fragment:Km,defaultnormal_vertex:jm,displacementmap_pars_vertex:Qm,displacementmap_vertex:t0,emissivemap_fragment:e0,emissivemap_pars_fragment:n0,colorspace_fragment:i0,colorspace_pars_fragment:s0,envmap_fragment:r0,envmap_common_pars_fragment:a0,envmap_pars_fragment:o0,envmap_pars_vertex:l0,envmap_physical_pars_fragment:y0,envmap_vertex:c0,fog_vertex:h0,fog_pars_vertex:u0,fog_fragment:d0,fog_pars_fragment:f0,gradientmap_pars_fragment:p0,lightmap_pars_fragment:m0,lights_lambert_fragment:g0,lights_lambert_pars_fragment:_0,lights_pars_begin:x0,lights_toon_fragment:v0,lights_toon_pars_fragment:M0,lights_phong_fragment:S0,lights_phong_pars_fragment:b0,lights_physical_fragment:E0,lights_physical_pars_fragment:w0,lights_fragment_begin:T0,lights_fragment_maps:A0,lights_fragment_end:R0,lightprobes_pars_fragment:C0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:P0,logdepthbuf_pars_vertex:L0,logdepthbuf_vertex:D0,map_fragment:N0,map_pars_fragment:U0,map_particle_fragment:F0,map_particle_pars_fragment:O0,metalnessmap_fragment:B0,metalnessmap_pars_fragment:z0,morphinstance_vertex:k0,morphcolor_vertex:H0,morphnormal_vertex:V0,morphtarget_pars_vertex:G0,morphtarget_vertex:W0,normal_fragment_begin:X0,normal_fragment_maps:q0,normal_pars_fragment:Y0,normal_pars_vertex:Z0,normal_vertex:J0,normalmap_pars_fragment:$0,clearcoat_normal_fragment_begin:K0,clearcoat_normal_fragment_maps:j0,clearcoat_pars_fragment:Q0,iridescence_pars_fragment:tg,opaque_fragment:eg,packing:ng,premultiplied_alpha_fragment:ig,project_vertex:sg,dithering_fragment:rg,dithering_pars_fragment:ag,roughnessmap_fragment:og,roughnessmap_pars_fragment:lg,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:hg,shadowmap_vertex:ug,shadowmask_pars_fragment:dg,skinbase_vertex:fg,skinning_pars_vertex:pg,skinning_vertex:mg,skinnormal_vertex:gg,specularmap_fragment:_g,specularmap_pars_fragment:xg,tonemapping_fragment:yg,tonemapping_pars_fragment:vg,transmission_fragment:Mg,transmission_pars_fragment:Sg,uv_pars_fragment:bg,uv_pars_vertex:Eg,uv_vertex:wg,worldpos_vertex:Tg,background_vert:Ag,background_frag:Rg,backgroundCube_vert:Cg,backgroundCube_frag:Ig,cube_vert:Pg,cube_frag:Lg,depth_vert:Dg,depth_frag:Ng,distance_vert:Ug,distance_frag:Fg,equirect_vert:Og,equirect_frag:Bg,linedashed_vert:zg,linedashed_frag:kg,meshbasic_vert:Hg,meshbasic_frag:Vg,meshlambert_vert:Gg,meshlambert_frag:Wg,meshmatcap_vert:Xg,meshmatcap_frag:qg,meshnormal_vert:Yg,meshnormal_frag:Zg,meshphong_vert:Jg,meshphong_frag:$g,meshphysical_vert:Kg,meshphysical_frag:jg,meshtoon_vert:Qg,meshtoon_frag:t_,points_vert:e_,points_frag:n_,shadow_vert:i_,shadow_frag:s_,sprite_vert:r_,sprite_frag:a_},St={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ni={basic:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:Je([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:Je([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Bt(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:Je([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:Je([St.points,St.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:Je([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:Je([St.common,St.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:Je([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:Je([St.sprite,St.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distance:{uniforms:Je([St.common,St.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distance_vert,fragmentShader:ee.distance_frag},shadow:{uniforms:Je([St.lights,St.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};ni.physical={uniforms:Je([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};var vl={r:0,b:0,g:0},o_=new le,Xd=new Zt;Xd.set(-1,0,0,0,1,0,0,0,1);function l_(i,t,e,n,s,r){let a=new Bt(0),o=s===!0?0:1,l,c,u=null,d=0,f=null;function h(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){let y=M.backgroundBlurriness>0;b=t.get(b,y)}return b}function p(M){let b=!1,y=h(M);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(M,b){let y=h(b);y&&(y.isCubeTexture||y.mapping===ta)?(c===void 0&&(c=new he(new Ue(1,1,1),new mn({name:"BackgroundCubeMaterial",uniforms:ls(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(o_.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Xd),c.material.toneMapped=re.getTransfer(y.colorSpace)!==me,(u!==y||d!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new he(new Nn(2,2),new mn({name:"BackgroundMaterial",uniforms:ls(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=re.getTransfer(y.colorSpace)!==me,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,b){M.getRGB(vl,Zc(i)),e.buffers.color.setClear(vl.r,vl.g,vl.b,b,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,g(a,o)},render:p,addToRenderList:_,dispose:m}}function c_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(P,O,z,L,B){let N=!1,H=d(P,L,z,O);r!==H&&(r=H,c(r.object)),N=h(P,L,z,B),N&&p(P,L,z,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,y(P,O,z,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function d(P,O,z,L){let B=L.wireframe===!0,N=n[O.id];N===void 0&&(N={},n[O.id]=N);let H=P.isInstancedMesh===!0?P.id:0,K=N[H];K===void 0&&(K={},N[H]=K);let V=K[z.id];V===void 0&&(V={},K[z.id]=V);let Z=V[B];return Z===void 0&&(Z=f(l()),V[B]=Z),Z}function f(P){let O=[],z=[],L=[];for(let B=0;B<e;B++)O[B]=0,z[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:L,object:P,attributes:{},index:null}}function h(P,O,z,L){let B=r.attributes,N=O.attributes,H=0,K=z.getAttributes();for(let V in K)if(K[V].location>=0){let J=B[V],lt=N[V];if(lt===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(lt=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(lt=P.instanceColor)),J===void 0||J.attribute!==lt||lt&&J.data!==lt.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function p(P,O,z,L){let B={},N=O.attributes,H=0,K=z.getAttributes();for(let V in K)if(K[V].location>=0){let J=N[V];J===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));let lt={};lt.attribute=J,J&&J.data&&(lt.data=J.data),B[V]=lt,H++}r.attributes=B,r.attributesNum=H,r.index=L}function _(){let P=r.newAttributes;for(let O=0,z=P.length;O<z;O++)P[O]=0}function g(P){m(P,0)}function m(P,O){let z=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;z[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),B[P]!==O&&(i.vertexAttribDivisor(P,O),B[P]=O)}function M(){let P=r.newAttributes,O=r.enabledAttributes;for(let z=0,L=O.length;z<L;z++)O[z]!==P[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function b(P,O,z,L,B,N,H){H===!0?i.vertexAttribIPointer(P,O,z,B,N):i.vertexAttribPointer(P,O,z,L,B,N)}function y(P,O,z,L){_();let B=L.attributes,N=z.getAttributes(),H=O.defaultAttributeValues;for(let K in N){let V=N[K];if(V.location>=0){let Z=B[K];if(Z===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let J=Z.normalized,lt=Z.itemSize,ht=t.get(Z);if(ht===void 0)continue;let At=ht.buffer,pt=ht.type,kt=ht.bytesPerElement,q=pt===i.INT||pt===i.UNSIGNED_INT||Z.gpuType===No;if(Z.isInterleavedBufferAttribute){let j=Z.data,ut=j.stride,Nt=Z.offset;if(j.isInstancedInterleavedBuffer){for(let wt=0;wt<V.locationSize;wt++)m(V.location+wt,j.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let wt=0;wt<V.locationSize;wt++)g(V.location+wt);i.bindBuffer(i.ARRAY_BUFFER,At);for(let wt=0;wt<V.locationSize;wt++)b(V.location+wt,lt/V.locationSize,pt,J,ut*kt,(Nt+lt/V.locationSize*wt)*kt,q)}else{if(Z.isInstancedBufferAttribute){for(let j=0;j<V.locationSize;j++)m(V.location+j,Z.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let j=0;j<V.locationSize;j++)g(V.location+j);i.bindBuffer(i.ARRAY_BUFFER,At);for(let j=0;j<V.locationSize;j++)b(V.location+j,lt/V.locationSize,pt,J,lt*kt,lt/V.locationSize*j*kt,q)}}else if(H!==void 0){let J=H[K];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(V.location,J);break;case 3:i.vertexAttrib3fv(V.location,J);break;case 4:i.vertexAttrib4fv(V.location,J);break;default:i.vertexAttrib1fv(V.location,J)}}}}M()}function w(){S();for(let P in n){let O=n[P];for(let z in O){let L=O[z];for(let B in L){let N=L[B];for(let H in N)u(N[H].object),delete N[H];delete L[B]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;let O=n[P.id];for(let z in O){let L=O[z];for(let B in L){let N=L[B];for(let H in N)u(N[H].object),delete N[H];delete L[B]}}delete n[P.id]}function A(P){for(let O in n){let z=n[O];for(let L in z){let B=z[L];if(B[P.id]===void 0)continue;let N=B[P.id];for(let H in N)u(N[H].object),delete N[H];delete B[P.id]}}}function x(P){for(let O in n){let z=n[O],L=P.isInstancedMesh===!0?P.id:0,B=z[L];if(B!==void 0){for(let N in B){let H=B[N];for(let K in H)u(H[K].object),delete H[K];delete B[N]}delete z[L],Object.keys(z).length===0&&delete n[O]}}}function S(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:R,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function h_(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];e.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function u_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===On&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==cn&&A!==Sn&&!x&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Xt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:y,maxSamples:w,samples:T}}function d_(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Qe,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||n!==0||s;return s=f,n=d.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,h){let p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?u(null):c();else{let M=r?0:n,b=M*4,y=m.clippingState||null;l.value=y,y=u(p,f,b,h);for(let w=0;w!==b;++w)y[w]=e[w];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,h,p){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=h+_*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let b=0,y=h;b!==_;++b,y+=4)a.copy(d[b]).applyMatrix4(M,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var er=4,f_=6,p_=20,m_=256,la=new zi,bd=new Bt,ih=null,sh=0,rh=0,ah=!1,g_=new I,cs=new I,Sl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=g_}=r;ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ih,sh,rh),this._renderer.xr.enabled=ah,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===os?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:On,format:bn,colorSpace:wr,depthBuffer:!1},s=Ed(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ed(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=__(r)),this._blurMaterial=y_(r,t,e),this._ggxMaterial=x_(r,t,e)}return s}_compileMaterial(t){let e=new he(new ve,t);this._renderer.compile(e,la)}_sceneToCubeUV(t,e,n,s,r){let l=new Ne(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(bd),d.toneMapping=Un,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new he(new Ue,new Ze({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(bd),m=!0);for(let b=0;b<6;b++){let y=b%3;y===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):y===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));let w=this._cubeSize;tr(s,y*w,b>2?w:0,w,w),d.setRenderTarget(s),m&&d.render(_,l),d.render(t,l)}d.toneMapping=h,d.autoClear=f,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Hi||t.mapping===os;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,la)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),f=c*1.25,h=d*f,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-er?n-p+er:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=h,l.mipInt.value=p-e,tr(r,g,m,3*_,2*_),s.setRenderTarget(r),s.render(o,la),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,tr(t,g,m,3*_,2*_),s.setRenderTarget(t),s.render(o,la)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-er?s-this._lodMax+er:0),f=4*(this._cubeSize-u);tr(e,d,f,3*u,2*u),a.setRenderTarget(e),a.render(l,la)}};function __(i){let t=[],e=[],n=i,s=i-er+1+f_;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,f=6,h=3,p=new Float32Array(h*f*d),_=new Float32Array(h*f*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,b=m>2?0:-1,y=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];p.set(y,h*f*m);for(let w=0;w<f;w++){let T=u[w*2]*2-1,A=u[w*2+1]*2-1;m===0?cs.set(1,A,T):m===1?cs.set(-T,1,-A):m===2?cs.set(-T,A,1):m===3?cs.set(-1,A,-T):m===4?cs.set(-T,-1,A):cs.set(T,A,-1),cs.toArray(_,(m*f+w)*h)}}let g=new ve;g.setAttribute("position",new ke(p,h)),g.setAttribute("outputDirection",new ke(_,h)),e.push(new he(g,null)),n>er&&n--}return{lodMeshes:e,sizeLods:t}}function Ed(i,t,e){let n=new ln(i,t,e);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function x_(i,t,e){return new mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function y_(i,t,e){return new mn({name:"SphericalGaussianBlur",defines:{SAMPLES:p_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function wd(){return new mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Td(){return new mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var bl=class extends ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Or(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ue(5,5,5),r=new mn({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Qn});r.uniforms.tEquirect.value=e;let a=new he(s,r),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=Ve),new Ro(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function v_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(f,h=!1){return f==null?null:h?a(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===Po||h===Lo)if(t.has(f)){let p=t.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new bl(p.height);return _.fromEquirectangularTexture(i,f),t.set(f,_),f.addEventListener("dispose",c),o(_.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let h=f.mapping,p=h===Po||h===Lo,_=h===Hi||h===os;if(p||_){let g=e.get(f),m=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return n===null&&(n=new Sl(i)),g=p?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),g.texture;if(g!==void 0)return g.texture;{let M=f.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Sl(i)),g=p?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,e.set(f,g),f.addEventListener("dispose",u),g.texture):null}}}return f}function o(f,h){return h===Po?f.mapping=Hi:h===Lo&&(f.mapping=os),f}function l(f){let h=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&h++;return h===p}function c(f){let h=f.target;h.removeEventListener("dispose",c);let p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function u(f){let h=f.target;h.removeEventListener("dispose",u);let p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function M_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ji("WebGLRenderer: "+n+" extension not supported."),s}}}function S_(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let p in f.attributes)t.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete s[f.id];let h=r.get(f);h&&(t.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)t.update(f[h],i.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(h!==null){let M=h.array;_=h.version;for(let b=0,y=M.length;b<y;b+=3){let w=M[b+0],T=M[b+1],A=M[b+2];f.push(w,T,T,A,A,w)}}else{let M=p.array;_=p.version;for(let b=0,y=M.length/3-1;b<y;b+=3){let w=b+0,T=b+1,A=b+2;f.push(w,T,T,A,A,w)}}let g=new(p.count>=65535?Lr:Pr)(f,1);g.version=_;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function u(d){let f=r.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function b_(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),e.update(f,n,1)}function c(d,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,d*a,h),e.update(f,n,h))}function u(d,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,h);let _=0;for(let g=0;g<h;g++)_+=f[g];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function E_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Wt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function w_(i,t,e){let n=new WeakMap,s=new we;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let S=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],b=0;h===!0&&(b=1),p===!0&&(b=2),_===!0&&(b=3);let y=o.attributes.position.count*b,w=1;y>t.maxTextureSize&&(w=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let T=new Float32Array(y*w*4*d),A=new Cr(T,y,w,d);A.type=Sn,A.needsUpdate=!0;let x=b*4;for(let R=0;R<d;R++){let P=g[R],O=m[R],z=M[R],L=y*w*4*R;for(let B=0;B<P.count;B++){let N=B*x;h===!0&&(s.fromBufferAttribute(P,B),T[L+N+0]=s.x,T[L+N+1]=s.y,T[L+N+2]=s.z,T[L+N+3]=0),p===!0&&(s.fromBufferAttribute(O,B),T[L+N+4]=s.x,T[L+N+5]=s.y,T[L+N+6]=s.z,T[L+N+7]=0),_===!0&&(s.fromBufferAttribute(z,B),T[L+N+8]=s.x,T[L+N+9]=s.y,T[L+N+10]=s.z,T[L+N+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:A,size:new ot(y,w)},n.set(o,f),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];let p=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function T_(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==u&&(t.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var A_={[Pc]:"LINEAR_TONE_MAPPING",[Lc]:"REINHARD_TONE_MAPPING",[Dc]:"CINEON_TONE_MAPPING",[ti]:"ACES_FILMIC_TONE_MAPPING",[Uc]:"AGX_TONE_MAPPING",[Fc]:"NEUTRAL_TONE_MAPPING",[Nc]:"CUSTOM_TONE_MAPPING"};function R_(i,t,e,n,s,r){let a=new ln(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new ve;c.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new jt([0,2,0,0,2,0],2));let u=new po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new he(c,u),f=new zi(-1,1,1,-1,0,1),h=null,p=null,_=!1,g,m=null,M=[],b=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),l!==null&&l.setSize(y,w);for(let T=0;T<M.length;T++){let A=M[T];A.setSize&&A.setSize(y,w)}},this.setEffects=function(y){M=y,b=M.length>0&&M[0].isRenderPass===!0;let w=a.width,T=a.height;M.length>0&&o===null&&(o=new ln(w,T,{type:On,depthBuffer:!1,stencilBuffer:!1}),l=new ln(w,T,{type:On,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let x=M[A];x.setSize&&x.setSize(w,T)}},this.begin=function(y,w){if(_||y.toneMapping===Un&&M.length===0)return!1;if(m=w,w!==null){let T=w.width,A=w.height;(a.width!==T||a.height!==A)&&this.setSize(T,A)}return b===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=Un,!0},this.hasRenderPass=function(){return b},this.end=function(y,w){y.toneMapping=g,_=!0;let T=a,A=o;for(let x=0;x<M.length;x++){let S=M[x];S.enabled!==!1&&(S.render(y,A,T,w),S.needsSwap!==!1&&(T=A,A=A===o?l:o))}if(h!==y.outputColorSpace||p!==y.toneMapping){h=y.outputColorSpace,p=y.toneMapping,u.defines={},re.getTransfer(h)===me&&(u.defines.SRGB_TRANSFER="");let x=A_[p];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(m),y.render(d,f),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var qd=new tn,ch=new Ni(1,1),Yd=new Cr,Zd=new ro,Jd=new Or,Ad=[],Rd=[],Cd=new Float32Array(16),Id=new Float32Array(9),Pd=new Float32Array(4);function ir(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ad[s];if(r===void 0&&(r=new Float32Array(s),Ad[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Be(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wl(i,t){let e=Rd[t];e===void 0&&(e=new Int32Array(t),Rd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function C_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function I_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Be(e,t)}}function P_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Be(e,t)}}function L_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Be(e,t)}}function D_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Pd.set(n),i.uniformMatrix2fv(this.addr,!1,Pd),Be(e,n)}}function N_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Id.set(n),i.uniformMatrix3fv(this.addr,!1,Id),Be(e,n)}}function U_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Be(e,t)}else{if(Oe(e,n))return;Cd.set(n),i.uniformMatrix4fv(this.addr,!1,Cd),Be(e,n)}}function F_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function O_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Be(e,t)}}function B_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Be(e,t)}}function z_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Be(e,t)}}function k_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function H_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Be(e,t)}}function V_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Be(e,t)}}function G_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Be(e,t)}}function W_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=e.isReversedDepthBuffer()?yl:xl,r=ch):r=qd,e.setTexture2D(t||r,s)}function X_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Zd,s)}function q_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Jd,s)}function Y_(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Yd,s)}function Z_(i){switch(i){case 5126:return C_;case 35664:return I_;case 35665:return P_;case 35666:return L_;case 35674:return D_;case 35675:return N_;case 35676:return U_;case 5124:case 35670:return F_;case 35667:case 35671:return O_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return k_;case 36294:return H_;case 36295:return V_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}function J_(i,t){i.uniform1fv(this.addr,t)}function $_(i,t){let e=ir(t,this.size,2);i.uniform2fv(this.addr,e)}function K_(i,t){let e=ir(t,this.size,3);i.uniform3fv(this.addr,e)}function j_(i,t){let e=ir(t,this.size,4);i.uniform4fv(this.addr,e)}function Q_(i,t){let e=ir(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tx(i,t){let e=ir(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ex(i,t){let e=ir(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function nx(i,t){i.uniform1iv(this.addr,t)}function ix(i,t){i.uniform2iv(this.addr,t)}function sx(i,t){i.uniform3iv(this.addr,t)}function rx(i,t){i.uniform4iv(this.addr,t)}function ax(i,t){i.uniform1uiv(this.addr,t)}function ox(i,t){i.uniform2uiv(this.addr,t)}function lx(i,t){i.uniform3uiv(this.addr,t)}function cx(i,t){i.uniform4uiv(this.addr,t)}function hx(i,t,e){let n=this.cache,s=t.length,r=wl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ch:a=qd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ux(i,t,e){let n=this.cache,s=t.length,r=wl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Zd,r[a])}function dx(i,t,e){let n=this.cache,s=t.length,r=wl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Jd,r[a])}function fx(i,t,e){let n=this.cache,s=t.length,r=wl(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Be(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Yd,r[a])}function px(i){switch(i){case 5126:return J_;case 35664:return $_;case 35665:return K_;case 35666:return j_;case 35674:return Q_;case 35675:return tx;case 35676:return ex;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ax;case 36294:return ox;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}var hh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Z_(e.type)}},uh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=px(e.type)}},dh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},oh=/(\w+)(\])?(\[|\.)?/g;function Ld(i,t){i.seq.push(t),i.map[t.id]=t}function mx(i,t,e){let n=i.name,s=n.length;for(oh.lastIndex=0;;){let r=oh.exec(n),a=oh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ld(e,c===void 0?new hh(o,i,t):new uh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new dh(o),Ld(e,d)),e=d}}}var nr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);mx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Dd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var gx=37297,_x=0;function xx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var Nd=new Zt;function yx(i){re._getMatrix(Nd,re.workingColorSpace,i);let t=`mat3( ${Nd.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Tr:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Ud(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+xx(i.getShaderSource(t),o)}else return r}function vx(i,t){let e=yx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Mx={[Pc]:"Linear",[Lc]:"Reinhard",[Dc]:"Cineon",[ti]:"ACESFilmic",[Uc]:"AgX",[Fc]:"Neutral",[Nc]:"Custom"};function Sx(i,t){let e=Mx[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ml=new I;function bx(){re.getLuminanceCoefficients(Ml);let i=Ml.x.toFixed(4),t=Ml.y.toFixed(4),e=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ex(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function wx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ha(i){return i!==""}function Fd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Od(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(i){return i.replace(Ax,Cx)}var Rx=new Map;function Cx(i,t){let e=ee[t];if(e===void 0){let n=Rx.get(t);if(n!==void 0)e=ee[n],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return fh(e)}var Ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bd(i){return i.replace(Ix,Px)}function Px(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Lx={[rs]:"SHADOWMAP_TYPE_PCF",[$s]:"SHADOWMAP_TYPE_VSM"};function Dx(i){return Lx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Nx={[Hi]:"ENVMAP_TYPE_CUBE",[os]:"ENVMAP_TYPE_CUBE",[ta]:"ENVMAP_TYPE_CUBE_UV"};function Ux(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Nx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Fx={[os]:"ENVMAP_MODE_REFRACTION"};function Ox(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Fx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Bx={[Ic]:"ENVMAP_BLENDING_MULTIPLY",[ju]:"ENVMAP_BLENDING_MIX",[Qu]:"ENVMAP_BLENDING_ADD"};function zx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Bx[i.combine]||"ENVMAP_BLENDING_NONE"}function kx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Hx(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Dx(e),c=Ux(e),u=Ox(e),d=zx(e),f=kx(e),h=Ex(e),p=wx(r),_=s.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ha).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ha).join(`
`),m.length>0&&(m+=`
`)):(g=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),m=[zd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?ee.tonemapping_pars_fragment:"",e.toneMapping!==Un?Sx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,vx("linearToOutputTexel",e.outputColorSpace),bx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ha).join(`
`)),a=fh(a),a=Fd(a,e),a=Od(a,e),o=fh(o),o=Fd(o,e),o=Od(o,e),a=Bd(a),o=Bd(o),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Xc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let b=M+g+a,y=M+m+o,w=Dd(s,s.VERTEX_SHADER,b),T=Dd(s,s.FRAGMENT_SHADER,y);s.attachShader(_,w),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(w)||"",L=s.getShaderInfoLog(T)||"",B=O.trim(),N=z.trim(),H=L.trim(),K=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,w,T);else{let Z=Ud(s,w,"vertex"),J=Ud(s,T,"fragment");Wt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+Z+`
`+J)}else B!==""?Xt("WebGLProgram: Program Info Log:",B):(N===""||H==="")&&(V=!1);V&&(P.diagnostics={runnable:K,programLog:B,vertexShader:{log:N,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(w),s.deleteShader(T),x=new nr(s,_),S=Tx(s,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,gx)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_x++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}var Vx=0,ph=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new mh(t),e.set(t,n)),n}},mh=class{constructor(t){this.id=Vx++,this.code=t,this.usedTimes=0}};function Gx(i){return i===Wi||i===aa||i===oa}function Wx(i,t,e,n,s,r){let a=new Vs,o=new ph,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,f=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function _(x,S,R,P,O,z){let L=P.fog,B=O.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=t.get(x.envMap||N,H),V=K&&K.mapping===ta?K.image.height:null,Z=h[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&Xt("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let J=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,lt=J!==void 0?J.length:0,ht=0;B.morphAttributes.position!==void 0&&(ht=1),B.morphAttributes.normal!==void 0&&(ht=2),B.morphAttributes.color!==void 0&&(ht=3);let At,pt,kt,q;if(Z){let Me=ni[Z];At=Me.vertexShader,pt=Me.fragmentShader}else{At=x.vertexShader,pt=x.fragmentShader;let Me=o.getVertexShaderStage(x),fe=o.getFragmentShaderStage(x);o.update(x,Me,fe),kt=Me.id,q=fe.id}let j=i.getRenderTarget(),ut=i.state.buffers.depth.getReversed(),Nt=O.isInstancedMesh===!0,wt=O.isBatchedMesh===!0,Ht=!!x.map,ce=!!x.matcap,tt=!!K,st=!!x.aoMap,rt=!!x.lightMap,at=!!x.bumpMap&&x.wireframe===!1,dt=!!x.normalMap,Vt=!!x.displacementMap,zt=!!x.emissiveMap,qt=!!x.metalnessMap,Jt=!!x.roughnessMap,D=x.anisotropy>0,de=x.clearcoat>0,ie=x.dispersion>0,C=x.retroreflectivity>0,v=x.iridescence>0,k=x.sheen>0,X=x.transmission>0,$=D&&!!x.anisotropyMap,ct=de&&!!x.clearcoatMap,ft=de&&!!x.clearcoatNormalMap,Q=de&&!!x.clearcoatRoughnessMap,nt=v&&!!x.iridescenceMap,_t=v&&!!x.iridescenceThicknessMap,Ut=k&&!!x.sheenColorMap,Mt=k&&!!x.sheenRoughnessMap,xt=!!x.specularMap,Ft=!!x.specularColorMap,Gt=!!x.specularIntensityMap,Kt=X&&!!x.transmissionMap,F=X&&!!x.thicknessMap,yt=!!x.gradientMap,et=!!x.alphaMap,vt=x.alphaTest>0,Tt=!!x.alphaHash,it=!!x.extensions,Ot=Un;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ot=i.toneMapping);let Lt={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:At,fragmentShader:pt,defines:x.defines,customVertexShaderID:kt,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:wt,batchingColor:wt&&O._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&O.instanceColor!==null,instancingMorph:Nt&&O.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ht,matcap:ce,envMap:tt,envMapMode:tt&&K.mapping,envMapCubeUVHeight:V,aoMap:st,lightMap:rt,bumpMap:at,normalMap:dt,displacementMap:Vt,emissiveMap:zt,normalMapObjectSpace:dt&&x.normalMapType===nd,normalMapTangentSpace:dt&&x.normalMapType===_l,packedNormalMap:dt&&x.normalMapType===_l&&Gx(x.normalMap.format),metalnessMap:qt,roughnessMap:Jt,anisotropy:D,anisotropyMap:$,clearcoat:de,clearcoatMap:ct,clearcoatNormalMap:ft,clearcoatRoughnessMap:Q,dispersion:ie,retroreflection:C,iridescence:v,iridescenceMap:nt,iridescenceThicknessMap:_t,sheen:k,sheenColorMap:Ut,sheenRoughnessMap:Mt,specularMap:xt,specularColorMap:Ft,specularIntensityMap:Gt,transmission:X,transmissionMap:Kt,thicknessMap:F,gradientMap:yt,opaque:x.transparent===!1&&x.blending===Ks&&x.alphaToCoverage===!1,alphaMap:et,alphaTest:vt,alphaHash:Tt,combine:x.combine,mapUv:Ht&&p(x.map.channel),aoMapUv:st&&p(x.aoMap.channel),lightMapUv:rt&&p(x.lightMap.channel),bumpMapUv:at&&p(x.bumpMap.channel),normalMapUv:dt&&p(x.normalMap.channel),displacementMapUv:Vt&&p(x.displacementMap.channel),emissiveMapUv:zt&&p(x.emissiveMap.channel),metalnessMapUv:qt&&p(x.metalnessMap.channel),roughnessMapUv:Jt&&p(x.roughnessMap.channel),anisotropyMapUv:$&&p(x.anisotropyMap.channel),clearcoatMapUv:ct&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ft&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&p(x.sheenRoughnessMap.channel),specularMapUv:xt&&p(x.specularMap.channel),specularColorMapUv:Ft&&p(x.specularColorMap.channel),specularIntensityMapUv:Gt&&p(x.specularIntensityMap.channel),transmissionMapUv:Kt&&p(x.transmissionMap.channel),thicknessMapUv:F&&p(x.thicknessMap.channel),alphaMapUv:et&&p(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(dt||D),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(Ht||et),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&dt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:ht,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Ht&&x.map.isVideoTexture===!0&&re.getTransfer(x.map.colorSpace)===me,decodeVideoTextureEmissive:zt&&x.emissiveMap.isVideoTexture===!0&&re.getTransfer(x.emissiveMap.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ce,flipSided:x.side===rn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function g(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)S.push(R),S.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(S,x),M(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function M(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){let S=h[x.type],R;if(S){let P=ni[S];R=vd.clone(P.uniforms)}else R=x.uniforms;return R}function y(x,S){let R=u.get(S);return R!==void 0?++R.usedTimes:(R=new Hx(i,S,x,s),c.push(R),u.set(S,R)),R}function w(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:c,dispose:A}}function Xx(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function qx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function kd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Hd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,p,_,g,m){let M=i[t];return M===void 0?(M={id:f.id,object:f,geometry:h,material:p,materialVariant:a(f),groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},i[t]=M):(M.id=f.id,M.object=f,M.geometry=h,M.material=p,M.materialVariant=a(f),M.groupOrder=_,M.renderOrder=f.renderOrder,M.z=g,M.group=m),t++,M}function l(f,h,p,_,g,m,M){M.reversedDepth===!0&&(g=-g);let b=o(f,h,p,_,g,m);p.transmission>0?n.push(b):p.transparent===!0?s.push(b):e.push(b)}function c(f,h,p,_,g,m){let M=o(f,h,p,_,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?s.unshift(M):e.unshift(M)}function u(f,h){e.length>1&&e.sort(f||qx),n.length>1&&n.sort(h||kd),s.length>1&&s.sort(h||kd)}function d(){for(let f=t,h=i.length;f<h;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Yx(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Hd,i.set(n,[a])):s>=r.length?(a=new Hd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Zx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Bt};break;case"SpotLight":e={position:new I,direction:new I,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Jx(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var $x=0;function Kx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function jx(i){let t=new Zx,e=Jx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new le,a=new le;function o(c){let u=0,d=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let h=0,p=0,_=0,g=0,m=0,M=0,b=0,y=0,w=0,T=0,A=0,x=0,S=0,R=0;c.sort(Kx);for(let O=0,z=c.length;O<z;O++){let L=c[O],B=L.color,N=L.intensity,H=L.distance,K=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Wi?K=L.shadow.map.texture:K=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=B.r*N,d+=B.g*N,f+=B.b*N;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],N);R++}else if(L.isSunLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,J=e.get(L);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[p]=J,n.sunShadowMap[p]=K;let lt=Z.getViewportCount();for(let ht=0;ht<lt;ht++)n.sunShadowMatrix[_+ht]=Z.getMatrix(ht),n.sunShadowCascade[_+ht]=Z._cascadeData[ht];_+=lt,p++}n.sun[h]=V,h++}else if(L.isDirectionalLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let Z=L.shadow,J=e.get(L);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.directionalShadow[g]=J,n.directionalShadowMap[g]=K,n.directionalShadowMatrix[g]=L.shadow.matrix,w++}n.directional[g]=V,g++}else if(L.isSpotLight){let V=t.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(B).multiplyScalar(N),V.distance=H,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[M]=V;let Z=L.shadow;if(L.map&&(n.spotLightMap[x]=L.map,x++,Z.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[M]=Z.matrix,L.castShadow){let J=e.get(L);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,n.spotShadow[M]=J,n.spotShadowMap[M]=K,A++}M++}else if(L.isRectAreaLight){let V=t.get(L);V.color.copy(B).multiplyScalar(N),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[b]=V,b++}else if(L.isPointLight){let V=t.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){let Z=L.shadow,J=e.get(L);J.shadowIntensity=Z.intensity,J.shadowBias=Z.bias,J.shadowNormalBias=Z.normalBias,J.shadowRadius=Z.radius,J.shadowMapSize=Z.mapSize,J.shadowCameraNear=Z.camera.near,J.shadowCameraFar=Z.camera.far,n.pointShadow[m]=J,n.pointShadowMap[m]=K,n.pointShadowMatrix[m]=L.shadow.matrix,T++}n.point[m]=V,m++}else if(L.isHemisphereLight){let V=t.get(L);V.skyColor.copy(L.color).multiplyScalar(N),V.groundColor.copy(L.groundColor).multiplyScalar(N),n.hemi[y]=V,y++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let P=n.hash;(P.sunLength!==h||P.directionalLength!==g||P.pointLength!==m||P.spotLength!==M||P.rectAreaLength!==b||P.hemiLength!==y||P.numSunShadows!==p||P.numDirectionalShadows!==w||P.numPointShadows!==T||P.numSpotShadows!==A||P.numSpotMaps!==x||P.numLightProbes!==R)&&(n.sun.length=h,n.directional.length=g,n.spot.length=M,n.rectArea.length=b,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-S,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,P.sunLength=h,P.directionalLength=g,P.pointLength=m,P.spotLength=M,P.rectAreaLength=b,P.hemiLength=y,P.numSunShadows=p,P.numDirectionalShadows=w,P.numPointShadows=T,P.numSpotShadows=A,P.numSpotMaps=x,P.numLightProbes=R,n.version=$x++)}function l(c,u){let d=0,f=0,h=0,p=0,_=0,g=0,m=u.matrixWorldInverse;for(let M=0,b=c.length;M<b;M++){let y=c[M];if(y.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),f++}else if(y.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let w=n.point[h];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),h++}else if(y.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function Vd(i){let t=new jx(i),e=[],n=[],s=[];function r(f){d.camera=f,e.length=0,n.length=0,s.length=0}function a(f){e.push(f)}function o(f){n.push(f)}function l(f){s.push(f)}function c(){t.setup(e)}function u(f){t.setupView(e,f)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Qx(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Vd(i),t.set(s,[o])):r>=a.length?(o=new Vd(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var ty=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
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
}`,ny=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],iy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Gd=new le,ca=new I,lh=new I;function sy(i,t,e){let n=new Ys,s=new ot,r=new ot,a=new we,o=new mo,l=new go,c={},u=e.maxTextureSize,d={[ki]:rn,[rn]:ki,[Ce]:Ce},f=new mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:ty,fragmentShader:ey}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new ve;p.setAttribute("position",new ke(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new he(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rs;let m=this.type;this.render=function(T,A,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===Du&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=rs);let S=i.getRenderTarget(),R=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Qn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let z=m!==this.type;z&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=T.length;L<B;L++){let N=T[L],H=N.shadow;if(H===void 0){Xt("WebGLShadowMap:",N,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let K=H.getFrameExtents();s.multiply(K),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,H.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=V,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===$s){if(N.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ln(s.x,s.y,{format:Wi,type:On,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),H.map.texture.name=N.name+".shadowMap",H.map.depthTexture=new Ni(s.x,s.y,Sn),H.map.depthTexture.name=N.name+".shadowMapDepth",H.map.depthTexture.format=$n,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=He,H.map.depthTexture.magFilter=He}else N.isPointLight?(H.map=new bl(s.x),H.map.depthTexture=new ao(s.x,Fn)):(H.map=new ln(s.x,s.y),H.map.depthTexture=new Ni(s.x,s.y,Fn)),H.map.depthTexture.name=N.name+".shadowMap",H.map.depthTexture.format=$n,this.type===rs?(H.map.depthTexture.compareFunction=V?yl:xl,H.map.depthTexture.minFilter=Ve,H.map.depthTexture.magFilter=Ve):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=He,H.map.depthTexture.magFilter=He);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();N.isPointLight!==!0&&H.updateMatrices(N,x);for(let J=0;J<Z;J++){let lt=H.getCamera(J);if(N.isPointLight){let ht=H.camera,At=H.matrix,pt=N.distance||ht.far;pt!==ht.far&&(ht.far=pt,ht.updateProjectionMatrix()),ca.setFromMatrixPosition(N.matrixWorld),ht.position.copy(ca),lh.copy(ht.position),lh.add(ny[J]),ht.up.copy(iy[J]),ht.lookAt(lh),ht.updateMatrixWorld(),At.makeTranslation(-ca.x,-ca.y,-ca.z),Gd.multiplyMatrices(ht.projectionMatrix,ht.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Gd,ht.coordinateSystem,ht.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,J),i.clear();else{J===0&&(i.setRenderTarget(H.map),i.clear());let ht=H.getViewport(J);a.set(r.x*ht.x,r.y*ht.y,r.x*ht.z,r.y*ht.w),O.viewport(a)}n=H.getFrustum(J),y(A,x,lt,N,this.type)}H.isPointLightShadow!==!0&&this.type===$s&&M(H,x),H.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(S,R,P)};function M(T,A){let x=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new ln(s.x,s.y,{format:Wi,type:On}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,x,f,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,x,h,_,null)}function b(T,A,x,S){let R=null,P=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let O=R.uuid,z=A.uuid,L=c[O];L===void 0&&(L={},c[O]=L);let B=L[z];B===void 0&&(B=R.clone(),L[z]=B,A.addEventListener("dispose",w)),R=B}if(R.visible=A.visible,R.wireframe=A.wireframe,S===$s?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let O=i.properties.get(R);O.light=x}return R}function y(T,A,x,S,R){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===$s)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let z=t.update(T),L=T.material;if(Array.isArray(L)){let B=z.groups;for(let N=0,H=B.length;N<H;N++){let K=B[N],V=L[K.materialIndex];if(V&&V.visible){let Z=b(T,V,S,R);T.onBeforeShadow(i,T,A,x,z,Z,K),i.renderBufferDirect(x,null,z,Z,T,K),T.onAfterShadow(i,T,A,x,z,Z,K)}}}else if(L.visible){let B=b(T,L,S,R);T.onBeforeShadow(i,T,A,x,z,B,null),i.renderBufferDirect(x,null,z,B,T,null),T.onAfterShadow(i,T,A,x,z,B,null)}}let O=T.children;for(let z=0,L=O.length;z<L;z++)y(O[z],A,x,S,R)}function w(T){T.target.removeEventListener("dispose",w);for(let x in c){let S=c[x],R=T.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function ry(i,t){function e(){let F=!1,yt=new we,et=null,vt=new we(0,0,0,0);return{setMask:function(Tt){et!==Tt&&!F&&(i.colorMask(Tt,Tt,Tt,Tt),et=Tt)},setLocked:function(Tt){F=Tt},setClear:function(Tt,it,Ot,Lt,Me){Me===!0&&(Tt*=Lt,it*=Lt,Ot*=Lt),yt.set(Tt,it,Ot,Lt),vt.equals(yt)===!1&&(i.clearColor(Tt,it,Ot,Lt),vt.copy(yt))},reset:function(){F=!1,et=null,vt.set(-1,0,0,0)}}}function n(){let F=!1,yt=!1,et=null,vt=null,Tt=null;return{setReversed:function(it){if(yt!==it){let Ot=t.get("EXT_clip_control");it?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),yt=it;let Lt=Tt;Tt=null,this.setClear(Lt)}},getReversed:function(){return yt},setTest:function(it){it?j(i.DEPTH_TEST):ut(i.DEPTH_TEST)},setMask:function(it){et!==it&&!F&&(i.depthMask(it),et=it)},setFunc:function(it){if(yt&&(it=fd[it]),vt!==it){switch(it){case Ya:i.depthFunc(i.NEVER);break;case Za:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case Ka:i.depthFunc(i.GEQUAL);break;case ja:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}vt=it}},setLocked:function(it){F=it},setClear:function(it){Tt!==it&&(Tt=it,yt&&(it=1-it),i.clearDepth(it))},reset:function(){F=!1,et=null,vt=null,Tt=null,yt=!1}}}function s(){let F=!1,yt=null,et=null,vt=null,Tt=null,it=null,Ot=null,Lt=null,Me=null;return{setTest:function(fe){F||(fe?j(i.STENCIL_TEST):ut(i.STENCIL_TEST))},setMask:function(fe){yt!==fe&&!F&&(i.stencilMask(fe),yt=fe)},setFunc:function(fe,An,Wn){(et!==fe||vt!==An||Tt!==Wn)&&(i.stencilFunc(fe,An,Wn),et=fe,vt=An,Tt=Wn)},setOp:function(fe,An,Wn){(it!==fe||Ot!==An||Lt!==Wn)&&(i.stencilOp(fe,An,Wn),it=fe,Ot=An,Lt=Wn)},setLocked:function(fe){F=fe},setClear:function(fe){Me!==fe&&(i.clearStencil(fe),Me=fe)},reset:function(){F=!1,yt=null,et=null,vt=null,Tt=null,it=null,Ot=null,Lt=null,Me=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},f={},h=new WeakMap,p=[],_=null,g=!1,m=null,M=null,b=null,y=null,w=null,T=null,A=null,x=new Bt(0,0,0),S=0,R=!1,P=null,O=null,z=null,L=null,B=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),H=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),H=K>=2);let Z=null,J={},lt=i.getParameter(i.SCISSOR_BOX),ht=i.getParameter(i.VIEWPORT),At=new we().fromArray(lt),pt=new we().fromArray(ht);function kt(F,yt,et,vt){let Tt=new Uint8Array(4),it=i.createTexture();i.bindTexture(F,it),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<et;Ot++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,vt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(yt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return it}let q={};q[i.TEXTURE_2D]=kt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),j(i.DEPTH_TEST),a.setFunc(Os),at(!1),dt(Ec),j(i.CULL_FACE),st(Qn);function j(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function ut(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function Nt(F,yt){return f[F]!==yt?(i.bindFramebuffer(F,yt),f[F]=yt,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=yt),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function wt(F,yt){let et=p,vt=!1;if(F){et=h.get(yt),et===void 0&&(et=[],h.set(yt,et));let Tt=F.textures;if(et.length!==Tt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Ot=Tt.length;it<Ot;it++)et[it]=i.COLOR_ATTACHMENT0+it;et.length=Tt.length,vt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,vt=!0);vt&&i.drawBuffers(et)}function Ht(F){return _!==F?(i.useProgram(F),_=F,!0):!1}let ce={[as]:i.FUNC_ADD,[Uu]:i.FUNC_SUBTRACT,[Fu]:i.FUNC_REVERSE_SUBTRACT};ce[Ou]=i.MIN,ce[Bu]=i.MAX;let tt={[zu]:i.ZERO,[ku]:i.ONE,[Hu]:i.SRC_COLOR,[Rc]:i.SRC_ALPHA,[Yu]:i.SRC_ALPHA_SATURATE,[Xu]:i.DST_COLOR,[Gu]:i.DST_ALPHA,[Vu]:i.ONE_MINUS_SRC_COLOR,[Cc]:i.ONE_MINUS_SRC_ALPHA,[qu]:i.ONE_MINUS_DST_COLOR,[Wu]:i.ONE_MINUS_DST_ALPHA,[Zu]:i.CONSTANT_COLOR,[Ju]:i.ONE_MINUS_CONSTANT_COLOR,[$u]:i.CONSTANT_ALPHA,[Ku]:i.ONE_MINUS_CONSTANT_ALPHA};function st(F,yt,et,vt,Tt,it,Ot,Lt,Me,fe){if(F===Qn){g===!0&&(ut(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),F!==Nu){if(F!==m||fe!==R){if((M!==as||w!==as)&&(i.blendEquation(i.FUNC_ADD),M=as,w=as),fe)switch(F){case Ks:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFunc(i.ONE,i.ONE);break;case Tc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Wt("WebGLState: Invalid blending: ",F);break}else switch(F){case Ks:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tc:Wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ac:Wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Wt("WebGLState: Invalid blending: ",F);break}b=null,y=null,T=null,A=null,x.set(0,0,0),S=0,m=F,R=fe}return}Tt=Tt||yt,it=it||et,Ot=Ot||vt,(yt!==M||Tt!==w)&&(i.blendEquationSeparate(ce[yt],ce[Tt]),M=yt,w=Tt),(et!==b||vt!==y||it!==T||Ot!==A)&&(i.blendFuncSeparate(tt[et],tt[vt],tt[it],tt[Ot]),b=et,y=vt,T=it,A=Ot),(Lt.equals(x)===!1||Me!==S)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Me),x.copy(Lt),S=Me),m=F,R=!1}function rt(F,yt){F.side===Ce?ut(i.CULL_FACE):j(i.CULL_FACE);let et=F.side===rn;yt&&(et=!et),at(et),F.blending===Ks&&F.transparent===!1?st(Qn):st(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let vt=F.stencilWrite;o.setTest(vt),vt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),zt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(F){P!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),P=F)}function dt(F){F!==Pu?(j(i.CULL_FACE),F!==O&&(F===Ec?i.cullFace(i.BACK):F===Lu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ut(i.CULL_FACE),O=F}function Vt(F){F!==z&&(H&&i.lineWidth(F),z=F)}function zt(F,yt,et){F?(j(i.POLYGON_OFFSET_FILL),(L!==yt||B!==et)&&(L=yt,B=et,a.getReversed()&&(yt=-yt),i.polygonOffset(yt,et))):ut(i.POLYGON_OFFSET_FILL)}function qt(F){F?j(i.SCISSOR_TEST):ut(i.SCISSOR_TEST)}function Jt(F){F===void 0&&(F=i.TEXTURE0+N-1),Z!==F&&(i.activeTexture(F),Z=F)}function D(F,yt,et){et===void 0&&(Z===null?et=i.TEXTURE0+N-1:et=Z);let vt=J[et];vt===void 0&&(vt={type:void 0,texture:void 0},J[et]=vt),(vt.type!==F||vt.texture!==yt)&&(Z!==et&&(i.activeTexture(et),Z=et),i.bindTexture(F,yt||q[F]),vt.type=F,vt.texture=yt)}function de(){let F=J[Z];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function v(){try{i.texSubImage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function k(){try{i.texSubImage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function ct(){try{i.texStorage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function ft(){try{i.texStorage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function Q(){try{i.texImage2D(...arguments)}catch(F){Wt("WebGLState:",F)}}function nt(){try{i.texImage3D(...arguments)}catch(F){Wt("WebGLState:",F)}}function _t(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Ut(F,yt){d[F]!==yt&&(i.pixelStorei(F,yt),d[F]=yt)}function Mt(F){At.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),At.copy(F))}function xt(F){pt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),pt.copy(F))}function Ft(F,yt){let et=c.get(yt);et===void 0&&(et=new WeakMap,c.set(yt,et));let vt=et.get(F);vt===void 0&&(vt=i.getUniformBlockIndex(yt,F.name),et.set(F,vt))}function Gt(F,yt){let vt=c.get(yt).get(F);l.get(yt)!==vt&&(i.uniformBlockBinding(yt,vt,F.__bindingPointIndex),l.set(yt,vt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},Z=null,J={},f={},h=new WeakMap,p=[],_=null,g=!1,m=null,M=null,b=null,y=null,w=null,T=null,A=null,x=new Bt(0,0,0),S=0,R=!1,P=null,O=null,z=null,L=null,B=null,At.set(0,0,i.canvas.width,i.canvas.height),pt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:j,disable:ut,bindFramebuffer:Nt,drawBuffers:wt,useProgram:Ht,setBlending:st,setMaterial:rt,setFlipSided:at,setCullFace:dt,setLineWidth:Vt,setPolygonOffset:zt,setScissorTest:qt,activeTexture:Jt,bindTexture:D,unbindTexture:de,compressedTexImage2D:ie,compressedTexImage3D:C,texImage2D:Q,texImage3D:nt,pixelStorei:Ut,getParameter:_t,updateUBOMapping:Ft,uniformBlockBinding:Gt,texStorage2D:ct,texStorage3D:ft,texSubImage2D:v,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:Mt,viewport:xt,reset:Kt}}function ay(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ot,u=new WeakMap,d=new Set,f,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,v){return p?new OffscreenCanvas(C,v):Ar("canvas")}function g(C,v,k){let X=1,$=ie(C);if(($.width>k||$.height>k)&&(X=k/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ct=Math.floor(X*$.width),ft=Math.floor(X*$.height);f===void 0&&(f=_(ct,ft));let Q=v?_(ct,ft):f;return Q.width=ct,Q.height=ft,Q.getContext("2d").drawImage(C,0,0,ct,ft),Xt("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+ct+"x"+ft+")."),Q}else return"data"in C&&Xt("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,v,k,X,$,ct=!1){if(C!==null){if(i[C]!==void 0)return i[C];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ft;X&&(ft=t.get("EXT_texture_norm16"),ft||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=v;if(v===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8),k===i.UNSIGNED_SHORT&&ft&&(Q=ft.R16_EXT),k===i.SHORT&&ft&&(Q=ft.R16_SNORM_EXT)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),v===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8),k===i.UNSIGNED_SHORT&&ft&&(Q=ft.RG16_EXT),k===i.SHORT&&ft&&(Q=ft.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RG8UI),k===i.UNSIGNED_SHORT&&(Q=i.RG16UI),k===i.UNSIGNED_INT&&(Q=i.RG32UI),k===i.BYTE&&(Q=i.RG8I),k===i.SHORT&&(Q=i.RG16I),k===i.INT&&(Q=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),k===i.UNSIGNED_INT&&(Q=i.RGB32UI),k===i.BYTE&&(Q=i.RGB8I),k===i.SHORT&&(Q=i.RGB16I),k===i.INT&&(Q=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),k===i.UNSIGNED_INT&&(Q=i.RGBA32UI),k===i.BYTE&&(Q=i.RGBA8I),k===i.SHORT&&(Q=i.RGBA16I),k===i.INT&&(Q=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_SHORT&&ft&&(Q=ft.RGB16_EXT),k===i.SHORT&&ft&&(Q=ft.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),v===i.RGBA){let nt=ct?Tr:re.getTransfer($);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=nt===me?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ft&&(Q=ft.RGBA16_EXT),k===i.SHORT&&ft&&(Q=ft.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function w(C,v){let k;return C?v===null||v===Fn||v===Qs?k=i.DEPTH24_STENCIL8:v===Sn?k=i.DEPTH32F_STENCIL8:v===js&&(k=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Fn||v===Qs?k=i.DEPTH_COMPONENT24:v===Sn?k=i.DEPTH_COMPONENT32F:v===js&&(k=i.DEPTH_COMPONENT16),k}function T(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==He&&C.minFilter!==Ve?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){let v=C.target;v.removeEventListener("dispose",A),S(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(C){let v=C.target;v.removeEventListener("dispose",x),P(v)}function S(C){let v=n.get(C);if(v.__webglInit===void 0)return;let k=C.source,X=h.get(k);if(X){let $=X[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&R(C),Object.keys(X).length===0&&h.delete(k)}n.remove(C)}function R(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let k=C.source,X=h.get(k);delete X[v.__cacheKey],a.memory.textures--}function P(C){let v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let $=0;$<v.__webglFramebuffer[X].length;$++)i.deleteFramebuffer(v.__webglFramebuffer[X][$]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let k=C.textures;for(let X=0,$=k.length;X<$;X++){let ct=n.get(k[X]);ct.__webglTexture&&(i.deleteTexture(ct.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(C)}let O=0;function z(){O=0}function L(){return O}function B(C){O=C}function N(){let C=O;return C>=s.maxTextures&&Xt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,C}function H(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function K(C,v){let k=n.get(C);if(C.isVideoTexture&&D(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){let X=C.image;if(X===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(k,C,v);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function V(C,v){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ut(k,C,v);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function Z(C,v){let k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){ut(k,C,v);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function J(C,v){let k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Nt(k,C,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}let lt={[to]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},ht={[He]:i.NEAREST,[td]:i.NEAREST_MIPMAP_NEAREST,[ea]:i.NEAREST_MIPMAP_LINEAR,[Ve]:i.LINEAR,[Do]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},At={[sd]:i.NEVER,[cd]:i.ALWAYS,[rd]:i.LESS,[xl]:i.LEQUAL,[ad]:i.EQUAL,[yl]:i.GEQUAL,[od]:i.GREATER,[ld]:i.NOTEQUAL};function pt(C,v){if(v.type===Sn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===Ve||v.magFilter===Do||v.magFilter===ea||v.magFilter===Vi||v.minFilter===Ve||v.minFilter===Do||v.minFilter===ea||v.minFilter===Vi)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,lt[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,lt[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,lt[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ht[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,At[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===He||v.minFilter!==ea&&v.minFilter!==Vi||v.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function kt(C,v){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));let X=v.source,$=h.get(X);$===void 0&&($={},h.set(X,$));let ct=H(v);if(ct!==C.__cacheKey){$[ct]===void 0&&($[ct]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[ct].usedTimes++;let ft=$[C.__cacheKey];ft!==void 0&&($[C.__cacheKey].usedTimes--,ft.usedTimes===0&&R(v)),C.__cacheKey=ct,C.__webglTexture=$[ct].texture}return k}function q(C,v,k){return Math.floor(Math.floor(C/k)/v)}function j(C,v,k,X){let ct=C.updateRanges;if(ct.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,X,v.data);else{ct.sort((Ut,Mt)=>Ut.start-Mt.start);let ft=0;for(let Ut=1;Ut<ct.length;Ut++){let Mt=ct[ft],xt=ct[Ut],Ft=Mt.start+Mt.count,Gt=q(xt.start,v.width,4),Kt=q(Mt.start,v.width,4);xt.start<=Ft+1&&Gt===Kt&&q(xt.start+xt.count-1,v.width,4)===Gt?Mt.count=Math.max(Mt.count,xt.start+xt.count-Mt.start):(++ft,ct[ft]=xt)}ct.length=ft+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ut=0,Mt=ct.length;Ut<Mt;Ut++){let xt=ct[Ut],Ft=Math.floor(xt.start/4),Gt=Math.ceil(xt.count/4),Kt=Ft%v.width,F=Math.floor(Ft/v.width),yt=Gt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,Kt,F,yt,et,k,X,v.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function ut(C,v,k){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);let $=kt(C,v),ct=v.source;e.bindTexture(X,C.__webglTexture,i.TEXTURE0+k);let ft=n.get(ct);if(ct.version!==ft.__version||$===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let et=re.getPrimaries(re.workingColorSpace),vt=v.colorSpace===yi?null:re.getPrimaries(v.colorSpace),Tt=v.colorSpace===yi||et===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let nt=g(v.image,!1,s.maxTextureSize);nt=de(v,nt);let _t=r.convert(v.format,v.colorSpace),Ut=r.convert(v.type),Mt=y(v.internalFormat,_t,Ut,v.normalized,v.colorSpace,v.isVideoTexture);pt(X,v);let xt,Ft=v.mipmaps,Gt=v.isVideoTexture!==!0,Kt=ft.__version===void 0||$===!0,F=ct.dataReady,yt=T(v,nt);if(v.isDepthTexture)Mt=w(v.format===Gi,v.type),Kt&&(Gt?e.texStorage2D(i.TEXTURE_2D,1,Mt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Mt,nt.width,nt.height,0,_t,Ut,null));else if(v.isDataTexture)if(Ft.length>0){Gt&&Kt&&e.texStorage2D(i.TEXTURE_2D,yt,Mt,Ft[0].width,Ft[0].height);for(let et=0,vt=Ft.length;et<vt;et++)xt=Ft[et],Gt?F&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,xt.width,xt.height,_t,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,et,Mt,xt.width,xt.height,0,_t,Ut,xt.data);v.generateMipmaps=!1}else Gt?(Kt&&e.texStorage2D(i.TEXTURE_2D,yt,Mt,nt.width,nt.height),F&&j(v,nt,_t,Ut)):e.texImage2D(i.TEXTURE_2D,0,Mt,nt.width,nt.height,0,_t,Ut,nt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Gt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Mt,Ft[0].width,Ft[0].height,nt.depth);for(let et=0,vt=Ft.length;et<vt;et++)if(xt=Ft[et],v.format!==bn)if(_t!==null)if(Gt){if(F)if(v.layerUpdates.size>0){let Tt=Kc(xt.width,xt.height,v.format,v.type);for(let it of v.layerUpdates){let Ot=xt.data.subarray(it*Tt/xt.data.BYTES_PER_ELEMENT,(it+1)*Tt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,it,xt.width,xt.height,1,_t,Ot)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,xt.width,xt.height,nt.depth,_t,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,Mt,xt.width,xt.height,nt.depth,0,xt.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,xt.width,xt.height,nt.depth,_t,Ut,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,Mt,xt.width,xt.height,nt.depth,0,_t,Ut,xt.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Gt&&Kt&&e.texStorage2D(i.TEXTURE_2D,yt,Mt,Ft[0].width,Ft[0].height);for(let et=0,vt=Ft.length;et<vt;et++)xt=Ft[et],v.format!==bn?_t!==null?Gt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,Mt,xt.width,xt.height,0,xt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?F&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,xt.width,xt.height,_t,Ut,xt.data):e.texImage2D(i.TEXTURE_2D,et,Mt,xt.width,xt.height,0,_t,Ut,xt.data)}else if(v.isDataArrayTexture)if(Gt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Mt,nt.width,nt.height,nt.depth),F)if(v.layerUpdates.size>0){let et=Kc(nt.width,nt.height,v.format,v.type);for(let vt of v.layerUpdates){let Tt=nt.data.subarray(vt*et/nt.data.BYTES_PER_ELEMENT,(vt+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,vt,nt.width,nt.height,1,_t,Ut,Tt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,_t,Ut,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,nt.width,nt.height,nt.depth,0,_t,Ut,nt.data);else if(v.isData3DTexture)Gt?(Kt&&e.texStorage3D(i.TEXTURE_3D,yt,Mt,nt.width,nt.height,nt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,_t,Ut,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,nt.width,nt.height,nt.depth,0,_t,Ut,nt.data);else if(v.isFramebufferTexture){if(Kt)if(Gt)e.texStorage2D(i.TEXTURE_2D,yt,Mt,nt.width,nt.height);else{let et=nt.width,vt=nt.height;for(let Tt=0;Tt<yt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,Mt,et,vt,0,_t,Ut,null),et>>=1,vt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),d.add(v),et.onpaint=vt=>{let Tt=vt.changedElements;for(let it of d)Tt.includes(it.image)&&(it.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{let Tt=i.RGBA,it=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,it,Ot,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Gt&&Kt){let et=ie(Ft[0]);e.texStorage2D(i.TEXTURE_2D,yt,Mt,et.width,et.height)}for(let et=0,vt=Ft.length;et<vt;et++)xt=Ft[et],Gt?F&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,_t,Ut,xt):e.texImage2D(i.TEXTURE_2D,et,Mt,_t,Ut,xt);v.generateMipmaps=!1}else if(Gt){if(Kt){let et=ie(nt);e.texStorage2D(i.TEXTURE_2D,yt,Mt,et.width,et.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Ut,nt)}else e.texImage2D(i.TEXTURE_2D,0,Mt,_t,Ut,nt);m(v)&&M(X),ft.__version=ct.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Nt(C,v,k){if(v.image.length!==6)return;let X=kt(C,v),$=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);let ct=n.get($);if($.version!==ct.__version||X===!0){e.activeTexture(i.TEXTURE0+k);let ft=re.getPrimaries(re.workingColorSpace),Q=v.colorSpace===yi?null:re.getPrimaries(v.colorSpace),nt=v.colorSpace===yi||ft===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let _t=v.isCompressedTexture||v.image[0].isCompressedTexture,Ut=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let it=0;it<6;it++)!_t&&!Ut?Mt[it]=g(v.image[it],!0,s.maxCubemapSize):Mt[it]=Ut?v.image[it].image:v.image[it],Mt[it]=de(v,Mt[it]);let xt=Mt[0],Ft=r.convert(v.format,v.colorSpace),Gt=r.convert(v.type),Kt=y(v.internalFormat,Ft,Gt,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,yt=ct.__version===void 0||X===!0,et=$.dataReady,vt=T(v,xt);pt(i.TEXTURE_CUBE_MAP,v);let Tt;if(_t){F&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Kt,xt.width,xt.height);for(let it=0;it<6;it++){Tt=Mt[it].mipmaps;for(let Ot=0;Ot<Tt.length;Ot++){let Lt=Tt[Ot];v.format!==bn?Ft!==null?F?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot,0,0,Lt.width,Lt.height,Ft,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot,Kt,Lt.width,Lt.height,0,Lt.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot,0,0,Lt.width,Lt.height,Ft,Gt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot,Kt,Lt.width,Lt.height,0,Ft,Gt,Lt.data)}}}else{if(Tt=v.mipmaps,F&&yt){Tt.length>0&&vt++;let it=ie(Mt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Kt,it.width,it.height)}for(let it=0;it<6;it++)if(Ut){F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Mt[it].width,Mt[it].height,Ft,Gt,Mt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Kt,Mt[it].width,Mt[it].height,0,Ft,Gt,Mt[it].data);for(let Ot=0;Ot<Tt.length;Ot++){let Me=Tt[Ot].image[it].image;F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot+1,0,0,Me.width,Me.height,Ft,Gt,Me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot+1,Kt,Me.width,Me.height,0,Ft,Gt,Me.data)}}else{F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Ft,Gt,Mt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Kt,Ft,Gt,Mt[it]);for(let Ot=0;Ot<Tt.length;Ot++){let Lt=Tt[Ot];F?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot+1,0,0,Ft,Gt,Lt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Ot+1,Kt,Ft,Gt,Lt.image[it])}}}m(v)&&M(i.TEXTURE_CUBE_MAP),ct.__version=$.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function wt(C,v,k,X,$,ct){let ft=r.convert(k.format,k.colorSpace),Q=r.convert(k.type),nt=y(k.internalFormat,ft,Q,k.normalized,k.colorSpace),_t=n.get(v),Ut=n.get(k);if(Ut.__renderTarget=v,!_t.__hasExternalTextures){let Mt=Math.max(1,v.width>>ct),xt=Math.max(1,v.height>>ct);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,ct,nt,Mt,xt,v.depth,0,ft,Q,null):e.texImage2D($,ct,nt,Mt,xt,0,ft,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Jt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,$,Ut.__webglTexture,0,qt(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,$,Ut.__webglTexture,ct),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(C,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let X=v.depthTexture,$=X&&X.isDepthTexture?X.type:null,ct=w(v.stencilBuffer,$),ft=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Jt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(v),ct,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(v),ct,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ct,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ft,i.RENDERBUFFER,C)}else{let X=v.textures;for(let $=0;$<X.length;$++){let ct=X[$],ft=r.convert(ct.format,ct.colorSpace),Q=r.convert(ct.type),nt=y(ct.internalFormat,ft,Q,ct.normalized,ct.colorSpace);Jt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt(v),nt,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt(v),nt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,nt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ce(C,v,k){let X=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(v.depthTexture);if($.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),pt(i.TEXTURE_CUBE_MAP,v.depthTexture);let _t=r.convert(v.depthTexture.format),Ut=r.convert(v.depthTexture.type),Mt;v.depthTexture.format===$n?Mt=i.DEPTH_COMPONENT24:v.depthTexture.format===Gi&&(Mt=i.DEPTH24_STENCIL8);for(let xt=0;xt<6;xt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Mt,v.width,v.height,0,_t,Ut,null)}}else K(v.depthTexture,0);let ct=$.__webglTexture,ft=qt(v),Q=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,nt=v.depthTexture.format===Gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===$n)Jt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,Q,ct,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,nt,Q,ct,0);else if(v.depthTexture.format===Gi)Jt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,Q,ct,0,ft):i.framebufferTexture2D(i.FRAMEBUFFER,nt,Q,ct,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(C){let v=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let X=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let $=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),v.__depthDisposeCallback=$}v.__boundDepthTexture=X}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)ce(v.__webglFramebuffer[X],C,X);else{let X=C.texture.mipmaps;X&&X.length>0?ce(v.__webglFramebuffer[0],C,0):ce(v.__webglFramebuffer,C,0)}else if(k){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),Ht(v.__webglDepthbuffer[X],C,!1);else{let $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ct)}}else{let X=C.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ht(v.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,ct)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(C,v,k){let X=n.get(C);v!==void 0&&wt(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&tt(C)}function rt(C){let v=C.texture,k=n.get(C),X=n.get(v);C.addEventListener("dispose",x);let $=C.textures,ct=C.isWebGLCubeRenderTarget===!0,ft=$.length>1;if(ft||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,a.memory.textures++),ct){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let nt=0;nt<v.mipmaps.length;nt++)k.__webglFramebuffer[Q][nt]=i.createFramebuffer()}else k.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)k.__webglFramebuffer[Q]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ft)for(let Q=0,nt=$.length;Q<nt;Q++){let _t=n.get($[Q]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Jt(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<$.length;Q++){let nt=$[Q];k.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);let _t=r.convert(nt.format,nt.colorSpace),Ut=r.convert(nt.type),Mt=y(nt.internalFormat,_t,Ut,nt.normalized,nt.colorSpace,C.isXRRenderTarget===!0),xt=qt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,Mt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ht(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ct){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),pt(i.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)wt(k.__webglFramebuffer[Q][nt],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,nt);else wt(k.__webglFramebuffer[Q],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);m(v)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let Q=0,nt=$.length;Q<nt;Q++){let _t=$[Q],Ut=n.get(_t),Mt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Mt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Ut.__webglTexture),pt(Mt,_t),wt(k.__webglFramebuffer,C,_t,i.COLOR_ATTACHMENT0+Q,Mt,0),m(_t)&&M(Mt)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,X.__webglTexture),pt(Q,v),v.mipmaps&&v.mipmaps.length>0)for(let nt=0;nt<v.mipmaps.length;nt++)wt(k.__webglFramebuffer[nt],C,v,i.COLOR_ATTACHMENT0,Q,nt);else wt(k.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,Q,0);m(v)&&M(Q),e.unbindTexture()}C.depthBuffer&&tt(C)}function at(C){let v=C.textures;for(let k=0,X=v.length;k<X;k++){let $=v[k];if(m($)){let ct=b(C),ft=n.get($).__webglTexture;e.bindTexture(ct,ft),M(ct),e.unbindTexture()}}}let dt=[],Vt=[];function zt(C){if(C.samples>0){if(Jt(C)===!1){let v=C.textures,k=C.width,X=C.height,$=i.COLOR_BUFFER_BIT,ct=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=n.get(C),Q=v.length>1;if(Q)for(let _t=0;_t<v.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let nt=C.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let _t=0;_t<v.length;_t++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let Ut=n.get(v[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,$,i.NEAREST),l===!0&&(dt.length=0,Vt.length=0,dt.push(i.COLOR_ATTACHMENT0+_t),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(dt.push(ct),Vt.push(ct),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let _t=0;_t<v.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,ft.__webglColorRenderbuffer[_t]);let Ut=n.get(v[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function qt(C){return Math.min(s.maxSamples,C.samples)}function Jt(C){let v=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function D(C){let v=a.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function de(C,v){let k=C.colorSpace,X=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==wr&&k!==yi&&(re.getTransfer(k)===me?(X!==bn||$!==cn)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Wt("WebGLTextures: Unsupported texture color space:",k)),v}function ie(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=J,this.rebindTextures=st,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function oy(i,t){function e(n,s=yi){let r,a=re.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===Uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===kc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bc)return i.BYTE;if(n===zc)return i.SHORT;if(n===js)return i.UNSIGNED_SHORT;if(n===No)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===On)return i.HALF_FLOAT;if(n===Vc)return i.ALPHA;if(n===Gc)return i.RGB;if(n===bn)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===Bo)return i.RED_INTEGER;if(n===Wi)return i.RG;if(n===zo)return i.RG_INTEGER;if(n===ko)return i.RGBA_INTEGER;if(n===na||n===ia||n===sa||n===ra)if(a===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ho||n===Vo||n===Go||n===Wo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ho)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo||n===Zo||n===Jo||n===aa||n===$o)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xo||n===qo)return a===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zo)return r.COMPRESSED_R11_EAC;if(n===Jo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===aa)return r.COMPRESSED_RG11_EAC;if(n===$o)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ko||n===jo||n===Qo||n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ko)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ul||n===dl||n===fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ul)return a===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pl||n===ml||n===oa||n===gl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ly=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cy=`
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

}`,gh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Br(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new mn({vertexShader:ly,fragmentShader:cy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new he(new Nn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_h=class extends Kn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,p=null,_=typeof XRWebGLBinding<"u",g=new gh,m={},M=e.getContextAttributes(),b=null,y=null,w=[],T=[],A=new ot,x=null,S=null,R=new Ne;R.viewport=new we;let P=new Ne;P.viewport=new we;let O=[R,P],z=new Co,L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=w[q];return j===void 0&&(j=new Gs,w[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=w[q];return j===void 0&&(j=new Gs,w[q]=j),j.getGripSpace()},this.getHand=function(q){let j=w[q];return j===void 0&&(j=new Gs,w[q]=j),j.getHandSpace()};function N(q){let j=T.indexOf(q.inputSource);if(j===-1)return;let ut=w[j];ut!==void 0&&(ut.update(q.inputSource,q.frame,c||a),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",K);for(let q=0;q<w.length;q++){let j=T[q];j!==null&&(T[q]=null,w[q].disconnect(j))}L=null,B=null,g.reset();for(let q in m)delete m[q];if(t.setRenderTarget(b),h=null,f=null,d=null,s=null,y=null,kt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),S!==null){let q=S.camera;q.fov=S.fov,q.zoom=S.zoom,q.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",K),M.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Nt=null,wt=null;M.depth&&(wt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=M.stencil?Gi:$n,Nt=M.stencil?Qs:Fn);let Ht={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ht),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new ln(f.textureWidth,f.textureHeight,{format:bn,type:cn,depthTexture:new Ni(f.textureWidth,f.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ut={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new ln(h.framebufferWidth,h.framebufferHeight,{format:bn,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),kt.setContext(s),kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(q){for(let j=0;j<q.removed.length;j++){let ut=q.removed[j],Nt=T.indexOf(ut);Nt>=0&&(T[Nt]=null,w[Nt].disconnect(ut))}for(let j=0;j<q.added.length;j++){let ut=q.added[j],Nt=T.indexOf(ut);if(Nt===-1){for(let Ht=0;Ht<w.length;Ht++)if(Ht>=T.length){T.push(ut),Nt=Ht;break}else if(T[Ht]===null){T[Ht]=ut,Nt=Ht;break}if(Nt===-1)break}let wt=w[Nt];wt&&wt.connect(ut)}}let V=new I,Z=new I;function J(q,j,ut){V.setFromMatrixPosition(j.matrixWorld),Z.setFromMatrixPosition(ut.matrixWorld);let Nt=V.distanceTo(Z),wt=j.projectionMatrix.elements,Ht=ut.projectionMatrix.elements,ce=wt[14]/(wt[10]-1),tt=wt[14]/(wt[10]+1),st=(wt[9]+1)/wt[5],rt=(wt[9]-1)/wt[5],at=(wt[8]-1)/wt[0],dt=(Ht[8]+1)/Ht[0],Vt=ce*at,zt=ce*dt,qt=Nt/(-at+dt),Jt=qt*-at;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Jt),q.translateZ(qt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),wt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let D=ce+qt,de=tt+qt,ie=Vt-Jt,C=zt+(Nt-Jt),v=st*tt/de*D,k=rt*tt/de*D;q.projectionMatrix.makePerspective(ie,C,v,k,D,de),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function lt(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let j=q.near,ut=q.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(ut=g.depthFar)),z.near=P.near=R.near=j,z.far=P.far=R.far=ut,(L!==z.near||B!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,B=z.far),z.layers.mask=q.layers.mask|6,R.layers.mask=z.layers.mask&-5,P.layers.mask=z.layers.mask&-3;let Nt=q.parent,wt=z.cameras;lt(z,Nt);for(let Ht=0;Ht<wt.length;Ht++)lt(wt[Ht],Nt);wt.length===2?J(z,R,P):z.projectionMatrix.copy(R.projectionMatrix),S===null&&q.isPerspectiveCamera&&(S={camera:q,fov:q.fov,zoom:q.zoom}),ht(q,z,Nt)};function ht(q,j,ut){ut===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ks*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(q){return m[q]};let At=null;function pt(q,j){if(u=j.getViewerPose(c||a),p=j,u!==null){let ut=u.views;h!==null&&(t.setRenderTargetFramebuffer(y,h.framebuffer),t.setRenderTarget(y));let Nt=!1;ut.length!==z.cameras.length&&(z.cameras.length=0,Nt=!0);for(let tt=0;tt<ut.length;tt++){let st=ut[tt],rt=null;if(h!==null)rt=h.getViewport(st);else{let dt=d.getViewSubImage(f,st);rt=dt.viewport,tt===0&&(t.setRenderTargetTextures(y,dt.colorTexture,dt.depthStencilTexture),t.setRenderTarget(y))}let at=O[tt];at===void 0&&(at=new Ne,at.layers.enable(tt),at.viewport=new we,O[tt]=at),at.matrix.fromArray(st.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(st.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(rt.x,rt.y,rt.width,rt.height),tt===0&&(z.matrix.copy(at.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Nt===!0&&z.cameras.push(at)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let tt=d.getDepthInformation(ut[0]);tt&&tt.isValid&&tt.texture&&g.init(tt,s.renderState)}if(wt&&wt.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let tt=0;tt<ut.length;tt++){let st=ut[tt].camera;if(st){let rt=m[st];rt||(rt=new Br,m[st]=rt);let at=d.getCameraImage(st);rt.sourceTexture=at}}}}for(let ut=0;ut<w.length;ut++){let Nt=T[ut],wt=w[ut];Nt!==null&&wt!==void 0&&wt.update(Nt,j,c||a)}At&&At(q,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),p=null}let kt=new Wd;kt.setAnimationLoop(pt),this.setAnimationLoop=function(q){At=q},this.dispose=function(){}}},hy=new le,$d=new Zt;$d.set(-1,0,0,0,1,0,0,0,1);function uy(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Zc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,M,b,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),u(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&h(g,m,y)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,b):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),b=M.envMap,y=M.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(hy.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply($d),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,b){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=b*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function dy(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let T=w.program;n.uniformBlockBinding(y,T)}function c(y,w){let T=s[y.id];T===void 0&&(g(y),T=u(y),s[y.id]=T,y.addEventListener("dispose",M));let A=w.program;n.updateUBOMapping(y,A);let x=t.render.frame;r[y.id]!==x&&(f(y),r[y.id]=x)}function u(y){let w=d();y.__bindingPointIndex=w;let T=i.createBuffer(),A=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,A,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,T),T}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let w=s[y.id],T=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,S=T.length;x<S;x++){let R=T[x];if(Array.isArray(R))for(let P=0,O=R.length;P<O;P++)h(R[P],x,P,A);else h(R,x,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,w,T,A){if(_(y,w,T,A)===!0){let x=y.__offset,S=y.value;if(Array.isArray(S)){let R=0;for(let P=0;P<S.length;P++){let O=S[P],z=m(O);p(O,y.__data,R),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(S,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function p(y,w,T){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,T)}function _(y,w,T,A){let x=y.value,S=w+"_"+T;if(A[S]===void 0)return typeof x=="number"||typeof x=="boolean"?A[S]=x:ArrayBuffer.isView(x)?A[S]=x.slice():A[S]=x.clone(),!0;{let R=A[S];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return A[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(y){let w=y.uniforms,T=0,A=16;for(let S=0,R=w.length;S<R;S++){let P=Array.isArray(w[S])?w[S]:[w[S]];for(let O=0,z=P.length;O<z;O++){let L=P[O],B=Array.isArray(L.value)?L.value:[L.value];for(let N=0,H=B.length;N<H;N++){let K=B[N],V=m(K),Z=T%A,J=Z%V.boundary,lt=Z+J;T+=J,lt!==0&&A-lt<V.storage&&(T+=A-lt),L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,T+=V.storage}}}let x=T%A;return x>0&&(T+=A-x),y.__size=T,y.__cache={},this}function m(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",y),w}function M(y){let w=y.target;w.removeEventListener("dispose",M);let T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function b(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var fy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ei=null;function py(){return ei===null&&(ei=new Qi(fy,16,16,Wi,On),ei.name="DFG_LUT",ei.minFilter=Ve,ei.magFilter=Ve,ei.wrapS=Yn,ei.wrapT=Yn,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}var vi=class{constructor(t={}){let{canvas:e=hd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=cn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let _=h,g=new Set([ko,zo,Bo]),m=new Set([cn,Fn,js,Qs,Uo,Fo]),M=new Uint32Array(4),b=new Int32Array(4),y=new I,w=null,T=null,A=[],x=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,P=!1,O=null,z=null,L=null,B=null;this._outputColorSpace=xe;let N=0,H=0,K=null,V=-1,Z=null,J=new we,lt=new we,ht=null,At=new Bt(0),pt=0,kt=e.width,q=e.height,j=1,ut=null,Nt=null,wt=new we(0,0,kt,q),Ht=new we(0,0,kt,q),ce=!1,tt=new Ys,st=!1,rt=!1,at=new le,dt=new I,Vt=new we,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},qt=!1;function Jt(){return K===null?j:1}let D=n;function de(E,U){return e.getContext(E,U)}let ie,C,v,k,X,$,ct,ft,Q,nt,_t,Ut,Mt,xt,Ft,Gt,Kt,F,yt,et,vt,Tt,it;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",fe,!1),e.addEventListener("webglcontextcreationerror",An,!1),D===null){let U="webgl2";if(D=de(U,E),D===null)throw de(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(E){throw e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",An,!1),Wt("WebGLRenderer: "+E.message),E}function Ot(){ie=new M_(D),ie.init(),vt=new oy(D,ie),C=new u_(D,ie,t,vt),v=new ry(D,ie),C.reversedDepthBuffer&&f&&v.buffers.depth.setReversed(!0),z=D.createFramebuffer(),L=D.createFramebuffer(),B=D.createFramebuffer(),k=new E_(D),X=new Xx,$=new ay(D,ie,v,X,C,vt,k),ct=new v_(R),ft=new Tm(D),Tt=new c_(D,ft),Q=new S_(D,ft,k,Tt),nt=new T_(D,Q,ft,Tt,k),F=new w_(D,C,$),Ft=new d_(X),_t=new Wx(R,ct,ie,C,Tt,Ft),Ut=new uy(R,X),Mt=new Yx,xt=new Qx(ie),Kt=new l_(R,ct,v,nt,p,l),Gt=new sy(R,nt,C),it=new dy(D,k,C,v),yt=new h_(D,ie,k),et=new b_(D,ie,k),k.programs=_t.programs,R.capabilities=C,R.extensions=ie,R.properties=X,R.renderLists=Mt,R.shadowMap=Gt,R.state=v,R.info=k}_!==cn&&(S=new R_(_,e.width,e.height,o,s,r));let Lt=new _h(R,D);this.xr=Lt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let E=ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize(kt,q,!1))},this.getSize=function(E){return E.set(kt,q)},this.setSize=function(E,U,Y=!0){if(Lt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}kt=E,q=U,e.width=Math.floor(E*j),e.height=Math.floor(U*j),Y===!0&&(e.style.width=E+"px",e.style.height=U+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(kt*j,q*j).floor()},this.setDrawingBufferSize=function(E,U,Y){kt=E,q=U,j=Y,e.width=Math.floor(E*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(_===cn){Wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(wt)},this.setViewport=function(E,U,Y,G){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,U,Y,G),v.viewport(J.copy(wt).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(Ht)},this.setScissor=function(E,U,Y,G){E.isVector4?Ht.set(E.x,E.y,E.z,E.w):Ht.set(E,U,Y,G),v.scissor(lt.copy(Ht).multiplyScalar(j).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){v.setScissorTest(ce=E)},this.setOpaqueSort=function(E){ut=E},this.setTransparentSort=function(E){Nt=E},this.getClearColor=function(E){return E.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,Y=!0){let G=0;if(E){let W=!1;if(K!==null){let Et=K.texture.format;W=g.has(Et)}if(W){let Et=K.texture.type,Ct=m.has(Et),bt=Kt.getClearColor(),It=Kt.getClearAlpha(),Dt=bt.r,Qt=bt.g,se=bt.b;Ct?(M[0]=Dt,M[1]=Qt,M[2]=se,M[3]=It,D.clearBufferuiv(D.COLOR,0,M)):(b[0]=Dt,b[1]=Qt,b[2]=se,b[3]=It,D.clearBufferiv(D.COLOR,0,b))}else G|=D.COLOR_BUFFER_BIT}U&&(G|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",fe,!1),e.removeEventListener("webglcontextcreationerror",An,!1),Kt.dispose(),Mt.dispose(),xt.dispose(),X.dispose(),ct.dispose(),nt.dispose(),Tt.dispose(),it.dispose(),_t.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Vh),Lt.removeEventListener("sessionend",Gh),Yi.stop()};function Me(E){E.preventDefault(),Rr("WebGLRenderer: Context Lost."),P=!0}function fe(){Rr("WebGLRenderer: Context Restored."),P=!1;let E=k.autoReset,U=Gt.enabled,Y=Gt.autoUpdate,G=Gt.needsUpdate,W=Gt.type;Ot(),k.autoReset=E,Gt.enabled=U,Gt.autoUpdate=Y,Gt.needsUpdate=G,Gt.type=W}function An(E){Wt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Wn(E){let U=E.target;U.removeEventListener("dispose",Wn),zf(U)}function zf(E){kf(E),X.remove(E)}function kf(E){let U=X.get(E).programs;U!==void 0&&(U.forEach(function(Y){_t.releaseProgram(Y)}),E.isShaderMaterial&&_t.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Y,G,W,Et){U===null&&(U=zt);let Ct=W.isMesh&&W.matrixWorld.determinantAffine()<0,bt=Gf(E,U,Y,G,W);v.setMaterial(G,Ct);let It=Y.index,Dt=1;if(G.wireframe===!0){if(It=Q.getWireframeAttribute(Y),It===void 0)return;Dt=2}let Qt=Y.drawRange,se=Y.attributes.position,Pt=Qt.start*Dt,pe=(Qt.start+Qt.count)*Dt;Et!==null&&(Pt=Math.max(Pt,Et.start*Dt),pe=Math.min(pe,(Et.start+Et.count)*Dt)),It!==null?(Pt=Math.max(Pt,0),pe=Math.min(pe,It.count)):se!=null&&(Pt=Math.max(Pt,0),pe=Math.min(pe,se.count));let Le=pe-Pt;if(Le<0||Le===1/0)return;Tt.setup(W,G,bt,Y,It);let be,ye=yt;if(It!==null&&(be=ft.get(It),ye=et,ye.setIndex(be)),W.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*Jt()),ye.setMode(D.LINES)):ye.setMode(D.TRIANGLES);else if(W.isLine){let We=G.linewidth;We===void 0&&(We=1),v.setLineWidth(We*Jt()),W.isLineSegments?ye.setMode(D.LINES):W.isLineLoop?ye.setMode(D.LINE_LOOP):ye.setMode(D.LINE_STRIP)}else W.isPoints?ye.setMode(D.POINTS):W.isSprite&&ye.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))ye.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let We=W._multiDrawStarts,Rt=W._multiDrawCounts,Ke=W._multiDrawCount,oe=It?ft.get(It).bytesPerElement:1,xn=X.get(G).currentProgram.getUniforms();for(let Xn=0;Xn<Ke;Xn++)xn.setValue(D,"_gl_DrawID",Xn),ye.render(We[Xn]/oe,Rt[Xn])}else if(W.isInstancedMesh)ye.renderInstances(Pt,Le,W.count);else if(Y.isInstancedBufferGeometry){let We=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Rt=Math.min(Y.instanceCount,We);ye.renderInstances(Pt,Le,Rt)}else ye.render(Pt,Le)};function Hh(E,U,Y,G){O!==null&&E.isNodeMaterial&&O.setObject(G,E),st===!0&&Ft.setState(E,Y,!1),E.transparent===!0&&E.side===Ce&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,ya(E,U,G),E.side=ki,E.needsUpdate=!0,ya(E,U,G),E.side=Ce):ya(E,U,G)}this.compile=function(E,U,Y=null){Y===null&&(Y=E),O!==null&&O.renderStart(E,U,Y),T=xt.get(Y),T.init(U),x.push(T),Y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),E!==Y&&E.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),rt=this.localClippingEnabled,st=Ft.init(this.clippingPlanes,rt),st===!0&&Ft.setGlobalState(this.clippingPlanes,U),O!==null&&Gt.render(T.state.shadowsArray,Y,U);let G=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Et=W.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){let bt=Et[Ct];Hh(bt,Y,U,W),G.add(bt)}else Hh(Et,Y,U,W),G.add(Et)}),T=x.pop(),O!==null&&O.renderEnd(),G},this.compileAsync=function(E,U,Y=null){let G=this.compile(E,U,Y);return new Promise(W=>{function Et(){if(G.forEach(function(Ct){let It=X.get(Ct).currentProgram;(It===void 0||It.isReady())&&G.delete(Ct)}),G.size===0){W(E);return}setTimeout(Et,10)}ie.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let zl=null;function Hf(E){zl&&zl(E)}function Vh(){Yi.stop()}function Gh(){Yi.start()}let Yi=new Wd;Yi.setAnimationLoop(Hf),typeof self<"u"&&Yi.setContext(self),this.setAnimationLoop=function(E){zl=E,Lt.setAnimationLoop(E),E===null?Yi.stop():Yi.start()},Lt.addEventListener("sessionstart",Vh),Lt.addEventListener("sessionend",Gh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){Wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;O!==null&&O.renderStart(E,U);let Y=Lt.enabled===!0&&Lt.isPresenting===!0,G=S!==null&&(K===null||Y)&&S.begin(R,K);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(U),U=Lt.getCamera()),E.isScene===!0&&E.onBeforeRender(R,E,U,K),T=xt.get(E,x.length),T.init(U),T.state.textureUnits=$.getTextureUnits(),x.push(T),at.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(at,Ln,U.reversedDepth),rt=this.localClippingEnabled,st=Ft.init(this.clippingPlanes,rt),w=Mt.get(E,A.length),w.init(),A.push(w),Lt.enabled===!0&&Lt.isPresenting===!0){let Ct=R.xr.getDepthSensingMesh();Ct!==null&&kl(Ct,U,-1/0,R.sortObjects)}kl(E,U,0,R.sortObjects),w.finish(),O!==null&&O.updateLights(T.state.lightsArray),R.sortObjects===!0&&w.sort(ut,Nt),qt=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,qt&&Kt.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&Ft.beginShadows();let W=T.state.shadowsArray;if(Gt.render(W,E,U),st===!0&&Ft.endShadows(),(G&&S.hasRenderPass())===!1){let Ct=w.opaque,bt=w.transmissive;if(T.setupLights(),U.isArrayCamera){let It=U.cameras;if(bt.length>0)for(let Dt=0,Qt=It.length;Dt<Qt;Dt++){let se=It[Dt];Xh(Ct,bt,E,se)}qt&&Kt.render(E);for(let Dt=0,Qt=It.length;Dt<Qt;Dt++){let se=It[Dt];Wh(w,E,se,se.viewport)}}else bt.length>0&&Xh(Ct,bt,E,U),qt&&Kt.render(E),Wh(w,E,U)}K!==null&&H===0&&($.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K)),G&&S.end(R),E.isScene===!0&&E.onAfterRender(R,E,U),Tt.resetDefaultState(),V=-1,Z=null,x.pop(),x.length>0?(T=x[x.length-1],$.setTextureUnits(T.state.textureUnits),st===!0&&Ft.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?w=A[A.length-1]:w=null,O!==null&&O.renderEnd()};function kl(E,U,Y,G){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(tt)){G&&Vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(at);let Ct=nt.update(E),bt=E.material;bt.visible&&w.push(E,Ct,bt,Y,Vt.z,null,U)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(tt))){let Ct=nt.update(E),bt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Vt.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Vt.copy(Ct.boundingSphere.center)),Vt.applyMatrix4(E.matrixWorld).applyMatrix4(at)),Array.isArray(bt)){let It=Ct.groups;for(let Dt=0,Qt=It.length;Dt<Qt;Dt++){let se=It[Dt],Pt=bt[se.materialIndex];Pt&&Pt.visible&&w.push(E,Ct,Pt,Y,Vt.z,se,U)}}else bt.visible&&w.push(E,Ct,bt,Y,Vt.z,null,U)}}let Et=E.children;for(let Ct=0,bt=Et.length;Ct<bt;Ct++)kl(Et[Ct],U,Y,G)}function Wh(E,U,Y,G){let{opaque:W,transmissive:Et,transparent:Ct}=E;T.setupLightsView(Y),st===!0&&Ft.setGlobalState(R.clippingPlanes,Y),G&&v.viewport(J.copy(G)),W.length>0&&xa(W,U,Y),Et.length>0&&xa(Et,U,Y),Ct.length>0&&xa(Ct,U,Y),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Xh(E,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){let Pt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new ln(1,1,{generateMipmaps:!0,type:Pt?On:cn,minFilter:Vi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let Et=T.state.transmissionRenderTarget[G.id],Ct=G.viewport||J;Et.setSize(Ct.z*R.transmissionResolutionScale,Ct.w*R.transmissionResolutionScale);let bt=R.getRenderTarget(),It=R.getActiveCubeFace(),Dt=R.getActiveMipmapLevel();R.setRenderTarget(Et),R.getClearColor(At),pt=R.getClearAlpha(),pt<1&&R.setClearColor(16777215,.5),R.clear(),qt&&Kt.render(Y);let Qt=R.toneMapping;R.toneMapping=Un;let se=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),st===!0&&Ft.setGlobalState(R.clippingPlanes,G),xa(E,Y,G),$.updateMultisampleRenderTarget(Et),$.updateRenderTargetMipmap(Et),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let pe=0,Le=U.length;pe<Le;pe++){let be=U[pe],{object:ye,geometry:We,material:Rt,group:Ke}=be;if(Rt.side===Ce&&ye.layers.test(G.layers)){let oe=Rt.side;Rt.side=rn,Rt.needsUpdate=!0,qh(ye,Y,G,We,Rt,Ke),Rt.side=oe,Rt.needsUpdate=!0,Pt=!0}}Pt===!0&&($.updateMultisampleRenderTarget(Et),$.updateRenderTargetMipmap(Et))}R.setRenderTarget(bt,It,Dt),R.setClearColor(At,pt),se!==void 0&&(G.viewport=se),R.toneMapping=Qt}function xa(E,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,Et=E.length;W<Et;W++){let Ct=E[W],{object:bt,geometry:It,group:Dt}=Ct,Qt=Ct.material;Qt.allowOverride===!0&&G!==null&&(Qt=G),bt.layers.test(Y.layers)&&qh(bt,U,Y,It,Qt,Dt)}}function qh(E,U,Y,G,W,Et){O!==null&&W.isNodeMaterial&&O.setObject(E,W),E.onBeforeRender(R,U,Y,G,W,Et),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(R,U,Y,G,E,Et),W.transparent===!0&&W.side===Ce&&W.forceSinglePass===!1?(W.side=rn,W.needsUpdate=!0,R.renderBufferDirect(Y,U,G,W,E,Et),W.side=ki,W.needsUpdate=!0,R.renderBufferDirect(Y,U,G,W,E,Et),W.side=Ce):R.renderBufferDirect(Y,U,G,W,E,Et),E.onAfterRender(R,U,Y,G,W,Et)}function ya(E,U,Y){U.isScene!==!0&&(U=zt);let G=X.get(E),W=T.state.lights,Et=T.state.shadowsArray,Ct=W.state.version,bt=_t.getParameters(E,W.state,Et,U,Y,T.state.lightProbeGridArray),It=_t.getProgramCacheKey(bt),Dt=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Qt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=ct.get(E.envMap||G.environment,Qt),G.envMapRotation=G.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Dt===void 0&&(E.addEventListener("dispose",Wn),Dt=new Map,G.programs=Dt);let se=Dt.get(It);if(se!==void 0){if(G.currentProgram===se&&G.lightsStateVersion===Ct)return Zh(E,bt),se}else bt.uniforms=_t.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,Y,bt),E.onBeforeCompile(bt,R),se=_t.acquireProgram(bt,It),Dt.set(It,se),G.uniforms=bt.uniforms;let Pt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=Ft.uniform),Zh(E,bt),G.needsLights=Xf(E),G.lightsStateVersion=Ct,G.needsLights&&(Pt.ambientLightColor.value=W.state.ambient,Pt.lightProbe.value=W.state.probe,Pt.sunLights.value=W.state.sun,Pt.sunLightShadows.value=W.state.sunShadow,Pt.directionalLights.value=W.state.directional,Pt.directionalLightShadows.value=W.state.directionalShadow,Pt.spotLights.value=W.state.spot,Pt.spotLightShadows.value=W.state.spotShadow,Pt.rectAreaLights.value=W.state.rectArea,Pt.ltc_1.value=W.state.rectAreaLTC1,Pt.ltc_2.value=W.state.rectAreaLTC2,Pt.pointLights.value=W.state.point,Pt.pointLightShadows.value=W.state.pointShadow,Pt.hemisphereLights.value=W.state.hemi,Pt.sunShadowMatrix.value=W.state.sunShadowMatrix,Pt.sunShadowCascade.value=W.state.sunShadowCascade,Pt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Pt.spotLightMatrix.value=W.state.spotLightMatrix,Pt.spotLightMap.value=W.state.spotLightMap,Pt.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=se,G.uniformsList=null,se}function Yh(E){if(E.uniformsList===null){let U=E.currentProgram.getUniforms();E.uniformsList=nr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Zh(E,U){let Y=X.get(E);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Vf(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let Y=0,G=E.length;Y<G;Y++){let W=E[Y];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Gf(E,U,Y,G,W){U.isScene!==!0&&(U=zt),$.resetTextureUnits();let Et=U.fog,Ct=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,bt=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:re.workingColorSpace,It=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Dt=ct.get(G.envMap||Ct,It),Qt=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,se=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pt=!!Y.morphAttributes.position,pe=!!Y.morphAttributes.normal,Le=!!Y.morphAttributes.color,be=Un;G.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(be=R.toneMapping);let ye=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,We=ye!==void 0?ye.length:0,Rt=X.get(G),Ke=T.state.lights;if(st===!0&&(rt===!0||E!==Z)){let Se=E===Z&&G.id===V;Ft.setState(G,E,Se)}let oe=!1;G.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Ke.state.version||Rt.outputColorSpace!==bt||W.isBatchedMesh&&Rt.batching===!1||!W.isBatchedMesh&&Rt.batching===!0||W.isBatchedMesh&&Rt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Rt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Rt.instancing===!1||!W.isInstancedMesh&&Rt.instancing===!0||W.isSkinnedMesh&&Rt.skinning===!1||!W.isSkinnedMesh&&Rt.skinning===!0||W.isInstancedMesh&&Rt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Rt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Rt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Rt.instancingMorph===!1&&W.morphTexture!==null||Rt.envMap!==Dt||G.fog===!0&&Rt.fog!==Et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ft.numPlanes||Rt.numIntersection!==Ft.numIntersection)||Rt.vertexAlphas!==Qt||Rt.vertexTangents!==se||Rt.morphTargets!==Pt||Rt.morphNormals!==pe||Rt.morphColors!==Le||Rt.toneMapping!==be||Rt.morphTargetsCount!==We||!!Rt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Rt.__version=G.version);let xn=Rt.currentProgram;oe===!0&&(xn=ya(G,U,W),O&&G.isNodeMaterial&&O.onUpdateProgram(G,xn,Rt));let Xn=!1,wi=!1,gs=!1,_e=xn.getUniforms(),Ie=Rt.uniforms;if(v.useProgram(xn.program)&&(Xn=!0,wi=!0,gs=!0),G.id!==V&&(V=G.id,wi=!0),Rt.needsLights){let Se=Vf(T.state.lightProbeGridArray,W);Rt.lightProbeGrid!==Se&&(Rt.lightProbeGrid=Se,wi=!0)}if(Xn||Z!==E){v.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),_e.setValue(D,"projectionMatrix",E.projectionMatrix),_e.setValue(D,"viewMatrix",E.matrixWorldInverse);let Ai=_e.map.cameraPosition;Ai!==void 0&&Ai.setValue(D,dt.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&_e.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_e.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,wi=!0,gs=!0)}if(Rt.needsLights&&(Ke.state.sunShadowMap.length>0&&_e.setValue(D,"sunShadowMap",Ke.state.sunShadowMap,$),Ke.state.directionalShadowMap.length>0&&_e.setValue(D,"directionalShadowMap",Ke.state.directionalShadowMap,$),Ke.state.spotShadowMap.length>0&&_e.setValue(D,"spotShadowMap",Ke.state.spotShadowMap,$),Ke.state.pointShadowMap.length>0&&_e.setValue(D,"pointShadowMap",Ke.state.pointShadowMap,$)),W.isSkinnedMesh){_e.setOptional(D,W,"bindMatrix"),_e.setOptional(D,W,"bindMatrixInverse");let Se=W.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),_e.setValue(D,"boneTexture",Se.boneTexture,$))}W.isBatchedMesh&&(_e.setOptional(D,W,"batchingTexture"),_e.setValue(D,"batchingTexture",W._matricesTexture,$),_e.setOptional(D,W,"batchingIdTexture"),_e.setValue(D,"batchingIdTexture",W._indirectTexture,$),_e.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&_e.setValue(D,"batchingColorTexture",W._colorsTexture,$));let Ti=Y.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&F.update(W,Y,xn),(wi||Rt.receiveShadow!==W.receiveShadow)&&(Rt.receiveShadow=W.receiveShadow,_e.setValue(D,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Ie.envMapIntensity.value=U.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=py()),wi){if(_e.setValue(D,"toneMappingExposure",R.toneMappingExposure),Rt.needsLights&&Wf(Ie,gs),Et&&G.fog===!0&&Ut.refreshFogUniforms(Ie,Et),Ut.refreshMaterialUniforms(Ie,G,j,q,T.state.transmissionRenderTarget[E.id]),Rt.needsLights&&Rt.lightProbeGrid){let Se=Rt.lightProbeGrid;Ie.probesSH.value=Se.texture,Ie.probesMin.value.copy(Se.boundingBox.min),Ie.probesMax.value.copy(Se.boundingBox.max),Ie.probesResolution.value.copy(Se.resolution)}nr.upload(D,Yh(Rt),Ie,$)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(nr.upload(D,Yh(Rt),Ie,$),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_e.setValue(D,"center",W.center),_e.setValue(D,"modelViewMatrix",W.modelViewMatrix),_e.setValue(D,"normalMatrix",W.normalMatrix),_e.setValue(D,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Se=G.uniformsGroups;for(let Ai=0,_s=Se.length;Ai<_s;Ai++){let $h=Se[Ai];it.update($h,xn),it.bind($h,xn)}}return xn}function Wf(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Xf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(E,U,Y){let G=X.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=U,X.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){let Y=X.get(E);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,Y=0){K=E,N=U,H=Y;let G=null,W=!1,Et=!1;if(E){let bt=X.get(E);if(bt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(D.FRAMEBUFFER,bt.__webglFramebuffer),J.copy(E.viewport),lt.copy(E.scissor),ht=E.scissorTest,v.viewport(J),v.scissor(lt),v.setScissorTest(ht),V=-1;return}else if(bt.__webglFramebuffer===void 0)$.setupRenderTarget(E);else if(bt.__hasExternalTextures)$.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Qt=E.depthTexture;if(bt.__boundDepthTexture!==Qt){if(Qt!==null&&X.has(Qt)&&(E.width!==Qt.image.width||E.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(E)}}let It=E.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);let Dt=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Dt[U])?G=Dt[U][Y]:G=Dt[U],W=!0):E.samples>0&&$.useMultisampledRTT(E)===!1?G=X.get(E).__webglMultisampledFramebuffer:Array.isArray(Dt)?G=Dt[Y]:G=Dt,J.copy(E.viewport),lt.copy(E.scissor),ht=E.scissorTest}else J.copy(wt).multiplyScalar(j).floor(),lt.copy(Ht).multiplyScalar(j).floor(),ht=ce;if(Y!==0&&(G=z),v.bindFramebuffer(D.FRAMEBUFFER,G)&&v.drawBuffers(E,G),v.viewport(J),v.scissor(lt),v.setScissorTest(ht),W){let bt=X.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,Y)}else if(Et){let bt=U;for(let It=0;It<E.textures.length;It++){let Dt=X.get(E.textures[It]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+It,Dt.__webglTexture,Y,bt)}}else if(E!==null&&Y!==0){let bt=X.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,bt.__webglTexture,Y)}V=-1};function Jh(E){let U=X.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=C.textureFormatReadable(E.format),U.__typeReadable=C.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,Y,G,W,Et,Ct,bt=0){if(!(E&&E.isWebGLRenderTarget)){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){v.bindFramebuffer(D.FRAMEBUFFER,It);try{let Dt=E.textures[bt],Qt=Dt.format,se=Dt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt);let Pt=Jh(Dt);if(Pt.__formatReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-G&&Y>=0&&Y<=E.height-W&&D.readPixels(U,Y,G,W,vt.convert(Qt),vt.convert(se),Et)}finally{let Dt=K!==null?X.get(K).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,U,Y,G,W,Et,Ct,bt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(U>=0&&U<=E.width-G&&Y>=0&&Y<=E.height-W){v.bindFramebuffer(D.FRAMEBUFFER,It);let Dt=E.textures[bt],Qt=Dt.format,se=Dt.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+bt);let Pt=Jh(Dt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,pe),D.bufferData(D.PIXEL_PACK_BUFFER,Et.byteLength,D.STREAM_READ),D.readPixels(U,Y,G,W,vt.convert(Qt),vt.convert(se),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Le=K!==null?X.get(K).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Le);let be=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await dd(D,be,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Et),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(pe),D.deleteSync(be),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(E.image.width*G),Et=Math.floor(E.image.height*G),Ct=U!==null?U.x:0,bt=U!==null?U.y:0;$.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Ct,bt,W,Et),v.unbindTexture()},this.copyTextureToTexture=function(E,U,Y=null,G=null,W=0,Et=0){let Ct,bt,It,Dt,Qt,se,Pt,pe,Le,be=E.isCompressedTexture?E.mipmaps[Et]:E.image;if(Y!==null)Ct=Y.max.x-Y.min.x,bt=Y.max.y-Y.min.y,It=Y.isBox3?Y.max.z-Y.min.z:1,Dt=Y.min.x,Qt=Y.min.y,se=Y.isBox3?Y.min.z:0;else{let Ie=Math.pow(2,-W);Ct=Math.floor(be.width*Ie),bt=Math.floor(be.height*Ie),E.isDataArrayTexture?It=be.depth:E.isData3DTexture?It=Math.floor(be.depth*Ie):It=1,Dt=0,Qt=0,se=0}G!==null?(Pt=G.x,pe=G.y,Le=G.z):(Pt=0,pe=0,Le=0);let ye=vt.convert(U.format),We=vt.convert(U.type),Rt;U.isData3DTexture?($.setTexture3D(U,0),Rt=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),Rt=D.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),Rt=D.TEXTURE_2D),v.activeTexture(D.TEXTURE0),v.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),v.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),v.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let Ke=v.getParameter(D.UNPACK_ROW_LENGTH),oe=v.getParameter(D.UNPACK_IMAGE_HEIGHT),xn=v.getParameter(D.UNPACK_SKIP_PIXELS),Xn=v.getParameter(D.UNPACK_SKIP_ROWS),wi=v.getParameter(D.UNPACK_SKIP_IMAGES);v.pixelStorei(D.UNPACK_ROW_LENGTH,be.width),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be.height),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Dt),v.pixelStorei(D.UNPACK_SKIP_ROWS,Qt),v.pixelStorei(D.UNPACK_SKIP_IMAGES,se);let gs=E.isDataArrayTexture||E.isData3DTexture,_e=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){let Ie=X.get(E),Ti=X.get(U),Se=X.get(Ie.__renderTarget),Ai=X.get(Ti.__renderTarget);v.bindFramebuffer(D.READ_FRAMEBUFFER,Se.__webglFramebuffer),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let _s=0;_s<It;_s++)gs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(E).__webglTexture,W,se+_s),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,X.get(U).__webglTexture,Et,Le+_s)),D.blitFramebuffer(Dt,Qt,Ct,bt,Pt,pe,Ct,bt,D.DEPTH_BUFFER_BIT,D.NEAREST);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||X.has(E)){let Ie=X.get(E),Ti=X.get(U);v.bindFramebuffer(D.READ_FRAMEBUFFER,L),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,B);for(let Se=0;Se<It;Se++)gs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ie.__webglTexture,W,se+Se):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ie.__webglTexture,W),_e?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ti.__webglTexture,Et,Le+Se):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ti.__webglTexture,Et),W!==0?D.blitFramebuffer(Dt,Qt,Ct,bt,Pt,pe,Ct,bt,D.COLOR_BUFFER_BIT,D.NEAREST):_e?D.copyTexSubImage3D(Rt,Et,Pt,pe,Le+Se,Dt,Qt,Ct,bt):D.copyTexSubImage2D(Rt,Et,Pt,pe,Dt,Qt,Ct,bt);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else _e?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Rt,Et,Pt,pe,Le,Ct,bt,It,ye,We,be.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,Et,Pt,pe,Le,Ct,bt,It,ye,be.data):D.texSubImage3D(Rt,Et,Pt,pe,Le,Ct,bt,It,ye,We,be):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Et,Pt,pe,Ct,bt,ye,We,be.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Et,Pt,pe,be.width,be.height,ye,be.data):D.texSubImage2D(D.TEXTURE_2D,Et,Pt,pe,Ct,bt,ye,We,be);v.pixelStorei(D.UNPACK_ROW_LENGTH,Ke),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,oe),v.pixelStorei(D.UNPACK_SKIP_PIXELS,xn),v.pixelStorei(D.UNPACK_SKIP_ROWS,Xn),v.pixelStorei(D.UNPACK_SKIP_IMAGES,wi),Et===0&&U.generateMipmaps&&D.generateMipmap(Rt),v.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&$.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?$.setTextureCube(E,0):E.isData3DTexture?$.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?$.setTexture2DArray(E,0):$.setTexture2D(E,0),v.unbindTexture()},this.resetState=function(){N=0,H=0,K=null,v.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};function jd(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new ve,c=0;for(let u=0;u<i.length;++u){let d=i[u],f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let h in d.attributes){if(!n.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+h+'" attribute exists among all geometries, or in none of them.'),null;r[h]===void 0&&(r[h]=[]),r[h].push(d.attributes[h]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let h in d.morphAttributes){if(!s.has(h))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[h]===void 0&&(a[h]=[]),a[h].push(d.morphAttributes[h])}if(t){let h;if(e)h=d.index.count;else if(d.attributes.position!==void 0)h=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,h,u),c+=h}}if(e){let u=0,d=[];for(let f=0;f<i.length;++f){let h=i[f].index;for(let p=0;p<h.count;++p)d.push(h.getX(p)+u);u+=i[f].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Kd(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<d;++f){let h=[];for(let _=0;_<a[u].length;++_)h.push(a[u][_][f]);let p=Kd(h);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Kd(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new ke(a,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let f=0,h=u.count;f<h;f++)for(let p=0;p<e;p++){let _=u.getComponent(f,p);o.setComponent(f+d,p,_)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var my=Math.PI*2,gy=(i,t,e)=>i+(t-i)*e,Qd=(i,t,e)=>i.map((n,s)=>gy(n,t[s],e)),xh=1.65,yh=1.18;function _y(i,t=!1){let e=(i/my%1+1)%1,n=t?.66:.62,s=t?yh:xh,r=s*n;if(e<n)return{z:r/2-s*e,lift:0,pitch:0};let a=(e-n)/(1-n),o=a*a*(3-2*a);return{z:-r/2+r*o,lift:Math.sin(Math.PI*a)*(t?.095:.145),pitch:-Math.sin(Math.PI*a)*(t?.065:.16)}}function vh(i=0,t=0,e=0,n=0,s=!1,r=!1){let a={position:[0,-.035,0],rotation:[0,0,0],torso:[0,0,0],head:[0,0,0],hands:[[-.49,1.27,.05],[.49,1.27,.05]],feet:[[-.155,0,0,0],[.155,0,0,0]]},o=c=>[c*.33,1.78,.17];if(t===1&&(a.position[0]=.045,a.torso=[0,.16,-.055],a.head=[-.025,-.1,-.06],a.hands[1]=o(1),a.feet[0]=[-.12,0,.22,0]),t===2&&(a.hands[0]=[-.65,2.96,.12+Math.sin(i*3)*.035],a.head=[0,-.1,.05],a.torso[2]=-.025),t===3&&(a.hands=[[-1.05,2.61,.12],[1.05,2.61,.12]],a.feet=[[-.25,0,0,0],[.25,0,0,0]],a.head[0]=-.045),t===4&&(a.hands=[[-.065,1.98,.59],[.065,1.98,.59]],a.head[2]=-.065),t===5&&(a.rotation[1]=i*.75,a.hands=[[-1.12,2.1,.06],[1.12,2.1,.06]],a.head[0]=-.04,a.feet[0]=[-.13,.025,.24,.09]),t===6&&(a.position[1]=-.135,a.torso[0]=.1,a.hands=[[-.62,1.39,.03],[.62,1.39,.03]],a.feet=[[-.1,0,.21,0],[.18,0,-.24,0]]),t===7&&(a.hands=[o(-1),o(1)],a.feet=[[-.27,0,0,0],[.27,0,0,0]],a.torso[1]=.08,a.head[0]=-.07),t===8&&(a.position[0]=.065,a.rotation[1]=-.22,a.torso=[0,.28,-.06],a.head=[-.035,-.1,-.075],a.hands[1]=o(1),a.feet=[[-.045,0,.32,0],[.16,0,-.12,0]]),t===9&&(a.position[0]=-.065,a.rotation[1]=.16,a.torso=[-.025,-.25,.06],a.head=[-.055,.12,.04],a.hands=[[-.22,2.3,.3],o(1)],a.feet=[[-.16,0,-.12,0],[.055,0,.31,0]]),t===10&&(a.rotation[1]=-.92,a.torso=[0,-.2,-.03],a.head=[0,.83,-.06],a.hands[1]=[.32,1.77,-.1],a.feet=[[-.2,0,-.18,0],[.18,0,.24,0]]),t===11&&(a.rotation[1]=.23,a.torso=[0,-.23,.045],a.head=[-.04,0,-.04],a.feet=[[-.12,0,-.2,0],[-.045,0,.4,0]],a.hands=[[-.65,1.46,.18],[.37,1.8,.21]]),t===12&&(a.position[0]=-.04,a.hands=[[-.39,2.78,.43],o(1)],a.head=[.035,-.12,.12],a.torso=[0,.17,.035],a.feet[1]=[.12,0,.28,0]),t===13&&(a.rotation[1]=-.16,a.hands=[o(-1),[.55,1.34,.2]],a.feet=[[-.27,0,-.08,0],[.27,0,.16,0]],a.torso=[-.025,.2,-.055],a.head=[-.07,0,.04]),t===14&&(a.position[0]=-.075,a.feet=[[-.17,0,0,0],[.42,.07,.26,.28]],a.hands=[o(-1),[.77,1.65,.1]],a.torso=[0,-.12,.06],a.head=[-.025,.15,-.06]),t===15&&(a.rotation[1]=-.2,a.hands=[o(-1),[.75,2.97,.07]],a.torso=[-.02,.24,-.075],a.head=[-.06,-.08,-.045],a.feet=[[-.15,0,-.13,0],[.07,0,.33,0]]),!n)return a;let l={position:[Math.sin(e)*.018,-.12+(1-Math.cos(e*2))*.006,0],rotation:[0,0,0],torso:[.018,-Math.sin(e)*.055,Math.sin(e)*.022],head:[0,Math.sin(e)*.035,-Math.sin(e)*.013],hands:[],feet:[]};r&&(l.position=[Math.sin(e)*.026,-.073+(1-Math.cos(e*2))*.004,0],l.torso=[-.012,-Math.sin(e)*.075,Math.sin(e)*.026]);for(let c=0;c<2;c++){let u=c?1:-1,d=_y(e+c*Math.PI,r);l.feet.push([u*(r?.115:s?.11:.155),d.lift,d.z,d.pitch]),l.hands.push([u*.48,r?1.38:1.29+Math.sin(e+c*Math.PI)*.016,-Math.cos(e+c*Math.PI)*(r?.14:.24)+.06])}for(let c of["position","torso","head"])a[c]=Qd(a[c],l[c],n);a.rotation=a.rotation.map((c,u)=>c+Math.atan2(Math.sin(l.rotation[u]-c),Math.cos(l.rotation[u]-c))*n);for(let c of["hands","feet"])a[c]=a[c].map((u,d)=>Qd(u,l[c][d],n));return a}var Mh=i=>Math.max(0,Math.min(1,i)),ua=i=>{let t=Mh(i);return t*t*(3-2*t)},hs=(i,t,e)=>i+(t-i)*e,xy=(i,t,e)=>i+Math.atan2(Math.sin(t-i),Math.cos(t-i))*e,Tl={reach:1.05,dress:1.3,brush:2.25,hair:1.65},sr=class{constructor(){this.current=null,this.target=null,this.seat=null,this.elapsed=0,this.busy=!1}set(t,e,n,s=!1){t=t||null,t!==this.seat&&(this.seat=t,this.from={...this.current||{...e,yaw:n,blend:0,height:t?.height??.66}},this.target={x:t?.x??e.x,z:t?.z??e.z,yaw:t?.yaw??n,blend:t?1:0,height:t?.height??this.from.height},this.duration=s?0:t?1.15:.78,this.elapsed=0,this.busy=!!this.duration,s&&(this.current={...this.target}))}update(t,e,n){if(this.busy){this.elapsed+=Math.max(0,t);let s=Mh(this.elapsed/this.duration),r=!!this.seat,a=ua(r?s/.66:(s-.35)/.65),o=ua(r?(s-.25)/.75:s/.7);this.current={x:hs(this.from.x,this.target.x,a),z:hs(this.from.z,this.target.z,a),yaw:xy(this.from.yaw,this.target.yaw,ua(s/.65)),blend:hs(this.from.blend,this.target.blend,o),height:this.target.height},s===1&&(this.busy=!1,this.current={...this.target})}else this.seat||(this.current={...e,yaw:n,blend:0,height:this.current?.height??.66});return this.current||{...e,yaw:n,blend:0,height:.66}}};function tf(i,t){if(!t||!Tl[t.kind])return i;let e=Mh(t.progress),n=ua(e/.22)*(1-ua((e-.76)/.24));if(!n)return i;let s={...i,torso:[...i.torso],head:[...i.head],hands:i.hands.map(a=>[...a])},r;if(t.kind==="brush"){let a=t.tool==="sponge";r=[(a?.34:.41)+Math.sin(e*24)*.018,(a?2.68:2.64)+Math.cos(e*24)*.016,a?.24:.18],s.head[2]=hs(s.head[2],-.07,n)}else t.kind==="hair"?r=[.46,2.86,.1]:t.kind==="reach"?(r=[.55,1.94,.78],s.torso[0]=hs(s.torso[0],.055,n),s.head[1]=hs(s.head[1],-.1,n)):r=[.26,2.2,.34+Math.sin(e*12)*.025];return s.hands[1]=s.hands[1].map((a,o)=>hs(a,r[o],n)),s}var Al={oval:[1,1,1],round:[1.11,.9,1.02],heart:[1.04,1,1],square:[1.02,.96,1]};function Sh(i,t){let e=ue.clamp(-i.y/.525,0,1),n=ue.smoothstep(i.y,-.9,-.525);return t==="heart"&&(i.x*=1-.25*e*n),t==="square"&&(i.x*=1+.46*e*e*n),i}function ef(i,t="oval"){if(Object.hasOwn(Al,t)||(t="oval"),t==="heart"||t==="square"){i.updateWorldMatrix(!0,!0);let e=i.matrixWorld.clone().invert();i.traverse(n=>{if(!n.isMesh)return;let s=e.clone().multiply(n.matrixWorld),r=s.clone().invert(),a=n.geometry.attributes.position;for(let o=0;o<a.count;o++){let l=new I().fromBufferAttribute(a,o).applyMatrix4(s);Sh(l,t).applyMatrix4(r),a.setXYZ(o,l.x,l.y,l.z)}a.needsUpdate=!0,n.geometry.computeVertexNormals(),n.geometry.computeBoundingSphere()})}i.scale.set(...Al[t]),i.userData.headShape=t}function yy(i){let t=[],e=[];for(let n of i.points)n?e.push(n):e.length&&(t.push(e),e=[]);return e.length&&t.push(e),i.mirror?[...t,...t.map(n=>n.map(([s,r])=>[1-s,r]))]:t}function vy(i,t,e=512){i.clearRect(0,0,e,e),i.save(),i.lineCap="round",i.lineJoin="round";for(let n of t){i.globalCompositeOperation=n.tool==="eraser"?"destination-out":"source-over",i.globalAlpha=n.tool==="blush"?.28:1,i.strokeStyle=n.color,i.fillStyle=n.color,i.lineWidth=n.size*e;for(let s of yy(n))s.length===1?(i.beginPath(),i.arc(s[0][0]*e,s[0][1]*e,i.lineWidth/2,0,Math.PI*2),i.fill()):(i.beginPath(),s.forEach(([r,a],o)=>o?i.lineTo(r*e,a*e):i.moveTo(r*e,a*e)),i.stroke())}i.restore()}function nf(i,t=[]){let e=new nn(1,64,40,0,Math.PI),n=e.attributes.position,s=e.attributes.uv;for(let c=0;c<n.count;c++){let u=n.getX(c),d=n.getY(c),f=n.getZ(c);n.setXYZ(c,u*.424,d*.525,f*.375+.009),s.setXY(c,(u+1)/2,(d+1)/2)}e.computeVertexNormals(),e.computeBoundingSphere();let r=typeof document>"u"?null:document.createElement("canvas");r&&(r.width=512,r.height=512);let a=r?new Mn(r):new Qi(new Uint8Array(4),1,1);a.colorSpace=xe;let o=new he(e,new Ze({map:a,transparent:!0,depthWrite:!1}));o.name="hand-drawn makeup",o.renderOrder=100,i.add(o);let l=c=>{r&&vy(r.getContext("2d"),c),a.needsUpdate=!0,o.userData.strokeCount=c.length};return l(t),{mesh:o,update:l}}var Eh=[[1.46,.31,.205],[1.58,.3,.195],[1.78,.255,.175],[1.99,.29,.19],[2.15,.335,.205],[2.23,.32,.185],[2.3,.13,.13]],J1=new I(0,1,0),My=new I(0,0,1),hn="#fff4df",kn=(i,t,e)=>new Bt(i).lerp(new Bt(t),e),gt=(i,t={})=>new sn({color:i,roughness:.76,metalness:0,...t});function Bn(i,t){let e=[...i].sort((n,s)=>n[0]-s[0]);if(t<=e[0][0])return e[0].slice(1);for(let n=1;n<e.length;n++)if(t<=e[n][0]){let s=e[n-1],r=e[n],a=(t-s[0])/(r[0]-s[0]);return[ue.lerp(s[1],r[1],a),ue.lerp(s[2],r[2],a)]}return e.at(-1).slice(1)}function sf(i,t=.02){return i.map(([e,n,s])=>[e,n+t,s+t])}function En(i,{pleats:t=0,segments:e=48,subdivisions:n=3}={}){let s=[];for(let c=0;c<i.length-1;c++)for(let u=0;u<n;u++){let d=u/n;s.push(i[c].map((f,h)=>ue.lerp(f,i[c+1][h],d)))}s.push(i.at(-1));let r=[],a=[],o=[];s.forEach(([c,u,d],f)=>{for(let h=0;h<=e;h++){let p=h/e*Math.PI*2,_=t*Math.cos(p*16)*(1-f/(s.length-1));if(r.push((u+_)*Math.sin(p),c,(d+_)*Math.cos(p)),o.push(h/e,f/(s.length-1)),f<s.length-1&&h<e){let g=f*(e+1)+h,m=g+e+1;a.push(g,g+1,m,g+1,m+1,m)}}});let l=new ve;return l.setAttribute("position",new jt(r,3)),l.setAttribute("uv",new jt(o,2)),l.setIndex(a),l.computeVertexNormals(),l.computeBoundingBox(),l}function ae(i,t,e,n,s=[0,0,0],r=[1,1,1]){let a=new he(e,n);return a.name=t,a.position.set(...s),a.scale.set(...r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function mt(i,t,e,n,s,r=20){return ae(i,t,new nn(1,r,Math.max(12,r/2)),e,n,s)}function $t(i,t,e=[0,0,0]){let n=new te;return n.name=t,n.position.set(...e),i.add(n),n}function ii(i,t,e,n,s,r){return ae(i,t,new zr(s,Math.max(.001,r-s*2),6,16),e,n)}function Yt(i,t,e,n,s,r=!1){return ae(i,t,new is(new Ui(e.map(a=>new I(...a)),r),Math.max(16,e.length*6),n,7,r),s)}function Te(i,t,e,n,s,r,a){return Yt(i,t,Array.from({length:24},(o,l)=>{let c=l/24*Math.PI*2;return[Math.sin(c)*n,e,Math.cos(c)*s]}),r,a,!0)}function da(i,t,e,n){for(let s=0;s<5;s++){let r=s*Math.PI*2/5,a=mt(i,"flower petal",e,[Math.sin(r)*t*.51,Math.cos(r)*t*.51,0],[t*.34,t*.5,t*.16],12);a.rotation.z=-r}mt(i,"flower center",n,[0,0,t*.15],[t*.29,t*.29,t*.2],12)}function zn(i,t,e){let n=new en;for(let s=0;s<10;s++){let r=s*Math.PI/5,a=s%2?t*.45:t,o=Math.sin(r)*a,l=Math.cos(r)*a;s?n.lineTo(o,l):n.moveTo(o,l)}n.closePath(),ae(i,"embroidered star",new pn(n,{depth:.005,bevelEnabled:!0,bevelThickness:.002,bevelSize:.002,bevelSegments:1,steps:1}),e)}function an(i,t,e,n){let s=$t(i,"ribbon bow",t);for(let r of[-1,1]){let a=mt(s,"ribbon loop",n,[r*e*.58,.015,0],[e*.65,e*.43,e*.22]);a.rotation.z=r*.3;let o=mt(s,"ribbon tail",n,[r*e*.35,-e*.65,-.005],[e*.17,e*.65,e*.1]);o.rotation.z=r*.3}return mt(s,"ribbon knot",n,[0,0,e*.1],[e*.23,e*.3,e*.27]),s}function rf(i){let t=new Set,e=new Set,n=new Set;i.traverse(s=>{if(s.geometry&&t.add(s.geometry),s.material)for(let r of[s.material].flat())e.add(r),r.map&&n.add(r.map)}),t.forEach(s=>s.dispose()),e.forEach(s=>s.dispose()),n.forEach(s=>s.dispose())}function af(i,t,e){let n=$t(i,"hair"),s=gt(e,{roughness:.68}),r=gt(kn(e,"#f2d4a2",.12)),a=[],o=[],l=48,c=18;for(let d=0;d<=c;d++)for(let f=0;f<=l;f++){let h=f/l*Math.PI*2,p=1.04+1.38*(1-Math.max(0,Math.cos(h))),_=d/c*p;if(a.push(.452*Math.sin(_)*Math.sin(h),.565*Math.cos(_)+.035,.407*Math.sin(_)*Math.cos(h)-.015),d<c&&f<l){let g=d*(l+1)+f,m=g+l+1;o.push(g,m,g+1,m,m+1,g+1)}}let u=new ve;if(u.setAttribute("position",new jt(a,3)),u.setIndex(o),u.computeVertexNormals(),ae(n,"fitted hair cap",u,s),t==="curls"){for(let d=0;d<4;d++)for(let f=0;f<13;f++){let h=f*Math.PI*2/13+d*.17;if(Math.cos(h)>.35&&d>=1)continue;let p=d===0?.33:.47;mt(n,"soft curl",s,[Math.sin(h)*p,.42-d*.25,Math.cos(h)*p*.8-.04],[.18,.2,.18],16)}for(let d=-2;d<=2;d++)mt(n,"forehead curl",s,[d*.14,.4-Math.abs(d)*.027,.28],[.12,.115,.13],16)}else{for(let d=0;d<5;d++)Yt(n,"side-swept fringe",[[-.39+d*.025,.18+d*.026,.22],[-.24+d*.04,.36+d*.023,.31],[.03+d*.03,.45+d*.015,.31],[.28+d*.02,.31+d*.01,.19]],.054,s);if(t==="waves"||t==="bob"||t==="straight")for(let d=0;d<12;d++){let f=.98+d/11*(Math.PI*2-1.96),h=Math.sin(f)*.39,p=Math.cos(f)*.33,_=t==="bob"?.46:t==="straight"?1.28:.98;Yt(n,"rounded hair lock",[[h*.8,.35,p],[h*1.12,-.12,p*1.15],[h*1.04,-_*.7,p*1.17],[h*1.19,-_,p*.97]],t==="bob"?.1:.079,s),d%3===0&&Yt(n,"hair highlight",[[h*.82,.29,p*1.13],[h*1.19,-.15,p*1.25],[h*1.12,-_*.84,p*1.28]],.009,r)}if(t==="buns")for(let d of[-1,1]){mt(n,"space bun",s,[d*.42,.43,-.06],[.24,.25,.22]);let f=Te(n,"bun ribbon",.4,.2,.2,.015,r);f.position.x=d*.42,f.position.z=-.06}if(t==="pony"){mt(n,"ponytail tie",gt("#dfacc1"),[.11,.4,-.38],[.14,.11,.12]);for(let d=0;d<6;d++)Yt(n,"ponytail strand",[[.1+d*.012,.43,-.37],[.39+d*.015,.26,-.46],[.43+d*.015,-.2,-.4],[.32+d*.019,-.83,-.4]],.083,s)}if(t==="braids")for(let d of[-1,1]){for(let f=0;f<3;f++){let h=Array.from({length:25},(p,_)=>{let g=_*.64+f*Math.PI*2/3;return[d*.38+Math.sin(g)*.046,-.16-_/24*.74,.07+Math.cos(g)*.046]});Yt(n,"woven braid",h,.041,s)}an(n,[d*.38,-.9,.1],.07,gt("#dfa6bd"))}if(t==="twintails")for(let d of[-1,1]){an(n,[d*.4,.29,-.04],.085,gt("#dfacc1"));for(let f=0;f<5;f++)Yt(n,"twin ponytail",[[d*.4,.28,-.06],[d*(.6+f*.017),-.1,-.08],[d*(.55+f*.016),-.68,-.05],[d*.44,-.98,-.12]],.071,s)}if(t==="topknot"){mt(n,"top knot",s,[0,.68,-.1],[.25,.24,.23]);for(let d=0;d<4;d++)Te(n,"bun wrap",.56+d*.07,.22-d*.015,.21-d*.015,.012,r).position.z=-.1;an(n,[0,.57,.12],.09,gt("#dba8b9"))}if(t==="puffs")for(let d of[-1,1]){mt(n,"round puff",s,[d*.48,.4,-.04],[.27,.28,.26]);for(let f=0;f<12;f++){let h=f/12*Math.PI*2;mt(n,"puff curl",s,[d*.48+Math.cos(h)*.21,.4+Math.sin(h)*.22,.11],[.1,.105,.1],12)}}if(t==="pixie")for(let d of[-1,1])Yt(n,"pixie side",[[d*.31,.31,.17],[d*.42,.08,.06],[d*.4,-.16,-.02]],.075,s);if(t==="sidebraid"){for(let d=0;d<3;d++)Yt(n,"long side braid",Array.from({length:30},(f,h)=>{let p=h*.67+d*Math.PI*2/3;return[.36+Math.sin(p)*.055,-.12-h/29*1.16,.14+Math.cos(p)*.055]}),.047,s);an(n,[.36,-1.27,.17],.085,gt("#dba8b9"))}}return n}function of(i,t,e){let n=gt("#fffdf5",{roughness:.38}),s=gt("#38292f"),r=gt("#765040",{roughness:.4});for(let a of[-1,1]){mt(i,"ear",t,[a*.422,-.03,-.005],[.065,.11,.069]);let o=$t(i,"eye",[a*.16,.057,.354]);o.rotation.y=a*.18,mt(o,"eye white",n,[0,0,0],[.087,.112,.037]),mt(o,"iris",r,[-a*.009,-.007,.032],[.048,.07,.018]),mt(o,"pupil",s,[-a*.009,-.006,.047],[.027,.048,.009]),mt(o,"eye sparkle",n,[-.016,.025,.054],[.018,.023,.008],12),Yt(o,"upper lash",[[-.085,.041,.008],[0,.103,.016],[.078,.059,.007]],.008,s),Yt(i,"eyebrow",[[a*.09,.225,.339],[a*.16,.246,.328],[a*.225,.222,.294]],.014,gt(e));let l=mt(i,"rosy cheek",gt("#dc8b8b",{transparent:!0,opacity:.27}),[a*.255,-.114,.298],[.064,.031,.012]);l.rotation.y=a*.45}mt(i,"button nose",t,[0,-.075,.378],[.05,.068,.067]),Yt(i,"smile",[[-.075,-.215,.333],[0,-.244,.354],[.075,-.215,.333]],.012,gt("#9b4f62")),Yt(i,"smile highlight",[[-.051,-.216,.346],[0,-.225,.36],[.05,-.216,.347]],.007,n)}function lf(i,t,e,n){for(let s of[-1,1]){let r=mt(i,"butterfly wing",e,[s*t*.43,t*.15,0],[t*.43,t*.55,t*.065],12);r.rotation.z=-s*.35,mt(i,"butterfly lower wing",n,[s*t*.29,-t*.35,.003],[t*.28,t*.28,t*.07],12)}ii(i,"butterfly body",n,[0,0,.008],t*.065,t*.75)}function cf(i,t,e){let n=e[t.makeup]?.shape||"none",s=$t(i,"makeup");if(s.userData.style=n,n==="none")return;let r=t.makeupColor||e[t.makeup].color,a=gt(r,{roughness:.58}),o=gt(kn(r,"#fff3d6",.5)),l=gt("#ebc875",{metalness:.25,roughness:.35});if(["rosy","sunset","stardust","diamond"].includes(n)){for(let h of[-1,1]){let p=mt(s,"blush",gt(r,{transparent:!0,opacity:.54}),[h*.255,-.117,.309],[.071,.037,.008]);p.rotation.y=h*.46,n!=="rosy"&&Yt(s,"eyeshadow",[[h*.08,.16,.356],[h*.15,.193,.345],[h*.23,.15,.315]],.018,a)}Yt(s,"lip color",[[-.068,-.221,.342],[0,-.246,.364],[.068,-.221,.342]],.015,a)}for(let h of[-1,1]){let p=$t(s,"face paint",[h*.25,-.12,.318]);if(p.rotation.y=h*.48,n==="stardust"){let _=$t(p,"cheek star");zn(_,.046,l);for(let[g,m]of[[-.06,.025],[.057,.035],[.028,-.053]])mt(p,"glitter dot",o,[g,m,.001],[.012,.012,.004],12)}if(n==="diamond"){zn(p,.047,o);for(let _ of[-.057,.057])mt(p,"pearl face gem",o,[_,.01,0],[.014,.014,.005],12)}if(n==="ghost"){mt(p,"friendly ghost paint",a,[0,0,0],[.049,.06,.006],16);for(let _ of[-.021,0,.021])mt(p,"ghost scallop",a,[_,-.039,0],[.018,.027,.006],12);for(let _ of[-.017,.017])mt(p,"ghost eye",gt("#514859"),[_,.012,.009],[.007,.011,.003],12)}if(n==="freckles")for(let[_,g]of[[-.046,.018],[-.008,.027],[.031,.014],[.052,-.016],[-.027,-.021],[.013,-.019]])mt(p,"freckle",gt("#a06a49"),[_,g,.002],[.008,.007,.003],12);if(n==="rainbow"&&["#db91a5","#edcc82",r].forEach((_,g)=>{let m=.076-g*.018;Yt(p,"rainbow paint",Array.from({length:13},(M,b)=>{let y=b/12*Math.PI;return[Math.cos(y)*m,Math.sin(y)*m-.032,.003+g*.002]}),.009,gt(_))}),n==="butterfly"){let _=$t(s,"eye butterfly",[h*.247,.071,.334]);_.rotation.y=h*.45,lf(_,.124,a,o),_.position.x+=h*.045}if(n==="kitty")for(let _=0;_<3;_++)Yt(p,"painted whisker",[[0,.013-_*.019,.005],[h*.068,.036-_*.037,-.003]],.006,gt("#755a69"))}n==="kitty"&&mt(s,"kitty nose",a,[0,-.087,.442],[.044,.028,.012],16),s.updateWorldMatrix(!0,!0);let c=i.matrixWorld.clone().invert(),u=new Set,d=1;s.traverse(h=>{if(!h.isMesh||(h.castShadow=!1,["lip color","kitty nose"].includes(h.name)))return;u.add(h.material),h.material=new Ze({color:h.material.color.clone(),transparent:h.material.transparent,opacity:h.material.opacity,depthWrite:!1}),h.renderOrder=d++;let p=new le().multiplyMatrices(c,h.matrixWorld),_=p.clone().invert(),g=h.geometry,m=g.attributes.position,M=g.index,b=[],y=M?M.count:m.count;for(let T=0;T<y;T+=3){let A=[0,1,2].map(S=>new I().fromBufferAttribute(m,M?M.getX(T+S):T+S).applyMatrix4(p));if(!(new I().subVectors(A[1],A[0]).cross(new I().subVectors(A[2],A[0])).z<=0))for(let S of A)S.z=.375*Math.sqrt(Math.max(.001,1-(S.x/.424)**2-(S.y/.525)**2))+.006,S.applyMatrix4(_),b.push(S.x,S.y,S.z)}let w=new ve;w.setAttribute("position",new jt(b,3)),w.computeVertexNormals(),h.geometry=w,g.dispose()});let f=new Set;s.traverse(h=>{h.material&&f.add(h.material)}),u.forEach(h=>{f.has(h)||h.dispose()})}function Sy(i,t,e,n){let s=["sweater","hoodie","vest","bomber","denim","varsity"].includes(t),r=["petal","cloud","bow","gown","long","blouse","cosmic","butterfly","cupcake"].includes(t);t==="varsity"&&(e=gt(hn,{side:Ce}));for(let a of i.arms){let o=$t(a.upper,"fitted sleeve");o.userData.garmentPart="sleeve",a.upperSkin.visible=!1,ae(o,"sleeve shell",En(s?[[-.49,.105,.104],[-.39,.115,.114],[-.16,.133,.128],[.02,.125,.12],[.055,.06,.065]]:r?[[-.28,.108,.106],[-.24,.156,.145],[-.12,.172,.153],[0,.145,.13],[.05,.068,.066]]:[[-.27,.122,.12],[-.14,.135,.13],[.02,.125,.12],[.05,.063,.065]]),e),Te(o,"sleeve hem",s?-.47:-.27,s?.108:.117,s?.108:.113,.013,n),s&&(a.lowerUpperSkin.visible=!1,a.forearmSkin.visible=!1,ae(a.forearm,"fitted forearm sleeve",En([[-.425,.087,.088],[-.25,.106,.101],[0,.111,.109],[.035,.098,.098]]),e),Te(a.forearm,"cuff",-.41,.091,.091,.017,n))}}function Rl(i,t,e,n){let s=gt(hn),r=gt("#e9c578",{metalness:.2,roughness:.4}),a=t[0][0],o=t.at(-1)[0];if(["petal","meadow","flower","star","gown","sparkle","cosmic","star-skirt","butterfly"].includes(e))for(let l=0;l<3;l++)for(let c=0;c<7;c++){let u=c/7*Math.PI*2+l*.42,d=a+(o-a)*(.18+l*.29),[f,h]=Bn(t,d),p=$t(i,"woven decoration",[Math.sin(u)*(f+.01),d,Math.cos(u)*(h+.01)]);p.quaternion.setFromUnitVectors(My,new I(Math.sin(u)/f,.12,Math.cos(u)/h).normalize()),["star","gown","sparkle","cosmic","star-skirt"].includes(e)?zn(p,.037,r):e==="butterfly"?lf(p,.047,gt(kn(n,"#db91a5",.6)),r):da(p,.032,s,r)}if(["cloud","tutu"].includes(e))for(let l=1;l<=3;l++){let c=a+(o-a)*l/4,[u,d]=Bn(t,c);Te(i,"tiered ruffle",c,u+.006,d+.006,.015,gt(kn(n,"#fff9ee",.23)))}}function Cl(i,t,e,n,s="fabric stripe"){let r=t[0][0],a=t.at(-1)[0];for(let o=0;o<n;o++){let l=r+(a-r)*o/n,c=r+(a-r)*(o+.98)/n,u=[[l,...Bn(t,l)],...t.filter(d=>d[0]>l&&d[0]<c),[c,...Bn(t,c)]];ae(i,s,En(sf(u,.006)),gt(e[o%e.length],{side:Ce}))}}var by={velvet:"long",pearl:"long",aurora:"long",diamond:"petal",tweed:"denim",tuxedo:"blouse",witch:"long",pumpkin:"petal",ghost:"cloud",vampire:"long",skeleton:"sweater",cherry:"meadow",plaid:"bow",raincoat:"bomber",sport:"tee"};function bh(i,t,e,n){let s=gt(hn),r=gt("#e7c57f",{metalness:.35}),a=gt("#32313f");if(["pearl","diamond","velvet","cherry","sequin"].includes(e))for(let o=0;o<3;o++)for(let l=0;l<9;l++){let c=l/9*Math.PI*2+o*.2,u=t[0][0]+(t.at(-1)[0]-t[0][0])*(.15+o*.3),[d,f]=Bn(t,u),h=$t(i,"boutique fabric detail",[Math.sin(c)*(d+.018),u,Math.cos(c)*(f+.018)]);if(h.rotation.y=c,e==="pearl")mt(h,"sewn pearl",s,[0,0,0],[.022,.022,.015],12);else if(e==="cherry"){for(let p of[-1,1])mt(h,"cherry",gt("#a95665"),[p*.024,0,0],[.028,.029,.014],12);Yt(h,"cherry stem",[[-.023,.012,0],[0,.07,0],[.023,.012,0]],.006,gt("#708d74"))}else e==="velvet"?o===0&&zn(h,.022,r):ae(h,"sewn crystal",new ns(.025),e==="diamond"?s:r)}if(e==="aurora"&&Cl(i,t,["#bda5d8","#8eafd1","#83bfb7",n,"#f2e9d8"],7),e==="plaid"||e==="tweed"){for(let o=0;o<6;o++){let l=t[0][0]+(t.at(-1)[0]-t[0][0])*(o+.2)/6,[c,u]=Bn(t,l);Te(i,"woven check",l,c+.009,u+.009,.006,s)}for(let o=0;o<12;o++){let l=o/12*Math.PI*2;Yt(i,"vertical check",t.map(([c,u,d])=>[Math.sin(l)*(u+.01),c,Math.cos(l)*(d+.01)]),.005,s)}}}function hf(i,t,e,n,s){let r=s[n.dress?.id||n.top?.id];if(r){let f=r.shape,h={...r,shape:by[f]||f},p=(n.dress||n.top).color,_=gt(p,{side:Ce}),g=gt(kn(p,"#fff5e6",.3));e.visible=!1;let m=$t(i,h.name);m.userData.itemId=h.id,m.userData.fitted=!0;let M=sf([[1.72,...Bn(Eh,1.72)],...Eh.filter(b=>b[0]>1.72)],.019);if(ae(m,"tailored bodice",En(M),_),bh(m,M,f,p),Te(m,"neckline",2.3,.15,.15,.018,g),Sy(t,h.shape,_,g),f==="tuxedo"){an(m,[0,2.23,.21],.067,gt("#32313f"));for(let b of[-1,1])Yt(m,"satin lapel",[[b*.14,2.29,.13],[b*.22,2.13,.19],[0,1.85,.22]],.043,gt(hn))}if(f==="skeleton"){let b=gt(hn);Yt(m,"skeleton spine",[[0,1.78,.22],[0,2.18,.235]],.022,b);for(let y of[-1,1])for(let w=0;w<4;w++)Yt(m,"friendly rib",[[0,2.13-w*.08,.23],[y*.16,2.14-w*.08,.23],[y*.205,2.1-w*.08,.18]],.016,b)}if(["ghost","pumpkin"].includes(f)){let b=gt("#32313f");for(let y of[-1,1])mt(m,"costume eye",b,[y*.1,2.06,.233],[.03,.045,.014],12);if(Yt(m,"costume smile",[[-.1,1.92,.217],[0,1.87,.23],[.1,1.92,.217]],.017,b),f==="pumpkin")for(let y of[-1,1]){let w=mt(m,"pumpkin collar leaf",gt("#80966b"),[y*.1,2.28,.14],[.1,.025,.075]);w.rotation.z=y*.3}}if(f==="witch")for(let b=0;b<3;b++)for(let y of[-1,1])Yt(m,"golden costume lacing",[[y*.08,1.82+b*.1,.23],[-y*.08,1.92+b*.1,.23]],.009,gt("#edcc82"));if(f==="vampire")for(let b of[-1,1]){let y=new en;y.moveTo(b*.1,2.27),y.lineTo(b*.32,2.58),y.lineTo(b*.37,2.23),y.closePath(),ae(m,"storybook collar",new pn(y,{depth:.045,bevelEnabled:!1}),gt("#32313f"),[0,0,-.13])}if(["bow","blouse"].includes(h.shape)&&an(m,[0,2.17,.238],.082,g),h.shape==="tee"){let b=$t(m,"sunshine embroidery",[0,2.02,.219]);da(b,.066,gt("#ecc570"),gt("#bc8359"))}if(h.shape==="sun")for(let b of[1.87,2,2.13])mt(m,"button",g,[0,b,Bn(M,b)[1]+.012],[.018,.018,.008],12);if(h.shape==="sweater")for(let b=-3;b<=3;b++){let y=b*.22;Yt(m,"knit rib",[[Math.sin(y)*.283,1.68,Math.cos(y)*.203],[Math.sin(y)*.28,1.82,Math.cos(y)*.198],[Math.sin(y)*.314,2.1,Math.cos(y)*.217]],.004,g)}if(h.shape==="hoodie"){mt(m,"hood",_,[0,2.22,-.16],[.26,.17,.16]);for(let b of[-1,1])Yt(m,"hood drawstring",[[b*.1,2.25,.16],[b*.1,2.08,.223],[b*.12,1.95,.217]],.009,gt(hn));mt(m,"front pocket",g,[0,1.77,.196],[.16,.09,.025])}if(h.shape==="vest"||h.shape==="sailor"){let b=gt(hn);Yt(m,"V collar",[[-.135,2.3,.12],[-.115,2.21,.21],[0,2.06,.223],[.115,2.21,.21],[.135,2.3,.12]],.024,b),h.shape==="sailor"&&an(m,[0,2.08,.245],.068,gt("#607894"))}if(["bomber","denim","varsity"].includes(h.shape)){let b=gt(hn),y=gt("#dfbf7e",{metalness:.4,roughness:.4});Yt(m,"jacket fastening",[[0,1.73,.211],[0,1.99,.219],[0,2.22,.218]],.013,h.shape==="denim"?g:b),Te(m,"ribbed jacket hem",1.735,.299,.214,.027,g);for(let T of[-1,1]){let A=ae(m,"jacket pocket",new Ue(.115,.12,.02),g,[T*.167,1.89,.191]);A.rotation.y=T*.25,mt(m,"pocket button",y,[T*.167,1.931,.208],[.012,.012,.006],12)}let w=$t(m,"jacket badge",[-.17,2.08,.202]);if(w.rotation.y=-.25,zn(w,h.shape==="varsity"?.065:.045,b),h.shape==="denim")for(let T of[1.8,1.94,2.08,2.21])mt(m,"denim button",y,[.025,T,Bn(M,T)[1]+.012],[.015,.015,.008],12)}if(h.shape==="stripes"&&Cl(m,M,[p,hn],9),h.shape==="rainbow"&&Cl(m,M,[p,"#edcc82","#83bfb7","#8eafd1","#bda5d8"],5),["sparkle","cosmic"].includes(h.shape)&&Rl(m,[[1.84,.271,.196],[2.18,.352,.224]],"sparkle",p),n.dress){let b=["gown","cosmic","long"].includes(h.shape),y=b?.15:1,w=b?[[.15,.85,.65],[.39,.78,.6],[.9,.53,.4],[1.38,.34,.255],[1.73,.291,.203]]:[[y,.55,.39],[1.16,.48,.343],[1.4,.357,.266],[1.73,.291,.203]],T=$t(i,"fitted dress skirt");if(T.userData.itemId=h.id,T.userData.fitted=!0,ae(T,"full skirt shell",En(w,{pleats:h.shape==="rainbow"?0:.016}),_),Te(T,"finished hem",y,.55+(b?.3:0),.39+(b?.26:0),.013,g),Te(T,"waist seam",1.72,.292,.205,.02,g),an(T,[0,1.73,.22],.064,g),Rl(T,w,r.shape,p),bh(T,w,f,p),h.shape==="rainbow"&&Cl(T,w,["#bda5d8","#8eafd1","#83bfb7","#edcc82",p],5),h.shape==="cupcake")for(let A=0;A<3;A++){let x=1+A*.205,S=x+.27,[R,P]=Bn(w,x),[O,z]=Bn(w,S),L=gt(kn(p,hn,A*.15),{side:Ce});ae(T,"layered cupcake ruffle",En([[x,R+.045,P+.035],[x+.07,R+.018,P+.012],[S,O+.008,z+.008]],{pleats:.025}),L),Te(T,"ruffle trim",x,R+.045,P+.035,.012,g)}["petal","meadow","star"].includes(h.shape)&&Rl(m,[[1.82,.271,.196],[2.18,.352,.224]],h.shape,p),h.shape==="bow"&&an(T,[0,1.69,-.228],.13,g);return}}if(!n.bottom)return;let a=s[n.bottom.id],o={...a,shape:{palazzo:"flare",sequin:"star-skirt",skeleton:"trousers"}[a.shape]||a.shape},l=n.bottom.color,c=gt(l,{side:Ce}),u=gt(kn(l,"#fff8e9",.2)),d=$t(i,o.name);if(d.userData.itemId=o.id,d.userData.fitted=!0,["jeans","trousers","shorts","cargo","flare"].includes(o.shape)){let f=o.shape==="shorts",h=o.shape==="flare"&&!["boot","starboot","laceboot"].includes(s[n.shoes?.id]?.shape);ae(d,"tailored waistband",En([[1.35,.33,.219],[1.49,.325,.218],[1.62,.304,.21],[1.72,.28,.202]]),c);for(let p of t.legs){let _=$t(p.hip,"fitted trouser leg");if(_.userData.itemId=o.id,_.userData.fitted=!0,ae(_,"upper trouser shell",En(f?[[-.37,.157,.169],[-.1,.174,.198],[.08,.163,.189]]:[[-.685,.139,.149],[-.45,.146,.164],[-.16,.166,.187],[.08,.163,.19]]),c),f?Te(_,"shorts cuff",-.365,.16,.171,.014,u):(p.thighSkin.visible=!1,p.shinSkin.visible=!1,ae(p.knee,"lower trouser shell",En([[-.64,h?.205:.132,h?.19:.15],[-.37,h?.166:.139,h?.17:.153],[-.07,.139,.15],[.04,.142,.15]]),c),Te(p.knee,"trouser cuff",-.63,h?.205:.133,h?.19:.151,.012,u)),o.shape==="cargo"&&(ae(_,"cargo pocket",new Ue(.055,.24,.19),u,[p.side*.146,-.32,.025]),ae(_,"cargo pocket flap",new Ue(.06,.065,.2),c,[p.side*.158,-.23,.025])),a.shape==="skeleton"){let g=gt(hn);Yt(_,"upper leg costume bone",[[0,-.13,.2],[0,-.53,.17]],.026,g),Yt(p.knee,"lower leg costume bone",[[0,-.08,.17],[0,-.52,.17]],.025,g);for(let m of[-.13,-.53])for(let M of[-1,1])mt(_,"bone end",g,[M*.022,m,.2],[.028,.025,.014],12)}}}else{let f=[[1.02,.53,.375],[1.29,.404,.291],[1.5,.324,.227],[1.72,.279,.201]];ae(d,"full skirt shell",En(f,{pleats:o.shape==="pleated"?.025:.012}),c),Te(d,"skirt hem",1.02,.531,.377,.016,u),Rl(d,f,o.shape,l),bh(d,f,a.shape,l)}Te(d,"waistband",1.72,.284,.207,.027,u)}function uf(i,t,e,n){let s=t.shape;t={...t,shape:{pearlshoe:"maryjane",diamondboot:"starboot",stripeboot:"boot",ribbonshoe:"maryjane"}[s]||s};let r=gt(e,{roughness:.55}),a=gt(kn(e,"#fff6de",.45)),o=gt(hn),l=["boot","starboot","laceboot","hightop"].includes(t.shape);for(let c of i.legs){let u=$t(c.foot,t.name,[0,0,.07]);if(u.userData.itemId=t.id,u.userData.fitted=!0,c.footSkin.visible=!1,["blockheel","sparkleheel"].includes(s)){let d=mt(u,"sloped high heel pump",r,[0,-.03,.065],[.14,.075,.24]);d.rotation.x=.55;let f=gt(kn(e,"#e4c478",.4),{metalness:s==="sparkleheel"?.65:.15,roughness:.35});if(ae(u,"raised heel",new Fe(s==="blockheel"?.086:.034,s==="blockheel"?.09:.04,.3,16),f,[0,-.12,-.115]),mt(u,"heel toe platform",a,[0,-.23,.22],[.139,.045,.118]),mt(u,"pump opening",gt(n),[0,.014,-.014],[.092,.035,.11]),Yt(u,"ankle strap",[[-.105,.11,-.02],[-.1,.17,-.11],[0,.18,-.14],[.1,.17,-.11],[.105,.11,-.02]],.018,r),s==="blockheel")an(u,[0,-.028,.21],.045,a).rotation.x=-.65;else for(let h of[-.065,0,.065]){let p=$t(u,"sparkling heel jewel",[h,-.037,.21]);zn(p,.025,o),p.rotation.x=-.55}continue}if(mt(u,"rounded shoe",r,[0,-.025,.063],[.142,.103,.254]),mt(u,"shoe sole",a,[0,-.081,.063],[.147,.045,.262]),l){let d=$t(c.knee,"fitted boot calf",[0,-.67,.07]),f=t.shape==="hightop"?.24:.46;if(ae(d,"boot shaft",En([[.005,.149,.17],[f*.45,.151,.166],[f,.154,.166]]),r,[0,0,-.07]),Te(d,"boot top",f,.154,.166,.015,a).position.z=-.07,s==="stripeboot")for(let h of[.09,.19,.29,.39])Te(d,"costume boot stripe",h,.156,.173,.026,a).position.z=-.07;if(t.shape==="starboot"){let h=$t(d,"boot star",[0,.25,.101]);zn(h,.05,o)}else if(["laceboot","hightop"].includes(t.shape))for(let h=0;h<4;h++){let p=.06+h*(f-.1)/4;Yt(d,"crossed boot laces",[[-.061,p,.091],[.061,p+.04,.091]],.008,o),Yt(d,"crossed boot laces",[[.061,p,.092],[-.061,p+.04,.092]],.008,o)}else for(let h of[.12,.22,.32])Yt(d,"boot stitching",[[-.06,h,.087],[0,h,.101],[.06,h,.087]],.008,a)}else if(t.shape==="sneaker")for(let d of[.03,.09,.15])Yt(u,"shoelace",[[-.07,.052,d],[0,.065,d+.008],[.07,.052,d]],.009,o);else if(t.shape==="sandal"){mt(u,"sandal opening",gt(n),[0,.025,.07],[.112,.071,.218]);for(let d of[-.03,.19])Yt(u,"sandal strap",[[-.128,-.005,d],[-.095,.06,d],[0,.075,d],[.095,.06,d],[.128,-.005,d]],.028,r)}else if(t.shape==="slipper"){mt(u,"fluffy slipper front",a,[0,.04,.2],[.14,.095,.15]);for(let d of[-1,1])mt(u,"bunny ear",a,[d*.06,.15,.16],[.032,.09,.03])}else{if(Yt(u,"mary jane strap",[[-.13,0,.035],[-.08,.07,.035],[0,.09,.035],[.08,.07,.035],[.13,0,.035]],.019,a),an(u,[0,.065,.22],.037,a).rotation.x=-.7,s==="pearlshoe")for(let d of[-.08,0,.08])mt(u,"shoe pearl",o,[d,.095,.035],[.022,.022,.022],12);s==="ribbonshoe"&&(an(u,[0,.1,.06],.065,r).rotation.x=-.7)}}}function df(i,t,e,n){for(let[s,r]of Object.entries(e.extras)){if(!r)continue;let a=n[r.id],o=a.shape,l={...a,shape:{royalcrown:"tiara",quiltedbag:"bag",starcape:"cape",pumpkinbag:"bag",pumpkinhat:"beret"}[o]||o},c=gt(r.color,{roughness:.55}),u=gt(hn),d=gt("#e6bf69",{metalness:.4,roughness:.4}),f=["head","ears"].includes(s)?t.head:s==="bag"||s==="wrist"?t.arms[1].forearm:i,h=$t(f,l.name);if(h.userData.itemId=l.id,s==="head"&&e.hair==="curls"&&(h.scale.setScalar(1.22),h.position.y=.025),s==="pet"){h.userData.heldPet=!0,h.position.set(-.23,1.9,.51);let p=c,_=gt(kn(r.color,hn,.55)),g=gt("#382a37");mt(h,"pet body",p,[0,.14,0],[.19,.2,.15]),mt(h,"pet head",p,[0,.35,.055],[.18,.165,.15]);for(let m of[-1,1])if(mt(h,"pet paw",_,[m*.125,.035,.11],[.075,.065,.078]),mt(h,"pet eye",g,[m*.065,.37,.192],[.019,.024,.012],12),mt(h,"pet eye shine",u,[m*.06,.38,.202],[.005,.006,.003],8),l.shape==="petrabbit")mt(h,"bunny ear",p,[m*.085,.59,.04],[.066,.19,.05]);else if(["petcat","petroyalcat"].includes(l.shape)){let M=ae(h,"kitten ear",new ts(.083,.17,3),p,[m*.125,.5,.04]);M.rotation.z=-m*.14}else{let M=mt(h,"puppy ear",l.shape==="petpoodle"?_:gt(kn(r.color,"#75513d",.28)),[m*.165,.35,.025],[.075,.14,.08]);M.rotation.z=m*.17}if(mt(h,"pet muzzle",_,[0,.29,.177],[.085,.06,.04]),mt(h,"pet nose",g,[0,.32,.212],[.024,.017,.012],12),an(h,[.11,.48,.13],.058,l.shape==="petpoodle"?d:gt("#dba1bc")),Yt(h,"curled pet tail",[[.14,.12,-.08],[.25,.16,-.12],[.28,.31,-.12]],.037,p),l.shape==="petpoodle")for(let m=0;m<7;m++)mt(h,"poodle curl",_,[(m-3)*.045,.5+Math.sin(m)*.02,.06],[.056,.059,.05],12);if(l.shape==="petroyalcat"){Te(h,"tiny crown",.5,.11,.1,.014,d);for(let m=-1;m<=1;m++)ae(h,"tiny crown point",new ts(.024,.075,4),d,[m*.07,.55,.08])}}if(["heartnecklace","gemnecklace"].includes(l.shape))if(Yt(h,"fine necklace chain",Array.from({length:33},(p,_)=>{let g=_/32*Math.PI*2;return[Math.sin(g)*.19,2.28-Math.max(0,Math.cos(g))*.15,Math.cos(g)*.195]}),.009,d,!0),l.shape==="gemnecklace")ae(h,"necklace gemstone",new ns(.064),c,[0,2.095,.214]);else{let p=new en;p.moveTo(0,-.06),p.bezierCurveTo(-.12,.01,-.04,.11,0,.04),p.bezierCurveTo(.04,.11,.12,.01,0,-.06),ae(h,"heart pendant",new pn(p,{depth:.018,bevelEnabled:!1}),c,[0,2.1,.209])}if(["flowerearrings","diamondearrings"].includes(l.shape))for(let p of[-1,1]){mt(h,"earring stud",d,[p*.444,-.06,.04],[.025,.025,.025],12);let _=$t(h,"earring pendant",[p*.449,-.17,.05]);l.shape==="flowerearrings"?da(_,.06,c,d):ae(_,"diamond drop",new ns(.061),c)}if(["bracelet","pearlbracelet"].includes(l.shape)){Te(h,"bracelet chain",-.375,.094,.098,.012,d);for(let p=0;p<10;p++){let _=p/10*Math.PI*2;mt(h,"bracelet bead",l.shape==="pearlbracelet"?u:c,[Math.sin(_)*.097,-.375,Math.cos(_)*.102],[.02,.022,.02],12)}if(l.shape==="bracelet"){let p=$t(h,"star charm",[.03,-.43,.1]);zn(p,.035,d)}}if(l.shape==="hairbow"&&(an(h,[.28,.43,.31],.16,c).rotation.z=-.25),l.shape==="crown"){Te(h,"flower crown vine",.39,.39,.33,.025,gt("#91a983"));for(let p=0;p<9;p++){let _=p/9*Math.PI*2,g=$t(h,"crown flower",[Math.sin(_)*.4,.4,Math.cos(_)*.34]);g.rotation.y=_,da(g,.08,c,d)}}if(l.shape==="tiara"){Te(h,"tiara band",.4,.37,.32,.021,d);for(let p=-2;p<=2;p++){let _=p*.32,g=Math.sin(_)*.375,m=Math.cos(_)*.326,M=.11+(2-Math.abs(p))*.04;Yt(h,"tiara point",[[g-.05,.41,m],[g,.41+M,m],[g+.05,.41,m]],.015,c),mt(h,"tiara jewel",u,[g,.41+M,m],[.028,.035,.02],12)}}if(l.shape==="beret"){let p=mt(h,"beret crown",c,[-.025,.48,-.01],[.49,.17,.43]);if(p.rotation.z=.15,Te(h,"beret band",.41,.4,.34,.027,c),ii(h,"beret tip",c,[-.045,.66,0],.026,.1),o==="pumpkinhat"){ii(h,"pumpkin stem",gt("#719063"),[0,.72,0],.035,.17);let _=mt(h,"pumpkin hat leaf",gt("#88a277"),[.12,.66,0],[.16,.033,.075]);_.rotation.z=.2}}if(["witchhat","wizardhat","sunhat"].includes(l.shape))if(ae(h,"wide hat brim",new Fe(.57,.57,.055,40),c,[0,.43,0]),ae(h,"hat crown",l.shape==="sunhat"?new Fe(.32,.36,.24,32):new ts(.34,.77,32),c,[0,l.shape==="sunhat"?.55:.82,0]),Te(h,"hat ribbon",.51,.33,.33,.036,l.shape==="sunhat"?u:d),l.shape==="wizardhat")for(let[p,_]of[[-.12,.72],[.08,.92],[.02,.61]]){let g=$t(h,"wizard hat star",[p,_,.26-(_-.6)*.42]);zn(g,.055,d)}else an(h,[.15,.53,.32],.085,u);if(l.shape==="catears"){Yt(h,"kitten headband",[[-.39,.21,0],[-.31,.43,0],[0,.53,0],[.31,.43,0],[.39,.21,0]],.027,c);for(let p of[-1,1]){let _=new en;_.moveTo(-.14,0),_.lineTo(0,.28),_.lineTo(.14,0),_.closePath();let g=ae(h,"kitten ear",new pn(_,{depth:.07,bevelEnabled:!0,bevelSize:.025,bevelThickness:.02,bevelSegments:2,steps:1}),c,[p*.3,.43,0]);g.rotation.z=-p*.16;let m=ae(g,"pink inner ear",new Jr(_),gt("#e9b0bd"),[0,.035,.095],[.65,.7,1])}}if(l.shape==="headphones"){Yt(h,"headphone band",[[-.49,-.02,0],[-.46,.35,-.02],[0,.6,-.025],[.46,.35,-.02],[.49,-.02,0]],.041,u);for(let p of[-1,1])mt(h,"headphone cushion",u,[p*.45,-.025,.012],[.1,.16,.13]),mt(h,"headphone cup",c,[p*.515,-.025,.014],[.085,.15,.122])}if(l.shape==="pearls")for(let p=0;p<22;p++){let _=p/22*Math.PI*2;mt(h,"necklace pearl",u,[Math.sin(_)*.19,2.32-.06*Math.max(0,Math.cos(_)),Math.cos(_)*.18],[.026,.026,.026],12)}if(l.shape==="bag"||l.shape==="heartbag")if(h.position.set(.025,-.49,.01),Yt(h,"bag handle",[[-.12,-.04,0],[-.1,.15,0],[.1,.15,0],[.12,-.04,0]],.02,c),l.shape==="bag")if(mt(h,"bag body",c,[0,-.14,0],[.19,.17,.09]),o==="pumpkinbag"){for(let p of[-1,1])mt(h,"pumpkin pail eye",gt("#32313f"),[p*.065,-.09,.088],[.022,.028,.012],12);Yt(h,"pumpkin pail smile",[[-.075,-.19,.08],[0,-.23,.095],[.075,-.19,.08]],.013,gt("#32313f"))}else if(o==="quiltedbag"){for(let p of[-.08,0,.08])Yt(h,"quilt seam",[[p-.07,-.2,.08],[p+.07,-.06,.08]],.005,u),Yt(h,"quilt seam",[[p-.07,-.06,.08],[p+.07,-.2,.08]],.005,u);mt(h,"gold clasp",d,[0,-.09,.105],[.035,.025,.014],12)}else{let p=$t(h,"bag flower",[0,-.14,.092]);da(p,.06,u,d)}else{let p=new en;p.moveTo(0,-.31),p.bezierCurveTo(-.36,-.1,-.12,.17,0,-.025),p.bezierCurveTo(.12,.17,.36,-.1,0,-.31),ae(h,"heart purse",new pn(p,{depth:.1,bevelEnabled:!0,bevelSize:.025,bevelThickness:.025,bevelSegments:3,steps:1}),c,[0,0,-.04])}if(l.shape==="wings"){h.position.set(0,2.05,-.235);for(let p of[-1,1]){let _=$t(h,"fairy wing");_.rotation.y=p*.18;let g=mt(_,"upper wing",c,[p*.4,.12,-.02],[.38,.5,.04]);g.rotation.z=p*-.6;let m=mt(_,"lower wing",c,[p*.32,-.32,-.02],[.31,.28,.035]);m.rotation.z=p*.6,Yt(_,"wing vein",[[p*.05,0,.025],[p*.32,.1,.03],[p*.6,.38,.025]],.009,u);let M=$t(_,"wing sparkle",[p*.45,.2,.03]);zn(M,.055,u)}}if(l.shape==="batwings")for(let p of[-1,1]){let _=new en;_.moveTo(0,0),_.quadraticCurveTo(p*.35,.59,p*.94,.42),_.lineTo(p*.79,-.05),_.quadraticCurveTo(p*.6,.1,p*.51,-.27),_.quadraticCurveTo(p*.29,-.09,p*.18,-.43),_.lineTo(0,-.15),ae(h,"friendly bat wing",new pn(_,{depth:.045,bevelEnabled:!0,bevelThickness:.008,bevelSize:.012,bevelSegments:1,steps:1}),c,[0,2.08,-.26]),Yt(h,"bat wing seam",[[0,2.08,-.205],[p*.46,2.4,-.205],[p*.9,2.5,-.205]],.012,u)}if(l.shape==="cape"){let p=[],_=[];for(let y=0;y<=12;y++)for(let w=0;w<=24;w++){let T=y/12,A=(w/24-.5)*2.7,x=.18+T*.55,S=.245+T*.29;if(p.push(Math.sin(A)*x,2.28-T*1.3+Math.sin(w/24*Math.PI)*T*.06,-Math.cos(A)*S-.03),y<12&&w<24){let R=y*25+w;_.push(R,R+1,R+24+1,R+1,R+24+2,R+24+1)}}let M=new ve;M.setAttribute("position",new jt(p,3)),M.setIndex(_),M.computeVertexNormals(),ae(h,"hero cape fabric",M,gt(r.color,{side:Ce}));let b=$t(h,"cape star",[0,1.56,-.446]);b.rotation.y=Math.PI,zn(b,.15,d),Te(h,"cape collar",2.3,.153,.153,.016,d)}}}function ff(i,t){let e=new te,n={arms:[],legs:[],head:$t(e,"display head")};for(let d of[-1,1]){let f=$t(e,"display shoulder",[d*.337,2.17,0]);f.rotation.z=d*.22;let h=$t(f,"display elbow",[0,-.47,0]);n.arms.push({side:d,upper:f,forearm:h,upperSkin:{},lowerUpperSkin:{},forearmSkin:{}});let p=$t(e,"display hip",[d*.155,1.51,0]),_=$t(p,"display knee",[0,-.68,0]),g=$t(_,"display ankle",[0,-.67,0]);n.legs.push({side:d,hip:p,knee:_,foot:g,thighSkin:{},shinSkin:{},footSkin:{}})}let s={id:i.id,color:i.color},r={dress:null,top:null,bottom:null,shoes:null,extras:{},skin:"#e4ba9e",hair:"waves",hairColor:"#493027",makeup:s},a={dresses:"dress",tops:"top",bottoms:"bottom"}[i.category];if(a)r[a]=s,hf(e,n,{},r,t);else if(i.category==="shoes")uf(n,i,i.color,r.skin);else if(i.category==="extras")r.extras[i.slot]=s,df(e,n,r,t),["neck","wrist"].includes(i.slot)&&(e.rotation.x=.35),["cape","starcape"].includes(i.shape)&&(e.rotation.y=Math.PI);else{let d=gt(r.skin);mt(n.head,"display face",d,[0,0,0],[.424,.525,.375],20),of(n.head,d,r.hairColor),i.category==="hair"?af(n.head,i.shape,i.color):cf(n.head,r,t)}e.updateMatrixWorld(!0);let o=new Map;e.traverseVisible(d=>{if(!d.isMesh)return;let f=d.material,h=[f.type,f.roughness,f.metalness,f.transparent,f.opacity,f.side,f.depthWrite,d.renderOrder>0].join("|");if(!o.has(h)){let m=f.clone();m.color.set("#ffffff"),m.vertexColors=!0,o.set(h,{material:m,geometries:[],order:d.renderOrder>0?1:0})}let p=new ve,_=d.geometry.attributes.position;p.setAttribute("position",_.clone()),p.setAttribute("normal",d.geometry.attributes.normal.clone()),p.setIndex(d.geometry.index?d.geometry.index.clone():Array.from({length:_.count},(m,M)=>M));let g=new Float32Array(_.count*3);for(let m=0;m<_.count;m++)g.set([f.color.r,f.color.g,f.color.b],m*3);p.setAttribute("color",new ke(g,3)),p.applyMatrix4(d.matrixWorld),o.get(h).geometries.push(p)});let l=new te;l.name=i.name,l.userData.itemId=i.id;for(let d of o.values()){let f=jd(d.geometries);d.geometries.forEach(p=>p.dispose());let h=new he(f,d.material);h.renderOrder=d.order,l.add(h)}rf(e);let c=new Ye().setFromObject(l),u=c.getCenter(new I);return l.children.forEach(d=>d.geometry.translate(-u.x,-c.min.y,-u.z)),l}function si(i,t){let e=new te;e.name="Style Club fitted character";let n=gt(i.skin,{roughness:.82}),s={arms:[],legs:[],head:$t(e,"head joint",[0,2.88,0])},r=ae(e,"body under clothes",En(Eh),n);ii(e,"neck",n,[0,2.36,0],.115,.25),mt(s.head,"head",n,[0,0,0],[.424,.525,.375],32),of(s.head,n,i.hairColor),cf(s.head,i,t),af(s.head,t[i.hair].shape,i.hairColor);for(let N of[-1,1]){let H=$t(e,N<0?"left shoulder":"right shoulder",[N*.337,2.17,0]),K=ii(H,"covered upper arm",n,[0,-.115,0],.102,.285),V=ii(H,"visible upper arm",n,[0,-.352,0],.09,.24),Z=$t(H,"elbow joint",[0,-.47,0]),J=ii(Z,"forearm",n,[0,-.195,0],.082,.43);mt(Z,"hand",n,[0,-.48,.007],[.079,.117,.065]),mt(Z,"thumb",n,[-N*.062,-.445,.035],[.036,.06,.034]),s.arms.push({side:N,upper:H,forearm:Z,upperSkin:K,lowerUpperSkin:V,forearmSkin:J});let lt=$t(e,N<0?"left hip":"right hip",[N*.155,1.51,0]),ht=ii(lt,"thigh",n,[0,-.325,0],.125,.73),At=$t(lt,"knee joint",[0,-.68,0]),pt=ii(At,"shin",n,[0,-.29,0],.096,.66),kt=$t(At,"ankle joint",[0,-.67,0]),q=mt(kt,"foot",n,[0,-.03,.11],[.116,.084,.2]);s.legs.push({side:N,hip:lt,knee:At,foot:kt,thighSkin:ht,shinSkin:pt,footSkin:q})}hf(e,s,r,i,t),uf(s,t[i.shoes.id],i.shoes.color,i.skin),df(e,s,i,t);let a=nf(s.head,i.facePaint||[]);ef(s.head,i.headShape);let o=new en;o.moveTo(0,-.12),o.bezierCurveTo(-.26,.01,-.11,.24,0,.095),o.bezierCurveTo(.11,.24,.26,.01,0,-.12);let l=ae(e,"heart for the heart-hug pose",new pn(o,{depth:.025,bevelEnabled:!0,bevelSize:.012,bevelThickness:.008,bevelSegments:2,steps:1}),gt("#dc8fae"),[0,1.96,.59]);l.visible=!1;let c=$t(e,"waist joint",[0,1.6,0]);s.torso=c;let u=t[i.dress?.id||i.top?.id]?.name;for(let N of[...e.children])N!==c&&(N===r||N===s.head||N===l||N.name==="neck"||N.name===u||s.arms.some(H=>H.upper===N)||Object.values(i.extras).some(H=>H&&t[H.id]?.name===N.name))&&(c.add(N),N.position.y-=1.6);let d=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,f=i.dress?e.getObjectByName("fitted dress skirt"):["pleated","tutu","flower","star-skirt","sequin"].includes(t[i.bottom?.id]?.shape)?e.getObjectByName(t[i.bottom.id].name):null,h=!!i.dress&&["gown","cosmic","velvet","pearl","aurora","witch","vampire"].includes(t[i.dress.id].shape),p=h?.15:i.dress?1:1.02,_=f?new Qe(new I(0,-1,0),p):null;if(_){let N=new Map;for(let K of s.legs)K.hip.traverse(V=>{if(V.isMesh){if(!N.has(V.material)){let Z=V.material.clone();Z.clippingPlanes=[_],Z.clipShadows=!0,N.set(V.material,Z)}V.material=N.get(V.material)}});let H=new Set;e.traverse(K=>{K.material&&H.add(K.material)}),N.forEach((K,V)=>{H.has(V)||V.dispose()})}let g=!!i.extras.pet,m=new I(0,-1,0),M=["blockheel","sparkleheel"].includes(t[i.shoes.id].shape)?.15:0,b=$t(s.arms[1].forearm,"makeup brush in hand",[.02,-.48,.018]);ii(b,"brush handle",gt("#835c79"),[0,-.09,0],.018,.24);let y=mt(b,"soft brush tip",gt("#d990b3"),[0,-.245,0],[.055,.07,.05]),w=mt(b,"makeup sponge",gt("#d990b3"),[0,-.11,0],[.08,.105,.055]);b.visible=!1;let T=0,A=null;function x(N){if(!(!f||N===T)){if(!A){e.updateWorldMatrix(!0,!0);let H=e.matrixWorld.clone().invert();A=[],f.traverse(K=>{if(K.isMesh){let V=H.clone().multiply(K.matrixWorld);A.push({part:K,positions:K.geometry.attributes.position.array.slice(),matrix:V,inverse:V.clone().invert()})}})}for(let{part:H,positions:K,matrix:V,inverse:Z}of A){let J=H.geometry.attributes.position;for(let lt=0;lt<J.count;lt++){let ht=new I().fromArray(K,lt*3);if(N){ht.applyMatrix4(V);let At=Math.max(0,1.65-ht.y),pt=Math.min(At,.72),kt=ue.clamp((ht.z+.23)/.55,0,1);At>0&&(ht.y=Math.max(.92,1.65-pt*.16-Math.max(0,At-.72))),ht.z+=pt*.98*kt,ht.applyMatrix4(Z),ht.lerp(new I().fromArray(K,lt*3),1-N)}J.setXYZ(lt,ht.x,ht.y,ht.z)}J.needsUpdate=!0,H.geometry.computeVertexNormals(),H.geometry.computeBoundingSphere()}}}function S(N,H){let K=new I(N.side*.337,2.17,0),V=new I(...H),Z=V.clone().sub(K),J=Math.min(.948,Math.max(.025,Z.length()));Z.normalize();let lt=new I(N.side*.85,-.08,-.25);lt.addScaledVector(Z,-lt.dot(Z)).normalize();let ht=(.47**2-.48**2+J**2)/(2*J),At=Math.sqrt(Math.max(0,.47**2-ht**2)),pt=K.clone().addScaledVector(Z,ht).addScaledVector(lt,At);V.copy(K).addScaledVector(Z,J),N.upper.quaternion.setFromUnitVectors(m,pt.clone().sub(K).normalize());let kt=new vn().setFromUnitVectors(m,V.sub(pt).normalize());N.forearm.quaternion.copy(N.upper.quaternion).invert().multiply(kt)}function R(N,H,K,V=null,Z=1,J=null){N={...N,position:[...N.position],feet:N.feet.map(At=>[...At])};let lt=V===null?0:ue.clamp(Z,0,1);x(lt),T=lt,M&&(N.position[1]+=M,N.feet=N.feet.map(At=>[At[0],At[1]+M,At[2],At[3]]));for(let[At,pt]of s.legs.entries()){let[kt,q,j]=N.feet[At],ut=kt-N.position[0]-pt.side*.155,Nt=j-N.position[2];N.position[1]=Math.min(N.position[1],.16+q+Math.sqrt(Math.max(.1,1.342**2-ut**2-Nt**2))-1.51)}let ht=[...N.position];if(lt){let At={position:[0,V-1.51,0],rotation:[0,0,0],torso:[-.025,0,0],head:[0,0,.025]};for(let pt of Object.keys(At))N[pt]=N[pt].map((kt,q)=>ue.lerp(kt,At[pt][q],lt));N.hands=N.hands.map((pt,kt)=>pt.map((q,j)=>ue.lerp(q,[kt?.25:-.25,1.37,.42][j],lt)))}if(N=tf(N,d?null:J),b.visible=!d&&J?.kind==="brush"&&J.progress>.12&&J.progress<.87,b.visible){let At=J.tool==="sponge";b.children[0].visible=!At,y.visible=!At,w.visible=At,y.material.color.set(J.color||"#d990b3"),w.material.color.copy(y.material.color)}e.position.set(...N.position),e.rotation.set(...N.rotation),c.rotation.set(...N.torso),s.head.rotation.set(...N.head),l.visible=!lt&&H===4&&K<.1&&!g,s.arms.forEach((At,pt)=>S(At,g&&pt===0?[-.2,1.93,.55]:N.hands[pt]));for(let[At,pt]of s.legs.entries()){let[kt,q,j,ut]=N.feet[At],Nt=kt-ht[0]-pt.side*.155,wt=.16+q-ht[1]-1.51,Ht=j-ht[2],ce=Math.hypot(wt,Nt),tt=Math.min(1.348,Math.hypot(ce,Ht)),st=-Math.atan2(Ht,ce)-Math.acos(ue.clamp((.68**2+tt*tt-.67**2)/(2*.68*tt),-1,1)),rt=Math.PI-Math.acos(ue.clamp((.68**2+.67**2-tt*tt)/(2*.68*.67),-1,1)),at=Math.atan2(Nt,-wt);if(pt.hip.rotation.set(st,0,at,"ZXY"),pt.knee.rotation.set(rt,0,0),pt.foot.rotation.set(-st-rt+ut,0,-at,"XZY"),lt){let dt=Math.asin(ue.clamp((V-.16-M)/.67,.2,1));pt.hip.rotation.x=ue.lerp(st,-Math.PI/2,lt),pt.hip.rotation.z=ue.lerp(at,pt.side*.025,lt),pt.knee.rotation.x=ue.lerp(rt,dt,lt),pt.foot.rotation.x=ue.lerp(-st-rt+ut,Math.PI/2-dt,lt),pt.foot.rotation.z=ue.lerp(-at,-pt.side*.025,lt)}}if(f){let At=!lt&&h?Math.max(0,-e.position.y-.035):0;f.scale.y=1-At/(1.73-p),f.position.y=1.73*(1-f.scale.y),e.updateWorldMatrix(!0,!0),_.set(new I(0,-1,0),ue.lerp(p+At+.008,h?.94:1.48,lt)).applyMatrix4(e.matrixWorld)}}function P(N=0,H=0,K=!1){R(vh(d?0:N,H,N*8,K?1:0),H,K?1:0)}let O=0,z=0,L=null;function B(N,H,{distance:K=0,dt:V=1/60,strut:Z=!1,seatHeight:J=null,seatBlend:lt=1,action:ht=null}={}){let At=Math.min(.05,Math.max(0,V));O+=K/(M?yh:xh)*Math.PI*2,z=ue.damp(z,K>1e-5?1:0,14,At),z<.001&&(z=0),z>.999&&(z=1);let pt=vh(d?0:N,H,O,z,Z,!!M);if(L){let kt=1-Math.exp(-14*At);for(let q of["position","torso","head"])pt[q]=pt[q].map((j,ut)=>ue.lerp(L[q][ut],j,kt));pt.rotation=pt.rotation.map((q,j)=>L.rotation[j]+Math.atan2(Math.sin(q-L.rotation[j]),Math.cos(q-L.rotation[j]))*kt),pt.hands=pt.hands.map((q,j)=>q.map((ut,Nt)=>ue.lerp(L.hands[j][Nt],ut,kt))),z<.8&&(pt.feet=pt.feet.map((q,j)=>q.map((ut,Nt)=>ue.lerp(L.feet[j][Nt],ut,kt))))}L=pt,R(pt,H,z,J,lt,ht)}return P(),{root:e,bones:s,pose:P,animate:B,coveredLegs:_,paintSurface:a.mesh,setFacePaint:a.update,dispose(){rf(e),e.removeFromParent()}}}var Xi=(i,t={})=>new sn({color:i,roughness:.72,...t}),mf=Xi("#fff6e7"),rr=Xi("#c6a66e",{metalness:.45,roughness:.4});function ar(i,t,e,n){let s=new he(t,e);return s.position.set(...n),s.receiveShadow=!0,i.add(s),s}var qi=(i,t,e,n)=>ar(i,new Ue(...t),e,n),wh=(i,t,e,n,s)=>ar(i,new Fe(t,t,e,12),n,s);function pf(i,t,e,n){return ar(i,new is(new Ui(t.map(s=>new I(...s))),16,e,6,!1),n,[0,0,0])}function Il(i,t,e,n,s,r=.66,a=.16){let o=document.createElement("canvas");o.width=384,o.height=96;let l=o.getContext("2d");l.fillStyle="#fffaf1",l.fillRect(0,0,384,96),l.fillStyle="#614c61",l.textAlign="center",l.textBaseline="middle",l.font="600 30px Segoe UI, sans-serif";let c=t.split(" "),u=[""];for(let f of c){let h=u.length-1;l.measureText(`${u[h]} ${f}`).width>360&&u[h]?u.push(f):u[h]+=(u[h]?" ":"")+f}u.slice(0,2).forEach((f,h)=>l.fillText(f,192,u.length>1?28+h*39:48));let d=new Mn(o);return d.colorSpace=xe,ar(i,new Nn(r,a),new Ze({map:d,side:Ce}),[e,n,s])}function Th(i,t){let e=new te;return e.name=`${t.store.name} display`,i.add(e),e.position.set(t.x,0,t.z),e.rotation.y=t.rotation,e.userData.station=t.station,e.userData.stock=[],qi(e,[t.width,.17,.8],mf,[0,.12,0]),e}function gf(i,t,e,n,s,{hanging:r=!1}={}){let a=new te;a.userData.itemId=t.id,a.name=t.name,a.position.set(n,s,.07),i.add(a);let o=ff(t,e),l=new Ye().setFromObject(o).getSize(new I),c=r?Math.min(1.75,l.y*.8):.77,u=r?c/l.y:Math.min(.61/l.x,c/l.y,.58/l.z);o.scale.set(Math.min(u,.62/l.x),u,Math.min(u,.56/l.z)),o.position.y=r?-c:0,a.add(o);let d=r?c:Math.max(.45,l.y*u),f=ar(a,new Ue(.68,d+.12,.66),new Ze({visible:!1}),[0,(r?-1:1)*d/2,.03]);return f.name=`Grab ${t.name}`,Il(a,t.name,0,r?-c-.13:-.095,.36),i.userData.stock.push(a),a}function _f(i,t,e){let n=Th(i,t),s=t.width,r=Xi(new Bt(t.store.color).lerp(new Bt("#fffaf0"),.8));qi(n,[s-.12,2.48,.055],r,[0,1.48,-.32]);for(let o of[-s/2+.1,s/2-.1])wh(n,.035,2.77,rr,[o,1.56,0]);let a=wh(n,.033,s-.18,rr,[0,2.79,0]);return a.rotation.z=Math.PI/2,t.items.forEach((o,l)=>{let c=(l-(t.items.length-1)/2)*.75;pf(n,[[c-.2,2.45,0],[c,2.65,0],[c+.2,2.45,0],[c-.2,2.45,0]],.012,rr),pf(n,[[c,2.65,0],[c,2.81,0],[c+.05,2.83,0]],.012,rr),gf(n,o,e,c,2.45,{hanging:!0})}),Il(n,"PICK A PIECE \xB7 DRAG TO WEAR",0,3.01,.02,2.5,.21),n}function xf(i,t,e){let n=Th(i,t),s=t.width,r=Xi(t.store.beauty?"#35313d":t.store.color);qi(n,[s-.12,.54,.73],r,[0,.47,-.02]),qi(n,[s-.12,2.35,.06],Xi(new Bt(t.store.color).lerp(new Bt("#fff8ee"),.78)),[0,1.7,-.33]);for(let l of[-s/2+.08,s/2-.08])wh(n,.027,2.7,rr,[l,1.58,-.27]);for(let l of[.85,1.9])qi(n,[s,.07,.8],mf,[0,l,0]);t.items.forEach((l,c)=>{let u=Math.floor(c/6),d=Math.min(6,t.items.length-u*6),f=(c%6-(d-1)/2)*.75;gf(n,l,e,f,.9+u*1.05)});let o=new Set(t.items.map(l=>l.category)).size>1?"LITTLE FINISHING TOUCHES":{hair:"HAIR STUDIO",makeup:"THE BEAUTY BAR",shoes:"FIND YOUR HAPPY FEET",extras:"BAGS, JEWELS & LITTLE FRIENDS"}[t.items[0]?.category];return Il(n,o||"YOUR NEXT FAVORITE",0,3.01,.02,3,.23),n}function yf(i,t){let e=Th(i,t);qi(e,[4.5,.7,.68],Xi(t.store.color),[0,.55,-.02]),qi(e,[2.7,1.94,.12],rr,[0,1.96,-.23]),qi(e,[2.54,1.79,.04],Xi("#b8cdd2",{metalness:.6,roughness:.19}),[0,1.96,-.15]);let n=Xi("#fff5dc",{emissive:"#ffe5b0",emissiveIntensity:.35});for(let s of[-1.49,1.49])for(let r=0;r<4;r++)ar(e,new nn(.065,10,8),n,[s,1.29+r*.43,-.06]);return Il(e,t.store.id==="halloween"?"LOOKING BOO-TIFUL!":"HELLO, STYLE STAR!",0,3.12,0,2.6,.22),e}var Pl=[-6.8,7].map(i=>({x:0,z:i,halfX:.7,halfZ:.85})),Si=[...Pl.map((i,t)=>({id:`bench-${t}`,kind:"bench",name:t?"Promenade benches":"Fountain benches",x:i.x,z:i.z,approach:[1.3,i.z-.43],yaw:Math.PI/2})),{id:"salon",kind:"salon",name:"Salon chair",x:7.1,z:-3,approach:[6,-3],yaw:Math.PI/2,storeId:"hair"},{id:"beauty",kind:"beauty",name:"Makeup vanity",x:-7.1,z:-3,approach:[-6,-3],yaw:-Math.PI/2,storeId:"makeup"},...[["dresses",-1,-9],["tops",-1,3],["bottoms",1,3],["halloween",-1,9],["vip",1,9],["shoes",1,-9]].map(([i,t,e])=>({id:`mirror-${i}`,kind:"mirror",name:"Dressing mirror",x:t*7.1,z:e,approach:[t*6.1,e],yaw:t*Math.PI/2,storeId:i})),{id:"photo",kind:"photo",name:"The photo booth",x:0,z:11.5,approach:[0,10],yaw:Math.PI}];function Rh(i,t={x:1,z:0}){let e=Si.find(s=>s.id===i);if(!e)return null;let n={...e,approach:[...e.approach]};if(n.kind==="bench"){let s=t.x<0?-1:1;n.approach=[s*1.3,n.z-.43],n.yaw=s*Math.PI/2,n.seat={x:s*.4,z:n.z-.43,height:.66,yaw:n.yaw},n.friendSeat={x:s*.4,z:n.z+.43,height:.66,yaw:n.yaw,approach:[s*1.3,n.z+1.25]}}else["salon","beauty"].includes(n.kind)&&(n.seat={x:n.x,z:n.z,height:.83,yaw:n.yaw});return n}var ri=[{id:"dresses",name:"Petal & Thread",detail:"Dresses & daydreams",side:-1,z:-9,color:"#dba5b9"},{id:"makeup",name:"GLOW beauty",detail:"Makeup & face paint",side:-1,z:-3,color:"#df9bae",beauty:!0},{id:"tops",name:"Sunday Studio",detail:"Tops, jackets & cozy things",side:-1,z:3,color:"#a5b8cc"},{id:"halloween",name:"BOO-tique",detail:"Happy Halloween costumes",side:-1,z:9,color:"#b99bd0",collection:"halloween"},{id:"shoes",name:"Sole Mates",detail:"Shoes for every adventure",side:1,z:-9,color:"#a6c4bb"},{id:"hair",name:"Charm & Co.",detail:"Hair & finishing touches",side:1,z:-3,color:"#c0add6"},{id:"bottoms",name:"Mix & Match",detail:"Skirts, trousers & playwear",side:1,z:3,color:"#d7b485"},{id:"vip",name:"The Velvet Lounge",detail:"VIP collection \xB7 everyone welcome",side:1,z:9,color:"#aa90bf",collection:"vip"}],Tn=ri.map(i=>({...i,storeId:i.id,category:i.collection?"dresses":i.id,x:i.side*10.7,z:i.z,approach:[i.side*8.85,i.z],rotation:-i.side*Math.PI/2}));Tn.find(i=>i.id==="hair").z=-4.15;Tn.find(i=>i.id==="hair").approach=[8.85,-4.15];Tn.push({id:"extras",storeId:"hair",category:"extras",name:"Charm accessories",detail:"Bows, bags & lovely extras",x:10.7,z:-1.55,approach:[8.85,-1.55],color:"#c0add6",rotation:-Math.PI/2},{id:"runway",name:"The grand runway",detail:"Your moment to shine",x:0,z:-11.1,approach:[0,-9],color:"#d69bb5",rotation:0});function Ch(i,t){return Object.values(i).filter(e=>t.collection?e.collection===t.collection:!e.collection&&e.category===t.category).sort((e,n)=>+!!n.fresh-+!!e.fresh)}var Ih=ri.flatMap(i=>[{x:i.side*11.65,z:i.z,rotation:-i.side*Math.PI/2,halfX:.43,halfZ:2.35},{x:i.side*8.3,z:i.z-2.5,rotation:0,halfX:2.35,halfZ:.43},{x:i.side*8.3,z:i.z+2.5,rotation:Math.PI,halfX:2.35,halfZ:.43}].map((t,e)=>({...t,id:`${i.id}-${e}`,storeId:i.id,width:4.7})));function vf(i,t,e,n,s=1){let r=ri.find(c=>c.id===e?.storeId),a=(c,u)=>c+(u-c)*s,o=c=>({...c});if(r){let c=Ih.filter(m=>m.storeId===r.id),u=c[0],d=Math.tan(n.fov*Math.PI/360),f=.2+n.near*Math.sqrt(1+d*d*(1+n.aspect*n.aspect)),h=4.6+f,p=Math.abs(u.x)-u.halfX-f,_=c[1].z+c[1].halfZ+f,g=c[2].z-c[2].halfZ-f;o=m=>({x:r.side*Math.max(h,Math.min(p,m.x*r.side)),y:m.y,z:Math.max(_,Math.min(g,m.z))})}let l=o(t);return o({x:a(i.x,l.x),y:a(i.y,l.y),z:a(i.z,l.z)})}function Mf(i){return ri.flatMap(t=>{let e=Tn.filter(o=>o.storeId===t.id),n=e.flatMap(o=>Ch(i,o)),s=n.filter(o=>["dresses","tops","bottoms"].includes(o.category)),r=n.filter(o=>!s.includes(o)),a=[];for(let[o,l,c]of[[s,"rack",6],[r,"shelf",12]])for(let u=0;u<o.length;u+=c)a.push({kind:l,items:o.slice(u,u+c)});if(a.length>3)throw new Error(`${t.name} needs another physical display`);return Ih.filter(o=>o.storeId===t.id).map((o,l)=>{let c=a[l]||{kind:"decor",items:[]},u=e.find(d=>d.category===c.items[0]?.category)||e[0];return{...o,...c,store:t,station:u}})})}function Ph(i){return Math.abs(i.x)<4.6?null:ri.find(t=>Math.sign(i.x)===t.side&&Math.abs(i.z-t.z)<2.9)||null}var wn=[...[-1,1].flatMap(i=>[-12,-6,0,6,12].map(t=>({x:i*8.35,z:t,halfX:3.95,halfZ:.09}))),...Ih,{x:0,z:-.8,halfX:1.13,halfZ:1.13},{x:-1.8,z:7.4,halfX:.48,halfZ:.3},...ri.flatMap(i=>[-2.33,2.33].map(t=>({x:i.side*4.91,z:i.z+t,halfX:.29,halfZ:.49}))),...Pl,...Si.filter(i=>["salon","beauty"].includes(i.kind)).flatMap(i=>[{x:i.x,z:i.z,halfX:.43,halfZ:.43},{x:i.x+Math.sign(i.x)*1.02,z:i.z,halfX:.22,halfZ:.85}]),...Si.filter(i=>i.kind==="mirror").map(i=>({x:i.x,z:i.z,halfX:.16,halfZ:.73})),{x:0,z:12,halfX:1.3,halfZ:.2},...[-1,1].flatMap(i=>[-10.8,10.8].map(t=>({x:i*2.85,z:t,halfX:.32,halfZ:.32})))];function us(i,t,e=wn,n=.29){return Math.abs(i)>12.25||Math.abs(t)>12.25?!1:e.every(s=>{let r=Math.max(s.x-s.halfX,Math.min(i,s.x+s.halfX)),a=Math.max(s.z-s.halfZ,Math.min(t,s.z+s.halfZ));return Math.hypot(i-r,t-a)>n})}function Ll(i,t,e,n=wn){let s=Math.max(1,Math.hypot(t.x,t.z)),r=Math.min(.05,Math.max(0,e)),a=t.x/s*2.9*r,o=t.z/s*2.9*r,{x:l,z:c}=i;return us(l+a,c,n)&&(l+=a),us(l,c+o,n)&&(c+=o),{x:l,z:c}}function Sf(i){return Tn.map(t=>({station:t,distance:Math.hypot(i.x-t.approach[0],i.z-t.approach[1])})).filter(t=>t.distance<1.15).sort((t,e)=>t.distance-e.distance)[0]?.station||null}function fa(i,t,e=wn,n=.29+.035){let s=Math.max(1,Math.ceil(Math.hypot(t.x-i.x,t.z-i.z)/.1));for(let r=0;r<=s;r++)if(!us(i.x+(t.x-i.x)*r/s,i.z+(t.z-i.z)*r/s,e,n))return!1;return!0}var Ah;function Ey(i){if(i===wn&&Ah)return Ah;let t=.4,e=Math.floor(12.25/t),n=[],s=new Set;for(let a=-e;a<=e;a++)for(let o=-e;o<=e;o++)us(a*t,o*t,i,.29+.045)&&(n.push({x:a,z:o}),s.add(`${a},${o}`));let r={cells:n,allowed:s,step:t};return i===wn&&(Ah=r),r}function ai(i,t,e=wn){let{cells:n,allowed:s,step:r}=Ey(e);if(!n.length)return[];let a=(b,y)=>`${b},${y}`,o=b=>n.reduce((y,w)=>Math.hypot(w.x*r-b.x,w.z*r-b.z)<Math.hypot(y.x*r-b.x,y.z*r-b.z)?w:y,n[0]),l=o(i),c=o(t),u=[l],d=new Map([[a(l.x,l.z),null]]),f=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],h=!1;for(let b=0;b<u.length;b++){let y=u[b];if(y.x===c.x&&y.z===c.z){h=!0;break}for(let[w,T]of f){let A=y.x+w,x=y.z+T,S=a(A,x);!s.has(S)||d.has(S)||w&&T&&(!s.has(a(y.x+w,y.z))||!s.has(a(y.x,y.z+T)))||(d.set(S,y),u.push({x:A,z:x}))}}if(!h)return[];let p=[],_=c;for(;_;)p.unshift({x:_.x*r,z:_.z*r}),_=d.get(a(_.x,_.z));fa(p.at(-1),t,e)&&p.push({...t});let g=[],m=i,M=0;for(;M<p.length;){let b=M;for(let w=M;w<p.length&&fa(m,p[w],e);w++)b=w;let y=p[b];Math.hypot(y.x-m.x,y.z-m.z)>.01&&g.push(y),m=y,M=b+1}return g}function pa(i,t,e,n=2.9,s=wn){let r=Math.min(.05,Math.max(0,e))*n,a=0,o={...i},l=t.slice();for(;l.length&&r>1e-7;){let c=l[0],u=c.x-o.x,d=c.z-o.z,f=Math.hypot(u,d);if(f<1e-7){l.shift();continue}let h=Math.min(r,f),p={x:o.x+u/f*h,z:o.z+d/f*h};if(!fa(o,p,s,.29))break;o=p,a+=h,r-=h,h>=f-1e-7&&l.shift()}return{position:o,path:l,distance:a}}var bf=[{name:"Poppy",skin:"#e8b99a",hair:"twin-tails",hairColor:"#8d5136",start:[-1.8,2.5],clothes:["rainbow-dress","maryjanes","cat-ears"],route:["dresses","extras","makeup","vip","runway","hair"]},{name:"Nova",skin:"#925c43",hair:"puff-buns",hairColor:"#241e24",start:[1.8,2.5],clothes:["varsity","cargo","high-tops","headphones"],route:["bottoms","tops","halloween","runway","shoes","makeup"]},{name:"Jules",skin:"#d39c79",hair:"side-braid",hairColor:"#d394a7",start:[1.6,-3.3],clothes:["butterfly-dress","star-boots","tiara"],route:["hair","shoes","vip","makeup","extras","halloween"]}],Dl=class{constructor(t,e){this.game=t,this.index=e,this.profile=bf[e%bf.length],this.name=this.profile.name,this.position={x:this.profile.start[0],z:this.profile.start[1]},this.yaw=0,this.outfit=t.defaultOutfit(),this.outfit.extras=Object.fromEntries(Object.keys(this.outfit.extras).map(n=>[n,null]));for(let n of this.profile.clothes)this.outfit=t.wear(this.outfit,n);Object.assign(this.outfit,{skin:this.profile.skin,hair:this.profile.hair,hairColor:this.profile.hairColor}),this.phase="posing",this.remaining=.3+e*.7,this.routeIndex=-1,this.path=[],this.changes=0,this.visits=0,this.blocked=0,this.pose=0}invite(){this.following=!0,this.seat=null,this.seatGoal=null,this.phase="following",this.path=[],this.repath=0,this.blocked=0}style(t){this.outfit=this.game.sanitizeOutfit(t),this.styled=!0}resumeShopping(){this.styled=!1}dismiss(){this.following=!1,this.seat=null,this.seatGoal=null,this.path=[],this.phase="posing",this.remaining=.3}sitWith(t){this.following&&(this.seat=null,this.seatGoal={...t},this.path=ai(this.position,{x:t.approach[0],z:t.approach[1]}),this.phase="joining")}stand(){this.following&&(this.seat=null,this.seatGoal=null,this.phase="following",this.path=[],this.repath=0)}followTick(t,e,n){let s={...this.position};if(this.seat)return{changed:!1,walking:!1,distance:0,pose:0,seated:!0};if(this.phase==="chatting"&&(this.remaining-=t)>0&&Math.hypot(e.x-this.position.x,e.z-this.position.z)<3.5)return{changed:!1,walking:!1,distance:0,pose:this.pose};if(!this.seatGoal&&(this.phase="following",this.repath=(this.repath||0)-t,this.repath<=0)){let u=e.yaw||0,f=[-.7,.7,-1.8,1.8,Math.PI].map(h=>({x:e.x-Math.sin(u+h)*1.65,z:e.z-Math.cos(u+h)*1.65})).filter(h=>us(h.x,h.z)).sort((h,p)=>Math.hypot(h.x-this.position.x,h.z-this.position.z)-Math.hypot(p.x-this.position.x,p.z-this.position.z))[0]||e;this.path=Math.hypot(e.x-this.position.x,e.z-this.position.z)>2||Math.hypot(f.x-this.position.x,f.z-this.position.z)>.7?ai(this.position,f):[],this.repath=.7}let r=pa(this.position,this.path,t,3.15),a=r.position,o=[{...e,radius:.85},...n.map(u=>({...u,radius:.7}))];if(!o.some(u=>Math.hypot(a.x-u.x,a.z-u.z)<u.radius&&Math.hypot(a.x-u.x,a.z-u.z)<Math.hypot(this.position.x-u.x,this.position.z-u.z)))this.position=a,this.path=r.path,this.blocked=0;else if((this.blocked+=t)>.5){let u=this.seatGoal?{x:this.seatGoal.approach[0],z:this.seatGoal.approach[1]}:this.path.at(-1);u&&(this.path=ai(this.position,u,[...wn,...o.map(d=>({x:d.x,z:d.z,halfX:.55,halfZ:.55}))])),this.blocked=0}let c=Math.hypot(this.position.x-s.x,this.position.z-s.z);if(c>1e-4){let u=Math.atan2(this.position.x-s.x,this.position.z-s.z);this.yaw+=Math.atan2(Math.sin(u-this.yaw),Math.cos(u-this.yaw))*(1-Math.exp(-t*12))}else this.path.length||(this.yaw=Math.atan2(e.x-this.position.x,e.z-this.position.z));return this.seatGoal&&!this.path.length&&Math.hypot(this.position.x-this.seatGoal.approach[0],this.position.z-this.seatGoal.approach[1])<.3&&(this.seat=this.seatGoal,this.seatGoal=null,this.phase="seated",this.yaw=this.seat.yaw),{changed:!1,walking:c>1e-4,distance:c,pose:this.pose,seated:!!this.seat}}nextStation(){this.routeIndex=(this.routeIndex+1)%this.profile.route.length,this.station=Tn.find(t=>t.id===this.profile.route[this.routeIndex]),this.path=ai(this.position,{x:this.station.approach[0],z:this.station.approach[1]}),this.phase="walking",this.pose=0,this.blocked=0}tryClothes(){if(this.station.id==="runway")return this.pose=8+this.visits%8,!1;if(this.styled)return this.pose=8+this.visits%8,!1;let t=Ch(this.game.byId,this.station).filter(n=>!this.game.selection(this.outfit,n));if(!t.length)return!1;let e=t[(this.visits*3+this.index*5)%t.length];return this.outfit=this.game.wear(this.outfit,e.id),!["hair","makeup"].includes(e.category)&&this.visits%2===0&&(this.outfit=this.game.recolor(this.outfit,e.id,this.game.COLORS[(this.visits+this.index*3)%this.game.COLORS.length].hex)),this.changes++,this.pose=8+this.changes%8,!0}greet(t,e=2){this.phase="chatting",this.remaining=6,this.pose=e,this.yaw=Math.atan2(t.x-this.position.x,t.z-this.position.z)}tick(t,e,n=[]){let s=Math.min(.05,Math.max(0,t)),r={...this.position},a=!1,o=!1;if(this.following&&e)return this.followTick(s,e,n);if(this.phase==="walking"){let l=this.path[0];if(!l)this.phase="browsing",this.remaining=1.8+this.index*.35,this.visits++,this.yaw=Math.atan2(this.station.x-this.position.x,this.station.z-this.position.z);else{let c=l.x-this.position.x,u=l.z-this.position.z,d=Math.max(1e-4,Math.hypot(c,u));{let f=[...e?[{...e,radius:1.12}]:[],...n.map(g=>({...g,radius:.82}))],h=g=>f.some(m=>Math.hypot(g.x-m.x,g.z-m.z)<m.radius&&Math.hypot(g.x-m.x,g.z-m.z)<Math.hypot(this.position.x-m.x,this.position.z-m.z)),p=pa(this.position,this.path,s,1.32),_=p.position;if(h(_)){if(this.blocked+=s,this.blocked>1){let g=this.index%2?1:-1;_=Ll(this.position,{x:-u/d*g,z:c/d*g},s*.32),h(_)&&(_=this.position)}else _=this.position;this.blocked>4&&this.nextStation()}else this.blocked=0,this.path=p.path;if(us(_.x,_.z)){let g=Math.hypot(_.x-this.position.x,_.z-this.position.z);if(g>1e-5){let m=Math.atan2(_.x-this.position.x,_.z-this.position.z);this.yaw+=Math.atan2(Math.sin(m-this.yaw),Math.cos(m-this.yaw))*(1-Math.exp(-s*9)),o=!0}this.position=_,this.blocked>1&&g>1e-5&&(this.path=ai(this.position,{x:this.station.approach[0],z:this.station.approach[1]}))}}}}else this.remaining-=s,this.remaining<=0&&(this.phase==="browsing"?(a=this.tryClothes(),this.phase="posing",this.remaining=this.station.id==="runway"?3.2:2.1):this.nextStation());return{changed:a,walking:o,distance:Math.hypot(this.position.x-r.x,this.position.z-r.z),pose:this.pose}}description(){return this.seat?"sitting with you":this.following?this.seatGoal?"coming to sit with you":"shopping with you":this.phase==="chatting"?"saying hello and posing with you":this.phase==="walking"?`visiting ${this.station.name.toLowerCase()}`:this.phase==="browsing"?`choosing ${this.station.name.toLowerCase()}`:this.station?.id==="runway"?"posing on the runway":"showing a new look"}};var or=(i,t={})=>new sn({color:i,roughness:.65,...t}),Lh=or("#fff6e7"),bi=or("#c3a16d",{metalness:.5,roughness:.35}),ds=or("#c490ad"),ma=or("#775876");function on(i,t,e,n){let s=new he(new Ue(...t),e);return s.position.set(...n),s.receiveShadow=!0,i.add(s),s}function Hn(i,t,e,n,s){let r=new he(new Fe(t,t,e,24),n);return r.position.set(...s),i.add(r),r}function Ef(i,t){let e=[],n=[],s=[];for(let r of Si.filter(a=>a.kind!=="bench")){let a=new te;if(a.name=r.name,a.userData.activity=r.id,a.position.set(r.x,0,r.z),a.rotation.y=r.yaw,i.add(a),e.push(a),r.kind==="photo"){on(a,[2.6,.08,1.8],ds,[0,.01,0]),on(a,[2.6,3.55,.15],ma,[0,1.78,-.52]),on(a,[2.35,3.25,.03],or("#d5b4d4"),[0,1.8,-.41]);for(let h of[-1,1]){on(a,[.22,3.7,.65],bi,[h*1.35,1.85,-.3]);for(let p=0;p<7;p++)Hn(a,.07,.1,Lh,[h*1.35,.4+p*.45,.08]).rotation.x=Math.PI/2}t(a,"THE PHOTO BOOTH",[0,3.95,0],"#79516f",2.8),t(a,"Friends \xB7 pets \xB7 happy memories",[0,3.47,0],"#79516f",2.7),on(a,[.42,.5,.3],ma,[1.7,1.8,.6]),Hn(a,.11,.12,bi,[1.7,1.8,.8]).rotation.x=Math.PI/2,Hn(a,.035,1.65,bi,[1.7,.825,.6]);continue}let o=["salon","beauty"].includes(r.kind),l=o?1.02:0,c=new te;c.name=`${r.name} mirror and counter`,a.add(c),s.push({id:r.id,object:c}),on(c,[1.6,2.8,.12],bi,[0,1.85,l]);let u=new Ze({color:"#e4eef0",side:Ce}),d=new he(new Nn(1.45,2.62),u);d.position.set(0,1.85,l-.071),d.rotation.y=Math.PI,c.add(d),n.push({id:r.id,material:u});let f=d.clone();if(f.position.z=l+.071,c.add(f),o){Hn(a,.42,.09,bi,[0,.06,0]),Hn(a,.065,.7,bi,[0,.39,0]),on(a,[.79,.19,.76],ds,[0,.72,0]),on(a,[.79,.71,.12],ds,[0,1.05,-.36]);for(let h of[-1,1])on(a,[.09,.13,.61],bi,[h*.44,1.03,0]);on(c,[1.65,.1,.5],Lh,[0,1.25,l-.09]);for(let h of[-1,1])for(let p=0;p<5;p++)Hn(c,.065,.07,Lh,[h*.9,1.55+p*.35,l-.1]).rotation.x=Math.PI/2;if(r.kind==="beauty"){on(c,[.57,.05,.24],ma,[-.3,1.32,l-.1]);for(let h=0;h<4;h++)Hn(c,.054,.025,or(["#db91a5","#bda5d8","#83bfb7","#edcc82"][h]),[-.5+h*.14,1.36,l-.1]);Hn(c,.11,.18,bi,[.54,1.39,l-.1]);for(let h=0;h<3;h++)Hn(c,.018,.37,ma,[.48+h*.055,1.55,l-.1]),Hn(c,.042,.1,ds,[.48+h*.055,1.75,l-.1])}else{on(c,[.29,.04,.16],ma,[-.47,1.34,l-.15]);for(let h=0;h<6;h++)on(c,[.018,.09,.1],bi,[-.59+h*.045,1.38,l-.15]);Hn(c,.07,.24,ds,[.48,1.42,l-.1])}}else{on(a,[1.7,.07,1.35],ds,[0,.025,-.65]);for(let h of[-1,1])on(c,[.16,3.2,.14],ds,[h*.93,1.6,0])}t(c,r.kind==="salon"?"SIT & STYLE":r.kind==="beauty"?"BRUSHES & BLUSH":"TRY IT IN THE MIRROR",[0,3.43,l],"#8f6482",2.2)}return{objects:e,mirrors:n,occluders:s}}var Ae=(i,t={})=>new sn({color:i,roughness:.78,...t}),fs=Ae("#fff7e9"),wy=Ae("#eee6df"),Vn=Ae("#c1a06c",{metalness:.45,roughness:.4});function Nl(i,t,e,n){let s=new he(t,e);return s.position.set(...n),s.receiveShadow=!0,i.add(s),s}var Pe=(i,t,e,n)=>Nl(i,new Ue(...t),e,n),Gn=(i,t,e,n,s)=>Nl(i,new Fe(t,t,e,28),n,s);function lr(i,t,e,n){let s=Nl(i,new nn(1,16,12),e,n);return s.scale.set(...t),s}function wf(i,t,e,n,s=4.4){let r=document.createElement("canvas");r.width=1024,r.height=240;let a=r.getContext("2d");a.fillStyle=n,a.fillRect(0,0,1024,240),a.strokeStyle="#ffffff55",a.lineWidth=3,a.strokeRect(17,17,990,206),a.fillStyle="#fff9ec",a.textAlign="center",a.font="600 62px Georgia, serif",a.fillText(t,512,108),a.font="500 24px Segoe UI, sans-serif",a.fillText(e.toUpperCase(),512,174);let o=new Mn(r);return o.colorSpace=xe,Nl(i,new Nn(s,s*240/1024),new Ze({map:o,side:Ce}),[0,0,0])}function Ty(i,t,e){Gn(i,.3,.48,fs,[t,.24,e]);let n=Ae("#769479");for(let s=0;s<6;s++){let r=s/6*Math.PI*2,a=lr(i,[.13,.48,.16],n,[t+Math.sin(r)*.15,.77,e+Math.cos(r)*.15]);a.rotation.z=Math.sin(r)*.4}}function Tf(i,t,{makeRack:e,makeDisplay:n,makeMirror:s,label:r,arch:a}){let o=new te;o.name="Style Club one-floor mall",i.add(o);let l=new Ue(.995,.06,.995),c=[Ae("#efeae3"),Ae("#e8e4df")],u=c.map(A=>new Fr(l,A,338)),d=[0,0],f=new le;for(let A=0;A<26;A++)for(let x=0;x<26;x++){let S=(A+x)%2;f.makeTranslation(A-12.5,-.055,x-12.5),u[S].setMatrixAt(d[S]++,f)}u.forEach(A=>{A.receiveShadow=!0,o.add(A)});let h=Ae("#eadde5"),p={back:new te,left:new te,right:new te},_=[];Object.values(p).forEach(A=>o.add(A)),Pe(p.back,[25.4,4.5,.16],h,[0,2.2,-12.65]);for(let A of[-1,1]){Pe(p[A<0?"left":"right"],[.16,4.5,25.4],h,[A*12.65,2.2,0]),Pe(o,[.13,.025,25.2],Vn,[A*4.45,-.012,0]),Pe(o,[.36,.025,25.2],Ae("#cfbdad"),[A*4.17,-.01,0]);for(let x of[-12,-6,0,6,12]){let S=new te;o.add(S),Pe(S,[7.9,3.6,.18],wy,[A*8.35,1.8,x]),Pe(S,[7.9,.1,.2],Vn,[A*8.35,.15,x]),_.push({group:S,z:x,side:A}),Pe(o,[.38,4.5,.38],fs,[A*4.5,2.22,x]),Pe(o,[.52,.17,.52],Vn,[A*4.5,.15,x])}for(let x of[-10.8,10.8])Ty(o,A*2.85,x)}let g=Ae("#b18b74"),m=[];for(let[A,x]of Pl.entries()){let S=new te;S.name="Back-to-back promenade benches",S.position.set(x.x,0,x.z),o.add(S),S.userData.activity=`bench-${A}`,m.push(S),Pe(S,[.16,.6,1.7],g,[0,.8,0]),Pe(S,[.18,.035,1.72],Vn,[0,1.115,0]);for(let R of[-1,1]){Pe(S,[.6,.18,1.7],g,[R*.38,.52,0]);for(let P of[-.6,.6])Pe(S,[.45,.5,.12],Vn,[R*.38,.25,P])}}let M=[];for(let A of ri){let{side:x,z:S,color:R}=A,P=x*8.45,O=Ae(R),z=new te;o.add(z),Pe(o,[7.55,.04,5.8],Ae(A.id==="makeup"?"#eee9e9":new Bt(R).lerp(new Bt("#fff8ef"),.72)),[P,-.015,S]),Pe(z,[.22,1.02,5.65],O,[x*4.58,3.78,S]);let L=wf(z,A.name,A.detail,A.beauty?"#35313d":new Bt(R).multiplyScalar(.64).getStyle(),5.2);L.position.set(x*4.44,3.78,S),L.rotation.y=-x*Math.PI/2,M.push({group:z,side:x,z:S});for(let B of[-2.33,2.33])Pe(o,[.52,.25,.95],fs,[x*4.91,.125,S+B]),Pe(o,[.055,2.42,.9],Ae("#cee3e5",{transparent:!0,opacity:.18,roughness:.1,depthWrite:!1}),[x*4.7,1.48,S+B]),Pe(o,[.08,2.5,.06],Vn,[x*4.67,1.4,S+B-.48]),Pe(o,[.08,2.5,.06],Vn,[x*4.67,1.4,S+B+.48]);if(Gn(o,.43,.13,fs,[P,3.66,S]),Gn(o,.016,.55,Vn,[P,4,S]),Gn(o,.37,.035,Ae("#fff4d2",{emissive:"#fff0be",emissiveIntensity:.5}),[P,3.58,S]),A.id==="makeup")for(let B=0;B<10;B++)Pe(p.left,[.04,3.3,.32],Ae(B%2?"#fbf4f1":"#35313d"),[-12.53,1.75,S-2.7+B*.57]);if(A.id==="vip"){Pe(o,[5.6,.025,2.3],Ae("#9a6688"),[x*7.35,.01,S]);for(let B of[-1.8,1.8])Gn(o,.04,1.05,Vn,[x*5.2,.525,S+B]),lr(o,[.095,.095,.095],Vn,[x*5.2,1.1,S+B])}if(A.id==="halloween")for(let B of[-2.1,2.1]){lr(o,[.34,.31,.31],Ae("#e6a05c"),[x*5.35,.36,S+B]),Gn(o,.04,.12,Ae("#79916e"),[x*5.35,.7,S+B]);for(let N of[-.1,.1])lr(o,[.025,.042,.02],Ae("#674a5a"),[x*5.35+N,.43,S+B+.29])}}Gn(o,1.12,.27,fs,[0,.12,-.8]),Gn(o,.96,.035,Ae("#95c5d0",{metalness:.3,roughness:.2}),[0,.26,-.8]),Gn(o,.17,.8,Vn,[0,.6,-.8]),Gn(o,.5,.11,fs,[0,1,-.8]);let b=lr(o,[.33,.35,.33],Ae("#b9dfe0",{transparent:!0,opacity:.72}),[0,1.27,-.8]);Pe(o,[.93,1.1,.55],Ae("#a68194"),[-1.8,.55,7.4]),wf(o,"STYLE CLUB","8 boutiques \xB7 one lovely day","#926e89",1.6).position.set(-1.8,1.5,7.4);let w=Mf(t).map(A=>A.kind==="rack"?e(o,A,t):A.kind==="shelf"?n(o,A,t):s(o,A)),T=Ef(o,r);w.push(...m,...T.objects);for(let A of Tn)if(A.id==="runway"){let x=new te;o.add(x),x.position.set(A.x,0,A.z),x.userData.station=A,Gn(x,1.3,.08,fs,[0,.025,0]),a(x,2.8,4,Ae("#c6a1bd"),-.8),a(x,2.4,3.76,Ae("#e4c6d6"),-.66),r(x,"THE RUNWAY",[0,3.97,-.55],"#895675",2.6);for(let S of[-1,1])for(let R=0;R<6;R++)lr(x,[.05,.05,.05],Ae("#fff5d6",{emissive:"#ffe7ad",emissiveIntensity:.7}),[S*1.14,.4+R*.5,-.49]);w.push(x)}return{room:o,wall:h,walls:p,interactions:w,mirrors:T.mirrors,activityOccluders:T.occluders,update(A,x,S){p.left.visible=A.position.x>-12.3,p.right.visible=A.position.x<12.3,p.back.visible=A.position.z>-12.3;for(let R of _){let P=(A.position.z-R.z)*(x.z-R.z)<0&&A.position.x*R.side>4.25;R.group.scale.y=P?.1:1}for(let R of M)R.group.visible=!(x.x*R.side>4.6&&A.position.x*R.side<4.6&&Math.abs(x.z-R.z)<3);b.scale.y=.35+Math.sin(S*1.4)*.018}}}var ps=new nn(1,12,8),Ul=new Fe(1,1,1,8),Ay=new Fe(.28,.23,.62,12),cr=i=>new sn({color:i,roughness:.85}),Ry=["#f1cfad","#dba780","#ac775b","#7d503d","#c28e70","#ebbd9f"].map(cr),Cy=["#a79ac8","#86b6ad","#e4abbd","#ddc08b","#93b0cc","#b191a9"].map(cr),Af=["#453238","#8b5638","#d4af72","#302831"].map(cr),Iy=cr("#65536e"),Rf=cr("#fff4df"),Cf=cr("#41323f");function _n(i,t,e,n,s){let r=new he(t,e);return r.position.set(...n),s&&r.scale.set(...s),i.add(r),r}function If(i,t,e,n){let s=new I(...t),r=new I(...e),a=r.clone().sub(s);i.position.copy(s.add(r).multiplyScalar(.5)),i.quaternion.setFromUnitVectors(new I(0,1,0),a.clone().normalize()),i.scale.set(n,a.length(),n)}function Pf(i,{label:t,reduced:e=!1}={}){let n=new te;n.name="Cheering runway guests",i.add(n);let s=[];for(let a of[-1,1])for(let o=0;o<6;o++){let l=o+(a>0?6:0),c=Ry[l%6],u=Cy[(l*3+o)%6],d=new te;n.add(d),d.position.set(a*(2.7+o%2*.14),0,1.05-o*1.43),d.scale.setScalar(.9+l%3*.035);let f=_n(d,Ay,u,[0,1.45,0]);f.rotation.z=a*.035,_n(d,Ul,c,[0,1.9,0],[.095,.15,.095]),_n(d,ps,c,[0,2.2,0],[.29,.35,.265]),_n(d,ps,Af[l%4],[0,2.38,-.07],[.32,.235,.255]),l%3===0&&_n(d,ps,Af[l%4],[.22,2.58,-.1],[.16,.17,.16]);for(let g of[-1,1])_n(d,ps,Cf,[g*.1,2.23,.245],[.025,.036,.012]),_n(d,ps,Rf,[g*.096,2.239,.255],[.008,.01,.005]),_n(d,Ul,Iy,[g*.145,.7,0],[.11,.92,.12]),_n(d,ps,Rf,[g*.145,.18,.09],[.13,.09,.23]);let h=_n(d,new $r(.06,.012,5,10,Math.PI),Cf,[0,2.1,.255]);h.rotation.z=Math.PI;let p=[-1,1].map(g=>({side:g,upper:_n(d,Ul,u,[0,0,0]),lower:_n(d,Ul,c,[0,0,0]),hand:_n(d,ps,c,[0,0,0],[.067,.087,.06])})),_=l%4===0;t&&l%4===1&&t(d,["SO STYLISH!","YOU SHINE!","YAY!"][Math.floor(l/4)],[0,2.93,0],"#91617d",1.5),s.push({person:d,arms:p,index:l,side:a,cheering:_})}function r(a,o=0){for(let{person:l,arms:c,index:u,side:d,cheering:f}of s){let h=e?u*.9:a+u*.57,p=(Math.sin(h*7)+1)/2;l.rotation.y=Math.atan2(-l.position.x,o-l.position.z);for(let _ of c){let g=_.side,m=f?[g*(.45+Math.sin(h*3+g)*.12),2.6+Math.sin(h*3)*.045,.12]:[g*(.045+p*.19),1.83,.51],M=f?[g*.57,2.1,.02]:[g*.43,1.47,.23];If(_.upper,[g*.29,1.7,0],M,.085),If(_.lower,M,m,.066),_.hand.position.set(...m)}l.position.y=e?0:Math.sin(h*3)*.012}}return r(0),{root:n,people:s,update:r}}var Ei=(i,t)=>i.byId[t]?.name,Py=["dress","top","bottom","shoes"];function Lf(i,t,e,n=0,s="garden"){let r=e==="hair"?"extras":e,a=t.THEMES.find(c=>c.id===s)?.tags||[],o=t.ITEMS.filter(c=>!t.selection(i,c)&&!["hair","makeup"].includes(c.category)&&(["vip","halloween"].includes(e)?c.collection===e:["dresses","tops","bottoms","shoes","extras"].includes(r)?c.category===r&&!c.collection:c.tags?.some(u=>a.includes(u)))),l=o[(n%o.length+o.length)%o.length];return l?{id:l.id,text:`Shall we try ${l.name}? I think it would be a fun new look!`}:null}function Df(i,t,e){if(!i||!t)return null;if(i.extras.pet?.id!==t.extras.pet?.id&&t.extras.pet)return`Aww! ${Ei(e,t.extras.pet.id)} is such a cute runway buddy!`;if(i.hair!==t.hair)return`You tried ${Ei(e,t.hair)}! Your new hairstyle is so fun!`;if(i.hairColor!==t.hairColor)return`${e.HAIR_COLORS.find(s=>s.hex===t.hairColor)?.name||"A new color"} hair! What a lovely idea!`;if(JSON.stringify(i.facePaint||[])!==JSON.stringify(t.facePaint||[])&&t.facePaint?.length)return"You drew your own face paint! I love seeing your creative ideas!";if(i.makeup!==t.makeup||i.makeupColor!==t.makeupColor)return t.makeup==="fresh-face"?"A fresh face and a fresh idea! What will you try next?":`Ooh, ${Ei(e,t.makeup)}! Your new face paint is so creative!`;for(let n of Py){if(i[n]?.id!==t[n]?.id&&t[n])return`You changed into ${Ei(e,t[n].id)}! That is such a cute choice!`;if(i[n]?.color!==t[n]?.color&&t[n])return`I noticed your new ${e.COLORS.find(r=>r.hex===t[n].color)?.name?.toLowerCase()||"outfit"} color. Lovely styling!`}for(let n of["ears","wrist","neck","head","bag","back","pet"]){let s=t.extras[n],r=i.extras[n];if(s?.id!==r?.id&&s)return`You added ${Ei(e,s.id)}! Such a lovely finishing touch!`;if(s?.color!==r?.color&&s)return`A new color for ${Ei(e,s.id)}! I love trying new combinations too!`;if(r&&!s)return"Mixing things up! I like seeing your new outfit ideas."}return null}function Fl(i,t,e=0){let n=Ei(t,i.dress?.id||i.top?.id),s=Ei(t,i.hair),r=Ei(t,i.extras.pet?.id),a=[r?`Hi! ${r} looks ready for a little fashion adventure!`:`Hi! Your ${n} is so cute!`,`I like your ${s} hairstyle! Want to strike a pose together?`,"Have you visited BOO-tique? The little pumpkin outfits make me smile!","You are invited to the VIP lounge too. Let\u2019s try something sparkly!","Picking colors is my favorite part. What a fun day at the mall!",`That ${n} would be lovely on the runway. I\u2019ll cheer for you!`];return a[(e%a.length+a.length)%a.length]}function Dh(i,t,e=1){let n=Math.max(2.35,1.35/(2*Math.tan(47*Math.PI/360)*Math.max(.35,e)));return{target:new I(i.x,i.y+.025,i.z),position:new I(i.x+Math.sin(t)*n,i.y+.025,i.z+Math.cos(t)*n)}}var Ol=class{constructor(t,{catalog:e,limits:n,onStroke:s=()=>{},onStatus:r=()=>{}}){this.container=t,this.catalog=e,this.limits=n,this.onStroke=s,this.onStatus=r,this.strokes=[],this.settings={tool:"brush",color:"#db91a5",size:.045,mirror:!0},this.keyboardPoint=[.72,.63],this.renderer=new vi({antialias:!0,alpha:!1,preserveDrawingBuffer:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),this.renderer.localClippingEnabled=!0,this.renderer.outputColorSpace=xe,this.renderer.toneMapping=ti,this.renderer.toneMappingExposure=1.15,this.canvas=this.renderer.domElement,this.canvas.className="makeup-canvas",this.canvas.tabIndex=0,this.canvas.setAttribute("aria-label","Makeup mirror. Draw on your face with the mouse or a finger. Arrow keys move the brush; Space paints a dot. Escape cancels the current stroke."),this.cursor=document.createElement("span"),this.cursor.className="paint-cursor",this.cursor.hidden=!0,this.cursor.setAttribute("aria-hidden","true"),t.replaceChildren(this.canvas,this.cursor),this.scene=new Dn,this.scene.background=new Bt("#f4e5ea"),this.scene.add(new xi("#fff8ed","#b79eb1",2.5));let a=new jn("#fff7ed",3);a.position.set(-2,4,5),this.scene.add(a),this.camera=new Ne(47,1,.1,20),this.abort=new AbortController,this.bind(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t)}setOutfit(t){this.cancel(),this.character?.dispose(),this.outfit=t,this.strokes=t.facePaint||[],this.character=si(t,this.catalog),this.character.pose(0,0),this.scene.add(this.character.root),this.canvas.dataset.headShape=t.headShape||"oval",this.canvas.dataset.strokes=String(this.strokes.length),this.canvas.dataset.paint=JSON.stringify(this.strokes),this.resize()}configure(t){this.settings={...this.settings,...t},this.canvas.dataset.tool=this.settings.tool,this.cursor.style.borderColor=this.settings.tool==="eraser"?"#79546e":this.settings.color}resize(){let{width:t,height:e}=this.container.getBoundingClientRect();if(t<2||e<2||!this.character)return;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.character.root.updateWorldMatrix(!0,!0);let n=this.character.bones.head.getWorldPosition(new I),s=Dh(n,0,this.camera.aspect);this.camera.position.copy(s.position),this.camera.lookAt(s.target),this.camera.updateProjectionMatrix(),this.render()}render(){this.character&&this.renderer.render(this.scene,this.camera)}hit(t){if(!this.character)return null;let e=this.canvas.getBoundingClientRect(),n=new ss;n.setFromCamera(new ot((t.clientX-e.left)/e.width*2-1,1-(t.clientY-e.top)/e.height*2),this.camera);let s=n.intersectObject(this.character.paintSurface)[0];return s?[s.uv.x,1-s.uv.y]:null}moveCursor(t,e){let n=this.canvas.getBoundingClientRect();if(this.cursor.hidden=!e,e){let s=.848*(Al[this.outfit.headShape]?.[0]||1)*n.height/(4.7*Math.tan(47*Math.PI/360));this.cursor.style.width=`${Math.max(7,s*this.settings.size)}px`,this.cursor.style.height=this.cursor.style.width,this.cursor.style.left=`${t.clientX-n.left}px`,this.cursor.style.top=`${t.clientY-n.top}px`}}begin(t,e){let n=this.strokes.reduce((s,r)=>s+r.points.length,0);return this.strokes.length>=this.limits.strokes||n>=this.limits.points?(this.onStatus("Your drawing is full. Undo a stroke or clear your drawing to make more room."),!1):(this.pending={...this.settings,points:[t]},this.pointerId=e,this.pointBudget=Math.min(this.limits.perStroke,this.limits.points-n),this.preview(),!0)}extend(t){if(!this.pending)return;let e=this.pending.points,n=e.at(-1);if(!(!t&&!n)&&!(t&&n&&Math.hypot(t[0]-n[0],t[1]-n[1])<.004)){if(e.length>=this.pointBudget){this.onStatus("Lift your brush to finish this stroke. Undo or clear if your drawing is full.");return}e.push(t),this.preview()}}preview(){this.character.setFacePaint([...this.strokes,this.pending]),this.render()}finish(){if(!this.pending)return;let t=this.pending;this.pending=null,this.pointerId=null,this.onStroke(t)}cancel(){this.pending&&(this.pending=null,this.pointerId=null,this.character?.setFacePaint(this.strokes),this.render())}hide(){this.cancel(),this.cursor.hidden=!0}bind(){let t=this.abort.signal;this.canvas.addEventListener("pointerdown",e=>{if(e.button!==0||this.pending)return;e.preventDefault(),this.canvas.focus({preventScroll:!0});let n=this.hit(e);n&&this.begin(n,e.pointerId)&&this.canvas.setPointerCapture(e.pointerId),this.moveCursor(e,n)},{signal:t}),this.canvas.addEventListener("pointermove",e=>{let n=this.hit(e);this.moveCursor(e,n),this.pending&&e.pointerId===this.pointerId&&this.extend(n)},{signal:t}),this.canvas.addEventListener("pointerup",e=>{e.pointerId===this.pointerId&&(this.extend(this.hit(e)),this.finish(),this.canvas.hasPointerCapture(e.pointerId)&&this.canvas.releasePointerCapture(e.pointerId))},{signal:t});for(let e of["pointercancel","lostpointercapture"])this.canvas.addEventListener(e,()=>this.cancel(),{signal:t});this.canvas.addEventListener("pointerleave",()=>{this.cursor.hidden=!0},{signal:t}),window.addEventListener("blur",()=>this.cancel(),{signal:t}),this.canvas.addEventListener("keydown",e=>{if(e.key==="Escape"&&this.pending){e.preventDefault(),e.stopPropagation(),this.cancel();return}let n={ArrowLeft:[-.025,0],ArrowRight:[.025,0],ArrowUp:[0,-.025],ArrowDown:[0,.025]};if(n[e.key]){e.preventDefault(),this.keyboardPoint=this.keyboardPoint.map((l,c)=>ue.clamp(l+n[e.key][c],.12,.88));let[s,r]=this.keyboardPoint,a=Sh(new I((s-.5)*.848,(.5-r)*1.05,.375*Math.sqrt(Math.max(0,1-(s*2-1)**2-(1-r*2)**2))+.01),this.outfit.headShape);a.applyMatrix4(this.character.bones.head.matrixWorld).project(this.camera);let o=this.canvas.getBoundingClientRect();this.moveCursor({clientX:o.left+(a.x+1)*o.width/2,clientY:o.top+(1-a.y)*o.height/2},this.keyboardPoint)}else e.code==="Space"&&(e.preventDefault(),this.begin([...this.keyboardPoint],null)&&this.finish())},{signal:t})}dispose(){this.hide(),this.abort.abort(),this.resizeObserver.disconnect(),this.character?.dispose(),this.renderer.dispose()}};var oi;function ga(i,t,e,n,s){i.fillStyle=s,i.beginPath();for(let r=0;r<10;r++){let a=r*Math.PI/5-Math.PI/2,o=r%2?n*.4:n;r?i.lineTo(t+Math.cos(a)*o,e+Math.sin(a)*o):i.moveTo(t+Math.cos(a)*o,e+Math.sin(a)*o)}i.closePath(),i.fill()}function $e(i,t,e,n,s){i.fillStyle=s,i.beginPath(),i.arc(t,e,n,0,Math.PI*2),i.fill()}function ms(i,t,e,n,s){if(i.save(),i.translate(e,n),i.scale(s/60,s/60),i.lineWidth=3,i.strokeStyle="#fff9ed",t==="star"||t==="sparkle")ga(i,0,0,28,"#efc45b"),t==="sparkle"&&(ga(i,24,-23,11,"#fff4cd"),ga(i,-23,19,9,"#fff4cd"));else if(t==="heart")i.fillStyle="#d86e96",i.beginPath(),i.moveTo(0,25),i.bezierCurveTo(-54,-6,-20,-39,0,-16),i.bezierCurveTo(20,-39,54,-6,0,25),i.fill();else if(t==="flower"){for(let r=0;r<6;r++)$e(i,Math.sin(r*Math.PI/3)*18,Math.cos(r*Math.PI/3)*18,13,"#eab4d9");$e(i,0,0,11,"#efca70")}else if(t==="pumpkin")$e(i,-9,2,22,"#d78245"),$e(i,9,2,22,"#eaa051"),i.fillStyle="#729268",i.fillRect(-3,-29,7,13),$e(i,-10,-2,3,"#604657"),$e(i,10,-2,3,"#604657"),i.strokeStyle="#604657",i.beginPath(),i.arc(0,3,10,0,Math.PI),i.stroke();else if(t==="ghost")i.fillStyle="#fff9ef",i.beginPath(),i.arc(0,-4,22,Math.PI,0),i.lineTo(22,27),i.lineTo(11,20),i.lineTo(0,27),i.lineTo(-11,20),i.lineTo(-22,27),i.closePath(),i.fill(),$e(i,-8,-3,3,"#745d84"),$e(i,8,-3,3,"#745d84"),$e(i,0,10,4,"#e8b1c5");else if(t==="paw"){$e(i,0,12,17,"#96758d");for(let r=0;r<4;r++)$e(i,(r-1.5)*13,-11+Math.abs(r-1.5)*5,7,"#96758d")}else if(t==="bow"){i.fillStyle="#d57c9f";for(let r of[-1,1])i.beginPath(),i.moveTo(0,0),i.lineTo(r*28,-21),i.quadraticCurveTo(r*35,0,r*28,21),i.closePath(),i.fill();$e(i,0,0,8,"#f1b9ce")}i.restore()}function Ly(i,t){let e={rose:["#efd1db","#fcf0df"],stars:["#433b64","#9684b2"],halloween:["#796393","#d7b4cb"],clouds:["#abd6e8","#eee2ef"]}[t]||["#efd1db","#fcf0df"],n=i.createLinearGradient(0,70,0,810);if(n.addColorStop(0,e[0]),n.addColorStop(1,e[1]),i.fillStyle=n,i.fillRect(24,65,752,760),t==="halloween"){$e(i,657,154,57,"#ffe5a3"),$e(i,681,134,52,e[0]);for(let s of[87,155,670,726])ms(i,"pumpkin",s,770,70);ms(i,"ghost",102,211,82),ms(i,"ghost",707,343,67);for(let s=0;s<14;s++)ga(i,54+s*113%690,95+s*67%620,5,"#fff0cc")}else if(t==="stars"){for(let s=0;s<45;s++)ga(i,42+s*113%710,85+s*67%700,3+s%4,"#fff2ce");$e(i,660,157,45,"#f8e6b5")}else if(t==="clouds"){for(let[s,r]of[[100,210],[680,180],[150,580],[660,690]])for(let a=0;a<4;a++)$e(i,s+(a-1.5)*25,r-Math.sin(a)*16,35,"#fff9f2");i.lineWidth=17;for(let[s,r]of["#db9ab6","#eac987","#b4c8ad","#a7bcd8"].entries())i.strokeStyle=r,i.beginPath(),i.arc(400,510,230-s*19,Math.PI,Math.PI*2),i.stroke()}else{i.fillStyle="#fff8ec66",i.beginPath(),i.roundRect(160,131,480,654,[230,230,0,0]),i.fill(),i.strokeStyle="#fff4e4",i.lineWidth=5,i.stroke();for(let s=0;s<7;s++)ms(i,"flower",76+Math.sin(s)*18,185+s*86,43),ms(i,"flower",723+Math.sin(s)*15,130+s*90,45)}i.fillStyle="#fff9ed45",i.beginPath(),i.ellipse(400,786,300,27,0,0,Math.PI*2),i.fill()}function Nf(i){let t=document.createElement("canvas");return t.width=100,t.height=100,ms(t.getContext("2d"),i,50,50,86),t.toDataURL("image/png")}function Uf(i,t,e=1,n={}){oi||(oi=new vi({alpha:!0,antialias:!0,preserveDrawingBuffer:!0})),oi.localClippingEnabled=!0,oi.setPixelRatio(1),oi.setSize(740,710),oi.outputColorSpace=xe,oi.toneMapping=ti,oi.toneMappingExposure=1.2;let s=new Dn;s.add(new xi("#fff3e3","#a58ba3",2.5));let r=new jn("#fff7ec",3);r.position.set(-3,6,6),s.add(r);let a=(n.friends||[]).slice(0,3),o=[{outfit:i},...a],l=[];try{o.forEach((_,g)=>{let m=si(_.outfit,t);l.push(m),m.pose(.7,e,!1);let M=new te;M.position.x=(g-(o.length-1)/2)*1.45,M.add(m.root),s.add(M)});let c=Math.max(4.3,(o.length*1.45+.45)*710/740),u=c*740/710/2,d=c/2-.12,f=new zi(-u,u,c/2,-c/2,.1,30);f.position.set(0,d,9),f.lookAt(0,d,0),oi.render(s,f);let h=document.createElement("canvas");h.width=800,h.height=900;let p=h.getContext("2d");p.fillStyle="#fffaf2",p.fillRect(0,0,800,900),Ly(p,n.background||"rose"),p.drawImage(oi.domElement,30,92,740,710),p.fillStyle="#86546e",p.textAlign="center",p.font="italic 28px Georgia, serif",p.fillText("a little moment, together.",400,43),p.font="600 21px Segoe UI, sans-serif",p.fillText(a.length?`You + ${a.map(_=>_.name).join(" + ")}`:"Made of a little magic",400,860);for(let _ of n.stickers||[])ms(p,_.id,_.x*800,_.y*900,_.size*800);return h.toDataURL("image/png")}finally{l.forEach(c=>c.dispose())}}var _a=(i,t={})=>new sn({color:i,roughness:.76,...t}),Ff=_a("#f7ecdc"),Dy=_a("#dba8b9"),Of=_a("#c6a66e",{metalness:.55,roughness:.36});function Bl(i,t,e,n,s){let r=new he(t,e);return n&&r.position.set(...n),s&&r.scale.set(...s),r.castShadow=!0,r.receiveShadow=!0,i.add(r),r}var Nh=(i,t,e,n)=>Bl(i,new Ue(...t),e,n),Ny=(i,t,e,n)=>Bl(i,new nn(1,16,12),e,n,t),Uh=(i,t,e,n,s)=>Bl(i,new Fe(t,t,e,24),n,s);function Fh(i,t,e,n="#795365",s=2.1){let r=document.createElement("canvas");r.width=640,r.height=128;let a=r.getContext("2d");a.fillStyle="#fffaf2",a.beginPath(),a.roundRect(8,8,624,112,48),a.fill(),a.strokeStyle="#e4c6ce",a.lineWidth=3,a.stroke(),a.font="600 42px Segoe UI, sans-serif",a.textAlign="center",a.textBaseline="middle",a.fillStyle=n,a.fillText(t,320,68);let o=new Mn(r);o.colorSpace=xe;let l=new Nr(new Xs({map:o,depthTest:!0}));return l.position.set(...e),l.scale.set(s,s/5,1),i.add(l),l}function Uy(i,t,e,n,s){let r=new en,a=t/2;return r.moveTo(-a,0),r.lineTo(a,0),r.lineTo(a,e-a),r.absarc(0,e-a,a,0,Math.PI,!1),r.lineTo(-a,0),Bl(i,new pn(r,{depth:.09,bevelEnabled:!0,bevelSize:.035,bevelThickness:.035,bevelSegments:2,steps:1}),n,[0,0,s])}function Bf(i){let t=new vi({antialias:!0,alpha:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"});return t.localClippingEnabled=!0,t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),t.shadowMap.enabled=!0,t.shadowMap.type=rs,t.outputColorSpace=xe,t.toneMapping=ti,t.toneMappingExposure=1.25,t.domElement.className="world-canvas",t.domElement.tabIndex=0,i.replaceChildren(t.domElement),t}function kh(i){i.add(new xi("#fff4e2","#aa8ba5",2.3));let t=new jn("#fff4de",3.2);t.position.set(-3,8,5),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.camera.left=-10,t.shadow.camera.right=10,t.shadow.camera.top=10,t.shadow.camera.bottom=-10,t.shadow.camera.far=28,t.shadow.normalBias=.035,t.shadow.bias=-1e-4,i.add(t);let e=new jn("#dddeff",1);e.position.set(5,4,-4),i.add(e)}var Oh=class{constructor(t,{catalog:e,game:n,onStation:s=()=>{},onNearby:r=()=>{},onView:a=()=>{},onLocation:o=()=>{},onFriend:l=()=>{},onBubble:c=()=>{},onTogether:u=()=>{},onCompanion:d=()=>{},onActivity:f=()=>{},onPaint:h=()=>{},onStyleExit:p=()=>{},onGrab:_=()=>{},onDrag:g=()=>{},onDrop:m=()=>{},onHover:M=()=>{}}={}){if(this.container=t,this.catalog=e,this.onStation=s,this.onNearby=r,this.onView=a,this.onGrab=_,this.onDrag=g,this.onDrop=m,this.onHover=M,this.onLocation=o,this.game=n,this.onFriend=l,this.onBubble=c,this.onTogether=u,this.nextChatAt=9,this.chatCount=0,this.onCompanion=d,this.onActivity=f,this.onPaint=h,this.activity=null,this.activityGoal=null,this.companion=null,this.mirrorRevision=0,this.onStyleExit=p,this.stylingFriend=null,this.seatMotion=new sr,this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.renderer=Bf(t),this.canvas=this.renderer.domElement,this.canvas.setAttribute("aria-label","3D fashion mall. Drag a piece from a rack onto your character to wear it. Use WASD or arrow keys to walk, E to browse, and drag the floor to look around."),this.scene=new Dn,this.scene.background=new Bt("#eedfe5"),this.scene.fog=new Ir("#eedfe5",25,49),this.camera=new Ne(47,1,.1,70),kh(this.scene),this.environment=Tf(this.scene,e,{makeRack:_f,makeDisplay:xf,makeMirror:yf,label:Fh,arch:Uy}),this.canvas.dataset.displayedItems=String(this.environment.interactions.reduce((y,w)=>y+(w.userData.stock?.length||0),0)),this.shoppers=new te,this.scene.add(this.shoppers),this.friendsVisible=!0,this.npcs=[],n)for(let y=0;y<3;y++){let w=new Dl(n,y),T=new te;T.scale.setScalar(.88),this.shoppers.add(T),T.userData.shopperIndex=y,Fh(T,w.name,[0,3.82,0],"#865e77",1.12);let A={brain:w,anchor:T,character:null,seatMotion:new sr};this.npcs.push(A),this.dressShopper(A)}this.fittingStage=new te,this.scene.add(this.fittingStage),this.fittingStage.visible=!1,Uh(this.fittingStage,1.1,.1,Ff,[0,.05,0]),Uh(this.fittingStage,1.12,.035,Of,[0,.035,0]);let b=Nh(this.fittingStage,[60,.05,60],_a("#e9dbe4"),[0,-.07,0]);b.castShadow=!1,this.anchor=new te,this.scene.add(this.anchor),this.position={x:0,z:5.3},this.yaw=0,this.cameraYaw=.18,this.pitch=.4,this.view="walk",this.poseStyle=0,this.active=!0,this.keys=new Set,this.virtual=new Set,this.path=[],this.destinationStation=null,this.nearby=null,this.disposed=!1,this.elapsed=0,this.lastFrame=performance.now(),this.dragging=!1,this.stockSource=null,this.camera.position.set(3,6,12),this.target=new I(0,1.5,3.6),this.abort=new AbortController,this.bind(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.resize(),this.loop()}showCharacter(t){this.character?.dispose(),this.character=si(t,this.catalog),this.character.pose(this.elapsed,this.poseStyle),this.anchor.add(this.character.root),this.canvas.dataset.outfit=JSON.stringify(t),this.draw(0)}setOutfit(t){let e=this.game&&Df(this.outfit,t,this.game);e&&this.friendsVisible&&(this.pendingNotice={text:e,created:this.elapsed}),this.outfit=t,this.stylingFriend||this.showCharacter(t),this.refreshMirror()}editFriend(t){this.stylingFriend=this.npcs.find(e=>e.brain.name===t)||null,this.canvas.dataset.styling=t||"",this.action=null,this.stylingFriend?(this.setView("fit"),this.seatMotion=new sr,this.showCharacter(this.stylingFriend.brain.outfit)):this.outfit&&this.showCharacter(this.outfit)}styleFriend(t,e){let n=this.npcs.find(s=>s.brain.name===t);n&&(n.brain.style(e),this.dressShopper(n),this.stylingFriend===n&&this.showCharacter(n.brain.outfit),this.canvas.dataset.friendOutfits=JSON.stringify(this.friendLooks()))}performAction(t,e={}){this.reduced||!Tl[t]||(this.action={...e,kind:t,started:this.elapsed})}actionFrame(){if(!this.action)return null;let t=(this.elapsed-this.action.started)/Tl[this.action.kind];return t>=1?(this.action=null,null):{...this.action,progress:t}}setTheme(t){this.environment.wall.color.set(t.bg)}setActive(t){this.active=t,t?this.resize():(this.keys.clear(),this.virtual.clear(),this.path=[],this.destinationStation=null)}setPose(t){this.poseStyle=t,this.canvas.dataset.pose=String(t),this.activity?this.refreshMirror():this.setView("fit")}setView(t){t==="walk"&&this.stylingFriend&&this.onStyleExit(),this.leaveActivity();let e=this.view!==t;this.view=t,this.canvas.dataset.view=t,this.path=[],this.destinationStation=null,this.cameraGoal=null,this.faceShop=!1,this.keys.clear(),this.virtual.clear(),e&&(this.pitch=t==="face"?.025:t==="fit"?.16:.43,t!=="walk"&&(this.yaw=this.cameraYaw)),this.onView(t)}resetCamera(){let t=this.view==="face"?"face":"fit";this.setView(t),this.cameraYaw=.18,this.pitch=t==="face"?.025:.16,this.yaw=.18}turn(t){this.setView(this.view==="face"?"face":"fit"),this.cameraYaw+=t}setMove(t,e){e?(this.view!=="walk"&&this.setView("walk"),this.leaveActivity(),this.virtual.add(t)):this.virtual.delete(t)}interact(){this.nearby?.kind?this.startActivity(this.nearby.id):this.nearby&&this.onStation(this.nearby,{browse:!0})}startActivity(t){t==="bench"&&(t=Si.filter(n=>n.kind==="bench").sort((n,s)=>Math.abs(n.z-this.position.z)-Math.abs(s.z-this.position.z))[0].id),t==="mirror"&&(t=`mirror-${["dresses","tops","bottoms","halloween","vip","shoes"].includes(this.currentStore?.id)?this.currentStore.id:"dresses"}`);let e=Rh(t,this.position);e&&(this.setView("walk"),this.activityGoal=e,this.path=ai(this.position,{x:e.approach[0],z:e.approach[1]}),this.canvas.dataset.destination=t,this.canvas.focus({preventScroll:!0}),Math.hypot(this.position.x-e.approach[0],this.position.z-e.approach[1])<.18&&this.enterActivity(e))}enterActivity(t){if(this.activityGoal=null,this.path=[],this.destinationStation=null,this.keys.clear(),this.virtual.clear(),t.kind==="photo"){this.onActivity(t);return}this.activity=t,this.departingActivity=null,t.seat&&this.seatMotion.set(t.seat,this.position,this.yaw,this.reduced),this.yaw=t.yaw,this.cameraYaw=t.yaw+(t.kind==="bench"?.4:0),this.pitch=.16,this.faceShop=!1,this.cameraGoal=null,t.friendSeat&&this.companion?.brain.sitWith(t.friendSeat),this.canvas.dataset.activity=t.id,this.onActivity(t),this.refreshMirror()}leaveActivity(){this.activityGoal=null,this.activity&&(this.departingActivity=this.activity.seat?this.activity:null,this.seatMotion.set(null,this.position,this.yaw,this.reduced),this.activity=null,this.companion?.brain.stand(),this.pitch=.43,this.onActivity(null),this.canvas.dataset.activity="")}refreshMirror(){let t=this.environment?.mirrors.find(s=>s.id===this.activity?.id);if(!t||!this.outfit)return;let e=++this.mirrorRevision,n=new Image;n.onload=()=>{if(e!==this.mirrorRevision||this.disposed)return;let s=document.createElement("canvas");s.width=440,s.height=600;let r=s.getContext("2d");r.fillStyle="#d9e7e8",r.fillRect(0,0,440,600),r.translate(440,0),r.scale(-1,1),r.drawImage(n,0,0),t.material.map?.dispose();let a=new Mn(s);a.colorSpace=xe,t.material.map=a,t.material.color.set("#ffffff"),t.material.needsUpdate=!0},n.src=Bh(this.outfit,this.catalog,this.poseStyle,this.activity.seat?.height??null)}invite(t){let e=this.npcs.find(n=>n.brain.name===t);e&&(this.companion?.brain.dismiss(),this.companion=e,this.setFriends(!0),e.brain.invite(),this.canvas.dataset.companion=t,this.onCompanion(t),this.activity?.friendSeat&&e.brain.sitWith(this.activity.friendSeat))}dismissCompanion(){this.companion?.brain.dismiss(),this.companion=null,this.canvas.dataset.companion="",this.onCompanion(null)}friendLooks(){return this.npcs.map(({brain:t})=>({name:t.name,outfit:this.game.clone(t.outfit)}))}companionLook(){return this.companion?{name:this.companion.brain.name,outfit:this.game.clone(this.companion.brain.outfit)}:null}suggest(t){let e=this.companion||this.friend;if(!e)return null;let n=Lf(this.outfit,this.game,this.currentStore?.id,this.chatCount++,t);return n&&this.say(e,n.text,1),n}visit(t){let e=Tn.find(n=>n.id===t);e&&(this.setView("walk"),this.destinationStation=e,this.path=ai(this.position,{x:e.approach[0],z:e.approach[1]}),Ph(this.position)?.id===e.storeId&&(this.cameraGoal=-Math.sign(e.x)*Math.PI/2),this.canvas.dataset.destination=t,this.canvas.focus({preventScroll:!0}))}dressShopper(t){t.character?.dispose(),t.character=si(t.brain.outfit,this.catalog),t.character.root.traverse(e=>{e.isMesh&&(e.castShadow=!1)}),t.anchor.add(t.character.root)}setFriends(t){this.friendsVisible=t,this.shoppers.visible=t&&this.view==="walk",this.canvas.dataset.friends=String(t),t||(this.dismissCompanion(),this.speech=null,this.pendingNotice=null,this.friend=null,this.onFriend(null),this.onBubble(null))}canTalk(t){return Math.hypot(t.brain.position.x-this.position.x,t.brain.position.z-this.position.z)<4.8&&fa(this.position,t.brain.position,wn,.06)}say(t,e,n=2){!t||!this.friendsVisible||this.view!=="walk"||(!t.brain.seat&&!t.brain.seatGoal&&t.brain.greet(this.position,n),this.speech={npc:t,text:e,until:this.elapsed+6},this.lastSpeechAt=this.elapsed,this.nextChatAt=this.elapsed+22,this.canvas.dataset.lastGreeting=`${t.brain.name}: ${e}`)}greet(){this.friend&&this.say(this.friend,Fl(this.outfit,this.game,this.chatCount++))}poseTogether(){if(!this.friend)return;let t=8+this.chatCount++%8;this.poseStyle=t,this.canvas.dataset.pose=String(t),this.activity?.seat||(this.yaw=this.cameraYaw),this.path=[],this.destinationStation=null,this.refreshMirror(),this.say(this.friend,"Matching poses! Ready\u2026 three, two, one! \u2728",t),this.friend.brain.yaw=this.cameraYaw,this.onTogether(t)}updateFriends(){let t=this.shoppers.visible&&!this.dragging,e=t?this.npcs.filter(a=>a.anchor.visible&&this.canTalk(a)).sort((a,o)=>Math.hypot(a.brain.position.x-this.position.x,a.brain.position.z-this.position.z)-Math.hypot(o.brain.position.x-this.position.x,o.brain.position.z-this.position.z))[0]:null;if(e!==this.friend&&(this.friend=e,this.onFriend(e?.brain.name||null)),this.speech&&this.elapsed>=this.speech.until&&(this.speech=null),this.pendingNotice&&this.elapsed-this.pendingNotice.created>45&&(this.pendingNotice=null),e&&this.pendingNotice&&this.elapsed-this.pendingNotice.created>.6&&(!this.speech||this.elapsed-this.lastSpeechAt>3)?(this.say(e,this.pendingNotice.text,1),this.pendingNotice=null):e&&!this.speech&&this.elapsed>this.nextChatAt&&this.say(e,Fl(this.outfit,this.game,this.chatCount++)),!this.speech||!t||!this.speech.npc.anchor.visible){this.onBubble(null);return}let{npc:n,text:s}=this.speech,r=n.anchor.localToWorld(new I(0,4.05,0)).project(this.camera);if(Math.abs(r.x)>1.12||r.z>1||r.z<-1){this.onBubble(null);return}this.onBubble({name:n.brain.name,text:s,left:ue.clamp((r.x+1)*50,18,82),top:ue.clamp((1-r.y)*50,30,86)})}setDressDrag(t,e=null){this.dragging=t,t?(this.keys.clear(),this.virtual.clear(),this.path=[],this.destinationStation=null,this.stockSource=e,e&&(e.visible=!1)):(this.stockSource&&(this.stockSource.visible=!0),this.stockSource=null),this.canvas.dataset.dragging=String(t)}dropBounds(){if(!this.character)return null;this.anchor.updateWorldMatrix(!0,!0);let t=new Ye().setFromObject(this.character.root),e=this.canvas.getBoundingClientRect(),n=[];for(let l of[t.min.x,t.max.x])for(let c of[t.min.y,t.max.y])for(let u of[t.min.z,t.max.z]){let d=new I(l,c,u).project(this.camera);n.push({x:e.left+(d.x+1)*e.width/2,y:e.top+(1-d.y)*e.height/2})}let s=Math.max(e.left,Math.min(...n.map(l=>l.x))-20),r=Math.max(e.top,Math.min(...n.map(l=>l.y))-15),a=Math.min(e.right,Math.max(...n.map(l=>l.x))+20),o=Math.min(e.bottom,Math.max(...n.map(l=>l.y))+15);return{left:s,top:r,width:a-s,height:o-r}}isCharacterDrop(t,e){let n=this.dropBounds();return!!n&&t>=n.left&&t<=n.left+n.width&&e>=n.top&&e<=n.top+n.height}rayAt(t){let e=this.canvas.getBoundingClientRect(),n=new ss;return n.setFromCamera(new ot((t.clientX-e.left)/e.width*2-1,-(t.clientY-e.top)/e.height*2+1),this.camera),n}rackHit(t){return this.view!=="walk"?null:this.rayAt(t).intersectObjects(this.environment.interactions,!0).find(n=>{for(let s=n.object;s;s=s.parent)if(!s.visible)return!1;return!0})||null}itemAt(t){let n=this.rackHit(t)?.object;for(;n&&!n.userData.itemId;)n=n.parent;return n||null}resize(){let{width:t,height:e}=this.container.getBoundingClientRect();t<2||e<2||(this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix())}bind(){let t=this.abort.signal,e=this.canvas;document.addEventListener("keydown",s=>{if(!this.active||document.querySelector("dialog[open]")||document.activeElement!==e&&document.activeElement!==document.body)return;let r=s.key.toLowerCase();if(this.dragging){r==="escape"&&this.onDrop(null,!0);return}["w","a","s","d","arrowup","arrowleft","arrowdown","arrowright"].includes(r)&&(s.preventDefault(),this.view!=="walk"&&this.setView("walk"),this.leaveActivity(),this.keys.add(r),this.path=[]),r==="e"&&(s.preventDefault(),this.interact()),r==="f"&&(s.preventDefault(),this.greet()),r==="escape"&&this.activity&&(s.preventDefault(),this.leaveActivity())},{signal:t}),document.addEventListener("keyup",s=>this.keys.delete(s.key.toLowerCase()),{signal:t}),window.addEventListener("blur",()=>{this.keys.clear(),this.virtual.clear(),this.dragging&&this.onDrop(null,!0)},{signal:t}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.keys.clear(),this.virtual.clear())},{signal:t}),e.addEventListener("blur",()=>this.keys.clear(),{signal:t});let n=null;e.addEventListener("pointerdown",s=>{if(s.button!==0)return;e.focus({preventScroll:!0}),e.setPointerCapture(s.pointerId);let r=this.itemAt(s);e.dataset.lastGrab=r?.userData.itemId||"none",n={id:s.pointerId,x:s.clientX,y:s.clientY,startX:s.clientX,startY:s.clientY,moved:!1,item:r,started:!1}},{signal:t}),e.addEventListener("pointermove",s=>{if(!n){let o=this.itemAt(s);this.canvas.style.cursor=o?"grab":"move",this.onHover(o?.userData.itemId||null,s);return}let r=s.clientX-n.x,a=s.clientY-n.y;n.moved||(n.moved=Math.hypot(s.clientX-n.startX,s.clientY-n.startY)>6),n.moved&&(n.item?(n.started||(n.started=!0,this.setDressDrag(!0,n.item),this.performAction("reach"),this.onGrab(n.item.userData.itemId,s)),this.dragging&&this.onDrag(s)):(this.cameraGoal=null,this.cameraYaw-=r*.009,this.pitch=ue.clamp(this.pitch+a*.004,.025,.85))),n.x=s.clientX,n.y=s.clientY},{signal:t}),e.addEventListener("pointerup",s=>{if(!n)return;let r=!n.moved,a=n.started;n=null,e.hasPointerCapture(s.pointerId)&&e.releasePointerCapture(s.pointerId),a&&this.dragging?this.onDrop(s,!1):r&&this.view==="walk"&&this.pick(s)},{signal:t}),e.addEventListener("pointercancel",()=>{n=null,this.dragging&&this.onDrop(null,!0)},{signal:t}),e.addEventListener("pointerleave",()=>this.onHover(null),{signal:t})}pick(t){if(this.activity?.kind==="beauty"&&this.isCharacterDrop(t.clientX,t.clientY)){this.onPaint();return}let e=this.rayAt(t),n=this.rackHit(t);if(this.shoppers.visible){let o=e.intersectObjects(this.npcs.filter(l=>l.anchor.visible).map(l=>l.anchor),!0)[0];if(o&&(!n||o.distance<n.distance)){let l=o.object;for(;l&&l.userData.shopperIndex===void 0;)l=l.parent;let c=this.npcs[l?.userData.shopperIndex];if(c&&this.canTalk(c)){this.say(c,Fl(this.outfit,this.game,this.chatCount++));return}}}let s=n?.object;for(;s&&!s.userData.activity;)s=s.parent;if(s){this.startActivity(s.userData.activity);return}this.leaveActivity();let r=null;if(n){let o=n.object;for(;o&&!o.userData.station;)o=o.parent;r=o?.userData.station}let a=new I;if(r){if(a.set(r.approach[0],0,r.approach[1]),this.destinationStation=r,Math.hypot(a.x-this.position.x,a.z-this.position.z)<1.3){this.onStation(r,{browse:!0});return}}else{if(!e.ray.intersectPlane(new Qe(new I(0,1,0),0),a))return;this.destinationStation=null}this.path=ai(this.position,{x:a.x,z:a.z}),this.canvas.dataset.destination=r?.id||"floor"}walk(t){["blockheel","sparkleheel"].includes(this.catalog[this.outfit?.shoes?.id]?.shape)&&(t*=.85);let e=new Set([...this.keys,...this.virtual]),n=Number(e.has("d")||e.has("arrowright")||e.has("right"))-Number(e.has("a")||e.has("arrowleft")||e.has("left")),s=Number(e.has("s")||e.has("arrowdown")||e.has("down"))-Number(e.has("w")||e.has("arrowup")||e.has("up"));if(n||s){let u=n;n=n*Math.cos(this.cameraYaw)+s*Math.sin(this.cameraYaw),s=s*Math.cos(this.cameraYaw)-u*Math.sin(this.cameraYaw),this.path=[],this.destinationStation=null,this.faceShop=!1,this.cameraGoal=null}let r,a;if(!n&&!s&&this.path.length){let u=pa(this.position,this.path,t);r=u.position,this.path=u.path,a=u.distance}else r=Ll(this.position,{x:n,z:s},t,wn),a=Math.hypot(r.x-this.position.x,r.z-this.position.z);if(a>1e-4){let u=Math.atan2(r.x-this.position.x,r.z-this.position.z);this.yaw+=Math.atan2(Math.sin(u-this.yaw),Math.cos(u-this.yaw))*(1-Math.exp(-t*12))}if(this.position=r,!this.path.length&&this.activityGoal){let u=this.activityGoal;this.activityGoal=null,Math.hypot(r.x-u.approach[0],r.z-u.approach[1])<.35&&this.enterActivity(u)}if(!this.path.length&&this.destinationStation){let u=this.destinationStation;this.destinationStation=null,Math.hypot(r.x-u.approach[0],r.z-u.approach[1])<1.4&&(this.faceShop=u.id!=="runway",this.onStation(u))}let l=Si.map(u=>Rh(u.id,this.position)).find(u=>Math.hypot(r.x-u.approach[0],r.z-u.approach[1])<1.05)||Sf(this.position);l?.id!==this.nearby?.id&&(this.nearby=l,this.onNearby(l));let c=Ph(r);return c?.id!==this.currentStore?.id&&(this.currentStore=c,this.onLocation(c),this.destinationStation&&(this.cameraGoal=c?-c.side*Math.PI/2:.18)),this.canvas.dataset.position=`${r.x.toFixed(2)},${r.z.toFixed(2)}`,this.canvas.dataset.moving=String(a>1e-4),a}draw(t){let e=this.view==="walk"&&!this.dragging&&!this.activity&&!this.seatMotion.busy?this.walk(t):0,n=this.elapsed;e&&(this.action=null);let s=this.actionFrame();this.canvas.dataset.action=s?.kind||"",this.cameraGoal!=null&&(this.cameraYaw+=Math.atan2(Math.sin(this.cameraGoal-this.cameraYaw),Math.cos(this.cameraGoal-this.cameraYaw))*(1-Math.exp(-t*4))),this.faceShop&&!e&&(this.yaw+=Math.atan2(Math.sin(this.cameraYaw-this.yaw),Math.cos(this.cameraYaw-this.yaw))*(1-Math.exp(-t*5)));let r=this.activity?.seat,a=this.seatMotion.update(t,this.position,this.yaw),o=this.activity?.kind==="beauty",l=o||this.activity?.kind==="salon";this.character&&(this.anchor.position.set(a.x,a.blend?0:this.view==="walk"?-.04:.08,a.z),this.anchor.rotation.y=a.yaw,this.character.animate(n,l?0:this.poseStyle,{distance:e,dt:t,seatHeight:a.blend?a.height:null,seatBlend:a.blend,action:s})),this.canvas.dataset.seatBlend=a.blend.toFixed(3);let c=this.activity?.kind==="beauty"?2.65:this.activity?.kind==="bench"?3.9:this.activity?4.1:this.view==="face"?2.2:this.view==="fit"?6.1:9.7,u=r?this.activity.kind==="beauty"?2.13:1.45:this.view==="face"?2.88:this.view==="fit"?1.92:1.55;this.target.set(a.x,u,a.z);let d=new I(a.x+Math.sin(this.cameraYaw)*c*Math.cos(this.pitch),u+Math.sin(this.pitch)*c,a.z+Math.cos(this.cameraYaw)*c*Math.cos(this.pitch));if(l&&this.character){this.anchor.updateWorldMatrix(!0,!0);let h=this.character.bones.head.getWorldPosition(new I),p=Dh(h,o?this.activity.yaw:this.cameraYaw,this.camera.aspect);this.target.copy(p.target),d.copy(p.position),o||d.sub(p.target).multiplyScalar(1.2).add(p.target)}this.seatMotion.busy||(this.departingActivity=null);let f=this.view==="walk"?this.activity||this.departingActivity:null;this.camera.position.copy(vf(this.camera.position,d,f,this.camera,t?1-Math.exp(-t*7):1)),this.camera.lookAt(this.target);for(let h of this.environment.activityOccluders)h.object.visible=h.id!==f?.id;this.environment.room.visible=this.view==="walk",this.fittingStage.visible=this.view!=="walk",this.fittingStage.position.set(this.position.x,0,this.position.z),this.shoppers.visible=this.view==="walk"&&this.friendsVisible&&!l;for(let h of this.npcs){let p=this.shoppers.visible&&!this.dragging&&!h.seatMotion.busy?h.brain.tick(t,{x:a.x,z:a.z,yaw:this.yaw},this.npcs.filter(m=>m!==h).map(m=>m.brain.position)):{walking:!1,pose:0};p.changed&&this.dressShopper(h);let _=h.brain.seat;h.seatMotion.set(_,h.brain.position,h.brain.yaw,this.reduced);let g=h.seatMotion.update(t,h.brain.position,h.brain.yaw);h.anchor.visible=!(this.activity&&h!==this.companion&&Math.hypot(g.x-a.x,g.z-a.z)<4.5),h.anchor.position.set(g.x,g.blend?0:-.04,g.z),h.anchor.rotation.y=g.yaw,h.character.animate(n+this.npcs.indexOf(h),p.pose,{distance:p.distance||0,dt:t,seatHeight:g.blend?g.height/.88:null,seatBlend:g.blend})}(!this.lastNpcReport||n-this.lastNpcReport>.5)&&(this.canvas.dataset.shoppers=JSON.stringify(this.npcs.map(({brain:h})=>({name:h.name,activity:h.description(),x:+h.position.x.toFixed(2),z:+h.position.z.toFixed(2),changes:h.changes}))),this.lastNpcReport=n),this.environment.update(this.camera,a,n),this.updateFriends(),this.renderer.render(this.scene,this.camera),this.canvas.dataset.facing=this.cameraYaw.toFixed(2),this.canvas.dataset.view=this.view,this.canvas.dataset.ready="true",this.canvas.dataset.cameraPosition=this.camera.position.toArray().map(h=>h.toFixed(3)).join(",")}loop(){if(this.disposed)return;this.frame=requestAnimationFrame(()=>this.loop());let t=performance.now(),e=Math.min((t-this.lastFrame)/1e3,.05);this.lastFrame=t,this.active&&!document.hidden&&!document.querySelector("dialog[open]")&&(this.elapsed+=e,this.draw(e))}portrait(t){return Bh(t,this.catalog)}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),this.abort.abort(),this.resizeObserver.disconnect(),this.character?.dispose(),this.npcs.forEach(t=>t.character.dispose()),this.renderer.dispose()}},li;function Bh(i,t,e=1,n=null){li||(li=new vi({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})),li.localClippingEnabled=!0,li.setSize(440,600),li.setPixelRatio(1),li.outputColorSpace=xe,li.toneMapping=ti,li.toneMappingExposure=1.2;let s=new Dn;kh(s);let r=si(i,t);s.add(r.root),r.pose(.7,e,!1),n!==null&&r.animate(.7,e,{dt:0,seatHeight:n}),r.root.rotation.y-=.15;let a=new Ne(35,440/600,.1,30);a.position.set(0,n===null?2:1.4,6.8),a.lookAt(0,n===null?1.72:1.2,0),li.render(s,a);let o=li.domElement.toDataURL("image/png");return r.dispose(),o}var zh=class{constructor(t,e){this.container=t,this.catalog=e,this.renderer=Bf(t),this.renderer.domElement.tabIndex=-1,this.renderer.domElement.setAttribute("aria-label","Your character walking the 3D runway"),this.scene=new Dn,this.scene.background=new Bt("#dec4d5"),kh(this.scene);let n=Nh(this.scene,[11,.1,16],Ff,[0,-.08,0]);n.receiveShadow=!0,this.carpet=Nh(this.scene,[2.1,.016,14],Dy,[0,-.018,0]),this.rails=[];for(let s of[-1,1]){let r=new te;r.userData.side=s,this.scene.add(r),this.rails.push(r);for(let a=0;a<9;a++)Uh(r,.04,.75,Of,[0,.37,-a]),Ny(r,[.07,.07,.07],_a("#fff4cf",{emissive:"#fff0bb",emissiveIntensity:.8}),[0,.8,-a])}this.camera=new Ne(43,1,.1,40),this.camera.position.set(.1,2.9,8.4),this.camera.lookAt(0,1.5,-.9),this.anchor=new te,this.scene.add(this.anchor),this.active=!1,this.reduced=matchMedia("(prefers-reduced-motion: reduce)").matches,this.audience=Pf(this.scene,{label:Fh,reduced:this.reduced}),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),this.loop()}resize(){let{width:t,height:e}=this.container.getBoundingClientRect();if(t<2||e<2)return;this.renderer.setSize(t,e,!1),this.camera.aspect=t/e;let n=Math.max(3,(this.friends?.length||0)*1.35+2),s=Math.max(8.4,n/(2*Math.tan(43*Math.PI/360)*this.camera.aspect));this.camera.position.set(.1,2.9,s),this.camera.lookAt(0,1.5,-.9),this.camera.updateProjectionMatrix()}show(t,e=1,n=[]){this.character?.dispose();for(let a of this.friends||[])a.character.dispose(),a.anchor.removeFromParent();let s=(Array.isArray(n)?n:n?[n]:[]).slice(0,3),r=s.length+1;this.character=si(t,this.catalog),this.anchor.add(this.character.root),this.anchor.position.x=-(r-1)*.675,this.friends=s.map((a,o)=>{let l=new te,c=si(a.outfit,this.catalog);return l.position.x=(o+1-(r-1)/2)*1.35,l.scale.setScalar(.88),l.add(c.root),this.scene.add(l),{anchor:l,character:c,name:a.name}}),this.carpet.scale.x=r>2?2.65:1;for(let a of this.rails)a.position.x=a.userData.side*(r>2?3.2:1.8);for(let a of this.audience.people)a.person.position.x=a.side*(r>2?4:2.9);this.renderer.domElement.dataset.companion=s.map(a=>a.name).join(", "),this.renderer.domElement.dataset.friends=JSON.stringify(s),this.renderer.domElement.setAttribute("aria-label",`Your character on the runway${s.length?" with "+s.map(a=>a.name).join(", "):""}`),this.poseStyle=e,this.started=performance.now(),this.lastTime=0,this.anchor.position.z=this.reduced?0:-3.2,this.active=!0,this.renderer.domElement.dataset.audience=String(this.audience.people.length),this.resize()}hide(){this.active=!1}loop(){if(this.frame=requestAnimationFrame(()=>this.loop()),!this.active||document.hidden)return;let t=(performance.now()-this.started)/1e3,e=Math.min(.05,t-this.lastTime);this.lastTime=t;let n=this.reduced?1:Math.min(1,t/3.5),s=n<.85?n:.85+(n-.85)-(n-.85)**2/.3,a=-3.2+3.2*Math.min(1,s/.925),o=Math.abs(a-this.anchor.position.z);this.anchor.position.z=a,this.anchor.rotation.y=n<1||this.reduced?0:Math.sin((t-3.5)*.4)*.14,this.character?.animate(t,this.poseStyle,{distance:Math.min(o,.1),dt:e,strut:!0});for(let[l,c]of(this.friends||[]).entries())c.anchor.position.z=a-.18-l%2*.13,c.anchor.rotation.y=this.anchor.rotation.y,c.character.animate(t+l*.12,this.poseStyle,{distance:Math.min(o,.1),dt:e,strut:!0});this.audience.update(t,a),this.renderer.render(this.scene,this.camera)}};return Kf(Fy);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
