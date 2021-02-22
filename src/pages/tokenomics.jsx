import React from 'react'

import Tokenomics from '../components/tokenomics/tokenomics.component'
import Seo from '../components/shared/seo/seo.component'

const TokenomicsPage = () => {
  return (
    <>
      <Seo title='Tokenomics' />
      <Tokenomics />
    </>
  )
}

export default TokenomicsPage
