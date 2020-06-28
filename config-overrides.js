const path = require('path')
const { alias } = require('react-app-rewire-alias')
const rewireStyledComponents = require('react-app-rewire-styled-components')

module.exports = (config, env) => {
  alias({
    '@': 'src',
  })(config)

  config = rewireStyledComponents(config, env)

  return config
}
