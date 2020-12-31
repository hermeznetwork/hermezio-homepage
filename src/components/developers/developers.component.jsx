import React from 'react'

import usedevelopersStyles from './developers.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'
import TextLink from '../shared/text-link/text-link.component'
import Section1 from '../../assets/images/developers/section1.inline.svg'
import Section31 from '../../assets/images/developers/section3_1.inline.svg'
import Section32 from '../../assets/images/developers/section3_2.inline.svg'

const Developers = () => {
  const classes = usedevelopersStyles()

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={`${classes.col3} ${classes.mainTitle}`}>
            <Title>Convenient and accessible token transfers with zkRollup</Title>
            <div className={classes.buttonWrapper}>
              <Button to='https://docs.hermez.io/#/' text='Documentation' />
            </div>
          </div>
          <div className={classes.col23}>
            <Section1 />
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section2}`}>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section2Title}`}>
              <Title>Smooth integration</Title>
            </div>
            <div className={classes.col2}>
              <p className={classes.paragraphMargin}>Focus on developer experience + protocol simplicity, developer-friendly API ...</p>
              <p className={classes.paragraphMargin}>By architecting Hermez as a network that is private-by-default, open-source, and built for the web, we believe Hermez is uniquely positioned to address the shortcomings of blockchain adoption. With Hermez, users have access to a world of truly personalized web services without giving up control of their private data.</p>
              <p>We believe Hermez will reshape the role decentralized systems play in our society and introduce new experiences never before seen on the web.</p>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section3}`}>
          <Title>Open ecosystem</Title>
          <p className={classes.section2Text}>Scalable verification of computational integrity and data availability on-chain is guaranteed by zero-knowledge proofs technology.</p>
          <Section31 />
          <div className={classes.section3Title}>
            <Title>Results</Title>
          </div>
          <div className={`${classes.row} ${classes.boxes}`}>
            <div className={`${classes.col3} ${classes.boxWrapper}`}>
              <div className={classes.box}>
                <span className={classes.highlightedText}>133x </span>
                <span>throughput improvement</span>
              </div>
            </div>
            <div className={`${classes.col3} ${classes.boxWrapper}`}>
              <div className={classes.box}>
                <span className={classes.highlightedText}>97% </span>
                <span>token transfer cost reduction</span>
              </div>
            </div>
            <div className={`${classes.col3} ${classes.boxWrapper}`}>
              <div className={classes.box}>
                <span className={classes.highlightedText}>40% </span>
                <span>reinvested in ecosystem development</span>
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <div className={classes.section3SubTitle}>
                <Title>Community centric protocol</Title>
              </div>
              <p className={classes.paragraphMargin}>One of the most important things about Hermez is the way it decides who the next block creator should be.</p>
              <p className={classes.paragraphMargin}>In a sentence, block creators are selected via a burn auction, except rather than burning tokens, a 40% of the winning bid goes back to be reinvested in Ethereum public goods through Gitcoin quadratic funding grants.</p>
              <p className={classes.paragraphMargin}>We call this mechanism proof-of-donation.</p>
              <TextLink to='https://docs.hermez.io/#/' text='More in documentation' />
            </div>
            <div className={`${classes.col2} ${classes.onlyDesktop}`}>
              <Section32 />
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
            <div className={classes.col3}>
              <TextLink box to='/' text='Hermez API Reference' />
            </div>
            <div className={classes.col3}>
              <TextLink box to='https://docs.hermez.io/' text='Technical Documentation' />
            </div>
            <div className={classes.col3}>
              <TextLink box to='https://github.com/hermeznetwork' text='Github Repository' />
            </div>
          </div>

          <div className={classes.section4SubTitle}>
            <Title>Tools</Title>
          </div>
          <div className={classes.row}>
            <div className={classes.col3}>
              <TextLink box to='/' text='Mainnet Wallet' />
            </div>
            <div className={classes.col3}>
              <TextLink box to='/' text='Network Explorer' />
            </div>
          </div>

          <div className={classes.section4SubTitle}>
            <Title>Circom Language</Title>
          </div>
          <p className={classes.circomText}>Circom is open-source circuit programming language and a compiler that allows programmers to design and create their own arithmetic circuits for zero-knowledge proofs.</p>
          <div className={classes.row}>
            <div className={classes.col3}>
              <TextLink box to='/' text='Circom Documentation' />
            </div>
            <div className={classes.col3}>
              <TextLink box to='/' text='SnarkJS Documentation' />
            </div>
          </div>

          <div className={`${classes.row} ${classes.discordHiglight}`}>
            <div className={classes.col23}>
              <p className={classes.discordText}>Take part in shaping Hermez's future and join the conversation.</p>
            </div>
            <div className={classes.col3}>
              <div className={classes.buttonWrapper}>
                <Button to='https://discord.com/invite/AczuUXDA2N' text='Discord chat' />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Developers
