(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5138],{85480:function(e,n,t){"use strict";var r,o,i=t(1413),a=t(45987),u=t(30168),l=t(31121),c=t(53929),d=t(78069),s=t(17285),f=t(61366),g=t(93539),h=t(71027),p=["inline","node"],v=["data-meta"],m=c.ZP.div(r||(r=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n"]))),A=(0,c.ZP)(l.Z)(o||(o=(0,u.Z)(["\n  padding: 50px 50px 120px 50px;\n  max-width: 1024px;\n"]))),b=function(e,n,t){if(Reflect.has(e,n)){var r=Reflect.get(e,n);if("true"===r)return!0;if("false"===r)return!1}return t};n.Z=function(e){var n=(0,g.useRef)(null);return(0,h.jsxs)(m,{ref:n,children:[(0,h.jsx)(A,(0,i.Z)((0,i.Z)({},e),{},{disableCopy:!0,source:e.source,rehypeRewrite:function(e,n,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(n){var t,r=n.inline,o=n.node,u=(0,a.Z)(n,p),l=u["data-meta"],c=(0,a.Z)(u,v);if(r||!(0,s.pN)(l))return(0,h.jsx)("code",(0,i.Z)({},u));var d=null===(t=o.position)||void 0===t?void 0:t.start.line,g=(0,s.Mx)(l)||String(d),m=e.components["".concat(g)];if(g&&"function"===typeof m){var A=e.data[g].value||"",y=(0,s.aE)(l);return(0,h.jsx)(f.Z,{disableCheckered:b(y,"disableCheckered",!0),disableToolbar:b(y,"disableToolbar",!1),disableCode:b(y,"disableCode",!1),disablePreview:b(y,"disablePreview",!1),bordered:b(y,"bordered",!0),copied:b(y,"copied",!0),background:y.background,toolbar:y.title||"\u793a\u4f8b",code:(0,h.jsx)("code",(0,i.Z)({},c)),text:A,children:(0,h.jsx)(m,{})})}return(0,h.jsx)("code",(0,i.Z)({},c))}}})),(0,h.jsx)(d.kF,{speed:500,children:function(e){var n=e.percent,t=e.scrollToTop;return(0,h.jsx)(d.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,h.jsx)(d.JO,{type:"arrow-up"})},percent:n})}})]})}},18797:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var r=t(1413),o=t(85480),i={components:{14:function(){var e=r(t(93539)),n=r(t(75959));function r(e){return e&&e.__esModule?e:{default:e}}return function(){var t=[{url:"https://avatars.githubusercontent.com/u/33082374?s=200&v=4",onClick:function(){console.log("\u4f60\u597d\uff01uiw/react-native")}},{url:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=="}];return e.default.createElement(n.default,{width:200,dataSource:t,height:150,borderRadius:24})}}()},data:{14:{name:14,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Swiper = _interopRequireDefault(require("@uiw/react-native/lib/Swiper"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nvar SwiperDemo = function SwiperDemo() {\n  var data = [{\n    url: "https://avatars.githubusercontent.com/u/33082374?s=200&v=4",\n    onClick: function onClick() {\n      console.log("\u4f60\u597d\uff01uiw/react-native");\n    }\n  }, {\n    url: \'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==\'\n  }\n  // { url: require(\'@expo/snack-static/react-native-logo.png\') }\n  ];\n\n  return /*#__PURE__*/_react["default"].createElement(_Swiper["default"], {\n    width: 200,\n    dataSource: data,\n    height: 150,\n    borderRadius: 24\n  });\n};\nreturn SwiperDemo;',language:"jsx",value:"import React from 'react';\nimport { Swiper } from '@uiw/react-native';\n\nconst SwiperDemo = () => {\n    const data = [\n        { url: \"https://avatars.githubusercontent.com/u/33082374?s=200&v=4\", onClick: () => { console.log(\"\u4f60\u597d\uff01uiw/react-native\") } },\n        { url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' },\n        // { url: require('@expo/snack-static/react-native-logo.png') }\n    ]\n    return (\n        <Swiper width={200} dataSource={data} height={150} borderRadius={24} />\n    )\n}\nexport default SwiperDemo"}},source:"Swiper \u8f6e\u64ad\u56fe\n---\n\n\u6700\u57fa\u7840\u7684\u8f6e\u64ad\u56fe\uff0c\u53ef\u627f\u8f7d\u56fe\u7247\u3002\n\n> \ud83d\udea7 \u6ce8\u610f\uff1a\u6d4b\u8bd5\u7248\u672c\u8c28\u614e\u4f7f\u7528\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n![](https://user-images.githubusercontent.com/57083007/146733725-30e20a33-796a-49ec-9a95-4448a629c7b7.gif)\n\n### \u57fa\u7840\u793a\u4f8b\n\n\x3c!--DemoStart--\x3e\n```jsx  mdx:preview\nimport React from 'react';\nimport { Swiper } from '@uiw/react-native';\n\nconst SwiperDemo = () => {\n    const data = [\n        { url: \"https://avatars.githubusercontent.com/u/33082374?s=200&v=4\", onClick: () => { console.log(\"\u4f60\u597d\uff01uiw/react-native\") } },\n        { url: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' },\n        // { url: require('@expo/snack-static/react-native-logo.png') }\n    ]\n    return (\n        <Swiper width={200} dataSource={data} height={150} borderRadius={24} />\n    )\n}\nexport default SwiperDemo\n```\n\x3c!--End--\x3e\n\n### Props\n\n\u5c5e\u6027 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c\n----|-----|------|------\n| dataSource   | \u6570\u636e\u6e90         | Array     | [ ] |\n| width        | \u5bbd\u5ea6           |  Number   |\u5c4f\u5e55\u5bbd\u5ea6|\n| height       | \u9ad8\u5ea6           | Number    |  130 |\n| time         | \u6267\u884c\u65f6\u95f4       | Number    | 3000\uff083s\uff09 |\n| borderRadius | \u5706\u89d2\u8fb9\u6846       | Number    |  0 |\n| autoplay     | \u662f\u5426\u5f00\u542f\u5b9a\u65f6\u5668  | Boolean   | true|\n| dotStyle     | \u5706\u70b9\u7c7b\u578b ( dot : \u5706\u70b9\uff0c block : \u65b9\u5757 )       | String    | dot |\n| loading      | \u52a0\u8f7d\u72b6\u6001  | Boolean   | false |\n"},a=t(71027),u=function(){return(0,a.jsx)(o.Z,(0,r.Z)({},i))}},27789:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var r=t(1413),o=t(45987),i=t(15671),a=t(43144),u=t(60136),l=t(27277),c=t(93539),d=t(37068),s=t(88514),f=t(12720),g=t(62453),h=t(71027),p=["children","color","maskColor","rounded","loading","tip","size","vertical"],v=d.Z.create({defalut:{position:"absolute",height:"100%",width:"100%",zIndex:99,flexDirection:"row",alignItems:"center",justifyContent:"center"},indicator:{marginRight:5},stopActivity:{display:"none"}}),m=function(e){(0,u.Z)(t,e);var n=(0,l.Z)(t);function t(){return(0,i.Z)(this,t),n.apply(this,arguments)}return(0,a.Z)(t,[{key:"render",value:function(){var e=this.props,n=e.children,t=e.color,i=e.maskColor,a=e.rounded,u=e.loading,l=e.tip,c=e.size,d=e.vertical,m=(0,o.Z)(e,p),A={};if(i&&(A.backgroundColor=i),a&&(A.borderRadius=a),d&&(A.flexDirection="column"),!n&&!l)return(0,h.jsx)(s.Z,{animating:u,size:c,color:t});var b=l||u?(0,h.jsxs)(f.Z,{style:[v[u?"defalut":"stopActivity"],A],children:[(0,h.jsx)(s.Z,{animating:u,size:c,color:t}),l&&("string"===typeof l?(0,h.jsx)(g.Z,{style:{color:t},children:l}):(0,h.jsx)(f.Z,{children:l}))]}):null;return!n&&l?b:(0,h.jsxs)(f.Z,(0,r.Z)((0,r.Z)({},m),{},{children:[b,n]}))}}]),t}(c.Component);m.defaultProps={maskColor:"rgba(255, 255, 255, 0.85)",loading:!0,color:"gray",size:"small"}},75959:function(e,n,t){"use strict";t.r(n);var r=t(29439),o=t(93539),i=t(68950),a=t(12720),u=t(37068),l=t(49568),c=t(2894),d=t(31018),s=t(27789),f=t(50346),g=t(71027),h=u.Z.create({banner:{width:"100%",position:"relative",overflow:"hidden"},dotBox:{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"center",position:"absolute",bottom:22},dot:{width:8,height:8,borderRadius:4,marginTop:0,marginBottom:0,marginLeft:8,marginRight:8},block:{width:16,height:3,marginTop:0,marginBottom:0,marginLeft:8,marginRight:8},dotColor:{backgroundColor:f.O9.white},dotSetColor:{backgroundColor:f.O9.colorsPalette.grey50}});n.default=function(e){var n=i.Z.get("window").width,t=e.dataSource,f=void 0===t?[]:t,p=e.width,v=void 0===p?n:p,m=e.height,A=void 0===m?130:m,b=e.time,y=void 0===b?6e3:b,B=e.autoplay,w=void 0===B||B,E=e.borderRadius,F=void 0===E?0:E,C=e.dotStyle,Z=void 0===C?"dot":C,x=e.loading,k=void 0!==x&&x,S=(0,o.useState)(0),D=(0,r.Z)(S,2),R=D[0],Y=D[1],G=(0,o.useRef)(),j=(0,o.useRef)(),z=(0,o.useCallback)((function(){clearInterval(G.current),G.current=setInterval((function(){var e=R+1;R===f.length-1?(e=0,Y(0)):Y(R+1),j.current.scrollTo({x:v*e,y:0,animated:!0})}),y)}),[R]);(0,o.useEffect)((function(){w&&!k&&z()}),[z]),(0,o.useEffect)((function(){return function(){clearInterval(G.current)}}),[]);var M=function(e){Y(e),j.current.scrollTo({x:v*e,y:0,animated:!0})};return(0,g.jsx)(s.default,{loading:k,rounded:5,maskColor:"transparent",children:(0,g.jsxs)(a.Z,{style:u.Z.flatten([h.banner,{width:v,height:A}]),children:[(0,g.jsx)(l.Z,{ref:j,horizontal:!0,showsHorizontalScrollIndicator:!1,pagingEnabled:!0,onScrollBeginDrag:function(){w&&clearInterval(G.current)},onScrollEndDrag:function(){w&&z()},onMomentumScrollEnd:function(e){e.persist();var n=e.nativeEvent.contentOffset.x,t=e.nativeEvent.layoutMeasurement.width;Y(n/t)},children:f.map((function(e,n){return(0,g.jsx)(a.Z,{style:{width:v,height:A},children:(0,g.jsx)(a.Z,{style:{padding:12},children:(0,g.jsx)(c.Z,{activeOpacity:1,onPress:function(){e.onClick&&e.onClick()},children:(0,g.jsx)(d.Z,{style:u.Z.flatten([{borderRadius:F,width:"100%",height:"100%"}]),resizeMode:"cover",source:"number"===typeof e.url?e.url:{uri:e.url}},n)})})},n)}))}),(0,g.jsx)(a.Z,{style:h.dotBox,children:f.map((function(e,n){return(0,g.jsx)(c.Z,{onPress:M.bind(undefined,n),style:u.Z.flatten(["block"===Z?h.block:h.dot,n===R?h.dotSetColor:h.dotColor])},n)}))})]})})}},63941:function(e,n,t){"use strict";t.d(n,{B:function(){return u},D:function(){return a}});var r=t(93539),o=t(66897),i=t(80121);function a(e){var n=(0,r.useRef)();return(0,r.useEffect)((function(){n.current=e})),n.current}function u(e){var n=e.value,t=e.defaultValue,a=e.onChange,u=(0,o.Z)(),l=(0,r.useRef)(void 0!==n?n:t);void 0!==n&&(l.current=n);var c=(0,i.Z)((function(e){void 0===n&&(l.current=e,u()),null===a||void 0===a||a(e)}));return[l.current,c]}},50346:function(e,n,t){"use strict";t.d(n,{$_:function(){return i()},O9:function(){return r},D9:function(){return v.D}});var r={};t.r(r),t.d(r,{black:function(){return g},blue:function(){return u},colorsPalette:function(){return p},cyan:function(){return l},green:function(){return a},navy:function(){return c},orange:function(){return s},red:function(){return f},white:function(){return h},yellow:function(){return d}});var o=t(65965),i=t.n(o),a="#28a745",u="#008EF0",l="#1EABCD",c="#393E48",d="#ffc107",s="#F95C2B",f="#dc3545",g="#000000",h="#ffffff",p={dark10:"#20303C",dark20:"#43515C",dark30:"#66737C",dark40:"#858F96",dark50:"#A3ABB0",dark60:"#C2C7CB",dark70:"#E0E3E5",dark80:"#F2F4F5",grey10:"#20303C",grey20:"#4D5963",grey30:"#79838A",grey40:"#A6ACB1",grey50:"#D2D6D8",grey60:"#E8ECF0",grey70:"#F0F4F7",grey80:"#F8f9FA",blue10:"#0097C3",blue20:"#00A8DA",blue30:"#00BBF2",blue40:"#40CCF6",blue50:"#85DFF9",blue60:"#B2EAFB",blue70:"#CFF3FD",blue80:"#E3F8FE",cyan10:"#00AAAF",cyan20:"#32BABC",cyan30:"#3CC7C5",cyan40:"#64D4D2",cyan50:"#8BDFDD",cyan60:"#B1E9E9",cyan70:"#D8F4F4",cyan80:"#EBF9F9",green10:"#00A36F",green20:"#00B47A",green30:"#00CD8B",green40:"#45DBAA",green50:"#87E7C8",green60:"#B2F0DC",green70:"#CFF6E9",green80:"#E3FAF2",yellow10:"#E19800",yellow20:"#F0A700",yellow30:"#FFB600",yellow40:"#FFCA45",yellow50:"#FFDD87",yellow60:"#FFEAB5",yellow70:"#FFF2D1",yellow80:"#FFF7E3",orange10:"#D9644A",orange20:"#E66A4E",orange30:"#F27052",orange40:"#F37E63",orange50:"#F7A997",orange60:"#FAC6BA",orange70:"#FCE2DC",orange80:"#FEF0ED",red10:"#D72E15",red20:"#EB4229",red30:"#FF563D",red40:"#FF8472",red50:"#FFB2A6",red60:"#FFD0C9",red70:"#FFE3DE",red80:"#FFF0ED",purple10:"#8B1079",purple20:"#A0138E",purple30:"#B13DAC",purple40:"#C164BD",purple50:"#D08BCD",purple60:"#E0B1DE",purple70:"#EFD8EE",purple80:"#F7EBF7",violet10:"#3022D0",violet20:"#4434EB",violet30:"#5847FF",violet40:"#8579FF",violet50:"#B2ABFF",violet60:"#D1CCFF",violet70:"#E3E0FF",violet80:"#F0EEFF",transparent:"transparent"},v=t(63941)},88514:function(e,n,t){"use strict";var r=t(87462),o=t(63366),i=t(93539),a=t(37068),u=t(12720),l=["animating","color","hidesWhenStopped","size","style"],c=function(e){return i.createElement("circle",{cx:"16",cy:"16",fill:"none",r:"14",strokeWidth:"4",style:e})},d=i.forwardRef((function(e,n){var t=e.animating,a=void 0===t||t,d=e.color,g=void 0===d?"#1976D2":d,h=e.hidesWhenStopped,p=void 0===h||h,v=e.size,m=void 0===v?"small":v,A=e.style,b=(0,o.Z)(e,l),y=i.createElement("svg",{height:"100%",viewBox:"0 0 32 32",width:"100%"},c({stroke:g,opacity:.2}),c({stroke:g,strokeDasharray:80,strokeDashoffset:60}));return i.createElement(u.Z,(0,r.Z)({},b,{accessibilityRole:"progressbar",accessibilityValueMax:1,accessibilityValueMin:0,ref:n,style:[s.container,A]}),i.createElement(u.Z,{children:y,style:["number"===typeof m?{height:m,width:m}:f[m],s.animation,!a&&s.animationPause,!a&&p&&s.hidesWhenStopped]}))}));d.displayName="ActivityIndicator";var s=a.Z.create({container:{alignItems:"center",justifyContent:"center"},hidesWhenStopped:{visibility:"hidden"},animation:{animationDuration:"0.75s",animationKeyframes:[{"0%":{transform:[{rotate:"0deg"}]},"100%":{transform:[{rotate:"360deg"}]}}],animationTimingFunction:"linear",animationIterationCount:"infinite"},animationPause:{animationPlayState:"paused"}}),f=a.Z.create({small:{width:20,height:20},large:{width:36,height:36}});n.Z=d},31018:function(e,n,t){"use strict";t.d(n,{Z:function(){return G}});var r=t(1413),o=t(87462),i=t(63366),a=t(93539),u=t(3671),l=[];function c(e){return l[e-1]}var d=t(57395),s=t(15671),f=t(43144),g=/^data:/,h=function(){function e(){(0,s.Z)(this,e)}return(0,f.Z)(e,null,[{key:"has",value:function(n){var t=e._entries;return g.test(n)||Boolean(t[n])}},{key:"add",value:function(n){var t=e._entries,r=Date.now();t[n]?(t[n].lastUsedTimestamp=r,t[n].refCount+=1):t[n]={lastUsedTimestamp:r,refCount:1}}},{key:"remove",value:function(n){var t=e._entries;t[n]&&(t[n].refCount-=1),e._cleanUpIfNeeded()}},{key:"_cleanUpIfNeeded",value:function(){var n,t,r=e._entries,o=Object.keys(r);o.length+1>e._maximumEntries&&(o.forEach((function(e){var o=r[e];(!t||o.lastUsedTimestamp<t.lastUsedTimestamp)&&0===o.refCount&&(n=e,t=o)})),n&&delete r[n])}}]),e}();h._maximumEntries=256,h._entries={};var p=0,v={},m={abort:function(e){var n=v[""+e];n&&(n.onerror=null,n.onload=null,n=null,delete v[""+e])},getSize:function(e,n,t){var r=!1,o=setInterval(a,16),i=m.load(e,a,(function(){"function"===typeof t&&t();m.abort(i),clearInterval(o)}));function a(){var e=v[""+i];if(e){var t=e.naturalHeight,a=e.naturalWidth;t&&a&&(n(a,t),r=!0)}r&&(m.abort(i),clearInterval(o))}},has:function(e){return h.has(e)},load:function(e,n,t){p+=1;var r=new window.Image;return r.onerror=t,r.onload=function(e){var t=function(){return n({nativeEvent:e})};"function"===typeof r.decode?r.decode().then(t,t):setTimeout(t,0)},r.src=e,v[""+p]=r,p},prefetch:function(e){return new Promise((function(n,t){m.load(e,(function(){h.add(e),h.remove(e),n()}),t)}))},queryCache:function(e){var n={};return e.forEach((function(e){h.has(e)&&(n[e]="disk/memory")})),Promise.resolve(n)}},A=m,b=t(92938),y=t(37068),B=t(30829),w=t(12720),E=["accessibilityLabel","blurRadius","defaultSource","draggable","onError","onLayout","onLoad","onLoadEnd","onLoadStart","pointerEvents","source","style"],F="LOADED",C="LOADING",Z=0,x=/^(data:image\/svg\+xml;utf8,)(.*)/;function k(e){var n=null;if("number"===typeof e){var t=c(e);if(null==t)throw new Error('Image: asset with ID "'+e+'" could not be found. Please check the image source or packager.');var r=t.scales[0];if(t.scales.length>1){var o=b.Z.get();r=t.scales.reduce((function(e,n){return Math.abs(n-o)<Math.abs(e-o)?n:e}))}var i=1!==r?"@"+r+"x":"";n=t?t.httpServerLocation+"/"+t.name+i+"."+t.type:""}else"string"===typeof e?n=e:e&&"string"===typeof e.uri&&(n=e.uri);if(n){var a=n.match(x);if(a){var u=a[1],l=a[2];return""+u+encodeURIComponent(l)}}return n}var S=a.forwardRef((function(e,n){var t=e.accessibilityLabel,r=e.blurRadius,l=e.defaultSource,s=e.draggable,f=e.onError,g=e.onLayout,h=e.onLoad,p=e.onLoadEnd,v=e.onLoadStart,m=e.pointerEvents,b=e.source,x=e.style,S=(0,i.Z)(e,E);var D=a.useState((function(){var e=k(b);if(null!=e&&A.has(e))return F;return"IDLE"})),G=D[0],j=D[1],z=a.useState({}),M=z[0],U=z[1],I=a.useContext(B.Z),Q=a.useRef(null),T=a.useRef(Z++),_=a.useRef(null),P=G===F||G===C&&null==l,L=function(e,n,t){var r=y.Z.flatten(e),o=r.filter,i=r.resizeMode,a=r.shadowOffset,u=r.tintColor,l=[],c=null;if(o&&l.push(o),n&&l.push("blur("+n+"px)"),a){var s=(0,d.Lm)(r);s&&l.push("drop-shadow("+s+")")}return u&&null!=t&&l.push("url(#tint-"+t+")"),l.length>0&&(c=l.join(" ")),delete r.blurRadius,delete r.shadowColor,delete r.shadowOpacity,delete r.shadowOffset,delete r.shadowRadius,delete r.tintColor,delete r.overlayColor,delete r.resizeMode,[r,i,c,u]}(x,r,T.current),N=L[0],O=L[1],q=L[2],V=L[3],W=e.resizeMode||O||"cover",H=P?b:l,J=k(H),K=function(e){if("number"===typeof e){var n=c(e);return{height:n.height,width:n.width}}if(null!=e&&!Array.isArray(e)&&"object"===typeof e)return{height:e.height,width:e.width}}(H),X=J?'url("'+J+'")':null,$=function(){if(null!=Q.current&&("center"===W||"repeat"===W)){var e=Q.current,n=e.naturalHeight,t=e.naturalWidth,r=M.height,o=M.width;if(n&&t&&r&&o){var i=Math.min(1,o/t,r/n);return Math.ceil(i*t)+"px "+Math.ceil(i*n)+"px"}}}(),ee=J?(0,u.Z)("img",{alt:t||"",style:R.accessibilityImage$raw,draggable:s||!1,ref:Q,src:J}):null;var ne=k(b);return a.useEffect((function(){function e(){null!=_.current&&(A.abort(_.current),_.current=null)}return e(),null!=ne&&(j(C),v&&v(),_.current=A.load(ne,(function(e){j(F),h&&h(e),p&&p()}),(function(){j("ERRORED"),f&&f({nativeEvent:{error:"Failed to load resource "+ne+" (404)"}}),p&&p()}))),e}),[ne,_,j,f,h,p,v]),a.createElement(w.Z,(0,o.Z)({},S,{accessibilityLabel:t,onLayout:function(e){if("center"===W||"repeat"===W||g){var n=e.nativeEvent.layout;g&&g(e),U(n)}},pointerEvents:m,ref:n,style:[R.root,I&&R.inline,K,N]}),a.createElement(w.Z,{style:[R.image,Y[W],{backgroundImage:X,filter:q},null!=$&&{backgroundSize:$}],suppressHydrationWarning:!0}),ee,function(e,n){return e&&null!=n?a.createElement("svg",{style:{position:"absolute",height:0,visibility:"hidden",width:0}},a.createElement("defs",null,a.createElement("filter",{id:"tint-"+n,suppressHydrationWarning:!0},a.createElement("feFlood",{floodColor:""+e,key:e}),a.createElement("feComposite",{in2:"SourceAlpha",operator:"atop"})))):null}(V,T.current))}));S.displayName="Image";var D=S;D.getSize=function(e,n,t){A.getSize(e,n,t)},D.prefetch=function(e){return A.prefetch(e)},D.queryCache=function(e){return A.queryCache(e)};var R=y.Z.create({root:{flexBasis:"auto",overflow:"hidden",zIndex:0},inline:{display:"inline-flex"},image:(0,r.Z)((0,r.Z)({},y.Z.absoluteFillObject),{},{backgroundColor:"transparent",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"100%",width:"100%",zIndex:-1}),accessibilityImage$raw:(0,r.Z)((0,r.Z)({},y.Z.absoluteFillObject),{},{height:"100%",opacity:0,width:"100%",zIndex:-1})}),Y=y.Z.create({center:{backgroundSize:"auto"},contain:{backgroundSize:"contain"},cover:{backgroundSize:"cover"},none:{backgroundPosition:"0",backgroundSize:"auto"},repeat:{backgroundPosition:"0",backgroundRepeat:"repeat",backgroundSize:"auto"},stretch:{backgroundSize:"100% 100%"}}),G=D},92938:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(15671),o=t(43144),i=t(68950),a=function(){function e(){(0,r.Z)(this,e)}return(0,o.Z)(e,null,[{key:"get",value:function(){return i.Z.get("window").scale}},{key:"getFontScale",value:function(){return i.Z.get("window").fontScale||e.get()}},{key:"getPixelSizeForLayoutSize",value:function(n){return Math.round(n*e.get())}},{key:"roundToNearestPixel",value:function(n){var t=e.get();return Math.round(n*t)/t}}]),e}()},50882:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=50882,e.exports=n}}]);
//# sourceMappingURL=5138.a33a7134.chunk.js.map