import React from 'react'

import usePositionStyles from './position.styles'
import Title from '../shared/title/title.component'

const Position = ({ openPosition }) => {
  const classes = usePositionStyles()
  const formPath =
    'https://docs.google.com/forms/d/e/1FAIpQLSdzw22j4_HtzWGlZCtth-39v899HPt0rLJbspygGYZICh8afQ/viewform?usp=pp_url&entry.725962123=' +
    openPosition.title.split(' ').join('+')

  return (
    <>
      <section className={`${classes.section} ${classes.section1}`}>
        <div className={classes.row}>
          <div className={classes.col2}>
            <div className={classes.section1Title}>
              <Title>{openPosition.title}</Title>
            </div>
            <p>{openPosition.location}</p>
          </div>
          <div className={`${classes.col2} ${classes.actionButton}`}>
            <div className={classes.buttonWrapper}>
              <a href={formPath} target='_blank' rel='noopener noreferrer'>
                Apply
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.section}>
        <div className={classes.row}>
          <p className={classes.paragraphMargin}>{openPosition.description}</p>
        </div>
        <div className={classes.row}>
          <Title type='h3'>Why Hermez?</Title>
        </div>
        <div>
          <p className={classes.paragraphMargin}>
            We are a ~30 person startup based in Zug, Switzerland, and
            Barcelona, Spain. We value positive communication, accountability,
            and working collaboratively.
          </p>
          <p className={classes.paragraphMargin}>
            Our goals are to give communities and individuals the freedom to
            self-organise, and every human the power to be themselves,
            preserving their user privacy; as well as to improve the scalability
            of the Ethereum blockchain creating an inclusive and accessible
            blockchain payment network, both using ZK-proof technology.
          </p>
          <p className={classes.paragraphMargin}>
            We currently have a number of products:
          </p>
          <p className={classes.paragraphMargin}>
            <strong>iden3</strong>iden3 An open-source set of tools for creating
            and managing self-sovereign identities; for more information, please
            go to{' '}
            <a
              href='https://iden3.io/'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://iden3.io/
            </a>
          </p>
          <p className={classes.paragraphMargin}>
            <strong>Hermez</strong> Decentralized zero-knowledge rollup that
            greatly scales the Ethereum network and lowers the cost of
            transactions. We do this while enhancing the user experience and
            giving back to the blockchain community. More information can be
            found here (
            <a
              href='https://hermez.io/'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://hermez.io/
            </a>
            );
          </p>
          <p className={classes.paragraphMargin}>
            <strong>Privado.Network</strong> Will provide a zero-knowledge based
            solution to identity & document verification, ensuring user´s
            personal data privacy and security. More information is soon to be
            released.
          </p>
          <p className={classes.paragraphMargin}>
            We aim to deliver products that are open source, easy-to-use,
            reliable, stable, flexible, quick-time-to-market, innovative,
            scalable and cost efficient.
          </p>
          <p className={classes.paragraphMargin}>
            We offer remote and flexible work. You can expect a warm welcome
            from a friendly and international team that will support you in your
            personal and professional growth. This is an exciting opportunity to
            take an active part in the blockchain space and contribute to the
            decentralization of the future.
          </p>
        </div>
      </section>
      <section className={classes.section}>
        <div className={classes.row}>
          <Title type='h3'>What will you be doing?</Title>
        </div>
        <ul className={classes.list}>
          {openPosition.responsabilities.map(responsability => (
            <li key={responsability}>{responsability}</li>
          ))}
        </ul>
      </section>
      <section className={classes.section}>
        <div className={classes.row}>
          <Title type='h3'>We want you to have:</Title>
        </div>
        <ul className={classes.list}>
          {openPosition.skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
      <section className={classes.section}>
        <div className={classes.row}>
          <Title type='h3'>It would be a bonus if you had:</Title>
        </div>
        <ul className={classes.list}>
          {openPosition.niceToHave.map(has => (
            <li key={has}>{has}</li>
          ))}
        </ul>
      </section>
      <section className={`${classes.section} ${classes.lastSection}`}>
        <div className={classes.row}>
          <div className={classes.buttonWrapper}>
            <a href={formPath} target='_blank' rel='noopener noreferrer'>
              Apply
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Position
