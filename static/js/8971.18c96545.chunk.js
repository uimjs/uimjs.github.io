(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8971],{85480:function(e,n,t){"use strict";var r,i,a=t(18489),o=t(83738),l=t(17186),u=t(93908),c=t(53929),f=t(51928),s=t(17285),d=t(61366),m=t(93539),_=t(74513),p=t(71027),v=["path"],R=["inline","node"],g=["data-meta"],b=c.ZP.div(r||(r=(0,l.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),x=(0,c.ZP)(u.Z)(i||(i=(0,l.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),j=function(e,n,t){return Reflect.has(e,n)?"true"===Reflect.get(e,n):t};n.Z=function(e){var n=e.path,t=(0,o.Z)(e,v),r=(0,m.useRef)(null);return(0,p.jsxs)(b,{ref:r,children:[(0,p.jsx)(x,(0,a.Z)((0,a.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(e,n,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var r=e.children&&e.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(e){var n,r=e.inline,i=e.node,l=(0,o.Z)(e,R),u=l["data-meta"],c=(0,o.Z)(l,g);if(r||!(0,s.pN)(u))return(0,p.jsx)("code",(0,a.Z)({},l));var f=null===(n=i.position)||void 0===n?void 0:n.start.line,m=(0,s.Mx)(u)||String(f),_=t.components["".concat(m)];if(m&&"function"===typeof _){var v=t.data[m].value||"",b=(0,s.aE)(u);return(0,p.jsx)(d.Z,{disableCheckered:j(b,"disableCheckered",!0),disableToolbar:j(b,"disableToolbar",!1),disableCode:j(b,"disableCode",!1),disablePreview:j(b,"disablePreview",!1),bordered:j(b,"bordered",!0),copied:j(b,"copied",!0),background:b.background,toolbar:b.title||"\u793a\u4f8b",code:(0,p.jsx)("code",(0,a.Z)({},c)),text:v,children:(0,p.jsx)(_,{})})}return(0,p.jsx)("code",(0,a.Z)({},c))}}})),(0,p.jsx)(_.Z,{path:n}),(0,p.jsx)(f.kF,{speed:500,children:function(e){var n=e.percent,t=e.scrollToTop;return(0,p.jsx)(f.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,p.jsx)(f.JO,{type:"arrow-up"})},percent:n})}})]})}},9681:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var r=t(18489),i=t(85480),a={components:{9:function(){var e=r(t(93539)),n=r(t(29038));function r(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(n.default,null)}}(),24:function(){var e=a(t(93539)),n=a(t(29038)),r=a(t(37322)),i=t(95164);function a(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(e.default.Fragment,null,e.default.createElement(i.Text,null,"1. \u76f4\u63a5\u4f20uiw icon name"),e.default.createElement(n.default,{icon:{actived:"smile",unactived:"smile-o"}}),e.default.createElement(i.Text,null,"2. Icon\u7ec4\u4ef6"),e.default.createElement(n.default,{icon:{unactived:e.default.createElement(r.default,{name:"star-off",fill:"skyblue"}),actived:e.default.createElement(r.default,{name:"star-on",fill:"skyblue"})}}))}}(),49:function(){var e=i(t(93539)),n=i(t(29038)),r=i(t(37322));function i(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(n.default,{defaultRating:3,resultRating:10,icon:{unactived:e.default.createElement(r.default,{name:"smile-o",fill:"skyblue"}),actived:e.default.createElement(r.default,{name:"smile",fill:"skyblue"})},onPress:console.log})}}(),71:function(){var e=r(t(93539)),n=r(t(29038));r(t(37322));function r(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(n.default,{tooltips:["0\u661f","1\u661f","2\u661f","3\u661f","4\u661f","5\u661f"],tooltipsStyle:{fontSize:20,color:"#e6c45d"}})}}(),86:function(){var e=r(t(93539)),n=r(t(29038));r(t(37322));function r(e){return e&&e.__esModule?e:{default:e}}return function(){return e.default.createElement(n.default,{defaultRating:3,color:"green",disabled:!0})}}()},data:{9:{name:9,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Rating = _interopRequireDefault(require("@uiw/react-native/lib/Rating"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Rating["default"], null);\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Rating } from '@uiw/react-native';\nfunction Demo() {\n  return (\n   <Rating />\n  );\n}\n\nexport default Demo\n"},24:{name:24,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Rating = _interopRequireDefault(require("@uiw/react-native/lib/Rating"));\nvar _Icon = _interopRequireDefault(require("@uiw/react-native/lib/Icon"));\nvar _reactNative = require("react-native");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "1. \\u76F4\\u63A5\\u4F20uiw icon name"), /*#__PURE__*/_react["default"].createElement(_Rating["default"], {\n    icon: {\n      actived: \'smile\',\n      unactived: \'smile-o\'\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "2. Icon\\u7EC4\\u4EF6"), /*#__PURE__*/_react["default"].createElement(_Rating["default"], {\n    icon: {\n      unactived: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {\n        name: "star-off",\n        fill: "skyblue"\n      }),\n      actived: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {\n        name: "star-on",\n        fill: "skyblue"\n      })\n    }\n  }));\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Rating, Icon } from '@uiw/react-native';\nimport {Text} from 'react-native'\nfunction Demo() {\n  return (\n    <>\n      <Text>1. \u76f4\u63a5\u4f20uiw icon name</Text>\n      <Rating icon={{actived: 'smile', unactived: 'smile-o' }} />\n      <Text>2. Icon\u7ec4\u4ef6</Text>\n       <Rating\n        icon={{\n          unactived: <Icon name=\"star-off\" fill=\"skyblue\" />,\n          actived: <Icon name=\"star-on\" fill=\"skyblue\" />,\n        }}\n      />\n    </>\n  );\n}\n\nexport default Demo"},49:{name:49,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Rating = _interopRequireDefault(require("@uiw/react-native/lib/Rating"));\nvar _Icon = _interopRequireDefault(require("@uiw/react-native/lib/Icon"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  return /*#__PURE__*/_react["default"].createElement(_Rating["default"], {\n    defaultRating: 3,\n    resultRating: 10,\n    icon: {\n      unactived: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {\n        name: "smile-o",\n        fill: "skyblue"\n      }),\n      actived: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {\n        name: "smile",\n        fill: "skyblue"\n      })\n    },\n    onPress: console.log\n  });\n}\nreturn Demo;',language:"jsx",value:'import React from \'react\';\nimport { Rating, Icon } from \'@uiw/react-native\';\nfunction Demo() {\n  return (\n    <Rating\n      defaultRating={3}\n      resultRating={10}\n      icon={{\n        unactived: <Icon name="smile-o" fill="skyblue" />,\n        actived: <Icon name="smile" fill="skyblue" />,\n      }}\n      onPress={console.log}\n      />\n  );\n}\n\nexport default Demo'},71:{name:71,meta:{},code:"\"use strict\";\n\nvar _react = _interopRequireDefault(require(\"react\"));\nvar _Rating = _interopRequireDefault(require(\"@uiw/react-native/lib/Rating\"));\nvar _Icon = _interopRequireDefault(require(\"@uiw/react-native/lib/Icon\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nfunction Demo() {\n  var desc = ['0\u661f', '1\u661f', '2\u661f', '3\u661f', '4\u661f', '5\u661f'];\n  return /*#__PURE__*/_react[\"default\"].createElement(_Rating[\"default\"], {\n    tooltips: desc,\n    tooltipsStyle: {\n      fontSize: 20,\n      color: '#e6c45d'\n    }\n  });\n}\nreturn Demo;",language:"jsx",value:"import React from 'react';\nimport { Rating, Icon } from '@uiw/react-native';\n\nfunction Demo() {\n  const desc = ['0\u661f', '1\u661f', '2\u661f', '3\u661f', '4\u661f', '5\u661f'];\n  return (\n    <Rating tooltips={desc}  tooltipsStyle={{ fontSize: 20, color: '#e6c45d' }} />\n  );\n}\nexport default Demo"},86:{name:86,meta:{},code:'"use strict";\n\nvar _react = _interopRequireDefault(require("react"));\nvar _Rating = _interopRequireDefault(require("@uiw/react-native/lib/Rating"));\nvar _Icon = _interopRequireDefault(require("@uiw/react-native/lib/Icon"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction Demo() {\n  var desc = [\'0\u661f\', \'1\u661f\', \'2\u661f\', \'3\u661f\', \'4\u661f\', \'5\u661f\'];\n  return /*#__PURE__*/_react["default"].createElement(_Rating["default"], {\n    defaultRating: 3,\n    color: "green",\n    disabled: true\n  });\n}\nreturn Demo;',language:"jsx",value:"import React from 'react';\nimport { Rating, Icon } from '@uiw/react-native';\nfunction Demo() {\n  const desc = ['0\u661f', '1\u661f', '2\u661f', '3\u661f', '4\u661f', '5\u661f'];\n  return (\n    <Rating defaultRating={3} color=\"green\" disabled />\n  );\n}\nexport default Demo"}},source:"Rating \u8bc4\u5206\n---\n\n\u5728\u4f60\u60f3\u7528\u4efb\u610f\u9700\u8981\u8bc4\u5206\u7684\u7684\u5730\u65b9\u4f7f\u7528\u3002\n\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx  mdx:preview\nimport React from 'react';\nimport { Rating } from '@uiw/react-native';\nfunction Demo() {\n  return (\n   <Rating />\n  );\n}\n\nexport default Demo\n\n```\n\n### \u6307\u5b9a Icon\n\n```jsx mdx:preview\nimport React from 'react';\nimport { Rating, Icon } from '@uiw/react-native';\nimport {Text} from 'react-native'\nfunction Demo() {\n  return (\n    <>\n      <Text>1. \u76f4\u63a5\u4f20uiw icon name</Text>\n      <Rating icon={{actived: 'smile', unactived: 'smile-o' }} />\n      <Text>2. Icon\u7ec4\u4ef6</Text>\n       <Rating\n        icon={{\n          unactived: <Icon name=\"star-off\" fill=\"skyblue\" />,\n          actived: <Icon name=\"star-on\" fill=\"skyblue\" />,\n        }}\n      />\n    </>\n  );\n}\n\nexport default Demo\n```\n\n### \u9ed8\u8ba4\u9009\u4e2d\u53ca\u603b\u6570\n\n```jsx mdx:preview\nimport React from 'react';\nimport { Rating, Icon } from '@uiw/react-native';\nfunction Demo() {\n  return (\n    <Rating\n      defaultRating={3}\n      resultRating={10}\n      icon={{\n        unactived: <Icon name=\"smile-o\" fill=\"skyblue\" />,\n        actived: <Icon name=\"smile\" fill=\"skyblue\" />,\n      }}\n      onPress={console.log}\n      />\n  );\n}\n\nexport default Demo\n```\n\n### \u8bc4\u5206\u7ec4\u4ef6\u52a0\u4e0a\u6587\u6848\u5c55\u793a\u53ca\u6837\u5f0f\u4fee\u6539\n\n```jsx mdx:preview\nimport React from 'react';\nimport { Rating, Icon } from '@uiw/react-native';\n\nfunction Demo() {\n  const desc = ['0\u661f', '1\u661f', '2\u661f', '3\u661f', '4\u661f', '5\u661f'];\n  return (\n    <Rating tooltips={desc}  tooltipsStyle={{ fontSize: 20, color: '#e6c45d' }} />\n  );\n}\nexport default Demo\n```\n\n### \u53ea\u8bfb\n\n```jsx mdx:preview\nimport React from 'react';\nimport { Rating, Icon } from '@uiw/react-native';\nfunction Demo() {\n  const desc = ['0\u661f', '1\u661f', '2\u661f', '3\u661f', '4\u661f', '5\u661f'];\n  return (\n    <Rating defaultRating={3} color=\"green\" disabled />\n  );\n}\nexport default Demo\n```\n\n### Props\n\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `defaultRating` | \u9ed8\u8ba4\u9009\u4e2d\u51e0\u4e2a | number | - |\n| `resultRating` | \u603b\u6570 | number | - |\n| `size` | icon \u5927\u5c0f | number | - |\n| `color` | icon \u989c\u8272 | string | - |\n| `icon` | `actived` \u6fc0\u6d3b `unactived` \u672a\u6fc0\u6d3b | obj | - |\n| `onPress` | \u9009\u4e2d\u4e8b\u4ef6 | fn | - |\n| `tooltips` | \u81ea\u5b9a\u4e49\u6bcf\u9879\u7684\u63d0\u793a\u4fe1\u606f | arr | - |\n| `resultRating` | \u53ea\u8bfb\u6a21\u5f0f | boolean | - |\n \n"},o=t(71027),l=function(){return(0,o.jsx)(i.Z,(0,r.Z)((0,r.Z)({},a),{},{path:"/packages/core/src/Rating/README.md"}))}},37322:function(e,n,t){"use strict";t.r(n);var r=t(18489),i=t(83738),a=(t(93539),t(36893)),o=t.n(a),l=t(80464),u=t(71027),c=["size","name","fill","stroke","xml","paths","color"];n.default=function(e){var n=e.size,t=void 0===n?26:n,f=e.name,s=e.fill,d=void 0===s?"#000000":s,m=e.stroke,_=e.xml,p=e.paths,v=e.color,R=(0,i.Z)(e,c);if(_)return(0,u.jsx)(a.SvgXml,(0,r.Z)({testID:"RNE__Icon__svgXml",xml:_,height:t,width:t},R));var g=p;if(!g){if(!f||!l[f])return null;g=l[f]}return(0,u.jsx)(o(),(0,r.Z)((0,r.Z)({testID:"RNE__Icon__svg",fill:v||d,stroke:m,height:t,width:t,viewBox:"0 0 20 20"},R),{},{children:g.map((function(e,n){return(0,u.jsx)(a.Path,{d:e,fillRule:"evenodd"},n)}))}))}},29038:function(e,n,t){"use strict";t.r(n);var r=t(31303),i=t(18489),a=t(50678),o=t(93539),l=t(12720),u=t(2894),c=t(62453),f=t(37068),s=t(37322),d=t(71027);n.default=function(e){var n=(0,o.useState)((function(){var n,t=e.icon&&e.icon.unactived||"star-off",r=e.icon&&e.icon.actived||"star-on";return{defaultRating:e.defaultRating||0,resultRating:e.resultRating||5,icon:[],size:null!==(n=e.size)&&void 0!==n?n:24,color:e.color||"#ebc445",typeIcon:[t,r],tooltips:e.tooltips,tooltipsText:"",disabled:!1}})),t=(0,a.Z)(n,2),f=t[0],_=t[1],p=(0,o.useState)(!0),v=(0,a.Z)(p,2),R=v[0],g=v[1],b=function(n){var t=f.resultRating,a=e.onPress,o=e.disabled,l=f.typeIcon[0],u=f.typeIcon[1];o&&_((0,i.Z)((0,i.Z)({},f),{},{disabled:o})),1===n&&R?(_((0,i.Z)((0,i.Z)({},f),{},{icon:[].concat((0,r.Z)(new Array(n).fill(u)),(0,r.Z)(new Array(t-n).fill(l)))})),null===a||void 0===a||a(1),f.tooltips&&_((0,i.Z)((0,i.Z)({},f),{},{tooltipsText:f.tooltips[n]})),g(!1)):1!==n||R?(_((0,i.Z)((0,i.Z)({},f),{},{icon:[].concat((0,r.Z)(new Array(n).fill(u)),(0,r.Z)(new Array(t-n).fill(l)))})),f.tooltips&&_((0,i.Z)((0,i.Z)({},f),{},{tooltipsText:f.tooltips[n]})),g(!0),null===a||void 0===a||a(n)):(_((0,i.Z)((0,i.Z)({},f),{},{icon:[].concat((0,r.Z)(new Array(n-1).fill(u)),(0,r.Z)(new Array(t-n+1).fill(l)))})),f.tooltips&&_((0,i.Z)((0,i.Z)({},f),{},{tooltipsText:f.tooltips[n-1]})),g(!0),null===a||void 0===a||a(0))};(0,o.useEffect)((function(){b(f.defaultRating)}),[]);var x=f.icon,j=f.size,w=f.color,D=f.tooltipsText,Z=f.disabled,E=e.tooltipsStyle;return(0,d.jsx)(l.Z,{children:(0,d.jsxs)(l.Z,{style:m.RatingContainer,children:[x.map((function(e,n){return(0,d.jsx)(u.Z,{onPress:function(){!1===Z&&b(n+1)},children:"string"===typeof e?(0,d.jsx)(s.default,{name:e,color:w,size:j}):e},n)})),(0,d.jsx)(c.Z,{style:[m.tooltipsText,{fontSize:j-5,color:w},E],children:D})]})})};var m=f.Z.create({RatingContainer:{flexDirection:"row",alignItems:"center"},tooltipsText:{marginHorizontal:10}})},50882:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=50882,e.exports=n}}]);
//# sourceMappingURL=8971.18c96545.chunk.js.map