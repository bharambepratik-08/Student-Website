import React from 'react'

const NotificationProp = ( props ) => {
    const { title, description, priority, color, time } = props;
  return (
    <div className='NotificationProp padding-24 display borderRadius-16 gap-24'>
      <div className='LogoNotification padding-24 display alignItemsC justifyItemsC'>
        Logo
      </div>
      <div className='NotificationRest padding-12 display displayColumn gap-8'>
        <div className='UpperLook display alignItemsC justifyItemsSpaceBtw ' >
          <div className='NotificationDeadline'>
            Deadline
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
