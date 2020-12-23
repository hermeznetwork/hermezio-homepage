import React from 'react'

import usedevelopersStyles from './developers.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'
import ArrowCirclePrimary from '../../assets/images/icons/arrow-circle-primary.inline.svg'
import ArrowCircleSecondary from '../../assets/images/icons/arrow-circle-secondary.inline.svg'
import Section1 from '../../assets/images/developers/section1.inline.svg'
import Section31 from '../../assets/images/developers/section3_1.inline.svg'
import Section32 from '../../assets/images/developers/section3_2.inline.svg'

const Developers = () => {
  const classes = usedevelopersStyles()

  return (
    <>
      <section className={`${classes.section} ${classes.section1}`}>
        <div className={`${classes.col3} ${classes.content}`}>
          <Title>Convenient and accessible token transfers with zkRollup</Title>
          <Button to='https://docs.hermez.io/#/' text='Documentation' />
        </div>
        <div className={classes.col23}>
          <Section1 />
        </div>
      </section>
      <section className={`${classes.section} ${classes.section2}`}>
        <div className={classes.row}>
          <div className={classes.col3}>
            <Title>Smooth integration</Title>
          </div>
          <div className={classes.col2}>
            <p>Focus on developer experience + protocol simplicity, developer-friendly API ...</p>
            <p className={classes.paragraphMargin}>By architecting Hermez as a network that is private-by-default, open-source, and built for the web, we believe Hermez is uniquely positioned to address the shortcomings of blockchain adoption. With Hermez, users have access to a world of truly personalized web services without giving up control of their private data.</p>
            <p className={classes.paragraphMargin}>We believe Hermez will reshape the role decentralized systems play in our society and introduce new experiences never before seen on the web.</p>
          </div>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section3}`}>
        <Title>Layer 2 scalability solution</Title>
        <p>Scalable verification of computational integrity and data availability on-chain is guaranteed by zero-knowledge proofs technology.</p>
        <Section31 />
        <Title>Results</Title>
        <div className={classes.row}>
          <div className={classes.col3}>
            <div className={classes.box}>
              <span>133x</span>
              <p>throughput improvement</p>
            </div>
          </div>
          <div className={classes.col3}>
            <div className={classes.box}>
              <span>97%</span>
              <p>token transfer cost reduction</p>
            </div>
          </div>
          <div className={classes.col3}>
            <div className={classes.box}>
              <span>40%</span>
              <p>reinvested in ecosystem development</p>
            </div>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>Community centric protocol</h3>
            <p>One of the most important things about Hermez is the way it decides who the next block creator should be.</p>
            <p className={classes.paragraphMargin}>In a sentence, block creators are selected via a burn auction, except rather than burning tokens, a 40% of the winning bid goes back to be reinvested in Ethereum public goods through Gitcoin quadratic funding grants.</p>
            <p className={classes.paragraphMargin}>We call this mechanism proof-of-donation.</p>
            <a href='https://docs.hermez.io/#/' target='_blank' rel='noopener noreferrer' className={classes.link}>
                    More in documentation
              <ArrowCirclePrimary className={classes.linkIcon} />
            </a>
          </div>
          <div className={classes.col2}>
            <Section32 />
          </div>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section4}`}>
        <Title>Developer Resources</Title>
        <div className={classes.row}>
          <div className={classes.col3}>
            <a href='/' target='_blank' rel='noopener noreferrer' className={`${classes.boxLink}`}>
              <span>Hermez API Reference</span>
              <ArrowCircleSecondary />
            </a>
          </div>
          <div className={classes.col3}>
            <a href='/' target='_blank' rel='noopener noreferrer' className={`${classes.boxLink}`}>
              <span>Technical Documentation</span>
              <ArrowCircleSecondary />
            </a>
          </div>
          <div className={classes.col3}>
            <a href='https://github.com/hermeznetwork' target='_blank' rel='noopener noreferrer' className={`${classes.boxLink}`}>
              <span>Github Repository</span>
              <ArrowCircleSecondary />
            </a>
          </div>
        </div>

        <Title>Tools</Title>
        <div className={classes.row}>
          <div className={classes.col3}>
            <a href='/' target='_blank' rel='noopener noreferrer' className={`${classes.boxLink}`}>
              <span>Mainnet Wallet</span>
              <ArrowCircleSecondary />
            </a>
          </div>
          <div className={classes.col3}>
            <a href='/' target='_blank' rel='noopener noreferrer' className={`${classes.boxLink}`}>
              <span>Network Explorer</span>
              <ArrowCircleSecondary />
            </a>
          </div>
        </div>

        <Title>Circom Language</Title>
        <p>Circom is open-source circuit programming language and a compiler that allows programmers to design and create their own arithmetic circuits for zero-knowledge proofs.</p>
        <div className={classes.row}>
          <div className={classes.col3}>
            <a href='/' target='_blank' rel='noopener noreferrer' className={`${classes.boxLink}`}>
              <span>Circom Documentation</span>
              <ArrowCircleSecondary />
            </a>
          </div>
          <div className={classes.col3}>
            <a href='/' target='_blank' rel='noopener noreferrer' className={`${classes.boxLink}`}>
              <span>SnarkJS Documentation</span>
              <ArrowCircleSecondary />
            </a>
          </div>
        </div>

        <div className={`${classes.row} ${classes.discordHiglight}`}>
          <div className={classes.col34}>
            <p>Take part in shaping Hermez's future and join the conversation.</p>
          </div>
          <div className={classes.col4}>
            <Button to='https://discord.com/invite/AczuUXDA2N' text='Discord chat' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Developers
