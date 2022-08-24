import request from '@/requestw/request'


//活动 

//抽奖添加
export const luckadd = (params) => request.post('/activity/luckadd',
    params,
)
//抽奖列表
export const lucklist = (params) => request.post('/activity/lucklist', params)
//抽奖历史列表
export const luckhislist = (params) => request.post('/activity/luckindex', params)
//抽奖审核
export const lucksta = (params) => request.post('/activity/lucksta', params)
//代金券列表
export const couponlist = (params) => request.post('/activity/couponlist', params)
//新增
export const couponadd = (params) => request.post('/activity/couponadd', params)
//代金券审核列表
export const luckstalist = (params) => request.post('/activity/luckstalist', params)
//审核
export const couponsta = (params) => request.post('/activity/couponsta', params)
//代金券释放列表
export const couponsetindex = (params) => request.post('/activity/couponsetindex', params)
//代金券释放
export const couponset = (params) => request.post('/activity/couponset', params)
//代金券释放审核
export const couponsetsta = (params) => request.post('/activity/couponsetsta', params)
//代金券任务列表
export const coupontaskindex = (params) => request.post('/activity/coupontaskindex', params)
//代金券任务添加
export const coupontaskadd = (params) => request.post('/activity/coupontaskadd', params)
//代金券任务历史
export const coupontasklist = (params) => request.post('/activity/coupontasklist', params)
//代金券任务审核
export const coupontaskstalist = (params) => request.post('/activity/coupontaskstalist', params)
//代金券任务审核
export const coupontasksta = (params) => request.post('/activity/coupontasksta', params)
//财务
export const financeInfo = (params) => request.post('/shopadmin/financeInfo', params)
export const financeindex = (params) => request.post('/shopadmin/financeindex', params)