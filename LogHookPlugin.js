function LogHookPlugin(options) {
  if (options) {
    this.message = options.message
    this.hook = options.hook
  } else throw new Error('Required fields missing')
}

LogHookPlugin.prototype.apply = function (compiler) {
  compiler.plugin(this.hook, function (compilation) {
    console.log(`Logged from plugin: '${this.message}' on hook: '${this.hook}'`)
  }.bind(this))
}

module.exports = LogHookPlugin;