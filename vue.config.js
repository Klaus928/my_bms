const path = require('path')
let webpack = require('webpack')
module.exports = {
  outputDir: './build',
  // publicPath: './',
  // 第一种配置方式 最后会合并
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    module: {
      rules: [
        {
          include: /node_modules/,
          test: /\.mjs$/,
          type: 'javascript/auto'
        }
      ]
    },
    plugins: [
      new webpack.ProvidePlugin({
        $pkg: [path.resolve(__dirname, './package.json')]
      })
    ],
    devServer: {
      port: 8100,
      proxy: {
        '^/api': {
          target: 'http://152.136.185.210:5000',
          pathRewrite: {
            '^/api': ''
          },
          changeOrigin: true
        }
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
