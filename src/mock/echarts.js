import Mock from 'mockjs'

export default {
	// 获取角色列表
	getechartsData: config => {
		let data = [];
		var name1 = Mock.Random.cname();
		var name2 = Mock.Random.cname();
		var name3 = Mock.Random.cname();
		var name4 = Mock.Random.cname();
		for (let i = 0; i < 6; i++) {
			var salesVolume1 = Mock.Random.integer(10, 16);
			var salesVolume2 = Mock.Random.integer(18, 25);
			var salesVolume3 = Mock.Random.integer(12, 20);
			var salesVolume4 = Mock.Random.integer(16, 22);
			data.push({
				date: "2021-" + ((12 - i) < 10 ? '0' + (12 - i) : (12 - i)),
				personnel: [{
					name: name1,
					salesVolume: salesVolume1,
					salesAmount: salesVolume1 * 100 * Mock.Random.integer(1200, 1600)
				},{
					name: name2,
					salesVolume: salesVolume2,
					salesAmount: salesVolume2 * 100 * Mock.Random.integer(1200, 1600)
				},{
					name: name3,
					salesVolume: salesVolume3,
					salesAmount: salesVolume3 * 100 * Mock.Random.integer(1200, 1600)
				},{
					name: name4,
					salesVolume: salesVolume4,
					salesAmount: salesVolume4 * 100 * Mock.Random.integer(1200, 1600)
				}]
			})
		}
		return {
			status: 200,
			message: "操作成功",
			data: data
		}
	},
}
