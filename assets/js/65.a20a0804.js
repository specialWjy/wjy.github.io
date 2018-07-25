(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{266:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("p",[s("strong",[t._v("Table of Contents")]),s("em",[t._v("generated with "),s("a",{attrs:{href:"https://github.com/thlorenz/doctoc",target:"_blank",rel:"noopener noreferrer"}},[t._v("DocToc"),s("OutboundLink")],1)])]),t._m(0),t._m(1),t._m(2),s("p",[t._v("DNS 解析也是需要时间的，可以通过预解析的方式来预先获得域名所对应的 IP。")]),t._m(3),t._m(4),s("p",[t._v("缓存对于前端性能优化来说是个很重要的点，良好的缓存策略可以降低资源的重复加载提高网页的整体加载速度。")]),s("p",[t._v("通常浏览器缓存策略分为两种：强缓存和协商缓存。")]),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),s("p",[t._v("如果缓存过期了，我们就可以使用协商缓存来解决问题。协商缓存需要请求，如果缓存有效会返回 304。")]),s("p",[t._v("协商缓存需要客户端和服务端共同实现，和强缓存一样，也有两种实现方式。")]),t._m(12),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),s("p",[t._v("对于大部分的场景都可以使用强缓存配合协商缓存解决，但是在一些特殊的地方可能需要选择特殊的缓存策略")]),t._m(18),t._m(19),s("p",[t._v("因为浏览器会有并发请求限制，在 HTTP / 1.1 时代，每个请求都需要建立和断开，消耗了好几个 RTT 时间，并且由于 TCP 慢启动的原因，加载体积大的文件会需要更多的时间。")]),s("p",[t._v("在  HTTP / 2.0 中引入了多路复用，能够让多个请求使用同一个 TCP 链接，极大的加快了网页的加载速度。并且还支持 Header 压缩，进一步的减少了请求的数据大小。")]),s("p",[t._v("更详细的内容你可以查看 "),s("router-link",{attrs:{to:"./../Network/Network-zh.html##http-20"}},[t._v("该小节")])],1),t._m(20),s("p",[t._v("在开发中，可能会遇到这样的情况。有些资源不需要马上用到，但是希望尽早获取，这时候就可以使用预加载。")]),t._m(21),t._m(22),s("p",[t._v("预加载可以一定程度上降低首屏的加载时间，因为可以将一些不影响首屏但重要的文件延后加载，唯一缺点就是兼容性不好。")]),t._m(23),s("p",[t._v("可以通过预渲染将下载的文件预先在后台渲染，可以使用以下代码开启预渲染")]),t._m(24),s("p",[t._v("预渲染虽然可以提高页面的加载速度，但是要确保该页面百分百会被用户在之后打开，否则就白白浪费资源去渲染")]),t._m(25),s("p",[t._v("对于代码层面的优化，你可以查阅浏览器系列中的 "),s("router-link",{attrs:{to:"./../Browser/browser-ch.html#渲染机制"}},[t._v("相关内容")]),t._v("。")],1),t._m(26),s("p",[t._v("懒执行就是将某些逻辑延迟到使用时再计算。该技术可以用于首屏优化，对于某些耗时逻辑并不需要在首屏就使用的，就可以使用懒执行。懒执行需要唤醒，一般可以通过定时器或者事件的调用来唤醒。")]),t._m(27),s("p",[t._v("懒加载就是将不关键的资源延后加载。")]),t._m(28),s("p",[t._v("懒加载不仅可以用于图片，也可以使用在别的资源上。比如进入可视区域才开始播放视频等等。")]),t._m(29),t._m(30),t._m(31),s("p",[t._v("对于一张 100 * 100 像素的图片来说，图像上有 10000 个像素点，如果每个像素的值是 RGBA 存储的话，那么也就是说每个像素有 4 个通道，每个通道 1 个字节（8 位 = 1个字节），所以该图片大小大概为 39KB（10000 * 1 * 4 / 1024）。")]),s("p",[t._v("但是在实际项目中，一张图片可能并不需要使用那么多颜色去显示，我们可以通过减少每个像素的调色板来相应缩小图片的大小。")]),s("p",[t._v("了解了如何计算图片大小的知识，那么对于如何优化图片，想必大家已经有 2 个思路了：")]),t._m(32),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),s("p",[t._v("静态资源尽量使用 CDN 加载，由于浏览器对于单个域名有并发请求上限，可以考虑使用多个 CDN 域名。对于 CDN 加载静态资源需要注意 CDN 域名要与主站不同，否则每次请求都会带上主站的 Cookie。")]),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),t._m(43),t._m(44),s("p",[t._v("但是要注意线上运行的代码都是压缩过的，需要在打包时生成 sourceMap 文件便于 debug。")]),t._m(45),t._m(46),t._m(47),t._m(48),t._m(49)])},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[s("a",{attrs:{href:"#%E7%BD%91%E7%BB%9C%E7%9B%B8%E5%85%B3"}},[t._v("网络相关")]),s("ul",[s("li",[s("a",{attrs:{href:"#dns-%E9%A2%84%E8%A7%A3%E6%9E%90"}},[t._v("DNS 预解析")])]),s("li",[s("a",{attrs:{href:"#%E7%BC%93%E5%AD%98"}},[t._v("缓存")]),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%BC%BA%E7%BC%93%E5%AD%98"}},[t._v("强缓存")])]),s("li",[s("a",{attrs:{href:"#%E5%8D%8F%E5%95%86%E7%BC%93%E5%AD%98"}},[t._v("协商缓存")]),s("ul",[s("li",[s("a",{attrs:{href:"#last-modified-%E5%92%8C-if-modified-since"}},[t._v("Last-Modified 和 If-Modified-Since")])]),s("li",[s("a",{attrs:{href:"#etag-%E5%92%8C-if-none-match"}},[t._v("ETag 和 If-None-Match")])])])]),s("li",[s("a",{attrs:{href:"#%E9%80%89%E6%8B%A9%E5%90%88%E9%80%82%E7%9A%84%E7%BC%93%E5%AD%98%E7%AD%96%E7%95%A5"}},[t._v("选择合适的缓存策略")])])])]),s("li",[s("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8-http--20"}},[t._v("使用 HTTP / 2.0")])]),s("li",[s("a",{attrs:{href:"#%E9%A2%84%E5%8A%A0%E8%BD%BD"}},[t._v("预加载")])]),s("li",[s("a",{attrs:{href:"#%E9%A2%84%E6%B8%B2%E6%9F%93"}},[t._v("预渲染")])])])]),s("li",[s("a",{attrs:{href:"#%E4%BC%98%E5%8C%96%E6%B8%B2%E6%9F%93%E8%BF%87%E7%A8%8B"}},[t._v("优化渲染过程")]),s("ul",[s("li",[s("a",{attrs:{href:"#%E6%87%92%E6%89%A7%E8%A1%8C"}},[t._v("懒执行")])]),s("li",[s("a",{attrs:{href:"#%E6%87%92%E5%8A%A0%E8%BD%BD"}},[t._v("懒加载")])])])]),s("li",[s("a",{attrs:{href:"#%E6%96%87%E4%BB%B6%E4%BC%98%E5%8C%96"}},[t._v("文件优化")]),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%9B%BE%E7%89%87%E4%BC%98%E5%8C%96"}},[t._v("图片优化")]),s("ul",[s("li",[s("a",{attrs:{href:"#%E8%AE%A1%E7%AE%97%E5%9B%BE%E7%89%87%E5%A4%A7%E5%B0%8F"}},[t._v("计算图片大小")])]),s("li",[s("a",{attrs:{href:"#%E5%9B%BE%E7%89%87%E5%8A%A0%E8%BD%BD%E4%BC%98%E5%8C%96"}},[t._v("图片加载优化")])])])]),s("li",[s("a",{attrs:{href:"#%E5%85%B6%E4%BB%96%E6%96%87%E4%BB%B6%E4%BC%98%E5%8C%96"}},[t._v("其他文件优化")])]),s("li",[s("a",{attrs:{href:"#cdn"}},[t._v("CDN")])])])]),s("li",[s("a",{attrs:{href:"#%E5%85%B6%E4%BB%96"}},[t._v("其他")]),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%BD%BF%E7%94%A8-webpack-%E4%BC%98%E5%8C%96%E9%A1%B9%E7%9B%AE"}},[t._v("使用 Webpack 优化项目")])]),s("li",[s("a",{attrs:{href:"#%E7%9B%91%E6%8E%A7"}},[t._v("监控")])]),s("li",[s("a",{attrs:{href:"#%E9%9D%A2%E8%AF%95%E9%A2%98"}},[t._v("面试题")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"网络相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络相关","aria-hidden":"true"}},[this._v("#")]),this._v(" 网络相关")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"dns-预解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-预解析","aria-hidden":"true"}},[this._v("#")]),this._v(" DNS 预解析")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//yuchengkai.cn"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 缓存")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"强缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 强缓存")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("实现强缓存可以通过两种响应头实现："),a("code",[this._v("Expires")]),this._v(" 和 "),a("code",[this._v("Cache-Control")]),this._v(" 。强缓存表示在缓存期间不需要请求，"),a("code",[this._v("state code")]),this._v(" 为 200")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Expires"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Wed"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("22")]),t._v(" Oct "),s("span",{attrs:{class:"token number"}},[t._v("2018")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("08")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token number"}},[t._v("41")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token number"}},[t._v("00")]),t._v(" "),s("span",{attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("Expires")]),this._v(" 是 HTTP / 1.0 的产物，表示资源会在 "),a("code",[this._v("Wed, 22 Oct 2018 08:41:00 GMT")]),this._v(" 后过期，需要再次请求。并且 "),a("code",[this._v("Expires")]),this._v(" 受限于本地时间，如果修改了本地时间，可能会造成缓存失效。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Cache"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("control"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" max"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("age"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token number"}},[t._v("30")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("Cache-Control")]),this._v(" 出现于 HTTP / 1.1，优先级高于 "),a("code",[this._v("Expires")]),this._v(" 。该属性表示资源会在 30 秒后过期，需要再次请求。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"协商缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存","aria-hidden":"true"}},[this._v("#")]),this._v(" 协商缓存")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"last-modified-和-if-modified-since"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-和-if-modified-since","aria-hidden":"true"}},[this._v("#")]),this._v(" Last-Modified 和 If-Modified-Since")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("Last-Modified")]),this._v(" 表示本地文件最后修改日期，"),a("code",[this._v("If-Modified-Since")]),this._v(" 会将 "),a("code",[this._v("Last-Modified")]),this._v(" 的值发送给服务器，询问服务器在该日期后资源是否有更新，有更新的话就会将新的资源发送回来。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("但是如果在本地打开缓存文件，就会造成 "),a("code",[this._v("Last-Modified")]),this._v(" 被修改，所以在 HTTP / 1.1 出现了 "),a("code",[this._v("ETag")]),this._v(" 。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h4",{attrs:{id:"etag-和-if-none-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etag-和-if-none-match","aria-hidden":"true"}},[this._v("#")]),this._v(" ETag 和 If-None-Match")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[s("code",[t._v("ETag")]),t._v(" 类似于文件指纹，"),s("code",[t._v("If-None-Match")]),t._v(" 会将当前 "),s("code",[t._v("ETag")]),t._v(" 发送给服务器，询问该资源 "),s("code",[t._v("ETag")]),t._v(" 是否变动，有变动的话就将新的资源发送回来。并且 "),s("code",[t._v("ETag")]),t._v(" 优先级比 "),s("code",[t._v("Last-Modified")]),t._v(" 高。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"选择合适的缓存策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的缓存策略","aria-hidden":"true"}},[this._v("#")]),this._v(" 选择合适的缓存策略")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("对于某些不需要缓存的资源，可以使用 "),s("code",[t._v("Cache-control: no-store")]),t._v(" ，表示该资源不需要缓存")]),s("li",[t._v("对于频繁变动的资源，可以使用 "),s("code",[t._v("Cache-Control: no-cache")]),t._v(" 并配合 "),s("code",[t._v("ETag")]),t._v(" 使用，表示该资源已被缓存，但是每次都会发送请求询问资源是否更新。")]),s("li",[t._v("对于代码文件来说，通常使用 "),s("code",[t._v("Cache-Control: max-age=31536000")]),t._v(" 并配合策略缓存使用，然后对文件进行指纹处理，一旦文件名变动就会立刻下载新的文件。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"使用-http-2-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-http-2-0","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 HTTP / 2.0")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"预加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 预加载")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("预加载其实是声明式的 "),a("code",[this._v("fetch")]),this._v(" ，强制浏览器请求资源，并且不会阻塞 "),a("code",[this._v("onload")]),this._v(" 事件，可以使用以下代码开启预加载")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("preload"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.com"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"预渲染"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预渲染","aria-hidden":"true"}},[this._v("#")]),this._v(" 预渲染")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("prerender"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("href")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.com"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"优化渲染过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化渲染过程","aria-hidden":"true"}},[this._v("#")]),this._v(" 优化渲染过程")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"懒执行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒执行","aria-hidden":"true"}},[this._v("#")]),this._v(" 懒执行")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"懒加载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#懒加载","aria-hidden":"true"}},[this._v("#")]),this._v(" 懒加载")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("懒加载的原理就是只加载自定义区域（通常是可视区域，但也可以是即将进入可视区域）内需要加载的东西。对于图片来说，先设置图片标签的 "),a("code",[this._v("src")]),this._v(" 属性为一张占位图，将真实的图片资源放入一个自定义属性中，当进入自定义区域时，就将自定义属性替换为 "),a("code",[this._v("src")]),this._v(" 属性，这样图片就会去下载资源，实现了图片懒加载。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"文件优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 文件优化")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"图片优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 图片优化")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"计算图片大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算图片大小","aria-hidden":"true"}},[this._v("#")]),this._v(" 计算图片大小")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("减少像素点")]),a("li",[this._v("减少每个像素点能够显示的颜色")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"图片加载优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片加载优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 图片加载优化")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ol",[s("li",[t._v("不用图片。很多时候会使用到很多修饰类图片，其实这类修饰图片完全可以用 CSS 去代替。")]),s("li",[t._v("对于移动端来说，屏幕宽度就那么点，完全没有必要去加载原图浪费带宽。一般图片都用 CDN 加载，可以计算出适配屏幕的宽度，然后去请求相应裁剪好的图片。")]),s("li",[t._v("小图使用 base64 格式")]),s("li",[t._v("将多个图标文件整合到一张图片中（雪碧图）")]),s("li",[t._v("选择正确的图片格式：\n"),s("ul",[s("li",[t._v("对于能够显示 WebP 格式的浏览器尽量使用 WebP 格式。因为 WebP 格式具有更好的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量，缺点就是兼容性并不好")]),s("li",[t._v("小图使用 PNG，其实对于大部分图标这类图片，完全可以使用 SVG 代替")]),s("li",[t._v("照片使用 JPEG")])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"其他文件优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他文件优化","aria-hidden":"true"}},[this._v("#")]),this._v(" 其他文件优化")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("CSS 文件放在 "),s("code",[t._v("head")]),t._v(" 中")]),s("li",[t._v("服务端开启文件压缩功能")]),s("li",[t._v("将 "),s("code",[t._v("script")]),t._v(" 标签放在 "),s("code",[t._v("body")]),t._v(" 底部，因为 JS 文件执行会阻塞渲染。当然也可以把 "),s("code",[t._v("script")]),t._v(" 标签放在任意位置然后加上 "),s("code",[t._v("defer")]),t._v(" ，表示该文件会并行下载，但是会放到 HTML 解析完成后顺序执行。对于没有任何依赖的 JS 文件可以加上 "),s("code",[t._v("async")]),t._v(" ，表示加载和渲染后续文档元素的过程将和  JS 文件的加载与执行并行无序进行。")]),s("li",[t._v("执行 JS 代码过长会卡住渲染，对于需要很多时间计算的代码可以考虑使用 "),s("code",[t._v("Webworker")]),t._v("。"),s("code",[t._v("Webworker")]),t._v(" 可以让我们另开一个线程执行脚本而不影响渲染。")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn","aria-hidden":"true"}},[this._v("#")]),this._v(" CDN")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[this._v("#")]),this._v(" 其他")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"使用-webpack-优化项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-webpack-优化项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 Webpack 优化项目")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("对于 Webpack4，打包项目使用 production 模式，这样会自动开启代码压缩")]),a("li",[this._v("使用 ES6 模块来开启 tree shaking，这个技术可以移除没有使用的代码")]),a("li",[this._v("优化图片，对于小图可以使用 base64 的方式写入文件中")]),a("li",[this._v("按照路由拆分代码，实现按需加载")]),a("li",[this._v("给打包出来的文件名添加哈希，实现浏览器缓存文件")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控","aria-hidden":"true"}},[this._v("#")]),this._v(" 监控")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("对于代码运行错误，通常的办法是使用 "),a("code",[this._v("window.onerror")]),this._v(" 拦截报错。该方法能拦截到大部分的详细报错信息，但是也有例外")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ul",[s("li",[t._v("对于跨域的代码运行错误会显示 "),s("code",[t._v("Script error.")]),t._v(" 对于这种情况我们需要给 "),s("code",[t._v("script")]),t._v(" 标签添加 "),s("code",[t._v("crossorigin")]),t._v(" 属性")]),s("li",[t._v("对于某些浏览器可能不会显示调用栈信息，这种情况可以通过 "),s("code",[t._v("arguments.callee.caller")]),t._v(" 来做栈递归")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",[t._v("对于异步代码来说，可以使用 "),s("code",[t._v("catch")]),t._v(" 的方式捕获错误。比如 "),s("code",[t._v("Promise")]),t._v(" 可以直接使用 "),s("code",[t._v("catch")]),t._v(" 函数，"),s("code",[t._v("async await")]),t._v(" 可以使用 "),s("code",[t._v("try catch")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("对于捕获的错误需要上传给服务器，通常可以通过 "),a("code",[this._v("img")]),this._v(" 标签的 "),a("code",[this._v("src")]),this._v(" 发起一个请求。")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"面试题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面试题","aria-hidden":"true"}},[this._v("#")]),this._v(" 面试题")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("strong",[this._v("如何渲染几万条数据并不卡住界面")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("这道题考察了如何在不卡住页面的情况下渲染数据，也就是说不能一次性将几万条都渲染出来，而应该一次渲染部分 DOM，那么就可以通过 "),a("code",[this._v("requestAnimationFrame")]),this._v(" 来每 16 ms 刷新一次。")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("en"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("viewport"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("width=device-width, initial-scale=1.0"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("http-equiv")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("X-UA-Compatible"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("content")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ie=edge"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Document"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("控件"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n    "),s("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 插入十万条数据")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" total "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("100000")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 一次插入 20 条，如果觉得性能不好就减少")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" once "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("20")]),t._v("\n      "),s("span",{attrs:{class:"token comment"}},[t._v("// 渲染数据总共需要几次")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" loopCount "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" total "),s("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v(" once\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" countOfRender "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" ul "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"ul"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("add")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// 优化性能，插入不会造成回流")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fragment "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createDocumentFragment")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" once"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{attrs:{class:"token operator"}},[t._v("++")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" li "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("createElement")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"li"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          li"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("floor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("random")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" total"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          fragment"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("li"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        ul"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fragment"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        countOfRender "),s("span",{attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token function"}},[t._v("loop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("loop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("countOfRender "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v(" loopCount"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          window"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("add"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{attrs:{class:"token function"}},[t._v("loop")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("0")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])}],!1,null,null,null);a.default=e.exports}}]);