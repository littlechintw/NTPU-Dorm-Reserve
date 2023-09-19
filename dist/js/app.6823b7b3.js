(function(){"use strict";var e={574:function(e,t,n){var o=n(144),r=n(4635),i=n(1096),a=n(5378),s=n(7179),c=n(8846),u=n(4437),l=n(3584),d=n(3551),f=n(5234),h=n(2370),p=function(){var e=this,t=e._self._c;return t(i.Z,{staticStyle:{"background-color":"#feffff"}},[t("div",{staticClass:"inapp"},[t(a.Z,{attrs:{app:"",dark:"",dense:"",flat:"",color:"#264653"}},[t(h.qW,[t("a",{staticStyle:{color:"white","text-decoration":"none"},attrs:{href:"/"}},[e._v("北大宿舍預約系統")])]),t(f.Z),t(s.Z,{directives:[{name:"show",rawName:"v-show",value:e.reserveBtnShow,expression:"reserveBtnShow"}],attrs:{href:"/reserve",elevation:"2",outlined:"",plain:"",raised:""}},[e._v("預約 / Reserve")]),t(c.Z,{attrs:{width:"10px"}}),t(s.Z,{attrs:{disabled:e.closeState,href:e.btn.url,elevation:"2",outlined:"",plain:"",raised:""}},[e._v(e._s(e.btn.title))])],1),t(d.Z,[t(c.Z,[t(r.Z,{directives:[{name:"show",rawName:"v-show",value:!e.apiStatus&&!e.closeState,expression:"!apiStatus && !closeState"}],attrs:{type:"red",dense:"",text:"",dismissible:""}},[e._v(" API seem bad, refresh this page for some times. If not work, please contact IT to solve this problem. "+e._s(e.apiurl)+" ")])],1),t(c.Z,{directives:[{name:"show",rawName:"v-show",value:e.account,expression:"account"}]},[t(r.Z,{attrs:{type:"success",dense:"",text:"",dismissible:""}},[e._v(" Login as "+e._s(e.account)+" ")])],1),t(c.Z,[e.closeState?t(r.Z,{attrs:{type:"warning",dense:"",text:"",dismissible:""}},[e._v(" 系統目前未開放 / The system is not open now ")]):e._e()],1),t("div",{style:{minHeight:e.Height+"px"},attrs:{id:"router"}},[t("router-view")],1)],1)],1),t(l.Z,{staticClass:"font-weight-medium",attrs:{padless:"",color:"#e9c46a"}},[t(u.Z,{staticClass:"text-center",staticStyle:{"font-size":"14px"},attrs:{cols:"12"}},[e._v(" © 2021 - "+e._s(e.dynamicYear)+" Copyright "),t("a",{attrs:{href:"https://littlechintw.github.io"}},[e._v("littlechin.tw")]),e._v(". All rights reserved. ")])],1)],1)},m=[];const v=n(9669);let g=n(9575).Base64;var b=n(1181),w={name:"App",components:{},data:()=>({apiStatus:!0,btn:{title:"LOGIN",url:"/login"},reserveBtnShow:!1,account:"",login:!1,Height:0,Width:0,closeState:!1,apiurl:"",dynamicYear:(new Date).getFullYear()}),methods:{checkApiAlive(){let e=this;this.apiurl=b.apiurl,v({method:"get",url:b.apiurl+"/monitor"}).then((function(e){console.log("API OK"),console.log(e)})).catch((function(t){console.log("API BAD"),e.apiStatus=!1,console.log(t)}))},checkForCookie(){this.$cookie.get("token")&&(this.btn.title="LOGOUT",this.btn.url="/logout",this.reserveBtnShow=!0,this.account=g.decode(this.$cookie.get("id")))}},mounted(){this.checkApiAlive(),this.closeState=b.closeState,this.checkForCookie();setInterval(this.checkForCookie,1e3);this.Height=document.documentElement.clientHeight-90,this.Width=document.documentElement.clientWidth,window.onresize=()=>{this.Height=document.documentElement.clientHeight-100}}},y=w,k=n(1001),Z=(0,k.Z)(y,p,m,!1,null,null,null),S=Z.exports,_=n(8345);o.ZP.use(_.ZP);const P=[{path:"/",name:"Home",component:()=>Promise.all([n.e(773),n.e(675)]).then(n.bind(n,6725)),meta:{title:"北大宿舍預約系統"}},{path:"/reserve",name:"Reserve",component:()=>Promise.all([n.e(773),n.e(323)]).then(n.bind(n,1723)),meta:{title:"預約 | 北大宿舍預約系統"}},{path:"/login",name:"Login",component:()=>n.e(988).then(n.bind(n,2988)),meta:{title:"Login | 北大宿舍預約系統"}},{path:"/logingoogle",name:"Login Google",component:()=>n.e(264).then(n.bind(n,9264)),meta:{title:"Login with Google | 北大宿舍預約系統"}},{path:"/logout",name:"Logout",component:()=>n.e(764).then(n.bind(n,764)),meta:{title:"Logout | 北大宿舍預約系統"}}],x=new _.ZP({mode:"history",base:"/",routes:P});x.beforeEach(((e,t,n)=>{e.meta.title&&(document.title=e.meta.title),n()}));var A=x,C=n(629);o.ZP.use(C.ZP);var O=new C.ZP.Store({state:{},mutations:{},actions:{},modules:{}}),E=n(2250);o.ZP.use(E.Z);var L=new E.Z({}),N=n(8831),T=n(4253),j=n.n(T),B=n(660),H=n(5527),I=n.n(H);o.ZP.config.productionTip=!1,o.ZP.use(j()),o.ZP.component("qr-code",B.Z),o.ZP.use(I(),{id:"UA-167881827-4",router:A,checkDuplicatedScript:!0});const F={clientId:"54064734422-1nk5g1ag3n29qbqpero42krrtpdkugmd.apps.googleusercontent.com",scope:"profile email",prompt:"select_account",fetch_basic_profile:!0};o.ZP.use(N.Z,F),new o.ZP({router:A,store:O,vuetify:L,render:e=>e(S)}).$mount("#app")},1181:function(e){e.exports=JSON.parse('{"apiurl":"https://ntpudorm.littlechin.tw/api","closeState":false}')}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],i=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{264:"9a6accff",323:"00209841",675:"44060b2e",764:"9df1cf1f",773:"5c590222",988:"fe994a29"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{264:"c79e8f53",323:"a3c17d04",675:"be3bc36b",764:"0ef0626c",988:"5c10690f"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="ntpu-dorm-check-in:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(h);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={264:1,323:1,675:1,764:1,988:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var l=c(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},o=self["webpackChunkntpu_dorm_check_in"]=self["webpackChunkntpu_dorm_check_in"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(574)}));o=n.O(o)})();
//# sourceMappingURL=app.6823b7b3.js.map