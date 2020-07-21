const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  assetsDir: "assets",
  outputDir: "www",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/dashforge.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: "./src/assets/img", to: "assets/img" }]
      })
    ]
  }
};
