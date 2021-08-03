(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[68],{801:function(n,e,t){"use strict";t.r(e),e.default="Modal \u6a21\u6001\u6846\n---\n\n\u6a21\u6001\u5bf9\u8bdd\u6846\u3002\n\n### \u57fa\u7840\u793a\u4f8b\n\n\x3c!--DemoStart--\x3e \n```jsx\nimport React, { Component, Fragment } from 'react';\nimport { View, Text, Alert, SafeAreaView } from 'react-native';\nimport { Modal, Button } from '@uiw/react-native';\n\nexport default class ButtonGroupView extends Component {\n  state = {\n    modalVisible: false,\n  };\n\n  setModalVisible(visible) {\n    this.setState({ modalVisible: visible });\n  }\n\n  render() {\n    return (\n      <Fragment>\n        <Modal\n          visible={this.state.modalVisible}\n        >\n          <SafeAreaView>\n            <View>\n              <Text>Hello World!</Text>\n              <Button onPress={() => this.setModalVisible(!this.state.modalVisible)}>\n                \u9690\u85cf\u6a21\u6001\u6846\n              </Button>\n              <Icon name=\"apple\" />\n            </View>\n          </SafeAreaView>\n        </Modal>\n        <Button onPress={() => this.setModalVisible(true)}>\n          \u663e\u793a\u6a21\u6001\u6846\n        </Button>\n      </Fragment>\n    );\n  }\n}\n```\n\x3c!--End--\x3e\n\n## Props\n\n\u7ee7\u627f\u539f\u751f Modal \u5c5e\u6027 [`ModalProps`](https://facebook.github.io/react-native/docs/modal.html#props)"}}]);
//# sourceMappingURL=68.f57ca43e.chunk.js.map