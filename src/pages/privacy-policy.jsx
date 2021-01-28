import React from 'react'

import PrivacyPolicy from '../components/privacy-policy/privacy-policy.component'
import Seo from '../components/shared/seo/seo.component'

const PrivacyPolicyPage = () => {
  return (
    <>
      <Seo title='Privacy policy' />
      <PrivacyPolicy />
    </>
  )
}

export default PrivacyPolicyPage
