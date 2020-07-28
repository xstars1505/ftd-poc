const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  assetsDir: "assets",
  outputDir: "www",
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: "./src/assets/img", to: "assets/img" }]
      })
    ]
  }
};
