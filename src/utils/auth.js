//获取token
export function getToken() {
	return sessionStorage.getItem("user-token")
}

//设置token
export function setToken(token) {
	return sessionStorage.setItem("user-token", token)
}

//清除token
export function removeToken() {
	return sessionStorage.removeItem("user-token")
}