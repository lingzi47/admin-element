(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-158102ee"],{"12ad":function(e,t,r){"use strict";r("8a6c")},"31af":function(e,t,r){},"3c98":function(e,t,r){"use strict";r("f28a")},"408a":function(e,t,r){var a=r("e330");e.exports=a(1..valueOf)},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("e330"),o=r("1d80"),n=r("577e"),i=r("5899"),s=a("".replace),l="["+i+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),d=function(e){return function(t){var r=n(o(t));return 1&e&&(r=s(r,c,"")),2&e&&(r=s(r,u,"")),r}};e.exports={start:d(1),end:d(2),trim:d(3)}},"8a6c":function(e,t,r){},a9e3:function(e,t,r){"use strict";var a=r("83ab"),o=r("da84"),n=r("e330"),i=r("94ca"),s=r("6eeb"),l=r("1a2d"),c=r("7156"),u=r("3a9b"),d=r("d9b5"),g=r("c04e"),p=r("d039"),f=r("241c").f,m=r("06cf").f,b=r("9bf2").f,h=r("408a"),v=r("58a8").trim,_="Number",k=o[_],w=k.prototype,y=o.TypeError,x=n("".slice),S=n("".charCodeAt),F=function(e){var t=g(e,"number");return"bigint"==typeof t?t:$(t)},$=function(e){var t,r,a,o,n,i,s,l,c=g(e,"number");if(d(c))throw y("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=v(c),t=S(c,0),43===t||45===t){if(r=S(c,2),88===r||120===r)return NaN}else if(48===t){switch(S(c,1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+c}for(n=x(c,2),i=n.length,s=0;s<i;s++)if(l=S(n,s),l<48||l>o)return NaN;return parseInt(n,a)}return+c};if(i(_,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var N,I=function(e){var t=arguments.length<1?0:k(F(e)),r=this;return u(w,r)&&p((function(){h(r)}))?c(Object(t),r,I):t},P=a?f(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),C=0;P.length>C;C++)l(k,N=P[C])&&!l(I,N)&&b(I,N,m(k,N));I.prototype=w,w.constructor=I,s(o,_,I)}},e3d9:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-table"},[r("el-table",e._g(e._b({ref:"pageTable",attrs:{data:e.data,border:"",stripe:""}},"el-table",e.$attrs,!1),e.$listeners),[e._t("default")],2),r("div",{directives:[{name:"show",rawName:"v-show",value:e.paging,expression:"paging"}],staticClass:"page-pagination"},[r("el-pagination",e._g(e._b({attrs:{"current-page":e.currPage,"page-size":e.pageNum,total:e.totalNum,"page-sizes":[10,15,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.changePageSize,"current-change":e.changePageCurrent}},"el-pagination",e.$attrs,!1),e.$listeners))],1)],1)},o=[],n=(r("a9e3"),{name:"PageTable",props:{data:{type:Array,require:!0,default:function(e){return[]}},paging:{type:Boolean,default:!0},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0}},data:function(){return{currPage:this.currentPage,pageNum:this.pageSize,totalNum:this.total,selectData:[]}},created:function(){},mounted:function(){},computed:{},watch:{},methods:{setPageInfo:function(e){this.totalNum=e.total},changePageSize:function(e){this.pageNum=e,this.currPage=1,this.$emit("changeCurrentPage",1,e)},changePageCurrent:function(e){this.currPage=e,this.$emit("changeCurrentPage",e,this.pageNum)}}}),i=n,s=(r("12ad"),r("2877")),l=Object(s["a"])(i,a,o,!1,null,null,null);t["a"]=l.exports},e549:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"user"},[r("el-form",{attrs:{rules:e.rules,"label-width":"auto"}},[r("el-row",{attrs:{gutter:24}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"名称:",prop:"name"}},[e._v(" "+e._s(e.name))])],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"是否为特殊分润模式:",prop:"is_special"}},[e._v(e._s(e.is_special)+" ")])],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"设备号:",prop:"remark"}},[e._v(e._s(e.device_num)+" ")])],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"备注:",prop:"remark"}},[e._v(e._s(e.remark)+" ")])],1)],1)],1),r("el-button",{attrs:{type:"primary",plain:"",id:"btn"},on:{click:function(t){return e.add(e.id)}}},[e._v("新增")]),r("el-table",{staticStyle:{width:"80%"},attrs:{data:e.third,border:""}},[r("el-table-column",{attrs:{prop:"level",label:"分润等级",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["A"==t.row.level?r("el-link",[e._v("A")]):e._e(),"B"==t.row.level?r("el-link",[e._v("B")]):e._e(),"C"==t.row.level?r("el-link",[e._v("C")]):e._e(),"D"==t.row.level?r("el-link",[e._v("部门销售费用")]):e._e(),"E"==t.row.level?r("el-link",[e._v("部门销售费用")]):e._e(),"F"==t.row.level?r("el-link",[e._v("部门销售费用")]):e._e()]}}])}),r("el-table-column",{attrs:{prop:"details",label:"三年分润",align:"center"}}),r("el-table-column",{attrs:{label:"操作",width:"180px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(r){return e.dataedit(t.row)}}},[e._v("编辑")]),r("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:function(r){return e.deleteData(t.row)}}},[e._v("删除")])]}}])})],1),r("el-button",{attrs:{type:"primary",plain:"",id:"btn"},on:{click:function(t){return e.add1(e.id)}}},[e._v("新增")]),r("el-table",{staticStyle:{width:"80%"},attrs:{data:e.five,border:""}},[r("el-table-column",{attrs:{prop:"level",label:"分润等级",width:"150px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["A"==t.row.level?r("el-link",[e._v("A")]):e._e(),"B"==t.row.level?r("el-link",[e._v("B")]):e._e(),"C"==t.row.level?r("el-link",[e._v("C")]):e._e(),"D"==t.row.level?r("el-link",[e._v("部门销售费用")]):e._e(),"E"==t.row.level?r("el-link",[e._v("部门销售费用")]):e._e(),"F"==t.row.level?r("el-link",[e._v("部门销售费用")]):e._e()]}}])}),r("el-table-column",{attrs:{prop:"details",label:"五年分润",align:"center"}}),r("el-table-column",{attrs:{label:"操作",width:"180px",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(r){return e.dataedit(t.row)}}},[e._v("编辑")]),r("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:function(r){return e.deleteData(t.row)}}},[e._v("删除")])]}}])})],1),r("up-set",{ref:"upSet"}),r("fen-run",{ref:"fenRun"})],1)},o=[],n=r("1da1"),i=(r("96cf"),r("b0c0"),r("e9c4"),r("fd03")),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-dialog",{staticClass:"AddDialog",attrs:{title:"新增分润等级",visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[r("el-form",{ref:"goodsForm",attrs:{rules:e.rules,"label-width":"auto",model:e.goodsForm}},[r("el-row",{attrs:{gutter:24}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"等级:",prop:"level"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入等级"},model:{value:e.goodsForm.level,callback:function(t){e.$set(e.goodsForm,"level",t)},expression:"goodsForm.level"}})],1)],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},l=[],c={name:"AddDialog",components:{},data:function(){return{skuList:[],goodsForm:{level:""},id:"",box_type:"",dialogVisible:!1,rules:{level:[{required:!0,message:"请输入等级",trigger:"blur"}]}}},created:function(){},mounted:function(){},methods:{show:function(e,t){console.log(e),this.id=t,this.box_type=e,this.dialogVisible=!0},close:function(){this.dialogVisible=!1,this.goodsForm.level=""},submitForm:function(){var e=this,t={token:sessionStorage.getItem("token"),level:this.goodsForm.level,id:this.id,box_type:this.box_type};Object(i["ob"])(t).then((function(t){200==t.data.code?(e.$message.success("成功"),e.$parent.tableshow(),e.close()):(e.$message.error(t.data.msg),e.$parent.tableshow(),e.close())}))}}},u=c,d=(r("ecee"),r("2877")),g=Object(d["a"])(u,s,l,!1,null,null,null),p=g.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-dialog",{staticClass:"AddDialog",attrs:{title:e.tittle,visible:e.dialogVisible,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[r("el-button",{attrs:{type:"primary",plain:"",id:"btn"},on:{click:function(t){return e.add()}}},[e._v("新增")]),r("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent}},[r("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),r("el-table-column",{attrs:{prop:"level",label:"分润等级",align:"center"}}),r("el-table-column",{attrs:{prop:"profit",label:"分润",align:"center"}}),r("el-table-column",{attrs:{prop:"bonus",label:"绩效",align:"center"}}),r("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"success"},on:{click:function(r){return e.dataedit(t.row)}}},[e._v("编辑")]),r("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:function(r){return e.deleteData(t.row)}}},[e._v("删除")])]}}])})],1)],1),r("el-dialog",{staticClass:"AddDialog",attrs:{title:e.tittle+"级分润"+e.til,visible:e.visable,width:"800px",hegiht:"1000px","close-on-click-modal":!1},on:{"update:visible":function(t){e.visable=t},close:e.closee}},[r("el-form",{ref:"goodsForm",attrs:{rules:e.rules,"label-width":"auto",model:e.goodsForm}},[r("el-row",{attrs:{gutter:24}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"用户:",prop:"number"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入"},model:{value:e.goodsForm.number,callback:function(t){e.$set(e.goodsForm,"number",t)},expression:"goodsForm.number"}})],1)],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"给A分利:",prop:"profit"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入"},model:{value:e.goodsForm.profit,callback:function(t){e.$set(e.goodsForm,"profit",t)},expression:"goodsForm.profit"}})],1)],1),r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"给A绩效:",prop:"bonus"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{placeholder:"请输入"},model:{value:e.goodsForm.bonus,callback:function(t){e.$set(e.goodsForm,"bonus",t)},expression:"goodsForm.bonus"}})],1)],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.closee}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},m=[],b=r("e3d9"),h={name:"AddDialog",components:{pageTable:b["a"]},data:function(){return{dialogVisible:!1,visable:!1,tittle:"",til:"",goodsForm:{number:"",profit:"",bonus:""},id:"",userList:[],page:{currentPage:1,pageSize:10,total:0},type:"",cid:"",rules:{number:[{required:!0,message:"请输入用户",trigger:"blur"}],profit:[{required:!0,message:"请输入分润",trigger:"blur"}],bonus:[{required:!0,message:"请输入绩效",trigger:"blur"}]}}},created:function(){},mounted:function(){},watch:{type:function(e){this.til=2==e?"编辑":"添加"}},methods:{dataedit:function(e){this.type=2,console.log(e),console.log(e.id),this.cid=e.id,this.visable=!0,this.goodsForm.number=e.level[1],this.goodsForm.profit=e.profit,this.goodsForm.bonus=e.bonus},deleteData:function(e){var t=this;console.log(e),this.$confirm("是否删除此信息？","提示",{type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a={token:sessionStorage.getItem("token"),id:e.id},Object(i["tb"])(a).then((function(e){200==e.data.code&&(t.getUserList(),t.$message.success("删除成功"))}));case 2:case"end":return r.stop()}}),r)})))).catch((function(){}))},submitForm:function(){var e=this;2==this.type?(console.log("现在是编辑"),this.$refs.goodsForm.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}a={token:sessionStorage.getItem("token"),id:e.cid,number:e.goodsForm.number,profit:e.goodsForm.profit,bonus:e.goodsForm.bonus},Object(i["Sd"])(a).then((function(t){200==t.data.code?(e.$message.success("成功"),e.getUserList(),e.closee()):(e.$message.error(t.data.msg),e.getUserList(),e.closee())})),t.next=6;break;case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())):(console.log("现在不是编辑"),this.$refs.goodsForm.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}a={token:sessionStorage.getItem("token"),id:e.id,number:e.goodsForm.number,profit:e.goodsForm.profit,bonus:e.goodsForm.bonus},Object(i["nb"])(a).then((function(t){200==t.data.code?(e.$message.success("成功"),e.getUserList(),e.closee()):(e.$message.error(t.data.msg),e.getUserList(),e.closee())})),t.next=6;break;case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},show:function(e){console.log(e),this.tittle=e.level,this.id=e.id,this.dialogVisible=!0,this.getUserList()},close:function(){this.dialogVisible=!1,this.$parent.tableshow()},closee:function(){this.goodsForm.number="",this.goodsForm.profit="",this.goodsForm.bonus="",this.visable=!1,this.dialogVisible=!0,this.$parent.tableshow()},add:function(){this.type=1,this.dialogVisible=!1,this.visable=!0},changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var r={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token"),id:this.id};Object(i["uc"])(r).then((function(t){e.page.total=t.data.data.total,e.userList=t.data.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))}}},v=h,_=Object(d["a"])(v,f,m,!1,null,null,null),k=_.exports,w={components:{upSet:p,fenRun:k},data:function(){return{name:"",is_special:"",remark:"",five:[],device_num:"",third:[],rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}],is_special:[{required:!0,message:"请选择是否为特殊分润",trigger:"blur"}],remark:[{required:!0,message:"请输入备注",trigger:"blur"}]}}},watch:{},created:function(){var e=this.$route.query.row;console.log(e),this.id=e.id,this.name=e.name,this.is_special=e.is_special,this.remark=e.remark,this.tableshow()},mounted:function(){},computed:{},methods:{deleteData:function(e){var t=this;console.log(e,"row"),this.$confirm("是否删除此信息？","提示",{type:"warning"}).then(Object(n["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a={token:sessionStorage.getItem("token"),id:e.id},Object(i["rb"])(a).then((function(e){200==e.data.code&&(t.tableshow(),t.$message.success("删除成功"))}));case 2:case"end":return r.stop()}}),r)})))).catch((function(){}))},dataedit:function(e){var t=e;this.$refs.fenRun.show(JSON.parse(JSON.stringify(t)))},add:function(e){var t=this.id;this.$refs.upSet.show(1,t)},add1:function(e){var t=this.id;this.$refs.upSet.show(2,t)},tableshow:function(){var e=this,t={token:sessionStorage.getItem("token"),id:this.id};Object(i["b"])(t).then((function(t){console.log(t.data.data),e.five=t.data.data.five,e.third=t.data.data.third,e.device_num=t.data.data.res.device_num}))}}},y=w,x=(r("3c98"),Object(d["a"])(y,a,o,!1,null,"05351dce",null));t["default"]=x.exports},ecee:function(e,t,r){"use strict";r("31af")},f28a:function(e,t,r){}}]);
//# sourceMappingURL=chunk-158102ee.3c5d9e52.js.map