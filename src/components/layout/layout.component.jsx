import React from 'react'
import { ThemeProvider } from 'react-jss'

import { theme } from '../../styles/theme'
import { Header } from '../header/header.component'
import { Main } from '../main/main.component'
import { Footer } from '../footer/footer.component'
import { MobileMenu } from '../mobile-menu/mobile-menu.component'
import { useLayoutStyles } from './layout.styles'

export const Layout = ({ children }) => {
  const classes = useLayoutStyles()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const routes = [
    {
      label: 'Hermez',
      to: '/'
    },
    {
      label: 'Payments network',
      to: '/payments-network'
    },
    {
      label: 'Developers',
      to: '/developers'
    },
    {
      label: 'Project',
      to: '/project'
    }
  ]

  function handleMobileMenuToggle () {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.layout}>
        <Header onOpenMobileMenu={handleMobileMenuToggle} routes={routes} />
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={handleMobileMenuToggle}
          routes={routes}
        />
        <Main>{children}</Main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
