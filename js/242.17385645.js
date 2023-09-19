"use strict";(self["webpackChunkntpu_dorm_check_in"]=self["webpackChunkntpu_dorm_check_in"]||[]).push([[242],{242:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(8846),o=n(4437),i=n(6035),a=n(6275),s=n(5294),l=function(){var t=this,e=t._self._c;return e(r.Z,{attrs:{elevation:"0"}},[e(i.Z,{attrs:{fluid:""}},[e(s.Z,[e(o.Z,{attrs:{cols:"12"}},[e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("h1",{staticStyle:{color:"red"}},[t._v(t._s(t.errValue))])]),e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.formShow,expression:"formShow"}]},[e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("h3",[t._v("請登入 Google Workspace 帳號")])]),e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("h5",{staticStyle:{color:"gray"}},[t._v(" Login with your Google Workspace account. ")])]),e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("div",{staticClass:"google-btn",on:{click:t.loginWithGoogleBtn}},[e("div",{staticClass:"google-icon-wrapper"},[e("img",{staticClass:"google-icon",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"}})]),e("div",{staticClass:"btn-text"},[e("b",[t._v("Sign in with Google")])])])]),e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")])],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.formLoadingShow,expression:"formLoadingShow"}]},[e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e("br")]),e(s.Z,{attrs:{align:"center",justify:"center",length:""}},[e(a.Z,{attrs:{indeterminate:"",color:"amber"}})],1)],1),e("br"),e(s.Z,{staticStyle:{"background-color":"#17252a",color:"white",zoom:"1.3"},attrs:{align:"center",justify:"center",length:""}},[t._v(" "+t._s(t.tipsText)+" ")])],1)],1)],1)],1)},c=[];n(7658),n(6229),n(7330),n(2062);const u=n(9669);var g=n(1181),d={name:"Home",data(){return{valid:!1,stuid:"",stuidRules:[t=>!!t||"請輸入學號",t=>t&&9===t.length||"請輸入學號正確格式"],pwd:"",pwdRules:[t=>!!t||"請輸入密碼"],formShow:!0,formLoadingShow:!1,tipsText:"",errValue:"",tokenValue:""}},components:{},methods:{validate(){if(this.$refs.form.validate()){this.formShow=!1,this.formLoadingShow=!0,this.tipsText="";let t=this;u.post(g.apiurl+"/login",{stu_id:this.stuid,pwd:this.pwd}).then((function(e){console.log(e.data),200!==e.data.code?(t.formShow=!0,t.formLoadingShow=!1,t.tipsText=e.data.message):(t.$cookie.set("token",e.data.session,1),t.$router.push("/reserve"),location.reload())})).catch((function(t){alert(t)}))}},loginWithGoogle(){this.$cookie.set("token",this.tokenValue,1),this.$router.push("/reserve")},loginWithGoogleBtn(){this.$router.push("/api/google/login")}},mounted:function(){this.$cookie.get("token")&&this.$router.push("/reserve");const t=new URLSearchParams(window.location.search);t.has("err")&&(this.errValue=t.get("err")),t.has("token")&&(this.tokenValue=t.get("token"),this.loginWithGoogle())}},f=d,h=n(1001),p=(0,h.Z)(f,l,c,!1,null,"9842444a",null),v=p.exports},6035:function(t,e,n){n.d(e,{Z:function(){return a}});n(9027),n(1884);var r=n(144);function o(t){return r.ZP.extend({name:`v-${t}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(e,{props:n,data:r,children:o}){r.staticClass=`${t} ${r.staticClass||""}`.trim();const{attrs:i}=r;if(i){r.attrs={};const t=Object.keys(i).filter((t=>{if("slot"===t)return!1;const e=i[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));t.length&&(r.staticClass+=` ${t.join(" ")}`)}return n.id&&(r.domProps=r.domProps||{},r.domProps.id=n.id),e(n.tag,r,o)}})}var i=n(2653),a=o("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:n,children:r}){let o;const{attrs:a}=n;return a&&(n.attrs={},o=Object.keys(a).filter((t=>{if("slot"===t)return!1;const e=a[t];return t.startsWith("data-")?(n.attrs[t]=e,!1):e||"string"===typeof e}))),e.id&&(n.domProps=n.domProps||{},n.domProps.id=e.id),t(e.tag,(0,i.ZP)(n,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(o||[])}),r)}})},5294:function(t,e,n){n(7658),n(1884);var r=n(144),o=n(2653),i=n(1050);const a=["sm","md","lg","xl"],s=["start","end","center"];function l(t,e){return a.reduce(((n,r)=>(n[t+(0,i.jC)(r)]=e(),n)),{})}const c=t=>[...s,"baseline","stretch"].includes(t),u=l("align",(()=>({type:String,default:null,validator:c}))),g=t=>[...s,"space-between","space-around"].includes(t),d=l("justify",(()=>({type:String,default:null,validator:g}))),f=t=>[...s,"space-between","space-around","stretch"].includes(t),h=l("alignContent",(()=>({type:String,default:null,validator:f}))),p={align:Object.keys(u),justify:Object.keys(d),alignContent:Object.keys(h)},v={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){let r=v[t];if(null!=n){if(e){const n=e.replace(t,"");r+=`-${n}`}return r+=`-${n}`,r.toLowerCase()}}const m=new Map;e.Z=r.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:c},...u,justify:{type:String,default:null,validator:g},...d,alignContent:{type:String,default:null,validator:f},...h},render(t,{props:e,data:n,children:r}){let i="";for(const o in e)i+=String(e[o]);let a=m.get(i);if(!a){let t;for(t in a=[],p)p[t].forEach((n=>{const r=e[n],o=y(t,n,r);o&&a.push(o)}));a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),m.set(i,a)}return t(e.tag,(0,o.ZP)(n,{staticClass:"row",class:a}),r)}})},648:function(t,e,n){var r=n(1694),o=n(614),i=n(4326),a=n(5112),s=a("toStringTag"),l=Object,c="Arguments"===i(function(){return arguments}()),u=function(t,e){try{return t[e]}catch(n){}};t.exports=r?i:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=u(e=l(t),s))?n:c?i(e):"Object"===(r=i(e))&&o(e.callee)?"Arguments":r}},7045:function(t,e,n){var r=n(6339),o=n(3070);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),o.f(t,e,n)}},1694:function(t,e,n){var r=n(5112),o=r("toStringTag"),i={};i[o]="z",t.exports="[object z]"===String(i)},1340:function(t,e,n){var r=n(648),o=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return o(t)}},8053:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw e("Not enough arguments");return t}},6229:function(t,e,n){var r=n(8052),o=n(1702),i=n(1340),a=n(8053),s=URLSearchParams,l=s.prototype,c=o(l.append),u=o(l["delete"]),g=o(l.forEach),d=o([].push),f=new s("a=1&a=2&b=3");f["delete"]("a",1),f["delete"]("b",void 0),f+""!=="a=2"&&r(l,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return u(this,t);var r=[];g(this,(function(t,e){d(r,{key:e,value:t})})),a(e,1);var o,s=i(t),l=i(n),f=0,h=0,p=!1,v=r.length;while(f<v)o=r[f++],p||o.key===s?(p=!0,u(this,o.key)):h++;while(h<v)o=r[h++],o.key===s&&o.value===l||c(this,o.key,o.value)}),{enumerable:!0,unsafe:!0})},7330:function(t,e,n){var r=n(8052),o=n(1702),i=n(1340),a=n(8053),s=URLSearchParams,l=s.prototype,c=o(l.getAll),u=o(l.has),g=new s("a=1");!g.has("a",2)&&g.has("a",void 0)||r(l,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return u(this,t);var r=c(this,t);a(e,1);var o=i(n),s=0;while(s<r.length)if(r[s++]===o)return!0;return!1}),{enumerable:!0,unsafe:!0})},2062:function(t,e,n){var r=n(9781),o=n(1702),i=n(7045),a=URLSearchParams.prototype,s=o(a.forEach);r&&!("size"in a)&&i(a,"size",{get:function(){var t=0;return s(this,(function(){t++})),t},configurable:!0,enumerable:!0})}}]);
//# sourceMappingURL=242.17385645.js.map