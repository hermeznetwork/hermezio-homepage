import React from 'react'

import useMediaInquiriesStyles from './media-inquiries.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'

const MediaInquiries = () => {
  const classes = useMediaInquiriesStyles()

  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <div className={classes.title}>
          <Title>Media Inquiries</Title>
        </div>
        <p className={classes.text}>
            Thank you for your interest in learning more about Hermez. For media inquiries, please email us at
          <a className={classes.email} href='mailto:hello@hermez.io'>
            hello@hermez.io
          </a>
            and click below to download our media kit for Hermez logos and illustrations kit.
        </p>
        <div className={classes.buttonWrapper}>
          <Button to='/hermez_mediakit.zip' text='Download Mediakit' hideIcon />
        </div>
      </div>
    </section>
  )
}

export default MediaInquiries
