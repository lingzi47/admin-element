import Mock from 'mockjs'

// 角色列表
export function roleListData() {
	return [{
		id: "001",
		name: "admin",
		title: "管理员",
		description: "超级管理员，拥有最高权限"
	}, {
		id: "002",
		name: "director",
		title: "部门主管",
		description: "拥有部门负责的所有权限"
	}, {
		id: "003",
		name: "ordinary",
		title: "普通用户",
		description: "拥有部分负责的部分权限"
	}, {
		id: "004",
		name: "test",
		title: "测试",
		description: "测试用户，比超级管理员都权限稍低一些"
	}, {
		id: "005",
		name: "tourist",
		title: "游客",
		description: "只有部分菜单的查询权限"
	}]
}

// 用户列表
export function userListData() {
	let roleList = roleListData();
	//随机生成账号
	let userList = []
	const num = 23
	for (let i = 0; i < num; i++) {
		let username = "test" + ((i - 2) < 10 ? ('00' + (i - 2)) : ((i - 2) < 100 ? ('0' + (i - 2)) : (i - 2)));
		let roles = [roleList[Mock.Random.integer(1, 4)].name];
		if (i == 0) {
			username = "admin";
			roles = ["admin"];
		} else if (i == 1) {
			username = "test";
			roles = ["test"];
		} else if (i == 2) {
			username = "tourist";
			roles = ["tourist"];
		}
		userList.push(
			Mock.mock({
				id: Mock.Random.guid(),
				username: username,
				password: "123456",
				avatar: "img/tx.gif",
				name: Mock.Random.cname(),
				phone: "1" + Mock.Random.integer(3, 9) + Mock.Random.integer(100000000, 999999999),
				addr: Mock.mock('@county(true)'),
				'age|18-60': 1,
				birth: Mock.Random.date(),
				sex: Mock.Random.integer(0, 1),
				email: Mock.Random.email(),
				state: true,
				roles: roles,
			})
		)
	}
	console.log(JSON.parse(JSON.stringify(userList)));
	return userList
}

// 操作列表
export function operationListData() {
	return [{
		id: "001",
		name: "search",
		title: "查询",
		describe: ""
	}, {
		id: "002",
		name: "add",
		title: "新增",
		describe: ""
	}, {
		id: "003",
		name: "edit",
		title: "编辑",
		describe: ""
	}, {
		id: "004",
		name: "delete",
		title: "删除",
		describe: ""
	}, {
		id: "005",
		name: "permissions",
		title: "权限设置",
		describe: ""
	}, {
		id: "006",
		name: "import",
		title: "导入",
		describe: ""
	}, {
		id: "007",
		name: "export",
		title: "导出",
		describe: ""
	}]
}

// 菜单列表
export function menuListData() {
	return [{
		id: "01",
		name: "login",
		title: "登录",
		path: "/login",
		children: [],
		operate: []
	}, {
		id: "02",
		name: "404",
		title: "404",
		path: "/404",
		children: [],
		operate: []
	}, {
		id: "03",
		name: "index",
		title: "工作台",
		path: "/index",
		children: [],
		operate: []
	}, {
		id: "04",
		name: "authority",
		title: "系统管理",
		path: "/authority",
		operate: [],
		children: [{
			id: "04001",
			name: "user",
			title: "用户管理",
			path: "/authority/user",
			operate: ["search", "add", "edit", "delete"],
		}, {
			id: "04002",
			name: "role",
			title: "角色管理",
			path: "/authority/role",
			operate: ["search", "add", "edit", "delete", "permissions"],
		}, {
			id: "04003",
			name: "menu",
			title: "菜单信息",
			path: "/authority/menu",
			operate: ["search", "edit"],
		}, {
			id: "04004",
			name: "operation",
			title: "操作信息",
			path: "/authority/operation",
			operate: ["search", "edit"],
		}, {
			id: "04005",
			name: "personal",
			title: "个人信息",
			path: "/authority/personal",
			operate: ["search", "edit"]
		}, ]
	}, {
		id: "05",
		name: "basis",
		title: "基础数据",
		path: "/basis",
		operate: [],
		children: [{
			id: "05001",
			name: "icon",
			title: "自定义图标",
			path: "/basis/icon",
			operate: ["search"],
		}, {
			id: "05002",
			name: "echarts",
			title: "eCharts图表",
			path: "/basis/echarts",
			operate: ["search"],
		}, {
			id: "05003",
			name: "wangeditor",
			title: "富文本编辑器",
			path: "/basis/wangeditor",
			operate: ["search"],
		}]
	}]
}

// 权限列表
export function rolePermissionsData() {
	var rolePermissions = {
		"admin": {
			"authority": {
				"user": ["search", "add", "edit", "delete"],
				"role": ["search", "add", "edit", "delete", "permissions"],
				"menu": ["search", "edit"],
				"operation": ["search", "edit"],
				"personal": ["search", "edit"]
			},
			"basis": {
				"icon": ["search"],
				"echarts": ["search"],
				"wangeditor": ["search"]
			}
		},
		"director": {
			"authority": {
				"user": ["search", "add", "edit", "delete"],
				"role": ["search"],
				"menu": ["search", "edit"],
				"operation": ["search", "edit"],
				"personal": ["search", "edit"]
			},
			"basis": {
				"icon": ["search"],
				"echarts": ["search"],
				"wangeditor": ["search"]
			}
		},
		"ordinary": {
			"authority": {
				"user": ["search"],
				"role": ["search"],
				"personal": ["search", "edit"]
			},
			"basis": {
				"icon": ["search"],
				"echarts": ["search"],
				"wangeditor": ["search"]
			}
		},
		"test": {
			"authority": {
				"user": ["search", "edit"],
				"role": ["search"],
				"menu": ["search", "edit"],
				"operation": ["search", "edit"],
				"personal": ["search", "edit"]
			}
		},
		"tourist": {
			"authority": {
				"user": ["search"],
				"role": ["search"],
				"personal": ["search"]
			},
			"basis": {
				"echarts": ["search"],
				"wangeditor": ["search"]
			}
		},
	}
	return rolePermissions
}

