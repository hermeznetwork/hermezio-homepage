import React from 'react'
import 'normalize.css'
import { ThemeProvider } from 'react-jss'

import { theme } from './src/styles/theme'
import { Layout } from './src/components/layout/layout.component'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>
}
