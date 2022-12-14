import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Coursecard.css';

//_____________________________________________________________________________
const Subscribedcard = ({Name,Description,Course_id,Author}) => {
    const[author,setAuthor]=useState(null);
    let getauthor=()=>{
        axios({
          method: "get",
          url: `http://localhost:8000/managerapi/staff/${Author}/`,
      }).then((response)=>{
      setAuthor(response.data.Name);
      
      }).catch((error)=>{
      console.log(error);
      })
      }
//_____________________________________________________________________________

//_____________________________________________________________________________
useEffect(()=>{
    getauthor();
},[])

  return (
    <div className="coursecard-wrapper">
    <h2 className='coursecard-title'>{Name}</h2>
    <button style={{width:"max-content",margin:"0px",color:"grey",fontWeight:"600",fontSize:"1vw",backgroundColor:"white",border:"1px solid"}} disabled>Author:{author}</button>
    <p className='coursecard-desc'><b>Description:</b>{Description}</p>
    <NavLink to={`/student/test/${Course_id}`}>
    <button className='card-button' style={{width:"max-content"}}>Tests</button>
    </NavLink>
    </div>
  )
}

export default Subscribedcard