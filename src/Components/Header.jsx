import React, { useContext } from 'react'
import { Navbar,Container } from 'react-bootstrap'
import logo from '../assets/image/logo.png'
import { Link, useNavigate } from 'react-router-dom'



function Header() {

  const navigate=useNavigate()

 
  return (
    <>
    <Navbar style={{background:'linear-gradient(30deg,#1E2761,#00ABE4,#00246B)'}} className='mb-5'>
        <Container>
          <Navbar.Brand href="#home" className='text-light'>
          <img alt="" src={logo} width="45" height="40" className="d-inline-block align-top"/>
           Education
          </Navbar.Brand>
          
            <div className='ms-auto'>
              <Link to={'/studentdetails'} className='btn text-light fw-bold'>  StudentDetails</Link>
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header