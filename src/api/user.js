import request from '@/utils/request'

// 获取用户详情
export function getUserInfo(data) {
	return request({
		url: '/user/getUserInfo',
		method: 'post',
		data
	})
}

// 获取用户列表
export function getUserList(params) {
	return request({
		url: '/user/getUserList',
		method: 'get',
		params
	})
}
// 根据用户ID获取用户详情
export function getUserById(data) {
	return request({
		url: '/user/getUserById',
		method: 'post',
		data
	})
}
// 新增用户
export function addUser(data) {
	return request({
		url: '/user/addUser',
		method: 'post',
		data
	})
}
// 编辑用户信息
export function editUser(data) {
	return request({
		url: '/user/editUser',
		method: 'post',
		data
	})
}
// 删除用户
export function deleteUser(data) {
	return request({
		url: '/user/deleteUser',
		method: 'post',
		data
	})
}

// 修改密码
export function modifyPwd(data) {
	return request({
		url: '/user/modifyPwd',
		method: 'post',
		data
	})
}