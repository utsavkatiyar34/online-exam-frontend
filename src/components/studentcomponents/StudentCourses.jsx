import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getcourseError, getcourseLoading, getcourseSuccess,profileError, profileLoading, profileSuccess} from '../../redux/student/Actions'
import StudentCourseCard from './StudentCourseCard'
import Studentnavbar from './Studentnavbar'

const StudentCourses = () => {
  const {datacourse}=useSelector((state)=>state.student.cources);
  const token=JSON.parse(sessionStorage.student_token);
  const {data}=useSelector(state=>state.student.profile);
  let subscribed=[]
//_____________________________________________________________________________
  let dispatch=useDispatch();
  let getcources=()=>{
    dispatch(getcourseLoading());
      axios({
        method: "get",
        url: 'http://localhost:8000/courseapi/course/',
    }).then((response)=>{
      dispatch(getcourseSuccess(response.data));
    }).catch((error)=>{
      dispatch(getcourseError());
      alert("Error :"+error);
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
            subscribed.push(ele.Course);
          })
          getcources();
        }).catch((err)=>{
          getcources();
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
        let errmessage=error.response.data.Email;
        alert("Error :"+errmessage);
      })
      } 
//_____________________________________________________________________________
    useEffect(() => {
      subscribed=[]
      return () => {
        getuser();
      }
    }, [])

  return (
    <>
      <Studentnavbar/>    
      <h3 style={{color:"#28a745", textAlign:"center",fontSize:"2vw",padding:'0px',marginTop:'2vw',fontWeight:"600"}}>All Courses</h3>
      {datacourse?(<>{datacourse.map((element) => (<>
      <StudentCourseCard key={element.Course_id} {...element} student={data[0].Student_id}/>
      </>))}</>):(<></>)}
    </>
  )
}

export default StudentCourses