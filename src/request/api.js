import request from '@/request/request'

export const userlog = (params) => request.get('/adminApi/log/list', {
    params
})
//导出
export const exportOrder = (params) => request.get('shopadmin/exportOrder', {
    params
})
//登录
export const userLogin = (params) => request.get('/adminApi/login', {
    params
})
//退出登录
export const userOut = (params) => request.get('/adminApi/logout', {
    params
})

//后台用户列表
export const bguserList = (params) => request.get('/adminApi/adminUser', {
    params
})

//角色组
export const userRoles = (params) => request.get('/adminApi/adminUser/roleType', {
    params
})

//新增用户
export const addUser = (params) => request.get('/adminApi/adminUser/create', {
    params
})

//编辑获取用户信息
export const editShow = (params, id) => request.get('/adminApi/adminUser/show' + "/" + id, {
    params,
    id
})
//用户详情
export const userinfo = (params, id) => request.get('/adminApi/mobileUser/info' + "/" + id, {
    params,
    id
})
//编辑用户
export const editUser = (params, id) => request.put('/adminApi/adminUser' + "/" + id,
    params,
    id
)

//删除用户
export const delUser = (params, id) => request.delete('/adminApi/adminUser' + "/" + id, {
    params,
    id
})

//菜单列表
export const menuList = (params) => request.get('/adminApi/menu', {
    params
})

//新增菜单
export const addMenu = (params) => request.get('/adminApi/menu/create', {
    params
})

//编辑获取菜单信息
export const menuShow = (params, id) => request.get('/adminApi/menu' + "/" + id, {
    params,
    id
})

//编辑菜单
export const editMenu = (params, id) => request.put('/adminApi/menu' + "/" + id,
    params,
    id
)

//删除菜单
export const delMenu = (params, id) => request.delete('/adminApi/menu' + "/" + id, {
    params,
    id
})

//后台角色列表
export const bguserGroup = (params) => request.get('/adminApi/roleGroup', {
    params
})

//新增角色
export const adduserGroup = (params) => request.get('/adminApi/roleGroup/create', {
    params
})

//编辑角色
export const edituserGroup = (params, id) => request.put('/adminApi/roleGroup' + "/" + id,
    params,
    id
)

//查询角色
export const userGroupshow = (params) => request.get('/adminApi/roleGroup/showMenu' + "/" + id, {
    params,
    id
})

//删除角色
export const delGroup = (params, id) => request.delete('/adminApi/roleGroup' + "/" + id, {
    params,
    id
})
//保存角色权限
export const addUsermenu = (params, id) => request.post('/adminApi/roleGroup/saveMenu' + "/" + id,
    params,
    id
)
//查询角色权限
export const Usermenushow = (params, id) => request.get('/adminApi/roleGroup/showMenu' + "/" + id, {
    params,
    id
})
//app用户
export const appuserList = (params) => request.get('/adminApi/mobileUser', {
    params
})
//app用户查看修改
export const appuserShow = (params, id) => request.get('/adminApi/mobileUser' + "/" + id, {
    params,
    id
})
//app用户信息更改
export const edituser = (params, id) => request.put('/adminApi/mobileUser' + "/" + id,
    params,
    id
)
//app用户启用
export const userStart = (params) => request.post('/adminApi/mobileUser/state',
    params,
)
//app用户不老莓
export const userBlm = (params) => request.post('/adminApi/mobileUser/isBlm',
    params,
)
//app用户启用
export const userZisu = (params) => request.post('/adminApi/mobileUser/ziSu',
    params,
)
//pk之明细
export const pklog = (params) => request.post('/adminApi/pklog',
    params,
)

