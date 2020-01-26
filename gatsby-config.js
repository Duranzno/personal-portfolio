/* eslint-disable */
const {
  siteMetadata, 
  pluginManifest:options
} = require('./config')
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet-async`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/static/favicon/favicon-512.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
      },
    },    
    {
      resolve: `gatsby-plugin-manifest`,
      options,
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: options.theme_color,
        showSpinner: false,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
      },
    },
    // {
    //   resolve: 'gatsby-source-dev',
    //   options: {
    //     username: 'duranzno_',
    //   },
    // },
    'gatsby-plugin-offline',
  ],
}
