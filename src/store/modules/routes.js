/**
 * 登录后路由权限设置
 */

import {
	asyncRoutes,
	baseRoutes
} from "@/router";
import {
	getRoleByMenu
} from '@/api/role'


/**
 * 递归路由，返回符合角色权限的路由
 * @param {Array} asyncRouterAll 所有路由
 * @param {Array} rolePer 角色权限路由
 */
function filterAsyncRouter(asyncRouterAll, rolePer) {
	let accessedRouters = asyncRouterAll.filter(role => {
		if (role.meta && role.meta.permissions && rolePer.indexOf(role.meta.permissions) !== -1) {
			if (role.children && role.children.length) {
				role.children = filterAsyncRouter(role.children, rolePer)
			}
			return true
		}
		return false;
	})
	return accessedRouters;
}

const state = {
	routers: [], //所有路由
	addRouters: [], //权限过滤路由
}

const mutations = {
	SET_ROUTERS: (state, routers) => {
		state.routers = baseRoutes.concat(routers) // 总路由
		state.addRouters = routers // 权限路由
	}
}

const actions = {
	// 根据角色，重新设置权限路由;并保存到vuex中,SET_ROUTERS;
	generateRoutes({
		commit
	}, data) {
		return new Promise(resolve => {
			let roles = data.roles;
			// 根据角色获取权限
			getRoleByMenu({
				roles: roles
			}).then(res => {
				let accessedRouters = '';
				if (roles.indexOf('admin') >= 0) {
					// 如果是管理员，直接将权限路由赋值给新路由;
					accessedRouters = asyncRoutes
				} else {
					// 非管理员用户,如roles:['editor','developer']，则需要过滤权限路由数据
					accessedRouters = filterAsyncRouter(asyncRoutes, res.data)
					accessedRouters.unshift(asyncRoutes[0]);
				}
				commit('SET_ROUTERS', accessedRouters)
				resolve()
			}).catch(error => {
				reject(error);
			})
		})
	}
}

export default {
	state,
	mutations,
	actions
};