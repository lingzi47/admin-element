(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34ac51ef"],{"12ad":function(e,t,a){"use strict";a("8a6c")},"2ca5":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.go()}}},[e._v("返回上一级")]),a("page-table",{ref:"dataTable",attrs:{data:e.userList},on:{changeCurrentPage:e.changeCurrent,"selection-change":e.getSelection}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s((e.page.currentPage-1)*e.page.pageSize+t.$index+1))])]}}])}),a("el-table-column",{attrs:{prop:"name",label:"任务",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v("钻石提现获得钻石体现数值的千分之"+e._s(t.row.num)+"张"+e._s(t.row.coupon_name))])]}}])}),a("el-table-column",{attrs:{prop:"created_at",label:"提交时间",align:"center"}}),a("el-table-column",{attrs:{prop:"sta_name",label:"审核人",align:"center"}}),a("el-table-column",{attrs:{prop:"sta_time",label:"审核时间",align:"center"}}),a("el-table-column",{attrs:{label:"审核状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[10==t.row.sta?a("el-tag",{attrs:{type:"warning",effect:"dark"}},[e._v("待审核 ")]):e._e(),20==t.row.sta?a("el-tag",{attrs:{type:"success",effect:"dark"}},[e._v("已通过")]):e._e(),30==t.row.sta?a("el-tag",{attrs:{type:"danger",effect:"dark"}},[e._v("已拒绝")]):e._e()]}}])})],1)],1)},r=[],s=a("1da1"),i=(a("96cf"),a("e9c4"),a("fd03")),u=a("bade"),o=a("e3d9"),c={name:"user",components:{pageTable:o["a"]},data:function(){return{baseUrl:"http://y6.wjw.cool/",rolesList:[],userList:[],arr:[],name:"",sta:"",page:{currentPage:1,pageSize:10,total:0},tableSelectList:[]}},watch:{},created:function(){this.getUserList()},mounted:function(){},computed:{},methods:{go:function(){this.$router.back()},open:function(){this.$refs.editData.show()},checkPermission:u["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},getSelection:function(e){this.tableSelectList=e},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var a={page:this.page.currentPage,limit:this.page.pageSize,token:sessionStorage.getItem("token")};Object(i["ib"])(a).then((function(t){e.page.total=t.data.count,e.userList=t.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},addData:function(){this.$refs.addData.show(1,{})},userShow:function(e){this.$router.push({path:"/userShow",query:{id:e.id}})},nextUser:function(e){this.$router.push({path:"/nextUser",query:{id:e.id}})},editData:function(e){var t=e;this.$refs.editData.show(JSON.parse(JSON.stringify(t)))},deleteData:function(e,t){var a=this;1==e&&1==this.tableSelectList.length||2==e?this.$confirm("是否删除此用户？","提示",{type:"warning"}).then(Object(s["a"])(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=1==e?a.tableSelectList[0]:t,n.next=3,deleteUser({id:r.id});case 3:s=n.sent,200==s.status&&(a.getUserList(),a.$message.success("删除成功"));case 5:case"end":return n.stop()}}),n)})))).catch((function(){})):this.$message.warning("请选择一条数据删除")}}},l=c,g=a("2877"),f=Object(g["a"])(l,n,r,!1,null,"65df9084",null);t["default"]=f.exports},"408a":function(e,t,a){var n=a("e330");e.exports=n(1..valueOf)},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var n=a("e330"),r=a("1d80"),s=a("577e"),i=a("5899"),u=n("".replace),o="["+i+"]",c=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),g=function(e){return function(t){var a=s(r(t));return 1&e&&(a=u(a,c,"")),2&e&&(a=u(a,l,"")),a}};e.exports={start:g(1),end:g(2),trim:g(3)}},"8a6c":function(e,t,a){},a9e3:function(e,t,a){"use strict";var n=a("83ab"),r=a("da84"),s=a("e330"),i=a("94ca"),u=a("6eeb"),o=a("1a2d"),c=a("7156"),l=a("3a9b"),g=a("d9b5"),f=a("c04e"),p=a("d039"),d=a("241c").f,h=a("06cf").f,b=a("9bf2").f,m=a("408a"),v=a("58a8").trim,_="Number",N=r[_],w=N.prototype,S=r.TypeError,y=s("".slice),P=s("".charCodeAt),I=function(e){var t=f(e,"number");return"bigint"==typeof t?t:$(t)},$=function(e){var t,a,n,r,s,i,u,o,c=f(e,"number");if(g(c))throw S("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=v(c),t=P(c,0),43===t||45===t){if(a=P(c,2),88===a||120===a)return NaN}else if(48===t){switch(P(c,1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+c}for(s=y(c,2),i=s.length,u=0;u<i;u++)if(o=P(s,u),o<48||o>r)return NaN;return parseInt(s,n)}return+c};if(i(_,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var k,E=function(e){var t=arguments.length<1?0:N(I(e)),a=this;return l(w,a)&&p((function(){m(a)}))?c(Object(t),a,E):t},x=n?d(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),L=0;x.length>L;L++)o(N,k=x[L])&&!o(E,k)&&b(E,k,h(N,k));E.prototype=w,w.constructor=E,u(r,_,E)}},bade:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("d3b7"),a("caad"),a("2532");var n=a("4360");function r(e){var t=n["a"].getters.permissions;if(e)if("string"===typeof e||e instanceof String){if(-1!=t.indexOf(e))return!0}else if(e instanceof Array&&e.length>0){var a=e;return t.some((function(e){return a.includes(e)}))}return!1}},e3d9:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-table"},[a("el-table",e._g(e._b({ref:"pageTable",attrs:{data:e.data,border:"",stripe:""}},"el-table",e.$attrs,!1),e.$listeners),[e._t("default")],2),a("div",{directives:[{name:"show",rawName:"v-show",value:e.paging,expression:"paging"}],staticClass:"page-pagination"},[a("el-pagination",e._g(e._b({attrs:{"current-page":e.currPage,"page-size":e.pageNum,total:e.totalNum,"page-sizes":[10,15,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.changePageSize,"current-change":e.changePageCurrent}},"el-pagination",e.$attrs,!1),e.$listeners))],1)],1)},r=[],s=(a("a9e3"),{name:"PageTable",props:{data:{type:Array,require:!0,default:function(e){return[]}},paging:{type:Boolean,default:!0},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0}},data:function(){return{currPage:this.currentPage,pageNum:this.pageSize,totalNum:this.total,selectData:[]}},created:function(){},mounted:function(){},computed:{},watch:{},methods:{setPageInfo:function(e){this.totalNum=e.total},changePageSize:function(e){this.pageNum=e,this.currPage=1,this.$emit("changeCurrentPage",1,e)},changePageCurrent:function(e){this.currPage=e,this.$emit("changeCurrentPage",e,this.pageNum)}}}),i=s,u=(a("12ad"),a("2877")),o=Object(u["a"])(i,n,r,!1,null,null,null);t["a"]=o.exports}}]);
//# sourceMappingURL=chunk-34ac51ef.a0961db9.js.map