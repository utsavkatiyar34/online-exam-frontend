import { useSelect } from '@mui/base';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateScore } from '../../redux/student/Actions';
import '../styles/Coursecard.css';

const QuestionCard = ({Question, Option1, Option2, Option3, Option4, Correct_Ans}) => {
    const [answer,setAnswer]=useState("");
    const {score}=useSelector((state=>state.student.scores));
    const dispatch=useDispatch();

    let evaluate=()=>{
      let newscore=score+1;
      let neg=score-1;
    if(!answer){
      alert("Please select answer.")
    }
    else if(answer==Correct_Ans){
        dispatch(updateScore(newscore));
        
    }
    else{
      dispatch(updateScore(neg));

    }
    }
    

  return (
    <div className="coursecard-wrapper">
    <p className='coursecard-desc'><b>Question:</b> {Question}</p>
    <div style={{textAlign:"left"}} onChange={(e)=>setAnswer(e.target.value)}>
        <input type="radio" value={Option1} name="gender" /> {Option1}<br></br>
        <input type="radio" value={Option2} name="gender" /> {Option2}<br></br>
        <input type="radio" value={Option3} name="gender" /> {Option3}<br></br>
        <input type="radio" value={Option4} name="gender" /> {Option4}<br></br>
    </div>
    <button id="btn" className='profile-button' onClick={evaluate}>Lock</button>
    </div>
  )
}

export default QuestionCard