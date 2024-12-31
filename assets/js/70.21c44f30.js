(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{441:function(t,s,a){"use strict";a.r(s);var n=a(5),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"步骤1-安装mock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤1-安装mock"}},[t._v("#")]),t._v(" 步骤1：安装mock")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[t._v("npm install mockjs "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("D\n")])])]),s("h3",{attrs:{id:"步骤2-在项目src目录下-创建mock文件夹-并创建index-js文件-并划分模块-如下-module-login-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤2-在项目src目录下-创建mock文件夹-并创建index-js文件-并划分模块-如下-module-login-js"}},[t._v("#")]),t._v(" 步骤2：在项目src目录下，创建mock文件夹，并创建index.js文件，并划分模块，如下：module/login.js")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Mock "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mockjs"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" loginApi "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./module/login"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//mock用法里面的参数：1、拦截的路径,可以采用正则表达式进行编写；2、方法；3、制造出的假数据")]),t._v("\nMock"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mock")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/dev-api/code"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    loginApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCodeImg")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带参数的get请求可以用正则匹配")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Mock.mock(")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//     RegExp("/dev-api/model/content/getAllList" + ".*"),')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//     "get",')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     list.contentGetAllList()")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// )")]),t._v("\n")])])]),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getCodeImg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"操作成功"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"img"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"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"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"code"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"captchaEnabled"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"uuid"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fd608978c44a45f88e74f1c0323f9412"')]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"步骤3-在main-js中引入mock-index-js文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤3-在main-js中引入mock-index-js文件"}},[t._v("#")]),t._v(" 步骤3：在main.js中引入mock/index.js文件")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(' "@'),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("api"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mock"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n")])])]),s("p",[t._v("🏁 相关链接：")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://mockjs.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mockjs 官方文档"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/qq_44170108/article/details/134945658",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mockjs 增、删、改、查（分页、多条件查询）"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);