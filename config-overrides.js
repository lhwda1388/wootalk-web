const path = require('path')
const { alias, configPaths } = require('react-app-rewire-alias')

module.exports = (config, env) => {
  alias({
    '@': 'src',
  })(config)
  console.log(config.resolve.alias)

  return config
}
