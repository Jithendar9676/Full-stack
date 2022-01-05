import React from 'react'
import{Col,Row,Container} from 'react-bootstrap'
import img1 from '../components/Card/img/Grocery.png'
import img2 from '../components/Card/img/Mobiles.png'

import img4 from '../components/Card/img/Fashion.png'
import img5 from '../components/Card/img/Electionices.png'
import img6 from '../components/Card/img/Appliances.png'
import Navbar1 from '../components/Navbars/Navbar1'
import Card1 from '../components/Card/Card1'


function Home() {
    return (
        <>
        <Container>
            <Row>
                <Col><Navbar1/></Col>
            </Row>
            
            <Row>
                <Col><Card1 img={img1}/></Col>
                <Col><Card1 img={img2}/></Col>
                <Col><Card1 img={img4}/></Col>
                <Col><Card1 img={img5}/></Col>
                <Col><Card1 img={img6}/></Col>
              </Row>
            </Container>  
        </>
    )
}

export default Home
