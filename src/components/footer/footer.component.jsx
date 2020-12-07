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
          <div>
            <p>Start your integration</p>
            <p>Contact us to learn more about Hermez network.</p>
            <a href='mailto:hello@hermez.io?&subject=Contact%20from%20the%20website'>hello@hermez.io</a>
          </div>
          <div>
            <ul>
              <li>Hermez</li>
              <li>Hermez Network</li>
              <li>Hermez Wallet</li>
              <li>Network explorer</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Specification</li>
              <li>Whitepaper</li>
              <li>Documentation</li>
              <li>Github</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Project</li>
              <li>About us</li>
              <li>Mediakit</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Social</li>
              <li>Blog</li>
              <li>Telegram</li>
              <li>Discord</li>
              <li>Twitter</li>
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
