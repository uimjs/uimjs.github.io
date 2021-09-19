(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[111],{740:function(n,e,t){"use strict";t.r(e),e.default="Tabs \u9009\u9879\u5361\n---\n\n\u9009\u9879\u5361\u7ec4\u4ef6\u8de8\u4e0d\u540c\u5c4f\u5e55\u3001\u6570\u636e\u96c6\u548c\u5176\u4ed6\u4ea4\u4e92\u7684\u5185\u5bb9\u3002\n\n## \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport { Fragment } from 'react';\nimport { Tabs } from '@uiw/react-native';\nconst { Item } = Tabs\nfunction Demo() {\n  return (\n    <Fragment>\n      <Tabs>\n        <Item \n          title=\"\u559c\u6b22\"\n        />\n        <Tabs.Item \n          title=\"\u5173\u6ce8\"\n        />\n        <Tabs.Item \n          title=\"\u4fe1\u606f\"\n        />\n        <Tabs.Item \n          title=\"\u6211\u7684\"\n        />\n        <Tabs.Item \n          title=\"\u504f\u597d\"\n        />\n      </Tabs>\n    </Fragment>\n  );\n}\n```\n\n## \u4f7f\u7528 Icon\n\n```jsx\nimport { Fragment } from 'react';\nimport { Tabs, Icon } from '@uiw/react-native';\nfunction Demo() {\n  return (\n    <Fragment>\n     <Tabs>\n      <Tabs.Item \n        title=\"\u559c\u6b22\"\n        icon='heart-on'\n      />\n      <Tabs.Item \n        title=\"\u5173\u6ce8\"\n        icon={<Icon name='star-on' color=\"#fff\" size={24} />}\n      />\n      <Tabs.Item \n        title=\"\u4fe1\u606f\"\n        icon='mail'\n      />\n    </Tabs>\n    </Fragment>\n  );\n}\n```\n\n## Tabs Props\n\n```ts\nimport { ViewStyle,ViewProps } from 'react-native';\n\nexport interface TabsProps extends ViewProps {\n  /** \u5b50\u5143\u7d20 */\n  children?: JSX.Element | Array<JSX.Element>\n  /** \u5bb9\u5668\u6837\u5f0f */\n  style?: ViewStyle\n}\n```\n\n\n## Tabs.Item Props\n\n```ts\nimport { IconsName } from '@uiw/react-native';\n\nexport type TabsItemIconTypes = IconsName | React.ReactElement | React.ReactNode | JSX.Element\n\n/** \u6837\u5f0f\u96c6\u5408\u7c7b\u578b */\nexport interface TabsItemStyle {\n  /** \u5bbd\u5ea6 */\n  width?: number,\n  /** \u6587\u5b57\u989c\u8272 */\n  titleColor?: string,\n  /** \u6587\u5b57\u7c97\u7ec6 */\n  titleFontWeight?: '100'|'200'|'300'|'400'|'500'|'600'|'700'|'800'|'900'|'bold'|'normal',\n  /** \u6587\u5b57\u5927\u5c0f */\n  titleSize?: number,\n  /** icon \u989c\u8272 */\n  iconColor?: string,\n  /** icon \u5927\u5c0f */\n  iconSize?: number,\n  /** border \u5bbd\u5ea6 */\n  borderWidth?: number,\n  /** border \u989c\u8272 */\n  borderColor?: string,\n  /** border \u8ddd\u79bb\u5e95\u90e8\u8ddd\u79bb\u4e00\u822c\u4e0e Tabs paddingBottom \u76f8\u7b49 */\n  borderBottom?: number,\n  /** border \u7c97\u7ec6 */\n  borderHeight?: number\n}\nexport interface TabsItemProps {\n  /** \u663e\u793a\u7684\u6587\u5b57 */\n  title: string,\n  /** \u6837\u5f0f\u96c6\u5408 */\n  style?: TabsItemStyle,\n  /** \n   * \u70b9\u51fb\u65f6\u89e6\u53d1\n   * void \n   * @param title type: string title \u6587\u5b57\n   */\n  onPress?: (title: string) => void,\n  /** \u56fe\u6807 */\n  icon?: TabsItemIconTypes,\n  /** \u662f\u5426\u663e\u793a\u4e0b\u8fb9\u6846 */\n  border?: boolean\n}\n```"}}]);
//# sourceMappingURL=111.6af04f8e.chunk.js.map