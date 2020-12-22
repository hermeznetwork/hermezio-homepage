import React from 'react'

import useMediaInquiriesStyles from './media-inquiries.styles'
import Title from '../shared/title/title.component'

const MediaInquiries = () => {
  const classes = useMediaInquiriesStyles()

  return (
    <section className={classes.section}>
      <div className={classes.contentWrapper}>
        <div className={classes.title}>
          <Title>Media Inquiries</Title>
        </div>
        <p className={classes.text}>
            Thank you for your interest in learning more about Hermez. For media inquiries, please email us at
          <a className={classes.email} href='mailto:hello@hermez.io'> hello@hermez.io </a>
            and click below to download our media kit for Hermez logos and illustrations kit.
        </p>
        {/* TODO: add link to zip file, once it is ready */}
        <a href='/' target='_blank' rel='noopener noreferrer' className={`${classes.buttonLink} ${classes.primary}`}>
            Download Mediakit
        </a>
      </div>
    </section>
  )
}

export default MediaInquiries
