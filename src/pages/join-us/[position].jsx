import React from 'react'
import { navigate } from 'gatsby-link'
import { useQuery, gql } from '@apollo/client'

import Position from '../../components/position/position.component'

const POSITION = gql`
  query($slug: String!) {
    position(where: { slug: $slug }) {
      title
      location
      description
      responsibilities
      skills
      niceToHave
    }
  }
`
export default function PositionPage ({ params }) {
  console.log(params.position)
  const { loading, error, data } = useQuery(POSITION, {
    variables: { slug: params.position }
  })
  console.log(loading, error, data)
  if (data?.position) {
    const { position } = data
    return <Position {...position} />
  } else if (data?.position === null || error) {
    navigate('/404')
  }
  return null
}
