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
              <>
                {/* Routes are passed from layout component
              {
                id: 1,
                label: 'Hermez',
                to: '/'
              },
              {
                id: 2,
                label: 'Payment Network',
                to: '/payment-network'
              },
              {
                id: 3,
                label: 'Technology',
                to: '/technology'
              },
              {
                id: 4,
                label: 'Project',
                to: '/project'
              },
              {
                id: 5,
                label: 'Wallet',
                to: '/wallet'
              }
              */}

                {route.id === 1
                  ? <li key={index} className={classes.linkWrapper}><Link to={route.to}><LogoWithText /></Link></li>
                  : ''}
                {route.id > 1 && route.id < 5
                  ? <li key={index} className={classes.linkWrapper}><Link className={classes.link} to={route.to}>{route.label}</Link></li>
                  : ''}
                {route.id === 5
                  ? <>
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
                          href='https://explorer.testnet.hermez.io/'
                          target='_blank'
                          rel='noopener noreferrer'
                          className={classes.link}
                        >
                            Network explorer
                        </a>
                      </li>
                      <li key={index} className={classes.linkWrapper}><Link className={classes.link} to={route.to}>{route.label}</Link></li>
                    </>
                  : ''}
              </>
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
