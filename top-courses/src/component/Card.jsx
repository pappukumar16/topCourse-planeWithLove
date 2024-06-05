import React from 'react'
import { FcLikePlaceholder ,FcLike} from "react-icons/fc";
import {toast} from "react-toastify"


function Card(props) {
   let course = props.course;

   let likedCourses = props.likedCourses;
   let setLikedCourses = props.setLikedCourses;
   

   function changeHandler(){

      if(likedCourses.includes(course.id)){
       setLikedCourses( (prev) => prev.filter( (cid)=> (cid !== course.id)));
         toast.warning("Like Remove");
      }else{
         if(likedCourses.length === 0){
             setLikedCourses(course.id);
         }else{
            setLikedCourses( (prev)=> [...prev , course.id]);
         }
         toast.success("Liked successfully");
      }
   }

  return (
    <div>
              <div>
               <img src={course.image.url}/>
              </div>

              <div>
               
               <button onClick={changeHandler}>
                 
                   {
                     likedCourses ? (<FcLike />) : (<FcLikePlaceholder />)
                   }
                 
                 </button>
                
              </div>

              <div>
               <h3>{course.title}</h3>
               <p>{course.description}...</p>
              </div>
    </div>
  )
}

export default Card