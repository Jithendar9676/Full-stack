import React from 'react'
import { Card } from 'react-bootstrap'
import img from '../../static/img/Grocery.png'
function Card1(props) {
  return (
    <>

      <Card>
        <Card.Img  variant="top" src={props.img} />
        <Card.Body>
          <Card.Title></Card.Title>
        </Card.Body>
      </Card>
      
    </>
  )
}

export default Card1
