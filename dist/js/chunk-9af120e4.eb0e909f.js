(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9af120e4"],{"12ad":function(e,t,r){"use strict";r("8a6c")},"1a94":function(e,t,r){},"408a":function(e,t,r){var a=r("e330");e.exports=a(1..valueOf)},"51fc":function(e,t,r){"use strict";r("1a94")},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("e330"),i=r("1d80"),n=r("577e"),o=r("5899"),s=a("".replace),l="["+o+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),p=function(e){return function(t){var r=n(i(t));return 1&e&&(r=s(r,c,"")),2&e&&(r=s(r,u,"")),r}};e.exports={start:p(1),end:p(2),trim:p(3)}},"8a6c":function(e,t,r){},a9e3:function(e,t,r){"use strict";var a=r("83ab"),i=r("da84"),n=r("e330"),o=r("94ca"),s=r("6eeb"),l=r("1a2d"),c=r("7156"),u=r("3a9b"),p=r("d9b5"),d=r("c04e"),f=r("d039"),m=r("241c").f,g=r("06cf").f,v=r("9bf2").f,b=r("408a"),h=r("58a8").trim,_="Number",y=i[_],k=y.prototype,x=i.TypeError,w=n("".slice),N=n("".charCodeAt),I=function(e){var t=d(e,"number");return"bigint"==typeof t?t:S(t)},S=function(e){var t,r,a,i,n,o,s,l,c=d(e,"number");if(p(c))throw x("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=h(c),t=N(c,0),43===t||45===t){if(r=N(c,2),88===r||120===r)return NaN}else if(48===t){switch(N(c,1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+c}for(n=w(c,2),o=n.length,s=0;s<o;s++)if(l=N(n,s),l<48||l>i)return NaN;return parseInt(n,a)}return+c};if(o(_,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var z,P=function(e){var t=arguments.length<1?0:y(I(e)),r=this;return u(k,r)&&f((function(){b(r)}))?c(Object(t),r,P):t},C=a?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),T=0;C.length>T;T++)l(y,z=C[T])&&!l(P,z)&&v(P,z,g(y,z));P.prototype=k,k.constructor=P,s(i,_,P)}},bade:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("d3b7"),r("caad"),r("2532");var a=r("4360");function i(e){var t=a["a"].getters.permissions;if(e)if("string"===typeof e||e instanceof String){if(-1!=t.indexOf(e))return!0}else if(e instanceof Array&&e.length>0){var r=e;return t.some((function(e){return r.includes(e)}))}return!1}},e3d9:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-table"},[r("el-table",e._g(e._b({ref:"pageTable",attrs:{data:e.data,border:"",stripe:""}},"el-table",e.$attrs,!1),e.$listeners),[e._t("default")],2),r("div",{directives:[{name:"show",rawName:"v-show",value:e.paging,expression:"paging"}],staticClass:"page-pagination"},[r("el-pagination",e._g(e._b({attrs:{"current-page":e.currPage,"page-size":e.pageNum,total:e.totalNum,"page-sizes":[10,15,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.changePageSize,"current-change":e.changePageCurrent}},"el-pagination",e.$attrs,!1),e.$listeners))],1)],1)},i=[],n=(r("a9e3"),{name:"PageTable",props:{data:{type:Array,require:!0,default:function(e){return[]}},paging:{type:Boolean,default:!0},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0}},data:function(){return{currPage:this.currentPage,pageNum:this.pageSize,totalNum:this.total,selectData:[]}},created:function(){},mounted:function(){},computed:{},watch:{},methods:{setPageInfo:function(e){this.totalNum=e.total},changePageSize:function(e){this.pageNum=e,this.currPage=1,this.$emit("changeCurrentPage",1,e)},changePageCurrent:function(e){this.currPage=e,this.$emit("changeCurrentPage",e,this.pageNum)}}}),o=n,s=(r("12ad"),r("2877")),l=Object(s["a"])(o,a,i,!1,null,null,null);t["a"]=l.exports},e79e:function(e,t,r){"use strict";r.d(t,"n",(function(){return s})),r.d(t,"p",(function(){return l})),r.d(t,"o",(function(){return c})),r.d(t,"q",(function(){return u})),r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return d})),r.d(t,"r",(function(){return f})),r.d(t,"f",(function(){return m})),r.d(t,"d",(function(){return g})),r.d(t,"c",(function(){return v})),r.d(t,"e",(function(){return b})),r.d(t,"h",(function(){return h})),r.d(t,"g",(function(){return _})),r.d(t,"i",(function(){return y})),r.d(t,"k",(function(){return k})),r.d(t,"j",(function(){return x})),r.d(t,"l",(function(){return w})),r.d(t,"m",(function(){return N}));var a=r("bc3a"),i=r.n(a),n=i.a.create({baseURL:"https://yujian02.xyz/",timeout:5e3}),o=n,s=function(e){return o.post("/activity/luckadd",e)},l=function(e){return o.post("/activity/lucklist",e)},c=function(e){return o.post("/activity/luckindex",e)},u=function(e){return o.post("/activity/lucksta",e)},p=function(e){return o.post("/activity/couponlist",e)},d=function(e){return o.post("/activity/couponadd",e)},f=function(e){return o.post("/activity/luckstalist",e)},m=function(e){return o.post("/activity/couponsta",e)},g=function(e){return o.post("/activity/couponsetindex",e)},v=function(e){return o.post("/activity/couponset",e)},b=function(e){return o.post("/activity/couponsetsta",e)},h=function(e){return o.post("/activity/coupontaskindex",e)},_=function(e){return o.post("/activity/coupontaskadd",e)},y=function(e){return o.post("/activity/coupontasklist",e)},k=function(e){return o.post("/activity/coupontaskstalist",e)},x=function(e){return o.post("/activity/coupontasksta",e)},w=function(e){return o.post("/shopadmin/financeInfo",e)},N=function(e){return o.post("/shopadmin/financeindex",e)}},f5ba:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("div",{staticClass:"block-quote"},[r("el-form",{ref:"form",attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"支付时间",prop:"title"}},[r("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","picker-options":e.pickerOptions,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),r("el-form-item",{staticStyle:{float:"right"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.ordercensus}},[e._v("查询")])],1)],1)],1),r("el-descriptions",{staticClass:"census",attrs:{title:"订单数据",column:4}},[r("el-descriptions-item",{attrs:{label:"已支付订单数"}},[e._v(e._s(e.orderall))]),r("el-descriptions-item",{attrs:{label:"待发货订单数"}},[e._v(e._s(e.deliver0))]),r("el-descriptions-item",{attrs:{label:"已发货订单数"}},[e._v(e._s(e.deliver1))]),r("el-descriptions-item",{attrs:{label:"已收货订单数"}},[e._v(e._s(e.deliver2))]),r("el-descriptions-item",{attrs:{label:"已支付订单金额"}},[e._v(e._s(e.orderprice))]),r("el-descriptions-item",{attrs:{label:"待发货订单金额"}},[e._v(e._s(e.deliver0price))]),r("el-descriptions-item",{attrs:{label:"已发货订单金额"}},[e._v(e._s(e.deliver1price))]),r("el-descriptions-item",{attrs:{label:"已收货订单金额"}},[e._v(e._s(e.deliver2price))]),r("el-descriptions-item",{attrs:{label:"快递费用总金额"}},[e._v(e._s(e.postageprice))]),r("el-descriptions-item",{attrs:{label:"代金券使用总额"}},[e._v(e._s(e.postageprice))])],1)],1),r("hr"),r("div",{staticClass:"user"},[r("div",{staticClass:"block-quote"},[r("el-form",{ref:"form1",attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"订单号"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入订单号"},model:{value:e.form1.order_no,callback:function(t){e.$set(e.form1,"order_no",t)},expression:"form1.order_no"}})],1),r("el-form-item",{attrs:{label:"订单状态",prop:"pay_status"}},[r("el-select",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请选择订单状态"},model:{value:e.form1.pay_status,callback:function(t){e.$set(e.form1,"pay_status",t)},expression:"form1.pay_status"}},[r("el-option",{attrs:{label:"未付款",value:1}}),r("el-option",{attrs:{label:"已付款",value:2}})],1)],1),r("el-form-item",{attrs:{label:"支付时间",prop:"time"}},[r("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.form1.time,callback:function(t){e.$set(e.form1,"time",t)},expression:"form1.time"}})],1),r("el-form-item",{staticStyle:{float:"right"}},[e.checkPermission("usersearch")?r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.getUserList}},[e._v("查询")]):e._e()],1)],1)],1),r("page-table",{ref:"dataTable",attrs:{data:e.shoporder},on:{changeCurrentPage:e.changeCurrent}},[r("el-table-column",{attrs:{type:"index",fixed:"",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"id",fixed:"",label:"ID",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"order_no",fixed:"",label:"订单号",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"goods_id",fixed:"",label:"商品名称",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"sku_id",fixed:"",align:"center",label:"商品规格",resizable:!1}}),r("el-table-column",{attrs:{prop:"order_price",fixed:"",label:"订单金额",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"postage_price",fixed:"",label:"邮费",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"coupon_price",fixed:"",label:"代金券使用金额",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"pay_price",fixed:"",label:"支付金额",align:"center",resizable:!1}}),r("el-table-column",{attrs:{fixed:"",label:"支付状态",align:"center",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.pay_status?r("el-tag",{attrs:{type:"warning",effect:"dark"}},[e._v("未付款 ")]):e._e(),2==t.row.pay_status?r("el-tag",{attrs:{type:"success",effect:"dark"}},[e._v("已付款")]):e._e()]}}])}),r("el-table-column",{attrs:{fixed:"",label:"订单状态",align:"center",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[1==t.row.deliver_status?r("el-tag",{attrs:{type:"warning",effect:"dark"}},[e._v(" 已发货 ")]):e._e(),2==t.row.deliver_status?r("el-tag",{attrs:{type:"success",effect:"dark"}},[e._v("已评价")]):e._e(),3==t.row.deliver_status?r("el-tag",{attrs:{type:"danger",effect:"dark"}},[e._v("未发货")]):e._e(),0==t.row.deliver_status?r("el-tag",{attrs:{effect:"dark"}},[e._v("已确认")]):e._e()]}}])}),r("el-table-column",{attrs:{prop:"pay_time",fixed:"",align:"center",label:"支付时间",resizable:!1}}),r("el-table-column",{attrs:{prop:"expect",fixed:"",align:"center",label:"预计收入",resizable:!1}})],1)],1)])},i=[],n=r("bade"),o=r("e79e"),s=r("e3d9"),l={components:{pageTable:s["a"]},data:function(){return{census:[],shoporder:[],tableSelectList:[],deliver0:"",deliver0price:"",deliver1:"",deliver1price:"",deliver2:"",deliver2price:"",orderall:"",orderprice:"",postageprice:"",form:{time:""},form1:{pay_status:"",time:"",order_no:""},page:{page:1,limit:10,total:0},pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-6048e5),e.$emit("pick",[r,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-2592e6),e.$emit("pick",[r,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,r=new Date;r.setTime(r.getTime()-7776e6),e.$emit("pick",[r,t])}}]},value1:[new Date(2e3,10,10,10,10),new Date(2e3,10,11,10,10)],value2:""}},watch:{"form.time":function(e){null==e&&(this.form.time=[])},"form1.time":function(e){null==e&&(this.form1.time=[])}},created:function(){this.getUserList(),this.ordercensus()},mounted:function(){},methods:{checkPermission:n["a"],changeCurrent:function(e,t){this.page.currentPage=e,this.page.pageSize=t,this.getUserList()},ordercensus:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var r={token:sessionStorage.getItem("token"),shop_type:1,time1:this.form.time[0],time2:this.form.time[1]};Object(o["l"])(r).then((function(t){e.deliver0=t.data.data.deliver0,e.deliver0price=t.data.data.deliver0price,e.deliver1=t.data.data.deliver1,e.deliver1price=t.data.data.deliver1price,e.deliver2=t.data.data.deliver2,e.deliver2price=t.data.data.deliver2price,e.orderall=t.data.data.orderall,e.orderprice=t.data.data.orderprice,e.postageprice=t.data.data.postageprice}))},getUserList:function(){var e=this,t=sessionStorage.getItem("token");this.token=t;var r={token:sessionStorage.getItem("token"),shop_type:1,page:this.page.currentPage,limit:this.page.pageSize,pay_status:this.form1.pay_status,order_no:this.form1.order_no,time1:this.form1.time[0],time2:this.form1.time[1]};Object(o["m"])(r).then((function(t){e.page.total=t.data.count,e.shoporder=t.data.data,e.$refs.dataTable.setPageInfo({total:e.page.total})}))},open:function(){}}},c=l,u=(r("51fc"),r("2877")),p=Object(u["a"])(c,a,i,!1,null,"632e0c12",null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-9af120e4.eb0e909f.js.map