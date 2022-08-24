/**
 * 用户登录、登出，设置用户信息，清除token等
 */

import {
	login,
	logout
} from '@/api/personal'
import {
	getUserInfo
} from '@/api/user'
import {
	getToken,
	setToken,
	removeToken
} from '@/utils/auth'

// 创建初始化状态
const state = {
	token: getToken(),
	userInfo: {},
	permissions: []
}
// 创建改变状态的方法
const mutations = {
	SET_TOKEN: (state, token) => {
		state.token = token;
	},
	SET_USER_INFO: (state, userinfo) => {
		state.userInfo = userinfo;
	},
	SET_PERMISSIONS: (state, permissions) => {
		state.permissions = permissions;
	}
}
// 创建驱动方法改变mutations
const actions = {
	login({
		commit
	}, userInfo) {
		return new Promise((resolve, reject) => {
			login(userInfo).then(res => {
				const {
					data
				} = res;
				commit('SET_TOKEN', data.token);
				setToken(data.token);
				resolve(res)
			}).catch(error => {
				reject(error);
			})
		})
	},
	logout({
		dispatch
	}) {
		return new Promise((resolve) => {
			logout().then(res => {
				dispatch('resetToken')
				resolve(res)
			}).catch(error => {
				reject(error);
			})
		})
	},
	resetToken({
		commit
	}) {
		return new Promise(resolve => {
			commit('SET_TOKEN', '')
			removeToken();
			resolve()
		})
	},
	getUserInfo({
		commit,
		state
	}) {
		return new Promise((resolve, reject) => {
			getUserInfo({
				token: state.token
			}).then(res => {
				const {
					data
				} = res;
				commit('SET_USER_INFO', data);
				commit('SET_PERMISSIONS', data.operateList);
				resolve(res)
			}).catch(error => {
				reject(error);
			})
		})
	}
}
// 输出store
export default {
	state,
	mutations,
	actions
};