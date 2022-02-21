const theme = require('./src/styles/theme.js')

require('dotenv').config()

module.exports = {
  siteMetadata: {
    defaultTitle: 'Polygon Hermez',
    titleTemplate: '%s | Polygon Hermez',
    defaultDescription: 'Polygon Hermez is a trustless ZK-Rollup focused on scaling payments and token transfers on the wings of Ethereum.',
    siteUrl: process.env.GATSBY_SITE_URL,
    twitterUsername: '0xPolygonHermez'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-jss',
      options: {
        theme
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-source-ghost',
      options: {
        apiUrl: process.env.GHOST_SITE_URL,
        contentApiKey: process.env.GHOST_CONTENT_API_KEY
      }
    }
  ]
}
