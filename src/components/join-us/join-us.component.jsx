import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

import useJoinUsStyles from './join-us.styles'
import Title from '../shared/title/title.component'

export default function JoinUs () {
  const classes = useJoinUsStyles()
  const { gcms: { departments } } = useStaticQuery(graphql`
    {
      gcms {
        departments {
          id
          name
          positions {
            id
            title
            slug
            location
          }
        }
      }
    }
  `)

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={`${classes.row} ${classes.rowReverse}`}>
            <div className={classes.col2}>
              <div className={classes.section1img} />
            </div>
            <div className={classes.col2}>
              <div className={classes.section1Title}>
                <Title>Join Polygon Hermez</Title>
              </div>
              <p className={classes.paragraphMargin}>
                It’s very exciting times for us here at the Polygon Hermez
                Project. Following our successful launch and expansion plans, we
                are growing massively.
              </p>
              <p className={classes.paragraphMargin}>
                You can see our list of vacancies below. In addition, we're
                always looking for top talent, blockchain enthusiasts and if
                this sounds interesting to you, please do get in touch – we
                always try to work out how we can fit great people into our
                team.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section2}`}>
          <div className={classes.title}>
            <Title>Benefits for your growth</Title>
          </div>
          <ul className={classes.benefits}>
            <li className={classes.benefitWrapper}>
              <p className={classes.benefitNumber}>1</p>
              <Title type='h3'>Personal development</Title>
              <p className={classes.benefitContent}>Enjoy a budget for your professional & personal growth</p>
            </li>
            <li className={classes.benefitWrapper}>
              <p className={classes.benefitNumber}>2</p>
              <Title type='h3'>Flexible working hours</Title>
              <p className={classes.benefitContent}>Work according to your schedules and preference</p>
            </li>
            <li className={classes.benefitWrapper}>
              <p className={classes.benefitNumber}>3</p>
              <Title type='h3'>Competitive Salary</Title>
              <p className={classes.benefitContent}>Compensation inline with the Blockchain space</p>
            </li>
            <li className={classes.benefitWrapper}>
              <p className={classes.benefitNumber}>4</p>
              <Title type='h3'>Work from anywhere</Title>
              <p className={classes.benefitContent}>Work from home or visit our offices in Barcelona and Zug  </p>
            </li>
            <li className={classes.benefitWrapper}>
              <p className={classes.benefitNumber}>5</p>
              <Title type='h3'>Awesome work culture</Title>
              <p className={classes.benefitContent}>Fun, engaging team and cutting edge technology projects</p>
            </li>
            <li className={classes.benefitWrapper}>
              <p className={classes.benefitNumber}>6</p>
              <Title type='h3'>Flexible vacation policy</Title>
              <p className={classes.benefitContent}>Take your holiday on any day of the year</p>
            </li>
          </ul>
        </section>
      </div>

      <div className={classes.row}><span className={`${classes.divider} ${classes.dividerFullWidth}`} /></div>

      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section2}`}>
          <div className={classes.title}>
            <Title>Open positions</Title>
          </div>
          {departments.map((department, dIndex) => (
            <div className={classes.department} key={department.id}>
              <div className={classes.row}>
                <div className={classes.col2}>
                  <Title>{department.name}</Title>
                </div>
                <div className={classes.col2}>
                  {department.positions.map((position, pIndex) => (
                    <>
                      <div className={classes.position} key={position.id}>
                        <div className={classes.subTitle}>
                          <Title type='h3'>
                            <Link
                              to={`/join-us/${position.slug}`}
                              className={classes.legalLink}
                            >
                              {position.title}
                            </Link>
                          </Title>
                        </div>
                        <p>{position.location}</p>
                      </div>
                      {department.positions[pIndex + 1] && (
                        <div className={classes.row}><span className={classes.divider} /></div>
                      )}
                    </>
                  ))}
                </div>
              </div>
              {departments[dIndex + 1] && (
                <div className={classes.row}>
                  <span
                    className={`${classes.divider}`}
                  />
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </>
  )
}
