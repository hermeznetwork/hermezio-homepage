import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import ArrowPrimary from '../../../assets/images/icons/arrow-primary.inline.svg'
import ArrowSecondary from '../../../assets/images/icons/arrow-secondary.inline.svg'
import useButtonStyles from './button.styles'

function Button ({
  to,
  text,
  type = 'primary',
  hideIcon = false,
  internalLink = false
}) {
  const classes = useButtonStyles()

  return (
    <>
      {internalLink
        ? (
          <Link
            to={to}
            className={`${classes.root} ${classes.secondary}`}
          >
            {text}
            {hideIcon ? <></> : <ArrowSecondary className={classes.icon} />}
          </Link>
        )
        : (
          <a
            href={to}
            target='_blank'
            rel='noopener noreferrer'
            className={`${classes.root} ${classes.primary}`}
          >
            {text}
            {hideIcon ? <></> : <ArrowPrimary className={classes.icon} />}
          </a>
        )}
    </>
  )
}

Button.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  type: PropTypes.string,
  hideIcon: PropTypes.bool,
  internalLink: PropTypes.bool
}

export default Button
