import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Restaurantcards({restaurant}) {
    console.log(restaurant);
  return (
    <Link style={{textDecoration:"none",color:"white"}} to={`viewrestaurant/${restaurant.id}`}>
    <Card className='mt-3 mb-3 rounded-5'>
    <Card.Img className='p-3 rounded-5' variant="top" src={restaurant.photograph} />
    <Card.Body>
      <Card.Title>{restaurant.name}</Card.Title>
      <Card.Text>
      {restaurant.neighborhood}
      </Card.Text>
    </Card.Body>
  </Card> 
  </Link>
  )
}

export default Restaurantcards