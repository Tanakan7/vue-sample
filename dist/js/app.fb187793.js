(function(t){function e(e){for(var r,s,c=e[0],a=e[1],l=e[2],p=0,f=[];p<c.length;p++)s=c[p],o[s]&&f.push(o[s][0]),o[s]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);i&&i(e);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(r=!1)}r&&(u.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},u=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var i=a;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("h1",[t._v("Vuex - サンプル")]),r("Counter",{attrs:{module:"counterA"}}),r("Counter",{attrs:{module:"counterB"}}),r("DoubleCounter",{attrs:{module:"doubleCounterA"}}),r("DoubleCounter",{attrs:{module:"doubleCounterB"}}),r("TotalCounter")],1)},u=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),n("br"),t._v("\n    check out the\n    "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],a={name:"HelloWorld",props:{msg:String}},l=a,i=(n("5f84"),n("2877")),p=Object(i["a"])(l,s,c,!1,null,"263078e2",null),f=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.increment}},[t._v("increment "+t._s(t.step))]),n("span",[t._v("total "+t._s(t.count))])])},m=[],d={name:"Counter",props:{module:{type:String,required:!0}},computed:{step:function(){return this.$store.getters["".concat(this.module,"/step")]},count:function(){return this.$store.getters["".concat(this.module,"/count")]}},methods:{increment:function(){this.$store.dispatch("".concat(this.module,"/increment"))}}},h=d,_=Object(i["a"])(h,v,m,!1,null,"524accd6",null),g=_.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{on:{click:t.increment}},[t._v("increment "+t._s(t.step))]),n("span",[t._v("total "+t._s(t.count))])])},j=[],C={name:"DoubleCounter",props:{module:{type:String,required:!0}},computed:{step:function(){return this.$store.getters["".concat(this.module,"/step")]},count:function(){return this.$store.getters["".concat(this.module,"/count")]}},methods:{increment:function(){this.$store.dispatch("".concat(this.module,"/increment"))}}},k=C,y=Object(i["a"])(k,b,j,!1,null,"23c774b3",null),w=y.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",[t._v("total = "+t._s(t.count))])])},x=[],O={name:"TotalCounter",computed:{count:function(){return this.$store.getters["totalCounter/count"]}}},E=O,S=Object(i["a"])(E,$,x,!1,null,"5f5ec739",null),M=S.exports,P={name:"app",components:{HelloWorld:f,Counter:g,DoubleCounter:w,TotalCounter:M}},T=P,A=(n("034f"),Object(i["a"])(T,o,u,!1,null,null,null)),B=A.exports,D=n("2f62"),q=function(){return{step:1,count:0}},F={step:function(t){return t.step},count:function(t){return t.count}},H={increment:function(t){var e=t.commit;e("increment")}},I={increment:function(t){t.count+=t.step}},J={namespaced:!0,state:q,getters:F,actions:H,mutations:I},L=function(){return{step:2,count:0}},V={step:function(t){return t.step},count:function(t){return t.count}},W={increment:function(t){var e=t.commit;e("increment")}},z={increment:function(t){t.count+=t.step}},N={namespaced:!0,state:L,getters:V,actions:W,mutations:z},G=(n("ac6a"),function(){return{modules:[]}}),K={count:function(t,e,n){var r=0;return t.modules.forEach(function(t){r+=n[t].count}),r}},Q={setModules:function(t,e){var n=t.commit;n("setModules",e)}},R={setModules:function(t,e){t.modules=e}},U={namespaced:!0,state:G,getters:K,actions:Q,mutations:R};r["a"].use(D["a"]);var X=new D["a"].Store({strict:!1,modules:{counterA:J,counterB:J,doubleCounterA:N,doubleCounterB:N,totalCounter:U},state:{},mutations:{},actions:{}});X.dispatch("totalCounter/setModules",["counterA","counterB","doubleCounterA","doubleCounterB"]);var Y=X;r["a"].config.productionTip=!1,new r["a"]({store:Y,render:function(t){return t(B)}}).$mount("#app")},"5f84":function(t,e,n){"use strict";var r=n("9abc"),o=n.n(r);o.a},"64a9":function(t,e,n){},"9abc":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.fb187793.js.map