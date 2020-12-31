import React from 'react'

import usePaymentsNetworkStyles from './payments-network.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'
import TextLink from '../shared/text-link/text-link.component'
import Section1 from '../../assets/images/payments-network/section1.inline.svg'
import Section3 from '../../assets/images/payments-network/section3.inline.svg'
import Section5 from '../../assets/images/payments-network/section5.inline.svg'

const PaymentsNetwork = () => {
  const classes = usePaymentsNetworkStyles()

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={`${classes.col3} ${classes.mainTitle}`}>
            <Title>Secure layer 2 designed for mass adoption</Title>
            <div className={classes.buttonWrapper}>
              <Button to='/' text='Join Hermez' />
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
                <li className={classes.listItem}>Low-cost token transfer ~ 0.1 USD </li>
                <li className={classes.listItem}>ETH and ERC-20 tokens transfer</li>
                <li className={classes.listItem}>Atomic swaps</li>
                <li className={classes.listItem}>Fees payable in single currency</li>
                <li className={classes.listItem}>Low cost deposits and withdrawals</li>
                <li className={classes.listItem}>Fast capital-efficient exit (withdrawal) in a few minutes</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section3}`}>
          <Title>Open ecosystem</Title>
          <div className={classes.sectionText}>
            <p>Cryptocurrency exchange (EX) used as an example of a transaction aggregator.</p>
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
              <Title type='h3'>Exchanges and wallet providers</Title>
              <p>Participate in Hermez permissionless auctions to produce blocks and earn HEZ tokens. Low-entry barrier to be profitable...</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>Validators / network coordinators</Title>
              <p>Participate in Hermez permissionless auctions to produce blocks and earn HEZ tokens. Low-entry barrier to be profitable...</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>Community</Title>
              <p>The Hermez token (HEZ) will act as the vehicle for bidding in the auction to award exploitation rights to slots of the Hermez Network to the highest bidders.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>Individuals</Title>
              <p>The Hermez token (HEZ) will act as the vehicle for bidding in the auction to award exploitation rights to slots of the Hermez Network to the highest bidders.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title type='h3'>Token issuers</Title>
              <p>The Hermez token (HEZ) will act as the vehicle for bidding in the auction to award exploitation rights to slots of the Hermez Network to the highest bidders.</p>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section5}`}>
          <div className={classes.col2}>
            <Title>HEZ - Hermez Network token</Title>
            <p className={classes.section5Text}>The Hermez token (HEZ) will act as the vehicle for bidding in the auction to award exploitation rights to slots of the Hermez Network to the highest bidders.</p>
            <div className={classes.linksWrapper}>
              <div className={classes.link}>
                <TextLink to='/' text='Token contract' />
              </div>
              <div className={classes.link}>
                <TextLink to='https://coinmarketcap.com/currencies/hermez-network/' text='HEZ in Coinmarketcap' />
              </div>
            </div>
          </div>
          <div className={`${classes.col3} ${classes.onlyDesktop}`}>
            <Section5 />
          </div>
        </section>
      </div>
    </>
  )
}

export default PaymentsNetwork
