(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3443c86"],{"0e1e":function(e,t,a){},5446:function(e,t,a){"use strict";a("0e1e")},6093:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("div",{staticClass:"block-quote"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"标签名称",prop:"name"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入标签名称"},model:{value:e.goods_name,callback:function(t){e.goods_name=t},expression:"goods_name"}})],1),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchinfo}},[e._v("搜索")]),a("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("新增")]),a("el-button",{attrs:{type:"primary"},on:{click:e.dao}},[e._v("导出")])],1)],1)],1),a("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{prop:"name",label:"标签名称",align:"center"}}),a("el-table-column",{attrs:{prop:"contacts",label:"联系人",align:"center"}}),a("el-table-column",{attrs:{prop:"phone",label:"联系方式",align:"center"}}),a("el-table-column",{attrs:{prop:"address",label:"地址",align:"center"}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间",align:"center"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"350"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(a){return e.showtable(t.row)}}},[e._v("编辑")]),a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:function(a){return e.deleteData(t.row)}}},[e._v("删除")])]}}])})],1),a("edit-data",{ref:"editData"})],1)},s=[],n=a("1da1"),o=(a("96cf"),a("b0c0"),a("e9c4"),a("fd03")),i=a("bade"),l=a("e3d9"),c=(a("ff82"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"AddDialog",attrs:{title:e.tittle,visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"auto"}},[a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"标签名称",prop:"name"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入标签名称"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"联系人",prop:"contacts"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入联系人"},model:{value:e.ruleForm.contacts,callback:function(t){e.$set(e.ruleForm,"contacts",t)},expression:"ruleForm.contacts"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"联系方式",prop:"phone"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入联系方式"},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"地址",prop:"address"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入地址"},model:{value:e.ruleForm.address,callback:function(t){e.$set(e.ruleForm,"address",t)},expression:"ruleForm.address"}})],1)],1),a("el-col",{attrs:{span:15}},[a("el-form-item",{attrs:{label:"备注",prop:"remark"}},[a("el-input",{staticStyle:{width:"240px"},attrs:{type:"textarea",placeholder:"请输入地址"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)}),u=[],m={name:"AddDialog",components:{},data:function(){return{id:"",isDisable:!1,tittle:"",type:"",dialogVisible:!1,ruleForm:{phone:"",remark:"",address:"",contacts:"",name:""},rules:{contacts:[{required:!0,message:"请输入联系人姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入手机号",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}],name:[{required:!0,message:"请输入标签名称",trigger:"blur"}],address:[{required:!0,message:"请输入",trigger:"blur"}],remark:[{required:!0,message:"请输入备注",trigger:"blur"}]}}},created:function(){},mounted:function(){},methods:{show:function(e,t){this.dialogVisible=!0,this.type=e,2==this.type?(this.tittle="编辑",this.id=t.id,this.ruleForm.phone=t.phone,this.ruleForm.address=t.address,this.ruleForm.contacts=t.contacts,this.ruleForm.name=t.name,this.ruleForm.remark=t.remark):this.tittle="添加"},close:function(){this.dialogVisible=!1,this.ruleForm.phone="",this.ruleForm.address="",this.ruleForm.contacts="",this.ruleForm.name="",this.ruleForm.remark="",this.isDisable=!1},submitForm:function(){var e=this;1==this.type?this.$refs.ruleForm.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}r=sessionStorage.getItem("token"),e.token=r,s={remark:e.ruleForm.remark,phone:e.ruleForm.phone,token:sessionStorage.getItem("token"),name:e.ruleForm.name,contacts:e.ruleForm.contacts,address:e.ruleForm.address},Object(o["nb"])(s).then((function(t){200==t.data.code?(e.$message.success("新增成功"),e.$parent.getUserList(),e.close(),e.isDisable=!1):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close(),e.isDisable=!1)})),t.next=8;break;case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):this.$refs.ruleForm.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}r=sessionStorage.getItem("token"),e.token=r,s={remark:e.ruleForm.remark,phone:e.ruleForm.phone,token:sessionStorage.getItem("token"),name:e.ruleForm.name,contacts:e.ruleForm.contacts,address:e.ruleForm.address,id:e.id},Object(o["Vd"])(s).then((function(t){200==t.data.code?(e.$message.success("编辑成功"),e.$parent.getUserList(),e.close(),e.isDisable=!1):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close(),e.isDisable=!1)})),t.next=8;break;case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},d=m,p=(a("5446"),a("2877")),g=Object(p["a"])(d,c,u,!1,null,null,null),h=g.exports,f={name:"user",components:{pageTable:l["a"],editData:h},data:function(){return{goods_name:"",id:"",tag_id:"",name:"",userList:[],list:[],page:{currentPage:1,pageSize:10,total:0}}},watch:{},created:function(){this.token=sessionStorage.getItem("token"),this.getUserList()},mounted:function(){},computed:{},methods:{add:function(){this.$refs.editData.show(1,{})},dao:function(e){this.num=e.number,window.location.href="https://yujian02.xyz/adminApi/box/boxStock/goodsExp?token="+this.token+"&goods_name="+this.goods_name+"&tag_id="+this.name+"&id="+this.id},showtable:function(e){var t=e;this.$refs.editData.show(2,JSON.parse(JSON.stringify(t)))},deleteData:function(e){var t=this;this.$confirm("是否删除此信息？","提示",{type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r={token:sessionStorage.getItem("token"),id:e.id},Object(o["vb"])(r).then((function(e){200==e.data.code?(t.$message.success("删除成功"),t.getUserList()):(t.$message.error(e.data.msg),t.getUserList())}));case 2:case"end":return a.stop()}}),a)})))).catch((function(){}))},checkPermission:i["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},searchinfo:function(){var e=this;this.page.currentPage=1;var t=sessionStorage.getItem("token");this.token=t;var a={page:1,limit:this.page.pageSize,token:sessionStorage.getItem("token"),tag_name:this.goods_name};Object(o["Ac"])(a).then((function(t){e.page.total=t.data.data.total,e.userList=t.data.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token"),name:this.goods_name};Object(o["Ac"])(a).then((function(t){e.page.total=t.data.data.total,e.userList=t.data.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))}}},b=f,k=Object(p["a"])(b,r,s,!1,null,"5682085c",null);t["default"]=k.exports}}]);
//# sourceMappingURL=chunk-c3443c86.0a6829ff.js.map