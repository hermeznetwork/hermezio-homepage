import React from 'react'
import 'normalize.css'
import {
  ApolloProvider
} from '@apollo/client'

import { client } from './apollo-client'
import { Layout } from './src/components/layout/layout.component'

const HeadComponents = [
  <script key='hermez.io' async defer data-domain='hermez.io' src='https://plausible.io/js/plausible.js' />
]

export const wrapPageElement = ({ element, props }) => {
  return <ApolloProvider client={client}><Layout {...props}>{element}</Layout></ApolloProvider>
}

export const onRenderBody = ({
  setHeadComponents
}, pluginOptions) => {
  setHeadComponents(HeadComponents)
}
