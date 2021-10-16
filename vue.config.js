const path = require('path')
let webpack = require('webpack')
module.exports = {
  outputDir: './build',
  // publicPath: './',
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            'primary-color': '#000',
            'link-color': '#1DA57A',
            'border-radius-base': '2px',
            'success-color': ' #52c41a' // 成功色
          }
        },
        javascriptEnabled: true
      }
    }
  },
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
