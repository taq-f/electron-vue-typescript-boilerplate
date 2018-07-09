const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  target: 'electron-main',
  entry: { main: './src/main.ts' },
});
