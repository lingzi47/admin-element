import request from '@/utils/request'

// 用户登录
export function login(data) {
	return request({
		url: '/personal/login',
		method: 'post',
		data
	})
}

// 用户登出
export function logout(params) {
	return request({
		url: '/personal/logout',
		method: 'get',
		params
	})
}