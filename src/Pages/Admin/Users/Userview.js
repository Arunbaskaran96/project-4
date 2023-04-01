import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Users.css'

function Userview() {
    const params=useParams()
    const [user,setUser]=useState({})

    useEffect(()=>{
        getUser()
    })

    const getUser=async()=>{
        try {
            const result=await axios.get(`https://project4-backend-e5g5.onrender.com/user/${params.id}`,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setUser(result.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'>
                <Link to="/admintop/users" className='btn btn-info'>Back</Link>
            </div>
        </div>
        <div className='row userview-container' style={{marginTop:"45px"}}>
            <div className='col-4' style={{textAlign:"end"}}>
                <h6 className=' heading'>Name : </h6>
            </div>
            <div className='col-6'>
                <p className='user-res'>{user.name}</p>
            </div>
            <div className='col-4 ' style={{textAlign:"end"}}>
                <h6 className=' heading'>Email : </h6>
            </div>
            <div className='col-6'>
                <p className='user-res'>{user.email}</p>
            </div>
            <div className='col-4 ' style={{textAlign:"end"}}>
                <h6 className=' heading'>Mobile : </h6>
            </div>
            <div className='col-6'>
                <p className='user-res'>{user.mobile}</p>
            </div>
            <div className='col-4 ' style={{textAlign:"end"}}>
                <h6 className=' heading'>City : </h6>
            </div>
            <div className='col-6'>
                <p className='user-res'>{user.city}</p>
            </div>
        </div>
    </div>
  )
}

export default Userview