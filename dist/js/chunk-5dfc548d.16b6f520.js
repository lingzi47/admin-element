(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5dfc548d"],{"1d7a":function(e,t,a){"use strict";a("4816")},4816:function(e,t,a){},"513e":function(e,t,a){"use strict";a("b9ba")},8556:function(e,t,a){"use strict";a("feab")},"96f7":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("div",{staticClass:"block-quote"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"点位编号",prop:"id"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入点位编号"},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}})],1),a("el-form-item",{attrs:{label:"点位位置"}},[a("el-cascader",{attrs:{options:e.areaArr,props:{value:"name",label:"name"},placeholder:"请选择省市区",filterable:""},on:{change:e.change},model:{value:e.form.value1,callback:function(t){e.$set(e.form,"value1",t)},expression:"form.value1"}})],1),a("el-form-item",{attrs:{label:"点位来源",prop:"status"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"公司",value:"10"}}),a("el-option",{attrs:{label:"渠道商",value:"20"}})],1)],1),a("el-form-item",{attrs:{label:"点位状态",prop:"status"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.sta,callback:function(t){e.sta=t},expression:"sta"}},[a("el-option",{attrs:{label:"全部状态",value:""}}),a("el-option",{attrs:{label:"已绑定",value:"20"}}),a("el-option",{attrs:{label:"未绑定",value:"10"}}),a("el-option",{attrs:{label:"废弃",value:"30"}})],1)],1),a("el-form-item",{attrs:{label:"租赁商id",prop:"box_uid"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入租赁商id"},model:{value:e.box_uid,callback:function(t){e.box_uid=t},expression:"box_uid"}})],1),a("el-form-item",{attrs:{label:"设备租赁号",prop:"box_name"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入设备租赁号"},model:{value:e.box_name,callback:function(t){e.box_name=t},expression:"box_name"}})],1),a("el-form-item",{attrs:{label:"时间",prop:"time"}},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchinfo}},[e._v("搜索")]),a("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("添加")])],1)],1)],1),a("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{prop:"id",label:"点位编号",align:"center"}}),a("el-table-column",{attrs:{label:"点位位置",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.province)+"-"+e._s(t.row.city)+"-"+e._s(t.row.area)+"-"+e._s(t.row.details))])]}}])}),a("el-table-column",{attrs:{label:"点位来源",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[20==t.row.type?a("el-link",{attrs:{type:"success"}},[e._v("渠道商")]):e._e(),10==t.row.type?a("el-link",{attrs:{type:"primary"}},[e._v("公司")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"点位使用截止日期",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["2038"==e.formatStr(t.row.due_time)?a("el-link",{attrs:{type:"danger"}},[e._v("永久")]):a("el-link",{attrs:{type:"success"}},[e._v(e._s(t.row.due_time))])]}}])}),a("el-table-column",{attrs:{label:"点位状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[10==t.row.bind?a("el-link",{attrs:{type:"danger"}},[e._v("未绑定")]):e._e(),20==t.row.bind?a("el-link",{attrs:{type:"success"}},[e._v("已绑定")]):e._e(),30==t.row.bind?a("el-link",[e._v("废弃")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"create_time",label:"点位创建时间",align:"center"}}),a("el-table-column",{attrs:{prop:"box_number",label:"机器编号",align:"center"}}),a("el-table-column",{attrs:{prop:"position_user",label:"渠道商id",align:"center"}}),a("el-table-column",{attrs:{prop:"uid",label:"租赁商id",align:"center"}}),a("el-table-column",{attrs:{prop:"box_name",label:"设备租赁号",align:"center"}}),a("el-table-column",{attrs:{prop:"bind_time",label:"点位绑定时间",align:"center"}}),a("el-table-column",{attrs:{label:"点位审核状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[20==t.row.sta?a("el-link",{attrs:{type:"success"}},[e._v("已通过")]):e._e(),30==t.row.sta?a("el-link",{attrs:{type:"danger"}},[e._v("未通过")]):e._e(),10==t.row.sta?a("el-link",{attrs:{type:"primary"}},[e._v("待审核")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"绑定审核状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[null==t.row.bindsta?a("el-link",[e._v("未绑定")]):e._e(),20==t.row.bindsta?a("el-link",{attrs:{type:"success"}},[e._v("已通过")]):e._e(),30==t.row.bindsta?a("el-link",{attrs:{type:"danger"}},[e._v("未通过")]):e._e(),10==t.row.bindsta?a("el-link",{attrs:{type:"primary"}},[e._v("待审核")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center",width:"350"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(a){return e.showtable(t.row)}}},[e._v("查看")]),20==t.row.sta&&null==t.row.bindsta?a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(a){return e.addup(1,t.row)}}},[e._v("绑定")]):e._e(),20==t.row.sta&&20==t.row.bindsta?a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(a){return e.editup(2,t.row)}}},[e._v("修改绑定")]):e._e(),20==t.row.sta&&30==t.row.bindsta?a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(a){return e.editup(2,t.row)}}},[e._v("修改绑定")]):e._e(),a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(a){return e.fenrun(2,t.row)}}},[e._v("编辑")])]}}])})],1),a("edit-data",{ref:"editData"}),a("fen-run",{ref:"fenRun"}),a("up-set",{ref:"upSet"})],1)},s=[],o=a("1da1"),l=a("ade3"),r=(a("96cf"),a("d81d"),a("b0c0"),a("e9c4"),a("fd03")),n=a("bade"),c=a("e3d9"),u=a("ff82"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"AddDialog",attrs:{title:e.tittle,visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"auto"}},[a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"点位位置",prop:"value1"}},[a("el-cascader",{staticStyle:{width:"250px"},attrs:{options:e.areaArr,props:{value:"name",label:"name"},placeholder:"请选择省市区",filterable:""},on:{change:e.change},model:{value:e.ruleForm.value1,callback:function(t){e.$set(e.ruleForm,"value1",t)},expression:"ruleForm.value1"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"点位详细位置",prop:"details"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入点位详细位置"},model:{value:e.ruleForm.details,callback:function(t){e.$set(e.ruleForm,"details",t)},expression:"ruleForm.details"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"点位来源",prop:"type"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},on:{change:e.change1},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[a("el-option",{attrs:{label:"公司",value:"10"}}),a("el-option",{attrs:{label:"渠道商",value:"20"}})],1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"点位到期时间",prop:"year"}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{disabled:e.isDisable,"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetime",placeholder:"选择日期时间"},model:{value:e.ruleForm.year,callback:function(t){e.$set(e.ruleForm,"year",t)},expression:"ruleForm.year"}})],1)],1),a("el-col",{attrs:{span:2}},[a("el-form-item",{staticClass:"xian1"},[a("el-checkbox",{on:{change:e.checked},model:{value:e.check,callback:function(t){e.check=t},expression:"check"}},[e._v("无期限")])],1)],1),a("el-col",{attrs:{span:24}},[20==this.ruleForm.type?a("el-form-item",{attrs:{label:"渠道商id:",prop:"position_user"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入渠道商id"},model:{value:e.ruleForm.position_user,callback:function(t){e.$set(e.ruleForm,"position_user",t)},expression:"ruleForm.position_user"}})],1):e._e()],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"物业名称"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入物业名称"},model:{value:e.property,callback:function(t){e.property=t},expression:"property"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"有无其他条款"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.exclude,callback:function(t){e.exclude=t},expression:"exclude"}},[a("el-option",{attrs:{label:"有",value:"有"}}),a("el-option",{attrs:{label:"无",value:"无"}})],1)],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"是否房产准入"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.house,callback:function(t){e.house=t},expression:"house"}},[a("el-option",{attrs:{label:"是",value:"是"}}),a("el-option",{attrs:{label:"否",value:"否"}})],1)],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"是否医美准入"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},on:{change:e.change1},model:{value:e.medical,callback:function(t){e.medical=t},expression:"medical"}},[a("el-option",{attrs:{label:"是",value:"是"}}),a("el-option",{attrs:{label:"否",value:"否"}})],1)],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"商圈"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入商圈"},model:{value:e.shop,callback:function(t){e.shop=t},expression:"shop"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"附近商圈"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入附近商圈"},model:{value:e.shop_name,callback:function(t){e.shop_name=t},expression:"shop_name"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"是否学区"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},on:{change:e.change1},model:{value:e.school,callback:function(t){e.school=t},expression:"school"}},[a("el-option",{attrs:{label:"是",value:"是"}}),a("el-option",{attrs:{label:"否",value:"否"}})],1)],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"建成时间"}},[a("el-date-picker",{staticStyle:{width:"200px"},attrs:{"value-format":"yyyy-MM-dd ",type:"date",placeholder:"选择日期"},model:{value:e.build,callback:function(t){e.build=t},expression:"build"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"楼栋总数"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入楼栋总数"},model:{value:e.house_num,callback:function(t){e.house_num=t},expression:"house_num"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"总户数"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入总户数"},model:{value:e.households,callback:function(t){e.households=t},expression:"households"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"覆盖人数"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入覆盖人数"},model:{value:e.peopleall,callback:function(t){e.peopleall=t},expression:"peopleall"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"房价"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入房价"},model:{value:e.house_price,callback:function(t){e.house_price=t},expression:"house_price"}})],1)],1),a("el-col",{attrs:{span:20}},[a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{placeholder:"请输入备注"},model:{value:e.remarks,callback:function(t){e.remarks=t},expression:"remarks"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},d=[],m={name:"AddDialog",components:{},data:function(){var e;return e={property:"",exclude:"",house:"",medical:"",shop:"",shop_name:"",school:"",build:"",house_num:"",households:"",peopleall:"",house_price:"",remarks:"",check:!1,token:"",isDisable:!1,tittle:"",id:"",form:{value1:"",value2:"",value3:""},province:"",type:"",city:""},Object(l["a"])(e,"id",""),Object(l["a"])(e,"area",""),Object(l["a"])(e,"type",""),Object(l["a"])(e,"dialogVisible",!1),Object(l["a"])(e,"ruleForm",{value1:"",type:"",year:"",position_user:"",details:""}),Object(l["a"])(e,"rules",{year:[{required:!0,message:"请选择点位到期时间",trigger:"blur"}],value1:[{required:!0,message:"请选择省市区",trigger:"blur"}],details:[{required:!0,message:"请输入详情信息",trigger:"blur"}],position_user:[{required:!0,message:"请输入渠道商id",trigger:"blur"}],type:[{required:!0,message:"请选择点位来源",trigger:"blur"}]}),e},created:function(){this.setData(Object(u["a"])()),this.areaArr=Object(u["a"])()},mounted:function(){},methods:{setData:function(e){var t=this;e.map((function(e){e["value"]=e.code,e["label"]=e.name,e.children&&t.setData(e.children)}))},change1:function(e){console.log(e),10==e?(this.isDisable=!0,this.ruleForm.year="2099-01-01 00:00:00",console.log(this.ruleForm.year)):(console.log(this.ruleForm.year),this.isDisable=!1,this.ruleForm.year="")},checked:function(e){this.events=e,1==e?(this.ruleForm.type,this.isDisable=!0,this.ruleForm.year="2099-01-01 00:00:00"):10==this.ruleForm.type?(this.isDisable=!0,this.ruleForm.year="2099-01-01 00:00:00"):(this.isDisable=!1,this.ruleForm.year="")},change:function(e){console.log(e),this.province=e[0],this.city=e[1],this.area=e[2]},show:function(e,t){if(this.dialogVisible=!0,console.log(e),this.type=e,2==this.type){this.tittle="编辑",console.log(t),this.id=t.id,this.property=t.property,this.exclude=t.exclude,this.house=t.house,this.medical=t.medical,this.shop=t.shop,this.shop_name=t.shop_name,this.school=t.school,this.build=t.build,this.house_num=t.house_num,this.households=t.households,this.peopleall=t.peopleall,this.house_price=t.house_price,this.remarks=t.remarks,this.ruleForm.type=t.type,this.ruleForm.year=t.due_time,this.ruleForm.details=t.details,"2099-01-01 00:00:00"==t.due_time?(this.isDisable=!0,this.ruleForm.year=t.due_time,this.ruleForm.position_user=t.position_user,this.check=!0,console.log("被选中")):(console.log(111),this.ruleForm.position_user=t.position_user,this.ruleForm.year=t.due_time);var a=[];a.push(t.province),a.push(t.city),a.push(t.area),this.province=t.province,this.city=t.city,this.area=t.area,console.log(a),this.ruleForm.value1=a}else this.tittle="添加"},close:function(){this.dialogVisible=!1,this.ruleForm.type="",this.ruleForm.position_user="",this.ruleForm.year="",this.ruleForm.details="",this.isDisable=!1,this.check=!1,this.ruleForm.value1="",this.property="",this.exclude="",this.house="",this.medical="",this.shop="",this.shop_name="",this.school="",this.build="",this.house_num="",this.households="",this.peopleall="",this.house_price="",this.remarks=""},submitForm:function(){var e=this;console.log(this.ruleForm.year),1==this.type?this.$refs.ruleForm.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}i=sessionStorage.getItem("token"),e.token=i,s={position_user:e.ruleForm.position_user,type:e.ruleForm.type,due_time:e.ruleForm.year,token:sessionStorage.getItem("token"),details:e.ruleForm.details,province:e.province,city:e.city,area:e.area,property:e.property,exclude:e.exclude,house:e.house,medical:e.medical,shop:e.shop,shop_name:e.shop_name,school:e.school,build:e.build,house_num:e.house_num,households:e.households,peopleal1:e.peopleall,house_price:e.house_price,remarks:e.remarks},Object(r["bc"])(s).then((function(t){200==t.data.code?(e.$message.success("新增成功"),e.$parent.getUserList(),e.close(),e.isDisable=!1):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close(),e.isDisable=!1)})),t.next=8;break;case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):this.$refs.ruleForm.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}i=sessionStorage.getItem("token"),e.token=i,s={position_user:e.ruleForm.position_user,type:e.ruleForm.type,due_time:e.ruleForm.year,token:sessionStorage.getItem("token"),details:e.ruleForm.details,province:e.province,city:e.city,area:e.area,id:e.id,property:e.property,exclude:e.exclude,house:e.house,medical:e.medical,shop:e.shop,shop_name:e.shop_name,school:e.school,build:e.build,house_num:e.house_num,households:e.households,peopleal1:e.peopleall,house_price:e.house_price,remarks:e.remarks},Object(r["dc"])(s).then((function(t){200==t.data.code?(e.$message.success("新增成功"),e.$parent.getUserList(),e.close(),e.isDisable=!1):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close(),e.isDisable=!1)})),t.next=8;break;case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},h=m,b=(a("1d7a"),a("2877")),f=Object(b["a"])(h,p,d,!1,null,"e9ba88dc",null),g=f.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"AddDialog",attrs:{title:"铺设点位详情",visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{attrs:{"label-width":"auto"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"点位位置:"}},[e._v(e._s(e.province)+"-"+e._s(e.city)+"-"+e._s(e.area)+" ")])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"点位详细位置:"}},[e._v(e._s(e.details)+" ")])],1),"2038"==e.formatStr(e.due_time)?a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"点位使用截止日期:"}},[e._v("永久 ")])],1):a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"点位使用截止日期:"}},[e._v(e._s(e.due_time)+" ")])],1),a("el-col",{attrs:{span:12}},[10==e.type?a("el-form-item",{attrs:{label:"点位来源:"}},[e._v("公司 ")]):e._e(),20==e.type?a("el-form-item",{attrs:{label:"点位来源:"}},[e._v(" 渠道商")]):e._e()],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"渠道商id:"}},[e._v(e._s(e.position_user)+" ")])],1)],1)],1)],1)],1)},v=[],y={name:"AddDialog",components:{pageTable:c["a"]},data:function(){var e;return e={dialogVisible:!1,province:"",city:"",area:"",details:"",due_time:"",type:""},Object(l["a"])(e,"province",""),Object(l["a"])(e,"position_user",""),e},created:function(){},mounted:function(){},methods:{show:function(e){console.log(e),this.dialogVisible=!0,this.province=e.province,this.city=e.city,this.area=e.area,this.details=e.details,this.due_time=e.due_time,this.type=e.type,this.position_user=e.position_user},close:function(){this.dialogVisible=!1},formatStr:function(e){return e?"".concat(e.substr(0,4)):""},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token"),moys:this.moys,id:this.id,s_time:this.buy_time[0],e_time:this.buy_time[1]};goodsListMem(a).then((function(t){e.page.total=t.data.data.total,e.userList=t.data.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))}}},k=y,x=(a("513e"),Object(b["a"])(k,_,v,!1,null,null,null)),w=x.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"AddDialog",attrs:{title:"绑定",visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{ref:"goodsForm",attrs:{rules:e.rules,"label-width":"auto",model:e.goodsForm}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"点位位置"}},[e._v(" "+e._s(e.province)+"-"+e._s(e.city)+"-"+e._s(e.area)+"-"+e._s(e.details)+" ")])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"点位截止日期"}},[e._v(" "+e._s(e.create_time)+"--"+e._s(e.due_time)+" ")])],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"点位来源:"}},[e._v(" "+e._s(e.type))])],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"渠道商id:"}},[e._v(e._s(e.position_user)+" ")])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"设备编号:",prop:"box_number"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入设备编号"},model:{value:e.goodsForm.box_number,callback:function(t){e.$set(e.goodsForm,"box_number",t)},expression:"goodsForm.box_number"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"绑定设备供货药房:",prop:"value1"}},[a("el-cascader",{staticStyle:{width:"250px"},attrs:{options:e.areaArr,props:{value:"name",label:"name"},placeholder:"请选择省市区",filterable:""},on:{change:e.change},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{prop:"officina_id"}},[a("el-select",{staticStyle:{width:"160px"},attrs:{placeholder:"请选择药房",clearable:""},on:{change:e.change1},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}},e._l(e.list,(function(e){return a("el-option",{key:e.big_name,attrs:{value:e.big_name,label:e.big_name}})})),1),a("el-select",{staticStyle:{width:"160px"},attrs:{placeholder:"请选择药房",clearable:""},model:{value:e.goodsForm.officina_id,callback:function(t){e.$set(e.goodsForm,"officina_id",t)},expression:"goodsForm.officina_id"}},e._l(e.list1,(function(e){return a("el-option",{key:e.id,attrs:{value:e.id,label:e.name}})})),1)],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"设备租赁号:",prop:"box_name"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{disabled:e.disable,placeholder:"请输入设备租赁号"},model:{value:e.goodsForm.box_name,callback:function(t){e.$set(e.goodsForm,"box_name",t)},expression:"goodsForm.box_name"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},S=[],O={name:"AddDialog",components:{},data:function(){var e;return e={id:"",goodsForm:{box_name:"",box_number:"",officina_id:"",bind_id:""},due_time:"",token:"",province1:"",disable:!1,city1:"",area1:"",province:"",city:"",area:"",name:"",officinaprovince:"",officinacity:"",officinaarea:"",type:"",details:"",create_time:"",list:[],list1:[],value1:"",typeid:"",position_user:""},Object(l["a"])(e,"type",""),Object(l["a"])(e,"dialogVisible",!1),Object(l["a"])(e,"uid",""),Object(l["a"])(e,"rules",{box_name:[{required:!0,message:"请输入设备租赁号",trigger:"blur"}],box_number:[{required:!0,message:"请输入设备编号",trigger:"blur"}],officina_id:[{required:!0,message:"请选择药房",trigger:"blur"}]}),e},created:function(){this.setData(Object(u["a"])()),this.areaArr=Object(u["a"])()},watch:{name:function(e){this.huolist1()}},mounted:function(){},methods:{huolist1:function(){var e=this,t={token:sessionStorage.getItem("token"),big_name:this.name,province:this.province1,city:this.city1,area:this.area1};Object(r["Nb"])(t).then((function(t){console.log(t.data.data),e.list1=t.data.data}))},setData:function(e){var t=this;e.map((function(e){e["value"]=e.code,e["label"]=e.name,e.children&&t.setData(e.children)}))},change1:function(e){console.log(e),this.goodsForm.officina_id=""},change:function(e){console.log(e),this.province1=e[0],this.city1=e[1],this.area1=e[2],this.name="",this.goodsForm.officina_id="",this.get()},get:function(){var e=this,t={token:sessionStorage.getItem("token"),province:this.province1,city:this.city1,area:this.area1};Object(r["Nb"])(t).then((function(t){e.list=t.data.data}))},show:function(e,t){var a=this;if(this.typeid=e,console.log(t),20==t.type?this.type="渠道商":this.type="公司",this.province=t.province,this.city=t.city,this.create_time=t.create_time,this.area=t.area,this.due_time=t.due_time,this.dialogVisible=!0,this.id=t.id,this.details=t.details,this.position_user=t.position_user,1==this.typeid)this.disable=!1;else{this.disable=!0,this.goodsForm.box_name=t.box_name,this.due_time=t.due_time,this.goodsForm.bind_id=t.bind_id,this.goodsForm.box_number=t.box_number,this.id=t.id,this.name=t.big_name,this.goodsForm.officina_id=String(t.officina_id);var i=[];i.push(t.yaoprovince),i.push(t.yaocity),i.push(t.yaoarea),this.officinaprovince=t.yaoprovince,this.officinacity=t.yaocity,this.officinaarea=t.yaoarea,console.log(i),this.value1=i;var s={token:sessionStorage.getItem("token"),province:this.officinaprovince,city:this.officinacity,area:this.officinaarea};Object(r["Nb"])(s).then((function(e){a.list=e.data.data}))}},close:function(){this.dialogVisible=!1,this.goodsForm.box_name="",this.goodsForm.box_number="",this.value1="",this.goodsForm.officina_id="",this.list=[],this.list1=[],this.name=""},checked:function(){console.log(11)},go:function(){this.$router.go(-1)},submitForm:function(){var e=this;1==this.typeid?this.$refs.goodsForm.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}i=sessionStorage.getItem("token"),e.token=i,s={token:sessionStorage.getItem("token"),box_name:e.goodsForm.box_name,box_number:e.goodsForm.box_number,position_id:e.id,officina_id:e.goodsForm.officina_id},Object(r["s"])(s).then((function(t){200==t.data.code?(e.$message.success("成功"),e.$parent.getUserList(),e.close()):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close())})),t.next=8;break;case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()):this.$refs.goodsForm.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(a){var i,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}i=sessionStorage.getItem("token"),e.token=i,s={token:sessionStorage.getItem("token"),box_name:e.goodsForm.box_name,box_number:e.goodsForm.box_number,position_id:e.id,id:e.goodsForm.bind_id,officina_id:e.goodsForm.officina_id},Object(r["t"])(s).then((function(t){200==t.data.code?(e.$message.success("成功"),e.$parent.getUserList(),e.close()):(e.$message.error(t.data.msg),e.$parent.getUserList(),e.close())})),t.next=8;break;case 7:return t.abrupt("return",!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},j=O,$=(a("8556"),Object(b["a"])(j,F,S,!1,null,null,null)),D=$.exports,I={name:"user",components:{pageTable:c["a"],editData:g,fenRun:w,upSet:D},data:function(){var e;return e={box_uid:"",box_name:"",id:"",areaArr:[],form:{value1:"",value2:"",value3:""},province:"",city:"",type:"",sta:""},Object(l["a"])(e,"box_name",""),Object(l["a"])(e,"area",""),Object(l["a"])(e,"userList",[]),Object(l["a"])(e,"time",""),Object(l["a"])(e,"page",{currentPage:1,pageSize:10,total:0}),e},watch:{time:function(e){null==e&&(this.time=[])}},created:function(){this.getUserList(),this.setData(Object(u["a"])()),this.areaArr=Object(u["a"])()},mounted:function(){},computed:{},methods:{setData:function(e){var t=this;e.map((function(e){e["value"]=e.code,e["label"]=e.name,e.children&&t.setData(e.children)}))},change:function(e){console.log(e),this.province=e[0],this.city=e[1],this.area=e[2]},add:function(){this.$refs.editData.show(1,{})},addup:function(e,t){var a=t;this.$refs.upSet.show(1,JSON.parse(JSON.stringify(a)))},editup:function(e,t){var a=t;this.$refs.upSet.show(2,JSON.parse(JSON.stringify(a)))},deleteData:function(e){var t=this;this.$confirm("是否删除此信息？","提示",{type:"warning"}).then(Object(o["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:e.id,i={token:sessionStorage.getItem("token"),id:e.id},Object(r["cc"])(i).then((function(e){200==e.data.code&&(t.getUserList(),t.$message.success("删除成功"))}));case 3:case"end":return a.stop()}}),a)})))).catch((function(){}))},formatStr:function(e){return e?"".concat(e.substr(0,4)):""},fenrun:function(e,t){var a=t;this.$refs.editData.show(2,JSON.parse(JSON.stringify(a)))},showtable:function(e){var t=e;this.$refs.fenRun.show(JSON.parse(JSON.stringify(t)))},checkPermission:n["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},searchinfo:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:1,limit:this.page.pageSize,token:sessionStorage.getItem("token"),box_name:this.box_name,uid:this.box_uid,id:this.id,province:this.province,type:this.type,city:this.city,bind:this.sta,area:this.area,time1:this.time[0],time2:this.time[1]};Object(r["ec"])(a).then((function(t){e.page.total=t.data.count,e.userList=t.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},getUserList:function(){var e,t=this,a=sessionStorage.getItem("token");this.token=a;var i=(e={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token")},Object(l["a"])(e,"limit",this.page.pageSize),Object(l["a"])(e,"token",sessionStorage.getItem("token")),Object(l["a"])(e,"box_name",this.box_name),Object(l["a"])(e,"box_uid",this.box_uid),Object(l["a"])(e,"id",this.id),Object(l["a"])(e,"province",this.province),Object(l["a"])(e,"type",this.type),Object(l["a"])(e,"city",this.city),Object(l["a"])(e,"area",this.area),Object(l["a"])(e,"time1",this.time[0]),Object(l["a"])(e,"time2",this.time[1]),e);Object(r["ec"])(i).then((function(e){t.page.total=e.data.count,t.userList=e.data.data,t.$refs.dataTable.setPageInfo({total:t.page.total})}))}}},L=I,V=Object(b["a"])(L,i,s,!1,null,"0fc8fc22",null);t["default"]=V.exports},b9ba:function(e,t,a){},feab:function(e,t,a){}}]);
//# sourceMappingURL=chunk-5dfc548d.16b6f520.js.map