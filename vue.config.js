// const webpack = require('webpack')
module.exports = {
  // 开发环境下
  devServer: {
    proxy: {
      '/api': {
        target: 'https://172.16.1.233:8080/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
    // 开启https 访问时使用https://172.31.120.61:8081 
    // https://localhost:8081 也可以访问，不过自带info请求会报错 不清楚具体原因
    https: true
  }
}
