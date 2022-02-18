import React from 'react'
import 'normalize.css'
import {
  ApolloProvider
} from '@apollo/client'

import { client } from './apollo-client'
import { Layout } from './src/components/layout/layout.component'

export const wrapPageElement = ({ element, props }) => {
  return <ApolloProvider client={client}><Layout {...props}>{element}</Layout></ApolloProvider>
}
