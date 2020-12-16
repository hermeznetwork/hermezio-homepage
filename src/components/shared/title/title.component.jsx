import React from 'react'

import useTitleStyles from './title.styles'

function Title ({ children, level = 2 }) {
  const classes = useTitleStyles()

  switch (level) {
    case 1:
      return (
        <h1 className={classes.title}>
          {children}
        </h1>
      )
    case 2:
      return (
        <h2 className={classes.title}>
          {children}
        </h2>
      )
    case 3:
      return (
        <h3 className={classes.title}>
          {children}
        </h3>
      )
    case 4:
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
