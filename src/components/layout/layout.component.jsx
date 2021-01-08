import React from 'react'

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
      label: 'Technolgy',
      to: '/technolgy'
    },
    {
      id: 4,
      label: 'Project',
      to: '/project'
    }
  ]

  function handleMobileMenuToggle () {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className={classes.layout}>
      <Header onOpenMobileMenu={handleMobileMenuToggle} routes={routes} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={handleMobileMenuToggle}
        routes={routes}
      />
      <Main>{children}</Main>
      <Footer routes={routes} />
    </div>
  )
}
