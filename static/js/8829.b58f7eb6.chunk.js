(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8829],{85480:function(e,n,t){"use strict";var c,r,i=t(18489),o=t(83738),d=t(17186),p=t(93908),s=t(53929),x=t(51928),a=t(17285),l=t(61366),g=t(93539),u=t(74513),h=t(71027),y=["path"],b=["inline","node"],f=["data-meta"],m=s.ZP.div(c||(c=(0,d.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),E=(0,s.ZP)(p.Z)(r||(r=(0,d.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),w=function(e,n,t){return Reflect.has(e,n)?"true"===Reflect.get(e,n):t};n.Z=function(e){var n=e.path,t=(0,o.Z)(e,y),c=(0,g.useRef)(null);return(0,h.jsxs)(m,{ref:c,children:[(0,h.jsx)(E,(0,i.Z)((0,i.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(e,n,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var c=e.children&&e.children[0];c&&c.properties&&"true"===c.properties.ariaHidden&&(c.children=[])}},components:{code:function(e){var n,c=e.inline,r=e.node,d=(0,o.Z)(e,b),p=d["data-meta"],s=(0,o.Z)(d,f);if(c||!(0,a.pN)(p))return(0,h.jsx)("code",(0,i.Z)({},d));var x=null===(n=r.position)||void 0===n?void 0:n.start.line,g=(0,a.Mx)(p)||String(x),u=t.components["".concat(g)];if(g&&"function"===typeof u){var y=t.data[g].value||"",m=(0,a.aE)(p);return(0,h.jsx)(l.Z,{disableCheckered:w(m,"disableCheckered",!0),disableToolbar:w(m,"disableToolbar",!1),disableCode:w(m,"disableCode",!1),disablePreview:w(m,"disablePreview",!1),bordered:w(m,"bordered",!0),copied:w(m,"copied",!0),background:m.background,toolbar:m.title||"\u793a\u4f8b",code:(0,h.jsx)("code",(0,i.Z)({},s)),text:y,children:(0,h.jsx)(u,{})})}return(0,h.jsx)("code",(0,i.Z)({},s))}}})),(0,h.jsx)(u.Z,{path:n}),(0,h.jsx)(x.kF,{speed:500,children:function(e){var n=e.percent,t=e.scrollToTop;return(0,h.jsx)(x.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,h.jsx)(x.JO,{type:"arrow-up"})},percent:n})}})]})}},22042:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var c=t(18489),r=t(85480),i={components:{},data:{},source:"iOS \u6253\u5305\n===\n\n> \ud83d\udea7 `\u6253\u5305\u524d\u9700\u8981\u51c6\u5907\u5de5\u5177`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n> 1. \ud83e\udeb2 iOS\u9879\u76ee\u6253\u5305\u524d\uff0c\u9700\u8981\u5148\u51c6\u5907 `\u5f00\u53d1\u8005\u8d26\u53f7`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u3001`\u9700\u8981\u6253\u5305\u7684\u9879\u76ee`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e \u53ca `mac\u7535\u8111\u548cXcode`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u3002\n> 2. \ud83d\udce6 \u5982\u679c\u6ca1\u6709\u5f00\u53d1\u8005\u8d26\u53f7\uff0c\u53ef\u8fdb\u5165[Developer\u82f9\u679c\u5f00\u53d1\u8005\u5b98\u7f51](https://developer.apple.com),\u70b9\u51fb\u201cAccount\u201d\u767b\u5f55/\u6ce8\u518c\u4f1a\u5458\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n## \u4e00. \u914d\u7f6eiOS\u8bc1\u4e66\n### `\u914d\u7f6e\u8bc1\u4e66`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u767b\u9646\u6210\u529f\u540e\uff0c\u767b\u5f55\u5f00\u53d1\u8005\u8d26\u53f7\uff0c\u8fdb\u5165`Certificates`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e, `Identifiers & Profiles`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\uff0c\u9009\u62e9`Certificates`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u65b0\u5efa\u3002\n\n![](./img/01.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u9009\u62e9\u7c7b\u578b`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n![](./img/02.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u9009\u62e9\u8bc1\u4e66\u6587\u4ef6`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n#### `\u65e0\u8bc1\u4e66\u6587\u4ef6\u53ef\u901a\u8fc7\u94a5\u5319\u4e32\u8bbf\u95ee\u521b\u5efa`\x3c!--rehype:style=color: white; background: #ffb703;--\x3e\n\n\u8fdb\u5165\u542f\u52a8\u53f0\uff0c\u70b9\u51fb\u8fdb\u5165\u94a5\u5319\u4e32\u8bbf\u95ee\u3002\n\n![](./img/03.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n\u8fdb\u5165\u94a5\u5319\u4e32\u8bbf\u95ee\uff0c\u901a\u8fc7`\u8bc1\u4e66\u52a9\u7406`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e-\u9009\u62e9`\u4ece\u8bc1\u4e66\u9881\u53d1\u673a\u6784\u8bf7\u6c42`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u7533\u8bf7\u8bc1\u4e66\u3002\n\n![](./img/04.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n\u586b\u5199\u5e38\u7528\u90ae\u7bb1\u53ca\u59d3\u540d\uff0c\u9009\u62e9`\u4fdd\u5b58\u5230\u78c1\u76d8`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\uff0c\u751f\u6210\u672c\u5730\u8bc1\u4e66\u6587\u4ef6\u3002\n\n![](./img/05.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n\u672c\u5730\u8bc1\u4e66\u751f\u6210\u540e\uff0c\u56de\u5230`Certificates, Identifiers & Profiles`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e-`Create a New Certificate`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u9009\u62e9\u8be5\u6587\u4ef6\u5373\u53ef\u8fdb\u5165\u4e0b\u4e00\u6b65\uff0c\u9009\u62e9\u5df2\u751f\u6210\u7684\u672c\u5730\u8bc1\u4e66\u521b\u5efa\u65b0\u7684\u8bc1\u4e66\u3002\n\n![](./img/06.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u521b\u5efaAPP IP`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u5982\u679c\u6ca1\u6709\u53ef\u7528\u7684APP IP\uff0c\u53ef\u53c2\u8003[\u53d1\u5e03iOS\u5e94\u7528\u5546\u5e97](https://uimjs.github.io/#/docs/app-store/ios)\u4e2d\u7b2c\u4e00\u7ae0\u8282\u521b\u5efa\u65b0\u7684 AppID\uff0c\u3002\n\n> \u5f00\u53d1\u8005\u8d26\u53f7\u6ce8\u518c\u5b8c\u6210\uff0c\u76f8\u5173\u8bc1\u4e66\u53ca\u914d\u7f6e\u5b8c\u6210\u4e4b\u540e\uff0c\u5373\u53ef\u51c6\u5907\u7528`Xcode`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u5bf9\u9879\u76ee\u8fdb\u884c\u6253\u5305\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n## \u4e8c. Xcode\u914d\u7f6eiOS\u8bc1\u4e66\u548c\u6253\u5305\u73af\u5883\n\n### `Xcode\u6253\u5f00\u9700\u8981\u6253\u5305\u7684\u9879\u76ee`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u9879\u76ee\u6253\u5f00\u540e\uff0c\u9996\u5148\u9700\u8981\u9009\u62e9`Xcode`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u4e2d\u7684`Preferences`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u4e2d\u767b\u5f55\u5df2\u6ce8\u518c\u597d\u7684\u5f00\u53d1\u8005\u8d26\u53f7\u3002\n\n![](./img/07.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n\u8d26\u53f7\u767b\u5f55\u6210\u529f\u540e\uff0c\u786e\u4fdd\u662f\u5426\u5b58\u5728\u5df2\u914d\u7f6e\u597d\u7684\u6253\u5305\u8bc1\u4e66\uff0c\u8bc1\u4e66\u914d\u7f6e\u5b8c\u6210\u53ef\u8fdb\u884c\u4e4b\u540e\u7684\u8bbe\u7f6e\u3002\n\n![](./img/08.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u914d\u7f6eprovisioning profile\u4e0e\u8bc1\u4e66`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u786e\u4fdd`General`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u4e2d\uff0c\u9879\u76ee`Bundle Identifier`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u4e0e\u7533\u8bf7\u7684\u8bc1\u4e66APP IDs\u3001\u63cf\u8ff0\u6587\u4ef6\u7684Bundle Identifier\u76f8\u540c\u3002\n\n![](./img/09.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n\u70b9\u51fb`Signing & Capabilities`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u4e2d\uff0c\u9009\u62e9`\u9879\u76ee\u5f00\u53d1\u8bc1\u4e66`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u53ca\u586b\u5199Bundle Identifier\u3002\n\n![](./img/10.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n> \u6253\u5305\u4e4b\u524d\uff0c\u73b0\u5c06\u6a21\u5f0f\u8c03\u6574\u4e3a`Generic IOS Device`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u6a21\u5f0f\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n![](./img/11.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u5f00\u59cb\u6253\u5305`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u70b9\u51fb`Product`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u4e2d\uff0c\u9009\u62e9`Archive`\x3c!--rehype:style=color: #1c7bd0; background: ##E6E6E6--\x3e\u8fdb\u884c\u6253\u5305\u3002\n\n![](./img/12.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n### `\u6253\u5305\u5b8c\u6210\u8f93\u51fa\u5305`\x3c!--rehype:style=color: white; background: #1c7bd0;--\x3e\n\n\u6253\u5305\u5b8c\u6210\u540e\u81ea\u52a8\u5f39\u51fa\u8f93\u51fa\u9009\u62e9\u6846\u3002\n\n![](./img/13.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n> \ud83d\udea7 \u4f01\u4e1a\u8bc1\u4e66\u6253\u5305 \u9009Enterprise,\u4e00\u7248\u6d4b\u8bd5\u6253\u5305\u9009\u62e9\u7b2c\u4e8c\u9879\uff0c\u53ef\u76f4\u63a5\u4e0a\u4f20\u5230\u84b2\u516c\u82f1\u8fdb\u884c\u53d1\u5e03\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n![](./img/14.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n\n\u9009\u62e9\u81ea\u5df1\u7684\u5f00\u53d1\u8bc1\u4e66\u3002\n\n![](./img/15.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n\n\u4e4b\u540e\u4e00\u76f4\u70b9\u51fb\u4e0b\u4e00\u6b65\u5373\u53ef\u3002\n\n![](./img/16.png)\x3c!--rehype:style=max-width: 650px;width: 100%;--\x3e\n![](./img/17.png)\x3c!--rehype:style=max-width:300px;width: 100%;--\x3e\n\n> \ud83d\udea7 \u8f93\u51fa\u5b8c\u6210\u540e\u5373\u53ef\u5728\u6240\u9009\u7684\u4fdd\u5b58\u8def\u5f84\u770b\u5230\u5b89\u88c5\u5305\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n"},o=t(71027),d=function(e){return t(40368)(e)},p=function(){return(0,o.jsx)(r.Z,(0,c.Z)((0,c.Z)({},i),{},{transformImageUri:d,path:"website/src/pages/docs/unpack/ios/README.md"}))}},50882:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=50882,e.exports=n},40368:function(e,n,t){var c={"./img/01.png":47937,"./img/02.png":22166,"./img/03.png":3139,"./img/04.png":89837,"./img/05.png":26128,"./img/06.png":61914,"./img/07.png":11299,"./img/08.png":21501,"./img/09.png":34336,"./img/10.png":78171,"./img/11.png":42069,"./img/12.png":4420,"./img/13.png":25547,"./img/14.png":86719,"./img/15.png":49790,"./img/16.png":47777,"./img/17.png":99103};function r(e){var n=i(e);return t(n)}function i(e){if(!t.o(c,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=i,e.exports=r,r.id=40368},47937:function(e,n,t){"use strict";e.exports=t.p+"static/media/01.6ed0cbed72b5eddad75a.png"},22166:function(e,n,t){"use strict";e.exports=t.p+"static/media/02.05e0a8504a03d49cd13e.png"},3139:function(e,n,t){"use strict";e.exports=t.p+"static/media/03.a721616088a3d598188f.png"},89837:function(e,n,t){"use strict";e.exports=t.p+"static/media/04.4707ceab165c75ee0436.png"},26128:function(e,n,t){"use strict";e.exports=t.p+"static/media/05.2637f1e37fe1f617659a.png"},61914:function(e,n,t){"use strict";e.exports=t.p+"static/media/06.abd61fc22856fab87efa.png"},11299:function(e,n,t){"use strict";e.exports=t.p+"static/media/07.c043e1cf1c92adc473b1.png"},21501:function(e,n,t){"use strict";e.exports=t.p+"static/media/08.7a82d9599b0260d31cab.png"},34336:function(e,n,t){"use strict";e.exports=t.p+"static/media/09.13e0ed719ed5d09dcbb3.png"},78171:function(e,n,t){"use strict";e.exports=t.p+"static/media/10.05217f58fd8284a8d592.png"},42069:function(e,n,t){"use strict";e.exports=t.p+"static/media/11.9034dcffb0b0d4ac71a8.png"},4420:function(e,n,t){"use strict";e.exports=t.p+"static/media/12.9a5a5bba3d203e196863.png"},25547:function(e,n,t){"use strict";e.exports=t.p+"static/media/13.08352b2bd1b5d4e8038b.png"},86719:function(e,n,t){"use strict";e.exports=t.p+"static/media/14.6cc6919c152107800702.png"},49790:function(e,n,t){"use strict";e.exports=t.p+"static/media/15.41f43b675a12ca2df710.png"},47777:function(e,n,t){"use strict";e.exports=t.p+"static/media/16.299be88ec886fa2e397d.png"},99103:function(e,n,t){"use strict";e.exports=t.p+"static/media/17.26de5279ca2ca3d2290d.png"}}]);
//# sourceMappingURL=8829.b58f7eb6.chunk.js.map