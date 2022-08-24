import request from '@/utils/request'

// 获取所有角色
export function getRoles(data) {
	return request({
		url: '/role/getRoles',
		method: 'post',
		data
	})
}

// 新增角色
export function addRoles(data) {
	return request({
		url: '/role/addRoles',
		method: 'post',
		data
	})
}

// 编辑角色
export function editRoles(data) {
	return request({
		url: '/role/editRoles',
		method: 'post',
		data
	})
}

// 删除角色
export function deleteRoles(data) {
	return request({
		url: '/role/deleteRoles',
		method: 'post',
		data
	})
}


// 根据角色获取菜单
export function getRoleByMenu(data) {
	return request({
		url: '/role/getRoleByMenu',
		method: 'post',
		data
	})
}

// 获取所有的菜单操作
export function getMenuOperate(data) {
	return request({
		url: '/role/getMenuOperate',
		method: 'post',
		data
	})
}

// 设置角色权限
export function setRolePermissions(data) {
	return request({
		url: '/role/setRolePermissions',
		method: 'post',
		data
	})
}