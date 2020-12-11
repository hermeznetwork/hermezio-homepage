import React from 'react'
import { Link } from 'gatsby'

import useHomeStyles from './home.styles'
import { Layout } from '../layout/layout.component'
import Title from '../shared/title/title.component'
import ArrowPrimary from '../../assets/images/icons/arrow-primary.inline.svg'
import ArrowSecondary from '../../assets/images/icons/arrow-secondary.inline.svg'
import ArrowCirclePrimary from '../../assets/images/icons/arrow-circle-primary.inline.svg'
import ArrowCircleSecondary from '../../assets/images/icons/arrow-circle-secondary.inline.svg'
import Section21 from '../../assets/images/home/section2_1.inline.svg'
import Section22 from '../../assets/images/home/section2_2.inline.svg'
import Section23 from '../../assets/images/home/section2_3.inline.svg'
import Section31 from '../../assets/images/home/section3.inline.svg'

const Home = () => {
  const classes = useHomeStyles()

  return (
    <Layout>
      <section className={`${classes.section} ${classes.section1}`}>
        <div className={classes.col3}>
          <Title>Open and low-cost payments network for everyone.</Title>
          <p>Hermez is a trustless zk-rollup focused on scaling payments and token transfers on the wings of Ethereum.</p>
          <a href='/' target='_blank' rel='noopener noreferrer' className={`${classes.buttonLink} ${classes.primary}`}>
            Create account
            <ArrowPrimary className={classes.buttonLinkIcon} />
          </a>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section2}`}>
        <Title>Hermez seamlessly integrates into the fabric of Ethereum ecosystem and enables low-cost token transfers for inclusive economy.</Title>
        <div className={classes.row}>
          <div className={classes.col3}>
            <Section21 className={classes.section2Image1} />
            <div className={classes.section2Text}>Cost efficient token transfers and swaps with high throughput.</div>
          </div>
          <div className={classes.col3}>
            <Section22 className={classes.section2Image2} />
            <div className={classes.section2Text}>Decentalised and open-source architecture.</div>
          </div>
          <div className={classes.col3}>
            <Section23 className={classes.section2Image3} />
            <div className={classes.section2Text}>Computational integrity for secure transactions.</div>
          </div>
        </div>
        <div>
          <Link to='/payments-network' className={`${classes.buttonLink} ${classes.secondary}`}>
            Hermez Network
            <ArrowSecondary className={classes.buttonLinkIcon} />
          </Link>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section3}`}>
        <div className={classes.row}>
          <div className={classes.col2}>
            <Title>Prosperitity for all</Title>
            <p className={classes.section3Text}>Hermez mission is to create an inclusive, secure and borderless payments infrastructure to bring economic freedom to people all over the world.</p>
            <a href='/' target='_blank' rel='noopener noreferrer' className={classes.link}>
              Values and guiding principles
              <ArrowCirclePrimary className={classes.linkIcon} />
            </a>
          </div>
          <div className={classes.col2}>
            <Section31 />
          </div>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section4}`}>
        <div className={classes.row}>
          <div className={classes.col3}>
            <Title>Zero-knowledge cryptography</Title>
          </div>
          <div className={classes.col2}>
            <p>ZK-Rollups are one of the options being developed for layer 2 construction that increases scalability through mass transfer processing rolled into a single transaction.</p>
            <br />
            <p>A "zero knowledge proof" approach is used to present and publicly record the validity of the block on the Ethereum blockchain. ZK reduces computing and storage resources for validating the block by reducing the amount of data held in a transaction; zero knowledge of the entire data is needed.</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col3}>
            <Title>Universal scalability with validity proofs</Title>
          </div>
          <div className={classes.col2}>
            <p>Explanation of validity proofs + data availability on L1. The SNARK proof is a hash that represents the delta of the blockchain state. State refers to "state of being." SNARK proof compares a snapshot of the blockchain before the transfers to a snapshot of the blockchain after the transfers (i.e. wallet values) and reports only the changes in a verifiable hash to the mainnet.</p>
          </div>
        </div>
        <div className={classes.row}>
          <div className={classes.col3}>
            <a href='/' target='_blank' rel='noopener noreferrer' className={`${classes.boxLink}`}>
              <span>Hermez Network White Paper</span>
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
            <a href='/' target='_blank' rel='noopener noreferrer' className={`${classes.boxLink}`}>
              <span>Github Repository</span>
              <ArrowCircleSecondary />
            </a>
          </div>
        </div>
        <div className={classes.row}>
          <Link to='/developers' className={`${classes.buttonLink} ${classes.secondary}`}>
            Developers
            <ArrowSecondary className={classes.buttonLinkIcon} />
          </Link>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section5}`} />
      <section className={`${classes.section} ${classes.section6}`}>
        <div className={classes.row}>
          <div className={classes.col3}>
            <Title>Designed for collaborative economy</Title>
          </div>
          <div className={classes.col2}>
            <h3>Hermez is giving back</h3>
            <p>Block creators are selected via a burn auction, except rather than burning tokens, a 40% of the winning bid goes back to be reinvested in Ethereum public goods through Gitcoin quadratic funding grants. We call this mechanism proof-of-donation.</p>
            <a href='/' target='_blank' rel='noopener noreferrer' className={`${classes.link}`}>
              More about proof-of-donation
              <ArrowCirclePrimary className={classes.linkIcon} />
            </a>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>Permissionless auctions for validators</h3>
            <p>Everyone can bid in a decentralized auction to create the next batch on Hermez Network. A successful validation is rewarded with HEZ tokens.</p>
            <a href='/' target='_blank' rel='noopener noreferrer' className={`${classes.link}`}>
              How to become a coordinator
              <ArrowCirclePrimary className={classes.linkIcon} />
            </a>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>HEZ Token</h3>
            <p>The Hermez token (HEZ) will act as the vehicle for bidding in the auction to award exploitation rights to slots of the Hermez Network to the highest bidders.</p>
            <a href='/' target='_blank' rel='noopener noreferrer' className={`${classes.link}`}>
              More about HEZ
              <ArrowCirclePrimary className={classes.linkIcon} />
            </a>
          </div>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section7}`}>
        <div className={classes.row}>
          <div className={classes.col3}>
            <Title>Blog</Title>
          </div>
          <div className={classes.col2}>
            <h3>
              <a href='https://blog.hermez.io/hermez-massive-migrations-mechanism/' target='_blank' rel='noopener noreferrer'>
                Introducing the First L2 Interoperability Mechanism with Hermez Massive Migrations
              </a>
            </h3>
            <p>27 November 2020</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>
              <a href='https://blog.hermez.io/hermez-zk-rollup-circom-circuits-github-public/' target='_blank' rel='noopener noreferrer'>
                Hermez zk-rollup Circom Circuits Are Now Public!
              </a>
            </h3>
            <p>23 November 2020</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>
              <a href='https://blog.hermez.io/hermez-in-depth-bootstrapping-security-measures/' target='_blank' rel='noopener noreferrer'>
                Hermez in Depth: Bootstrapping Security Measures
              </a>
            </h3>
            <p>19 November 2020</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <a href='https://blog.hermez.io/' target='_blank' rel='noopener noreferrer' className={`${classes.link}`}>
            View all posts
            <ArrowCirclePrimary className={classes.linkIcon} />
          </a>
        </div>
      </section>
    </Layout>
  )
}

export default Home
