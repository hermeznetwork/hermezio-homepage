import React from 'react'

// import useHomeStyles from './index.styles'
import { Layout } from '../layout/layout.component'
import Title from '../shared/title/title.component'
import Button from '../shared/button/button.component'
import Row from '../shared/row/row.component'
import Col from '../shared/col/col.component'
import Section21 from '../../assets/images/home/section2_1.inline.svg'
import Section22 from '../../assets/images/home/section2_2.inline.svg'
import Section23 from '../../assets/images/home/section2_3.inline.svg'
// import Section3 from '../../assets/images/home/section3.inline.svg'

const Home = () => {
  // const classes = useHomeStyles()

  return (
    <Layout>
      <section>
        <Row>
          <Col>
            <Title>Open and low-cost payments network for everyone.</Title>
            <p>Hermez is a trustless zk-rollup focused on scaling payments and token transfers on the wings of Ethereum.</p>
            <Button
              text='Create account'
              icon=''
              onClick=''
            />
          </Col>
          <Col />
        </Row>
      </section>
      <section>
        <Row>
          <Title>Hermez seamlessly integrates into the fabric of Ethereum ecosystem and enables low-cost token transfers for inclusive economy.</Title>
        </Row>
        <Row>
          <Col>
            <Section21 />
            <div>Cost efficient token transfers and swaps with high throughput.</div>
          </Col>
          <Col>
            <Section22 />
            <div>Decentalised and open-source architecture.</div>
          </Col>
          <Col>
            <Section23 />
            <div>Computational integrity for secure transactions.</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              text='Hermez Network'
              icon=''
              onClick=''
            />
          </Col>
        </Row>
      </section>
    </Layout>
  )
}

export default Home
