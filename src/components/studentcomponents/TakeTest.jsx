import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { questionError, questionLoading, questionSuccess } from '../../redux/student/Actions';
import QuestionCard from './QuestionCard';

const TakeTest = () => {
    let test=useParams();
    const {qlist}=useSelector(state=>state.student.questions);
    let dispatch=useDispatch();
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
        },[])
  return (
    <>
    {qlist? (<>
    {qlist.map((ele)=>(
        <>
        <QuestionCard {...ele}/>
        </>
    ))}
    </>):(<></>)}
    </>
  )
}

export default TakeTest