'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/cgi/backend' : {
        target:'http://9.134.52.227:19678',
        changeOrigin:true,
        secure: false
      },
      '/cgi' : {
        target:'http://9.134.52.227:19674',
        changeOrigin:true,
        secure: false
      },
      '/lipstick': {
        target: 'http://lipstick.woa.com',
        changeOrigin:true,
        secure: false,
        pathRewrite: {
          '^/lipstick/': '' // 路径重写
        }
      },
      '/static':{
        target: 'http://iostream.woa.com:18883',
        changeOrigin:true,
        secure: false
      },
      '/interfaceTest' : {
        target:'http://9.134.186.157:8056',
        changeOrigin:true,
        secure: false,
        pathRewrite:{
          "^/interfaceTest": ""
        }
      },
      '/process' : {
        target:'http://devops.woa.com/ms',
        changeOrigin:true,
        secure: false,
        pathRewrite:{
          "^/interfaceTest": ""
        }
      },

    },

    // Various Dev Server settings
    host: '0.0.0.0', // can be overwritten by process.env.HOST
    port: 8181, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
