import React from 'react'

import useProjectStyles from './project.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'
import Section1 from '../../assets/images/project/section1.inline.svg'

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
            <Section1 />
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section2}`}>
          <div className={classes.row}>
            <div className={`${classes.col2} ${classes.title}`}>
              <Title>Purpose</Title>
            </div>
            <div className={classes.col2}>
              <p>The idea about universal scaling solution comes from working on scaling decentralised identity with zero-knowledge proofs.</p>
              <p>Hermez Network is expected to benefit from the advancements in identity infrastructure such as validation, private credentials and reputation for an improved usability and extend the range of potential use cases of a high throughput transaction network.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={`${classes.divider} ${classes.dividerFullWidth}`} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title>Core Values</Title>
            </div>
            <div className={classes.col2}>
              <div className={classes.subTitle}>
                <Title type='h4'>Financial inclusion for all</Title>
              </div>
              <p>Improving access to financial services and support entrepreneurship will bring significant social benefits and economic opportunities.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <div className={classes.subTitle}>
                <Title type='h4'>Decentralisation</Title>
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
                <Title type='h4'>Security by design</Title>
              </div>
              <p>Hermez is a layer 2 construction that leverages Ethereum not only by using its native tokens, but also by borrowing its security as a strong public blockchain. Every Hermez Network batch can be securely reconstructed from the proof and data posted in the Ethereum Blockchain.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <div className={classes.subTitle}>
                <Title type='h4'>High efficiency</Title>
              </div>
              <p>The decentralized model is implemented through a permissionless auction system for potential coordinators of the network to earn the right to process transactions during a slot of time.</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <div className={classes.subTitle}>
                <Title type='h4'>Focused on usability and integration</Title>
              </div>
              <p>Zk-rollups provide the technology for instant finality of transactions, which Hermez understands is a key feature for usability. Hermez protocol also provides a guarantee that user transactions can not be censored and that all funds can always be sent back to layer 1.</p>
              <p>Layer 2 solutions increase complexity for the users, but the Hermez project focus is to provide the best possible usability for user onboarding, transactions and reduce friction and confusion between layers.</p>
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
              <span>Technical Lead</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/davids.jpg'
                alt='David Schwartz'
              />
              <span className={classes.name}>David Schwartz</span>
              <span>Project Lead</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/antoni.jpg'
                alt='Antoni Martin'
              />
              <span className={classes.name}>Antoni Martin</span>
              <span>Business Development</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/davidr.jpg'
                alt='David Ruiz'
              />
              <span className={classes.name}>David Ruiz</span>
              <span>Software Engineer</span>
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
              <span>Advisor</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/arnauc.jpg'
                alt='Arnau Cube'
              />
              <span className={classes.name}>Arnau Cube</span>
              <span>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/cristinab.jpg'
                alt='Cristina Barbero'
              />
              <span className={classes.name}>Cristina Barbero</span>
              <span>PR & Project Assistant</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/carlos.jpg'
                alt='Carlos Matallana'
              />
              <span className={classes.name}>Carlos Matallana</span>
              <span>Software Engineer</span>
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
              <span>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/miroslav.jpg'
                alt='Miroslav Milenkovic'
              />
              <span className={classes.name}>Miroslav Milenkovic</span>
              <span>Methodology</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/laia.jpg'
                alt='Laia Soler'
              />
              <span className={classes.name}>Laia Soler</span>
              <span>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/jesus.jpg'
                alt='Jesus Ligero'
              />
              <span className={classes.name}>Jesus Ligero</span>
              <span>Software Engineer</span>
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
              <span>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/rafal.jpg'
                alt='Rafal Nazarkiewicz'
              />
              <span className={classes.name}>Rafal Nazarkiewicz</span>
              <span>Product Manager</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/toni.jpg'
                alt='Toni Ramírez'
              />
              <span className={classes.name}>Toni Ramírez</span>
              <span>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/pol.jpg'
                alt='Pol Bordas'
              />
              <span className={classes.name}>Pol Bordas</span>
              <span>Ecosystem Development</span>
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
              <span>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/alberto.jpg'
                alt='Alberto Elías'
              />
              <span className={classes.name}>Alberto Elías</span>
              <span>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/cristinac.jpg'
                alt='Cristina Capdevila'
              />
              <span className={classes.name}>Cristina Capdevila</span>
              <span>Business Development</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/chami.jpg'
                alt='Chami'
              />
              <span className={classes.name}>Chami</span>
              <span>Visual Product Designer</span>
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
              <span>Head of Communications</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/elias.jpg'
                alt='Elías García'
              />
              <span className={classes.name}>Elías García</span>
              <span>Software Engineer</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/jenna.jpg'
                alt='Jenna Osorio'
              />
              <span className={classes.name}>Jenna Osorio</span>
              <span>Community Manager</span>
            </div>
            <div className={classes.profile}>
              <img
                className={classes.image}
                src='/profiles/alonso.jpg'
                alt='Alonso Rodríguez'
              />
              <span className={classes.name}>Alonso Rodríguez</span>
              <span>Software Engineer</span>
            </div>

          </div>
        </section>
      </div>
    </>
  )
}

export default Project
