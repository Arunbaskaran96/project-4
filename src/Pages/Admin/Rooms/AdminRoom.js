import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Room.css'

function AdminRoom() {
    const [rooms,setRooms]=useState([])
    const[disable,setDisable]=useState(false)
    useEffect(()=>{
        getRooms()
    })

    const getRooms=async()=>{
        try {
            const result=await axios.get("https://project4-backend-e5g5.onrender.com/rooms",{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setRooms(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const remove=async(item)=>{
        try {
            setDisable(true)
            await axios.delete(`https://project4-backend-e5g5.onrender.com/room/${item._id}`,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            alert("Deleted Successfully")
            getRooms()
        } catch (error) {
            setDisable(false)
            console.log(error)
        }
    }
  return (
    <div className='container-fluid'>
        <div className='row' style={{marginTop:"60px"}}>
            <div className='col-2'>
                <Link to='/admintop/addroom' className='btn btn-success'>Add Room</Link>
            </div>
        </div>
        <div className='row'>
            {
                rooms.map((item)=>{
                    return(
                        <div className='col-5 admin-room-container'>
                            <div>
                                <img className='adminroom-img'  src={item.img} alt="room-images"/>
                            </div>
                            <div style={{marginLeft:"10px"}}>
                                <h5>{item.name}</h5>
                                <h6>Price: {item.price}<span style={{fontWeight:"lighter"}}>/per night</span></h6>
                                <h6>Amenities :</h6>
                                <ul className='amenties-container'>
                                    {
                                        item.amenities.map((item)=>{
                                            return(
                                                <li className='amenities'>{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <Link to={`/admintop/view/${item._id}`} className='btn btn-success btn-sm' style={{marginRight:"5px"}}>View</Link> 
                                <Link to={`/admintop/editroom/${item._id}`} className='btn btn-secondary btn-sm' style={{marginRight:"5px"}}>Edit</Link>
                                <button onClick={()=>remove(item)} className='btn btn-danger btn-sm'>Delete</button>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    </div>
  )
}

export default AdminRoom