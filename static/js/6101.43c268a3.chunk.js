(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6101],{59940:function(e,r,t){"use strict";t.d(r,{Z:function(){return D}});var n=t(18489),o=t(83738),a=t(17186),i=t(93908),u=t(53929),l=t(98012),c=t(17285),d=t(84488),s=t(93539),f=t(71027);function p(e){var r=e.path,t=/^http/.test(r||"")?r:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===r||void 0===r?void 0:r.replace(/^\//,""));return(0,f.jsxs)("div",{style:{paddingBlock:20},children:[r&&t&&(0,f.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,f.jsx)(l.iz,{type:"vertical"}),(0,f.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var m,b,g=t(74513),v=["path"],_=["inline","node"],x=["data-meta"],y=u.ZP.div(m||(m=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),h=(0,u.ZP)(i.Z)(b||(b=(0,a.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),F=function(e,r,t){return Reflect.has(e,r)?"true"===Reflect.get(e,r):t},D=function(e){var r=e.path,t=(0,o.Z)(e,v),a=d.ZP.Preview,i=d.ZP.Code,u=d.ZP.Toolbar,m=(0,s.useRef)(null);return(0,f.jsxs)(y,{ref:m,children:[(0,f.jsx)(h,(0,n.Z)((0,n.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(e,r,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var n=e.children&&e.children[0];n&&n.properties&&"true"===n.properties.ariaHidden&&(n.children=[])}},components:{code:function(e){var r,l=e.inline,s=e.node,p=(0,o.Z)(e,_),m=p["data-meta"],b=(0,o.Z)(p,x);if(l||!(0,c.pN)(m))return(0,f.jsx)("code",(0,n.Z)({},p));var g=null===(r=s.position)||void 0===r?void 0:r.start.line,v=(0,c.Mx)(m)||String(g),y=t.components["".concat(v)];if(v&&"function"===typeof y){var h=t.data[v].value||"",D=(0,c.aE)(m);return(0,f.jsxs)(d.ZP,{disableCheckered:F(D,"disableCheckered",!0),bordered:F(D,"bordered",!0),children:[(0,f.jsx)(a,{children:(0,f.jsx)(y,{})}),(0,f.jsx)(u,{text:h,copied:F(D,"copied",!0),children:D.title||"\u793a\u4f8b"}),(0,f.jsx)(i,{children:(0,f.jsx)("code",(0,n.Z)({},b))})]})}return(0,f.jsx)("code",(0,n.Z)({},b))}}})),(0,f.jsx)(g.Z,{}),(0,f.jsx)(p,{path:r}),(0,f.jsx)(l.kF,{speed:500,children:function(e){var r=e.percent,t=e.scrollToTop;return(0,f.jsx)(l.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,f.jsx)(l.JO,{type:"arrow-up"})},percent:r})}})]})}},11856:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(18489),o=t(59940),a={components:{12:function(){var e=a(t(93539)),r=a(t(27789)),n=a(t(44235)),o=a(t(59430));function a(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(r.default,null,e.default.createElement(o.default,null,e.default.createElement(n.default,{type:"warning"},"\u8b66\u544a"),e.default.createElement(n.default,{type:"warning"},"\u8b66\u544a")))}}(),33:function(){var e=n(t(93539)),r=(n(t(44235)),n(t(27789)));function n(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(r.default,{color:"red"})}}(),49:function(){var e=o(t(93539)),r=o(t(44235)),n=o(t(27789));function o(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(n.default,{color:"red"},e.default.createElement(r.default,null,"\u9ed8\u8ba4\u6309\u94ae"))}}(),67:function(){var e=o(t(93539)),r=o(t(44235)),n=o(t(27789));function o(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(n.default,{color:"red",tip:"\u52a0\u8f7d\u4e2d..."},e.default.createElement(r.default,null,"\u9ed8\u8ba4\u6309\u94ae"))}}()},data:{12:{name:12,meta:{background:"#bebebe29"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Loader = _interopRequireDefault(require("@uiw/react-native/lib/Loader"));\nvar _Button = _interopRequireDefault(require("@uiw/react-native/lib/Button"));\nvar _ButtonGroup = _interopRequireDefault(require("@uiw/react-native/lib/ButtonGroup"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Loader["default"], null, /*#__PURE__*/_react["default"].createElement(_ButtonGroup["default"], null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {\n    type: "warning"\n  }, "\\u8B66\\u544A"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {\n    type: "warning"\n  }, "\\u8B66\\u544A")));\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Loader, Button, ButtonGroup } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader>\n      <ButtonGroup>\n        <Button type=\"warning\">\u8b66\u544a</Button>\n        <Button type=\"warning\">\u8b66\u544a</Button>\n      </ButtonGroup>\n    </Loader>\n  );\n}\nexport default Demo"},33:{name:33,meta:{background:"#bebebe29"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Button = _interopRequireDefault(require("@uiw/react-native/lib/Button"));\nvar _Loader = _interopRequireDefault(require("@uiw/react-native/lib/Loader"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Loader["default"], {\n    color: "red"\n  });\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Button,Loader } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader color=\"red\" />\n  );\n}\nexport default Demo"},49:{name:49,meta:{background:"#bebebe29"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Button = _interopRequireDefault(require("@uiw/react-native/lib/Button"));\nvar _Loader = _interopRequireDefault(require("@uiw/react-native/lib/Loader"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Loader["default"], {\n    color: "red"\n  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], null, "\\u9ED8\\u8BA4\\u6309\\u94AE"));\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Button,Loader } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader color=\"red\">\n      <Button>\u9ed8\u8ba4\u6309\u94ae</Button>\n    </Loader>\n  );\n}\nexport default Demo"},67:{name:67,meta:{background:"#bebebe29"},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Button = _interopRequireDefault(require("@uiw/react-native/lib/Button"));\nvar _Loader = _interopRequireDefault(require("@uiw/react-native/lib/Loader"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Loader["default"], {\n    color: "red",\n    tip: "\\u52A0\\u8F7D\\u4E2D..."\n  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], null, "\\u9ED8\\u8BA4\\u6309\\u94AE"));\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Button, Loader } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader color=\"red\" tip=\"\u52a0\u8f7d\u4e2d...\">\n      <Button>\u9ed8\u8ba4\u6309\u94ae</Button>\n    </Loader>\n  );\n}\nexport default Demo"}},source:"Loader \u52a0\u8f7d\n---\n\n\u8868\u660e\u67d0\u4e2a\u4efb\u52a1\u6b63\u5728\u8fdb\u884c\u4e2d\u3002\n\n\x3c!-- ![](https://user-images.githubusercontent.com/66067296/139398047-e59f2b9d-ced1-46d2-b45c-b9e35d04b825.gif) --\x3e\n\x3c!--rehype:style=zoom: 33%;float: right; margin-left: 15px;--\x3e\n\n### \u57fa\u7840\u793a\u4f8b\n\n\x3c!--DemoStart--\x3e\n```jsx mdx:preview&background=#bebebe29\nimport React from 'react';\nimport { Loader, Button, ButtonGroup } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader>\n      <ButtonGroup>\n        <Button type=\"warning\">\u8b66\u544a</Button>\n        <Button type=\"warning\">\u8b66\u544a</Button>\n      </ButtonGroup>\n    </Loader>\n  );\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n### \u8bbe\u7f6e\u989c\u8272\n\n\x3c!--DemoStart--\x3e\n```jsx mdx:preview&background=#bebebe29\nimport React from 'react';\nimport { Button,Loader } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader color=\"red\" />\n  );\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n### \u8bbe\u7f6e\u906e\u7f69\u5c42\u989c\u8272\n\n\x3c!--DemoStart--\x3e\n```jsx mdx:preview&background=#bebebe29\nimport React from 'react';\nimport { Button,Loader } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader color=\"red\">\n      <Button>\u9ed8\u8ba4\u6309\u94ae</Button>\n    </Loader>\n  );\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n### \u81ea\u5b9a\u4e49\u63d0\u793a\u6587\u672c\n\n\x3c!--DemoStart--\x3e\n```jsx mdx:preview&background=#bebebe29\nimport React from 'react';\nimport { Button, Loader } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Loader color=\"red\" tip=\"\u52a0\u8f7d\u4e2d...\">\n      <Button>\u9ed8\u8ba4\u6309\u94ae</Button>\n    </Loader>\n  );\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n\n### Props\n\n\u7ee7\u627f `ActivityIndicator` \u7ec4\u4ef6\u5c5e\u6027 [`ActivityIndicatorProps`](https://facebook.github.io/react-native/docs/activityindicator#props),\u6bd4\u539f\u751f\u7ec4\u4ef6 `ActivityIndicator` \u591a\u51fa\u66f4\u591a\u4e30\u5bcc\u529f\u80fd\u3002\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| color | \u5fae\u8c03\u5668\u7684\u524d\u666f\u8272 | `String` | `gray` |\n| maskColor | \u906e\u7f69\u5c42\u989c\u8272 | `String` | `rgba(255, 255, 255, 0.85)` |\n| size | Loader \u56fe\u6807\u7684\u5927\u5c0f\uff08\u9ed8\u8ba4\u4e3a `small`\uff09 | `large`, `small` | - |\n| loading | \u662f\u663e\u793a`Indicator`\uff08true\uff09\u8fd8\u662f\u9690\u85cf`Indicator`\uff08false\uff09 | `Boolean` | `true` |\n| vertical | \u52a8\u753b\u56fe\u6807\u4e0e\u6587\u5b57\u5782\u76f4\u663e\u793a | `Boolean` | - |\n| rounded | \u8bbe\u7f6e\u6309\u94ae\u5706\u89d2,\u7528\u4e8e\u52a0\u8f7d\u5185\u5bb9\u4e3a\u5706\u89d2\u7684\u60c5\u51b5\uff09 | `Number` | - |\n| tip | \u5f53\u4f5c\u4e3a\u5305\u88f9\u5143\u7d20\u65f6,\u53ef\u4ee5\u81ea\u5b9a\u4e49\u63cf\u8ff0\u6587\u6848 | `String`, `ReactNode` | - |\n"},i=t(71027),u=function(){return(0,i.jsx)(o.Z,(0,n.Z)((0,n.Z)({},a),{},{path:"/packages/core/src/Loader/README.md"}))}},44235:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return m}});var n=t(18489),o=t(83738),a=t(93539),i=t(2894),u=t(88514),l=t(37068),c=t(3143),d=t(28351),s=t(64739),f=t(71027),p=["children","style","textStyle","rounded","bordered","color","type","size","disabled","loading"];function m(e){var r,t,l,m,g,v=e.children,_=e.style,x=e.textStyle,y=e.rounded,h=e.bordered,F=e.color,D=e.type,E=e.size,B=e.disabled,w=e.loading,j=(0,o.Z)(e,p),C=(0,s.useTheme)();switch(D){case"warning":r=C.colors.func200||"#FFD21D";break;case"primary":r=C.colors.func400||"#1890FF";break;case"success":r=C.colors.func300||"#52C41A";break;case"danger":r=C.colors.func600||"#F4333C";break;case"light":r=C.colors.white||"#FFFFFF";break;case"dark":r=C.colors.black||"#000000"}r&&(r=(0,c.$_)(r).rgb().string()),B&&(t=(0,c.$_)(C.colors.disabled||"#CCCCCC").alpha(.1).rgb().string(),r=(0,c.$_)(C.colors.disabled||"#CCCCCC").rgb().string()),F&&(r=(0,c.$_)(F).rgb().string()),!y||"number"!==typeof y&&"boolean"!==typeof y||(g=y),h&&(l=(0,c.$_)(C.colors.gray200||r).alpha(1).rgb().string(),m=1);var Z={backgroundColor:r||"#3578e5",borderColor:l,borderWidth:m,borderRadius:g},R={color:t=(D||r||F||Z.backgroundColor)&&"light"!==D?(0,c.$_)(C.colors.white||"#FFFFFF").rgb().string():(0,c.$_)(C.colors.black||"#000000").rgb().string()},A={};E&&b[E]&&(A=b[E]);var k={},L="".concat(E,"Box");return E&&b[L]&&(k=b[L]),v?(0,f.jsxs)(i.Z,(0,n.Z)((0,n.Z)({testID:"RNE__Button__wrap",style:[b.button,b.content,Z,k,_],disabled:B},j),{},{children:[w&&(0,f.jsx)(u.Z,{size:16,color:t,style:b.icon}),a.Children.toArray(v).map((function(e,r){return(0,f.jsx)(d.default,{testID:"RNE__Button__div",style:[A,b.label,R,x],children:e},r)}))]})):null}m.defaultProps={activeOpacity:.5,rounded:5,bordered:!1,size:"default"};var b=l.Z.create({button:{borderStyle:"solid",display:"flex"},content:{flexDirection:"row",alignItems:"center",justifyContent:"center"},icon:{width:16,marginRight:4},label:{},smallBox:{paddingHorizontal:3},defaultBox:{paddingHorizontal:8},largeBox:{paddingHorizontal:10},small:{marginVertical:4,fontSize:14},default:{marginVertical:8,fontSize:16},large:{marginVertical:10,fontSize:18}})},59430:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return f}});var n=t(18489),o=t(83738),a=t(93539),i=t(37068),u=t(18401),l=t(64739),c=t(71027),d=["children","gutter","inline","size","rounded","color","type","bordered","disabled","textStyle","direction","justify","align","wrap"],s=i.Z.create({default:{display:"flex",flexDirection:"row",flexWrap:"wrap"}});function f(e){var r=e.children,t=e.gutter,f=e.inline,p=void 0!==f&&f,m=e.size,b=e.rounded,g=e.color,v=e.type,_=e.bordered,x=void 0===_||_,y=e.disabled,h=e.textStyle,F=e.direction,D=e.justify,E=e.align,B=e.wrap,w=(0,o.Z)(e,d),j={color:g,type:v,bordered:x,disabled:y,textStyle:h},C={direction:F,justify:D,align:E,wrap:B},Z=a.Children.toArray(r),R=(0,l.useTheme)();return p&&(C.direction="row",C.wrap="wrap"),(0,c.jsx)(u.default,(0,n.Z)((0,n.Z)((0,n.Z)({testID:"RNE__ButtonGroup__wrap",style:s.default},C),w),{},{children:Z.map((function(e,o){if(!a.isValidElement(e))return null;var u={flex:p?0:1};return p&&t&&(u.marginVertical=t/2),t||(1!==Z.length&&(0===o||o<Z.length-1)&&(u.borderTopRightRadius=0,u.borderBottomRightRadius=0),Z.length>0&&0!==o&&(u.borderTopLeftRadius=0,u.borderBottomLeftRadius=0)),x||(u.borderWidth=0),x&&!t&&((o>0&&o<r.length-1||0===o)&&(u.borderRightWidth=i.Z.hairlineWidth,u.borderColor=R.colors.text_active),o>0&&o<r.length&&(u.borderLeftWidth=i.Z.hairlineWidth,u.borderColor=R.colors.text_active)),t&&p?u.marginHorizontal=t/2:t&&0!==o&&(u.marginLeft=t/2),a.cloneElement(e,(0,n.Z)((0,n.Z)((0,n.Z)({},j),e.props),{},{size:m,rounded:b,style:[u,e.props.style]}))}))}))}},18401:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(18489),o=t(93539),a=t(12720),i=t(71027);function u(e){return(0,i.jsx)(a.Z,(0,n.Z)({},e))}function l(e){var r=e.direction,t=e.justify,l=e.align,c=e.wrap,d=e.children,s=e.style,f={};return r&&(f.flexDirection=r),c&&(f.flexWrap=c),t&&(f.justifyContent=t.replace(/^start$/g,"flex-start").replace(/^end$/g,"flex-end").replace(/^between$/g,"space-between").replace(/^around$/g,"space-around").replace(/^evenly$/g,"space-evenly")),l&&(f.alignItems=l.replace(/^start$/g,"flex-start").replace(/^end$/g,"flex-end")),(0,i.jsx)(a.Z,{testID:"RNE__Flex__wrap",style:[f,s],children:d&&o.Children.map(d,(function(e){return o.isValidElement(e)?e.type&&"FlexItem"===e.type.displayName?o.cloneElement((0,i.jsx)(u,{}),(0,n.Z)((0,n.Z)({},e.props),{},{style:[{flex:1},e.props.style]})):e:null}))})}l.defaultProps={direction:"row",justify:"start",wrap:"nowrap",align:"start"},l.Item=u;var c=l},27789:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return p}});var n=t(18489),o=t(83738),a=(t(93539),t(37068)),i=t(88514),u=t(12720),l=t(62453),c=t(64739),d=t(71027),s=["children","color","maskColor","rounded","loading","tip","size","vertical"],f=a.Z.create({defalut:{position:"absolute",height:"100%",width:"100%",zIndex:99,flexDirection:"row",alignItems:"center",justifyContent:"center"},indicator:{marginRight:5},stopActivity:{display:"none"}});function p(e){var r=(0,c.useTheme)(),t=e.children,a=e.color,p=void 0===a?r.colors.primary_background||"#3578e5":a,m=e.maskColor,b=void 0===m?r.colors.white||"rgba(255, 255, 255, 0.85)":m,g=e.rounded,v=e.loading,_=void 0===v||v,x=e.tip,y=e.size,h=void 0===y?"small":y,F=e.vertical,D=(0,o.Z)(e,s),E={};if(b&&(E.backgroundColor=b),g&&(E.borderRadius=g),F&&(E.flexDirection="column"),!t&&!x)return(0,d.jsx)(i.Z,{animating:_,size:h,color:p});var B=x||_?(0,d.jsxs)(u.Z,{style:[f[_?"defalut":"stopActivity"],E],children:[(0,d.jsx)(i.Z,{animating:_,size:h,color:p}),x&&("string"===typeof x?(0,d.jsx)(l.Z,{style:{color:p},children:x}):(0,d.jsx)(u.Z,{children:x}))]}):null;return!t&&x?B:(0,d.jsxs)(u.Z,(0,n.Z)((0,n.Z)({},D),{},{children:[B,t]}))}},28351:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(18489),o=t(83738),a=t(93539),i=t(32167),u=t(71027),l=["children"];function c(e){var r=e.children,t=(0,o.Z)(e,l);return r?a.Children.toArray(r).every((function(e){return"string"===typeof e||e&&e.type&&"Text"===e.type.displayName}))?(0,u.jsx)(i.Z,(0,n.Z)((0,n.Z)({color:"text"},t),{},{children:r})):(0,u.jsx)(a.Fragment,{children:a.Children.toArray(r).map((function(e,r){return"string"===typeof e?(0,a.createElement)(i.Z,(0,n.Z)((0,n.Z)({},t),{},{children:e,key:r})):a.isValidElement(e)?a.cloneElement(e,(0,n.Z)({key:r},t)):void 0})).filter(Boolean)}):null}},32167:function(e,r,t){"use strict";var n=t(18489),o=t(36222),a=t(83738),i=(t(93539),t(62453)),u=t(64739),l=t(33709),c=t(71027),d=["color","children","style"],s=function(e){var r=e.color,t=void 0===r?"text":r,s=e.children,f=e.style,p=(0,a.Z)(e,d),m=(0,u.useTheme)();return(0,c.jsx)(i.Z,(0,n.Z)((0,n.Z)({style:[{color:((0,l.isEmpty)(m.colors)?(0,o.Z)({},t,"#ccc"):m.colors)[t]},f]},p),{},{children:s}))};s.displayName="Text",r.Z=s},85153:function(e,r,t){"use strict";t.r(r),t.d(r,{black:function(){return d},blue:function(){return o},colorsPalette:function(){return f},cyan:function(){return a},green:function(){return n},navy:function(){return i},orange:function(){return l},red:function(){return c},white:function(){return s},yellow:function(){return u}});var n="#28a745",o="#008EF0",a="#1EABCD",i="#393E48",u="#ffc107",l="#F95C2B",c="#dc3545",d="#000000",s="#ffffff",f={dark10:"#20303C",dark20:"#43515C",dark30:"#66737C",dark40:"#858F96",dark50:"#A3ABB0",dark60:"#C2C7CB",dark70:"#E0E3E5",dark80:"#F2F4F5",grey10:"#20303C",grey20:"#4D5963",grey30:"#79838A",grey40:"#A6ACB1",grey50:"#D2D6D8",grey60:"#E8ECF0",grey70:"#F0F4F7",grey80:"#F8f9FA",blue10:"#0097C3",blue20:"#00A8DA",blue30:"#00BBF2",blue40:"#40CCF6",blue50:"#85DFF9",blue60:"#B2EAFB",blue70:"#CFF3FD",blue80:"#E3F8FE",cyan10:"#00AAAF",cyan20:"#32BABC",cyan30:"#3CC7C5",cyan40:"#64D4D2",cyan50:"#8BDFDD",cyan60:"#B1E9E9",cyan70:"#D8F4F4",cyan80:"#EBF9F9",green10:"#00A36F",green20:"#00B47A",green30:"#00CD8B",green40:"#45DBAA",green50:"#87E7C8",green60:"#B2F0DC",green70:"#CFF6E9",green80:"#E3FAF2",yellow10:"#E19800",yellow20:"#F0A700",yellow30:"#FFB600",yellow40:"#FFCA45",yellow50:"#FFDD87",yellow60:"#FFEAB5",yellow70:"#FFF2D1",yellow80:"#FFF7E3",orange10:"#D9644A",orange20:"#E66A4E",orange30:"#F27052",orange40:"#F37E63",orange50:"#F7A997",orange60:"#FAC6BA",orange70:"#FCE2DC",orange80:"#FEF0ED",red10:"#D72E15",red20:"#EB4229",red30:"#FF563D",red40:"#FF8472",red50:"#FFB2A6",red60:"#FFD0C9",red70:"#FFE3DE",red80:"#FFF0ED",purple10:"#8B1079",purple20:"#A0138E",purple30:"#B13DAC",purple40:"#C164BD",purple50:"#D08BCD",purple60:"#E0B1DE",purple70:"#EFD8EE",purple80:"#F7EBF7",violet10:"#3022D0",violet20:"#4434EB",violet30:"#5847FF",violet40:"#8579FF",violet50:"#B2ABFF",violet60:"#D1CCFF",violet70:"#E3E0FF",violet80:"#F0EEFF",transparent:"transparent"}},63941:function(e,r,t){"use strict";t.d(r,{BL:function(){return u},D9:function(){return i},dU:function(){return l}});var n=t(93539),o=t(66897),a=t(19233);function i(e){var r=(0,n.useRef)();return(0,n.useEffect)((function(){r.current=e})),r.current}function u(e){var r=e.value,t=e.defaultValue,i=e.onChange,u=(0,o.Z)(),l=(0,n.useRef)(void 0!==r?r:t);void 0!==r&&(l.current=r);var c=(0,a.Z)((function(e){void 0===r&&(l.current=e,u()),null===i||void 0===i||i(e)}));return[l.current,c]}function l(e){var r=(0,n.useRef)(e);return r.current=e,r}},3143:function(e,r,t){"use strict";t.d(r,{$_:function(){return o.a},D9:function(){return i.D9},O9:function(){return a}});var n=t(65965),o=t.n(n),a=t(85153),i=t(63941)},50882:function(e){function r(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=function(){return[]},r.resolve=r,r.id=50882,e.exports=r}}]);
//# sourceMappingURL=6101.43c268a3.chunk.js.map