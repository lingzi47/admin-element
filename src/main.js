import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'
import './permission'
import './utils/index'
import './assets/iconfont/iconfont.css'
import './mock'
//引入echart
//4.x 引用方式
import echarts from 'echarts'
//5.x 引用方式为按需引用
//希望使用5.x版本的话,需要在package.json中更新版本号,并切换引用方式
//import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false;

// 全局注册



Vue.config.productionTip = false
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	// 判断是否存在token,如果存在将每个页面header添加tok
	if (sessionStorage.getItem("token")) {
		config.headers.common['Authorization'] = sessionStorage.getItem("token");
	}
	return config
}, function (error) {
	router.push('/login')
	return Promise.reject(error)
})
//全局防抖
const on = Vue.prototype.$on
Vue.prototype.$on = function (event, func) {
	let timer;
	let flag = true;
	let newFunc = func
	if (event == 'click') {

		newFunc = function () {
			if (flag) {
				func.apply(this, arguments)
				flag = false
				// 	const loading = this.$loading({
				// 		lock: true,
				// 		text: 'Loading',
				// 		spinner: 'el-icon-loading',
				// 		background: 'rgba(0, 0, 0, 0.7)'
				// 	});
				// 	setTimeout(() => {
				// 		loading.close();
				// 	}, 150)
			}


			clearTimeout(timer)
			timer = setTimeout(function () {
				flag = true

			}, 1000)
		}
	}
	on.call(this, event, newFunc)
}

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
}).$mount('#app')