//活动 
//消费送会员
export const paylist = (params) => request.post('/adminApi/activity/member/payList',
    params,
)
//删除
export const paydel = (params) => request.post('/adminApi/activity/member/payDel',
    params
)
//新增
export const payadd = (params) => request.post('/adminApi/activity/member/payCreate',
    params
)
//活动列表
export const goodsListMem = (params) => request.post('/adminApi/activity/member/goodsListMem',
    params
)
//添加
export const goodsadd = (params) => request.post('/adminApi/activity/member/goodsMemCre',
    params
)
//编辑查看
export const goodseditshow = (params) => request.post('/adminApi/activity/member/goodsInfo',
    params
)
//编辑
export const goodsedit = (params) => request.post('/adminApi/activity/member/goodsMemSave',
    params
)
//删除
export const goodsListdel = (params) => request.post('/adminApi/activity/member/goodsDel',
    params
)
//购买宋pk值
export const goodsListPk = (params) => request.post('/adminApi/activity/sellGoodsPk/goodsListPk',
    params
)
//购买宋pk值新增
export const addgoodsListPk = (params) => request.post('/adminApi/activity/SellGoodsPk/goodsPkCre',
    params
)
//购买宋pk值删除
export const goodspkdel = (params) => request.post('/adminApi/activity/SellGoodsPk/goodsPkDel',
    params
)

//审核
//钻石提现审核
export const diamondsWith = (params) => request.post('/adminApi/examine/activity/diamondsWith',
    params
)
export const diaExamine = (params) => request.post('/adminApi/examine/activity/diaExamine',
    params
)
//消费送会员审核
export const payMemList = (params) => request.post('/adminApi/examine/activity/payMemList',
    params
)
export const payMemEx = (params) => request.post('/adminApi/examine/activity/payMemEx',
    params
)
//会员赠送审核
export const goodsMemList = (params) => request.post('/adminApi/examine/activity/goodsMemList',
    params
)
export const goodsMemEx = (params) => request.post('/adminApi/examine/activity/goodsMemEx',
    params
)
//pk值审核
export const goodsListPkEx = (params) => request.post('/adminApi/examine/activity/goodsListPkEx',
    params
)
export const sellGoodsPkEx = (params) => request.post('/adminApi/examine/activity/sellGoodsPkEx',
    params
)
//版本
export const versionlist = (params) => request.post('/adminApi/version/mobileVersion/list',
    params
)
export const versioncreate = (params) => request.post('/adminApi/version/mobileVersion/create',
    params
)
export const versionexList = (params) => request.post('/adminApi/version/mobileVersion/exList',
    params
)
export const versionedit = (params) => request.post('/adminApi/version/mobileVersion/exSave',
    params
)
export const versiondetails = (params) => request.post('/adminApi/version/mobileVersion/details',
    params
)
//钻石雨
export const releaselist = (params) => request.post('/adminApi/examine/rain/releaselist',
    params
)
//添加
export const releaseadd = (params) => request.post('/adminApi/examine/rain/releaseadd',
    params
)
//详情
export const releDetails = (params) => request.post('/adminApi/examine/rain/releDetails',
    params
)
//审核
export const releExamine = (params) => request.post('/adminApi/examine/rain/releExamine',
    params
)

