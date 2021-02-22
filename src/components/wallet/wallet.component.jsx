import React from 'react'

import useWalletStyles from './wallet.styles'
import Title from '../shared/title/title.component'

const Wallet = () => {
  const classes = useWalletStyles()

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={classes.row}>
            <div className={`${classes.col2} ${classes.mainTitle}`}>
              <Title>Simple and self-custodial wallet for Hermez Network</Title>
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
            <div className={`${classes.col2} ${classes.mainTitle}`}>
              <Title>Hermez Web Wallet</Title>
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
            <div className={`${classes.col2} ${classes.mainTitle}`}>
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
