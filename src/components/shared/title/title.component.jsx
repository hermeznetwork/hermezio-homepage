import React from 'react'
import PropTypes from 'prop-types'

import useTitleStyles from './title.styles'

function Title ({
  children,
  type = 'h2',
  marginTop,
  marginBottom
}) {
  const classes = useTitleStyles({
    marginTop,
    marginBottom
  })

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
        <h3 className={`${classes.title} ${classes.titleSecondary}`}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 className={`${classes.title} ${classes.titleTertiary}`}>
          {children}
        </h4>
      )
    default:
      break
  }
}

Title.propTypes = {
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number
}

export default Title
