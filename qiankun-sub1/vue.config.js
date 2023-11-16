// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

// module.exports = {
//   lintOnSave: false, // 关闭eslint检测
//   devServer: {
//     port: 3001, //这里的端口是必须和父应用配置的子应用端口一致
//     headers: {
//       //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
//       "Access-Control-Allow-Origin": "*",
//     },
//   }
// };

const { name } = require('./package');

module.exports = {
  // 打包到指定的文件夹，部署的时候方便分辨当前是哪个应用
  outputDir: 'sub-vue',
  // 设置独立运行时的路由base
  publicPath: '/child/vue-app/',
  devServer: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
};
