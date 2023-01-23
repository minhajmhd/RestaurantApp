
import React, { useEffect } from 'react'
import { useState } from 'react'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {RestaurantListAction} from '../Actions/restaurantListAction'
import { useDispatch, useSelector } from 'react-redux';

function Restaurantlist() {
    //to hold value
    const [allRestaurants,setRestaurants]=useState([])
    // const getRestaurant=async()=>{
    //          await fetch('./restaurants.json')
    //          .then((data)=>{
    //           data.json()
    //           .then((result)=>{
    //             setRestaurants(result.restaurants);  //to convert array of object to array
    //             // console.log(result);
    //           })
    //          })
    //       }

          const dispatch = useDispatch();
          const result = useSelector(state=>state.restaurantReducer)
          console.log(result);
          const {restaurantList}=result

          useEffect(()=>{
                    // getRestaurant();
                    dispatch(RestaurantListAction());
                },[])
  return (
    <Row>
    {
      restaurantList.map(item=>(
        /* <h1>{item.name}</h1> */
        <Col sm={12} md={6} lg={4} xl={3} ><Restaurantcards restaurant={item} /></Col>
      ))
    }
    </Row>
  )
}

export default Restaurantlist