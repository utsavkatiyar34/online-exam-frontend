import React, { useState } from 'react';
import Staffnavbar from "./Staffnavbar";

const AddCourse = () => {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[test,setTest]=useState("");
  let testlist=[{id:"",name:""},{id:"1",name:"HTML"},{id:"2",name:"CSS"},{id:"3",name:"JavaScript"}]
  let handleLogin=()=>{
    alert(test);
  }
  return (
  <>
    <Staffnavbar/>
    <div className='form-wrapper'>
    <h3 style={{color:"#28a745", textAlign:"center",fontSize:"2vw",padding:'0px',margin:'0px',fontWeight:"500"}}>Add Course</h3>
         <p className='form-label'>Course Name</p>
         <input className='course-form-input' type='text' value={email} onChange={(event=>setEmail(event.target.value))}/>
         <p className='form-label'>Description</p>
         <textarea rows = "5" className='course-form-textfield' placeholder="750 characters maximum...." type='password' value={password} onChange={(event=>setPassword(event.target.value))}/>
         <p className='form-label'>Choose test</p>
         <select placeholder="Begin typing a name to filter..." className='course-form-select' type='text' value={test} onChange={(event=>setTest(event.target.value))}>
        
        {/* list of the avaliable tests */}

           {testlist.map((element) => (<>
           <option key={element.id}>{element.name}</option>
           </>))}


         </select>
         <button className='form-button' onClick={handleLogin}>Create</button>
    </div>
  </>
  )
}

export default AddCourse