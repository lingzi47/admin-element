import Mock from 'mockjs'
import {
	getUrlParam
} from '@/utils/index'
import {
	userListData,
	rolePermissionsData
} from '@/utils/data'
let userList = userListData();
let rolePermissions = rolePermissionsData();

export default {
	// 获取用户详情
	getUserInfo: config => {
		let data = JSON.parse(config.body);
		let userInfo = userList.filter(item => (item.username + "-accessToken") == data.token)[0];
		// 根据用户的角色获取操作
		let roles = userInfo.roles; //角色数组
		console.log(roles);
		let roleMenu = {};
		for (let i = 0; i < roles.length; i++) {
			roleMenu = {
				...roleMenu,
				...rolePermissions[roles[i]]
			}
		}
		let operateList = [];
		for (let key in roleMenu) {
			for (let chilKey in roleMenu[key]) {
				if (roleMenu[key][chilKey].length) {
					let menuOper = roleMenu[key][chilKey];
					for (let i = 0; i < menuOper.length; i++) {
						operateList.push(chilKey + menuOper[i])
					}
				}
			}
		}
		operateList = Array.from(new Set(operateList));
		userInfo["operateList"] = operateList;
		// console.log("用户详情", JSON.parse(JSON.stringify(userInfo)));
		return {
			status: 200,
			message: "操作成功",
			data: userInfo
		}
	},
	// 获取用户列表
	getUserList: config => {
		let parameter = getUrlParam(config.url);
		let data = userList.filter(item => (item.username.indexOf(parameter.username) != -1) &&
			(parameter.roles ? (item.roles.indexOf(parameter.roles) != -1) : true));
		let total = data.length;
		let startNum = (parameter.currentPage - 1) * parameter.pageSize + 1;
		let endNum = parameter.currentPage * parameter.pageSize;
		return {
			status: 200,
			message: "操作成功",
			data: data.slice(startNum - 1, endNum),
			total: total,
		}
	},
	// 根据用户ID获取用户详情
	getUserById: config => {
		let parameter = JSON.parse(config.body);
		let userInfo = userList.filter(item => item.id == parameter.userid)[0]
		return {
			status: 200,
			message: "操作成功",
			data: userInfo
		}
	},
	// 新增用户
	addUser: config => {
		let parameter = JSON.parse(config.body);
		parameter.id = Mock.Random.guid();
		parameter.addr = Mock.mock('@county(true)');
		parameter.email = Mock.Random.email();
		parameter.avatar = "img/tx.gif";
		parameter.state = true;
		userList.unshift(parameter);
		return {
			status: 200,
			message: "新增成功",
			data: ""
		}
	},
	// 编辑用户信息
	editUser: config => {
		let parameter = JSON.parse(config.body);
		userList.map((item, index) => {
			if (item.id == parameter.id) {
				userList.splice(index, 1, parameter);
			}
		})
		return {
			status: 200,
			message: "编辑成功",
			data: ""
		}
	},
	// 删除用户
	deleteUser: config => {
		let parameter = JSON.parse(config.body);
		for (let i = 0; i < userList.length; i++) {
			if (userList[i].id == parameter.id) {
				userList.splice(i, 1);
				break
			}
		}
		return {
			status: 200,
			message: "删除成功",
			data: ""
		}
	},
	// 修改密码
	modifyPwd: config => {
		let parameter = JSON.parse(config.body);
		let status = 200,
			message = "密码修改成功";
		let userInfo = userList.filter(item => item.id == parameter.userId)[0]
		if (userInfo.password == parameter.oldPwd) {
			userInfo.password = parameter.newPwd;
		} else {
			status = 201;
			message = "原密码不正确";
		}
		return {
			status: status,
			message: message,
			data: ""
		}
	}
}