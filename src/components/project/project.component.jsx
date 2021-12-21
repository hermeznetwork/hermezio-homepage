import React from 'react'

import useProjectStyles from './project.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'
import Video from '../video/video.view'

const Project = () => {
  const classes = useProjectStyles()

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={classes.col3}>
            <Title>Unlocking the full potential of Ethereum for the common good</Title>
            <div className={classes.buttonWrapper}>
              <Button to='https://discord.gg/polygon' text='Discord chat' />
            </div>
          </div>
          <div className={classes.col23}>
            <div className={classes.section1img} />
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section2}`}>
          <div className={`${classes.title} ${classes.videoTitle}`}>
            <Title>Quick overview of Hermez technology</Title>
          </div>
          <div className={classes.row}>
            <Video
              vimeoSrc='https://player.vimeo.com/video/522736342?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
              title='Welcome to Hermez - Introduction to Hermez Network Video 1'
            />
          </div>
          <div className={classes.row}>
            <span className={`${classes.divider} ${classes.dividerFullWidth}`} />
          </div>

          <div className={classes.row}>
            <div className={`${classes.col2} ${classes.title}`}>
              <Title><a id='development-goals' href='#'>Development goals</a></Title>
            </div>
            <div className={classes.col2}>
              <p>Everyone should have universal access to finance.</p>
              <p>We are working on an open-source scalability model based on zero-knowledge technology (zk-rollup) to simplify and reduce costs for person-to-person payments, arbitrage opportunities and promote the adoption of digital currencies.</p>
              <p>The decentralised Hermez protocol will provide a solid cryptographic foundation optimised for low-cost token transfers and enable future payment and financial solutions.</p>
              <p>The development plan includes creating a private self-sovereign identity to support the DeFi ecosystem.</p>
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
                <Title type='h4'>Decentralised</Title>
              </div>
              <p>Hermez is called a network because the model is natively decentralised.</p>
              <p>It’s a Layer 2 construction and intends to process thousands of transactions per second, so the consensus algorithm has to be simple for one agent (coordinator) to process this amount of transactions at any given time.</p>
              <p>Our model allows the network to be permissionless and censorship resistant for user transactions.</p>
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
              <p>The decentralised model is implemented through a permissionless auction system for potential coordinators of the network to earn the right to process transactions during a slot of time.</p>
              <p>The auction model incentivises the energy and cost efficiency of coordinators. They are pushed to process as many transactions as they can in order to collect the transaction fees, and to do so at the minimum operational cost in order to be able to outbid other coordinators (and make money out of it).</p>
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
              <p>Our Proof-of-Donation consensus algorithm will send 40% of the network’s generated value as a donation to the projects behind the ecosystem’s public goods.</p>
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
                src='/profiles/jordi.png'
                alt='Jordi Baylina'
              />
              <span className={classes.name}>Jordi Baylina</span>
              <span className={classes.role}>Technical Lead</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/david.png'
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
                src='/profiles/no_photo.png'
                alt='Marc Palacio'
              />
              <span className={classes.name}>Marc Palacio</span>
              <span className={classes.role}>CFO</span>
            </div>
          </div>
          <div className={`${classes.row} ${classes.profilesRow}`}>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/davidr.png'
                alt='David Ruiz'
              />
              <span className={classes.name}>David Ruiz</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/edu.png'
                alt='Eduardo Antuña'
              />
              <span className={classes.name}>Eduardo Antuña</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/carlos.png'
                alt='Carlos Matallana'
              />
              <span className={classes.name}>Carlos Matallana</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/ofra.png'
                alt='Ofra Ram'
              />
              <span className={classes.name}>Ofra Ram</span>
              <span className={classes.role}>HR Manager</span>
            </div>
          </div>
          <div className={`${classes.row} ${classes.profilesRow}`}>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/alberto.png'
                alt='Alberto Elías'
              />
              <span className={classes.name}>Alberto Elías</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/rafal.png'
                alt='Rafal Nazarkiewicz'
              />
              <span className={classes.name}>Rafal Nazarkiewicz</span>
              <span className={classes.role}>Product Manager</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/miros.png'
                alt='Miroslav Milenkovic'
              />
              <span className={classes.name}>Miroslav Milenkovic</span>
              <span className={classes.role}>Methodology & Project Manager</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/arnaub.png'
                alt='Arnau Bennassar'
              />
              <span className={classes.name}>Arnau Bennassar</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
          </div>
          <div className={`${classes.row} ${classes.profilesRow}`}>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/laia.png'
                alt='Laia Soler'
              />
              <span className={classes.name}>Laia Soler</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/jesus.png'
                alt='Jesus Ligero'
              />
              <span className={classes.name}>Jesus Ligero</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/raul.png'
                alt='Raul Jareño'
              />
              <span className={classes.name}>Raul Jareño</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/antonio.png'
                alt='Antonio Vázquez'
              />
              <span className={classes.name}>Antonio Vázquez</span>
              <span className={classes.role}>Head of Communications</span>
            </div>
          </div>
          <div className={`${classes.row} ${classes.profilesRow}`}>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/toni.png'
                alt='Toni Ramírez'
              />
              <span className={classes.name}>Toni Ramírez</span>
              <span className={classes.role}>Software Engineer</span>
            </div>

            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/elias.png'
                alt='Elías García'
              />
              <span className={classes.name}>Elías García</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/chami.png'
                alt='Chami An'
              />
              <span className={classes.name}>Chami An</span>
              <span className={classes.role}>Visual Product Designer</span>
            </div>

            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/alonso.png'
                alt='Alonso Rodríguez'
              />
              <span className={classes.name}>Alonso Rodríguez</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
          </div>
          <div className={`${classes.row} ${classes.profilesRow}`}>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/michael.png'
                alt='Michael Wall'
              />
              <span className={classes.name}>Michael Wall</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/cristinac.png'
                alt='Cristina Capdevila'
              />
              <span className={classes.name}>Cristina Capdevila</span>
              <span className={classes.role}>Business Development</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/alex.png'
                alt='Àlex Monsó'
              />
              <span className={classes.name}>Àlex Monsó</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/jenna.png'
                alt='Jenna Osorio'
              />
              <span className={classes.name}>Jenna Osorio</span>
              <span className={classes.role}>Community Manager</span>
            </div>
          </div>
          <div className={`${classes.row} ${classes.profilesRow}`}>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/thiago.png'
                alt='Thiago Lemos'
              />
              <span className={classes.name}>Thiago Lemos</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/davidroga.png'
                alt='David Rodríguez'
              />
              <span className={classes.name}>David Rodríguez</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/adrian.png'
                alt='Adrián Fernández'
              />
              <span className={classes.name}>Adrián Fernández</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/francesc.png'
                alt='Francesc Romero'
              />
              <span className={classes.name}>Francesc Romero</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
          </div>
          <div className={`${classes.row} ${classes.profilesRow}`}>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/ignasi.png'
                alt='Ignasi Ramos'
              />
              <span className={classes.name}>Ignasi Ramos</span>
              <span className={classes.role}>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/cristinab.png'
                alt='Cristina Barbero'
              />
              <span className={classes.name}>Cristina Barbero</span>
              <span className={classes.role}>Admin</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/lorena.png'
                alt='Lorena Gonzalez'
              />
              <span className={classes.name}>Lorena Gonzalez</span>
              <span className={classes.role}>Admin</span>
            </div>
            <div className={classes.profile} />
          </div>
        </section>
      </div>
    </>
  )
}

export default Project
