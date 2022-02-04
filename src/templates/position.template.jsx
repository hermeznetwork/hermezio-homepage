import React from 'react'
import { graphql } from 'gatsby'

import Position from '../components/position/position.component'

export default function PositionTemplate ({ data }) {
  const { gcms: { position } } = data
  return <Position {...position} />
}

export const query = graphql`
  query Position($id: ID!) {
    gcms {
      position(where: {id: $id}) {
        title
        location
        description
        responsibilities
        skills
        niceToHave
      }
    }
  }
`
