import React from 'react'
import dayjs from 'dayjs'

import useHomeStyles from './home.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'
import TextLink from '../shared/text-link/text-link.component'
import Video from '../video/video.view'
import Section8 from '../../assets/images/home/section8.inline.svg'
import Section71 from '../../assets/images/home/cointelegraph-logo.inline.svg'
import Section72 from '../../assets/images/home/coindesk-logo.inline.svg'
import Section73 from '../../assets/images/home/the-block-logo.inline.svg'
import Section74 from '../../assets/images/home/newsbit-logo.inline.svg'
import { MailchimpForm } from '../mailchimp-form/mailchimp-form'

const Home = ({ blogPosts }) => {
  const classes = useHomeStyles()

  return (
    <>
      <div className={`${classes.sectionWrapper} ${classes.section1Wrapper}`}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={`${classes.col2} ${classes.section1Col}`}>
            <Title>Scalable payments. Decentralised by design, open for everyone.</Title>
            <p className={classes.section1Text}>Hermez is an open-source ZK-Rollup optimised for secure, low-cost and usable token transfers on the wings of Ethereum.</p>
            <div className={classes.buttonWrapper}>
              <Button to='https://wallet.hermez.io/' text='Create account' />
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section2}`}>
          <div className={`${classes.section2Title} ${classes.videoTitle}`}>Quick overview of how Hermez works</div>
          <div className={classes.row}>
            <Video
              vimeoSrc='https://player.vimeo.com/video/522467320?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              title='Meet Hermez'
            />
          </div>
          <div className={classes.row}>
            <span className={`${classes.divider} ${classes.dividerFullWidth}`} />
          </div>
          <div className={classes.section2Title}>Hermez seamlessly integrates into the fabric of the Ethereum ecosystem and enables low-cost token transfers for an inclusive economy.</div>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section2Box}`}>
              <div className={classes.section2_1img} />
              <div className={classes.section2Text}>Cost-efficient token transfers and swaps with high throughput.</div>
            </div>
            <div className={`${classes.col3} ${classes.section2Box}`}>
              <div className={classes.section2_2img} />
              <div className={classes.section2Text}>Decentralised and open-source architecture.</div>
            </div>
            <div className={`${classes.col3} ${classes.section2Box}`}>
              <div className={classes.section2_3img} />
              <div className={classes.section2Text}>Computational integrity for secure transactions.</div>
            </div>
          </div>
          <div>
            <div className={`${classes.buttonWrapper} ${classes.button}`}>
              <Button internalLink to='/payment-network' text='Hermez Network' />
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
              <div className={classes.section5img} />
            </div>
          </div>
        </section>
      </div>

      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section8}`}>
          <Title>Layer 2 scalability solution</Title>
          <p className={classes.section8Text}>Computational integrity and on-chain data availability are guaranteed by zero-knowledge proof technology while preserving the public blockchain properties of Ethereum.</p>
          <div className={classes.section8img}>
            <Section8 />
          </div>
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
              <Title>People powered payments</Title>
              <p className={classes.section3Text}>Hermez's mission is to create an inclusive, resilient and highly efficient payment network for the next generation of digital currencies to ensure everyone has the freedom to transact.</p>
              <TextLink to='/project#development-goals' text='Development goals' target='_self' />
            </div>
            <div className={`${classes.col2} ${classes.onlyDesktop} ${classes.inlineGraphicImage}`}>
              <div className={classes.section3img} />
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
                <TextLink to='https://docs.hermez.io/#/faq/pod' text='More about proof-of-donation' />
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>Permissionless auctions for validators</Title>
              <p>Anyone can bid in a decentralised auction to create the next batch on Hermez Network. Each successful validation is rewarded with the collected transaction fees.</p>
              <div className={classes.section6link}>
                <TextLink to='https://docs.hermez.io/#/faq/coordinators?id=coordinators' text='More about network coordinators' />
              </div>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>HEZ Token</Title>
              <p>The Hermez token (HEZ) acts as the vehicle for bidding in the auction to award exploitation rights to slots of the Hermez Network to the highest bidders.</p>
              <div className={classes.section6link}>
                <TextLink to='/payment-network#hez' text='More about HEZ' target='_self' />
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
              <Button internalLink transparent to='/technology' text='Technology' />
            </div>
          </div>
        </section>
      </div>

      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section7}`}>
          <div className={`${classes.row} ${classes.section7title}`}>
            <Title>As seen in the media</Title>
          </div>
          <div className={`${classes.row} ${classes.mediaLogos}`}>
            <div className={classes.mediaLogo}>
              <a
                href='https://cointelegraph.com/news/ethereum-layer-two-network-to-offer-batched-tether-payments'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Section71 />
              </a>
            </div>
            <div className={classes.mediaLogo}>
              <a
                href='https://www.coindesk.com/tech/2021/03/24/ethereum-rollup-hermez-network-to-be-used-by-tether-goes-live/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Section72 />
              </a>
            </div>
            <div className={classes.mediaLogo}>
              <a
                href='https://www.theblockcrypto.com/post/99191/hermez-network-mainnet-launch-ethereum-layer-2-zk-rollups'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Section73 />
              </a>
            </div>
            <div className={classes.mediaLogo}>
              <a
                href='https://newsbit.nl/polygon-hermez-uw-digitale-activa-op-de-meest-efficiente-manier-overdragen/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Section74 />
              </a>
            </div>
          </div>
          <div className={classes.row}>
            <span className={`${classes.divider} ${classes.dividerFullWidth}`} />
          </div>
          {
            blogPosts.map((blogPost, index) => (
              <>
                <div className={classes.row} key={index}>
                  {index === 0 && (
                    <div className={`${classes.col3} ${classes.blogHeaderCol}`}>
                      <Title>Blog</Title>
                    </div>
                  )}
                  <div className={classes.col2}>
                    <h3 className={classes.blogTitle}>
                      <a
                        href={blogPost.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={classes.blogLink}
                      >
                        {blogPost.title}
                      </a>
                    </h3>
                    <p>{dayjs(blogPost.published_at).format('DD MMMM YYYY')}</p>
                  </div>
                </div>
                <div className={classes.row}>
                  <span className={classes.divider} />
                </div>
              </>
            ))
          }
          <div className={`${classes.row} ${classes.allBlogPostsLink}`}>
            <TextLink to='https://blog.hermez.io/' text='View all posts' />
          </div>
        </section>
        <section className={`${classes.section} ${classes.section8}`}>
          <MailchimpForm />
        </section>
      </div>
    </>
  )
}

export default Home
