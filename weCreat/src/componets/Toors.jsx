import React from 'react'
import Card from "./Card"

function Toors({toors,removeHandler}) {
  return (
    <div>
        <div> <h2>Palan with love</h2> </div>
        <div> 
            {
                toors.map( (toor)=>{
                    return <Card key={toor.id} {...toor} removeHandler={removeHandler}></Card>   
                })
            }   
        </div>
    </div>
  )
}

export default Toors