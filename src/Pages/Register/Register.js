import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {
    const nav=useNavigate()
    const[disable,setDisable]=useState(false)
    const formik=useFormik({
        initialValues:{
            name:"",
            email:"",
            password:"",
            mobile:"",
            city:"",
            confirm:""
        },
        validate:(value)=>{
            let errors={}
            if(!value.name){
                errors.name="Please Enter Your Name"
            }
            if(!value.email){
                errors.email="Please Enter Your Email"
            }
            if(!value.mobile){
                errors.mobile="Please Enter Your Mobile"
            }
            if(!value.city){
                errors.city="Please Enter Your City"
            }
            if(!value.password){
                errors.password="Please Enter Your Password"
            }
            if(!value.confirm){
                errors.confirm="Please Enter Your Confirm Password"
            }
            if(value.confirm!==value.password){
                errors.match="password and confirm password does not match"
            }
            return errors
        },
        onSubmit:async(value)=>{
            try {
                setDisable(true)
                await axios.post("https://project4-backend-e5g5.onrender.com/user",value)
                alert("Successfully created")
                nav("/")
            } catch (error) {
                setDisable(false)
                console.log(error)
            }
        }
    })
  return (
    <div className='container'>
        <div className='row reg-card'>
            <div className='col-md-4' style={{backgroundColor:"white"}}>
                <img className='reg-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIDkaPQB6rNKkn-M3vS-3eueVvnX-yO96eWA&usqp=CAU' alt='register-img'/>
            </div>
            <div className='col-md-8'>
                <form onSubmit={formik.handleSubmit}>
                    <label className='reg-label'>Name</label><br/>
                    <input name='name' value={formik.values.name} onChange={formik.handleChange} className='reg-int' type='text'></input><span style={{color:"red"}}>{formik.errors.name}</span><br/>
                    <label className='reg-label'>Email</label><br/>
                    <input name='email' value={formik.values.email} onChange={formik.handleChange} className='reg-int' type='email'></input><span style={{color:"red"}}>{formik.errors.email}</span><br/>
                    <label className='reg-label'>Password</label><br/>
                    <input name='password' value={formik.values.password} onChange={formik.handleChange} className='reg-int' type='password'></input><span style={{color:"red"}}>{formik.errors.password}</span><br/>
                    <label className='reg-label'>Confirm Password</label><br/>
                    <input name='confirm' value={formik.values.confirm} onChange={formik.handleChange} className='reg-int' type="password"></input><span style={{color:"red"}}>{formik.errors.confirm}</span><br/>
                    <label className='reg-label'>Mobile</label><br/>
                    <input name='mobile' value={formik.values.mobile} onChange={formik.handleChange} className='reg-int' type="text"></input><span style={{color:"red"}}>{formik.errors.mobile}</span><br/>
                    <label className='reg-label'>City</label><br/>
                    <input name='city' value={formik.values.city} onChange={formik.handleChange} className='reg-int' type="text"></input><span style={{color:"red"}}>{formik.errors.city}</span><br/>
                    <span style={{color:"red"}}>{formik.errors.match}</span><br/>
                    <input disabled={disable} style={{marginTop:"10px"}} className='btn btn-success reg-int' type="submit" value='Submit'/><br/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register