//租赁商钻石雨
export const zlsreleaselist = (params) => request.post('/adminApi/examine/rainzls/releaselist',
    params
)
//添加
export const zlsreleaseadd = (params) => request.post('/adminApi/examine/rainzls/releaseadd',
    params
)
//详情
export const zlsreleDetails = (params) => request.post('/adminApi/examine/rainzls/releDetails',
    params
)
//审核
export const zlsreleExamine = (params) => request.post('/adminApi/examine/rainzls/releExamine',
    params
)
//物流
export const merchant = (params) => request.post('/shopadmin/merchant',
    params
)
//发货
export const sendGoods = (params) => request.post('/shopadmin/sendGoods',
    params
)
//查看物流
export const express = (params) => request.post('/shopadmin/express',
    params
)
//退款
export const refund = (params) => request.post('/shopadmin/refund',
    params
)
//列表退款
export const receRefund = (params) => request.post('/shopadmin/receRefund',
    params
)
//列表退款caozuo
export const refMoney = (params) => request.post('/shopadmin/refMoney',
    params
)
//商品审核
export const shopGoodssta = (params) => request.post('/shopadmin/shopGoodssta',
    params
)
//列表
export const shopGoodsindex = (params) => request.post('shopadmin/shopGoodsindex',
    params
)
//商家提现
export const businesslist = (params) => request.post('/adminApi/examine/business/list',
    params
)
//商家提现审核
export const businessadit = (params) => request.post('/adminApi/examine/business/adit',
    params
)
//分利 
export const shareMoney = (params) => request.post('adminApi/mobileUser/shareMoney',
    params
)
//推广
export const promoter = (params) => request.post('adminApi/order/promoter',
    params
)
//历史/adminApi/order/hisOrder
export const hisOrder = (params) => request.post('/adminApi/order/hisOrder',
    params
)
///adminApi/order/listHisOrder
export const listHisOrder = (params) => request.post('adminApi/order/listHisOrder',
    params
)
//推广发货
export const selfSign = (params) => request.post('adminApi/order/selfSign',
    params
)
//退款
export const orderrefund = (params) => request.post('adminApi/order/refund',
    params
)
//应急箱订单列表
export const doctorlist = (params) => request.post('admin/box/usehaveindex',
    params
)
//应急箱订单添加
export const doctoradd = (params) => request.post('admin/box/usehaveadd',
    params
)
//审核 /manybox/stabox 改(/manybox/stabox)
export const doctorlistex = (params) => request.post('/manybox/stabox ',
    params
)
//团队
export const usehaveteam = (params) => request.post('/manybox/newteam',
    params
)
//合作机器信息admin/box/read
export const boxread = (params) => request.post('admin/box/read',
    params
)
//绑定上级
export const upPid = (params) => request.post('/admin/box/pidedit',
    params
)
//药房列表
export const pharmacylist = (params) => request.post('admin/box/index',
    params
)
//药房添加
export const pharmacyadd = (params) => request.post('admin/box/add',
    params
)
//删除/admin/box/delete
export const pharmacydel = (params) => request.post('admin/box/delete',
    params
)
//编辑
export const pharmacyedit = (params) => request.post('admin/box/edit',
    params
)
//审核
export const pharmacysta = (params) => request.post('admin/box/stalist',
    params
)
//审核操作
export const pharmacystac = (params) => request.post('admin/box/sta',
    params
)
//点位列表
export const positionindex = (params) => request.post('admin/box/positionindex',
    params
)
//点为新增
export const positionadd = (params) => request.post('admin/box/positionadd',
    params
)
//点为编辑
export const positiondeletet = (params) => request.post('admin/box/delete',
    params
)
//点为删除
export const positionedit = (params) => request.post('admin/box/positionedit',
    params
)
//点位审核 
export const positionstalist = (params) => request.post('admin/box/positionstalist',
    params
)
//点位审核 操作
export const positionsta = (params) => request.post('admin/box/positionsta',
    params
)
//获取药房/admin/box/officinalist
export const officinalist = (params) => request.post('admin/box/officinalist',
    params
)
//绑定
export const bind = (params) => request.post('admin/box/bind',
    params
)
//修改绑定admin/box/bindedit
export const bindedit = (params) => request.post('admin/box/bindedit',
    params
)
//绑定审核
export const bindindex = (params) => request.post('/admin/box/bindindex',
    params
)
//绑定审核操作
export const bindsta = (params) => request.post('/admin/box/bindsta',
    params
)
//活动 
//抽奖添加
export const luckadd = (params) => request.post('/activity/luckadd',
    params,
)
//抽奖列表
export const lucklist = (params) => request.post('/activity/lucklist',
    params
)
//抽奖历史列表
export const luckhislist = (params) => request.post('/activity/luckindex',
    params
)
//抽奖审核
export const lucksta = (params) => request.post('/activity/lucksta',
    params
)
//代金券列表
export const couponlist = (params) => request.post('/activity/couponlist',
    params)
