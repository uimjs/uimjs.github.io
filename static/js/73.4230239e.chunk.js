(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[73],{1061:function(n,e,t){"use strict";t.r(e),e.default="Avatar \u5934\u50cf\n---\n\n\u7528\u6765\u4ee3\u8868\u7528\u6237\u6216\u4e8b\u7269\uff0c\u652f\u6301\u56fe\u7247\u5c55\u793a\uff0c\u5f53\u524d\u662f\u57fa\u4e8e React Native \u7ec4\u4ef6 Image \u5c01\u88c5\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u66f4\u5feb\u7684\u56fe\u7247\u5c55\u793a\u63d2\u4ef6 [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image)\u3002\n\n<img src='https://user-images.githubusercontent.com/57083007/137631738-4338453c-c552-4caa-9261-8fd84c018942.png' alt='Avatar' style='zoom:33%;' />\n\n### \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport { View } from 'react-native';\nimport { Avatar } from '@uiw/react-native';\n\nconst uri = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAMAAAC7m5rvAAAAllBMVEUAAAC/v7+qqqrHx8evr6/ExMS5ubmxsbGsrKysrKytra2pqam8vLy9vb2lpaXExMT////s7Oz8/Pz09PTu7u729vb5+fnp6enMzMzLy8vm5ub4+Pjj4+O3t7fx8fHb29vAwMDHx8ePj4/S0tLf39+rq6ulpaWSkpK7u7vY2NjR0dGnp6eenp6ampqysrLPz8+fn5+ioqKXtObzAAAAEHRSTlMA6wT4/e/f0KyZSy/z8mz4uKbH2gAAA6FJREFUSMellody2zAMhuXEGU6TVBgkbGp529np+79cKREUpbrxdfxnn7g+cYACkKku7m5vricPl4v5Yq5arWLJN14+TK5vbu8udLhCsyuHeY6QD0Q0rEHb765mA/DbJIw4j4XGybdIPV5q13lMC9NHnWvKpxhiAVBYPMX4ezffxSQnHmFoahFgkRpEmHCEMeWTdn8zygOnmAVhkxZZ1AImYdyOnvnJrrohrBiymF/3ZgGsYty1XV1kdy6MATKGnJRgoiAVuRRH/inhTe4uu9U1Q8MMmy0nOcdJ5bMwbEs9g9vsJg8yjq2UXxugdJYBtHKTXUeM64bO2c00bGP/dTbBIAIBERyIaFgTASHQyiS7hyC3KaHcQNSm2r2+vbwvBFRt91OjlfssXizZ+q2WjN3yqvXrcfWxmS/362lYGJfYjQm6zBah4InWbtRyy3UlGPaGvDxU6B8EvqVo9NgX2TwUGDosJzb7vQyPBHafxNSZ2zq9hXOdzYoJWM6Hyo5P0h4PkAcMwI5mAxOx/bvgGEOpfqBihoezoeSKLffWAA4xBLIvS8VywYR5RjFaix8PmDBs77+sa8XYDDA2ilVV9xbAiCF0cFUpZniASa6Yn0y5aICO8tMplkvCMGKbV8x7jqhbYSf8fI4YJgwUq46+FjmillIdK8UgYQUrtlvliaspUflqpxgXHbYiIhD/d77w+kG9oGkg1T5eiYhLImkbV2PsbUO96qcnStq8jbCwyFoX+TJPjhK8kpucv+gi66LfmwXF3peJMkQmcct3xcCeGmCxx55qDdBzuF8kA5yYW9bcUy3Wc7x2p+bOuQgYTJdKxctVBG65g4AVMMCoVgwOECjFlOMDKFbTbz+camcRilwxvS84rX79cPQztYrh51HM+DMtZPmGilkYOQUDiuX1iVPA44F7p2DGLghYZwP+8SJDjKdvADqbg+SCOtmyw9p94anDKwCDw7Pq8JJ7LduTga69rtaf0b3uIJyneAySe32AIPdc+r8D1bM6c23oulzvzB9S6BDnf1+HDifkUugYBCrT1OcCVd1QClQpLALQubDoHAGlsBiDMG3J0pMUthdzKhfw5LtLiUE4hnx0AgDNtnEQVZYQ5XyHf8jWasjXBAPBxgQDziQYFqwmGNmMlIrpDH+ZzihHs5A8+co4eeKUPEFKngKHIXnKvn0H++epmoWppoaP079JDL8//lsa+p9Jb0qx77sUexG0WmmhS7HvRyn2TxZ1zUyK+LY0AAAAAElFTkSuQmCC';\n\nfunction Demo() {\n  return (\n    <View style={{ flexDirection: 'row' }}>\n      <Avatar src=\"https://xx.images.com/xxx/icon.png\" />\n      <Avatar src={uri} />\n    </View>\n  );\n}\n```\n\n### props\n\n\u7ee7\u627f [View](https://facebook.github.io/react-native/docs/view#props) \u7ec4\u4ef6\u3002\n\n```ts\nimport { ViewProps } from 'react-native';\n\nexport interface AvatarProps extends ViewProps {\n  /** React Native `Image` \u7ec4\u4ef6 Props */\n  imageProps?: ImageProps;\n  /** \u56fe\u50cf\u6e90\uff08\u8fdc\u7a0bURL\u6216\u672c\u5730\u6587\u4ef6\u8d44\u6e90\uff09\u3002 */\n  src?: string | number;\n  /**\n   * \u5c3a\u5bf8\n   * @default 40\n   */\n  size?: number;\n  /**\n   * \u8bbe\u7f6e\u5706\u89d2\n   * @default 3\n   */\n  rounded?: number;\n  /**\n   * \u6307\u5b9a\u5934\u50cf\u7684\u5f62\u72b6\n   * @default square\n   */\n  shape?: 'circle' | 'square';\n}\n```"}}]);
//# sourceMappingURL=73.4230239e.chunk.js.map