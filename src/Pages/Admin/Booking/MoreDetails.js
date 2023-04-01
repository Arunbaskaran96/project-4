import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Adminbooking.css'

function MoreDetails() {
    const [booking,setBooking]=useState({})
    const[isload,setLoad]=useState(true)
    const params=useParams()
    useEffect(()=>{
        getDetails()
    })

    const getDetails=async()=>{
        try {
            const result=await axios.get(`https://project4-backend-e5g5.onrender.com/bookings/${params.id}`,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setBooking(result.data)
            setLoad(false)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container'>
        <div className='row' style={{marginTop:"70px"}}>
            <div className='col-22'>
                <Link to="/admintop/rooms" className='btn btn-secondary'>Back</Link>
            </div>
        </div>
        {
            isload?(
                <div>Loading...</div>
            ):(
                <div className='row admin-booikg-details' style={{marginTop:"20px"}}>
                <div className='col-4' style={{textAlign:"end"}}>
                    <label className='adminbookin-label'>Booked by :</label><br/>
                    <label className='adminbookin-label'>User Mobile :</label><br/>
                    <label className='adminbookin-label'>Hotel Name :</label><br/>
                    <label className='adminbookin-label'>Hotel Location :</label><br/>
                    <label className='adminbookin-label'>From Date :</label><br/>
                    <label className='adminbookin-label'>To Date :</label><br/>
                    <label className='adminbookin-label'>Amount :</label><br/>
                </div>
                <div className='col-4'>
                    <p className='adminbookin-res'>{booking.userId.name}</p>
                    <p className='adminbookin-res'>{booking.userId.mobile}</p>
                    <p className='adminbookin-res'>{booking.roomId.name}</p>
                    <p className='adminbookin-res'>{booking.roomId.location}</p>
                    <p className='adminbookin-res'>{booking.from}</p>
                    <p className='adminbookin-res'>{booking.to}</p>
                    <p className='adminbookin-res'>{booking.roomId.price}</p>
                </div>
            </div>
            )
        }
    </div>
  )
}

export default MoreDetails