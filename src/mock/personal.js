import Mock from 'mockjs'

export default {
	// 用户登录
	login: config => {
		let data = JSON.parse(config.body);
		let token = "admin" + "-accessToken";
		return {
			status: 200,
			message: "登录成功",
			data: {
				token: token,
			}
		}
	},
	// 用户登出
	logout: config => {
		return {
			status: 200,
			message: "退出登录成功",
			data: {}
		}
	},
}