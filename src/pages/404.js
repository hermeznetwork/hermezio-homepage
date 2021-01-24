import React from 'react'

import Custom404 from '../components/custom-404-page/custom-404-page.component'
import Seo from '../components/shared/seo/seo.component'

const Custom404Page = () => {
  return (
    <>
      <Seo title='404 not found' />
      <Custom404 />
    </>
  )
}

export default Custom404Page
