(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{197:function(c,v,_){"use strict";_.r(v);var e=_(0),t=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var c=this,v=c.$createElement,_=c._self._c||v;return _("div",{staticClass:"content"},[_("h1",{attrs:{id:"进阶-1：head、master-与-branch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#进阶-1：head、master-与-branch","aria-hidden":"true"}},[c._v("#")]),c._v(" 进阶 1：HEAD、master 与 branch")]),_("p",[c._v("这一节主要是几个概念的解释：HEAD、master 以及 Git 中非常重要的一个概念： branch。")]),_("h2",{attrs:{id:"引用：commit-的快捷方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#引用：commit-的快捷方式","aria-hidden":"true"}},[c._v("#")]),c._v(" 引用：commit 的快捷方式")]),_("p",[c._v("首先，再看一次 "),_("code",[c._v("log")]),c._v("：")]),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[c._v("git log\n")])])]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/20/15fd779f5e2ebbd0?w=602&h=283&f=jpeg&s=93360",alt:""}})]),_("p",[c._v("第一行的 "),_("code",[c._v("commit")]),c._v(" 后面括号里的 "),_("code",[c._v("HEAD -> master, origin/master, origin/HEAD")]),c._v(" ，是几个指向这个 "),_("code",[c._v("commit")]),c._v(" 的引用。在 Git 的使用中，经常会需要对指定的 "),_("code",[c._v("commit")]),c._v(" 进行操作。每一个 "),_("code",[c._v("commit")]),c._v(" 都有一个它唯一的指定方式——它的 SHA-1 校验和，也就是上图中每个黄色的 "),_("code",[c._v("commit")]),c._v(" 右边的那一长串字符。两个 SHA-1 值的重复概率极低，所以你可以使用这个 SHA-1 值来指代 "),_("code",[c._v("commit")]),c._v("，也可以只使用它的前几位来指代它（例如第一个 "),_("code",[c._v("78bb0ab7d541…16b77")]),c._v("，你使用 "),_("code",[c._v("78bb0ab")]),c._v(" 甚至 "),_("code",[c._v("78bb")]),c._v(" 来指代它通常也可以），但毕竟这种没有任何含义的字符串是很难记忆的，所以 Git 提供了「引用」的机制：使用固定的字符串作为引用，指向某个 "),_("code",[c._v("commit")]),c._v("，作为操作 "),_("code",[c._v("commit")]),c._v(" 时的快捷方式。")]),_("h2",{attrs:{id:"head：当前-commit-的引用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#head：当前-commit-的引用","aria-hidden":"true"}},[c._v("#")]),c._v(" HEAD：当前 commit 的引用")]),_("p",[c._v("上一段里说到，图中括号里是指向这个 "),_("code",[c._v("commit")]),c._v(" 的引用。其中这个括号里的 "),_("code",[c._v("HEAD")]),c._v(" 是引用中最特殊的一个：它是"),_("strong",[c._v("指向当前 "),_("code",[c._v("commit")]),c._v(" 的引用")]),c._v("。所谓**当前 "),_("code",[c._v("commit")]),c._v("**这个概念很简单，它指的就是当前工作目录所对应的 "),_("code",[c._v("commit")]),c._v("。")]),_("p",[c._v("例如上图中的当前 "),_("code",[c._v("commit")]),c._v(" 就是第一行中的那个最新的 "),_("code",[c._v("commit")]),c._v("。每次当有新的 "),_("code",[c._v("commit")]),c._v(" 的时候，工作目录自动与最新的 "),_("code",[c._v("commit")]),c._v(" 对应；而与此同时，"),_("code",[c._v("HEAD")]),c._v(" 也会转而指向最新的 "),_("code",[c._v("commit")]),c._v("。事实上，当使用 "),_("code",[c._v("checkout")]),c._v("、"),_("code",[c._v("reset")]),c._v(" 等指令手动指定改变当前 "),_("code",[c._v("commit")]),c._v(" 的时候，"),_("code",[c._v("HEAD")]),c._v(" 也会一起跟过去。")]),_("p",[c._v("总之，当前 "),_("code",[c._v("commit")]),c._v(" 在哪里，"),_("code",[c._v("HEAD")]),c._v(" 就在哪里，这是一个永远自动指向当前 "),_("code",[c._v("commit")]),c._v(" 的引用，所以你永远可以用 "),_("code",[c._v("HEAD")]),c._v(" 来操作当前 "),_("code",[c._v("commit")]),c._v("。")]),_("h2",{attrs:{id:"branch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#branch","aria-hidden":"true"}},[c._v("#")]),c._v(" branch")]),_("p",[_("code",[c._v("HEAD")]),c._v(" 是 Git 中一个独特的引用，它是唯一的。而除了 "),_("code",[c._v("HEAD")]),c._v(" 之外，Git 还有一种引用，叫做 "),_("code",[c._v("branch")]),c._v("（分支）。"),_("code",[c._v("HEAD")]),c._v(" 除了可以指向 "),_("code",[c._v("commit")]),c._v("，还可以指向一个 "),_("code",[c._v("branch")]),c._v("，当它指向某个 "),_("code",[c._v("branch")]),c._v(" 的时候，会通过这个 "),_("code",[c._v("branch")]),c._v(" 来间接地指向某个 "),_("code",[c._v("commit")]),c._v("；另外，当 "),_("code",[c._v("HEAD")]),c._v(" 在提交时自动向前移动的时候，它会像一个拖钩一样带着它所指向的 "),_("code",[c._v("branch")]),c._v(" 一起移动。")]),_("p",[c._v("例如上面的那张图里，"),_("code",[c._v("HEAD -> master")]),c._v(" 中的 "),_("code",[c._v("master")]),c._v(" 就是一个 "),_("code",[c._v("branch")]),c._v(" 的名字，而它左边的箭头 "),_("code",[c._v("->")]),c._v(" 表示 "),_("code",[c._v("HEAD")]),c._v(" 正指向它（当然，也会间接地指向它所指向的 "),_("code",[c._v("commit")]),c._v("）。")]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/20/15fd779f5d3e6b63?w=449&h=295&f=jpeg&s=13818",alt:""}})]),_("p",[c._v("如果我在这时创建一个 "),_("code",[c._v("commit")]),c._v("，那么 "),_("code",[c._v("HEAD")]),c._v(" 会带着 "),_("code",[c._v("master")]),c._v(" 一起移动到最新的 "),_("code",[c._v("commit")]),c._v("：")]),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[c._v("git commit\n")])])]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/20/15fd779f983c81e7?w=568&h=306&f=gif&s=144193",alt:""}})]),_("p",[c._v("通过查看 "),_("code",[c._v("log")]),c._v("，可以对这个逻辑进行验证：")]),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[c._v("git log\n")])])]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/20/15fd779f5c2ca7c3?w=548&h=266&f=jpeg&s=91444",alt:""}})]),_("p",[c._v("从图中可以看出，最新的 "),_("code",[c._v("commit")]),c._v(' （提交信息："Add feature1"）被创建后，'),_("code",[c._v("HEAD")]),c._v(" 和 "),_("code",[c._v("master")]),c._v(" 这两个引用都指向了它，而在上面第一张图中的后两个引用 "),_("code",[c._v("origin/master")]),c._v(" 和 "),_("code",[c._v("origin/HEAD")]),c._v(" 则依然停留在原先的位置。")]),_("h2",{attrs:{id:"master-默认-branch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#master-默认-branch","aria-hidden":"true"}},[c._v("#")]),c._v(" master: 默认 branch")]),_("p",[c._v("上面的这个 "),_("code",[c._v("master")]),c._v(" ，其实是一个特殊的 "),_("code",[c._v("branch")]),c._v("：它是 Git 的默认 "),_("code",[c._v("branch")]),c._v("（俗称主 "),_("code",[c._v("branch")]),c._v(" / 主分支）。")]),_("p",[c._v("所谓的「默认 branch」，主要有两个特点：")]),_("ol",[_("li",[_("p",[c._v("新创建的 repository（仓库）是没有任何 "),_("code",[c._v("commit")]),c._v(" 的。但在它创建第一个 "),_("code",[c._v("commit")]),c._v(" 时，会把 "),_("code",[c._v("master")]),c._v(" 指向它，并把 "),_("code",[c._v("HEAD")]),c._v(" 指向 "),_("code",[c._v("master")]),c._v("。")]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/20/15fd779f5c66ac9e?w=500&h=304&f=gif&s=77304",alt:""}})])]),_("li",[_("p",[c._v("当有人使用 "),_("code",[c._v("git clone")]),c._v(" 时，除了从远程仓库把 "),_("code",[c._v(".git")]),c._v(" 这个仓库目录下载到工作目录中，还会 "),_("code",[c._v("checkout")]),c._v(" （签出） "),_("code",[c._v("master")]),c._v("（"),_("code",[c._v("checkout")]),c._v(" 的意思就是把某个 "),_("code",[c._v("commit")]),c._v(" 作为当前 "),_("code",[c._v("commit")]),c._v("，把 "),_("code",[c._v("HEAD")]),c._v(" 移动过去，并把工作目录的文件内容替换成这个 "),_("code",[c._v("commit")]),c._v(" 所对应的内容）。")]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/20/15fd779f5c191a3f?w=682&h=620&f=gif&s=463251",alt:""}})])])]),_("p",[c._v("另外，需要说一下的是，大多数的开发团队会规定开发以 "),_("code",[c._v("master")]),c._v(" 为核心，所有的分支都在一定程度上围绕着 "),_("code",[c._v("master")]),c._v(" 来开发。这个在事实上构成了 "),_("code",[c._v("master")]),c._v(" 和其它分支在地位上的一个额外的区别。")]),_("h2",{attrs:{id:"branch-的通俗化理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#branch-的通俗化理解","aria-hidden":"true"}},[c._v("#")]),c._v(" branch 的通俗化理解")]),_("p",[c._v("尽管在 Git 中，"),_("code",[c._v("branch")]),c._v(" 只是一个指向 "),_("code",[c._v("commit")]),c._v(" 的引用，但它有一个更通俗的理解：你还可以把一个 "),_("code",[c._v("branch")]),c._v(" 理解为从初始 "),_("code",[c._v("commit")]),c._v(" 到 "),_("code",[c._v("branch")]),c._v(" 所指向的 "),_("code",[c._v("commit")]),c._v(" 之间的所有 "),_("code",[c._v("commit")]),c._v("s 的一个「串」。例如下面这张图：")]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/20/15fd779fa5e6970d?w=457&h=205&f=jpeg&s=11282",alt:""}})]),_("p",[_("code",[c._v("master")]),c._v(" 的本质是一个指向 "),_("code",[c._v("3")]),c._v(" 的引用，但你也可以把 "),_("code",[c._v("master")]),c._v(" 理解为是 "),_("code",[c._v("1")]),_("code",[c._v("2")]),_("code",[c._v("3")]),c._v(" 三个 "),_("code",[c._v("commit")]),c._v(" 的「串」，它的起点是 "),_("code",[c._v("1")]),c._v("，终点是 "),_("code",[c._v("3")]),c._v("。")]),_("p",[c._v("这种理解方式比较符合 "),_("code",[c._v("branch")]),c._v(" 这个名字的本意（branch 的本意是树枝，可以延伸为事物的分支），也是大多数人对 "),_("code",[c._v("branch")]),c._v(" 的理解。不过如果你选择这样理解 "),_("code",[c._v("branch")]),c._v("，需要注意下面两点：")]),_("ol",[_("li",[_("p",[c._v("所有的 "),_("code",[c._v("branch")]),c._v(" 之间都是平等的。")]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/20/15fd779fa58eff02?w=462&h=354&f=jpeg&s=20299",alt:""}})]),_("p",[c._v("例如上面这张图，"),_("code",[c._v("branch1")]),c._v(" 是 "),_("code",[c._v("1")]),_("code",[c._v("2")]),_("code",[c._v("5")]),_("code",[c._v("6")]),c._v(" 的串，而不要理解为 "),_("code",[c._v("2")]),_("code",[c._v("5")]),_("code",[c._v("6")]),c._v(" 或者 "),_("code",[c._v("5")]),_("code",[c._v("6")]),c._v(" 。其实，起点在哪里并不是最重要的，重要的是你要知道，所有 "),_("code",[c._v("branch")]),c._v(" 之间是平等的，"),_("code",[c._v("master")]),c._v(" 除了上面我说的那几点之外，并不比其他 "),_("code",[c._v("branch")]),c._v(" 高级。这个认知的理解对于 "),_("code",[c._v("branch")]),c._v(" 的正确使用非常重要。")]),_("p",[c._v("换个角度来说，上面这张图我可以用别的画法来表达，它们的意思是一样的：")]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/20/15fd779ff346fbd7?w=506&h=432&f=gif&s=736280",alt:""}})]),_("p",[c._v("通过这张动图应该能够对「平等」这个概念更好地理解了吧？")])]),_("li",[_("p",[_("code",[c._v("branch")]),c._v(" 包含了从初始 "),_("code",[c._v("commit")]),c._v(" 到它的所有路径，而不是一条路径。并且，这些路径之间也是彼此平等的。")]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe3354a1d3cd26?w=602&h=354&f=gif&s=132218",alt:""}})]),_("p",[c._v("像上图这样，"),_("code",[c._v("master")]),c._v(" 在合并了 "),_("code",[c._v("branch1")]),c._v(" 之后，从初始 "),_("code",[c._v("commit")]),c._v(" 到 "),_("code",[c._v("master")]),c._v(" 有了两条路径。这时，"),_("code",[c._v("master")]),c._v(" 的串就包含了 "),_("code",[c._v("1")]),_("code",[c._v("2")]),_("code",[c._v("3")]),_("code",[c._v("4")]),_("code",[c._v("7")]),c._v(" 和 "),_("code",[c._v("1")]),_("code",[c._v("2")]),_("code",[c._v("5")]),_("code",[c._v("6")]),_("code",[c._v("7")]),c._v(" 这两条路径。而且，这两条路径是平等的，"),_("code",[c._v("1")]),_("code",[c._v("2")]),_("code",[c._v("3")]),_("code",[c._v("4")]),_("code",[c._v("7")]),c._v("  这条路径并不会因为它是「原生路径」而拥有任何的特别之处。")])])]),_("p",[c._v("如果你喜欢用「树枝」的概念来理解 Git 的 "),_("code",[c._v("branch")]),c._v("，一定要注意上面说的这两点，否则在今后使用 "),_("code",[c._v("branch")]),c._v(" 的时候就可能与出现理解偏差或者使用方式不当的问题。事实上我本人并不喜欢用这种方式来理解 "),_("code",[c._v("branch")]),c._v("，因为觉得它有点舍近求远的味道：我为了「直观」地思考，给它了一个形象的比喻，但由于它的本质含义其实更加简单，导致我的这种比喻反而增加了思考它时的复杂度，未免有点画蛇添足。不过这是我自己的感受，怎么理解 "),_("code",[c._v("branch")]),c._v(" 是个个人偏好的问题，这两种理解方式你选一个喜欢的就好。")]),_("h2",{attrs:{id:"branch-的创建、切换和删除"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#branch-的创建、切换和删除","aria-hidden":"true"}},[c._v("#")]),c._v(" branch 的创建、切换和删除")]),_("h3",{attrs:{id:"创建-branch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建-branch","aria-hidden":"true"}},[c._v("#")]),c._v(" 创建 branch")]),_("p",[c._v("如果你想在某处创建 "),_("code",[c._v("branch")]),c._v(" ，只需要输入一行 "),_("code",[c._v("git branch 名称")]),c._v("。例如你现在在 "),_("code",[c._v("master")]),c._v(" 上：")]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe3354b5d0800c?w=393&h=291&f=jpeg&s=14268",alt:""}})]),_("p",[c._v("你想在这个 "),_("code",[c._v("commit")]),c._v(' 处创建一个叫做 "feature1" 的 '),_("code",[c._v("branch")]),c._v("，只要输入：")]),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[c._v("git branch feature1\n")])])]),_("p",[c._v("你的 "),_("code",[c._v("branch")]),c._v(" 就创建好了：")]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe3354a1b892f7?w=392&h=384&f=jpeg&s=18369",alt:""}})]),_("h3",{attrs:{id:"切换-branch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#切换-branch","aria-hidden":"true"}},[c._v("#")]),c._v(" 切换 branch")]),_("p",[c._v("不过新建的 "),_("code",[c._v("branch")]),c._v(" 并不会自动切换，你的 "),_("code",[c._v("HEAD")]),c._v(" 在这时依然是指向 "),_("code",[c._v("master")]),c._v(" 的。你需要用 "),_("code",[c._v("checkout")]),c._v(" 来主动切换到你的新 "),_("code",[c._v("branch")]),c._v(" 去：")]),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[c._v("git checkout feature1\n")])])]),_("p",[c._v("然后 "),_("code",[c._v("HEAD")]),c._v(" 就会指向新建的 "),_("code",[c._v("branch")]),c._v(" 了：")]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe3354a130b3cd?w=362&h=378&f=jpeg&s=19078",alt:""}})]),_("p",[c._v("除此之外，你还可以用 "),_("code",[c._v("git checkout -b 名称")]),c._v(" 来把上面两步操作合并执行。这行代码可以帮你用指定的名称创建 "),_("code",[c._v("branch")]),c._v(" 后，再直接切换过去。还以 "),_("code",[c._v("feature1")]),c._v(" 为例的话，就是：")]),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[c._v("git checkout -b feature1\n")])])]),_("p",[c._v("在切换到新的 "),_("code",[c._v("branch")]),c._v(" 后，再次 "),_("code",[c._v("commit")]),c._v(" 时 "),_("code",[c._v("HEAD")]),c._v(" 就会带着新的 "),_("code",[c._v("branch")]),c._v(" 移动了：")]),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[c._v("...\ngit commit\n")])])]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe3354a2a32692?w=504&h=438&f=gif&s=157013",alt:""}})]),_("p",[c._v("而这个时候，如果你再切换到 "),_("code",[c._v("master")]),c._v(" 去 "),_("code",[c._v("commit")]),c._v("，就会真正地出现分叉了：")]),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[c._v("git checkout master\n...\ngit commit\n")])])]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/22/15fe3354ab0861a7?w=462&h=582&f=gif&s=242569",alt:""}})]),_("h3",{attrs:{id:"删除-branch"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#删除-branch","aria-hidden":"true"}},[c._v("#")]),c._v(" 删除 branch")]),_("p",[c._v("删除 "),_("code",[c._v("branch")]),c._v(" 的方法非常简单："),_("code",[c._v("git branch -d 名称")]),c._v("。例如要删除 "),_("code",[c._v("feature1")]),c._v(" 这个 branch：")]),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[c._v("git branch -d feature1\n")])])]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/11/29/16006b7e3d35fe54?w=474&h=472&f=gif&s=45735",alt:""}})]),_("p",[c._v("需要说明的有两点：")]),_("ol",[_("li",[_("p",[_("code",[c._v("HEAD")]),c._v(" 指向的 "),_("code",[c._v("branch")]),c._v(" 不能删除。如果要删除 "),_("code",[c._v("HEAD")]),c._v(" 指向的 "),_("code",[c._v("branch")]),c._v("，需要先用 "),_("code",[c._v("checkout")]),c._v(" 把 "),_("code",[c._v("HEAD")]),c._v(" 指向其他地方。")])]),_("li",[_("p",[c._v("由于 Git 中的 "),_("code",[c._v("branch")]),c._v(" 只是一个引用，所以删除 "),_("code",[c._v("branch")]),c._v(" 的操作也只会删掉这个引用，并不会删除任何的 "),_("code",[c._v("commit")]),c._v("。（不过如果一个 "),_("code",[c._v("commit")]),c._v(" 不在任何一个 "),_("code",[c._v("branch")]),c._v(" 的「路径」上，或者换句话说，如果没有任何一个 "),_("code",[c._v("branch")]),c._v(" 可以回溯到这条 "),_("code",[c._v("commit")]),c._v("（也许可以称为野生 "),_("code",[c._v("commit")]),c._v("？），那么在一定时间后，它会被 Git 的回收机制删除掉。）")])]),_("li",[_("p",[c._v("出于安全考虑，没有被合并到 "),_("code",[c._v("master")]),c._v(" 过的 "),_("code",[c._v("branch")]),c._v(" 在删除时会失败（因为怕你误删掉「未完成」的 "),_("code",[c._v("branch")]),c._v(" 啊）：")]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/1/1600ff7520c3c1b5?w=550&h=61&f=jpeg&s=32646",alt:""}})]),_("p",[c._v("这种情况如果你确认是要删除这个 "),_("code",[c._v("branch")]),c._v(" （例如某个未完成的功能被团队确认永久毙掉了，不再做了），可以把 "),_("code",[c._v("-d")]),c._v(" 改成 "),_("code",[c._v("-D")]),c._v("，小写换成大写，就能删除了。")]),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2017/12/1/1600ff91f051d633?w=441&h=45&f=jpeg&s=21344",alt:""}})])])]),_("h2",{attrs:{id:"「引用」的本质"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#「引用」的本质","aria-hidden":"true"}},[c._v("#")]),c._v(" 「引用」的本质")]),_("p",[c._v("所谓「引用」（reference），其实就是一个个的字符串。这个字符串可以是一个 "),_("code",[c._v("commit")]),c._v(" 的 SHA-1 码（例："),_("code",[c._v("c08de9a4d8771144cd23986f9f76c4ed729e69b0")]),c._v("），也可以是一个 "),_("code",[c._v("branch")]),c._v("（例："),_("code",[c._v("ref: refs/heads/feature3")]),c._v("）。")]),_("p",[c._v("Git 中的 "),_("code",[c._v("HEAD")]),c._v(" 和每一个 "),_("code",[c._v("branch")]),c._v(" 以及其他的引用，都是以文本文件的形式存储在本地仓库 "),_("code",[c._v(".git")]),c._v(" 目录中，而 Git 在工作的时候，就是通过这些文本文件的内容来判断这些所谓的「引用」是指向谁的。")]),_("h2",{attrs:{id:"小结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[c._v("#")]),c._v(" 小结")]),_("p",[c._v("这一节介绍了 Git 中的一些「引用」："),_("code",[c._v("HEAD")]),c._v("、"),_("code",[c._v("master")]),c._v("、"),_("code",[c._v("branch")]),c._v("。这里总结一下：")]),_("ol",[_("li",[_("code",[c._v("HEAD")]),c._v(" 是指向当前 "),_("code",[c._v("commit")]),c._v(" 的引用，它具有唯一性，每个仓库中只有一个 "),_("code",[c._v("HEAD")]),c._v("。在每次提交时它都会自动向前移动到最新的 "),_("code",[c._v("commit")]),c._v(" 。")]),_("li",[_("code",[c._v("branch")]),c._v(" 是一类引用。"),_("code",[c._v("HEAD")]),c._v(" 除了直接指向 "),_("code",[c._v("commit")]),c._v("，也可以通过指向某个 "),_("code",[c._v("branch")]),c._v(" 来间接指向 "),_("code",[c._v("commit")]),c._v("。当 "),_("code",[c._v("HEAD")]),c._v(" 指向一个 "),_("code",[c._v("branch")]),c._v(" 时，"),_("code",[c._v("commit")]),c._v(" 发生时，"),_("code",[c._v("HEAD")]),c._v(" 会带着它所指向的 "),_("code",[c._v("branch")]),c._v(" 一起移动。")]),_("li",[_("code",[c._v("master")]),c._v(" 是 Git 中的默认 "),_("code",[c._v("branch")]),c._v("，它和其它 "),_("code",[c._v("branch")]),c._v(" 的区别在于：\n"),_("ol",[_("li",[c._v("新建的仓库中的第一个 "),_("code",[c._v("commit")]),c._v(" 会被 "),_("code",[c._v("master")]),c._v(" 自动指向；")]),_("li",[c._v("在 "),_("code",[c._v("git clone")]),c._v(" 时，会自动 "),_("code",[c._v("checkout")]),c._v(" 出 "),_("code",[c._v("master")]),c._v("。")])])]),_("li",[_("code",[c._v("branch")]),c._v(" 的创建、切换和删除：\n"),_("ol",[_("li",[c._v("创建 "),_("code",[c._v("branch")]),c._v(" 的方式是 "),_("code",[c._v("git branch 名称")]),c._v(" 或 "),_("code",[c._v("git checkout -b 名称")]),c._v("（创建后自动切换）；")]),_("li",[c._v("切换的方式是 "),_("code",[c._v("git checkout 名称")]),c._v("；")]),_("li",[c._v("删除的方式是 "),_("code",[c._v("git branch -d 名称")]),c._v("。")])])])])])}],!1,null,null,null);v.default=t.exports}}]);