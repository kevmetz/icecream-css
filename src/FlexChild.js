import React from 'react'

import icecream from "./img1.jpg"

const FlexChild = ({size, wide}) => {


  return (
    <div className="flex-child">
      <img src={icecream} height={size} width={wide} alt="image"/>
    </div>
  )
}

export default FlexChild