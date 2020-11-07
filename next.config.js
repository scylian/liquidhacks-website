const withCss = require('next-css');

module.exports = withCss({
  webpack(config, { dev }) {
    return config
  },
  target: 'serverless'
})