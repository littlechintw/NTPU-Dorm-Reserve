(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],l=0,h=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-029094e6":"5de50b65","chunk-0ce1bb70":"96ec852c","chunk-6c1e8ffe":"c75268f2","chunk-2d2086b7":"fb5ab326","chunk-2f472128":"646570f5"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-029094e6":1,"chunk-0ce1bb70":1,"chunk-6c1e8ffe":1,"chunk-2f472128":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-029094e6":"487f8d50","chunk-0ce1bb70":"8ad0bb85","chunk-6c1e8ffe":"7620e79c","chunk-2d2086b7":"31d6cfe0","chunk-2f472128":"40dfc22b"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var h=document.getElementsByTagName("style");for(s=0;s<h.length;s++){u=h[s],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],d.parentNode.removeChild(d),n(i)},d.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var h=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",h.name="ChunkLoadError",h.type=r,h.request=o,n[1](h)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=n("0798"),a=n("7496"),i=n("40dc"),s=n("8336"),c=n("b0af"),u=n("62ad"),l=n("553a"),h=n("f6c4"),d=n("2fa4"),f=n("2a7f"),p=function(){var e=this,t=e._self._c;return t(a["a"],{staticStyle:{"background-color":"#feffff"}},[t("div",{staticClass:"inapp"},[t(i["a"],{attrs:{app:"",dark:"",dense:"",flat:"",color:"#264653"}},[t(f["a"],[t("a",{staticStyle:{color:"white","text-decoration":"none"},attrs:{href:"/"}},[e._v("北大宿舍預約系統")])]),t(d["a"]),t(s["a"],{directives:[{name:"show",rawName:"v-show",value:e.reserveBtnShow,expression:"reserveBtnShow"}],attrs:{href:"/reserve",elevation:"2",outlined:"",plain:"",raised:""}},[e._v("預約 / Reserve")]),t(c["a"],{attrs:{width:"10px"}}),t(s["a"],{attrs:{disabled:e.closeState,href:e.btn.url,elevation:"2",outlined:"",plain:"",raised:""}},[e._v(e._s(e.btn.title))])],1),t(h["a"],[t(c["a"],[t(o["a"],{directives:[{name:"show",rawName:"v-show",value:!e.apiStatus,expression:"!apiStatus"}],attrs:{type:"red",dense:"",text:"",dismissible:""}},[e._v(" API seem bad, refresh this page for some times. If not work, please contact IT to solve this problem. "+e._s(e.apiurl)+" ")])],1),t(c["a"],{directives:[{name:"show",rawName:"v-show",value:e.account,expression:"account"}]},[t(o["a"],{attrs:{type:"success",dense:"",text:"",dismissible:""}},[e._v(" Login as "+e._s(e.account)+" ")])],1),t(c["a"],[e.closeState?t(o["a"],{attrs:{type:"warning",dense:"",text:"",dismissible:""}},[e._v(" 系統已經關閉 ")]):e._e()],1),t("div",{style:{minHeight:e.Height+"px"},attrs:{id:"router"}},[t("router-view")],1)],1)],1),t(l["a"],{staticClass:"font-weight-medium",attrs:{padless:"",color:"#e9c46a"}},[t(u["a"],{staticClass:"text-center",staticStyle:{"font-size":"14px"},attrs:{cols:"12"}},[e._v(" © 2022 Copyright "),t("a",{attrs:{href:"https://littlechintw.github.io"}},[e._v("littlechin.tw")]),e._v(". All rights reserved. ")])],1)],1)},m=[];const v=n("bc3a");let b=n("e762").Base64;var g=n("f355"),w={name:"App",components:{},data:()=>({apiStatus:!0,btn:{title:"LOGIN",url:"/login"},reserveBtnShow:!1,account:"",login:!1,Height:0,Width:0,closeState:!1,apiurl:""}),methods:{checkApiAlive(){let e=this;this.apiurl=g.apiurl,v({method:"get",url:g.apiurl+"/monitor"}).then((function(e){console.log("API OK"),console.log(e)})).catch((function(t){console.log("API BAD"),e.apiStatus=!1,console.log(t)}))}},mounted(){this.checkApiAlive(),this.closeState=g.closeState,this.$cookie.get("token")&&(this.btn.title="LOGOUT",this.btn.url="/logout",this.reserveBtnShow=!0,this.account=b.decode(this.$cookie.get("id"))),this.Height=document.documentElement.clientHeight-90,this.Width=document.documentElement.clientWidth,window.onresize=()=>{this.Height=document.documentElement.clientHeight-100}}},y=w,k=(n("a269"),n("2877")),S=Object(k["a"])(y,p,m,!1,null,null,null),_=S.exports,x=n("8c4f");r["a"].use(x["a"]);const O=[{path:"/",name:"Home",component:()=>n.e("chunk-0ce1bb70").then(n.bind(null,"bb51")),meta:{title:"北大宿舍開宿預約"}},{path:"/reserve",name:"Reserve",component:()=>Promise.all([n.e("chunk-6c1e8ffe"),n.e("chunk-2f472128")]).then(n.bind(null,"b39b")),meta:{title:"預約 | 北大宿舍開宿預約"}},{path:"/login",name:"Login",component:()=>Promise.all([n.e("chunk-6c1e8ffe"),n.e("chunk-2d2086b7")]).then(n.bind(null,"a55b")),meta:{title:"Login | 北大宿舍開宿預約"}},{path:"/logout",name:"Logout",component:()=>n.e("chunk-029094e6").then(n.bind(null,"c100")),meta:{title:"Logout | 北大宿舍開宿預約"}}],A=new x["a"]({mode:"history",base:"/",routes:O});A.beforeEach((e,t,n)=>{e.meta.title&&(document.title=e.meta.title),n()});var P=A,E=n("2f62");r["a"].use(E["a"]);var j=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}}),L=n("f309");r["a"].use(L["a"]);var C=new L["a"]({}),N=n("00e7"),T=n.n(N),B=n("dfcf"),H=n("0284"),I=n.n(H);r["a"].config.productionTip=!1,r["a"].use(T.a),r["a"].component("qr-code",B["a"]),r["a"].use(I.a,{id:"UA-167881827-4",router:P,checkDuplicatedScript:!0}),new r["a"]({router:P,store:j,vuetify:C,render:e=>e(_)}).$mount("#app")},"66f7":function(e,t,n){},a269:function(e,t,n){"use strict";n("66f7")},f355:function(e){e.exports=JSON.parse('{"apiurl":"","closeState":true}')}});
//# sourceMappingURL=app.ff0d07e6.js.map