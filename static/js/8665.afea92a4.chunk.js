(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8665],{85480:function(e,t,n){"use strict";var r,i,o=n(18489),a=n(83738),l=n(17186),c=n(93908),u=n(53929),s=n(98012),d=n(17285),f=n(84488),m=n(93539),p=n(74513),x=n(71027),g=["path"],h=["inline","node"],v=["data-meta"],_=u.ZP.div(r||(r=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),Z=(0,u.ZP)(c.Z)(i||(i=(0,l.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),j=function(e,t,n){return Reflect.has(e,t)?"true"===Reflect.get(e,t):n};t.Z=function(e){var t=e.path,n=(0,a.Z)(e,g),r=f.ZP.Preview,i=f.ZP.Code,l=f.ZP.Toolbar,c=(0,m.useRef)(null);return(0,x.jsxs)(_,{ref:c,children:[(0,x.jsx)(Z,(0,o.Z)((0,o.Z)({},n),{},{disableCopy:!0,source:n.source,rehypeRewrite:function(e,t,n){if("element"===e.type&&n&&"root"===n.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(e){var t,c=e.inline,u=e.node,s=(0,a.Z)(e,h),m=s["data-meta"],p=(0,a.Z)(s,v);if(c||!(0,d.pN)(m))return(0,x.jsx)("code",(0,o.Z)({},s));var g=null===(t=u.position)||void 0===t?void 0:t.start.line,_=(0,d.Mx)(m)||String(g),Z=n.components["".concat(_)];if(_&&"function"===typeof Z){var b=n.data[_].value||"",R=(0,d.aE)(m);return(0,x.jsxs)(f.ZP,{disableCheckered:j(R,"disableCheckered",!0),bordered:j(R,"bordered",!0),children:[(0,x.jsx)(r,{children:(0,x.jsx)(Z,{})}),(0,x.jsx)(l,{text:b,copied:j(R,"copied",!0),children:R.title||"\u793a\u4f8b"}),(0,x.jsx)(i,{children:(0,x.jsx)("code",(0,o.Z)({},p))})]})}return(0,x.jsx)("code",(0,o.Z)({},p))}}})),(0,x.jsx)(p.Z,{path:t}),(0,x.jsx)(s.kF,{speed:500,children:function(e){var t=e.percent,n=e.scrollToTop;return(0,x.jsx)(s.Cd,{width:50,onClick:function(){return n()},format:function(){return(0,x.jsx)(s.JO,{type:"arrow-up"})},percent:t})}})]})}},61670:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(18489),i=n(85480),o={components:{11:function(){var e=o(n(93539)),t=n(7804),r=o(n(31877)),i=o(n(37322));function o(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(r.default,{img:e.default.createElement(i.default,{name:"pay-circle-o",size:60,fill:"#008EF0"}),title:"\u652f\u4ed8\u6210\u529f",message:e.default.createElement(t.Text,null,"998.00\u5143 ")})}}()},data:{11:{name:11,meta:{background:"#bebebe29"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _reactNative = require("react-native");\nvar _Result = _interopRequireDefault(require("@uiw/react-native/lib/Result"));\nvar _Icon = _interopRequireDefault(require("@uiw/react-native/lib/Icon"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Result["default"], {\n    img: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {\n      name: "pay-circle-o",\n      size: 60,\n      fill: "#008EF0"\n    }),\n    title: "\\u652F\\u4ED8\\u6210\\u529F",\n    message: /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "998.00\\u5143 ")\n  });\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Text } from 'react-native';\nimport { Result, Icon } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Result\n      img={\n        <Icon name=\"pay-circle-o\" size={60} fill='#008EF0'/>\n      }\n      title=\"\u652f\u4ed8\u6210\u529f\"\n      message={<Text>998.00\u5143 </Text>}\n    />\n  );\n}\nexport default Demo"}},source:"Result \u7ed3\u679c\u9875\n---\n\n\u5728\u6574\u5f20\u9875\u9762\u4e2d\u7ec4\u7ec7\u63d2\u753b\u3001\u56fe\u6807\u3001\u6587\u5b57\u7b49\u5185\u5bb9\uff0c\u5411\u7528\u6237\u53cd\u9988\u64cd\u4f5c\u7ed3\u679c\u3002\n\n\x3c!-- ![](https://user-images.githubusercontent.com/66067296/140004296-414edcc2-c809-4fcf-a147-5088757ea7b1.png) --\x3e\n\x3c!--rehype:style=zoom: 33%;float: right; margin-left: 15px;--\x3e\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx mdx:preview&background=#bebebe29\nimport React from 'react';\nimport { Text } from 'react-native';\nimport { Result, Icon } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Result\n      img={\n        <Icon name=\"pay-circle-o\" size={60} fill='#008EF0'/>\n      }\n      title=\"\u652f\u4ed8\u6210\u529f\"\n      message={<Text>998.00\u5143 </Text>}\n    />\n  );\n}\nexport default Demo\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `img` | \u63d2\u56fe\u5143\u7d20 (\u53ef\u4ee5\u4e3a`<img src=\"\" />`/`<Icon type=\"\" />`\u7b49) | ReactNode | - |\n| `title` | title \u6587\u6848 | ReactNode | - |\n| `message` | message \u6587\u6848| ReactNode | - |\n"},a=n(71027),l=function(){return(0,a.jsx)(i.Z,(0,r.Z)((0,r.Z)({},o),{},{path:"/packages/core/src/Result/README.md"}))}},37322:function(e,t,n){"use strict";n.r(t);var r=n(18489),i=n(83738),o=(n(93539),n(36893)),a=n.n(o),l=n(80464),c=n(71027),u=["size","name","fill","stroke","xml","paths","color"];t.default=function(e){var t=e.size,n=void 0===t?26:t,s=e.name,d=e.fill,f=void 0===d?"#000000":d,m=e.stroke,p=e.xml,x=e.paths,g=e.color,h=(0,i.Z)(e,u);if(p)return(0,c.jsx)(o.SvgXml,(0,r.Z)({testID:"RNE__Icon__svgXml",xml:p,height:n,width:n},h));var v=x;if(!v){if(!s||!l[s])return null;v=l[s]}return(0,c.jsx)(a(),(0,r.Z)((0,r.Z)({testID:"RNE__Icon__svg",fill:g||f,stroke:m,height:n,width:n,viewBox:"0 0 20 20"},h),{},{children:v.map((function(e,t){return(0,c.jsx)(o.Path,{d:e,fillRule:"evenodd"},t)}))}))}},31877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var r=n(18489),i=n(83738),o=(n(93539),n(62453)),a=n(12720),l=n(37068),c=n(64739),u=n(71027),s=["children"],d=["style","title","message","img"];function f(e){var t=e.children,n=(0,i.Z)(e,s);return"string"===typeof t||t&&"Text"===t.type.displayName?(0,u.jsx)(o.Z,(0,r.Z)((0,r.Z)({},n),{},{children:t})):(0,u.jsx)(a.Z,(0,r.Z)((0,r.Z)({},n),{},{children:t}))}function m(e){var t=e.style,n=e.title,o=e.message,s=e.img,m=(0,i.Z)(e,d),p=(0,c.useTheme)(),x=function(e){var t=e.bgColor,n=e.textColor,r=e.messageColor;return l.Z.create({defalut:{justifyContent:"center",alignItems:"center",backgroundColor:t,paddingTop:30,paddingBottom:21},title:{fontSize:21,marginTop:15,paddingHorizontal:15,color:n},message:{fontSize:16,marginTop:9,paddingHorizontal:15,lineHeight:18,color:r}})}({bgColor:p.colors.mask,textColor:p.colors.primary_text,messageColor:p.colors.text});return(0,u.jsxs)(a.Z,(0,r.Z)((0,r.Z)({style:[x.defalut,t]},m),{},{children:[s,n&&(0,u.jsx)(f,{style:x.title,children:n}),o&&(0,u.jsx)(f,{style:x.message,children:o})]}))}m.defaultProps={}},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t}}]);
//# sourceMappingURL=8665.afea92a4.chunk.js.map