import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from "axios";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './permission'
import './utils/index'
import './assets/iconfont/iconfont.css'
import './mock'

// Vue.config.productionTip = false
// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
// 	// 在发送请求之前做些什么
// 	// 判断是否存在token,如果存在将每个页面header添加token
// 	if (sessionStorage.getItem("token")) {
// 		config.headers.common['Authorization'] = sessionStorage.getItem("token");
// 	}
// 	return config
// }, function (error) {
// 	router.push('/login')
// 	return Promise.reject(error)
// })
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
			}
			clearTimeout(timer)
			timer = setTimeout(function () {
				flag = true
			}, 500)
		}
	}
	on.call(this, event, newFunc)
}
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
// console.log("%c打印的数据为空", " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em")