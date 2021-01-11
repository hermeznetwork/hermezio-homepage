import React from 'react'

import usePaymentsNetworkStyles from './payments-network.styles'
import Title from '../shared/title/title.component'
// import Button from '../shared/button/button.component'
import TextLink from '../shared/text-link/text-link.component'
import Section3 from '../../assets/images/payments-network/section3.inline.svg'

const PaymentsNetwork = () => {
  const classes = usePaymentsNetworkStyles()

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={`${classes.col3} ${classes.mainTitle}`}>
            <Title>Secure layer 2 designed for mass adoption</Title>
            {/* TODO "Remove following links temporarily until we can provide this information" */}
            {/* <div className={classes.buttonWrapper}>
              <Button to='/' text='Join Hermez' />
            </div> */}
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
                <li className={classes.listItem}>Seamless integration with Hermez REST API</li>
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
                <li className={classes.listItem}>Low cost deposits and withdrawals</li>
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
          <Section3 />
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section4}`}>
          <div className={classes.row}>
            <div className={`${classes.col3} ${classes.section4Title}`}>
              <Title>Benefits of integration and using Hermez</Title>
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
              <p>Our smart contracts and Circom zero-knowledge circuits are open-source. Additionally, Hermez supports the development of the Ethereum ecosystem with the Proof-of-Donation mechanism for the common good.</p>
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
              <p>Add your token to Hermez Network to be available for scalable payments.</p>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section5}`}>
          <div className={`${classes.col2} ${classes.inlineGraphicText}`}>
            <Title><a id='hez' href='#'>HEZ - Hermez Network token</a></Title>
            <p className={classes.section5Text}>The Hermez token (HEZ) acts as the vehicle for bidding in the auction to award exploitation rights to slots of the Hermez Network to the highest bidders.</p>
            <div className={classes.linksWrapper}>
              <div className={classes.link}>
                <TextLink to='https://etherscan.io/token/0xEEF9f339514298C6A857EfCfC1A762aF84438dEE' text='Token contract' />
              </div>
              <div className={classes.link}>
                <TextLink to='https://coinmarketcap.com/currencies/hermez-network/' text='HEZ in Coinmarketcap' />
              </div>
            </div>
          </div>
          <div className={`${classes.col2} ${classes.onlyDesktop} ${classes.inlineGraphicImage}`}>
            <div className={classes.section5img} />
          </div>
        </section>
      </div>
    </>
  )
}

export default PaymentsNetwork
