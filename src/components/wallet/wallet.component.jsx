import React from 'react'

import useWalletStyles from './wallet.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'

const Wallet = () => {
  const classes = useWalletStyles()

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={`${classes.row} ${classes.section1Row}`}>
            <div className={`${classes.col3} ${classes.section1title}`}>
              <Title>Simple and self-custodial wallet for Hermez Network</Title>
              <div className={classes.buttonWrapper}>
                {/* TODO add link to the wallet */}
                <Button to='' text='Open web wallet' />
              </div>
            </div>
            <div className={`${classes.col2} ${classes.inlineGraphicImage}`}>
              <div className={classes.section1img} />
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section2}`}>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section2title}`}>
              <Title>Hermez Web Wallet</Title>
              <p className={classes.section2paragraph}>
                <span className={classes.checkMark}>&#10003;</span>Instant deposit to Layer 2
              </p>
              <p className={classes.section2paragraph}>
                <span className={classes.checkMark}>&#10003;</span>Low-cost withdrawals from exchanges
              </p>
              <p className={classes.section2paragraph}>
                <span className={classes.checkMark}>&#10003;</span>Global payments
              </p>
            </div>
            <div className={`${classes.col2} ${classes.inlineGraphicImage}`}>
              <div className={classes.section2img} />
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section3}`}>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.onlyDesktop}`}>
              <Title>Secure and convenient wallet for low-cost token transfers</Title>
            </div>
            <div className={`${classes.col2} ${classes.carousel}`} />
          </div>
        </section>
      </div>
    </>
  )
}

export default Wallet
