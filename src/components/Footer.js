import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <div><Card style={{backgroundColor:'black'}} className="text-center">
    <Card.Header>About  |  Responsibility  |  Quick Links  |  SOCIAL MEDIA</Card.Header>
    <Card.Body>
      <Card.Title>Address</Card.Title>
      <Card.Text>
        The Food Villa company Limited
        CIN: U74900MH2011PTC222589
        4th Floor, New Excelsior Building,
        Amrit Keshav Nayak Marg, Fort, Mumbai 400 001
        Ph No. 022-66113939, email: contact@thefoodvilla.com
      </Card.Text>
      <Button variant="secondary"> Download App</Button>
    </Card.Body>
    <Card.Footer className="text-muted">© 2022 The Food Villa company. All rights reserved.</Card.Footer>
  </Card></div>
  )
}

export default Footer