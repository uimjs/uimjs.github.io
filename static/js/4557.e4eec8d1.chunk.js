(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4557],{85480:function(e,n,r){"use strict";var t,i,u=r(18489),o=r(83738),a=r(17186),l=r(93908),c=r(53929),s=r(51928),d=r(17285),p=r(61366),f=r(93539),m=r(74513),x=r(71027),E=["path"],h=["inline","node"],v=["data-meta"],D=c.ZP.div(t||(t=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),b=(0,c.ZP)(l.Z)(i||(i=(0,a.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),_=function(e,n,r){return Reflect.has(e,n)?"true"===Reflect.get(e,n):r};n.Z=function(e){var n=e.path,r=(0,o.Z)(e,E),t=(0,f.useRef)(null);return(0,x.jsxs)(D,{ref:t,children:[(0,x.jsx)(b,(0,u.Z)((0,u.Z)({},r),{},{disableCopy:!0,source:r.source,rehypeRewrite:function(e,n,r){if("element"===e.type&&r&&"root"===r.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var t=e.children&&e.children[0];t&&t.properties&&"true"===t.properties.ariaHidden&&(t.children=[])}},components:{code:function(e){var n,t=e.inline,i=e.node,a=(0,o.Z)(e,h),l=a["data-meta"],c=(0,o.Z)(a,v);if(t||!(0,d.pN)(l))return(0,x.jsx)("code",(0,u.Z)({},a));var s=null===(n=i.position)||void 0===n?void 0:n.start.line,f=(0,d.Mx)(l)||String(s),m=r.components["".concat(f)];if(f&&"function"===typeof m){var E=r.data[f].value||"",D=(0,d.aE)(l);return(0,x.jsx)(p.Z,{disableCheckered:_(D,"disableCheckered",!0),disableToolbar:_(D,"disableToolbar",!1),disableCode:_(D,"disableCode",!1),disablePreview:_(D,"disablePreview",!1),bordered:_(D,"bordered",!0),copied:_(D,"copied",!0),background:D.background,toolbar:D.title||"\u793a\u4f8b",code:(0,x.jsx)("code",(0,u.Z)({},c)),text:E,children:(0,x.jsx)(m,{})})}return(0,x.jsx)("code",(0,u.Z)({},c))}}})),(0,x.jsx)(m.Z,{path:n}),(0,x.jsx)(s.kF,{speed:500,children:function(e){var n=e.percent,r=e.scrollToTop;return(0,x.jsx)(s.Cd,{width:50,onClick:function(){return r()},format:function(){return(0,x.jsx)(s.JO,{type:"arrow-up"})},percent:n})}})]})}},12063:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var t=r(18489),i=r(85480),u={components:{10:function(){var e=t(r(93539)),n=t(r(24877));function t(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(n.default,{maxLen:5},"\u7528\u4e8e\u6587\u672c\u8fc7\u957f\uff0c\u8d85\u51fa\u957f\u5ea6\u663e\u793a")}}(),27:function(){var e=t(r(93539)),n=t(r(24877));function t(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(n.default,{maxLen:5,placeholder:"\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02"},"\u7528\u4e8e\u6587\u672c\u8fc7\u957f\uff0c\u8d85\u51fa\u957f\u5ea6\u663e\u793a")}}()},data:{10:{name:10,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Ellipsis = _interopRequireDefault(require("@uiw/react-native/lib/Ellipsis"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Ellipsis["default"], {\n    maxLen: 5\n  }, "\\u7528\\u4E8E\\u6587\\u672C\\u8FC7\\u957F\\uFF0C\\u8D85\\u51FA\\u957F\\u5EA6\\u663E\\u793A");\n}\nreturn Demo;',language:"jsx",value:"import React from \"react\"\nimport { Ellipsis } from '@uiw/react-native';\n\nfunction Demo() {\n\n  return (\n    <Ellipsis maxLen={5}>\u7528\u4e8e\u6587\u672c\u8fc7\u957f\uff0c\u8d85\u51fa\u957f\u5ea6\u663e\u793a</Ellipsis>\n  );\n}\n\nexport default Demo;"},27:{name:27,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Ellipsis = _interopRequireDefault(require("@uiw/react-native/lib/Ellipsis"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Ellipsis["default"], {\n    maxLen: 5,\n    placeholder: "\\uD83D\\uDE02\\uD83D\\uDE02\\uD83D\\uDE02\\uD83D\\uDE02"\n  }, "\\u7528\\u4E8E\\u6587\\u672C\\u8FC7\\u957F\\uFF0C\\u8D85\\u51FA\\u957F\\u5EA6\\u663E\\u793A");\n}\nreturn Demo;',language:"jsx",value:"import React from \"react\"\nimport { Ellipsis } from '@uiw/react-native';\n\nfunction Demo() {\n\n  return (\n    <Ellipsis maxLen={5} placeholder='\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02'>\u7528\u4e8e\u6587\u672c\u8fc7\u957f\uff0c\u8d85\u51fa\u957f\u5ea6\u663e\u793a</Ellipsis>\n  );\n}\n\nexport default Demo;"}},source:"Ellipsis \u8d85\u51fa\u7701\u7565\n---\n\n\u7528\u4e8e\u6587\u672c\u8fc7\u957f\uff0c\u8d85\u51fa\u957f\u5ea6\u663e\u793a `...`\u3002\n\n\n### \u57fa\u7840\u793a\u4f8b\n\n\n```jsx  mdx:preview\nimport React from \"react\"\nimport { Ellipsis } from '@uiw/react-native';\n\nfunction Demo() {\n\n  return (\n    <Ellipsis maxLen={5}>\u7528\u4e8e\u6587\u672c\u8fc7\u957f\uff0c\u8d85\u51fa\u957f\u5ea6\u663e\u793a</Ellipsis>\n  );\n}\n\nexport default Demo;\n```\n\n### \u81ea\u5b9a\u4e49\u5360\u4f4d\u7b26\n\n\n```jsx  mdx:preview\nimport React from \"react\"\nimport { Ellipsis } from '@uiw/react-native';\n\nfunction Demo() {\n\n  return (\n    <Ellipsis maxLen={5} placeholder='\ud83d\ude02\ud83d\ude02\ud83d\ude02\ud83d\ude02'>\u7528\u4e8e\u6587\u672c\u8fc7\u957f\uff0c\u8d85\u51fa\u957f\u5ea6\u663e\u793a</Ellipsis>\n  );\n}\n\nexport default Demo;\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `children` | \u5185\u5bb9\u4e3a\u7eaf\u6587\u672c\u8d77\u4f5c\u7528 | ReactNode | - |\n| `maxLen` | \u6587\u672c\u957f\u5ea6 | Number | - |\n| `placeholder` | \u81ea\u5b9a\u4e49\u5360\u4f4d\u7b26 | String | `...` |"},o=r(71027),a=function(){return(0,o.jsx)(i.Z,(0,t.Z)((0,t.Z)({},u),{},{path:"/packages/core/src/Ellipsis/README.md"}))}},24877:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t=r(18489),i=r(83738),u=(r(93539),r(62453)),o=r(71027),a=["maxLen","children","placeholder"];function l(e){var n=e.maxLen,r=e.children,l=e.placeholder,c=(0,i.Z)(e,a),s=r;return n&&s&&"string"===typeof s&&(s=s.length>n?s.substr(0,n)+l:s),(0,o.jsx)(u.Z,(0,t.Z)((0,t.Z)({},c),{},{children:s}))}l.defaultProps={placeholder:"..."}},50882:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=50882,e.exports=n}}]);
//# sourceMappingURL=4557.e4eec8d1.chunk.js.map