import React from 'react'

const CalendarBlock = (props) => {
    const { title, date, des } = props;

    const colorDecider = (e) => {
      if(e === 'Task') {
        return '#08be5a';
      } else if (e === 'Goal') {
        return '#046fd3';
      }
    } 

    const formattedDue = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

    
  return (
    <div className='padding-12 display displayColumn gap-8'>
      <div className='calendarDateBlock display'>
        <h3>{formattedDue}</h3>
      </div>
      <div className='borderRadius-8 eventDateCalendar padding-8' style={{background:colorDecider(des)}}>
        <p>{des}, {title}</p>
      </div>
    </div>
  )
}

export default CalendarBlock
