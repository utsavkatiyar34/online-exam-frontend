import React from 'react';
import '../styles/Coursecard.css';

const StudentCourseCard = ({name,description}) => {
  return (
  <>
  <div className="coursecard-wrapper">
    <h2 className='coursecard-title'>{name}</h2>
    <p className='coursecard-desc'>{description}</p>
    <button className='card-button'>Subscribe</button>
    </div>
  </>
  )
}

export default StudentCourseCard