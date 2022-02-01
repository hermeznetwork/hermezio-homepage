import React from 'react'
import { X } from 'react-feather'
import { useTheme } from 'react-jss'
import { Link } from 'gatsby'

import { useMobileMenuStyles } from './mobile-menu.styles'
import Logo from '../../assets/images/logo.inline.svg'

const CLOSE_KEY = 'Escape'

export const MobileMenu = ({ routes, isOpen, onClose }) => {
  const theme = useTheme()
  const classes = useMobileMenuStyles()
  const sidebarRef = React.useRef()

  function handleBackgroundKeyDown (event) {
    if (event.key === CLOSE_KEY) {
      onClose()
    }
  }

  React.useEffect(() => {
    if (isOpen && sidebarRef !== null) {
      sidebarRef.current.focus()
    }
  }, [isOpen])

  return (
    isOpen && (
      <>
        <div
          className={classes.background}
          onClick={onClose}
          onKeyDown={onClose}
          role='button'
          tabIndex={0}
          aria-label='Close'
        />
        <div
          tabIndex={0}
          className={classes.sidebar}
          ref={sidebarRef}
          onKeyDown={handleBackgroundKeyDown}
          role='button'
        >
          <div className={classes.sidebarHeader}>
            <Logo />
            <button className={classes.closeButton} onClick={onClose}>
              <X size={theme.spacer * 4} />
            </button>
          </div>
          <ul className={classes.linkList}>
            {routes.map((route, index) => (
              <li key={index} className={classes.linkWrapper}>
                <Link
                  to={route.to}
                  className={classes.link}
                  activeClassName={classes.activeLink}
                  onClick={onClose}
                >
                  {route.label}
                </Link>
              </li>
            ))}
            <li className={classes.linkWrapper}>
              <a
                href='https://heztomatic.hermez.io/'
                target='_blank'
                rel='noopener noreferrer'
                className={classes.link}
              >
                  HEZ to MATIC
              </a>
            </li>
          </ul>
        </div>
      </>
    )
  )
}