// 法定节假日
export function holidayListData() {
	// type,1放假，0加班
	return [{
			"date": "2021-01-01",
			"type": 1
		},
		{
			"date": "2021-01-02",
			"type": 1
		},
		{
			"date": "2021-01-03",
			"type": 1
		},
		{
			"date": "2021-02-07",
			"type": 0
		},
		{
			"date": "2021-02-11",
			"type": 1
		},
		{
			"date": "2021-02-12",
			"type": 1
		},
		{
			"date": "2021-02-13",
			"type": 1
		},
		{
			"date": "2021-02-14",
			"type": 1
		},
		{
			"date": "2021-02-15",
			"type": 1
		},
		{
			"date": "2021-02-16",
			"type": 1
		},
		{
			"date": "2021-02-17",
			"type": 1
		},
		{
			"date": "2021-02-20",
			"type": 0
		},
		{
			"date": "2021-04-03",
			"type": 1
		},
		{
			"date": "2021-04-04",
			"type": 1
		},
		{
			"date": "2021-04-05",
			"type": 1
		},
		{
			"date": "2021-04-25",
			"type": 0
		},
		{
			"date": "2021-05-01",
			"type": 1
		},
		{
			"date": "2021-05-02",
			"type": 1
		},
		{
			"date": "2021-05-03",
			"type": 1
		},
		{
			"date": "2021-05-04",
			"type": 1
		},
		{
			"date": "2021-05-05",
			"type": 1
		},
		{
			"date": "2021-05-08",
			"type": 0
		},
		{
			"date": "2021-06-12",
			"type": 1
		},
		{
			"date": "2021-06-13",
			"type": 1
		},
		{
			"date": "2021-06-14",
			"type": 1
		},
		{
			"date": "2021-09-18",
			"type": 0
		},
		{
			"date": "2021-09-19",
			"type": 1
		},
		{
			"date": "2021-09-20",
			"type": 1
		},
		{
			"date": "2021-09-21",
			"type": 1
		},
		{
			"date": "2021-09-26",
			"type": 0
		},
		{
			"date": "2021-10-01",
			"type": 1
		},
		{
			"date": "2021-10-02",
			"type": 1
		},
		{
			"date": "2021-10-03",
			"type": 1
		},
		{
			"date": "2021-10-04",
			"type": 1
		},
		{
			"date": "2021-10-05",
			"type": 1
		},
		{
			"date": "2021-10-06",
			"type": 1
		},
		{
			"date": "2021-10-07",
			"type": 1
		},
		{
			"date": "2021-10-09",
			"type": 0
		},
		{
			"date": "2022-01-01",
			"type": 1
		},
		{
			"date": "2022-01-02",
			"type": 1
		},
		{
			"date": "2022-01-03",
			"type": 1
		},
		{
			"date": "2022-01-29",
			"type": 0
		},
		{
			"date": "2022-01-30",
			"type": 0
		},
		{
			"date": "2022-01-31",
			"type": 1
		},
		{
			"date": "2022-02-01",
			"type": 1
		},
		{
			"date": "2022-02-02",
			"type": 1
		},
		{
			"date": "2022-02-03",
			"type": 1
		},
		{
			"date": "2022-02-04",
			"type": 1
		},
		{
			"date": "2022-02-05",
			"type": 1
		},
		{
			"date": "2022-02-06",
			"type": 1
		},
		{
			"date": "2022-04-02",
			"type": 0
		},
		{
			"date": "2022-04-03",
			"type": 1
		},
		{
			"date": "2022-04-04",
			"type": 1
		},
		{
			"date": "2022-04-05",
			"type": 1
		},
		{
			"date": "2022-04-24",
			"type": 0
		},
		{
			"date": "2022-04-30",
			"type": 1
		},
		{
			"date": "2022-05-01",
			"type": 1
		},
		{
			"date": "2022-05-02",
			"type": 1
		},
		{
			"date": "2022-05-03",
			"type": 1
		},
		{
			"date": "2022-05-04",
			"type": 1
		},
		{
			"date": "2022-05-07",
			"type": 0
		},
		{
			"date": "2022-06-03",
			"type": 1
		},
		{
			"date": "2022-06-04",
			"type": 1
		},
		{
			"date": "2022-06-05",
			"type": 1
		},
		{
			"date": "2022-09-10",
			"type": 1
		},
		{
			"date": "2022-09-11",
			"type": 1
		},
		{
			"date": "2022-09-12",
			"type": 1
		},
		{
			"date": "2022-10-01",
			"type": 1
		},
		{
			"date": "2022-10-02",
			"type": 1
		},
		{
			"date": "2022-10-03",
			"type": 1
		},
		{
			"date": "2022-10-04",
			"type": 1
		},
		{
			"date": "2022-10-05",
			"type": 1
		},
		{
			"date": "2022-10-06",
			"type": 1
		},
		{
			"date": "2022-10-07",
			"type": 1
		},
		{
			"date": "2022-10-08",
			"type": 0
		},
		{
			"date": "2022-10-09",
			"type": 0
		}
	]
}