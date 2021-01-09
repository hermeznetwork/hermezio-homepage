import React from 'react'

import useProjectStyles from './project.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'

const Project = () => {
  const classes = useProjectStyles()

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={classes.col3}>
            <Title>Unlocking the full potential of Ethereum for the common good</Title>
            <div className={classes.buttonWrapper}>
              <Button to='https://discord.com/invite/AczuUXDA2N' text='Discord chat' />
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
            <div className={`${classes.col2} ${classes.title}`}>
              <Title><a id='development-goals'>Development goals</a></Title>
            </div>
            <div className={classes.col2}>
              <p>Everyone should have universal access to finance.</p>
              <p>We are working on an open-source scalability model based on zero-knowledge technology (zk-rollup) to simplify and reduce costs for person-to-person payments, arbitrage opportunities and promote the adoption of digital currencies.</p>
              <p>The decentralized Hermez protocol will provide a solid cryptographic foundation optimized for low-cost token transfers and enable future payment and financial solutions.</p>
              <p>The development plan includes creating a private self-sovereign identity to support DeFi ecosystem.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={`${classes.divider} ${classes.dividerFullWidth}`} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title>Project qualities</Title>
            </div>
            <div className={classes.col2}>
              <div className={classes.subTitle}>
                <Title type='h4'>Decentralized</Title>
              </div>
              <p>Hermez is called a network because the model is natively decentralized.</p>
              <p>It's a layer 2 construction and intends to be able to process thousands of transactions per second, so the consensus algorithm has to be simple for one agent (coordinator) to process this amount of transactions at any given time.</p>
              <p>Our model allows the network to be permission-less and censorship resistant for user transactions.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <div className={classes.subTitle}>
                <Title type='h4'>Efficient</Title>
              </div>
              <p>The decentralized model is implemented through a permissionless auction system for potential coordinators of the network to earn the right to process transactions during a slot of time.</p>
              <p>The auction model incentivizes the energy and cost efficiency of coordinators. They are pushed to process as many transactions as they can in order to collect the transaction fees, and to do so at the minimum operational cost in order to be able to outbid other coordinators (and make money out of it).</p>
              <p>Hermez implements a zk-rollup based on zk-SNARKs proofs, the most efficient cryptographic construction in terms of batch cost in Ethereum.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <div className={classes.subTitle}>
                <Title type='h4'>Security in mind</Title>
              </div>
              <p>Hermez is a layer 2 construction that leverages Ethereum not only by using its native tokens, but also by borrowing its security as a strong public blockchain. Every Hermez Network batch can be securely reconstructed from the proof and data posted in the Ethereum Blockchain.</p>
              <p>Hermez’ implementation is based in iden3’s own technology (Circom and SnarkJS libraries) and the cryptographic technology which has been proven as the most robust so far, as used in the ZCash blockchain.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <div className={classes.subTitle}>
                <Title type='h4'>Part of the community</Title>
              </div>
              <p>Hermez is designed to contribute to the community, since the project wouldn’t be possible without it. Innovations in scalability are a rare opportunity to realign incentives around the community and the public goods they provide.</p>
              <p>40% of the generated value in the network will be sent to a donation mechanism designed to benefit the projects behind the ecosystem’s public goods.. It will start by contributing to Gitcoin Grants, but other pools might be enabled in the future.</p>
              <p>Hermez will open source all the code of the protocol and the coordinator, is open to contributions, and has committed to contribute to the creation of a L2 ecosystem for initiatives such as better L2 interoperability.</p>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section3}`}>
          <div className={classes.profilesTitle}>
            <Title>Team</Title>
          </div>
          <div className={`${classes.row} ${classes.profilesRow}`}>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/jordi.jpg'
                alt='Jordi Baylina'
              />
              <span className={classes.name}>Jordi Baylina</span>
              <span className={classes.role}>Technical Lead</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/davids.jpg'
                alt='David Schwartz'
              />
              <span className={classes.name}>David Schwartz</span>
              <span className={classes.role}>Project Lead</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/antoni.png'
                alt='Antoni Martin'
              />
              <span className={classes.name}>Antoni Martin</span>
              <span className={classes.role}>Business Development</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/davidr.png'
                alt='David Ruiz'
              />
              <span className={classes.name}>David Ruiz</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
          </div>
          <div className={`${classes.row} ${classes.profilesRow}`}>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/griff.jpg'
                alt='Griff Green'
              />
              <span className={classes.name}>Griff Green</span>
              <span className={classes.role}>Advisor</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/arnauc.jpg'
                alt='Arnau Cube'
              />
              <span className={classes.name}>Arnau Cube</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/cristinab.jpg'
                alt='Cristina Barbero'
              />
              <span className={classes.name}>Cristina Barbero</span>
              <span className={classes.role}>PR & Project Assistant</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/carlos.jpg'
                alt='Carlos Matallana'
              />
              <span className={classes.name}>Carlos Matallana</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
          </div>
          <div className={`${classes.row} ${classes.profilesRow}`}>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/eduard.jpg'
                alt='Eduard Sanou'
              />
              <span className={classes.name}>Eduard Sanou</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/miroslav.jpg'
                alt='Miroslav Milenkovic'
              />
              <span className={classes.name}>Miroslav Milenkovic</span>
              <span className={classes.role}>Methodology</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/laia.jpg'
                alt='Laia Soler'
              />
              <span className={classes.name}>Laia Soler</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/jesus.jpg'
                alt='Jesus Ligero'
              />
              <span className={classes.name}>Jesus Ligero</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
          </div>
          <div className={`${classes.row} ${classes.profilesRow}`}>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/raul.jpg'
                alt='Raul Jareño'
              />
              <span className={classes.name}>Raul Jareño</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/rafal.jpg'
                alt='Rafal Nazarkiewicz'
              />
              <span className={classes.name}>Rafal Nazarkiewicz</span>
              <span className={classes.role}>Product Manager</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/toni.jpg'
                alt='Toni Ramírez'
              />
              <span className={classes.name}>Toni Ramírez</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/pol.jpg'
                alt='Pol Bordas'
              />
              <span className={classes.name}>Pol Bordas</span>
              <span className={classes.role}>Ecosystem Development</span>
            </div>
          </div>
          <div className={`${classes.row} ${classes.profilesRow}`}>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/arnaub.jpg'
                alt='Arnau Bennassar'
              />
              <span className={classes.name}>Arnau Bennassar</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/alberto.jpg'
                alt='Alberto Elías'
              />
              <span className={classes.name}>Alberto Elías</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/cristinac.jpg'
                alt='Cristina Capdevila'
              />
              <span className={classes.name}>Cristina Capdevila</span>
              <span className={classes.role}>Business Development</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/chami.jpg'
                alt='Chami'
              />
              <span className={classes.name}>Chami</span>
              <span className={classes.role}>Visual Product Designer</span>
            </div>
          </div>
          <div className={`${classes.row} ${classes.profilesRow}`}>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/antonio.jpg'
                alt='Antonio Vázquez'
              />
              <span className={classes.name}>Antonio Vázquez</span>
              <span className={classes.role}>Head of Communications</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/elias.jpg'
                alt='Elías García'
              />
              <span className={classes.name}>Elías García</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/jenna.jpg'
                alt='Jenna Osorio'
              />
              <span className={classes.name}>Jenna Osorio</span>
              <span className={classes.role}>Community Manager</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/alonso.jpg'
                alt='Alonso Rodríguez'
              />
              <span className={classes.name}>Alonso Rodríguez</span>
              <span className={classes.role}>Software Engineer</span>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default Project
