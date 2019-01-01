(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{200:function(t,a,n){"use strict";n.r(a);var s={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},e=n(3),r=Object(e.a)(s,function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("h1",{attrs:{id:"第16章-其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第16章-其他","aria-hidden":"true"}},[t._v("#")]),t._v(" 第16章 其他")]),t._v(" "),n("h2",{attrs:{id:"nodemon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nodemon","aria-hidden":"true"}},[t._v("#")]),t._v(" nodemon")]),t._v(" "),n("p",[t._v("在开发过程中，每次修改完代码手动重启服务器很麻烦。这里我们可以使用一个第三方命令行工具："),n("a",{attrs:{href:"https://github.com/remy/nodemon",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodemon"),n("OutboundLink")],1),t._v(" 来帮我们解决这个问题。")]),t._v(" "),n("p",[n("code",[t._v("nodemon")]),t._v(" 是一个基于Node.js 开发的一个第三方命令行工具，使用它的第一步就是先安装：")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" --global nodemon\n")])])]),n("p",[t._v("基本使用：")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[t._v("nodemon app.js\n")])])]),n("p",[t._v("只要是通过 "),n("code",[t._v("nodemon app.js")]),t._v(" 启动的服务，则它会监视你的文件变化， 当文件发生变化的时候，自动帮你重启服务器。")]),t._v(" "),n("blockquote",[n("p",[t._v("注意：该工具仅用于开发测试，不要在生产服务器中使用该命令。")])]),t._v(" "),n("hr"),t._v(" "),n("h2",{attrs:{id:"使用-nvm-安装管理-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用-nvm-安装管理-node","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用 nvm 安装管理 Node")]),t._v(" "),n("p",[t._v("安装")]),t._v(" "),n("ul",[n("li",[t._v("macOS：https://github.com/creationix/nvm")]),t._v(" "),n("li",[t._v("Linux：https://github.com/creationix/nvm")]),t._v(" "),n("li",[t._v("Windows：https://github.com/coreybutler/nvm-windows")])]),t._v(" "),n("p",[t._v("配置")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[t._v("nvm node_mirror http://npm.taobao.org/mirrors/node\nnvm npm_mirror https://npm.taobao.org/mirrors/npm/\n")])])]),n("p",[t._v("常用命令")]),t._v(" "),n("div",{staticClass:"language-bash extra-class"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("# 查看已安装列表")]),t._v("\nnvm list\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("# 安装指定版本")]),t._v("\nnvm "),n("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("# 卸载指定版本")]),t._v("\nnvm uninstall "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("# 切换版本")]),t._v("\nnvm use "),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("version"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("h2",{attrs:{id:"javascript-代码规范"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#javascript-代码规范","aria-hidden":"true"}},[t._v("#")]),t._v(" JavaScript 代码规范")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/standard/standard",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript Standard Style"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/airbnb/javascript",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airbnb JavaScript Style Guide"),n("OutboundLink")],1)])])])},[],!1,null,null,null);r.options.__file="16-other.md";a.default=r.exports}}]);