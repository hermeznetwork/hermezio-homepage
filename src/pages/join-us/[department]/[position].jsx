import { navigate } from 'gatsby'
import React from 'react'

import Position from '../../../components/join-us/position.component'
import Seo from '../../../components/shared/seo/seo.component'
import positions from '../../../components/join-us/open-positions.json'

const PositionPage = ({ params }) => {
  const department = positions.departments.find(department => department.path === params.department)
  const openPosition = department.positions.find(position => position.path === params.position)

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
