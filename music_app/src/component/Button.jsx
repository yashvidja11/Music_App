import React from 'react'

const Button = ({title , buttonclass , click}) => {
  return (
    <div>
      <button className={buttonclass} onClick={click}>{title}</button>
    </div>
  )
}

export default Button
