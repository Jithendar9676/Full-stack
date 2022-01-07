import React from 'react'
import{Col,Row,Container} from 'react-bootstrap'
import img1 from '../static/img/Grocery.png'
import img2 from '../static/img/Mobiles.png'
import img4 from '../static/img/Fashion.png'
import img5 from '../static/img/Electionices.png'
import img6 from '../static/img/Appliances.png'
import Navbar1 from '../components/Navbars/Navbar1'
import Card1 from '../components/Card/Card1'
// import Carousel1 from '../components/Carousel/Carousel1'
// import img7 from '../static/img/1.jpg'
// import img8 from '../static/img/2.jpg'
// import img9 from '../static/img/3.jpg'

function Home() {
    return (
        <>
        <Container fluid>
            <Row>
                <Col><Navbar1/></Col>
            </Row>
            <br/>
            <Row>
                <Col><Card1 img={img1}/></Col>
                <Col><Card1 img={img2}/></Col>
                <Col><Card1 img={img4}/></Col>
                <Col><Card1 img={img5}/></Col>
                <Col><Card1 img={img6}/></Col>
              </Row>
              {/* <Row>
                  <Carousel1 img7={img7} img8={img8} img9={img9}/>
              </Row> */}
            </Container>  
        </>
    )
}

export default Home
