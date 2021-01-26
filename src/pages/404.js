import React from 'react'

import Custom404 from '../components/custom-404/custom-404.component'
import Seo from '../components/shared/seo/seo.component'

const Page404 = () => {
  return (
    <>
      <Seo title='404 not found' />
      <Custom404 />
    </>
  )
}

export default Page404
