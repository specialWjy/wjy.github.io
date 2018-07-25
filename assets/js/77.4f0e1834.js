(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{247:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("需要事先说明的是，本节部分内容涉及到非前端的话题，比如服务的部署、日志，但会从前端项目管理开始，比如依赖管理、版本管理等。即使对自己定位是纯粹前端开发的同学，也建议阅读下，因为技不压身，了解整个前端项目交付流程中需要考量的点能让我们更有大局观。")]),a("p",[t._v("通常来说，项目构建完成之后，就成为待发布的版本，因此版本管理需要考虑，甚至做成自动化的，然后，最新的代码需要部署到线上机器才能让所有用户访问到，部署环节涉及到服务的启动、重启、日志管理等需要考虑。")]),a("p",[t._v("下面我们介绍 npm script 在服务运维时的几个用途：")]),t._m(1),a("p",[t._v("每次构建完的代码都应该有新的版本号，修改版本号直接使用 npm 内置的 version 自命令即可，如果是简单粗暴的版本管理，可以在 package.json 中添加如下 scripts：")]),t._m(2),a("p",[t._v("这 3 条命令遵循 "),a("a",{attrs:{href:"https://semver.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("semver"),a("OutboundLink")],1),t._v(" 的版本号规范来方便你管理版本，patch 是更新补丁版本，minor 是更新小版本，major 是更新大版本。在必要的时候，可以通过运行 npm run version:patch 来升补丁版本，运行输出如下：")]),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[t._v("然后，在 package.json 中新增 bump 子命令：")]),t._m(7),a("p",[t._v("在必要的时候执行 npm run bump，输出示例如下：")]),t._m(8),t._m(9),a("p",[t._v("在生产环境的服务进程和日志管理领域，"),a("a",{attrs:{href:"http://pm2.keymetrics.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("pm2"),a("OutboundLink")],1),t._v(" 是当之无愧的首选，功能很强大，使用简单，开发环境常用的是 "),a("a",{attrs:{href:"https://www.npmjs.com/package/nodemon",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodemon"),a("OutboundLink")],1),t._v("。")]),a("p",[t._v("在我们的项目中使用 npm script 进行服务进程和日志管理的基本步骤如下：")]),t._m(10),a("p",[t._v("在使用 npm script 作为构建流水线的基础上，我们在项目中引入了 "),a("a",{attrs:{href:"https://www.npmjs.com/package/express",target:"_blank",rel:"noopener noreferrer"}},[t._v("express"),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://www.npmjs.com/package/morgan",target:"_blank",rel:"noopener noreferrer"}},[t._v("morgan"),a("OutboundLink")],1),t._v("，并使用如下脚本启动 http 服务器方便用户访问我们的网页（morgan 使用来记录用户的访问日志的）：")]),a("p",[t._v("先安装依赖：")]),t._m(11),a("p",[t._v("然后在根目录下创建文件 server.js，内容如下：")]),t._m(12),t._m(13),a("p",[t._v("为简单起见，我们项目中创建日志存储目录 logs，有些公司可能不会把日志存在项目部署目录下：")]),t._m(14),a("p",[t._v("并且设置该目录为 git 忽略的，再改动 .gitignore：")]),t._m(15),t._m(16),t._m(17),a("p",[t._v("安装 pm2 作为依赖：")]),t._m(18),a("p",[t._v("然后添加服务启动配置到项目根目录下 pm2.json，更多配置项可以参照"),a("a",{attrs:{href:"http://pm2.keymetrics.io/docs/usage/application-declaration",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档"),a("OutboundLink")],1),t._v("：")]),t._m(19),a("p",[t._v("上面的配置指定了服务脚本为 server.js，日志输出文件路径，日志时间格式，进程数量 = CPU 核数，启动方式为 cluster，以及两个环境变量。")]),t._m(20),a("p",[t._v("在没有集成 CI 服务之前，我们的部署命令应该是下面这样的：")]),t._m(21),a("p",[t._v("即在部署前需要安装最新的依赖，重新构建，然后使用 pm2 重新启动服务即可，如果你有多台机器跑通1个服务，建议有个集中的 CI 服务器专门负责构建，而部署时就不需要运行 build 了。")]),a("p",[t._v("每次需要部署服务时只需要运行 npm run deploy 就行了，运行成功输出如下：")]),t._m(22),t._m(23),a("p",[t._v("至于日志，虽然 pm2 提供了内置的 logs 管理命令，如果某台服务器上启动了多个不同的服务进程，那么 pm2 logs 会展示所有服务的日志，个人建议使用如下命令查看当前服务的日志：")]),t._m(24),a("p",[t._v("需要查看日志时，直接运行 npm run logs，运行输入如下：")]),t._m(25),a("p",[t._v("当然如果你有更复杂的日志查看需求，直接用 cat、grep 之类的命令好了。")]),t._m(26),a("hr"),a("blockquote",[a("p",[t._v("本节用到的代码见 "),a("a",{attrs:{href:"https://github.com/wangshijun/automated-workflow-with-npm-script/tree/13-use-npm-script-for-devops",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub"),a("OutboundLink")],1),t._v("，想边看边动手练习的同学可以拉下来自己改，注意切换到正确的分支 "),a("code",[t._v("13-use-npm-script-for-devops")]),t._v("。")])]),a("hr"),t._m(27),a("hr"),a("p",[t._v("** 对于购买了小册，没有加到读者群里面的同学，可以加我微信：feweekly，备注：掘金小册，我会拉你入群。感谢支持！**")])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"_4-5-使用-npm-script-进行服务运维"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-使用-npm-script-进行服务运维","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.5 使用 npm script 进行服务运维")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用-npm-script-进行版本管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-npm-script-进行版本管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 npm script 进行版本管理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-patch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('+    "release:patch": "npm version patch && git push && git push --tags",\n+    "release:minor": "npm version minor && git push && git push --tags",\n+    "release:major": "npm version major && git push && git push --tags",\n     "precommit": "lint-staged",\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/18/16066e6e3d85b6cd?w=910&h=943&f=png&s=144886",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果要求所有的版本号不超过 10，即 0.0.9 的下个版本是 0.1.0 而不是 0.0.10，可以编写简单的 shell 脚本来实现（"),s("strong",[this._v("注意这样会破坏 semver 的约定")]),this._v("），具体步骤如下：")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("首先，在 scripts 目录下新增 bump.sh（"),s("strong",[this._v("别忘了文件的可执行权限")]),this._v("：chmod a+x scripts/bump.sh）：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("#!/usr/bin/env bash")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# get major/minor/patch version to change")]),t._v("\nversion"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[t._v("`")]),a("span",{attrs:{class:"token function"}},[t._v("cat")]),t._v(" package.json"),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("grep")]),t._v(" version "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("grep")]),t._v(" -v release "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("awk")]),t._v(' -F\\" '),a("span",{attrs:{class:"token string"}},[t._v("'{print "),a("span",{attrs:{class:"token variable"}},[t._v("$4")]),t._v("}'")]),a("span",{attrs:{class:"token variable"}},[t._v("`")])]),t._v("\ncomponents"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[a("span",{attrs:{class:"token variable"}},[t._v("$(")]),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" $version "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("tr")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'.'")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'\\n'")]),a("span",{attrs:{class:"token variable"}},[t._v(")")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmajor"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[t._v("${components[0]}")]),t._v("\nminor"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[t._v("${components[1]}")]),t._v("\npatch"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[t._v("${components[2]}")]),t._v("\n\nrelease"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v("'patch'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# decide which version to increment")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$patch")]),t._v(" -ge 9 "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$minor")]),t._v(" -ge 9 "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        release"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("'major'\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n        release"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("'minor'\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n    release"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("'patch'\n"),a("span",{attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(' "major'),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[t._v("$major")]),t._v(", minor"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[t._v("$minor")]),t._v(", patch"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[t._v("$patch")]),t._v(", release"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token variable"}},[t._v("$release")]),t._v('"\n\n'),a("span",{attrs:{class:"token comment"}},[t._v("# upgrade version")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" run release:"),a("span",{attrs:{class:"token variable"}},[t._v("$release")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-patch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('     "release:major": "npm version major && git push && git push --tags",\n+    "bump": "scripty",\n     "precommit": "lint-staged",\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/18/16066e70eb4a0193?w=1001&h=1143&f=png&s=165735",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用-npm-script-进行服务进程和日志管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-npm-script-进行服务进程和日志管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 npm script 进行服务进程和日志管理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-准备-http-服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-准备-http-服务","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 准备 http 服务")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" i express morgan -D\n"),s("span",{attrs:{class:"token comment"}},[this._v("# npm install express morgan --save-dev")]),this._v("\n"),s("span",{attrs:{class:"token comment"}},[this._v("# yarn add express morgan -D")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" express "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'express'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" morgan "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'morgan'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("express")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" port "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token constant"}},[t._v("PORT")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("8080")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("express"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("static")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'./dist'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("use")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token function"}},[t._v("morgan")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'combined'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\napp"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("listen")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("port"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("error")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'server start error'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// eslint-disable-line")]),t._v("\n    process"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("exit")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v("`server started at port ")]),a("span",{attrs:{class:"token interpolation"}},[a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("port"),a("span",{attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{attrs:{class:"token string"}},[t._v("`")])]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// eslint-disable-line")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-准备日志目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-准备日志目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 准备日志目录")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" logs\n"),a("span",{attrs:{class:"token function"}},[t._v("touch")]),t._v(" logs/.gitkeep\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add logs/.gitkeep\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{attrs:{class:"token string"}},[t._v("'add logs folder'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-patch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v(" dist\n+logs\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("strong",[this._v("TIP#21")]),this._v("：这里加 logs/.gitkeep 空文件的目的是为了能把 logs 目录提交到 git 里面，但是我们故意忽略 logs 目录里面的内容，这是在 git 中提交目录结构而忽略其中内容的常见做法。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-安装和配置-pm2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-安装和配置-pm2","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 安装和配置 pm2")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("npm")]),this._v(" i pm2 -D\n"),s("span",{attrs:{class:"token comment"}},[this._v("# npm install pm2 --save-dev")]),this._v("\n"),s("span",{attrs:{class:"token comment"}},[this._v("# yarn add pm2 -D")]),this._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"apps"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"npm-script-workflow"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"script"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./server.js"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"out_file"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./logs/stdout.log"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"error_file"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"./logs/stderr.log"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"log_date_format"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"YYYY-MM-DD HH:mm:ss"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"instances"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"exec_mode"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"cluster"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"max_memory_restart"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"800M"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"merge_logs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token property"}},[t._v('"env"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"NODE_ENV"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"production"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"PORT"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("8080")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4-配置服务部署命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置服务部署命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 配置服务部署命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-patch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('     "release:major": "npm version major && git push && git push --tags",\n+    "predeploy": "yarn && npm run build",\n+    "deploy": "pm2 restart pm2.json",\n     "bump": "scripty",\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/18/16066e77ad30626c?w=1146&h=186&f=png&s=42916",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_5-配置日志查看命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置日志查看命令","aria-hidden":"true"}},[this._v("#")]),this._v(" 5. 配置日志查看命令")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-patch extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('+    "logs": "tail -f logs/*",\n     "bump": "scripty",\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/18/16066e7b80b6d828?w=1271&h=354&f=png&s=80687",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("strong",[this._v("到这里，小册的内容基本结束了，接下来的一周，我会准备好视频版教程，在圣诞节的时候放出来给大家。如果你对内容有任何疑问，欢迎留言或者在读者群里面交流")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[s("strong",[this._v("视频版教程已经录制完毕，下载地址：链接: https://pan.baidu.com/s/1gfeZ619 密码: xx8j，请享用")])])])}],!1,null,null,null);s.default=e.exports}}]);