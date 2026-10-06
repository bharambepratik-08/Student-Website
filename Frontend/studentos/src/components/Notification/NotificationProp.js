import React, { useContext } from 'react'
import NotificationContext from '../../context/Notification/NotificationContext';

const NotificationProp = ( props ) => {
  const context = useContext(NotificationContext)
  const { deleteNotification } = context;
  
  const { title, description, priority, color, time, date } = props;
  
    const formattedDue = new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  
  return (
    <div className='NotificationProp padding-24 display borderRadius-16 gap-24'>
      <div className='LogoNotification padding-24 display alignItemsC justifyItemsC'>
        Logo
      </div>
      <div className='NotificationRest padding-12 display displayColumn gap-8'>
        <div className='UpperLook display alignItemsC justifyItemsSpaceBtw ' >
          <div className='NotificationDeadline'>
            {formattedDue}
          </div>
          <div className='NotificationTime'>
            Time
          </div>
        </div>
        <div className='NotificationBoxTitle'>
          {title}
        </div>
        <div className='NotificationBoxDescription'>
          {description}
        </div>
      </div>
    </div>
  )
}

export default NotificationProp
