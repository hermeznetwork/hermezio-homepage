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
            <div className={`${classes.col2} ${classes.inlineGraphicText}`}>
              <div className={classes.section1Title}>
                <Title>Hermez tokenomics</Title>
              </div>
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
            <div className={`${classes.inlineGraphicText}`}>
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
            <div className={`${classes.inlineGraphicText}`}>
              <div className={classes.section3Title}>
                <Title>Hez distribution</Title>
              </div>
              <Section3 />
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section4}`}>
          <div className={classes.row}>
            <div className={`${classes.inlineGraphicText}`}>
              <div className={classes.section4Title}>
                <Title>Hermez project wallets</Title>
              </div>

              <p>For complete transparency we have listed all HEZ wallets the Hermez project holds as of 16th of February, 2021. These will be labelled and tokens will only move according to the vesting schedule mentioned above. For further information, please contact us at
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
