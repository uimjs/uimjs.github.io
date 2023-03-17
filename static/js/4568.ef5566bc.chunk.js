(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4568],{85480:function(n,e,t){"use strict";var r,o,i=t(18489),c=t(83738),a=t(17186),s=t(93908),u=t(53929),p=t(51928),d=t(17285),l=t(84488),f=t(93539),x=t(74513),m=t(71027),w=["path"],h=["inline","node"],g=["data-meta"],v=u.ZP.div(r||(r=(0,a.Z)(["\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  .w-rcpl-preview {\n    white-space: normal;\n  }\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]))),b=(0,u.ZP)(s.Z)(o||(o=(0,a.Z)(["\n  padding: 50px 50px 120px 50px;\n  /* max-width: 1024px; */\n  width: 1024px;\n"]))),Z=function(n,e,t){return Reflect.has(n,e)?"true"===Reflect.get(n,e):t};e.Z=function(n){var e=n.path,t=(0,c.Z)(n,w),r=l.ZP.Preview,o=l.ZP.Code,a=l.ZP.Toolbar,s=(0,f.useRef)(null);return(0,m.jsxs)(v,{ref:s,children:[(0,m.jsx)(b,(0,i.Z)((0,i.Z)({},t),{},{disableCopy:!0,source:t.source,rehypeRewrite:function(n,e,t){if("element"===n.type&&t&&"root"===t.type&&/h(1|2|3|4|5|6)/.test(n.tagName)){var r=n.children&&n.children[0];r&&r.properties&&"true"===r.properties.ariaHidden&&(r.children=[])}},components:{code:function(n){var e,s=n.inline,u=n.node,p=(0,c.Z)(n,h),f=p["data-meta"],x=(0,c.Z)(p,g);if(s||!(0,d.pN)(f))return(0,m.jsx)("code",(0,i.Z)({},p));var w=null===(e=u.position)||void 0===e?void 0:e.start.line,v=(0,d.Mx)(f)||String(w),b=t.components["".concat(v)];if(v&&"function"===typeof b){var j=t.data[v].value||"",S=(0,d.aE)(f);return(0,m.jsxs)(l.ZP,{disableCheckered:Z(S,"disableCheckered",!0),bordered:Z(S,"bordered",!0),children:[(0,m.jsx)(r,{children:(0,m.jsx)(b,{})}),(0,m.jsx)(a,{text:j,copied:Z(S,"copied",!0),children:S.title||"\u793a\u4f8b"}),(0,m.jsx)(o,{children:(0,m.jsx)("code",(0,i.Z)({},x))})]})}return(0,m.jsx)("code",(0,i.Z)({},x))}}})),(0,m.jsx)(x.Z,{path:e}),(0,m.jsx)(p.kF,{speed:500,children:function(n){var e=n.percent,t=n.scrollToTop;return(0,m.jsx)(p.Cd,{width:50,onClick:function(){return t()},format:function(){return(0,m.jsx)(p.JO,{type:"arrow-up"})},percent:e})}})]})}},59516:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a}});var r=t(18489),o=t(85480),i={components:{},data:{},source:"SwipeAction \u6ed1\u52a8\u64cd\u4f5c\u7ec4\u4ef6\u3002\n---\n\u7ed3\u5408\u624b\u52bf\u64cd\u4f5c\uff0c\u4ece\u5c4f\u5e55\u4e00\u4fa7\u5524\u51fa\u64cd\u4f5c\u3002\n\n<img src=\"https://user-images.githubusercontent.com/57083007/146733663-6c83fca4-72df-424d-8364-47533f57ece6.gif\" style=\"width:300px;height:620px\"/>\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport React from 'react';\nimport {SwipeAction} from '@uiw/react-native';\nimport { View,Text } from 'react-native'\n\nfunction Demo() {\n  const right = [\n    {\n      text: '\u67e5\u770b',\n      color: 'orange',\n      x: 250,\n      onPress: () => ref?.current?.swipeable.close()\n    },\n    {\n      text: '\u5220\u9664',\n      color: 'red',\n      x: 250,\n    },\n  ];\n  return (\n    <SwipeAction ref={ref} buttonWidth={60} right={right}>\n      <View><Text>\u6ed1\u52a8</Text></View>\n    </SwipeAction>\n  );\n}\nexport default Demo;\n```\n\n### \u4ece\u5de6\u4fa7\u6ed1\u51fa\n\n```jsx\nimport React from 'react';\nimport {SwipeAction} from '@uiw/react-native';\nimport { View,Text } from 'react-native'\n\nfunction Demo() {\n  const left = [\n    {\n      text: '\u67e5\u770b',\n      color: 'orange',\n      x: 250,\n      onPress: () => ref?.current?.swipeable.close()\n    },\n    {\n      text: '\u5220\u9664',\n      color: 'red',\n      x: 250,\n    },\n  ];\n  return (\n    <SwipeAction ref={ref} buttonWidth={60} left={left}>\n      <View><Text>\u6ed1\u52a8</Text></View>\n    </SwipeAction>\n  );\n}\nexport default Demo;\n```\n\n### \u7981\u7528\n\n```jsx\nimport React,{ useRef } from 'react';\nimport {SwipeAction} from '@uiw/react-native';\nimport { View,Text } from 'react-native'\n\nfunction Demo() {\n  const ref = useRef()\n  const right = [\n    {\n      text: '\u67e5\u770b',\n      color: 'orange',\n      x: 250,\n    },\n    {\n      text: '\u5220\u9664',\n      color: 'red',\n      x: 250,\n      disabled:true\n    },\n  ];\n  return (\n    <SwipeAction ref={ref} buttonWidth={60} right={right}>\n      <View><Text>\u6ed1\u52a8</Text></View>\n    </SwipeAction>\n  );\n}\nexport default Demo;\n```\n\n### \u4e3b\u52a8\u5173\u95ed\n\n```jsx\nimport React,{ useRef } from 'react';\nimport {SwipeAction} from '@uiw/react-native';\nimport { View,Text } from 'react-native'\n\nfunction Demo() {\n  const ref = useRef()\n  const right = [\n    {\n      text: '\u67e5\u770b',\n      color: 'orange',\n      x: 250,\n      onPress: () => ref?.current?.swipeable.close()\n    },\n    {\n      text: '\u5220\u9664',\n      color: 'red',\n      x: 400,\n    },\n  ];\n  return (\n    <SwipeAction ref={ref} buttonWidth={60} right={right}>\n      <View><Text>\u6ed1\u52a8</Text></View>\n    </SwipeAction>\n  );\n}\nexport default Demo;\n```\n\n\u7ec4\u4ef6\u7ee7\u627freact-native-gesture-handler[`Swipeable`](https://docs.swmansion.com/react-native-gesture-handler/docs/api/components/swipeable)\n### Props\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `right` | \u53f3\u8fb9\u6ed1\u52a8\u51fa\u6765\u7684\u5143\u7d20 | Array<`ColumnProps`> | - |\n| `left` | \u5de6\u8fb9\u6ed1\u52a8\u51fa\u6765\u7684\u5143\u7d20 | Array<`ColumnProps`> | - |\n| `buttonWidth` | \u6309\u94ae\u5bbd\u5ea6 |  number | 60 |\n| `actionViewStyle` | \u5f39\u51fa\u6846\u6837\u5f0f |  ViewStyle | - |\n| `rectButtonStyle` | \u5f39\u51fabutton\u6837\u5f0f |  ViewStyle | - |\n\n\n### ColumnProps\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `text` | \u663e\u793a\u6587\u5b57 | string | - |\n| `color` | \u80cc\u666f\u8272 | string | - |\n| `onPress` | \u70b9\u51fb\u5143\u7d20\u89e6\u53d1 |  () => void | - |\n| `disabled` | \u662f\u5426\u7981\u7528 | Boolean | - |\n| `render` | \u81ea\u5b9a\u4e49\u5143\u7d20 | (text: string, record: Column, index: number) => React.ReactNode | - |\n"},c=t(71027),a=function(){return(0,c.jsx)(o.Z,(0,r.Z)((0,r.Z)({},i),{},{path:"/packages/core/src/SwipeAction/README.md"}))}},50882:function(n){function e(n){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=function(){return[]},e.resolve=e,e.id=50882,n.exports=e}}]);
//# sourceMappingURL=4568.ef5566bc.chunk.js.map