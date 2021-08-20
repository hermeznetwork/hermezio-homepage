import React from 'react'

import useProductDesignerStyles from './product-designer.styles'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'

const ProductDesigner = () => {
  const classes = useProductDesignerStyles()

  return (
    <>
      <section className={`${classes.section} ${classes.section1}`}>
        <div className={`${classes.row} ${classes.headline}`}>
          <div className={classes.col2}>
            <div className={classes.section1Title}>
              <Title>Product Designer</Title>
            </div>
            <p>Remote</p>
          </div>
          <div className={`${classes.col2} ${classes.actionButton}`}>
            <div className={classes.buttonWrapper}>
              <Button to='' text='Apply' hideIcon />
            </div>
          </div>
        </div>
      </section>
      <section className={classes.section}>
        <div className={classes.row}>
          <Title type='h4'>Sub Title 1</Title>
        </div>
        <div className={classes.row}>
          <p className={classes.paragraphMargin}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
      <section className={classes.section}>
        <div className={classes.row}>
          <Title type='h4'>Sub Title 2</Title>
        </div>
        <div className={classes.row}>
          <p className={classes.paragraphMargin}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </section>
      <section className={`${classes.section} ${classes.lastSection}`}>
        <div className={classes.row}>
          <div className={classes.buttonWrapper}>
            <Button to='' text='Apply' hideIcon />
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductDesigner
