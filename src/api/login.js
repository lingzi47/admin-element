import request from '@/utils/request'

// 获取图表数据
export function userLogin(data) {
    return request({
        url: '/api/admin.login/login',
        method: 'get',
        data
    })
}