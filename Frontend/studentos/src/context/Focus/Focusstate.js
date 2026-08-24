import React, { useState } from "react";
import FocusContext from "./FocusContext";

const FocusState = (props) => {
  const host = "http://localhost:5000";
  const [focusSession, setFocusSession] = useState([]);

  // Add a task

  const addFocusSession = async (
    title,
    description,
    duration
  ) => {
    const response = await fetch(`${host}/api/focus/addFocusSession`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
      body: JSON.stringify({
        title,
        description,
        duration
      }),
    });

    const json = await response.json();

    if (response.ok) {
      setFocusSession(focusSession.concat(json));
    } else {
      console.error("Backend Error:", json);
      alert(json.errors ? json.errors[0].msg : "Failed to add focus session");
    }
  };

  // Get All Task
  const getFocusSession = async () => {
    const response = await fetch(`${host}/api/focus/fetchAllFocusSession`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
    });

    const json = await response.json();
    setFocusSession(json);
  };

  return (
    <FocusContext.Provider
      value={{ focusSession, addFocusSession, getFocusSession }}
    >
      {props.children}
    </FocusContext.Provider>
  );
};

export default FocusState;
