import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './History.css'
import { Link } from 'react-router-dom'

function History() {
    const [book,setBook]=useState([])
    const[hotel,setHotel]=useState([])
    const [isLoad,setIsLoad]=useState(true)

    useEffect(()=>{
        getData()
    },[])

    const getData=async()=>{
        try {
            const result=await axios.get("https://project4-backend-e5g5.onrender.com/booking",{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            console.log(result.data)
            setBook(result.data)
            setHotel(result.data)
            setIsLoad(false)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='history-container'>
        {
            isLoad ? (
                <div></div>
            ):(
                <table class="table">
                <thead className=' table-dark'>
                    <tr>
                        <th scope="col">From Date</th>
                        <th scope="col">To Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hotel.map((item)=>{
                            return(
                                <tr>
                                    <td>{item.from}</td>
                                    <td>{item.to}</td>
                                    <td>
                                        <Link to={`/topbar/moredetails/${item._id}`} className='btn btn-primary'>More Details</Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            )
        }
    </div>
  )
}

export default History