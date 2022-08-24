import axios from 'axios'
import {
	Loading
} from "element-ui";
import store from '@/store'

// console.log(process.env.NODE_ENV)
// console.log(process.env.VUE_APP_BASE_URL)

/* if(process.env.NODE_ENV == "development"){
	//开发环境
}else if(process.env.NODE_ENV == "test"){
	//测试环境
}else{
	//生产环境
} */
// let baseURL = process.env.VUE_APP_BASE_URL
let baseURL = '/api';
// console.log(baseURL);

const service = axios.create({
	baseURL: 'baseURL',
	timeout: 5000 // 请求超时时间
})

let loadingInstance;
service.interceptors.request.use(
	config => {
		loadingInstance = Loading.service({
			text: "正在加载...",
			spinner: 'el-icon-loading',
			background: "rgba(0, 0, 0, 0.3)"
		});
		if (store.getters.token) {
			config.headers['token'] = store.getters.token;
		}
		return config
	},
	error => {
		Promise.reject(error)
	}
)
// response 拦截器
service.interceptors.response.use(
	response => {
		if (loadingInstance) loadingInstance.close();
		if (response.status === 200) {
			return Promise.resolve(response.data);
		} else {
			store.dispatch('user/resetToken').then(() => {
				location.reload()
			})
			return Promise.reject(response);
		}
	},
	error => {
		if (loadingInstance) loadingInstance.close();
		if (error && error.response) {
			switch (error.response.status) {
				case 400:
					error.message = '错误请求';
					break;
				case 401:
					error.message = '未授权，请重新登录';
					break;
				case 403:
					error.message = '拒绝访问';
					break;
				case 404:
					error.message = '请求错误,未找到该资源';
					break;
				case 405:
					error.message = '请求方法未允许';
					break;
				case 408:
					error.message = '请求超时';
					break;
				case 500:
					error.message = '服务器端出错';
					break;
				case 501:
					error.message = '网络未实现';
					break;
				case 502:
					error.message = '网络错误';
					break;
				case 503:
					error.message = '服务不可用';
					break;
				case 504:
					error.message = '网络超时';
					break;
				case 505:
					error.message = 'http版本不支持该请求';
					break;
				default:
					error.message = `未知错误${error.response.status}`;
			}
		} else {
			error.message = "连接到服务器失败";
		}
		return Promise.reject(error);
	}
)
export default service