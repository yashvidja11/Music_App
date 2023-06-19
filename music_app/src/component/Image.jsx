import React from 'react'

const Image = ({imgurl }) => {
  return (
    <img src={imgurl} className="rounded-lg transition duration-300 transform hover:-translate-y-1" alt="" />
  )
}

export default Image
