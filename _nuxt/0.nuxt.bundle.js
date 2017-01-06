webpackJsonp([0],{337:function(t,e,s){var a,n;s(376),a=s(359);var i=s(396);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-cc2bcbd4",t.exports=a},354:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{type:String,required:!0},list:{type:Array,required:!0}},data:function(){return{show:!1}}}},356:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(383),n=s.n(a),i=s(380),r=s.n(i);e.default={computed:{visible:function(){return this.$store.state.visibleHeader},ecosystemLinks:function(){return[{name:this.$store.state.lang.links.github,path:"https://github.com/nuxt",target:"_blank"},{name:this.$store.state.lang.links.twitter,path:"https://twitter.com/nuxt_js",target:"_blank"},{name:this.$store.state.lang.links.blog,path:"https://medium.com/@nuxt_js",target:"_blank"},{name:this.$store.state.lang.links.chat,path:"https://gitter.im/nuxt/nuxt.js",target:"_blank"},{name:this.$store.state.lang.links.vuejs,path:"https://vuejs.org",target:"_blank"},{name:this.$store.state.lang.links.vue_jobs,path:"https://vuejobs.com/?ref=nuxtjs",target:"_blank"}]}},methods:{toggle:function(){this.$store.commit("toggle","visibleHeader")}},components:{NuxtSearch:n.a,NuxtDropdown:r.a}}},358:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{label:String},data:function(){return{q:""}}}},359:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(382),n=s.n(a);e.default={watch:{$route:"setStore"},computed:{visible:function(){return this.$store.state.visibleHeader}},methods:{setStore:function(){this.$store.state.visibleHeader&&this.$store.commit("toggle","visibleHeader"),this.$store.state.visibleAffix&&this.$store.commit("toggle","visibleAffix")}},components:{Navbar:n.a}}},371:function(t,e){},373:function(t,e){},374:function(t,e){},376:function(t,e){},378:function(t,e,s){t.exports=s.p+"img/logo_nav.png?be08efae0d5c46fd682e2a24f18545ae"},379:function(t,e,s){t.exports=s.p+"img/logo_nav_mobile.png?f90e5a3d77508106e815f7179a322c02"},380:function(t,e,s){var a,n;s(371),a=s(354);var i=s(390);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-38c38936",t.exports=a},382:function(t,e,s){var a,n;s(374),a=s(356);var i=s(394);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-6fcc5ae1",t.exports=a},383:function(t,e,s){var a,n;s(373),a=s(358);var i=s(393);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=i.render,n.staticRenderFns=i.staticRenderFns,n._scopeId="data-v-60d64f08",t.exports=a},390:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Dropdown"},[s("div",{staticClass:"Dropdown__Title",class:{"Dropdown__Title--mobile":t.show},on:{click:function(e){t.show=!t.show}}},[t._v("\n    "+t._s(t.title)+"\n  ")]),s("ul",{staticClass:"Dropdown__List",class:{"Dropdown__List--visible":t.show}},t._l(t.list,function(e){return s("li",{staticClass:"Dropdown__List__Item"},[s("a",{staticClass:"Dropdown__List__Item__Link",attrs:{href:e.path,target:e.target}},[t._v("\n        "+t._s(e.name)+"\n      ")])])}))])},staticRenderFns:[]}},393:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Search"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.q,expression:"q"}],staticClass:"Search__Input",attrs:{type:"text",name:"search",id:t.label,placeholder:"Search"},domProps:{value:t._s(t.q)},on:{input:function(e){e.target.composing||(t.q=e.target.value)}}}),s("label",{staticClass:"Search__Label",attrs:{for:t.label},on:{click:function(e){t.q=""}}},[s("div",{class:{"icon search":!t.q.length,"icon remove":t.q.length}})])])},staticRenderFns:[]}},394:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"Header"},[a("div",{staticClass:"container"},[a("nuxt-link",{staticClass:"Header__Title",attrs:{to:"/"}},[a("img",{staticClass:"Header__Title__Logo Header__Title__Logo--desktop",attrs:{src:s(378),alt:"Logo nuxt"}}),a("img",{staticClass:"Header__Title__Logo Header__Title__Logo--mobile",attrs:{src:s(379),alt:"Logo nuxt"}}),a("h1",{staticClass:"Header__Title__Text"},[t._v("\n        NUXT\n      ")])]),a("nav",{staticClass:"Header__Nav",class:{"Header__Nav--hidden":!t.visible}},[a("div",{staticClass:"Header__Nav__Search Header__Nav__Search--mobile"},[a("nuxt-search",{attrs:{label:"mobile"}})],1),a("div",{staticClass:"Header__Nav__Lang"},[a("img",{staticClass:"Header__Nav__Lang__Img",attrs:{src:"/flags/"+t.$store.state.lang.iso+".png",alt:t.$store.state.lang.iso}})]),a("ul",{staticClass:"Header__Nav__List"},[a("li",{staticClass:"Header__Nav__List__Item"},[a("nuxt-link",{staticClass:"Header__Nav__List__Item__Link",attrs:{to:"/guide"}},[t._v("\n            "+t._s(t.$store.state.lang.links.guide)+"\n          ")])],1),a("li",{staticClass:"Header__Nav__List__Item"},[a("nuxt-link",{staticClass:"Header__Nav__List__Item__Link",attrs:{to:"/api"}},[t._v("\n            "+t._s(t.$store.state.lang.links.api)+"\n          ")])],1),a("li",{staticClass:"Header__Nav__List__Item"},[a("nuxt-link",{staticClass:"Header__Nav__List__Item__Link",attrs:{to:"/examples"}},[t._v("\n            "+t._s(t.$store.state.lang.links.examples)+"\n          ")])],1),a("li",{staticClass:"Header__Nav__List__Item"},[a("nuxt-dropdown",{staticClass:"Header__Nav__List__Item__Link",attrs:{list:t.ecosystemLinks,title:t.$store.state.lang.links.ecosystem}})],1)]),a("div",{staticClass:"Header__Nav__Search Header__Nav__Search--desktop"},[a("nuxt-search",{attrs:{label:"desktop"}})],1)]),a("div",{staticClass:"Header__Toggler",on:{click:t.toggle}},[a("div",{class:{"icon menu":!t.visible,"icon close":t.visible}})])],1)])},staticRenderFns:[]}},396:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("navbar"),s("div",{class:{"App--hidden":t.visible}},[s("nuxt")],1)],1)},staticRenderFns:[]}}});