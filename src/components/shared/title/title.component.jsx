import React from 'react'

import useTitleStyles from './title.styles'

function Title ({ children }) {
  const classes = useTitleStyles()

  return (
    <h2 className={classes.title}>
      {children}
    </h2>
  )
}

export default Title
