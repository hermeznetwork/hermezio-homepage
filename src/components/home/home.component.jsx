import React from 'react'

import useHomeStyles from './home.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'
import TextLink from '../shared/text-link/text-link.component'
import Section21 from '../../assets/images/home/section2_1.inline.svg'
import Section22 from '../../assets/images/home/section2_2.inline.svg'
import Section23 from '../../assets/images/home/section2_3.inline.svg'
import Section3 from '../../assets/images/home/section3.inline.svg'
import Section5 from '../../assets/images/home/section5.inline.svg'
import Section8 from '../../assets/images/home/section8.inline.svg'

const Home = () => {
  const classes = useHomeStyles()

  return (
    <>
      <div className={`${classes.sectionWrapper} ${classes.section1Wrapper}`}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={classes.col3}>
            <Title>Open and low-cost payments network for everyone.</Title>
            <p className={classes.section1Text}>Hermez seamlessly integrates into the fabric of the Ethereum ecosystem and enables low-cost token transfers for an inclusive economy.</p>
            <div className={classes.buttonWrapper}>
              <Button to='/' text='Create account' />
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
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
      </div>

      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section5}`}>
          <div className={classes.row}>
            <div className={`${classes.col2} ${classes.inlineGraphicText}`}>
              <Title>More than 90% transfer cost reduction</Title>
              <p className={classes.section5Text}>By using zero-knowledge technology, transfer costs are significantly reduced, allowing more accessible financial services for mainstream adoption.</p>
              <p className={classes.barText}>
                L1 Ethereum
              </p>
              <div className={classes.barL1} />
              <p className={classes.barText}>
                L2 Hermez
              </p>
              <div className={classes.barL2} />
            </div>
            <div className={`${classes.col2} ${classes.onlyDesktop} ${classes.inlineGraphicImage}`}>
              <Section5 />
            </div>
          </div>
        </section>
      </div>

      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section8}`}>
          <Title>Layer 2 scalability solution</Title>
          <p className={classes.section8Text}>Computational integrity and on-chain data availability are guaranteed by zero-knowledge proof technology while preserving the public blockchain properties of Ethereum.</p>
          <Section8 />
          <div className={classes.section8SubTitle}>
            <Title>Results</Title>
          </div>
          <div className={`${classes.row} ${classes.boxes}`}>
            <div className={`${classes.col3} ${classes.boxWrapper}`}>
              <div className={classes.box}>
                <span>Over 133x throughput improvement</span>
              </div>
            </div>
            <div className={`${classes.col3} ${classes.boxWrapper}`}>
              <div className={classes.box}>
                <span>Over 90% reduction in token transfer costs</span>
              </div>
            </div>
            <div className={`${classes.col3} ${classes.boxWrapper}`}>
              <div className={classes.box}>
                <span>Secure and fast withdrawals</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section3}`}>
          <div className={classes.row}>
            <div className={`${classes.col2} ${classes.inlineGraphicText}`}>
              <Title>Prosperitity for all</Title>
              <p className={classes.section3Text}>Hermez's mission is to create an inclusive, resilient and highly efficient payment network for the next generation of digital currencies to ensure everyone has the freedom to transact.</p>
              <TextLink to='/' text='Values and guiding principles' />
            </div>
            <div className={`${classes.col2} ${classes.onlyDesktop} ${classes.inlineGraphicImage}`}>
              <Section3 />
            </div>
          </div>
        </section>
      </div>

      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section6}`}>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section6Title}`}>
              <Title>Designed for collaborative economy</Title>
            </div>
            <div className={classes.col2}>
              <Title type='h3'>Hermez is giving back</Title>
              <p>Block creators are selected through a burn auction, however rather than burning tokens, 40% of the winning bid is returned as a donation to be reinvested in Ethereum public goods through Gitcoin quadratic funding grants.  We call this mechanism Proof-of-Donation.</p>
              <div className={classes.section6link}>
                <TextLink to='/' text='More about proof-of-donation' />
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>Permissionless auctions for validators</Title>
              <p>Anyone can bid in a decentralized auction to create the next batch on Hermez Network. Each successful validation is rewarded with HEZ tokens.</p>
              <div className={classes.section6link}>
                <TextLink to='/' text='How to become a coordinator' />
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>HEZ Token</Title>
              <p>The Hermez token (HEZ) will act as the vehicle for bidding in the auction to award exploitation rights to slots of the Hermez Network to the highest bidders.</p>
              <div className={classes.section6link}>
                <TextLink to='/' text='More about HEZ' />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section4}`}>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section4Title}`}>
              <Title>Future of payments</Title>
            </div>
            <div className={classes.col2}>
              <Title type='h3'>Zero-knowledge cryptography</Title>
              <p>Hermez zk-rollup is a layer 2 construction on top of Ethereum that solves its scalability through mass transfer processing rolled into a single transaction.</p>
              <p>The "zero-knowledge proof" (ZK) technology is used to present and publicly record the validity and correctness of the rolled transfers processed on the Ethereum blockchain. By storing just the proof and the compressed data of a batch of transfers, the efficiency and the throughput of the network is multiplied.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>Universal scalability with validity proofs</Title>
              <p>The consensus of status between Ethereum and Hermez is leveraging on zk-SNARKs validity proofs. Since validity is enforced by the zero-knowledge circuits, the L2 network status and the transactions can be considered as valid instantly once the corresponding block containing the proof is mined in L1.</p>
              <p>All the data availability required to reconstruct the full state of Hermez network is implemented on Ethereum, and so any permissionless node can be deployed and synchronized from it.</p>
            </div>
          </div>
          <div className={`${classes.row} ${classes.section4BoxWrapper}`}>
            <div className={`${classes.col3} ${classes.section4Box}`}>
              <TextLink box white to='/hermez-whitepaper.pdf' text='Hermez Network White Paper' />
            </div>
            <div className={`${classes.col3} ${classes.section4Box}`}>
              <TextLink box white to='https://docs.hermez.io/' text='Technical Documentation' />
            </div>
            <div className={`${classes.col3} ${classes.section4Box}`}>
              <TextLink box white to='https://github.com/hermeznetwork' text='Github Repository' />
            </div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.buttonWrapper} ${classes.button}`}>
              <Button internalLink transparent to='/developers' text='Developers' />
            </div>
          </div>
        </section>
      </div>

      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section7}`}>
          <div className={classes.row}>
            <div className={classes.col3}>
              <Title>Blog</Title>
            </div>
            <div className={classes.col2}>
              <h3 className={classes.blogTitle}>
                <a
                  href='https://blog.hermez.io/hermez-second-audit-by-trail-of-bits/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={classes.blogLink}
                >
                  Hermez Second Audit, by Trail of Bits
                </a>
              </h3>
              <p>30 December 2020</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <h3 className={classes.blogTitle}>
                <a
                  href='https://blog.hermez.io/hermez-trusted-setup-phase-2/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={classes.blogLink}
                >
                  Join Hermez Trusted Setup Phase 2 Ceremony!
                </a>
              </h3>
              <p>21 December 2020</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
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
          <div className={`${classes.row} ${classes.allBlogPostsLink}`}>
            <TextLink to='https://blog.hermez.io/' text='View all posts' />
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
