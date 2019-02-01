import React from 'react'

const InfoTraffic = (data) => {
console.log(data.data[0].name)
  return(
    <div>
      {data.data.map((line,index) => <p key={index}>{line.name}</p>)}
    </div>
  )
}

export default InfoTraffic
