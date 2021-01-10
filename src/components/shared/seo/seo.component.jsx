import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query Seo {
    site {
      siteMetadata {
        defaultTitle
        titleTemplate
        defaultDescription
        twitterUsername
      }
    }
  }
`

const Seo = ({ title, description }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    twitterUsername
  } = site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`
  }

  return (
    <Helmet title={title} titleTemplate={titleTemplate} defaultTitle={defaultTitle}>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />
      {seo.url && <meta property='og:url' content={seo.url} />}
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}
      <meta name='twitter:card' content='summary_large_image' />
      {twitterUsername && (
        <meta name='twitter:creator' content={twitterUsername} />
      )}
      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && (
        <meta name='twitter:description' content={seo.description} />
      )}
    </Helmet>
  )
}

export default Seo
