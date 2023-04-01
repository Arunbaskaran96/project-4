import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminTopbar from './AdminTopbar'

function Adminportal() {
  return (
    <div>
        <AdminTopbar/>
        <Outlet></Outlet>
    </div>
  )
}

export default Adminportal