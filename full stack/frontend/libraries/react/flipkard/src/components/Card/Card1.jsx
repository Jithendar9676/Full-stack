import React from 'react'
import {CardGroup,Card} from 'react-bootstrap'

function Card1(props) {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="props.Grocery" />
          <Card.Body>
            <Card.Title>Grocery</Card.Title>

          </Card.Body>

        </Card>
        <Card>
          <Card.Img variant="top" src="props.Mobiles" />
          <Card.Body>
            <Card.Title>Mobiles</Card.Title>

          </Card.Body>

        </Card>
       
        <Card>
          <Card.Img variant="top" src="props.Fashion" />
          <Card.Body>
            <Card.Title>Fashion</Card.Title>

          </Card.Body>

        </Card>
        <Card>
          <Card.Img variant="top" src="props.Electoinces" />
          <Card.Body>
            <Card.Title>Electonics</Card.Title>

          </Card.Body>

        </Card>
        <Card>
          <Card.Img variant="top" src="props.Appliances" />
          <Card.Body>
            <Card.Title>Appliances</Card.Title>

          </Card.Body>

        </Card>
      </CardGroup>
    </>
  )
}

export default Card1
