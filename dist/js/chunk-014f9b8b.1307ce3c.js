(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-014f9b8b"],{"2bdb":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user"},[i("div",{staticClass:"block-quote"},[i("el-form",{attrs:{inline:!0}},[i("el-form-item",{attrs:{label:"药房名称",prop:"big_name"}},[i("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入药房名称"},model:{value:t.big_name,callback:function(e){t.big_name=e},expression:"big_name"}})],1),i("el-form-item",{attrs:{label:"分润模式",prop:"box_uid"}},[i("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:t.share,callback:function(e){t.share=e},expression:"share"}},[i("el-option",{attrs:{label:"全部",value:""}}),i("el-option",{attrs:{label:"设备总流水",value:"10"}}),i("el-option",{attrs:{label:"药品售卖差价",value:"20"}})],1)],1),i("el-form-item",{staticStyle:{float:"right"}},[i("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.searchinfo}},[t._v("搜索")])],1)],1)],1),i("page-table",{ref:"dataTable",attrs:{data:t.userList},on:{changeCurrentPage:t.changeCurrent}},[i("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s((t.page.currentPage-1)*t.page.pageSize+e.$index+1))])]}}])}),i("el-table-column",{attrs:{label:"药房名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(e.row.big_name))])]}}])}),i("el-table-column",{attrs:{prop:"num",label:"合作药箱数",align:"center"}}),i("el-table-column",{attrs:{label:"是否设置分润",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[null==e.row.share?i("el-link",{attrs:{type:"danger"}},[t._v("否")]):i("el-link",{attrs:{type:"success"}},[t._v("是")])]}}])}),i("el-table-column",{attrs:{label:"分润模式",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[10==e.row.share?i("el-link",[t._v("设备总流水")]):t._e(),20==e.row.share?i("el-link",[t._v("药品售卖差价")]):t._e(),null==e.row.share?i("el-link",{attrs:{type:"danger"}},[t._v("暂无")]):t._e()]}}])}),i("el-table-column",{attrs:{label:"操作",align:"center",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(i){return t.fenrun(2,e.row)}}},[t._v("编辑")])]}}])})],1),i("edit-data",{ref:"editData"})],1)},s=[],n=(i("e9c4"),i("fd03")),l=i("bade"),o=i("e3d9"),r=(i("ff82"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{staticClass:"AddDialog",attrs:{title:t.tittle,visible:t.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(e){t.dialogVisible=e},close:t.close}},[i("el-form",[i("el-row",{attrs:{gutter:24}},[i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"药房名称:"}},[t._v(" "+t._s(t.big_name))])],1),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"分润模式"}})],1),i("el-col",[i("el-form-item",[i("el-radio",{attrs:{label:"10"},on:{change:t.checked},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("药品总流水 - "),i("el-input",{staticStyle:{width:"100px"},attrs:{disabled:t.isDisable1},model:{value:t.input3,callback:function(e){t.input3=e},expression:"input3"}}),t._v("%税率的 "),i("el-input",{staticStyle:{width:"100px","margin-left":"15px"},attrs:{disabled:t.isDisable1},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v("%进行分润")],1),i("el-radio",{staticStyle:{"margin-top":"10px"},attrs:{label:"20"},on:{change:t.checked},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("药品售价 - "),i("el-input",{staticStyle:{width:"100px"},attrs:{disabled:t.isDisable},model:{value:t.input2,callback:function(e){t.input2=e},expression:"input2"}}),t._v("%税率 - 药品成本的 "),i("el-input",{staticStyle:{width:"100px"},attrs:{disabled:t.isDisable},model:{value:t.input1,callback:function(e){t.input1=e},expression:"input1"}}),t._v("%进行分润")],1)],1)],1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.submitForm}},[t._v("确 定")])],1)],1)],1)}),c=[],u={name:"AddDialog",components:{},data:function(){return{goodsForm:{box_number:""},big_name:"",tittle:"",isDisable:!1,isDisable1:!1,total_profit:"",input:"",input1:"",input3:"",tax:"",input2:"",radio:"",type:"",dialogVisible:!1,dialogVisible1:!1}},created:function(){},mounted:function(){},methods:{zhuan:function(){this.dialogVisible1=!0},submitForm1:function(){this.dialogVisible1=!1},quxiao:function(){this.dialogVisible1=!1},close1:function(){this.dialogVisible1=!1},checked:function(t){console.log(t),this.events=t,10==t?(this.isDisable=!0,this.isDisable1=!1,console.log("1解开2不能用"),this.input1="",this.input2=""):(this.isDisable=!1,this.isDisable1=!0,console.log("2解开1不能用"),this.input="",this.input3="")},show:function(t,e){this.dialogVisible=!0,this.type=t,2==this.type?(this.tittle="编辑",console.log(e),this.big_name=e.big_name,this.id=e.id,10==e.share?(this.radio="10",this.input=e.total_profit,this.input3=e.tax,this.isDisable=!0):20==e.share&&(this.radio="20",this.isDisable1=!0,this.input1=e.total_profit,this.input2=e.tax)):this.tittle="添加"},close:function(){this.dialogVisible=!1,this.radio="",this.big_name="",this.total_profit="",this.tax="",this.input="",this.input1="",this.input2=""},submitForm:function(){var t=this;if(""==this.input1?(this.total_profit=this.input,this.tax=this.input3):(this.total_profit=this.input,this.tax=this.input2),""!=this.radio)if(""!=this.total_profit){var e=sessionStorage.getItem("token");this.token=e;var i={token:sessionStorage.getItem("token"),big_name:this.big_name,share:this.radio,total_profit:this.total_profit,tax:this.tax};Object(n["nb"])(i).then((function(e){200==e.data.code?(t.$message.success("新增成功"),t.$parent.getUserList(),t.close(),t.isDisable=!1):(t.$message.error(e.data.msg),t.$parent.getUserList(),t.close(),t.isDisable=!1)}))}else this.$message.error("分润不能为空");else this.$message.error("请选择分润模式")}}},p=u,h=(i("63e2"),i("2877")),d=Object(h["a"])(p,r,c,!1,null,null,null),b=d.exports,g={name:"user",components:{pageTable:o["a"],editData:b},data:function(){return{box_uid:"",box_name:"",share:"",areaArr:[],big_name:"",value:"",value1:"",list:[],officina_id:"",province:"",city:"",area:"",eprovince:"",ecity:"",is_special:"",earea:"",userList:[],time:"",page:{currentPage:1,pageSize:10,total:0}}},watch:{},created:function(){this.getUserList()},mounted:function(){},computed:{},methods:{fenrun:function(t,e){var i=e;this.$refs.editData.show(2,JSON.parse(JSON.stringify(i)))},checkPermission:l["a"],changeCurrent:function(t,e){this.page.currentPage=t,this.page.pageSize=e,this.getUserList()},searchinfo:function(){var t=this,e=sessionStorage.getItem("token");this.token=e;var i={page:1,limit:this.page.pageSize,token:sessionStorage.getItem("token"),share:this.share,big_name:this.big_name};Object(n["zc"])(i).then((function(e){t.page.total=e.data.count,t.userList=e.data.data,t.$refs.dataTable.setPageInfo({total:t.page.total})}))},getUserList:function(){var t=this,e=sessionStorage.getItem("token");this.token=e;var i={page:this.page.currentPage,limit:this.page.pageSize,share:this.share,token:sessionStorage.getItem("token"),big_name:this.big_name};Object(n["zc"])(i).then((function(e){t.page.total=e.data.count,t.userList=e.data.data,t.$refs.dataTable.setPageInfo({total:t.page.total})}))}}},f=g,m=Object(h["a"])(f,a,s,!1,null,"8f9c4eca",null);e["default"]=m.exports},"63e2":function(t,e,i){"use strict";i("9d3b")},"9d3b":function(t,e,i){}}]);
//# sourceMappingURL=chunk-014f9b8b.1307ce3c.js.map