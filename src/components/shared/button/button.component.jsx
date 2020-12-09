import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import useButtonStyles from './button.styles'

function Button ({ icon, text, onClick, className, type }) {
  const classes = useButtonStyles()

  return (
    <div className={className}>
      <button
        onClick={onClick}
        className={clsx({
          [classes.root]: true,
          [classes.primary]: type === 'primary',
          [classes.secondary]: type === 'secondary'
        })}
      >
        <span className={clsx({ [classes.textSpacer]: icon !== undefined })}>
          {text}
        </span>
        {icon || <></>}
      </button>
    </div>
  )
}

Button.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  type: PropTypes.string
}

export default Button
