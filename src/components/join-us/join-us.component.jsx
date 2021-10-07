import React from 'react'
import { Link } from 'gatsby'

import useJoinUsStyles from './join-us.styles'
import Title from '../shared/title/title.component'

import positions from './open-positions.json'

export default function JoinUs () {
  const classes = useJoinUsStyles()

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
                <Title>Join Hermez team</Title>
              </div>
              <p className={classes.paragraphMargin}>
                It’s very exciting times for us here at Hermez Project.
                Following our successful launch and expansion plans, we are
                growing massively.
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
            <Title>Open positions</Title>
          </div>
          {positions.departments.map((department, dIndex) => (
            <>
              <div className={classes.row} key={department.path}>
                <div className={classes.col2}>
                  <Title>{department.title}</Title>
                </div>
                <div className={classes.col2}>
                  {department.positions.map((position, pIndex) => (
                    <>
                      <div key={position.path}>
                        <div className={classes.subTitle}>
                          <Title type='h4'>
                            <Link
                              to={`/join-us/${department.path}/${position.path}`}
                              className={classes.legalLink}
                              state={position}
                            >
                              {position.title}
                            </Link>
                          </Title>
                        </div>
                        <p>Remote</p>
                      </div>
                      {pIndex + 1 !==
                        Object.keys(department.positions).length &&
                        (
                          <div className={classes.row}>
                            <span className={classes.divider} />
                          </div>
                        )}
                    </>
                  ))}
                </div>
              </div>
              {dIndex + 1 !== Object.values(positions.departments).length && (
                <div className={classes.row}>
                  <span
                    className={`${classes.divider} ${classes.dividerFullWidth}`}
                  />
                </div>
              )}
            </>
          ))}
        </section>
      </div>
    </>
  )
}
