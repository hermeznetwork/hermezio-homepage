import React from 'react'

import Button from '../shared/button/button.component'
import Title from '../shared/title/title.component'
import useCustom404Styles from './custom-404.styles'

const Custom404 = () => {
  const classes = useCustom404Styles()

  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <div className={classes.title}>
          <Title>404</Title>
          <Title>Page not found</Title>
        </div>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <div className={classes.buttonWrapper}>
          <Button to='https://hermez.io/' text='Back to Home' />
        </div>
      </div>
    </section>
  )
}

export default Custom404
