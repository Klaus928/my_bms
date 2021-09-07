const path = require('path')
module.exports = {
  outputDir: './build',
  // 第一种配置方式 最后会合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
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
