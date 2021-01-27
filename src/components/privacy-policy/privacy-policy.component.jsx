import React from 'react'

import usePrivacyPolicyStyles from './privacy-policy.styles'
import Title from '../shared/title/title.component'

const PrivacyPolicy = () => {
  const classes = usePrivacyPolicyStyles()

  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <div className={classes.title}>
          <Title>Privacy Policy</Title>
          <p className={classes.subtitle}>Updated as of December 17, 2020</p>
        </div>
        <p className={classes.paragraphMargin}>We know that you care how information about you is used and shared and we appreciate your trust in us to do that carefully and sensibly. This privacy policy (“Privacy Policy”) describes how we collect and process your personal information through any application or web service owned or operated (collectively the “App”) provided by HermezDAO Ltd. (“Hermez Network”, "we", "us" or "our"). Hermez Network is the controller of your personal data collected and processed through the App and we are committed to protecting and respecting your privacy.</p>
        <Title type='h3'>Introduction</Title>
        <p>Hermez Network and its affiliates are committed to protecting and respecting your privacy. In addition, we recognize that persons who use Hermez Network value their privacy. This Privacy Policy together with our Terms of Service governs our collection, processing and use of Personal Information. By accessing the App, you are consenting to the information collection and use practices described in this Privacy Policy.</p>
        <p className={classes.paragraphMargin}>This Privacy Policy applies to the operations of Hermez Network in the European Economic Area (EEA). It gives you rights by operation of the EU GDPR. If you live outside the EEA, Hermez Network will undertake best efforts to give you a similar degree of control over your privacy.</p>
        <Title type='h3'>Purpose of Privacy Policy</Title>
        <p className={classes.paragraphMargin}>The purpose of this Privacy Policy is to set out in an accountable and transparent way the collection and use of information by Hermez Network.</p>
        <Title type='h3'>Personal information</Title>
        <p>"Personal Information" is information which identifies you personally or by which your identity can reasonably be ascertained. This may include but is not limited to:</p>
        <ul className={`${classes.list} ${classes.paragraphMargin}`}>
          <li className={classes.listBullet}>Full legal name, address for service, e-mail address, phone number, date of birth, photographic identification, government issued identification and other contact details.</li>
          <li className={classes.listBullet}>Your blockchain wallet addresses.</li>
          <li className={classes.listBullet}>Ethereum network information related to transactions.</li>
          <li className={classes.listBullet}>We may receive Ethereum network information from you as a result of your interaction with Hermez Network.</li>
          <li className={classes.listBullet}>Hermez Network requires the highest level of browser permissions that could potentially lead to procurement of more Personal Information than enclosed in the definition of Personal Information.</li>
          <li className={classes.listBullet}>Hermez Network may require the use of MetaMask and may obtain additional information from MetaMask related to Ethereum address and transactions.</li>
          <li className={classes.listBullet}>World Wide Web related information, including but not limited to IP Addresses, operating system and browser type may be received by Hermez Network as a result of your interactions with Hermez Network.</li>
          <li className={classes.listBullet}>Hermez Network uses Google Analytics for purposes of monitoring web traffic. Any identifying information collected via Google Analytics is controlled by Google.</li>
          <li className={classes.listBullet}>Ethereum blockchain and other public blockchains provide transparency into transactions and Hermez Network is not responsible for preventing or managing information broadcasted on a blockchain.</li>
        </ul>
        <Title type='h3'>Purpose of personal information collection</Title>
        <p>Personal Information is collected in order to:</p>
        <ul className={`${classes.list} ${classes.paragraphMargin}`}>
          <li className={classes.listBullet}>Provide our services efficiently and effectively;</li>
          <li className={classes.listBullet}>Inform you about lending and financing features;</li>
          <li className={classes.listBullet}>Develop, enhance, market and deliver products and services to you;</li>
          <li className={classes.listBullet}>Understand your needs and your eligibility for products and services;</li>
          <li className={classes.listBullet}>Provide information to you about developments and new products, including changes and enhancements to the Site;</li>
          <li className={classes.listBullet}>Process billing and collection of any fees;</li>
          <li className={classes.listBullet}>Conduct surveys and get feedback from you;</li>
          <li className={classes.listBullet}>Establish and maintain a responsible commercial relationship with you;</li>
          <li className={classes.listBullet}>Provide you with news and other matters of general interest to you as Hermez Network customer;</li>
          <li className={classes.listBullet}>Meet Hermez Network legal and regulatory requirements (e.g., information required to verify your identity);</li>
        </ul>
        <Title type='h3'>Security, protection and use of personal information</Title>
        <p>Hermez Network is committed to protecting your privacy. Internally, only employees have access to know Personal Information, or whose duties reasonably require access to it are granted access to Personal Information.</p>
        <p>Hermez Network’s systems and data are constantly under review to ensure that you are getting the best class of service and that market leading security features are in place.</p>
        <p>Hermez Network reserves the right to retain and share certain personal Information in order to meet our regulatory and statutory requirements and further to our contractual agreements with partners and third parties.</p>
        <p className={classes.paragraphMargin}>Personal Information and other related data may be exported outside of the jurisdiction in which you reside. Your Personal Information may be processed and stored in a foreign country or countries. Under those circumstances, the governments, courts, law enforcement or regulatory agencies of that country or those countries may be able to obtain access to your Personal Information through foreign laws. You need to be aware that the privacy standards of those countries may be lower than those of the jurisdiction in which you reside. You should note that you are not obliged to give your Personal Information to Hermez Network, but if you choose not to do so, we may not be able to provide our services, or your access to our services may be limited.</p>
        <Title type='h3'>Consent</Title>
        <p className={classes.paragraphMargin}>Consent is required for the collection of Personal Information and the subsequent use of disclosure of Personal Information. The form of consent may vary depending upon the circumstances and the type of Personal information obtained. Your agreement with Hermez Network’s Terms of Service constitutes your consent to the collection and use of Personal Information as described in this Privacy Policy. Hermez Network reserves the right to use and disclose Personal Information without your knowledge or consent as permitted by applicable law.</p>
        <Title type='h3'>Disclosure of personal information</Title>
        <p>We use the Personal Information for the purposes indicated at the time you provide us with such information, and/or otherwise for the purposes set out in this Privacy Policy and/or as otherwise permitted by law. We may make available the Personal Information that you provide to us to our affiliates, agents, representatives, service providers and contractors for these purposes. We also reserve the right to disclose Personal information that Hermez Network believe, in good faith, is appropriate or necessary to enforce our Terms of Service, take precautions against liability or harm, to investigate and respond to third-party claims or allegations, to respond to a court order or official requests, to protect security or integrity of Hermez Network and to protect the rights, property or safety of Hermez Network, our uses or others.</p>
        <p>We may share Users' Personal Information with any financial dispute resolution scheme to which the Company subscribes, and other law enforcement bodies, regulatory agencies, courts, arbitration bodies and dispute resolution schemes, both in BVI and internationally, as may be required by law.</p>
        <p>If you request it in writing, we may share your Personal Information with your nominated advisers. Except where disclosure of your Personal Information is required by law or requested by you, we will generally require any third party which receives or has access to Personal Information to protect such Personal Information and to use it only to carry out the services they are performing for you or for us, unless otherwise required or permitted by law. We will ensure that any such third party is aware of our obligations under this Privacy Policy and we will take reasonable steps to ensure that contracts we enter with such third parties binds them to terms no less protective of any Personal Information disclosed to them than the obligations we undertake to you under this Privacy Policy or which are imposed on us under applicable data protection laws.</p>
        <p className={classes.paragraphMargin}>In the event that Hermez Network is involved in a merger, acquisition, sale, bankruptcy, insolvency, reorganization, receivership, assignment or the application of laws or change of control, there may be a disclosure of your information to another entity related to such an event.</p>
        <Title type='h3'>Access and changing of personal information</Title>
        <p className={classes.paragraphMargin}>You have the right to access the Personal Information we hold about you, and to require the correction, updating and blocking of inaccurate and/or incorrect data by sending an email to us. We will usually respond to your request within fourteen (14) days. You may also request the deletion or destruction of your Personal Information, your Account details or your Transaction details by sending an email to us. Hermez Network will act on your request only when it is not inconsistent with its legal and regulatory obligations and compliance procedures. Upon your written request, we will inform you of the use and general disclosure of your Personal Information. Depending on the nature of your request, there may be a minimal charge for accessing your Personal Information.</p>
        <Title type='h3'>Security</Title>
        <p className={classes.paragraphMargin}>We take reasonable steps to protect your Personal Information from misuse, loss, unauthorized access, modification or disclosure, including implementing appropriate security measures. The security measures in place will, from time to time, be reviewed in line with legal and technical developments. However, we give no guarantee that such misuse, loss, unauthorized access, modification or disclosure will not occur. There are protective measures that you should take which as well include but are not limited to changing password regularly, not sharing your Personal Information with others unless you clearly understand the purpose of their request and you know with whom you are dealing.</p>
        <Title type='h3'>Retention of personal information</Title>
        <p className={classes.paragraphMargin}>We will hold your Personal Information only for as long as it is necessary for us to do so, having regard to the purposes described in this Privacy Policy and our own legal and regulatory requirements. In general, Personal Information relating to your Account for at least a period of five years after your Account is closed. Similarly, we usually retain information about Transactions on your Account for a period of five years from the date of the Transaction. Personal Information which is collected for other purposes will be discarded in accordance with our policies in place from time to time.</p>
        <Title type='h3'>Users under age of 13</Title>
        <p className={classes.paragraphMargin}>Hermez Network does not knowingly collect or store any personal information about children under 13 without verifiable prior parental consent. If you believe such information has been inadvertently collected, we shall take necessary steps in order to remove such information from our database. Users under 13 must seek and obtain parental consent to use this website.</p>
        <Title type='h3'>Links</Title>
        <p className={classes.paragraphMargin}>There may be links from our Site to other sites and resources provided by third parties. This Privacy Policy applies only to our Site. Accessing those third-party sites or sources requires you to leave our Site. We do not control those third party sites or any of the content contained therein and you agree that we are in no way responsible or liable for any of those third party sites, including, without limitation, their content, policies, failures, promotions, products, services or actions and/or any damages, losses, failures or problems caused by, related to or arising from those sites. We encourage you to review all policies, rules, terms and regulations, including the privacy policies, of each site that you visit.</p>
        <Title type='h3'>Changes</Title>
        <p className={classes.paragraphMargin}>Our policies, content, information, promotions, disclosures, disclaimers and features may be revised, modified, updated, and/or supplemented at any time and without prior notice at the sole and absolute discretion of the Company. If we change this Privacy Policy, we will take steps to notify all Users by a notice on our website and will post the amended Privacy Policy on the website.</p>
        <Title type='h3'>Contact us</Title>
        <p className={classes.paragraphMargin}>If you have any questions, comments, or concerns regarding our Privacy Policy and/or practices, please contact us at <a className={classes.mail} href='mailto:hello@hermez.network' target='_blank' rel='noopener noreferrer'>hello@hermez.network</a></p>
      </div>
    </section>
  )
}

export default PrivacyPolicy
