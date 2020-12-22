import React from 'react'

import useProjectStyles from './project.styles'
import Title from '../shared/title/title.component'
import ArrowPrimary from '../../assets/images/icons/arrow-primary.inline.svg'
import Section1 from '../../assets/images/project/section1.inline.svg'

const Project = () => {
  const classes = useProjectStyles()

  return (
    <>
      <section className={`${classes.section} ${classes.section1}`}>
        <div className={`${classes.col3} ${classes.content}`}>
          <Title>Unlocking the full potential of Ethereum for the common good</Title>
          <a href='https://discord.com/invite/AczuUXDA2N' target='_blank' rel='noopener noreferrer' className={`${classes.buttonLink} ${classes.primary}`}>
            Discord chat
            <ArrowPrimary className={classes.buttonLinkIcon} />
          </a>
        </div>
        <div className={classes.col23}>
          <Section1 />
        </div>
      </section>
      <section className={`${classes.section} ${classes.section2}`}>
        <div className={classes.row}>
          <div className={classes.col3}>
            <Title>Purpose</Title>
          </div>
          <div className={classes.col2}>
            <p>The idea about universal scaling solution comes from working on scaling decentralised identity with zero-knowledge proofs.</p>
            <p>Hermez Network is expected to benefit from the advancements in identity infrastructure such as validation, private credentials and reputation for an improved usability and extend the range of potential use cases of a high throughput transaction network.</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col3}>
            <Title>Core Values</Title>
          </div>
          <div className={classes.col2}>
            <h3>Financial inclusion for all</h3>
            <p>Improving access to financial services and support entrepreneurship will bring significant social benefits and economic opportunities.</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>Decentralisation</h3>
            <p>Hermez is called a network because the model is natively decentralized.</p>
            <p>It's a layer 2 construction and intends to be able to process thousands of transactions per second, so the consensus algorithm has to be simple for one agent (coordinator) to process this amount of transactions at any given time.</p>
            <p>Our model allows the network to be permission-less and censorship resistant for user transactions.</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>Security by design</h3>
            <p>Hermez is a layer 2 construction that leverages Ethereum not only by using its native tokens, but also by borrowing its security as a strong public blockchain. Every Hermez Network batch can be securely reconstructed from the proof and data posted in the Ethereum Blockchain.</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>High efficiency</h3>
            <p>The decentralized model is implemented through a permissionless auction system for potential coordinators of the network to earn the right to process transactions during a slot of time.</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>Focused on usability and integration </h3>
            <p>Zk-rollups provide the technology for instant finality of transactions, which Hermez understands is a key feature for usability. Hermez protocol also provides a guarantee that user transactions can not be censored and that all funds can always be sent back to layer 1.</p>
            <p>Layer 2 solutions increase complexity for the users, but the Hermez project focus is to provide the best possible usability for user onboarding, transactions and reduce friction and confusion between layers.</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
      </section>
      <section className={`${classes.section} ${classes.section3}`}>
        <Title>Team</Title>

      </section>
    </>
  )
}

export default Project
