import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Users.css'

function Users() {
    const[users,setUsers]=useState([])

    useEffect(()=>{
        getUser()
    })

    const getUser=async()=>{
        try {
            const result=await axios.get("https://project4-backend-e5g5.onrender.com/users",{
                headers:{
                    Authorization:`${window.localStorage.getItem("token")}`
                }
            })
            setUsers(result.data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='container adminusers-container'>
        <div className='row' style={{marginTop:"70px"}}>
            <div className='col-12 col-container'>
            <table class="table">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">City</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item)=>{
                            return(
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.city}</td>
                                        <td>
                                            <Link to={`/admintop/adminuserview/${item._id}`} className='btn btn-secondary btn-sm ' style={{marginRight:"5px"}}>View</Link>
                                            <button className='btn btn-danger btn-sm'>Remove</button>
                                        </td>
                                    </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            </div>
        </div>
    </div>
  )
}

export default Users