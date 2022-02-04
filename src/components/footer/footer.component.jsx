import React from 'react'

import { useFooterStyles } from './footer.styles'
import PageLink from '../page-link/page-link.component'
import Logo from '../../assets/images/logo-black-and-white.inline.svg'

export const Footer = ({ routes }) => {
  const classes = useFooterStyles()
  const polygonHermezRoutes = routes.filter(route => route.section === 'polygon-hermez')
  const projectRoutes = routes.filter(route => route.section === 'project')
  const specificationRoutes = routes.filter(route => route.section === 'specification')
  const socialRoutes = routes.filter(route => route.section === 'social')
  const legalRoute = routes.find(route => route.section === 'legal')

  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <div className={classes.topSection}>
          <div className={classes.col3}>
            <div className={classes.head}>
              <p>Start your integration</p>
              <p>Contact us to learn more about Polygon Hermez Network.</p>
              <a
                className={classes.emailLink}
                href='mailto:hello@hermez.network?&subject=Contact%20from%20the%20website'
                target='_blank'
                rel='noopener noreferrer'
              >
                hello@hermez.network
              </a>
            </div>
          </div>
          <div className={classes.listCol}>
            <ul className={classes.list}>
              <li className={`${classes.listItem} ${classes.listItemHead}`}>
                Polygon Hermez
              </li>
              {polygonHermezRoutes.map((route, index) => (
                <li key={index} className={classes.listItem}>
                  <PageLink route={route} />
                </li>
              ))}
            </ul>
            <ul className={classes.list}>
              <li className={`${classes.listItem} ${classes.listItemHead}`}>
                Project
              </li>
              {projectRoutes.map((route, index) => (
                <li key={index} className={classes.listItem}>
                  <PageLink route={route} />
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.listCol}>
            <ul className={classes.list}>
              <li className={`${classes.listItem} ${classes.listItemHead}`}>Specification</li>
              {specificationRoutes.map((route, index) => (
                <li key={index} className={classes.listItem}>
                  <PageLink route={route} />
                </li>
              ))}
            </ul>
            <ul className={classes.list}>
              <li className={`${classes.listItem} ${classes.listItemHead}`}>Social</li>
              {socialRoutes.map((route, index) => (
                <li key={index} className={classes.listItem}>
                  <PageLink route={route} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={classes.bottomSection}>
          <p className={classes.logoAndText}>
            <Logo />
          </p>
          <PageLink route={legalRoute} />
        </div>
      </div>
    </footer>
  )
}
