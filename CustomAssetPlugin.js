const RawSource = require("webpack-sources").RawSource;

function CustomAssetPlugin(options) {
  if(options){
    this.assetName = options.assetName
    this.content = options.content
  } else {
    throw new Error('You must provide a name and a content')
  }
}

CustomAssetPlugin.prototype.apply = function (compiler) {

  compiler.plugin('emit', function (compilation, callback) {
    console.log('emit')
    compilation.assets[this.assetName] = new RawSource(this.content)
    callback();
  }.bind(this));
};

module.exports = CustomAssetPlugin;
