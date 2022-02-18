import React from 'react'
import {
  useQuery,
  gql
} from '@apollo/client'

import JoinUs from '../components/join-us/join-us.component'
import Seo from '../components/shared/seo/seo.component'

const DEPARTMENTS = gql`
  query {
    departments {
      id
      name
      positions {
        id
        title
        slug
        location
      }
    }
  }
`
const JoinUsPage = () => {
  const { data } = useQuery(DEPARTMENTS)

  return (
    <>
      <Seo title='Join Us' />
      <JoinUs data={data} />
    </>
  )
}

export default JoinUsPage
