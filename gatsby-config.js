const theme = require('./src/styles/theme.js')

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
    }
  ]
}
