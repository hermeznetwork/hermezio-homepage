import React from 'react'

import useDevelopersStyles from './developers.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'
import TextLink from '../shared/text-link/text-link.component'

const Developers = () => {
  const classes = useDevelopersStyles()

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={`${classes.col3} ${classes.mainTitle}`}>
            <Title>Convenient and accessible token transfers with zkRollup</Title>
            <div className={classes.buttonWrapper}>
              <Button to='https://docs.hermez.io/' text='Documentation' />
            </div>
          </div>
          <div className={classes.col23}>
            <div className={classes.section1img} />
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section2}`}>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section2Title}`}>
              <Title>Payments cryptosystem for adoption</Title>
            </div>
            <div className={classes.col2}>
              <Title type='h3'>Smooth integration</Title>
              <p>Hermez REST API and JavaScript SDK allow developers to easily integrate payment methods for any project to harness the power of decentralisation and cutting-edge cryptography for maximum security.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>L2 Interoperability based on mass migration mechanism</Title>
              <p>With Massive Migrations (MM), users will be able to deal with external L1 Smart Contracts in the same way that they transfer tokens to another Layer 2 network user.</p>
              <p>This is possible because the Hermez protocol includes in the aggregated withdrawal transaction the information required to reconstruct at the destination the original transfers in Hermez L2 and the corresponding account information. This could be done as a circuit processing in the destination L2 (if supported).</p>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section3}`}>
          <div className={classes.row}>
            <div className={`${classes.col2} ${classes.inlineGraphicText}`}>
              <div className={classes.section3Title}>
                <Title>Community centric protocol</Title>
              </div>
              <p className={classes.paragraphMargin}>One of the most important things about Hermez is the way it decides who the next block creator should be.</p>
              <p className={classes.paragraphMargin}>In a sentence, block creators are selected via burn auction, except rather than burning tokens, 40% of the winning bid goes back to be reinvested in Ethereum public goods through Gitcoin quadratic funding grants.</p>
              <p className={classes.paragraphMargin}>We call this mechanism proof-of-donation.</p>
              <TextLink to='https://docs.hermez.io/#/faq/pod' text='More in documentation' />
            </div>
            <div className={`${classes.col2} ${classes.onlyDesktop} ${classes.inlineGraphicImage}`}>
              <div className={classes.section3img} />
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section4}`}>
          <div className={classes.section4SubTitle}>
            <Title>Developer Resources</Title>
          </div>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section4Box}`}>
              <TextLink box to='http://testapi.hermez.network:8001/' text='Hermez API Reference' />
            </div>
            <div className={`${classes.col3} ${classes.section4Box}`}>
              <TextLink box to='https://docs.hermez.io/' text='Technical Documentation' />
            </div>
            <div className={`${classes.col3} ${classes.section4Box}`}>
              <TextLink box to='https://github.com/hermeznetwork' text='Github Repository' />
            </div>
          </div>

          {/* TODO Following two sections are hidden, and will be made visible once it is decided to do so. */}

          {/* <div className={classes.section4SubTitle}>
            <Title>Tools</Title>
          </div>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section4Box}`}>
              <TextLink box to='/' text='Mainnet Wallet' />
            </div>
            <div className={`${classes.col3} ${classes.section4Box}`}>
              <TextLink box to='/' text='Network Explorer' />
            </div>
            <div className={`${classes.col3} ${classes.section4Box}`} />
          </div> */}

          {/* <div className={classes.section4SubTitle}>
            <Title>Circom Language</Title>
          </div>
          <p className={classes.circomText}>Circom is open-source circuit programming language and a compiler that allows programmers to design and create their own arithmetic circuits for zero-knowledge proofs.</p>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section4Box}`}>
              <TextLink box to='/' text='Circom Documentation' />
            </div>
            <div className={`${classes.col3} ${classes.section4Box}`}>
              <TextLink box to='/' text='SnarkJS Documentation' />
            </div>
            <div className={`${classes.col3} ${classes.section4Box}`} />
          </div> */}

          <div className={`${classes.row} ${classes.discordHiglight}`}>
            <div className={classes.col23}>
              <p className={classes.discordText}>Take part in shaping Hermez's future and join the conversation.</p>
            </div>
            <div className={`${classes.col3} ${classes.discordButton}`}>
              <div className={classes.buttonWrapper}>
                <Button to='https://discord.gg/polygon' text='Discord chat' />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Developers
