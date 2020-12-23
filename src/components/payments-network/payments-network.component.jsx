import React from 'react'

import usePaymentsNetworkStyles from './payments-network.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'
import ArrowCirclePrimary from '../../assets/images/icons/arrow-circle-primary.inline.svg'
import Section1 from '../../assets/images/payments-network/section1.inline.svg'
import Section3 from '../../assets/images/payments-network/section3.inline.svg'
import Section5 from '../../assets/images/payments-network/section5.inline.svg'

const PaymentsNetwork = () => {
  const classes = usePaymentsNetworkStyles()

  return (
    <>
      <section className={`${classes.section} ${classes.section1}`}>
        <div className={`${classes.col3} ${classes.content}`}>
          <Title>Secure layer 2 designed for mass adoption</Title>
          <Button to='/' text='Join Hermez' />
        </div>
        <div className={classes.col23}>
          <Section1 />
        </div>
      </section>
      <section className={`${classes.section} ${classes.section2}`}>
        <div className={classes.row}>
          <div className={classes.col2}>
            <Title>Powerful and trustless</Title>
          </div>
          <div className={classes.col2}>
            <ul>
              <li>Ethereum-level security guaranteed by zk-SNARKs</li>
              <li>High throughput of 2000 TPS</li>
              <li>Non-custodial architecture</li>
              <li>Full ownership and control of assets (censorship resistant)</li>
              <li>Data availability on Ethereum mainnet </li>
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
            <ul>
              <li>Fully open source and community-driven</li>
              <li>Seamless integration with Hermez REST API</li>
              <li>Permissionless network of coordinators</li>
              <li>Decentralised auction model with validation reward token</li>
              <li>Strategy towards governance minimisation</li>
              <li>Simple web and mobile app wallet</li>
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
            <ul>
              <li>Low-cost token transfer ~ 0.1 USD </li>
              <li>ETH and ERC-20 tokens transfer</li>
              <li>Atomic swaps</li>
              <li>Fees payable in single currency</li>
              <li>Low cost deposits and withdrawals</li>
              <li>Fast capital-efficient exit (withdrawal) in a few minutes</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section3}`}>
        <Title>Open ecosystem</Title>
        <p>Cryptocurrency exchange (EX) used as an example of a transaction aggregator.</p>
        <Section3 />
      </section>
      <section className={`${classes.section} ${classes.section4}`}>
        <div className={classes.row}>
          <div className={classes.col3}>
            <Title>Benefits of integration and using Hermez</Title>
          </div>
          <div className={classes.col2}>
            <h3>Exchanges and wallet providers</h3>
            <p>Participate in Hermez permissionless auctions to produce blocks and earn HEZ tokens. Low-entry barrier to be profitable...</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>Validators / network coordinators</h3>
            <p>Participate in Hermez permissionless auctions to produce blocks and earn HEZ tokens. Low-entry barrier to be profitable...</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>Community</h3>
            <p>The Hermez token (HEZ) will act as the vehicle for bidding in the auction to award exploitation rights to slots of the Hermez Network to the highest bidders.</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>Individuals</h3>
            <p>The Hermez token (HEZ) will act as the vehicle for bidding in the auction to award exploitation rights to slots of the Hermez Network to the highest bidders.</p>
          </div>
        </div>
        <div className={classes.row}>
          <span className={classes.divider} />
        </div>
        <div className={classes.row}>
          <div className={classes.col2}>
            <h3>Token issuers</h3>
            <p>The Hermez token (HEZ) will act as the vehicle for bidding in the auction to award exploitation rights to slots of the Hermez Network to the highest bidders.</p>
          </div>
        </div>
      </section>
      <section className={`${classes.section} ${classes.section5}`}>
        <div className={classes.col2}>
          <Title>HEZ - Hermez Network token</Title>
          <p>The Hermez token (HEZ) will act as the vehicle for bidding in the auction to award exploitation rights to slots of the Hermez Network to the highest bidders.</p>
          <div>
            <a href='/' target='_blank' rel='noopener noreferrer' className={classes.link}>
                Token contract
              <ArrowCirclePrimary className={classes.linkIcon} />
            </a>
            <a href='https://coinmarketcap.com/currencies/hermez-network/' target='_blank' rel='noopener noreferrer' className={classes.link}>
                    HEZ in Coinmarketcap
              <ArrowCirclePrimary className={classes.linkIcon} />
            </a>
          </div>
        </div>
        <div className={classes.col3}>
          <Section5 />
        </div>
      </section>
    </>
  )
}

export default PaymentsNetwork
