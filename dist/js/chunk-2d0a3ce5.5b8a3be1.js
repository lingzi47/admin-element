(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3ce5"],{"046a":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("div",{staticClass:"block-quote"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"渠道商id",prop:"name"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入渠道商id"},model:{value:e.position_user,callback:function(t){e.position_user=t},expression:"position_user"}})],1),a("el-form-item",{attrs:{label:"设备租赁号",prop:"box_name"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入设备租赁号"},model:{value:e.box_name,callback:function(t){e.box_name=t},expression:"box_name"}})],1),a("el-form-item",{attrs:{label:"租赁商id",prop:"box_uid"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入租赁商id"},model:{value:e.box_uid,callback:function(t){e.box_uid=t},expression:"box_uid"}})],1),a("el-form-item",{attrs:{label:"设备编号",prop:"number"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入设备编号"},model:{value:e.box_number,callback:function(t){e.box_number=t},expression:"box_number"}})],1),a("el-form-item",{attrs:{label:"点位来源",prop:"status"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"公司",value:"10"}}),a("el-option",{attrs:{label:"渠道商",value:"20"}})],1)],1),a("el-form-item",{attrs:{label:"审核状态",prop:"status"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.sta,callback:function(t){e.sta=t},expression:"sta"}},[a("el-option",{attrs:{label:"全部状态",value:""}}),a("el-option",{attrs:{label:"待审核",value:"10"}}),a("el-option",{attrs:{label:"已通过",value:"20"}}),a("el-option",{attrs:{label:"未通过",value:"30"}})],1)],1),a("el-form-item",{attrs:{label:"时间",prop:"time"}},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchinfo}},[e._v("搜索")])],1)],1)],1),a("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{label:"点位位置",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.province)+"-"+e._s(t.row.city)+"-"+e._s(t.row.area)+"-"+e._s(t.row.details))])]}}])}),a("el-table-column",{attrs:{prop:"year",label:"点位过期时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["2099-01-01 00:00:00"==t.row.due_time?a("el-link",[e._v("永久")]):a("el-link",{attrs:{type:"primary"}},[e._v(e._s(t.row.due_time))])]}}])}),a("el-table-column",{attrs:{label:"点位来源",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[20==t.row.type?a("el-link",{attrs:{type:"success"}},[e._v("渠道商")]):e._e(),10==t.row.type?a("el-link",{attrs:{type:"primary"}},[e._v("公司")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"position_user",label:"渠道商id",align:"center"}}),a("el-table-column",{attrs:{prop:"box_name",label:"设备租赁号",align:"center"}}),a("el-table-column",{attrs:{prop:"box_number",label:"设备编号",align:"center"}}),a("el-table-column",{attrs:{label:"供货药房",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.yaoprovince)+"-"+e._s(t.row.yaocity)+"-"+e._s(t.row.yaoarea)+"-"+e._s(t.row.big_name)+"-"+e._s(t.row.name))])]}}])}),a("el-table-column",{attrs:{prop:"sta_time",label:"审核时间",align:"center"}}),a("el-table-column",{attrs:{label:"审核状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[20==t.row.bindsta?a("el-link",{attrs:{type:"success"}},[e._v("已通过")]):e._e(),30==t.row.bindsta?a("el-link",{attrs:{type:"danger"}},[e._v("未通过")]):e._e(),10==t.row.bindsta?a("el-link",{attrs:{type:"primary"}},[e._v("待审核")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"360"},scopedSlots:e._u([{key:"default",fn:function(t){return[10==t.row.bindsta?a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(a){return e.set(t.row)}}},[e._v("处理")]):e._e(),20==t.row.bindsta?a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"}},[e._v("已通过")]):e._e(),30==t.row.bindsta?a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"}},[e._v("未通过")]):e._e()]}}])})],1),a("el-dialog",{attrs:{title:"审核",visible:e.dialogVisible,width:"400px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{attrs:{"label-width":"auto"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"是否允许该条信息审核通过",prop:"role_name"}})],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.refuse}},[e._v("拒绝")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("通过")])],1)],1)],1)},l=[],s=a("ade3"),o=(a("d81d"),a("b0c0"),a("fd03")),n=a("bade"),r=a("e3d9"),c=a("ff82"),u={name:"user",components:{pageTable:r["a"]},data:function(){var e;return e={dialogVisible:!1,setid:"",sev_id:"",phone:"",position_user:"",box_name:"",box_uid:"",box_number:"",type:"",sta:"",time:"",areaArr:[],form:{value1:"",value2:"",value3:""},province:"",city:"",name:"",person:"",area:"",uid:""},Object(s["a"])(e,"sta",""),Object(s["a"])(e,"time",""),Object(s["a"])(e,"userList",[]),Object(s["a"])(e,"box_name",""),Object(s["a"])(e,"page",{currentPage:1,pageSize:10,total:0}),e},watch:{time:function(e){null==e&&(this.time=[])}},created:function(){this.getUserList(),this.setData(Object(c["a"])()),this.areaArr=Object(c["a"])()},mounted:function(){},computed:{},methods:{setData:function(e){var t=this;e.map((function(e){e["value"]=e.code,e["label"]=e.name,e.children&&t.setData(e.children)}))},change:function(e){console.log(e),this.province=e[0],this.city=e[1],this.area=e[2]},submitForm:function(){var e=this,t={token:sessionStorage.getItem("token"),sta:20,id:this.id,box_name:this.box_name};Object(o["q"])(t).then((function(t){200==t.data.code&&(e.$message.success("操作成功"),e.dialogVisible=!1,e.getUserList())}))},refuse:function(){var e=this,t={token:sessionStorage.getItem("token"),sta:30,id:this.id,box_name:this.box_name};Object(o["q"])(t).then((function(t){200==t.data.code&&(e.$message.success("操作成功"),e.dialogVisible=!1,e.getUserList())}))},close:function(){this.dialogVisible=!1},set:function(e){this.dialogVisible=!0,console.log(e),this.id=e.bind_id,this.box_name=e.box_name},checkPermission:n["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},searchinfo:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:1,limit:this.page.pageSize,token:sessionStorage.getItem("token"),position_user:this.position_user,box_name:this.box_name,box_uid:this.box_uid,box_number:this.box_number,type:this.type,sta:this.sta,s_time:this.time[0],e_time:this.time[1]};Object(o["p"])(a).then((function(t){e.page.total=t.data.count,e.userList=t.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token"),position_user:this.position_user,box_name:this.box_name,box_uid:this.box_uid,box_number:this.box_number,type:this.type,sta:this.sta,s_time:this.time[0],e_time:this.time[1]};Object(o["p"])(a).then((function(t){e.page.total=t.data.count,e.userList=t.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))}}},p=u,b=a("2877"),m=Object(b["a"])(p,i,l,!1,null,"7ca0a3be",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0a3ce5.5b8a3be1.js.map