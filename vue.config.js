// const path = require('path')
module.exports = {
  outputDir: './build',
  publicPath: './',
  // 第一种配置方式 最后会合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.1.2.107:8085/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
  // 覆盖
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src')
  //   }
  // }
}
