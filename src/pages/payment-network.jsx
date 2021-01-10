import React from 'react'

import PaymentsNetwork from '../components/payments-network/payments-network.component'
import Seo from '../components/shared/seo/seo.component'

const PaymentsNetworkPage = () => {
  return (
    <>
      <Seo title='Payment Network' />
      <PaymentsNetwork />
    </>
  )
}

export default PaymentsNetworkPage
