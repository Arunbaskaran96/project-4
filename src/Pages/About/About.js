
import React, { useState } from 'react'

import "react-alice-carousel/lib/alice-carousel.css";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './About.css'
import UserTag from '../../Components/UserTag';
import { useFormik } from 'formik';

function About() {
  // const[city,setCity]=useState(null)
  // const[fromDate,setFromDate]=useState(null)
  // const[toDate,setToDate]=useState(null)

  const nav=useNavigate()

  // const handleclick=()=>{
  //   nav("/topbar/room",{
  //     state:{city,fromDate,toDate}
  //   })
  // }

  const formik=useFormik({
    initialValues:{
      city:"",
      fromDate:"",
      toDate:""
    },
    validate:(value)=>{
      let errors={}
      if(!value.city){
        errors.city="Please Select The Location"
      }
      return errors
    },
    onSubmit:(value)=>{
      nav("/topbar/room",{
        state:{value}
      })
    }
  })

  const remove=()=>{
    window.localStorage.removeItem("token")
    nav("/")
  }
  return (
    <div className='container-fluid'>
        <div className='row first-container'>
            <div className='col-2'>
                <img className='company-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/OYO_Rooms_%28logo%29.png/600px-OYO_Rooms_%28logo%29.png?20190710031955' alt='company-img'/>
            </div>
            <div className='col-3 abt-member'>
              <h6>Become a Member</h6>
              <p>Additional 10% off on your bookings</p>
            </div>
            <div className='col-3 abt-com text-center'>
              <h6>OYO for buisness</h6>
              <p>Corporate booking solution</p>
            </div>
            <div className='col-2 abt-user text-center'>
              <div className='users-container'>
                <h5><i class="fa-solid fa-user user-pic"></i></h5>
                <Link to="/topbar/userprofile" style={{fontSize:"20px",marginLeft:"15px",color:"whitesmoke",cursor:"pointer",textDecoration:"none"}}>
                  <UserTag/>
                </Link>
              </div>
            </div>
            <div className='col-2 text-end'>
              <button onClick={remove} className='btn btn-danger abt-btn'>Log out</button>
            </div>
        </div>
        <div className='row' style={{marginTop:"30px"}}>
          <div className='text-center'>
            <h5 className='our-loc'>Our Locations</h5>
          </div>
          <div className='col-12 second-container'>
            <h6 className='loc'>Chennai</h6>
            <h6 className='loc'>Coimbatore</h6>
            <h6 className='loc'>Trichy</h6>
            <h6 className='loc'>Madurai</h6>
            <h6 className='loc'>Kumbakonam</h6>
          </div>
        </div>
        <div className='row' style={{marginTop:"30px"}}>
          <div className='col-12 third-container'>
            <div className='row'>
              <h4 className='text-center' style={{marginTop:"15px"}}>Over 1000 plus hotels and homes across Tamil nadu</h4>
            </div>
            <div className='row' style={{marginTop:"30px"}}>
                {/* <div className='col-12 text-center'>
                  <input onChange={(e)=>{
                    setCity(e.target.value)
                  }} placeholder={city} type="text" className='int-room'/>
                  <input onChange={e=>setFromDate(e.target.value)} placeholder='From' type="date" className='int-room'/>
                  <input onChange={e=>setToDate(e.target.value)}  placeholder='From' type="date" className='int-room'/>
                   <button className='btn btn-success' onClick={handleclick}>Search</button>
                </div> */}
                <form onSubmit={formik.handleSubmit}>
                <div className='col-12 text-center'>
                  {/* <input name='city' value={formik.values.city} onChange={formik.handleChange} className='int-room' type='text'></input> */}
                  <select name='city' onChange={formik.handleChange} className='int-room'>
                    <option value="">--Select the location--</option>
                    <option value="kumbakonam">Kumbakonam</option>
                    <option value="chennai">Chennai</option>
                    <option value="trichy">Trichy</option>
                    <option value="coimbatore">Coimbatore</option>
                    <option value="madurai">Madurai</option>
                  </select>
                  <input name='fromDate' value={formik.values.fromDate} onChange={formik.handleChange} className='int-room' type='date'></input>
                  <input name='toDate' value={formik.values.toDate} onChange={formik.handleChange} className='int-room' type='date'></input><br/>
                  <span  style={{marginLeft:"-500px",color:"white"}}>{formik.errors.city}</span><br/>
                  <input type='submit' value="Submit" className='btn btn-success'></input>
                </div>
                </form>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12' style={{marginTop:"20px"}}>
            <h6 style={{textAlign:"center",fontSize:"25px",fontFamily:"unset"}}>We are the most trustable hotel booking website in Tamil Nadu</h6>
          </div>
        </div>
        <div className='row'>
            <div className='col-12 text-center' style={{marginTop:"70px",backgroundColor:"grey",paddingTop:"10px"}}>
              <h6 style={{fontSize:"20px",color:"red"}}>For Contact us</h6>
            </div>
          </div>
        <div className='row'>
          <div className='col-12' style={{backgroundColor:"grey"}}>
            <ul className='home-contact'>
              <li className='contacts-list'><i class="fa-brands fa-facebook contacts"></i></li>
              <li className='contacts-list'><i class="fa-brands fa-instagram contacts"></i></li>
              <li className='contacts-list'><i class="fa-brands fa-twitter contacts"></i></li>
              <li className='contacts-list'><i class="fa-brands fa-pinterest contacts"></i></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default About