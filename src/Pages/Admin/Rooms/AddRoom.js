import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import './Room.css'
import { Link } from 'react-router-dom'

function AddRoom() {
    const formik=useFormik({
        initialValues:{
            name:"",
            price:"",
            img:"",
            imgs:[],
            des:"",
            amenities:[],
            location:""

        },
        validate:()=>{},
        onSubmit:async(value)=>{
            try {
                await axios.post("http://localhost:8000/room",value,{
                    headers:{
                        Authorization:`${window.localStorage.getItem("token")}`
                    }
                })
            } catch (error) {
                console.log(error)
            }
        }
    })
  return (
    <div className='container'>
        <div className='row' style={{marginTop:"64px"}}>
            <div className='col-2'>
                <Link to="/admintop/rooms" className='btn btn-secondary'>Back</Link>
            </div>
        </div>
        <div className='row'>
            <div className='col-4 text-end'>
                <label className='addroom-label'>Name : </label><br/>
                <label className='addroom-label'>Price : </label><br/>
                <label className='addroom-label'>image : </label><br/>
                <label className='addroom-label'>Additional Images : </label><br/>
                <label className='addroom-label'>Description : </label><br/>
                <label className='addroom-label'>Location : </label><br/>
                <label className='addroom-label'>Amenities : </label><br/>
            </div>
            <div className='col-6'>
                <form onSubmit={formik.handleSubmit}>
                    <input name='name' value={formik.values.name} onChange={formik.handleChange} className='addroom-int'/><br/>
                    <input name='price' value={formik.values.price} onChange={formik.handleChange} className='addroom-int'/><br/>
                    <input name='img' value={formik.values.img} onChange={formik.handleChange} className='addroom-int'/><br/>
                    <input name='imgs' value={formik.values.imgs} onChange={formik.handleChange} className='addroom-int'/><br/>
                    <input name='des' value={formik.values.des} onChange={formik.handleChange} className='addroom-int'/><br/>
                    <input name='location' value={formik.values.location} onChange={formik.handleChange}className='addroom-int'/><br/>
                    <input name='amenities' value={formik.values.amenities} onChange={formik.handleChange}className='addroom-int'/><br/>
                    <input className='addroom-int btn btn-success' type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddRoom