import React from 'react'

const Card = ({imgurl,title , }) => {
  return (
    <div className="flex flex-col justify-between min-h-full">
    <div className="flex flex-col gap-5">
      <img src={imgurl} className="object-cover h-48  rounded-lg w-[200px] h-[200px]" alt="" />
        <h2 className="text-lg font-bold  truncate">{title}</h2>
      
    </div>
  </div>
  

  )
}

export default Card
