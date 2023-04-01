import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import './ForgotPaasword.css'

function ForgotPassword() {
    const formik=useFormik({
        initialValues:{
            email:""
        },
        validate:(value)=>{
            let errors={}
            if(!value.email){
                errors.email="Please Enter Your Email"
            }

            return errors
        },
        onSubmit:async(value)=>{
            try {
                
            } catch (error) {
                console.log(error)
            }
        }
    })
  return (
    <div className='container'>
        <div className='row' style={{marginTop:"20px"}}>
            <div className='col-2'>
                <Link to="/" className='btn btn-secondary'>Back</Link>
            </div>
        </div>
        <div className='row' style={{marginTop:"200px"}}>
            <div className='col-12 text-center'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='forgot-mini-card'>
                        <label style={{fontSize:"20px"}}>Email</label><br/>
                        <input className='forgot-int'  name='email' value={formik.values.email} onChange={formik.handleChange} type='email'/><br/>
                        <span style={{color:"red"}}>{formik.errors.email}</span><br/>
                        <input className='btn btn-success' type='submit' value="Submit"/><br/>
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword