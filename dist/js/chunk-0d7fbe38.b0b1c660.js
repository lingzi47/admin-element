(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d7fbe38"],{"12ad":function(e,t,a){"use strict";a("8a6c")},"13bd":function(e,t,a){"use strict";a("b7270")},"1d88":function(e,t,a){"use strict";a("c572")},"408a":function(e,t,a){var i=a("e330");e.exports=i(1..valueOf)},"4be4":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"user"},[a("div",{staticClass:"block-quote"},[a("el-form",{ref:"form",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"id"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入id"},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}})],1),a("el-form-item",{attrs:{label:"购买价格",prop:"box_type"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"2500",value:"2500"}}),a("el-option",{attrs:{label:"1875",value:"1875"}}),a("el-option",{attrs:{label:"1700",value:"1700"}}),a("el-option",{attrs:{label:"1580",value:"1580"}})],1)],1),a("el-form-item",{attrs:{label:"购买方式",prop:"box_type"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.buy_type,callback:function(t){e.buy_type=t},expression:"buy_type"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"前台购买",value:"10"}}),a("el-option",{attrs:{label:"后台购买",value:"20"}})],1)],1),a("el-form-item",{attrs:{label:"审核状态",prop:"box_type"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.sta,callback:function(t){e.sta=t},expression:"sta"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"待审核",value:"10"}}),a("el-option",{attrs:{label:"通过",value:"20"}}),a("el-option",{attrs:{label:"拒绝",value:"30"}})],1)],1),a("el-form-item",{attrs:{label:"拼单状态",prop:"box_type"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.is_pin,callback:function(t){e.is_pin=t},expression:"is_pin"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"已拼成",value:"10"}}),a("el-option",{attrs:{label:"未拼成",value:"20"}})],1)],1),a("el-form-item",{attrs:{label:"时间",prop:"time"}},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),a("el-form-item",{staticStyle:{float:"right"}},[e.checkPermission("operationsearch")?a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchinfo}},[e._v("搜索")]):e._e(),a("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("添加")]),a("el-button",{on:{click:e.dao}},[e._v("导出")])],1)],1)],1),a("page-table",{ref:"dataTable",attrs:{data:e.shoporder},on:{changeCurrentPage:e.changeCurrent}},[a("el-table-column",{attrs:{label:"序号",align:"center",width:"130",fixed:"",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.page.page-1)*e.page.limit+t.$index+1))])]}}])}),a("el-table-column",{attrs:{prop:"uid",fixed:"",label:"id",align:"center",resizable:!1}}),a("el-table-column",{attrs:{prop:"nickname",fixed:"",label:"用户名称",align:"center",resizable:!1}}),a("el-table-column",{attrs:{prop:"phone",fixed:"",align:"center",label:"联系方式",resizable:!1}}),a("el-table-column",{attrs:{fixed:"",label:"所属团队",align:"center",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.box_team?a("el-link",[e._v("全国")]):e._e(),2==t.row.box_team?a("el-link",[e._v("大连")]):e._e(),3==t.row.box_team?a("el-link",[e._v("大庆")]):e._e(),null==t.row.box_team?a("el-link",{attrs:{type:"danger"}},[e._v("暂无")]):e._e()]}}])}),a("el-table-column",{attrs:{fixed:"",label:"拼单状态",align:"center",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[10==t.row.is_pin?a("el-link",{attrs:{type:"success"}},[e._v("已拼成")]):e._e(),20==t.row.is_pin?a("el-link",{attrs:{type:"danger"}},[e._v("未拼成")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"price",fixed:"",label:"价格",align:"center",resizable:!1}}),a("el-table-column",{attrs:{prop:"box_name",fixed:"",label:"设备租赁号",align:"center",resizable:!1}}),a("el-table-column",{attrs:{prop:"buy_type",fixed:"",label:"购买方式",align:"center",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[10==t.row.buy_type?a("el-link",{attrs:{type:"success"}},[e._v("前台购买")]):e._e(),20==t.row.buy_type?a("el-link",{attrs:{type:"danger"}},[e._v("后台购买")]):e._e()]}}])}),a("el-table-column",{attrs:{prop:"buy_time",fixed:"",label:"购买时间",align:"center",resizable:!1}}),a("el-table-column",{attrs:{fixed:"",label:"审核状态",align:"center",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[10==t.row.sta?a("el-link",{attrs:{type:"primary"}},[e._v("待审核")]):e._e(),20==t.row.sta?a("el-link",{attrs:{type:"success"}},[e._v("已通过")]):e._e(),30==t.row.sta?a("el-link",{attrs:{type:"danger"}},[e._v("未通过")]):e._e()]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center",resizable:!1,width:"180px"},scopedSlots:e._u([{key:"default",fn:function(t){return[2==t.row.hetong?a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(a){return e.fenrun(1,t.row)}}},[e._v("上传合同")]):e._e(),1==t.row.hetong?a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:function(a){return e.fenrun(2,t.row)}}},[e._v("修改合同")]):e._e(),1==t.row.hetong?a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(a){return e.fenrun(3,t.row)}}},[e._v("查看合同")]):e._e()]}}])})],1),a("edit-data",{ref:"editData"}),a("fen-run",{ref:"fenRun"})],1)])},r=[],l=(a("e9c4"),a("bade")),o=a("fd03"),n=a("e3d9"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"AddDialog",attrs:{title:"新增拼单",visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"auto"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:15}},[a("el-form-item",{attrs:{label:"购买价格",prop:"price"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"请选择"},model:{value:e.ruleForm.price,callback:function(t){e.$set(e.ruleForm,"price",t)},expression:"ruleForm.price"}},[a("el-option",{attrs:{label:"2500",value:"2500"}}),a("el-option",{attrs:{label:"1875",value:"1875"}}),a("el-option",{attrs:{label:"1700",value:"1700"}}),a("el-option",{attrs:{label:"1580",value:"1580"}})],1)],1)],1),a("el-col",{attrs:{span:15}},[a("el-form-item",{attrs:{label:"用户id",prop:"uid"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入用户id"},model:{value:e.ruleForm.uid,callback:function(t){e.$set(e.ruleForm,"uid",t)},expression:"ruleForm.uid"}})],1)],1),a("el-col",{attrs:{span:15}},[a("el-form-item",{attrs:{label:"联系方式",prop:"phone"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入联系方式"},model:{value:e.ruleForm.phone,callback:function(t){e.$set(e.ruleForm,"phone",t)},expression:"ruleForm.phone"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},c=[],u=a("1da1"),p=(a("96cf"),{name:"AddDialog",components:{},data:function(){return{token:"",dialogVisible:!1,ruleForm:{uid:"",phone:"",price:""},rules:{price:[{required:!0,message:"请选择购买价格",trigger:"blur"}],uid:[{required:!0,message:"请输入绑定id",trigger:"blur"}],phone:[{required:!0,message:"请输入联系方式",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}]}}},watch:{},created:function(){},mounted:function(){},methods:{show:function(e,t){this.dialogVisible=!0},close:function(){this.dialogVisible=!1,this.ruleForm.phone="",this.ruleForm.uid="",this.ruleForm.price=""},submitForm:function(){var e=this;this.$refs.ruleForm.validate(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(a){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}i={token:sessionStorage.getItem("token"),uid:e.ruleForm.uid,phone:e.ruleForm.phone,price:e.ruleForm.price},Object(o["k"])(i).then((function(t){200==t.data.code?(e.$message.success("新增成功"),e.$parent.shoporderlist(),e.close(),e.dialogVisible=!1):(e.$message.error(t.data.msg),e.$parent.shoporderlist(),e.close(),e.dialogVisible=!1)})),t.next=6;break;case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}),d=p,m=(a("13bd"),a("2877")),f=Object(m["a"])(d,s,c,!1,null,null,null),g=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"AddDialog",attrs:{title:e.title,visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"auto"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:10}},["查看合同"!==e.title?a("el-form-item",{attrs:{label:"合同",prop:"goods_img"}},[a("el-upload",{staticClass:"avatar-uploader1",attrs:{action:"https://y4.wjw.cool/command/ossUpload?filename=file","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?a("img",{staticClass:"avatar1",attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon1"})])],1):e._e()],1),"查看合同"==e.title?a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"合同",prop:"goods_img"}},[e.imageUrl?a("img",{staticStyle:{},attrs:{src:e.imageUrl}}):e._e()])],1):e._e()],1)],1),"查看合同"!==e.title?a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1):e._e()],1)],1)},h=[],_={name:"AddDialog",components:{pageTable:n["a"]},data:function(){return{id:"",title:"",imageUrl:"",dialogVisible:!1,ruleForm:{goods_img:""},rules:{goods_img:[{required:!0,message:"请上传合同照片",trigger:"blur"}]}}},created:function(){},mounted:function(){},methods:{submitForm:function(){var e=this;this.$refs.ruleForm.validate(function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(a){var i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=4;break}"上传合同"==e.title?(console.log("上传"),i={token:sessionStorage.getItem("token"),img:e.ruleForm.goods_img,list_id:e.id},Object(o["m"])(i).then((function(t){200==t.data.code?(e.$message.success("上传成功"),e.$parent.shoporderlist(),e.close(),e.dialogVisible=!1):(e.$message.error(t.data.msg),e.$parent.shoporderlist(),e.close(),e.dialogVisible=!1)}))):(r={token:sessionStorage.getItem("token"),img:e.ruleForm.goods_img,list_id:e.id},Object(o["n"])(r).then((function(t){200==t.data.code?(e.$message.success("修改成功"),e.$parent.shoporderlist(),e.close(),e.dialogVisible=!1):(e.$message.error(t.data.msg),e.$parent.shoporderlist(),e.close(),e.dialogVisible=!1)}))),t.next=5;break;case 4:return t.abrupt("return",!1);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},show:function(e,t){console.log(e),this.dialogVisible=!0,console.log(t),this.id=t.id,1==e?this.title="上传合同":2==e?(this.title="修改合同",this.huo()):(this.title="查看合同",this.huo())},huo:function(){var e=this,t={token:sessionStorage.getItem("token"),list_id:this.id};Object(o["o"])(t).then((function(t){console.log(t.data.data),e.ruleForm.goods_img=t.data.data.img,e.imageUrl=t.data.data.img}))},close:function(){this.dialogVisible=!1,this.ruleForm.goods_img="",this.imageUrl=""},handleAvatarSuccess:function(e,t){var a=e.data;this.imageUrl=a,this.ruleForm.goods_img=a},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传图片大小不能超过 2MB!"),t}}},v=_,y=(a("897a"),Object(m["a"])(v,b,h,!1,null,null,null)),k=y.exports,x={name:"specialorder",components:{pageTable:n["a"],editData:g,fenRun:k},data:function(){return{shoporder:[],buy_type:"",is_pin:"",sta:"",time:"",id:"",price:"",page:{page:1,limit:10,total:0}}},watch:{time:function(e){null==e&&(this.time=[])}},created:function(){this.shoporderlist()},mounted:function(){},methods:{dao:function(){this.token=sessionStorage.getItem("token"),void 0==this.time[1]?window.location.href="https://y4.wjw.cool/manybox/tuilistexport?token="+this.token+"&price="+this.price+"&id="+this.id+"&buy_type="+this.buy_type+"&sta="+this.sta+"&is_pin="+this.is_pin:window.location.href="https://y4.wjw.cool/manybox/tuilistexport?token="+this.token+"&price="+this.price+"&id="+this.id+"&buy_type="+this.buy_type+"&sta="+this.sta+"&is_pin="+this.is_pin+"&time1="+this.time[0]+"&time2="+this.time[1]},shoporderlist:function(){var e=this,t={token:sessionStorage.getItem("token"),uid:this.id,sta:this.sta,is_pin:this.is_pin,buy_type:this.buy_type,price:this.price,page:this.page.page,limit:this.page.limit,time1:this.time[0],time2:this.time[1]};Object(o["pd"])(t).then((function(t){e.shoporder=t.data.data,e.page.total=t.data.count,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},searchinfo:function(){var e=this,t={token:sessionStorage.getItem("token"),uid:this.id,sta:this.sta,is_pin:this.is_pin,buy_type:this.buy_type,price:this.price,page:1,limit:this.page.limit,time1:this.time[0],time2:this.time[1]};Object(o["pd"])(t).then((function(t){e.shoporder=t.data.data,e.page.total=t.data.count,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},checkPermission:l["a"],changeCurrent:function(e,t){this.page.page=e,this.page.limit=t,this.shoporderlist()},add:function(){this.$refs.editData.show(1,{})},fenrun:function(e,t){var a=t;this.$refs.fenRun.show(e,JSON.parse(JSON.stringify(a)))}}},w=x,S=(a("1d88"),Object(m["a"])(w,i,r,!1,null,"5e61e7c8",null));t["default"]=S.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var i=a("e330"),r=a("1d80"),l=a("577e"),o=a("5899"),n=i("".replace),s="["+o+"]",c=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),p=function(e){return function(t){var a=l(r(t));return 1&e&&(a=n(a,c,"")),2&e&&(a=n(a,u,"")),a}};e.exports={start:p(1),end:p(2),trim:p(3)}},"897a":function(e,t,a){"use strict";a("a3cd")},"8a6c":function(e,t,a){},a3cd:function(e,t,a){},a9e3:function(e,t,a){"use strict";var i=a("83ab"),r=a("da84"),l=a("e330"),o=a("94ca"),n=a("6eeb"),s=a("1a2d"),c=a("7156"),u=a("3a9b"),p=a("d9b5"),d=a("c04e"),m=a("d039"),f=a("241c").f,g=a("06cf").f,b=a("9bf2").f,h=a("408a"),_=a("58a8").trim,v="Number",y=r[v],k=y.prototype,x=r.TypeError,w=l("".slice),S=l("".charCodeAt),F=function(e){var t=d(e,"number");return"bigint"==typeof t?t:$(t)},$=function(e){var t,a,i,r,l,o,n,s,c=d(e,"number");if(p(c))throw x("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=_(c),t=S(c,0),43===t||45===t){if(a=S(c,2),88===a||120===a)return NaN}else if(48===t){switch(S(c,1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(l=w(c,2),o=l.length,n=0;n<o;n++)if(s=S(l,n),s<48||s>r)return NaN;return parseInt(l,i)}return+c};if(o(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var N,I=function(e){var t=arguments.length<1?0:y(F(e)),a=this;return u(k,a)&&m((function(){h(a)}))?c(Object(t),a,I):t},V=i?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),z=0;V.length>z;z++)s(y,N=V[z])&&!s(I,N)&&b(I,N,g(y,N));I.prototype=k,k.constructor=I,n(r,v,I)}},b7270:function(e,t,a){},bade:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("d3b7"),a("caad"),a("2532");var i=a("4360");function r(e){var t=i["a"].getters.permissions;if(e)if("string"===typeof e||e instanceof String){if(-1!=t.indexOf(e))return!0}else if(e instanceof Array&&e.length>0){var a=e;return t.some((function(e){return a.includes(e)}))}return!1}},c572:function(e,t,a){},e3d9:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-table"},[a("el-table",e._g(e._b({ref:"pageTable",attrs:{data:e.data,border:"",stripe:""}},"el-table",e.$attrs,!1),e.$listeners),[e._t("default")],2),a("div",{directives:[{name:"show",rawName:"v-show",value:e.paging,expression:"paging"}],staticClass:"page-pagination"},[a("el-pagination",e._g(e._b({attrs:{"current-page":e.currPage,"page-size":e.pageNum,total:e.totalNum,"page-sizes":[10,15,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.changePageSize,"current-change":e.changePageCurrent}},"el-pagination",e.$attrs,!1),e.$listeners))],1)],1)},r=[],l=(a("a9e3"),{name:"PageTable",props:{data:{type:Array,require:!0,default:function(e){return[]}},paging:{type:Boolean,default:!0},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0}},data:function(){return{currPage:this.currentPage,pageNum:this.pageSize,totalNum:this.total,selectData:[]}},created:function(){},mounted:function(){},computed:{},watch:{},methods:{setPageInfo:function(e){this.totalNum=e.total},changePageSize:function(e){this.pageNum=e,this.currPage=1,this.$emit("changeCurrentPage",1,e)},changePageCurrent:function(e){this.currPage=e,this.$emit("changeCurrentPage",e,this.pageNum)}}}),o=l,n=(a("12ad"),a("2877")),s=Object(n["a"])(o,i,r,!1,null,null,null);t["a"]=s.exports}}]);
//# sourceMappingURL=chunk-0d7fbe38.b0b1c660.js.map