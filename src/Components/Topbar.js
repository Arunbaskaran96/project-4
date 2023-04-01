import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Components.css'

function Topbar() {
    const[ismobile,setMobile]=useState(false)
    const nav=useNavigate()
    const remove=()=>{
        window.localStorage.removeItem("token")
        nav("/")
    }
  return (
    <nav className='topbar-container'>
        <div className='top-companydetail'>
            <img className='topbar-img' src='https://w7.pngwing.com/pngs/616/118/png-transparent-gurugram-oyo-rooms-hotel-business-company-hotel-company-text-heart.png' alt=''/>
        </div>
        <div>
            <h5 className='company-name'>OYO Rooms</h5>
        </div>
        <ul onClick={()=>{
            setMobile(false)
        }} className={ismobile?"nav-links-mobile":"topbar-lists"}>
            <Link to="/topbar/userprofile" className='user'>
                <li className='top-list'>User</li>
            </Link>
            <Link to="/topbar/history" className='history'>
                <li className='top-list'>History</li>
            </Link>
            <button className='logout btn btn-secondary' style={{marginTop:"10px"}} onClick={remove}>
                <li className='top-list'>Log out</li>
            </button>
        </ul>
        <button onClick={()=>{
            setMobile(!ismobile)
        }} className='mobile-menu-icon'>
            {
                ismobile?(<i class="fa-sharp fa-regular fa-xmark"></i>
                ):(
                    <i class="fa-solid fa-bars"></i>
                )
            }
        </button>
    </nav>
  )
}

export default Topbar