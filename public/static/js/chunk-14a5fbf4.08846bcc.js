(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-14a5fbf4"],{"375e":function(e,t,r){"use strict";var o=r("6820"),a=r.n(o);a.a},"50fc":function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return l}),r.d(t,"c",function(){return n});var o=r("b775");function a(){return Object(o["a"])({url:"/admin",method:"get"})}function l(e){return Object(o["a"])({url:"/admin",method:"post",data:e})}function n(e,t){return Object(o["a"])({url:"/admin/".concat(e),method:"put",data:t})}},6820:function(e,t,r){},a18d:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"submit-container"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("p",[e._v("提交网站")])]),e._v(" "),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"网站名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"例如：navigation-web"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"网站分类",prop:"category"}},[r("el-select",{attrs:{placeholder:"请选择网站分类"},model:{value:e.ruleForm.category,callback:function(t){e.$set(e.ruleForm,"category",t)},expression:"ruleForm.category"}},e._l(e.categoryOptions,function(e,t){return r("el-option",{key:t,attrs:{label:e.label,value:e.value}})}),1)],1),e._v(" "),r("el-form-item",{attrs:{label:"网站链接",prop:"website"}},[r("el-input",{attrs:{placeholder:"例如：http://navigation.qiufeihong.top"},model:{value:e.ruleForm.website,callback:function(t){e.$set(e.ruleForm,"website",t)},expression:"ruleForm.website"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"网站LOGO",prop:"logo"}},[r("el-input",{attrs:{placeholder:"例如：http://navigation.qiufeihong.top/favicon.ico"},model:{value:e.ruleForm.logo,callback:function(t){e.$set(e.ruleForm,"logo",t)},expression:"ruleForm.logo"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"网站描述",prop:"describe"}},[r("el-input",{attrs:{type:"textarea",placeholder:"例如：一个网站导航和收藏平台（请用中文）"},model:{value:e.ruleForm.describe,callback:function(t){e.$set(e.ruleForm,"describe",t)},expression:"ruleForm.describe"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("立即提交")]),e._v(" "),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)},a=[],l=(r("7f7f"),r("50fc")),n=r("ed08"),i={name:"Submit",data:function(){return{ruleForm:{name:"",category:"",website:"",describe:"",logo:""},rules:{name:[{required:!0,message:"请输入网站名称",trigger:"blur"}],category:[{required:!0,message:"请选择网站分类",trigger:"change"}],website:[{required:!0,message:"请输入网站链接",trigger:"blur"}]},categoryOptions:[]}},created:function(){var e=this.$router.options.routes;this.categoryOptions=Object(n["b"])(e)},methods:{submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;""===t.ruleForm.logo&&(t.ruleForm.logo="http://navigation.qiufeihong.top/favicon.ico"),l["b"](t.ruleForm).then(function(e){"ok"===e.state?t.$notify.success({title:"成功",message:"提交网站《".concat(t.ruleForm.name,"》成功")}):t.$notify.error({title:"失败",message:"提交网站《".concat(t.ruleForm.name,"》失败")})})})},resetForm:function(e){this.$refs[e].resetFields()}}},s=i,u=(r("375e"),r("2877")),c=Object(u["a"])(s,o,a,!1,null,"041caf84",null);t["default"]=c.exports}}]);