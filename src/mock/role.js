import {
	roleListData,
	menuListData,
	operationListData,
	rolePermissionsData
} from '@/utils/data'
let roleList = roleListData();
let menuList = menuListData();
let operationList = operationListData();
let rolePermissions = rolePermissionsData();

export default {
	// 获取角色列表
	getRolesList: config => {
		let parameter = JSON.parse(config.body);
		let data = roleList;
		if (parameter && parameter.title) data = roleList.filter(item => item.title.indexOf(parameter.title) != -1);
		return {
			status: 200,
			message: "操作成功",
			data: data
		}
	},
	// 新增角色
	addRoles: config => {
		let data = JSON.parse(config.body);
		let message = "新增成功",
			status = 200;
		if (!rolePermissions[data.name]) {
			rolePermissions[data.name] = {}
			roleList.push(data);
		} else {
			status = 201;
			message = "该角色名已存在";
		}
		return {
			status: status,
			message: message,
			data: ""
		}
	},
	// 编辑角色
	editRoles: config => {
		let data = JSON.parse(config.body);
		roleList.map((item, index) => {
			if (item.id == data.id) {
				roleList.splice(index, 1, data);
			}
		})
		return {
			status: 200,
			message: "编辑成功",
			data: ""
		}
	},
	// 删除角色
	deleteRoles: config => {
		let data = JSON.parse(config.body);
		for (let i = 0; i < roleList.length; i++) {
			if (roleList[i].id == data.id) {
				roleList.splice(i, 1);
				break
			}
		}
		return {
			status: 200,
			message: "删除成功",
			data: ""
		}
	},
	// 根据角色获取菜单
	getMenuToRole: config => {
		let data = JSON.parse(config.body);
		let roles = data.roles; //角色数组
		let roleMenu = {};
		for (let i = 0; i < roles.length; i++) {
			roleMenu = {
				...roleMenu,
				...rolePermissions[roles[i]]
			}
		}
		let menuAllList = [];
		for (let key in roleMenu) {
			menuAllList.push(key);
			for (let chilKey in roleMenu[key]) {
				menuAllList.push(chilKey);
			}
		}
		menuAllList = Array.from(new Set(menuAllList));
		return {
			status: 200,
			message: "操作成功",
			data: menuAllList
		}
	},
	// 获取所有的菜单操作
	getMenuOperate: config => {
		let data = JSON.parse(config.body);
		let rolePer = rolePermissions[data.roleName];
		let menuPerList = [];
		let checkedKeys = [];
		menuList.map(ml => {
			if (ml.children.length > 0) {
				ml.children.map(mlc => {
					if (mlc.operate && mlc.operate.length > 0) {
						mlc["children"] = [];
						mlc.operate.map((mlco, i) => {
							operationList.map(item => {
								if (item.name == mlco) {
									mlc.children.push({
										id: mlc.id + item.id,
										name: item.name,
										title: item.title
									})
								}
							})
						})
					}
				})
				menuPerList.push(ml)
			}
		})
		menuPerList.map(m => {
			if (rolePer[m.name]) {
				m.children.map(mc => {
					if (rolePer[m.name][mc.name]) {
						mc.children.map(mcc => {
							if (rolePer[m.name][mc.name].indexOf(mcc.name) != -1) {
								checkedKeys.push(mcc.id);
							}
						})
					}
				})
			}
		})
		return {
			status: 200,
			message: "操作成功",
			data: {
				menuPerList: menuPerList,
				checkedKeys: checkedKeys
			}
		}
	},
	// 设置角色权限
	setRolePermissions: config => {
		let data = JSON.parse(config.body);
		let roleOper = data.checkedKey.filter(item => item.length == 8);
		let rolePerOper = {};
		roleOper.map(item => {
			let menuId1 = item.substring(0, 2);
			let menuId2 = item.substring(0, 5);
			let menuOper = item.substring(5) + "";
			let menuPath = menuList.filter(item => item.id == menuId1)[0];
			let menuName1 = menuPath.name;
			let menuName2 = menuPath.children.filter(item => item.id == menuId2)[0].name;
			let operName = operationList.filter(item => item.id == menuOper)[0].name;
			if (!rolePerOper[menuName1]) rolePerOper[menuName1] = {};
			if (!rolePerOper[menuName1][menuName2]) rolePerOper[menuName1][menuName2] = [];
			rolePerOper[menuName1][menuName2].push(operName);
		})
		if (!rolePermissions[data.roleName]) rolePermissions[data.roleName] = {};
		rolePermissions[data.roleName] = rolePerOper;
		return {
			status: 200,
			message: "操作成功",
			data: ""
		}
	}
}