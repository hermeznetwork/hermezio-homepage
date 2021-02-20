import React from 'react'

import useTokenomicsStyles from './tokenomics.styles'
import Title from '../shared/title/title.component'
// import Button from '../shared/button/button.component'
// import TextLink from '../shared/text-link/text-link.component'
import Section3 from '../../assets/images/tokenomics/section3.inline.svg'

const Tokenomics = () => {
  const classes = useTokenomicsStyles()

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={classes.row}>
            <div className={`${classes.col2} ${classes.mainTitle}`}>
              <Title>Hermez tokenomics</Title>
              <p className={classes.paragraphMargin}>The HEZ utility token is used to bid for slots to become a coordinator and portions are donated, burnt, and used to incentivise active network usage and engagement. This is the only economic design built into the core protocol from the start.</p>
            </div>
            <div className={`${classes.col2} ${classes.onlyDesktop} ${classes.inlineGraphicImage}`}>
              <div className={classes.section1img} />
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section2}`}>
          <div className={classes.row}>
            <div>
              <div className={classes.section2Title}>
                <Title>Hez supply</Title>
              </div>

            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section3}`}>
          <div className={classes.row}>
            <div className={classes.section3Title}>
              <Title>Hez distribution</Title>
            </div>
          </div>
          <Section3 />
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section3SubTitle}`}>
              <Title>Vested token allocations</Title>
            </div>
            <div className={classes.col2}>
              <p>As a general overview, vested token allocations will be broken down into two tiers.</p>
              <div className={classes.section3Headline}>
                <Title type='h3'>Tier 1</Title>
              </div>
              <p>5% of tokens unlocked initially (October 2020), then after a 6-month cliff (April 2021), 0.104% of the total amount will be released every day for ~2.5 years.</p>
              <p>All tokens will be unlocked after 3 years (October 2023).</p>
              <div className={classes.section3Headline}>
                <Title type='h3'>Tier 2</Title>
              </div>
              <p>10% of tokens unlocked initially (October 2020), then after a 6-month cliff (April 2021), 0.164% of the total amount will be released every day for 1.5 years.</p>
              <p>All tokens will be unlocked after 2 years (October 2022).</p>
            </div>
          </div>

        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section4}`}>
          <div className={classes.row}>
            <div>
              <div className={classes.section4Title}>
                <Title>Hermez project wallets</Title>
              </div>
              <div className={classes.addressList}>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Promotion</div>
                  <div>0x4D4a7675CC0eb0a3B1d81CbDcd828c4BD0D74155</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Promotion - Vested 2 years</div>
                  <div>0x3049399e1308db7d2b28488880C6cFE9Aa003275</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Developers</div>
                  <div>0xDd90cA911a5dbfB1624fF7Eb586901a9b4BFC53D</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Legal</div>
                  <div>0x9315F815002d472A3E993ac9dc7461f2601A3c09</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Security</div>
                  <div>0xF96A39d61F6972d8dC0CCd2A3c082eD922E096a7</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Market</div>
                  <div>0x9CdaeBd2bcEED9EB05a3B3cccd601A40CB0026be</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Operations</div>
                  <div>0xA93Bb239509D16827B7ee9DA7dA6Fc8478837247</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Promotion - Vested 3 years</div>
                  <div>0x99Ae889E171B82BB04FD22E254024716932e5F2f</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Ecosystem</div>
                  <div>0xB213aeAeF76f82e42263fe896433A260EF018df2</div>
                </div>
              </div>
              <p className={classes.walletsSectionText}>For complete transparency we have listed all HEZ wallets the Hermez project holds as of 16th of February, 2021. These will be labelled and tokens will only move according to the vesting schedule mentioned above. For further information, please contact us at
                <a
                  className={classes.email}
                  href='mailto:circulatingsupply@hermez.io'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                    circulatingsupply@hermez.io
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Tokenomics
