(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8493],{59940:function(n,e,t){"use strict";t.d(e,{Z:function(){return y}});var r=t(1413),a=t(45987),o=t(30168),i=t(70377),l=t(53929),c=t(78069),p=t(17285),d=t(61366),h=t(93539),s=t(71027);function u(n){var e=n.path,t=/^http/.test(e||"")?e:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===e||void 0===e?void 0:e.replace(/^\//,""));return(0,s.jsxs)("div",{style:{paddingBlock:20},children:[e&&t&&(0,s.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,s.jsx)(c.iz,{type:"vertical"}),(0,s.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var m,f,x=["path"],v=["inline","node"],F=["data-meta"],C=l.ZP.div(m||(m=(0,o.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),b=(0,l.ZP)(i.Z)(f||(f=(0,o.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),w=function(n,e,t){return Reflect.has(n,e)?"true"===Reflect.get(n,e):t},y=function(n){var e=n.path,t=(0,a.Z)(n,x),o=(0,h.useRef)(null);return(0,s.jsxs)(C,{ref:o,children:[(0,s.jsx)(b,(0,r.Z)((0,r.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(n,e,t){if("element"===n.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(n.tagName)){var r=n.children&&n.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(n){var e,o=n.inline,i=n.node,l=(0,a.Z)(n,v),c=l["data-meta"],h=(0,a.Z)(l,F);if(o||!(0,p.pN)(c))return(0,s.jsx)("code",(0,r.Z)({},l));var u=null===(e=i.position)||void 0===e?void 0:e.start.line,m=(0,p.Mx)(c)||String(u),f=t.components["".concat(m)];if(m&&"function"===typeof f){var x=t.data[m].value||"",C=(0,p.aE)(c);return(0,s.jsx)(d.Z,{disableCheckered:w(C,"disableCheckered",!0),disableToolbar:w(C,"disableToolbar",!1),disableCode:w(C,"disableCode",!1),disablePreview:w(C,"disablePreview",!1),bordered:w(C,"bordered",!0),copied:w(C,"copied",!0),background:C.background,toolbar:C.title||"\u793a\u4f8b",code:(0,s.jsx)("code",(0,r.Z)({},h)),text:x,children:(0,s.jsx)(f,{})})}return(0,s.jsx)("code",(0,r.Z)({},h))}}})),(0,s.jsx)(u,{path:e}),(0,s.jsx)(c.kF,{speed:500,children:function(n){var e=n.percent,t=n.scrollToTop;return(0,s.jsx)(c.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,s.jsx)(c.JO,{type:"arrow-up"})},percent:e})}})]})}},22007:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var r=t(1413),a=t(59940),o={components:{},data:{},source:'Empty \u7a7a\u72b6\u6001\n---\n\n\u7a7a\u72b6\u6001\u65f6\u7684\u5c55\u793a\u5360\u4f4d\u56fe\u3002\n\n![](https://user-images.githubusercontent.com/66067296/137707848-8603fc59-3904-437d-9908-53cd621a1a0e.png)\n\n### \u57fa\u7840\u793a\u4f8b\n\n\x3c!--DemoStart--\x3e \n```js\nimport { Empty } from \'@uiw/react-native\';\n\nconst Demo = () => {\n  render() {\n    return (\n      <Empty />\n    )\n  }\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n### \u81ea\u5b9a\u4e49\u6587\u5b57\n\n\x3c!--DemoStart--\x3e \n```js\nimport { Empty } from \'@uiw/react-native\';\n\nconst Demo = () => {\n  render() {\n    return (\n      <Empty label="\u5187\u5f97\u6570\u636e\u54af"/>\n    )\n  }\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n### \u66ff\u6362\u9ed8\u8ba4\u56fe\u6807\n\n\x3c!--DemoStart--\x3e \n```js\nimport { Empty } from \'@uiw/react-native\';\n\nconst xml = `\n<svg viewBox="0 0 1024 1024" version="1.1" width="200" height="200">\n  <path d="M65.28 903.68a448 44.928 0 1 0 896 0 448 44.928 0 1 0-896 0Z" fill="#C6C5C5" opacity=".31"></path>\n  <path d="M665.344 108.672H182.912c-5.76 0-10.624 4.736-10.624 10.624v779.136c0 5.76 4.736 10.624 10.624 10.624h593.92c5.76 0 10.624-4.736 10.624-10.624V230.784l-122.112-122.112z" fill="#F4F4F4"></path>\n  <path d="M776.96 914.304H183.04c-8.704 0-15.872-7.168-15.872-15.872V119.296c0-8.704 7.168-15.872 15.872-15.872h484.608l125.184 125.184v669.824c0 8.704-7.168 15.872-15.872 15.872zM182.912 114.048c-2.944 0-5.248 2.432-5.248 5.248v779.136c0 2.944 2.432 5.248 5.248 5.248h593.92c2.944 0 5.248-2.432 5.248-5.248V233.088l-119.04-119.04H182.912z" fill="#C6C5C5"></path>\n  <path d="M702.336 78.72H220.032c-5.76 0-10.624 4.736-10.624 10.624v779.136c0 5.76 4.736 10.624 10.624 10.624h593.92c5.76 0 10.624-4.736 10.624-10.624V200.832l-122.24-122.112z" fill="#FFFFFF"></path>\n  <path d="M813.952 884.352h-593.92c-8.704 0-15.872-7.168-15.872-15.872V89.344c0-8.704 7.168-15.872 15.872-15.872h484.608l125.184 125.184v669.824c0 8.704-7.168 15.872-15.872 15.872z m-593.92-800.384c-2.944 0-5.248 2.432-5.248 5.248v779.136c0 2.944 2.432 5.248 5.248 5.248h593.92c2.944 0 5.248-2.432 5.248-5.248V203.008l-119.04-119.04H220.032z" fill="#C6C5C5"></path>\n  <path d="M824.576 206.208H712.96c-8.704 0-15.872-7.168-15.872-15.872V78.72h10.624v111.616c0 2.944 2.432 5.248 5.248 5.248h111.616v10.624z" fill="#C6C5C5"></path>\n  <path d="M267.136 213.248h123.52" fill="#FFFFFF"></path>\n  <path d="M267.136 202.624h123.52v21.12h-123.52z" fill="#C6C5C5"></path>\n  <path d="M328.96 151.424v123.52" fill="#FFFFFF"></path>\n  <path d="M318.336 151.424h21.12v123.52h-21.12z" fill="#C6C5C5"></path>\n  <path d="M296.32 770.176h65.28" fill="#FFFFFF"></path>\n  <path d="M296.32 765.952h65.28v8.448h-65.28z" fill="#C6C5C5"></path>\n  <path d="M328.96 737.536v65.152" fill="#FFFFFF"></path>\n  <path d="M324.736 737.536h8.448v65.28h-8.448z" fill="#C6C5C5"></path>\n  <path d="M857.216 292.096h65.152" fill="#FFFFFF"></path>\n  <path d="M857.216 287.872h65.28v8.448h-65.28z" fill="#C6C5C5"></path>\n  <path d="M889.728 259.456v65.28" fill="#FFFFFF"></path>\n  <path d="M885.632 259.456h8.448v65.28h-8.448z" fill="#C6C5C5"></path>\n  <path d="M347.264 407.04c0-21.12 6.784-42.496 20.352-64.256 13.568-21.632 33.408-39.68 59.392-53.888 25.984-14.208 56.32-21.376 91.008-21.376 32.256 0 60.672 6.016 85.376 17.792 24.704 11.904 43.776 28.032 57.216 48.512s20.224 42.752 20.224 66.688c0 18.944-3.84 35.456-11.52 49.664-7.68 14.208-16.768 26.496-27.392 36.864-10.624 10.368-29.568 27.776-56.832 52.224-7.552 6.912-13.568 12.928-18.176 18.176-4.608 5.248-7.936 9.984-10.112 14.336-2.176 4.352-3.968 8.704-5.12 13.056-1.28 4.352-3.072 11.904-5.504 22.912-4.224 23.168-17.408 34.688-39.68 34.688-11.52 0-21.248-3.84-29.184-11.392-7.936-7.552-11.776-18.816-11.776-33.664 0-18.688 2.944-34.816 8.704-48.512s13.44-25.728 23.04-35.968c9.6-10.368 22.4-22.656 38.656-36.864 14.208-12.416 24.576-21.888 30.848-28.16 6.4-6.272 11.648-13.44 16-21.12 4.352-7.808 6.528-16.256 6.528-25.344 0-17.792-6.656-32.768-19.84-45.056-13.184-12.288-30.336-18.304-51.2-18.304-24.448 0-42.496 6.144-54.016 18.56-11.52 12.288-21.376 30.464-29.312 54.528-7.552 25.088-21.888 37.632-43.008 37.632-12.416 0-22.912-4.352-31.488-13.184-8.832-8.832-13.184-18.304-13.184-28.544z m162.816 365.568c-13.568 0-25.344-4.352-35.584-13.184-10.112-8.832-15.232-21.12-15.232-36.864 0-13.952 4.864-25.728 14.72-35.328 9.728-9.6 21.76-14.336 35.968-14.336 13.952 0 25.728 4.736 35.328 14.336 9.6 9.6 14.336 21.376 14.336 35.328 0 15.616-4.992 27.776-14.976 36.736-9.856 8.832-21.504 13.312-34.56 13.312z" fill="#D5D5D5"></path>\n</svg>\n`;\n\nconst Demo = () => {\n  render() {\n    return (\n      <Empty label="\u5187\u5f97\u6570\u636e\u54af" xml={xml}/>\n    )\n  }\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n### \u81ea\u5b9a\u4e49\u56fe\u6807\u5c3a\u5bf8\n\n\x3c!--DemoStart--\x3e \n```js\nimport { Empty } from \'@uiw/react-native\';\n\nconst Demo = () => {\n  render() {\n    return (\n      <Empty label="\u5187\u5f97\u6570\u636e\u54af" size={120} />\n    )\n  }\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n### \u81ea\u5b9a\u4e49\u6587\u5b57\u6837\u5f0f\n\n\x3c!--DemoStart--\x3e \n```js\nimport { Empty } from \'@uiw/react-native\';\n\nconst Demo = () => {\n  render() {\n    return (\n      <Empty label="\u5187\u5f97\u6570\u636e\u54af" labelStyle={{ color: \'red\' }} />\n    )\n  }\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n### \u63d0\u793a\u66f4\u591a\u5185\u5bb9\n\n\x3c!--DemoStart--\x3e \n```js\nimport { Empty } from \'@uiw/react-native\';\nimport {View, Text } from \'react-native\';\n\nconst Demo = () => {\n  render() {\n    return (\n      <Empty>\n        <View>\n          <Text style={{ color: \'red\' }}>\u5187\u5f97\u6570\u636e\u54af</Text>\n        </View>\n      </Empty>\n    )\n  }\n}\nexport default Demo\n```\n\x3c!--End--\x3e\n\n### Props\n\n| \u5c5e\u6027 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| --- | --- | --- | --- |\n| label | \u8bbe\u7f6e\u63d0\u793a\u6587\u672c | `string` | - |\n| labelStyle | \u8bbe\u7f6e\u63d0\u793a\u97f3\u6837\u5f0f | `TextProps[\'style\']` | - |\n| size | \u8bbe\u7f6e\u56fe\u6807\u5c3a\u5bf8 | `number` | - |\n| xml | \u4f20\u9012 SVG xml \u5b57\u7b26\u4e32\uff0c\u81ea\u5b9a\u4e49\u56fe\u6807\uff0c\u8bbe\u4e3a `null` \u5c06\u4e0d\u5c55\u793a\u56fe\u6807 | `string` | - |\n| children | \u4e0d\u5149\u63d0\u793a\u6587\u672c\uff0c\u8fd8\u6709\u66f4\u591a\u5185\u5bb9\uff0c`label` \u5c06\u4e0d\u8d77\u4f5c\u7528 | `React.ReactNode` | - |\n\n'},i=t(71027),l=function(){return(0,i.jsx)(a.Z,(0,r.Z)((0,r.Z)({},o),{},{path:"/packages/core/src/Empty/README.md"}))}},50882:function(n){function e(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=50882,n.exports=e}}]);
//# sourceMappingURL=8493.7eeac45e.chunk.js.map