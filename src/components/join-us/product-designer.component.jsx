import React from 'react'

import useProductDesignerStyles from './product-designer.styles'
import Title from '../shared/title/title.component'

const ProductDesigner = () => {
  const classes = useProductDesignerStyles()

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
          </div>
        </section>
      </div>
    </>
  )
}

export default ProductDesigner
