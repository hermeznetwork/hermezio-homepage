import React from 'react'

import useVideoStyles from './video.styles'

const Video = ({ vimeoSrc, title }) => {
  const classes = useVideoStyles()

  return (
    <div className={classes.videoWrapper}>
      <iframe
        className={classes.video}
        src={vimeoSrc}
        frameborder='0'
        allow='autoplay; fullscreen; picture-in-picture'
        allowfullscreen
        title={title}
      />
    </div>
  )
}

export default Video
