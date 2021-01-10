import React from 'react'

import useLegalDisclaimerStyles from './legal-disclaimer.styles'
import Title from '../shared/title/title.component'

const LegalDisclaimer = () => {
  const classes = useLegalDisclaimerStyles()

  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <div className={classes.title}>
          <Title>Legal disclaimer</Title>
        </div>
        <p className={classes.paragraphMargin}>The decentralised Hermez Protocol, including but not limited to the overall project, network, smart contracts, circuits and, in general, software (“Hermez”) is not a Financial, Money-transmitting or Payment Service of any kind and in any Jurisdiction. Any Financial or Payment Services terminology used in this Whitepaper, on the Website or on any parts of Hermez is intended only as a basic reference, without any effective or legal meaning of the same terms in a regulated and/or traditional financial environment.</p>
        <p className={classes.paragraphMargin}>Hermez tokens HEZ are strictly utility tokens in any jurisdiction and are not and can not be considered as security or otherwise regulated tokens of any kind nor are in any way akin to e-money and/or fiat or asset backed stablecoins, whether global or limited in scope. HEZ were and are not offered, sold or placed to the general public or to accredited/sophisticated investors and/or entities with an ICO, IEO or any other form of token sale, with or without purpose of developing Hermez and the tokens are immediately usable within Hermez. The Hermez users, founders, developers and other governance related roles and/or HEZ token holders do not own or control Hermez, but simply contribute to its development, maintenance and security in a fully open, community driven and decentralised way.</p>
        <p className={classes.paragraphMargin}>This Whitepaper is not a contract or a contractual agreement of any kind, nor a prospectus and/or an invitation or offer to invest in Hermez or acquire or use its tokens in any way. Any prospective or actual user of Hermez declares to have received appropriate technical, administrative and legal advice before and after reading this Whitepaper, the Hermez website and using any part of Hermez (including its tokens) and accepts that there is an inherent high risk in acquiring in any way or using any kind of blockchain and/or crypto token, platform, software, interface and fully discharge from any non-criminal liability any of the persons or entities mentioned here above or within this Whitepaper or on the Hermez Website for any kind of damage suffered, including total loss.</p>
        <p className={classes.paragraphMargin}>The HEZ Token is explicitly not intended to be offered, sold, given and/or used in any way, directly or indirectly, to and by Citizens or Residents of the U.S.A.</p>
      </div>
    </section>
  )
}

export default LegalDisclaimer
