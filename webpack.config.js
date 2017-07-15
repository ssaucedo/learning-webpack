var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var CustomAssetPlugin = require('./CustomAssetPlugin');
var AppendCodePlugin = require('./AppendCodePlugin');
var LogHookPlugin = require('./LogHookPlugin');


module.exports = {
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
    plugins: [
      new HtmlWebpackPlugin({
      title: 'Output Management'
    }),
    //new CleanWebpackPlugin(['dist']),
    new CustomAssetPlugin({assetName: 'asset-name.txt', content: 'Asset content'}),
    new AppendCodePlugin(),
    ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
