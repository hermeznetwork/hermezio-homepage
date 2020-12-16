import React from 'react'
import { Link } from 'gatsby'

import { useFooterStyles } from './footer.styles'
// import { Container } from "../../shared/container/container.component"

export const Footer = () => {
  const classes = useFooterStyles()

  return (
    <footer className={classes.footer}>
      {/* <Container> */}
      <div className={classes.content}>
        <div className={classes.topSection}>
          <div className={classes.head}>
            <p>Start your integration</p>
            <p>Contact us to learn more about Hermez network.</p>
            <a href='mailto:hello@hermez.io?&subject=Contact%20from%20the%20website'>hello@hermez.io</a>
          </div>
          <div>
            <ul className={classes.list}>
              <li className={classes.listItem}>Hermez</li>
              <li className={classes.listItem}>Hermez Network</li>
              <li className={classes.listItem}>Hermez Wallet</li>
              <li className={classes.listItem}>Network explorer</li>
            </ul>
          </div>
          <div>
            <ul className={classes.list}>
              <li className={classes.listItem}>Specification</li>
              <li className={classes.listItem}>Whitepaper</li>
              <li className={classes.listItem}>Documentation</li>
              <li className={classes.listItem}>Github</li>
            </ul>
          </div>
          <div>
            <ul className={classes.list}>
              <li className={classes.listItem}>Project</li>
              <li className={classes.listItem}>About us</li>
              <li className={classes.listItem}>Mediakit</li>
            </ul>
          </div>
          <div>
            <ul className={classes.list}>
              <li className={classes.listItem}>Social</li>
              <li className={classes.listItem}>Blog</li>
              <li className={classes.listItem}>Telegram</li>
              <li className={classes.listItem}>Discord</li>
              <li className={classes.listItem}>Twitter</li>
            </ul>
          </div>
        </div>
        <div className={classes.bottomSection}>
          <p className={classes.copyrightText}>
              Powered by Iden3
          </p>
          <Link to='/legal-disclamer' className={classes.legalLink}>
              Legal disclamer
          </Link>
        </div>
      </div>
      {/* </Container> */}
    </footer>
  )
}
