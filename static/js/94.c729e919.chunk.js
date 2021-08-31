(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[94],{724:function(n,e,a){"use strict";a.r(e),e.default="SearchBar \u6a21\u7cca\u641c\u7d20\u7ec4\u4ef6\n---\n\n## \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport { Result, Icon } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <SearchBar \n      labelInValue \n      options={[\n        {label:'\u4e0a\u6d77',value:1},\n        {label:'\u5357\u4eac',value:2}\n      ]} \n      onFocu={()=>{}}  \n      onChange={val=>console.log('val',val)} \n    />\n  );\n}\n```\n\n### props\n\n```ts\ninterface OptionsState {\n  label: string;\n  value: string | number;\n}\n\ninterface SearchBarProps {\n  /** \u641c\u7d22\u6846\u6587\u5b57\u53d8\u5316 */\n  onChangeText?: (value: string) => void;\n  /** \u6570\u636e\u5316\u914d\u7f6e\u9009\u9879\u5185\u5bb9\uff0c\u76f8\u6bd4 jsx \u5b9a\u4e49\u4f1a\u83b7\u5f97\u66f4\u597d\u7684\u6e32\u67d3\u6027\u80fd */\n  options?: Array<OptionsState>;\n  /** \u4e8b\u4ef6\u53d8\u5316\u56de\u8c03 */\n  onChange?: (value: string | null) => void;\n  /** \u83b7\u5f97\u7126\u70b9\u65f6\u56de\u8c03 */\n  onFocus?: (e: any | string) => void;\n  /** \u662f\u5426\u628a\u6bcf\u4e2a\u9009\u9879\u7684 label \u5305\u88c5\u5230 value \u4e2d\uff0c\u4f1a\u628a Select \u7684 value \u7c7b\u578b\u4ece string \u53d8\u4e3a { key: string, label: ReactNode } \u7684\u683c\u5f0f   */\n  labelInValue?: Boolean;\n  /** \u662f\u5426\u7981\u7528 */\n  disabled?: Boolean;\n  /** \u503c */\n  value?: String;\n  /** \u52a0\u8f7d\u4e2d\u72b6\u6001 */\n  loading?: Boolean;\n  /** \u641c\u7d22\u6846\u9ed8\u8ba4\u6587\u672c */\n  placeholder?: String;\n  /** \u56fe\u6807 */\n  extra?: JSX.Element;\n  /** \u662f\u5426\u5c55\u793a\u6e05\u695a\u56fe\u6807 */\n  showClear?: boolean;\n}\n```"}}]);
//# sourceMappingURL=94.c729e919.chunk.js.map