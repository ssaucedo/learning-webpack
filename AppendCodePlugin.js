const RawSource = require("webpack-sources").RawSource;

function AppendCodePlugin(options) {

}

AppendCodePlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, callback) {
        const module = compilation.modules[0]
        module._source._value += '// this is an extra comment added on the plugin';
        callback();
      }
    );
};

module.exports = AppendCodePlugin;
