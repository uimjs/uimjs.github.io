(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7755],{85480:function(e,t,r){"use strict";var n,o,a=r(18489),i=r(83738),u=r(17186),c=r(93908),l=r(53929),s=r(98012),p=r(17285),f=r(84488),d=r(93539),y=r(74513),b=r(71027),m=["path"],_=["inline","node"],j=["data-meta"],v=l.ZP.div(n||(n=(0,u.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),h=(0,l.ZP)(c.Z)(o||(o=(0,u.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),x=function(e,t,r){return Reflect.has(e,t)?"true"===Reflect.get(e,t):r};t.Z=function(e){var t=e.path,r=(0,i.Z)(e,m),n=f.ZP.Preview,o=f.ZP.Code,u=f.ZP.Toolbar,c=(0,d.useRef)(null);return(0,b.jsxs)(v,{ref:c,children:[(0,b.jsx)(h,(0,a.Z)((0,a.Z)({},r),{},{disableCopy:!0,source:r.source,rehypeRewrite:function(e,t,r){if("element"===e.type&&r&&"root"===r.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var n=e.children&&e.children[0];n&&n.properties&&"true"===n.properties.ariaHidden&&(n.children=[])}},components:{code:function(e){var t,c=e.inline,l=e.node,s=(0,i.Z)(e,_),d=s["data-meta"],y=(0,i.Z)(s,j);if(c||!(0,p.pN)(d))return(0,b.jsx)("code",(0,a.Z)({},s));var m=null===(t=l.position)||void 0===t?void 0:t.start.line,v=(0,p.Mx)(d)||String(m),h=r.components["".concat(v)];if(v&&"function"===typeof h){var O=r.data[v].value||"",g=(0,p.aE)(d);return(0,b.jsxs)(f.ZP,{disableCheckered:x(g,"disableCheckered",!0),bordered:x(g,"bordered",!0),children:[(0,b.jsx)(n,{children:(0,b.jsx)(h,{})}),(0,b.jsx)(u,{text:O,copied:x(g,"copied",!0),children:g.title||"\u793a\u4f8b"}),(0,b.jsx)(o,{children:(0,b.jsx)("code",(0,a.Z)({},y))})]})}return(0,b.jsx)("code",(0,a.Z)({},y))}}})),(0,b.jsx)(y.Z,{path:t}),(0,b.jsx)(s.kF,{speed:500,children:function(e){var t=e.percent,r=e.scrollToTop;return(0,b.jsx)(s.Cd,{width:50,onClick:function(){return r()},format:function(){return(0,b.jsx)(s.JO,{type:"arrow-up"})},percent:t})}})]})}},59727:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(18489),o=r(85480),a={components:{8:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,n=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!==typeof t)return{default:t};var n=i(r);if(n&&n.has(t))return n.get(t);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var c=a?Object.getOwnPropertyDescriptor(t,u):null;c&&(c.get||c.set)?Object.defineProperty(o,u,c):o[u]=t[u]}o.default=t,n&&n.set(t,o);return o}(r(93539)),o=(t=r(24710))&&t.__esModule?t:{default:t},a=r(7804);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(t,r,n){return(r=function(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,u=[],c=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(s){l=!0,o=s}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}return function(){var e=s((0,n.useState)({expanded:!1,top:!1}),2),t=e[0],r=e[1];return n.default.createElement(a.View,{style:{height:100}},n.default.createElement(o.default,{expanded:t.expanded,onPress:function(){return r(c(c({},t),{},{expanded:!t.expanded}))},sectionHeader:n.default.createElement(a.Text,null,"\u70b9\u51fb\u6211"),top:t.top},n.default.createElement(a.Text,{style:{color:"red"}},"\u6709\u4e00\u5929\u8def\u6807\u8fc1\u4e86\u5e0c\u671b\u4f60\u80fd\u4ece\u5bb9\u3001\u6709\u4e00\u5929\u6865\u58a9\u65ad\u4e86\u5e0c\u671b\u4f60\u80fd\u6e21\u8d8a\u3001\u6709\u4e00\u5929\u680b\u6881\u5012\u4e86\u5e0c\u671b\u4f60\u80fd\u575a\u5f3a\u3001\u6709\u4e00\u5929\u671f\u5f85\u852b\u4e86\u5e0c\u671b\u4f60\u80fd\u7406\u89e3")))}}(),40:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,n=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!==typeof t)return{default:t};var n=i(r);if(n&&n.has(t))return n.get(t);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var c=a?Object.getOwnPropertyDescriptor(t,u):null;c&&(c.get||c.set)?Object.defineProperty(o,u,c):o[u]=t[u]}o.default=t,n&&n.set(t,o);return o}(r(93539)),o=(t=r(24710))&&t.__esModule?t:{default:t},a=r(7804);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(t,r,n){return(r=function(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}(r))in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,u=[],c=!0,l=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(s){l=!0,o=s}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}return function(){var e=s((0,n.useState)({expanded:!1,top:!0}),2),t=e[0],r=e[1];return n.default.createElement(a.View,{style:{height:100}},n.default.createElement(o.default,{expanded:t.expanded,onPress:function(){return r(c(c({},t),{},{expanded:!t.expanded}))},sectionHeader:n.default.createElement(a.Text,null,"\u6807\u9898 : \u70b9\u51fb\u6211"),top:t.top},n.default.createElement(a.Text,{style:{color:"red"}},"\u6709\u4e00\u5929\u8def\u6807\u8fc1\u4e86\u5e0c\u671b\u4f60\u80fd\u4ece\u5bb9\u3001\u6709\u4e00\u5929\u6865\u58a9\u65ad\u4e86\u5e0c\u671b\u4f60\u80fd\u6e21\u8d8a\u3001\u6709\u4e00\u5929\u680b\u6881\u5012\u4e86\u5e0c\u671b\u4f60\u80fd\u575a\u5f3a\u3001\u6709\u4e00\u5929\u671f\u5f85\u852b\u4e86\u5e0c\u671b\u4f60\u80fd\u7406\u89e3")))}}()},data:{8:{name:8,meta:{background:"#bebebe29"},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _ExpandableSection = _interopRequireDefault(require("@uiw/react-native/lib/ExpandableSection"));\nvar _reactNative = require("react-native");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar Demo = function Demo() {\n  var _useState = (0, _react.useState)({\n      expanded: false,\n      top: false\n    }),\n    _useState2 = _slicedToArray(_useState, 2),\n    state = _useState2[0],\n    setState = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {\n    style: {\n      height: 100\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_ExpandableSection["default"], {\n    expanded: state.expanded,\n    onPress: function onPress() {\n      return setState(_objectSpread(_objectSpread({}, state), {}, {\n        expanded: !state.expanded\n      }));\n    },\n    sectionHeader: /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "\\u70B9\\u51FB\\u6211"),\n    top: state.top\n  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {\n    style: {\n      color: \'red\'\n    }\n  }, "\\u6709\\u4E00\\u5929\\u8DEF\\u6807\\u8FC1\\u4E86\\u5E0C\\u671B\\u4F60\\u80FD\\u4ECE\\u5BB9\\u3001\\u6709\\u4E00\\u5929\\u6865\\u58A9\\u65AD\\u4E86\\u5E0C\\u671B\\u4F60\\u80FD\\u6E21\\u8D8A\\u3001\\u6709\\u4E00\\u5929\\u680B\\u6881\\u5012\\u4E86\\u5E0C\\u671B\\u4F60\\u80FD\\u575A\\u5F3A\\u3001\\u6709\\u4E00\\u5929\\u671F\\u5F85\\u852B\\u4E86\\u5E0C\\u671B\\u4F60\\u80FD\\u7406\\u89E3")));\n};\nreturn Demo;',language:"jsx",value:"import React, {useState} from 'react';\nimport { ExpandableSection } from '@uiw/react-native';\nimport { View, Text } from 'react-native'\n\nconst Demo = () => {\n  const [state, setState] = useState({\n    expanded: false,\n    top: false\n  })\n\n  return (\n    <View style={{height: 100}}>\n      <ExpandableSection\n        expanded={state.expanded}\n        onPress={() => setState({...state, expanded: !state.expanded })}\n        sectionHeader={<Text >\u70b9\u51fb\u6211</Text>}\n        top={state.top}\n      >\n        <Text style={{ color: 'red' }}>\n          \u6709\u4e00\u5929\u8def\u6807\u8fc1\u4e86\u5e0c\u671b\u4f60\u80fd\u4ece\u5bb9\u3001\u6709\u4e00\u5929\u6865\u58a9\u65ad\u4e86\u5e0c\u671b\u4f60\u80fd\u6e21\u8d8a\u3001\u6709\u4e00\u5929\u680b\u6881\u5012\u4e86\u5e0c\u671b\u4f60\u80fd\u575a\u5f3a\u3001\u6709\u4e00\u5929\u671f\u5f85\u852b\u4e86\u5e0c\u671b\u4f60\u80fd\u7406\u89e3\n        </Text>\n      </ExpandableSection>\n    </View>\n  )\n}\n\nexport default Demo"},40:{name:40,meta:{background:"#bebebe29"},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _ExpandableSection = _interopRequireDefault(require("@uiw/react-native/lib/ExpandableSection"));\nvar _reactNative = require("react-native");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar Demo = function Demo() {\n  var _useState = (0, _react.useState)({\n      expanded: false,\n      top: true\n    }),\n    _useState2 = _slicedToArray(_useState, 2),\n    state = _useState2[0],\n    setState = _useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {\n    style: {\n      height: 100\n    }\n  }, /*#__PURE__*/_react["default"].createElement(_ExpandableSection["default"], {\n    expanded: state.expanded,\n    onPress: function onPress() {\n      return setState(_objectSpread(_objectSpread({}, state), {}, {\n        expanded: !state.expanded\n      }));\n    },\n    sectionHeader: /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "\\u6807\\u9898 : \\u70B9\\u51FB\\u6211"),\n    top: state.top\n  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {\n    style: {\n      color: \'red\'\n    }\n  }, "\\u6709\\u4E00\\u5929\\u8DEF\\u6807\\u8FC1\\u4E86\\u5E0C\\u671B\\u4F60\\u80FD\\u4ECE\\u5BB9\\u3001\\u6709\\u4E00\\u5929\\u6865\\u58A9\\u65AD\\u4E86\\u5E0C\\u671B\\u4F60\\u80FD\\u6E21\\u8D8A\\u3001\\u6709\\u4E00\\u5929\\u680B\\u6881\\u5012\\u4E86\\u5E0C\\u671B\\u4F60\\u80FD\\u575A\\u5F3A\\u3001\\u6709\\u4E00\\u5929\\u671F\\u5F85\\u852B\\u4E86\\u5E0C\\u671B\\u4F60\\u80FD\\u7406\\u89E3")));\n};\nreturn Demo;',language:"jsx",value:"import React, {useState} from 'react';\nimport { ExpandableSection } from '@uiw/react-native';\nimport { View, Text } from 'react-native'\n\nconst Demo = () => {\n  const [state, setState] = useState({\n    expanded: false,\n    top: true\n  })\n\n  return (\n    <View style={{height: 100}}>\n      <ExpandableSection\n        expanded={state.expanded}\n        onPress={() => setState({...state, expanded: !state.expanded })}\n        sectionHeader={<Text >\u6807\u9898 : \u70b9\u51fb\u6211</Text>}\n        top={state.top}\n      >\n        <Text style={{ color: 'red' }}>\n          \u6709\u4e00\u5929\u8def\u6807\u8fc1\u4e86\u5e0c\u671b\u4f60\u80fd\u4ece\u5bb9\u3001\u6709\u4e00\u5929\u6865\u58a9\u65ad\u4e86\u5e0c\u671b\u4f60\u80fd\u6e21\u8d8a\u3001\u6709\u4e00\u5929\u680b\u6881\u5012\u4e86\u5e0c\u671b\u4f60\u80fd\u575a\u5f3a\u3001\u6709\u4e00\u5929\u671f\u5f85\u852b\u4e86\u5e0c\u671b\u4f60\u80fd\u7406\u89e3\n        </Text>\n      </ExpandableSection>\n    </View>\n  )\n}\n\nexport default Demo"}},source:"ExpandableSection \u5c55\u5f00\u7f29\u653e\n---\n\nExpandableSection \u7ec4\u4ef6\u4ee5\u5728 sectionHeader\u6807\u9898 \u4e0b\u65b9\u6216\u4e0a\u65b9\u5448\u73b0\u5c55\u5f00\u7684\u5185\u5bb9\u90e8\u5206\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx mdx:preview&background=#bebebe29\nimport React, {useState} from 'react';\nimport { ExpandableSection } from '@uiw/react-native';\nimport { View, Text } from 'react-native'\n\nconst Demo = () => {\n  const [state, setState] = useState({\n    expanded: false,\n    top: false\n  })\n\n  return (\n    <View style={{height: 100}}>\n      <ExpandableSection\n        expanded={state.expanded}\n        onPress={() => setState({...state, expanded: !state.expanded })}\n        sectionHeader={<Text >\u70b9\u51fb\u6211</Text>}\n        top={state.top}\n      >\n        <Text style={{ color: 'red' }}>\n          \u6709\u4e00\u5929\u8def\u6807\u8fc1\u4e86\u5e0c\u671b\u4f60\u80fd\u4ece\u5bb9\u3001\u6709\u4e00\u5929\u6865\u58a9\u65ad\u4e86\u5e0c\u671b\u4f60\u80fd\u6e21\u8d8a\u3001\u6709\u4e00\u5929\u680b\u6881\u5012\u4e86\u5e0c\u671b\u4f60\u80fd\u575a\u5f3a\u3001\u6709\u4e00\u5929\u671f\u5f85\u852b\u4e86\u5e0c\u671b\u4f60\u80fd\u7406\u89e3\n        </Text>\n      </ExpandableSection>\n    </View>\n  )\n}\n\nexport default Demo\n```\n\n### \u663e\u793a\u4f4d\u7f6e\n\n```jsx mdx:preview&background=#bebebe29\nimport React, {useState} from 'react';\nimport { ExpandableSection } from '@uiw/react-native';\nimport { View, Text } from 'react-native'\n\nconst Demo = () => {\n  const [state, setState] = useState({\n    expanded: false,\n    top: true\n  })\n\n  return (\n    <View style={{height: 100}}>\n      <ExpandableSection\n        expanded={state.expanded}\n        onPress={() => setState({...state, expanded: !state.expanded })}\n        sectionHeader={<Text >\u6807\u9898 : \u70b9\u51fb\u6211</Text>}\n        top={state.top}\n      >\n        <Text style={{ color: 'red' }}>\n          \u6709\u4e00\u5929\u8def\u6807\u8fc1\u4e86\u5e0c\u671b\u4f60\u80fd\u4ece\u5bb9\u3001\u6709\u4e00\u5929\u6865\u58a9\u65ad\u4e86\u5e0c\u671b\u4f60\u80fd\u6e21\u8d8a\u3001\u6709\u4e00\u5929\u680b\u6881\u5012\u4e86\u5e0c\u671b\u4f60\u80fd\u575a\u5f3a\u3001\u6709\u4e00\u5929\u671f\u5f85\u852b\u4e86\u5e0c\u671b\u4f60\u80fd\u7406\u89e3\n        </Text>\n      </ExpandableSection>\n    </View>\n  )\n}\n\nexport default Demo\n```\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `sectionHeader` | \u8bbe\u7f6e\u6807\u9898 | JSX.Element | - |\n| `children` | \u5c55\u5f00\u5185\u5bb9| ReactNode | - |\n| `expanded` | \u662f\u5426\u5c55\u5f00 | boolean | - |\n| `top` | \u5c55\u5f00\u540e\u663e\u793a\u4f4d\u7f6e \u6807\u9898\u4e0a\u6216\u6807\u9898\u4e0b | boolean | - |\n| `onPress` | \u70b9\u51fb\u4e8b\u4ef6 | void | - |\n"},i=r(71027),u=function(){return(0,i.jsx)(o.Z,(0,n.Z)((0,n.Z)({},a),{},{path:"/packages/core/src/ExpandableSection/README.md"}))}},24710:function(e,t,r){"use strict";r.r(t);var n=r(18489),o=(r(93539),r(86404)),a=r(12720),i=r(2894),u=r(37068),c=r(71027);t.default=function(e){var t=e.expanded,r=void 0!==t&&t,u=e.sectionHeader,s=e.children,p=e.top,f=void 0!==p&&p;return(0,c.jsxs)(a.Z,{style:l.container,children:[f&&r&&s,(0,c.jsx)(i.Z,{onPress:function(){var t;null===(t=e.onPress)||void 0===t||t.call(e),o.Z.configureNext((0,n.Z)((0,n.Z)({},o.Z.Presets.easeInEaseOut),{},{duration:300}))},children:u}),!f&&r&&s]})};var l=u.Z.create({container:{overflow:"hidden"}})},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t}}]);
//# sourceMappingURL=7755.14fdce5f.chunk.js.map