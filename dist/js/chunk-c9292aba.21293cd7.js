(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c9292aba"],{1372:function(e,t,r){},"44b5":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user"},[r("div",{staticClass:"block-quote"},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入商品名称"},model:{value:e.goods_name,callback:function(t){e.goods_name=t},expression:"goods_name"}})],1),r("el-form-item",{attrs:{label:"商品编号",prop:"name"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入商品编号"},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}})],1),r("el-form-item",{attrs:{label:"标签",prop:"name"}},[r("el-select",{attrs:{placeholder:"请选择标签"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},e._l(e.list,(function(e){return r("el-option",{key:e.id,attrs:{value:e.id,label:e.name}})})),1)],1),r("el-form-item",{staticStyle:{float:"right"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchinfo}},[e._v("搜索")]),r("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("新增")]),r("el-button",{attrs:{type:"primary"},on:{click:e.dao}},[e._v("导出")])],1)],1)],1),r("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent}},[r("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),r("el-table-column",{attrs:{prop:"goods_name",label:"商品名称",align:"center"}}),r("el-table-column",{attrs:{prop:"id",label:"商品编号",align:"center"}}),r("el-table-column",{attrs:{prop:"type",label:"品类",align:"center"}}),r("el-table-column",{attrs:{prop:"buy_price",label:"销售价",align:"center"}}),r("el-table-column",{attrs:{prop:"price",label:"成本价",align:"center"}}),r("el-table-column",{attrs:{prop:"number",label:"仓库库存",align:"center"}}),r("el-table-column",{attrs:{prop:"all_price",label:"库存总价",align:"center"}}),r("el-table-column",{attrs:{prop:"name",label:"标签",align:"center"}}),r("el-table-column",{attrs:{prop:"remark",label:"备注",align:"center"}}),r("el-table-column",{attrs:{label:"操作",align:"center",width:"350"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(r){return e.showtable(t.row)}}},[e._v("编辑")]),r("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:function(r){return e.deleteData(t.row)}}},[e._v("删除")])]}}])})],1),r("edit-data",{ref:"editData"})],1)},o=[],n=r("1da1"),i=(r("96cf"),r("b0c0"),r("e9c4"),r("fd03")),l=r("bade"),s=r("e3d9"),c=(r("ff82"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-dialog",{staticClass:"AddDialog",attrs:{title:e.tittle,visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"auto"}},[r("el-row",{attrs:{gutter:15}},[r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入商品名称"},model:{value:e.ruleForm.goods_name,callback:function(t){e.$set(e.ruleForm,"goods_name",t)},expression:"ruleForm.goods_name"}})],1)],1),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"销售价格",prop:"buy_price"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入销售价格"},model:{value:e.ruleForm.buy_price,callback:function(t){e.$set(e.ruleForm,"buy_price",t)},expression:"ruleForm.buy_price"}})],1)],1),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"成本价格",prop:"price"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入价格"},model:{value:e.ruleForm.price,callback:function(t){e.$set(e.ruleForm,"price",t)},expression:"ruleForm.price"}})],1)],1),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"商品品类",prop:"type"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入商品品类"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}})],1)],1),r("el-col",{attrs:{span:10}},[r("el-form-item",{attrs:{label:"标签",prop:"name"}},[r("el-select",{attrs:{placeholder:"请选择标签"},model:{value:e.ruleForm.name,callback:function(t){e.$set(e.ruleForm,"name",t)},expression:"ruleForm.name"}},e._l(e.list,(function(t){return r("el-option",{key:t.id,attrs:{value:t.id,label:t.name},on:{change:e.change}})})),1)],1)],1),r("el-col",{attrs:{span:15}},[r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{staticStyle:{width:"240px"},attrs:{type:"textarea",placeholder:"请输入地址"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1)],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)}),u=[],m={name:"AddDialog",components:{},data:function(){return{id:"",check:!1,token:"",isDisable:!1,tittle:"",list:[],type:"",dialogVisible:!1,ruleForm:{goods_name:"",price:"",type:"",id:"",remark:"",name:"",buy_price:""},rules:{name:[{required:!0,message:"请输入标签",trigger:"blur"}],price:[{required:!0,message:"请输入成本价格",trigger:"blur"}],buy_price:[{required:!0,message:"请输入销售价格",trigger:"blur"}],remark:[{required:!0,message:"请输入备注",trigger:"blur"}],goods_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}],type:[{required:!0,message:"请输入商品品类",trigger:"blur"}]}}},watch:{},created:function(){this.getlist()},mounted:function(){},methods:{change:function(e){console.log(e)},getlist:function(){var e=this,t={token:sessionStorage.getItem("token")};Object(i["pd"])(t).then((function(t){console.log(t),e.list=t.data.data,console.log(e.list)}))},show:function(e,t){this.dialogVisible=!0,console.log(e),this.type=e,2==this.type?(this.tittle="编辑",console.log(t),this.id=t.id,this.ruleForm.remark=t.remark,this.ruleForm.type=t.type,this.ruleForm.name=t.tag_id,this.ruleForm.price=t.price,this.ruleForm.buy_price=t.buy_price,this.ruleForm.goods_name=t.goods_name):this.tittle="添加"},close:function(){this.dialogVisible=!1,this.ruleForm.remark="",this.ruleForm.type="",this.ruleForm.price="",this.ruleForm.buy_price="",this.ruleForm.name="",this.ruleForm.goods_name=""},submitForm:function(){var e=this;1==this.type?this.$refs.ruleForm.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=7;break}a=sessionStorage.getItem("token"),e.token=a,o={goods_name:e.ruleForm.goods_name,price:e.ruleForm.price,buy_price:e.ruleForm.buy_price,token:sessionStorage.getItem("token"),tag_id:e.ruleForm.name,type:e.ruleForm.type,remark:e.ruleForm.remark},Object(i["Eb"])(o).then((function(t){200==t.data.code?(e.$message.success("新增成功"),e.$parent.getUserList(),e.close(),e.isDisable=!1):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close(),e.isDisable=!1)})),t.next=8;break;case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):this.$refs.ruleForm.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=7;break}a=sessionStorage.getItem("token"),e.token=a,o={goods_name:e.ruleForm.goods_name,price:e.ruleForm.price,buy_price:e.ruleForm.buy_price,token:sessionStorage.getItem("token"),tag_id:e.ruleForm.name,type:e.ruleForm.type,remark:e.ruleForm.remark,id:e.id},Object(i["Ob"])(o).then((function(t){200==t.data.code?(e.$message.success("编辑成功"),e.$parent.getUserList(),e.close(),e.isDisable=!1):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close(),e.isDisable=!1)})),t.next=8;break;case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},p=m,d=(r("d8ea"),r("2877")),g=Object(d["a"])(p,c,u,!1,null,null,null),b=g.exports,h={name:"user",components:{pageTable:s["a"],editData:b},data:function(){return{goods_name:"",id:"",tag_id:"",name:"",userList:[],list:[],page:{currentPage:1,pageSize:10,total:0}}},watch:{},created:function(){this.token=sessionStorage.getItem("token"),this.getUserList(),this.getlist()},mounted:function(){},computed:{},methods:{add:function(){this.$refs.editData.show(1,{})},dao:function(e){console.log(e),this.num=e.number,console.log(this.num),window.location.href="https://y4.wjw.cool/adminApi/box/boxStock/goodsExp?token="+this.token+"&goods_name="+this.goods_name+"&tag_id="+this.name+"&id="+this.id},showtable:function(e){var t=e;this.$refs.editData.show(2,JSON.parse(JSON.stringify(t)))},deleteData:function(e){var t=this;console.log(e),this.$confirm("是否删除此信息？","提示",{type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a={token:sessionStorage.getItem("token"),id:e.id},Object(i["Gb"])(a).then((function(e){200==e.data.code?(t.$message.success("删除成功"),t.getUserList()):(t.$message.error(e.data.msg),t.getUserList())}));case 2:case"end":return r.stop()}}),r)})))).catch((function(){}))},checkPermission:l["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},searchinfo:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var r={page:1,limit:this.page.pageSize,token:sessionStorage.getItem("token"),goods_name:this.goods_name,id:this.id,tag_id:this.name};Object(i["Hb"])(r).then((function(t){e.page.total=t.data.data.total,e.userList=t.data.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},getlist:function(){var e=this,t={token:sessionStorage.getItem("token")};Object(i["pd"])(t).then((function(t){console.log(t),e.list=t.data.data,console.log(e.list)}))},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var r={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token"),goods_name:this.goods_name,id:this.id,tag_id:this.name};Object(i["Hb"])(r).then((function(t){e.page.total=t.data.data.total,e.userList=t.data.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))}}},f=h,k=Object(d["a"])(f,a,o,!1,null,"1957b1a1",null);t["default"]=k.exports},d8ea:function(e,t,r){"use strict";r("1372")}}]);
//# sourceMappingURL=chunk-c9292aba.21293cd7.js.map