(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32463ed0"],{"12ad":function(e,t,a){"use strict";a("8a6c")},"1c95":function(e,t,a){},"408a":function(e,t,a){var r=a("e330");e.exports=r(1..valueOf)},5871:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("el-form",{attrs:{rules:e.rules,"label-width":"auto"}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"名称:",prop:"name"}},[e._v(" "+e._s(e.name))])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"是否为特殊分润模式:",prop:"is_special"}},[e._v(e._s(e.is_special)+" ")])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"设备号:",prop:"remark"}},[e._v(e._s(e.device_num)+" ")])],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注:",prop:"remark"}},[e._v(e._s(e.remark)+" ")])],1)],1)],1),a("el-table",{staticStyle:{width:"80%"},attrs:{data:e.third,border:""}},[a("el-table-column",{attrs:{prop:"level",label:"用户等级",width:"100px",align:"center"}}),a("el-table-column",{attrs:{prop:"details",label:"三年分润",align:"center"}})],1),a("el-table",{staticStyle:{width:"80%"},attrs:{data:e.five,border:""}},[a("el-table-column",{attrs:{prop:"level",label:"用户等级",width:"100px",align:"center"}}),a("el-table-column",{attrs:{prop:"details",label:"五年分润",align:"center"}})],1),a("up-set",{ref:"upSet"}),a("fen-run",{ref:"fenRun"})],1)},o=[],s=a("1da1"),i=(a("96cf"),a("b0c0"),a("e9c4"),a("fd03")),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"AddDialog",attrs:{title:"新增分润等级",visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{ref:"goodsForm",attrs:{rules:e.rules,"label-width":"auto",model:e.goodsForm}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"等级:",prop:"level"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入等级"},model:{value:e.goodsForm.level,callback:function(t){e.$set(e.goodsForm,"level",t)},expression:"goodsForm.level"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},l=[],c={name:"AddDialog",components:{},data:function(){return{skuList:[],goodsForm:{level:""},id:"",box_type:"",dialogVisible:!1,rules:{level:[{required:!0,message:"请输入等级",trigger:"blur"}]}}},created:function(){},mounted:function(){},methods:{show:function(e,t){console.log(e),this.id=t,this.box_type=e,this.dialogVisible=!0},close:function(){this.dialogVisible=!1,this.goodsForm.level=""},submitForm:function(){var e=this,t={token:sessionStorage.getItem("token"),level:this.goodsForm.level,id:this.id,box_type:this.box_type};Object(i["V"])(t).then((function(t){200==t.data.code?(e.$message.success("成功"),e.$parent.tableshow(),e.close()):(e.$message.error(t.data.msg),e.$parent.tableshow(),e.close())}))}}},u=c,d=(a("5f5e"),a("2877")),g=Object(d["a"])(u,n,l,!1,null,null,null),p=g.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{staticClass:"AddDialog",attrs:{title:e.tittle,visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-button",{attrs:{type:"primary",plain:"",id:"btn"},on:{click:function(t){return e.add()}}},[e._v("新增")]),a("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{prop:"level",label:"分润等级",align:"center"}}),a("el-table-column",{attrs:{prop:"profit",label:"分润",align:"center"}}),a("el-table-column",{attrs:{prop:"bonus",label:"绩效",align:"center"}}),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(a){return e.dataedit(t.row)}}},[e._v("编辑")]),a("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:function(a){return e.deleteData(t.row)}}},[e._v("删除")])]}}])})],1)],1),a("el-dialog",{staticClass:"AddDialog",attrs:{title:e.tittle+"级分润编辑",visible:e.visable,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.visable=t},close:e.closee}},[a("el-form",{ref:"goodsForm",attrs:{rules:e.rules,"label-width":"auto",model:e.goodsForm}},[a("el-row",{attrs:{gutter:24}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"用户:",prop:"number"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入"},model:{value:e.goodsForm.number,callback:function(t){e.$set(e.goodsForm,"number",t)},expression:"goodsForm.number"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"给A分利:",prop:"profit"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入"},model:{value:e.goodsForm.profit,callback:function(t){e.$set(e.goodsForm,"profit",t)},expression:"goodsForm.profit"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"给A绩效:",prop:"bonus"}},[a("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入"},model:{value:e.goodsForm.bonus,callback:function(t){e.$set(e.goodsForm,"bonus",t)},expression:"goodsForm.bonus"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},f=[],b=a("e3d9"),h={name:"AddDialog",components:{pageTable:b["a"]},data:function(){return{dialogVisible:!1,visable:!1,tittle:"",goodsForm:{number:"",profit:"",bonus:""},id:"",userList:[],page:{currentPage:1,pageSize:10,total:0},type:"",cid:"",rules:{number:[{required:!0,message:"请输入用户",trigger:"blur"}],profit:[{required:!0,message:"请输入分润",trigger:"blur"}],bonus:[{required:!0,message:"请输入绩效",trigger:"blur"}]}}},created:function(){},mounted:function(){},methods:{dataedit:function(e){this.type=2,console.log(e),console.log(e.id),this.cid=e.id,this.visable=!0,this.goodsForm.number=e.level[1],this.goodsForm.profit=e.profit,this.goodsForm.bonus=e.bonus},deleteData:function(e){var t=this;console.log(e),this.$confirm("是否删除此信息？","提示",{type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r={token:sessionStorage.getItem("token"),id:e.id},Object(i["ab"])(r).then((function(e){200==e.data.code&&(t.getUserList(),t.$message.success("删除成功"))}));case 2:case"end":return a.stop()}}),a)})))).catch((function(){}))},submitForm:function(){var e=this;2==this.type?(console.log("现在是编辑"),this.$refs.goodsForm.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}r={token:sessionStorage.getItem("token"),id:e.cid,number:e.goodsForm.number,profit:e.goodsForm.profit,bonus:e.goodsForm.bonus},Object(i["Lc"])(r).then((function(t){200==t.data.code?(e.$message.success("成功"),e.getUserList(),e.closee()):(e.$message.error(t.data.msg),e.getUserList(),e.closee())})),t.next=6;break;case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())):this.$refs.goodsForm.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=5;break}r={token:sessionStorage.getItem("token"),id:e.id,number:e.goodsForm.number,profit:e.goodsForm.profit,bonus:e.goodsForm.bonus},Object(i["U"])(r).then((function(t){200==t.data.code?(e.$message.success("成功"),e.getUserList(),e.closee()):(e.$message.error(t.data.msg),e.getUserList(),e.closee())})),t.next=6;break;case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},show:function(e){console.log(e),this.tittle=e.level,this.id=e.id,this.dialogVisible=!0,this.getUserList()},close:function(){this.dialogVisible=!1,this.$parent.tableshow()},closee:function(){this.goodsForm.number="",this.goodsForm.profit="",this.goodsForm.bonus="",this.visable=!1,this.dialogVisible=!0,this.$parent.tableshow()},add:function(){this.typoe=1,this.dialogVisible=!1,this.visable=!0},changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token"),id:this.id};Object(i["Hb"])(a).then((function(t){e.page.total=t.data.data.total,e.userList=t.data.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))}}},v=h,w=Object(d["a"])(v,m,f,!1,null,null,null),k=w.exports,_={components:{upSet:p,fenRun:k},data:function(){return{name:"",is_special:"",remark:"",device_num:"",five:[],third:[],rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],is_special:[{required:!0,message:"请选择是否为特殊分润",trigger:"blur"}],remark:[{required:!0,message:"请输入备注",trigger:"blur"}]}}},watch:{},created:function(){var e=this.$route.query.row;console.log(e),this.id=e.id,this.name=e.name,this.is_special=e.is_special,this.remark=e.remark,this.tableshow()},mounted:function(){},computed:{},methods:{deleteData:function(e){var t=this;console.log(e),this.$confirm("是否删除此信息？","提示",{type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r={token:sessionStorage.getItem("token"),id:e.id},Object(i["Y"])(r).then((function(e){200==e.data.code&&(t.tableshow(),t.$message.success("删除成功"))}));case 2:case"end":return a.stop()}}),a)})))).catch((function(){}))},dataedit:function(e){var t=e;this.$refs.fenRun.show(JSON.parse(JSON.stringify(t)))},add:function(e){var t=this.id;this.$refs.upSet.show(1,t)},add1:function(e){var t=this.id;this.$refs.upSet.show(2,t)},tableshow:function(){var e=this,t={token:sessionStorage.getItem("token"),id:this.id};Object(i["b"])(t).then((function(t){console.log(t.data.data),e.five=t.data.data.five,e.third=t.data.data.third,e.device_num=t.data.data.res.device_num,console.log(t.data.data.res)}))}}},y=_,F=(a("6efd"),Object(d["a"])(y,r,o,!1,null,"da1444ba",null));t["default"]=F.exports},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var r=a("e330"),o=a("1d80"),s=a("577e"),i=a("5899"),n=r("".replace),l="["+i+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),d=function(e){return function(t){var a=s(o(t));return 1&e&&(a=n(a,c,"")),2&e&&(a=n(a,u,"")),a}};e.exports={start:d(1),end:d(2),trim:d(3)}},"5f5e":function(e,t,a){"use strict";a("1c95")},"6efd":function(e,t,a){"use strict";a("a542")},"8a6c":function(e,t,a){},a542:function(e,t,a){},a9e3:function(e,t,a){"use strict";var r=a("83ab"),o=a("da84"),s=a("e330"),i=a("94ca"),n=a("6eeb"),l=a("1a2d"),c=a("7156"),u=a("3a9b"),d=a("d9b5"),g=a("c04e"),p=a("d039"),m=a("241c").f,f=a("06cf").f,b=a("9bf2").f,h=a("408a"),v=a("58a8").trim,w="Number",k=o[w],_=k.prototype,y=o.TypeError,F=s("".slice),x=s("".charCodeAt),S=function(e){var t=g(e,"number");return"bigint"==typeof t?t:$(t)},$=function(e){var t,a,r,o,s,i,n,l,c=g(e,"number");if(d(c))throw y("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=v(c),t=x(c,0),43===t||45===t){if(a=x(c,2),88===a||120===a)return NaN}else if(48===t){switch(x(c,1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+c}for(s=F(c,2),i=s.length,n=0;n<i;n++)if(l=x(s,n),l<48||l>o)return NaN;return parseInt(s,r)}return+c};if(i(w,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var N,I=function(e){var t=arguments.length<1?0:k(S(e)),a=this;return u(_,a)&&p((function(){h(a)}))?c(Object(t),a,I):t},P=r?m(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;P.length>O;O++)l(k,N=P[O])&&!l(I,N)&&b(I,N,f(k,N));I.prototype=_,_.constructor=I,n(o,w,I)}},e3d9:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-table"},[a("el-table",e._g(e._b({ref:"pageTable",attrs:{data:e.data,border:"",stripe:""}},"el-table",e.$attrs,!1),e.$listeners),[e._t("default")],2),a("div",{directives:[{name:"show",rawName:"v-show",value:e.paging,expression:"paging"}],staticClass:"page-pagination"},[a("el-pagination",e._g(e._b({attrs:{"current-page":e.currPage,"page-size":e.pageNum,total:e.totalNum,"page-sizes":[10,15,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.changePageSize,"current-change":e.changePageCurrent}},"el-pagination",e.$attrs,!1),e.$listeners))],1)],1)},o=[],s=(a("a9e3"),{name:"PageTable",props:{data:{type:Array,require:!0,default:function(e){return[]}},paging:{type:Boolean,default:!0},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0}},data:function(){return{currPage:this.currentPage,pageNum:this.pageSize,totalNum:this.total,selectData:[]}},created:function(){},mounted:function(){},computed:{},watch:{},methods:{setPageInfo:function(e){this.totalNum=e.total},changePageSize:function(e){this.pageNum=e,this.currPage=1,this.$emit("changeCurrentPage",1,e)},changePageCurrent:function(e){this.currPage=e,this.$emit("changeCurrentPage",e,this.pageNum)}}}),i=s,n=(a("12ad"),a("2877")),l=Object(n["a"])(i,r,o,!1,null,null,null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-32463ed0.84042e26.js.map