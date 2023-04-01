import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom'
import './Room.css'

function Room() {
  const[rooms,setRooms]=useState([])
  const location=useLocation()
  const [city,setCity]=useState(location.state.city)
  const [fromDate,setFromDate]=useState(location.state.fromDate)
  const [toDate,setToDate]=useState(location.state.toDate)

  console.log(rooms)

  useEffect(()=>{
    getRooms()
  },[])

  const getRooms=async()=>{
    try {
      const room=await axios.get(`http://localhost:8000/city?cities=${city}`,{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      setRooms(room.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleclick=()=>{
    getRooms()
  }

  const booking=async(item)=>{
    try {
      alert("Do you want to book this room?")
      await axios.post(`http://localhost:8000/booking/${item._id}`,{from:fromDate,to:toDate},{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })

      await axios.put(`http://localhost:8000/room/${item._id}`,{unAvailableDates:[fromDate,toDate]},{
        headers:{
          Authorization:`${window.localStorage.getItem("token")}`
        }
      })
      alert("Booked Successfully")
      getRooms()
    } catch (error) {
      console.log(error)
    }
  }

  const disable=(item)=>{
    const found=item.unAvailableDates.includes(fromDate)

    return !found

  }



  
  return (
    <div className='container-fluid'>
      <div className='row' style={{marginTop:"50px"}}>
        <div className='col-4'>
          <div className='row' >
            <div className='col-12 edit-container'  style={{marginTop:"20px"}}>
              <h5 className='edit-heading' style={{paddingTop:"20px"}}>Edit Search</h5>
              <label className='edit-label'>Location</label><br/>
              <input className='edit-int' value={city} onChange={(e)=>setCity(e.target.value)}/><br/>
              <label className='edit-label'>From Date</label><br/>
              <input className='edit-int'  type="date" value={fromDate} onChange={(e)=>setFromDate(e.target.value)}/><br/>
              <label className='edit-label'>To Date</label><br/>
              <input className='edit-int' name='to'  type="date" value={toDate} onChange={(e)=>setToDate(e.target.value)}/><br/>
              <button className='btn btn-success ' onClick={handleclick}>Search</button>
            </div>
          </div>
        </div>
        <div className='col-8'>
          <div className='row'>
        
        {
          rooms.map((item)=>{
            return(
              <div className='col-12 roomcard-container'>
                <div>
                  <img className='room-img' src={item.img}  alt='room-image'/>
                </div>
                <div className='room-mincard'>
                  <div>
                    <h5>Name: {item.name}</h5>
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
                  </div>
                  <div>
                    <Link to={`/topbar/view/${item._id}`} style={{marginLeft:"20px",marginRight:"15px"}} className='btn btn-secondary btn-sm'>View Details</Link>
                    <button disabled={!disable(item)} onClick={()=>booking(item)} className='btn btn-success btn-sm'>Book now</button>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Room