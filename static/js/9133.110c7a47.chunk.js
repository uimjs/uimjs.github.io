(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9133],{59940:function(e,n,o){"use strict";o.d(n,{Z:function(){return y}});var t=o(1413),a=o(45987),r=o(30168),s=o(31121),c=o(53929),i=o(78069),l=o(17285),p=o(61366),d=o(93539),u=o(71027);function f(e){var n=e.path,o=/^http/.test(n||"")?n:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===n||void 0===n?void 0:n.replace(/^\//,""));return(0,u.jsxs)("div",{style:{paddingBlock:20},children:[n&&o&&(0,u.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,u.jsx)(i.iz,{type:"vertical"}),(0,u.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var m,h,b=["path"],x=["inline","node"],g=["data-meta"],v=c.ZP.div(m||(m=(0,r.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),k=(0,c.ZP)(s.Z)(h||(h=(0,r.Z)(["\n  padding: 50px 50px 120px 50px;\n  max-width: 1024px;\n"]))),w=function(e,n,o){if(Reflect.has(e,n)){var t=Reflect.get(e,n);if("true"===t)return!0;if("false"===t)return!1}return o},y=function(e){var n=e.path,o=(0,a.Z)(e,b),r=(0,d.useRef)(null);return(0,u.jsxs)(v,{ref:r,children:[(0,u.jsx)(k,(0,t.Z)((0,t.Z)({},o),{},{disableCopy:!0,source:o.source,rehypeRewrite:function(e,n,o){if("element"===e.type&&o&&"root"===o.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var t=e.children&&e.children[0];t&&t.properties&&"true"===t.properties.ariaHidden&&(t.children=[])}},components:{code:function(e){var n,r=e.inline,s=e.node,c=(0,a.Z)(e,x),i=c["data-meta"],d=(0,a.Z)(c,g);if(r||!(0,l.pN)(i))return(0,u.jsx)("code",(0,t.Z)({},c));var f=null===(n=s.position)||void 0===n?void 0:n.start.line,m=(0,l.Mx)(i)||String(f),h=o.components["".concat(m)];if(m&&"function"===typeof h){var b=o.data[m].value||"",v=(0,l.aE)(i);return(0,u.jsx)(p.Z,{disableCheckered:w(v,"disableCheckered",!0),disableToolbar:w(v,"disableToolbar",!1),disableCode:w(v,"disableCode",!1),disablePreview:w(v,"disablePreview",!1),bordered:w(v,"bordered",!0),copied:w(v,"copied",!0),background:v.background,toolbar:v.title||"\u793a\u4f8b",code:(0,u.jsx)("code",(0,t.Z)({},d)),text:b,children:(0,u.jsx)(h,{})})}return(0,u.jsx)("code",(0,t.Z)({},d))}}})),(0,u.jsx)(f,{path:n}),(0,u.jsx)(i.kF,{speed:500,children:function(e){var n=e.percent,o=e.scrollToTop;return(0,u.jsx)(i.Cd,{width:50,onClick:function(){return o()},format:function(){return(0,u.jsx)(i.JO,{type:"arrow-up"})},percent:n})}})]})}},77973:function(e,n,o){"use strict";o.r(n),o.d(n,{default:function(){return i}});var t=o(1413),a=o(59940),r={components:{},data:{},source:'\u53c2\u4e0e\u7ec4\u4ef6\u5f00\u53d1\n===\n\n\u5f53\u524d [`react-native-uiw`](https://github.com/uiwjs/react-native-uiw) \u9879\u76ee\u5de5\u7a0b\uff0c\u4f7f\u7528 [Yarn](https://classic.yarnpkg.com/lang/en/) & [lerna](https://github.com/lerna/lerna)  \u6784\u5efa `monorepo`\uff0c\u6574\u4e2a\u91cc\u9762\u5305\u542b `example` \u793a\u4f8b\u3001`packages` \u7ec4\u4ef6\u5305\u3001`website` \u6587\u6863\u7f51\u7ad9\u3002\n\n> \ud83d\udea7 `\u6ce8\u610f\u4e8b\u9879:\u793a\u4f8b\u4f9d\u8d56\u4e0d\u53ef\u968f\u610f\u66f4\u65b0`\x3c!--rehype:style=background: #da0000; color: #fff;--\x3e\n> 1. \ud83e\udeb2 \u6dfb\u52a0\u65b0\u4f9d\u8d56\u5305\uff0c\u9700\u8981\u914d\u7f6e [nohoist](https://github.com/uiwjs/react-native-uiw/blob/46f73cf7ca5404184df7fa996a33f821d45cf0e7/package.json#L62-L80)\uff0c\u4ee5\u89e3\u51b3\u5b50\u5305\u4f9d\u8d56\u4e0d\u5b58\u5728\u7684\u95ee\u9898\u3002\n> 2. \ud83d\udce6 \u5982\u679c\u4f9d\u8d56\u672c\u5730\u5305\uff0cReact Native \u793a\u4f8b\u9700\u8981\u66f4\u6539 [metro](https://github.com/facebook/metro) \u914d\u7f6e [metro.config.js](https://github.com/uiwjs/react-native-uiw/blob/9a300184608c71615167c517433bb9aed606f0ec/example/examples/metro.config.js#L12)\n> 3. \ud83d\udc1bPod \u7248\u672c\u8bf7\u6839\u636e\u9879\u76ee\u5b89\u88c5\uff0c\u53ef\u4ee5\u5728 `ios/Podfile`\x3c!--rehype:style=color: #e00000;--\x3e \u4e2d\u786e\u5b9a\u4f7f\u7528\u90a3\u4e2a\u7248\u672c\u7684 `pod`\n> 4. \u2705 \u7ec4\u4ef6\u4ec5\u652f\u6301 `react-native@0.60+`\x3c!--rehype:style=color: #e00000;--\x3e \u4ee5\u4e0a\u7684\u7248\u672c\u3002\n> 5. \u26f3\ufe0f [React Navigation 6](https://github.com/react-navigation/react-navigation) \u81f3\u5c11\u9700\u8981 [react-native@0.63.0](https://github.com/facebook/react-native)\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Expo\uff0c\u5219\u60a8\u7684 SDK \u7248\u672c\u9700\u8981\u81f3\u5c11\u4e3a 41\u3002 \n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n## \u76ee\u5f55\u7ed3\u6784\n\n```bash\n\u251c\u2500\u2500 README.md -> packages/core/README.md\n\u251c\u2500\u2500 example\n\u2502\xa0\xa0 \u251c\u2500\u2500 base     # \ud83d\udc1d \u7528\u4e8e\u5355\u4e2a\u7ec4\u4ef6\u5b9e\u4f8b\u6d4b\u8bd5\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 ....\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 lib  # \ud83d\udd04 \u89e3\u51b3\u9884\u89c8\u7ec4\u4ef6\u751f\u6210\u7684\u4e34\u65f6\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 metro.config.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 examples # \ud83d\udc1d \u6240\u6709\u7ec4\u4ef6\u5b9e\u4f8b\n\u2502\xa0\xa0     \u251c\u2500\u2500 ....\n\u2502\xa0\xa0     \u251c\u2500\u2500 lib  # \ud83d\udd04 \u89e3\u51b3\u9884\u89c8\u7ec4\u4ef6\u751f\u6210\u7684\u4e34\u65f6\u76ee\u5f55\n\u2502\xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 metro.config.js\n\u251c\u2500\u2500 lerna.json\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 packages\n \xa0\xa0 \u251c\u2500\u2500 core    # \ud83d\udce6 @uiw/react-native \u7ec4\u4ef6\u6e90\u7801\n \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 lib # \ud83d\udd04 \u5254\u9664\u7c7b\u578b\u7684\u6e90\u7801\u8f93\u51fa\u76ee\u5f55\n \xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 src\n \xa0\xa0 \u2502\xa0\xa0 \u2502   \u251c\u2500\u2500 Avatar\n \xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 ....\n \xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 index.tsx\n \xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 tsconfig.json\n \xa0\xa0 \u2514\u2500\u2500 docs    # \ud83d\udce6 @uiw/react-native-doc \u53ef\u5ffd\u7565\uff0c\u7f16\u8bd1\u540e\u7684\u7ec4\u4ef6\u6587\u6863\u9759\u6001\u6587\u4ef6\u63d0\u4ea4\u5230 npm \u63d0\u4f9b\u6587\u6863\u7248\u672c\u9884\u89c8\n```\n\n## \u542f\u52a8\u9879 APP \u9884\u89c8\u793a\u4f8b\n\n\u6211\u4eec\u901a\u8fc7\u51e0\u4e2a\u6b65\u9aa4\uff0c\u5e2e\u52a9\u60a8\u542f\u52a8\u9879\u76ee\u4e2d\u7684\u7ec4\u4ef6\u793a\u4f8b `example/examples`\x3c!--rehype:style=color: #039423; background: #e3efe7;--\x3e APP \u5e94\u7528\u5b9e\u4f8b\u3002\n\n### `\u7b2c 1 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e \u514b\u9686\u9879\u76ee & \u5b89\u88c5\u4f9d\u8d56\n\n```bash\n# \u514b\u9686\u9879\u76ee\ngit clone git@github.com:uiwjs/react-native-uiw.git\n```\n\n\u5b89\u88c5\u4f9d\u8d56\uff0c\u3010\u6839\u76ee\u5f55\u3011\u8fd0\u884c\u547d\u4ee4\uff0c\u4fdd\u6301\u7248\u672c\u53f7\u4e00\u81f4\uff0c\u6240\u6709\u5b50\u5305\u90fd\u4f1a\u81ea\u52a8\u5b89\u88c5\n\n```bash\nyarn install\n```\n\n\u5b89\u88c5 \uf8ff iOS \u4f9d\u8d56\u5e93\uff0c\u8be6\u60c5\u53ef\u53c2\u8003 `iOS \u73af\u5883\u5b89\u88c5`\n\n```bash\n# \u8fdb\u5165\u793a\u4f8b\u4e2d\u7684 iOS \u76ee\u5f55\ncd example/examples/ios\n# \u5b89\u88c5 iOS \u4f9d\u8d56\u5e93\npod install\n\n# \u5982\u679c\u5b89\u88c5\u9519\u8bef\uff0c\u91cd\u65b0\u5b89\u88c5\nrm Podfile.lock\npod install\n# Reinstall pods\npod install --repo-update --verbose\n```\n\n\n> \ud83d\udea7 \u76ee\u524d [react-native@0.64](https://github.com/facebook/react-native) \u9700\u8981 `pod v1.10.0+`\x3c!--rehype:style=color: #0ab100;--\x3e \u4ee5\u4e0a\u7684\u7248\u672c\uff0c\u53ef\u4ee5\u5728 `ios/Podfile`\x3c!--rehype:style=color: #e00000;--\x3e \u4e2d\u786e\u5b9a\u4f7f\u7528\u90a3\u4e2a\u7248\u672c\u7684 `pod`\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n### `\u7b2c 2 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e \u542f\u52a8\u5b9e\u65f6\u7f16\u8bd1\u5305\n\n```bash\nnpm run lib:watch  # \u7f16\u8bd1\u7ec4\u4ef6\nnpm run lib:watch:base # \u5c06\u7ec4\u5efa\u7f16\u8bd1\u5230 base \u793a\u4f8b\u4e2d\nnpm run lib:watch:examples # \u5c06\u7ec4\u5efa\u7f16\u8bd1\u5230 examples \u793a\u4f8b\u4e2d\n```\n\n\u5c06\u7ec4\u4ef6\u6e90\u7801\u7f16\u8bd1\u5230 `packages/core/lib`\x3c!--rehype:style=color: #039423; background: #e3efe7;--\x3e\u3001`example/base/lib`\x3c!--rehype:style=color: #039423; background: #e3efe7;--\x3e\u3001`example/examples/lib`\x3c!--rehype:style=color: #039423; background: #e3efe7;--\x3e \u76ee\u5f55\u4e2d\u3002\n\n```bash\n\u251c\u2500\u2500 example\n\u2502   \u251c\u2500\u2500 base\n\u2502   \u2502   \u2514\u2500\u2500 lib  #   \u25c0\u2508\u2508\u2524  \ud83d\udd04  \u751f\u6210\u7ec4\u4ef6\u6e90\u7801\n\u2502   \u2514\u2500\u2500 examples #      \u2506\n\u2502       \u2514\u2500\u2500 lib  #   \u25c0\u2508\u2508\u2524  \ud83d\udd04  \u751f\u6210\u7ec4\u4ef6\u6e90\u7801\n\u2514\u2500\u2500 packages     #      \u2506\n    \u2514\u2500\u2500 core     #      \u2506  \ud83d\udce6  \n        \u251c\u2500\u2500 lib  #   \u25c0\u2508\u2508\u2524  \ud83d\udd04  \u5254\u9664 TS \u7c7b\u578b\u7684\u6e90\u7801\u8f93\u51fa\u76ee\u5f55 \n        \u2514\u2500\u2500 src  #\u2192\u25b6\u2508\u25b6\u25b7\u2508\u256f  \u2705  \u7ec4\u4ef6\u6e90\u7801\n```\n\n### `\u7b2c 3 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e \u542f\u52a8 APP \u5e94\u7528\n\n```bash\n# \u8fdb\u5165\u793a\u4f8b\u6839\u76ee\u5f55\ncd example/examples\n# \u542f\u52a8 & \u7f16\u8bd1\u5e94\u7528\nyarn run ios\n```\n\n## Workspaces\n\n\u6211\u4eec\u901a\u8fc7 [`yarn workspaces`](https://classic.yarnpkg.com/en/docs/workspaces) \u8fd9\u4e2a\u529f\u80fd\u53ef\u4ee5\u51cf\u8f7b `monorepo` \u5f00\u53d1\u4eba\u5458\u7684\u75db\u82e6\uff0c\u5e76\u5728\u6548\u7387\uff08\u5c3d\u53ef\u80fd\u591a\u5730\u63d0\u5347\uff09\u548c\u53ef\u7528\u6027\u4e4b\u95f4\u53d6\u5f97\u5e73\u8861\u3002\n\n> \ud83d\udea7 \u5982\u679c\u9700\u8981\u5c06\u6587\u6863\u7f51\u7ad9\u548c\u5b9e\u4f8b\u8fd0\u884c\u8d77\u6765\uff0c\u9700\u8981\u5148\u5b89\u88c5\u4f9d\u8d56\u548c\u7f16\u8bd1\u5305\u3002\u4f7f\u7528 [`yarn workspaces`](https://classic.yarnpkg.com/en/docs/workspaces)\uff0c\u7ec4\u4ef6\u6587\u6863\u662f\u4ece `node_modules` \u4e2d\u52a0\u8f7d\uff0c\u9700\u8981\u7f16\u8bd1(\u6216\u76d1\u542c)\u8f93\u51fa\u5230 `node_modules` \u4e2d\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n### `\u95ee\u9898\u662f\u4ec0\u4e48 \uff1f`\n\n\u9996\u5148\uff0c\u8ba9\u6211\u4eec\u5feb\u901f\u6d4f\u89c8\u4e00\u4e0b `hoist` \u5728\u72ec\u7acb\u9879\u76ee\u4e2d\u7684\u5de5\u4f5c\u539f\u7406\uff1a\n\n\u4e3a\u4e86\u51cf\u5c11\u5197\u4f59\uff0c\u5927\u591a\u6570\u5305\u7ba1\u7406\u5668\u91c7\u7528\u67d0\u79cd\u63d0\u5347\u65b9\u6848\uff0c\u6765\u5c3d\u53ef\u80fd\u591a\u5730\u63d0\u53d6\u548c\u6241\u5e73\u5316\u6240\u6709\u76f8\u5173\u6a21\u5757\u5230\u4e00\u4e2a\u96c6\u4e2d\u4f4d\u7f6e\u3002 \u5728\u4e00\u4e2a\u72ec\u7acb\u7684\u9879\u76ee\u4e2d\uff0c\u4f9d\u8d56\u6811\u53ef\u4ee5\u50cf\u8fd9\u6837\u51cf\u5c11\uff1a\n\n![](./standalone.svg)\x3c!--rehype:style=max-width: 580px;--\x3e\n\n\u4f7f\u7528 `hoist`\uff0c\u6211\u4eec\u80fd\u591f\u6d88\u9664\u91cd\u590d\u7684 `A@1.0` \u548c `B@1.0`\uff0c\u540c\u65f6\u4fdd\u7559\u7248\u672c\u53d8\u5316 (`B@2.0`) \u5e76\u4fdd\u6301\u76f8\u540c\u7684\u6839 `package-1/node_modules`\u3002 \u5927\u591a\u6570crawlers/loaders/bundlers \u53ef\u4ee5\u901a\u8fc7\u4ece\u9879\u76ee\u6839\u76ee\u5f55\u5411\u4e0b\u904d\u5386 `node_modules` \u6811\u6765\u975e\u5e38\u6709\u6548\u5730\u5b9a\u4f4d\u6a21\u5757\u3002\n\n\u7136\u540e\u662f `monorepo` \u9879\u76ee\uff0c\u5b83\u5f15\u5165\u4e86\u4e00\u4e2a\u65b0\u7684\u5c42\u6b21\u7ed3\u6784\uff0c\u4e0d\u9700\u8981\u901a\u8fc7 `node_modules` \u94fe\u63a5\u3002\u5728\u8fd9\u6837\u7684\u9879\u76ee\u4e2d\uff0c\u6a21\u5757\u53ef\u80fd\u5206\u6563\u5728\u591a\u4e2a\u4f4d\u7f6e\uff1a\n\n![](./monorepo-2.svg)\x3c!--rehype:style=max-width: 580px;--\x3e\n\n[`yarn workspaces`](https://classic.yarnpkg.com/en/docs/workspaces) \u53ef\u4ee5\u901a\u8fc7\u5c06\u6a21\u5757\u63d0\u5347\u5230\u5176\u7236\u9879\u76ee\u7684 `node_modules`: `monorepo/node_modules` \u6765\u8de8\u5b50\u9879\u76ee/\u5305\u5171\u4eab\u6a21\u5757\u3002 \u5f53\u8003\u8651\u5230\u8fd9\u4e9b\u5305\u5f88\u53ef\u80fd\u76f8\u4e92\u4f9d\u8d56\uff08\u62e5\u6709 monorepo \u7684\u4e3b\u8981\u539f\u56e0\uff09\u65f6\uff0c\u8fd9\u79cd\u4f18\u5316\u53d8\u5f97\u66f4\u52a0\u7a81\u51fa\uff0c\u5373\u66f4\u9ad8\u7a0b\u5ea6\u7684\u5197\u4f59\u3002\n\n### `\u627e\u4e0d\u5230\u6a21\u5757\uff01\uff01`\n\n\u867d\u7136\u770b\u8d77\u6765\u6211\u4eec\u53ef\u4ee5\u4ece\u9879\u76ee\u7684\u6839\u8282\u70b9 `node_modules` \u8bbf\u95ee\u6240\u6709\u6a21\u5757\uff0c\u4f46\u6211\u4eec\u7ecf\u5e38\u5728\u5176\u672c\u5730\u9879\u76ee\u4e2d\u6784\u5efa\u6bcf\u4e2a\u5305\uff0c\u5176\u4e2d\u6a21\u5757\u53ef\u80fd\u5728\u5176\u81ea\u5df1\u7684 `node_modules` \u4e0b\u4e0d\u53ef\u89c1\u3002 \u6b64\u5916\uff0c\u5e76\u975e\u6240\u6709 `crawlers` \u90fd\u4f1a\u904d\u5386\u7b26\u53f7\u94fe\u63a5(link)\u3002\n\n\u56e0\u6b64\uff0c`workspaces` \u5f00\u53d1\u4eba\u5458\u5728\u4ece\u5b50\u9879\u76ee\u6784\u5efa\u65f6\u7ecf\u5e38\u4f1a\u770b\u5230 `\u627e\u4e0d\u5230\u6a21\u5757` \u76f8\u5173\u7684\u9519\u8bef\uff1a\n\n- \u65e0\u6cd5\u4ece\u9879\u76ee\u6839 `monorepo` \u4e2d\u627e\u5230\u6a21\u5757 `B@2.0`\uff08\u65e0\u6cd5\u9075\u5faa\u7b26\u53f7\u94fe\u63a5link\uff09\n- \u65e0\u6cd5\u4ece `package-1` \u4e2d\u627e\u5230\u6a21\u5757 `A@1.0`\uff08\u4e0d\u77e5\u9053\u4e0a\u9762 `monorepo` \u4e2d\u7684\u6a21\u5757\u6811\uff09\n\n\u4e3a\u4e86\u8ba9\u8fd9\u4e2a `monorepo` \u9879\u76ee\u4ece\u4efb\u4f55\u5730\u65b9\u53ef\u9760\u5730\u627e\u5230\u4efb\u4f55\u6a21\u5757\uff0c\u5b83\u9700\u8981\u904d\u5386\u6bcf\u4e2a `node_modules` \u6811\uff1a`monorepo/node_modules` \u548c `monorepo/packages/package-1/node_modules` \u3002\n\n### `\u4fee\u590d\u95ee\u9898`\n\n\u6211\u4eec\u6709\u5f88\u591a\u65b9\u6cd5\u4fee\u6b63\u8fd9\u79cd\u95ee\u9898\uff0c\u4f8b\u5982\u591a\u4e2a\u6839\u76ee\u5f55\uff0c\u81ea\u5b9a\u4e49\u6a21\u5757\u6620\u5c04\u65b9\u6848\u7b49\u7b49\u3002\n\n\u901a\u8fc7\u914d\u7f6e [`nohoist`](https://github.com/uiwjs/react-native-uiw/blob/46f73cf7ca5404184df7fa996a33f821d45cf0e7/package.json#L62-L80) \u4f7f `workspaces` \u80fd\u591f\u4f7f\u7528\u4e0e\u5176\u63d0\u5347\u65b9\u6848\u4e0d\u517c\u5bb9\u7684\u7b2c 3 \u65b9\u5e93\u3002 \u8fd9\u4e2a\u60f3\u6cd5\u662f\u7981\u7528\u9009\u5b9a\u7684\u6a21\u5757\u88ab\u63d0\u5347\u5230\u9879\u76ee\u6839\u76ee\u5f55\u3002 \u5b83\u4eec\u88ab\u653e\u7f6e\u5728\u5b9e\u9645\u7684\uff08\u5b50\uff09\u9879\u76ee\u4e2d\uff0c\u5c31\u50cf\u5728\u4e00\u4e2a\u72ec\u7acb\u7684\u3001\u975e\u5de5\u4f5c\u533a\u7684\u9879\u76ee\u4e2d\u4e00\u6837\u3002\n\n\u5728\u79c1\u6709\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\uff0c\u4f7f\u7528 nohoist\uff1a\n\n```js\n"workspaces": {\n  "packages": ["packages/*"],\n  "nohoist": ["**/react-native", "**/react-native/**"]\n}\n```\n\n\u5728\u79c1\u6709\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\uff0c\u6ca1\u6709 nohoist\uff1a\n\n```js\n"workspaces": {\n  "packages": ["packages/*"],\n}\n```\n\n\u5728\u79c1\u6709\u5b50\u9879\u76ee\u4e0b\uff0c\u4f7f\u7528 nohoist\uff1a\n\n```js\n"workspaces": {\n  "nohoist": ["react-native", "react-native/**"]\n}\n```\n\n`nohoist` \u89c4\u5219\u53ea\u662f\u4e00\u7ec4 `glob` \u6a21\u5f0f\uff0c\u7528\u4e8e\u5339\u914d\u5176\u4f9d\u8d56\u6811\u4e2d\u7684\u6a21\u5757\u8def\u5f84\u3002 \u6a21\u5757\u8def\u5f84\u662f\u4f9d\u8d56\u6811\u7684\u865a\u62df\u8def\u5f84\uff0c\u800c\u4e0d\u662f\u5b9e\u9645\u7684\u6587\u4ef6\u8def\u5f84\uff0c\u56e0\u6b64\u65e0\u9700\u5728 `nohoist` \u6a21\u5f0f\u4e2d\u6307\u5b9a `node_modules` \u6216 `packages`\u3002\n\n\n#### `\u81ea\u5b9a\u4e49\u6a21\u5757\u6620\u5c04\u65b9\u6848`\n\n[`react-native-uiw`](https://github.com/uiwjs/react-native-uiw) \u63d0\u4f9b\u4e86\u4e00\u79cd\u901a\u8fc7 [metro.config.js](https://github.com/uiwjs/react-native-uiw/blob/9a300184608c71615167c517433bb9aed606f0ec/example/examples/metro.config.js#L12) \u914d\u7f6e\u591a\u6839\u7684\u65b9\u6cd5\u3002 \u901a\u8fc7 `metro.config.js` \u4e2d\u914d\u7f6e [`extraNodeModules`](https://facebook.github.io/metro/docs/configuration#extranodemodules) \u9700\u8981\u6620\u5c04\u7684\u6a21\u5757\n\n```js\nconst path = require(\'path\');\n\nmodule.exports = {\n  resolver: {\n    extraNodeModules: {\n      \'@uiw/react-native\': path.resolve(`${__dirname}/lib/`),\n      // \'@uiw/react-native\': path.resolve(`${__dirname}/../../packages/core/`),\n      // \'react-native-svg\': path.resolve(\n      //   `${__dirname}/../../node_modules/react-native-svg/`,\n      // ),\n    }\n  },\n  // ....\n};\n```\n\n> \ud83d\udea7 \u6ce8\u610f\uff1a\u867d\u7136\u914d\u7f6e\u6a21\u5757\u4f9d\u8d56\u6620\u5c04\uff0c\u53ef\u4ee5\u6620\u5c04\u5230\u5177\u4f53\u7684\u6a21\u5757/\u5305\u76ee\u5f55\u4e2d\uff0c\u4f46\u662f\u8fd8\u662f\u4f1a\u62a5\u9519\uff0c\u56e0\u4e3a\u6a21\u5757\u4e2d\u7684\u4f9d\u8d56\u8def\u5f84\u5bfc\u81f4\u9519\u8bef\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n\u5728 TypeScript \u4ecd\u7136\u4f1a\u51fa\u9519\uff0c\u5c06\u5728 [`example/examples/tsconfig.json`](https://github.com/uiwjs/react-native-uiw/blob/fe25f853fcdbe3590c3ac89924bf71326f11c58c/example/examples/tsconfig.json#L40-L44) \u4e2d\u914d\u7f6e\uff0c\u5bfc\u5165\u91cd\u65b0\u6620\u5c04\u5230\u76f8\u5bf9\u4e8e `baseUrl` \u7684\u67e5\u627e\u4f4d\u7f6e\u7684\u4e00\u7cfb\u5217\u76ee\u5f55\u3002\n\n```js\n/* \u7528\u4e8e\u89e3\u6790\u975e\u7edd\u5bf9\u6a21\u5757\u540d\u79f0\u7684\u57fa\u76ee\u5f55\u3002*/\n"baseUrl": "./", \n/* \u5c06\u5bfc\u5165\u91cd\u65b0\u6620\u5c04\u5230\u76f8\u5bf9\u4e8e\u201cbaseUrl\u201d\u7684\u67e5\u627e\u4f4d\u7f6e\u7684\u4e00\u7cfb\u5217\u6761\u76ee\u3002 */\n"paths": {\n  "@uiw/react-native": ["node_modules/@uiw/react-native/src/index"]\n},\n```\n'},s=o(71027),c=function(e){return o(72937)(e)},i=function(){return(0,s.jsx)(a.Z,(0,t.Z)((0,t.Z)({},r),{},{transformImageUri:c,path:"website/src/pages/docs/development/components/README.md"}))}},50882:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=50882,e.exports=n},72937:function(e,n,o){var t={"./monorepo-2.svg":55875,"./standalone.svg":10929};function a(e){var n=r(e);return o(n)}function r(e){if(!o.o(t,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return t[e]}a.keys=function(){return Object.keys(t)},a.resolve=r,e.exports=a,a.id=72937},55875:function(e,n,o){"use strict";e.exports=o.p+"static/media/monorepo-2.60513020c9fc391d27d8.svg"},10929:function(e,n,o){"use strict";e.exports=o.p+"static/media/standalone.51b6cbcdba3bf1540812.svg"}}]);
//# sourceMappingURL=9133.110c7a47.chunk.js.map