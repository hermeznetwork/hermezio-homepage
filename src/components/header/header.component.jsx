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
                >
                  {route.label === 'Hermez' ? (
                    <Logo />
                  ) : <></>}
                  {route.label}
                </Link>
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
          <Menu size={theme.spacing(4)} />
        </button>
      </div>
      {/* </Container> */}
    </header>
  )
}
