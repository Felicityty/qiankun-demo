// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  lintOnSave: false, // 关闭eslint检测
  devServer: {
    port: 3001, //这里的端口是必须和父应用配置的子应用端口一致
    headers: {
      //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
      "Access-Control-Allow-Origin": "*",
    },
  }
};