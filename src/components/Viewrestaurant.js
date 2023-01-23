import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restview from './Restview'

function Viewrestaurant() {
    const params=useParams()
        console.log(params.id);
        const [allRestaurants,setRestaurants]=useState([])
    //Function to call API to get all restaurant items from restaurant.json

    const getRestaurants=async()=>{
       await fetch('/restaurants.json')
       .then((data)=>{
        data.json()
        .then((result)=>{
          setRestaurants(result.restaurants)//to convert array of object to array
          // console.log(result);
        })
       })
    }
    console.log(allRestaurants);
    useEffect(()=>{
        getRestaurants()
    },[])
    console.log(allRestaurants);
    const viewrest=allRestaurants.find(item=>item.id==params.id)
    console.log(viewrest);
  return (
    <>
      {
        viewrest?(
            <Row>
              <Col>
                <Image className='opacity-75 rounded-5  mt-5 mb-5' style={{maxHeight:'500px',marginLeft:'200px'}} src={viewrest.photograph} fluid/>
              </Col> 
              <Col className='p-5' style={{backgroundColor:'rgba(30,29,27,255)',color:'white',borderRadius:'100px',marginTop:'50px',marginRight:'50px',marginBottom:'50px'}}>
              <p>ID : {viewrest.id}</p>
              <h3>Name :{viewrest.name}</h3>
              <h4>Neighborhood :{viewrest.neighborhood}</h4>
              <h5>Address : {viewrest.address}</h5>
              <Restoperation operate={viewrest.operating_hours}/>
              <br />
              <Restview reviews={viewrest.reviews}/>
              </Col>
            </Row>
        ):'null'
      }
    </>
  )
}

export default Viewrestaurant