(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8157],{85480:function(e,n,t){"use strict";var o,a,c=t(18489),r=t(83738),i=t(17186),s=t(93908),d=t(53929),p=t(51928),l=t(17285),u=t(61366),x=t(93539),f=t(74513),h=t(71027),m=["path"],b=["inline","node"],g=["data-meta"],v=d.ZP.div(o||(o=(0,i.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),y=(0,d.ZP)(s.Z)(a||(a=(0,i.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),w=function(e,n,t){return Reflect.has(e,n)?"true"===Reflect.get(e,n):t};n.Z=function(e){var n=e.path,t=(0,r.Z)(e,m),o=(0,x.useRef)(null);return(0,h.jsxs)(v,{ref:o,children:[(0,h.jsx)(y,(0,c.Z)((0,c.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(e,n,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var o=e.children&&e.children[0];o&&o.properties&&"true"===o.properties.ariaHidden&&(o.children=[])}},components:{code:function(e){var n,o=e.inline,a=e.node,i=(0,r.Z)(e,b),s=i["data-meta"],d=(0,r.Z)(i,g);if(o||!(0,l.pN)(s))return(0,h.jsx)("code",(0,c.Z)({},i));var p=null===(n=a.position)||void 0===n?void 0:n.start.line,x=(0,l.Mx)(s)||String(p),f=t.components["".concat(x)];if(x&&"function"===typeof f){var m=t.data[x].value||"",v=(0,l.aE)(s);return(0,h.jsx)(u.Z,{disableCheckered:w(v,"disableCheckered",!0),disableToolbar:w(v,"disableToolbar",!1),disableCode:w(v,"disableCode",!1),disablePreview:w(v,"disablePreview",!1),bordered:w(v,"bordered",!0),copied:w(v,"copied",!0),background:v.background,toolbar:v.title||"\u793a\u4f8b",code:(0,h.jsx)("code",(0,c.Z)({},d)),text:m,children:(0,h.jsx)(f,{})})}return(0,h.jsx)("code",(0,c.Z)({},d))}}})),(0,h.jsx)(f.Z,{path:n}),(0,h.jsx)(p.kF,{speed:500,children:function(e){var n=e.percent,t=e.scrollToTop;return(0,h.jsx)(p.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,h.jsx)(p.JO,{type:"arrow-up"})},percent:n})}})]})}},12259:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var o=t(18489),a=t(85480),c={components:{},data:{},source:"iOS \u73af\u5883\u5b89\u88c5\n===\n\n\u8fd9\u91cc\u4ecb\u7ecd\uff0c\u4f7f\u7528 React Native CLI \u8fd0\u884c\u4e00\u4e2a iOS \u73af\u5883\u4e0b\u7684 app\u3002 \u5b83\u9700\u8981 Xcode \u548c \u6700\u65b0\u7248\u672c\u7684 Node.js \u624d\u80fd\u5f00\u59cb\u3002 \u5982\u679c\u60a8\u5df2\u7ecf\u5b89\u88c5\u4e86\u8fd9\u4e9b\u5de5\u5177\u4e4b\u4e00\uff0c\u60a8\u5e94\u8be5\u80fd\u591f\u5728\u51e0\u5206\u949f\u5185\u542f\u52a8\u5e76\u8fd0\u884c\u3002 \u5982\u679c\u672a\u5b89\u88c5\u5b83\u4eec\uff0c\u60a8\u5e94\u8be5\u82b1\u8d39\u5927\u7ea6\u4e00\u4e2a\u5c0f\u65f6\u6765\u5b89\u88c5\u548c\u914d\u7f6e\u5b83\u4eec\u3002\n\n\n## \u5b89\u88c5\u4f9d\u8d56\n\n\u60a8\u5c06\u9700\u8981 [Node](https://nodejs.org)\u3001[Watchman](https://facebook.github.io/watchman)\u3001[React Native](https://github.com/react-native-community/cli) \u547d\u4ee4\u884c\u754c\u9762\u3001[Xcode](https://itunes.apple.com/cn/app/xcode/id497799835?mt=12) \u548c [CocoaPods](https://cocoapods.org/)\u3002\n\n\u867d\u7136\u60a8\u53ef\u4ee5\u4f7f\u7528\u60a8\u9009\u62e9\u7684\u4efb\u4f55\u7f16\u8f91\u5668\u6765\u5f00\u53d1\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f46\u60a8\u9700\u8981\u5b89\u88c5 Xcode \u4ee5\u8bbe\u7f6e\u5fc5\u8981\u7684\u5de5\u5177\u6765\u6784\u5efa\u9002\u7528\u4e8e iOS \u7684 React Native \u5e94\u7528\u7a0b\u5e8f\u3002\n\n### `Node & Watchman`\n\n\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 [Homebrew](http://brew.sh/) \u5b89\u88c5 [Node](https://nodejs.org) \u548c [Watchman](https://facebook.github.io/watchman)\u3002 \u5b89\u88c5 [Homebrew](http://brew.sh/) \u540e\uff0c\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\n\n```shell\nbrew install node\nbrew install watchman\n```\n\n\u5982\u679c\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86 Node\uff0c\u8bf7\u68c0\u67e5\u5176\u7248\u672c\u662f\u5426\u5728 v14 \u4ee5\u4e0a\u3002\u5b89\u88c5\u5b8c Node \u540e\u5efa\u8bae\u8bbe\u7f6e npm \u955c\u50cf\uff08\u6dd8\u5b9d\u6e90\uff09\u4ee5\u52a0\u901f\u540e\u9762\u7684\u8fc7\u7a0b\uff08\u6216\u4f7f\u7528\u79d1\u5b66\u4e0a\u7f51\u5de5\u5177\uff09\u3002\n> \ud83d\udea7 \u6ce8\u610f\uff1a\u4e0d\u8981\u4f7f\u7528 cnpm\uff01cnpm \u5b89\u88c5\u7684\u6a21\u5757\u8def\u5f84\u6bd4\u8f83\u5947\u602a\uff0cpackager \u4e0d\u80fd\u6b63\u5e38\u8bc6\u522b\uff01\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n```shell\n# \u4f7f\u7528nrm\u5de5\u5177\u5207\u6362\u6dd8\u5b9d\u6e90\nnpx nrm use taobao\n\n# \u5982\u679c\u4e4b\u540e\u9700\u8981\u5207\u6362\u56de\u5b98\u65b9\u6e90\u53ef\u4f7f\u7528\nnpx nrm use npm\n```\n\n[Watchman](https://facebook.github.io/watchman) \u662f Facebook \u7684\u4e00\u4e2a\u5de5\u5177\uff0c\u7528\u4e8e\u89c2\u5bdf\u6587\u4ef6\u7cfb\u7edf\u4e2d\u7684\u53d8\u5316\u3002 \u5f3a\u70c8\u5efa\u8bae\u60a8\u5b89\u88c5\u5b83\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\uff08packager \u53ef\u4ee5\u5feb\u901f\u6355\u6349\u6587\u4ef6\u7684\u53d8\u5316\u4ece\u800c\u5b9e\u73b0\u5b9e\u65f6\u5237\u65b0\uff09\u3002\n\n### `Yarn`\n\n[Yarn](https://yarnpkg.com/) \u662f Facebook \u63d0\u4f9b\u7684\u66ff\u4ee3 npm \u7684\u5de5\u5177\uff0c\u53ef\u4ee5\u52a0\u901f node \u6a21\u5757\u7684\u4e0b\u8f7d\n\n```\nnpm install -g yarn\n```\n\n\u5b89\u88c5\u5b8c yarn \u4e4b\u540e\u5c31\u53ef\u4ee5\u7528 yarn \u4ee3\u66ff npm \u4e86\uff0c\u4f8b\u5982\u7528`yarn`\u4ee3\u66ff`npm install`\u547d\u4ee4\uff0c\u7528`yarn add \u67d0\u7b2c\u4e09\u65b9\u5e93\u540d`\u4ee3\u66ff`npm install \u67d0\u7b2c\u4e09\u65b9\u5e93\u540d`\u3002\n\n\n\n### `Xcode`\n\n\u5b89\u88c5 Xcode \u7684\u6700\u7b80\u5355\u65b9\u6cd5\u662f\u901a\u8fc7 [Mac App Store](https://itunes.apple.com/cn/app/xcode/id497799835?mt=12)\u3002 \u5b89\u88c5 Xcode \u4e5f\u5c06\u5b89\u88c5 iOS \u6a21\u62df\u5668\u548c\u6240\u6709\u5fc5\u8981\u7684\u5de5\u5177\u6765\u6784\u5efa\u4f60\u7684 iOS \u5e94\u7528\u7a0b\u5e8f\u3002\n\n\u5982\u679c\u60a8\u5df2\u7ecf\u5728\u7cfb\u7edf\u4e0a\u5b89\u88c5\u4e86 Xcode\uff0c\u8bf7\u786e\u4fdd\u5b83\u662f 12 \u7248\u6216\u66f4\u9ad8\u7248\u672c\u3002\n\n![Xcode](./001.png)\x3c!--rehype:style=max-width: 480px;--\x3e\n\n\n### `\u5728 Xcode \u4e2d\u5b89\u88c5 iOS \u6a21\u62df\u5668`\n\n\u8981\u5b89\u88c5\u6a21\u62df\u5668\uff0c\u8bf7\u6253\u5f00 `Xcode` > `Preferences...` \u5e76\u9009\u62e9 `Components` \u9009\u9879\u5361\u3002 \u9009\u62e9\u60a8\u8981\u4f7f\u7528\u7684 iOS \u76f8\u5e94\u7248\u672c\u7684\u6a21\u62df\u5668\u3002\n\n![Xcode Preferences Components](./002.png)\x3c!--rehype:style=max-width: 480px;--\x3e\n\n### `CocoaPods`\n\n[CocoaPods](https://cocoapods.org/) \u662f\u4e00\u6b3e\u9002\u7528\u4e8e iOS \u548c macOS \u5f00\u53d1\u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002\u6211\u4eec\u4f7f\u7528\u5b83\u5728\u672c\u5730\u5c06\u5b9e\u9645\u7684 React Native \u6846\u67b6\u4ee3\u7801\u6dfb\u52a0\u5230\u60a8\u5f53\u524d\u7684\u9879\u76ee\u4e2d\u3002\u5b83\u662f\u7528 Ruby \u6784\u5efa\u7684\uff0c\u5e76\u4e14\u53ef\u4ee5\u4f7f\u7528 macOS \u4e0a\u53ef\u7528\u7684\u9ed8\u8ba4 Ruby \u8fdb\u884c\u5b89\u88c5\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 Ruby \u7248\u672c\u7ba1\u7406\u5668\uff0c\u4f46\u6211\u4eec\u5efa\u8bae\u60a8\u4f7f\u7528 macOS \u4e0a\u53ef\u7528\u7684\u6807\u51c6 Ruby\uff0c\u9664\u975e\u60a8\u77e5\u9053\u81ea\u5df1\u5728\u505a\u4ec0\u4e48\u3002\n\n\u6211\u4eec\u5efa\u8bae\u4f7f\u7528 [Homebrew](http://brew.sh/) \u5b89\u88c5 [CocoaPods](https://cocoapods.org/)\u3002\n\n```bash\n$ brew install cocoapods\n```\n\n> \ud83d\udea7 \u76ee\u524d react-native@0.64 \u9700\u8981 `pod v1.10.0+`\x3c!--rehype:style=color: #0ab100;--\x3e \u4ee5\u4e0a\u7684\u7248\u672c\uff0c\u53ef\u4ee5\u5728 `ios/Podfile`\x3c!--rehype:style=color: #e00000;--\x3e \u4e2d\u786e\u5b9a\u4f7f\u7528\u90a3\u4e2a\u7248\u672c\u7684 `pod`\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n\u4f7f\u7528\u9ed8\u8ba4\u7684 Ruby \u5b89\u88c5\u5c06\u8981\u6c42\u60a8\u5728\u5b89\u88c5 gems \u65f6\u4f7f\u7528 `sudo`\u3002\uff08\u4e0d\u8fc7\uff0c\u8fd9\u53ea\u662f gem \u5b89\u88c5\u671f\u95f4\u7684\u95ee\u9898\u3002\uff09\n\n```shell\nsudo gem install cocoapods\n# \u8981\u66f4\u65b0 CocoaPods\uff0c\u60a8\u53ea\u9700\u518d\u6b21\u5b89\u88c5 gem\nsudo gem install cocoapods\n# \u66f4\u65b0 CocoaPods \u5230\u6700\u65b0\u7248\u672c\nsudo gem install cocoapods --pre\nsudo gem install -n /usr/local/bin cocoapods --pre\n# \u5b89\u88c5\u6307\u5b9a cocoapods \u7248\u672c\nsudo gem install cocoapods -v 1.4.0\n```\n\n\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u8bbf\u95ee [CocoaPods \u5165\u95e8\u6307\u5357](https://guides.cocoapods.org/using/getting-started.html)\u3002\n\n<details>\n    <summary>Mac M1 \u7684\u6ce8\u610f\u4e8b\u9879</summary>\nCocoapods \u76ee\u524d\u5728 Mac M1 \u67b6\u6784\u4e0a\u53ef\u80fd\u8fd8\u6709\u4e00\u4e9b\u517c\u5bb9\u95ee\u9898\uff08\u6211\u4eec\u5efa\u8bae\u4f7f\u7528brew install cocoapods\u6765\u5b89\u88c5 Cocoapods\uff09\u3002\u5982\u679c\u4f60\u5728\u5b89\u88c5 pods \u4f9d\u8d56\u65f6\u51fa\u73b0\u95ee\u9898\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u8fd0\u884c\u4e0b\u9762\u7684\u547d\u4ee4\uff1a\n\n- `sudo arch -x86_64 gem install ffi`\n- `arch -x86_64 pod install`\n\n\u4ee5\u4e0a\u547d\u4ee4\u4f1a\u5b89\u88c5`ffi`\u5305\uff0c\u7528\u4e8e\u5728\u5b89\u88c5\u548c\u88c5\u8f7d pods \u65f6\u8c03\u7528\u5408\u9002\u7684\u7cfb\u7edf\u67b6\u6784\u3002\u5982\u679c\u4e00\u4e9b\u4f9d\u8d56\u5305\u8fc7\u65f6\u5bfc\u81f4\u5b89\u88c5\u62a5\u9519\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 `pod repo update` \u6216 `pod install --repo-update` \u66f4\u65b0\u8fc7\u65f6\u7684\u6e90\u4ee3\u7801\u5e93\u3002\n\n</details>\n\n### `React Native \u547d\u4ee4\u884c\u754c\u9762`\n\nReact Native \u6709\u4e00\u4e2a\u5185\u7f6e\u7684\u547d\u4ee4\u884c\u754c\u9762\u3002 \u6211\u4eec\u5efa\u8bae\u60a8\u5728\u8fd0\u884c\u65f6\u4f7f\u7528 Node.js \u9644\u5e26\u7684 `npx` \u8bbf\u95ee\u5f53\u524d\u7248\u672c\uff0c\u800c\u4e0d\u662f\u5168\u5c40\u5b89\u88c5\u548c\u7ba1\u7406\u7279\u5b9a\u7248\u672c\u7684 CLI\u3002 \u4f7f\u7528 `npx react-native <command>`\uff0c\u5f53\u524d\u7a33\u5b9a\u7248\u672c\u7684 CLI \u5c06\u5728\u547d\u4ee4\u8fd0\u884c\u65f6\u4e0b\u8f7d\u5e76\u6267\u884c\u3002\n\n> \u4f7f\u7528 npx\uff08\u63a8\u8350\uff09\uff0c\u81ea react-native@0.60 \u8d77\u53ef\u7528\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n## \u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5e94\u7528\u7a0b\u5e8f\n\n> \ud83d\udea7 \u5982\u679c\u60a8\u4e4b\u524d\u5b89\u88c5\u4e86\u5168\u5c40 `react-native-cli` \u5305\uff0c\u8bf7\u4f7f\u7528`npm uninstall -g react-native-cli`\u5c06\u5176\u5220\u9664\uff0c\u56e0\u4e3a\u5b83\u53ef\u80fd\u4f1a\u5bfc\u81f4\u610f\u5916\u95ee\u9898\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n\u60a8\u53ef\u4ee5\u4f7f\u7528 React Native \u7684\u5185\u7f6e\u547d\u4ee4\u884c\u754c\u9762\u6765\u751f\u6210\u4e00\u4e2a\u65b0\u9879\u76ee\u3002 \u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a `AwesomeProject` \u7684\u65b0 React Native \u9879\u76ee\uff1a\n\n```shell\nnpx react-native init AwesomeProject\n```\n\n\u5982\u679c\u60a8\u5c06 React Native \u96c6\u6210\u5230\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u5982\u679c\u60a8\u4ece Expo \u4e2d `ejected`\uff0c\u6216\u8005\u60a8\u6b63\u5728\u5411\u73b0\u6709 React Native \u9879\u76ee\u6dfb\u52a0 iOS \u652f\u6301\uff08\u8bf7\u53c2\u9605[\u4e0e\u73b0\u6709\u5e94\u7528\u7a0b\u5e8f\u96c6\u6210](https://reactnative.dev/docs/integration-with-existing-apps)\uff09\uff0c\u5219\u4e0d\u9700\u8981\u8fd9\u6837\u505a\u3002 \u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u7b2c\u4e09\u65b9 CLI \u6765\u521d\u59cb\u5316\u60a8\u7684 React Native \u5e94\u7528\u7a0b\u5e8f\uff0c\u4f8b\u5982 [Ignite CLI](https://github.com/infinitered/ignite)\u3002\n\n### `\u4f7f\u7528\u7279\u5b9a\u7248\u672c\u6216\u6a21\u677f`\n\n\u5982\u679c\u4f60\u60f3\u7528\u7279\u5b9a\u7684 React Native \u7248\u672c\u5f00\u59cb\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 `--version` \u53c2\u6570\uff1a\n\n```bash\nnpx react-native init AwesomeProject --version X.XX.X\n```\n\n\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49 React Native \u6a21\u677f\uff08\u5982 TypeScript\uff09\u4f7f\u7528 `--template` \u53c2\u6570\u542f\u52a8\u9879\u76ee\uff1a\n\n```bash\nnpx react-native init AwesomeTSProject --template react-native-template-typescript\n```\n\n\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u5236\u5b9a\u7684\u6a21\u7248([`@uiw/react-native-template`](https://github.com/uiwjs/react-native-template))\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\uff1a\n\n\x3c!--rehype:style=background-color: rgb(118 247 149);--\x3e\n```shell\n# \u6b64\u6a21\u677f\u9ed8\u8ba4\u96c6\u6210\u4e86\u4e00\u4e9b\u5fc5\u7528\u7684\u4f9d\u8d56\uff0c\u5982\u8def\u7531\uff0c\u7ec4\u4ef6\u5e93\u7b49\nnpx react-native init AwesomeProject --template @uiw/react-native-template\n```\n\n> \ud83d\udea7 \u6ce8\u610f\uff1a\u5982\u679c\u4e0a\u8ff0\u547d\u4ee4\u5931\u8d25\uff0c\u60a8\u53ef\u80fd\u5728\u60a8\u7684 PC \u4e0a\u5168\u5c40\u5b89\u88c5\u4e86\u65e7\u7248\u672c\u7684 react-native \u6216 react-native-cli\u3002 \u5c1d\u8bd5\u5378\u8f7d `cli` \u5e76\u4f7f\u7528 `npx` \u8fd0\u884c cli\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n## \u8fd0\u884c\u4f60\u7684 React Native \u5e94\u7528\u7a0b\u5e8f\n\n#### `\u7b2c 1 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e \u5b89\u88c5\u4f9d\u8d56\n\n```bash\n$ cd AwesomeProject  # \u6839\u76ee\u5f55\u8fd0\u884c \n$ yarn install # \u5b89\u88c5node\u4f9d\u8d56\n```\n\nReact Naitve 0.70+ \u8fd0\u884c\u4e0b\u9762\u547d\u4ee4\n\n```bash\n$ cd ios # \u8fdb\u5165 ios \u76ee\u5f55\n$ bundle install # \u5b89\u88c5 Bundler\n$ bundle exec pod install # \u4ee5\u5b89\u88c5 iOS \u4f9d\u8d56\u9879\n```\n\nReact Naitve 0.60+ \u8fd0\u884c\u4e0b\u9762\u547d\u4ee4\n\n```bash\n$ cd ios # \u8fdb\u5165 ios \u76ee\u5f55\n$ pod install\n```\n\n#### `\u7b2c 2 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e \u542f\u52a8 Metro\n\n\u9996\u5148\uff0c\u60a8\u9700\u8981\u542f\u52a8 `Metro`\uff0c\u8fd9\u662f `React Native` \u9644\u5e26\u7684 `JavaScript` \u6253\u5305\u5668\u3002 Metro \u201c\u63a5\u6536\u4e00\u4e2a\u5165\u53e3\u6587\u4ef6\u548c\u5404\u79cd\u9009\u9879\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u5305\u542b\u6240\u6709\u4ee3\u7801\u53ca\u5176\u4f9d\u8d56\u9879\u7684 JavaScript \u6587\u4ef6\u3002\u201d \u2014\u2014 [Metro Docs](https://facebook.github.io/metro/docs/concepts)\n\n\u8981\u542f\u52a8 Metro\uff0c\u8bf7\u5728 React Native \u9879\u76ee\u6587\u4ef6\u5939\u4e2d\u8fd0\u884c `npx react-native start` \uff1a\n\n```shell\nnpx react-native start\n# or \u8fdb\u5165\u9879\u76ee\u6839\u76ee\u5f55\nyarn start\n```\n\n`react-native start` \u542f\u52a8 Metro Bundler\u3002\n\n> \u5982\u679c\u60a8\u4f7f\u7528 `Yarn` \u5305\u7ba1\u7406\u5668\uff0c\u5219\u5728\u73b0\u6709\u9879\u76ee\u4e2d\u8fd0\u884c React Native \u547d\u4ee4\u65f6\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 `yarn` \u800c\u4e0d\u662f `npx`\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n> \u5982\u679c\u60a8\u719f\u6089 `Web` \u5f00\u53d1\uff0c`Metro` \u5f88\u50cf `webpack` \u2014\u2014 \u7528\u4e8e React Native \u5e94\u7528\u7a0b\u5e8f\u3002 \u4e0e `Kotlin` \u6216 `Java` \u4e0d\u540c\uff0c`JavaScript` \u4e0d\u4f1a\u88ab\u7f16\u8bd1\uff0cReact Native \u4e5f\u4e0d\u4f1a\u3002 Bundling \u4e0e\u7f16\u8bd1\u4e0d\u540c\uff0c\u4f46\u5b83\u53ef\u4ee5\u5e2e\u52a9\u63d0\u9ad8\u542f\u52a8\u6027\u80fd\u5e76\u5c06\u4e00\u4e9b\u7279\u5b9a\u4e8e\u5e73\u53f0\u7684 `JavaScript` \u8f6c\u6362\u4e3a\u66f4\u5e7f\u6cdb\u652f\u6301\u7684 `JavaScript`\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n#### `\u7b2c 3 \u6b65`\x3c!--rehype:style=background: #a5d4ff;--\x3e \u542f\u52a8\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\n\n\u8ba9 Metro Bundler \u5728\u81ea\u5df1\u7684\u7ec8\u7aef\u4e2d\u8fd0\u884c\u3002 \u5728 React Native \u9879\u76ee\u6587\u4ef6\u5939\u4e2d\u6253\u5f00\u4e00\u4e2a\u65b0\u7ec8\u7aef\u3002 \u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a\n\n```bash\nnpx react-native run-ios\n# or \u8fdb\u5165\u9879\u76ee\u6839\u76ee\u5f55\nyarn run ios\n```\n\n\u60a8\u5e94\u8be5\u5f88\u5feb\u5c31\u4f1a\u770b\u5230\u60a8\u7684\u65b0\u5e94\u7528\u7a0b\u5e8f\u5728 iOS \u6a21\u62df\u5668\u4e2d\u8fd0\u884c\u3002\n\n![Getting Started iOS Success](./GettingStartediOSSuccess.png)\n\n`npx react-native run-ios` \u662f\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u7684\u4e00\u79cd\u65b9\u5f0f\u3002 \u60a8\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4ece Xcode \u4e2d\u8fd0\u884c\u5b83\u3002\n\n\u5982\u679c\u60a8\u65e0\u6cd5\u4f7f\u5176\u6b63\u5e38\u5de5\u4f5c\uff0c\u8bf7\u53c2\u9605[\u6545\u969c\u6392\u9664\u9875\u9762](https://reactnative.dev/docs/troubleshooting#content)\u3002\n\n## \u5728\u8bbe\u5907\u4e0a\u8fd0\u884c\n\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4e0a\u8ff0\u547d\u4ee4\u5c06\u81ea\u52a8\u5728 `iOS` \u6a21\u62df\u5668\u4e0a\u8fd0\u884c\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u3002 \u5982\u679c\u60a8\u60f3\u5728\u5b9e\u9645\u7684\u7269\u7406 `iOS` \u8bbe\u5907\u4e0a\u8fd0\u884c\u8be5\u5e94\u7528\u7a0b\u5e8f\uff0c\u8bf7\u6309\u7167\u6b64\u5904\u7684\u8bf4\u660e\u8fdb\u884c\u64cd\u4f5c\u3002\n\n## \u4fee\u6539\u4f60\u7684\u5e94\u7528\n\n\u73b0\u5728\u60a8\u5df2\u6210\u529f\u8fd0\u884c\u8be5\u5e94\u7528\u7a0b\u5e8f\uff0c\u8ba9\u6211\u4eec\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u3002\n\n\u5728\u60a8\u9009\u62e9\u7684\u6587\u672c\u7f16\u8f91\u5668\u4e2d\u6253\u5f00 `App.js` \u5e76\u7f16\u8f91\u4e00\u4e9b\u884c\u3002\n\n\u5728\u60a8\u7684 `iOS` \u6a21\u62df\u5668\u4e2d\u70b9\u51fb `\u2318R`\x3c!--rehype:style=color: red;background: #ffd2d2;--\x3e \u4ee5\u91cd\u65b0\u52a0\u8f7d\u5e94\u7528\u7a0b\u5e8f\u5e76\u67e5\u770b\u60a8\u7684\u66f4\u6539\uff01\n\n![\u2318D](./003.png)\x3c!--rehype:style=max-width: 250px;--\x3e\n\n\u60a8\u8fd8\u53ef\u4ee5\u5728 `iOS` \u6a21\u62df\u5668\u4e2d\u4f7f\u7528 `\u2318D`\x3c!--rehype:style=color: red;background: #ffd2d2;--\x3e \u6216\u8005 `DD`\x3c!--rehype:style=color: red;background: #ffd2d2;--\x3e \u8c03\u51fa `Debug` \u83dc\u5355\u3002\u5982\u679c\u5728\u771f\u673a\u8c03\u8bd5\u8bf7 `\u6447\u4e00\u6447`\x3c!--rehype:style=color: red;background: #ffd2d2;--\x3e \u624b\u673a\u8c03\u51fa\u83dc\u5355\u3002\n\n## \u606d\u559c\uff01\n\n\u606d\u559c\uff01 \u60a8\u5df2\u7ecf\u6210\u529f\u8fd0\u884c\u5e76\u4fee\u6539\u4e86\u60a8\u7684\u7b2c\u4e00\u4e2a React Native \u5e94\u7528\u7a0b\u5e8f\u3002\n"},r=t(71027),i=function(e){return t(65512)(e)},s=function(){return(0,r.jsx)(a.Z,(0,o.Z)((0,o.Z)({},c),{},{transformImageUri:i,path:"website/src/pages/docs/environment-setup/ios/README.md"}))}},50882:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=50882,e.exports=n},65512:function(e,n,t){var o={"./001.png":25018,"./002.png":44036,"./003.png":86326,"./GettingStartediOSSuccess.png":97590};function a(e){var n=c(e);return t(n)}function c(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}a.keys=function(){return Object.keys(o)},a.resolve=c,e.exports=a,a.id=65512},25018:function(e,n,t){"use strict";e.exports=t.p+"static/media/001.1627096ea9c13980c4ee.png"},44036:function(e,n,t){"use strict";e.exports=t.p+"static/media/002.fd564f68186bd1734e1c.png"},86326:function(e,n,t){"use strict";e.exports=t.p+"static/media/003.6c481127405e7116af88.png"},97590:function(e,n,t){"use strict";e.exports=t.p+"static/media/GettingStartediOSSuccess.e6dd7fc2baa303d1f303.png"}}]);
//# sourceMappingURL=8157.6c98ce38.chunk.js.map