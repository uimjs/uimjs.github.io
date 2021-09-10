(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[100],{753:function(n,t,e){"use strict";e.r(t),t.default="SearchInputBar \u52a8\u4f5c\u9762\u677f\n---\n\n\u53ef\u7528\u4e8e\u7528\u6237\u8f93\u5165\u641c\u7d22\u4fe1\u606f\n\n## \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport { Fragment, useState } from 'react';\nimport { SearchInputBar } from '@uiw/react-native';\nfunction Demo() {\n  const [value, setValue] = useState('')\n  return (\n    <Fragment>\n      <SearchInputBar\n        onChangeText={setValue}\n        onClear={()=>setValue('')}\n        value={value}\n        button={{\n          onPress() {\n            // \u70b9\u51fb\u641c\u7d22\u6309\u94ae\u89e6\u6cd5\n          }\n        }}\n      />\n    </Fragment>\n  );\n}\n```\n\n## \u4e00\u76f4\u663e\u793a\u53f3\u4fa7\u6309\u94ae && \u81ea\u5b9a\u4e49placeholder\n\n```jsx\nimport { Fragment, useState } from 'react';\nimport { SearchInputBar } from '@uiw/react-native';\nfunction Demo() {\n  const [value, setValue] = useState('')\n  return (\n    <Fragment>\n      <SearchInputBar\n        onChangeText={setValue}\n        onClear={()=>setValue('')}\n        value={value}\n        placeholder=\"\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57\"\n        actionName=\"\u641c\u4e00\u4e0b\"\n        showActionButton\n        button={{\n          onPress() {\n            // \u70b9\u51fb\u641c\u7d22\u6309\u94ae\u89e6\u6cd5\n          }\n        }}\n      />\n    </Fragment>\n  );\n}\n```\n\n\n## Props\n\n```ts\nimport { TextInputProps } from 'react-native';\nimport { ButtonProps } from '@uiw/react-native'\n\nexport interface SearchInputBarProps extends TextInputProps {\n  /** \u70b9\u51fb\u6e05\u9664\u6309\u94ae\u65f6\u89e6\u53d1\u4e8b\u4ef6 */\n  onClear?: Function,\n  /** \u53f3\u4fa7\u6309\u94ae */\n  button?: ButtonProps\n  /** \u53f3\u4fa7\u6309\u94ae\u6587\u6848 */\n  actionName?: string,\n  /** \u53f3\u4fa7\u6309\u94ae\u5bbd\u5ea6\u9ed8\u8ba470 */\n  buttonWidth?: number,\n  /** \u662f\u5426\u4e00\u76f4\u663e\u793a\u53f3\u4fa7\u6309\u94ae */\n  showActionButton?: boolean\n}\n```"}}]);
//# sourceMappingURL=100.0b5014ad.chunk.js.map