import React from 'react'
import { graphql } from 'gatsby'

import Home from '../components/home/home.component'
import Seo from '../components/shared/seo/seo.component'

const HomePage = ({ data }) => {
  return (
    <>
      <Seo />
      <Home blogPosts={data.blogPosts.nodes} />
    </>
  )
}

export default HomePage

export const query = graphql`
  query GhostQuery {
    blogPosts: allGhostPost(sort: {order: DESC, fields: [published_at]}, limit: 3) {
      nodes {
        id
        title
        published_at
        url
      }
    }
  }
`
