(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c0a3422"],{"12ad":function(e,t,a){"use strict";a("8a6c")},"408a":function(e,t,a){var i=a("e330");e.exports=i(1..valueOf)},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var i=a("e330"),s=a("1d80"),r=a("577e"),n=a("5899"),l=i("".replace),o="["+n+"]",c=RegExp("^"+o+o+"*"),u=RegExp(o+o+"*$"),d=function(e){return function(t){var a=r(s(t));return 1&e&&(a=l(a,c,"")),2&e&&(a=l(a,u,"")),a}};e.exports={start:d(1),end:d(2),trim:d(3)}},6599:function(e,t,a){},"8a6c":function(e,t,a){},"9f04":function(e,t,a){"use strict";a("6599")},a9e3:function(e,t,a){"use strict";var i=a("83ab"),s=a("da84"),r=a("e330"),n=a("94ca"),l=a("6eeb"),o=a("1a2d"),c=a("7156"),u=a("3a9b"),d=a("d9b5"),p=a("c04e"),m=a("d039"),g=a("241c").f,f=a("06cf").f,h=a("9bf2").f,b=a("408a"),v=a("58a8").trim,_="Number",k=s[_],w=k.prototype,x=s.TypeError,y=r("".slice),S=r("".charCodeAt),C=function(e){var t=p(e,"number");return"bigint"==typeof t?t:z(t)},z=function(e){var t,a,i,s,r,n,l,o,c=p(e,"number");if(d(c))throw x("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=v(c),t=S(c,0),43===t||45===t){if(a=S(c,2),88===a||120===a)return NaN}else if(48===t){switch(S(c,1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+c}for(r=y(c,2),n=r.length,l=0;l<n;l++)if(o=S(r,l),o<48||o>s)return NaN;return parseInt(r,i)}return+c};if(n(_,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var $,N=function(e){var t=arguments.length<1?0:k(C(e)),a=this;return u(w,a)&&m((function(){b(a)}))?c(Object(t),a,N):t},I=i?g(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;I.length>P;P++)o(k,$=I[P])&&!o(N,$)&&h(N,$,f(k,$));N.prototype=w,w.constructor=N,l(s,_,N)}},bade:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a("d3b7"),a("caad"),a("2532");var i=a("4360");function s(e){var t=i["a"].getters.permissions;if(e)if("string"===typeof e||e instanceof String){if(-1!=t.indexOf(e))return!0}else if(e instanceof Array&&e.length>0){var a=e;return t.some((function(e){return a.includes(e)}))}return!1}},e3d9:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-table"},[a("el-table",e._g(e._b({ref:"pageTable",attrs:{data:e.data,border:"",stripe:""}},"el-table",e.$attrs,!1),e.$listeners),[e._t("default")],2),a("div",{directives:[{name:"show",rawName:"v-show",value:e.paging,expression:"paging"}],staticClass:"page-pagination"},[a("el-pagination",e._g(e._b({attrs:{"current-page":e.currPage,"page-size":e.pageNum,total:e.totalNum,"page-sizes":[10,15,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.changePageSize,"current-change":e.changePageCurrent}},"el-pagination",e.$attrs,!1),e.$listeners))],1)],1)},s=[],r=(a("a9e3"),{name:"PageTable",props:{data:{type:Array,require:!0,default:function(e){return[]}},paging:{type:Boolean,default:!0},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0}},data:function(){return{currPage:this.currentPage,pageNum:this.pageSize,totalNum:this.total,selectData:[]}},created:function(){},mounted:function(){},computed:{},watch:{},methods:{setPageInfo:function(e){this.totalNum=e.total},changePageSize:function(e){this.pageNum=e,this.currPage=1,this.$emit("changeCurrentPage",1,e)},changePageCurrent:function(e){this.currPage=e,this.$emit("changeCurrentPage",e,this.pageNum)}}}),n=r,l=(a("12ad"),a("2877")),o=Object(l["a"])(n,i,s,!1,null,null,null);t["a"]=o.exports},fe4c:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.go()}}},[e._v("返回")]),a("div",{staticClass:"block-quote"}),a("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent,"selection-change":e.getSelection}},[a("el-table-column",{attrs:{label:"序号",align:"center",width:"80",fixed:"",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{prop:"id",label:"id",align:"center",width:"80",resizable:!1}}),a("el-table-column",{attrs:{prop:"diamonds",label:"钻石",align:"center",width:"80",resizable:!1}}),a("el-table-column",{attrs:{prop:"pk_v",label:"pk值等级",align:"center",width:"80",resizable:!1}}),a("el-table-column",{attrs:{prop:"pk",label:"pk值",align:"center",width:"80",resizable:!1}}),a("el-table-column",{attrs:{prop:"nickname",label:"名称",align:"center",width:"80",resizable:!1}}),a("el-table-column",{attrs:{prop:"head_img",label:"头像",align:"center",width:"100",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticClass:"table-img",attrs:{src:e.row.head_img,width:"60px"}})]}}])}),a("el-table-column",{attrs:{label:"用户上级",align:"center",width:"80",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{on:{click:function(a){return e.upuser(t.row)}}},[e._v(e._s(t.row.pid))])]}}])}),a("el-table-column",{attrs:{prop:"pname",label:"上级名称",align:"center",width:"80",resizable:!1}}),a("el-table-column",{attrs:{prop:"member",label:"用户身份",align:"center",width:"100",resizable:!1}}),a("el-table-column",{attrs:{prop:"created_at",label:"注册时间",align:"center",width:"100",resizable:!1}}),a("el-table-column",{attrs:{label:"是否启用",width:"80",resizable:!1,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":2,"active-color":"#02538C","inactive-color":"#B9B9B9"},on:{change:function(a){return e.changeSwitch(t.row)}},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}})]}}])}),a("el-table-column",{attrs:{prop:"zisu_lv",label:"紫苏等级",align:"center",width:"80",resizable:!1}}),a("el-table-column",{attrs:{label:"不老莓",width:"80",resizable:!1,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":2,"active-color":"#02538C","inactive-color":"#B9B9B9"},on:{change:function(a){return e.changeBlm(t.row)}},model:{value:t.row.is_blm,callback:function(a){e.$set(t.row,"is_blm",a)},expression:"scope.row.is_blm"}})]}}])}),a("el-table-column",{attrs:{label:"紫苏分利",width:"80",resizable:!1,align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":2,"active-color":"#02538C","inactive-color":"#B9B9B9"},on:{change:function(a){return e.changeZisu(t.row)}},model:{value:t.row.zisu_fl,callback:function(a){e.$set(t.row,"zisu_fl",a)},expression:"scope.row.zisu_fl"}})]}}])}),e.checkPermission(["useredit","userdelete"])?a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[e.checkPermission("useredit")?a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(a){return e.editData(t.row)}}},[e._v("信息修改")]):e._e(),e.checkPermission("useredit")?a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"warning"},on:{click:function(a){return e.usertext(t.row)}}},[e._v("分利信息")]):e._e(),e.checkPermission("useredit")?a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(a){return e.nextUser(t.row)}}},[e._v("查看下级")]):e._e(),e.checkPermission("useredit")?a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"warning"},on:{click:function(a){return e.userShow(t.row)}}},[e._v("用户详情")]):e._e()]}}],null,!1,351043065)}):e._e()],1),a("edit-data",{ref:"editData"})],1)},s=[],r=a("1da1"),n=(a("96cf"),a("4de4"),a("d3b7"),a("b0c0"),a("25f0"),a("fb6a"),a("a434"),a("e9c4"),a("fd03")),l=a("bade"),o=a("c24f"),c=(a("cc5e"),a("e3d9")),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"editData"},[a("el-dialog",{attrs:{title:"信息修改",visible:e.dialogVisible,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{attrs:{"label-width":"auto",rules:e.rules}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"封面图",prop:"goods_img"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://yujian02.xyz/command/ossUpload?filename=file","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1)]),a("el-col",{staticClass:"userif",attrs:{span:10}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"用户id"}},[a("el-input",{attrs:{disabled:""},model:{value:e.userid,callback:function(t){e.userid=t},expression:"userid"}})],1)],1)])],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"原用户身份",prop:"member"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请选择用户身份"},model:{value:e.member,callback:function(t){e.member=t},expression:"member"}},[a("el-option",{attrs:{label:"普通用户",value:0}}),a("el-option",{attrs:{label:"MT黑卡",value:1}}),a("el-option",{attrs:{label:"C级推广员",value:2}}),a("el-option",{attrs:{label:"B级推广员",value:3}}),a("el-option",{attrs:{label:"A级推广员",value:4}})],1)],1)],1)]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"用户上级"}},[a("el-input",{model:{value:e.pid,callback:function(t){e.pid=t},expression:"pid"}})],1)],1)])],1),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple-dark"},[1==e.member?a("el-form-item",{attrs:{label:"会员到期时间"}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期"},model:{value:e.overdue_time,callback:function(t){e.overdue_time=t},expression:"overdue_time"}})],1):e._e()],1)])],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"原拥有pk值"}},[e._v(" "+e._s(e.pk_value))])],1)]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"pk值增加或减少（+/-）"}},[a("el-input",{attrs:{placeholder:"例：+100"},model:{value:e.pk_value_save,callback:function(t){e.pk_value_save=t},expression:"pk_value_save"}})],1)],1)]),a("el-col",{staticClass:"xian",attrs:{span:10}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.pk_text,callback:function(t){e.pk_text=t},expression:"pk_text"}})],1)],1)])],1),a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"原拥有钻石"}},[e._v(" "+e._s(e.diamonds))])],1)]),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-content bg-purple-light"},[a("el-form-item",{attrs:{label:"钻石增加或减少（+/-）"}},[a("el-input",{attrs:{placeholder:"例：+100"},model:{value:e.diamonds_save,callback:function(t){e.diamonds_save=t},expression:"diamonds_save"}})],1)],1)]),a("el-col",{staticClass:"xian",attrs:{span:10}},[a("div",{staticClass:"grid-content bg-purple"},[a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.diamonds_text,callback:function(t){e.diamonds_text=t},expression:"diamonds_text"}})],1)],1)])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},d=[],p={name:"AddDialog",components:{},data:function(){return{id:"",userid:"",imageUrl:"",pk_text:"",diamonds_text:"",token:"",rolesList:[],pk_value:"",pk_value_save:"",diamonds:"",overdue_time:"",diamonds_save:"",member:"",dialogVisible:!1,pid:"",rules:{member:[{required:!0,message:"请选择用户身份",trigger:"blur"}]}}},created:function(){},mounted:function(){},methods:{beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传图片大小不能超过 2MB!"),t},handleAvatarSuccess:function(e,t){var a=e.data;this.imageUrl=a},show:function(e){var t=this;this.dialogVisible=!0;var a=e.id;console.log(e),this.imageUrl=e.head_img,this.userid=e.id;var i={token:sessionStorage.getItem("token")};Object(n["k"])(i,a).then((function(e){t.pk_value=e.data.data.pk_value,t.diamonds=e.data.data.diamonds,t.member=e.data.data.member,t.id=e.data.data.id,t.overdue_time=e.data.data.overdue_time,t.pid=e.data.data.pid}))},close:function(){this.dialogVisible=!1},submitForm:function(){1==this.member&&""==this.overdue_time?this.$message.error("请选择会员到期时间"):this.admin()},admin:function(){var e=this,t=this.id,a={token:sessionStorage.getItem("token"),diamonds_save:this.diamonds_save,diamonds_text:this.diamonds_text,pk_value_save:this.pk_value_save,pk_text:this.pk_text,member:this.member,pid:this.pid,overdue_time:this.overdue_time};Object(n["bb"])(a,t).then((function(t){200==t.data.code?(e.$message.success("编辑成功"),e.$parent.getUserList(),e.dialogVisible=!1,e.pk_value_save="",e.diamonds_save="",e.pk_text="",diamonds_text=""):(e.$message(t.data.msg),e.$parent.getUserList(),e.dialogVisible=!1,e.pk_value_save="",e.diamonds_save="",e.overdue_time="",e.pk_text="",diamonds_text="")}))}}},m=p,g=(a("9f04"),a("2877")),f=Object(g["a"])(m,u,d,!1,null,null,null),h=f.exports,b={name:"user",components:{pageTable:c["a"],editData:h},data:function(){return{arr1:[],pid:"",baseUrl:"http://y6.wjw.cool/",rolesList:[],userList:[],form:{username:"",member:"",time:"",id:""},page:{currentPage:1,pageSize:10,total:0},tableSelectList:[]}},watch:{"form.time":function(e){null==e&&(this.form.time=[])}},created:function(){this.pid=this.$route.query.id,this.getUserList()},mounted:function(){},computed:{getRole:function(){var e=this;return function(t){return e.rolesList.filter((function(e){return e.name==t}))[0].title}}},methods:{changeSwitch:function(e){var t=this,a={token:sessionStorage.getItem("token"),status:e.status,id:e.id};Object(n["Cc"])(a).then((function(e){200==e.data.code?(t.$message.success("修改成功"),t.getUserList()):t.$message.error("修改失败")}))},usertext:function(e){this.$router.push({path:"/usertext",query:{id:e.id}})},go:function(){if(this.arr1.length<1)history.go(-1);else{var e=this.arr1[this.arr1.length-1];this.pid=e.toString(),console.log(this.pid),this.getUserList();var t=this.arr1.slice(0);t.splice(t.length-1,1)}return this.arr1=t,t},changeZisu:function(e){var t=this,a={token:sessionStorage.getItem("token"),is_zisu:e.zisu_fl,id:e.id};Object(n["Dc"])(a).then((function(e){200==e.data.code?(t.$message.success("修改成功"),t.getUserList()):t.$message.error("修改失败")}))},upuser:function(e){this.cid=e.id;var t=[];console.log(this.arr1 instanceof Array),t.push(this.cid),console.log(t),this.arr1.push(t),console.log(this.arr1),this.pid=e.pid,this.getUserList()},changeBlm:function(e){var t=this,a={token:sessionStorage.getItem("token"),is_blm:e.is_blm,id:e.id};Object(n["yc"])(a).then((function(e){200==e.data.code?(t.$message.success("修改成功"),t.getUserList()):t.$message.error("修改失败")}))},checkPermission:l["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},getSelection:function(e){this.tableSelectList=e},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:1,limit:this.page.pageSize,token:sessionStorage.getItem("token"),id:this.pid,member:this.form.member,username:this.form.username};Object(n["j"])(a).then((function(t){e.arr=t.data.data.member_count,e.page.total=t.data.data.total,e.userList=t.data.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},addData:function(){this.$refs.addData.show(1,{})},userShow:function(e){this.$router.push({path:"/userShow",query:{id:e.id}})},nextUser:function(e){this.$router.push({path:"/nextUser",query:{id:e.id}})},editData:function(e){var t=e;this.$refs.editData.show(JSON.parse(JSON.stringify(t)))},deleteData:function(e,t){var a=this;1==e&&1==this.tableSelectList.length||2==e?this.$confirm("是否删除此用户？","提示",{type:"warning"}).then(Object(r["a"])(regeneratorRuntime.mark((function i(){var s,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=1==e?a.tableSelectList[0]:t,i.next=3,Object(o["a"])({id:s.id});case 3:r=i.sent,200==r.status&&(a.getUserList(),a.$message.success("删除成功"));case 5:case"end":return i.stop()}}),i)})))).catch((function(){})):this.$message.warning("请选择一条数据删除")}}},v=b,_=Object(g["a"])(v,i,s,!1,null,"7fd575db",null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-0c0a3422.1745b03a.js.map