const merge = require("webpack-merge");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "src",
    publicPath: "/",
    port: 3000,
    inline: true,
  },
  target: 'electron-renderer',
  entry: {
    renderer: './src/renderer.ts',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/html/index.html",
    })
  ],
});
