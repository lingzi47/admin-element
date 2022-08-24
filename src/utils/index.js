/**
 * 格式化日期时间
 * @param {Object} format 日期格式
 * yyyy=年；M,MM=月；d,dd=日；dddd=星期；
 * H,HH=小时；m,mm=分钟；s,ss=秒；
 * S=毫秒；Q=季度
 * 例如：yyyy年MM月dd日 dddd HH:mm:ss S
 * 
 *console.log(new Date().format("yyyy年MM月dd日 dddd HH:mm:ss"));
 */
Date.prototype.format = function (format) {
	var weekArr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
	var o = {
		"y+": this.getFullYear(), //年
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"S": this.getMilliseconds(), //毫秒
		"ddd+": this.getDay(), //星期
		"Q": Math.floor((this.getMonth() + 3) / 3), //季度
	};
	for (var k in o) {
		if (k == "y+" && new RegExp("(" + k + ")", "i").test(format)) { //年
			format = format.replace(RegExp.$1, (o[k] + "").substr(4 - RegExp.$1.length));
		} else if (k == "ddd+" && new RegExp("(" + k + ")", "i").test(format)) { //星期
			format = format.replace(RegExp.$1, (RegExp.$1.length == 3) ? (o[k]) : (weekArr[o[k]]));
		} else if (new RegExp("(" + k + ")", (k == "M+" || k == "m+" ? "" : "i")).test(format)) {
			format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k])
				.length)));
		}
	}
	return format;
}


/**
 * @description 格式化时间
 * @param {Object} time
 * @param {Object} pattern
 */
export function parseTime(time, pattern) {
	if (arguments.length === 0 || !time) {
		return null
	}
	const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
	let date
	if (typeof time === 'object') {
		date = time
	} else {
		if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
			time = parseInt(time)
		} else if (typeof time === 'string') {
			time = time.replace(new RegExp(/-/gm), '/');
		}
		if ((typeof time === 'number') && (time.toString().length === 10)) {
			time = time * 1000
		}
		date = new Date(time)
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	}
	const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
		let value = formatObj[key]
		if (key === 'a') {
			return ['日', '一', '二', '三', '四', '五', '六'][value]
		}
		if (result.length > 0 && value < 10) {
			value = '0' + value
		}
		return value || 0
	})
	return time_str
}

/**
 * 从URL中获取参数，在mock中模拟get请求时获取参数
 * @param {Object} url
 */
export function getUrlParam(url) {
	const search = url.split('?')[1]
	if (!search) {
		return {}
	}
	return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +
		'"}')
}