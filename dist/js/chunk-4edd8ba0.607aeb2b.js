(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4edd8ba0"],{"12ad":function(e,t,r){"use strict";r("8a6c")},"1aca":function(e,t,r){"use strict";r("714f")},"408a":function(e,t,r){var a=r("e330");e.exports=a(1..valueOf)},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("e330"),n=r("1d80"),o=r("577e"),s=r("5899"),i=a("".replace),l="["+s+"]",c=RegExp("^"+l+l+"*"),u=RegExp(l+l+"*$"),d=function(e){return function(t){var r=o(n(t));return 1&e&&(r=i(r,c,"")),2&e&&(r=i(r,u,"")),r}};e.exports={start:d(1),end:d(2),trim:d(3)}},"714f":function(e,t,r){},"8a6c":function(e,t,r){},a9e3:function(e,t,r){"use strict";var a=r("83ab"),n=r("da84"),o=r("e330"),s=r("94ca"),i=r("6eeb"),l=r("1a2d"),c=r("7156"),u=r("3a9b"),d=r("d9b5"),p=r("c04e"),m=r("d039"),f=r("241c").f,h=r("06cf").f,b=r("9bf2").f,g=r("408a"),_=r("58a8").trim,v="Number",y=n[v],k=y.prototype,w=n.TypeError,x=o("".slice),O=o("".charCodeAt),S=function(e){var t=p(e,"number");return"bigint"==typeof t?t:j(t)},j=function(e){var t,r,a,n,o,s,i,l,c=p(e,"number");if(d(c))throw w("Cannot convert a Symbol value to a number");if("string"==typeof c&&c.length>2)if(c=_(c),t=O(c,0),43===t||45===t){if(r=O(c,2),88===r||120===r)return NaN}else if(48===t){switch(O(c,1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+c}for(o=x(c,2),s=o.length,i=0;i<s;i++)if(l=O(o,i),l<48||l>n)return NaN;return parseInt(o,a)}return+c};if(s(v,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var I,z=function(e){var t=arguments.length<1?0:y(S(e)),r=this;return u(k,r)&&m((function(){g(r)}))?c(Object(t),r,z):t},N=a?f(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),$=0;N.length>$;$++)l(y,I=N[$])&&!l(z,I)&&b(z,I,h(y,I));z.prototype=k,k.constructor=z,i(n,v,z)}},bade:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("d3b7"),r("caad"),r("2532");var a=r("4360");function n(e){var t=a["a"].getters.permissions;if(e)if("string"===typeof e||e instanceof String){if(-1!=t.indexOf(e))return!0}else if(e instanceof Array&&e.length>0){var r=e;return t.some((function(e){return r.includes(e)}))}return!1}},e391:function(e,t,r){"use strict";r.r(t);var a,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("div",{staticClass:"block-quote"},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"支付时间",prop:"title"}},[r("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1),r("el-form-item",{staticStyle:{float:"right"}},[e.checkPermission("operationsearch")?r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fond}},[e._v("搜索")]):e._e()],1)],1)],1),r("el-descriptions",{staticClass:"census",attrs:{title:"订单数据",column:4}},[r("el-descriptions-item",{attrs:{label:"已支付订单数"}},[e._v(e._s(e.census.orderall))]),r("el-descriptions-item",{attrs:{label:"待发货订单数"}},[e._v(e._s(e.census.deliver0))]),r("el-descriptions-item",{attrs:{label:"已发货订单数"}},[e._v(e._s(e.census.deliver1))]),r("el-descriptions-item",{attrs:{label:"已收货订单数"}},[e._v(e._s(e.census.deliver2))]),r("el-descriptions-item",{attrs:{label:"已支付订单金额"}},[e._v(e._s(e.census.orderprice))]),r("el-descriptions-item",{attrs:{label:"待发货订单金额"}},[e._v(e._s(e.census.deliver0price))]),r("el-descriptions-item",{attrs:{label:"已发货订单金额"}},[e._v(e._s(e.census.deliver1price))]),r("el-descriptions-item",{attrs:{label:"已收货订单金额"}},[e._v(e._s(e.census.deliver2price))]),r("el-descriptions-item",{attrs:{label:"快递费用总金额"}},[e._v(e._s(e.census.postageprice))]),r("el-descriptions-item",{attrs:{label:"代金券使用总额"}},[e._v(e._s(e.census.postageprice))])],1)],1),r("hr"),r("div",{staticClass:"user"},[r("div",{staticClass:"block-quote"},[r("el-form",{ref:"form",attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"订单号",prop:"order_no"}},[r("el-input",{staticStyle:{width:"170px"},attrs:{clearable:"",placeholder:"请输入订单号"},model:{value:e.form.order_no,callback:function(t){e.$set(e.form,"order_no",t)},expression:"form.order_no"}})],1),r("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[r("el-input",{staticStyle:{width:"170px"},attrs:{clearable:"",placeholder:"请输入商品名称"},model:{value:e.form.goods_name,callback:function(t){e.$set(e.form,"goods_name",t)},expression:"form.goods_name"}})],1),r("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[r("el-input",{staticStyle:{width:"170px"},attrs:{clearable:"",placeholder:"请输入手机号"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),r("el-form-item",{attrs:{label:"收件人姓名",prop:"name"}},[r("el-input",{staticStyle:{width:"170px"},attrs:{clearable:"",placeholder:"请输入收件人姓名"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"订单状态",prop:"order_status"}},[r("el-select",{staticStyle:{width:"170px"},attrs:{clearable:"",placeholder:"请选择订单状态"},model:{value:e.form.order_status,callback:function(t){e.$set(e.form,"order_status",t)},expression:"form.order_status"}},[r("el-option",{attrs:{label:"全部状态",value:0}}),r("el-option",{attrs:{label:"待付款",value:1}}),r("el-option",{attrs:{label:"已付款",value:2}}),r("el-option",{attrs:{label:"已取消",value:3}}),r("el-option",{attrs:{label:"退款",value:4}})],1)],1),r("el-form-item",{attrs:{label:"标签",prop:"label"}},[r("el-input",{staticStyle:{width:"170px"},attrs:{clearable:"",placeholder:"请输入"},model:{value:e.form.label,callback:function(t){e.$set(e.form,"label",t)},expression:"form.label"}})],1),r("el-form-item",{attrs:{label:"时间",prop:"time"}},[r("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}})],1),r("el-form-item",{staticStyle:{float:"right"}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchinfo}},[e._v("搜索")]),r("el-button",{on:{click:e.dao}},[e._v("导出")])],1)],1)],1),r("page-table",{ref:"dataTable",attrs:{data:e.shoporder},on:{changeCurrentPage:e.changeCurrent}},[r("el-table-column",{attrs:{prop:"user_id",label:"用户ID",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"user_name",label:"用户名",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"buy_user",label:"收件人",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"buy_address",label:"收货地址",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"buy_phone",label:"手机号",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"order_no",label:"订单号",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"goods_name",label:"商品名称",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"sku_id",align:"center",label:"商品规格",resizable:!1}}),r("el-table-column",{attrs:{prop:"number",align:"center",label:"购买数量",resizable:!1}}),r("el-table-column",{attrs:{prop:"order_price",label:"订单金额",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"commission",label:"佣金",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"postage_price",label:"邮费",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"coupon_price",label:"代金券",align:"center",resizable:!1}}),r("el-table-column",{attrs:{prop:"pay_price",label:"支付金额",align:"center",resizable:!1}}),r("el-table-column",{attrs:{label:"支付状态",align:"center",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return["已付款"==t.row.pay_status?r("el-link",{attrs:{type:"success"}},[e._v("已付款")]):e._e(),"未付款"==t.row.pay_status?r("el-link",{attrs:{type:"primary"}},[e._v("未付款")]):e._e(),"退款"==t.row.pay_status?r("el-link",{attrs:{type:"warning"}},[e._v("退款")]):e._e(),"退款中"==t.row.pay_status?r("el-link",{attrs:{type:"danger"}},[e._v("退款中")]):e._e()]}}])}),r("el-table-column",{attrs:{prop:"deliver_status",label:"发货状态",align:"center",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return["已确认"==t.row.deliver_status?r("el-link",{attrs:{type:"success"}},[e._v("已确认")]):e._e(),"未发货"==t.row.deliver_status?r("el-link",{attrs:{type:"danger"}},[e._v("未发货")]):e._e(),"已发货"==t.row.deliver_status?r("el-link",{attrs:{type:"primary"}},[e._v("已发货")]):e._e(),"已评价"==t.row.deliver_status?r("el-link",[e._v("已评价")]):e._e()]}}])}),r("el-table-column",{attrs:{prop:"pay_time",align:"center",label:"支付时间",resizable:!1}}),r("el-table-column",{attrs:{align:"center",width:"120px",label:"快递",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[null==t.row.express?r("el-select",{attrs:{size:"mini"},on:{change:e.display},model:{value:t.row.delivery,callback:function(r){e.$set(t.row,"delivery",r)},expression:"scope.row.delivery"}},e._l(e.arr,(function(e){return r("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})})),1):r("el-select",{attrs:{disabled:!0,size:"mini"},on:{change:e.display},model:{value:t.row.delivery,callback:function(r){e.$set(t.row,"delivery",r)},expression:"scope.row.delivery"}},e._l(e.arr,(function(e){return r("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})})),1)]}}])}),r("el-table-column",{attrs:{label:"快递单号",align:"center",width:"140",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return["未发货"==t.row.deliver_status?r("el-input",{on:{change:function(r){return e.onInputChange(t.row)}},model:{value:t.row.express,callback:function(r){e.$set(t.row,"express",r)},expression:"scope.row.express"}}):r("span",[e._v(" "+e._s(t.row.express))])]}}])}),e.checkPermission(["useredit","userdelete"])?r("el-table-column",{attrs:{label:"操作",fixed:"right",width:"120",align:"center",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return["未发货"==t.row.deliver_status?r("el-link",{attrs:{type:"primary"},on:{click:function(r){return e.open(t.row)}}},[e._v("发货")]):r("el-link",{staticStyle:{"margin-left":"10px"},on:{click:function(r){return e.delivery(t.row)}}},[e._v("查看物流")]),"已付款"==t.row.pay_status?r("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:function(r){return e.refund(t.row)}}},[e._v("退款")]):e._e(),r("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(r){return e.queren(t.row)}}},[e._v("确认收货")])]}}],null,!1,369678112)}):e._e()],1)],1),r("el-dialog",{attrs:{title:"物流信息",visible:e.dialogVisible,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[r("el-table",{ref:"dataTable",attrs:{data:e.userList}},[r("el-table-column",{attrs:{prop:"time",width:"200px",label:"时间",align:"center"}}),r("el-table-column",{attrs:{prop:"context",label:"内容",align:"center"}})],1)],1),r("el-dialog",{attrs:{title:"商品退款",visible:e.Visible,width:"800px","close-on-click-modal":!1},on:{"update:visible":function(t){e.Visible=t},close:e.closee}},[r("el-form",{attrs:{"label-width":"auto"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"退款金额"}},[r("el-input",{staticStyle:{width:"180px"},attrs:{clearable:"",placeholder:"请输入退款金额"},model:{value:e.money,callback:function(t){e.money=t},expression:"money"}})],1)],1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.refuse}},[e._v("取消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("通过")])],1)],1)],1)},o=[],s=r("ade3"),i=r("1da1"),l=(r("b0c0"),r("96cf"),r("bade")),c=r("e692"),u=r("fd03"),d=r("e3d9"),p={name:"specialorder",components:{pageTable:d["a"]},data:function(){return{census:[],userList:[],shoporder:[],tableSelectList:[],arr:[],dialogVisible:!1,Visible:!1,time:"",url:"?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9__eyJpZCI6MzR9__wR97BhC5tc6sVq8WLeSyybOK75Xe7fjXJ1Yuasi-aSo&shop_type=4&order_no=&goods_name=&name=&phone=&label=&order_status=",form:{goods_name:"",order_no:"",time:"",label:"",name:"",phone:"",order_status:""},page:{page:1,limit:10,total:0},order_id:"",money:""}},watch:{"form.time":function(e){null==e&&(this.form.time=[])},time:function(e){null==e&&(this.time=[])}},created:function(){this.shoporderlist(),this.fond(),this.merchant()},mounted:function(){},methods:(a={queren:function(e){var t=this;this.$confirm("是否确认收货？","提示",{type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a={token:sessionStorage.getItem("token"),oid:e.id},Object(u["T"])(a).then((function(e){console.log(e.data),200==e.data.code?(t.shoporderlist(),t.$message.success("操作成功")):t.$message.error(e.data.msg)}));case 2:case"end":return r.stop()}}),r)})))).catch((function(){}))},dao:function(){void 0==this.form.time[1]?window.location.href="https://y4.wjw.cool/shopadmin/exportOrder?token="+this.token+"&shop_type=4&order_no="+this.form.order_no+"&goods_name="+this.form.goods_name+"&name="+this.form.name+"&phone="+this.form.phone+"&label="+this.form.label+"&order_status="+this.form.order_status:window.location.href="https://y4.wjw.cool/shopadmin/exportOrder?token="+this.token+"&shop_type=4&order_no="+this.form.order_no+"&goods_name="+this.form.goods_name+"&name="+this.form.name+"&phone="+this.form.phone+"&label="+this.form.label+"&order_status="+this.form.order_status+"&pay_time_two="+this.form.time[1]+"&pay_time_one="+this.form.time[0]},close:function(){this.dialogVisible=!1},closee:function(){this.Visible=!1},refuse:function(){this.Visible=!1},submitForm:function(){var e=this;""==this.money&&this.$message("请填写完整信息");var t={token:sessionStorage.getItem("token"),money:this.money,order_id:this.order_id};Object(u["Xc"])(t).then((function(t){var r=t.data.msg;200==t.data.code?e.$message.success("退款成功，等待审核"):e.$message(r),e.Visible=!1,e.shoporderlist()}))},refund:function(e){this.order_id=e.id,this.Visible=!0},onInputChange:function(e){},display:function(e){},delivery:function(e){var t=this,r={token:sessionStorage.getItem("token"),id:e.id};Object(u["xb"])(r).then((function(e){t.userList=e.data.data})),this.dialogVisible=!0},merchant:function(){var e=this,t={token:sessionStorage.getItem("token")};Object(u["mc"])(t).then((function(t){e.arr=t.data.data}))},checkPermission:l["a"],fond:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["l"])({token:sessionStorage.getItem("token"),shop_type:4,time1:e.time[0],time2:e.time[1]});case 2:r=t.sent,200==r.status&&(e.census=r.data.data,e.shoporderlist());case 4:case"end":return t.stop()}}),t)})))()}},Object(s["a"])(a,"checkPermission",l["a"]),Object(s["a"])(a,"changeCurrent",(function(e,t){this.page.page=e,this.page.limit=t,this.shoporderlist()})),Object(s["a"])(a,"searchinfo",(function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["m"])({token:sessionStorage.getItem("token"),shop_type:4,order_no:e.form.order_no,goods_name:e.form.goods_name,name:e.form.name,phone:e.form.phone,label:e.form.label,order_status:e.form.order_status,pay_time_two:e.form.time[1],pay_time_one:e.form.time[0],page:1,limit:e.page.limit});case 2:r=t.sent,200==r.status&&(e.shoporder=r.data.data,e.$refs.dataTable.setPageInfo({total:r.data.count}));case 4:case"end":return t.stop()}}),t)})))()})),Object(s["a"])(a,"shoporderlist",(function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.token=sessionStorage.getItem("token"),t.next=3,Object(c["m"])({token:sessionStorage.getItem("token"),shop_type:4,order_no:e.form.order_no,goods_name:e.form.goods_name,name:e.form.name,phone:e.form.phone,label:e.form.label,order_status:e.form.order_status,pay_time_two:e.form.time[1],pay_time_one:e.form.time[0],page:e.page.page,limit:e.page.limit});case 3:r=t.sent,200==r.status&&(e.shoporder=r.data.data,e.$refs.dataTable.setPageInfo({total:r.data.count}));case 5:case"end":return t.stop()}}),t)})))()})),Object(s["a"])(a,"open",(function(e){var t=this;if(null==e.express)this.$message.error("请填写完整信息");else if(null==e.delivery)this.$message.error("请填写完整信息");else{var r={token:sessionStorage.getItem("token"),delivery:e.delivery,express:e.express,order_id:e.id};Object(u["id"])(r).then((function(e){200==e.data.status&&(t.shoporderlist(),t.$message.success("发货成功"),t.shoporderlist())}))}this.shoporderlist()})),a)},m=p,f=(r("1aca"),r("2877")),h=Object(f["a"])(m,n,o,!1,null,"3cf21dea",null);t["default"]=h.exports},e3d9:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-table"},[r("el-table",e._g(e._b({ref:"pageTable",attrs:{data:e.data,border:"",stripe:""}},"el-table",e.$attrs,!1),e.$listeners),[e._t("default")],2),r("div",{directives:[{name:"show",rawName:"v-show",value:e.paging,expression:"paging"}],staticClass:"page-pagination"},[r("el-pagination",e._g(e._b({attrs:{"current-page":e.currPage,"page-size":e.pageNum,total:e.totalNum,"page-sizes":[10,15,20,50,100],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.changePageSize,"current-change":e.changePageCurrent}},"el-pagination",e.$attrs,!1),e.$listeners))],1)],1)},n=[],o=(r("a9e3"),{name:"PageTable",props:{data:{type:Array,require:!0,default:function(e){return[]}},paging:{type:Boolean,default:!0},currentPage:{type:Number,default:1},pageSize:{type:Number,default:10},total:{type:Number,default:0}},data:function(){return{currPage:this.currentPage,pageNum:this.pageSize,totalNum:this.total,selectData:[]}},created:function(){},mounted:function(){},computed:{},watch:{},methods:{setPageInfo:function(e){this.totalNum=e.total},changePageSize:function(e){this.pageNum=e,this.currPage=1,this.$emit("changeCurrentPage",1,e)},changePageCurrent:function(e){this.currPage=e,this.$emit("changeCurrentPage",e,this.pageNum)}}}),s=o,i=(r("12ad"),r("2877")),l=Object(i["a"])(s,a,n,!1,null,null,null);t["a"]=l.exports},e692:function(e,t,r){"use strict";r.d(t,"q",(function(){return n})),r.d(t,"g",(function(){return o})),r.d(t,"i",(function(){return s})),r.d(t,"h",(function(){return i})),r.d(t,"k",(function(){return l})),r.d(t,"j",(function(){return c})),r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return d})),r.d(t,"e",(function(){return p})),r.d(t,"f",(function(){return m})),r.d(t,"d",(function(){return f})),r.d(t,"a",(function(){return h})),r.d(t,"u",(function(){return b})),r.d(t,"r",(function(){return g})),r.d(t,"t",(function(){return _})),r.d(t,"s",(function(){return v})),r.d(t,"p",(function(){return y})),r.d(t,"n",(function(){return k})),r.d(t,"o",(function(){return w})),r.d(t,"l",(function(){return x})),r.d(t,"m",(function(){return O}));var a=r("284b");function n(e){return Object(a["a"])({url:"/shopadmin/shoptype",method:"post",data:e})}function o(e){return Object(a["a"])({url:"/shopadmin/shopTypeadd",method:"post",data:e})}function s(e){return Object(a["a"])({url:"/shopadmin/shopTypeedit",method:"post",data:e})}function i(e){return Object(a["a"])({url:"/shopadmin/shopTypedel",method:"post",data:e})}function l(e){return Object(a["a"])({url:"/shopadmin/shopTyptreeadd",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/shopadmin/shopTypeisshow",method:"post",data:e})}function u(e){return Object(a["a"])({url:"/shopadmin/shopGoodsindex",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/shopadmin/shopGoodsadd",method:"post",data:e})}function p(e){return Object(a["a"])({url:"shopadmin/shopGoodsedit",method:"post",data:e})}function m(e){return Object(a["a"])({url:"/shopadmin/shopGoodsisshow",method:"post",data:e})}function f(e){return Object(a["a"])({url:"/shopadmin/shopGoodsdel",method:"post",data:e})}function h(e){return Object(a["a"])({url:"/shopadmin/shopGoodsedit",method:"post",data:e})}function b(e){return Object(a["a"])({url:"/shopadmin/ShopSkusetindex",method:"post",data:e})}function g(e){return Object(a["a"])({url:"/shopadmin/ShopSkusetadd",method:"post",data:e})}function _(e){return Object(a["a"])({url:"/shopadmin/shopskuedit",method:"post",data:e})}function v(e){return Object(a["a"])({url:"/shopadmin/ShopSkusetdel",method:"post",data:e})}function y(e){return Object(a["a"])({url:"/shopadmin/shopskuindex",method:"post",data:e})}function k(e){return Object(a["a"])({url:"/shopadmin/shopskuadd",method:"post",data:e})}function w(e){return Object(a["a"])({url:"/shopadmin/shopskudel",method:"post",data:e})}function x(e){return Object(a["a"])({url:"/shopadmin/shopordercensus",method:"post",data:e})}function O(e){return Object(a["a"])({url:"/shopadmin/shoporderindex",method:"post",data:e})}}}]);
//# sourceMappingURL=chunk-4edd8ba0.607aeb2b.js.map