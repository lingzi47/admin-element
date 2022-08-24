import {
	operationListData,
	menuListData,
	holidayListData
} from '@/utils/data'
let operationList = operationListData();
let menuList = menuListData();
let holidayList = holidayListData();

export default {
	// 获取菜单列表
	getMenu: config => {
		let parameter = JSON.parse(config.body);
		let menuListAll = JSON.parse(JSON.stringify(menuList))
		let menuData = [];
		if (parameter.menuId1) {
			menuListAll.map(m => {
				if (m.id == parameter.menuId1) {
					console.log(m);
					menuData.push(m)
					if (parameter.menuId2 && m.children && m.children.length) {
						m.children.map(mc => {
							if (mc.id == parameter.menuId2) {
								menuData[0].children = [mc]
							}
						})
					}
				}
			})
		} else {
			menuData = menuListAll
		}
		return {
			status: 200,
			message: "操作成功",
			data: menuData
		}
	},
	// 获取所有一级或二级菜单
	getLevelMenu: _ => {
		let menuLevel1 = [],
			menuLevel2 = [];
		menuList.map(m => {
			menuLevel1.push({
				id: m.id,
				title: m.title
			})
			if (m.children && m.children.length) {
				m.children.map(mc => {
					menuLevel2.push({
						id: mc.id,
						pid: m.id,
						title: mc.title
					})
				})
			}
		})
		return {
			status: 200,
			message: "操作成功",
			data: {
				menuLevel1: menuLevel1,
				menuLevel2: menuLevel2
			}
		}
	},
	// 编辑菜单
	editMenu: config => {
		let data = JSON.parse(config.body);
		let menuId = data.id;
		menuList.map(m => {
			if (menuId.length == 2) {
				if (m.id == menuId) {
					m.title = data.title;
				}
			} else {
				if (m.children && m.children.length) {
					m.children.map(mc => {
						if (mc.id == menuId) {
							mc.title = data.title;
						}
					})
				}
			}
		})
		return {
			status: 200,
			message: "编辑成功",
			data: ""
		}
	},
	// 获取操作
	getOperation: config => {
		let parameter = JSON.parse(config.body);
		let data = operationList.filter(item => item.title.indexOf(parameter.title) != -1);
		return {
			status: 200,
			message: "操作成功",
			data: data
		}
	},
	// 编辑操作
	editOperation: config => {
		let data = JSON.parse(config.body);
		operationList.map((item, index) => {
			if (item.id == data.id) {
				operationList.splice(index, 1, data);
			}
		})
		return {
			status: 200,
			message: "编辑成功",
			data: ""
		}
	},
	// 获取法定节假日
	getHolidayList: _ => {
		return {
			status: 200,
			message: "操作成功",
			data: holidayList
		}
	},
}