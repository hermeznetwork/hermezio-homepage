import React from 'react'

import GhostContentAPI from '@tryghost/content-api'

// import BlogPost from '../blog-post/blog-post.component'
// import useBlogPostsStyles from './blog-posts.styles'

const api = new GhostContentAPI({
  url: 'https://blog.hermez.io',
  key: 'a0bbfb0931ce4534811bee1acf',
  version: 'v3'
})

const BlogPosts = () => {
  // const classes = useBlogPostsStyles()
  const postsList = []

  api.posts
    .browse({ limit: 3 })
    .then((posts) => {
      posts.map((post) => {
        postsList.push({ title: post.title, url: post.url, postedTime: post.published_at })
      })
    })
    .catch((err) => {
      console.error(err)
    })

  console.log('postsList: ', postsList)

  return (
    <>
    TEST
    </>
  )
}

export default BlogPosts
