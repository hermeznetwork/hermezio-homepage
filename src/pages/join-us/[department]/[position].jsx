import { navigate } from 'gatsby'
import React from 'react'

import Position from '../../../components/join-us/position.component'
import Seo from '../../../components/shared/seo/seo.component'

const PositionPage = props => {
  const openPosition = props.location.state
  if (!openPosition) {
    if (typeof window !== 'undefined') {
      navigate('/404')
    }
    return null
  }
  return (
    <>
      <Seo title={openPosition.title} />
      <Position openPosition={openPosition} />
    </>
  )
}

export default PositionPage
