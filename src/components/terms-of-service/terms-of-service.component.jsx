import React from 'react'

import useTermsOfServiceStyles from './terms-of-service.styles'
import Title from '../shared/title/title.component'

const TermsOfService = () => {
  const classes = useTermsOfServiceStyles()

  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <div className={classes.title}>
          <Title>Terms of service</Title>
          <p className={classes.subtitle}>Updated as of December 17, 2020</p>
        </div>
        <p>Welcome to Hermez Network.</p>
        <p>Hermez Network is a subsidiary of HermezDAO Ltd., a foundation registered in the British Virgin Islands, under company number 2043757 ("Hermez Network", “we,” “our,” or “us”). We provide website features and services to you when you visit our website located at https://hermez.io and their subdomains (the “website”). Please read these Terms of Service carefully, along with any other policies and notices on the website, (the “Service Terms”) and our Privacy Policy. Together, these materials contain terms, rules, and guidelines related to your use of the Hermez Network and how we collect and process your information throughout Hermez Network.</p>
        <p className={classes.paragraphMarginLarger}>Please read these conditions carefully before using Hermez Network. By using our Application Programming Interface (“API”) services, or visiting our website, you signify your agreement to be bound by these Service Terms.</p>
        <Title type='h3'>Overview</Title>
        <p>We know that Service Terms can be long and confusing, so we will do our best to keep things as clear and concise as possible. Hermez Network provides self-hosted wallet services for Ethereum-based blockchains and these Service Terms outline approved uses of Hermez Network, various licenses that we grant to you, and licenses that you grant us.</p>
        <p className={classes.paragraphMarginLarger}>If you have any questions or comments related to these Terms, please send us a message on our website at hello@hermez.network. If you do not agree to these Service Terms or any modifications to these Services Terms, you should not use Hermez Network.</p>
        <Title type='h3'>How you accept this policy</Title>
        <p className={classes.paragraphMarginLarger}>By creating or importing a locally hosted wallet (a “Wallet”), or visiting our website, you acknowledge that you have read, understood, and agreed to these Terms, as well as the accompanying Privacy Policy. We reserve the right to change these Service Terms at any time. Any such changes with respect to your use of Hermez Network will take effect immediately when posted on our website. Your continued use of Hermez Network following any such change will signify your acceptance to be bound by the new Service Terms. Please check the effective date above to determine if there have been any changes since you have last reviewed these Service Terms. Failure or delay by Hermez Network in enforcing or partially enforcing any provision of these Service Terms shall not be construed as a waiver of any rights.</p>
        <Title type='h3'>Eligibility</Title>
        <p className={classes.paragraphMarginLarger}>To be eligible to use Hermez Network, you must be at least eighteen (18) years old and be able to form legally binding contracts. If you are using Hermez Network on behalf of a legal entity, you further represent and warrant that: (a) the legal entity is duly organised and validly existing under the applicable laws of the jurisdiction of its organisation; and (b) you are duly authorised by such legal entity to act on its behalf. You can only use Hermez Network if permitted under the laws of your jurisdiction. By using Hermez Network, you represent and warrant that you meet all eligibility requirements that we outline in these Service Terms. We may still refuse to let certain people access or use Hermez Network, and we reserve the right to change our eligibility criteria at any time.</p>
        <Title type='h3'>The blockchain services</Title>
        <p>Hermez Network is software that:</p>
        <ul className={classes.list}>
          <li className={classes.listBullet}>generates private keys that you may use to send and receive Ethereum and related cryptographically secured tokens (the “Virtual Currency”) following Hermez Network protocol;</li>
          <li className={classes.listBullet}>facilitates the submission of Virtual Currency transaction data to Ethereum-based blockchains (the “Ethereum Networks”) without requiring you to download or install the associated Ethereum-based software to your local device; and</li>
          <li className={classes.listBullet}>computational services of generating blocks following Hermez Network protocol.</li>
        </ul>
        <p className={classes.paragraphMargin}>The private key is derived from a message signed by an external Ethereum Wallet and can be used to authorise the transfer of Virtual Currency to and from that Wallet address. You are solely responsible for maintaining the security of your private key and any mnemonic (backup) phrase associated with your Wallet. You must never send messages signed with your Wallet associated with an address used with Hermez Network to any unauthorised party. You must keep your Wallet address, mnemonic (backup) phrase, and private key access information secure. Failure to do so may result in the loss of control of Virtual Currency associated with the Wallet. </p>
        <Title type='h5'>Hermez Network cannot assist with password retrieval</Title>
        <p className={classes.paragraphMargin}>Hermez Network stores your Wallet address but does not receive or store your Wallet password, encrypted private key, unencrypted private key, or mnemonic (backup) phrase associated with your Wallet. We cannot, therefore, assist you with Wallet password retrieval. We cannot generate a new password for your Wallet if you fail to remember your original password. If you have not safely stored a backup of any Wallet address and private key pairs maintained in your Wallet, you accept and acknowledge that any Virtual Currency you have associated with such a Wallet address will become inaccessible if you do not have your Wallet password.</p>
        <Title type='h5'>Virtual Currency transactions</Title>
        <p className={classes.paragraphMargin}>In order to be completed, all proposed Virtual Currency transactions must be confirmed and recorded in the Virtual Currency’s associated public blockchain. Such networks are decentralized, peer-to-peer networks supported by independent third parties, which we do not own, control, or operate. We have no control over the Ethereum Networks and, therefore, cannot and do not ensure that any transaction details that you submit via the Hermez Network will be confirmed and processed. By using Hermez Network, you acknowledge and agree that the transaction details you submit may not be completed, or may be substantially delayed, by the Ethereum Networks. </p>
        <Title type='h5'>Hermez Network does not store or transmit Virtual Currency</Title>
        <p className={classes.paragraphMargin}>We do not store, send, or receive Virtual Currency. Any transfer that occurs in any Virtual Currency occurs on the Ethereum-based blockchains and not on a network owned by us. We therefore do not guarantee that Hermez Network can affect the transfer of title or right in any Virtual Currency. </p>
        <Title type='h5'>Accuracy of information provided by user</Title>
        <p className={classes.paragraphMarginLarger}>You represent and warrant that any information you provide via the Hermez Network is accurate and complete. You accept and acknowledge that we are not responsible for any errors or omissions that you make in connection with any Virtual Currency transaction initiated via the Hermez Network. We strongly encourage you to review your transaction details carefully before attempting to transfer a Virtual Currency.</p>
        <Title type='h3'>Wallet registration and account information</Title>
        <Title type='h5'>You must create a Hermez Network Wallet by connecting an existing Ethereum Wallet </Title>
        <p className={classes.paragraphMargin}>When you create a Wallet, you will be assigned a private key. You will be responsible for maintaining the confidentiality of your private key and will be fully responsible for any and all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your password, account, or any other breach of security. We will not be liable for any loss or damage arising from your failure to comply with these Service Terms.</p>
        <Title type='h5'>When you create a Wallet, you are strongly advised to take precautions in order to avoid loss of access to and/or control over your Wallet</Title>
        <p>Suggested measures include, but are not limited to, the following:</p>
        <ul className={`${classes.list} ${classes.paragraphMarginLarger}`}>
          <li className={classes.listBullet}>creating a strong password that you do not use for any other website or online service;</li>
          <li className={classes.listBullet}>using the backup functionality provided by the Wallet or safeguard your private key and mnemonic (backup) phrase on an external hard drive which, all users, especially users who have more than $10,000 USD in assets, are encouraged to do even if they are utilizing the Services’ backup functionality;</li>
          <li className={classes.listBullet}>maintaining the security of your Wallet by protecting the private key and mnemonic (backup) phrase associated with your Wallet by, for example, limiting access to your computer and your Wallet; and</li>
          <li className={classes.listBullet}>promptly notifying us if you discover or otherwise suspect any security breaches related to your Wallet.</li>
        </ul>
        <Title type='h3'>Payments and fees</Title>
        <Title type='h5'>Hermez Network charges transaction fees for its use</Title>
        <p className={classes.paragraphMargin}>Any applicable fees will be displayed prior to you using any service to which a fee applies.</p>
        <Title type='h5'>Transactions</Title>
        <p className={classes.paragraphMargin}>Once transaction details have been submitted via Hermez Network, we cannot assist you to cancel or otherwise modify your transaction. Hermez Network has no control over any Ethereum-based blockchain and does not have the ability to facilitate any cancellation or modification requests. You must ensure that you have an adequate balance in your Wallet and/or gas to complete transactions before initiating a transaction. You acknowledge and agree that we will not be liable for any failed transactions due to insufficient funds or gas associated with your Hermez Network account.</p>
        <Title type='h5'>Taxes</Title>
        <p className={classes.paragraphMarginLarger}>It is your responsibility to determine what, if any, taxes apply to the transactions that you have submitted transaction details for via Hermez Network, and it is your responsibility to report and remit the correct tax to the appropriate tax authority. You agree that we are not responsible for determining whether taxes apply to your Ethereum-based transactions or for collecting, reporting, withholding, or remitting any taxes arising from any Virtual Currency-related transactions.</p>
        <Title type='h3'>Third party services and content</Title>
        <p className={classes.paragraphMarginLarger}>In no event shall a description or reference to a third party’s product or service (including, but not limited to, providing a description or reference via hyperlink) be construed as an endorsement or promotion of such third-party products or services by us. We retain the exclusive right to add to, modify, or cancel the availability of any third-party service. You may agree to receive push notifications from third-party content providers. In order to receive push notifications, you must opt into the service. Push notifications will not be automatically enabled on your device for third-party content. We do not control, endorse, or adopt any third-party content shared through push notifications, and will have no responsibility for third-party content including, but not limited to, token availability and/or sales. If, to the extent permitted by Hermez Network, you grant express permission to a third party to access or connect to your Hermez Network account, either through the third party’s product or service or through Hermez Network, you acknowledge that granting permission to a third party to take specific actions on your behalf does not relieve you of any of your responsibilities under this Agreement. You are fully responsible for all acts or omissions of any third party with access to your Hermez Network account.</p>
        <Title type='h3'>Your use of Hermez Network</Title>
        <p className={classes.paragraphMargin}>As a user of Hermez Network, we grant you a limited, personal, non-commercial, non-exclusive, non-transferable, and revocable license to use our services. When using our services, we ask that you follow some basic rules:</p>
        <ul className={classes.list}>
          <li className={classes.listBulletBold}>Do not use our services to break the law</li>
        </ul>
        <p className={classes.paragraphMargin}>You agree that you will not violate any laws when using our services. This includes any local, provincial, state, federal, national, or international laws that may apply to you. You agree that you will not use Hermez Network to pay for, support, or otherwise engage in any illegal activities including, but not limited to, illegal gambling, fraud, money laundering, or terrorist activities. If we discover that you have violated these Service Terms or other regulatory requirements including, but not limited to, the Bank Secrecy Act, by participating in money laundering or by financing terrorist activities, we will take proportional disciplinary action. You further agree not to encourage or induce any third party to engage in any of the activities prohibited under this Section. </p>
        <ul className={classes.list}>
          <li className={classes.listBulletBold}>Do not interfere with other’s use of the services</li>
        </ul>
        <p className={classes.paragraphMargin}>You agree that you will not use or attempt to use another user’s Wallet without authorization or use Hermez Network in any manner that could interfere, disrupt, negatively affect, or inhibit other users from fully enjoying it.</p>
        <ul className={classes.list}>
          <li className={classes.listBulletBold}>Do not try to harm our system</li>
        </ul>
        <p className={classes.paragraphMargin}>You agree not to distribute any virus or other harmful computer code through Hermez Network. You also agree to not take any action that may impose an unreasonable or disproportionately large load on our or any of our third-party providers’ infrastructure.</p>
        <ul className={classes.list}>
          <li className={classes.listBulletBold}>Do not attempt to circumvent our security</li>
        </ul>
        <p className={classes.paragraphMarginLarger}>You agree not to bypass, circumvent, or attempt to bypass or circumvent any measures that we may use to prevent or restrict access to Hermez Network including, without limitation, other accounts, computer systems, or networks connected to the Hermez Network. Any use of Hermez Network other than as specifically authorized in these Service Terms, without our prior written permission, is strictly prohibited and will terminate your license to use Hermez Network.</p>
        <Title type='h3'>Limitation of liability and disclaimer of warranties</Title>
        <p>You understand and agree that we have no control over, and no duty to take any action regarding: </p>
        <ul className={`${classes.list} ${classes.paragraphMargin}`}>
          <li className={classes.listBullet}>Failures, disruptions, errors, or delays in processing Virtual Currency that you may experience while using Hermez Network;</li>
          <li className={classes.listBullet}>The risk of failure of hardware, software, and Internet connections; </li>
          <li className={classes.listBullet}>The risk of malicious software being introduced or found in the software underlying Hermez Network;</li>
          <li className={classes.listBullet}>The risk that third parties may obtain unauthorized access to information stored within your Wallet, including, but not limited to your Wallet address, private key, and mnemonic (backup) phrase; and </li>
          <li className={classes.listBullet}>The risk of unknown vulnerabilities in or unanticipated changes to the Ethereum Networks.</li>
        </ul>
        <p>You release us from all liability related to any losses, damages, or claims arising from: </p>
        <ul className={`${classes.list} ${classes.paragraphMarginLarger}`}>
          <li className={classes.listBullet}>user error such as forgotten passwords, incorrectly constructed transactions, or mistyped Virtual Currency addresses;</li>
          <li className={classes.listBullet}>server failure or data loss; </li>
          <li className={classes.listBullet}>unauthorized access to the Hermez Network application;</li>
          <li className={classes.listBullet}>bugs or other errors in the Hermez Network software; and</li>
          <li className={classes.listBullet}>any unauthorized third-party activities, including, but not limited to, the use of viruses, phishing, brute forcing, or other means of attack against Hermez Network.</li>
        </ul>
        <Title type='h3'>Limitation of liability</Title>
        <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL WE OR ANY OF OUR OFFICERS, DIRECTORS, REPRESENTATIVES, AGENTS, SERVANTS, COUNSEL, EMPLOYEES, CONSULTANTS, LAWYERS, AND OTHER PERSONNEL AUTHORIZED TO ACT, ACTING, OR PURPORTING TO ACT ON OUR BEHALF (COLLECTIVELY THE “DAPPS PLATFORM PARTIES”) BE LIABLE TO YOU UNDER CONTRACT, TORT, STRICT LIABILITY, NEGLIGENCE, OR ANY OTHER LEGAL OR EQUITABLE THEORY, FOR:</p>
        <p>ANY LOST PROFITS, DATA LOSS, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, COMPENSATORY, OR CONSEQUENTIAL DAMAGES OF ANY KIND WHATSOEVER RESULTING FROM: </p>
        <ul className={classes.list}>
          <li className={classes.listBullet}>YOUR USE OF, OR CONDUCT IN CONNECTION WITH, OUR SERVICES;</li>
          <li className={classes.listBullet}>ANY UNAUTHORIZED USE OF YOUR WALLET ADDRESS AND/OR PRIVATE KEY DUE TO YOUR FAILURE TO MAINTAIN THE CONFIDENTIALITY OF YOUR WALLET; </li>
          <li className={classes.listBullet}>ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM HERMEZ NETWORK; OR</li>
          <li className={classes.listBullet}>ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT ARE FOUND IN THE HERMEZ NETWORK SOFTWARE OR THAT MAY BE TRANSMITTED TO OR THROUGH HERMEZ NETWORK BY ANY THIRD PARTY (REGARDLESS OF THE SOURCE OF ORIGINATION), OR</li>
          <li className={classes.listBullet}>ANY DIRECT DAMAGES IN EXCESS OF (IN THE AGGREGATE) OF THE GREATER OF:</li>
          <li className={classes.listBullet}>FEES PAID TO US FOR THE APPLICABLE PRODUCTS; OR</li>
          <li className={classes.listBullet}>$100.00.</li>
        </ul>
        <p className={classes.paragraphMarginLarger}>THESE LIMITATIONS APPLY REGARDLESS OF LEGAL THEORY, WHETHER BASED ON TORT, STRICT LIABILITY, BREACH OF CONTRACT, BREACH OF WARRANTY, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT WE WERE ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.</p>
        <Title type='h3'>Warranty disclaimer</Title>
        <p className={classes.paragraphMarginLarger}>Hermez Network IS PROVIDED "AS IS'' AND WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM ALL REPRESENTATIONS AND WARRANTIES, EXPRESS OR IMPLIED, RELATING TO THE SERVICES AND UNDERLYING SOFTWARE OR ANY CONTENT ON HERMEZ NETWORK, WHETHER PROVIDED OR OWNED BY US OR BY ANY THIRD PARTY, INCLUDING WITHOUT LIMITATION, WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, FREEDOM FROM COMPUTER VIRUS, AND ANY IMPLIED WARRANTIES ARISING FROM COURSE OF DEALING, COURSE OF PERFORMANCE, OR USAGE IN TRADE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED. IN ADDITION, WE DO NOT REPRESENT OR WARRANT THAT THE CONTENT ACCESSIBLE VIA HERMEZ NETWORK IS ACCURATE, COMPLETE, AVAILABLE, CURRENT, FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE RESULTS OF USING HERMEZ NETWORK WILL MEET YOUR REQUIREMENTS. SOME COUNTRIES DO NOT ALLOW THE DISCLAIMER OF IMPLIED WARRANTIES, SO THE FOREGOING DISCLAIMERS MAY NOT APPLY TO YOU. THIS PARAGRAPH GIVES YOU SPECIFIC LEGAL RIGHTS AND YOU MAY ALSO HAVE OTHER LEGAL RIGHTS THAT VARY FROM COUNTRY TO COUNTRY.</p>
        <Title type='h3'>Indemnity</Title>
        <p className={classes.paragraphMarginLarger}>To the extent permitted by applicable law, you agree to defend, indemnify, and hold harmless DApps Platform Parties from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including, but not limited to, attorney’s fees) arising from: (a) your use of and access to Hermez Network; (b) any feedback or submissions you provide to us concerning Hermez Network; (c) your violation of any term of these Service Terms; or (d) your violation of any law, rule, or regulation, or the rights of any third party.</p>
        <Title type='h3'>The limitation on claims</Title>
        <p className={classes.paragraphMarginLarger}>You agree that any claim you may have arising out of or related to your relationship with us must be filed within one (1) year after such claim arises, otherwise, your claim is permanently barred.</p>
        <Title type='h3'>Governing law</Title>
        <p className={classes.paragraphMarginLarger}>Regardless of where you are located, the laws of the British Virgin Islands will govern these Service Terms and the parties’ relationship as if you signed these Terms in the BVI. If any provisions of these Service Terms are inconsistent with any applicable law, those provisions will be superseded or modified only to the extent such provisions are inconsistent. The parties agree to submit to the courts in BVI for exclusive jurisdiction of any dispute arising out of or related to your use of Hermez Network or your breach of these Service Terms. You waive any objection based on lack of personal jurisdiction, place of residence, improper venue, or forum non conveniens in any such action.</p>
        <Title type='h3'>Note to international users</Title>
        <p className={classes.paragraphMarginLarger}>If you are a user accessing or using Hermez Network from a region with laws or regulations governing personal data collection, use, and disclosure, please be advised that we do not collect or process your personal data, except as provided for in our Privacy Policy.</p>
        <Title type='h3'>Termination</Title>
        <p className={classes.paragraphMarginLarger}>In the event of termination concerning your license to use Hermez Network, your obligations under these Service Terms will still continue. Your access to the funds in your Wallet after termination will depend on your access to your backup of your Wallet address and private key.</p>
        <Title type='h3'>Discontinuance of services</Title>
        <p className={classes.paragraphMarginLarger}>We may, in our sole discretion and without cost to you, with or without prior notice, and at any time, modify or discontinue, temporarily or permanently, any portion of Hermez Network. You are solely responsible for storing outside of Hermez Network a backup of any Wallet address and private key pair that you maintain in your Wallet. Maintaining an external backup of any Wallet address and private key pairs associated with your Wallet will allow you to access the Ethereum Networks upon which your Wallet is secured. Such a backup will allow the user to fully restore their Wallet at any time without cost or loss of the user’s Virtual Currency. If you do not maintain a backup of your Wallet data outside of Hermez Network, you will not be able to access the Virtual Currency associated with your Wallet. Hermez Network shall not be held responsible or liable for any loss of Virtual Currency in the event that we discontinue or depreciate Hermez Network.</p>
        <Title type='h3'>No waiver</Title>
        <p className={classes.paragraphMarginLarger}>Our failure to exercise or delay in exercising any right, power, or privilege under these Service Terms shall not operate as a waiver; nor shall any single or partial exercise of any right, power, or privilege preclude any other or further exercise thereof.</p>
        <Title type='h3'>Severability</Title>
        <p className={classes.paragraphMargin}>If it turns out that any part of these Service Terms is invalid, void, or for any reason unenforceable, that term will be deemed severable and limited or eliminated to the minimum extent necessary. The limitation or elimination of the term will not affect any other terms. </p>
        <Title type='h5'>Arbitration and waiver of class action </Title>
        <p>The parties agree to arbitrate any dispute arising from or your use of Hermez Network on an individual basis. Arbitration prevents you from suing in court or from having a jury trial and the parties hereby expressly waive trial by jury.</p>
        <p>The parties agree that:</p>
        <ul className={classes.list}>
          <li className={classes.listBullet}>any arbitration will occur in London; and</li>
          <li className={classes.listBullet}>the arbitration will be conducted confidentially by a single arbitrator in accordance with the rules of the London Court of International Arbitration, in the English language, and with limited discovery.</li>
        </ul>
        <p className={classes.paragraphMarginLarger}>At your request, hearings may be conducted in person or by telephone and the arbitrator may provide for submitting and determining motions on briefs, without oral hearings. Other than class procedures and remedies discussed below, the arbitrator has the authority to grant any remedy that would otherwise be available to a court or other tribunal. THE PREVAILING PARTY IN ANY ACTION OR PROCEEDING TO ENFORCE THESE TERMS SHALL BE ENTITLED TO COSTS AND ATTORNEYS' FEES. THE ARBITRAL DECISION MAY BE ENFORCED IN ANY COURT. WHETHER THE DISPUTE IS HEARD IN ARBITRATION OR IN COURT, YOU AND HERMEZ NETWORK WILL NOT COMMENCE AGAINST THE OTHER A CLASS ACTION, CLASS ARBITRATION, OR REPRESENTATIVE ACTION OR PROCEEDING.</p>
        <Title type='h3'>Force Majeure</Title>
        <p className={classes.paragraphMarginLarger}>We shall not be held liable for any delays, failure in performance, or interruptions of service which result directly or indirectly from any cause or condition beyond our reasonable control, including but not limited to: any delay or failure due to any act of God, act of civil or military authorities, act of terrorism, civil disturbance, war, strike or other labour dispute, fire, interruption in telecommunications or Internet services or network provider services, failure of equipment and/or software, other catastrophe, or any other occurrence which is beyond our reasonable control and shall not affect the validity and enforceability of any remaining provisions.</p>
        <Title type='h3'>Assignment</Title>
        <p className={classes.paragraphMarginLarger}>You agree that we may assign any of our rights and/or transfer, sub-contract, or delegate any of our obligations under these Service Terms. Your agreement to these Service Terms is personal to you and you may not transfer or assign it to any third party.</p>
        <Title type='h3'>Entire agreement</Title>
        <p className={classes.paragraphMarginLarger}>These Service Terms set forth the entire understanding and agreement as to the subject matter hereof and supersede any and all prior discussions, agreements, and understandings of any kind (including, without limitation, any prior versions of this Agreement) and every nature between us. Except as provided for above, any modification to these Service Terms must be in writing and must be signed by both parties.</p>
        <Title type='h3'>Questions or comments</Title>
        <p className={classes.paragraphMarginLarger}>We welcome comments, questions, concerns, or suggestions. Please send us a message on our contact page at <a className={classes.mail} href='mailto:hello@hermez.network' target='_blank' rel='noopener noreferrer'>hello@hermez.network</a></p>
      </div>
    </section>
  )
}

export default TermsOfService
