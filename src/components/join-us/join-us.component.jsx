import React from 'react'
import { Link } from 'gatsby'

import useJoinUsStyles from './join-us.styles'
import Title from '../shared/title/title.component'

const JoinUs = () => {
  const classes = useJoinUsStyles()

  return (
    <>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section1}`}>
          <div className={classes.row}>
            <div className={`${classes.col2} ${classes.inlineGraphicText}`}>
              <div className={classes.section1Title}>
                <Title>Join Hermez team</Title>
              </div>
              <p className={classes.paragraphMargin}>It’s very exciting times for us here at Hermez Project. Following our successful launch and expansion plans, we are growing massively.</p>
              <p className={classes.paragraphMargin}>You can see our list of vacancies below, but we’re always looking for top talent, blockchain enthusiasts and if you think you have what it takes to help us achieve our mission, please do get in touch – we always try to work out how we can fit great people into our team.</p>
            </div>
            <div className={`${classes.col2} ${classes.onlyDesktop} ${classes.inlineGraphicImage}`}>
              <div className={classes.section1img} />
            </div>
          </div>
        </section>
      </div>
      <div className={classes.sectionWrapper}>
        <section className={`${classes.section} ${classes.section2}`}>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title>Engineering</Title>
            </div>
            <div className={classes.col2}>
              <div className={classes.subTitle}>
                <Title type='h4'>
                  <Link to='/join-us/product-designer' className={classes.legalLink}>Senior Frontend Developer</Link>
                </Title>
              </div>
              <p>Remote</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <div className={classes.subTitle}>
                <Title type='h4'>
                  <Link to='/join-us/product-designer' className={classes.legalLink}>Mobile Developer</Link>
                </Title>
              </div>
              <p>Remote</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={`${classes.divider} ${classes.dividerFullWidth}`} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <Title>Product</Title>
            </div>
            <div className={classes.col2}>
              <div className={classes.subTitle}>
                <Title type='h4'>
                  <Link to='/join-us/product-designer' className={classes.legalLink}>Product Owner</Link>
                </Title>
              </div>
              <p>Remote</p>
            </div>
          </div>
          <div className={classes.row}>
            <span className={classes.divider} />
          </div>
          <div className={classes.row}>
            <div className={classes.col2}>
              <div className={classes.subTitle}>
                <Title type='h4'>
                  <Link to='/join-us/product-designer' className={classes.legalLink}>Product Designer</Link>
                </Title>
              </div>
              <p>Remote</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default JoinUs
