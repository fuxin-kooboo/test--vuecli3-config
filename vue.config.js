const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

// vue.config.js
module.exports = {
  lintOnSave: true,
  // // webpack.config
  configureWebpack: config => {
    config.resolve.alias['assets'] = resolve('src/assets')
    config.resolve.alias['components'] = resolve('src/components')
    config.resolve.alias['sass'] = resolve('src/sass')
    config.resolve.alias['views'] = resolve('src/views')
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import './src/sass/global.scss';`
      }
    }
  },

  // svg sprite loader
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule
      .exclude
      .add(resolve('./src/assets/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.(svg)(\?.*)?$/)
      .include
      .add(resolve('./src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .end()
  }  
}        