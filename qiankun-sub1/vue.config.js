module.exports = {
  lintOnSave: false,
  devServer: {
    port: 3001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    output: {
      library: "vue1",
      libraryTarget: "umd",
    },
  },
};