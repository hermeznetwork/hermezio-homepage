const theme = require('./src/styles/theme.js')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

module.exports = {
  siteMetadata: {
    defaultTitle: 'Hermez',
    titleTemplate: '%s | Hermez',
    defaultDescription: 'Hermez is a trustless ZK-Rollup focused on scaling payments and token transfers on the wings of Ethereum.',
    siteUrl: process.env.GATSBY_SITE_URL,
    twitterUsername: 'hermez_network'
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
