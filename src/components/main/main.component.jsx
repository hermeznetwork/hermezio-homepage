import React from 'react'

import { useMainStyles } from './main.styles'

export const Main = ({ children }) => {
  const classes = useMainStyles()

  return <main className={classes.root}>{children}</main>
}
