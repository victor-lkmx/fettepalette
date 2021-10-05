export const hsv2hsl=(e,a,r,t=r-r*a/2,p=Math.min(t,1-t))=>[e,p?(r-t)/p:0,t],hsv2hsx=(e,a,r,t)=>t==="hsl"?hsv2hsl(e,a,r):[e,a,r],pointOnCurve=(e,a,r,t,p=[0,0],m=[1,1])=>{const x=Math.PI/2,u=x/r,n=a/r;let s=0,o=0;if(e==="lam\xE9"){const l=n*x,i=2/(2+20*t),h=Math.cos(l),f=Math.sin(l);s=Math.sign(h)*Math.abs(h)**i,o=Math.sign(f)*Math.abs(f)**i}else if(e==="arc")o=Math.cos(-Math.PI/2+a*u+t),s=Math.sin(Math.PI/2+a*u-t);else if(e==="pow")s=Math.pow(1-n,1-t),o=Math.pow(n,1-t);else if(e==="powY")s=Math.pow(1-n,t),o=Math.pow(n,1-t);else if(e==="powX")s=Math.pow(n,t),o=Math.pow(n,1-t);else if(typeof e=="function")s=e(n)[0],o=e(n)[1];else throw new Error(`pointOnCurve() curveAccent parameter is expected to be "lam\xE9" | "arc" | "pow" | "powY" | "powX" or a function but \`${e}\` given.`);return s=p[0]+Math.min(Math.max(s,0),1)*(m[0]-p[0]),o=p[1]+Math.min(Math.max(o,0),1)*(m[1]-p[1]),[s,o]};export function generateRandomColorRamp({total:e=3,centerHue:a=0,hueCycle:r=.3,offsetTint:t=.1,offsetShade:p=.1,curveAccent:m=0,tintShadeHueShift:x=.1,curveMethod:u="arc",offsetCurveModTint:n=.03,offsetCurveModShade:s=.03,minSaturationLight:o=[0,0],maxSaturationLight:l=[1,1],colorModel:i="hsl"}={}){const h=[],f=[],c=[];for(let b=1;b<e+1;b++){const[C,V]=pointOnCurve(u,b,e+1,m,o,l),d=(360+(-180*r+(a+b*(360/(e+1))*r)))%360,g=hsv2hsx(d,C,V,i);h.push(g);const[y,R]=pointOnCurve(u,b,e+1,m+n,o,l),M=hsv2hsx(d,y,R,i);f.push([(d+360*x)%360,M[1]-t,M[2]+t]);const[S,T]=pointOnCurve(u,b,e+1,m-s,o,l),w=hsv2hsx(d,S,T,i);c.push([(360+(d-360*x))%360,w[1]-p,w[2]-p])}return{light:f,dark:c,base:h,all:[...f,...h,...c]}}export const generateRandomColorRampParams={curveMethod:{default:"lam\xE9",props:{options:["lam\xE9","arc","pow","powY","powX"]}},curveAccent:{default:0,props:{min:-.095,max:1,step:.001}},total:{default:9,props:{min:3,max:35,step:1}},centerHue:{default:0,props:{min:0,max:360,step:.1}},hueCycle:{default:.3,props:{min:-1.25,max:1.5,step:.001}},offsetTint:{default:.01,props:{min:0,max:.4,step:.001}},offsetShade:{default:.01,props:{min:0,max:.4,step:.001}},tintShadeHueShift:{default:.01,props:{min:0,max:1,step:.001}},offsetCurveModTint:{default:.03,props:{min:0,max:.4,step:1e-4}},offsetCurveModShade:{default:.03,props:{min:0,max:.4,step:1e-4}},minSaturation:{default:0,props:{min:0,max:1,step:.001}},minLight:{default:0,props:{min:0,max:1,step:.001}},maxSaturation:{default:1,props:{min:0,max:1,step:.001}},maxLight:{default:1,props:{min:0,max:1,step:.001}}};
