module.exports = {
	publicPath: "./",
	lintOnSave: false,
	devServer: {
		proxy: {
			// 和上面自定义的 baseURL 保持一致
			'/api': {
				target: 'https://y4.wjw.cool/',
				changeOrigin: true, // 是否跨域
				pathRewrite: {
					'^/api': '/', //需要rewrite重写的, //本地联调
				},
				changeOrigin: true,
			}
		},

		port: 8080,
		hot: true,
		open: true,
	}
}