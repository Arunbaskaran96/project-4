import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import { useParams } from 'react-router-dom'
import './Views.css'
import "react-alice-carousel/lib/alice-carousel.css";

function Views() {
  const[room,setRoom]=useState({})
  const[isload,setLoad]=useState(true)
  const params=useParams()

  useEffect(()=>{
    getRoom()
  },[])

  const getRoom=async()=>{
    try {
      const detail=await axios.get(`https://project4-backend-e5g5.onrender.com/room/${params.id}`,{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      setRoom(detail.data)
      setLoad(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='container'>
      {
        isload ?(
          <div>Loading...</div>
        ):(
          <div className='row' style={{paddingTop:"100px"}}>
          <div className='col-12'>
            <AliceCarousel>
              {
                room.imgs.map((item)=>{
                  return(
                    <img  className='view-images' src={item} alt="room-images"/>
                  )
                })
              }
            </AliceCarousel>
            <h5>Name : <span>{room.name}</span></h5>
            <h5>Price : <span>{room.price}</span><span>/per night</span></h5>
            <p>Description: <span>{room.des}</span></p>
            <p>Amenities:</p>
            <ul className='ameneties'>
                      {
                        room.amenities.map((item)=>{
                          return(
                            <li>{item}</li>
                          )
                        })
                      }
            </ul>
          </div>
        </div>
        )
      }
    </div>
  )
}

export default Views