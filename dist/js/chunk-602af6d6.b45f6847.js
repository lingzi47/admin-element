(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-602af6d6"],{4621:function(e,t,a){},7667:function(e,t,a){"use strict";a("4621")},aae9:function(e,t,a){"use strict";a.r(t);var l,r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("div",{staticClass:"block-quote"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"位置:"}},[a("el-cascader",{attrs:{options:e.areaArr,props:{value:"name",label:"name"},placeholder:"请选择省市区",filterable:""},on:{change:e.change},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),a("el-form-item",{attrs:{label:"药房:"}},[a("el-cascader",{attrs:{options:e.areaArr,props:{value:"name",label:"name"},placeholder:"请选择省市区",filterable:""},on:{change:e.change1},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),a("el-form-item",{attrs:{prop:"officina_id"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择药房:",clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},e._l(e.list,(function(e){return a("el-option",{key:e.big_name,attrs:{value:e.big_name,label:e.big_name}})})),1),a("el-select",{staticStyle:{width:"180px"},attrs:{placeholder:"请选择药房",clearable:""},model:{value:e.officina_id,callback:function(t){e.officina_id=t},expression:"officina_id"}},e._l(e.list1,(function(e){return a("el-option",{key:e.id,attrs:{value:e.name,label:e.name}})})),1)],1)],1),a("el-form-item",{attrs:{label:"设备编号:",prop:"number"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入设备编号:"},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}})],1),a("el-form-item",{attrs:{label:"设备租赁号:",prop:"number"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入设备租赁号"},model:{value:e.box_name,callback:function(t){e.box_name=t},expression:"box_name"}})],1),a("el-form-item",{attrs:{label:"金额总计："}},[e._v(e._s(e.all)+" ")]),a("el-form-item",{attrs:{label:"利润总计："}},[e._v(e._s(e.profit)+" ")]),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchinfo}},[e._v("搜索")])],1)],1)],1),a("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{prop:"box_number",label:"设备编号",align:"center"}}),a("el-table-column",{attrs:{prop:"box_name",label:"设备租赁号",align:"center"}}),a("el-table-column",{attrs:{label:"点位位置",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.eprovince)+"-"+e._s(t.row.ecity)+"-"+e._s(t.row.earea))])]}}])}),a("el-table-column",{attrs:{label:"设备供货药房",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.dprovince)+"-"+e._s(t.row.dcity)+"-"+e._s(t.row.darea)+"--"+e._s(t.row.dbigname)+"--"+e._s(t.row.dname))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"350"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(a){return e.showtable(t.row)}}},[e._v("查看")])]}}])})],1),a("edit-data",{ref:"editData"})],1)},i=[],o=(a("b0c0"),a("d81d"),a("e9c4"),a("fd03")),n=a("bade"),s=a("e3d9"),c=a("ff82"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"AddDialog",attrs:{title:"订单详情",visible:e.dialogVisible,width:"1200px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("div",{staticClass:"block-quote"},[a("el-form",{ref:"form1",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"订单编号"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入订单编号"},model:{value:e.uid,callback:function(t){e.uid=t},expression:"uid"}})],1),a("el-form-item",{attrs:{label:"药品名称"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入药品名称"},model:{value:e.box_pidname,callback:function(t){e.box_pidname=t},expression:"box_pidname"}})],1),a("el-form-item",{attrs:{label:"订单是否退款"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请选择付款方式"},model:{value:e.orderIsRefund,callback:function(t){e.orderIsRefund=t},expression:"orderIsRefund"}},[a("el-option",{attrs:{label:"否",value:0}}),a("el-option",{attrs:{label:"是",value:1}})],1)],1),a("el-form-item",{attrs:{label:"付款方式"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请选择付款方式"},model:{value:e.orderPayType,callback:function(t){e.orderPayType=t},expression:"orderPayType"}},[a("el-option",{attrs:{label:"未知",value:0}}),a("el-option",{attrs:{label:"微信",value:1}}),a("el-option",{attrs:{label:"支付宝",value:2}})],1)],1),a("el-form-item",{attrs:{label:"订单状态",prop:"orderPayStatus"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请选择支付状态"},model:{value:e.orderStatus,callback:function(t){e.orderStatus=t},expression:"orderStatus"}},[a("el-option",{attrs:{label:"已取消",value:3}}),a("el-option",{attrs:{label:"正常",value:1}}),a("el-option",{attrs:{label:"异常",value:2}})],1)],1),a("el-form-item",{attrs:{label:"支付状态",prop:"orderPayStatus"}},[a("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请选择支付状态"},model:{value:e.orderPayStatus,callback:function(t){e.orderPayStatus=t},expression:"orderPayStatus"}},[a("el-option",{attrs:{label:"未支付",value:0}}),a("el-option",{attrs:{label:"支付中",value:1}}),a("el-option",{attrs:{label:"已支付",value:2}})],1)],1),a("el-form-item",{attrs:{label:"支付时间",prop:"time"}},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd ","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.search}},[e._v("查询")])],1)],1)],1),a("el-table",{ref:"dataTable",attrs:{border:"",data:e.shoporder}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.page-1)*e.limit+t.$index+1))])]}}])}),a("el-table-column",{attrs:{prop:"orderCode",label:"订单编号",align:"center"}}),a("el-table-column",{attrs:{prop:"productName",label:"商品名称",align:"center"}}),a("el-table-column",{attrs:{prop:"productNum",align:"center",label:"购买数量"}}),a("el-table-column",{attrs:{prop:"orderMoneyPaid",align:"center",label:"订单金额"}}),a("el-table-column",{attrs:{align:"center",label:"订单利润"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(" "+e._s(t.row.productSalePrice-t.row.productCostPrice))])]}}])}),a("el-table-column",{attrs:{label:"付款方式",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.orderPayType?a("el-link",[e._v("未知")]):e._e(),1==t.row.orderPayType?a("el-link",[e._v("微信")]):e._e(),2==t.row.orderPayType?a("el-link",[e._v("支付宝")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"订单状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.orderStatus?a("el-link",{attrs:{type:"success"}},[e._v("正常")]):e._e(),3==t.row.orderStatus?a("el-link",{attrs:{type:"primary"}},[e._v("已取消")]):e._e(),2==t.row.orderStatus?a("el-link",{attrs:{type:"danger"}},[e._v("异常")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"orderCreateTime",label:"支付时间",align:"center"}})],1),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-size":10,layout:"prev, pager, next, jumper",total:e.count},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},d=[],p=a("ade3"),m=(a("bc3a"),l={name:"AddDialog",components:{pageTable:s["a"]},data:function(){return{dialogVisible:!1,uid:"",box_pidname:"",orderPayType:1,orderStatus:1,allprice:"",shoporder:[],stime:"",etime:"",time:"",count:0,orderIsRefund:0,deviceCode:"",Token:"",orderPayStatus:2,userId:"",limit:"10",page:1}},mounted:function(){},watch:{time:function(e){null==e&&(this.time=[])}},created:function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+(e.getDate()-1),a=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),l=[];l.push(t),l.push(a),this.time=l}},Object(p["a"])(l,"mounted",(function(){})),Object(p["a"])(l,"methods",{handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){this.page=e,this.limit=size,this.getUserList()},search:function(){this.getUserList()},getUserList:function(){var e=this,t={token:sessionStorage.getItem("token"),page:this.page,pageSize:this.limit,pay_status:this.pay_status,userId:this.userId,orderStatus:this.orderStatus,orderIsRefund:this.orderIsRefund,deviceCode:this.deviceCode,orderPayStatus:this.orderPayStatus,startTime:this.time[0],endTime:this.time[1]};Object(o["lc"])(t).then((function(t){console.log(t.data.data.data),e.count=t.data.data.data.total,console.log(e.count),e.shoporder=t.data.data.data.dataList,e.allprice=t.data.allprice}))},show:function(e){this.dialogVisible=!0,console.log(e),this.userId=e.userId,this.deviceCode=e.box_number,this.getUserList()},close:function(){this.dialogVisible=!1,this.uid="",this.box_pidname="",this.allprice="",this.shoporder=[],this.deviceCode="",this.userId=""}}),l),b=m,h=(a("7667"),a("2877")),f=Object(h["a"])(b,u,d,!1,null,null,null),g=f.exports,v={name:"user",components:{pageTable:s["a"],editData:g},data:function(){return{box_uid:"",box_name:"",areaArr:[],number:"",value:"",value1:"",list:[],list1:[],profit:"",all:"",name:"",officina_id:"",province:"",city:"",area:"",eprovince:"",ecity:"",earea:"",userList:[],time:"",page:{currentPage:1,pageSize:10,total:0}}},watch:{time:function(e){null==e&&(this.time=[])},name:function(e){console.log(e),this.huolist1()}},created:function(){this.getUserList(),this.setData(Object(c["a"])()),this.areaArr=Object(c["a"])()},mounted:function(){},computed:{},methods:{huolist1:function(){var e=this,t={token:sessionStorage.getItem("token"),big_name:this.name,province:this.province,city:this.city,area:this.area};Object(o["Nb"])(t).then((function(t){console.log(t.data.data),e.list1=t.data.data}))},setData:function(e){var t=this;e.map((function(e){e["value"]=e.code,e["label"]=e.name,e.children&&t.setData(e.children)}))},change:function(e){console.log(e),this.eprovince=e[0],this.ecity=e[1],this.earea=e[2]},change1:function(e){console.log(e),this.province=e[0],this.city=e[1],this.area=e[2],this.get()},get:function(){var e=this,t={token:sessionStorage.getItem("token"),province:this.province,city:this.city,area:this.area};Object(o["Nb"])(t).then((function(t){console.log(t.data.data),e.list=t.data.data}))},showtable:function(e){var t=e;this.$refs.editData.show(JSON.parse(JSON.stringify(t)))},checkPermission:n["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},searchinfo:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:1,limit:this.page.pageSize,token:sessionStorage.getItem("token"),box_number:this.number,officina_name:this.officina_id,position_area:this.earea,box_name:this.box_name};Object(o["ob"])(a).then((function(t){e.page.total=t.data.count,e.userList=t.data.data,e.all=t.data.allprice.all,e.profit=t.data.allprice.profit,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token"),box_number:this.number,officina_name:this.officina_id,position_area:this.earea,box_name:this.box_name};Object(o["ob"])(a).then((function(t){e.page.total=t.data.count,e.all=t.data.allprice.all,e.profit=t.data.allprice.profit,e.userList=t.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))}}},_=v,y=Object(h["a"])(_,r,i,!1,null,"9ed9554c",null);t["default"]=y.exports}}]);
//# sourceMappingURL=chunk-602af6d6.b45f6847.js.map