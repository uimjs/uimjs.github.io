(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[79],{710:function(n,e,t){"use strict";t.r(e),e.default="Drawer \u62bd\u5c49\n---\n\n\u7528\u4e8e\u5728\u5c4f\u5e55\u8fb9\u7f18\u663e\u793a\u5e94\u7528\u5bfc\u822a\u7b49\u5185\u5bb9\u7684\u9762\u677f\u3002\n\n## \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport { Fragment } from 'react';\nimport { View, Text } from 'react-native';\nimport { Drawer, Button } from '@uiw/react-native';\n\nfunction Demo() {\n  const [visible, setVisible] = useState(false);\n  return (\n    <Fragment>\n      <Drawer\n        isOpen={visible}\n        onChange={(isOpen) => setVisible(isOpen)}\n      >\n        <View>\n          <Text>\u5de6\u8fb9\u6253\u5f00\u62bd\u5c49\u5185\u5bb9</Text>\n        </View>\n      </Drawer>\n      <Button onPress={() => setVisible(!visible)}>\u5de6\u8fb9\u6253\u5f00\u62bd\u5c49</Button>\n    </Fragment>\n  );\n}\n```\n\n## \u53f3\u8fb9\u5c55\u793a\n\n```jsx\nimport { Fragment } from 'react';\nimport { View, Text } from 'react-native';\nimport { Drawer, Button } from '@uiw/react-native';\n\nfunction Demo() {\n  const [visible, setVisible] = useState(false);\n  return (\n    <Fragment>\n      <Drawer\n        isOpen={visible}\n        placement=\"right\"\n        onChange={(isOpen) => setVisible(isOpen)}\n      >\n        <View>\n          <Text>\u5de6\u8fb9\u6253\u5f00\u62bd\u5c49\u5185\u5bb9</Text>\n        </View>\n      </Drawer>\n      <Button onPress={() => setVisible(!visible)}>\u5de6\u8fb9\u6253\u5f00\u62bd\u5c49</Button>\n    </Fragment>\n  );\n}\n```\n\n## \u6ce8\u610f\u4e8b\u9879 - \u62bd\u5c49\u9ad8\u5ea6\u662f\u9875\u9762\u6709\u6548\u9ad8\u5ea6\n\n```jsx\nimport { Fragment } from 'react';\nimport { View, Text, SafeAreaView } from 'react-native';\nimport { Drawer, Button } from '@uiw/react-native';\n\nfunction Demo() {\n  const [visible, setVisible] = useState(false);\n  return (\n    <SafeAreaView style={{flex: 1}}>\n      <Drawer\n        isOpen={visible}\n        onChange={(isOpen) => setVisible(isOpen)}\n      >\n        <View>\n          <Text>\u5de6\u8fb9\u6253\u5f00\u62bd\u5c49\u5185\u5bb9</Text>\n        </View>\n      </Drawer>\n      <Button onPress={() => setVisible(!visible)}>\u5de6\u8fb9\u6253\u5f00\u62bd\u5c49</Button>\n    </SafeAreaView>\n  );\n}\n```   \n\n## \u62bd\u5c49\u8986\u76d6\u5168\u5c4f\n\n- \u53ef\u67e5\u770b [react-native-root-siblings](https://www.npmjs.com/package/react-native-root-siblings) \u6587\u6863\n```jsx\n// \u5728 App.js \u6587\u4ef6\u4e2d \nimport React from 'react';\nimport {Provider} from 'react-redux';\nimport {store} from './models';\nimport {RootSiblingParent} from 'react-native-root-siblings';\n\nexport default () => {\n  return (\n    <Provider store={store}>\n      <RootSiblingParent> \n       {/* ...\u4f60\u7684\u5bfc\u822a\u4e4b\u7c7b\u7684\u7ec4\u4ef6 */}\n      </RootSiblingParent>\n    </Provider>\n  );\n};\n\n\n// \u5728\u4f7f\u7528\u7ec4\u4ef6\u9875\u9762\nimport { Fragment } from 'react';\nimport { View, Text, SafeAreaView } from 'react-native';\nimport { Drawer, Button } from '@uiw/react-native';\nimport {RootSiblingPortal} from 'react-native-root-siblings';\n\nfunction Demo() {\n  const [visible, setVisible] = useState(false);\n  return (\n    <SafeAreaView>\n      <RootSiblingPortal>\n        <Drawer\n          isOpen={visible}\n          onChange={(isOpen) => setVisible(isOpen)}\n        >\n          {/* SafeAreaView \u8fd9\u6837\u505a\u662f\u6709\u5fc5\u8981\u7684\uff0c\u56e0\u4e3a\u624b\u673a\u65f6\u95f4\u662f\u9700\u8981\u4e0e\u5185\u5bb9\u5206\u5f00\u7684\uff0c\u9664\u975e\u4f60\u5e76\u4e0d\u9700\u8981 */}\n          <SafeAreaView> \n            <Text>\u5de6\u8fb9\u6253\u5f00\u62bd\u5c49\u5185\u5bb9</Text>\n          </SafeAreaView>\n        </Drawer>\n      </RootSiblingPortal>\n      <Button onPress={() => setVisible(!visible)}>\u5de6\u8fb9\u6253\u5f00\u62bd\u5c49</Button>\n    </SafeAreaView>\n  );\n}\n``` \n\n## props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|------|------|-----|------|\n| `isOpen` | \u662f\u5426\u53ef\u89c1 | Boollean | `false` |\n| `placement` | \u62bd\u5c49\u7684\u65b9\u5411 | `right`, `left` , `top` `bottom`| `left` |\n| `drawerWidth` | \u62bd\u5c49\u5bbd\u5ea6(`placement`\u4e3a`right`\u6216`left`\u751f\u6548)  | Number | `300` |\n| `drawerHeight` | \u62bd\u5c49\u9ad8\u5ea6(`placement`\u4e3a`top`\u6216`bottom`\u751f\u6548) | Number | `500` |\n| `style` | \u8bbe\u7f6e `Drawer` \u6837\u5f0f | ViewStyle | - |\n| `maskProps` | \u906e\u7f69\u5c42\u6837\u5f0f | ViewStyle | - |\n| `maskClosable` | \u70b9\u51fb\u906e\u7f69\u5c42\u662f\u5426\u5141\u8bb8\u5173\u95ed | Boollean | `true` |\n| `drawerBackgroundColor` | \u6307\u5b9a\u62bd\u5c49\u80cc\u666f\u8272 | String | `#fff` |\n| `onChange` | open \u72b6\u6001\u5207\u6362\u65f6\u8c03\u7528 | (isOpen: boolean): void | - |\n| `openDrawer` | \u6253\u5f00\u51fd\u6570 | (isOpen: boolean): void | - |\n| `closeDrawer` | \u5173\u95ed\u51fd\u6570 | (isOpen: boolean): void | - |"}}]);
//# sourceMappingURL=79.a6de7115.chunk.js.map