import Mock from 'mockjs'
import personalApi from './personal'
import userApi from './user'
import roleApi from './role'
import echartsApi from './echarts'
import operationApi from './operation'

// 设置200-2000毫秒延时请求数据
Mock.setup({
	timeout: '200'
})

// Mock.mock(拦截请求路径, 请求类型, 请求方法)
Mock.mock(/\/personal\/login/, 'post', personalApi.login)	//登录
Mock.mock(/\/personal\/logout/, 'get', personalApi.logout)	//退出登录

Mock.mock(/\/user\/getUserInfo/, 'post', userApi.getUserInfo)	//获取用户详情
Mock.mock(/\/user\/getUserList/, 'get', userApi.getUserList)	//获取用户列表
Mock.mock(/\/user\/getUserById/, 'post', userApi.getUserById)	//新增用户
Mock.mock(/\/user\/addUser/, 'post', userApi.addUser)	//新增用户
Mock.mock(/\/user\/editUser/, 'post', userApi.editUser)	//编辑用户信息
Mock.mock(/\/user\/deleteUser/, 'post', userApi.deleteUser)	//删除用户
Mock.mock(/\/user\/modifyPwd/, 'post', userApi.modifyPwd)	//修改密码

Mock.mock(/\/role\/getRoles/, 'post', roleApi.getRolesList)	//获取角色列表
Mock.mock(/\/role\/getRoleByMenu/, 'post', roleApi.getMenuToRole)	//根据角色获取菜单
Mock.mock(/\/role\/getMenuOperate/, 'post', roleApi.getMenuOperate)	//获取所有的菜单操作
Mock.mock(/\/role\/setRolePermissions/, 'post', roleApi.setRolePermissions)	//设置角色权限
Mock.mock(/\/role\/addRoles/, 'post', roleApi.addRoles)	//新增角色
Mock.mock(/\/role\/editRoles/, 'post', roleApi.editRoles)	//编辑角色
Mock.mock(/\/role\/deleteRoles/, 'post', roleApi.deleteRoles)	//删除角色

Mock.mock(/\/echarts\/getechartsData/, 'post', echartsApi.getechartsData)	//获取图表数据

Mock.mock(/\/operation\/getMenu/, 'post', operationApi.getMenu)	//获取菜单列表
Mock.mock(/\/operation\/getLevelMenu/, 'post', operationApi.getLevelMenu)	//获取所有一级或二级菜单
Mock.mock(/\/operation\/editMenu/, 'post', operationApi.editMenu)	//编辑菜单
Mock.mock(/\/operation\/getOperation/, 'post', operationApi.getOperation)	//获取操作
Mock.mock(/\/operation\/editOperation/, 'post', operationApi.editOperation)	//编辑操作
Mock.mock(/\/operation\/getHolidayList/, 'post', operationApi.getHolidayList)	//获取法定节假日