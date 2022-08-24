(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a7e328a"],{"12ad":function(e,t,r){"use strict";r("8a6c")},"1f8c":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user"},[r("div",{staticClass:"block-quote"},[r("el-form",{ref:"form",attrs:{inline:!0,model:e.form}},[r("el-form-item",{attrs:{label:"名称",prop:"username"}},[r("el-input",{attrs:{clearable:"",placeholder:"请输入名称"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{label:"手机号",prop:"tel"}},[r("el-input",{attrs:{clearable:"",placeholder:"请输入手机号"},model:{value:e.form.tel,callback:function(t){e.$set(e.form,"tel",t)},expression:"form.tel"}})],1),r("el-form-item",{attrs:{label:"所属角色组",prop:"roles"}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择角色"},model:{value:e.form.roles,callback:function(t){e.$set(e.form,"roles",t)},expression:"form.roles"}},e._l(e.rolesList,(function(e){return r("el-option",{key:e.id,attrs:{value:e.id,label:e.role_name}})})),1)],1),r("el-form-item",{staticStyle:{float:"right"}},[e.checkPermission("usersearch")?r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchinfo}},[e._v("搜索")]):e._e(),e.checkPermission("useradd")?r("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.addData}},[e._v("新增")]):e._e()],1)],1)],1),r("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent}},[r("el-table-column",{attrs:{label:"序号",align:"center",fixed:"",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),r("el-table-column",{attrs:{prop:"id",fixed:"",label:"用户id",resizable:!1,align:"center"}}),r("el-table-column",{attrs:{prop:"nickname",fixed:"",label:"管理员名称",resizable:!1,align:"center"}}),r("el-table-column",{attrs:{prop:"uname",fixed:"",label:"管理员账号",resizable:!1,align:"center"}}),r("el-table-column",{attrs:{prop:"tel",label:"手机号",resizable:!1,align:"center"}}),r("el-table-column",{attrs:{prop:"role_name",label:"所属角色组",resizable:!1,align:"center"}}),e.checkPermission(["useredit","userdelete"])?r("el-table-column",{attrs:{label:"操作",resizable:!1,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.checkPermission("useredit")?r("el-link",{attrs:{type:"primary"},on:{click:function(r){return e.editData(2,t.row)}}},[e._v("修改")]):e._e(),e.checkPermission("userdelete")?r("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:function(r){return e.deleteData(t.row)}}},[e._v("删除")]):e._e()]}}],null,!1,2221165770)}):e._e()],1),r("add-dialog",{ref:"addData"})],1)},n=[],s=r("1da1"),i=(r("96cf"),r("e9c4"),r("bade")),o=r("fd03"),l=r("e3d9"),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"AddDialog"},[r("el-dialog",{attrs:{title:1==e.type?"新增":"编辑",visible:e.dialogVisible,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"auto"}},[r("el-input",{attrs:{type:"hidden"},model:{value:e.ruleForm.id,callback:function(t){e.$set(e.ruleForm,"id",t)},expression:"ruleForm.id"}}),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"账号",prop:"uname"}},[r("el-input",{attrs:{placeholder:"请输入账号"},model:{value:e.ruleForm.uname,callback:function(t){e.$set(e.ruleForm,"uname",t)},expression:"ruleForm.uname"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"密码",prop:"pwd"}},[r("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.ruleForm.pwd,callback:function(t){e.$set(e.ruleForm,"pwd",t)},expression:"ruleForm.pwd"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"姓名",prop:"nickname"}},[r("el-input",{attrs:{placeholder:"请输入姓名"},model:{value:e.ruleForm.nickname,callback:function(t){e.$set(e.ruleForm,"nickname",t)},expression:"ruleForm.nickname"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"手机号",prop:"tel"}},[r("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.ruleForm.tel,callback:function(t){e.$set(e.ruleForm,"tel",t)},expression:"ruleForm.tel"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"角色",prop:"role_name",rules:[{required:!0,message:"角色不能为空",trigger:"blur"}]}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择角色"},model:{value:e.ruleForm.role_name,callback:function(t){e.$set(e.ruleForm,"role_name",t)},expression:"ruleForm.role_name"}},e._l(e.rolesList,(function(e){return r("el-option",{key:e.id,attrs:{value:e.id,label:e.role_name}})})),1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"前端用户id绑定",prop:"web_uid"}},[r("el-input",{attrs:{placeholder:"请输入前端用户id"},model:{value:e.ruleForm.web_uid,callback:function(t){e.$set(e.ruleForm,"web_uid",t)},expression:"ruleForm.web_uid"}})],1)],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},c=[],m={name:"AddDialog",components:{},data:function(){return{id:"",token:"",rolesList:[],type:1,dialogVisible:!1,ruleForm:{id:"",nickname:"",pwd:"",uname:"",tel:"",role_name:"",web_uid:""},rules:{uname:[{required:!0,message:"账号不能为空",trigger:"blur"},{pattern:/^[a-z0-9]{4,10}$/,message:"账号由 4-10 个小写字母和数字组成",trigger:"blur"}],web_uid:[{required:!0,message:"前端用户id不能为空",trigger:"blur"}],pwd:[{required:!0,message:"密码不能为空",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{6,18}$/,message:"密码由 6-18 个大小写字母和数字组成",trigger:"blur"}],nickname:[{required:!0,message:"姓名不能为空",trigger:"blur"},{pattern:/^[a-zA-Z0-9\u4e00-\u9fa5]{2,4}$/,message:"姓名由 2-4 个汉字组成",trigger:"blur"}],tel:[{required:!0,message:"手机号不能为空",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}]},rangeDate:{disabledDate:function(e){return e.getTime()>Date.now()}}}},created:function(){this.getRolesList(),2==this.type&&this.getUserEdit()},mounted:function(){},methods:{getUserEdit:function(){},getRolesList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var r={token:sessionStorage.getItem("token")};Object(o["Bc"])(r).then((function(t){e.rolesList=t.data.data}))},show:function(e,t){var r=this;if(this.type=e,this.dialogVisible=!0,2==e){this.ruleForm=t;var a=this.ruleForm.id;this.id=a;var n={token:sessionStorage.getItem("token")};Object(o["Z"])(n,a).then((function(e){r.ruleForm=e.data.data,r.ruleForm.role_name=e.data.data.rid}))}else this.ruleForm={id:"",nickname:"",pwd:"",uname:"",tel:"",role_name:"",web_uid:""}},close:function(){var e=this;this.dialogVisible=!1,this.$nextTick((function(){e.$refs.ruleForm.clearValidate()}))},submitForm:function(){var e=this;this.$refs.ruleForm.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var a,n,s,i,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=6;break}1==e.type?(a=sessionStorage.getItem("token"),e.token=a,n={token:sessionStorage.getItem("token"),nickname:e.ruleForm.nickname,uname:e.ruleForm.uname,tel:e.ruleForm.tel,pwd:e.ruleForm.pwd,web_uid:e.ruleForm.web_uid,u_type:2,role_name:e.ruleForm.role_name},Object(o["f"])(n).then((function(t){200==t.data.code?(e.$message.success("新增成功"),e.$parent.getUserList(),e.close()):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close())}))):(s=sessionStorage.getItem("token"),e.token=s,i=e.id,l={token:sessionStorage.getItem("token"),u_type:2,nickname:e.ruleForm.nickname,uname:e.ruleForm.uname,tel:e.ruleForm.tel,web_uid:e.ruleForm.web_uid,pwd:e.ruleForm.pwd,role_name:e.ruleForm.role_name},Object(o["ab"])(l,i).then((function(t){200==t.data.code?(e.$message.success("编辑成功"),e.$parent.getUserList(),e.close()):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close())}))),e.$parent.getUserList(),e.close(),t.next=7;break;case 6:return t.abrupt("return",!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},d=m,g=r("2877"),p=Object(g["a"])(d,u,c,!1,null,null,null),f=p.exports,b={name:"user",components:{pageTable:l["a"],addDialog:f},data:function(){return{token:"",rolesList:[],userList:[],form:{username:"",tel:"",roles:""},page:{currentPage:"1",pageSize:10,total:0},tableSelectList:[]}},created:function(){this.getRolesList(),this.getUserList()},mounted:function(){},computed:{},methods:{checkPermission:i["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},getRolesList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var r={u_type:2,token:sessionStorage.getItem("token")};Object(o["Bc"])(r).then((function(t){e.rolesList=t.data.data}))},searchinfo:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var r={u_type:2,page:1,limit:this.page.pageSize,token:sessionStorage.getItem("token"),nickname:this.form.username,tel:this.form.tel,role:this.form.roles};Object(o["m"])(r).then((function(t){e.page.total=t.data.data.total,e.page.currentPage=t.data.data.current_page,e.userList=t.data.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var r={u_type:2,page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token"),nickname:this.form.username,tel:this.form.tel,role:this.form.roles};Object(o["m"])(r).then((function(t){e.page.total=t.data.data.total,e.page.currentPage=t.data.data.current_page,e.userList=t.data.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},addData:function(){this.$refs.addData.show(1,{})},editData:function(e,t){if(1==e&&1==this.tableSelectList.length||2==e){var r=1==e?this.tableSelectList[0]:t;this.$refs.addData.show(2,JSON.parse(JSON.stringify(r)))}else this.$message.warning("请选择一条数据编辑")},deleteData:function(e){var t=this;this.$confirm("是否删除此用户？","提示",{type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=e.id,n={token:sessionStorage.getItem("token")},Object(o["R"])(n,a).then((function(e){200==e.data.code?(t.getUserList(),t.$message.success("删除成功")):(t.$message.error(e.data.msg),t.getUserList())}));case 3:case"end":return r.stop()}}),r)})))).catch((function(){}))}}},h=b,k=Object(g["a"])(h,a,n,!1,null,"4f46a419",null);t["default"]=k.exports},"408a":function(e,t,r){var a=r("e330");e.exports=a(1..valueOf)},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("e330"),n=r("1d80"),s=r("577e"),i=r("5899"),o=a("".replace),l="["+i+"]",u=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),m=function(e){return function(t){var r=s(n(t));return 1&e&&(r=o(r,u,"")),2&e&&(r=o(r,c,"")),r}};e.exports={start:m(1),end:m(2),trim:m(3)}},"8a6c":function(e,t,r){},a9e3:function(e,t,r){"use strict";var a=r("83ab"),n=r("da84"),s=r("e330"),i=r("94ca"),o=r("6eeb"),l=r("1a2d"),u=r("7156"),c=r("3a9b"),m=r("d9b5"),d=r("c04e"),g=r("d039"),p=r("241c").f,f=r("06cf").f,b=r("9bf2").f,h=r("408a"),k=r("58a8").trim,v="Number",_=n[v],w=_.prototype,F=n.TypeError,$=s("".slice),y=s("".charCodeAt),S=function(e){var t=d(e,"number");return"bigint"==typeof t?t:I(t)},I=function(e){var t,r,a,n,s,i,o,l,u=d(e,"number");if(m(u))throw F("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=k(u),t=y(u,0),43===t||45===t){if(r=y(u,2),88===r||120===r)return NaN}else if(48===t){switch(y(u,1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+u}for(s=$(u,2),i=s.length,o=0;o<i;o++)if(l=y(s,o),l<48||l>n)return NaN;return parseInt(s,a)}return+u};if(i(v,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var x,N=function(e){var t=arguments.length<1?0:_(S(e)),r=this;return c(w,r)&&g((function(){h(r)}))?u(Object(t),r,N):t},P=a?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;P.length>L;L++)l(_,x=P[L])&&!l(N,x)&&b(N,x,f(_,x));N.prototype=w,w.constructor=N,o(n,v,N)}},bade:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("d3b7"),r("caad"),r("2532");var a=r("4360");function n(e){var t=a["a"].getters.permissions;if(e)if("string"===typeof e||e instanceof String){if(-1!=t.indexOf(e))return!0}else if(e instanceof Array&&e.length>0){var r=e;return t.some((function(e){return r.includes(e)}))}return!1}},e3d9:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-table"},[r("el-table",e._g(e._b({ref:"pageTable",attrs:{data:e.data,border:"",stripe:""}},"el-table",e.$attrs,!1),e.$listeners),[e._t("default")],2),r("div",{directives:[{name:"show",rawName:"v-show",value:e.paging,expression:"paging"}],staticClass:"page-pagination"},[r("el-pagination",e._g(e._b({attrs:{"current-page":e.currPage,"page-size":e.pageNum,total:e.totalNum,"page-sizes":[10,15,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.changePageSize,"current-change":e.changePageCurrent}},"el-pagination",e.$attrs,!1),e.$listeners))],1)],1)},n=[],s=(r("a9e3"),{name:"PageTable",props:{data:{type:Array,require:!0,default:function(e){return[]}},paging:{type:Boolean,default:!0},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0}},data:function(){return{currPage:this.currentPage,pageNum:this.pageSize,totalNum:this.total,selectData:[]}},created:function(){},mounted:function(){},computed:{},watch:{},methods:{setPageInfo:function(e){this.totalNum=e.total},changePageSize:function(e){this.pageNum=e,this.currPage=1,this.$emit("changeCurrentPage",1,e)},changePageCurrent:function(e){this.currPage=e,this.$emit("changeCurrentPage",e,this.pageNum)}}}),i=s,o=(r("12ad"),r("2877")),l=Object(o["a"])(i,a,n,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-2a7e328a.d4d55b73.js.map