import React from 'react'
import { Link } from 'gatsby'
import { Menu } from 'react-feather'
import { useTheme } from 'react-jss'

import { useHeaderStyles } from './header.styles'
import PageLink from '../page-link/page-link.component'
import Logo from '../../assets/images/logo.inline.svg'
import LogoWithText from '../../assets/images/logo-text.inline.svg'

export const Header = ({ routes, onOpenMobileMenu }) => {
  const theme = useTheme()
  const classes = useHeaderStyles()

  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <nav className={classes.nav}>
          <ul className={classes.linkList}>
            <li className={classes.linkWrapper}>
              <Link to='/'>
                <LogoWithText />
              </Link>
            </li>
            {routes.map((route, index) => (
              <li key={index} className={classes.linkWrapper}>
                <PageLink route={route} className={classes.link} />
              </li>
            ))}
          </ul>
        </nav>
        <button className={classes.mobileMenu} onClick={onOpenMobileMenu}>
          <Logo />
          <Menu size={theme.spacer * 4} />
        </button>
      </div>
    </header>
  )
}
