import React, { useState } from "react";
import NotificationContext from "./NotificationContext";

const NotificationState = (props) => {
  const host = "http://localhost:5000";
  const [notification, setNotification] = useState([]);

  // Add a notification

  const addNotification = async (
    title,
    description,
    duration,
    date,
    time,
    priority
  ) => {
    const response = await fetch(`${host}/api/notifications/addNotification`, {
      method: "POST",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
      body: JSON.stringify({
        title,
        description,
        duration,
        date,
        time,
        priority
      }),
    });

    const json = await response.json();

    if (response.ok) {
      setNotification(notification.concat(json));
    } else {
      console.error("Backend Error:", json);
      alert(json.errors ? json.errors[0].msg : "Failed to add Notification");
    }
  };

  
  // Delete a Notification
  const deleteNotification = async (id) => {
    const response = await fetch(
      `${host}/api/notifications/deleteNotification/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"), // to identify the user
        },
      },
    );

    const json = await response.json();

    console.log(json);

    // Update UI

    const newnotifications = notification.filter((notification) => {
      return notification._id !== id;
    });
    setNotification(newnotifications);
  };

  // Get All Notification
  const getnotifications = async () => {
    const response = await fetch(`${host}/api/notifications/fetchAllNotification`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
    });

    const json = await response.json();
    setNotification(json);
  };

  return (
    <NotificationContext.Provider
      value={{
        notification,
        addNotification,
        getnotifications,
        deleteNotification,
      }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationState;
