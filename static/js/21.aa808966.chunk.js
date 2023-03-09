(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21],{85480:function(n,e,t){"use strict";var r,o,i=t(18489),s=t(83738),c=t(17186),a=t(93908),u=t(53929),d=t(51928),p=t(17285),l=t(84488),f=t(93539),h=t(74513),x=t(71027),m=["path"],v=["inline","node"],g=["data-meta"],w=u.ZP.div(r||(r=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),Z=(0,u.ZP)(a.Z)(o||(o=(0,c.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),b=function(n,e,t){return Reflect.has(n,e)?"true"===Reflect.get(n,e):t};e.Z=function(n){var e=n.path,t=(0,s.Z)(n,m),r=l.ZP.Preview,o=l.ZP.Code,c=l.ZP.Toolbar,a=(0,f.useRef)(null);return(0,x.jsxs)(w,{ref:a,children:[(0,x.jsx)(Z,(0,i.Z)((0,i.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(n,e,t){if("element"===n.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(n.tagName)){var r=n.children&&n.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(n){var e,a=n.inline,u=n.node,d=(0,s.Z)(n,v),f=d["data-meta"],h=(0,s.Z)(d,g);if(a||!(0,p.pN)(f))return(0,x.jsx)("code",(0,i.Z)({},d));var m=null===(e=u.position)||void 0===e?void 0:e.start.line,w=(0,p.Mx)(f)||String(m),Z=t.components["".concat(w)];if(w&&"function"===typeof Z){var j=t.data[w].value||"",P=(0,p.aE)(f);return(0,x.jsxs)(l.ZP,{disableCheckered:b(P,"disableCheckered",!0),bordered:b(P,"bordered",!0),children:[(0,x.jsx)(r,{children:(0,x.jsx)(Z,{})}),(0,x.jsx)(c,{text:j,copied:b(P,"copied",!0),children:P.title||"\u793a\u4f8b"}),(0,x.jsx)(o,{children:(0,x.jsx)("code",(0,i.Z)({},h))})]})}return(0,x.jsx)("code",(0,i.Z)({},h))}}})),(0,x.jsx)(h.Z,{path:e}),(0,x.jsx)(d.kF,{speed:500,children:function(n){var e=n.percent,t=n.scrollToTop;return(0,x.jsx)(d.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,x.jsx)(d.JO,{type:"arrow-up"})},percent:e})}})]})}},40940:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return c}});var r=t(18489),o=t(85480),i={components:{},data:{},source:"Toast \u8f7b\u63d0\u793a\n---\n![](https://user-images.githubusercontent.com/57083007/146734105-6e3c70bf-0d11-45d5-8bd4-c1e31738a4de.gif)\x3c!--rehype:style=zoom: 33%;--\x3e\n\n\n\u4e00\u79cd\u8f7b\u91cf\u7ea7\u53cd\u9988/\u63d0\u793a\uff0c\u53ef\u4ee5\u7528\u6765\u663e\u793a\u4e0d\u4f1a\u6253\u65ad\u7528\u6237\u64cd\u4f5c\u7684\u5185\u5bb9\uff0c\u9002\u5408\u7528\u4e8e\u9875\u9762\u8f6c\u573a\u3001\u6570\u636e\u4ea4\u4e92\u7684\u7b49\u573a\u666f\u4e2d\u3002\n\n\u7ec4\u4ef6\u57fa\u4e8e[`react-native-root-siblings`](https://github.com/magicismight/react-native-root-siblings) \u63d2\u4ef6\u5f00\u53d1\uff0c \u5f53 `react native >= 0.62` \u65f6\uff0c\u9700\u8981\u5728\u7a0b\u5e8f\u4e2d\u63d2\u5165\u4e00\u4e2a\u88c5\u5165\u5bb9\u5668\n\n```jsx\nimport { RootSiblingParent } from 'react-native-root-siblings';\n\nexport default () => {\n  return (\n    <RootSiblingParent>\n      <App />\n    </RootSiblingParent>\n  )\n}\n```\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport { View } from 'react-native';\nimport { Toast, Button } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n   <View>\n     <Button onPress={() => { Toast.info('\u8bf4\u660e\u63d0\u793a', 2, 'info') }}>\u70b9\u51fb\u663e\u793a</Button>\n     <Button onPress={() => { Toast.warning('\u8bf4\u660e\u63d0\u793a') }}>\u70b9\u51fb\u663e\u793a</Button>\n     <Button onPress={() => { Toast.error('\u8bf4\u660e\u63d0\u793a') }}>\u70b9\u51fb\u663e\u793a</Button>\n     <Button onPress={() => { Toast.success('\u8bf4\u660e\u63d0\u793a') }}>\u70b9\u51fb\u663e\u793a</Button>\n   </View>\n\n  );\n}\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `content` | \u63d0\u793a\u5185\u5bb9 | string | - |\n| `duration` | \u63d0\u793a\u6301\u7eed\u65f6\u95f4 | number | 2s |\n| `icon` | \u81ea\u5b9a\u4e49\u63d0\u793a`icon` | string | `info` |"},s=t(71027),c=function(){return(0,s.jsx)(o.Z,(0,r.Z)((0,r.Z)({},i),{},{path:"/packages/core/src/Toast/README.md"}))}},50882:function(n){function e(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=50882,n.exports=e}}]);
//# sourceMappingURL=21.aa808966.chunk.js.map