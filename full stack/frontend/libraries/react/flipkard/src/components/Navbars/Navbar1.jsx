import React from 'react'
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'

function Navbar1() {
    return (
        <>
                  <Navbar bg="info" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Flipkard</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Cart</Nav.Link>
        <NavDropdown title="Log In" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">My Profie</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Order</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
           Wishlist
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#action6">
          More
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar> 
        </>
    )
}

export default Navbar1
