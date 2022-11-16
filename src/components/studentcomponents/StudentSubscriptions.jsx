import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { profileError, profileLoading, profileSuccess, subscriptionError, subscriptionLoading, subscriptionSuccess } from '../../redux/student/Actions';
import Studentnavbar from './Studentnavbar'
import Subscribedcard from './Subscribedcard';

const StudentSubscriptions = () => {
  const token=JSON.parse(sessionStorage.student_token);
  const [array,setArray] = useState([]);
  const {subs}=useSelector(state=>state.student.subscriptions);
  let dispatch=useDispatch();
//_____________________________________________________________________________
//_____________________________________________________________________________
  let getsubs=(x)=>{
    dispatch(subscriptionLoading())
    axios({
      method:"get",
      url:`http://localhost:8000/courseapi/course/${x}/`,
    }).then((res)=>{
      setArray(prev => [res.data,...prev]);
      dispatch(subscriptionSuccess(res.data));
    }).catch((err)=>{
      dispatch(subscriptionError());
    })
  }

//_____________________________________________________________________________
  let fechSubs=(y)=>{
  let usableid=y.data[0].Student_id;
    axios({
      method:"post",
      url:"http://localhost:8000/courseapi/getsubscribed/",
      data:{
        Student:usableid
      }
    }).then((res)=>{
      (res.data.data).map((ele)=>{
        getsubs(ele.Course);
      })
    }).catch((err)=>{
      
    })
  }
//_____________________________________________________________________________
  let getuser=()=>{
    dispatch(profileLoading())
      axios({
        method: "post",
        url: 'http://localhost:8000/managerapi/getloggedinstudent/',
        data:{
          Email:token.Email,
          Password:token.Password
          }
    }).then((response)=>{
      dispatch(profileSuccess(response.data));
      fechSubs(response.data);
    }).catch((error)=>{
      dispatch(profileError());
    })
    }
//_____________________________________________________________________________
    useEffect(()=>{
      getuser();
    },[])
  return (
    <>
    <Studentnavbar/>
    <h3 style={{color:"#28a745", textAlign:"center",fontSize:"1.5vw",padding:'0px',marginTop:'2vw',fontWeight:"500"}}>Your Subscriptions</h3>
    {array.map((ele)=>(
      <Subscribedcard {...ele}/>
    ))}
    </>
  )
}

export default StudentSubscriptions