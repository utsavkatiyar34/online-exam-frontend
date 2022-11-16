import React, { useState } from 'react';
import '../styles/Coursecard.css';

const QuestionCard = ({Question, Option1, Option2, Option3, Option4, Correct_Ans}) => {
    const [answer,setAnswer]=useState("")
    if(answer==Correct_Ans){
        console.log("Correct");
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
    </div>
  )
}

export default QuestionCard