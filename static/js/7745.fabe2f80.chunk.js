(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7745],{59940:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(1413),o=r(45987),a=r(30168),i=r(70377),u=r(53929),l=r(78069),c=r(17285),f=r(61366),s=r(93539),p=r(71027);function d(e){var t=e.path,r=/^http/.test(t||"")?t:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===t||void 0===t?void 0:t.replace(/^\//,""));return(0,p.jsxs)("div",{style:{paddingBlock:20},children:[t&&r&&(0,p.jsx)("a",{href:r,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,p.jsx)(l.iz,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var y,b,_=["path"],m=["inline","node"],v=["data-meta"],h=u.ZP.div(y||(y=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),j=(0,u.ZP)(i.Z)(b||(b=(0,a.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),g=function(e,t,r){return Reflect.has(e,t)?"true"===Reflect.get(e,t):r},w=function(e){var t=e.path,r=(0,o.Z)(e,_),a=(0,s.useRef)(null);return(0,p.jsxs)(h,{ref:a,children:[(0,p.jsx)(j,(0,n.Z)((0,n.Z)({},r),{},{disableCopy:!0,source:r.source,rehypeRewrite:function(e,t,r){if("element"===e.type&&r&&"root"===r.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var n=e.children&&e.children[0];n&&n.properties&&"true"===n.properties.ariaHidden&&(n.children=[])}},components:{code:function(e){var t,a=e.inline,i=e.node,u=(0,o.Z)(e,m),l=u["data-meta"],s=(0,o.Z)(u,v);if(a||!(0,c.pN)(l))return(0,p.jsx)("code",(0,n.Z)({},u));var d=null===(t=i.position)||void 0===t?void 0:t.start.line,y=(0,c.Mx)(l)||String(d),b=r.components["".concat(y)];if(y&&"function"===typeof b){var _=r.data[y].value||"",h=(0,c.aE)(l);return(0,p.jsx)(f.Z,{disableCheckered:g(h,"disableCheckered",!0),disableToolbar:g(h,"disableToolbar",!1),disableCode:g(h,"disableCode",!1),disablePreview:g(h,"disablePreview",!1),bordered:g(h,"bordered",!0),copied:g(h,"copied",!0),background:h.background,toolbar:h.title||"\u793a\u4f8b",code:(0,p.jsx)("code",(0,n.Z)({},s)),text:_,children:(0,p.jsx)(b,{})})}return(0,p.jsx)("code",(0,n.Z)({},s))}}})),(0,p.jsx)(d,{path:t}),(0,p.jsx)(l.kF,{speed:500,children:function(e){var t=e.percent,r=e.scrollToTop;return(0,p.jsx)(l.Cd,{width:50,onClick:function(){return r()},format:function(){return(0,p.jsx)(l.JO,{type:"arrow-up"})},percent:t})}})]})}},48656:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(1413),o=r(59940),a={components:{8:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,n=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!==typeof t)return{default:t};var n=i(r);if(n&&n.has(t))return n.get(t);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var l=a?Object.getOwnPropertyDescriptor(t,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=t[u]}o.default=t,n&&n.set(t,o);return o}(r(93539)),o=r(95164),a=(t=r(33205))&&t.__esModule?t:{default:t};function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,u=[],l=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(f){c=!0,o=f}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}return function(){var e=u(n.default.useState(666),2),t=e[0],r=e[1];return n.default.createElement(o.View,null,n.default.createElement(o.Text,null,"\u53d7\u63a7\u7ec4\u4ef6"),n.default.createElement(a.default,{value:t,onChange:function(e){return r(e.target.value)},containerStyle:{marginBottom:10}}),n.default.createElement(o.Text,null,"\u540e\u7f00"),n.default.createElement(a.default,{extraEnd:"\u5c0f\u6570",placeholder:"\u8bf7\u8f93\u5165",containerStyle:{marginBottom:10}}),n.default.createElement(o.Text,null,"\u9519\u8bef\u9519\u8bef"),n.default.createElement(a.default,{error:!0,containerStyle:{marginBottom:10}}))}}(),29:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,n=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!==typeof t)return{default:t};var n=i(r);if(n&&n.has(t))return n.get(t);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var l=a?Object.getOwnPropertyDescriptor(t,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=t[u]}o.default=t,n&&n.set(t,o);return o}(r(93539)),o=r(95164),a=(t=r(33205))&&t.__esModule?t:{default:t};function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function u(e,t){if(r=e,!(null!=(n=t)&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](r):r instanceof n))throw new TypeError("Cannot call a class as a function");var r,n}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,c(n.key),n)}}function c(t){var r=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"===e(r)?r:String(r)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function s(t){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p(t);if(r){var a=p(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(t,r){if(r&&("object"===e(r)||"function"===typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)}(this,n)}}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}var d=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(p,e);var t,r,i,c=s(p);function p(){return u(this,p),c.apply(this,arguments)}return t=p,(r=[{key:"render",value:function(){return n.default.createElement(o.View,null,n.default.createElement(o.Text,null,"\u4e0b\u8fb9\u6846"),n.default.createElement(a.default,{border:"bottom",containerStyle:{marginBottom:10}}),n.default.createElement(o.Text,null,"\u5de6\u8fb9\u6846"),n.default.createElement(a.default,{border:"left",borderColor:"red"}))}}])&&l(t.prototype,r),i&&l(t,i),Object.defineProperty(t,"prototype",{writable:!1}),p}(n.Component);return d}(),48:function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}var t,n=function(t,r){if(!r&&t&&t.__esModule)return t;if(null===t||"object"!==e(t)&&"function"!==typeof t)return{default:t};var n=a(r);if(n&&n.has(t))return n.get(t);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var l=i?Object.getOwnPropertyDescriptor(t,u):null;l&&(l.get||l.set)?Object.defineProperty(o,u,l):o[u]=t[u]}o.default=t,n&&n.set(t,o);return o}(r(93539)),o=(r(95164),(t=r(33205))&&t.__esModule?t:{default:t});function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(a=function(e){return e?r:t})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,u=[],l=!0,c=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(u.push(n.value),u.length!==t);l=!0);}catch(f){c=!0,o=f}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(c)throw o}}return u}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}return function(){var e=i(n.default.useState(),2),t=e[0];e[1];return n.default.createElement(o.default,{value:t,border:"bottom",rule:/^[\d]+$/,wrongfulHandle:function(){alert("\u8bf7\u8f93\u5165\u6570\u5b57")},placeholder:"\u8bf7\u8f93\u5165\u6570\u5b57"})}}()},data:{8:{name:8,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactNative = require("react-native");\nvar _Input = _interopRequireDefault(require("@uiw/react-native/lib/Input"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar Demo = function Demo() {\n  var _React$useState = _react["default"].useState(666),\n    _React$useState2 = _slicedToArray(_React$useState, 2),\n    value = _React$useState2[0],\n    setValue = _React$useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "\\u53D7\\u63A7\\u7EC4\\u4EF6"), /*#__PURE__*/_react["default"].createElement(_Input["default"], {\n    value: value,\n    onChange: function onChange(e) {\n      return setValue(e.target.value);\n    },\n    containerStyle: {\n      marginBottom: 10\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "\\u540E\\u7F00"), /*#__PURE__*/_react["default"].createElement(_Input["default"], {\n    extraEnd: "\\u5C0F\\u6570",\n    placeholder: "\\u8BF7\\u8F93\\u5165",\n    containerStyle: {\n      marginBottom: 10\n    }\n  }), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "\\u9519\\u8BEF\\u9519\\u8BEF"), /*#__PURE__*/_react["default"].createElement(_Input["default"], {\n    error: true,\n    containerStyle: {\n      marginBottom: 10\n    }\n  }));\n};\nreturn Demo;',language:"jsx",value:'import React,{ Component } from "react"\nimport { View, Text } from \'react-native\';\nimport  { Input  }  from \'@uiw/react-native\';\n\nconst Demo = () => {\n  const [value, setValue] = React.useState(666)\n  return <View>\n    <Text>\u53d7\u63a7\u7ec4\u4ef6</Text>\n    <Input  value={value} onChange={(e) => setValue(e.target.value)} containerStyle={{marginBottom: 10}} />\n    <Text>\u540e\u7f00</Text>\n    <Input extraEnd="\u5c0f\u6570" placeholder="\u8bf7\u8f93\u5165" containerStyle={{marginBottom: 10}} />\n    <Text>\u9519\u8bef\u9519\u8bef</Text>\n    <Input error containerStyle={{marginBottom: 10}} />\n  </View>\n}\nexport default Demo'},29:{name:29,meta:{},code:'"use strict";\n\nfunction _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactNative = require("react-native");\nvar _Input = _interopRequireDefault(require("@uiw/react-native/lib/Input"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\nvar BasicInputExample = /*#__PURE__*/function (_Component) {\n  _inherits(BasicInputExample, _Component);\n  var _super = _createSuper(BasicInputExample);\n  function BasicInputExample() {\n    _classCallCheck(this, BasicInputExample);\n    return _super.apply(this, arguments);\n  }\n  _createClass(BasicInputExample, [{\n    key: "render",\n    value: function render() {\n      return /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "\\u4E0B\\u8FB9\\u6846"), /*#__PURE__*/_react["default"].createElement(_Input["default"], {\n        border: "bottom",\n        containerStyle: {\n          marginBottom: 10\n        }\n      }), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "\\u5DE6\\u8FB9\\u6846"), /*#__PURE__*/_react["default"].createElement(_Input["default"], {\n        border: "left",\n        borderColor: "red"\n      }));\n    }\n  }]);\n  return BasicInputExample;\n}(_react.Component);\nreturn BasicInputExample;',language:"jsx",value:'import React,{ Component } from "react"\nimport { View, Text } from \'react-native\';\nimport  { Input }  from \'@uiw/react-native\';\n\n class BasicInputExample extends Component {\n  render() {\n    return <View>\n      <Text>\u4e0b\u8fb9\u6846</Text>\n      <Input border="bottom" containerStyle={{marginBottom: 10}}  />\n      <Text>\u5de6\u8fb9\u6846</Text>\n      <Input border="left" borderColor="red"  />\n    </View>\n  }\n}\nexport default BasicInputExample'},48:{name:48,meta:{},code:'"use strict";\n\nfunction _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }\nvar _react = _interopRequireWildcard(require("react"));\nvar _reactNative = require("react-native");\nvar _Input = _interopRequireDefault(require("@uiw/react-native/lib/Input"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }\nfunction _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }\nfunction _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\nvar Demo = function Demo() {\n  var _React$useState = _react["default"].useState(),\n    _React$useState2 = _slicedToArray(_React$useState, 2),\n    value = _React$useState2[0],\n    setValue = _React$useState2[1];\n  return /*#__PURE__*/_react["default"].createElement(_Input["default"], {\n    value: value,\n    border: "bottom",\n    rule: /^[\\d]+$/,\n    wrongfulHandle: function wrongfulHandle() {\n      alert(\'\u8bf7\u8f93\u5165\u6570\u5b57\');\n    },\n    placeholder: "\\u8BF7\\u8F93\\u5165\\u6570\\u5B57"\n  });\n};\nreturn Demo;',language:"jsx",value:"import React,{ Component } from \"react\"\nimport { View, Text } from 'react-native';\nimport  { Input }  from '@uiw/react-native';\n\nconst Demo = () => {\n  const [value, setValue] = React.useState()\n  return <Input\n      value={value}\n      border=\"bottom\"\n      rule={/^[\\d]+$/}\n      wrongfulHandle={() => {alert('\u8bf7\u8f93\u5165\u6570\u5b57')}}\n      placeholder=\"\u8bf7\u8f93\u5165\u6570\u5b57\"\n    />\n}\nexport default Demo"}},source:"Input \u6587\u672c\u8f93\u5165\n---\n\n\u5355\u884c\u6587\u672c\u8f93\u5165\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx mdx:preview\nimport React,{ Component } from \"react\"\nimport { View, Text } from 'react-native';\nimport  { Input  }  from '@uiw/react-native';\n\nconst Demo = () => {\n  const [value, setValue] = React.useState(666)\n  return <View>\n    <Text>\u53d7\u63a7\u7ec4\u4ef6</Text>\n    <Input  value={value} onChange={(e) => setValue(e.target.value)} containerStyle={{marginBottom: 10}} />\n    <Text>\u540e\u7f00</Text>\n    <Input extraEnd=\"\u5c0f\u6570\" placeholder=\"\u8bf7\u8f93\u5165\" containerStyle={{marginBottom: 10}} />\n    <Text>\u9519\u8bef\u9519\u8bef</Text>\n    <Input error containerStyle={{marginBottom: 10}} />\n  </View>\n}\nexport default Demo\n```\n\n### \u8bbe\u7f6e\u8fb9\u6846\n\n```jsx mdx:preview\nimport React,{ Component } from \"react\"\nimport { View, Text } from 'react-native';\nimport  { Input }  from '@uiw/react-native';\n\n class BasicInputExample extends Component {\n  render() {\n    return <View>\n      <Text>\u4e0b\u8fb9\u6846</Text>\n      <Input border=\"bottom\" containerStyle={{marginBottom: 10}}  />\n      <Text>\u5de6\u8fb9\u6846</Text>\n      <Input border=\"left\" borderColor=\"red\"  />\n    </View>\n  }\n}\nexport default BasicInputExample\n```\n### \u6821\u9a8c\u8f93\u5165\u5185\u5bb9\n\n```jsx mdx:preview\nimport React,{ Component } from \"react\"\nimport { View, Text } from 'react-native';\nimport  { Input }  from '@uiw/react-native';\n\nconst Demo = () => {\n  const [value, setValue] = React.useState()\n  return <Input\n      value={value}\n      border=\"bottom\"\n      rule={/^[\\d]+$/}\n      wrongfulHandle={() => {alert('\u8bf7\u8f93\u5165\u6570\u5b57')}}\n      placeholder=\"\u8bf7\u8f93\u5165\u6570\u5b57\"\n    />\n}\nexport default Demo\n```\n\n\n### Props\n\n> \u66f4\u591a react-native Input \u5c5e\u6027\u8bf7\u53c2\u8003 react-native TextInput (https://www.react-native.cn/docs/textinput)\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `value` | \u8f93\u5165\u6846\u9ed8\u8ba4\u503c | string | - |\n| `rule` | \u9650\u5236\u8f93\u5165\u6761\u4ef6 | RegExp  | - |\n| `wrongfulHandle` | \u8f93\u5165\u4e0d\u5408\u6cd5\u65f6\u89e6\u53d1\u65b9\u6cd5 | Function | - |\n| `disabled` | \u6587\u672c\u6846\u662f\u5426\u53ef\u7f16\u8f91 | boolean  | - |\n| `clearText` | \u5982\u679c\u4e3a true\uff0c\u6bcf\u6b21\u5f00\u59cb\u8f93\u5165\u7684\u65f6\u5019\u90fd\u4f1a\u6e05\u9664\u6587\u672c\u6846\u7684\u5185\u5bb9\u3002 | boolean  | - |\n| `error` | \u663e\u793a\u9519\u8bef | boolean | - |\n| `renderError` | \u81ea\u5b9a\u4e49\u9519\u8bef\u63d0\u793a | React.ReactNode | - |\n| `border` | \u8fb9\u6846 | `'bottom'|'top'|'left'|'right'|null|'always'` | - |\n| `borderColor` | \u8fb9\u6846\u989c\u8272 | string | - |\n| `clear` | \u662f\u5426\u663e\u793a\u6e05\u9664\u6309\u94ae | boolean | - |\n| `clearStyle` | \u6e05\u9664\u6309\u94ae\u6837\u5f0f | StyleProp<`TextStyle`> | - |\n| `renderClear` | \u81ea\u5b9a\u4e49\u6e05\u9664\u5143\u7d20 | React.ReactNode | - |\n| `extraStart` | \u8f93\u5165\u6846\u524d\u7f00\u7684\u989d\u5916\u7684\u4fe1\u606f | string \\| React.ReactNode | - |\n| `extraEnd` | \u8f93\u5165\u6846\u672b\u5c3e\u989d\u5916\u7684\u4fe1\u606f | string \\| React.ReactNode | - |\n| `inputRef` | \u8f93\u5165\u6846ref | React.RefObject<`TextInput`> | - |\n| `maxLength` | \u9650\u5236\u6587\u672c\u6846\u4e2d\u6700\u591a\u7684\u5b57\u7b26\u6570 | number | - |\n| `placeholder` | \u5982\u679c\u6ca1\u6709\u4efb\u4f55\u6587\u5b57\u8f93\u5165\uff0c\u4f1a\u663e\u793a\u6b64\u5b57\u7b26\u4e32 | string | - |\n| `style` | \u8f93\u5165\u6846\u6837\u5f0f | `StyleProp<TextStyle>` | - |\n| `containerStyle` | \u5bb9\u5668\u6837\u5f0f | `StyleProp<ViewStyle>` | - |\n\n<<<<<<< HEAD\n\n> \u66f4\u591a react-native Input \u5c5e\u6027\u8bf7\u53c2\u8003 react-native TextInput (https://www.react-native.cn/docs/textinput)\n=======\n>>>>>>> dev\n"},i=r(71027),u=function(){return(0,i.jsx)(o.Z,(0,n.Z)((0,n.Z)({},a),{},{path:"/packages/core/src/Input/README.md"}))}},37322:function(e,t,r){"use strict";r.r(t);var n=r(1413),o=r(45987),a=(r(93539),r(36893)),i=r.n(a),u=r(80464),l=r(71027),c=["size","name","fill","stroke","xml","paths","color"];t.default=function(e){var t=e.size,r=void 0===t?26:t,f=e.name,s=e.fill,p=void 0===s?"#000000":s,d=e.stroke,y=e.xml,b=e.paths,_=e.color,m=(0,o.Z)(e,c);if(y)return(0,l.jsx)(a.SvgXml,(0,n.Z)({testID:"RNE__Icon__svgXml",xml:y,height:r,width:r},m));var v=b;if(!v){if(!f||!u[f])return null;v=u[f]}return(0,l.jsx)(i(),(0,n.Z)((0,n.Z)({testID:"RNE__Icon__svg",fill:_||p,stroke:d,height:r,width:r,viewBox:"0 0 20 20"},m),{},{children:v.map((function(e,t){return(0,l.jsx)(a.Path,{d:e,fillRule:"evenodd"},t)}))}))}},33205:function(e,t,r){"use strict";r.r(t);var n=r(1413),o=r(29439),a=r(45987),i=r(93539),u=r(37068),l=r(12720),c=r(62453),f=r(28850),s=r(2894),p=r(37322),d=r(71027),y=["wrongfulHandle","rule","value","onChangeText","onFocus","clearText","disabled","clear","clearStyle","renderClear","extraStart","extraEnd","style","containerStyle","border","borderColor","error","renderError","inputRef"];t.default=function(e){var t,r=e.wrongfulHandle,_=e.rule,m=e.value,v=e.onChangeText,h=e.onFocus,j=e.clearText,g=e.disabled,w=void 0!==g&&g,x=e.clear,O=e.clearStyle,S=e.renderClear,I=e.extraStart,R=e.extraEnd,P=e.style,E=void 0===P?[]:P,C=e.containerStyle,T=e.border,k=void 0===T?"bottom":T,D=e.borderColor,B=void 0===D?"#ccc":D,A=e.error,W=void 0!==A&&A,M=e.renderError,N=e.inputRef,Z=(0,a.Z)(e,y),q=(0,i.useState)(m),V=(0,o.Z)(q,2),U=V[0],L=V[1],$=(0,i.useState)("state"),F=(0,o.Z)($,2),H=F[0],z=F[1];(0,i.useEffect)((function(){"state"===H&&m===U&&z("props"),m!==U&&("state"===H||L(m),z("props"))}),[m,H]);var K=u.Z.flatten(E).fontSize||14,X=(null===(t=u.Z.flatten(C))||void 0===t?void 0:t.height)||30,G=function(e){var t=!0;if(_ instanceof RegExp&&(t=_.test(e)),"function"===typeof _&&(t=_(e)),t)return L(e),z("state"),null===v||void 0===v||v(e),!1;L(U||""),z("state"),null===v||void 0===v||v(U||""),null===r||void 0===r||r()};return(0,d.jsxs)(l.Z,{style:[{flexDirection:"row",backgroundColor:"#fff",alignItems:"center",paddingVertical:0,height:X},C],testID:"RNE__Input__wrap",children:[(0,d.jsxs)(l.Z,{style:[b.container,{flex:1,borderColor:B},k?b[k]:{}],testID:"RNE__Input__view",children:["string"===typeof I?(0,d.jsx)(c.Z,{style:{color:"#888888",fontSize:K},children:I}):I,(0,d.jsx)(f.Z,(0,n.Z)((0,n.Z)({testID:"RNE__Input__input"},Z),{},{ref:N,editable:!w,value:U,onChangeText:G,onFocus:function(e){j&&(L(""),z("state"),null===v||void 0===v||v("")),h&&h(e)},style:[{fontSize:K},b.input,E]})),"string"===typeof R?(0,d.jsx)(c.Z,{style:{color:"#888888",fontSize:K},children:R}):R,W&&(M||(0,d.jsx)(p.default,{name:"circle-close",color:"#dc3545"}))]}),x&&(0,d.jsx)(s.Z,{onPress:function(){L(""),z("state"),null===G||void 0===G||G("")},children:S||(0,d.jsx)(c.Z,{style:[{color:"#888888",fontSize:K},O],children:"\u6e05\u9664"})})]})};var b=u.Z.create({container:{height:"100%",marginTop:0,marginBottom:0,flexDirection:"row",alignItems:"center",backgroundColor:"transparent"},input:{flex:1,color:"#000",backgroundColor:"transparent",paddingVertical:0},always:{borderWidth:1},bottom:{borderBottomWidth:1},top:{borderTopWidth:1},left:{borderLeftWidth:1},right:{borderRightWidth:1},inputErrorColor:{color:"#f50"}})},50882:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=50882,e.exports=t}}]);
//# sourceMappingURL=7745.fabe2f80.chunk.js.map