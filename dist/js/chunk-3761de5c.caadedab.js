(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3761de5c"],{"793e":function(e,t,s){"use strict";s("a8ff")},"9ed6":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login-content"},[a("div",{staticClass:"login-area"},[a("div",{staticClass:"login-left flex-center"},[a("el-image",{attrs:{src:s("a598")}})],1),a("div",{staticClass:"login-right"},[a("h3",{staticClass:"login-title"},[e._v("用户登录")]),a("el-tabs",{staticClass:"login-con",model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[a("el-tab-pane",{attrs:{label:"密码登录",name:"1"}})],1),a("el-alert",{staticStyle:{padding:"2px"},attrs:{title:"账号说明：",type:"warning",closable:!1}},[a("template",{slot:"title"})],2),a("el-form",{ref:"loginForm",attrs:{model:e.form,rules:e.rules}},[a("el-form-item",{attrs:{prop:"username"}},[a("el-input",{attrs:{placeholder:"请输入用户名","prefix-icon":"el-icon-user"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"1"==e.type,expression:"type == '1'"}],attrs:{prop:"password"}},[a("el-input",{attrs:{placeholder:"请输入密码","prefix-icon":"el-icon-lock","show-password":""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"1"==e.type,expression:"type == '1'"}],staticClass:"save-pwd"},[a("el-checkbox",{model:{value:e.savePwd,callback:function(t){e.savePwd=t},expression:"savePwd"}},[e._v("记住密码")])],1),a("el-form-item",[a("el-button",{staticStyle:{width:"45%"},attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.onSubmit()}}},[e._v(" 登录 ")]),a("el-button",{staticStyle:{width:"45%"},attrs:{type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleTry.apply(null,arguments)}}},[e._v(" 联系开发人员 ")])],1)],1)],1)]),a("el-dialog",{attrs:{title:"公众号二维码",visible:e.dialogVisible,"show-close":!1,center:!0,width:"30%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticStyle:{"text-align":"center"}},[a("span",{staticClass:"font-title-large"},[a("span",{staticClass:"color-main font-extra-large"},[e._v("扫描二维码")]),a("span",{staticClass:"color-main font-extra-large"}),e._v("添加技术人员微信")]),a("br"),a("img",{staticStyle:{"margin-top":"3px"},attrs:{src:"http://y6.wjw.cool/lct.jpg",width:"220",height:"230"}})]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.dialogConfirm}},[e._v("确定")])],1)])],1)},o=[],i=(s("e9c4"),s("fd03")),n={name:"Login",components:{},data:function(){return{token:"",uid:"",list:[],role_name:"",dialogVisible:!1,type:"1",form:{username:"",password:"",smsCode:"",identifyCode:""},loading:!1,savePwd:!1,idenCode:"",countdown:"获取验证码",smsTimes:null,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{trigger:"blur"}]}}},created:function(){},mounted:function(){},watch:{idenCode:function(){this.form.identifyCode=this.idenCode}},methods:{handleTry:function(){this.dialogVisible=!0},dialogConfirm:function(){this.dialogVisible=!1},onSubmit:function(){var e=this,t={uname:this.form.username,pwd:this.form.password};Object(i["Zc"])(t).then((function(t){e.loading=!0,200==t.data.code?(console.log(t.data.data.uid),console.log(t.data.data.token),e.token=t.data.data.token,e.uid=t.data.data.uid,sessionStorage.setItem("token",e.token),sessionStorage.setItem("username",e.username),sessionStorage.setItem("pwd",e.pwd),sessionStorage.setItem("uid",e.uid),e.list=t.data.data.menu,localStorage.setItem("list",JSON.stringify(e.list)),e.role_name=t.data.data.user_name,sessionStorage.setItem("role_name",e.role_name),setTimeout((function(){e.loading=!1,e.$message({message:"登录成功",type:"success"}),e.$router.push({path:"/"})}),200),e.$refs["loginForm"].validate((function(t){if(!t)return!1;e.$store.dispatch("user/login",e.form).then((function(){e.savePwd&&e.setCookie(e.form.username,e.form.password,7,1),e.$router.push({path:"/index"})})).catch((function(){e.loading=!1}))}))):(e.$message({message:"账号或密码不正确",type:"error"}),setTimeout((function(){e.loading=!1}),200))}))}}},r=n,l=(s("793e"),s("2877")),c=Object(l["a"])(r,a,o,!1,null,null,null);t["default"]=c.exports},a598:function(e,t,s){e.exports=s.p+"img/login-bg.3f7e3f08.png"},a8ff:function(e,t,s){}}]);
//# sourceMappingURL=chunk-3761de5c.caadedab.js.map