import React, { useContext } from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'
import logo from '../assets/image/logo.png'
import { Link, useNavigate } from 'react-router-dom'



function Header() {


 
  return (
    <>
    <Navbar style={{background:'linear-gradient(30deg,#1E2761,#00ABE4,#00246B)'}} className='mb-5' expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>
          <img alt="" src={logo} width="45" height="40" className="d-inline-block align-top"/>
           Education
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto  fw-bold">
            <Nav.Link href="/" className='text-light'>Home</Nav.Link>
            <Nav.Link href="" className='text-light'>About</Nav.Link>
            <Nav.Link href="#" className='text-light'>Services</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header