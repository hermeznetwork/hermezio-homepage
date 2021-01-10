import React from 'react'

import Developers from '../components/developers/developers.component'
import Seo from '../components/shared/seo/seo.component'

const DevelopersPage = () => {
  return (
    <>
      <Seo title='Technology' />
      <Developers />
    </>
  )
}

export default DevelopersPage
