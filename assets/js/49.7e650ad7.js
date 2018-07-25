(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{282:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"vue-项目技术随笔"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-项目技术随笔","aria-hidden":"true"}},[t._v("#")]),t._v(" vue 项目技术随笔")]),s("h2",{attrs:{id:"vue-路由切换时页面内容没有重新加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-路由切换时页面内容没有重新加载","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue 路由切换时页面内容没有重新加载")]),s("blockquote",[s("p",[t._v("问题原因：在组件mounted钩子中调用的刷新页面内容，但测试发现这个钩子没有被调用。后来发现App.vue中使用了： keep-alive是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。这就是问题所在了。")])]),s("ul",[s("li",[t._v("解决办法:")])]),s("p",[t._v("使用Vue组件切换过程钩子activated(keep-alive组件激活时调用)，而不是挂载钩子mounted：")]),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  activated"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("this")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("getData")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}],!1,null,null,null);a.default=e.exports}}]);