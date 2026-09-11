import React from 'react'
import GoalsTopBar from '../components/Goals/GoalsTopBar'
import AddGoal from '../components/Goals/AddGoal'

const Goals = () => {
  return (
    <div className='GoalPage padding-24'>
      <GoalsTopBar />
      <AddGoal /> 
    </div>
  )
}

export default Goals
