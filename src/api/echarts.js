import request from '@/utils/request'

// 获取图表数据
export function getechartsData(data) {
	return request({
		url: '/echarts/getechartsData',
		method: 'post',
		data
	})
}