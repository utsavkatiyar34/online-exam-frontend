import React from 'react'
import Staffnavbar from "./Staffnavbar"
import '../styles/Profile.css'

const Staffportal = () => {

  return (
    <>
       <Staffnavbar/>
       <div className='profile-wrapper'>
       <h3 style={{color:"#28a745", textAlign:"center",fontSize:"2vw",padding:'0px',margin:'0px',fontWeight:"500"}}>Profile</h3>
          <div className='profile-main'>
          <div className="profile">
          <p className='profile-label'>Name</p>

          <p className='profile-label'>Email</p>

          <p className='profile-label'>Staff ID</p>
          </div>
          <div className="profile2">

          <p className='profile-info'>Utsav Katiyar</p>

          <p className='profile-info'>utsav.katiyar@livehealth.in</p>

          <p className='profile-info'>436</p>

          </div>
          </div>
        <div style={{width:"fit-content",marginRight:"0px",marginLeft:"auto"}}>
        <button className='profile-button' >Edit</button>
        <button className='profile-button' >Log Out</button>
        </div>
       </div>
    </>
  )
}

export default Staffportal