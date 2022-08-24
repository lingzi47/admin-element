/**
 * 使用
 * 在template中使用：{{ $store.getters.token }}
 * 在script中使用：this.$store.getters.token
 * 在js中使用：store.getters.token
 */
const getters = {
	token: state => state.user.token,
	userInfo: state => state.user.userInfo,
	permissions: state => state.user.permissions,
	addRouters: state => state.routes.addRouters,
	routersList: state => state.routes.routers,
	isCollapse: state => state.menu.isCollapse,
	visitedRoutes: state => state.menu.visitedRoutes,
	tabActive: state => state.menu.tabActive,
	cachedViews: state => state.menu.cachedViews,
}

export default getters