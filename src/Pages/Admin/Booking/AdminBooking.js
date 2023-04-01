import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AdminBooking() {
    const[bookings,setBookings]=useState([])
    const[isloading,setIsLoading]=useState(true)

    useEffect(()=>{
        getBookings()
    },[])

    const getBookings=async()=>{
        try {
            const result=await axios.get("http://localhost:8000/bookings",{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setBookings(result.data)
            console.log(result.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container'>
        {
            isloading ? <div  style={{marginTop:"70px"}}>Loading.....</div> : (
                <div className='row' style={{marginTop:"70px"}}>
                <div className='col-12'>
                    <table class="table">
                        <thead className='table-dark'>
                            <tr>
                                <th scope="col">Booked By</th>
                                <th scope="col">Hotel Name</th>
                                <th scope="col">Location</th>
                                <th scope="col">From Date</th>
                                <th scope="col">To Date</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((item)=>{
                                    return(
                                        <tr>
                                            <td>{item.userId.name}</td>
                                            {/* <td>{item.roomId.price}</td> */}
                                            <td>{item.from}</td>
                                            <td>{item.to}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            )
        }
    </div>
  )
}

export default AdminBooking