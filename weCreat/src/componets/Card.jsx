import React, { useState } from 'react'

function Card({id,name,price,image,info,removeHandler}) {

    const [readmore,setReadmore] = useState(false);

    const description = readmore? info:  `${info.substring(0,200)}...`;

    function changeHandler(){
        setReadmore(!readmore)
    }

  return (
    <div>
               <div>
                <img src={image}/>
               </div>

               <div>
                <h2>{price}</h2>
                <h2>{name}</h2>

                <div>
                    {description}
                    <span onClick={changeHandler}>
                        {! readmore ? `Read More`: `Show Less`}
                    </span>
                </div>

                <div>
                    <button onClick={ ()=> removeHandler(id)}>Not Intrested</button>
                </div>
               </div>
    </div>
  )
}

export default Card