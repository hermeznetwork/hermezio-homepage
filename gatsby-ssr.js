import React from 'react'
import 'normalize.css'

import { Layout } from './src/components/layout/layout.component'

const HeadComponents = [
  <script key='hermez.io' async defer data-domain='hermez.io' src='https://plausible.io/js/plausible.js' />
]

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const onRenderBody = ({
  setHeadComponents
}, pluginOptions) => {
  setHeadComponents(HeadComponents)
}
