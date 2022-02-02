import React from 'react'

import { useLayoutStyles } from './layout.styles'
import { headerRoutes, footerRoutes } from '../../routes'
import { Header } from '../header/header.component'
import { Main } from '../main/main.component'
import { Footer } from '../footer/footer.component'
import { MobileMenu } from '../mobile-menu/mobile-menu.component'

export const Layout = ({ children }) => {
  const classes = useLayoutStyles()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  function handleMobileMenuToggle () {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className={classes.layout}>
      <Header onOpenMobileMenu={handleMobileMenuToggle} routes={headerRoutes} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuToggle}
        routes={headerRoutes}
      />
      <Main>{children}</Main>
      <Footer routes={footerRoutes} />
    </div>
  )
}
