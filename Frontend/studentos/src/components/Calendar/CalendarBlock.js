import React from 'react'

const CalendarBlock = (props) => {
    const { title, date, des } = props;
    
  return (
    <div>
      {title}
      {date}
      {des}
    </div>
  )
}

export default CalendarBlock
