import React from 'react'
import { Link } from 'gatsby'
import { Menu } from 'react-feather'

import { useHeaderStyles } from './header.styles'
import { useTheme } from 'react-jss'
import Logo from '../../assets/images/logo.inline.svg'

export const Header = ({ routes, onOpenMobileMenu }) => {
  const theme = useTheme()
  const classes = useHeaderStyles()

  return (
    <header className={classes.header}>
      {/* <Container> */}
      <div className={classes.content}>
        <nav className={classes.nav}>
          <ul className={classes.linkList}>
            {routes.map((route, index) => (
              <li key={index} className={classes.linkWrapper}>
                <Link
                  className={classes.link}
                  to={route.to}
                  activeClassName={classes.activeLink}
                >
                  {route.label === 'Hermez' ? (
                    <Logo />
                  ) : <></>}
                  {route.label}
                </Link>
              </li>
            ))}

            <li className={classes.linkWrapper}>
              <Link
                className={classes.link}
                to='https://blog.hermez.io/'
                activeClassName={classes.activeLink}
              >
                  Blog
              </Link>
            </li>
            <li className={classes.linkWrapper}>
              <Link
                className={classes.link}
                to='https://hermez.io/'// TODO: add a proper link to the Network explorer
                activeClassName={classes.activeLink}
              >
                  Network explorer
              </Link>
            </li>
            <li className={classes.linkWrapper}>
              <Link
                className={classes.link}
                to='https://hermez.io/'// TODO: add a proper link to the Wallet
                activeClassName={classes.activeLink}
              >
                  Wallet
              </Link>
            </li>
          </ul>
        </nav>
        <button className={classes.mobileMenu} onClick={onOpenMobileMenu}>
          <Menu size={theme.spacing(4)} />
        </button>
      </div>
      {/* </Container> */}
    </header>
  )
}
