import React from 'react'
import BKlogo from '../assets/BKlogo.png'
function Logo({width='50px'}) {
  return (
    <div>
      <img 
      className='w-28 -mt-5'
      src={BKlogo}></img>
    </div>
  )
}

export default Logo