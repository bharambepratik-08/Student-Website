import React, { useState } from 'react'
import FocusTimer from '../components/Focus/FocusTimer'
import ShowTask from '../components/Focus/ShowTask'
import FocusSessionHistoyDisplay from '../components/Focus/FocusSessionHistoyDisplay'

const Focus = () => {

  
  return (
    <div className='FocusPage padding-24 display displayColumn alignItemsC justifyItemsC'>
      <FocusTimer hrtimer={0} mintimer={25} sectimer={0} Brkhrtimer={0} Brkmintimer={5} Brksectimer={0} />
      <FocusSessionHistoyDisplay />
    </div>
  )
}

export default Focus
