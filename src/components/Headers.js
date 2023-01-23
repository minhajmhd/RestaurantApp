import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Headers() {
  return (
    <div><Navbar style={{backgroundColor:'black'}} variant="dark">
    <Container>
      <Navbar.Brand className='fs-1' href="#home">
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovlFmYh0OMJsDBaVuTmTRRjFNMFvaVFW4NSziSzRuRAupPoTlxnfMSaRK-pkeRea4svI&usqp=CAU"
          width="80"
          height="60"
          className="d-inline-block align-top me-3 rounded-3"
        />{' '}
        THE FOOD VILLA
        
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Headers