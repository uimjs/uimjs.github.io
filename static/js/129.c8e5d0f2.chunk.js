(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[129],{1001:function(e,n,t){"use strict";t.r(n),n.default="\u5feb\u901f\u4e0a\u624b\n===\n\n\u9879\u76ee\u57fa\u4e8e node\uff0c\u8bf7\u786e\u4fdd\u5df2\u5177\u5907\u8f83\u65b0\u7684 node \u73af\u5883\uff08>=12.0.0\uff09\uff0c\u63a8\u8350\u4f7f\u7528 node \u7248\u672c\u7ba1\u7406\u5de5\u5177 [nvm](https://github.com/creationix/nvm) \u6216\u8005 [`n`](https://github.com/tj/n) \u6765\u7ba1\u7406 node\uff0c\u8fd9\u6837\u4e0d\u4ec5\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u5207\u6362 node \u7248\u672c\uff0c\u800c\u4e14\u5168\u5c40\u5b89\u88c5\u65f6\u5019\u4e5f\u4e0d\u7528\u52a0 sudo \u4e86\u3002\n\n> \ud83d\udea7  [React Navigation](https://github.com/react-navigation/react-navigation) 6 \u81f3\u5c11\u9700\u8981 [react-native@0.63.0](https://github.com/facebook/react-native)\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u7684\u662f Expo\uff0c\u5219\u60a8\u7684 SDK \u7248\u672c\u9700\u8981\u81f3\u5c11\u4e3a 41\u3002 \n> \u5f53\u524d\u7ec4\u4ef6\u652f\u6301 [react-native@0.60.0](https://github.com/facebook/react-native) +\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n### `\u4f7f\u7528\u7279\u5b9a\u7248\u672c\u6216\u6a21\u677f`\n\n\u5982\u679c\u4f60\u60f3\u7528\u7279\u5b9a\u7684 React Native \u7248\u672c\u5f00\u59cb\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 `--version` \u53c2\u6570\uff1a\n\n```bash\nnpx react-native init AwesomeProject --version X.XX.X\n```\n\n\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49 React Native \u6a21\u677f\uff08\u5982 TypeScript\uff09\u4f7f\u7528 `--template` \u53c2\u6570\u542f\u52a8\u9879\u76ee\uff1a\n\n```bash\nnpx react-native init AwesomeTSProject --template react-native-template-typescript\n```\n\n\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528\u6211\u4eec\u5236\u5b9a\u7684\u6a21\u7248([`@uiw/react-native-template`](https://github.com/uiwjs/react-native-template))\u521b\u5efa\u4e00\u4e2a\u65b0\u9879\u76ee\uff1a\n\n\x3c!--rehype:style=background-color: rgb(118 247 149);--\x3e\n```shell\n# \u6b64\u6a21\u677f\u9ed8\u8ba4\u96c6\u6210\u4e86\u4e00\u4e9b\u5fc5\u7528\u7684\u4f9d\u8d56\uff0c\u5982\u8def\u7531\uff0c\u7ec4\u4ef6\u5e93\u7b49\nnpx react-native init AwesomeProject --template @uiw/react-native-template\n```\n\n> \ud83d\udea7  \u6ce8\u610f\uff1a\u5982\u679c\u4e0a\u8ff0\u547d\u4ee4\u5931\u8d25\uff0c\u60a8\u53ef\u80fd\u5728\u60a8\u7684 PC \u4e0a\u5168\u5c40\u5b89\u88c5\u4e86\u65e7\u7248\u672c\u7684 react-native \u6216 react-native-cli\u3002 \u5c1d\u8bd5\u5378\u8f7d `cli` \u5e76\u4f7f\u7528 `npx` \u8fd0\u884c cli\u3002\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n\n## Install\n\n```bash\nyarn add @uiw/react-native react-native-svg react-native-root-siblings @react-native-picker/picker\n```\n\n> \ud83d\udea7  \u6ce8\u610f\uff1a\u5b89\u88c5 @react-native-picker/picker\uff0c\u53ef\u80fd\u9700\u8981\u91cd\u65b0 pod install\n\x3c!--rehype:style=border-left: 8px solid #ffe564;background-color: #ffe56440;padding: 12px 16px;--\x3e\n\n## Basic Usage\n\n\x3c!--rehype:snack=true--\x3e\n```jsx\nimport React from 'react';\nimport { View } from 'react-native';\nimport { Icon } from '@uiw/react-native'\n\nexport default class Demo extends React.Component {\n  render() {\n    return (\n      <View>\n        <Icon name='apple' size={46} color='#50CB42' />\n      </View>\n    )\n  }\n}\n```\n"}}]);
//# sourceMappingURL=129.c8e5d0f2.chunk.js.map