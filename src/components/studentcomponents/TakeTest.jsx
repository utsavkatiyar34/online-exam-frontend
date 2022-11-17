import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { profileError, profileLoading, profileSuccess, questionError, questionLoading, questionSuccess } from '../../redux/student/Actions';
import QuestionCard from './QuestionCard';

const TakeTest = () => {
  
    let test=useParams();
    const {qlist}=useSelector(state=>state.student.questions);
    const {score}=useSelector((state=>state.student.scores));
    const token=JSON.parse(sessionStorage.student_token);
    const {data}=useSelector(state=>state.student.profile)
    let dispatch=useDispatch();

    let submit=()=>{
      console.log(score);
      axios({
        method:"post",
        url:"http://localhost:8000/courseapi/score/",
        data:{
          Score:score,
          Test_id:Number(test.testid),
          Student_id:data[0].Student_id
        }
    }).then((res)=>{
      alert("Submitted Successfully");
    }).catch((err)=>{
      alert("Error.");
    })

  }

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
      }).catch((error)=>{
        dispatch(profileError());
      })
      }

    let getQuestions=()=>{
        dispatch(questionLoading());
          axios({
            method:"post",
            url:"http://localhost:8000/courseapi/getquestions/",
            data:{
              Test_id:test.testid
            }
          }).then((res)=>{
            dispatch(questionSuccess(res.data.data));
          }).catch((err)=>{
            dispatch(questionError());
          })
        }
        useEffect(()=>{
          getQuestions();
          getuser();
        },[])
  return (
    <>
    {qlist? (<>
    {qlist.map((ele)=>(
        <>
        <QuestionCard {...ele} key={ele.Question_id}/>
        </>
    ))}
    <div style={{width:"max-content",marginLeft:"auto",marginRight:"auto"}}>
    <button className='card-button' style={{width:"max-content",marginLeft:"auto",marginRight:"auto"}} onClick={submit}>Submit</button>
    </div></>):(<><p>No Questions Assigned.</p></>)}
    </>
  )
}

export default TakeTest