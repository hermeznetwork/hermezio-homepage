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
        <div>
          <p className={classes.paragraphMargin}>
            Polygon Hermez is a blockchain startup formed by over 35
            professionals. The team is spread all over the world, and we have
            offices in Switzerland and Spain. Polygon Hermez is a proud member
            of the Polygon ecosystem, you can read more{' '}
            <a
              href='https://blog.hermez.io/polygon-hermez-merge/'
              target='_blank'
              rel='noopener noreferrer'
            >
              here
            </a>
            .
          </p>
          <p className={classes.paragraphMargin}>
            Our goal is to give communities and individuals the freedom to
            self-organise. Every human should have the power to be themselves
            and preserve their privacy. We aim to improve the scalability of the
            Ethereum blockchain, creating an inclusive and accessible blockchain
            payment network by using ZK-proof technology.
          </p>
          <p className={classes.paragraphMargin}>
            Our protocol <strong>Polygon Hermez</strong> is a decentralised
            zero-knowledge rollup that scales the Ethereum network and lowers
            the cost of transactions. We do this while enhancing user experience
            and giving back to the blockchain community. More information can be
            found here{' '}
            <a
              href='https://hermez.io'
              target='_blank'
              rel='noopener noreferrer'
            >
              https://hermez.io
            </a>
          </p>
          <p className={classes.paragraphMargin}>
            We offer remote and flexible work. You can expect a warm welcome
            from a friendly and international team that will support you in your
            personal and professional growth. This is an exciting opportunity to
            take an active part in the blockchain space and contribute to the
            decentralization of the future.
          </p>
          <p className={classes.paragraphMargin}>{openPosition.description}</p>
          <p className={classes.paragraphMargin}>
            This is an exciting opportunity to take an active part in the
            blockchain space and contribute to the decentralization of the
            future.
          </p>
        </div>
      </section>
      <section className={classes.section}>
        <div className={classes.row}>
          <Title type='h3'>What will you do?</Title>
        </div>
        <ul className={classes.list}>
          {openPosition.responsabilities.map(responsability => (
            <li key={responsability}>{responsability}</li>
          ))}
        </ul>
      </section>
      <section className={classes.section}>
        <div className={classes.row}>
          <Title type='h3'>
            We are looking for someone with the following skills and knowledge:
          </Title>
        </div>
        <ul className={classes.list}>
          {openPosition.skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>
      <section className={classes.section}>
        <div className={classes.row}>
          <Title type='h3'>It will be nice if you are:</Title>
        </div>
        <ul className={classes.list}>
          {openPosition.niceToHave.map(has => (
            <li key={has}>{has}</li>
          ))}
        </ul>
      </section>
      <section className={classes.section}>
        <div className={classes.row}>
          <Title type='h3'>Last but not least:</Title>
        </div>
        <p className={classes.paragraphMargin}>
          We are looking for positive, optimistic, proactive, and creative
          people who are looking forward to building innovative technology. If
          you think that your profile matches this position, please send your
          details.
        </p>
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
