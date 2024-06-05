import React, { useState } from 'react'
import Card from "./Card"

function Cards(props) {
    let courses = props.courses;
    const [likedCourses,setLikedCourses] = useState([]);

   function getAlldata(){
    let allCourses = [];
    Object.values(courses).forEach(array =>{
        array.forEach(courseData=>{
            allCourses.push(courseData);
        })
    })
    return allCourses;
   }

  return (
    <div>
          {
            getAlldata().map( (course)=>{
             return(
                <Card key={course.id} course={course}
                 likedCourses={likedCourses}
                 setLikedCourses={setLikedCourses}
                />
             )
            })
          }
    </div>
  )
}

export default Cards