//新增
export const couponadd = (params) => request.post('/activity/couponadd',
    params
)
//代金券审核列表
export const luckstalist = (params) => request.post('/activity/luckstalist',
    params
)
//审核
export const couponsta = (params) => request.post('/activity/couponsta',
    params
)
//代金券释放列表
export const couponsetindex = (params) => request.post('/activity/couponsetindex',
    params
)
//代金券释放
export const couponset = (params) => request.post('/activity/couponset',
    params
)
//代金券释放审核
export const couponsetsta = (params) => request.post('/activity/couponsetsta',
    params
)
//代金券任务列表
export const coupontaskindex = (params) => request.post('/activity/coupontaskindex',
    params
)
//代金券任务添加
export const coupontaskadd = (params) => request.post('/activity/coupontaskadd',
    params
)
//代金券任务历史
export const coupontasklist = (params) => request.post('/activity/coupontasklist',
    params
)
//代金券任务审核
export const coupontaskstalist = (params) => request.post('/activity/coupontaskstalist',
    params
)
//代金券任务审核
export const coupontasksta = (params) => request.post('/activity/coupontasksta',
    params
)
//财务
export const financeInfo = (params) => request.post('/shopadmin/financeInfo',
    params
)
export const financeindex = (params) => request.post('/shopadmin/financeindex',
    params
)
//数据统计
//抽奖
export const luckAll = (params) => request.post('activity/luckAll',
    params
)
//钻石雨
export const rainCount = (params) => request.post('/adminApi/statis/data/rainCount',
    params
)
//租赁商钻石雨
export const zlsrainCount = (params) => request.post('adminApi/statis/data/zlsRainCount',
    params
)
//会员
export const memCount = (params) => request.post('/adminApi/statis/data/memCount',
    params
)
//充值
export const diamonds = (params) => request.post('/adminApi/statis/data/diamonds',
    params
)
//新人/adminApi/statis/data/newUser
export const newUser = (params) => request.post('/adminApi/statis/data/newUser',
    params
)
//推广员
export const promotert = (params) => request.post('/adminApi/statis/data/promoter',
    params
)
//代金券
export const daicoup = (params) => request.post('/adminApi/statis/data/coup',
    params
)
//点位申请列表/admin/box/apply
export const boxapply = (params) => request.post('/admin/box/apply',
    params
)
//点位申请处理/admin/box/applysta
export const boxapplysta = (params) => request.post('/admin/box/applysta',
    params
)
//用户咨询feedbacklist
export const feedbacklist = (params) => request.post('/admin/box/feedbacklist',
    params
)
//用户咨询处理feedbacklist
export const feedbacksta = (params) => request.post('/admin/box/feedbacksta',
    params
)
//应急箱列表
export const boxlistindex = (params) => request.post('/admin/box/boxlistindex',
    params
)
//添加 /boxlistadd
export const boxlistadd = (params) => request.post('/admin/box/boxlistadd',
    params
)
//项目上传 configindex
export const configindex = (params) => request.post('/admin/box/configindex',
    params
)
//删除 configdelete
export const configdelete = (params) => request.post('/admin/box/configdelete',
    params
)
//新增 configadd
export const configadd = (params) => request.post('/admin/box/configadd',
    params
)
//编辑 configedit
export const configedit = (params) => request.post('/admin/box/configedit',
    params
)
//审核 configsta
export const configsta = (params) => request.post('/admin/box/configsta',
    params
)
//收益审核
export const boxWithlist = (params) => request.post('/adminApi/box/boxWith/list',
    params
)
//审核操作
export const boxWithlistex = (params) => request.post('/adminApi/box/boxWith/handleEx',
    params
)
//库存/admin/box/havegoods
export const havegoods = (params) => request.post('/admin/box/havegoods',
    params
)
//列表/admin/box/boxgoodslist
export const boxgoodslist = (params) => request.post('/admin/box/boxgoodslist',
    params
)
//分润admin/box/setpriceeds
export const setpriceeds = (params) => request.post('admin/box/setpriceeds',
    params
)
//药房分润/admin/box/sharelist
export const sharelist = (params) => request.post('/admin/box/sharelist',
    params
)
//设置
export const fenrunset = (params) => request.post('/admin/box/shareedit',
    params
)
//补货申请列表
export const BoxReplen = (params) => request.post('/adminApi/box/BoxReplen/list',
    params
)
//补货申请处理/adminApi/box/BoxReplen/handleEx
export const handleEx = (params) => request.post('/adminApi/box/BoxReplen/handleEx',
    params
)
//补货申请查看
//药房
export const medList = (params) => request.post('/adminApi/box/BoxReplen/medList',
    params
)
//药房
export const medName = (params) => request.post('/adminApi/box/BoxReplen/medName',
    params
)
//分润列表
export const boxProfitlist = (params) => request.post('/adminApi/box/boxProfit/list',
    params
)
//新增
export const boxProfitcreate = (params) => request.post('/adminApi/box/BoxProfit/create',
    params
)
//删除
export const BoxProfitdel = (params) => request.post('/adminApi/box/BoxProfit/del',
    params
)
//查看/adminApi/box/BoxProfit/info
export const BoxProfitinfo = (params) => request.post('/adminApi/box/BoxProfit/info',
    params
)
//列表新增/adminApi/box/BoxProfit/createProfit
export const createProfit = (params) => request.post('/adminApi/box/BoxProfit/createProfit',
    params
)
//列表编辑子列表创建/adminApi/box/BoxProfit/createData
export const createData = (params) => request.post('/adminApi/box/BoxProfit/createData',
    params
)
//列表编辑 字列表 删除/adminApi/box/BoxProfit/delProfit
export const delProfit = (params) => request.post('/adminApi/box/BoxProfit/delProfit',
    params
)

