exports.createPages = async function ({ actions, graphql }) {
  const { data: { gcms: { positions } } } = await graphql(`
    {
      gcms {
        positions {
          id
          slug
        }
      }
    }
  `)

  positions.forEach((position) => {
    actions.createPage({
      path: `join-us/${position.slug}`,
      component: require.resolve('./src/templates/position.template.jsx'),
      context: { id: position.id },
      defer: true
    })
  })
}
