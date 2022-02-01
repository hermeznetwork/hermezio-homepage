import React from 'react'

import usePaymentsNetworkStyles from './payments-network.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'

const PaymentsNetwork = () => {
  const classes = usePaymentsNetworkStyles()

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={`${classes.col3} ${classes.mainTitle}`}>
            <Title>Secure layer 2 designed for mass adoption</Title>
            <div className={classes.buttonWrapper}>
              <Button to='https://docs.google.com/forms/d/e/1FAIpQLScK_dpb5GGBYTT3XWTq4iaMTvqlXvnrr0hM3Uogg3B8ukBSqg/viewform' text='Join Polygon Hermez' />
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
            <div className={classes.col2}>
              <Title>Powerful and trustless</Title>
            </div>
            <div className={classes.col2}>
              <ul className={classes.list}>
                <li className={classes.listItem}>Ethereum-level security guaranteed by zk-SNARKs</li>
                <li className={classes.listItem}>High throughput of 2000 TPS</li>
                <li className={classes.listItem}>Non-custodial architecture</li>
                <li className={classes.listItem}>Full ownership and control of assets (censorship resistant)</li>
                <li className={classes.listItem}>Data availability on Ethereum mainnet </li>
              </ul>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title>Ready to be integrated</Title>
            </div>
            <div className={classes.col2}>
              <ul className={classes.list}>
                <li className={classes.listItem}>Fully open source and community-driven</li>
                <li className={classes.listItem}>Seamless integration with Polygon Hermez REST API</li>
                <li className={classes.listItem}>Permissionless network of coordinators</li>
                <li className={classes.listItem}>Decentralised auction model with validation reward token</li>
                <li className={classes.listItem}>Strategy towards governance minimisation</li>
                <li className={classes.listItem}>Simple web and mobile app wallet</li>
              </ul>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title>Token transfers simplified</Title>
            </div>
            <div className={classes.col2}>
              <ul className={classes.list}>
                <li className={classes.listItem}>Low-cost token transfer</li>
                <li className={classes.listItem}>ETH and ERC-20 tokens transfer</li>
                <li className={classes.listItem}>Atomic swaps</li>
                <li className={classes.listItem}>Fees payable in a single currency</li>
                <li className={classes.listItem}>Low-cost deposits and withdrawals</li>
                <li className={classes.listItem}>Fast capital-efficient exit (withdrawal) in a few minutes</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section3}`}>
          <div className={classes.section3Title}>
            <Title>Scalable payments and universal settlement layer for moving token-based digital currencies.</Title>
          </div>
          <div className={classes.section3img} />
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section4}`}>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section4Title}`}>
              <Title>Benefits of integration and using Polygon Hermez</Title>
            </div>
            <div className={classes.col2}>
              <Title type='h3'>Users</Title>
              <p>Make secure payments in digital currencies using Ethereum borderless infrastructure, reducing transfer fees by over 90%.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>Coordinators (Validators)</Title>
              <p>Earn the right to forge batches in an open and permissionless way and collect the fees of the processed transactions.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>Community</Title>
              <p>Our smart contracts and Circom zero-knowledge circuits are open-source. Additionally, Polygon Hermez supports the development of the Ethereum ecosystem with the Proof-of-Donation mechanism for the common good.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>Transaction aggregators</Title>
              <p>An improved payment experience thanks to the low-cost transfers and swaps with all the security of Ethereum L1.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>Token Issuers</Title>
              <p>Add your token to Polygon Hermez Network to be available for scalable payments.</p>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section5}`}>
          <div className={classes.row}>
            <div className={`${classes.col2} ${classes.inlineGraphicText}`}>
              <Title>HEZ - Hermez Network token</Title>
              <p className={classes.section5Text}>After Hermez Network merged with Polygon, the HEZ token has been indexed to MATIC token. Polygon's native token MATIC will become the utility token of the Polygon Hermez zkRollup.</p>
              <p className={classes.section5Text}>HEZ holders can swap their HEZ for MATIC tokens using a web app. You can follow our step by step tutorial that is explained in{' '}
                <a
                  href='https://blog.hermez.io/how-to-swap-hez-for-matic/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className={classes.textLink}
                >
                  this blog post
                </a>.
              </p>
              <div className={`${classes.buttonWrapper} ${classes.button}`}>
                <Button internalLink to='https://heztomatic.hermez.io/' text='Convert HEZ to MATIC' />
              </div>
            </div>
            <div className={`${classes.col2} ${classes.onlyDesktop} ${classes.inlineGraphicImage}`}>
              <div className={classes.section5img} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default PaymentsNetwork
