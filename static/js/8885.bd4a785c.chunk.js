(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8885],{59940:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var i=t(18489),r=t(83738),o=t(17186),a=t(93908),c=t(53929),s=t(98012),u=t(17285),l=t(84488),d=t(93539),p=t(71027);function m(e){var n=e.path,t=/^http/.test(n||"")?n:"https://github.com/uiwjs/react-native-uiw/edit/master/".concat(null===n||void 0===n?void 0:n.replace(/^\//,""));return(0,p.jsxs)("div",{style:{paddingBlock:20},children:[n&&t&&(0,p.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",style:{color:"#333"},children:"\u5728Github\u4e0a\u7f16\u8f91\u672c\u9875\uff01"}),(0,p.jsx)(s.iz,{type:"vertical"}),(0,p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/uiwjs/react-native-uiw/issues",style:{color:"#333"},children:"\u63d0\u4ea4bug"})]})}var h,w,f=t(74513),v=["path"],g=["inline","node"],x=["data-meta"],b=c.ZP.div(h||(h=(0,o.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),j=(0,c.ZP)(a.Z)(w||(w=(0,o.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),P=function(e,n,t){return Reflect.has(e,n)?"true"===Reflect.get(e,n):t},y=function(e){var n=e.path,t=(0,r.Z)(e,v),o=l.ZP.Preview,a=l.ZP.Code,c=l.ZP.Toolbar,h=(0,d.useRef)(null);return(0,p.jsxs)(b,{ref:h,children:[(0,p.jsx)(j,(0,i.Z)((0,i.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(e,n,t){if("element"===e.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(e.tagName)){var i=e.children&&e.children[0];i&&i.properties&&"true"===i.properties.ariaHidden&&(i.children=[])}},components:{code:function(e){var n,s=e.inline,d=e.node,m=(0,r.Z)(e,g),h=m["data-meta"],w=(0,r.Z)(m,x);if(s||!(0,u.pN)(h))return(0,p.jsx)("code",(0,i.Z)({},m));var f=null===(n=d.position)||void 0===n?void 0:n.start.line,v=(0,u.Mx)(h)||String(f),b=t.components["".concat(v)];if(v&&"function"===typeof b){var j=t.data[v].value||"",y=(0,u.aE)(h);return(0,p.jsxs)(l.ZP,{disableCheckered:P(y,"disableCheckered",!0),bordered:P(y,"bordered",!0),children:[(0,p.jsx)(o,{children:(0,p.jsx)(b,{})}),(0,p.jsx)(c,{text:j,copied:P(y,"copied",!0),children:y.title||"\u793a\u4f8b"}),(0,p.jsx)(a,{children:(0,p.jsx)("code",(0,i.Z)({},w))})]})}return(0,p.jsx)("code",(0,i.Z)({},w))}}})),(0,p.jsx)(f.Z,{}),(0,p.jsx)(m,{path:n}),(0,p.jsx)(s.kF,{speed:500,children:function(e){var n=e.percent,t=e.scrollToTop;return(0,p.jsx)(s.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,p.jsx)(s.JO,{type:"arrow-up"})},percent:n})}})]})}},65866:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var i=t(18489),r=t(59940),o={components:{},data:{},source:"\u4ece V3 \u5230 V4\n===\n\n### \u5347\u7ea7\u51c6\u5907\n- 1.\u8bf7\u5148\u5347\u7ea7\u5230 3.x \u7684\u6700\u65b0\u7248\u672c\u3002\n\n### \u6280\u672f\u8c03\u6574\n- 1.`react` \u5347\u7ea7\u81f3 `18.0.0`\n- 2.`react-native` \u5347\u7ea7\u81f3 `0.69.1`\n- 3.\u65b0\u589e\u4e3b\u9898\u8272\u548c`theme`\u6587\u6863\u4f7f\u7528\u8bf4\u660e\uff0c\u652f\u6301\u660e\u6697\u4e3b\u9898\u9002\u914d \uff0c\u4e3b\u9898\u8272\u4e3a `#3578e5`\n- 4.\u7ec4\u4ef6\u8c03\u6574\n\n### \u7ec4\u4ef6\u8c03\u6574\n\n- 1.VerificationCode \u9a8c\u8bc1\u7801\u5012\u8ba1\u65f6\u7ec4\u4ef6 [`589`](https://github.com/uiwjs/react-native-uiw/pull/589)\n- 2.Accordion \u624b\u98ce\u7434\u7ec4\u4ef6 [`588`](https://github.com/uiwjs/react-native-uiw/pull/588)\n- 3.List\u7ec4\u4ef6 titleLabelStyle \u5c5e\u6027\u652f\u6301 [`548`](https://github.com/uiwjs/react-native-uiw/pull/548)\n- 4.ImagePicker \u56fe\u7247\u4e0a\u4f20\u7ec4\u4ef6 [`2674`](https://github.com/uiwjs/react-native-uiw/actions/runs/4664460047)\n- 5.DatePeriodInput \u65e5\u671f\u533a\u95f4\u9009\u62e9\u5668 [`553`](https://github.com/uiwjs/react-native-uiw/pull/553)\n- 6.Tree \u6811\u5f62\u63a7\u4ef6 [`590`](https://github.com/uiwjs/react-native-uiw/pull/590)\n- 7.ImagePicker \u56fe\u7247\u4fdd\u5b58\u529f\u80fd [`2691`](https://github.com/uiwjs/react-native-uiw/actions/runs/4687708113)\n- 8.\u91cd\u6784Progress\u7ec4\u4ef6 \u53d8\u66f4\u53c2\u6570  [`595`](https://github.com/uiwjs/react-native-uiw/pull/595)\n- 9.\u65b0\u589euseImage hooks\n\n### \u4fee\u590d\u529f\u80fd\n\n- \ud83d\udc1e fix: \u4fee\u590dSwitch\u521d\u59cb\u503c(\u9ed8\u8ba4\u503c)\u4e0d\u80fd\u6b63\u786e\u663e\u793a\u72b6\u6001 [`583`](https://github.com/uiwjs/react-native-uiw/pull/583)\n- \ud83d\udc1e fix: \u4fee\u590dSpeedDial\u6587\u6863\u906e\u6321\uff0c\u65e0\u6cd5\u70b9\u51fb\u95ee\u9898 [`545`](https://github.com/uiwjs/react-native-uiw/pull/545)\n- \ud83d\udc1e fix: \u4fee\u590d\u9009\u9879\u5361\u7ec4\u4ef6\u62a5\u9519\u548c\u5c55\u793a\u6ea2\u51fa\u95ee\u9898 [`550`](https://github.com/uiwjs/react-native-uiw/pull/550)\n- \ud83d\udc1e fix: \u4fee\u590dSpeedDial\u5c42\u7ea7\u8f83\u4f4e\u7ec4\u4ef6\u65e0\u6cd5\u9009\u4e2d\u95ee\u9898 [`553`](https://github.com/uiwjs/react-native-uiw/pull/553)\n- \ud83d\udc1e fix: \u4fee\u590dandroid\u4fdd\u5b58\u56fe\u7247\u62a5\u9519 [`86ac78f`](https://github.com/uiwjs/react-native-uiw/actions/runs/4695870443)\n- \ud83d\udc1e fix: \u4fee\u590dActionSheet\u5f39\u7a97\u6309\u94ae\u7684\u70b9\u51fb\u533a\u57df [`562`](https://github.com/uiwjs/react-native-uiw/pull/562)\n- \ud83d\udc1e fix: \u4fee\u590d\u6587\u672c\u8f93\u5165\u6846\u7ec4\u4ef6\u6587\u6863 [`541`](https://github.com/uiwjs/react-native-uiw/pull/541)\n\n### \u5f00\u59cb\u5347\u7ea7\n\n#### @uiw/react-native\u4f9d\u8d56\u5c42\u5347\u7ea7\n```diff\n  \"dependencies\": {\n     ...\n     \n-    \"@uiw/react-native\": \"3.2.3\",\n-    \"react-native-svg\": \"12.1.1\",\n-    \"react-native-gesture-handler\": \"~2.5.0\",\n+    \"@uiw/react-native\": \"4.0.6\",\n+    \"react-native-svg\": \"13.9.0\",\n+    \"react-native-gesture-handler\": \"2.8.0\",\n  ...\n  }\n```\n\n#### \u5b89\u88c5@uiw/react-native-image-picker\n`\u5982\u679c\u4f60\u8981\u4f7f\u7528ImagePicker\u7ec4\u4ef6,\u4f60\u9700\u8981\u5b89\u88c5\u4ee5\u4e0b\u4f9d\u8d56`\n```diff\n  \"dependencies\": {\n     ...\n+    \"@uiw/react-native-image-picker\": \"4.0.6\",\n+    \"react-native-image-picker\":\"^5.3.1\",\n+    \"react-native-image-viewing\":\"~0.2.2\",\n+    \"@react-native-camera-roll/camera-roll\":\"5.3.1\" \n  ...\n  }\n```\n\n\n#### \u4ee3\u7801\u5c42\u4fee\u6539\n\n#### ThemeProvider \u57fa\u672c\u7528\u6cd5\n\n\u4f7f\u7528 ThemeProvider \u66f4\u597d\u5730\u652f\u6301\u52a8\u6001\u4e3b\u9898\u3002   \n\n\u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u4f7f\u7528 ThemeProvider\uff0c\u4f46\u662f\u5c31\u6ca1\u6709\u66f4\u4f18\u7f8e\u7684\u52a8\u6001\u4e3b\u9898\u5462\u3002  \n\n\u5728app.tsx\u5165\u53e3\u6587\u4ef6\u6dfb\u52a0\u5982\u4e0b  \n\n```diff\nimport { ThemeProvider,theme } from '@uiw/react-native';\n\n+ <ThemeProvider theme={theme.lightTheme}>\n  {/** \u5176\u4ed6Provider */}\n+ </ThemeProvider>;\n```\n\n#### VerificationCode \u57fa\u672c\u7528\u6cd5\n\n```diff\nimport React from 'react';\nimport { View } from 'react-native';\nimport { VerificationCode } from '@uiw/react-native'\n\nconst Demo = () => {\n+    const [value, setValue] = useState('');\n    return (\n      <View>\n+        <VerificationCode\n+           value={value}\n+           count={3}\n+           onChange={(val) => console.log(val)}\n+           outerStyle={{ borderWidth: 1, borderColor: \"#ccc\" }}\n+         />\n      </View>\n    )\n  }\n}\n```\n\n#### Tree \u57fa\u672c\u7528\u6cd5\n\n```diff\nimport React from 'react';\nimport { View } from 'react-native';\nimport { Tree } from '@uiw/react-native'\n\nconst Demo = () => {\n+   const option = [\n+     {\n+       label: '\u4e00\u680b',\n+       value: '01',\n+       children: [\n+         {\n+           label: '01-1',\n+           value: '01-1',\n+           children: [{label: 01-1-1', value: '01-1-1'}],\n+         },\n+       ],\n+     },\n+   ]\n   return (\n      <View>\n+        <Tree treeData={option} defaultExpandAll />\n      </View>\n    )\n  }\n}\n```\n\n#### Accordion \u57fa\u672c\u7528\u6cd5 \u53ca \u65b0\u589e\u5c5e\u6027\n\n```diff\nimport React from 'react';\nimport { View } from 'react-native';\nimport { Accordion } from '@uiw/react-native'\n\nconst Demo = () => {\n+    const contents = [\n+  {\n+    title: <Text>Section 1</Text>,\n+    content: (\n+      <View>\n+        <Text>Content of section 1</Text>\n+        <Image source={{uri: 'https://wx3.sinaimg.cn/mw690/4718260ely1gt2cg7t5udj23dw1wkhdu.jpg'}} style={{height: 180}} />\n+      </View>\n+    ),\n+  },\n+  {\n+    title: <Text>Section 2</Text>,\n+    content: (\n+      <View>\n+        <Text>Content of section 2</Text>\n+        <Image source={{uri: 'https://wx1.sinaimg.cn/mw690/4718260ely1gt2cg5r9zij22yo1o0x6p.jpg'}} style={{height: 180}} />\n+      </View>\n+    ),\n+  },\n    return (\n      <View>\n+         <Accordion sections={contents} />\n          {/** isMultiple \u662f\u5426\u53ef\u4ee5\u5c55\u5f00\u591a\u4e2a.\u9ed8\u8ba4\u4e3a\u662f,\u5f53\u524d\u4e3a\u5426 */}\n+          <Accordion sections={contents} isMultiple={false} />\n          {/** iconShow \u662f\u5426\u5c55\u793a\u53f3\u4fa7\u56fe\u6807,\u9ed8\u8ba4\u4e3a\u662f,\u5f53\u524d\u4e3a\u5426 */}\n+          <Accordion sections={contents} iconShow={false} />\n          {/** iconSize \u8bbe\u7f6e\u53f3\u4fa7\u56fe\u6807\u5c3a\u5bf8\u5927\u5c0f */}\n+          <Accordion sections={contents} iconSize={30} />\n          {/** accordionStyle \u6bcf\u884c\u5217\u8868\u624b\u98ce\u7434\u6837\u5f0f*/}\n+         <Accordion sections={contents} accordionStyle={{backgroundColor: '#3578e5'}} />\n          {/** contentStyle \u5c55\u5f00\u624b\u98ce\u7434\u5185\u5bb9\u6837\u5f0f */}\n+         <Accordion sections={contents} contentStyle={{backgroundColor: '#FFD21D'}} />\n      </View>\n    )\n  }\n}\n```\n#### ImagePicker \u548c useImage \u57fa\u672c\u7528\u6cd5\n\n```diff\nimport React from 'react';\nimport ImagePicker, { File,useImage } from '@uiw/react-native-image-picker';\nimport { Pressable,View } from 'react-native';\nconst Demo = () => {\n  const { launchLibrary, launchCamera } = useImage({\n    onSuccess: (result) => {\n      console.log('result', result);\n    }\n  })\n   return (\n      <View>\n+       <ImagePicker\n+          upload={async(file: File[]) => {\n+            let imageList: string[] = [];\n+            await file.forEach(file => imageList.push(file.uri));\n+            return imageList;\n+          }}\n+          selectionLimit={2}\n+       />\n+        <Pressable onPress={launchLibrary}><Text color=\"primary_background\">\u6253\u5f00\u76f8\u518c</Text></Pressable>\n+        <Pressable onPress={launchCamera}><Text color=\"primary_background\">\u6253\u5f00\u6444\u50cf\u5934</Text></Pressable>\n      </View>\n    )\n  }\n}\n```\n\n#### DatePeriodInput \u57fa\u672c\u7528\u6cd5\n\n```diff\nimport React,{useState} from 'react';\nimport { DatePeriodInput } from '@uiw/react-native'\nimport { View } from 'react-native';\n\n\nconst Demo = () => {\n  const [value, setValue] = useState('');\n   return (\n      <View>\n+       <DatePeriodInput\n+         value={value}\n+         onChange={date =>setState(date)}\n+       />\n      </View>\n    )\n  }\n}\n```\n"},a=t(71027),c=function(){return(0,a.jsx)(r.Z,(0,i.Z)((0,i.Z)({},o),{},{path:"website/src/pages/docs/v3-v4/README.md"}))}},50882:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=50882,e.exports=n}}]);
//# sourceMappingURL=8885.bd4a785c.chunk.js.map