import React from 'react'

import useTokenomicsStyles from './tokenomics.styles'
import Title from '../shared/title/title.component'
import Section3Desktop from '../../assets/images/tokenomics/section3desktop.inline.svg'
import Section31Mobile from '../../assets/images/tokenomics/section31mobile.inline.svg'
import Section32Mobile from '../../assets/images/tokenomics/section32mobile.inline.svg'

const Tokenomics = () => {
  const classes = useTokenomicsStyles()

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={`${classes.row} ${classes.section1Row}`}>
            <div className={`${classes.col2} ${classes.mainTitle}`}>
              <Title>Hermez tokenomics</Title>
              <p className={classes.section1Paragraph}>The HEZ utility token is used to bid for slots to become a coordinator and portions are donated, burnt, and used to incentivise active network usage and engagement. This is the only economic design built into the core protocol from the start.</p>
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
            <div className={classes.section2Title}>
              <Title>HEZ supply</Title>
            </div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.col2} ${classes.boxWrapper}`}>
              <span className={classes.boxTitle}>Max Supply</span>
              <span className={classes.boxText}>100,000,000 HEZ</span>
            </div>
            <div className={`${classes.col2} ${classes.boxWrapper}`}>
              <span className={classes.boxTitle}>Verified Circulating Supply</span>
              <span className={classes.boxText}>36,534,435 HEZ</span>
            </div>
          </div>
          <div className={classes.row}>
            <p className={classes.section2MainText}>HEZ tokenomics are deflationary, as tokens will be burnt through our Proof-of-Donation mechanism.</p>
          </div>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section2SubTitle}`}>
              <Title>HEZ flows</Title>
            </div>
            <div className={`${classes.col2} ${classes.section2SubText}`}>
              <p>There are two specific ways that HEZ will flow through the network: the auction and user rewards.</p>
              <p>In the auction, prospective coordinators use HEZ to bid for the right to validate blocks on the L2 network as part of the Proof-of-Donation process.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section2SubTitle}`}>
              <Title>Proof-of-Donation mechanism</Title>
            </div>
            <div className={classes.col2}>
              <p className={classes.highlightedParagraph}>As HEZ tokens come into the system through bids, they will be distributed in the following way:</p>
              <p className={classes.highlightedParagraph}><span className={classes.highlightedText}>30%</span> of the tokens will be burnt.</p>
              <p className={classes.highlightedParagraph}><span className={classes.highlightedText}>40%</span> of the tokens will be donated to Ethereum Layer 1 (for further information on why we selected this particular method,
                <a
                  className={classes.email}
                  href='https://blog.hermez.io/hermez-in-depth-the-hermez-token-hez/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  check out this article
                </a>
              ).
              </p>
              <p className={classes.highlightedParagraph}><span className={classes.highlightedText}>30%</span> will be distributed among the network participants to reward users for onboarding specific tokens onto the network and transacting with them.</p>
            </div>
          </div>

        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section3}`}>
          <div className={classes.row}>
            <div className={classes.section3Title}>
              <Title>HEZ distribution</Title>
            </div>
          </div>
          <div className={`${classes.onlyMobile} ${classes.section3img}`}>
            <div className={classes.section3img1}>
              <Section31Mobile />
            </div>
            <Section32Mobile />
          </div>
          <div className={`${classes.onlyDesktop} ${classes.section3img2}`}>
            <Section3Desktop />
          </div>
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
                  <div className={classes.address}>0x4D4a7675CC0eb0a3B1d81CbDcd828c4BD0D74155</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Promotion - Vested 2 years</div>
                  <div className={classes.address}>0x3049399e1308db7d2b28488880C6cFE9Aa003275</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Developers</div>
                  <div className={classes.address}>0xDd90cA911a5dbfB1624fF7Eb586901a9b4BFC53D</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Legal</div>
                  <div className={classes.address}>0x9315F815002d472A3E993ac9dc7461f2601A3c09</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Security</div>
                  <div className={classes.address}>0xF96A39d61F6972d8dC0CCd2A3c082eD922E096a7</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Market</div>
                  <div className={classes.address}>0x9CdaeBd2bcEED9EB05a3B3cccd601A40CB0026be</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Operations</div>
                  <div className={classes.address}>0xA93Bb239509D16827B7ee9DA7dA6Fc8478837247</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Promotion - Vested 3 years</div>
                  <div className={classes.address}>0x99Ae889E171B82BB04FD22E254024716932e5F2f</div>
                </div>
                <div className={classes.addressRow}>
                  <div className={classes.addressName}>Ecosystem</div>
                  <div className={classes.address}>0xB213aeAeF76f82e42263fe896433A260EF018df2</div>
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
