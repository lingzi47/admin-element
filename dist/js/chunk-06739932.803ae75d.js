(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-06739932"],{"12ad":function(e,t,a){"use strict";a("8a6c")},"408a":function(e,t,a){var r=a("e330");e.exports=r(1..valueOf)},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var r=a("e330"),n=a("1d80"),s=a("577e"),i=a("5899"),o=r("".replace),l="["+i+"]",u=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),d=function(e){return function(t){var a=s(n(t));return 1&e&&(a=o(a,u,"")),2&e&&(a=o(a,c,"")),a}};e.exports={start:d(1),end:d(2),trim:d(3)}},"8a6c":function(e,t,a){},a9e3:function(e,t,a){"use strict";var r=a("83ab"),n=a("da84"),s=a("e330"),i=a("94ca"),o=a("6eeb"),l=a("1a2d"),u=a("7156"),c=a("3a9b"),d=a("d9b5"),p=a("c04e"),g=a("d039"),m=a("241c").f,f=a("06cf").f,b=a("9bf2").f,h=a("408a"),y=a("58a8").trim,v="Number",_=n[v],k=_.prototype,x=n.TypeError,S=s("".slice),w=s("".charCodeAt),N=function(e){var t=p(e,"number");return"bigint"==typeof t?t:I(t)},I=function(e){var t,a,r,n,s,i,o,l,u=p(e,"number");if(d(u))throw x("Cannot convert a Symbol value to a number");if("string"==typeof u&&u.length>2)if(u=y(u),t=w(u,0),43===t||45===t){if(a=w(u,2),88===a||120===a)return NaN}else if(48===t){switch(w(u,1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+u}for(s=S(u,2),i=s.length,o=0;o<i;o++)if(l=w(s,o),l<48||l>n)return NaN;return parseInt(s,r)}return+u};if(i(v,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var F,$=function(e){var t=arguments.length<1?0:_(N(e)),a=this;return c(k,a)&&g((function(){h(a)}))?u(Object(t),a,$):t},P=r?m(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;P.length>E;E++)l(_,F=P[E])&&!l($,F)&&b($,F,f(_,F));$.prototype=k,k.constructor=$,o(n,v,$)}},bade:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("d3b7"),a("caad"),a("2532");var r=a("4360");function n(e){var t=r["a"].getters.permissions;if(e)if("string"===typeof e||e instanceof String){if(-1!=t.indexOf(e))return!0}else if(e instanceof Array&&e.length>0){var a=e;return t.some((function(e){return a.includes(e)}))}return!1}},e3d9:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-table"},[a("el-table",e._g(e._b({ref:"pageTable",attrs:{data:e.data,border:"",stripe:""}},"el-table",e.$attrs,!1),e.$listeners),[e._t("default")],2),a("div",{directives:[{name:"show",rawName:"v-show",value:e.paging,expression:"paging"}],staticClass:"page-pagination"},[a("el-pagination",e._g(e._b({attrs:{"current-page":e.currPage,"page-size":e.pageNum,total:e.totalNum,"page-sizes":[10,15,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.changePageSize,"current-change":e.changePageCurrent}},"el-pagination",e.$attrs,!1),e.$listeners))],1)],1)},n=[],s=(a("a9e3"),{name:"PageTable",props:{data:{type:Array,require:!0,default:function(e){return[]}},paging:{type:Boolean,default:!0},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0}},data:function(){return{currPage:this.currentPage,pageNum:this.pageSize,totalNum:this.total,selectData:[]}},created:function(){},mounted:function(){},computed:{},watch:{},methods:{setPageInfo:function(e){this.totalNum=e.total},changePageSize:function(e){this.pageNum=e,this.currPage=1,this.$emit("changeCurrentPage",1,e)},changePageCurrent:function(e){this.currPage=e,this.$emit("changeCurrentPage",e,this.pageNum)}}}),i=s,o=(a("12ad"),a("2877")),l=Object(o["a"])(i,r,n,!1,null,null,null);t["a"]=l.exports},ed09:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("div",{staticClass:"block-quote"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"商品名称",prop:"username"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入用户名称"},model:{value:e.goods_name,callback:function(t){e.goods_name=t},expression:"goods_name"}})],1),a("el-form-item",{attrs:{label:"赠送方式",prop:"member"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},[a("el-option",{attrs:{label:"全部方式",value:""}}),a("el-option",{attrs:{label:"首次赠送",value:"2"}}),a("el-option",{attrs:{label:"重复赠送",value:"1"}})],1)],1),a("el-form-item",{attrs:{label:"审核状态",prop:"member"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.ex_status,callback:function(t){e.ex_status=t},expression:"ex_status"}},[a("el-option",{attrs:{label:"全部状态",value:""}}),a("el-option",{attrs:{label:"待审核",value:"0"}}),a("el-option",{attrs:{label:"已通过",value:"1"}}),a("el-option",{attrs:{label:"未通过",value:"2"}})],1)],1),a("el-form-item",{attrs:{label:"注册时间",prop:"time"}},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd HH:mm:ss","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),a("el-form-item",{staticStyle:{float:"right"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("新增")]),e.checkPermission("usersearch")?a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchinfo}},[e._v("搜索")]):e._e()],1)],1)],1),a("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{prop:"goods_name",label:"商品名称",align:"center"}}),a("el-table-column",{attrs:{label:"赠送会员时长",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.days)+"日")])]}}])}),a("el-table-column",{attrs:{prop:"type",label:"赠送方式",align:"center"}}),a("el-table-column",{attrs:{prop:"created_at",label:"创建时间",align:"center"}}),a("el-table-column",{attrs:{prop:"ex_status",label:"审核状态",align:"center"}}),a("el-table-column",{attrs:{prop:"ex_uname",label:"审核人",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.editData(2,t.row)}}},[e._v("修改")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.deleteData(t.row)}}},[e._v("删除")])]}}])})],1),a("edit-data",{ref:"editData"})],1)},n=[],s=a("1da1"),i=(a("96cf"),a("e9c4"),a("fd03")),o=a("bade"),l=a("e3d9"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"AddDialog",attrs:{title:1==e.type?"新增":"编辑",visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"auto"}},[a("el-row",{attrs:{gutter:15}},[a("el-col",{attrs:{span:15}},[a("el-form-item",{attrs:{label:"商品id",prop:"gid"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入商品id"},model:{value:e.ruleForm.gid,callback:function(t){e.$set(e.ruleForm,"gid",t)},expression:"ruleForm.gid"}})],1)],1),a("el-col",{attrs:{span:15}},[a("el-form-item",{attrs:{label:"赠送会员时长",prop:"days"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入赠送会员时长"},model:{value:e.ruleForm.days,callback:function(t){e.$set(e.ruleForm,"days",t)},expression:"ruleForm.days"}})],1)],1),a("el-col",{attrs:{span:15}},[a("el-form-item",{attrs:{label:"请选择赠送方式",prop:"type"}},[a("el-radio-group",{model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[a("el-radio",{attrs:{label:1}},[e._v("首次赠送")]),a("el-radio",{attrs:{label:2}},[e._v("重复赠送")])],1)],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},c=[],d={name:"AddDialog",components:{},data:function(){return{id:"",token:"",type:"",dialogVisible:!1,ruleForm:{id:"",time:"",type:""},rules:{gid:[{required:!0,message:"请输入商品id",trigger:"blur"}],days:[{required:!0,message:"请输入会员时长",trigger:"blur"}],type:[{required:!0,message:"请选择赠送方式",trigger:"blur"}]}}},created:function(){this.getUserEdit()},mounted:function(){},methods:{getUserEdit:function(){},show:function(e,t){var a=this;if(this.type=e,this.dialogVisible=!0,1==e)this.ruleForm={gid:"",days:"",type:""};else{var r=t.id;this.id=r;var n={token:sessionStorage.getItem("token"),id:r};Object(i["rb"])(n).then((function(e){a.ruleForm=e.data.data}))}},close:function(){var e=this;this.dialogVisible=!1,this.$nextTick((function(){e.$refs.ruleForm.clearValidate()}))},submitForm:function(){var e=this;this.$refs.ruleForm.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var r,n,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=6;break}1==e.type?(r=sessionStorage.getItem("token"),e.token=r,n={gid:e.ruleForm.gid,days:e.ruleForm.days,token:sessionStorage.getItem("token"),type:e.ruleForm.type},Object(i["pb"])(n).then((function(t){200==t.data.code?(e.$message.success("新增成功"),e.$parent.getUserList(),e.close()):e.$message.error("商品id不存在")}))):(s=sessionStorage.getItem("token"),e.token=s,e.id,o={gid:e.ruleForm.gid,days:e.ruleForm.days,token:sessionStorage.getItem("token"),type:e.ruleForm.type,id:e.id},Object(i["qb"])(o).then((function(t){200==t.data.code?(e.$message.success("编辑成功"),e.$parent.getUserList(),e.close()):e.$message.error("商品id不存在")}))),e.$parent.getUserList(),e.close(),t.next=7;break;case 6:return t.abrupt("return",!1);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},p=d,g=a("2877"),m=Object(g["a"])(p,u,c,!1,null,null,null),f=m.exports,b={name:"user",components:{pageTable:l["a"],editData:f},data:function(){return{userList:[],goods_name:"",type:"",time:"",ex_status:"",page:{currentPage:1,pageSize:10,total:0}}},watch:{time:function(e){null==e&&(this.time=[])}},created:function(){this.getUserList()},mounted:function(){},computed:{},methods:{add:function(){this.$refs.editData.show(1,{})},editData:function(e,t){var a=t;this.$refs.editData.show(2,JSON.parse(JSON.stringify(a)))},checkPermission:o["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},searchinfo:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:1,limit:this.page.pageSize,token:sessionStorage.getItem("token"),goods_name:this.goods_name,type:this.type,ex_status:this.ex_status,s_time:this.time[0],e_time:this.time[1]};Object(i["jb"])(a).then((function(t){e.page.total=t.data.data.total,e.userList=t.data.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token"),goods_name:this.goods_name,type:this.type,ex_status:this.ex_status,s_time:this.time[0],e_time:this.time[1]};Object(i["jb"])(a).then((function(t){e.page.total=t.data.data.total,e.userList=t.data.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},deleteData:function(e){var t=this;this.$confirm("是否删除此信息？","提示",{type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r={id:e.id,token:sessionStorage.getItem("token")},Object(i["mb"])(r).then((function(e){200==e.status&&(t.getUserList(),t.$message.success("删除成功"))}));case 2:case"end":return a.stop()}}),a)})))).catch((function(){}))}}},h=b,y=Object(g["a"])(h,r,n,!1,null,"28d56f6d",null);t["default"]=y.exports}}]);
//# sourceMappingURL=chunk-06739932.803ae75d.js.map