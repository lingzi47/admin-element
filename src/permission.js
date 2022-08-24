/**
 * 路由守卫，动态添加路由
 */

import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'
import {
	Message
} from 'element-ui'

const whiteList = ['/login']; // 白名单
NProgress.configure({
	showSpinner: false
})

router.beforeEach((to, from, next) => {
	NProgress.start() // 加载进度条
	document.title = '预见未来后台'

	const hasToken = store.getters.token;
	if (hasToken) {
		if (to.path === '/login') {
			next({
				path: '/'
			})
			NProgress.done()
		} else {
			const hasRoles = store.getters.userInfo.roles;
			if (!hasRoles || hasRoles.length == 0) {
				store.dispatch('user/getUserInfo').then(res => {
					const {
						data
					} = res;
					store.dispatch('routes/generateRoutes', {
						'roles': data.roles
					}).then(() => {
						// 根据roles权限生成可访问的路由表
						router.addRoutes(store.getters.addRouters) // 动态添加可访问权限路由表
						next({
							...to,
							replace: true
						})
					})
				}).catch(error => {
					store.dispatch('user/logout').then(() => {
						Message.error(error || "验证失败，请重新登录")
						next({
							path: '/'
						})
					})
				})
			} else {
				next()
				NProgress.done()
			}
		}
	} else {
		if (whiteList.indexOf(to.path) !== -1) {
			// 点击退出时,会定位到这里
			next()
		} else {
			next(`/login`)
			NProgress.done()
		}
	}
})

router.afterEach(() => {
	NProgress.done() // 结束Progress
})