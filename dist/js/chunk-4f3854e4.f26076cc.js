(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f3854e4"],{"12ad":function(e,t,i){"use strict";i("8a6c")},2409:function(e,t,i){},"2ad8":function(e,t,i){},"408a":function(e,t,i){var l=i("e330");e.exports=l(1..valueOf)},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,i){var l=i("e330"),a=i("1d80"),s=i("577e"),r=i("5899"),o=l("".replace),n="["+r+"]",u=RegExp("^"+n+n+"*"),c=RegExp(n+n+"*$"),p=function(e){return function(t){var i=s(a(t));return 1&e&&(i=o(i,u,"")),2&e&&(i=o(i,c,"")),i}};e.exports={start:p(1),end:p(2),trim:p(3)}},"615c":function(e,t,i){"use strict";i.r(t);var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"user"},[i("div",{staticClass:"block-quote"},[i("el-form",{attrs:{inline:!0}},[i("el-form-item",{attrs:{label:"设备租赁号",prop:"name"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入设备租赁号"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),i("el-form-item",{attrs:{label:"推荐人id",prop:"use_pid"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入推荐人id"},model:{value:e.use_pid,callback:function(t){e.use_pid=t},expression:"use_pid"}})],1),i("el-form-item",{attrs:{label:"推荐人租赁号",prop:"pid"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入推荐人租赁号"},model:{value:e.pid,callback:function(t){e.pid=t},expression:"pid"}})],1),i("el-form-item",{attrs:{label:"购买服务",prop:"box_type"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.box_type,callback:function(t){e.box_type=t},expression:"box_type"}},[i("el-option",{attrs:{label:"全部状态",value:""}}),i("el-option",{attrs:{label:"终身",value:"3"}}),i("el-option",{attrs:{label:"三年",value:"1"}}),i("el-option",{attrs:{label:"五年",value:"2"}})],1)],1),i("el-form-item",{attrs:{label:"租赁号状态",prop:"status"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[i("el-option",{attrs:{label:"全部状态",value:""}}),i("el-option",{attrs:{label:"已绑定",value:"20"}}),i("el-option",{attrs:{label:"排队中",value:"10"}})],1)],1),i("el-form-item",{attrs:{label:"审核状态",prop:"status"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.ex_status,callback:function(t){e.ex_status=t},expression:"ex_status"}},[i("el-option",{attrs:{label:"全部状态",value:""}}),i("el-option",{attrs:{label:"通过",value:"2"}}),i("el-option",{attrs:{label:"待审核",value:"1"}}),i("el-option",{attrs:{label:"拒绝",value:"3"}})],1)],1),i("el-form-item",{attrs:{label:"是否真实购买",prop:"status"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.device_type,callback:function(t){e.device_type=t},expression:"device_type"}},[i("el-option",{attrs:{label:"是",value:"10"}}),i("el-option",{attrs:{label:"否",value:"20"}})],1)],1),i("el-form-item",{staticStyle:{float:"right"}},[i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchinfo}},[e._v("搜索")]),i("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("手动添加租赁人")]),i("el-button",{on:{click:e.dao}},[e._v("导出")])],1)],1)],1),i("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent}},[i("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),i("el-table-column",{attrs:{prop:"name",label:"设备租赁号",align:"center"}}),i("el-table-column",{attrs:{prop:"box_number",label:"设备编号",align:"center"}}),i("el-table-column",{attrs:{label:"是否真实购买",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[10==t.row.device_type?i("span",[e._v("是")]):e._e(),20==t.row.device_type?i("span",[e._v("否")]):e._e()]}}])}),i("el-table-column",{attrs:{label:"租赁人数",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-link",{on:{click:function(i){return e.handleClick(t.row)}}},[e._v(e._s(t.row.count))])]}}])}),i("el-table-column",{attrs:{label:"推荐人租赁号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[null==t.row.pid?i("span",[e._v("无")]):i("span",[e._v(e._s(t.row.pid))])]}}])}),i("el-table-column",{attrs:{prop:"use_pid",label:"推荐人",align:"center"}}),i("el-table-column",{attrs:{label:"购买药柜租赁服务",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.box_type?i("span",[e._v("三年")]):e._e(),2==t.row.box_type?i("span",[e._v("五年")]):e._e(),3==t.row.box_type?i("span",[e._v("终身")]):e._e()]}}])}),i("el-table-column",{attrs:{prop:"queue",label:"队列编号",align:"center"}}),i("el-table-column",{attrs:{label:"审核状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[2==t.row.ex_status?i("el-link",{attrs:{type:"success"}},[e._v("已通过")]):e._e(),3==t.row.ex_status?i("el-link",{attrs:{type:"danger"}},[e._v("未通过")]):e._e(),1==t.row.ex_status?i("el-link",{attrs:{type:"primary"}},[e._v("待审核")]):e._e()]}}])}),i("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[20==t.row.status?i("el-link",{attrs:{type:"success"}},[e._v("已绑定")]):e._e(),10==t.row.status?i("el-link",{attrs:{type:"danger"}},[e._v("排队中")]):e._e()]}}])}),i("el-table-column",{attrs:{label:"操作",align:"center",width:"350"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(i){return e.showtable(t.row)}}},[e._v("查看应急箱")]),i("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(i){return e.fenrun(t.row)}}},[e._v("商务团队信息")]),0==t.row.pid&&2==t.row.ex_status?i("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"warning"},on:{click:function(i){return e.addup(1,t.row)}}},[e._v("绑定上级")]):e._e()]}}])})],1),i("el-dialog",{attrs:{title:"账户信息",visible:e.dialogVisible,width:"600px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[i("el-table",{ref:"dataTable",attrs:{data:e.List,border:""}},[i("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),i("el-table-column",{attrs:{prop:"uid",label:"用户id",align:"center"}}),i("el-table-column",{attrs:{prop:"phone",label:"联系方式",align:"center"}}),i("el-table-column",{attrs:{prop:"share",label:"分润占比",align:"center"}}),i("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{type:"text",size:"small"},on:{click:function(i){return e.edit(t.row)}}},[e._v("编辑")])]}}])})],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确认")])],1)],1),i("el-dialog",{attrs:{title:"信息修改",visible:e.Visible,width:"600px","close-on-click-modal":!1},on:{"update:visible":function(t){e.Visible=t},close:e.closee}},[i("el-form",{ref:"Form",attrs:{rules:e.rules,"label-width":"auto",model:e.Form}},[i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"用户id:",prop:"uid"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{disabled:"",placeholder:"请输入"},model:{value:e.Form.uid,callback:function(t){e.$set(e.Form,"uid",t)},expression:"Form.uid"}})],1)],1),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"联系方式:",prop:"phone"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入"},model:{value:e.Form.phone,callback:function(t){e.$set(e.Form,"phone",t)},expression:"Form.phone"}})],1)],1),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"分润占比:",prop:"share"}},[i("el-select",{staticStyle:{width:"100px"},attrs:{disabled:"",placeholder:"请选择"},model:{value:e.Form.share,callback:function(t){e.$set(e.Form,"share",t)},expression:"Form.share"}},[i("el-option",{attrs:{label:"12.5%",value:"12.50"}}),i("el-option",{attrs:{label:"25%",value:"25.00"}}),i("el-option",{attrs:{label:"50%",value:"50.00"}}),i("el-option",{attrs:{label:"100%",value:"100.00"}})],1)],1)],1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.closee}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1),i("edit-data",{ref:"editData"}),i("fen-run",{ref:"fenRun"}),i("up-set",{ref:"upSet"})],1)},a=[],s=(i("b0c0"),i("e9c4"),i("fd03")),r=i("bade"),o=i("e3d9"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-dialog",{staticClass:"AddDialog",attrs:{title:"新增",visible:e.dialogVisible,width:"1000px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[i("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"auto"}},[i("el-row",{attrs:{gutter:25}},[i("el-col",{attrs:{span:20}},[i("el-form-item",{attrs:{label:"购买类型",prop:"type"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[i("el-option",{attrs:{label:"单人购买",value:"1"}}),i("el-option",{attrs:{label:"多人购买",value:"2"}})],1)],1)],1),i("el-col",{attrs:{span:8}},[i("el-form-item",{attrs:{label:"推荐人设备租赁号",prop:"pid"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{disabled:e.isDisable,placeholder:"请输入设备租赁号"},model:{value:e.ruleForm.pid,callback:function(t){e.$set(e.ruleForm,"pid",t)},expression:"ruleForm.pid"}})],1)],1),i("el-col",{attrs:{span:10}},[i("el-form-item",{staticClass:"xian"},[i("el-checkbox",{on:{change:e.checked},model:{value:e.check,callback:function(t){e.check=t},expression:"check"}},[e._v("无推荐人")])],1)],1),0!==e.ruleForm.pid?i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"推荐人id",prop:"use_pid"}},[i("el-select",{staticStyle:{width:"230px"},attrs:{clearable:"",filterable:"",placeholder:"请选择推荐人id"},model:{value:e.ruleForm.use_pid,callback:function(t){e.$set(e.ruleForm,"use_pid",t)},expression:"ruleForm.use_pid"}},e._l(e.arr,(function(e){return i("el-option",{key:e.uid,attrs:{value:e.uid,label:e.uid}})})),1)],1)],1):e._e(),i("el-col",{attrs:{span:10}},[1==e.ruleForm.type?i("el-form-item",{attrs:{label:"租赁商id",prop:"uid"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入租赁人用户id"},model:{value:e.ruleForm.uid,callback:function(t){e.$set(e.ruleForm,"uid",t)},expression:"ruleForm.uid"}})],1):e._e()],1),i("el-col",{attrs:{span:10}},[1==e.ruleForm.type?i("el-form-item",{attrs:{label:"租赁人手机号",prop:"tel"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入租赁人手机号"},model:{value:e.ruleForm.tel,callback:function(t){e.$set(e.ruleForm,"tel",t)},expression:"ruleForm.tel"}})],1):e._e()],1),2==e.ruleForm.type?i("el-col",{staticStyle:{"margin-left":"-57px"}},e._l(e.list,(function(t,l){return i("el-form-item",{key:l,attrs:{prop:"tel"}},[i("span",[e._v("账号"+e._s(l+1))]),e._v(" 租赁商id: "),i("el-input",{staticStyle:{width:"100px"},attrs:{placeholder:"请输入"},model:{value:t.uid,callback:function(i){e.$set(t,"uid",i)},expression:"v.uid"}}),e._v(" 分润占比: "),i("el-select",{staticStyle:{width:"100px"},attrs:{placeholder:"请选择"},model:{value:t.bl,callback:function(i){e.$set(t,"bl",i)},expression:"v.bl"}},[i("el-option",{attrs:{label:"12.5%",value:"12.5"}}),i("el-option",{attrs:{label:"25%",value:"25"}}),i("el-option",{attrs:{label:"50%",value:"50"}})],1),e._v(" 手机号: "),i("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入"},on:{blur:function(i){return e.checkRight(t)}},model:{value:t.tel,callback:function(i){e.$set(t,"tel",i)},expression:"v.tel"}}),l==e.list.length-1&&l<=6?i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",size:"mini"},on:{click:e.insert}},[e._v("+")]):e._e(),1!==l&&l==e.list.length-1?i("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.remove(l)}}},[e._v("-")]):e._e()],1)})),1):e._e(),i("el-col",{attrs:{span:20}},[i("el-form-item",{attrs:{label:"购买服务",prop:"box_type"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.ruleForm.box_type,callback:function(t){e.$set(e.ruleForm,"box_type",t)},expression:"ruleForm.box_type"}},[i("el-option",{attrs:{label:"三年",value:"1"}}),i("el-option",{attrs:{label:"五年",value:"2"}}),i("el-option",{attrs:{label:"终身",value:"3"}})],1)],1)],1),i("el-col",{attrs:{span:20}},[i("el-form-item",{attrs:{label:"是否真实购买",prop:"device_type"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.ruleForm.device_type,callback:function(t){e.$set(e.ruleForm,"device_type",t)},expression:"ruleForm.device_type"}},[i("el-option",{attrs:{label:"是",value:"10"}}),i("el-option",{attrs:{label:"否",value:"20"}})],1)],1)],1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},u=[],c=i("1da1"),p=(i("96cf"),i("ac1f"),i("00b4"),i("a434"),i("99af"),i("d3b7"),i("159b"),i("a9e3"),{name:"AddDialog",components:{},data:function(){return{id:"",check:!1,token:"",arr:[],uid:"",bl:"",kshow:!0,tel:"",isDisable:!1,type:"",dialogVisible:!1,list:[{uid:"",tel:"",bl:""},{uid:"",tel:"",bl:""}],user:{uid:"",tel:"",bl:""},ruleForm:{uid:"",tel:"",use_pid:"",type:"",box_type:"",device_type:"",pid:""},rules:{type:[{required:!0,message:"请选择购买类型",trigger:"blur"}],use_pid:[{required:!0,message:"请选择推荐人id",trigger:"blur"}],uid:[{required:!0,message:"请输入租赁人用户id",trigger:"blur"}],tel:[{required:!1,message:"请输入租赁人手机号",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}],box_type:[{required:!0,message:"请选择购买服务",trigger:"blur"}],device_type:[{required:!0,message:"请选择是否真实购买",trigger:"blur"}],pid:[{required:!0,message:"请输入设备租赁号",trigger:"blur"}]}}},watch:{"ruleForm.pid":function(e){console.log(e),this.huoopin()}},created:function(){},mounted:function(){},methods:{checkRight:function(e){console.log(e);var t=e.tel,i=/^1[3456789]\d{9}$/;console.log(i.test(t)),0==i.test(t)&&this.$message.error("手机号错误")},insert:function(){this.user={uid:"",tel:"",bl:""},this.list.push(this.user)},remove:function(e){this.list.splice(e,1)},huoopin:function(){var e=this,t={token:sessionStorage.getItem("token"),name:this.ruleForm.pid};Object(s["N"])(t).then((function(t){console.log(t.data.data),e.arr=t.data.data}))},show:function(e,t){this.dialogVisible=!0},close:function(){this.dialogVisible=!1,this.ruleForm.pid="",this.ruleForm.use_pid="",this.ruleForm.tel="",this.ruleForm.box_type="",this.list=[{uid:"",tel:"",bl:""},{uid:"",tel:"",bl:""}],this.ruleForm.uid="",this.ruleForm.device_type="",this.isDisable=!1,this.check=!1},checked:function(e){this.events=e,1==e?(this.isDisable=!0,this.ruleForm.pid=0):(this.isDisable=!1,this.ruleForm.pid="")},go:function(){this.$router.back()},submitForm:function(){var e=this;this.$refs.ruleForm.validate(function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(i){var l,a,r,o,n,u,c,p,d,b;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!i){t.next=26;break}if(1!=e.ruleForm.type){t.next=6;break}l={token:sessionStorage.getItem("token"),uid:e.ruleForm.uid,tel:e.ruleForm.tel,box_type:e.ruleForm.box_type,pid:e.ruleForm.pid,use_pid:e.ruleForm.use_pid,device_type:e.ruleForm.device_type,str:e.ruleForm.uid.concat(",").concat(e.ruleForm.tel).concat(",").concat(100)},Object(s["h"])(l).then((function(t){200==t.data.code?(e.$message.success("新增成功"),e.$parent.getUserList(),e.close(),e.isDisable=!1,e.check=!1):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close(),e.isDisable=!1,e.check=!1)})),t.next=24;break;case 6:if(console.log(e.list),a=e,r=a.list.every((function(e){return!!e.uid})),o=a.list.every((function(e){return!!e.tel})),n=a.list.every((function(e){return!!e.bl})),r){t.next=14;break}return e.$message.error("租赁商id不能为空"),t.abrupt("return");case 14:if(o){t.next=17;break}return e.$message.error("手机号不能为空"),t.abrupt("return");case 17:if(n){t.next=20;break}return e.$message.error("分润占比不能为空"),t.abrupt("return");case 20:if(u=0,e.list.forEach((function(e){u+=Number(e.bl)})),console.log(u),100===u){for(c="",p=0;p<e.list.length;p++)c+=e.list[p].uid+","+e.list[p].tel+","+e.list[p].bl+"&&";console.log(c),d=c.substring(0,c.length-2),console.log("结果是----\x3e",d),b={token:sessionStorage.getItem("token"),uid:e.list[0].uid,tel:e.list[0].tel,box_type:e.ruleForm.box_type,pid:e.ruleForm.pid,use_pid:e.ruleForm.use_pid,device_type:e.ruleForm.device_type,str:d},Object(s["h"])(b).then((function(t){200==t.data.code?(e.$message.success("新增成功"),e.$parent.getUserList(),e.close(),e.isDisable=!1,e.check=!1):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close(),e.isDisable=!1,e.check=!1)}))}else u<=100?e.$message.error("分润占比总和不能小于100%"):e.$message.error("分润占比总和不能超过100%");case 24:t.next=27;break;case 26:return t.abrupt("return",!1);case 27:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}),d=p,b=(i("b6ce"),i("2877")),m=Object(b["a"])(d,n,u,!1,null,null,null),g=m.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-dialog",{staticClass:"AddDialog",attrs:{title:"商务团队信息",visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[i("el-button",{staticStyle:{margin:"10px 10px 10px 10px"},attrs:{type:"primary"},on:{click:function(t){return e.go()}}},[e._v("返回")]),i("el-table",{ref:"dataTable",attrs:{data:e.userList,border:""}},[i("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),i("el-table-column",{attrs:{prop:"box_pid_uid",label:"推荐人id",align:"center"}}),i("el-table-column",{attrs:{prop:"box_pid",label:"推荐人设备租赁号",align:"center"}}),i("el-table-column",{attrs:{prop:"box_id",label:"设备租赁号",align:"center"}}),i("el-table-column",{attrs:{label:"租赁商id",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.row.userinfo,(function(l,a){return i("el-link",{key:a,staticStyle:{"margin-left":"10px"},on:{click:function(i){return e.nextUser(l,t.row)}}},[e._v(e._s(l))])}))}}])})],1)],1)],1)},f=[],_=(i("25f0"),i("fb6a"),{name:"AddDialog",components:{pageTable:o["a"]},data:function(){return{name:"",uid:"",arr:[],arr1:[],box_pid_uid:"",pid:"",dialogVisible:!1,page:{currentPage:1,pageSize:10,total:0},userList:[{setid:"1",sevid:"11",uid:"2",phone:110}]}},created:function(){},mounted:function(){},methods:{nextUser:function(e,t){console.log(e),this.box_pid_uid=e,this.box_pid=t.box_id;var i=[],l=[];i.push(t.box_pid_uid),l.push(t.box_pid),this.arr.push(i),this.arr1.push(l),console.log(this.arr),console.log(this.arr1),this.getUserList()},go:function(){if(this.arr.length<1)console.log("我不显示"),this.dialogVisible=!1;else{var e=this.arr[this.arr.length-1];this.box_pid_uid=e.toString(),console.log(this.box_pid_uid);var t=this.arr1[this.arr1.length-1];this.box_pid=t.toString(),console.log(this.box_pid),this.getUserList();var i=this.arr.slice(0);i.splice(i.length-1,1);var l=this.arr1.slice(0);l.splice(l.length-1,1)}this.arr=i,this.arr1=l},show:function(e){console.log(e),this.dialogVisible=!0,this.box_pid=e.name,this.getUserList()},close:function(){this.dialogVisible=!1,this.arr=[],this.arr1=[]},changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var i={token:sessionStorage.getItem("token"),box_pid:this.box_pid,box_pid_uid:this.box_pid_uid};Object(s["Xc"])(i).then((function(t){e.userList=t.data.data}))},showtable:function(){}}}),v=_,y=(i("741c"),Object(b["a"])(v,h,f,!1,null,null,null)),x=y.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-dialog",{staticClass:"AddDialog",attrs:{title:1==this.type?"绑定上级":"修改上级",visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[i("el-form",{ref:"goodsForm",attrs:{rules:e.rules,"label-width":"auto",model:e.goodsForm}},[i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"推荐人设备租赁号",prop:"device_num"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入设备租赁号"},model:{value:e.goodsForm.device_num,callback:function(t){e.$set(e.goodsForm,"device_num",t)},expression:"goodsForm.device_num"}})],1)],1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},F=[],w={name:"AddDialog",components:{},data:function(){return{id:"",check:"",token:"",setid:"",type:"",dialogVisible:!1,goodsForm:{device_num:""},uid:"",rules:{device_num:[{required:!0,message:"请输入设备租赁号",trigger:"blur"}]}}},created:function(){},mounted:function(){},methods:{show:function(e,t){console.log(e),this.type=e,console.log(t),this.id=t.id,this.dialogVisible=!0},close:function(){this.dialogVisible=!1},go:function(){this.$router.back()},submitForm:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var i={token:sessionStorage.getItem("token"),id:this.id,device:this.device_num};Object(s["Uc"])(i).then((function(t){200==t.data.code?(e.$message.success("成功"),e.$parent.getUserList(),e.close()):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close())}))}}},S=w,$=(i("dc1a"),Object(b["a"])(S,k,F,!1,null,null,null)),N=$.exports,V={name:"user",components:{pageTable:o["a"],editData:g,fenRun:x,upSet:N},data:function(){return{dialogVisible:!1,Visible:!1,name:"",uid:"",pid:"",use_pid:"",box_type:"",box_name:"",status:"",ex_status:"",device_type:"",buy_time:"",userList:[],List:[],Form:{id:"",uid:"",phone:"",share:""},page:{currentPage:1,pageSize:10,total:0},rules:{phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}],share:[{required:!0,message:"请选择分润占比",trigger:"blur"}]}}},watch:{buy_time:function(e){null==e&&(this.buy_time=[])}},created:function(){this.getUserList()},mounted:function(){},computed:{},methods:{dao:function(){window.location.href="https://yujian02.xyz/admin/box/exportList?token="+this.token+"&name="+this.name+"&pid="+this.pid+"&box_type="+this.box_type+"&use_pid="+this.use_pid+"&status="+this.status+"&device_type="+this.device_type+"&ex_status="+this.ex_status},submit:function(){var e=this,t={id:this.Form.id,phone:this.Form.phone,share:this.Form.share,token:sessionStorage.getItem("token")};Object(s["Nc"])(t).then((function(t){200==t.data.code?(e.$message.success("编辑成功"),e.closee(),e.dialogVisible=!0,e.getList()):(e.$message.error(t.data.msg),e.closee(),e.dialogVisible=!0,e.getList())}))},closee:function(){this.Form.id="",this.Form.uid="",this.Form.phone="",this.Form.share="",this.Visible=!1,this.dialogVisible=!0},edit:function(e){console.log(e),this.Form.id=e.id,this.Form.uid=e.uid,this.Form.phone=e.phone,this.Form.share=e.share,this.Visible=!0},handleClick:function(e){console.log(e),this.box_name=e.name,this.getList()},getList:function(){var e=this,t={token:sessionStorage.getItem("token"),box_name:this.box_name};Object(s["Lc"])(t).then((function(t){console.log(t),e.List=t.data.data,console.log(e.List)})),this.dialogVisible=!0},submitForm:function(){this.dialogVisible=!1},close:function(){this.dialogVisible=!1},add:function(){this.$refs.editData.show(1,{})},addup:function(e,t){var i=t;this.$refs.upSet.show(1,JSON.parse(JSON.stringify(i)))},setup:function(e,t){var i=t;this.$refs.upSet.show(2,JSON.parse(JSON.stringify(i)))},fenrun:function(e){var t=e;this.$refs.fenRun.show(JSON.parse(JSON.stringify(t)))},showtable:function(e){this.$router.push({path:"/showtable",query:{row:e}})},checkPermission:r["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},searchinfo:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var i={page:1,limit:this.page.pageSize,token:sessionStorage.getItem("token"),name:this.name,pid:this.pid,box_type:this.box_type,use_pid:this.use_pid,status:this.status,ex_status:this.ex_status,device_type:this.device_type};Object(s["fb"])(i).then((function(t){e.page.total=t.data.count,e.userList=t.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var i={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token"),name:this.name,pid:this.pid,box_type:this.box_type,use_pid:this.use_pid,status:this.status,ex_status:this.ex_status,device_type:this.device_type};Object(s["fb"])(i).then((function(t){console.log(t.data.data),e.page.total=t.data.count,e.userList=t.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))}}},I=V,L=Object(b["a"])(I,l,a,!1,null,"7f29b88a",null);t["default"]=L.exports},"741c":function(e,t,i){"use strict";i("2409")},"8a6c":function(e,t,i){},"8ac6":function(e,t,i){},a9e3:function(e,t,i){"use strict";var l=i("83ab"),a=i("da84"),s=i("e330"),r=i("94ca"),o=i("6eeb"),n=i("1a2d"),u=i("7156"),c=i("3a9b"),p=i("d9b5"),d=i("c04e"),b=i("d039"),m=i("241c").f,g=i("06cf").f,h=i("9bf2").f,f=i("408a"),_=i("58a8").trim,v="Number",y=a[v],x=y.prototype,k=a.TypeError,F=s("".slice),w=s("".charCodeAt),S=function(e){var t=d(e,"number");return"bigint"==typeof t?t:$(t)},$=function(e){var t,i,l,a,s,r,o,n,u=d(e,"number");if(p(u))throw k("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=_(u),t=w(u,0),43===t||45===t){if(i=w(u,2),88===i||120===i)return NaN}else if(48===t){switch(w(u,1)){case 66:case 98:l=2,a=49;break;case 79:case 111:l=8,a=55;break;default:return+u}for(s=F(u,2),r=s.length,o=0;o<r;o++)if(n=w(s,o),n<48||n>a)return NaN;return parseInt(s,l)}return+u};if(r(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var N,V=function(e){var t=arguments.length<1?0:y(S(e)),i=this;return c(x,i)&&b((function(){f(i)}))?u(Object(t),i,V):t},I=l?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;I.length>L;L++)n(y,N=I[L])&&!n(V,N)&&h(V,N,g(y,N));V.prototype=x,x.constructor=V,o(a,v,V)}},b6ce:function(e,t,i){"use strict";i("2ad8")},bade:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i("d3b7"),i("caad"),i("2532");var l=i("4360");function a(e){var t=l["a"].getters.permissions;if(e)if("string"===typeof e||e instanceof String){if(-1!=t.indexOf(e))return!0}else if(e instanceof Array&&e.length>0){var i=e;return t.some((function(e){return i.includes(e)}))}return!1}},dc1a:function(e,t,i){"use strict";i("8ac6")},e3d9:function(e,t,i){"use strict";var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"page-table"},[i("el-table",e._g(e._b({ref:"pageTable",attrs:{data:e.data,border:"",stripe:""}},"el-table",e.$attrs,!1),e.$listeners),[e._t("default")],2),i("div",{directives:[{name:"show",rawName:"v-show",value:e.paging,expression:"paging"}],staticClass:"page-pagination"},[i("el-pagination",e._g(e._b({attrs:{"current-page":e.currPage,"page-size":e.pageNum,total:e.totalNum,"page-sizes":[10,15,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.changePageSize,"current-change":e.changePageCurrent}},"el-pagination",e.$attrs,!1),e.$listeners))],1)],1)},a=[],s=(i("a9e3"),{name:"PageTable",props:{data:{type:Array,require:!0,default:function(e){return[]}},paging:{type:Boolean,default:!0},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0}},data:function(){return{currPage:this.currentPage,pageNum:this.pageSize,totalNum:this.total,selectData:[]}},created:function(){},mounted:function(){},computed:{},watch:{},methods:{setPageInfo:function(e){this.totalNum=e.total},changePageSize:function(e){this.pageNum=e,this.currPage=1,this.$emit("changeCurrentPage",1,e)},changePageCurrent:function(e){this.currPage=e,this.$emit("changeCurrentPage",e,this.pageNum)}}}),r=s,o=(i("12ad"),i("2877")),n=Object(o["a"])(r,l,a,!1,null,null,null);t["a"]=n.exports}}]);
//# sourceMappingURL=chunk-4f3854e4.f26076cc.js.map