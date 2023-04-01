import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './History.css'

function History() {
    const [book,setBook]=useState([])

    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        try {
            const result=await axios.get("http://localhost:8000/booking",{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            console.log(result.data)
            setBook(result.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='history-container'>
        <table class="table">
            <thead className=' table-dark'>
                <tr>
                    <th scope="col">Hotel Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">From Date</th>
                    <th scope="col">To Date</th>
                    <th scope="col">Cost</th>
                </tr>
            </thead>
            <tbody>
                {
                    book.length>0?(
                        book.map((item)=>{
                            return(
                                <tr>
                                <td>{item.roomId.name}</td>
                                <td>{item.roomId.location}</td>
                                <td>{item.from}</td>
                                <td>{item.to}</td>
                                <td>{item.roomId.price}</td>
                              </tr>
                            )
                        })
                    ):(<div style={{marginTop:"80px"}}>No Bookings found</div>)
                }
            </tbody>
</table>
    </div>
  )
}

export default History