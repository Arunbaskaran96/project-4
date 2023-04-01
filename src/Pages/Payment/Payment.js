import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Payment.css'

function Payment() {
    const params=useParams()
    const [room,setRoom]=useState({})

    useEffect(()=>{
        getRoom()
    })

    const getRoom=async()=>{
        try {
            const result=await axios.get(`http://localhost:8000/room/${params.id}`,{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }
    const formik=useFormik({
        initialValues:{
            num:"",
            month:"",
            cvv:""
        },
        validate:()=>{},
        onSubmit:()=>{}
    })
  return (
    <div className='payment-container'>
        <form>
            <div className='payment-min-conatiner'>
                <h6 className='card-name'>Card Number</h6>
                <input name='num' className='card-no'/><br/>
                <label style={{marginTop:"15px"}} >Expiry Date</label>
                <label style={{marginLeft:"112px"}} >cvv</label><br/>
                <input name='month' type="date"  className='card-exp'/>
                <input type="password" className='card-cvv'/><br/>
                <input type="submit" className='btn btn-success pay-btn' value="Pay now"/>
            </div>
        </form>
    </div>
  )
}

export default Payment