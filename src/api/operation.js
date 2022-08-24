import request from '@/utils/request'

// 获取菜单列表
export function getMenu(data) {
	return request({
		url: '/operation/getMenu',
		method: 'post',
		data
	})
}
// 获取所有一级或二级菜单
export function getLevelMenu(data) {
	return request({
		url: '/operation/getLevelMenu',
		method: 'post',
		data
	})
}
// 编辑菜单
export function editMenu(data) {
	return request({
		url: '/operation/editMenu',
		method: 'post',
		data
	})
}

// 获取操作
export function getOperation(data) {
	return request({
		url: '/operation/getOperation',
		method: 'post',
		data
	})
}
// 编辑操作
export function editOperation(data) {
	return request({
		url: '/operation/editOperation',
		method: 'post',
		data
	})
}


// 获取法定节假日
export function getHolidayList(data) {
	return request({
		url: '/operation/getHolidayList',
		method: 'post',
		data
	})
}