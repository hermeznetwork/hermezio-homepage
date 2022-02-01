import React from 'react'
import { Link } from 'gatsby'
import { Menu } from 'react-feather'

import { useHeaderStyles } from './header.styles'
import { useTheme } from 'react-jss'
import Logo from '../../assets/images/logo.inline.svg'
import LogoWithText from '../../assets/images/logo-text.inline.svg'
import HezIcon from '../../assets/images/hez-icon.inline.svg'
import SwapArrow from '../../assets/images/swap-arrow.inline.svg'
import ToTokenIcon from '../../assets/images/to-token-icon.inline.svg'

export const Header = ({ routes, onOpenMobileMenu }) => {
  const theme = useTheme()
  const classes = useHeaderStyles()

  return (
    <header className={classes.header}>
      <div className={classes.content}>
        <nav className={classes.nav}>
          <ul className={classes.linkList}>
            {routes.map((route, index) => {
              if (route.id === 1) {
                return <li key={index} className={classes.linkWrapper}><Link to={route.to}><LogoWithText /></Link></li>
              }

              if (route.id > 1 && route.id < 6) {
                return <li key={index} className={classes.linkWrapper}><Link className={classes.link} to={route.to}>{route.label}</Link></li>
              }

              if (route.id === 6) {
                return (
                  <>
                    <li key={index} className={classes.linkWrapper}>
                      <a
                        href='https://blog.hermez.io/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={classes.link}
                      >
                          Blog
                      </a>
                    </li>
                    <li key={index} className={classes.linkWrapper}>
                      <a
                        href='https://explorer.hermez.io/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={classes.link}
                      >
                          Network explorer
                      </a>
                    </li>
                    <li key={index} className={classes.linkWrapper}>
                      <a
                        href='https://heztomatic.hermez.io/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={classes.link}
                      >
                        <div className={classes.tokenLogos}>
                          <HezIcon />
                          <SwapArrow className={classes.swapArrow} />
                          <ToTokenIcon />
                        </div>
                      </a>
                    </li>
                    <li key={index} className={classes.linkWrapper}><Link className={classes.link} to={route.to}>{route.label}</Link></li>
                  </>
                )
              }

              return <></>
            }
            )}
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
