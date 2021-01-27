import React from 'react'

import TermsOfService from '../components/terms-of-service/terms-of-service.component'
import Seo from '../components/shared/seo/seo.component'

const TermsOfServicePage = () => {
  return (
    <>
      <Seo title='Terms of service' />
      <TermsOfService />
    </>
  )
}

export default TermsOfServicePage
