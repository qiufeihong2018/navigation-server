(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3818cf98"],{"44e0":function(t,e,n){"use strict";var o=n("66c7"),i=n.n(o);i.a},"50fc":function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r});var o=n("b775");function i(){return Object(o["a"])({url:"/admin",method:"get"})}function a(t){return Object(o["a"])({url:"/admin",method:"post",data:t})}function r(t,e){return Object(o["a"])({url:"/admin/".concat(t),method:"put",data:e})}},"5b77":function(t,e,n){},"66c7":function(t,e,n){},"97c9":function(t,e,n){"use strict";var o=n("5b77"),i=n.n(o);i.a},a7e4:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("NavPage")},i=[],a=n("b7f9"),r={components:{NavPage:a["a"]}},l=r,s=n("2877"),c=Object(s["a"])(l,o,i,!1,null,null,null);e["default"]=c.exports},b7f9:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.loading,expression:"loading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"app-container",attrs:{"element-loading-text":"别催了，我在加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0.8)"}},[n("waterfall",{attrs:{col:t.col,width:t.itemWidth,"gutter-width":t.gutterWidth,data:t.navArr},on:{loadmore:t.loadmore,scroll:t.scroll}},[t._l(t.navArr,function(e,o){return n("div",{key:o,staticStyle:{"margin-top":"10px"}},[n("el-card",{attrs:{"body-style":{padding:"10px"},shadow:"hover"}},[n("img",{staticClass:"image",attrs:{src:e.logo,alt:"加载错误"}}),t._v(" "),n("el-form",{attrs:{"label-width":"100px","label-position":"left"}},[n("el-form-item",{attrs:{label:"网站名称"}},[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),n("el-form-item",{attrs:{label:"iframe链接"}},[n("router-link",{staticClass:"font-website",attrs:{to:{path:"iframeNav",query:{website:e.website}}}},[t._v("\n                "+t._s(e.website)+"\n              ")])],1),t._v(" "),n("el-form-item",{attrs:{label:"新窗口链接"}},[n("a",{staticClass:"font-website",attrs:{href:e.website,target:"_blank"}},[t._v(t._s(e.website))])]),t._v(" "),n("el-form-item",{attrs:{label:"网站描述"}},[n("div",[t._v(t._s(e.describe||"需要您添加网站描述"))])])],1),t._v(" "),n("div",{staticClass:"bottom clearfix"},[n("time",{staticClass:"time"},[t._v("创建时间："+t._s(t._f("timeTrans")(e.created_at)))]),t._v(" "),n("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:function(n){return t.openDialog(e)}}},[t._v("编辑")]),t._v(" "),n("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:function(n){return t.deleteMap(e)}}},[t._v("删除")])],1)],1)],1)})],2),t._v(" "),n("el-dialog",{attrs:{title:"编辑网站",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("el-form",{attrs:{model:t.form}},[n("el-form-item",{attrs:{label:"网站名称",prop:"name"}},[n("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"网站分类",prop:"category"}},[n("el-select",{attrs:{placeholder:"请选择网站分类"},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}},t._l(t.categoryOptions,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),n("el-form-item",{attrs:{label:"网站链接",prop:"website"}},[n("el-input",{model:{value:t.form.website,callback:function(e){t.$set(t.form,"website",e)},expression:"form.website"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"网站LOGO",prop:"logo"}},[n("el-input",{model:{value:t.form.logo,callback:function(e){t.$set(t.form,"logo",e)},expression:"form.logo"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"网站描述",prop:"describe"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.form.describe,callback:function(e){t.$set(t.form,"describe",e)},expression:"form.describe"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.putMap(t.form)}}},[t._v("确 定")])],1)],1),t._v(" "),n("el-tooltip",{attrs:{placement:"top",content:"返回顶部"}},[n("back-to-top",{attrs:{"custom-style":t.myBackToTopStyle,"visibility-height":300,"back-position":50,"transition-name":"fade"}})],1)],1)},i=[],a=n("db72"),r=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transitionName}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:t.customStyle,on:{click:t.backToTop}},[n("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[n("path",{attrs:{d:"M12.036 15.59a1 1 0 0 1-.997.995H5.032a.996.996 0 0 1-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z"}})])])])}),l=[],s=(n("c5f6"),{name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null,isMoving:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var t=this;if(!this.isMoving){var e=window.pageYOffset,n=0;this.isMoving=!0,this.interval=setInterval(function(){var o=Math.floor(t.easeInOutQuad(10*n,e,-e,500));o<=t.backPosition?(window.scrollTo(0,t.backPosition),clearInterval(t.interval),t.isMoving=!1):window.scrollTo(0,o),n++},16.7)}},easeInOutQuad:function(t,e,n,o){return(t/=o/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}}}),c=s,u=(n("44e0"),n("2877")),d=Object(u["a"])(c,r,l,!1,null,"d6996bee",null),m=d.exports,f=n("ed08"),b=n("50fc"),p=n("c91c"),v=n("2f62"),h={components:{BackToTop:m},data:function(){return{navArr:[],dialogFormVisible:!1,form:{},formLabelWidth:"120px",categoryOptions:[],myBackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"},currentRoute:this.$router.currentRoute.name,loading:!0}},computed:Object(a["a"])({col:function(){return"mobile"===this.device?1:!0===this.sidebar.opened?3:4},itemWidth:function(){return"mobile"===this.device?document.documentElement.clientWidth/1*.885:!0===this.sidebar.opened?document.documentElement.clientWidth/3*.84:document.documentElement.clientWidth/4*.9},gutterWidth:function(){return"mobile"===this.device?0:document.documentElement.clientWidth/375*4.5}},Object(v["b"])(["sidebar","device"])),created:function(){this.getMap();var t=this.$router.options.routes;this.categoryOptions=Object(f["b"])(t)},methods:{scroll:function(t){},loadmore:function(t){},openDialog:function(t){this.dialogFormVisible=!0,this.form=t},getMap:function(){var t=this;p["b"]().then(function(e){t.loading=!1,t.navArr=e.data.filter(function(e){return e.category.toLowerCase()===t.currentRoute.toLowerCase()})})},deleteMap:function(t){var e=this;this.$confirm("此操作将永久删除该网站, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$notify.error({title:"失败",message:"您没有权限删除网站《".concat(t.name,"》")})})},putMap:function(t){var e=this;this.dialogFormVisible=!1,t.way="put",b["c"](t._id,t).then(function(n){"ok"===n.state?e.$notify.success({title:"成功",message:"管理员会处理编辑请求！"}):e.$notify.error({title:"失败",message:"编辑网站《".concat(t.name,"》失败！")}),e.getMap()})}}},g=h,w=(n("97c9"),Object(u["a"])(g,o,i,!1,null,null,null));e["a"]=w.exports},c91c:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"d",function(){return r}),n.d(e,"a",function(){return l});var o=n("b775");function i(){return Object(o["a"])({url:"/superAdmin",method:"get"})}function a(t,e){return Object(o["a"])({url:"/superAdmin/".concat(t),method:"post",data:e})}function r(t,e){return Object(o["a"])({url:"/superAdmin/".concat(t),method:"put",data:e})}function l(t){return Object(o["a"])({url:"/superAdmin/".concat(t),method:"delete"})}}}]);