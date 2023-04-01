import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './AdminTopbar.css'

function AdminTopbar() {
    const[ismobile,setMobile]=useState(false)
    const nav=useNavigate()
    const remove=()=>{
        window.localStorage.removeItem("token")
        nav("/")
    }
  return (
    <div className='admin-topbar'>
        <div>
            <img className='admintop-img' src='https://w7.pngwing.com/pngs/616/118/png-transparent-gurugram-oyo-rooms-hotel-business-company-hotel-company-text-heart.png' alt='topbar-img'/>
        </div>
        <div>
            <h5 className='companyname'>OYO Room</h5>
        </div>
        <ul onClick={()=>setMobile(false)} className={ismobile? "nav-link-mobile" :"admin-pages-list"}>
            <Link to="/admintop/users"  style={{textDecoration:"none"}}><li className='pages'>Users</li></Link>
            <Link to="/admintop/rooms" style={{textDecoration:"none"}}><li className='pages'>Rooms</li></Link>
            <Link to="/admintop/bookings" style={{textDecoration:"none"}}><li className='pages'>Bookings</li></Link>
            <button onClick={remove} className='btn btn-danger btn-sm'>Log out</button>
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
    </div>
  )
}

export default AdminTopbar