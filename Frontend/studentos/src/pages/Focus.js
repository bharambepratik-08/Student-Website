import React, { useState } from 'react'
import FocusTimer from '../components/Focus/FocusTimer'

const Focus = () => {

  
  return (
    <div className='FocusPage padding-24 display displayColumn alignItemsC justifyItemsC'>
      <FocusTimer hrtimer={0} mintimer={25} sectimer={0} />
    </div>
  )
}

export default Focus