//列表编辑 字列表 编辑 /adminApi/box/BoxProfit/updateProfit
export const updateProfit = (params) => request.post('/adminApi/box/BoxProfit/updateProfit',
    params
)
//列表编辑字列表/adminApi/box/BoxProfit/listProfit
export const listProfit = (params) => request.post('/adminApi/box/BoxProfit/listProfit',
    params
)
//列表删除/adminApi/box/BoxProfit/delLevel
export const delLevel = (params) => request.post('/adminApi/box/BoxProfit/delLevel',
    params
)
//审核/adminApi/box/boxProfit/exList
export const boxProfitexList = (params) => request.post('/adminApi/box/boxProfit/exList',
    params
)
//操作/adminApi/box/boxProfit/exOperation
export const exOperation = (params) => request.post('/adminApi/box/boxProfit/exOperation',
    params
)
//应急箱查看/admin/box/priceedsinfo
export const priceedsinfo = (params) => request.post('/admin/box/priceedsinfo',
    params
)
//修改/admin/box/boxset
export const boxset = (params) => request.post('/admin/box/boxset',
    params
)
//应急想删除

export const positiondelete = (params) => request.post('admin/box/positiondelete',
    params
)
//统计 组里订单 /admin/box/orderall
export const orderall = (params) => request.post('admin/box/orderall',
    params
)
//统计 组里订单 /admin/box/orderall
export const goodsAll = (params) => request.post('admin/box/goodsAll',
    params
)
//订单查看
export const readinfo = (params) => request.post('/admin/box/readinfo',
    params
)
//箱子详情/admin/box/usehaveread
export const usehaveread = (params) => request.post('/admin/box/usehaveread',
    params
)
//钻石手艺/admin/box/zslog
export const zslog = (params) => request.post('/admin/box/zslog',
    params
)
//钻石手艺/admin/box/zslog
export const moneylog = (params) => request.post('/admin/box/moneylog',
    params
)
//banner列表
export const bannerlist = (params) => request.post('activity/bannerindex',
    params
)
//添加
export const banneradd = (params) => request.post('activity/banneradd',
    params
)
//删除
export const bannerdel = (params) => request.post('/activity/bannerdel',
    params
)
//修改
export const banneredit = (params) => request.post('/activity/banneredit',
    params
)
//确认收货
export const conGoods = (params) => request.post('/adminApi/order/conGoods',
    params
)
//新增租赁商
export const addbox = (params) => request.post('/manybox/addbox',
    params
)
//租赁号获取uid
export const chooseboxuid = (params) => request.post('/manybox/chooseboxuid',
    params
)
//查看租赁人数/manybox/shareInfo
export const shareInfo = (params) => request.post('/manybox/shareInfo',
    params
)
//编辑/manybox/shareedit
export const shareedit = (params) => request.post('manybox/shareedit',
    params
)
//补货统计
export const repList = (params) => request.post('adminApi/box/boxFinance/repList',
    params
)
//奖金池 列表manybox/boxpool
export const boxpool = (params) => request.post('manybox/boxpool',
    params
)
//启用
export const isuse = (params) => request.post('/manybox/isuse',
    params
)
//新增 /manybox/addpool
export const addpool = (params) => request.post('/manybox/addpool',
    params
)
//详情/manybox/logpool
export const logpool = (params) => request.post('/manybox/logpool',
    params
)
//拼单 列表 /manybox/tuilist
export const tuilist = (params) => request.post('/manybox/tuilist',
    params
)
//审核 manybox/tuiliststa
export const tuiliststa = (params) => request.post('/manybox/tuiliststa',
    params
)
//拼单添加/manybox/addtuilist
export const addtuilist = (params) => request.post('/manybox/addtuilist',
    params
)
//adminApi/box/boxStock/tagList
export const tagList = (params) => request.post('/adminApi/box/boxStock/tagList ',
    params
)
//adminApi/box/boxStock/goodsList 
export const goodsList = (params) => request.post('/adminApi/box/boxStock/goodsList ',
    params
)
//adminApi/box/boxStock/goodsAdd
export const goodsAdd = (params) => request.post('/adminApi/box/boxStock/goodsAdd ',
    params
)
//adminApi/box/boxStock/goodsSave
export const goodsSave = (params) => request.post('/adminApi/box/boxStock/goodsSave ',
    params
)
//adminApi/box/boxStock/goodsDel
export const goodsDel = (params) => request.post('/adminApi/box/boxStock/goodsDel ',
    params
)
//adminApi/box/boxStock/goodsExp
export const goodsExp = (params) => request.post('/adminApi/box/boxStock/goodsExp ',
    params
)
//web市场 /manybox/paylist
export const manyboxpaylist = (params) => request.post('/manybox/paylist',
    params
)
///manybox/payliststa
export const payliststa = (params) => request.post('/manybox/payliststa',
    params
)
//广告
export const fakelist = (params) => request.post('adminApi/box/fake/list ',
    params
)
//删除
export const fakedel = (params) => request.post('adminApi/box/fake/del ',
    params
)
//添加
export const fakecreate = (params) => request.post('adminApi/box/fake/create ',
    params
)
//编辑
export const fakeedit = (params) => request.post('adminApi/box/fake/edit',
    params
)
//dummy订单
export const xunilist = (params) => request.post('/manybox/unrealOrder',
    params
)

