(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7658],{80121:function(r,n,t){"use strict";var e=t(93539);n.Z=function(r){var n=(0,e.useRef)(r);n.current=r;var t=(0,e.useRef)();return t.current||(t.current=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return n.current.apply(this,r)}),t.current}},66897:function(r,n,t){"use strict";var e=t(93539),a=function(r,n){var t="function"===typeof Symbol&&r[Symbol.iterator];if(!t)return r;var e,a,o=t.call(r),l=[];try{for(;(void 0===n||n-- >0)&&!(e=o.next()).done;)l.push(e.value)}catch(i){a={error:i}}finally{try{e&&!e.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return l};n.Z=function(){var r=a((0,e.useState)({}),2)[1];return(0,e.useCallback)((function(){return r({})}),[])}},39875:function(r,n,t){for(var e=t(27424).default,a=t(85350),o={},l=0,i=Object.keys(a);l<i.length;l++){var h=i[l];o[a[h]]=h}var s={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};r.exports=s;for(var u=0,c=Object.keys(s);u<c.length;u++){var f=c[u];if(!("channels"in s[f]))throw new Error("missing channels property: "+f);if(!("labels"in s[f]))throw new Error("missing channel labels property: "+f);if(s[f].labels.length!==s[f].channels)throw new Error("channel and label counts mismatch: "+f);var g=s[f],v=g.channels,b=g.labels;delete s[f].channels,delete s[f].labels,Object.defineProperty(s[f],"channels",{value:v}),Object.defineProperty(s[f],"labels",{value:b})}s.rgb.hsl=function(r){var n,t=r[0]/255,e=r[1]/255,a=r[2]/255,o=Math.min(t,e,a),l=Math.max(t,e,a),i=l-o;l===o?n=0:t===l?n=(e-a)/i:e===l?n=2+(a-t)/i:a===l&&(n=4+(t-e)/i),(n=Math.min(60*n,360))<0&&(n+=360);var h=(o+l)/2;return[n,100*(l===o?0:h<=.5?i/(l+o):i/(2-l-o)),100*h]},s.rgb.hsv=function(r){var n,t,e,a,o,l=r[0]/255,i=r[1]/255,h=r[2]/255,s=Math.max(l,i,h),u=s-Math.min(l,i,h),c=function(r){return(s-r)/6/u+.5};return 0===u?(a=0,o=0):(o=u/s,n=c(l),t=c(i),e=c(h),l===s?a=e-t:i===s?a=1/3+n-e:h===s&&(a=2/3+t-n),a<0?a+=1:a>1&&(a-=1)),[360*a,100*o,100*s]},s.rgb.hwb=function(r){var n=r[0],t=r[1],e=r[2];return[s.rgb.hsl(r)[0],100*(1/255*Math.min(n,Math.min(t,e))),100*(e=1-1/255*Math.max(n,Math.max(t,e)))]},s.rgb.cmyk=function(r){var n=r[0]/255,t=r[1]/255,e=r[2]/255,a=Math.min(1-n,1-t,1-e);return[100*((1-n-a)/(1-a)||0),100*((1-t-a)/(1-a)||0),100*((1-e-a)/(1-a)||0),100*a]},s.rgb.keyword=function(r){var n=o[r];if(n)return n;for(var t,e,l,i=1/0,h=0,s=Object.keys(a);h<s.length;h++){var u=s[h],c=a[u],f=(e=r,l=c,Math.pow(e[0]-l[0],2)+Math.pow(e[1]-l[1],2)+Math.pow(e[2]-l[2],2));f<i&&(i=f,t=u)}return t},s.keyword.rgb=function(r){return a[r]},s.rgb.xyz=function(r){var n=r[0]/255,t=r[1]/255,e=r[2]/255;return[100*(.4124*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.3576*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.1805*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)),100*(.2126*n+.7152*t+.0722*e),100*(.0193*n+.1192*t+.9505*e)]},s.rgb.lab=function(r){var n=s.rgb.xyz(r),t=n[0],e=n[1],a=n[2];return e/=100,a/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116)-16,500*(t-e),200*(e-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]},s.hsl.rgb=function(r){var n,t,e,a=r[0]/360,o=r[1]/100,l=r[2]/100;if(0===o)return[e=255*l,e,e];for(var i=2*l-(n=l<.5?l*(1+o):l+o-l*o),h=[0,0,0],s=0;s<3;s++)(t=a+1/3*-(s-1))<0&&t++,t>1&&t--,e=6*t<1?i+6*(n-i)*t:2*t<1?n:3*t<2?i+(n-i)*(2/3-t)*6:i,h[s]=255*e;return h},s.hsl.hsv=function(r){var n=r[0],t=r[1]/100,e=r[2]/100,a=t,o=Math.max(e,.01);return t*=(e*=2)<=1?e:2-e,a*=o<=1?o:2-o,[n,100*(0===e?2*a/(o+a):2*t/(e+t)),100*((e+t)/2)]},s.hsv.rgb=function(r){var n=r[0]/60,t=r[1]/100,e=r[2]/100,a=Math.floor(n)%6,o=n-Math.floor(n),l=255*e*(1-t),i=255*e*(1-t*o),h=255*e*(1-t*(1-o));switch(e*=255,a){case 0:return[e,h,l];case 1:return[i,e,l];case 2:return[l,e,h];case 3:return[l,i,e];case 4:return[h,l,e];case 5:return[e,l,i]}},s.hsv.hsl=function(r){var n,t,e=r[0],a=r[1]/100,o=r[2]/100,l=Math.max(o,.01);t=(2-a)*o;var i=(2-a)*l;return n=a*l,[e,100*(n=(n/=i<=1?i:2-i)||0),100*(t/=2)]},s.hwb.rgb=function(r){var n,t=r[0]/360,e=r[1]/100,a=r[2]/100,o=e+a;o>1&&(e/=o,a/=o);var l=Math.floor(6*t),i=1-a;n=6*t-l,0!==(1&l)&&(n=1-n);var h,s,u,c=e+n*(i-e);switch(l){default:case 6:case 0:h=i,s=c,u=e;break;case 1:h=c,s=i,u=e;break;case 2:h=e,s=i,u=c;break;case 3:h=e,s=c,u=i;break;case 4:h=c,s=e,u=i;break;case 5:h=i,s=e,u=c}return[255*h,255*s,255*u]},s.cmyk.rgb=function(r){var n=r[0]/100,t=r[1]/100,e=r[2]/100,a=r[3]/100;return[255*(1-Math.min(1,n*(1-a)+a)),255*(1-Math.min(1,t*(1-a)+a)),255*(1-Math.min(1,e*(1-a)+a))]},s.xyz.rgb=function(r){var n,t,e,a=r[0]/100,o=r[1]/100,l=r[2]/100;return t=-.9689*a+1.8758*o+.0415*l,e=.0557*a+-.204*o+1.057*l,n=(n=3.2406*a+-1.5372*o+-.4986*l)>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,t=t>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,[255*(n=Math.min(Math.max(0,n),1)),255*(t=Math.min(Math.max(0,t),1)),255*(e=Math.min(Math.max(0,e),1))]},s.xyz.lab=function(r){var n=r[0],t=r[1],e=r[2];return t/=100,e/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(t=t>.008856?Math.pow(t,1/3):7.787*t+16/116)-16,500*(n-t),200*(t-(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116))]},s.lab.xyz=function(r){var n,t,e,a=r[0];n=r[1]/500+(t=(a+16)/116),e=t-r[2]/200;var o=Math.pow(t,3),l=Math.pow(n,3),i=Math.pow(e,3);return t=o>.008856?o:(t-16/116)/7.787,n=l>.008856?l:(n-16/116)/7.787,e=i>.008856?i:(e-16/116)/7.787,[n*=95.047,t*=100,e*=108.883]},s.lab.lch=function(r){var n,t=r[0],e=r[1],a=r[2];return(n=360*Math.atan2(a,e)/2/Math.PI)<0&&(n+=360),[t,Math.sqrt(e*e+a*a),n]},s.lch.lab=function(r){var n=r[0],t=r[1],e=r[2]/360*2*Math.PI;return[n,t*Math.cos(e),t*Math.sin(e)]},s.rgb.ansi16=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,t=e(r,3),a=t[0],o=t[1],l=t[2],i=null===n?s.rgb.hsv(r)[2]:n;if(0===(i=Math.round(i/50)))return 30;var h=30+(Math.round(l/255)<<2|Math.round(o/255)<<1|Math.round(a/255));return 2===i&&(h+=60),h},s.hsv.ansi16=function(r){return s.rgb.ansi16(s.hsv.rgb(r),r[2])},s.rgb.ansi256=function(r){var n=r[0],t=r[1],e=r[2];return n===t&&t===e?n<8?16:n>248?231:Math.round((n-8)/247*24)+232:16+36*Math.round(n/255*5)+6*Math.round(t/255*5)+Math.round(e/255*5)},s.ansi16.rgb=function(r){var n=r%10;if(0===n||7===n)return r>50&&(n+=3.5),[n=n/10.5*255,n,n];var t=.5*(1+~~(r>50));return[(1&n)*t*255,(n>>1&1)*t*255,(n>>2&1)*t*255]},s.ansi256.rgb=function(r){if(r>=232){var n=10*(r-232)+8;return[n,n,n]}var t;return r-=16,[Math.floor(r/36)/5*255,Math.floor((t=r%36)/6)/5*255,t%6/5*255]},s.rgb.hex=function(r){var n=(((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2]))).toString(16).toUpperCase();return"000000".substring(n.length)+n},s.hex.rgb=function(r){var n=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!n)return[0,0,0];var t=n[0];3===n[0].length&&(t=t.split("").map((function(r){return r+r})).join(""));var e=parseInt(t,16);return[e>>16&255,e>>8&255,255&e]},s.rgb.hcg=function(r){var n,t=r[0]/255,e=r[1]/255,a=r[2]/255,o=Math.max(Math.max(t,e),a),l=Math.min(Math.min(t,e),a),i=o-l;return n=i<=0?0:o===t?(e-a)/i%6:o===e?2+(a-t)/i:4+(t-e)/i,n/=6,[360*(n%=1),100*i,100*(i<1?l/(1-i):0)]},s.hsl.hcg=function(r){var n=r[1]/100,t=r[2]/100,e=t<.5?2*n*t:2*n*(1-t),a=0;return e<1&&(a=(t-.5*e)/(1-e)),[r[0],100*e,100*a]},s.hsv.hcg=function(r){var n=r[1]/100,t=r[2]/100,e=n*t,a=0;return e<1&&(a=(t-e)/(1-e)),[r[0],100*e,100*a]},s.hcg.rgb=function(r){var n=r[0]/360,t=r[1]/100,e=r[2]/100;if(0===t)return[255*e,255*e,255*e];var a,o=[0,0,0],l=n%1*6,i=l%1,h=1-i;switch(Math.floor(l)){case 0:o[0]=1,o[1]=i,o[2]=0;break;case 1:o[0]=h,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=i;break;case 3:o[0]=0,o[1]=h,o[2]=1;break;case 4:o[0]=i,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=h}return a=(1-t)*e,[255*(t*o[0]+a),255*(t*o[1]+a),255*(t*o[2]+a)]},s.hcg.hsv=function(r){var n=r[1]/100,t=n+r[2]/100*(1-n),e=0;return t>0&&(e=n/t),[r[0],100*e,100*t]},s.hcg.hsl=function(r){var n=r[1]/100,t=r[2]/100*(1-n)+.5*n,e=0;return t>0&&t<.5?e=n/(2*t):t>=.5&&t<1&&(e=n/(2*(1-t))),[r[0],100*e,100*t]},s.hcg.hwb=function(r){var n=r[1]/100,t=n+r[2]/100*(1-n);return[r[0],100*(t-n),100*(1-t)]},s.hwb.hcg=function(r){var n=r[1]/100,t=1-r[2]/100,e=t-n,a=0;return e<1&&(a=(t-e)/(1-e)),[r[0],100*e,100*a]},s.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},s.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},s.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},s.gray.hsl=function(r){return[0,0,r[0]]},s.gray.hsv=s.gray.hsl,s.gray.hwb=function(r){return[0,100,r[0]]},s.gray.cmyk=function(r){return[0,0,0,r[0]]},s.gray.lab=function(r){return[r[0],0,0]},s.gray.hex=function(r){var n=255&Math.round(r[0]/100*255),t=((n<<16)+(n<<8)+n).toString(16).toUpperCase();return"000000".substring(t.length)+t},s.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]}},51463:function(r,n,t){var e=t(39875),a=t(13391),o={};Object.keys(e).forEach((function(r){o[r]={},Object.defineProperty(o[r],"channels",{value:e[r].channels}),Object.defineProperty(o[r],"labels",{value:e[r].labels});var n=a(r);Object.keys(n).forEach((function(t){var e=n[t];o[r][t]=function(r){var n=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];var a=t[0];if(void 0===a||null===a)return a;a.length>1&&(t=a);var o=r(t);if("object"===typeof o)for(var l=o.length,i=0;i<l;i++)o[i]=Math.round(o[i]);return o};return"conversion"in r&&(n.conversion=r.conversion),n}(e),o[r][t].raw=function(r){var n=function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];var a=t[0];return void 0===a||null===a?a:(a.length>1&&(t=a),r(t))};return"conversion"in r&&(n.conversion=r.conversion),n}(e)}))})),r.exports=o},13391:function(r,n,t){var e=t(39875);function a(r){var n=function(){for(var r={},n=Object.keys(e),t=n.length,a=0;a<t;a++)r[n[a]]={distance:-1,parent:null};return r}(),t=[r];for(n[r].distance=0;t.length;)for(var a=t.pop(),o=Object.keys(e[a]),l=o.length,i=0;i<l;i++){var h=o[i],s=n[h];-1===s.distance&&(s.distance=n[a].distance+1,s.parent=a,t.unshift(h))}return n}function o(r,n){return function(t){return n(r(t))}}function l(r,n){for(var t=[n[r].parent,r],a=e[n[r].parent][r],l=n[r].parent;n[l].parent;)t.unshift(n[l].parent),a=o(e[n[l].parent][l],a),l=n[l].parent;return a.conversion=t,a}r.exports=function(r){for(var n=a(r),t={},e=Object.keys(n),o=e.length,i=0;i<o;i++){var h=e[i];null!==n[h].parent&&(t[h]=l(h,n))}return t}},85350:function(r){"use strict";r.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},44237:function(r,n,t){var e=t(85350),a=t(77985),o=Object.hasOwnProperty,l=Object.create(null);for(var i in e)o.call(e,i)&&(l[e[i]]=i);var h=r.exports={to:{},get:{}};function s(r,n,t){return Math.min(Math.max(n,r),t)}function u(r){var n=Math.round(r).toString(16).toUpperCase();return n.length<2?"0"+n:n}h.get=function(r){var n,t;switch(r.substring(0,3).toLowerCase()){case"hsl":n=h.get.hsl(r),t="hsl";break;case"hwb":n=h.get.hwb(r),t="hwb";break;default:n=h.get.rgb(r),t="rgb"}return n?{model:t,value:n}:null},h.get.rgb=function(r){if(!r)return null;var n,t,a,l=[0,0,0,1];if(n=r.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=n[2],n=n[1],t=0;t<3;t++){var i=2*t;l[t]=parseInt(n.slice(i,i+2),16)}a&&(l[3]=parseInt(a,16)/255)}else if(n=r.match(/^#([a-f0-9]{3,4})$/i)){for(a=(n=n[1])[3],t=0;t<3;t++)l[t]=parseInt(n[t]+n[t],16);a&&(l[3]=parseInt(a+a,16)/255)}else if(n=r.match(/^rgba?\(\s*([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)(?=[\s,])\s*(?:,\s*)?([+-]?\d+)\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)){for(t=0;t<3;t++)l[t]=parseInt(n[t+1],0);n[4]&&(n[5]?l[3]=.01*parseFloat(n[4]):l[3]=parseFloat(n[4]))}else{if(!(n=r.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*,?\s*([+-]?[\d\.]+)\%\s*(?:[,|\/]\s*([+-]?[\d\.]+)(%?)\s*)?\)$/)))return(n=r.match(/^(\w+)$/))?"transparent"===n[1]?[0,0,0,0]:o.call(e,n[1])?((l=e[n[1]])[3]=1,l):null:null;for(t=0;t<3;t++)l[t]=Math.round(2.55*parseFloat(n[t+1]));n[4]&&(n[5]?l[3]=.01*parseFloat(n[4]):l[3]=parseFloat(n[4]))}for(t=0;t<3;t++)l[t]=s(l[t],0,255);return l[3]=s(l[3],0,1),l},h.get.hsl=function(r){if(!r)return null;var n=r.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,?\s*([+-]?[\d\.]+)%\s*,?\s*([+-]?[\d\.]+)%\s*(?:[,|\/]\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(n){var t=parseFloat(n[4]);return[(parseFloat(n[1])%360+360)%360,s(parseFloat(n[2]),0,100),s(parseFloat(n[3]),0,100),s(isNaN(t)?1:t,0,1)]}return null},h.get.hwb=function(r){if(!r)return null;var n=r.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?(?=\.\d|\d)(?:0|[1-9]\d*)?(?:\.\d*)?(?:[eE][+-]?\d+)?)\s*)?\)$/);if(n){var t=parseFloat(n[4]);return[(parseFloat(n[1])%360+360)%360,s(parseFloat(n[2]),0,100),s(parseFloat(n[3]),0,100),s(isNaN(t)?1:t,0,1)]}return null},h.to.hex=function(){var r=a(arguments);return"#"+u(r[0])+u(r[1])+u(r[2])+(r[3]<1?u(Math.round(255*r[3])):"")},h.to.rgb=function(){var r=a(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},h.to.rgb.percent=function(){var r=a(arguments),n=Math.round(r[0]/255*100),t=Math.round(r[1]/255*100),e=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+n+"%, "+t+"%, "+e+"%)":"rgba("+n+"%, "+t+"%, "+e+"%, "+r[3]+")"},h.to.hsl=function(){var r=a(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},h.to.hwb=function(){var r=a(arguments),n="";return r.length>=4&&1!==r[3]&&(n=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+n+")"},h.to.keyword=function(r){return l[r.slice(0,3)]}},65965:function(r,n,t){for(var e=t(27424).default,a=t(74704).default,o=t(861).default,l=t(44237),i=t(51463),h=["keyword","gray","hex"],s={},u=0,c=Object.keys(i);u<c.length;u++){var f=c[u];s[o(i[f].labels).sort().join("")]=f}var g={};function v(r,n){if(!(this instanceof v))return new v(r,n);if(n&&n in h&&(n=null),n&&!(n in i))throw new Error("Unknown model: "+n);var t,e;if(null==r)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof v)this.model=r.model,this.color=o(r.color),this.valpha=r.valpha;else if("string"===typeof r){var a=l.get(r);if(null===a)throw new Error("Unable to parse color from string: "+r);this.model=a.model,e=i[this.model].channels,this.color=a.value.slice(0,e),this.valpha="number"===typeof a.value[e]?a.value[e]:1}else if(r.length>0){this.model=n||"rgb",e=i[this.model].channels;var u=Array.prototype.slice.call(r,0,e);this.color=M(u,e),this.valpha="number"===typeof r[e]?r[e]:1}else if("number"===typeof r)this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var c=Object.keys(r);"alpha"in r&&(c.splice(c.indexOf("alpha"),1),this.valpha="number"===typeof r.alpha?r.alpha:0);var f=c.sort().join("");if(!(f in s))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=s[f];var b=i[this.model].labels,d=[];for(t=0;t<b.length;t++)d.push(r[b[t]]);this.color=M(d)}if(g[this.model])for(e=i[this.model].channels,t=0;t<e;t++){var p=g[this.model][t];p&&(this.color[t]=p(this.color[t]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}v.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var n=this.model in l.to?this:this.rgb(),t=1===(n=n.round("number"===typeof r?r:1)).valpha?n.color:[].concat(o(n.color),[this.valpha]);return l.to[n.model](t)},percentString:function(r){var n=this.rgb().round("number"===typeof r?r:1),t=1===n.valpha?n.color:[].concat(o(n.color),[this.valpha]);return l.to.rgb.percent(t)},array:function(){return 1===this.valpha?o(this.color):[].concat(o(this.color),[this.valpha])},object:function(){for(var r={},n=i[this.model].channels,t=i[this.model].labels,e=0;e<n;e++)r[t[e]]=this.color[e];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new v([].concat(o(this.color.map(function(r){return function(n){return function(r,n){return Number(r.toFixed(n))}(n,r)}}(r))),[this.valpha]),this.model)},alpha:function(r){return void 0!==r?new v([].concat(o(this.color),[Math.max(0,Math.min(1,r))]),this.model):this.valpha},red:m("rgb",0,y(255)),green:m("rgb",1,y(255)),blue:m("rgb",2,y(255)),hue:m(["hsl","hsv","hsl","hwb","hcg"],0,(function(r){return(r%360+360)%360})),saturationl:m("hsl",1,y(100)),lightness:m("hsl",2,y(100)),saturationv:m("hsv",1,y(100)),value:m("hsv",2,y(100)),chroma:m("hcg",1,y(100)),gray:m("hcg",2,y(100)),white:m("hwb",1,y(100)),wblack:m("hwb",2,y(100)),cyan:m("cmyk",0,y(100)),magenta:m("cmyk",1,y(100)),yellow:m("cmyk",2,y(100)),black:m("cmyk",3,y(100)),x:m("xyz",0,y(95.047)),y:m("xyz",1,y(100)),z:m("xyz",2,y(108.833)),l:m("lab",0,y(100)),a:m("lab",1),b:m("lab",2),keyword:function(r){return void 0!==r?new v(r):i[this.model].keyword(this.color)},hex:function(r){return void 0!==r?new v(r):l.to.hex(this.rgb().round().color)},hexa:function(r){if(void 0!==r)return new v(r);var n=this.rgb().round().color,t=Math.round(255*this.valpha).toString(16).toUpperCase();return 1===t.length&&(t="0"+t),l.to.hex(n)+t},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){var r,n=this.rgb().color,t=[],o=a(n.entries());try{for(o.s();!(r=o.n()).done;){var l=e(r.value,2),i=l[0],h=l[1]/255;t[i]=h<=.04045?h/12.92:Math.pow((h+.055)/1.055,2.4)}}catch(s){o.e(s)}finally{o.f()}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(r){var n=this.luminosity(),t=r.luminosity();return n>t?(n+.05)/(t+.05):(t+.05)/(n+.05)},level:function(r){var n=this.contrast(r);return n>=7?"AAA":n>=4.5?"AA":""},isDark:function(){var r=this.rgb().color;return(2126*r[0]+7152*r[1]+722*r[2])/1e4<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),n=0;n<3;n++)r.color[n]=255-r.color[n];return r},lighten:function(r){var n=this.hsl();return n.color[2]+=n.color[2]*r,n},darken:function(r){var n=this.hsl();return n.color[2]-=n.color[2]*r,n},saturate:function(r){var n=this.hsl();return n.color[1]+=n.color[1]*r,n},desaturate:function(r){var n=this.hsl();return n.color[1]-=n.color[1]*r,n},whiten:function(r){var n=this.hwb();return n.color[1]+=n.color[1]*r,n},blacken:function(r){var n=this.hwb();return n.color[2]+=n.color[2]*r,n},grayscale:function(){var r=this.rgb().color,n=.3*r[0]+.59*r[1]+.11*r[2];return v.rgb(n,n,n)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var n=this.hsl(),t=n.color[0];return t=(t=(t+r)%360)<0?360+t:t,n.color[0]=t,n},mix:function(r,n){if(!r||!r.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);var t=r.rgb(),e=this.rgb(),a=void 0===n?.5:n,o=2*a-1,l=t.alpha()-e.alpha(),i=((o*l===-1?o:(o+l)/(1+o*l))+1)/2,h=1-i;return v.rgb(i*t.red()+h*e.red(),i*t.green()+h*e.green(),i*t.blue()+h*e.blue(),t.alpha()*a+e.alpha()*(1-a))}};for(var b=function(){var r=p[d];if(h.includes(r))return"continue";var n=i[r].channels;v.prototype[r]=function(){if(this.model===r)return new v(this);for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];return t.length>0?new v(t,r):new v([].concat(o(w(i[this.model][r].raw(this.color))),[this.valpha]),r)},v[r]=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];var o=e[0];return"number"===typeof o&&(o=M(e,n)),new v(o,r)}},d=0,p=Object.keys(i);d<p.length;d++)b();function m(r,n,t){r=Array.isArray(r)?r:[r];var e,o=a(r);try{for(o.s();!(e=o.n()).done;){var l=e.value;(g[l]||(g[l]=[]))[n]=t}}catch(i){o.e(i)}finally{o.f()}return r=r[0],function(e){var a;return void 0!==e?(t&&(e=t(e)),(a=this[r]()).color[n]=e,a):(a=this[r]().color[n],t&&(a=t(a)),a)}}function y(r){return function(n){return Math.max(0,Math.min(r,n))}}function w(r){return Array.isArray(r)?r:[r]}function M(r,n){for(var t=0;t<n;t++)"number"!==typeof r[t]&&(r[t]=0);return r}r.exports=v},53996:function(r){r.exports=function(r){return!(!r||"string"===typeof r)&&(r instanceof Array||Array.isArray(r)||r.length>=0&&(r.splice instanceof Function||Object.getOwnPropertyDescriptor(r,r.length-1)&&"String"!==r.constructor.name))}},77985:function(r,n,t){"use strict";var e=t(53996),a=Array.prototype.concat,o=Array.prototype.slice,l=r.exports=function(r){for(var n=[],t=0,l=r.length;t<l;t++){var i=r[t];e(i)?n=a.call(n,o.call(i)):n.push(i)}return n};l.wrap=function(r){return function(){return r(l(arguments))}}}}]);
//# sourceMappingURL=7658.d878c147.chunk.js.map