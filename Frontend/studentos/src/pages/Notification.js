import React, { useContext, useEffect } from 'react'
import NotificationProp from '../components/Notification/NotificationProp'
import NotificationContext from '../context/Notification/NotificationContext';

const Notification = () => {
  const context = useContext(NotificationContext);
  const { notification , getnotifications } = context;

  useEffect(() => {
        getnotifications();
        // eslint-disable-next-line
      }, []);

  return (
    <div className='NotificationPage padding-24 display displayColumn'>
      <div className="NotificationTopBar padding-24">
        <h1>Notification</h1>
        <p>Stay updated on your productivity flow.</p>
      </div>
      <div className="notificationBox padding-24">
        {
          notification.map((notifi) => {
            return (
              <NotificationProp 
                title={notifi.title}
                description={notifi.description}
                priority={notifi.priority}
                color={notifi.color}
                time={notifi.time}
              />
            )
          })
        }
        <NotificationProp />
      </div>
    </div>
  )
}

export default Notification
