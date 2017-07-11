var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var CustomAssetPlugin = require('./CustomAssetPlugin');
var AppendCodePlugin = require('./AppendCodePlugin');

module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
    plugins: [
      new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    new CleanWebpackPlugin(['dist']),
    new CustomAssetPlugin({
      assetName: 'shiftgig-devs.txt',
      content: 'FE: xxxxxxxxx BE: xxxxxxxxxx'
    }),
    new AppendCodePlugin(),
    ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
