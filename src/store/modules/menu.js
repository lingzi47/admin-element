/**
 * 左侧菜单及顶部tab标签的新增删除及页面缓存的处理
 */

const state = {
	isCollapse: false,	//是否折叠左侧菜单
	visitedRoutes: [],	//所有tab标签页
	tabActive: "",	//当前标签页name
	cachedViews: [],	//所有缓存的标签页name
}

const mutations = {
	SET_LEFT_COLLAPSE: (state, isCollapse) => {
		state.isCollapse = isCollapse
	},
	//设置当前标签页name
	SET_TAB_ACTIVE: (state, tab) => {
		if (state.tabActive != tab.name) {
			state.tabActive = tab.name
		}
	},

	//添加tab标签
	ADD_VISITED_ROUTES: (state, routes) => {
		if (state.visitedRoutes.some(v => v.name === routes.name)) return
		state.visitedRoutes.push(routes)
	},
	//删除tab标签
	DEL_VISITED_ROUTES: (state, routes) => {
		for (const [i, v] of state.visitedRoutes.entries()) {
			if (v.name === routes.name) {
				state.visitedRoutes.splice(i, 1)
				break
			}
		}
	},
	//删除其他tab标签(保留当前和控制台)
	DEL_OTHER_VISITED_ROUTES: (state, routes) => {
		state.visitedRoutes = state.visitedRoutes.filter(v => {
			return v.meta.affix || v.name === routes.name
		})
	},
	//删除所有tab标签(保留控制台)
	DEL_ALL_VISITED_ROUTES: state => {
		const affixTags = state.visitedRoutes.filter(v => v.meta.affix)
		state.visitedRoutes = affixTags
	},

	//添加缓存页
	ADD_CACHED_VIEW: (state, view) => {
		if (state.cachedViews.includes(view.name)) return
		if (!view.meta.noCache) {
			state.cachedViews.push(view.name)
		}
	},
	//删除缓存页
	DEL_CACHED_VIEW: (state, view) => {
		const index = state.cachedViews.indexOf(view.name)
		index > -1 && state.cachedViews.splice(index, 1)
	},
	//删除其他缓存页(保留当前和控制台)
	DEL_OTHER_CACHED_VIEW: (state, view) => {
		const index = state.cachedViews.indexOf(view.name)
		if (index > -1) {
			state.cachedViews = state.cachedViews.slice(index, index + 1)
		} else {
			state.cachedViews = []
		}
	},
	//删除所有缓存页(保留控制台)
	DEL_ALL_CACHED_VIEW: state => {
		state.cachedViews = []
	},

	INIT_TABS_ROUTES: (state, routeList) => {
		state.visitedRoutes = routeList
	},
}

const actions = {
	setLeftCollapse({ commit }, isCollapse) {
		commit('SET_LEFT_COLLAPSE', isCollapse)
	},
	setTabActive({ commit }, tab) {
		commit('SET_TAB_ACTIVE', tab)
	},
	//添加tab
	addView({ dispatch }, view) {
		dispatch('addVisitedRoutes', view)
		dispatch('addCachedView', view)
		dispatch('setTabActive', view)
	},
	addVisitedRoutes({ commit }, routes) {
		commit('ADD_VISITED_ROUTES', routes)
	},
	addCachedView({ commit }, view) {
		commit('ADD_CACHED_VIEW', view)
	},
	//删除tab
	delView({ dispatch }, view) {
		return new Promise(resolve => {
			dispatch('delVisitedRoutes', view)
			dispatch('delCachedView', view)
			resolve()
		})
	},
	delVisitedRoutes({ commit }, routes) {
		return new Promise(resolve => {
			commit('DEL_VISITED_ROUTES', routes)
			resolve()
		})
	},
	delCachedView({ commit }, view) {
		return new Promise(resolve => {
			commit('DEL_CACHED_VIEW', view)
			resolve()
		})
	},
	//删除其他tab
	delOtherView({ dispatch }, view) {
		return new Promise(resolve => {
			dispatch('delOtherVisitedRoutes', view)
			dispatch('delOtherCachedView', view)
			resolve()
		})
	},
	delOtherVisitedRoutes({ commit }, routes) {
		return new Promise(resolve => {
			commit('DEL_OTHER_VISITED_ROUTES', routes)
			resolve()
		})
	},
	delOtherCachedView({ commit }, view) {
		return new Promise(resolve => {
			commit('DEL_OTHER_CACHED_VIEW', view)
			resolve()
		})
	},
	//删除所有tab
	delAllView({ dispatch }) {
		return new Promise(resolve => {
			dispatch('delAllVisitedRoutes')
			dispatch('delAllCachedView')
			resolve()
		})
	},
	delAllVisitedRoutes({ commit }) {
		return new Promise(resolve => {
			commit('DEL_ALL_VISITED_ROUTES')
			resolve()
		})
	},
	delAllCachedView({ commit }) {
		return new Promise(resolve => {
			commit('DEL_ALL_CACHED_VIEW')
			resolve()
		})
	},
}

export default {
	state,
	mutations,
	actions
};
