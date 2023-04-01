import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './User.css'

function User() {
    const nav=useNavigate()
    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            mobile:"",
            city:""
        },
        validate:()=>{},
        onSubmit:async(value)=>{
            try{
                await axios.put(`https://project4-backend-e5g5.onrender.com/user`,value,{
                    headers:{
                        Authorization:`${window.localStorage.getItem("token")}`
                    }
                })
                alert("Successfully updated")
                nav("/home")
            }catch(error){
                console.log(error)


            }
        }
    })

    useEffect(()=>{
        getUser()
    },[])

    const getUser=async()=>{
        try {
            const profile=await axios.get("https://project4-backend-e5g5.onrender.com/user",{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            formik.setValues(profile.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container' style={{marginTop:"100px"}}>
        <form onSubmit={formik.handleSubmit}>
        <div className='row mini-cards'>
            <div className='col-4 text-end'>
                <label className='user-label'>Name</label><br/>
            </div>
            <div className='col-6'>
                <input name='name'  value={formik.values.name} onChange={formik.handleChange} className='user-int'/><br/>
            </div>
        </div>
        <div className='row mini-cards'>
            <div className='col-4 text-end'>
                <label className='user-label'>Email</label><br/>
            </div>
            <div className='col-6'>
                <input name='email' value={formik.values.email} onChange={formik.handleChange} className='user-int'/><br/>
            </div>
        </div>
        <div className='row mini-cards'>
            <div className='col-4 text-end'>
                <label className='user-label'>Mobile</label><br/>
            </div>
            <div className='col-6 '>
                <input name='mobile' value={formik.values.mobile} onChange={formik.handleChange} className='user-int'/><br/>
            </div>
        </div>
        <div className='row mini-cards'>
            <div className='col-4 text-end'>
                <label className='user-label'>City</label><br/>
            </div>
            <div className='col-6'>
                <input name='city'  value={formik.values.city} onChange={formik.handleChange} className='user-int'/><br/>
                <input style={{marginTop:"10px"}} className='user-int btn btn-success' type="submit" value="Update"/>
            </div>
        </div>
        </form>
    </div>
  )
}

export default User