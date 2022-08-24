/**
 * @description 判读是否为外链
 * @param path
 * @returns {boolean}
 */
export function isExternal(path) {
	return /^(https?:|mailto:|tel:)/.test(path);
}

/**
 * 判断是否为空
 * @param {Object} str
 */
export function isBlank(str) {
	return (
		str == null ||
		false ||
		str === "" ||
		str.trim() === "" ||
		str.toLocaleLowerCase().trim() === "null"
	);
}
/**
 * 判断是否是字符串
 * @param {Object} str
 */
export function isString(str) {
	return typeof str === "string" || str instanceof String;
}
/**
 * 判断是否是数组
 * @param {Object} arg
 */
export function isArray(arg) {
	if (typeof Array.isArray === "undefined") {
		return Object.prototype.toString.call(arg) === "[object Array]";
	}
	return Array.isArray(arg);
}
/**
 * 判断是否是对象
 * @param {Object} obj
 */
export function isObj(obj) {
	return Object.prototype.toString.call(obj) === '[object Object]';
}
/**
 * 判断是否是正整数
 * @param {Object} num
 */
export function isNum(num) {
	const reg = /^[1-9]\d*$/;
	return reg.test(num);
}
/**
 * 判断是否为数字且最多两位小数
 * @param {Object} num
 */
export function isSmallNum(num) {
	const reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
	return reg.test(num);
}
/**
 * 判断是否是手机号
 * @param {Object} str
 */
export function isPhone(str) {
	const reg = /^1[3456789]\d{9}$/;
	return reg.test(str);
}
/**
 * 判断是否是手机号或座机号
 * @param {Object} str
 */
export function isTelPhone(str) {
	const reg = /^(((1[3456789])\d{9})|((0\d{2,3})-?(\d{7,8})))$/;
	return reg.test(str);
}
/**
 * 判断是否是邮箱
 * @param {Object} str
 */
export function isEmail(str) {
	const reg = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
	return reg.test(str);
}
/**
 * 判断是否是中文
 * @param {Object} str
 */
export function isChina(str) {
	const reg = /^[\u4E00-\u9FA5]+$/;
	return reg.test(str);
}
/**
 * 判断是否是身份证号(第二代)
 * @param {Object} str
 */
export function isIdCard(str) {
	const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
	return reg.test(str);
}
