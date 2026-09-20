import React from 'react'
import NotificationProp from '../components/Notification/NotificationProp'

const Notification = () => {
  return (
    <div className='NotificationPage padding-24 display displayColumn'>
      <div className="NotificationTopBar padding-24">
        <h1>Notification</h1>
        <p>Stay updated on your productivity flow.</p>
      </div>
      <div className="notificationBox padding-24">
        <NotificationProp />
      </div>
    </div>
  )
}

export default Notification
