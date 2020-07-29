/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 const path = require('path')

// You can delete this file if you're not using it
exports.createPages = async ({ graphql,actions }) => {
  const { createPage } = actions
const result = await graphql(`query GetProducts {
    products:allContentfulProduct {
      nodes {
        slug
      }
    }
  }
  `)
  result.data.products.nodes.forEach((product) => {
    createPage({
      path:`/products/${product.slug}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {
        slug: product.slug
      }
    })
  })
}