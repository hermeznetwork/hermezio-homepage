import React from 'react'
import { Link } from 'gatsby'
import { Menu } from 'react-feather'

import { useHeaderStyles } from './header.styles'
import { useTheme } from 'react-jss'
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
            {routes.map((route, index) => (
              <li key={index} className={classes.linkWrapper}>
                {/* Routes are passed from layout component
              {
                id: 1,
                label: 'Hermez',
                to: '/'
              },
              {
                id: 2,
                label: 'Payments network',
                to: '/payments-network'
              },
              {
                id: 3,
                label: 'Developers',
                to: '/developers'
              },
              {
                id: 4,
                label: 'Project',
                to: '/project'
              }
              */}
                {route.id === 1
                  ? <Link to={route.to}><LogoWithText /></Link>
                  : <Link className={classes.link} to={route.to}>{route.label}</Link>}
              </li>
            ))}

            <li className={classes.linkWrapper}>
              <a
                href='https://blog.hermez.io/'
                target='_blank'
                rel='noopener noreferrer'
                className={classes.link}
              >
                Blog
              </a>
            </li>
            <li className={classes.linkWrapper}>
              <a
                href='https://hermez.io/'
                target='_blank'
                rel='noopener noreferrer'
                className={classes.link}
              >
                Network explorer
              </a>
            </li>
            <li className={classes.linkWrapper}>
              <a
                href='https://hermez.io/'
                target='_blank' rel='noopener noreferrer'
                className={classes.link}
              >
                Wallet
              </a>
            </li>
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
