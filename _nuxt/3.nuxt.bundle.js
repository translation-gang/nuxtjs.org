webpackJsonp([3],{339:function(t,e,n){var r,s;n(375),r=n(361);var a=n(395);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,s._scopeId="data-v-7a5c66b6",t.exports=r},346:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"],mounted:function(){this.addListeners()},beforeDestroy:function(){this.removeListeners()},watch:{content:"contentUpdated"},methods:{navigate:function(t){var e=t.target.getAttribute("href");e&&"/"===e[0]&&(t.preventDefault(),this.$router.push(e))},contentUpdated:function(){var t=this;this.removeListeners(),this.$nextTick(function(){t.addListeners()})},addListeners:function(){this._links=this.$el.getElementsByTagName("a");for(var t=0;t<this._links.length;t++)this._links[t].addEventListener("click",this.navigate,!1)},removeListeners:function(){for(var t=0;t<this._links.length;t++)this._links[t].removeEventListener("click",this.navigate,!1);this._links=[]}}}},347:function(t,e,n){var r,s;r=n(346);var a=n(348);s=r=r||{},"object"!=typeof r.default&&"function"!=typeof r.default||(s=r=r.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=r},348:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{domProps:{innerHTML:t._s(t.content)}})},staticRenderFns:[]}},361:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(74),s=n.n(r),a=n(73),i=n.n(a),o=n(26),c=n.n(o),u=n(347),d=n.n(u);e.default={scrollToTop:!0,data:function(t){var e=this,n=t.route,r=t.store,a=t.error;return i()(s.a.mark(function t(){var i,o,u,d;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i={attrs:{},body:""},o=n.params.slug||"index",u="/"+r.state.lang.iso+"/api/"+o,d=void 0,t.prev=4,t.next=7,c.a.get(r.state.apiURI+u);case 7:d=t.sent,t.next=15;break;case 10:if(t.prev=10,t.t0=t.catch(4),404===t.t0.response.status){t.next=14;break}return t.abrupt("return",a({statusCode:500,message:"An error occured"}));case 14:return t.abrupt("return",a({statusCode:404,message:"API page not found"}));case 15:return i.attrs=d.data.attrs,i.body=d.data.body,i.attrs.title||console.error("["+u+"] Please define a title in the front matter."),i.attrs.description||console.error("["+u+"] Please define a description in the front matter."),t.abrupt("return",i);case 20:case"end":return t.stop()}},t,e,[[4,10]])}))()},head:function(){return{title:this.attrs.title,titleTemplate:"%s - Nuxt.js API",meta:[{hid:"description",name:"description",content:this.attrs.description}]}},components:{HtmlParser:d.a}}},375:function(t,e){},395:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("html-parser",{attrs:{content:t.body}})],1)},staticRenderFns:[]}}});