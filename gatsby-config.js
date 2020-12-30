const theme = require('./src/styles/theme.js')

module.exports = {
  siteMetadata: {
    title: 'hermez.io',
    description: 'Web page of the Hermez project',
    siteUrl: process.env.GATSBY_SITE_URL
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
