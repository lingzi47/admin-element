(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f28d7c0"],{"12ad":function(e,t,a){"use strict";a("8a6c")},"408a":function(e,t,a){var r=a("e330");e.exports=r(1..valueOf)},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var r=a("e330"),n=a("1d80"),s=a("577e"),i=a("5899"),l=r("".replace),o="["+i+"]",u=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),m=function(e){return function(t){var a=s(n(t));return 1&e&&(a=l(a,u,"")),2&e&&(a=l(a,c,"")),a}};e.exports={start:m(1),end:m(2),trim:m(3)}},"8a6c":function(e,t,a){},"9c11":function(e,t,a){},a9e3:function(e,t,a){"use strict";var r=a("83ab"),n=a("da84"),s=a("e330"),i=a("94ca"),l=a("6eeb"),o=a("1a2d"),u=a("7156"),c=a("3a9b"),m=a("d9b5"),p=a("c04e"),f=a("d039"),g=a("241c").f,d=a("06cf").f,h=a("9bf2").f,b=a("408a"),v=a("58a8").trim,y="Number",_=n[y],x=_.prototype,k=n.TypeError,S=s("".slice),w=s("".charCodeAt),N=function(e){var t=p(e,"number");return"bigint"==typeof t?t:$(t)},$=function(e){var t,a,r,n,s,i,l,o,u=p(e,"number");if(m(u))throw k("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=v(u),t=w(u,0),43===t||45===t){if(a=w(u,2),88===a||120===a)return NaN}else if(48===t){switch(w(u,1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+u}for(s=S(u,2),i=s.length,l=0;l<i;l++)if(o=w(s,l),o<48||o>n)return NaN;return parseInt(s,r)}return+u};if(i(y,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var F,P=function(e){var t=arguments.length<1?0:_(N(e)),a=this;return c(x,a)&&f((function(){b(a)}))?u(Object(t),a,P):t},I=r?g(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;I.length>E;E++)o(_,F=I[E])&&!o(P,F)&&h(P,F,d(_,F));P.prototype=x,x.constructor=P,l(n,y,P)}},b9ae:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("div",{staticClass:"block-quote"},[a("el-form",{ref:"form",attrs:{inline:!0,model:e.form}},[a("el-form-item",{attrs:{label:"审核状态",prop:"member"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.form.ex_status,callback:function(t){e.$set(e.form,"ex_status",t)},expression:"form.ex_status"}},[a("el-option",{attrs:{label:"全部状态",value:""}}),a("el-option",{attrs:{label:"待审核",value:"0"}}),a("el-option",{attrs:{label:"已通过",value:"1"}}),a("el-option",{attrs:{label:"未通过",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"版本号",prop:"member"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入版本号"},model:{value:e.form.version,callback:function(t){e.$set(e.form,"version",t)},expression:"form.version"}})],1),a("el-form-item",{attrs:{label:"审核人",prop:"member"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入版本号"},model:{value:e.form.ex_name,callback:function(t){e.$set(e.form,"ex_name",t)},expression:"form.ex_name"}})],1),a("el-form-item",{attrs:{label:"时间",prop:"time"}},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),a("el-form-item",{staticStyle:{float:"right"}},[e.checkPermission("usersearch")?a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getUserList}},[e._v("查询")]):e._e(),a("el-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.open()}}},[e._v("添加")])],1)],1)],1),a("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent,"selection-change":e.getSelection}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{prop:"version",label:"版本号",align:"center"}}),a("el-table-column",{attrs:{prop:"url",label:"版本地址",align:"center"}}),a("el-table-column",{attrs:{prop:"created_at",label:"版本提交时间",align:"center"}}),a("el-table-column",{attrs:{label:"审核状态",prop:"ex_status",align:"center"}}),a("el-table-column",{attrs:{prop:"ex_name",label:"审核人",align:"center"}}),a("el-table-column",{attrs:{prop:"ex_time",label:"审核时间",align:"center"}}),a("el-table-column",{attrs:{label:"操作",width:"193",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("查看")])]}}])})],1),a("edit-data",{ref:"editData"})],1)},n=[],s=a("1da1"),i=(a("96cf"),a("e9c4"),a("fd03")),l=a("bade"),o=a("e3d9"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"editData"},[a("el-dialog",{attrs:{title:"版本新增",visible:e.dialogVisible,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"auto"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:15}},[a("el-form-item",{attrs:{label:"版本号",prop:"version"}},[a("el-input",{attrs:{placeholder:"例如：1.0.1"},model:{value:e.ruleForm.version,callback:function(t){e.$set(e.ruleForm,"version",t)},expression:"ruleForm.version"}})],1)],1),a("el-col",{attrs:{span:15}},[a("el-form-item",{attrs:{label:"版本地址",prop:"url"}},[a("el-input",{attrs:{placeholder:"例如：https://www.baidu.com/"},model:{value:e.ruleForm.url,callback:function(t){e.$set(e.ruleForm,"url",t)},expression:"ruleForm.url"}})],1)],1),a("el-col",{attrs:{span:15}},[a("el-form-item",{attrs:{label:"设备",prop:"type"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[a("el-option",{attrs:{label:"ios",value:"1"}}),a("el-option",{attrs:{label:"安卓",value:"2"}})],1)],1)],1),a("el-col",{attrs:{span:15}},[a("el-form-item",{attrs:{label:"版本说明",prop:"remarks"}},[a("el-input",{attrs:{type:"textarea",placeholder:"例如：1.修复了已知bug。"},model:{value:e.ruleForm.remarks,callback:function(t){e.$set(e.ruleForm,"remarks",t)},expression:"ruleForm.remarks"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},c=[],m=a("ade3"),p={name:"AddDialog",components:{},data:function(){var e;return e={imageUrl:!1},Object(m["a"])(e,"imageUrl",""),Object(m["a"])(e,"ruleForm",{version:"",url:"",type:"",remarks:""}),Object(m["a"])(e,"img",""),Object(m["a"])(e,"rules",{version:[{required:!0,message:"请输入版本号",trigger:"blur"}],url:[{required:!0,message:"请输入版本地址",trigger:"blur"}],type:[{required:!0,message:"请选择设备",trigger:"blur"}],remarks:[{required:!0,message:"请输入",trigger:"blur"}]}),Object(m["a"])(e,"dialogVisible",!1),e},created:function(){},mounted:function(){},methods:{show:function(){this.dialogVisible=!0},close:function(){this.dialogVisible=!1},submitForm:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={token:sessionStorage.getItem("token"),version:this.ruleForm.version,url:this.ruleForm.url,remarks:this.ruleForm.remarks,type:this.ruleForm.type};Object(i["Gc"])(a).then((function(t){200==t.data.code&&(e.$message.success("新增成功"),e.close(),e.$parent.getUserList())}))}}},f=p,g=(a("d42f"),a("2877")),d=Object(g["a"])(f,u,c,!1,null,null,null),h=d.exports,b={name:"user",components:{pageTable:o["a"],editData:h},data:function(){return{rolesList:[],userList:[],arr:[],form:{version:"",ex_name:"",ex_status:"",time:"",id:""},page:{currentPage:1,pageSize:10,total:0},tableSelectList:[]}},watch:{"form.time":function(e){null==e&&(this.form.time=[])}},created:function(){this.getUserList()},mounted:function(){},computed:{},methods:{open:function(){this.$refs.editData.show()},handleClick:function(e){this.$router.push({path:"/versionshow",query:{id:e.id}})},checkPermission:l["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},getSelection:function(e){this.tableSelectList=e},getUserList:function(){var e=this;if(null===this.form.time){this.form.time}var t=sessionStorage.getItem("token");this.token=t;var a={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token"),version:this.form.version,ex_name:this.form.ex_name,ex_status:this.form.ex_status,start_time:this.form.time[0],end_time:this.form.time[1]};Object(i["Kc"])(a).then((function(t){e.page.total=t.data.data.total,e.page.currentPage=t.data.data.current_page,e.userList=t.data.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},addData:function(){this.$refs.addData.show(1,{})},userShow:function(e){this.$router.push({path:"/userShow",query:{id:e.id}})},nextUser:function(e){this.$router.push({path:"/nextUser",query:{id:e.id}})},editData:function(e){var t=e;this.$refs.editData.show(JSON.parse(JSON.stringify(t)))},deleteData:function(e,t){var a=this;1==e&&1==this.tableSelectList.length||2==e?this.$confirm("是否删除此用户？","提示",{type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function r(){var n,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=1==e?a.tableSelectList[0]:t,r.next=3,deleteUser({id:n.id});case 3:s=r.sent,200==s.status&&(a.getUserList(),a.$message.success("删除成功"));case 5:case"end":return r.stop()}}),r)})))).catch((function(){})):this.$message.warning("请选择一条数据删除")}}},v=b,y=Object(g["a"])(v,r,n,!1,null,"63e69cda",null);t["default"]=y.exports},bade:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("d3b7"),a("caad"),a("2532");var r=a("4360");function n(e){var t=r["a"].getters.permissions;if(e)if("string"===typeof e||e instanceof String){if(-1!=t.indexOf(e))return!0}else if(e instanceof Array&&e.length>0){var a=e;return t.some((function(e){return a.includes(e)}))}return!1}},d42f:function(e,t,a){"use strict";a("9c11")},e3d9:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-table"},[a("el-table",e._g(e._b({ref:"pageTable",attrs:{data:e.data,border:"",stripe:""}},"el-table",e.$attrs,!1),e.$listeners),[e._t("default")],2),a("div",{directives:[{name:"show",rawName:"v-show",value:e.paging,expression:"paging"}],staticClass:"page-pagination"},[a("el-pagination",e._g(e._b({attrs:{"current-page":e.currPage,"page-size":e.pageNum,total:e.totalNum,"page-sizes":[10,15,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.changePageSize,"current-change":e.changePageCurrent}},"el-pagination",e.$attrs,!1),e.$listeners))],1)],1)},n=[],s=(a("a9e3"),{name:"PageTable",props:{data:{type:Array,require:!0,default:function(e){return[]}},paging:{type:Boolean,default:!0},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0}},data:function(){return{currPage:this.currentPage,pageNum:this.pageSize,totalNum:this.total,selectData:[]}},created:function(){},mounted:function(){},computed:{},watch:{},methods:{setPageInfo:function(e){this.totalNum=e.total},changePageSize:function(e){this.pageNum=e,this.currPage=1,this.$emit("changeCurrentPage",1,e)},changePageCurrent:function(e){this.currPage=e,this.$emit("changeCurrentPage",e,this.pageNum)}}}),i=s,l=(a("12ad"),a("2877")),o=Object(l["a"])(i,r,n,!1,null,null,null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-4f28d7c0.10bb1cc8.js.map