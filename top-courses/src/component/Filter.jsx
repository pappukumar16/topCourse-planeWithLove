import React from 'react'

function Filter(props) {
  let filterData = props.filterData;

  return (
    <div>
          {
            filterData.map( (data)=>{
             return(
              <button key={data.id}>{data.title}</button>
             )

             
            })
          }
    </div>
  )
}

export default Filter