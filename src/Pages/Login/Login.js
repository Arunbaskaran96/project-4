import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
    const[disable,setDisable]=useState(false)
    const nav=useNavigate()
    const formik=useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validate:(value)=>{
            let errors={}
            if(!value.email){
                errors.email="Please Enter Your Email"
            }
            if(!value.password){
                errors.password="Please Enter Your Password"
            }
            return errors
        },
        onSubmit:async(value)=>{
            try {
                setDisable(true)
                const user=await axios.post("https://project4-backend-e5g5.onrender.com/login",value)
                window.localStorage.setItem("token",user.data.token)
                if(user.data.user.role==="user"){
                    nav("/home")
                }else{
                    nav("/admintop/users")
                }
            } catch (error) {
                setDisable(false)
                console.log(error)
            }
        }
    })
  return (
    <div className='login-main-container'>
        <div className='login-mini-container'>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <h5>Welcome Back</h5>
                    <label className='login-label'>Email</label><br/>
                    <input placeholder='Enter your email here..' name='email' value={formik.values.email} onChange={formik.handleChange} className='login-int' type='email'></input><br/>
                    <span style={{color:"red"}}>{formik.errors.email}</span><br/>
                    <label className='login-label'>Password</label><br/>
                    <input placeholder='Enter your password here..' name='password' value={formik.values.password} onChange={formik.handleChange}   className='login-int'  type='password' ></input><br/>
                    <span style={{color:"red"}}>{formik.errors.password}</span><br/>
                    <input disabled={disable}  className='login-int btn btn-success '  type='submit' value='Login'></input><br/>
                </div>
            </form>
            <div>
                <button  className='login-int btn btn-secondary' >Forgot Password</button><br/>
                <Link to='/register' className='login-int btn btn-primary' >Sign up</Link><br/>
            </div>
        </div>
    </div>
  )
}

export default Login