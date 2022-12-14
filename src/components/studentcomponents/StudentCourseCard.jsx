import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/Coursecard.css';

const StudentCourseCard = ({Name,Description,Author,Course_id,student}) => {
const[author,setAuthor]=useState(null);
  let handleSubscribe=(x)=>{
  axios({
      method: "post",
      url: 'http://localhost:8000/courseapi/assign/',
      data:{
           Course:Course_id,
           Student:student
      }
  }).then((res)=>{
  alert(`${x} subscribed successfully.`);
  }).catch((error)=>{
    alert(`${x} already subscribed.`);
  })
  }
  let getauthor=()=>{
      axios({
        method: "get",
        url: `http://localhost:8000/managerapi/staff/${Author}/`,
    }).then((response)=>{
    setAuthor(response.data.Name)
    }).catch((error)=>{
    console.log(error);
    })
    }
    useEffect(()=>{
      getauthor();
    },[])

  return (
  <>
  <div className="coursecard-wrapper">
    <h2 className='coursecard-title'>{Name}</h2>
    <button style={{width:"max-content",margin:"0px",color:"grey",fontWeight:"600",fontSize:"1vw",backgroundColor:"white",border:"1px solid"}} disabled>Author:{author}</button>
    <p className='coursecard-desc'><b>Description:</b>{Description}</p>
    {/* <button style={{width:"max-content",margin:"0px",color:"grey",fontWeight:"600",fontSize:"1vw",backgroundColor:"white",border:"1px solid"}} disabled>Author:{author}</button> */}
    <button className='card-button' onClick={()=>{handleSubscribe(Name)}}>Subscribe</button>
    </div>
  </>
  )
}

export default StudentCourseCard