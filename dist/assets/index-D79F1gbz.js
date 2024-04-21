(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const is="163",Un={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},In={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Oo=0,gs=1,Bo=2,Ka=1,zo=2,je=3,hn=0,ge=1,Ne=2,ln=0,ti=1,_s=2,vs=3,xs=4,Ho=5,Tn=100,Vo=101,Go=102,ko=103,Wo=104,Xo=200,Yo=201,qo=202,jo=203,Zr=204,$r=205,Ko=206,Zo=207,$o=208,Jo=209,Qo=210,tl=211,el=212,nl=213,il=214,rl=0,sl=1,al=2,Qi=3,ol=4,ll=5,cl=6,ul=7,rs=0,hl=1,dl=2,cn=0,fl=1,pl=2,ml=3,gl=4,_l=5,vl=6,xl=7,Za=300,ii=301,ri=302,Jr=303,Qr=304,ar=306,ts=1e3,bn=1001,es=1002,we=1003,Ml=1004,bi=1005,Le=1006,mr=1007,wn=1008,un=1009,Sl=1010,El=1011,$a=1012,Ja=1013,si=1014,on=1015,tr=1016,Qa=1017,to=1018,yi=1020,yl=35902,Tl=1021,Al=1022,Oe=1023,bl=1024,wl=1025,ei=1026,Mi=1027,Rl=1028,eo=1029,Cl=1030,no=1031,io=1033,gr=33776,_r=33777,vr=33778,xr=33779,Ms=35840,Ss=35841,Es=35842,ys=35843,ro=36196,Ts=37492,As=37496,bs=37808,ws=37809,Rs=37810,Cs=37811,Ps=37812,Ls=37813,Ds=37814,Us=37815,Is=37816,Ns=37817,Fs=37818,Os=37819,Bs=37820,zs=37821,Mr=36492,Hs=36494,Vs=36495,Pl=36283,Gs=36284,ks=36285,Ws=36286,Ll=3200,Dl=3201,so=0,Ul=1,an="",De="srgb",pn="srgb-linear",ss="display-p3",or="display-p3-linear",er="linear",qt="srgb",nr="rec709",ir="p3",Nn=7680,Xs=519,Il=512,Nl=513,Fl=514,ao=515,Ol=516,Bl=517,zl=518,Hl=519,Ys=35044,qs="300 es",Ke=2e3,rr=2001;class Pn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let js=1234567;const vi=Math.PI/180,Si=180/Math.PI;function oi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ue[i&255]+ue[i>>8&255]+ue[i>>16&255]+ue[i>>24&255]+"-"+ue[t&255]+ue[t>>8&255]+"-"+ue[t>>16&15|64]+ue[t>>24&255]+"-"+ue[e&63|128]+ue[e>>8&255]+"-"+ue[e>>16&255]+ue[e>>24&255]+ue[n&255]+ue[n>>8&255]+ue[n>>16&255]+ue[n>>24&255]).toLowerCase()}function de(i,t,e){return Math.max(t,Math.min(e,i))}function as(i,t){return(i%t+t)%t}function Vl(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Gl(i,t,e){return i!==t?(e-i)/(t-i):0}function xi(i,t,e){return(1-e)*i+e*t}function kl(i,t,e,n){return xi(i,t,1-Math.exp(-e*n))}function Wl(i,t=1){return t-Math.abs(as(i,t*2)-t)}function Xl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Yl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ql(i,t){return i+Math.floor(Math.random()*(t-i+1))}function jl(i,t){return i+Math.random()*(t-i)}function Kl(i){return i*(.5-Math.random())}function Zl(i){i!==void 0&&(js=i);let t=js+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $l(i){return i*vi}function Jl(i){return i*Si}function Ql(i){return(i&i-1)===0&&i!==0}function tc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ec(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function nc(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),m=s((t-n)/2),p=o((t-n)/2),g=s((n-t)/2),x=o((n-t)/2);switch(r){case"XYX":i.set(a*u,l*m,l*p,a*c);break;case"YZY":i.set(l*p,a*u,l*m,a*c);break;case"ZXZ":i.set(l*m,l*p,a*u,a*c);break;case"XZX":i.set(a*u,l*x,l*g,a*c);break;case"YXY":i.set(l*g,a*u,l*x,a*c);break;case"ZYZ":i.set(l*x,l*g,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Jn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ic={DEG2RAD:vi,RAD2DEG:Si,generateUUID:oi,clamp:de,euclideanModulo:as,mapLinear:Vl,inverseLerp:Gl,lerp:xi,damp:kl,pingpong:Wl,smoothstep:Xl,smootherstep:Yl,randInt:ql,randFloat:jl,randFloatSpread:Kl,seededRandom:Zl,degToRad:$l,radToDeg:Jl,isPowerOfTwo:Ql,ceilPowerOfTwo:tc,floorPowerOfTwo:ec,setQuaternionFromProperEuler:nc,normalize:fe,denormalize:Jn};class St{constructor(t=0,e=0){St.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Lt{constructor(t,e,n,r,s,o,a,l,c){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],m=n[7],p=n[2],g=n[5],x=n[8],E=r[0],d=r[3],h=r[6],b=r[1],M=r[4],w=r[7],F=r[2],R=r[5],A=r[8];return s[0]=o*E+a*b+l*F,s[3]=o*d+a*M+l*R,s[6]=o*h+a*w+l*A,s[1]=c*E+u*b+m*F,s[4]=c*d+u*M+m*R,s[7]=c*h+u*w+m*A,s[2]=p*E+g*b+x*F,s[5]=p*d+g*M+x*R,s[8]=p*h+g*w+x*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],m=u*o-a*c,p=a*l-u*s,g=c*s-o*l,x=e*m+n*p+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/x;return t[0]=m*E,t[1]=(r*c-u*n)*E,t[2]=(a*n-r*o)*E,t[3]=p*E,t[4]=(u*e-r*l)*E,t[5]=(r*s-a*e)*E,t[6]=g*E,t[7]=(n*l-c*e)*E,t[8]=(o*e-n*s)*E,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Sr.makeScale(t,e)),this}rotate(t){return this.premultiply(Sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sr=new Lt;function oo(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rc(){const i=sr("canvas");return i.style.display="block",i}const Ks={};function sc(i){i in Ks||(Ks[i]=!0,console.warn(i))}const Zs=new Lt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$s=new Lt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wi={[pn]:{transfer:er,primaries:nr,toReference:i=>i,fromReference:i=>i},[De]:{transfer:qt,primaries:nr,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[or]:{transfer:er,primaries:ir,toReference:i=>i.applyMatrix3($s),fromReference:i=>i.applyMatrix3(Zs)},[ss]:{transfer:qt,primaries:ir,toReference:i=>i.convertSRGBToLinear().applyMatrix3($s),fromReference:i=>i.applyMatrix3(Zs).convertLinearToSRGB()}},ac=new Set([pn,or]),Yt={enabled:!0,_workingColorSpace:pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ac.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=wi[t].toReference,r=wi[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return wi[i].primaries},getTransfer:function(i){return i===an?er:wi[i].transfer}};function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Er(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fn;class oc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Fn===void 0&&(Fn=sr("canvas")),Fn.width=t.width,Fn.height=t.height;const n=Fn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Fn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ni(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ni(e[n]/255)*255):e[n]=ni(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lc=0;class lo{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yr(r[o].image)):s.push(yr(r[o]))}else s=yr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function yr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cc=0;class _e extends Pn{constructor(t=_e.DEFAULT_IMAGE,e=_e.DEFAULT_MAPPING,n=bn,r=bn,s=Le,o=wn,a=Oe,l=un,c=_e.DEFAULT_ANISOTROPY,u=an){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=oi(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Za)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ts:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case es:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ts:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case es:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_e.DEFAULT_IMAGE=null;_e.DEFAULT_MAPPING=Za;_e.DEFAULT_ANISOTROPY=1;class Zt{constructor(t=0,e=0,n=0,r=1){Zt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],m=l[8],p=l[1],g=l[5],x=l[9],E=l[2],d=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(m-E)<.01&&Math.abs(x-d)<.01){if(Math.abs(u+p)<.1&&Math.abs(m+E)<.1&&Math.abs(x+d)<.1&&Math.abs(c+g+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,w=(g+1)/2,F=(h+1)/2,R=(u+p)/4,A=(m+E)/4,H=(x+d)/4;return M>w&&M>F?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=R/n,s=A/n):w>F?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=R/r,s=H/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=A/s,r=H/s),this.set(n,r,s,e),this}let b=Math.sqrt((d-x)*(d-x)+(m-E)*(m-E)+(p-u)*(p-u));return Math.abs(b)<.001&&(b=1),this.x=(d-x)/b,this.y=(m-E)/b,this.z=(p-u)/b,this.w=Math.acos((c+g+h-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uc extends Pn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Zt(0,0,t,e),this.scissorTest=!1,this.viewport=new Zt(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new _e(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class co extends _e{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=we,this.minFilter=we,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hc extends _e{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=we,this.minFilter=we,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],m=n[r+3];const p=s[o+0],g=s[o+1],x=s[o+2],E=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=m;return}if(a===1){t[e+0]=p,t[e+1]=g,t[e+2]=x,t[e+3]=E;return}if(m!==E||l!==p||c!==g||u!==x){let d=1-a;const h=l*p+c*g+u*x+m*E,b=h>=0?1:-1,M=1-h*h;if(M>Number.EPSILON){const F=Math.sqrt(M),R=Math.atan2(F,h*b);d=Math.sin(d*R)/F,a=Math.sin(a*R)/F}const w=a*b;if(l=l*d+p*w,c=c*d+g*w,u=u*d+x*w,m=m*d+E*w,d===1-a){const F=1/Math.sqrt(l*l+c*c+u*u+m*m);l*=F,c*=F,u*=F,m*=F}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],m=s[o],p=s[o+1],g=s[o+2],x=s[o+3];return t[e]=a*x+u*m+l*g-c*p,t[e+1]=l*x+u*p+c*m-a*g,t[e+2]=c*x+u*g+a*p-l*m,t[e+3]=u*x-a*m-l*p-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),m=a(s/2),p=l(n/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=p*u*m+c*g*x,this._y=c*g*m-p*u*x,this._z=c*u*x+p*g*m,this._w=c*u*m-p*g*x;break;case"YXZ":this._x=p*u*m+c*g*x,this._y=c*g*m-p*u*x,this._z=c*u*x-p*g*m,this._w=c*u*m+p*g*x;break;case"ZXY":this._x=p*u*m-c*g*x,this._y=c*g*m+p*u*x,this._z=c*u*x+p*g*m,this._w=c*u*m-p*g*x;break;case"ZYX":this._x=p*u*m-c*g*x,this._y=c*g*m+p*u*x,this._z=c*u*x-p*g*m,this._w=c*u*m+p*g*x;break;case"YZX":this._x=p*u*m+c*g*x,this._y=c*g*m+p*u*x,this._z=c*u*x-p*g*m,this._w=c*u*m-p*g*x;break;case"XZY":this._x=p*u*m-c*g*x,this._y=c*g*m-p*u*x,this._z=c*u*x+p*g*m,this._w=c*u*m+p*g*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],m=e[10],p=n+a+m;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(u-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(n>a&&n>m){const g=2*Math.sqrt(1+n-a-m);this._w=(u-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>m){const g=2*Math.sqrt(1+a-n-m);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+u)/g}else{const g=2*Math.sqrt(1+m-n-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*r+e*this._y,this._z=g*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),m=Math.sin((1-e)*u)/c,p=Math.sin(e*u)/c;return this._w=o*m+this._w*p,this._x=n*m+this._x*p,this._y=r*m+this._y*p,this._z=s*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Js.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Js.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),m=2*(s*n-o*e);return this.x=e+l*c+o*m-a*u,this.y=n+l*u+a*c-s*m,this.z=r+l*m+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tr.copy(this).projectOnVector(t),this.sub(Tr)}reflect(t){return this.sub(Tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new C,Js=new Cn;class Ti{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Re.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Re.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Re.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Re):Re.fromBufferAttribute(s,o),Re.applyMatrix4(t.matrixWorld),this.expandByPoint(Re);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ri.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ri.copy(n.boundingBox)),Ri.applyMatrix4(t.matrixWorld),this.union(Ri)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Re),Re.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(di),Ci.subVectors(this.max,di),On.subVectors(t.a,di),Bn.subVectors(t.b,di),zn.subVectors(t.c,di),Je.subVectors(Bn,On),Qe.subVectors(zn,Bn),_n.subVectors(On,zn);let e=[0,-Je.z,Je.y,0,-Qe.z,Qe.y,0,-_n.z,_n.y,Je.z,0,-Je.x,Qe.z,0,-Qe.x,_n.z,0,-_n.x,-Je.y,Je.x,0,-Qe.y,Qe.x,0,-_n.y,_n.x,0];return!Ar(e,On,Bn,zn,Ci)||(e=[1,0,0,0,1,0,0,0,1],!Ar(e,On,Bn,zn,Ci))?!1:(Pi.crossVectors(Je,Qe),e=[Pi.x,Pi.y,Pi.z],Ar(e,On,Bn,zn,Ci))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Re).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Re).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ke[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ke[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ke[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ke[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ke[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ke[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ke[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ke[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ke),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ke=[new C,new C,new C,new C,new C,new C,new C,new C],Re=new C,Ri=new Ti,On=new C,Bn=new C,zn=new C,Je=new C,Qe=new C,_n=new C,di=new C,Ci=new C,Pi=new C,vn=new C;function Ar(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){vn.fromArray(i,s);const a=r.x*Math.abs(vn.x)+r.y*Math.abs(vn.y)+r.z*Math.abs(vn.z),l=t.dot(vn),c=e.dot(vn),u=n.dot(vn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dc=new Ti,fi=new C,br=new C;class lr{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dc.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;fi.subVectors(t,this.center);const e=fi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(fi,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(fi.copy(t.center).add(br)),this.expandByPoint(fi.copy(t.center).sub(br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const We=new C,wr=new C,Li=new C,tn=new C,Rr=new C,Di=new C,Cr=new C;class os{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,We)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=We.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(We.copy(this.origin).addScaledVector(this.direction,e),We.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){wr.copy(t).add(e).multiplyScalar(.5),Li.copy(e).sub(t).normalize(),tn.copy(this.origin).sub(wr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Li),a=tn.dot(this.direction),l=-tn.dot(Li),c=tn.lengthSq(),u=Math.abs(1-o*o);let m,p,g,x;if(u>0)if(m=o*l-a,p=o*a-l,x=s*u,m>=0)if(p>=-x)if(p<=x){const E=1/u;m*=E,p*=E,g=m*(m+o*p+2*a)+p*(o*m+p+2*l)+c}else p=s,m=Math.max(0,-(o*p+a)),g=-m*m+p*(p+2*l)+c;else p=-s,m=Math.max(0,-(o*p+a)),g=-m*m+p*(p+2*l)+c;else p<=-x?(m=Math.max(0,-(-o*s+a)),p=m>0?-s:Math.min(Math.max(-s,-l),s),g=-m*m+p*(p+2*l)+c):p<=x?(m=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+c):(m=Math.max(0,-(o*s+a)),p=m>0?s:Math.min(Math.max(-s,-l),s),g=-m*m+p*(p+2*l)+c);else p=o>0?-s:s,m=Math.max(0,-(o*p+a)),g=-m*m+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(wr).addScaledVector(Li,p),g}intersectSphere(t,e){We.subVectors(t.center,this.origin);const n=We.dot(this.direction),r=We.dot(We)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,m=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,r=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,r=(t.min.x-p.x)*c),u>=0?(s=(t.min.y-p.y)*u,o=(t.max.y-p.y)*u):(s=(t.max.y-p.y)*u,o=(t.min.y-p.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),m>=0?(a=(t.min.z-p.z)*m,l=(t.max.z-p.z)*m):(a=(t.max.z-p.z)*m,l=(t.min.z-p.z)*m),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,We)!==null}intersectTriangle(t,e,n,r,s){Rr.subVectors(e,t),Di.subVectors(n,t),Cr.crossVectors(Rr,Di);let o=this.direction.dot(Cr),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;tn.subVectors(this.origin,t);const l=a*this.direction.dot(Di.crossVectors(tn,Di));if(l<0)return null;const c=a*this.direction.dot(Rr.cross(tn));if(c<0||l+c>o)return null;const u=-a*tn.dot(Cr);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,r,s,o,a,l,c,u,m,p,g,x,E,d){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,m,p,g,x,E,d)}set(t,e,n,r,s,o,a,l,c,u,m,p,g,x,E,d){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=m,h[14]=p,h[3]=g,h[7]=x,h[11]=E,h[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Hn.setFromMatrixColumn(t,0).length(),s=1/Hn.setFromMatrixColumn(t,1).length(),o=1/Hn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),m=Math.sin(s);if(t.order==="XYZ"){const p=o*u,g=o*m,x=a*u,E=a*m;e[0]=l*u,e[4]=-l*m,e[8]=c,e[1]=g+x*c,e[5]=p-E*c,e[9]=-a*l,e[2]=E-p*c,e[6]=x+g*c,e[10]=o*l}else if(t.order==="YXZ"){const p=l*u,g=l*m,x=c*u,E=c*m;e[0]=p+E*a,e[4]=x*a-g,e[8]=o*c,e[1]=o*m,e[5]=o*u,e[9]=-a,e[2]=g*a-x,e[6]=E+p*a,e[10]=o*l}else if(t.order==="ZXY"){const p=l*u,g=l*m,x=c*u,E=c*m;e[0]=p-E*a,e[4]=-o*m,e[8]=x+g*a,e[1]=g+x*a,e[5]=o*u,e[9]=E-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const p=o*u,g=o*m,x=a*u,E=a*m;e[0]=l*u,e[4]=x*c-g,e[8]=p*c+E,e[1]=l*m,e[5]=E*c+p,e[9]=g*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const p=o*l,g=o*c,x=a*l,E=a*c;e[0]=l*u,e[4]=E-p*m,e[8]=x*m+g,e[1]=m,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=g*m+x,e[10]=p-E*m}else if(t.order==="XZY"){const p=o*l,g=o*c,x=a*l,E=a*c;e[0]=l*u,e[4]=-m,e[8]=c*u,e[1]=p*m+E,e[5]=o*u,e[9]=g*m-x,e[2]=x*m-g,e[6]=a*u,e[10]=E*m+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fc,t,pc)}lookAt(t,e,n){const r=this.elements;return Me.subVectors(t,e),Me.lengthSq()===0&&(Me.z=1),Me.normalize(),en.crossVectors(n,Me),en.lengthSq()===0&&(Math.abs(n.z)===1?Me.x+=1e-4:Me.z+=1e-4,Me.normalize(),en.crossVectors(n,Me)),en.normalize(),Ui.crossVectors(Me,en),r[0]=en.x,r[4]=Ui.x,r[8]=Me.x,r[1]=en.y,r[5]=Ui.y,r[9]=Me.y,r[2]=en.z,r[6]=Ui.z,r[10]=Me.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],m=n[5],p=n[9],g=n[13],x=n[2],E=n[6],d=n[10],h=n[14],b=n[3],M=n[7],w=n[11],F=n[15],R=r[0],A=r[4],H=r[8],y=r[12],v=r[1],U=r[5],W=r[9],P=r[13],q=r[2],X=r[6],Z=r[10],J=r[14],V=r[3],tt=r[7],Q=r[11],dt=r[15];return s[0]=o*R+a*v+l*q+c*V,s[4]=o*A+a*U+l*X+c*tt,s[8]=o*H+a*W+l*Z+c*Q,s[12]=o*y+a*P+l*J+c*dt,s[1]=u*R+m*v+p*q+g*V,s[5]=u*A+m*U+p*X+g*tt,s[9]=u*H+m*W+p*Z+g*Q,s[13]=u*y+m*P+p*J+g*dt,s[2]=x*R+E*v+d*q+h*V,s[6]=x*A+E*U+d*X+h*tt,s[10]=x*H+E*W+d*Z+h*Q,s[14]=x*y+E*P+d*J+h*dt,s[3]=b*R+M*v+w*q+F*V,s[7]=b*A+M*U+w*X+F*tt,s[11]=b*H+M*W+w*Z+F*Q,s[15]=b*y+M*P+w*J+F*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],m=t[6],p=t[10],g=t[14],x=t[3],E=t[7],d=t[11],h=t[15];return x*(+s*l*m-r*c*m-s*a*p+n*c*p+r*a*g-n*l*g)+E*(+e*l*g-e*c*p+s*o*p-r*o*g+r*c*u-s*l*u)+d*(+e*c*m-e*a*g-s*o*m+n*o*g+s*a*u-n*c*u)+h*(-r*a*u-e*l*m+e*a*p+r*o*m-n*o*p+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],m=t[9],p=t[10],g=t[11],x=t[12],E=t[13],d=t[14],h=t[15],b=m*d*c-E*p*c+E*l*g-a*d*g-m*l*h+a*p*h,M=x*p*c-u*d*c-x*l*g+o*d*g+u*l*h-o*p*h,w=u*E*c-x*m*c+x*a*g-o*E*g-u*a*h+o*m*h,F=x*m*l-u*E*l-x*a*p+o*E*p+u*a*d-o*m*d,R=e*b+n*M+r*w+s*F;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=b*A,t[1]=(E*p*s-m*d*s-E*r*g+n*d*g+m*r*h-n*p*h)*A,t[2]=(a*d*s-E*l*s+E*r*c-n*d*c-a*r*h+n*l*h)*A,t[3]=(m*l*s-a*p*s-m*r*c+n*p*c+a*r*g-n*l*g)*A,t[4]=M*A,t[5]=(u*d*s-x*p*s+x*r*g-e*d*g-u*r*h+e*p*h)*A,t[6]=(x*l*s-o*d*s-x*r*c+e*d*c+o*r*h-e*l*h)*A,t[7]=(o*p*s-u*l*s+u*r*c-e*p*c-o*r*g+e*l*g)*A,t[8]=w*A,t[9]=(x*m*s-u*E*s-x*n*g+e*E*g+u*n*h-e*m*h)*A,t[10]=(o*E*s-x*a*s+x*n*c-e*E*c-o*n*h+e*a*h)*A,t[11]=(u*a*s-o*m*s-u*n*c+e*m*c+o*n*g-e*a*g)*A,t[12]=F*A,t[13]=(u*E*r-x*m*r+x*n*p-e*E*p-u*n*d+e*m*d)*A,t[14]=(x*a*r-o*E*r-x*n*l+e*E*l+o*n*d-e*a*d)*A,t[15]=(o*m*r-u*a*r+u*n*l-e*m*l-o*n*p+e*a*p)*A,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,m=a+a,p=s*c,g=s*u,x=s*m,E=o*u,d=o*m,h=a*m,b=l*c,M=l*u,w=l*m,F=n.x,R=n.y,A=n.z;return r[0]=(1-(E+h))*F,r[1]=(g+w)*F,r[2]=(x-M)*F,r[3]=0,r[4]=(g-w)*R,r[5]=(1-(p+h))*R,r[6]=(d+b)*R,r[7]=0,r[8]=(x+M)*A,r[9]=(d-b)*A,r[10]=(1-(p+E))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Hn.set(r[0],r[1],r[2]).length();const o=Hn.set(r[4],r[5],r[6]).length(),a=Hn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ce.copy(this);const c=1/s,u=1/o,m=1/a;return Ce.elements[0]*=c,Ce.elements[1]*=c,Ce.elements[2]*=c,Ce.elements[4]*=u,Ce.elements[5]*=u,Ce.elements[6]*=u,Ce.elements[8]*=m,Ce.elements[9]*=m,Ce.elements[10]*=m,e.setFromRotationMatrix(Ce),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=Ke){const l=this.elements,c=2*s/(e-t),u=2*s/(n-r),m=(e+t)/(e-t),p=(n+r)/(n-r);let g,x;if(a===Ke)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===rr)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Ke){const l=this.elements,c=1/(e-t),u=1/(n-r),m=1/(o-s),p=(e+t)*c,g=(n+r)*u;let x,E;if(a===Ke)x=(o+s)*m,E=-2*m;else if(a===rr)x=s*m,E=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=E,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hn=new C,Ce=new Jt,fc=new C(0,0,0),pc=new C(1,1,1),en=new C,Ui=new C,Me=new C,Qs=new Jt,ta=new Cn;class He{constructor(t=0,e=0,n=0,r=He.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],m=r[2],p=r[6],g=r[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(de(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-de(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qs.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qs,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ta.setFromEuler(this),this.setFromQuaternion(ta,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}He.DEFAULT_ORDER="XYZ";class uo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mc=0;const ea=new C,Vn=new Cn,Xe=new Jt,Ii=new C,pi=new C,gc=new C,_c=new Cn,na=new C(1,0,0),ia=new C(0,1,0),ra=new C(0,0,1),sa={type:"added"},vc={type:"removed"},Gn={type:"childadded",child:null},Pr={type:"childremoved",child:null};class me extends Pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new C,e=new He,n=new Cn,r=new C(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Lt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vn.setFromAxisAngle(t,e),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(t,e){return Vn.setFromAxisAngle(t,e),this.quaternion.premultiply(Vn),this}rotateX(t){return this.rotateOnAxis(na,t)}rotateY(t){return this.rotateOnAxis(ia,t)}rotateZ(t){return this.rotateOnAxis(ra,t)}translateOnAxis(t,e){return ea.copy(t).applyQuaternion(this.quaternion),this.position.add(ea.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(na,t)}translateY(t){return this.translateOnAxis(ia,t)}translateZ(t){return this.translateOnAxis(ra,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xe.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ii.copy(t):Ii.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xe.lookAt(pi,Ii,this.up):Xe.lookAt(Ii,pi,this.up),this.quaternion.setFromRotationMatrix(Xe),r&&(Xe.extractRotation(r.matrixWorld),Vn.setFromRotationMatrix(Xe),this.quaternion.premultiply(Vn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(sa),Gn.child=t,this.dispatchEvent(Gn),Gn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(vc),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(sa),Gn.child=t,this.dispatchEvent(Gn),Gn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,t,gc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,_c,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const m=l[c];s(t.shapes,m)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),m=o(t.shapes),p=o(t.skeletons),g=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}me.DEFAULT_UP=new C(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pe=new C,Ye=new C,Lr=new C,qe=new C,kn=new C,Wn=new C,aa=new C,Dr=new C,Ur=new C,Ir=new C;class Fe{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Pe.subVectors(t,e),r.cross(Pe);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Pe.subVectors(r,e),Ye.subVectors(n,e),Lr.subVectors(t,e);const o=Pe.dot(Pe),a=Pe.dot(Ye),l=Pe.dot(Lr),c=Ye.dot(Ye),u=Ye.dot(Lr),m=o*c-a*a;if(m===0)return s.set(0,0,0),null;const p=1/m,g=(c*l-a*u)*p,x=(o*u-a*l)*p;return s.set(1-g-x,x,g)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,qe)===null?!1:qe.x>=0&&qe.y>=0&&qe.x+qe.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,qe)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,qe.x),l.addScaledVector(o,qe.y),l.addScaledVector(a,qe.z),l)}static isFrontFacing(t,e,n,r){return Pe.subVectors(n,e),Ye.subVectors(t,e),Pe.cross(Ye).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pe.subVectors(this.c,this.b),Ye.subVectors(this.a,this.b),Pe.cross(Ye).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Fe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Fe.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Fe.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Fe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Fe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;kn.subVectors(r,n),Wn.subVectors(s,n),Dr.subVectors(t,n);const l=kn.dot(Dr),c=Wn.dot(Dr);if(l<=0&&c<=0)return e.copy(n);Ur.subVectors(t,r);const u=kn.dot(Ur),m=Wn.dot(Ur);if(u>=0&&m<=u)return e.copy(r);const p=l*m-u*c;if(p<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(kn,o);Ir.subVectors(t,s);const g=kn.dot(Ir),x=Wn.dot(Ir);if(x>=0&&g<=x)return e.copy(s);const E=g*c-l*x;if(E<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Wn,a);const d=u*x-g*m;if(d<=0&&m-u>=0&&g-x>=0)return aa.subVectors(s,r),a=(m-u)/(m-u+(g-x)),e.copy(r).addScaledVector(aa,a);const h=1/(d+E+p);return o=E*h,a=p*h,e.copy(n).addScaledVector(kn,o).addScaledVector(Wn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ho={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},Ni={h:0,s:0,l:0};function Nr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=Yt.workingColorSpace){if(t=as(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Nr(o,s,t+1/3),this.g=Nr(o,s,t),this.b=Nr(o,s,t-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(t,e=De){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=ho[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ni(t.r),this.g=ni(t.g),this.b=ni(t.b),this}copyLinearToSRGB(t){return this.r=Er(t.r),this.g=Er(t.g),this.b=Er(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return Yt.fromWorkingColorSpace(he.copy(this),t),Math.round(de(he.r*255,0,255))*65536+Math.round(de(he.g*255,0,255))*256+Math.round(de(he.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(he.copy(this),e);const n=he.r,r=he.g,s=he.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const m=o-a;switch(c=u<=.5?m/(o+a):m/(2-o-a),o){case n:l=(r-s)/m+(r<s?6:0);break;case r:l=(s-n)/m+2;break;case s:l=(n-r)/m+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(he.copy(this),e),t.r=he.r,t.g=he.g,t.b=he.b,t}getStyle(t=De){Yt.fromWorkingColorSpace(he.copy(this),t);const e=he.r,n=he.g,r=he.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(nn),this.setHSL(nn.h+t,nn.s+e,nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(nn),t.getHSL(Ni);const n=xi(nn.h,Ni.h,e),r=xi(nn.s,Ni.s,e),s=xi(nn.l,Ni.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const he=new zt;zt.NAMES=ho;let xc=0;class li extends Pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=oi(),this.name="",this.type="Material",this.blending=ti,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zr,this.blendDst=$r,this.blendEquation=Tn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xs,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nn,this.stencilZFail=Nn,this.stencilZPass=Nn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Zr&&(n.blendSrc=this.blendSrc),this.blendDst!==$r&&(n.blendDst=this.blendDst),this.blendEquation!==Tn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Qi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xs&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Nn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Nn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fo extends li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.combine=rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ie=new C,Fi=new St;class ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ys,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=on,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return sc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fi.fromBufferAttribute(this,e),Fi.applyMatrix3(t),this.setXY(e,Fi.x,Fi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix3(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyMatrix4(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.applyNormalMatrix(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ie.fromBufferAttribute(this,e),ie.transformDirection(t),this.setXYZ(e,ie.x,ie.y,ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Jn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Jn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Jn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Jn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Jn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),r=fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),r=fe(r,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ys&&(t.usage=this.usage),t}}class po extends ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class mo extends ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Mc=0;const be=new Jt,Fr=new me,Xn=new C,Se=new Ti,mi=new Ti,le=new C;class Ve extends Pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oo(t)?mo:po)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Lt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return be.makeRotationFromQuaternion(t),this.applyMatrix4(be),this}rotateX(t){return be.makeRotationX(t),this.applyMatrix4(be),this}rotateY(t){return be.makeRotationY(t),this.applyMatrix4(be),this}rotateZ(t){return be.makeRotationZ(t),this.applyMatrix4(be),this}translate(t,e,n){return be.makeTranslation(t,e,n),this.applyMatrix4(be),this}scale(t,e,n){return be.makeScale(t,e,n),this.applyMatrix4(be),this}lookAt(t){return Fr.lookAt(t),Fr.updateMatrix(),this.applyMatrix4(Fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xn).negate(),this.translate(Xn.x,Xn.y,Xn.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ti);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Se.setFromBufferAttribute(s),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,Se.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,Se.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(Se.min),this.boundingBox.expandByPoint(Se.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(Se.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];mi.setFromBufferAttribute(a),this.morphTargetsRelative?(le.addVectors(Se.min,mi.min),Se.expandByPoint(le),le.addVectors(Se.max,mi.max),Se.expandByPoint(le)):(Se.expandByPoint(mi.min),Se.expandByPoint(mi.max))}Se.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)le.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)le.fromBufferAttribute(a,c),l&&(Xn.fromBufferAttribute(t,c),le.add(Xn)),r=Math.max(r,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let H=0;H<n.count;H++)a[H]=new C,l[H]=new C;const c=new C,u=new C,m=new C,p=new St,g=new St,x=new St,E=new C,d=new C;function h(H,y,v){c.fromBufferAttribute(n,H),u.fromBufferAttribute(n,y),m.fromBufferAttribute(n,v),p.fromBufferAttribute(s,H),g.fromBufferAttribute(s,y),x.fromBufferAttribute(s,v),u.sub(c),m.sub(c),g.sub(p),x.sub(p);const U=1/(g.x*x.y-x.x*g.y);isFinite(U)&&(E.copy(u).multiplyScalar(x.y).addScaledVector(m,-g.y).multiplyScalar(U),d.copy(m).multiplyScalar(g.x).addScaledVector(u,-x.x).multiplyScalar(U),a[H].add(E),a[y].add(E),a[v].add(E),l[H].add(d),l[y].add(d),l[v].add(d))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let H=0,y=b.length;H<y;++H){const v=b[H],U=v.start,W=v.count;for(let P=U,q=U+W;P<q;P+=3)h(t.getX(P+0),t.getX(P+1),t.getX(P+2))}const M=new C,w=new C,F=new C,R=new C;function A(H){F.fromBufferAttribute(r,H),R.copy(F);const y=a[H];M.copy(y),M.sub(F.multiplyScalar(F.dot(y))).normalize(),w.crossVectors(R,y);const U=w.dot(l[H])<0?-1:1;o.setXYZW(H,M.x,M.y,M.z,U)}for(let H=0,y=b.length;H<y;++H){const v=b[H],U=v.start,W=v.count;for(let P=U,q=U+W;P<q;P+=3)A(t.getX(P+0)),A(t.getX(P+1)),A(t.getX(P+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,g=n.count;p<g;p++)n.setXYZ(p,0,0,0);const r=new C,s=new C,o=new C,a=new C,l=new C,c=new C,u=new C,m=new C;if(t)for(let p=0,g=t.count;p<g;p+=3){const x=t.getX(p+0),E=t.getX(p+1),d=t.getX(p+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,E),o.fromBufferAttribute(e,d),u.subVectors(o,s),m.subVectors(r,s),u.cross(m),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,E),c.fromBufferAttribute(n,d),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(E,l.x,l.y,l.z),n.setXYZ(d,c.x,c.y,c.z)}else for(let p=0,g=e.count;p<g;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),u.subVectors(o,s),m.subVectors(r,s),u.cross(m),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,m=a.normalized,p=new c.constructor(l.length*u);let g=0,x=0;for(let E=0,d=l.length;E<d;E++){a.isInterleavedBufferAttribute?g=l[E]*a.data.stride+a.offset:g=l[E]*u;for(let h=0;h<u;h++)p[x++]=c[g++]}return new ze(p,u,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,m=c.length;u<m;u++){const p=c[u],g=t(p,n);l.push(g)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let m=0,p=c.length;m<p;m++){const g=c[m];u.push(g.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],m=s[c];for(let p=0,g=m.length;p<g;p++)u.push(m[p].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const m=o[c];this.addGroup(m.start,m.count,m.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oa=new Jt,xn=new os,Oi=new lr,la=new C,Yn=new C,qn=new C,jn=new C,Or=new C,Bi=new C,zi=new St,Hi=new St,Vi=new St,ca=new C,ua=new C,ha=new C,Gi=new C,ki=new C;class Be extends me{constructor(t=new Ve,e=new fo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Bi.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],m=s[l];u!==0&&(Or.fromBufferAttribute(m,t),o?Bi.addScaledVector(Or,u):Bi.addScaledVector(Or.sub(e),u))}e.add(Bi)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Oi.copy(n.boundingSphere),Oi.applyMatrix4(s),xn.copy(t.ray).recast(t.near),!(Oi.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Oi,la)===null||xn.origin.distanceToSquared(la)>(t.far-t.near)**2))&&(oa.copy(s).invert(),xn.copy(t.ray).applyMatrix4(oa),!(n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,m=s.attributes.normal,p=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,E=p.length;x<E;x++){const d=p[x],h=o[d.materialIndex],b=Math.max(d.start,g.start),M=Math.min(a.count,Math.min(d.start+d.count,g.start+g.count));for(let w=b,F=M;w<F;w+=3){const R=a.getX(w),A=a.getX(w+1),H=a.getX(w+2);r=Wi(this,h,t,n,c,u,m,R,A,H),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const x=Math.max(0,g.start),E=Math.min(a.count,g.start+g.count);for(let d=x,h=E;d<h;d+=3){const b=a.getX(d),M=a.getX(d+1),w=a.getX(d+2);r=Wi(this,o,t,n,c,u,m,b,M,w),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,E=p.length;x<E;x++){const d=p[x],h=o[d.materialIndex],b=Math.max(d.start,g.start),M=Math.min(l.count,Math.min(d.start+d.count,g.start+g.count));for(let w=b,F=M;w<F;w+=3){const R=w,A=w+1,H=w+2;r=Wi(this,h,t,n,c,u,m,R,A,H),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const x=Math.max(0,g.start),E=Math.min(l.count,g.start+g.count);for(let d=x,h=E;d<h;d+=3){const b=d,M=d+1,w=d+2;r=Wi(this,o,t,n,c,u,m,b,M,w),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function Sc(i,t,e,n,r,s,o,a){let l;if(t.side===ge?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===hn,a),l===null)return null;ki.copy(a),ki.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ki);return c<e.near||c>e.far?null:{distance:c,point:ki.clone(),object:i}}function Wi(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Yn),i.getVertexPosition(l,qn),i.getVertexPosition(c,jn);const u=Sc(i,t,e,n,Yn,qn,jn,Gi);if(u){r&&(zi.fromBufferAttribute(r,a),Hi.fromBufferAttribute(r,l),Vi.fromBufferAttribute(r,c),u.uv=Fe.getInterpolation(Gi,Yn,qn,jn,zi,Hi,Vi,new St)),s&&(zi.fromBufferAttribute(s,a),Hi.fromBufferAttribute(s,l),Vi.fromBufferAttribute(s,c),u.uv1=Fe.getInterpolation(Gi,Yn,qn,jn,zi,Hi,Vi,new St)),o&&(ca.fromBufferAttribute(o,a),ua.fromBufferAttribute(o,l),ha.fromBufferAttribute(o,c),u.normal=Fe.getInterpolation(Gi,Yn,qn,jn,ca,ua,ha,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const m={a,b:l,c,normal:new C,materialIndex:0};Fe.getNormal(Yn,qn,jn,m.normal),u.face=m}return u}class ci extends Ve{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],m=[];let p=0,g=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(m,2));function x(E,d,h,b,M,w,F,R,A,H,y){const v=w/A,U=F/H,W=w/2,P=F/2,q=R/2,X=A+1,Z=H+1;let J=0,V=0;const tt=new C;for(let Q=0;Q<Z;Q++){const dt=Q*U-P;for(let Ut=0;Ut<X;Ut++){const Wt=Ut*v-W;tt[E]=Wt*b,tt[d]=dt*M,tt[h]=q,c.push(tt.x,tt.y,tt.z),tt[E]=0,tt[d]=0,tt[h]=R>0?1:-1,u.push(tt.x,tt.y,tt.z),m.push(Ut/A),m.push(1-Q/H),J+=1}}for(let Q=0;Q<H;Q++)for(let dt=0;dt<A;dt++){const Ut=p+dt+X*Q,Wt=p+dt+X*(Q+1),G=p+(dt+1)+X*(Q+1),et=p+(dt+1)+X*Q;l.push(Ut,Wt,et),l.push(Wt,G,et),V+=6}a.addGroup(g,V,y),g+=V,p+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ci(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ai(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function pe(i){const t={};for(let e=0;e<i.length;e++){const n=ai(i[e]);for(const r in n)t[r]=n[r]}return t}function Ec(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function go(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const yc={clone:ai,merge:pe};var Tc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ac=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tc,this.fragmentShader=Ac,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ai(t.uniforms),this.uniformsGroups=Ec(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class _o extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Ke}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rn=new C,da=new St,fa=new St;class Ee extends _o{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Si*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(vi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Si*2*Math.atan(Math.tan(vi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rn.x,rn.y).multiplyScalar(-t/rn.z),rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rn.x,rn.y).multiplyScalar(-t/rn.z)}getViewSize(t,e){return this.getViewBounds(t,da,fa),e.subVectors(fa,da)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(vi*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Kn=-90,Zn=1;class bc extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ee(Kn,Zn,t,e);r.layers=this.layers,this.add(r);const s=new Ee(Kn,Zn,t,e);s.layers=this.layers,this.add(s);const o=new Ee(Kn,Zn,t,e);o.layers=this.layers,this.add(o);const a=new Ee(Kn,Zn,t,e);a.layers=this.layers,this.add(a);const l=new Ee(Kn,Zn,t,e);l.layers=this.layers,this.add(l);const c=new Ee(Kn,Zn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ke)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,m=t.getRenderTarget(),p=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const E=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=E,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(m,p,g),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class vo extends _e{constructor(t,e,n,r,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ii,super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wc extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new vo(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Le}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ci(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ge,blending:ln});s.uniforms.tEquirect.value=e;const o=new Be(r,s),a=e.minFilter;return e.minFilter===wn&&(e.minFilter=Le),new bc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const Br=new C,Rc=new C,Cc=new Lt;class sn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Br.subVectors(n,e).cross(Rc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Br),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cc.getNormalMatrix(t),r=this.coplanarPoint(Br).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mn=new lr,Xi=new C;class ls{constructor(t=new sn,e=new sn,n=new sn,r=new sn,s=new sn,o=new sn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ke){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],m=r[6],p=r[7],g=r[8],x=r[9],E=r[10],d=r[11],h=r[12],b=r[13],M=r[14],w=r[15];if(n[0].setComponents(l-s,p-c,d-g,w-h).normalize(),n[1].setComponents(l+s,p+c,d+g,w+h).normalize(),n[2].setComponents(l+o,p+u,d+x,w+b).normalize(),n[3].setComponents(l-o,p-u,d-x,w-b).normalize(),n[4].setComponents(l-a,p-m,d-E,w-M).normalize(),e===Ke)n[5].setComponents(l+a,p+m,d+E,w+M).normalize();else if(e===rr)n[5].setComponents(a,m,E,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(t){return Mn.center.set(0,0,0),Mn.radius=.7071067811865476,Mn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Xi.x=r.normal.x>0?t.max.x:t.min.x,Xi.y=r.normal.y>0?t.max.y:t.min.y,Xi.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Xi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xo(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Pc(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,m=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,u),a.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,l,c){const u=l.array,m=l._updateRange,p=l.updateRanges;if(i.bindBuffer(c,a),m.count===-1&&p.length===0&&i.bufferSubData(c,0,u),p.length!==0){for(let g=0,x=p.length;g<x;g++){const E=p[g];i.bufferSubData(c,E.start*u.BYTES_PER_ELEMENT,u,E.start,E.count)}l.clearUpdateRanges()}m.count!==-1&&(i.bufferSubData(c,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count),m.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class cr extends Ve{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,m=t/a,p=e/l,g=[],x=[],E=[],d=[];for(let h=0;h<u;h++){const b=h*p-o;for(let M=0;M<c;M++){const w=M*m-s;x.push(w,-b,0),E.push(0,0,1),d.push(M/a),d.push(1-h/l)}}for(let h=0;h<l;h++)for(let b=0;b<a;b++){const M=b+c*h,w=b+c*(h+1),F=b+1+c*(h+1),R=b+1+c*h;g.push(M,w,R),g.push(w,F,R)}this.setIndex(g),this.setAttribute("position",new ye(x,3)),this.setAttribute("normal",new ye(E,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.width,t.height,t.widthSegments,t.heightSegments)}}var Lc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dc=`#ifdef USE_ALPHAHASH
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
#endif`,Uc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ic=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oc=`#ifdef USE_AOMAP
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
#endif`,Bc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Hc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Vc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wc=`#ifdef USE_IRIDESCENCE
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
#endif`,Xc=`#ifdef USE_BUMPMAP
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
#endif`,Yc=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$c=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Qc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,tu=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,eu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nu=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,su=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",lu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,cu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hu=`#ifdef USE_ENVMAP
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
#endif`,du=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_u=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vu=`#ifdef USE_GRADIENTMAP
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
}`,xu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Su=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yu=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
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
#endif`,Tu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,Au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ru=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cu=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Pu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Lu=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Du=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ou=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vu=`#if defined( USE_POINTS_UV )
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
#endif`,Gu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ku=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,th=`#ifdef USE_NORMALMAP
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
#endif`,eh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ih=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ah=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ch=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,ph=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,gh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_h=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vh=`#ifdef USE_SKINNING
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
#endif`,xh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mh=`#ifdef USE_SKINNING
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
#endif`,Sh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Th=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ah=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bh=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ch=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ph=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dh=`uniform sampler2D t2D;
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
}`,Uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ih=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Oh=`#include <common>
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
}`,Bh=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zh=`#define DISTANCE
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
}`,Hh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kh=`uniform float scale;
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
}`,Wh=`uniform vec3 diffuse;
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
}`,Xh=`#include <common>
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
}`,Yh=`uniform vec3 diffuse;
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
}`,qh=`#define LAMBERT
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
}`,jh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Kh=`#define MATCAP
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
}`,Zh=`#define MATCAP
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
}`,$h=`#define NORMAL
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
}`,Jh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qh=`#define PHONG
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
}`,td=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,ed=`#define STANDARD
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
}`,nd=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,id=`#define TOON
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
}`,rd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sd=`uniform float size;
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
}`,ad=`uniform vec3 diffuse;
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
}`,od=`#include <common>
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
}`,ld=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,cd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,ud=`uniform vec3 diffuse;
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
}`,Pt={alphahash_fragment:Lc,alphahash_pars_fragment:Dc,alphamap_fragment:Uc,alphamap_pars_fragment:Ic,alphatest_fragment:Nc,alphatest_pars_fragment:Fc,aomap_fragment:Oc,aomap_pars_fragment:Bc,batching_pars_vertex:zc,batching_vertex:Hc,begin_vertex:Vc,beginnormal_vertex:Gc,bsdfs:kc,iridescence_fragment:Wc,bumpmap_pars_fragment:Xc,clipping_planes_fragment:Yc,clipping_planes_pars_fragment:qc,clipping_planes_pars_vertex:jc,clipping_planes_vertex:Kc,color_fragment:Zc,color_pars_fragment:$c,color_pars_vertex:Jc,color_vertex:Qc,common:tu,cube_uv_reflection_fragment:eu,defaultnormal_vertex:nu,displacementmap_pars_vertex:iu,displacementmap_vertex:ru,emissivemap_fragment:su,emissivemap_pars_fragment:au,colorspace_fragment:ou,colorspace_pars_fragment:lu,envmap_fragment:cu,envmap_common_pars_fragment:uu,envmap_pars_fragment:hu,envmap_pars_vertex:du,envmap_physical_pars_fragment:Tu,envmap_vertex:fu,fog_vertex:pu,fog_pars_vertex:mu,fog_fragment:gu,fog_pars_fragment:_u,gradientmap_pars_fragment:vu,lightmap_fragment:xu,lightmap_pars_fragment:Mu,lights_lambert_fragment:Su,lights_lambert_pars_fragment:Eu,lights_pars_begin:yu,lights_toon_fragment:Au,lights_toon_pars_fragment:bu,lights_phong_fragment:wu,lights_phong_pars_fragment:Ru,lights_physical_fragment:Cu,lights_physical_pars_fragment:Pu,lights_fragment_begin:Lu,lights_fragment_maps:Du,lights_fragment_end:Uu,logdepthbuf_fragment:Iu,logdepthbuf_pars_fragment:Nu,logdepthbuf_pars_vertex:Fu,logdepthbuf_vertex:Ou,map_fragment:Bu,map_pars_fragment:zu,map_particle_fragment:Hu,map_particle_pars_fragment:Vu,metalnessmap_fragment:Gu,metalnessmap_pars_fragment:ku,morphinstance_vertex:Wu,morphcolor_vertex:Xu,morphnormal_vertex:Yu,morphtarget_pars_vertex:qu,morphtarget_vertex:ju,normal_fragment_begin:Ku,normal_fragment_maps:Zu,normal_pars_fragment:$u,normal_pars_vertex:Ju,normal_vertex:Qu,normalmap_pars_fragment:th,clearcoat_normal_fragment_begin:eh,clearcoat_normal_fragment_maps:nh,clearcoat_pars_fragment:ih,iridescence_pars_fragment:rh,opaque_fragment:sh,packing:ah,premultiplied_alpha_fragment:oh,project_vertex:lh,dithering_fragment:ch,dithering_pars_fragment:uh,roughnessmap_fragment:hh,roughnessmap_pars_fragment:dh,shadowmap_pars_fragment:fh,shadowmap_pars_vertex:ph,shadowmap_vertex:mh,shadowmask_pars_fragment:gh,skinbase_vertex:_h,skinning_pars_vertex:vh,skinning_vertex:xh,skinnormal_vertex:Mh,specularmap_fragment:Sh,specularmap_pars_fragment:Eh,tonemapping_fragment:yh,tonemapping_pars_fragment:Th,transmission_fragment:Ah,transmission_pars_fragment:bh,uv_pars_fragment:wh,uv_pars_vertex:Rh,uv_vertex:Ch,worldpos_vertex:Ph,background_vert:Lh,background_frag:Dh,backgroundCube_vert:Uh,backgroundCube_frag:Ih,cube_vert:Nh,cube_frag:Fh,depth_vert:Oh,depth_frag:Bh,distanceRGBA_vert:zh,distanceRGBA_frag:Hh,equirect_vert:Vh,equirect_frag:Gh,linedashed_vert:kh,linedashed_frag:Wh,meshbasic_vert:Xh,meshbasic_frag:Yh,meshlambert_vert:qh,meshlambert_frag:jh,meshmatcap_vert:Kh,meshmatcap_frag:Zh,meshnormal_vert:$h,meshnormal_frag:Jh,meshphong_vert:Qh,meshphong_frag:td,meshphysical_vert:ed,meshphysical_frag:nd,meshtoon_vert:id,meshtoon_frag:rd,points_vert:sd,points_frag:ad,shadow_vert:od,shadow_frag:ld,sprite_vert:cd,sprite_frag:ud},rt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Ue={basic:{uniforms:pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:pe([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:pe([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:pe([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:pe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:pe([rt.points,rt.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:pe([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:pe([rt.common,rt.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:pe([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:pe([rt.sprite,rt.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:pe([rt.common,rt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:pe([rt.lights,rt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};Ue.physical={uniforms:pe([Ue.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const Yi={r:0,b:0,g:0},Sn=new He,hd=new Jt;function dd(i,t,e,n,r,s,o){const a=new zt(0);let l=s===!0?0:1,c,u,m=null,p=0,g=null;function x(d,h){let b=!1,M=h.isScene===!0?h.background:null;M&&M.isTexture&&(M=(h.backgroundBlurriness>0?e:t).get(M)),M===null?E(a,l):M&&M.isColor&&(E(M,1),b=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ar)?(u===void 0&&(u=new Be(new ci(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:ai(Ue.backgroundCube.uniforms),vertexShader:Ue.backgroundCube.vertexShader,fragmentShader:Ue.backgroundCube.fragmentShader,side:ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(F,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Sn.copy(h.backgroundRotation),Sn.x*=-1,Sn.y*=-1,Sn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Sn.y*=-1,Sn.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hd.makeRotationFromEuler(Sn)),u.material.toneMapped=Yt.getTransfer(M.colorSpace)!==qt,(m!==M||p!==M.version||g!==i.toneMapping)&&(u.material.needsUpdate=!0,m=M,p=M.version,g=i.toneMapping),u.layers.enableAll(),d.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Be(new cr(2,2),new dn({name:"BackgroundMaterial",uniforms:ai(Ue.background.uniforms),vertexShader:Ue.background.vertexShader,fragmentShader:Ue.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(M.colorSpace)!==qt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(m!==M||p!==M.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,m=M,p=M.version,g=i.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null))}function E(d,h){d.getRGB(Yi,go(i)),n.buffers.color.setClear(Yi.r,Yi.g,Yi.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(d,h=1){a.set(d),l=h,E(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(d){l=d,E(a,l)},render:x}}function fd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function a(v,U,W,P,q){let X=!1;const Z=m(P,W,U);s!==Z&&(s=Z,c(s.object)),X=g(v,P,W,q),X&&x(v,P,W,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,w(v,U,W,P),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function m(v,U,W){const P=W.wireframe===!0;let q=n[v.id];q===void 0&&(q={},n[v.id]=q);let X=q[U.id];X===void 0&&(X={},q[U.id]=X);let Z=X[P];return Z===void 0&&(Z=p(l()),X[P]=Z),Z}function p(v){const U=[],W=[],P=[];for(let q=0;q<e;q++)U[q]=0,W[q]=0,P[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:P,object:v,attributes:{},index:null}}function g(v,U,W,P){const q=s.attributes,X=U.attributes;let Z=0;const J=W.getAttributes();for(const V in J)if(J[V].location>=0){const Q=q[V];let dt=X[V];if(dt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor)),Q===void 0||Q.attribute!==dt||dt&&Q.data!==dt.data)return!0;Z++}return s.attributesNum!==Z||s.index!==P}function x(v,U,W,P){const q={},X=U.attributes;let Z=0;const J=W.getAttributes();for(const V in J)if(J[V].location>=0){let Q=X[V];Q===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor));const dt={};dt.attribute=Q,Q&&Q.data&&(dt.data=Q.data),q[V]=dt,Z++}s.attributes=q,s.attributesNum=Z,s.index=P}function E(){const v=s.newAttributes;for(let U=0,W=v.length;U<W;U++)v[U]=0}function d(v){h(v,0)}function h(v,U){const W=s.newAttributes,P=s.enabledAttributes,q=s.attributeDivisors;W[v]=1,P[v]===0&&(i.enableVertexAttribArray(v),P[v]=1),q[v]!==U&&(i.vertexAttribDivisor(v,U),q[v]=U)}function b(){const v=s.newAttributes,U=s.enabledAttributes;for(let W=0,P=U.length;W<P;W++)U[W]!==v[W]&&(i.disableVertexAttribArray(W),U[W]=0)}function M(v,U,W,P,q,X,Z){Z===!0?i.vertexAttribIPointer(v,U,W,q,X):i.vertexAttribPointer(v,U,W,P,q,X)}function w(v,U,W,P){E();const q=P.attributes,X=W.getAttributes(),Z=U.defaultAttributeValues;for(const J in X){const V=X[J];if(V.location>=0){let tt=q[J];if(tt===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(tt=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(tt=v.instanceColor)),tt!==void 0){const Q=tt.normalized,dt=tt.itemSize,Ut=t.get(tt);if(Ut===void 0)continue;const Wt=Ut.buffer,G=Ut.type,et=Ut.bytesPerElement,ct=G===i.INT||G===i.UNSIGNED_INT||tt.gpuType===Ja;if(tt.isInterleavedBufferAttribute){const at=tt.data,Tt=at.stride,bt=tt.offset;if(at.isInstancedInterleavedBuffer){for(let Nt=0;Nt<V.locationSize;Nt++)h(V.location+Nt,at.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Nt=0;Nt<V.locationSize;Nt++)d(V.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Nt=0;Nt<V.locationSize;Nt++)M(V.location+Nt,dt/V.locationSize,G,Q,Tt*et,(bt+dt/V.locationSize*Nt)*et,ct)}else{if(tt.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)h(V.location+at,tt.meshPerAttribute);v.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let at=0;at<V.locationSize;at++)d(V.location+at);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let at=0;at<V.locationSize;at++)M(V.location+at,dt/V.locationSize,G,Q,dt*et,dt/V.locationSize*at*et,ct)}}else if(Z!==void 0){const Q=Z[J];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(V.location,Q);break;case 3:i.vertexAttrib3fv(V.location,Q);break;case 4:i.vertexAttrib4fv(V.location,Q);break;default:i.vertexAttrib1fv(V.location,Q)}}}}b()}function F(){H();for(const v in n){const U=n[v];for(const W in U){const P=U[W];for(const q in P)u(P[q].object),delete P[q];delete U[W]}delete n[v]}}function R(v){if(n[v.id]===void 0)return;const U=n[v.id];for(const W in U){const P=U[W];for(const q in P)u(P[q].object),delete P[q];delete U[W]}delete n[v.id]}function A(v){for(const U in n){const W=n[U];if(W[v.id]===void 0)continue;const P=W[v.id];for(const q in P)u(P[q].object),delete P[q];delete W[v.id]}}function H(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:H,resetDefaultState:y,dispose:F,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:E,enableAttribute:d,disableUnusedAttributes:b}}function pd(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u;p++)this.render(l[p],c[p]);else{m.multiDrawArraysWEBGL(n,l,0,c,0,u);let p=0;for(let g=0;g<u;g++)p+=c[g];e.update(p,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function md(i,t,e){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const M=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(M){if(M==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=e.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),d=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),h=u>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:E,maxFragmentUniforms:d,vertexTextures:h,maxSamples:b}}function gd(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new sn,a=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){const g=m.length!==0||p||n!==0||r;return r=p,n=m.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,p){e=u(m,p,0)},this.setState=function(m,p,g){const x=m.clippingPlanes,E=m.clipIntersection,d=m.clipShadows,h=i.get(m);if(!r||x===null||x.length===0||s&&!d)s?u(null):c();else{const b=s?0:n,M=b*4;let w=h.clippingState||null;l.value=w,w=u(x,p,M,g);for(let F=0;F!==M;++F)w[F]=e[F];h.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(m,p,g,x){const E=m!==null?m.length:0;let d=null;if(E!==0){if(d=l.value,x!==!0||d===null){const h=g+E*4,b=p.matrixWorldInverse;a.getNormalMatrix(b),(d===null||d.length<h)&&(d=new Float32Array(h));for(let M=0,w=g;M!==E;++M,w+=4)o.copy(m[M]).applyMatrix4(b,a),o.normal.toArray(d,w),d[w+3]=o.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,d}}function _d(i){let t=new WeakMap;function e(o,a){return a===Jr?o.mapping=ii:a===Qr&&(o.mapping=ri),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jr||a===Qr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new wc(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class vd extends _o{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Qn=4,pa=[.125,.215,.35,.446,.526,.582],An=20,zr=new vd,ma=new zt;let Hr=null,Vr=0,Gr=0,kr=!1;const yn=(1+Math.sqrt(5))/2,$n=1/yn,ga=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,yn,$n),new C(0,yn,-$n),new C($n,0,yn),new C(-$n,0,yn),new C(yn,$n,0),new C(-yn,$n,0)];class _a{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Hr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ma(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Hr,Vr,Gr),this._renderer.xr.enabled=kr,t.scissorTest=!1,qi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ii||t.mapping===ri?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Hr=this._renderer.getRenderTarget(),Vr=this._renderer.getActiveCubeFace(),Gr=this._renderer.getActiveMipmapLevel(),kr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:tr,format:Oe,colorSpace:pn,depthBuffer:!1},r=va(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=va(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xd(s)),this._blurMaterial=Md(s,t,e)}return r}_compileMaterial(t){const e=new Be(this._lodPlanes[0],t);this._renderer.compile(e,zr)}_sceneToCubeUV(t,e,n,r){const a=new Ee(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,m=u.autoClear,p=u.toneMapping;u.getClearColor(ma),u.toneMapping=cn,u.autoClear=!1;const g=new fo({name:"PMREM.Background",side:ge,depthWrite:!1,depthTest:!1}),x=new Be(new ci,g);let E=!1;const d=t.background;d?d.isColor&&(g.color.copy(d),t.background=null,E=!0):(g.color.copy(ma),E=!0);for(let h=0;h<6;h++){const b=h%3;b===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):b===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const M=this._cubeSize;qi(r,b*M,h>2?M:0,M,M),u.setRenderTarget(r),E&&u.render(x,a),u.render(t,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=p,u.autoClear=m,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===ii||t.mapping===ri;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ma()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xa());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Be(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;qi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,zr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ga[(r-1)%ga.length];this._blur(t,r-1,r,s,o)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,m=new Be(this._lodPlanes[r],c),p=c.uniforms,g=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*An-1),E=s/x,d=isFinite(s)?1+Math.floor(u*E):An;d>An&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${An}`);const h=[];let b=0;for(let A=0;A<An;++A){const H=A/E,y=Math.exp(-H*H/2);h.push(y),A===0?b+=y:A<d&&(b+=2*y)}for(let A=0;A<h.length;A++)h[A]=h[A]/b;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=h,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:M}=this;p.dTheta.value=x,p.mipInt.value=M-n;const w=this._sizeLods[r],F=3*w*(r>M-Qn?r-M+Qn:0),R=4*(this._cubeSize-w);qi(e,F,R,3*w,2*w),l.setRenderTarget(e),l.render(m,zr)}}function xd(i){const t=[],e=[],n=[];let r=i;const s=i-Qn+1+pa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-Qn?l=pa[o-i+Qn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,m=1+c,p=[u,u,m,u,m,m,u,u,m,m,u,m],g=6,x=6,E=3,d=2,h=1,b=new Float32Array(E*x*g),M=new Float32Array(d*x*g),w=new Float32Array(h*x*g);for(let R=0;R<g;R++){const A=R%3*2/3-1,H=R>2?0:-1,y=[A,H,0,A+2/3,H,0,A+2/3,H+1,0,A,H,0,A+2/3,H+1,0,A,H+1,0];b.set(y,E*x*R),M.set(p,d*x*R);const v=[R,R,R,R,R,R];w.set(v,h*x*R)}const F=new Ve;F.setAttribute("position",new ze(b,E)),F.setAttribute("uv",new ze(M,d)),F.setAttribute("faceIndex",new ze(w,h)),t.push(F),r>Qn&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function va(i,t,e){const n=new Rn(i,t,e);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qi(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Md(i,t,e){const n=new Float32Array(An),r=new C(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function xa(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cs(),fragmentShader:`

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
		`,blending:ln,depthTest:!1,depthWrite:!1})}function Ma(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ln,depthTest:!1,depthWrite:!1})}function cs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sd(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jr||l===Qr,u=l===ii||l===ri;if(c||u){let m=t.get(a);const p=m!==void 0?m.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new _a(i)),m=c?e.fromEquirectangular(a,m):e.fromCubemap(a,m),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),m.texture;if(m!==void 0)return m.texture;{const g=a.image;return c&&g&&g.height>0||u&&g&&r(g)?(e===null&&(e=new _a(i)),m=c?e.fromEquirectangular(a):e.fromCubemap(a),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),a.addEventListener("dispose",s),m.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ed(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function yd(i,t,e,n){const r={},s=new WeakMap;function o(m){const p=m.target;p.index!==null&&t.remove(p.index);for(const x in p.attributes)t.remove(p.attributes[x]);for(const x in p.morphAttributes){const E=p.morphAttributes[x];for(let d=0,h=E.length;d<h;d++)t.remove(E[d])}p.removeEventListener("dispose",o),delete r[p.id];const g=s.get(p);g&&(t.remove(g),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(m,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function l(m){const p=m.attributes;for(const x in p)t.update(p[x],i.ARRAY_BUFFER);const g=m.morphAttributes;for(const x in g){const E=g[x];for(let d=0,h=E.length;d<h;d++)t.update(E[d],i.ARRAY_BUFFER)}}function c(m){const p=[],g=m.index,x=m.attributes.position;let E=0;if(g!==null){const b=g.array;E=g.version;for(let M=0,w=b.length;M<w;M+=3){const F=b[M+0],R=b[M+1],A=b[M+2];p.push(F,R,R,A,A,F)}}else if(x!==void 0){const b=x.array;E=x.version;for(let M=0,w=b.length/3-1;M<w;M+=3){const F=M+0,R=M+1,A=M+2;p.push(F,R,R,A,A,F)}}else return;const d=new(oo(p)?mo:po)(p,1);d.version=E;const h=s.get(m);h&&t.remove(h),s.set(m,d)}function u(m){const p=s.get(m);if(p){const g=m.index;g!==null&&p.version<g.version&&c(m)}else c(m);return s.get(m)}return{get:a,update:l,getWireframeAttribute:u}}function Td(i,t,e){let n;function r(m){n=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function l(m,p){i.drawElements(n,p,s,m*o),e.update(p,n,1)}function c(m,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,m*o,g),e.update(p,n,g))}function u(m,p,g){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<g;E++)this.render(m[E]/o,p[E]);else{x.multiDrawElementsWEBGL(n,p,0,s,m,0,g);let E=0;for(let d=0;d<g;d++)E+=p[d];e.update(E,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Ad(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function bd(i,t,e){const n=new WeakMap,r=new Zt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=u!==void 0?u.length:0;let p=n.get(a);if(p===void 0||p.count!==m){let v=function(){H.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var g=v;p!==void 0&&p.texture.dispose();const x=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,d=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let w=0;x===!0&&(w=1),E===!0&&(w=2),d===!0&&(w=3);let F=a.attributes.position.count*w,R=1;F>t.maxTextureSize&&(R=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const A=new Float32Array(F*R*4*m),H=new co(A,F,R,m);H.type=on,H.needsUpdate=!0;const y=w*4;for(let U=0;U<m;U++){const W=h[U],P=b[U],q=M[U],X=F*R*4*U;for(let Z=0;Z<W.count;Z++){const J=Z*y;x===!0&&(r.fromBufferAttribute(W,Z),A[X+J+0]=r.x,A[X+J+1]=r.y,A[X+J+2]=r.z,A[X+J+3]=0),E===!0&&(r.fromBufferAttribute(P,Z),A[X+J+4]=r.x,A[X+J+5]=r.y,A[X+J+6]=r.z,A[X+J+7]=0),d===!0&&(r.fromBufferAttribute(q,Z),A[X+J+8]=r.x,A[X+J+9]=r.y,A[X+J+10]=r.z,A[X+J+11]=q.itemSize===4?r.w:1)}}p={count:m,texture:H,size:new St(F,R)},n.set(a,p),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let x=0;for(let d=0;d<c.length;d++)x+=c[d];const E=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",E),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function wd(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,m=t.get(l,u);if(r.get(m)!==c&&(t.update(m),r.set(m,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return m}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Mo extends _e{constructor(t,e,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:ei,u!==ei&&u!==Mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ei&&(n=si),n===void 0&&u===Mi&&(n=yi),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:we,this.minFilter=l!==void 0?l:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const So=new _e,Eo=new Mo(1,1);Eo.compareFunction=ao;const yo=new co,To=new hc,Ao=new vo,Sa=[],Ea=[],ya=new Float32Array(16),Ta=new Float32Array(9),Aa=new Float32Array(4);function ui(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Sa[r];if(s===void 0&&(s=new Float32Array(r),Sa[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function se(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ur(i,t){let e=Ea[t];e===void 0&&(e=new Int32Array(t),Ea[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2fv(this.addr,t),se(e,t)}}function Pd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(re(e,t))return;i.uniform3fv(this.addr,t),se(e,t)}}function Ld(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4fv(this.addr,t),se(e,t)}}function Dd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;Aa.set(n),i.uniformMatrix2fv(this.addr,!1,Aa),se(e,n)}}function Ud(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;Ta.set(n),i.uniformMatrix3fv(this.addr,!1,Ta),se(e,n)}}function Id(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),se(e,t)}else{if(re(e,n))return;ya.set(n),i.uniformMatrix4fv(this.addr,!1,ya),se(e,n)}}function Nd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2iv(this.addr,t),se(e,t)}}function Od(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;i.uniform3iv(this.addr,t),se(e,t)}}function Bd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4iv(this.addr,t),se(e,t)}}function zd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(re(e,t))return;i.uniform2uiv(this.addr,t),se(e,t)}}function Vd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(re(e,t))return;i.uniform3uiv(this.addr,t),se(e,t)}}function Gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(re(e,t))return;i.uniform4uiv(this.addr,t),se(e,t)}}function kd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Eo:So;e.setTexture2D(t||s,r)}function Wd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||To,r)}function Xd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ao,r)}function Yd(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||yo,r)}function qd(i){switch(i){case 5126:return Rd;case 35664:return Cd;case 35665:return Pd;case 35666:return Ld;case 35674:return Dd;case 35675:return Ud;case 35676:return Id;case 5124:case 35670:return Nd;case 35667:case 35671:return Fd;case 35668:case 35672:return Od;case 35669:case 35673:return Bd;case 5125:return zd;case 36294:return Hd;case 36295:return Vd;case 36296:return Gd;case 35678:case 36198:case 36298:case 36306:case 35682:return kd;case 35679:case 36299:case 36307:return Wd;case 35680:case 36300:case 36308:case 36293:return Xd;case 36289:case 36303:case 36311:case 36292:return Yd}}function jd(i,t){i.uniform1fv(this.addr,t)}function Kd(i,t){const e=ui(t,this.size,2);i.uniform2fv(this.addr,e)}function Zd(i,t){const e=ui(t,this.size,3);i.uniform3fv(this.addr,e)}function $d(i,t){const e=ui(t,this.size,4);i.uniform4fv(this.addr,e)}function Jd(i,t){const e=ui(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qd(i,t){const e=ui(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tf(i,t){const e=ui(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ef(i,t){i.uniform1iv(this.addr,t)}function nf(i,t){i.uniform2iv(this.addr,t)}function rf(i,t){i.uniform3iv(this.addr,t)}function sf(i,t){i.uniform4iv(this.addr,t)}function af(i,t){i.uniform1uiv(this.addr,t)}function of(i,t){i.uniform2uiv(this.addr,t)}function lf(i,t){i.uniform3uiv(this.addr,t)}function cf(i,t){i.uniform4uiv(this.addr,t)}function uf(i,t,e){const n=this.cache,r=t.length,s=ur(e,r);re(n,s)||(i.uniform1iv(this.addr,s),se(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||So,s[o])}function hf(i,t,e){const n=this.cache,r=t.length,s=ur(e,r);re(n,s)||(i.uniform1iv(this.addr,s),se(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||To,s[o])}function df(i,t,e){const n=this.cache,r=t.length,s=ur(e,r);re(n,s)||(i.uniform1iv(this.addr,s),se(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ao,s[o])}function ff(i,t,e){const n=this.cache,r=t.length,s=ur(e,r);re(n,s)||(i.uniform1iv(this.addr,s),se(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||yo,s[o])}function pf(i){switch(i){case 5126:return jd;case 35664:return Kd;case 35665:return Zd;case 35666:return $d;case 35674:return Jd;case 35675:return Qd;case 35676:return tf;case 5124:case 35670:return ef;case 35667:case 35671:return nf;case 35668:case 35672:return rf;case 35669:case 35673:return sf;case 5125:return af;case 36294:return of;case 36295:return lf;case 36296:return cf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return hf;case 35680:case 36300:case 36308:case 36293:return df;case 36289:case 36303:case 36311:case 36292:return ff}}class mf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qd(e.type)}}class gf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pf(e.type)}}class _f{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function ba(i,t){i.seq.push(t),i.map[t.id]=t}function vf(i,t,e){const n=i.name,r=n.length;for(Wr.lastIndex=0;;){const s=Wr.exec(n),o=Wr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ba(e,c===void 0?new mf(a,i,t):new gf(a,i,t));break}else{let m=e.map[a];m===void 0&&(m=new _f(a),ba(e,m)),e=m}}}class $i{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);vf(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function wa(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const xf=37297;let Mf=0;function Sf(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Ef(i){const t=Yt.getPrimaries(Yt.workingColorSpace),e=Yt.getPrimaries(i);let n;switch(t===e?n="":t===ir&&e===nr?n="LinearDisplayP3ToLinearSRGB":t===nr&&e===ir&&(n="LinearSRGBToLinearDisplayP3"),i){case pn:case or:return[n,"LinearTransferOETF"];case De:case ss:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ra(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Sf(i.getShaderSource(t),o)}else return r}function yf(i,t){const e=Ef(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tf(i,t){let e;switch(t){case fl:e="Linear";break;case pl:e="Reinhard";break;case ml:e="OptimizedCineon";break;case gl:e="ACESFilmic";break;case vl:e="AgX";break;case xl:e="Neutral";break;case _l:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Af(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_i).join(`
`)}function bf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function _i(i){return i!==""}function Ca(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Pa(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rf=/^[ \t]*#include +<([\w\d./]+)>/gm;function ns(i){return i.replace(Rf,Pf)}const Cf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Pf(i,t){let e=Pt[t];if(e===void 0){const n=Cf.get(t);if(n!==void 0)e=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ns(e)}const Lf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function La(i){return i.replace(Lf,Df)}function Df(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Da(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Uf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ka?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===zo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===je&&(t="SHADOWMAP_TYPE_VSM"),t}function If(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ii:case ri:t="ENVMAP_TYPE_CUBE";break;case ar:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ri:t="ENVMAP_MODE_REFRACTION";break}return t}function Ff(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rs:t="ENVMAP_BLENDING_MULTIPLY";break;case hl:t="ENVMAP_BLENDING_MIX";break;case dl:t="ENVMAP_BLENDING_ADD";break}return t}function Of(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Bf(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Uf(e),c=If(e),u=Nf(e),m=Ff(e),p=Of(e),g=Af(e),x=bf(s),E=r.createProgram();let d,h,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(_i).join(`
`),d.length>0&&(d+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(_i).join(`
`),h.length>0&&(h+=`
`)):(d=[Da(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_i).join(`
`),h=[Da(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==cn?"#define TONE_MAPPING":"",e.toneMapping!==cn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==cn?Tf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,yf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_i).join(`
`)),o=ns(o),o=Ca(o,e),o=Pa(o,e),a=ns(a),a=Ca(a,e),a=Pa(a,e),o=La(o),a=La(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,d=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,h=["#define varying in",e.glslVersion===qs?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const M=b+d+o,w=b+h+a,F=wa(r,r.VERTEX_SHADER,M),R=wa(r,r.FRAGMENT_SHADER,w);r.attachShader(E,F),r.attachShader(E,R),e.index0AttributeName!==void 0?r.bindAttribLocation(E,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function A(U){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(E).trim(),P=r.getShaderInfoLog(F).trim(),q=r.getShaderInfoLog(R).trim();let X=!0,Z=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,E,F,R);else{const J=Ra(r,F,"vertex"),V=Ra(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+J+`
`+V)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(P===""||q==="")&&(Z=!1);Z&&(U.diagnostics={runnable:X,programLog:W,vertexShader:{log:P,prefix:d},fragmentShader:{log:q,prefix:h}})}r.deleteShader(F),r.deleteShader(R),H=new $i(r,E),y=wf(r,E)}let H;this.getUniforms=function(){return H===void 0&&A(this),H};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(E,xf)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Mf++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=F,this.fragmentShader=R,this}let zf=0;class Hf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Vf(t),e.set(t,n)),n}}class Vf{constructor(t){this.id=zf++,this.code=t,this.usedTimes=0}}function Gf(i,t,e,n,r,s,o){const a=new uo,l=new Hf,c=new Set,u=[],m=r.logarithmicDepthBuffer,p=r.vertexTextures;let g=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(y){return c.add(y),y===0?"uv":`uv${y}`}function d(y,v,U,W,P){const q=W.fog,X=P.geometry,Z=y.isMeshStandardMaterial?W.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||Z),V=J&&J.mapping===ar?J.image.height:null,tt=x[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const Q=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,dt=Q!==void 0?Q.length:0;let Ut=0;X.morphAttributes.position!==void 0&&(Ut=1),X.morphAttributes.normal!==void 0&&(Ut=2),X.morphAttributes.color!==void 0&&(Ut=3);let Wt,G,et,ct;if(tt){const ae=Ue[tt];Wt=ae.vertexShader,G=ae.fragmentShader}else Wt=y.vertexShader,G=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),ct=l.getFragmentShaderID(y);const at=i.getRenderTarget(),Tt=P.isInstancedMesh===!0,bt=P.isBatchedMesh===!0,Nt=!!y.map,D=!!y.matcap,Dt=!!J,xt=!!y.aoMap,Qt=!!y.lightMap,Mt=!!y.bumpMap,kt=!!y.normalMap,T=!!y.displacementMap,_=!!y.emissiveMap,z=!!y.metalnessMap,Y=!!y.roughnessMap,j=y.anisotropy>0,K=y.clearcoat>0,gt=y.iridescence>0,$=y.sheen>0,mt=y.transmission>0,_t=j&&!!y.anisotropyMap,it=K&&!!y.clearcoatMap,ot=K&&!!y.clearcoatNormalMap,Et=K&&!!y.clearcoatRoughnessMap,ut=gt&&!!y.iridescenceMap,ht=gt&&!!y.iridescenceThicknessMap,Ft=$&&!!y.sheenColorMap,Ot=$&&!!y.sheenRoughnessMap,Vt=!!y.specularMap,Ht=!!y.specularColorMap,Gt=!!y.specularIntensityMap,ft=mt&&!!y.transmissionMap,f=mt&&!!y.thicknessMap,I=!!y.gradientMap,k=!!y.alphaMap,nt=y.alphaTest>0,lt=!!y.alphaHash,Bt=!!y.extensions;let It=cn;y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(It=i.toneMapping);const jt={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:Wt,fragmentShader:G,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:ct,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:bt,instancing:Tt,instancingColor:Tt&&P.instanceColor!==null,instancingMorph:Tt&&P.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:pn,alphaToCoverage:!!y.alphaToCoverage,map:Nt,matcap:D,envMap:Dt,envMapMode:Dt&&J.mapping,envMapCubeUVHeight:V,aoMap:xt,lightMap:Qt,bumpMap:Mt,normalMap:kt,displacementMap:p&&T,emissiveMap:_,normalMapObjectSpace:kt&&y.normalMapType===Ul,normalMapTangentSpace:kt&&y.normalMapType===so,metalnessMap:z,roughnessMap:Y,anisotropy:j,anisotropyMap:_t,clearcoat:K,clearcoatMap:it,clearcoatNormalMap:ot,clearcoatRoughnessMap:Et,iridescence:gt,iridescenceMap:ut,iridescenceThicknessMap:ht,sheen:$,sheenColorMap:Ft,sheenRoughnessMap:Ot,specularMap:Vt,specularColorMap:Ht,specularIntensityMap:Gt,transmission:mt,transmissionMap:ft,thicknessMap:f,gradientMap:I,opaque:y.transparent===!1&&y.blending===ti&&y.alphaToCoverage===!1,alphaMap:k,alphaTest:nt,alphaHash:lt,combine:y.combine,mapUv:Nt&&E(y.map.channel),aoMapUv:xt&&E(y.aoMap.channel),lightMapUv:Qt&&E(y.lightMap.channel),bumpMapUv:Mt&&E(y.bumpMap.channel),normalMapUv:kt&&E(y.normalMap.channel),displacementMapUv:T&&E(y.displacementMap.channel),emissiveMapUv:_&&E(y.emissiveMap.channel),metalnessMapUv:z&&E(y.metalnessMap.channel),roughnessMapUv:Y&&E(y.roughnessMap.channel),anisotropyMapUv:_t&&E(y.anisotropyMap.channel),clearcoatMapUv:it&&E(y.clearcoatMap.channel),clearcoatNormalMapUv:ot&&E(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&E(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ut&&E(y.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&E(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&E(y.sheenColorMap.channel),sheenRoughnessMapUv:Ot&&E(y.sheenRoughnessMap.channel),specularMapUv:Vt&&E(y.specularMap.channel),specularColorMapUv:Ht&&E(y.specularColorMap.channel),specularIntensityMapUv:Gt&&E(y.specularIntensityMap.channel),transmissionMapUv:ft&&E(y.transmissionMap.channel),thicknessMapUv:f&&E(y.thicknessMap.channel),alphaMapUv:k&&E(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(kt||j),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!X.attributes.uv&&(Nt||k),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:P.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ut,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:It,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Nt&&y.map.isVideoTexture===!0&&Yt.getTransfer(y.map.colorSpace)===qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ne,flipSided:y.side===ge,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Bt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Bt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function h(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)v.push(U),v.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(b(v,y),M(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function b(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function M(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.useLegacyLights&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),y.push(a.mask)}function w(y){const v=x[y.type];let U;if(v){const W=Ue[v];U=yc.clone(W.uniforms)}else U=y.uniforms;return U}function F(y,v){let U;for(let W=0,P=u.length;W<P;W++){const q=u[W];if(q.cacheKey===v){U=q,++U.usedTimes;break}}return U===void 0&&(U=new Bf(i,v,y,s),u.push(U)),U}function R(y){if(--y.usedTimes===0){const v=u.indexOf(y);u[v]=u[u.length-1],u.pop(),y.destroy()}}function A(y){l.remove(y)}function H(){l.dispose()}return{getParameters:d,getProgramCacheKey:h,getUniforms:w,acquireProgram:F,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:H}}function kf(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function Wf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ua(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ia(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(m,p,g,x,E,d){let h=i[t];return h===void 0?(h={id:m.id,object:m,geometry:p,material:g,groupOrder:x,renderOrder:m.renderOrder,z:E,group:d},i[t]=h):(h.id=m.id,h.object=m,h.geometry=p,h.material=g,h.groupOrder=x,h.renderOrder=m.renderOrder,h.z=E,h.group=d),t++,h}function a(m,p,g,x,E,d){const h=o(m,p,g,x,E,d);g.transmission>0?n.push(h):g.transparent===!0?r.push(h):e.push(h)}function l(m,p,g,x,E,d){const h=o(m,p,g,x,E,d);g.transmission>0?n.unshift(h):g.transparent===!0?r.unshift(h):e.unshift(h)}function c(m,p){e.length>1&&e.sort(m||Wf),n.length>1&&n.sort(p||Ua),r.length>1&&r.sort(p||Ua)}function u(){for(let m=t,p=i.length;m<p;m++){const g=i[m];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Xf(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Ia,i.set(n,[o])):r>=s.length?(o=new Ia,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Yf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new zt};break;case"SpotLight":e={position:new C,direction:new C,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function qf(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let jf=0;function Kf(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Zf(i){const t=new Yf,e=qf(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const r=new C,s=new Jt,o=new Jt;function a(c,u){let m=0,p=0,g=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let x=0,E=0,d=0,h=0,b=0,M=0,w=0,F=0,R=0,A=0,H=0;c.sort(Kf);const y=u===!0?Math.PI:1;for(let U=0,W=c.length;U<W;U++){const P=c[U],q=P.color,X=P.intensity,Z=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)m+=q.r*X*y,p+=q.g*X*y,g+=q.b*X*y;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],X);H++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*y),P.castShadow){const tt=P.shadow,Q=e.get(P);Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,n.directionalShadow[x]=Q,n.directionalShadowMap[x]=J,n.directionalShadowMatrix[x]=P.shadow.matrix,M++}n.directional[x]=V,x++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(q).multiplyScalar(X*y),V.distance=Z,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[d]=V;const tt=P.shadow;if(P.map&&(n.spotLightMap[R]=P.map,R++,tt.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[d]=tt.matrix,P.castShadow){const Q=e.get(P);Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,n.spotShadow[d]=Q,n.spotShadowMap[d]=J,F++}d++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(q).multiplyScalar(X),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[h]=V,h++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*y),V.distance=P.distance,V.decay=P.decay,P.castShadow){const tt=P.shadow,Q=e.get(P);Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,Q.shadowCameraNear=tt.camera.near,Q.shadowCameraFar=tt.camera.far,n.pointShadow[E]=Q,n.pointShadowMap[E]=J,n.pointShadowMatrix[E]=P.shadow.matrix,w++}n.point[E]=V,E++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(X*y),V.groundColor.copy(P.groundColor).multiplyScalar(X*y),n.hemi[b]=V,b++}}h>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=p,n.ambient[2]=g;const v=n.hash;(v.directionalLength!==x||v.pointLength!==E||v.spotLength!==d||v.rectAreaLength!==h||v.hemiLength!==b||v.numDirectionalShadows!==M||v.numPointShadows!==w||v.numSpotShadows!==F||v.numSpotMaps!==R||v.numLightProbes!==H)&&(n.directional.length=x,n.spot.length=d,n.rectArea.length=h,n.point.length=E,n.hemi.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=F,n.spotShadowMap.length=F,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=F+R-A,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=H,v.directionalLength=x,v.pointLength=E,v.spotLength=d,v.rectAreaLength=h,v.hemiLength=b,v.numDirectionalShadows=M,v.numPointShadows=w,v.numSpotShadows=F,v.numSpotMaps=R,v.numLightProbes=H,n.version=jf++)}function l(c,u){let m=0,p=0,g=0,x=0,E=0;const d=u.matrixWorldInverse;for(let h=0,b=c.length;h<b;h++){const M=c[h];if(M.isDirectionalLight){const w=n.directional[m];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),m++}else if(M.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),g++}else if(M.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),o.identity(),s.copy(M.matrixWorld),s.premultiply(d),o.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const w=n.point[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(d),p++}else if(M.isHemisphereLight){const w=n.hemi[E];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(d),E++}}}return{setup:a,setupView:l,state:n}}function Na(i){const t=new Zf(i),e=[],n=[];function r(){e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(u){t.setup(e,u)}function l(u){t.setupView(e,u)}return{init:r,state:{lightsArray:e,shadowsArray:n,lights:t,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function $f(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Na(i),t.set(r,[a])):s>=o.length?(a=new Na(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Jf extends li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ll,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qf extends li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ep=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function np(i,t,e){let n=new ls;const r=new St,s=new St,o=new Zt,a=new Jf({depthPacking:Dl}),l=new Qf,c={},u=e.maxTextureSize,m={[hn]:ge,[ge]:hn,[Ne]:Ne},p=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:tp,fragmentShader:ep}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const x=new Ve;x.setAttribute("position",new ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Be(x,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ka;let h=this.type;this.render=function(R,A,H){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),W=i.state;W.setBlending(ln),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const P=h!==je&&this.type===je,q=h===je&&this.type!==je;for(let X=0,Z=R.length;X<Z;X++){const J=R[X],V=J.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const tt=V.getFrameExtents();if(r.multiply(tt),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/tt.x),r.x=s.x*tt.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/tt.y),r.y=s.y*tt.y,V.mapSize.y=s.y)),V.map===null||P===!0||q===!0){const dt=this.type!==je?{minFilter:we,magFilter:we}:{};V.map!==null&&V.map.dispose(),V.map=new Rn(r.x,r.y,dt),V.map.texture.name=J.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const Q=V.getViewportCount();for(let dt=0;dt<Q;dt++){const Ut=V.getViewport(dt);o.set(s.x*Ut.x,s.y*Ut.y,s.x*Ut.z,s.y*Ut.w),W.viewport(o),V.updateMatrices(J,dt),n=V.getFrustum(),w(A,H,V.camera,J,this.type)}V.isPointLightShadow!==!0&&this.type===je&&b(V,H),V.needsUpdate=!1}h=this.type,d.needsUpdate=!1,i.setRenderTarget(y,v,U)};function b(R,A){const H=t.update(E);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Rn(r.x,r.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,H,p,E,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,H,g,E,null)}function M(R,A,H,y){let v=null;const U=H.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)v=U;else if(v=H.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const W=v.uuid,P=A.uuid;let q=c[W];q===void 0&&(q={},c[W]=q);let X=q[P];X===void 0&&(X=v.clone(),q[P]=X,A.addEventListener("dispose",F)),v=X}if(v.visible=A.visible,v.wireframe=A.wireframe,y===je?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:m[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,H.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const W=i.properties.get(v);W.light=H}return v}function w(R,A,H,y,v){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===je)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,R.matrixWorld);const P=t.update(R),q=R.material;if(Array.isArray(q)){const X=P.groups;for(let Z=0,J=X.length;Z<J;Z++){const V=X[Z],tt=q[V.materialIndex];if(tt&&tt.visible){const Q=M(R,tt,y,v);R.onBeforeShadow(i,R,A,H,P,Q,V),i.renderBufferDirect(H,null,P,Q,R,V),R.onAfterShadow(i,R,A,H,P,Q,V)}}}else if(q.visible){const X=M(R,q,y,v);R.onBeforeShadow(i,R,A,H,P,X,null),i.renderBufferDirect(H,null,P,X,R,null),R.onAfterShadow(i,R,A,H,P,X,null)}}const W=R.children;for(let P=0,q=W.length;P<q;P++)w(W[P],A,H,y,v)}function F(R){R.target.removeEventListener("dispose",F);for(const H in c){const y=c[H],v=R.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}function ip(i){function t(){let f=!1;const I=new Zt;let k=null;const nt=new Zt(0,0,0,0);return{setMask:function(lt){k!==lt&&!f&&(i.colorMask(lt,lt,lt,lt),k=lt)},setLocked:function(lt){f=lt},setClear:function(lt,Bt,It,jt,ae){ae===!0&&(lt*=jt,Bt*=jt,It*=jt),I.set(lt,Bt,It,jt),nt.equals(I)===!1&&(i.clearColor(lt,Bt,It,jt),nt.copy(I))},reset:function(){f=!1,k=null,nt.set(-1,0,0,0)}}}function e(){let f=!1,I=null,k=null,nt=null;return{setTest:function(lt){lt?ct(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(lt){I!==lt&&!f&&(i.depthMask(lt),I=lt)},setFunc:function(lt){if(k!==lt){switch(lt){case rl:i.depthFunc(i.NEVER);break;case sl:i.depthFunc(i.ALWAYS);break;case al:i.depthFunc(i.LESS);break;case Qi:i.depthFunc(i.LEQUAL);break;case ol:i.depthFunc(i.EQUAL);break;case ll:i.depthFunc(i.GEQUAL);break;case cl:i.depthFunc(i.GREATER);break;case ul:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}k=lt}},setLocked:function(lt){f=lt},setClear:function(lt){nt!==lt&&(i.clearDepth(lt),nt=lt)},reset:function(){f=!1,I=null,k=null,nt=null}}}function n(){let f=!1,I=null,k=null,nt=null,lt=null,Bt=null,It=null,jt=null,ae=null;return{setTest:function(Xt){f||(Xt?ct(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(Xt){I!==Xt&&!f&&(i.stencilMask(Xt),I=Xt)},setFunc:function(Xt,ee,ne){(k!==Xt||nt!==ee||lt!==ne)&&(i.stencilFunc(Xt,ee,ne),k=Xt,nt=ee,lt=ne)},setOp:function(Xt,ee,ne){(Bt!==Xt||It!==ee||jt!==ne)&&(i.stencilOp(Xt,ee,ne),Bt=Xt,It=ee,jt=ne)},setLocked:function(Xt){f=Xt},setClear:function(Xt){ae!==Xt&&(i.clearStencil(Xt),ae=Xt)},reset:function(){f=!1,I=null,k=null,nt=null,lt=null,Bt=null,It=null,jt=null,ae=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},m=new WeakMap,p=[],g=null,x=!1,E=null,d=null,h=null,b=null,M=null,w=null,F=null,R=new zt(0,0,0),A=0,H=!1,y=null,v=null,U=null,W=null,P=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Z=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=Z>=1):J.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=Z>=2);let V=null,tt={};const Q=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),Ut=new Zt().fromArray(Q),Wt=new Zt().fromArray(dt);function G(f,I,k,nt){const lt=new Uint8Array(4),Bt=i.createTexture();i.bindTexture(f,Bt),i.texParameteri(f,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(f,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<k;It++)f===i.TEXTURE_3D||f===i.TEXTURE_2D_ARRAY?i.texImage3D(I,0,i.RGBA,1,1,nt,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(I+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return Bt}const et={};et[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ct(i.DEPTH_TEST),s.setFunc(Qi),Mt(!1),kt(gs),ct(i.CULL_FACE),xt(ln);function ct(f){c[f]!==!0&&(i.enable(f),c[f]=!0)}function at(f){c[f]!==!1&&(i.disable(f),c[f]=!1)}function Tt(f,I){return u[f]!==I?(i.bindFramebuffer(f,I),u[f]=I,f===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=I),f===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=I),!0):!1}function bt(f,I){let k=p,nt=!1;if(f){k=m.get(I),k===void 0&&(k=[],m.set(I,k));const lt=f.textures;if(k.length!==lt.length||k[0]!==i.COLOR_ATTACHMENT0){for(let Bt=0,It=lt.length;Bt<It;Bt++)k[Bt]=i.COLOR_ATTACHMENT0+Bt;k.length=lt.length,nt=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,nt=!0);nt&&i.drawBuffers(k)}function Nt(f){return g!==f?(i.useProgram(f),g=f,!0):!1}const D={[Tn]:i.FUNC_ADD,[Vo]:i.FUNC_SUBTRACT,[Go]:i.FUNC_REVERSE_SUBTRACT};D[ko]=i.MIN,D[Wo]=i.MAX;const Dt={[Xo]:i.ZERO,[Yo]:i.ONE,[qo]:i.SRC_COLOR,[Zr]:i.SRC_ALPHA,[Qo]:i.SRC_ALPHA_SATURATE,[$o]:i.DST_COLOR,[Ko]:i.DST_ALPHA,[jo]:i.ONE_MINUS_SRC_COLOR,[$r]:i.ONE_MINUS_SRC_ALPHA,[Jo]:i.ONE_MINUS_DST_COLOR,[Zo]:i.ONE_MINUS_DST_ALPHA,[tl]:i.CONSTANT_COLOR,[el]:i.ONE_MINUS_CONSTANT_COLOR,[nl]:i.CONSTANT_ALPHA,[il]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(f,I,k,nt,lt,Bt,It,jt,ae,Xt){if(f===ln){x===!0&&(at(i.BLEND),x=!1);return}if(x===!1&&(ct(i.BLEND),x=!0),f!==Ho){if(f!==E||Xt!==H){if((d!==Tn||M!==Tn)&&(i.blendEquation(i.FUNC_ADD),d=Tn,M=Tn),Xt)switch(f){case ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFunc(i.ONE,i.ONE);break;case vs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",f);break}else switch(f){case ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _s:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vs:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",f);break}h=null,b=null,w=null,F=null,R.set(0,0,0),A=0,E=f,H=Xt}return}lt=lt||I,Bt=Bt||k,It=It||nt,(I!==d||lt!==M)&&(i.blendEquationSeparate(D[I],D[lt]),d=I,M=lt),(k!==h||nt!==b||Bt!==w||It!==F)&&(i.blendFuncSeparate(Dt[k],Dt[nt],Dt[Bt],Dt[It]),h=k,b=nt,w=Bt,F=It),(jt.equals(R)===!1||ae!==A)&&(i.blendColor(jt.r,jt.g,jt.b,ae),R.copy(jt),A=ae),E=f,H=!1}function Qt(f,I){f.side===Ne?at(i.CULL_FACE):ct(i.CULL_FACE);let k=f.side===ge;I&&(k=!k),Mt(k),f.blending===ti&&f.transparent===!1?xt(ln):xt(f.blending,f.blendEquation,f.blendSrc,f.blendDst,f.blendEquationAlpha,f.blendSrcAlpha,f.blendDstAlpha,f.blendColor,f.blendAlpha,f.premultipliedAlpha),s.setFunc(f.depthFunc),s.setTest(f.depthTest),s.setMask(f.depthWrite),r.setMask(f.colorWrite);const nt=f.stencilWrite;o.setTest(nt),nt&&(o.setMask(f.stencilWriteMask),o.setFunc(f.stencilFunc,f.stencilRef,f.stencilFuncMask),o.setOp(f.stencilFail,f.stencilZFail,f.stencilZPass)),_(f.polygonOffset,f.polygonOffsetFactor,f.polygonOffsetUnits),f.alphaToCoverage===!0?ct(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(f){y!==f&&(f?i.frontFace(i.CW):i.frontFace(i.CCW),y=f)}function kt(f){f!==Oo?(ct(i.CULL_FACE),f!==v&&(f===gs?i.cullFace(i.BACK):f===Bo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),v=f}function T(f){f!==U&&(X&&i.lineWidth(f),U=f)}function _(f,I,k){f?(ct(i.POLYGON_OFFSET_FILL),(W!==I||P!==k)&&(i.polygonOffset(I,k),W=I,P=k)):at(i.POLYGON_OFFSET_FILL)}function z(f){f?ct(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function Y(f){f===void 0&&(f=i.TEXTURE0+q-1),V!==f&&(i.activeTexture(f),V=f)}function j(f,I,k){k===void 0&&(V===null?k=i.TEXTURE0+q-1:k=V);let nt=tt[k];nt===void 0&&(nt={type:void 0,texture:void 0},tt[k]=nt),(nt.type!==f||nt.texture!==I)&&(V!==k&&(i.activeTexture(k),V=k),i.bindTexture(f,I||et[f]),nt.type=f,nt.texture=I)}function K(){const f=tt[V];f!==void 0&&f.type!==void 0&&(i.bindTexture(f.type,null),f.type=void 0,f.texture=void 0)}function gt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function mt(){try{i.texSubImage2D.apply(i,arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function _t(){try{i.texSubImage3D.apply(i,arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function it(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function ot(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function Et(){try{i.texStorage2D.apply(i,arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function ut(){try{i.texStorage3D.apply(i,arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function ht(){try{i.texImage2D.apply(i,arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function Ft(){try{i.texImage3D.apply(i,arguments)}catch(f){console.error("THREE.WebGLState:",f)}}function Ot(f){Ut.equals(f)===!1&&(i.scissor(f.x,f.y,f.z,f.w),Ut.copy(f))}function Vt(f){Wt.equals(f)===!1&&(i.viewport(f.x,f.y,f.z,f.w),Wt.copy(f))}function Ht(f,I){let k=l.get(I);k===void 0&&(k=new WeakMap,l.set(I,k));let nt=k.get(f);nt===void 0&&(nt=i.getUniformBlockIndex(I,f.name),k.set(f,nt))}function Gt(f,I){const nt=l.get(I).get(f);a.get(I)!==nt&&(i.uniformBlockBinding(I,nt,f.__bindingPointIndex),a.set(I,nt))}function ft(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},V=null,tt={},u={},m=new WeakMap,p=[],g=null,x=!1,E=null,d=null,h=null,b=null,M=null,w=null,F=null,R=new zt(0,0,0),A=0,H=!1,y=null,v=null,U=null,W=null,P=null,Ut.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ct,disable:at,bindFramebuffer:Tt,drawBuffers:bt,useProgram:Nt,setBlending:xt,setMaterial:Qt,setFlipSided:Mt,setCullFace:kt,setLineWidth:T,setPolygonOffset:_,setScissorTest:z,activeTexture:Y,bindTexture:j,unbindTexture:K,compressedTexImage2D:gt,compressedTexImage3D:$,texImage2D:ht,texImage3D:Ft,updateUBOMapping:Ht,uniformBlockBinding:Gt,texStorage2D:Et,texStorage3D:ut,texSubImage2D:mt,texSubImage3D:_t,compressedTexSubImage2D:it,compressedTexSubImage3D:ot,scissor:Ot,viewport:Vt,reset:ft}}function rp(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,u=new WeakMap;let m;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,_){return g?new OffscreenCanvas(T,_):sr("canvas")}function E(T,_,z){let Y=1;const j=kt(T);if((j.width>z||j.height>z)&&(Y=z/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Y*j.width),gt=Math.floor(Y*j.height);m===void 0&&(m=x(K,gt));const $=_?x(K,gt):m;return $.width=K,$.height=gt,$.getContext("2d").drawImage(T,0,0,K,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+K+"x"+gt+")."),$}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function d(T){return T.generateMipmaps&&T.minFilter!==we&&T.minFilter!==Le}function h(T){i.generateMipmap(T)}function b(T,_,z,Y,j=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=_;if(_===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),_===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),_===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),_===i.RGBA){const gt=j?er:Yt.getTransfer(Y);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=gt===qt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(T,_){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==we&&T.minFilter!==Le?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function w(T){const _=T.target;_.removeEventListener("dispose",w),R(_),_.isVideoTexture&&u.delete(_)}function F(T){const _=T.target;_.removeEventListener("dispose",F),H(_)}function R(T){const _=n.get(T);if(_.__webglInit===void 0)return;const z=T.source,Y=p.get(z);if(Y){const j=Y[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&A(T),Object.keys(Y).length===0&&p.delete(z)}n.remove(T)}function A(T){const _=n.get(T);i.deleteTexture(_.__webglTexture);const z=T.source,Y=p.get(z);delete Y[_.__cacheKey],o.memory.textures--}function H(T){const _=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let j=0;j<_.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(_.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=T.textures;for(let Y=0,j=z.length;Y<j;Y++){const K=n.get(z[Y]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(T)}let y=0;function v(){y=0}function U(){const T=y;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),y+=1,T}function W(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function P(T,_){const z=n.get(T);if(T.isVideoTexture&&Qt(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ut(z,T,_);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function q(T,_){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Ut(z,T,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function X(T,_){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Ut(z,T,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function Z(T,_){const z=n.get(T);if(T.version>0&&z.__version!==T.version){Wt(z,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}const J={[ts]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[es]:i.MIRRORED_REPEAT},V={[we]:i.NEAREST,[Ml]:i.NEAREST_MIPMAP_NEAREST,[bi]:i.NEAREST_MIPMAP_LINEAR,[Le]:i.LINEAR,[mr]:i.LINEAR_MIPMAP_NEAREST,[wn]:i.LINEAR_MIPMAP_LINEAR},tt={[Il]:i.NEVER,[Hl]:i.ALWAYS,[Nl]:i.LESS,[ao]:i.LEQUAL,[Fl]:i.EQUAL,[zl]:i.GEQUAL,[Ol]:i.GREATER,[Bl]:i.NOTEQUAL};function Q(T,_){if(_.type===on&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Le||_.magFilter===mr||_.magFilter===bi||_.magFilter===wn||_.minFilter===Le||_.minFilter===mr||_.minFilter===bi||_.minFilter===wn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,J[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,J[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,J[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,V[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,V[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,tt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===we||_.minFilter!==bi&&_.minFilter!==wn||_.type===on&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function dt(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",w));const Y=_.source;let j=p.get(Y);j===void 0&&(j={},p.set(Y,j));const K=W(_);if(K!==T.__cacheKey){j[K]===void 0&&(j[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[K].usedTimes++;const gt=j[T.__cacheKey];gt!==void 0&&(j[T.__cacheKey].usedTimes--,gt.usedTimes===0&&A(_)),T.__cacheKey=K,T.__webglTexture=j[K].texture}return z}function Ut(T,_,z){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const j=dt(T,_),K=_.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+z);const gt=n.get(K);if(K.version!==gt.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const $=Yt.getPrimaries(Yt.workingColorSpace),mt=_.colorSpace===an?null:Yt.getPrimaries(_.colorSpace),_t=_.colorSpace===an||$===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let it=E(_.image,!1,r.maxTextureSize);it=Mt(_,it);const ot=s.convert(_.format,_.colorSpace),Et=s.convert(_.type);let ut=b(_.internalFormat,ot,Et,_.colorSpace,_.isVideoTexture);Q(Y,_);let ht;const Ft=_.mipmaps,Ot=_.isVideoTexture!==!0&&ut!==ro,Vt=gt.__version===void 0||j===!0,Ht=K.dataReady,Gt=M(_,it);if(_.isDepthTexture)ut=i.DEPTH_COMPONENT16,_.type===on?ut=i.DEPTH_COMPONENT32F:_.type===si?ut=i.DEPTH_COMPONENT24:_.type===yi&&(ut=i.DEPTH24_STENCIL8),Vt&&(Ot?e.texStorage2D(i.TEXTURE_2D,1,ut,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,ut,it.width,it.height,0,ot,Et,null));else if(_.isDataTexture)if(Ft.length>0){Ot&&Vt&&e.texStorage2D(i.TEXTURE_2D,Gt,ut,Ft[0].width,Ft[0].height);for(let ft=0,f=Ft.length;ft<f;ft++)ht=Ft[ft],Ot?Ht&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,ht.width,ht.height,ot,Et,ht.data):e.texImage2D(i.TEXTURE_2D,ft,ut,ht.width,ht.height,0,ot,Et,ht.data);_.generateMipmaps=!1}else Ot?(Vt&&e.texStorage2D(i.TEXTURE_2D,Gt,ut,it.width,it.height),Ht&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,it.width,it.height,ot,Et,it.data)):e.texImage2D(i.TEXTURE_2D,0,ut,it.width,it.height,0,ot,Et,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ot&&Vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,ut,Ft[0].width,Ft[0].height,it.depth);for(let ft=0,f=Ft.length;ft<f;ft++)ht=Ft[ft],_.format!==Oe?ot!==null?Ot?Ht&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,ht.width,ht.height,it.depth,ot,ht.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ft,ut,ht.width,ht.height,it.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?Ht&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ft,0,0,0,ht.width,ht.height,it.depth,ot,Et,ht.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ft,ut,ht.width,ht.height,it.depth,0,ot,Et,ht.data)}else{Ot&&Vt&&e.texStorage2D(i.TEXTURE_2D,Gt,ut,Ft[0].width,Ft[0].height);for(let ft=0,f=Ft.length;ft<f;ft++)ht=Ft[ft],_.format!==Oe?ot!==null?Ot?Ht&&e.compressedTexSubImage2D(i.TEXTURE_2D,ft,0,0,ht.width,ht.height,ot,ht.data):e.compressedTexImage2D(i.TEXTURE_2D,ft,ut,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?Ht&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,ht.width,ht.height,ot,Et,ht.data):e.texImage2D(i.TEXTURE_2D,ft,ut,ht.width,ht.height,0,ot,Et,ht.data)}else if(_.isDataArrayTexture)Ot?(Vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,ut,it.width,it.height,it.depth),Ht&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ot,Et,it.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,it.width,it.height,it.depth,0,ot,Et,it.data);else if(_.isData3DTexture)Ot?(Vt&&e.texStorage3D(i.TEXTURE_3D,Gt,ut,it.width,it.height,it.depth),Ht&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ot,Et,it.data)):e.texImage3D(i.TEXTURE_3D,0,ut,it.width,it.height,it.depth,0,ot,Et,it.data);else if(_.isFramebufferTexture){if(Vt)if(Ot)e.texStorage2D(i.TEXTURE_2D,Gt,ut,it.width,it.height);else{let ft=it.width,f=it.height;for(let I=0;I<Gt;I++)e.texImage2D(i.TEXTURE_2D,I,ut,ft,f,0,ot,Et,null),ft>>=1,f>>=1}}else if(Ft.length>0){if(Ot&&Vt){const ft=kt(Ft[0]);e.texStorage2D(i.TEXTURE_2D,Gt,ut,ft.width,ft.height)}for(let ft=0,f=Ft.length;ft<f;ft++)ht=Ft[ft],Ot?Ht&&e.texSubImage2D(i.TEXTURE_2D,ft,0,0,ot,Et,ht):e.texImage2D(i.TEXTURE_2D,ft,ut,ot,Et,ht);_.generateMipmaps=!1}else if(Ot){if(Vt){const ft=kt(it);e.texStorage2D(i.TEXTURE_2D,Gt,ut,ft.width,ft.height)}Ht&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,Et,it)}else e.texImage2D(i.TEXTURE_2D,0,ut,ot,Et,it);d(_)&&h(Y),gt.__version=K.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Wt(T,_,z){if(_.image.length!==6)return;const Y=dt(T,_),j=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);const K=n.get(j);if(j.version!==K.__version||Y===!0){e.activeTexture(i.TEXTURE0+z);const gt=Yt.getPrimaries(Yt.workingColorSpace),$=_.colorSpace===an?null:Yt.getPrimaries(_.colorSpace),mt=_.colorSpace===an||gt===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const _t=_.isCompressedTexture||_.image[0].isCompressedTexture,it=_.image[0]&&_.image[0].isDataTexture,ot=[];for(let f=0;f<6;f++)!_t&&!it?ot[f]=E(_.image[f],!0,r.maxCubemapSize):ot[f]=it?_.image[f].image:_.image[f],ot[f]=Mt(_,ot[f]);const Et=ot[0],ut=s.convert(_.format,_.colorSpace),ht=s.convert(_.type),Ft=b(_.internalFormat,ut,ht,_.colorSpace),Ot=_.isVideoTexture!==!0,Vt=K.__version===void 0||Y===!0,Ht=j.dataReady;let Gt=M(_,Et);Q(i.TEXTURE_CUBE_MAP,_);let ft;if(_t){Ot&&Vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,Ft,Et.width,Et.height);for(let f=0;f<6;f++){ft=ot[f].mipmaps;for(let I=0;I<ft.length;I++){const k=ft[I];_.format!==Oe?ut!==null?Ot?Ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+f,I,0,0,k.width,k.height,ut,k.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+f,I,Ft,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?Ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+f,I,0,0,k.width,k.height,ut,ht,k.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+f,I,Ft,k.width,k.height,0,ut,ht,k.data)}}}else{if(ft=_.mipmaps,Ot&&Vt){ft.length>0&&Gt++;const f=kt(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Gt,Ft,f.width,f.height)}for(let f=0;f<6;f++)if(it){Ot?Ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,0,0,ot[f].width,ot[f].height,ut,ht,ot[f].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,Ft,ot[f].width,ot[f].height,0,ut,ht,ot[f].data);for(let I=0;I<ft.length;I++){const nt=ft[I].image[f].image;Ot?Ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+f,I+1,0,0,nt.width,nt.height,ut,ht,nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+f,I+1,Ft,nt.width,nt.height,0,ut,ht,nt.data)}}else{Ot?Ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,0,0,ut,ht,ot[f]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+f,0,Ft,ut,ht,ot[f]);for(let I=0;I<ft.length;I++){const k=ft[I];Ot?Ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+f,I+1,0,0,ut,ht,k.image[f]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+f,I+1,Ft,ut,ht,k.image[f])}}}d(_)&&h(i.TEXTURE_CUBE_MAP),K.__version=j.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function G(T,_,z,Y,j,K){const gt=s.convert(z.format,z.colorSpace),$=s.convert(z.type),mt=b(z.internalFormat,gt,$,z.colorSpace);if(!n.get(_).__hasExternalTextures){const it=Math.max(1,_.width>>K),ot=Math.max(1,_.height>>K);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,K,mt,it,ot,_.depth,0,gt,$,null):e.texImage2D(j,K,mt,it,ot,0,gt,$,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),xt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,n.get(z).__webglTexture,0,Dt(_)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,n.get(z).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(T,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer&&!_.stencilBuffer){let Y=i.DEPTH_COMPONENT24;if(z||xt(_)){const j=_.depthTexture;j&&j.isDepthTexture&&(j.type===on?Y=i.DEPTH_COMPONENT32F:j.type===si&&(Y=i.DEPTH_COMPONENT24));const K=Dt(_);xt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,Y,_.width,_.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,K,Y,_.width,_.height)}else i.renderbufferStorage(i.RENDERBUFFER,Y,_.width,_.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(_.depthBuffer&&_.stencilBuffer){const Y=Dt(_);z&&xt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Y,i.DEPTH24_STENCIL8,_.width,_.height):xt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Y,i.DEPTH24_STENCIL8,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const Y=_.textures;for(let j=0;j<Y.length;j++){const K=Y[j],gt=s.convert(K.format,K.colorSpace),$=s.convert(K.type),mt=b(K.internalFormat,gt,$,K.colorSpace),_t=Dt(_);z&&xt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,mt,_.width,_.height):xt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,mt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,mt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),P(_.depthTexture,0);const Y=n.get(_.depthTexture).__webglTexture,j=Dt(_);if(_.depthTexture.format===ei)xt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(_.depthTexture.format===Mi)xt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function at(T){const _=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ct(_.__webglFramebuffer,T)}else if(z){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]=i.createRenderbuffer(),et(_.__webglDepthbuffer[Y],T,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=i.createRenderbuffer(),et(_.__webglDepthbuffer,T,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(T,_,z){const Y=n.get(T);_!==void 0&&G(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&at(T)}function bt(T){const _=T.texture,z=n.get(T),Y=n.get(_);T.addEventListener("dispose",F);const j=T.textures,K=T.isWebGLCubeRenderTarget===!0,gt=j.length>1;if(gt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let mt=0;mt<_.mipmaps.length;mt++)z.__webglFramebuffer[$][mt]=i.createFramebuffer()}else z.__webglFramebuffer[$]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)z.__webglFramebuffer[$]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(gt)for(let $=0,mt=j.length;$<mt;$++){const _t=n.get(j[$]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&xt(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<j.length;$++){const mt=j[$];z.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[$]);const _t=s.convert(mt.format,mt.colorSpace),it=s.convert(mt.type),ot=b(mt.internalFormat,_t,it,mt.colorSpace,T.isXRRenderTarget===!0),Et=Dt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ot,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,z.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),et(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Q(i.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)G(z.__webglFramebuffer[$][mt],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,mt);else G(z.__webglFramebuffer[$],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);d(_)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let $=0,mt=j.length;$<mt;$++){const _t=j[$],it=n.get(_t);e.bindTexture(i.TEXTURE_2D,it.__webglTexture),Q(i.TEXTURE_2D,_t),G(z.__webglFramebuffer,T,_t,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,0),d(_t)&&h(i.TEXTURE_2D)}e.unbindTexture()}else{let $=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,Y.__webglTexture),Q($,_),_.mipmaps&&_.mipmaps.length>0)for(let mt=0;mt<_.mipmaps.length;mt++)G(z.__webglFramebuffer[mt],T,_,i.COLOR_ATTACHMENT0,$,mt);else G(z.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,$,0);d(_)&&h($),e.unbindTexture()}T.depthBuffer&&at(T)}function Nt(T){const _=T.textures;for(let z=0,Y=_.length;z<Y;z++){const j=_[z];if(d(j)){const K=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,gt=n.get(j).__webglTexture;e.bindTexture(K,gt),h(K),e.unbindTexture()}}}function D(T){if(T.samples>0&&xt(T)===!1){const _=T.textures,z=T.width,Y=T.height;let j=i.COLOR_BUFFER_BIT;const K=[],gt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=n.get(T),mt=_.length>1;if(mt)for(let _t=0;_t<_.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let _t=0;_t<_.length;_t++){K.push(i.COLOR_ATTACHMENT0+_t),T.depthBuffer&&K.push(gt);const it=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(it===!1&&(T.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&$.__isTransmissionRenderTarget!==!0&&(j|=i.STENCIL_BUFFER_BIT)),mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$.__webglColorRenderbuffer[_t]),it===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[gt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[gt])),mt){const ot=n.get(_[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,j,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let _t=0;_t<_.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,$.__webglColorRenderbuffer[_t]);const it=n.get(_[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,it,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}}function Dt(T){return Math.min(r.maxSamples,T.samples)}function xt(T){const _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Qt(T){const _=o.render.frame;u.get(T)!==_&&(u.set(T,_),T.update())}function Mt(T,_){const z=T.colorSpace,Y=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==pn&&z!==an&&(Yt.getTransfer(z)===qt?(Y!==Oe||j!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function kt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=v,this.setTexture2D=P,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=Z,this.rebindTextures=Tt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=D,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=G,this.useMultisampledRTT=xt}function sp(i,t){function e(n,r=an){let s;const o=Yt.getTransfer(r);if(n===un)return i.UNSIGNED_BYTE;if(n===Qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===to)return i.UNSIGNED_SHORT_5_5_5_1;if(n===yl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sl)return i.BYTE;if(n===El)return i.SHORT;if(n===$a)return i.UNSIGNED_SHORT;if(n===Ja)return i.INT;if(n===si)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===tr)return i.HALF_FLOAT;if(n===Tl)return i.ALPHA;if(n===Al)return i.RGB;if(n===Oe)return i.RGBA;if(n===bl)return i.LUMINANCE;if(n===wl)return i.LUMINANCE_ALPHA;if(n===ei)return i.DEPTH_COMPONENT;if(n===Mi)return i.DEPTH_STENCIL;if(n===Rl)return i.RED;if(n===eo)return i.RED_INTEGER;if(n===Cl)return i.RG;if(n===no)return i.RG_INTEGER;if(n===io)return i.RGBA_INTEGER;if(n===gr||n===_r||n===vr||n===xr)if(o===qt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ms||n===Ss||n===Es||n===ys)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ms)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ss)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Es)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ys)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro)return s=t.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Ts||n===As)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ts)return o===qt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===As)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bs||n===ws||n===Rs||n===Cs||n===Ps||n===Ls||n===Ds||n===Us||n===Is||n===Ns||n===Fs||n===Os||n===Bs||n===zs)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bs)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ws)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rs)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cs)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ps)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ls)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ds)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Us)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Is)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ns)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fs)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Os)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bs)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zs)return o===qt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mr||n===Hs||n===Vs)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Mr)return o===qt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Vs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Gs||n===ks||n===Ws)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Mr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gs)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ks)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ws)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ap extends Ee{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ji extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const op={type:"move"};class Xr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ji,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ji,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ji,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const E of t.hand.values()){const d=e.getJointPose(E,n),h=this._getHandJoint(c,E);d!==null&&(h.matrix.fromArray(d.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=d.radius),h.visible=d!==null}const u=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],p=u.position.distanceTo(m.position),g=.02,x=.005;c.inputState.pinching&&p>g+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=g-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(op)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ji;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const lp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cp=`
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

}`;class up{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new _e,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,r=new dn({vertexShader:lp,fragmentShader:cp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Be(new cr(20,20),r)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class hp extends Pn{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,m=null,p=null,g=null,x=null;const E=new up,d=e.getContextAttributes();let h=null,b=null;const M=[],w=[],F=new St;let R=null;const A=new Ee;A.layers.enable(1),A.viewport=new Zt;const H=new Ee;H.layers.enable(2),H.viewport=new Zt;const y=[A,H],v=new ap;v.layers.enable(1),v.layers.enable(2);let U=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let et=M[G];return et===void 0&&(et=new Xr,M[G]=et),et.getTargetRaySpace()},this.getControllerGrip=function(G){let et=M[G];return et===void 0&&(et=new Xr,M[G]=et),et.getGripSpace()},this.getHand=function(G){let et=M[G];return et===void 0&&(et=new Xr,M[G]=et),et.getHandSpace()};function P(G){const et=w.indexOf(G.inputSource);if(et===-1)return;const ct=M[et];ct!==void 0&&(ct.update(G.inputSource,G.frame,c||o),ct.dispatchEvent({type:G.type,data:G.inputSource}))}function q(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",X);for(let G=0;G<M.length;G++){const et=w[G];et!==null&&(w[G]=null,M[G].disconnect(et))}U=null,W=null,E.reset(),t.setRenderTarget(h),g=null,p=null,m=null,r=null,b=null,Wt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return m},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(h=t.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",q),r.addEventListener("inputsourceschange",X),d.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(F),r.renderState.layers===void 0){const et={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new Rn(g.framebufferWidth,g.framebufferHeight,{format:Oe,type:un,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let et=null,ct=null,at=null;d.depth&&(at=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=d.stencil?Mi:ei,ct=d.stencil?yi:si);const Tt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};m=new XRWebGLBinding(r,e),p=m.createProjectionLayer(Tt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),b=new Rn(p.textureWidth,p.textureHeight,{format:Oe,type:un,depthTexture:new Mo(p.textureWidth,p.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0});const bt=t.properties.get(b);bt.__ignoreDepthValues=p.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Wt.setContext(r),Wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(G){for(let et=0;et<G.removed.length;et++){const ct=G.removed[et],at=w.indexOf(ct);at>=0&&(w[at]=null,M[at].disconnect(ct))}for(let et=0;et<G.added.length;et++){const ct=G.added[et];let at=w.indexOf(ct);if(at===-1){for(let bt=0;bt<M.length;bt++)if(bt>=w.length){w.push(ct),at=bt;break}else if(w[bt]===null){w[bt]=ct,at=bt;break}if(at===-1)break}const Tt=M[at];Tt&&Tt.connect(ct)}}const Z=new C,J=new C;function V(G,et,ct){Z.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(ct.matrixWorld);const at=Z.distanceTo(J),Tt=et.projectionMatrix.elements,bt=ct.projectionMatrix.elements,Nt=Tt[14]/(Tt[10]-1),D=Tt[14]/(Tt[10]+1),Dt=(Tt[9]+1)/Tt[5],xt=(Tt[9]-1)/Tt[5],Qt=(Tt[8]-1)/Tt[0],Mt=(bt[8]+1)/bt[0],kt=Nt*Qt,T=Nt*Mt,_=at/(-Qt+Mt),z=_*-Qt;et.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(z),G.translateZ(_),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const Y=Nt+_,j=D+_,K=kt-z,gt=T+(at-z),$=Dt*D/j*Y,mt=xt*D/j*Y;G.projectionMatrix.makePerspective(K,gt,$,mt,Y,j),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function tt(G,et){et===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(et.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;E.texture!==null&&(G.near=E.depthNear,G.far=E.depthFar),v.near=H.near=A.near=G.near,v.far=H.far=A.far=G.far,(U!==v.near||W!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),U=v.near,W=v.far,A.near=U,A.far=W,H.near=U,H.far=W,A.updateProjectionMatrix(),H.updateProjectionMatrix(),G.updateProjectionMatrix());const et=G.parent,ct=v.cameras;tt(v,et);for(let at=0;at<ct.length;at++)tt(ct[at],et);ct.length===2?V(v,A,H):v.projectionMatrix.copy(A.projectionMatrix),Q(G,v,et)};function Q(G,et,ct){ct===null?G.matrix.copy(et.matrixWorld):(G.matrix.copy(ct.matrixWorld),G.matrix.invert(),G.matrix.multiply(et.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(et.projectionMatrix),G.projectionMatrixInverse.copy(et.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Si*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(G){l=G,p!==null&&(p.fixedFoveation=G),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=G)},this.hasDepthSensing=function(){return E.texture!==null};let dt=null;function Ut(G,et){if(u=et.getViewerPose(c||o),x=et,u!==null){const ct=u.views;g!==null&&(t.setRenderTargetFramebuffer(b,g.framebuffer),t.setRenderTarget(b));let at=!1;ct.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let bt=0;bt<ct.length;bt++){const Nt=ct[bt];let D=null;if(g!==null)D=g.getViewport(Nt);else{const xt=m.getViewSubImage(p,Nt);D=xt.viewport,bt===0&&(t.setRenderTargetTextures(b,xt.colorTexture,p.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(b))}let Dt=y[bt];Dt===void 0&&(Dt=new Ee,Dt.layers.enable(bt),Dt.viewport=new Zt,y[bt]=Dt),Dt.matrix.fromArray(Nt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Nt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(D.x,D.y,D.width,D.height),bt===0&&(v.matrix.copy(Dt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(Dt)}const Tt=r.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const bt=m.getDepthInformation(ct[0]);bt&&bt.isValid&&bt.texture&&E.init(t,bt,r.renderState)}}for(let ct=0;ct<M.length;ct++){const at=w[ct],Tt=M[ct];at!==null&&Tt!==void 0&&Tt.update(at,et,c||o)}E.render(t,v),dt&&dt(G,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),x=null}const Wt=new xo;Wt.setAnimationLoop(Ut),this.setAnimationLoop=function(G){dt=G},this.dispose=function(){}}}const En=new He,dp=new Jt;function fp(i,t){function e(d,h){d.matrixAutoUpdate===!0&&d.updateMatrix(),h.value.copy(d.matrix)}function n(d,h){h.color.getRGB(d.fogColor.value,go(i)),h.isFog?(d.fogNear.value=h.near,d.fogFar.value=h.far):h.isFogExp2&&(d.fogDensity.value=h.density)}function r(d,h,b,M,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(d,h):h.isMeshToonMaterial?(s(d,h),m(d,h)):h.isMeshPhongMaterial?(s(d,h),u(d,h)):h.isMeshStandardMaterial?(s(d,h),p(d,h),h.isMeshPhysicalMaterial&&g(d,h,w)):h.isMeshMatcapMaterial?(s(d,h),x(d,h)):h.isMeshDepthMaterial?s(d,h):h.isMeshDistanceMaterial?(s(d,h),E(d,h)):h.isMeshNormalMaterial?s(d,h):h.isLineBasicMaterial?(o(d,h),h.isLineDashedMaterial&&a(d,h)):h.isPointsMaterial?l(d,h,b,M):h.isSpriteMaterial?c(d,h):h.isShadowMaterial?(d.color.value.copy(h.color),d.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(d,h){d.opacity.value=h.opacity,h.color&&d.diffuse.value.copy(h.color),h.emissive&&d.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.bumpMap&&(d.bumpMap.value=h.bumpMap,e(h.bumpMap,d.bumpMapTransform),d.bumpScale.value=h.bumpScale,h.side===ge&&(d.bumpScale.value*=-1)),h.normalMap&&(d.normalMap.value=h.normalMap,e(h.normalMap,d.normalMapTransform),d.normalScale.value.copy(h.normalScale),h.side===ge&&d.normalScale.value.negate()),h.displacementMap&&(d.displacementMap.value=h.displacementMap,e(h.displacementMap,d.displacementMapTransform),d.displacementScale.value=h.displacementScale,d.displacementBias.value=h.displacementBias),h.emissiveMap&&(d.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,d.emissiveMapTransform)),h.specularMap&&(d.specularMap.value=h.specularMap,e(h.specularMap,d.specularMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest);const b=t.get(h),M=b.envMap,w=b.envMapRotation;if(M&&(d.envMap.value=M,En.copy(w),En.x*=-1,En.y*=-1,En.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(En.y*=-1,En.z*=-1),d.envMapRotation.value.setFromMatrix4(dp.makeRotationFromEuler(En)),d.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=h.reflectivity,d.ior.value=h.ior,d.refractionRatio.value=h.refractionRatio),h.lightMap){d.lightMap.value=h.lightMap;const F=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=h.lightMapIntensity*F,e(h.lightMap,d.lightMapTransform)}h.aoMap&&(d.aoMap.value=h.aoMap,d.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,d.aoMapTransform))}function o(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform))}function a(d,h){d.dashSize.value=h.dashSize,d.totalSize.value=h.dashSize+h.gapSize,d.scale.value=h.scale}function l(d,h,b,M){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.size.value=h.size*b,d.scale.value=M*.5,h.map&&(d.map.value=h.map,e(h.map,d.uvTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function c(d,h){d.diffuse.value.copy(h.color),d.opacity.value=h.opacity,d.rotation.value=h.rotation,h.map&&(d.map.value=h.map,e(h.map,d.mapTransform)),h.alphaMap&&(d.alphaMap.value=h.alphaMap,e(h.alphaMap,d.alphaMapTransform)),h.alphaTest>0&&(d.alphaTest.value=h.alphaTest)}function u(d,h){d.specular.value.copy(h.specular),d.shininess.value=Math.max(h.shininess,1e-4)}function m(d,h){h.gradientMap&&(d.gradientMap.value=h.gradientMap)}function p(d,h){d.metalness.value=h.metalness,h.metalnessMap&&(d.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,d.metalnessMapTransform)),d.roughness.value=h.roughness,h.roughnessMap&&(d.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,d.roughnessMapTransform)),h.envMap&&(d.envMapIntensity.value=h.envMapIntensity)}function g(d,h,b){d.ior.value=h.ior,h.sheen>0&&(d.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),d.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(d.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,d.sheenColorMapTransform)),h.sheenRoughnessMap&&(d.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,d.sheenRoughnessMapTransform))),h.clearcoat>0&&(d.clearcoat.value=h.clearcoat,d.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(d.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,d.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(d.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ge&&d.clearcoatNormalScale.value.negate())),h.iridescence>0&&(d.iridescence.value=h.iridescence,d.iridescenceIOR.value=h.iridescenceIOR,d.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(d.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,d.iridescenceMapTransform)),h.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),h.transmission>0&&(d.transmission.value=h.transmission,d.transmissionSamplerMap.value=b.texture,d.transmissionSamplerSize.value.set(b.width,b.height),h.transmissionMap&&(d.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,d.transmissionMapTransform)),d.thickness.value=h.thickness,h.thicknessMap&&(d.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=h.attenuationDistance,d.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(d.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(d.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=h.specularIntensity,d.specularColor.value.copy(h.specularColor),h.specularColorMap&&(d.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,d.specularColorMapTransform)),h.specularIntensityMap&&(d.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,d.specularIntensityMapTransform))}function x(d,h){h.matcap&&(d.matcap.value=h.matcap)}function E(d,h){const b=t.get(h).light;d.referencePosition.value.setFromMatrixPosition(b.matrixWorld),d.nearDistance.value=b.shadow.camera.near,d.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pp(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const w=M.program;n.uniformBlockBinding(b,w)}function c(b,M){let w=r[b.id];w===void 0&&(x(b),w=u(b),r[b.id]=w,b.addEventListener("dispose",d));const F=M.program;n.updateUBOMapping(b,F);const R=t.render.frame;s[b.id]!==R&&(p(b),s[b.id]=R)}function u(b){const M=m();b.__bindingPointIndex=M;const w=i.createBuffer(),F=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,F,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function m(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(b){const M=r[b.id],w=b.uniforms,F=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let R=0,A=w.length;R<A;R++){const H=Array.isArray(w[R])?w[R]:[w[R]];for(let y=0,v=H.length;y<v;y++){const U=H[y];if(g(U,R,y,F)===!0){const W=U.__offset,P=Array.isArray(U.value)?U.value:[U.value];let q=0;for(let X=0;X<P.length;X++){const Z=P[X],J=E(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,W+q,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):(Z.toArray(U.__data,q),q+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(b,M,w,F){const R=b.value,A=M+"_"+w;if(F[A]===void 0)return typeof R=="number"||typeof R=="boolean"?F[A]=R:F[A]=R.clone(),!0;{const H=F[A];if(typeof R=="number"||typeof R=="boolean"){if(H!==R)return F[A]=R,!0}else if(H.equals(R)===!1)return H.copy(R),!0}return!1}function x(b){const M=b.uniforms;let w=0;const F=16;for(let A=0,H=M.length;A<H;A++){const y=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,U=y.length;v<U;v++){const W=y[v],P=Array.isArray(W.value)?W.value:[W.value];for(let q=0,X=P.length;q<X;q++){const Z=P[q],J=E(Z),V=w%F;V!==0&&F-V<J.boundary&&(w+=F-V),W.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=J.storage}}}const R=w%F;return R>0&&(w+=F-R),b.__size=w,b.__cache={},this}function E(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function d(b){const M=b.target;M.removeEventListener("dispose",d);const w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function h(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class mp{constructor(t={}){const{canvas:e=rc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:m=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let E=null,d=null;const h=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this._useLegacyLights=!1,this.toneMapping=cn,this.toneMappingExposure=1;const M=this;let w=!1,F=0,R=0,A=null,H=-1,y=null;const v=new Zt,U=new Zt;let W=null;const P=new zt(0);let q=0,X=e.width,Z=e.height,J=1,V=null,tt=null;const Q=new Zt(0,0,X,Z),dt=new Zt(0,0,X,Z);let Ut=!1;const Wt=new ls;let G=!1,et=!1;const ct=new Jt,at=new St,Tt=new C,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return A===null?J:1}let D=n;function Dt(S,L){const O=e.getContext(S,L);return O!==null?O:null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${is}`),e.addEventListener("webglcontextlost",I,!1),e.addEventListener("webglcontextrestored",k,!1),e.addEventListener("webglcontextcreationerror",nt,!1),D===null){const L="webgl2";if(D=Dt(L,S),D===null)throw Dt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let xt,Qt,Mt,kt,T,_,z,Y,j,K,gt,$,mt,_t,it,ot,Et,ut,ht,Ft,Ot,Vt,Ht,Gt;function ft(){xt=new Ed(D),xt.init(),Qt=new md(D,xt,t),Vt=new sp(D,xt),Mt=new ip(D),kt=new Ad(D),T=new kf,_=new rp(D,xt,Mt,T,Qt,Vt,kt),z=new _d(M),Y=new Sd(M),j=new Pc(D),Ht=new fd(D,j),K=new yd(D,j,kt,Ht),gt=new wd(D,K,j,kt),ht=new bd(D,Qt,_),ot=new gd(T),$=new Gf(M,z,Y,xt,Qt,Ht,ot),mt=new fp(M,T),_t=new Xf,it=new $f(xt),ut=new dd(M,z,Y,Mt,gt,p,l),Et=new np(M,gt,Qt),Gt=new pp(D,kt,Qt,Mt),Ft=new pd(D,xt,kt),Ot=new Td(D,xt,kt),kt.programs=$.programs,M.capabilities=Qt,M.extensions=xt,M.properties=T,M.renderLists=_t,M.shadowMap=Et,M.state=Mt,M.info=kt}ft();const f=new hp(M,D);this.xr=f,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=xt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=xt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(X,Z,!1))},this.getSize=function(S){return S.set(X,Z)},this.setSize=function(S,L,O=!0){if(f.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=S,Z=L,e.width=Math.floor(S*J),e.height=Math.floor(L*J),O===!0&&(e.style.width=S+"px",e.style.height=L+"px"),this.setViewport(0,0,S,L)},this.getDrawingBufferSize=function(S){return S.set(X*J,Z*J).floor()},this.setDrawingBufferSize=function(S,L,O){X=S,Z=L,J=O,e.width=Math.floor(S*O),e.height=Math.floor(L*O),this.setViewport(0,0,S,L)},this.getCurrentViewport=function(S){return S.copy(v)},this.getViewport=function(S){return S.copy(Q)},this.setViewport=function(S,L,O,B){S.isVector4?Q.set(S.x,S.y,S.z,S.w):Q.set(S,L,O,B),Mt.viewport(v.copy(Q).multiplyScalar(J).round())},this.getScissor=function(S){return S.copy(dt)},this.setScissor=function(S,L,O,B){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,L,O,B),Mt.scissor(U.copy(dt).multiplyScalar(J).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(S){Mt.setScissorTest(Ut=S)},this.setOpaqueSort=function(S){V=S},this.setTransparentSort=function(S){tt=S},this.getClearColor=function(S){return S.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor.apply(ut,arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha.apply(ut,arguments)},this.clear=function(S=!0,L=!0,O=!0){let B=0;if(S){let N=!1;if(A!==null){const st=A.texture.format;N=st===io||st===no||st===eo}if(N){const st=A.texture.type,pt=st===un||st===si||st===$a||st===yi||st===Qa||st===to,vt=ut.getClearColor(),yt=ut.getClearAlpha(),wt=vt.r,At=vt.g,Rt=vt.b;pt?(g[0]=wt,g[1]=At,g[2]=Rt,g[3]=yt,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=wt,x[1]=At,x[2]=Rt,x[3]=yt,D.clearBufferiv(D.COLOR,0,x))}else B|=D.COLOR_BUFFER_BIT}L&&(B|=D.DEPTH_BUFFER_BIT),O&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",I,!1),e.removeEventListener("webglcontextrestored",k,!1),e.removeEventListener("webglcontextcreationerror",nt,!1),_t.dispose(),it.dispose(),T.dispose(),z.dispose(),Y.dispose(),gt.dispose(),Ht.dispose(),Gt.dispose(),$.dispose(),f.dispose(),f.removeEventListener("sessionstart",ee),f.removeEventListener("sessionend",ne),ve.stop()};function I(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const S=kt.autoReset,L=Et.enabled,O=Et.autoUpdate,B=Et.needsUpdate,N=Et.type;ft(),kt.autoReset=S,Et.enabled=L,Et.autoUpdate=O,Et.needsUpdate=B,Et.type=N}function nt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function lt(S){const L=S.target;L.removeEventListener("dispose",lt),Bt(L)}function Bt(S){It(S),T.remove(S)}function It(S){const L=T.get(S).programs;L!==void 0&&(L.forEach(function(O){$.releaseProgram(O)}),S.isShaderMaterial&&$.releaseShaderCache(S))}this.renderBufferDirect=function(S,L,O,B,N,st){L===null&&(L=bt);const pt=N.isMesh&&N.matrixWorld.determinant()<0,vt=Uo(S,L,O,B,N);Mt.setMaterial(B,pt);let yt=O.index,wt=1;if(B.wireframe===!0){if(yt=K.getWireframeAttribute(O),yt===void 0)return;wt=2}const At=O.drawRange,Rt=O.attributes.position;let te=At.start*wt,xe=(At.start+At.count)*wt;st!==null&&(te=Math.max(te,st.start*wt),xe=Math.min(xe,(st.start+st.count)*wt)),yt!==null?(te=Math.max(te,0),xe=Math.min(xe,yt.count)):Rt!=null&&(te=Math.max(te,0),xe=Math.min(xe,Rt.count));const oe=xe-te;if(oe<0||oe===1/0)return;Ht.setup(N,B,vt,O,yt);let Ge,$t=Ft;if(yt!==null&&(Ge=j.get(yt),$t=Ot,$t.setIndex(Ge)),N.isMesh)B.wireframe===!0?(Mt.setLineWidth(B.wireframeLinewidth*Nt()),$t.setMode(D.LINES)):$t.setMode(D.TRIANGLES);else if(N.isLine){let Ct=B.linewidth;Ct===void 0&&(Ct=1),Mt.setLineWidth(Ct*Nt()),N.isLineSegments?$t.setMode(D.LINES):N.isLineLoop?$t.setMode(D.LINE_LOOP):$t.setMode(D.LINE_STRIP)}else N.isPoints?$t.setMode(D.POINTS):N.isSprite&&$t.setMode(D.TRIANGLES);if(N.isBatchedMesh)$t.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)$t.renderInstances(te,oe,N.count);else if(O.isInstancedBufferGeometry){const Ct=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,hr=Math.min(O.instanceCount,Ct);$t.renderInstances(te,oe,hr)}else $t.render(te,oe)};function jt(S,L,O){S.transparent===!0&&S.side===Ne&&S.forceSinglePass===!1?(S.side=ge,S.needsUpdate=!0,Ai(S,L,O),S.side=hn,S.needsUpdate=!0,Ai(S,L,O),S.side=Ne):Ai(S,L,O)}this.compile=function(S,L,O=null){O===null&&(O=S),d=it.get(O),d.init(),b.push(d),O.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),S!==O&&S.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(M._useLegacyLights);const B=new Set;return S.traverse(function(N){const st=N.material;if(st)if(Array.isArray(st))for(let pt=0;pt<st.length;pt++){const vt=st[pt];jt(vt,O,N),B.add(vt)}else jt(st,O,N),B.add(st)}),b.pop(),d=null,B},this.compileAsync=function(S,L,O=null){const B=this.compile(S,L,O);return new Promise(N=>{function st(){if(B.forEach(function(pt){T.get(pt).currentProgram.isReady()&&B.delete(pt)}),B.size===0){N(S);return}setTimeout(st,10)}xt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ae=null;function Xt(S){ae&&ae(S)}function ee(){ve.stop()}function ne(){ve.start()}const ve=new xo;ve.setAnimationLoop(Xt),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(S){ae=S,f.setAnimationLoop(S),S===null?ve.stop():ve.start()},f.addEventListener("sessionstart",ee),f.addEventListener("sessionend",ne),this.render=function(S,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),f.enabled===!0&&f.isPresenting===!0&&(f.cameraAutoUpdate===!0&&f.updateCamera(L),L=f.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,L,A),d=it.get(S,b.length),d.init(),b.push(d),ct.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Wt.setFromProjectionMatrix(ct),et=this.localClippingEnabled,G=ot.init(this.clippingPlanes,et),E=_t.get(S,h.length),E.init(),h.push(E),Te(S,L,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(V,tt),this.info.render.frame++,G===!0&&ot.beginShadows();const O=d.state.shadowsArray;if(Et.render(O,S,L),G===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),(f.enabled===!1||f.isPresenting===!1||f.hasDepthSensing()===!1)&&ut.render(E,S),d.setupLights(M._useLegacyLights),L.isArrayCamera){const B=L.cameras;for(let N=0,st=B.length;N<st;N++){const pt=B[N];Ze(E,S,pt,pt.viewport)}}else Ze(E,S,L);A!==null&&(_.updateMultisampleRenderTarget(A),_.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(M,S,L),Ht.resetDefaultState(),H=-1,y=null,b.pop(),b.length>0?d=b[b.length-1]:d=null,h.pop(),h.length>0?E=h[h.length-1]:E=null};function Te(S,L,O,B){if(S.visible===!1)return;if(S.layers.test(L.layers)){if(S.isGroup)O=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(L);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Wt.intersectsSprite(S)){B&&Tt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ct);const pt=gt.update(S),vt=S.material;vt.visible&&E.push(S,pt,vt,O,Tt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Wt.intersectsObject(S))){const pt=gt.update(S),vt=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Tt.copy(S.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Tt.copy(pt.boundingSphere.center)),Tt.applyMatrix4(S.matrixWorld).applyMatrix4(ct)),Array.isArray(vt)){const yt=pt.groups;for(let wt=0,At=yt.length;wt<At;wt++){const Rt=yt[wt],te=vt[Rt.materialIndex];te&&te.visible&&E.push(S,pt,te,O,Tt.z,Rt)}}else vt.visible&&E.push(S,pt,vt,O,Tt.z,null)}}const st=S.children;for(let pt=0,vt=st.length;pt<vt;pt++)Te(st[pt],L,O,B)}function Ze(S,L,O,B){const N=S.opaque,st=S.transmissive,pt=S.transparent;d.setupLightsView(O),G===!0&&ot.setGlobalState(M.clippingPlanes,O),st.length>0&&Dn(N,st,L,O),B&&Mt.viewport(v.copy(B)),N.length>0&&mn(N,L,O),st.length>0&&mn(st,L,O),pt.length>0&&mn(pt,L,O),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Dn(S,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;if(d.state.transmissionRenderTarget===null){d.state.transmissionRenderTarget=new Rn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?tr:un,minFilter:wn,samples:4,stencilBuffer:s});const wt=T.get(d.state.transmissionRenderTarget);wt.__isTransmissionRenderTarget=!0}const st=d.state.transmissionRenderTarget;M.getDrawingBufferSize(at),st.setSize(at.x,at.y);const pt=M.getRenderTarget();M.setRenderTarget(st),M.getClearColor(P),q=M.getClearAlpha(),q<1&&M.setClearColor(16777215,.5),M.clear();const vt=M.toneMapping;M.toneMapping=cn,mn(S,O,B),_.updateMultisampleRenderTarget(st),_.updateRenderTargetMipmap(st);let yt=!1;for(let wt=0,At=L.length;wt<At;wt++){const Rt=L[wt],te=Rt.object,xe=Rt.geometry,oe=Rt.material,Ge=Rt.group;if(oe.side===Ne&&te.layers.test(B.layers)){const $t=oe.side;oe.side=ge,oe.needsUpdate=!0,hs(te,O,B,xe,oe,Ge),oe.side=$t,oe.needsUpdate=!0,yt=!0}}yt===!0&&(_.updateMultisampleRenderTarget(st),_.updateRenderTargetMipmap(st)),M.setRenderTarget(pt),M.setClearColor(P,q),M.toneMapping=vt}function mn(S,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let N=0,st=S.length;N<st;N++){const pt=S[N],vt=pt.object,yt=pt.geometry,wt=B===null?pt.material:B,At=pt.group;vt.layers.test(O.layers)&&hs(vt,L,O,yt,wt,At)}}function hs(S,L,O,B,N,st){S.onBeforeRender(M,L,O,B,N,st),S.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(M,L,O,B,S,st),N.transparent===!0&&N.side===Ne&&N.forceSinglePass===!1?(N.side=ge,N.needsUpdate=!0,M.renderBufferDirect(O,L,B,N,S,st),N.side=hn,N.needsUpdate=!0,M.renderBufferDirect(O,L,B,N,S,st),N.side=Ne):M.renderBufferDirect(O,L,B,N,S,st),S.onAfterRender(M,L,O,B,N,st)}function Ai(S,L,O){L.isScene!==!0&&(L=bt);const B=T.get(S),N=d.state.lights,st=d.state.shadowsArray,pt=N.state.version,vt=$.getParameters(S,N.state,st,L,O),yt=$.getProgramCacheKey(vt);let wt=B.programs;B.environment=S.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(S.isMeshStandardMaterial?Y:z).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?L.environmentRotation:S.envMapRotation,wt===void 0&&(S.addEventListener("dispose",lt),wt=new Map,B.programs=wt);let At=wt.get(yt);if(At!==void 0){if(B.currentProgram===At&&B.lightsStateVersion===pt)return fs(S,vt),At}else vt.uniforms=$.getUniforms(S),S.onBuild(O,vt,M),S.onBeforeCompile(vt,M),At=$.acquireProgram(vt,yt),wt.set(yt,At),B.uniforms=vt.uniforms;const Rt=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=ot.uniform),fs(S,vt),B.needsLights=No(S),B.lightsStateVersion=pt,B.needsLights&&(Rt.ambientLightColor.value=N.state.ambient,Rt.lightProbe.value=N.state.probe,Rt.directionalLights.value=N.state.directional,Rt.directionalLightShadows.value=N.state.directionalShadow,Rt.spotLights.value=N.state.spot,Rt.spotLightShadows.value=N.state.spotShadow,Rt.rectAreaLights.value=N.state.rectArea,Rt.ltc_1.value=N.state.rectAreaLTC1,Rt.ltc_2.value=N.state.rectAreaLTC2,Rt.pointLights.value=N.state.point,Rt.pointLightShadows.value=N.state.pointShadow,Rt.hemisphereLights.value=N.state.hemi,Rt.directionalShadowMap.value=N.state.directionalShadowMap,Rt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Rt.spotShadowMap.value=N.state.spotShadowMap,Rt.spotLightMatrix.value=N.state.spotLightMatrix,Rt.spotLightMap.value=N.state.spotLightMap,Rt.pointShadowMap.value=N.state.pointShadowMap,Rt.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=At,B.uniformsList=null,At}function ds(S){if(S.uniformsList===null){const L=S.currentProgram.getUniforms();S.uniformsList=$i.seqWithValue(L.seq,S.uniforms)}return S.uniformsList}function fs(S,L){const O=T.get(S);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function Uo(S,L,O,B,N){L.isScene!==!0&&(L=bt),_.resetTextureUnits();const st=L.fog,pt=B.isMeshStandardMaterial?L.environment:null,vt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:pn,yt=(B.isMeshStandardMaterial?Y:z).get(B.envMap||pt),wt=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,At=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Rt=!!O.morphAttributes.position,te=!!O.morphAttributes.normal,xe=!!O.morphAttributes.color;let oe=cn;B.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(oe=M.toneMapping);const Ge=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$t=Ge!==void 0?Ge.length:0,Ct=T.get(B),hr=d.state.lights;if(G===!0&&(et===!0||S!==y)){const Ae=S===y&&B.id===H;ot.setState(B,S,Ae)}let Kt=!1;B.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==hr.state.version||Ct.outputColorSpace!==vt||N.isBatchedMesh&&Ct.batching===!1||!N.isBatchedMesh&&Ct.batching===!0||N.isInstancedMesh&&Ct.instancing===!1||!N.isInstancedMesh&&Ct.instancing===!0||N.isSkinnedMesh&&Ct.skinning===!1||!N.isSkinnedMesh&&Ct.skinning===!0||N.isInstancedMesh&&Ct.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ct.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ct.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ct.instancingMorph===!1&&N.morphTexture!==null||Ct.envMap!==yt||B.fog===!0&&Ct.fog!==st||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==ot.numPlanes||Ct.numIntersection!==ot.numIntersection)||Ct.vertexAlphas!==wt||Ct.vertexTangents!==At||Ct.morphTargets!==Rt||Ct.morphNormals!==te||Ct.morphColors!==xe||Ct.toneMapping!==oe||Ct.morphTargetsCount!==$t)&&(Kt=!0):(Kt=!0,Ct.__version=B.version);let gn=Ct.currentProgram;Kt===!0&&(gn=Ai(B,L,N));let ps=!1,hi=!1,dr=!1;const ce=gn.getUniforms(),$e=Ct.uniforms;if(Mt.useProgram(gn.program)&&(ps=!0,hi=!0,dr=!0),B.id!==H&&(H=B.id,hi=!0),ps||y!==S){ce.setValue(D,"projectionMatrix",S.projectionMatrix),ce.setValue(D,"viewMatrix",S.matrixWorldInverse);const Ae=ce.map.cameraPosition;Ae!==void 0&&Ae.setValue(D,Tt.setFromMatrixPosition(S.matrixWorld)),Qt.logarithmicDepthBuffer&&ce.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ce.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),y!==S&&(y=S,hi=!0,dr=!0)}if(N.isSkinnedMesh){ce.setOptional(D,N,"bindMatrix"),ce.setOptional(D,N,"bindMatrixInverse");const Ae=N.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),ce.setValue(D,"boneTexture",Ae.boneTexture,_))}N.isBatchedMesh&&(ce.setOptional(D,N,"batchingTexture"),ce.setValue(D,"batchingTexture",N._matricesTexture,_));const fr=O.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&ht.update(N,O,gn),(hi||Ct.receiveShadow!==N.receiveShadow)&&(Ct.receiveShadow=N.receiveShadow,ce.setValue(D,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&($e.envMap.value=yt,$e.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&($e.envMapIntensity.value=L.environmentIntensity),hi&&(ce.setValue(D,"toneMappingExposure",M.toneMappingExposure),Ct.needsLights&&Io($e,dr),st&&B.fog===!0&&mt.refreshFogUniforms($e,st),mt.refreshMaterialUniforms($e,B,J,Z,d.state.transmissionRenderTarget),$i.upload(D,ds(Ct),$e,_)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&($i.upload(D,ds(Ct),$e,_),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ce.setValue(D,"center",N.center),ce.setValue(D,"modelViewMatrix",N.modelViewMatrix),ce.setValue(D,"normalMatrix",N.normalMatrix),ce.setValue(D,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Ae=B.uniformsGroups;for(let pr=0,Fo=Ae.length;pr<Fo;pr++){const ms=Ae[pr];Gt.update(ms,gn),Gt.bind(ms,gn)}}return gn}function Io(S,L){S.ambientLightColor.needsUpdate=L,S.lightProbe.needsUpdate=L,S.directionalLights.needsUpdate=L,S.directionalLightShadows.needsUpdate=L,S.pointLights.needsUpdate=L,S.pointLightShadows.needsUpdate=L,S.spotLights.needsUpdate=L,S.spotLightShadows.needsUpdate=L,S.rectAreaLights.needsUpdate=L,S.hemisphereLights.needsUpdate=L}function No(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,L,O){T.get(S.texture).__webglTexture=L,T.get(S.depthTexture).__webglTexture=O;const B=T.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,L){const O=T.get(S);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(S,L=0,O=0){A=S,F=L,R=O;let B=!0,N=null,st=!1,pt=!1;if(S){const yt=T.get(S);yt.__useDefaultFramebuffer!==void 0?(Mt.bindFramebuffer(D.FRAMEBUFFER,null),B=!1):yt.__webglFramebuffer===void 0?_.setupRenderTarget(S):yt.__hasExternalTextures&&_.rebindTextures(S,T.get(S.texture).__webglTexture,T.get(S.depthTexture).__webglTexture);const wt=S.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(pt=!0);const At=T.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(At[L])?N=At[L][O]:N=At[L],st=!0):S.samples>0&&_.useMultisampledRTT(S)===!1?N=T.get(S).__webglMultisampledFramebuffer:Array.isArray(At)?N=At[O]:N=At,v.copy(S.viewport),U.copy(S.scissor),W=S.scissorTest}else v.copy(Q).multiplyScalar(J).floor(),U.copy(dt).multiplyScalar(J).floor(),W=Ut;if(Mt.bindFramebuffer(D.FRAMEBUFFER,N)&&B&&Mt.drawBuffers(S,N),Mt.viewport(v),Mt.scissor(U),Mt.setScissorTest(W),st){const yt=T.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+L,yt.__webglTexture,O)}else if(pt){const yt=T.get(S.texture),wt=L||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.__webglTexture,O||0,wt)}H=-1},this.readRenderTargetPixels=function(S,L,O,B,N,st,pt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=T.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pt!==void 0&&(vt=vt[pt]),vt){Mt.bindFramebuffer(D.FRAMEBUFFER,vt);try{const yt=S.texture,wt=yt.format,At=yt.type;if(wt!==Oe&&Vt.convert(wt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Rt=At===tr&&(xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float"));if(At!==un&&Vt.convert(At)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&At!==on&&!Rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=S.width-B&&O>=0&&O<=S.height-N&&D.readPixels(L,O,B,N,Vt.convert(wt),Vt.convert(At),st)}finally{const yt=A!==null?T.get(A).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,yt)}}},this.copyFramebufferToTexture=function(S,L,O=0){const B=Math.pow(2,-O),N=Math.floor(L.image.width*B),st=Math.floor(L.image.height*B);_.setTexture2D(L,0),D.copyTexSubImage2D(D.TEXTURE_2D,O,0,0,S.x,S.y,N,st),Mt.unbindTexture()},this.copyTextureToTexture=function(S,L,O,B=0){const N=L.image.width,st=L.image.height,pt=Vt.convert(O.format),vt=Vt.convert(O.type);_.setTexture2D(O,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment),L.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,S.x,S.y,N,st,pt,vt,L.image.data):L.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,S.x,S.y,L.mipmaps[0].width,L.mipmaps[0].height,pt,L.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,B,S.x,S.y,pt,vt,L.image),B===0&&O.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Mt.unbindTexture()},this.copyTextureToTexture3D=function(S,L,O,B,N=0){const st=Math.round(S.max.x-S.min.x),pt=Math.round(S.max.y-S.min.y),vt=S.max.z-S.min.z+1,yt=Vt.convert(B.format),wt=Vt.convert(B.type);let At;if(B.isData3DTexture)_.setTexture3D(B,0),At=D.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)_.setTexture2DArray(B,0),At=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const Rt=D.getParameter(D.UNPACK_ROW_LENGTH),te=D.getParameter(D.UNPACK_IMAGE_HEIGHT),xe=D.getParameter(D.UNPACK_SKIP_PIXELS),oe=D.getParameter(D.UNPACK_SKIP_ROWS),Ge=D.getParameter(D.UNPACK_SKIP_IMAGES),$t=O.isCompressedTexture?O.mipmaps[N]:O.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,$t.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$t.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,S.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,S.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,S.min.z),O.isDataTexture||O.isData3DTexture?D.texSubImage3D(At,N,L.x,L.y,L.z,st,pt,vt,yt,wt,$t.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(At,N,L.x,L.y,L.z,st,pt,vt,yt,$t.data):D.texSubImage3D(At,N,L.x,L.y,L.z,st,pt,vt,yt,wt,$t),D.pixelStorei(D.UNPACK_ROW_LENGTH,Rt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,te),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xe),D.pixelStorei(D.UNPACK_SKIP_ROWS,oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge),N===0&&B.generateMipmaps&&D.generateMipmap(At),Mt.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?_.setTextureCube(S,0):S.isData3DTexture?_.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?_.setTexture2DArray(S,0):_.setTexture2D(S,0),Mt.unbindTexture()},this.resetState=function(){F=0,R=0,A=null,Mt.reset(),Ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ke}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ss?"display-p3":"srgb",e.unpackColorSpace=Yt.workingColorSpace===or?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class gp extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new He,this.environmentIntensity=1,this.environmentRotation=new He,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class us extends li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fa=new C,Oa=new C,Ba=new Jt,Yr=new os,Ki=new lr;class _p extends me{constructor(t=new Ve,e=new us){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Fa.fromBufferAttribute(e,r-1),Oa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Fa.distanceTo(Oa);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ki.copy(n.boundingSphere),Ki.applyMatrix4(r),Ki.radius+=s,t.ray.intersectsSphere(Ki)===!1)return;Ba.copy(r).invert(),Yr.copy(t.ray).applyMatrix4(Ba);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,u=new C,m=new C,p=new C,g=this.isLineSegments?2:1,x=n.index,d=n.attributes.position;if(x!==null){const h=Math.max(0,o.start),b=Math.min(x.count,o.start+o.count);for(let M=h,w=b-1;M<w;M+=g){const F=x.getX(M),R=x.getX(M+1);if(c.fromBufferAttribute(d,F),u.fromBufferAttribute(d,R),Yr.distanceSqToSegment(c,u,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);const H=t.ray.origin.distanceTo(p);H<t.near||H>t.far||e.push({distance:H,point:m.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),b=Math.min(d.count,o.start+o.count);for(let M=h,w=b-1;M<w;M+=g){if(c.fromBufferAttribute(d,M),u.fromBufferAttribute(d,M+1),Yr.distanceSqToSegment(c,u,p,m)>l)continue;p.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(p);R<t.near||R>t.far||e.push({distance:R,point:m.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const za=new C,Ha=new C;class bo extends _p{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)za.fromBufferAttribute(e,r),Ha.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+za.distanceTo(Ha);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vp extends li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=so,this.normalScale=new St(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new He,this.combine=rs,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wo extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const qr=new Jt,Va=new C,Ga=new C;class xp{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new St(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new St(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Va.setFromMatrixPosition(t.matrixWorld),e.position.copy(Va),Ga.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ga),e.updateMatrixWorld(),qr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ka=new Jt,gi=new C,jr=new C;class Mp extends xp{constructor(){super(new Ee(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new St(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),gi.setFromMatrixPosition(t.matrixWorld),n.position.copy(gi),jr.copy(n.position),jr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(jr),n.updateMatrixWorld(),r.makeTranslation(-gi.x,-gi.y,-gi.z),ka.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka)}}class Sp extends wo{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Mp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Ep extends wo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class yp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Wa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Wa(){return(typeof performance>"u"?Date:performance).now()}class Xa{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(de(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tp extends bo{constructor(t=10,e=10,n=4473924,r=8947848){n=new zt(n),r=new zt(r);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let p=0,g=0,x=-a;p<=e;p++,x+=o){l.push(-a,0,x,a,0,x),l.push(x,0,-a,x,0,a);const E=p===s?n:r;E.toArray(c,g),g+=3,E.toArray(c,g),g+=3,E.toArray(c,g),g+=3,E.toArray(c,g),g+=3}const u=new Ve;u.setAttribute("position",new ye(l,3)),u.setAttribute("color",new ye(c,3));const m=new us({vertexColors:!0,toneMapped:!1});super(u,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ap extends bo{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Ve;r.setAttribute("position",new ye(e,3)),r.setAttribute("color",new ye(n,3));const s=new us({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(t,e,n){const r=new zt,s=this.geometry.attributes.color.array;return r.set(t),r.toArray(s,0),r.toArray(s,3),r.set(e),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:is}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=is);const Ya={type:"change"},Kr={type:"start"},qa={type:"end"},Zi=new os,ja=new sn,bp=Math.cos(70*ic.DEG2RAD);class wp extends Pn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Un.ROTATE,MIDDLE:Un.DOLLY,RIGHT:Un.PAN},this.touches={ONE:In.ROTATE,TWO:In.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(f){f.addEventListener("keydown",ot),this._domElementKeyEvents=f},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ot),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Ya),n.update(),s=r.NONE},this.update=function(){const f=new C,I=new Cn().setFromUnitVectors(t.up,new C(0,1,0)),k=I.clone().invert(),nt=new C,lt=new Cn,Bt=new C,It=2*Math.PI;return function(ae=null){const Xt=n.object.position;f.copy(Xt).sub(n.target),f.applyQuaternion(I),a.setFromVector3(f),n.autoRotate&&s===r.NONE&&W(v(ae)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ee=n.minAzimuthAngle,ne=n.maxAzimuthAngle;isFinite(ee)&&isFinite(ne)&&(ee<-Math.PI?ee+=It:ee>Math.PI&&(ee-=It),ne<-Math.PI?ne+=It:ne>Math.PI&&(ne-=It),ee<=ne?a.theta=Math.max(ee,Math.min(ne,a.theta)):a.theta=a.theta>(ee+ne)/2?Math.max(ee,a.theta):Math.min(ne,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ve=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)a.radius=Q(a.radius);else{const Te=a.radius;a.radius=Q(a.radius*c),ve=Te!=a.radius}if(f.setFromSpherical(a),f.applyQuaternion(k),Xt.copy(n.target).add(f),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),n.zoomToCursor&&R){let Te=null;if(n.object.isPerspectiveCamera){const Ze=f.length();Te=Q(Ze*c);const Dn=Ze-Te;n.object.position.addScaledVector(w,Dn),n.object.updateMatrixWorld(),ve=!!Dn}else if(n.object.isOrthographicCamera){const Ze=new C(F.x,F.y,0);Ze.unproject(n.object);const Dn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ve=Dn!==n.object.zoom;const mn=new C(F.x,F.y,0);mn.unproject(n.object),n.object.position.sub(mn).add(Ze),n.object.updateMatrixWorld(),Te=f.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Te!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Te).add(n.object.position):(Zi.origin.copy(n.object.position),Zi.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Zi.direction))<bp?t.lookAt(n.target):(ja.setFromNormalAndCoplanarPoint(n.object.up,n.target),Zi.intersectPlane(ja,n.target))))}else if(n.object.isOrthographicCamera){const Te=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Te!==n.object.zoom&&(n.object.updateProjectionMatrix(),ve=!0)}return c=1,R=!1,ve||nt.distanceToSquared(n.object.position)>o||8*(1-lt.dot(n.object.quaternion))>o||Bt.distanceToSquared(n.target)>o?(n.dispatchEvent(Ya),nt.copy(n.object.position),lt.copy(n.object.quaternion),Bt.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ht),n.domElement.removeEventListener("pointerdown",z),n.domElement.removeEventListener("pointercancel",j),n.domElement.removeEventListener("wheel",$),n.domElement.removeEventListener("pointermove",Y),n.domElement.removeEventListener("pointerup",j),n.domElement.getRootNode().removeEventListener("keydown",_t,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",ot),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Xa,l=new Xa;let c=1;const u=new C,m=new St,p=new St,g=new St,x=new St,E=new St,d=new St,h=new St,b=new St,M=new St,w=new C,F=new St;let R=!1;const A=[],H={};let y=!1;function v(f){return f!==null?2*Math.PI/60*n.autoRotateSpeed*f:2*Math.PI/60/60*n.autoRotateSpeed}function U(f){const I=Math.abs(f*.01);return Math.pow(.95,n.zoomSpeed*I)}function W(f){l.theta-=f}function P(f){l.phi-=f}const q=function(){const f=new C;return function(k,nt){f.setFromMatrixColumn(nt,0),f.multiplyScalar(-k),u.add(f)}}(),X=function(){const f=new C;return function(k,nt){n.screenSpacePanning===!0?f.setFromMatrixColumn(nt,1):(f.setFromMatrixColumn(nt,0),f.crossVectors(n.object.up,f)),f.multiplyScalar(k),u.add(f)}}(),Z=function(){const f=new C;return function(k,nt){const lt=n.domElement;if(n.object.isPerspectiveCamera){const Bt=n.object.position;f.copy(Bt).sub(n.target);let It=f.length();It*=Math.tan(n.object.fov/2*Math.PI/180),q(2*k*It/lt.clientHeight,n.object.matrix),X(2*nt*It/lt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(q(k*(n.object.right-n.object.left)/n.object.zoom/lt.clientWidth,n.object.matrix),X(nt*(n.object.top-n.object.bottom)/n.object.zoom/lt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function J(f){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=f:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(f){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=f:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function tt(f,I){if(!n.zoomToCursor)return;R=!0;const k=n.domElement.getBoundingClientRect(),nt=f-k.left,lt=I-k.top,Bt=k.width,It=k.height;F.x=nt/Bt*2-1,F.y=-(lt/It)*2+1,w.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function Q(f){return Math.max(n.minDistance,Math.min(n.maxDistance,f))}function dt(f){m.set(f.clientX,f.clientY)}function Ut(f){tt(f.clientX,f.clientX),h.set(f.clientX,f.clientY)}function Wt(f){x.set(f.clientX,f.clientY)}function G(f){p.set(f.clientX,f.clientY),g.subVectors(p,m).multiplyScalar(n.rotateSpeed);const I=n.domElement;W(2*Math.PI*g.x/I.clientHeight),P(2*Math.PI*g.y/I.clientHeight),m.copy(p),n.update()}function et(f){b.set(f.clientX,f.clientY),M.subVectors(b,h),M.y>0?J(U(M.y)):M.y<0&&V(U(M.y)),h.copy(b),n.update()}function ct(f){E.set(f.clientX,f.clientY),d.subVectors(E,x).multiplyScalar(n.panSpeed),Z(d.x,d.y),x.copy(E),n.update()}function at(f){tt(f.clientX,f.clientY),f.deltaY<0?V(U(f.deltaY)):f.deltaY>0&&J(U(f.deltaY)),n.update()}function Tt(f){let I=!1;switch(f.code){case n.keys.UP:f.ctrlKey||f.metaKey||f.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,n.keyPanSpeed),I=!0;break;case n.keys.BOTTOM:f.ctrlKey||f.metaKey||f.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(0,-n.keyPanSpeed),I=!0;break;case n.keys.LEFT:f.ctrlKey||f.metaKey||f.shiftKey?W(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(n.keyPanSpeed,0),I=!0;break;case n.keys.RIGHT:f.ctrlKey||f.metaKey||f.shiftKey?W(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):Z(-n.keyPanSpeed,0),I=!0;break}I&&(f.preventDefault(),n.update())}function bt(f){if(A.length===1)m.set(f.pageX,f.pageY);else{const I=Gt(f),k=.5*(f.pageX+I.x),nt=.5*(f.pageY+I.y);m.set(k,nt)}}function Nt(f){if(A.length===1)x.set(f.pageX,f.pageY);else{const I=Gt(f),k=.5*(f.pageX+I.x),nt=.5*(f.pageY+I.y);x.set(k,nt)}}function D(f){const I=Gt(f),k=f.pageX-I.x,nt=f.pageY-I.y,lt=Math.sqrt(k*k+nt*nt);h.set(0,lt)}function Dt(f){n.enableZoom&&D(f),n.enablePan&&Nt(f)}function xt(f){n.enableZoom&&D(f),n.enableRotate&&bt(f)}function Qt(f){if(A.length==1)p.set(f.pageX,f.pageY);else{const k=Gt(f),nt=.5*(f.pageX+k.x),lt=.5*(f.pageY+k.y);p.set(nt,lt)}g.subVectors(p,m).multiplyScalar(n.rotateSpeed);const I=n.domElement;W(2*Math.PI*g.x/I.clientHeight),P(2*Math.PI*g.y/I.clientHeight),m.copy(p)}function Mt(f){if(A.length===1)E.set(f.pageX,f.pageY);else{const I=Gt(f),k=.5*(f.pageX+I.x),nt=.5*(f.pageY+I.y);E.set(k,nt)}d.subVectors(E,x).multiplyScalar(n.panSpeed),Z(d.x,d.y),x.copy(E)}function kt(f){const I=Gt(f),k=f.pageX-I.x,nt=f.pageY-I.y,lt=Math.sqrt(k*k+nt*nt);b.set(0,lt),M.set(0,Math.pow(b.y/h.y,n.zoomSpeed)),J(M.y),h.copy(b);const Bt=(f.pageX+I.x)*.5,It=(f.pageY+I.y)*.5;tt(Bt,It)}function T(f){n.enableZoom&&kt(f),n.enablePan&&Mt(f)}function _(f){n.enableZoom&&kt(f),n.enableRotate&&Qt(f)}function z(f){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(f.pointerId),n.domElement.addEventListener("pointermove",Y),n.domElement.addEventListener("pointerup",j)),!Vt(f)&&(Ft(f),f.pointerType==="touch"?Et(f):K(f)))}function Y(f){n.enabled!==!1&&(f.pointerType==="touch"?ut(f):gt(f))}function j(f){switch(Ot(f),A.length){case 0:n.domElement.releasePointerCapture(f.pointerId),n.domElement.removeEventListener("pointermove",Y),n.domElement.removeEventListener("pointerup",j),n.dispatchEvent(qa),s=r.NONE;break;case 1:const I=A[0],k=H[I];Et({pointerId:I,pageX:k.x,pageY:k.y});break}}function K(f){let I;switch(f.button){case 0:I=n.mouseButtons.LEFT;break;case 1:I=n.mouseButtons.MIDDLE;break;case 2:I=n.mouseButtons.RIGHT;break;default:I=-1}switch(I){case Un.DOLLY:if(n.enableZoom===!1)return;Ut(f),s=r.DOLLY;break;case Un.ROTATE:if(f.ctrlKey||f.metaKey||f.shiftKey){if(n.enablePan===!1)return;Wt(f),s=r.PAN}else{if(n.enableRotate===!1)return;dt(f),s=r.ROTATE}break;case Un.PAN:if(f.ctrlKey||f.metaKey||f.shiftKey){if(n.enableRotate===!1)return;dt(f),s=r.ROTATE}else{if(n.enablePan===!1)return;Wt(f),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Kr)}function gt(f){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;G(f);break;case r.DOLLY:if(n.enableZoom===!1)return;et(f);break;case r.PAN:if(n.enablePan===!1)return;ct(f);break}}function $(f){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(f.preventDefault(),n.dispatchEvent(Kr),at(mt(f)),n.dispatchEvent(qa))}function mt(f){const I=f.deltaMode,k={clientX:f.clientX,clientY:f.clientY,deltaY:f.deltaY};switch(I){case 1:k.deltaY*=16;break;case 2:k.deltaY*=100;break}return f.ctrlKey&&!y&&(k.deltaY*=10),k}function _t(f){f.key==="Control"&&(y=!0,n.domElement.getRootNode().addEventListener("keyup",it,{passive:!0,capture:!0}))}function it(f){f.key==="Control"&&(y=!1,n.domElement.getRootNode().removeEventListener("keyup",it,{passive:!0,capture:!0}))}function ot(f){n.enabled===!1||n.enablePan===!1||Tt(f)}function Et(f){switch(Ht(f),A.length){case 1:switch(n.touches.ONE){case In.ROTATE:if(n.enableRotate===!1)return;bt(f),s=r.TOUCH_ROTATE;break;case In.PAN:if(n.enablePan===!1)return;Nt(f),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case In.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Dt(f),s=r.TOUCH_DOLLY_PAN;break;case In.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xt(f),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Kr)}function ut(f){switch(Ht(f),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Qt(f),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Mt(f),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;T(f),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;_(f),n.update();break;default:s=r.NONE}}function ht(f){n.enabled!==!1&&f.preventDefault()}function Ft(f){A.push(f.pointerId)}function Ot(f){delete H[f.pointerId];for(let I=0;I<A.length;I++)if(A[I]==f.pointerId){A.splice(I,1);return}}function Vt(f){for(let I=0;I<A.length;I++)if(A[I]==f.pointerId)return!0;return!1}function Ht(f){let I=H[f.pointerId];I===void 0&&(I=new St,H[f.pointerId]=I),I.set(f.pageX,f.pageY)}function Gt(f){const I=f.pointerId===A[0]?A[1]:A[0];return H[I]}n.domElement.addEventListener("contextmenu",ht),n.domElement.addEventListener("pointerdown",z),n.domElement.addEventListener("pointercancel",j),n.domElement.addEventListener("wheel",$,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",_t,{passive:!0,capture:!0}),this.update()}}const Ro=document.querySelector("canvas.webgl"),Ln=new gp,Ie={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Ie.width=window.innerWidth,Ie.height=window.innerHeight,fn.aspect=Ie.width/Ie.height,fn.updateProjectionMatrix(),Ei.setSize(Ie.width,Ie.height),Ei.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Co=new Tp(10,10,255,8421504);Co.position.y=-.5;Ln.add(Co);const Rp=new Ap(1);Ln.add(Rp);Ln.add(new Ep(6710886));const Po=new Sp(16777215,10,0,0);Po.position.set(1,2,-3);Ln.add(Po);const fn=new Ee(75,Ie.width/Ie.height,.1,100);fn.position.x=1;fn.position.y=2;fn.position.z=3;Ln.add(fn);const Lo=new wp(fn,Ro);Lo.enableDamping=!0;const Cp=new ci(1,1,1),Pp=new vp({color:16753920,opacity:.5,side:Ne,transparent:!0}),Ji=new Be(Cp,Pp);Ln.add(Ji);const Ei=new mp({canvas:Ro,antialias:!0});Ei.setSize(Ie.width,Ie.height);Ei.setPixelRatio(Math.min(window.devicePixelRatio,2));const Lp=new yp,Do=()=>{Lp.getElapsedTime(),Ji.rotation.x+=.005,Ji.rotation.y+=.005,Ji.rotation.z+=.005,Lo.update(),Ei.render(Ln,fn),window.requestAnimationFrame(Do)};Do();
//# sourceMappingURL=index-D79F1gbz.js.map
