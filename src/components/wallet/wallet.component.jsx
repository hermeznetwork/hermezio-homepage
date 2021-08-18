import React from 'react'

import useWalletStyles from './wallet.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'
import Carousel1 from '../../assets/images/wallet/carousel1.inline.svg'
import Carousel2 from '../../assets/images/wallet/carousel2.inline.svg'
import Carousel3 from '../../assets/images/wallet/carousel3.inline.svg'
import Carousel4 from '../../assets/images/wallet/carousel4.inline.svg'

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
                {/* TODO add link to the mainnet wallet */}
                <Button to='https://wallet.hermez.io/' text='Open web wallet' />
              </div>
            </div>
            <div className={`${classes.col23} ${classes.inlineGraphicImage}`}>
              <div className={`${classes.sectionImg} ${classes.section1img}`} />
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
            <div className={`${classes.col23} ${classes.inlineGraphicImage}`}>
              <div className={`${classes.sectionImg} ${classes.section2img}`} />
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section3}`}>
          <div className={classes.row}>
            <div className={`${classes.section3title} ${classes.onlyDesktop}`}>
              <Title>Secure and convenient wallet for low-cost token transfers</Title>
            </div>
          </div>
          <div className={`${classes.row} ${classes.steps}`}>
            <div className={`${classes.col2} ${classes.carousel} ${classes.carousel1}`}>
              <div className={`${classes.row} ${classes.carouselContent}`}>
                <div className={`${classes.col3} ${classes.carouselText}`}>
                  <p className={classes.carouselTitle}>1. Register</p>
                  <p>Register your Ethereum L1 address into the Hermez network and obtain an internal Hermez address.</p>
                </div>
                <div className={`${classes.col23} ${classes.carouselImage}`}>
                  <Carousel1 />
                </div>
              </div>
            </div>
            <div className={`${classes.col2} ${classes.carousel} ${classes.carousel2}`}>
              <div className={`${classes.row} ${classes.carouselContent}`}>
                <div className={`${classes.col3} ${classes.carouselText}`}>
                  <p className={classes.carouselTitle}>2. Deposit</p>
                  <p>Deposit L1 tokens into their Hermez Network addresses with a simple transaction.</p>
                </div>
                <div className={`${classes.col23} ${classes.carouselImage}`}>
                  <Carousel2 />
                </div>
              </div>
            </div>
          </div>
          <div className={`${classes.row} ${classes.steps}`}>
            <div className={`${classes.col2} ${classes.carousel} ${classes.carousel3}`}>
              <div className={`${classes.row} ${classes.carouselContent}`}>
                <div className={`${classes.col3} ${classes.carouselText}`}>
                  <p className={classes.carouselTitle}>3. Transfer</p>
                  <p>Start transfering tokens between Hermez addresses for very low fees.</p>
                </div>
                <div className={`${classes.col23} ${classes.carouselImage}`}>
                  <Carousel3 />
                </div>
              </div>
            </div>
            <div className={`${classes.col2} ${classes.carousel} ${classes.carousel4}`}>
              <div className={`${classes.row} ${classes.carouselContent}`}>
                <div className={`${classes.col3} ${classes.carouselText}`}>
                  <p className={classes.carouselTitle}>4. Withdraw</p>
                  <p>Transfer tokens from Hermez Network addresses back to their chosen L1 addresses. </p>
                </div>
                <div className={`${classes.col23} ${classes.carouselImage}`}>
                  <Carousel4 />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section4}`}>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section2title}`}>
              <Title>Mobile App</Title>
              <p className={classes.section2paragraph}>
                <span className={classes.checkMark}>&#10003;</span>Transfers between Layer 1 and Layer 2
              </p>
              <p className={classes.section2paragraph}>
                <span className={classes.checkMark}>&#10003;</span>Intuitive user interface
              </p>
              <p className={classes.section2paragraph}>
                <span className={classes.checkMark}>&#10003;</span>Global payments
              </p>

              <div className={`${classes.col23} ${classes.inlineGraphicImage} ${classes.onlyMobile}`}>
                <div className={`${classes.sectionImg} ${classes.section4img}`} />
              </div>

              <div className={classes.row}>
                <div className={classes.col2}>
                  <div className={classes.section4_2img} />
                </div>
                <div className={classes.col2}>
                  <div className={classes.section4_3img} />
                </div>
              </div>
            </div>
            <div className={`${classes.col23} ${classes.inlineGraphicImage} ${classes.onlyDesktop}`}>
              <div className={`${classes.sectionImg} ${classes.section4img}`} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Wallet