//dummy获取商品
export const xunnigoods = (params) => request.post('manybox/unrealOrdergoods ',
    params
)

//dummy添加
export const xunniadd = (params) => request.post('/manybox/unrealOrderAdd',
    params
)
//站内信息/activity/newsindex
export const newsindex = (params) => request.post('/activity/newsindex',
    params
)
//添加/activity/newsadd
export const newsadd = (params) => request.post('/activity/newsadd',
    params
)
//审核
export const newssta = (params) => request.post('/activity/newssta',
    params
)
//出入库展示列表
export const orderList = (params) => request.post('/adminApi/box/boxStock/orderList',
    params
)
//删除/adminApi/box/boxStock/orderDel
export const orderDel = (params) => request.post('/adminApi/box/boxStock/orderDel',
    params
)

//新增列表
export const infoList = (params) => request.post('/adminApi/box/boxStock/infoList',
    params
)
//新增删除 /adminApi/box/boxStock/infoDel
export const infoDel = (params) => request.post('/adminApi/box/boxStock/infoDel',
    params
)

//出库操作/adminApi/box/boxStock/creOrderInfo
export const creOrderInfo = (params) => request.post('/adminApi/box/boxStock/creOrderInfo',
    params
)
// 新增出库列表增加/adminApi/box/boxStock/subOrder
export const subOrder = (params) => request.post('/adminApi/box/boxStock/subOrder',
    params
)
//修改出入库数/adminApi/box/boxStock/saveNum
export const saveNum = (params) => request.post('/adminApi/box/boxStock/saveNum',
    params
)
//选择商品/adminApi/box/boxStock/choGoList
export const choGoList = (params) => request.post('/adminApi/box/boxStock/choGoList',
    params
)
// 修改备注 adminApi/box/boxStock/savRemark
export const savRemark = (params) => request.post('/adminApi/box/boxStock/savRemark',
    params
)
//商品库存列表/adminApi/box/boxStock/goodsWare
export const goodsWare = (params) => request.post('/adminApi/box/boxStock/goodsWare',
    params
)
//标签列表 adminApi/box/boxStock/listTag
export const listTag = (params) => request.post('/adminApi/box/boxStock/listTag',
    params
)
//创建 /adminApi/box/boxStock/creTag
export const creTag = (params) => request.post('/adminApi/box/boxStock/creTag',
    params
)
//修改/adminApi/box/boxStock/savTag
export const savTag = (params) => request.post('/adminApi/box/boxStock/savTag',
    params
)
//删除/adminApi/box/boxStock/delTag
export const delTag = (params) => request.post('/adminApi/box/boxStock/delTag',
    params
)
//合同 查看/manybox/agreeRead
export const agreeRead = (params) => request.post('/manybox/agreeRead',
    params
)

