(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c558ca0"],{2060:function(e,t,o){"use strict";o("97dc")},2527:function(e,t,o){},"6a12":function(e,t,o){},"8ddf":function(e,t,o){},"95d4":function(e,t,o){"use strict";o("8ddf")},"97dc":function(e,t,o){},a4d0:function(e,t,o){"use strict";o("2527")},cde0:function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"user"},[o("div",{staticClass:"block-quote"},[o("el-form",{ref:"form",attrs:{inline:!0,model:e.form}},[o("el-form-item",{attrs:{label:"ID",prop:"id"}},[o("el-input",{attrs:{clearable:"",placeholder:"请输入ID"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),o("el-form-item",{attrs:{label:"商品名称",prop:"goods_name"}},[o("el-input",{attrs:{clearable:"",placeholder:"请输入商品名称"},model:{value:e.form.goods_name,callback:function(t){e.$set(e.form,"goods_name",t)},expression:"form.goods_name"}})],1),o("el-form-item",{attrs:{label:"分类",prop:"type_id"}},[o("el-cascader",{ref:"cascader",staticClass:"typewidth",attrs:{options:e.typelist,props:e.customProps,filterable:"",clearable:""},on:{change:e.handleChange},model:{value:e.form.type_id,callback:function(t){e.$set(e.form,"type_id",t)},expression:"form.type_id"}})],1),o("el-form-item",{attrs:{label:"上/下架",prop:"is_show"}},[o("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.form.is_show,callback:function(t){e.$set(e.form,"is_show",t)},expression:"form.is_show"}},[o("el-option",{attrs:{label:"全部",value:""}},[e._v("全部")]),o("el-option",{attrs:{label:"上架",value:"10"}},[e._v("上架")]),o("el-option",{attrs:{label:"下架",value:"20"}},[e._v("下架")])],1)],1),o("el-form-item",{staticStyle:{float:"right"}},[e.checkPermission("usersearch")?o("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.searchinfo}},[e._v("搜索")]):e._e(),e.checkPermission("useradd")?o("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.addData}},[e._v("新增")]):e._e()],1)],1)],1),o("page-table",{ref:"dataTable",attrs:{data:e.goodsList,"header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}},on:{changeCurrentPage:e.changeCurrent}},[o("el-table-column",{attrs:{label:"序号",align:"center",width:"130",fixed:"",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s((e.page.page-1)*e.page.limit+t.$index+1))])]}}])}),o("el-table-column",{attrs:{prop:"id",fixed:"",label:"商品id",resizable:!1}}),o("el-table-column",{attrs:{prop:"goods_name",fixed:"",label:"商品名称",resizable:!1}}),o("el-table-column",{attrs:{prop:"new_price",fixed:"",label:"价格",width:"100",resizable:!1}}),o("el-table-column",{attrs:{prop:"id",fixed:"",label:"商品规格",width:"220",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{on:{click:function(o){return e.sku(1,t.row)}}},[e._v("sku规格")]),o("el-button",{on:{click:function(o){return e.skuset(t.row)}}},[e._v("sku设置")])]}}])}),o("el-table-column",{attrs:{fixed:"",label:"封面图片",width:"160",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(e){return[o("img",{attrs:{src:e.row.goods_img,"min-width":"70",height:"70"}})]}}])}),o("el-table-column",{attrs:{prop:"name",fixed:"",label:"分类",width:"140",resizable:!1}}),o("el-table-column",{attrs:{prop:"weigh",fixed:"",label:"排序",width:"60",resizable:!1}}),o("el-table-column",{attrs:{prop:"shop_id",fixed:"",label:"商家",width:"140",resizable:!1}}),o("el-table-column",{attrs:{label:"上/下架",width:"90",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[10==t.row.is_show?o("el-button",{attrs:{size:"mini",type:"success"}},[e._v("上架")]):o("el-button",{attrs:{size:"mini",type:"danger"}},[e._v("下架")])]}}])}),o("el-table-column",{attrs:{label:"审核状态",width:"100",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[10==t.row.sta?o("el-button",{attrs:{size:"mini",type:"success"}},[e._v("待审核")]):e._e(),20==t.row.sta?o("el-button",{attrs:{size:"mini",type:"danger"}},[e._v("已通过")]):e._e(),30==t.row.sta?o("el-button",{attrs:{size:"mini",type:"danger"}},[e._v("已拒绝")]):e._e()]}}])}),e.checkPermission(["useredit","userdelete"])?o("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[10==t.row.is_show?o("el-link",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(o){return e.goodsup(t.row)}}},[e._v("下架")]):o("el-link",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(o){return e.goodsup(t.row)}}},[e._v("上架")]),o("el-link",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(o){return e.datashow(3,t.row)}}},[e._v("查看")]),o("el-link",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(o){return e.editData(2,t.row)}}},[e._v("编辑")]),o("el-link",{staticStyle:{"margin-right":"10px"},attrs:{type:"danger"},on:{click:function(o){return e.deleteData(t.row)}}},[e._v("删除")]),o("el-link",{staticStyle:{"margin-right":"10px"},attrs:{type:"primary"},on:{click:function(o){return e.pkset(t.row)}}},[e._v("PK值设置")])]}}],null,!1,1568219993)}):e._e()],1),o("add-dialog",{ref:"addData"}),o("sku-index",{ref:"skulist"}),o("set-pk",{ref:"pkSet"}),o("set-sku",{ref:"skuSet"})],1)},r=[],i=o("1da1"),a=(o("96cf"),o("4de4"),o("d3b7"),o("b0c0"),o("e9c4"),o("bade")),n=o("e692"),l=o("e3d9"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"AddDialog"},[o("el-dialog",{attrs:{title:1==e.type?"新增":"编辑",visible:e.dialogVisible,width:"900px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[o("el-form",{ref:"goodsForm",attrs:{model:e.goodsForm,rules:e.rules,"label-width":"auto"}},[o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"名称",prop:"goods_name"}},[o("el-input",{attrs:{placeholder:"请输入名称"},model:{value:e.goodsForm.goods_name,callback:function(t){e.$set(e.goodsForm,"goods_name",t)},expression:"goodsForm.goods_name"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"库存",prop:"have_num"}},[o("el-input",{attrs:{placeholder:"请输入库存"},model:{value:e.goodsForm.have_num,callback:function(t){e.$set(e.goodsForm,"have_num",t)},expression:"goodsForm.have_num"}})],1)],1),o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"分类",prop:"type_id",rules:[{required:!0,message:"分类不能为空",trigger:"blur"}]}},[o("el-cascader",{ref:"cascader",staticClass:"typewidth",attrs:{options:e.typelist,props:e.customProps,filterable:"",clearable:""},on:{change:e.handleChange},model:{value:e.goodsForm.type_id,callback:function(t){e.$set(e.goodsForm,"type_id",t)},expression:"goodsForm.type_id"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"现价格",prop:"new_price"}},[o("el-input",{attrs:{placeholder:"请输入现价格"},model:{value:e.goodsForm.new_price,callback:function(t){e.$set(e.goodsForm,"new_price",t)},expression:"goodsForm.new_price"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"原价格",prop:"old_price"}},[o("el-input",{attrs:{placeholder:"请输入原价格"},model:{value:e.goodsForm.old_price,callback:function(t){e.$set(e.goodsForm,"old_price",t)},expression:"goodsForm.old_price"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"推广佣金",prop:"rebater"}},[o("el-input",{attrs:{placeholder:"请输入推广佣金"},model:{value:e.goodsForm.rebater,callback:function(t){e.$set(e.goodsForm,"rebater",t)},expression:"goodsForm.rebater"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"总销售",prop:"sale_num"}},[o("el-input",{attrs:{placeholder:"请输入总销售"},model:{value:e.goodsForm.sale_num,callback:function(t){e.$set(e.goodsForm,"sale_num",t)},expression:"goodsForm.sale_num"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"保障",prop:"guarantee"}},[o("el-input",{attrs:{placeholder:"请输入保障"},model:{value:e.goodsForm.guarantee,callback:function(t){e.$set(e.goodsForm,"guarantee",t)},expression:"goodsForm.guarantee"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"标签",prop:"label"}},[o("el-input",{attrs:{placeholder:"请输入标签"},model:{value:e.goodsForm.label,callback:function(t){e.$set(e.goodsForm,"label",t)},expression:"goodsForm.label"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"排序",prop:"weigh"}},[o("el-input",{attrs:{placeholder:"请输入排序"},model:{value:e.goodsForm.weigh,callback:function(t){e.$set(e.goodsForm,"weigh",t)},expression:"goodsForm.weigh"}})],1)],1),o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"简介",prop:"brief"}},[o("el-input",{attrs:{placeholder:"请输入简介"},model:{value:e.goodsForm.brief,callback:function(t){e.$set(e.goodsForm,"brief",t)},expression:"goodsForm.brief"}})],1)],1),o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"封面图",prop:"goods_img"}},[o("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://yujian02.xyz/command/ossUpload?filename=file","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?o("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"商品图"}},[o("el-upload",{staticClass:"upload",attrs:{action:"https://yujian02.xyz/command/ossUpload?filename=file","list-type":"picture-card","file-list":e.fileList,"on-success":e.banneradd,"before-upload":e.beforeAvatarUpload,"on-remove":e.handleRemove}},[o("i",{staticClass:"el-icon-plus"})])],1)],1),o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"商品详情"}},[o("file-fu",{attrs:{isClear:e.isClear},on:{change:e.change},model:{value:e.goodsForm.content,callback:function(t){e.$set(e.goodsForm,"content",t)},expression:"goodsForm.content"}})],1)],1)],1),1==this.type?o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1):e._e(),2==this.type?o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1):e._e()],1)],1)},u=[],d=(o("ac1f"),o("1276"),o("d81d"),o("c740"),o("a434"),o("a15b"),o("cc5e")),m=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"editor"},[o("div",{ref:"editor",staticClass:"textNeirong"})])},g=[],p=(o("4d63"),o("c607"),o("2c3e"),o("25f0"),o("5319"),o("6fad")),f=o.n(p),h={name:"editoritem",data:function(){return{editor:null,info_:null}},model:{prop:"value",event:"change"},props:{value:{type:String,default:""},isClear:{type:Boolean,default:!1}},watch:{isClear:function(e){e&&(this.editor.txt.clear(),this.info_=null)},value:function(e){e!==this.editor.txt.html()&&this.editor.txt.html(this.value)}},mounted:function(){this.seteditor(),this.editor.txt.html(this.value)},methods:{seteditor:function(){var e=this;this.editor=new f.a(this.$refs.editor),this.editor.config.uploadImgShowBase64=!1,this.editor.config.uploadImgServer="https://yujian02.xyz/command/ossUpload?filename=img_e",this.editor.config.uploadFileName="img_e",this.editor.config.uploadImgMaxSize=8388608,this.editor.config.uploadImgMaxLength=6,this.editor.config.uploadImgTimeout=18e4,this.editor.config.onchangeTimeout=1e3,this.editor.config.onchange=function(t){e.info_=t;var o=new RegExp("<img","gi");e.info_=t.replace(o,"<img style=\"max-width:'';\""),e.$emit("change",e.info_)},this.editor.create(),this.editor.config.uploadImgHooks={fail:function(e,t,o){},success:function(e,t,o){},timeout:function(e,t){},error:function(e,t){},customInsert:function(e,t,o){var s=t.data;e(s)}}}}},b=h,k=(o("d2d0"),o("2877")),v=Object(k["a"])(b,m,g,!1,null,null,null),_=v.exports,w={name:"AddDialog",components:{fileFu:_},data:function(){return{isClear:!1,customProps:{multiple:!1,emitPath:!0,value:"id",label:"name",children:"children"},imageUrl:"",banners:[],id:"",fileList:[],typelist:[],rolesList:[],type:1,dialogVisible:!1,phoneEditor:null,token:"",goodstype:{type:1},goodsForm:{goods_name:"",have_num:"",brief:"",label:"",guarantee:"",sale_num:"",rebater:"",old_price:"",new_price:"",banners:[],type_id:"",weigh:"",content:"",goods_img:""},rules:{goods_name:[{required:!0,message:"请输入名称",trigger:"blur"}],have_num:[{required:!0,message:"请输入库存",trigger:"blur"}],brief:[{required:!0,message:"请输入简介",trigger:"blur"}],label:[{required:!0,message:"请输入标签",trigger:"blur"}],guarantee:[{required:!0,message:"请输入保障",trigger:"blur"}],sale_num:[{required:!0,message:"请输入总销售",trigger:"blur"}],weigh:[{required:!0,message:"请输入排序",trigger:"blur"}],rebater:[{required:!0,message:"请输入推广佣金",trigger:"blur"}],old_price:[{required:!0,message:"请输入原价格",trigger:"blur"}],new_price:[{required:!0,message:"请输入现价格",trigger:"blur"}],type_id:[{required:!0,message:"分类不能为空",trigger:"blur"}],goods_img:[{required:!0,message:"请选择图片",trigger:"blur"}],content:[{required:!0,message:"请输入",trigger:"blur"}]}}},created:function(){this.getRolesList(),this.token=sessionStorage.getItem("token")},mounted:function(){},methods:{handleChange:function(e){var t=this.$refs["cascader"].getCheckedNodes();this.goodsForm.type_id=t[0].value},change:function(e){this.goodsForm.content=e},handleEdit:function(){this.$refs["fileFu"].getVal()},getRolesList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(d["b"])({token:sessionStorage.getItem("token")});case 2:o=t.sent,200==o.status&&(e.rolesList=o.data);case 4:case"end":return t.stop()}}),t)})))()},gettypelist:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["q"])({goodstype:e.goodstype,token:sessionStorage.getItem("token")});case 2:o=t.sent,200==o.status&&(e.typelist=o.data.data);case 4:case"end":return t.stop()}}),t)})))()},show:function(e,t){if(this.gettypelist(),this.type=e,this.dialogVisible=!0,1==e)this.goodsForm={},this.imageUrl="",this.goodsForm.type_id="",this.banners=[],this.fileList=[];else{console.log(t),this.goodsForm=t,this.id=t.id,this.imageUrl=this.goodsForm.goods_img,this.goodsForm.banners=t.banners;var o=this.goodsForm.banners.split(",");this.banners=o,this.fileList=o.map((function(e){return{name:e,url:e}}))}},close:function(){var e=this;this.dialogVisible=!1,this.$nextTick((function(){e.$refs.goodsForm.clearValidate()}))},handleAvatarSuccess:function(e,t){var o=e.data;this.imageUrl=o,this.goodsForm.goods_img=o},handleRemove:function(e,t,o){console.log(e),console.log(e.name);var s=e.name;console.log(s);var r=this.banners.findIndex((function(e){if("outimg"==e)return!0}));this.banners.splice(r,1),console.log(this.banners)},banneradd:function(e,t,o){console.log(e);var s=e.data;this.banners.push(s),console.log(this.banners),console.log(o)},beforeAvatarUpload:function(e){var t=e.size/1024/1024<2;return t||this.$message.error("上传图片大小不能超过 2MB!"),t},submitForm:function(){var e=this;this.$refs.goodsForm.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(o){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!o){t.next=20;break}if(e.goodsForm.banners=e.banners.join(","),1!=e.type){t.next=9;break}return t.next=5,Object(n["c"])({goods_name:e.goodsForm.goods_name,have_num:e.goodsForm.have_num,brief:e.goodsForm.brief,label:e.goodsForm.label,guarantee:e.goodsForm.guarantee,sale_num:e.goodsForm.sale_num,rebater:e.goodsForm.rebater,old_price:e.goodsForm.old_price,new_price:e.goodsForm.new_price,weigh:e.goodsForm.weigh,type_id:e.goodsForm.type_id,content:e.goodsForm.content,shop_type:1,goods_img:e.goodsForm.goods_img,banners:e.goodsForm.banners,token:sessionStorage.getItem("token")});case 5:s=t.sent,200==s.status&&(e.$message.success("新增成功"),e.$parent.shopList(),e.close()),t.next=16;break;case 9:if(2!=e.type){t.next=16;break}return t.next=12,Object(n["e"])({goods_name:e.goodsForm.goods_name,have_num:e.goodsForm.have_num,brief:e.goodsForm.brief,label:e.goodsForm.label,weigh:e.goodsForm.weigh,guarantee:e.goodsForm.guarantee,sale_num:e.goodsForm.sale_num,rebater:e.goodsForm.rebater,old_price:e.goodsForm.old_price,new_price:e.goodsForm.new_price,type_id:e.goodsForm.type_id,content:e.goodsForm.content,banners:e.goodsForm.banners,shop_type:1,goods_img:e.goodsForm.goods_img,token:sessionStorage.getItem("token"),id:e.id});case 12:r=t.sent,200==r.status&&(e.$message.success("编辑成功"),e.$parent.shopList(),e.close()),t.next=16;break;case 16:e.$parent.shopList(),e.close(),t.next=21;break;case 20:return t.abrupt("return",!1);case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},y=w,x=(o("95d4"),Object(k["a"])(y,c,u,!1,null,"8fcdb7a8",null)),F=x.exports,$=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"AddDialog"},[o("el-dialog",{attrs:{title:"SKU规格",visible:e.dialogVisible,width:"900px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[o("div",{staticClass:"addsku"},[o("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:function(t){return e.addsku()}}},[e._v("新增")])],1),o("div",{staticClass:"user"},[o("page-table",{ref:"dataTable",attrs:{data:e.skuList},on:{changeCurrentPage:e.changeCurrent}},[o("el-table-column",{attrs:{type:"index",fixed:"",width:"40",resizable:!1}}),o("el-table-column",{attrs:{prop:"name",fixed:"",label:"商品规格",width:"240",resizable:!1}}),o("el-table-column",{attrs:{prop:"skuname",fixed:"",label:"商品属性",resizable:!1}}),o("el-table-column",{attrs:{fixed:"right",label:"操作",width:"160",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-link",{attrs:{type:"primary"},on:{click:function(o){return e.editsku(t.row)}}},[e._v("编辑")]),o("el-link",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:function(o){return e.deleteData(2,t.row)}}},[e._v("删除")])]}}])})],1)],1)]),o("div",{attrs:{id:""}},[o("el-dialog",{attrs:{title:"SKU规格新增",visible:e.dialogVisible1,width:"400px"},on:{"update:visible":function(t){e.dialogVisible1=t}}},[o("el-form",{ref:"skulist",staticClass:"demo-dynamic",attrs:{model:e.skulist,"label-width":"100px"}},[o("el-form-item",{attrs:{prop:"name",label:"商品规格"}},[o("el-input",{model:{value:e.skulist.name,callback:function(t){e.$set(e.skulist,"name",t)},expression:"skulist.name"}})],1),e._l(e.skulist.domains,(function(t,s){return o("el-form-item",{key:t.key,attrs:{label:"属性"+s,prop:"domains."+s+".value"}},[o("el-input",{model:{value:t.value,callback:function(o){e.$set(t,"value",o)},expression:"domain.value"}}),o("el-button",{on:{click:function(o){return o.preventDefault(),e.removeDomain(t)}}},[e._v("删除")])],1)})),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("提交")]),o("el-button",{on:{click:e.addDomain}},[e._v("新增属性")])],1)],2)],1)],1)],1)},S=[],O={name:"SkuIndex",components:{pageTable:l["a"]},data:function(){return{skulist:{domains:[{value:""}],name:""},id:"",form:{},goodid:"",skuList:[],dialogVisible:!1,dialogVisible1:!1,page:{page:1,limit:10,total:0},token:""}},created:function(){this.token=sessionStorage.getItem("token")},mounted:function(){},methods:{changeCurrent:function(e,t){this.page.page=e,this.page.limit=t,this.shopsku(this.goodid)},shopsku:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function o(){var s;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return t.form.goods_id=e,o.next=3,Object(n["p"])({page:t.page.page,limit:t.page.limit,goods_id:t.form.goods_id,token:sessionStorage.getItem("token")});case 3:s=o.sent,200==s.status&&(t.page.total=s.data.count,t.skuList=s.data.data,t.$refs.dataTable.setPageInfo({total:s.data.count}));case 5:case"end":return o.stop()}}),o)})))()},resetForm:function(e){this.$refs[e].resetFields()},removeDomain:function(e){var t=this.skulist.domains.indexOf(e);-1!==t&&this.skulist.domains.splice(t,1)},addDomain:function(){this.skulist.domains.push({value:"",key:Date.now()})},submitForm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(2!=e.type){t.next=9;break}return t.next=3,Object(n["t"])({domains:e.skulist.domains,token:sessionStorage.getItem("token"),name:e.skulist.name,goods_id:e.form.goods_id,id:e.id});case 3:o=t.sent,200==o.status&&e.$message.success("编辑成功"),e.dialogVisible1=!1,e.shopsku(e.goodid),t.next=10;break;case 9:e.$refs.skulist.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(o){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!o){t.next=10;break}return e.skulist.goods_id=e.goodid,t.next=4,Object(n["n"])({domains:e.skulist.domains,token:sessionStorage.getItem("token"),name:e.skulist.name,goods_id:e.form.goods_id});case 4:s=t.sent,200==s.status&&e.$message.success("新增成功"),e.dialogVisible1=!1,e.shopsku(e.goodid),t.next=11;break;case 10:return t.abrupt("return",!1);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 10:case"end":return t.stop()}}),t)})))()},show:function(e,t){this.type=e,this.dialogVisible=!0,this.shopsku(t.id),this.goodid=t.id},editsku:function(e){this.type=2,this.skulist.name=e.name,this.skulist.domains=e.skunamearr,this.id=e.id,this.dialogVisible1=!0},addsku:function(){this.type=1,this.skulist.name="",this.skulist.domains=[],this.dialogVisible1=!0},deleteData:function(e,t){var o=this;1==e&&1==this.tableSelectList.length||2==e?this.$confirm("是否删除此规格？","提示",{type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(n["o"])({id:t.id,token:sessionStorage.getItem("token")});case 2:s=e.sent,200==s.status&&(o.shopsku(o.goodid),o.$message.success("删除成功"));case 4:case"end":return e.stop()}}),e)})))).catch((function(){})):this.$message.warning("请选择一条数据删除")}}},j=O,C=(o("2060"),Object(k["a"])(j,$,S,!1,null,"70f9dc55",null)),R=C.exports,L=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"AddDialog"},[o("el-dialog",{attrs:{title:"pk值设置",visible:e.dialogVisible,width:"700px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[o("el-form",{ref:"ruleForm",attrs:{rules:e.rules,model:e.ruleForm}},[o("el-row",[o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{label:"消费满"}})],1),o("el-col",{attrs:{span:4}},[o("el-form-item",{attrs:{prop:"full_price"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.ruleForm.full_price,callback:function(t){e.$set(e.ruleForm,"full_price",t)},expression:"ruleForm.full_price"}})],1)],1),o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{label:"元，赠送"}})],1),o("el-col",{attrs:{span:6}},[o("el-form-item",{attrs:{prop:"multiple"}},[o("el-input",{attrs:{placeholder:"请输入"},model:{value:e.ruleForm.multiple,callback:function(t){e.$set(e.ruleForm,"multiple",t)},expression:"ruleForm.multiple"}})],1)],1),o("el-col",{attrs:{span:3}},[o("el-form-item",{attrs:{label:"倍pk值"}})],1)],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},V=[],I={name:"pkSet",components:{},data:function(){return{id:"",token:"",dialogVisible:!1,ruleForm:{full_price:"",multiple:""},rules:{full_price:[{required:!0,message:"请输入整数",trigger:"blur"},{pattern:/^-?\d+(\.\d{2})$/,message:"请输入两位小数",trigger:"blur"}],multiple:[{required:!0,message:"请输入整数",trigger:"blur"},{pattern:/^[1-9]\d*$/,message:"请输入整数",trigger:"blur"}]}}},created:function(){},mounted:function(){},methods:{show:function(e){this.ruleForm.full_price=e.full_price,this.ruleForm.multiple=e.multiple,this.id=e.id,this.dialogVisible=!0},close:function(){var e=this;this.dialogVisible=!1,this.$nextTick((function(){e.$refs.ruleForm.clearValidate()}))},submitForm:function(){var e=this;this.$refs.ruleForm.validate(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(o){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!o){t.next=6;break}return sessionStorage.getItem("token"),t.next=4,Object(n["a"])({full_price:e.ruleForm.full_price,multiple:e.ruleForm.multiple,id:e.id,token:sessionStorage.getItem("token")});case 4:s=t.sent,200==s.data.code&&e.$message.success("操作成功");case 6:e.$parent.shopList(),e.close();case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}},D=I,z=Object(k["a"])(D,L,V,!1,null,null,null),q=z.exports,P=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"AddDialog"},[o("el-dialog",{attrs:{title:"sku设置",visible:e.dialogVisible,width:"700px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[o("el-form",{attrs:{inline:!0}},[o("el-form-item",{staticStyle:{float:"right"}},[e.checkPermission("useradd")?o("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.addData}},[e._v("新增")]):e._e()],1)],1),o("page-table",{ref:"dataTable",attrs:{data:e.goodsList,"header-cell-style":{textAlign:"center"},"cell-style":{textAlign:"center"}},on:{changeCurrentPage:e.changeCurrent}},[o("el-table-column",{attrs:{prop:"sku",fixed:"",label:"商品规格",resizable:!1}}),o("el-table-column",{attrs:{prop:"price",fixed:"",label:"价格",resizable:!1}}),o("el-table-column",{attrs:{prop:"rebater",fixed:"",label:"推广佣金",resizable:!1}}),e.checkPermission(["useredit","userdelete"])?o("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center",resizable:!1},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-link",{staticStyle:{"margin-right":"10px"},attrs:{type:"danger"},on:{click:function(o){return e.deleteData(t.row)}}},[e._v("删除")])]}}],null,!1,1627621939)}):e._e()],1)],1),o("div",{staticClass:"AddDialog"},[o("el-dialog",{attrs:{title:"sku编辑",visible:e.dialogVisible1,width:"900px","close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible1=t},close:e.close1}},[o("el-form",{ref:"goodsForm",attrs:{model:e.goodsForm,rules:e.rules,"label-width":"auto"}},[e._l(e.list,(function(t,s){return o("el-col",{key:s,attrs:{span:12}},[o("el-form-item",{attrs:{label:t.name,prop:"name"}},[o("el-select",{attrs:{"value-key":"item.skunamearr.id"},on:{change:function(o){return e.getChange(s,t,o)}},model:{value:t.skunamearr[s].value,callback:function(o){e.$set(t.skunamearr[s],"value",o)},expression:"item.skunamearr[index].value"}},e._l(e.list[s].skunamearr,(function(e){return o("el-option",{key:e.id,attrs:{value:e.id,label:e.value}})})),1)],1)],1)})),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"售价",prop:"price"}},[o("el-input",{attrs:{placeholder:"请输入售价"},model:{value:e.goodsForm.price,callback:function(t){e.$set(e.goodsForm,"price",t)},expression:"goodsForm.price"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"推广佣金",prop:"rebater"}},[o("el-input",{attrs:{placeholder:"请输入推广佣金"},model:{value:e.goodsForm.rebater,callback:function(t){e.$set(e.goodsForm,"rebater",t)},expression:"goodsForm.rebater"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"库存",prop:"count"}},[o("el-input",{attrs:{placeholder:"请输入库存"},model:{value:e.goodsForm.count,callback:function(t){e.$set(e.goodsForm,"count",t)},expression:"goodsForm.count"}})],1)],1)],2),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogVisible1=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.submitForm1}},[e._v("确 定")])],1)],1)],1)],1)},A=[],N={components:{pageTable:l["a"]},data:function(){return{list:[],rules:{name:[{required:!0,message:"请选择属性",trigger:"blur"}],rebater:[{required:!0,message:"请输入推广佣金",trigger:"blur"}],price:[{required:!0,message:"请输入售价",trigger:"blur"}],count:[{required:!0,message:"请输入库存",trigger:"blur"}]},arr:[],goodsForm:{id:"",count:"",price:"",rebater:"",sku_id:"",goods_id:""},id:"",index:"",printerSelect:[],token:"",goodsList:[],dialogVisible:!1,dialogVisible1:!1,sku_id:[]}},created:function(){this.shopList()},mounted:function(){},methods:{getChange:function(e,t,o){this.arr[e]=o},checkPermission:a["a"],changeCurrent:function(e,t){this.page.page=e,this.page.limit=t,this.shopList()},addData:function(){this.type=1,this.goodsForm={},this.dialogVisible1=!0},editData:function(e,t){this.type=2,this.goodsForm=t,this.goodsForm.id=t.id,this.dialogVisible1=!0},shopskuindex:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["p"])({goods_id:e.id,token:sessionStorage.getItem("token")});case 2:o=t.sent,200==o.status&&(e.list=o.data.data);case 4:case"end":return t.stop()}}),t)})))()},shopList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["u"])({goods_id:e.id,token:sessionStorage.getItem("token")});case 2:o=t.sent,200==o.status&&(e.goodsList=o.data.data);case 4:case"end":return t.stop()}}),t)})))()},deleteData:function(e){var t=this;this.$confirm("是否删除？","提示",{type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function o(){var s;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,Object(n["s"])({id:e.id,token:sessionStorage.getItem("token")});case 2:s=o.sent,200==s.status&&(t.shopList(),t.$message.success("删除成功"));case 4:case"end":return o.stop()}}),o)})))).catch((function(){}))},show:function(e){this.id=e.id,this.dialogVisible=!0,this.shopList(),this.shopskuindex()},close:function(){this.dialogVisible=!1},close1:function(){this.dialogVisible1=!1,this.dialogVisible=!0},submitForm1:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(2!=e.type){t.next=7;break}return t.next=3,Object(n["t"])({sku_id:e.arr.join(","),goods_id:e.id,price:e.goodsForm.price,id:e.goodsForm.id,rebater:e.goodsForm.rebater,count:e.goodsForm.count,token:sessionStorage.getItem("token")});case 3:o=t.sent,200==o.data.code&&(e.$message.success("操作成功"),e.shopList()),t.next=11;break;case 7:return t.next=9,Object(n["r"])({sku_id:e.arr.join(","),goods_id:e.id,price:e.goodsForm.price,rebater:e.goodsForm.rebater,count:e.goodsForm.count,token:sessionStorage.getItem("token")});case 9:s=t.sent,200==s.data.code&&(e.$message.success("操作成功"),e.shopList());case 11:e.$parent.shopList(),e.close1();case 13:case"end":return t.stop()}}),t)})))()}}},U=N,T=Object(k["a"])(U,P,A,!1,null,null,null),J=T.exports,E={name:"user",components:{pageTable:l["a"],addDialog:F,skuIndex:R,setPk:q,setSku:J},data:function(){return{customProps:{multiple:!1,emitPath:!0,value:"id",label:"name",children:"children"},typelist:[],list:[],goodsList:[],token:"",is_show:"",form:{id:"",type_id:"",goods_name:""},goodstype:{type:1},page:{page:1,limit:10,total:""},tableSelectList:[]}},created:function(){this.token=sessionStorage.getItem("token"),this.shopList(),this.gettypelist()},mounted:function(){},computed:{getRole:function(){var e=this;return function(t){return e.rolesList.filter((function(e){return e.name==t}))[0].title}}},methods:{handleChange:function(e){var t=this.$refs["cascader"].getCheckedNodes();this.form.type_id=t[0].value},checkPermission:a["a"],changeCurrent:function(e,t){this.page.page=e,this.page.limit=t,this.shopList()},searchinfo:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["b"])({page:1,limit:e.page.limit,token:sessionStorage.getItem("token"),shop_type:1,is_show:e.form.is_show,id:e.form.id,type_id:e.form.type_id,goods_name:e.form.goods_name});case 2:o=t.sent,200==o.status&&(e.page.total=o.data.count,e.goodsList=o.data.data,e.$refs.dataTable.setPageInfo({total:o.data.count}));case 4:case"end":return t.stop()}}),t)})))()},shopList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["b"])({page:e.page.page,limit:e.page.limit,token:sessionStorage.getItem("token"),shop_type:1,is_show:e.form.is_show,id:e.form.id,type_id:e.form.type_id,goods_name:e.form.goods_name});case 2:o=t.sent,200==o.status&&(e.page.total=o.data.count,e.goodsList=o.data.data,e.$refs.dataTable.setPageInfo({total:o.data.count}));case 4:case"end":return t.stop()}}),t)})))()},goodsup:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:20==e.is_show?t.is_show=10:t.is_show=20,t.$confirm("是否上下架？","提示",{type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function o(){var s;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,Object(n["f"])({id:e.id,is_show:t.is_show,token:sessionStorage.getItem("token")});case 2:s=o.sent,200==s.status&&(t.shopList(),t.$message.success("操作成功"));case 4:case"end":return o.stop()}}),o)})))).catch((function(){}));case 2:case"end":return o.stop()}}),o)})))()},gettypelist:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(n["q"])({goodstype:e.goodstype,token:sessionStorage.getItem("token")});case 2:o=t.sent,200==o.status&&(e.typelist=o.data.data);case 4:case"end":return t.stop()}}),t)})))()},addData:function(){this.$refs.addData.show(1,{})},datashow:function(e,t){this.$refs.addData.show(3,JSON.parse(JSON.stringify(t)))},sku:function(e,t){this.$refs.skulist.show(1,JSON.parse(JSON.stringify(t)))},pkset:function(e){this.$refs.pkSet.show(JSON.parse(JSON.stringify(e)))},skuset:function(e){this.$refs.skuSet.show(JSON.parse(JSON.stringify(e)))},editData:function(e,t){if(1==e&&1==this.tableSelectList.length||2==e){var o=1==e?this.tableSelectList[0]:t;this.$refs.addData.show(2,JSON.parse(JSON.stringify(o)))}else this.$message.warning("请选择一条数据编辑")},deleteData:function(e){var t=this;this.$confirm("是否删除？","提示",{type:"warning"}).then(Object(i["a"])(regeneratorRuntime.mark((function o(){var s;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,Object(n["d"])({id:e.id,token:sessionStorage.getItem("token")});case 2:s=o.sent,200==s.status&&(t.shopList(),t.$message.success("删除成功"));case 4:case"end":return o.stop()}}),o)})))).catch((function(){}))}}},B=E,K=(o("a4d0"),Object(k["a"])(B,s,r,!1,null,"05e0ee51",null));t["default"]=K.exports},d2d0:function(e,t,o){"use strict";o("6a12")}}]);
//# sourceMappingURL=chunk-1c558ca0.aa2d88b7.js.map