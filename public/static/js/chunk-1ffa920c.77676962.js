(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ffa920c"],{"222a":function(e,s,r){"use strict";r.r(s);var t=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"register-container"},[t("el-form",{ref:"registerForm",staticClass:"register-form",attrs:{model:e.registerForm,rules:e.registerRules,"auto-complete":"on","label-position":"left"}},[t("div",{staticClass:"title-container"},[t("img",{attrs:{src:r("03cc")}}),e._v(" "),t("h3",{staticClass:"title"},[e._v("注册")])]),e._v(" "),t("el-form-item",{attrs:{prop:"username"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"user"}})],1),e._v(" "),t("el-input",{ref:"username",attrs:{placeholder:"Username",name:"username",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.registerForm.username,callback:function(s){e.$set(e.registerForm,"username",s)},expression:"registerForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{prop:"password"}},[t("span",{staticClass:"svg-container"},[t("svg-icon",{attrs:{"icon-class":"password"}})],1),e._v(" "),t("el-input",{key:e.passwordType,ref:"password",attrs:{type:e.passwordType,placeholder:"Password",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.handleregister(s)}},model:{value:e.registerForm.password,callback:function(s){e.$set(e.registerForm,"password",s)},expression:"registerForm.password"}}),e._v(" "),t("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[t("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),e._v(" "),t("el-button",{staticStyle:{width:"100%","margin-bottom":"30px"},attrs:{loading:e.loading,type:"primary"},nativeOn:{click:function(s){return s.preventDefault(),e.handleregister(s)}}},[e._v("register")]),e._v(" "),t("div",{staticClass:"tips"},[t("span",{staticStyle:{"margin-right":"20px"}},[e._v("username: admin")]),e._v(" "),t("span",[e._v(" password: admin")])])],1)],1)},a=[],n={name:"Register",data:function(){return{registerForm:{username:"admin",password:"admin"},registerRules:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur"}]},loading:!1,passwordType:"password",redirect:void 0}},methods:{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick(function(){e.$refs.password.focus()})},handleregister:function(){var e=this;this.$refs.registerForm.validate(function(s){if(!s)return console.log("error submit!!"),!1;e.loading=!0,e.$store.dispatch("user/register",e.registerForm).then(function(){e.$router.push({path:"/login"}),e.loading=!1}).catch(function(){e.loading=!1})})}}},i=n,o=(r("6498"),r("50d7"),r("2877")),c=Object(o["a"])(i,t,a,!1,null,"2ed68030",null);s["default"]=c.exports},"50d7":function(e,s,r){"use strict";var t=r("5d80"),a=r.n(t);a.a},"5d80":function(e,s,r){},6498:function(e,s,r){"use strict";var t=r("acc2"),a=r.n(t);a.a},acc2:function(e,s,r){}}]);