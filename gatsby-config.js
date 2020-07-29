
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})
module.exports = {
  siteMetadata: {
    title: `Gatsby Tutorial`,
    description: `Some random description.`,
    author: `@Soumen`,
    data: ['item 1, item 2'],
    person: {name: "peter", age: 32}
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
