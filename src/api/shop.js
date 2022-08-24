import request from '@/request/request'
// ==================================分类列表========================================================
export function shoptype(data) {
    return request({
        url: '/shopadmin/shoptype',
        method: 'post',
        data
    })
} //列表

export function shopTypeadd(data) {
    return request({
        url: '/shopadmin/shopTypeadd',
        method: 'post',
        data
    })
} //新增

export function shopTypeedit(data) {
    return request({
        url: '/shopadmin/shopTypeedit',
        method: 'post',
        data
    })
} //编辑 

export function shopTypedel(data) {
    return request({
        url: '/shopadmin/shopTypedel',
        method: 'post',
        data
    })
} //删除分类

export function shopTyptreeadd(data) {
    return request({
        url: '/shopadmin/shopTyptreeadd',
        method: 'post',
        data
    })
} //新增二级分类 
export function shopTypeisshow(data) {
    return request({
        url: '/shopadmin/shopTypeisshow',
        method: 'post',
        data
    })
} //显示隐藏




//专区商品列表
export function shopGoods(data) {
    return request({
        url: '/shopadmin/shopGoodsindex',
        method: 'post',
        data
    })
}
export function shopGoodsadd(data) {
    return request({
        url: '/shopadmin/shopGoodsadd',
        method: 'post',
        data
    })
} //新增
export function shopGoodsedit(data) {
    return request({
        url: 'shopadmin/shopGoodsedit',
        method: 'post',
        data
    })
} //修改

export function shopGoodsup(data) {
    return request({
        url: '/shopadmin/shopGoodsisshow',
        method: 'post',
        data
    })
} //上下价
export function shopGoodsdel(data) {
    return request({
        url: '/shopadmin/shopGoodsdel',
        method: 'post',
        data
    })
} //删除
export function pkset(data) {
    return request({
        url: '/shopadmin/shopGoodsedit',
        method: 'post',
        data
    })
} //sku 编辑
export function skulist(data) {
    return request({
        url: '/shopadmin/ShopSkusetindex',
        method: 'post',
        data
    })
} //sku配置列表
export function skuadd(data) {
    return request({
        url: '/shopadmin/ShopSkusetadd',
        method: 'post',
        data
    })
} //sku配置添加
export function skuedit(data) {
    return request({
        url: '/shopadmin/shopskuedit',
        method: 'post',
        data
    })
} //sku配置修改

export function skudel(data) {
    return request({
        url: '/shopadmin/ShopSkusetdel',
        method: 'post',
        data
    })
} //sku配置删除

export function shopskuindex(data) {
    return request({
        url: '/shopadmin/shopskuindex',
        method: 'post',
        data
    })
} //sku规格列表
export function shopskuadd(data) {
    return request({
        url: '/shopadmin/shopskuadd',
        method: 'post',
        data
    })
} //新增
export function shopskudel(data) {
    return request({
        url: '/shopadmin/shopskudel',
        method: 'post',
        data
    })
} //删除


//订单列表
export function shopordercensus(data) {
    return request({
        url: '/shopadmin/shopordercensus',
        method: 'post',
        data
    })
} //数据
export function shoporderindex(data) {
    return request({
        url: '/shopadmin/shoporderindex',
        method: 'post',
        data
    })
} //列表