//合同编辑 /manybox/agreeEdit
export const agreeEdit = (params) => request.post('/manybox/agreeEdit',
    params
)
//合同新增 /manybox/agreeAdd
export const agreeAdd = (params) => request.post('/manybox/agreeAdd',
    params
)
//出库审核列表
export const exList = (params) => request.post('/adminApi/box/boxStock/exList',
    params
)
//审核 操作 adminApi/box/boxStock/exStatus  id  status remark_sta
export const exStatus = (params) => request.post('/adminApi/box/boxStock/exStatus',
    params
)
//用户收益/manybox/boxWithInfo
export const boxWithInfo = (params) => request.post('/manybox/boxWithInfo',
    params
)
//用户购买区域/admin/box/teamchoose
export const teamchoose = (params) => request.post('/admin/box/teamchoose',
    params
)
//adminApi/box/boxStock/stockInfo
export const stockInfo = (params) => request.post('/adminApi/box/boxStock/stockInfo',
    params
)
///manybox/bonuslist
export const bonuslist = (params) => request.post('/manybox/bonuslist',
    params
)
//评论列表
export const dislist = (params) => request.post('/shopadmin/dislist',
    params
)
//添加评论
export const disadd = (params) => request.post('/shopadmin/disadd',
    params
)
//删除评论
export const disdel = (params) => request.post('/shopadmin/disdel',
    params
)
//修改评论
export const disupdate = (params) => request.post('/shopadmin/disupdate',
    params
)
//公司区域
export const placeindex = (params) => request.post('/activity/placeindex',
    params
)
//新增/activity/placeadd
export const placeadd = (params) => request.post('/activity/placeadd',
    params
)
//修改placeedit
export const placeedit = (params) => request.post('/activity/placeedit',
    params
)
//查看列表/activity/teamindex
export const teamindex = (params) => request.post('/activity/teamindex',
    params
)
///activity/teamadd
export const teamadd = (params) => request.post('/activity/teamadd',
    params
)
///activity/teamedit
export const teamedit = (params) => request.post('/activity/teamedit',
    params
)
//药品组合box/planlist
export const planlist = (params) => request.post('/admin/box/planlist',
    params
)
//组合新增/admin/box/planadd
export const planadd = (params) => request.post('/admin/box/planadd',
    params
)
//组合删除/admin/box/plandel
export const plandel = (params) => request.post('/admin/box/plandel',
    params
)
//二级组合
export const plangoodslist = (params) => request.post('/admin/box/goodslist',
    params
)
//删除/admin/box/goodsdel
export const plangoodsdel = (params) => request.post('/admin/box/goodsdel',
    params
)
//添加/admin/box/goodsadd
export const plangoodsadd = (params) => request.post('/admin/box/goodsadd',
    params
)
//组合添加/admin/box/choosePlan
export const choosePlan = (params) => request.post('/admin/box/choosePlan',
    params
)
//tianja/admin/box/unrealOrderAdd
export const unrealOrderAdd = (params) => request.post('/admin/box/unrealOrderAdd',
    params
)