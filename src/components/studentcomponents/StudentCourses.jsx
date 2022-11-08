import React from 'react'
import StudentCourseCard from './StudentCourseCard'
import Studentnavbar from './Studentnavbar'

const StudentCourses = () => {
  let courses=[{name:"Web Development Course",
  description:"in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut"}
  ,{name:"Backend Course with python and Django",
  description:"in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut"}]
  return (
    <>
      <Studentnavbar/>    
      <h3 style={{color:"#28a745", textAlign:"center",fontSize:"2vw",padding:'0px',marginTop:'2vw',fontWeight:"600"}}>All Courses</h3>
      {courses.map((element) => (<>
        <StudentCourseCard key={element.name} {...element}/>
      </>))}
    </>
  )
}

export default StudentCourses