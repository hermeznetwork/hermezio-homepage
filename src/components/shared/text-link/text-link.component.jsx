import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import ArrowCirclePrimary from '../../../assets/images/icons/arrow-circle-primary.inline.svg'
import ArrowCircleSecondary from '../../../assets/images/icons/arrow-circle-secondary.inline.svg'
import useTextLinkStyles from './text-link.styles'

function TextLink ({
  to,
  text,
  target,
  box = false,
  white = false
}) {
  const classes = useTextLinkStyles()

  return (
    <a
      href={to}
      target={!target ? '_blank' : target}
      rel='noopener noreferrer'
      className={clsx({
        [classes.link]: !box,
        [classes.boxLink]: box,
        [classes.white]: white
      })}
    >
      {!box
        ? <>{text}<ArrowCirclePrimary className={classes.linkIcon} /></>
        : <><span className={classes.boxLinkText}>{text}</span><ArrowCircleSecondary className={classes.linkIcon} /></>}
    </a>
  )
}

TextLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
  target: PropTypes.string,
  box: PropTypes.bool,
  white: PropTypes.bool
}

export default TextLink
