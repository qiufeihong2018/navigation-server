(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-787b37ec"],{1780:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("NavPage")},i=[],r=o("b7f9"),a={components:{NavPage:r["a"]}},s=a,l=o("2877"),c=Object(l["a"])(s,n,i,!1,null,null,null);e["default"]=c.exports},"44e0":function(t,e,o){"use strict";var n=o("66c7"),i=o.n(n);i.a},"50fc":function(t,e,o){"use strict";o.d(e,"a",function(){return i}),o.d(e,"b",function(){return r}),o.d(e,"c",function(){return a});var n=o("b775");function i(){return Object(n["a"])({url:"/admin",method:"get"})}function r(t){return Object(n["a"])({url:"/admin",method:"post",data:t})}function a(t,e){return Object(n["a"])({url:"/admin/".concat(t),method:"put",data:e})}},"66c7":function(t,e,o){},"686d":function(t,e,o){"use strict";var n=o("c393"),i=o.n(n);i.a},b7f9:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("waterfall",{attrs:{col:t.col,width:t.itemWidth,"gutter-width":t.gutterWidth,data:t.navArr},on:{loadmore:t.loadmore,scroll:t.scroll}},[t._l(t.navArr,function(e,n){return o("div",{key:n,staticStyle:{"margin-top":"10px"}},[o("el-card",{attrs:{"body-style":{padding:"10px"},shadow:"hover"}},[o("img",{staticClass:"image",attrs:{src:e.logo,alt:"加载错误"}}),t._v(" "),o("el-form",{attrs:{"label-width":"80px"}},[o("el-form-item",{attrs:{label:"网站名称"}},[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),o("el-form-item",{attrs:{label:"网站链接"}},[t._v("\n              "+t._s(t.currentRoute)+"\n              "),"RecommendationFront-end"===t.currentRoute?o("router-link",{staticClass:"font-website",attrs:{to:{path:"iframeNav",query:{website:e.website}}}},[t._v(t._s(e.website)+"\n              ")]):"RecommendationBack-end"===t.currentRoute?o("router-link",{staticClass:"font-website",attrs:{to:{path:"back-end/iframeNav",query:{website:e.website}}}},[t._v(t._s(e.website)+"\n              ")]):t._e()],1),t._v(" "),o("el-form-item",{attrs:{label:"网站描述"}},[o("div",[t._v(t._s(e.describe||"需要您添加网站描述"))])])],1),t._v(" "),o("div",{staticClass:"bottom clearfix"},[o("time",{staticClass:"time"},[t._v("创建时间："+t._s(t._f("timeTrans")(e.created_at)))]),t._v(" "),o("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:function(o){return t.openDialog(e)}}},[t._v("编辑")]),t._v(" "),o("el-button",{staticClass:"button",attrs:{type:"text"},on:{click:function(o){return t.deleteMap(e)}}},[t._v("删除")])],1)],1)],1)})],2),t._v(" "),o("el-dialog",{attrs:{title:"编辑网站",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[o("el-form",{attrs:{model:t.form}},[o("el-form-item",{attrs:{label:"网站名称",prop:"name"}},[o("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"网站分类",prop:"category"}},[o("el-select",{attrs:{placeholder:"请选择网站分类"},model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}},t._l(t.categoryOptions,function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),o("el-form-item",{attrs:{label:"网站链接",prop:"website"}},[o("el-input",{model:{value:t.form.website,callback:function(e){t.$set(t.form,"website",e)},expression:"form.website"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"网站LOGO",prop:"logo"}},[o("el-input",{model:{value:t.form.logo,callback:function(e){t.$set(t.form,"logo",e)},expression:"form.logo"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"网站描述",prop:"describe"}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.form.describe,callback:function(e){t.$set(t.form,"describe",e)},expression:"form.describe"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.putMap(t.form)}}},[t._v("确 定")])],1)],1),t._v(" "),o("el-tooltip",{attrs:{placement:"top",content:"返回顶部"}},[o("back-to-top",{attrs:{"custom-style":t.myBackToTopStyle,"visibility-height":300,"back-position":50,"transition-name":"fade"}})],1)],1)},i=[],r=(o("7f7f"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:t.transitionName}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:t.customStyle,on:{click:t.backToTop}},[o("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[o("path",{attrs:{d:"M12.036 15.59a1 1 0 0 1-.997.995H5.032a.996.996 0 0 1-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29a1.003 1.003 0 0 1 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z"}})])])])}),a=[],s=(o("c5f6"),{name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},transitionName:{type:String,default:"fade"}},data:function(){return{visible:!1,interval:null,isMoving:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll),this.interval&&clearInterval(this.interval)},methods:{handleScroll:function(){this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var t=this;if(!this.isMoving){var e=window.pageYOffset,o=0;this.isMoving=!0,this.interval=setInterval(function(){var n=Math.floor(t.easeInOutQuad(10*o,e,-e,500));n<=t.backPosition?(window.scrollTo(0,t.backPosition),clearInterval(t.interval),t.isMoving=!1):window.scrollTo(0,n),o++},16.7)}},easeInOutQuad:function(t,e,o,n){return(t/=n/2)<1?o/2*t*t+e:-o/2*(--t*(t-2)-1)+e}}}),l=s,c=(o("44e0"),o("2877")),u=Object(c["a"])(l,r,a,!1,null,"d6996bee",null),d=u.exports,f=o("50fc"),m=o("c91c"),p={components:{BackToTop:d},data:function(){return{navArr:[],dialogFormVisible:!1,form:{},formLabelWidth:"120px",categoryOptions:[],myBackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"},col:4,currentRoute:this.$router.currentRoute.name}},computed:{itemWidth:function(){return document.documentElement.clientWidth/375*75},gutterWidth:function(){return document.documentElement.clientWidth/375*4.5}},created:function(){this.getMap();for(var t=this.$router.options.routes,e=0;e<t.length;e++)if("/redirect"!==t[e].path){var o=t[e].children;for(var n in o){var i={value:"",label:""};i.value=o[n].path,i.label=o[n].meta.title,this.categoryOptions.push(i)}}this.categoryOptions=this.categoryOptions.slice(0,-3)},methods:{scroll:function(t){},loadmore:function(t){},openDialog:function(t){this.dialogFormVisible=!0,this.form=t},getMap:function(){var t=this;m["b"]().then(function(e){t.navArr=e.data.filter(function(e){return e.category.toLowerCase()===t.$router.currentRoute.name.toLowerCase()})})},deleteMap:function(t){var e=this;this.$confirm("此操作将永久删除该网站, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$notify.error({title:"失败",message:"您没有权限删除网站《".concat(t.name,"》")})})},putMap:function(t){var e=this;this.dialogFormVisible=!1,t.way="put",f["c"](t._id,t).then(function(o){"ok"===o.state?e.$notify.success({title:"成功",message:"管理员会处理编辑请求！"}):e.$notify.error({title:"失败",message:"编辑网站《".concat(t.name,"》失败！")}),e.getMap()})}}},b=p,v=(o("686d"),Object(c["a"])(b,n,i,!1,null,"2c555a80",null));e["a"]=v.exports},c393:function(t,e,o){},c91c:function(t,e,o){"use strict";o.d(e,"b",function(){return i}),o.d(e,"c",function(){return r}),o.d(e,"d",function(){return a}),o.d(e,"a",function(){return s});var n=o("b775");function i(){return Object(n["a"])({url:"/superAdmin",method:"get"})}function r(t,e){return Object(n["a"])({url:"/superAdmin/".concat(t),method:"post",data:e})}function a(t,e){return Object(n["a"])({url:"/superAdmin/".concat(t),method:"put",data:e})}function s(t){return Object(n["a"])({url:"/superAdmin/".concat(t),method:"delete"})}}}]);