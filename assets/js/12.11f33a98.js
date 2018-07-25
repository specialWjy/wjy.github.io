(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{319:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"nginx-转发（prod-环境）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-转发（prod-环境）","aria-hidden":"true"}},[t._v("#")]),t._v(" nginx 转发（prod 环境）")]),a("blockquote",[a("p",[a("code",[t._v("npm run build")]),t._v(" 打完包后将 "),a("code",[t._v("dist")]),t._v(" 目录部署到服务器, 找到服务器 "),a("code",[t._v("nginx")]),t._v(" 配置文件，对接口做"),a("code",[t._v("代理")]),t._v("和"),a("code",[t._v("跨域处理")])])]),a("p",[t._v("下面案例是对 "),a("code",[t._v("poster")]),t._v(" 接口做的跨域和转发处理")]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("location /poster/ "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy_pass http://192.168.89.72:8027/poster/"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_set_header Host "),a("span",{attrs:{class:"token variable"}},[t._v("$host")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_set_header X-Real-IP "),a("span",{attrs:{class:"token variable"}},[t._v("$remote_addr")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_set_header X-Forwarded-For "),a("span",{attrs:{class:"token variable"}},[t._v("$proxy_add_x_forwarded_for")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    proxy_connect_timeout 90"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    add_header Access-Control-Allow-Origin *"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    add_header Access-Control-Allow-Methods "),a("span",{attrs:{class:"token string"}},[t._v("'GET, POST, PUT, DELETE, OPTIONS'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    add_header Access-Control-Allow-Credentials "),a("span",{attrs:{class:"token string"}},[t._v("'true'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    add_header Access-Control-Allow-Headers "),a("span",{attrs:{class:"token string"}},[t._v("'Accept, Authorization,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$request_method")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'OPTIONS'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        add_header "),a("span",{attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Origin'")]),t._v(" *"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        add_header "),a("span",{attrs:{class:"token string"}},[t._v("'Access-Control-Max-Age'")]),t._v(" 1728000"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        add_header "),a("span",{attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Credentials'")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'true'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        add_header "),a("span",{attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Methods'")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'GET, POST, DELETE, PUT, OPTIONS'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        add_header "),a("span",{attrs:{class:"token string"}},[t._v("'Access-Control-Allow-Headers'")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Accept, Authorization,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        add_header "),a("span",{attrs:{class:"token string"}},[t._v("'Content-Type'")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'text/plain charset=UTF-8'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        add_header "),a("span",{attrs:{class:"token string"}},[t._v("'Content-Length'")]),t._v(" 0"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" 204"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);