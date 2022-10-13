import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '@/layout'

export const baseRoutes = [{
	path: '/login',
	component: () => import("@/views/login/index"),
	hidden: true
}, {
	path: '/404',
	component: () => import("@/views/404"),
	hidden: true
}, {
	path: '/500',
	component: () => import("@/views/500"),
	hidden: true
}]

//noDropdown：不显示下拉，一般用于只有1级菜单
//hidden：隐藏菜单
//meta.noCache：为true不缓存页面
//meta.affix：为true固定在tab标签
export const asyncRoutes = [
	//隐藏
	{
		path: "/",
		redirect: "/index",
		component: Layout,
		noDropdown: true,
		hidden: true,
		meta: {
			title: "首页",
			icon: "el-icon-s-home",
		},
		children: [{
				path: "/nextUser",
				name: "nextUser",
				component: () => import("@/views/user/appuserset/nextUser"),
				meta: {
					title: "下级列表",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false

				}
			}, {
				path: "/upuser",
				name: "upuser",
				component: () => import("@/views/user/appuserset/upuser"),
				meta: {
					title: "上级列表",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false

				}
			}, {
				path: "/userlit",
				name: "userlit",
				component: () => import("@/views/examine/withdrawals/userlit"),
				meta: {
					title: "用户收益",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false

				}
			}, {
				path: "/userShow",
				name: "userShow",
				component: () => import("@/views/user/appuserset/usershow"),
				meta: {
					title: "用户详情",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false

				}
			},
			{
				path: "/usertext",
				name: "usertext",
				component: () => import("@/views/user/appuserset/usertext"),
				meta: {
					title: "分利信息",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false

				}
			}, {
				path: "/lotteryhis",
				name: "lotteryhis",
				component: () => import("@/views/activity/lottery/lotteryhis"),
				meta: {
					title: "抽奖列表详情",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false

				}
			},
			{
				path: "/lotteryhisshow",
				name: "lotteryhisshow",
				component: () => import("@/views/activity/lottery/lotteryhisshow"),
				meta: {
					title: "抽奖列表详情",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false

				}
			},
			{
				path: "/viphis",
				name: "viphis",
				component: () => import("@/views/activity/vip/viphis"),
				meta: {
					title: "会员赠送历史",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false

				}
			},
			{
				path: "/vouhis",
				name: "vouhis",
				component: () => import("@/views/activity/vouchers/vouhis"),
				meta: {
					title: "代金券历史",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				}
			},
			{
				path: "versionshow",
				name: "versionshow",
				component: () => import("@/views/global/appset/versionshow"),
				meta: {
					title: "版本详情",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false

				},
			}, {
				path: "diamondListshow",
				name: "diamondListshow",
				component: () => import("@/views/activity/diamond/diamondListshow"),
				meta: {
					title: "钻石雨领取详情",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false

				},
			},
			{
				path: "showtable",
				name: "showtable",
				component: () => import("@/views/broker/showtable"),
				meta: {
					title: "租赁应急箱",
					permissions: "showtable",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "fenrunadd",
				name: "fenrunadd",
				component: () => import("@/views/global/system/fenrunadd"),
				meta: {
					title: "分润设置",
					permissions: "fenrunadd",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "fenrunadd",
				name: "fenrunadd",
				component: () => import("@/views/global/system/fenrunadd"),
				meta: {
					title: "分润设置",
					permissions: "fenrunadd",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "fenrunstadt",
				name: "fenrunstadt",
				component: () => import("@/views/global/system/fenrunstadt"),
				meta: {
					title: "分润审核",
					permissions: "fenrunstadt",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "fenrunshow",
				name: "fenrunshow",
				component: () => import("@/views/global/system/fenrunshow"),
				meta: {
					title: "分润查看",
					permissions: "fenrunshow",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "ordershow",
				name: "ordershow",
				component: () => import("@/views/shop/hisorder/ordershow"),
				meta: {
					title: "历史订单查看",
					permissions: "ordershow",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
		],
	},
	//用户路由
	{
		path: "/",
		redirect: "/index",
		component: Layout,
		noDropdown: true,
		meta: {
			title: "首页",
			icon: "el-icon-s-home",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
			path: "/index",
			name: "index",
			component: () => import("@/views/index/index"),
			meta: {
				title: "工作台",
				icon: "el-icon-s-home",
				affix: true,
			}
		}],
	},
	{
		path: "/user",
		name: "user",
		component: Layout,
		meta: {
			title: "用户设置",
			icon: "el-icon-user-solid",
			permissions: "user",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
				path: "powermanage",
				name: "powermanage",
				component: () => import("@/views/user/powermanage"),
				meta: {
					title: "权限管理",

					permissions: "powermanage",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
					path: "powerlist",
					name: "powerlist",
					component: () => import("@/views/user/powermanage/powerlist"),
					meta: {
						title: "权限列表",
						permissions: "powerlist",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "bguserlist",
					name: "bguserlist",
					component: () => import("@/views/user/powermanage/bguserlist"),
					meta: {
						title: "后台角色组",
						permissions: "bguserlist",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "business",
					name: "business",
					component: () => import("@/views/user/powermanage/business"),
					meta: {
						title: "商家角色组",
						permissions: "business",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}]
			},
			{
				path: "bgaccountset",
				name: "bgaccountset",
				component: () => import("@/views/user/bgaccountset"),
				meta: {
					title: "后台账号管理",
					permissions: "bgaccountset",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
						path: "bgaccount",
						name: "bgaccount",
						component: () => import("@/views/user/bgaccountset/bgaccount"),
						meta: {
							title: "后台账号",
							permissions: "bgaccount",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "busaccount",
						name: "busaccount",
						component: () => import("@/views/user/bgaccountset/busaccount"),
						meta: {
							title: "商城商家账号",
							permissions: "busaccount",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "lifeaccount",
						name: "lifeaccount",
						component: () => import("@/views/user/bgaccountset/lifeaccount"),
						meta: {
							title: "生活商家账号",
							permissions: "lifeaccount",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}
				]
			}, {
				path: "appuserset",
				name: "appuserset",
				component: () => import("@/views/user/appuserset"),
				meta: {
					title: "app用户管理",
					permissions: "appuserset",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
					path: "userlist",
					name: "userlist",
					component: () => import("@/views/user/appuserset/userlist"),
					meta: {
						title: "用户列表",
						permissions: "userlist",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, ]
			},
		],
	},







	//活动
	{
		path: "/activity",
		name: "activity",
		component: Layout,
		meta: {
			title: "活动管理",
			icon: "el-icon-present ",
			permissions: "activity",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
				path: "lottery",
				name: "lottery",
				component: () => import("@/views/activity/lottery"),
				meta: {
					title: "抽奖活动",
					permissions: "lottery",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
					path: "lotteryList",
					name: "lotteryList",
					component: () => import("@/views/activity/lottery/lotteryList"),
					meta: {
						title: "抽奖奖项列表展示",
						permissions: "lotteryList",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "lotterySet",
					name: "lotterySet",
					component: () => import("@/views/activity/lottery/lotterySet"),
					meta: {
						title: "抽奖奖项及概率设置",
						permissions: "lotterySet",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}

				}]
			}, {
				path: "diamond",
				name: "diamond",
				component: () => import("@/views/activity/diamond"),
				meta: {
					title: "钻石雨活动",
					permissions: "bgaccountset"
				},
				children: [{
					path: "diamondList",
					name: "diamondList",
					component: () => import("@/views/activity/diamond/diamondList"),
					meta: {
						title: "钻石雨释放列表",
						permissions: "diamondList",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}]
			}, {
				path: "vip",
				name: "vip",
				component: () => import("@/views/activity/vip"),
				meta: {
					title: "会员活动",
					permissions: "vip",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
						path: "vipAdd",
						name: "vipAdd",
						component: () => import("@/views/activity/vip/vipAdd"),
						meta: {
							title: "消费送会员",
							permissions: "vipAdd",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "vipList",
						name: "vipList",
						component: () => import("@/views/activity/vip/vipList"),
						meta: {
							title: "会员赠送",
							permissions: "vipList",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
				]
			},
			{
				path: "vouchers",
				name: "vouchers",
				component: () => import("@/views/activity/vouchers"),
				meta: {
					title: "代金券",
					permissions: "vouchers"
				},
				children: [{
						path: "vouchersList",
						name: "vouchersList",
						component: () => import("@/views/activity/vouchers/vouchersList"),
						meta: {
							title: "代金券列表",
							permissions: "vouchersList",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "vouchersAdd",
						name: "vouchersAdd",
						component: () => import("@/views/activity/vouchers/vouchersAdd"),
						meta: {
							title: "代金券释放列表",
							permissions: "vouchersAdd",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "vouchersAddlist",
						name: "vouchersAddlist",
						component: () => import("@/views/activity/vouchers/vouchersAddlist"),
						meta: {
							title: "代金券任务列表",
							permissions: "vouchersAddlist",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
				]
			},
			{
				path: "vippk",
				name: "vippk",
				component: () => import("@/views/activity/vippk"),
				meta: {
					title: "推荐用户购买商品送PK值活动",
					permissions: "vippk"
				},
				children: [{
						path: "vippklist",
						name: "vippklist",
						component: () => import("@/views/activity/vippk/vippklist"),
						meta: {
							title: "推荐用户购买商品送PK值",
							permissions: "vippklist",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},

				]
			},
		],
	},
	//商城
	{
		path: "/shop",
		name: "shop",
		component: Layout,
		meta: {
			title: "商城管理",
			icon: "el-icon-s-shop",
			permissions: "shop"
		},
		children: [{
				path: "special",
				name: "special",
				component: () => import("@/views/shop/special"),
				meta: {
					title: "预见专区",
					permissions: "element"
				},
				children: [{
					path: "specialgoods",
					name: "specialgoods",
					component: () => import("@/views/shop/special/specialgoods"),
					meta: {
						title: "商品列表",
						permissions: "goods",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "specialtype",
					name: "specialtype",
					component: () => import("@/views/shop/special/specialtype"),
					meta: {
						title: "商城分类",
						permissions: "type",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "specialorder",
					name: "specialorder",
					component: () => import("@/views/shop/special/specialorder"),
					meta: {
						title: "商品订单",
						permissions: "order",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "specialrefund",
					name: "specialrefund",
					component: () => import("@/views/shop/special/specialrefund"),
					meta: {
						title: "退款订单",
						permissions: "refund",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}]
			},
			//遇见商城
			{
				path: "mall",
				name: "mall",
				component: () => import("@/views/shop/mall"),
				meta: {
					title: "预见商城",
					permissions: "mall"
				},
				children: [{
					path: "mallgoods",
					name: "mallgoods",
					component: () => import("@/views/shop/mall/mallgoods"),
					meta: {
						title: "商品列表",
						permissions: "mallgoods",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "malltype",
					name: "malltype",
					component: () => import("@/views/shop/mall/malltype"),
					meta: {
						title: "商城分类",
						permissions: "malltype",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "mallorder",
					name: "mallorder",
					component: () => import("@/views/shop/mall/mallorder"),
					meta: {
						title: "商品订单",
						permissions: "mallorder",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "mallrefund",
					name: "mallrefund",
					component: () => import("@/views/shop/mall/mallrefund"),
					meta: {
						title: "退款订单",
						permissions: "mallrefund",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}]
			},
			//遇见生活
			{
				path: "life",
				name: "life",
				component: () => import("@/views/shop/life"),
				meta: {
					title: "遇见生活",
					permissions: "life",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
					path: "lifegoods",
					name: "lifegoods",
					component: () => import("@/views/shop/life/lifegoods"),
					meta: {
						title: "商品列表",
						permissions: "lifegoods",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "lifetype",
					name: "lifetype",
					component: () => import("@/views/shop/life/lifetype"),
					meta: {
						title: "商城分类",
						permissions: "lifetype",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "lifeorder",
					name: "lifeorder",
					component: () => import("@/views/shop/life/lifeorder"),
					meta: {
						title: "商品订单",
						permissions: "lifeorder",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "liferefund",
					name: "liferefund",
					component: () => import("@/views/shop/life/liferefund"),
					meta: {
						title: "退款订单",
						permissions: "liferefund",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}]
			},
			//推广专区
			{
				path: "extend",
				name: "extend",
				component: () => import("@/views/shop/extend"),
				meta: {
					title: "推广专区",
					permissions: "extend"
				},
				children: [{
						path: "extendgoods",
						name: "extendgoods",
						component: () => import("@/views/shop/extend/extendgoods"),
						meta: {
							title: "商品列表",
							permissions: "extendgoods",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "extendtype",
						name: "extendtype",
						component: () => import("@/views/shop/extend/extendtype"),
						meta: {
							title: "商城分类",
							permissions: "extendtype",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "extendorder",
						name: "extendorder",
						component: () => import("@/views/shop/extend/extendorder"),
						meta: {
							title: "商品订单",
							permissions: "extendorder",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "extendrefund",
						name: "extendrefund",
						component: () => import("@/views/shop/extend/extendrefund"),
						meta: {
							title: "退款订单",
							permissions: "extendrefund",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "bonuspool",
						name: "bonuspool",
						component: () => import("@/views/shop/extend/bonuspool"),
						meta: {
							title: "奖金池",
							permissions: "bonuspool",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "spellinglist",
						name: "spellinglist",
						component: () => import("@/views/shop/extend/spellinglist"),
						meta: {
							title: "拼单列表",
							permissions: "spellinglist",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}
				]
			},



			{
				path: "explosives",
				name: "explosives",
				component: () => import("@/views/shop/explosives"),
				meta: {
					title: "爆品商品",
					permissions: "explosives"
				},
				children: [{
					path: "explosivesgoods",
					name: "explosivesgoods",
					component: () => import("@/views/shop/explosives/explosivesgoods"),
					meta: {
						title: "商品列表",
						permissions: "explosivesgoods",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "explosivestype",
					name: "explosivestype",
					component: () => import("@/views/shop/explosives/explosivestype"),
					meta: {
						title: "商城分类",
						permissions: "explosivestype",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "explosivesorder",
					name: "explosivesorder",
					component: () => import("@/views/shop/explosives/explosivesorder"),
					meta: {
						title: "商品订单",
						permissions: "explosivesorder",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "explosivesrefund",
					name: "explosivesrefund",
					component: () => import("@/views/shop/explosives/explosivesrefund"),
					meta: {
						title: "退款订单",
						permissions: "explosivesrefund",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}]
			},
			{
				path: "promoter",
				name: "promoter",
				component: () => import("@/views/shop/promoter"),
				meta: {
					title: "推广员",
					permissions: "promoter",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
					path: "promoterorder",
					name: "promoterorder",
					component: () => import("@/views/shop/promoter/promoterorder"),
					meta: {
						title: "推广员订单",
						permissions: "promoterorder",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, ]
			},
			{
				path: "hisorder",
				name: "hisorder",
				component: () => import("@/views/shop/hisorder"),
				meta: {
					title: "历史订单",
					permissions: "hisorder",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
					path: "historyorder",
					name: "historyorder",
					component: () => import("@/views/shop/hisorder/historyorder"),
					meta: {
						title: "历史订单",
						permissions: "historyorder",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, ]
			},

		],
	},
	//审核
	{
		path: "/examine",
		name: "examine",
		component: Layout,
		meta: {
			title: "审核管理",
			icon: "el-icon-s-management",
			permissions: "examine",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
				path: "withdrawals",
				name: "withdrawals",
				component: () => import("@/views/examine/withdrawals"),
				meta: {
					title: "提现审核",
					permissions: "withdrawals",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
					path: "userdrawals",
					name: "userdrawals",
					component: () => import("@/views/examine/withdrawals/userdrawals"),
					meta: {
						title: "用户钻石审核",
						permissions: "userdrawals",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "webdrawals",
					name: "webdrawals",
					component: () => import("@/views/examine/withdrawals/webdrawals"),
					meta: {
						title: "外埠市场提现审核",
						permissions: "webdrawals",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "busdrawals",
					name: "busdrawals",
					component: () => import("@/views/examine/withdrawals/busdrawals"),
					meta: {
						title: "商家提现审核",
						permissions: "busdrawals",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "earnrawals",
					name: "earnrawals",
					component: () => import("@/views/examine/withdrawals/earnrawals"),
					meta: {
						title: "收益提现审核",
						permissions: "earnrawals",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, ]
			},
			{
				path: "pointaudit",
				name: "pointaudit",
				component: () => import("@/views/examine/pointaudit"),
				meta: {
					title: "点位审核",
					permissions: "pointaudit",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
					path: "laying",
					name: "laying",
					component: () => import("@/views/examine/pointaudit/laying"),
					meta: {
						title: "铺设点位审核",
						permissions: "laying",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "bind",
					name: "bind",
					component: () => import("@/views/examine/pointaudit/bind"),
					meta: {
						title: "点位绑定审核",
						permissions: "bind",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "disuse",
					name: "disuse",
					component: () => import("@/views/examine/pointaudit/disuse"),
					meta: {
						title: "废弃点位审核",
						permissions: "disuse",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, ]
			},
			{
				path: "invensta",
				name: "invensta",
				component: () => import("@/views/examine/invensta"),
				meta: {
					title: "商品库存审核",
					permissions: "invensta",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
					path: "storagesta",
					name: "storagesta",
					component: () => import("@/views/examine/invensta/storagesta"),
					meta: {
						title: "入库审核",
						permissions: "storagesta",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "goodsoutsta",
					name: "goodsoutsta",
					component: () => import("@/views/examine/invensta/goodsoutsta"),
					meta: {
						title: "出库审核",
						permissions: "goodsoutsta",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}]
			},
			{
				path: "projectupsta",
				name: "projectupsta",
				component: () => import("@/views/examine/projectupsta"),
				meta: {
					title: "项目上传审核",
					permissions: "projectupsta",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "fenrunsta",
				name: "fenrunsta",
				component: () => import("@/views/examine/fenrunsta"),
				meta: {
					title: "分润审核",
					permissions: "fenrunsta",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "brokersta",
				name: "brokersta",
				component: () => import("@/views/examine/brokersta"),
				meta: {
					title: "手动添加租赁商",
					permissions: "brokersta",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "spellsta",
				name: "spellsta",
				component: () => import("@/views/examine/spellsta"),
				meta: {
					title: "拼单审核",
					permissions: "spellsta",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "pharmacysta",
				name: "pharmacysta",
				component: () => import("@/views/examine/pharmacysta"),
				meta: {
					title: "药房审核",
					permissions: "pharmacysta",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "messagesta",
				name: "messagesta",
				component: () => import("@/views/examine/messagesta"),
				meta: {
					title: "站内信息审核",
					permissions: "messagesta",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "actaudit",
				name: "actaudit",
				component: () => import("@/views/examine/actaudit"),
				meta: {
					title: "活动审核",
					permissions: "actaudit",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
						path: "lotterylistadt",
						name: "lotterylistadt",
						component: () => import("@/views/examine/actaudit/lotterylistadt"),
						meta: {
							title: "抽奖列表审核",
							permissions: "lotterylistadt",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "releasediamond",
						name: "releasediamond",
						component: () => import("@/views/examine/actaudit/releasediamond"),
						meta: {
							title: "钻石雨手动释放审核",
							permissions: "releasediamond",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "sendmembers",
						name: "sendmembers",
						component: () => import("@/views/examine/actaudit/sendmembers"),
						meta: {
							title: "消费送会员审核",
							permissions: "sendmembers",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "membersset",
						name: "membersset",
						component: () => import("@/views/examine/actaudit/membersset"),
						meta: {
							title: "会员赠送审核",
							permissions: "membersset",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "vouchersaddadt",
						name: "vouchersaddadt",
						component: () => import("@/views/examine/actaudit/vouchersaddadt"),
						meta: {
							title: "代金券添加审核",
							permissions: "vouchersaddadt",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "voucherrelease",
						name: "voucherrelease",
						component: () => import("@/views/examine/actaudit/voucherrelease"),
						meta: {
							title: "代金券释放审核",
							permissions: "voucherrelease",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "vouchermissions",
						name: "vouchermissions",
						component: () => import("@/views/examine/actaudit/vouchermissions"),
						meta: {
							title: "代金券任务审核",
							permissions: "vouchermissions",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "sendpk",
						name: "sendpk",
						component: () => import("@/views/examine/actaudit/sendpk"),
						meta: {
							title: "推荐购买送pk值审核",
							permissions: "sendpk",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
				]
			},

			{
				path: "examinespecial",
				name: "examinespecial",
				component: () => import("@/views/examine/special"),
				meta: {
					title: "商品上架审核",
					permissions: "special",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
						path: "foreseegoodsadt",
						name: "foreseegoodsadt",
						component: () => import("@/views/examine/special/foreseegoodsadt"),
						meta: {
							title: "预见专区商品",
							permissions: "foreseegoodsadt",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "meetgoodsadt",
						name: "meetgoodsadt",
						component: () => import("@/views/examine/special/meetgoodsadt"),
						meta: {
							title: "预见商城商品",
							permissions: "meetgoodsadt",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "lifegoodsadt",
						name: "lifegoodsadt",
						component: () => import("@/views/examine/special/lifegoodsadt"),
						meta: {
							title: "预见生活商品",
							permissions: "lifegoodsadt",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "popularizeadt",
						name: "popularizeadt",
						component: () => import("@/views/examine/special/popularizeadt"),
						meta: {
							title: "推广专区商品",
							permissions: "popularizeadt",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "explosivesadt",
						name: "explosivesadt",
						component: () => import("@/views/examine/special/explosivesadt"),
						meta: {
							title: "爆款商品",
							permissions: "explosivesadt",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}
				]
			},
			{
				path: "appsetaudit",
				name: "appsetaudit",
				component: () => import("@/views/examine/appsetaudit"),
				meta: {
					title: "app设置审核",
					permissions: "appsetaudit",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
						path: "versionaudit",
						name: "versionaudit",
						component: () => import("@/views/examine/appsetaudit/versionaudit"),
						meta: {
							title: "版本审核",
							permissions: "versionaudit",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "banneraudit",
						name: "banneraudit",
						component: () => import("@/views/examine/appsetaudit/banneraudit"),
						meta: {
							title: "banner审核",
							permissions: "banneraudit",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "dividendsaudit",
						name: "dividendsaudit",
						component: () => import("@/views/examine/appsetaudit/dividendsaudit"),
						meta: {
							title: "分利信息审核",
							permissions: "dividendsaudit",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
				]
			},
			{
				path: "goodsrefunds",
				name: "goodsrefunds",
				component: () => import("@/views/examine/goodsrefunds"),
				meta: {
					title: "商品订单退款审核",
					permissions: "goodsrefunds",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
						path: "foreseeaudit",
						name: "foreseeaudit",
						component: () => import("@/views/examine/goodsrefunds/foreseeaudit"),
						meta: {
							title: "预见专区订单退款",
							permissions: "foreseeaudit",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "meetaudit",
						name: "meetaudit",
						component: () => import("@/views/examine/goodsrefunds/meetaudit"),
						meta: {
							title: "遇见商城订单退款",
							permissions: "meetaudit",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "lifeaudit",
						name: "lifeaudit",
						component: () => import("@/views/examine/goodsrefunds/lifeaudit"),
						meta: {
							title: "遇见生活订单退款",
							permissions: "lifeaudit",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},

					{
						path: "popularizeaudit",
						name: "popularizeaudit",
						component: () => import("@/views/examine/goodsrefunds/popularizeaudit"),
						meta: {
							title: "推广专区订单退款",
							permissions: "popularizeaudit",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "explosivesaudit",
						name: "explosivesaudit",
						component: () => import("@/views/examine/goodsrefunds/explosivesaudit"),
						meta: {
							title: "爆品商品订单退款",
							permissions: "explosivesaudit",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
				]
			},
		],
	},
	{
		path: "/finance",
		name: "finance",
		component: Layout,
		meta: {
			title: "财务统计",
			icon: "el-icon-s-finance",
			permissions: "finance",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
			path: "foresee",
			name: "foresee",
			component: () => import("@/views/finance/foresee"),
			meta: {
				title: "预见专区",
				permissions: "foresee",
				keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
				isBack: false
			},
		}, {
			path: "meet",
			name: "meet",
			component: () => import("@/views/finance/meet"),
			meta: {
				title: "预见商城",
				permissions: "meet",
				keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
				isBack: false
			},
		}, {
			path: "life",
			name: "life",
			component: () => import("@/views/finance/life"),
			meta: {
				title: "预见生活",
				permissions: "life",
				keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
				isBack: false
			},
		}, {
			path: "popular",
			name: "popular",
			component: () => import("@/views/finance/popular"),
			meta: {
				title: "推广专区",
				permissions: "popular",
				keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
				isBack: false
			},
		}],
	},
	{
		path: "/statistics",
		name: "statistics",
		component: Layout,
		meta: {
			title: "数据统计",
			icon: "el-icon-s-home",
			permissions: "statistics",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
				path: "actdata",
				name: "actdata",
				component: () => import("@/views/statistics/actdata"),
				meta: {
					title: "抽奖活动",

					permissions: "actdata",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
					path: "lotterydata",
					name: "lotterydata",
					component: () => import("@/views/statistics/actdata/lotterydata"),
					meta: {
						title: "抽奖活动数据统计",
						permissions: "lotterydata",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, {
					path: "diamonddata",
					name: "diamonddata",
					component: () => import("@/views/statistics/actdata/diamonddata"),
					meta: {
						title: "钻石雨数据统计",
						permissions: "diamonddata",
						keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
						isBack: false
					}
				}, ]
			},
			{
				path: "vouchersdata",
				name: "vouchersdata",
				component: () => import("@/views/statistics/vouchersdata"),
				meta: {
					title: "代金券数据统计",
					permissions: "vouchersdata",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "repList",
				name: "repList",
				component: () => import("@/views/statistics/repList"),
				meta: {
					title: "商品补货统计",
					permissions: "repList",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "goodslease",
				name: "goodslease",
				component: () => import("@/views/statistics/goodslease"),
				meta: {
					title: "商品订单统计",
					permissions: "goodslease",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "boxlease",
				name: "boxlease",
				component: () => import("@/views/statistics/boxlease"),
				meta: {
					title: "租赁订单统计",
					permissions: "boxlease",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "vipdata",
				name: "vipdata",
				component: () => import("@/views/statistics/vipdata"),
				meta: {
					title: "会员数据统计",
					permissions: "vipdata",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "diamondpaydata",
				name: "diamondpaydata",
				component: () => import("@/views/statistics/diamondpaydata"),
				meta: {
					title: "钻石充值数据统计",
					permissions: "diamondpaydata",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},

			{
				path: "newcomerdata",
				name: "newcomerdata",
				component: () => import("@/views/statistics/newcomerdata"),
				meta: {
					title: "新人红包数据统计",
					permissions: "newcomerdata",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "popularizetj",
				name: "popularizetj",
				component: () => import("@/views/statistics/popularizetj"),
				meta: {
					title: "推广员统计",
					permissions: "popularizetj",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},

			{
				path: "userdatas",
				name: "userdatas",
				component: () => import("@/views/statistics/userdatas"),
				meta: {
					title: "用户数据统计",
					permissions: "userdatas",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
						path: "userdata",
						name: "userdata",
						component: () => import("@/views/statistics/userdatas/userdata"),
						meta: {
							title: "用户数据统计",
							permissions: "userdata",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "silentuserdata",
						name: "silentuserdata",
						component: () => import("@/views/statistics/userdatas/silentuserdata"),
						meta: {
							title: "沉默用户数据统计",
							permissions: "silentuserdata",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "userpaydata",
						name: "userpaydata",
						component: () => import("@/views/statistics/userdatas/userpaydata"),
						meta: {
							title: "用户付费数据统计",
							permissions: "userpaydata",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "useractdata",
						name: "useractdata",
						component: () => import("@/views/statistics/userdatas/useractdata"),
						meta: {
							title: "用户行为分析统计",
							permissions: "useractdata",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
				]
			},
		],
	},
	{
		path: "/global",
		name: "global",
		component: Layout,
		meta: {
			title: "全局设置",
			icon: "el-icon-s-tools",
			permissions: "global",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
				path: "system",
				name: "system",
				component: () => import("@/views/global/system"),
				meta: {
					title: "系统设置",

					permissions: "system",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
						path: "weixin",
						name: "weixin",
						component: () => import("@/views/global/system/weixin"),
						meta: {
							title: "微信配置",
							permissions: "weixin",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					}, {
						path: "ali",
						name: "ali",
						component: () => import("@/views/global/system/ali"),
						meta: {
							title: "阿里账户设置",
							permissions: "ali",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "courier",
						name: "courier",
						component: () => import("@/views/global/system/courier"),
						meta: {
							title: "快递100",
							permissions: "courier",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "consultation",
						name: "consultation",
						component: () => import("@/views/global/system/consultation"),
						meta: {
							title: "前端用户咨询反馈",
							permissions: "consultation",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "projectup",
						name: "projectup",
						component: () => import("@/views/global/system/projectup"),
						meta: {
							title: "应急箱项目上传",
							permissions: "projectup",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "fenrun",
						name: "fenrun",
						component: () => import("@/views/global/system/fenrun"),
						meta: {
							title: "推广分润设置",
							permissions: "fenrun",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "goodspay",
						name: "goodspay",
						component: () => import("@/views/global/system/goodspay"),
						meta: {
							title: "补货申请",
							permissions: "goodspay",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
				]
			},

			{
				path: "appset",
				name: "appset",
				component: () => import("@/views/global/appset"),
				meta: {
					title: "app设置",
					permissions: "appset",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
				children: [{
						path: "version",
						name: "version",
						component: () => import("@/views/global/appset/version"),
						meta: {
							title: "版本设置",
							permissions: "version",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "dividends",
						name: "dividends",
						component: () => import("@/views/global/appset/dividends"),
						meta: {
							title: "分利信息",
							permissions: "dividends",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},
					{
						path: "banner",
						name: "banner",
						component: () => import("@/views/global/appset/banner"),
						meta: {
							title: "banner设置",
							permissions: "banner",
							keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
							isBack: false
						}
					},


				]
			},

		],
	},
	{
		path: "/broker",
		name: "broker",
		component: Layout,
		meta: {
			title: "租赁商管理",
			icon: "el-icon-s-finance",
			permissions: "broker",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
			path: "brokerlist",
			name: "brokerlist",
			component: () => import("@/views/broker/brokerlist"),
			meta: {
				title: "租赁商列表",
				permissions: "brokerlist",
				keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
				isBack: false
			},
		}, ],
	},
	{
		path: "/points",
		name: "points",
		component: Layout,
		meta: {
			title: "铺设点位管理",
			icon: "el-icon-s-finance",
			permissions: "points",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
				path: "pointslist",
				name: "pointslist",
				component: () => import("@/views/points/pointslist"),
				meta: {
					title: "点位列表",
					permissions: "pointslist",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "pointslistpay",
				name: "pointslistpay",
				component: () => import("@/views/points/pointslistpay"),
				meta: {
					title: "点位申请列表",
					permissions: "pointslistpay",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
		],
	},
	{
		path: "/emergency",
		name: "emergency",
		component: Layout,
		meta: {
			title: "应急箱管理",
			icon: "el-icon-s-finance",
			permissions: "emergency",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
			path: "emergencylist",
			name: "emergencylist",
			component: () => import("@/views/emergency/emergencylist"),
			meta: {
				title: "应急箱列表",
				permissions: "emergencylist",
				keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
				isBack: false
			},
		}, ],
	},
	{
		path: "/pharmacy",
		name: "pharmacy",
		component: Layout,
		meta: {
			title: "药房管理",
			icon: "el-icon-s-finance",
			permissions: "pharmacy",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
				path: "pharmacylist",
				name: "pharmacylist",
				component: () => import("@/views/pharmacy/pharmacylist"),
				meta: {
					title: "药房列表",
					permissions: "pharmacylist",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "pharmacyfen",
				name: "pharmacyfen",
				component: () => import("@/views/pharmacy/pharmacyfen"),
				meta: {
					title: "药房分润",
					permissions: "pharmacyfen",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
		],
	},
	{
		path: "/inven",
		name: "inven",
		component: Layout,
		meta: {
			title: "库存管理",
			icon: "el-icon-s-finance",
			permissions: "inven",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
				path: "invenlist",
				name: "invenlist",
				component: () => import("@/views/inven/invenlist"),
				meta: {
					title: "库存管理",
					permissions: "invenlist",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "goodsinvenlist",
				name: "goodsinvenlist",
				component: () => import("@/views/inven/goodsinvenlist"),
				meta: {
					title: "商品库存",
					permissions: "goodsinvenlist",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "goodsstorage",
				name: "goodsstorage",
				component: () => import("@/views/inven/goodsstorage"),
				meta: {
					title: "商品入库",
					permissions: "goodsstorage",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "goodsout",
				name: "goodsout",
				component: () => import("@/views/inven/goodsout"),
				meta: {
					title: "商品出库",
					permissions: "goodsout",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "goodsset",
				name: "goodsset",
				component: () => import("@/views/inven/goodsset"),
				meta: {
					title: "商品管理",
					permissions: "goodsset",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
			{
				path: "labelset",
				name: "labelset",
				component: () => import("@/views/inven/labelset"),
				meta: {
					title: "标签管理",
					permissions: "labelset",
					keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
					isBack: false
				},
			},
		],
	},
	{
		path: "/guangao",
		name: "guangao",
		component: Layout,
		meta: {
			title: "广告投放",
			icon: "el-icon-s-finance",
			permissions: "guangao",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
			path: "guangaox",
			name: "guangaox",
			component: () => import("@/views/guangao/guangaox"),
			meta: {
				title: "广告线下投放",
				permissions: "guangaox",
				keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
				isBack: false
			},
		}, ],
	},
	{
		path: "/message",
		name: "message",
		component: Layout,
		meta: {
			title: "消息推送",
			icon: "el-icon-s-finance",
			permissions: "message",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
			path: "pushmessage",
			name: "pushmessage",
			component: () => import("@/views/message/pushmessage"),
			meta: {
				title: "消息推送",
				permissions: "pushmessage",
				keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
				isBack: false
			},
		}, ],
	},
	{
		path: "/dingdan",
		name: "dingdan",
		component: Layout,
		meta: {
			title: "虚拟订单",
			icon: "el-icon-s-finance",
			permissions: "dingdan",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
			path: "dingdanx",
			name: "dingdanx",
			component: () => import("@/views/dingdan/dingdanx"),
			meta: {
				title: "虚拟订单",
				permissions: "dingdanx",
				keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
				isBack: false
			},
		}, ],
	},
	{
		path: "/day",
		name: "day",
		component: Layout,
		meta: {
			title: "操作日志",
			icon: "el-icon-s-finance",
			permissions: "day",
			keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
			isBack: false
		},
		children: [{
			path: "daylist",
			name: "daylist",
			component: () => import("@/views/day/daylist"),
			meta: {
				title: "日志",
				permissions: "daylist",
				keepAlive: true, // 不需要缓存	keepAlive: true, //此组件需要被缓存
				isBack: false
			},
		}, ],
	},
]

//允许路由重复点击
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
	scrollBehavior: () => ({
		y: 0
	}),
	routes: baseRoutes
})

export function resetRouter() {
	router.matcher = new VueRouter({
		// mode: 'history',
		scrollBehavior: () => ({
			y: 0
		}),
		routes: baseRoutes
	}).matcher;
}

export default router