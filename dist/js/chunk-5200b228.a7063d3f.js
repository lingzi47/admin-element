(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5200b228"],{"217c":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("div",{staticClass:"block-quote"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"机器编号",prop:"name"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入药房名称"},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}})],1),a("el-form-item",{attrs:{label:"药房位置"}},[a("el-cascader",{attrs:{options:e.areaArr,props:{value:"name",label:"name"},placeholder:"请选择省市区",filterable:""},on:{change:e.change1},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),a("el-form-item",{attrs:{prop:"officina_id"}},[a("el-select",{staticStyle:{width:"160px"},attrs:{placeholder:"请选择药房",clearable:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},e._l(e.list,(function(e){return a("el-option",{key:e.big_name,attrs:{value:e.big_name,label:e.big_name}})})),1),a("el-select",{staticStyle:{width:"160px"},attrs:{placeholder:"请选择药房",clearable:""},model:{value:e.officina_id,callback:function(t){e.officina_id=t},expression:"officina_id"}},e._l(e.list1,(function(e){return a("el-option",{key:e.id,attrs:{value:e.id,label:e.name}})})),1)],1)],1),a("el-form-item",{attrs:{label:"缺货状态",prop:"type"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.sta,callback:function(t){e.sta=t},expression:"sta"}},[a("el-option",{attrs:{label:"全部状态",value:""}}),a("el-option",{attrs:{label:"是",value:"30"}}),a("el-option",{attrs:{label:"否",value:"20"}})],1)],1),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchinfo}},[e._v("搜索")])],1)],1)],1),a("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{prop:"number",label:"设备编号",align:"center"}}),a("el-table-column",{attrs:{label:"设备位置",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.eprovince)+"-"+e._s(t.row.ecity)+"-"+e._s(t.row.earea))])]}}])}),a("el-table-column",{attrs:{prop:"create_time",label:"设备供货药房",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.dprovince)+"-"+e._s(t.row.dcity)+"-"+e._s(t.row.darea)+"-"+e._s(t.row.dbig_name)+"-"+e._s(t.row.dname))])]}}])}),a("el-table-column",{attrs:{label:"是否缺货",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[20==t.row.sta?a("el-link",{attrs:{type:"success"}},[e._v("否")]):e._e(),30==t.row.sta?a("el-link",{attrs:{type:"danger"}},[e._v("是")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"350"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(a){return e.showtable(t.row)}}},[e._v("查看")]),a("el-link",{staticStyle:{"margin-left":"10px"},on:{click:function(a){return e.dao(t.row)}}},[e._v("导出")])]}}])})],1),a("up-set",{ref:"upSet"})],1)},i=[],l=a("ade3"),o=(a("d81d"),a("b0c0"),a("e9c4"),a("fd03")),s=a("bade"),r=a("e3d9"),c=a("ff82"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"AddDialog",attrs:{title:"库存",visible:e.dialogVisible,width:"1200px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-table",{ref:"dataTable",attrs:{border:"",data:e.userList},on:{changeCurrentPage:e.changeCurrent}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{prop:"productName",label:"商品名称",align:"center"}}),a("el-table-column",{attrs:{label:"商品图片",width:"160",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.imagesPath,"min-width":"70",height:"70"}})]}}])}),a("el-table-column",{attrs:{prop:"productSalePrice",label:"商品价格",align:"center"}}),a("el-table-column",{attrs:{prop:"aisleCode",label:"货道号",align:"center"}}),a("el-table-column",{attrs:{prop:"aisleStockMax",label:"货道容量",align:"center"}}),a("el-table-column",{attrs:{prop:"aisleStock",label:"库存量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[0==t.row.aisleStock?a("el-link",{attrs:{type:"danger"}},[e._v(" 缺货")]):a("el-link",{attrs:{type:"primary"}},[e._v(e._s(t.row.aisleStock))])]}}])})],1)],1)],1)},p=[],d={name:"AddDialog",components:{pageTable:r["a"]},data:function(){return{dialogVisible:!1,page:{currentPage:1,pageSize:10,total:0},userList:[]}},created:function(){},mounted:function(){},methods:{show:function(e){console.log(e.id),this.dialogVisible=!0,console.log(e),this.id=e.number,this.getUserList()},close:function(){this.dialogVisible=!1},changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={token:sessionStorage.getItem("token"),number:this.id};Object(o["ub"])(a).then((function(t){e.page.total=t.data.count,e.userList=t.data.data}))},showtable:function(){}}},g=d,f=(a("6461"),a("2877")),b=Object(f["a"])(g,u,p,!1,null,null,null),h=b.exports,m={name:"user",components:{pageTable:r["a"],upSet:h},data:function(){var e;return e={officina_id:"",province:"",type:"",city:"",number:"",name:"",token:"",phone:""},Object(l["a"])(e,"officina_id",""),Object(l["a"])(e,"num",""),Object(l["a"])(e,"sta",""),Object(l["a"])(e,"value",""),Object(l["a"])(e,"area",""),Object(l["a"])(e,"userList",[]),Object(l["a"])(e,"list",[]),Object(l["a"])(e,"list1",[]),Object(l["a"])(e,"time",""),Object(l["a"])(e,"page",{currentPage:1,pageSize:10,total:0}),e},watch:{name:function(e){console.log(e),this.huolist1()}},created:function(){this.token=sessionStorage.getItem("token"),this.getUserList(),this.setData(Object(c["a"])()),this.areaArr=Object(c["a"])()},mounted:function(){},computed:{},methods:{setData:function(e){var t=this;e.map((function(e){e["value"]=e.code,e["label"]=e.name,e.children&&t.setData(e.children)}))},huolist1:function(){var e=this,t={token:sessionStorage.getItem("token"),big_name:this.name,province:this.province,city:this.city,area:this.area};Object(o["Hb"])(t).then((function(t){console.log(t.data.data),e.list1=t.data.data}))},dao:function(e){console.log(e),this.num=e.number,console.log(this.num),console.log(window.location.href="https://yujian02.xyz/admin/box/expOfficina?token="+this.token+"&number="+this.num),window.location.href="https://yujian02.xyz/admin/box/expOfficina?token="+this.token+"&number="+this.num},change1:function(e){console.log(e),this.province=e[0],this.city=e[1],this.area=e[2],this.get()},get:function(){var e=this,t={token:sessionStorage.getItem("token"),province:this.province,city:this.city,area:this.area};Object(o["Hb"])(t).then((function(t){console.log(t.data.data),e.list=t.data.data}))},showtable:function(e){var t=e;this.$refs.upSet.show(JSON.parse(JSON.stringify(t)))},checkPermission:s["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},searchinfo:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:1,limit:this.page.pageSize,token:sessionStorage.getItem("token"),number:this.number,officina_id:this.officina_id,sta:this.sta};Object(o["y"])(a).then((function(t){e.page.total=t.data.count,e.userList=t.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token")};Object(o["y"])(a).then((function(t){e.page.total=t.data.count,e.userList=t.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))}}},k=m,v=Object(f["a"])(k,n,i,!1,null,"ef06d670",null);t["default"]=v.exports},6461:function(e,t,a){"use strict";a("727c")},"727c":function(e,t,a){}}]);
//# sourceMappingURL=chunk-5200b228.a7063d3f.js.map