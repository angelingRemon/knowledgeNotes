(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{421:function(t,s,a){"use strict";a.r(s);var n=a(5),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h2",{attrs:{id:"-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#-2"}},[t._v("#")])]),t._v(" "),s("h2",{attrs:{id:"代码可读性低代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码可读性低代码"}},[t._v("#")]),t._v(" ==代码可读性低代码==")]),t._v(" "),s("ul",[s("li",[t._v("==代码规范落地难==")]),t._v(" "),s("li",[t._v("==代码格式难统一==")]),t._v(" "),s("li",[t._v("==代码质量低下==")])]),t._v(" "),s("h2",{attrs:{id:"配置-eslint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-eslint"}},[t._v("#")]),t._v(" 配置 ESLint")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("ESLint")]),t._v(" 是一个用来识别 "),s("strong",[t._v("ECMAScript")]),t._v(" 并且按照规则给出报告的代码检测工具，使用它可以避免低级错误和统一代码的风格。它拥有以下功能：\n"),s("ul",[s("li",[t._v("查出 JavaScript 代码语法问题。")]),t._v(" "),s("li",[t._v("根据配置的规则，标记不符合规范的代码。")]),t._v(" "),s("li",[t._v("自动修复一些结构、风格问题。")])])]),t._v(" "),s("li",[t._v("防止代码很难维护，可以帮我们检查有没有死循环，有没有定义但未使用的变量等等。")]),t._v(" "),s("li",[s("strong",[t._v("ESLint官方文档")]),t._v("："),s("a",{attrs:{href:"https://eslint.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint - Pluggable JavaScript linter - ESLint中文"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖"}},[t._v("#")]),t._v(" 安装依赖")]),t._v(" "),s("div",{staticClass:"language-lua extra-class"},[s("pre",{pre:!0,attrs:{class:"language-lua"}},[s("code",[t._v("pnpm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("D eslint @eslint"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("create"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("config\n")])])]),s("ul",[s("li",[t._v("@eslint/create-config：eslint配置文件初始化工具")])]),t._v(" "),s("h3",{attrs:{id:"生成配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成配置文件"}},[t._v("#")]),t._v(" 生成配置文件")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  生成 ESLint 配置文件模板")]),t._v("\nnpx eslint "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--init")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 出现如下选择")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择2 我们会使用 prettier 进行代码风格校验")]),t._v("\nHow would you like to use ESLint?\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".只检查语法\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".检查语法并提示问题\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(".检查语法、提示问题并且强制使用一些代码风格\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 你的项目用的哪一种模块化方式 选择1")]),t._v("\nWhat "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" of modules does your project use?\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".ES6\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".CommonJS\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(".None\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用的框架 选择2")]),t._v("\nWhich framework does your project use?\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".React\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".Vue.js\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(".None\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目是否使用TS yes")]),t._v("\nDoes your project use TypeScript?\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目在哪里跑的 选择1")]),t._v("\nWhere does your code run?\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".browser\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".node\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目用哪种配置文件 选择1")]),t._v("\nWhat "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" you want your config "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" to be in?\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(".JavaScript\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".YAML\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(".JSON\n \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否立即安装需要的依赖")]),t._v("\nWould you like to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" them now?\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 会帮我们安装如下插件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# pnpm install -D eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest")]),t._v("\n")])])]),s("ul",[s("li",[t._v("熟悉之后我们就可以不使用配置生成工具")]),t._v(" "),s("li",[t._v("直接新建配置文件进行配置即可")]),t._v(" "),s("li",[t._v("ESLint配置文件名称可以为：.eslintrc.js、.eslint.config.js （根据个人习惯选择即可）")])]),t._v(" "),s("p",[t._v("这里是我常用的配置规则，更多配置规则请查阅"),s("a",{attrs:{href:"https://eslint.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint中文"),s("OutboundLink")],1),t._v("。\n单独的语法配置需要在rules中编写，全部配置请参考："),s("a",{attrs:{href:"https://eslint.cn/docs/rules/",target:"_blank",rel:"noopener noreferrer"}},[t._v("List of available rules - ESLint中文"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使 eslint 支持 node 与 ES6")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("browser")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("es2021")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("node")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入推荐的语法校验规则")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:vue/vue3-recommended'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'plugin:@typescript-eslint/recommended'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("overrides")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* \n   这里一定要配置对 先使用vue-eslint-parser 再使用@typescript-eslint/parser\n   先解析 <template> 标签中的内容 然后再解析 vue <script> 标签中的 TS 代码\n   */")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 选择使用的解析器")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parser")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue-eslint-parser'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解析器的详细配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parserOptions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用最新版 ES 语法")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ecmaVersion")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'latest'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 ESLint TS 解析器")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parser")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@typescript-eslint/parser'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用 ES 模块化规范")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sourceType")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用的插件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@typescript-eslint'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自定义规则")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("rules")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'@typescript-eslint/no-unused-vars'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("indent")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("SwitchCase")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'vue/multi-word-component-names'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ignores")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Header'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//需要忽略的组件名")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'@typescript-eslint/no-var-requires'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'@typescript-eslint/no-explicit-any'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("semi")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'@typescript-eslint/no-this-alias'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'eslintno-debugger'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'vue/no-unused-vars'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'vue/no-template-shadow'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'vue/require-v-for-key'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'vue/no-textarea-mustache'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'vue/no-v-html'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'off'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("配置完规则后我们配置一条指令用于代码质量的修复")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --cache 为仅检测改动过的代码")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// --max-warnings 0 表示出现超过0个警告强制eslint以错误状态推出")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lint:eslint"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eslint --cache --max-warnings 0 {src,mock}/**/*.{vue,ts,tsx} --fix"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("我们还可以配置忽略文件，让 ESLint 不对这些文件进行校验。\n新建 .eslintignore 进行配置。")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("node_modules\n*.md\n.vscode\n.idea\ndist\n/public\n/docs\n.husky\n.local\n/bin\nDockerfile\n")])])]),s("h3",{attrs:{id:"自动修复"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动修复"}},[t._v("#")]),t._v(" 自动修复")]),t._v(" "),s("ul",[s("li",[t._v("大部分IDE支持在修改代码后进行自动修复")])]),t._v(" "),s("ol",[s("li",[t._v("WebStorme：直接在Setting中搜索ESLint即可进行配置")]),t._v(" "),s("li",[t._v("VSCode：需要在项目目录下加入如下配置文件，还需要下载ESLint插件")])]),t._v(" "),s("p",[s("strong",[t._v("/.vscode/settings.json")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"editor.codeActionsOnSave"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"source.fixAll"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);