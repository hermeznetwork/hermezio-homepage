import React from 'react'

import useHomeStyles from './home.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'
import TextLink from '../shared/text-link/text-link.component'
import Section21 from '../../assets/images/home/section2_1.inline.svg'
import Section22 from '../../assets/images/home/section2_2.inline.svg'
import Section23 from '../../assets/images/home/section2_3.inline.svg'
import Section31 from '../../assets/images/home/section3.inline.svg'
import Section5 from '../../assets/images/home/section5.inline.svg'

const Home = () => {
  const classes = useHomeStyles()

  return (
    <>
      <section className={`${classes.section} ${classes.section1}`}>
        <div className={classes.col3}>
          <Title>Open and low-cost payments network for everyone.</Title>
          <p className={classes.section1Text}>Hermez is a trustless zk-rollup focused on scaling payments and token transfers on the wings of Ethereum.</p>
          <div className={classes.buttonWrapper}>
            <Button to='/' text='Create account' marginLeft={0} />
          </div>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section2}`}>
        <div className={classes.section2Title}>Hermez seamlessly integrates into the fabric of Ethereum ecosystem and enables low-cost token transfers for inclusive economy.</div>
        <div className={classes.row}>
          <div className={`${classes.col3} ${classes.section2Box}`}>
            <Section21 className={classes.section2Image1} />
            <div className={classes.section2Text}>Cost efficient token transfers and swaps with high throughput.</div>
          </div>
          <div className={`${classes.col3} ${classes.section2Box}`}>
            <Section22 className={classes.section2Image2} />
            <div className={classes.section2Text}>Decentalised and open-source architecture.</div>
          </div>
          <div className={`${classes.col3} ${classes.section2Box}`}>
            <Section23 className={classes.section2Image3} />
            <div className={classes.section2Text}>Computational integrity for secure transactions.</div>
          </div>
        </div>
        <div>
          <div className={`${classes.buttonWrapper} ${classes.button}`}>
            <Button internalLink to='/payments-network' text='Hermez Network' />
          </div>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section3}`}>
        <div className={classes.row}>
          <div className={classes.col2}>
            <Title>Prosperitity for all</Title>
            <p className={classes.section3Text}>Hermez mission is to create an inclusive, secure and borderless payments infrastructure to bring economic freedom to people all over the world.</p>
            <TextLink to='/' text='Values and guiding principles' />
          </div>
          <div className={`${classes.col2} ${classes.webOnly}`}>
            <Section31 />
          </div>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section4}`}>
        <div className={classes.row}>
          <div className={classes.col3}>
            <div className={classes.section4Title}>
              <Title>Zero-knowledge cryptography</Title>
            </div>
          </div>
          <div className={classes.col2}>
            <p className={classes.paragraphMargin}>ZK-Rollups are one of the options being developed for layer 2 construction that increases scalability through mass transfer processing rolled into a single transaction.</p>
            <p>A "zero knowledge proof" approach is used to present and publicly record the validity of the block on the Ethereum blockchain. ZK reduces computing and storage resources for validating the block by reducing the amount of data held in a transaction; zero knowledge of the entire data is needed.</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col3}>
            <div className={classes.section4Title}>
              <Title>Universal scalability with validity proofs</Title>
            </div>
          </div>
          <div className={classes.col2}>
            <p>Explanation of validity proofs + data availability on L1. The SNARK proof is a hash that represents the delta of the blockchain state. State refers to "state of being." SNARK proof compares a snapshot of the blockchain before the transfers to a snapshot of the blockchain after the transfers (i.e. wallet values) and reports only the changes in a verifiable hash to the mainnet.</p>
          </div>
        </div>
        <div className={`${classes.row} ${classes.section4BoxWrapper}`}>
          <div className={`${classes.col3} ${classes.section4Box}`}>
            <TextLink box to='/' text='Hermez Network White Paper' />
          </div>
          <div className={`${classes.col3} ${classes.section4Box}`}>
            <TextLink box to='/' text='Technical Documentation' />
          </div>
          <div className={`${classes.col3} ${classes.section4Box}`}>
            <TextLink box to='https://github.com/hermeznetwork' text='Github Repository' />
          </div>
        </div>
        <div className={classes.row}>
          <div className={`${classes.buttonWrapper} ${classes.button}`}>
            <Button internalLink to='/developers' text='Developers' />
          </div>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section5}`}>
        <div className={classes.row}>
          <div className={classes.col2}>
            <Title>97% transfer cost reduction</Title>
            <p className={classes.section5Text}>Block creators are selected via a burn auction, except rather than burning tokens, a 40% of the winning bid goes back to be reinvested in Ethereum public goods through Gitcoin.</p>
            <p className={classes.barText}>
              L1 Ethereum - <span className={classes.barHighlightedText}>100% gas per TX</span>
            </p>
            <div className={classes.barL1} />
            <p className={classes.barText}>
              L2 Hermez - <span className={classes.barHighlightedText}>10% gas per TX</span>
            </p>
            <div className={classes.barL2} />
          </div>
          <div className={`${classes.col2} ${classes.webOnly}`}>
            <Section5 />
          </div>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section6}`}>
        <div className={classes.row}>
          <div className={classes.col3}>
            <Title>Designed for collaborative economy</Title>
          </div>
          <div className={classes.col2}>
            <h3>Hermez is giving back</h3>
            <p>Block creators are selected via a burn auction, except rather than burning tokens, a 40% of the winning bid goes back to be reinvested in Ethereum public goods through Gitcoin quadratic funding grants. We call this mechanism proof-of-donation.</p>
            <TextLink to='/' text='More about proof-of-donation' />
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>Permissionless auctions for validators</h3>
            <p>Everyone can bid in a decentralized auction to create the next batch on Hermez Network. A successful validation is rewarded with HEZ tokens.</p>
            <TextLink to='/' text='How to become a coordinator' />
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>HEZ Token</h3>
            <p>The Hermez token (HEZ) will act as the vehicle for bidding in the auction to award exploitation rights to slots of the Hermez Network to the highest bidders.</p>
            <TextLink to='/' text='More about HEZ' />
          </div>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section7}`}>
        <div className={classes.row}>
          <div className={classes.col3}>
            <Title>Blog</Title>
          </div>
          <div className={classes.col2}>
            <h3 className={classes.blogTitle}>
              <a
                href='https://blog.hermez.io/hermez-massive-migrations-mechanism/'
                target='_blank'
                rel='noopener noreferrer'
                className={classes.blogLink}
              >
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
            <h3 className={classes.blogTitle}>
              <a
                href='https://blog.hermez.io/hermez-zk-rollup-circom-circuits-github-public/'
                target='_blank'
                rel='noopener noreferrer'
                className={classes.blogLink}
              >
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
            <h3 className={classes.blogTitle}>
              <a
                href='https://blog.hermez.io/hermez-in-depth-bootstrapping-security-measures/'
                target='_blank'
                rel='noopener noreferrer'
                className={classes.blogLink}
              >
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
          <TextLink to='https://blog.hermez.io/' text='View all posts' />
        </div>
      </section>
    </>
  )
}

export default Home
