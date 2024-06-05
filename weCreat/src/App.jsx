import React, { useState } from 'react'
import data from "./data";
import Toors from './componets/Toors';
function App() {

  const [toors,setToors] = useState(data);

  function removeHandler(id){
    const newToor = toors.filter((toor => toor.id !== id));
    setToors(newToor)
  }

  function changHandlerR(){
    setToors(data);
  }

  if(toors.length === 0){
    return(
      <div>
        <h2>No toors are left</h2>
        <button onClick={changHandlerR}>Resfresh</button>
      </div>
    )
  }

  return (
    <div>
      <Toors toors={toors} removeHandler={removeHandler}></Toors>
    </div>
  )
}

export default App