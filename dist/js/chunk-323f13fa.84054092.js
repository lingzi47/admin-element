(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-323f13fa"],{5192:function(e,t,r){"use strict";r("cc9a")},cc9a:function(e,t,r){},dea9:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user"},[r("div",{staticClass:"block-quote"},[r("el-form",{ref:"form",attrs:{inline:!0,model:e.form}},[r("el-form-item",{staticStyle:{float:"right"}},[r("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.addData()}}},[e._v("添加")])],1)],1)],1),r("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent}},[r("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),r("el-table-column",{attrs:{label:"banner图片",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{attrs:{src:e.row.img,"min-width":"70",height:"70"}})]}}])}),r("el-table-column",{attrs:{prop:"people",label:"商品类型 (shop_type)",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.shop_type?r("span",[e._v("预见专区")]):e._e(),2==t.row.shop_type?r("span",[e._v("遇见商城")]):e._e(),3==t.row.shop_type?r("span",[e._v("遇见生活")]):e._e(),4==t.row.shop_type?r("span",[e._v("推广专区")]):e._e(),5==t.row.shop_type?r("span",[e._v("APP轮播")]):e._e(),99==t.row.shop_type?r("span",[e._v("首页banner")]):e._e(),88==t.row.shop_type?r("span",[e._v("活动中心")]):e._e()]}}])}),r("el-table-column",{attrs:{prop:"goodstype",label:"商品分类(goodstype)",align:"center"}}),r("el-table-column",{attrs:{prop:"weigh",label:"排序",align:"center"}}),r("el-table-column",{attrs:{prop:"totype",label:"分类",align:"center"}}),r("el-table-column",{attrs:{prop:"toinfo",label:"信息(toinfo)",align:"center"}}),r("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.editData(2,t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.deleteData(t.row)}}},[e._v("删除")])]}}])})],1),r("edit-data",{ref:"editData"})],1)},a=[],s=r("1da1"),i=(r("96cf"),r("e9c4"),r("fd03")),l=r("bade"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-dialog",{staticClass:"AddDialog",attrs:{title:e.tittle,visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"auto"}},[r("el-row",{attrs:{gutter:15}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"封面图",prop:"img"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://y4.wjw.cool/command/ossUpload?filename=file","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?r("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"商品类型(shop_type)",prop:"shop_type"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入商品类型"},model:{value:e.ruleForm.shop_type,callback:function(t){e.$set(e.ruleForm,"shop_type",t)},expression:"ruleForm.shop_type"}})],1)],1),r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"商品分类(goodstype)",prop:"goodstype"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入商品分类"},model:{value:e.ruleForm.goodstype,callback:function(t){e.$set(e.ruleForm,"goodstype",t)},expression:"ruleForm.goodstype"}})],1)],1),r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"排序",prop:"weigh"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入排序"},model:{value:e.ruleForm.weigh,callback:function(t){e.$set(e.ruleForm,"weigh",t)},expression:"ruleForm.weigh"}})],1)],1),r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"分类(totype)",prop:"totype"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入分类"},model:{value:e.ruleForm.totype,callback:function(t){e.$set(e.ruleForm,"totype",t)},expression:"ruleForm.totype"}})],1)],1),r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"信息(toinfo)",prop:"toinfo"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入信息"},model:{value:e.ruleForm.toinfo,callback:function(t){e.$set(e.ruleForm,"toinfo",t)},expression:"ruleForm.toinfo"}})],1)],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},u=[],c=(r("ff82"),{name:"AddDialog",components:{},data:function(){return{id:"",tittle:"",dialogVisible:!1,imageUrl:"",ruleForm:{img:"",shop_type:"",goodstype:"",weigh:"",totype:"",toinfo:""},rules:{shop_type:[{required:!0,message:"请输入商品类型",trigger:"blur"}],goodstype:[{required:!0,message:"请输入商品分类",trigger:"blur"}],weigh:[{required:!0,message:"请输入排序",trigger:"blur"}],totype:[{required:!0,message:"请输入分类",trigger:"blur"}],toinfo:[{required:!0,message:"请输入信息",trigger:"blur"}],img:[{required:!0,message:"请选择图片",trigger:"blur"}]}}},created:function(){},mounted:function(){},methods:{show:function(e,t){this.dialogVisible=!0,console.log(e),this.type=e,2==this.type?(this.tittle="编辑",console.log(t),this.id=t.id,this.imageUrl=t.img,this.ruleForm.img=t.img,this.ruleForm.weigh=t.weigh,this.ruleForm.goodstype=t.goodstype,this.ruleForm.toinfo=t.toinfo,this.ruleForm.totype=t.totype,this.ruleForm.shop_type=t.shop_type):this.tittle="添加"},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传图片大小不能超过 2MB!"),t},handleAvatarSuccess:function(e,t){var r=e.data;this.imageUrl=r,this.ruleForm.img=r},close:function(){this.dialogVisible=!1,this.ruleForm.img="",this.ruleForm.weigh="",this.ruleForm.goodstype="",this.ruleForm.toinfo="",this.ruleForm.totype="",this.ruleForm.shop_type=""},submitForm:function(){var e=this;console.log(this.ruleForm.year),1==this.type?this.$refs.ruleForm.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=7;break}o=sessionStorage.getItem("token"),e.token=o,a={token:sessionStorage.getItem("token"),img:e.ruleForm.img,shop_type:e.ruleForm.shop_type,totype:e.ruleForm.totype,toinfo:e.ruleForm.toinfo,goodstype:e.ruleForm.goodstype,weigh:e.ruleForm.weigh},Object(i["r"])(a).then((function(t){200==t.data.code?(e.$message.success("新增成功"),e.$parent.getUserList(),e.close(),e.isDisable=!1):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close(),e.isDisable=!1)})),t.next=8;break;case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):this.$refs.ruleForm.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(r){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=7;break}o=sessionStorage.getItem("token"),e.token=o,a={img:e.ruleForm.img,shop_type:e.ruleForm.shop_type,totype:e.ruleForm.totype,token:sessionStorage.getItem("token"),toinfo:e.ruleForm.toinfo,goodstype:e.ruleForm.goodstype,weigh:e.ruleForm.weigh,id:e.id},Object(i["t"])(a).then((function(t){200==t.data.code?(e.$message.success("编辑成功"),e.$parent.getUserList(),e.close(),e.isDisable=!1):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close(),e.isDisable=!1)})),t.next=8;break;case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}),p=c,m=(r("5192"),r("2877")),g=Object(m["a"])(p,n,u,!1,null,"8434e68a",null),d=g.exports,h=r("e3d9"),f={name:"user",components:{pageTable:h["a"],editData:d},data:function(){return{rolesList:[],userList:[],form:{username:"",member:"",time:"",id:""},page:{currentPage:1,pageSize:10,total:0},tableSelectList:[]}},watch:{},created:function(){this.getUserList()},mounted:function(){},computed:{},methods:{checkPermission:l["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var r={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token")};Object(i["u"])(r).then((function(t){e.userList=t.data.data,e.page.total=t.data.count,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},addData:function(){this.$refs.editData.show(1,{})},editData:function(e,t){var r=t;this.$refs.editData.show(2,JSON.parse(JSON.stringify(r)))},deleteData:function(e){var t=this;this.$confirm("是否删除此数据？","提示",{type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:o={token:sessionStorage.getItem("token"),id:e.id},Object(i["s"])(o).then((function(e){200==e.data.code?(t.getUserList(),t.$message.success("删除成功")):(t.$message.error(e.data.msg),t.getUserList())}));case 2:case"end":return r.stop()}}),r)})))).catch((function(){}))}}},b=f,y=Object(m["a"])(b,o,a,!1,null,"50b3f5ca",null);t["default"]=y.exports}}]);
//# sourceMappingURL=chunk-323f13fa.84054092.js.map