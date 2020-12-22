import React from 'react'

import useTitleStyles from './title.styles'

function Title ({ children, type = 'h2' }) {
  const classes = useTitleStyles()

  switch (type) {
    case 'h1':
      return (
        <h1 className={classes.title}>
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2 className={classes.title}>
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 className={classes.title}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 className={classes.title}>
          {children}
        </h4>
      )
    default:
      break
  }
}

export default Title
