import React, { useEffect, useState } from 'react'
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import {apiUrl,filterData} from './data';
import {toast} from "react-toastify"

import Spinner from "./component/Spinner"
function App() {

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);

  async function featchData(){
    setLoading(true)
  try{
    let response = await fetch(apiUrl);
    let output = await response.json();
    setCourses(output.data);
  }
  catch(error){
    toast.error("Network is pour");
  }
 
  setLoading(false);

  }

  useEffect( ()=>{
    featchData()
  },[])


  return (
    <div>
           <div>
            <Navbar/>
           </div>
           <div>
            <Filter filterData={filterData}/>
           </div>
           <div>
           {
            loading ? (<Spinner/>) : (<Cards courses={courses}/>)
           }
           </div>
    </div>
  )
}

export default App