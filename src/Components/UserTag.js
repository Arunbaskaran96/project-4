import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

function UserTag() {
    const[user,setUser]=useState({})

    useEffect(()=>{
        getUser()
    },[])

    const getUser=async()=>{
        try {
            const result=await axios.get("https://project4-backend-e5g5.onrender.com/user",{
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
    <div>
        <h6>{user.name}</h6>
    </div>
  )
}

export default UserTag