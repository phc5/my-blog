const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra({
  async redirects() {
    return [
      {
        source: '/blog/technology/vscode-high-memory-usage',
        destination: '/posts/vscode-high-memory-usage',
        permanent: true
      }
    ]
  }
})
