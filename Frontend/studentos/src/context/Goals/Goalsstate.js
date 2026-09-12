import React, { useState } from "react";
import GoalContext from "./GoalsContext";

const GoalState = (props) => {
  const host = "http://localhost:5000";
  const [goals, setGoals] = useState([]);

  // Add a goal

  const addGoal = async (
    title,
    description,
    duration,
    tag,
    bar,
    catogery,
    date,
  ) => {
    const response = await fetch(`${host}/api/goals/addGoal`, {
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
        tag,
        bar,
        catogery,
        date,
      }),
    });

    const json = await response.json();

    if (response.ok) {
      setGoals(goals.concat(json));
    } else {
      console.error("Backend Error:", json);
      alert(json.errors ? json.errors[0].msg : "Failed to add goal");
    }
  };

  // Get All Goal
  const getgoals = async () => {
    const response = await fetch(`${host}/api/goals/fetchAllGoals`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
    });

    const json = await response.json();
    setGoals(json);
  };

  // Delete a Goal
  const deleteGoal = async (id) => {
    const response = await fetch(`${host}/api/goals/deleteGoal/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
    });

    const json = await response.json();

    console.log(json);

    // Update UI

    const newgoals = goals.filter((goal) => {
      return goal._id !== id;
    });
    setGoals(newgoals);
  };

  // Edit a Goal
  const editGoal = async (id, title, description, duration, bar, date) => {
    const response = await fetch(`${host}/api/goals/updateGoal/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
      body: JSON.stringify({
        title,
        description,
        duration,
        bar,
        date,
      }),
    });

    const json = await response.json();

    // logic to edit

    let newgoals = JSON.parse(JSON.stringify(goals));
    for (let index = 0; index < newgoals.length; index++) {
      const element = newgoals[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.bar = bar;
        element.date = date;
        break;
      }
    }

    setGoals(newgoals);
  };

  const completeGoal = async (id) => {
    try {
      const response = await fetch(`${host}/api/goals/completeGoal/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });

      if (response.ok) {
        // Update the local state so the UI refreshes instantly
        setGoals((prevgoals) =>
          prevgoals.map((goal) =>
            goal._id === id ? { ...goal, completed: true } : goal,
          ),
        );
      } else {
        const errorJson = await response.json();
        console.error("Server Error:", errorJson);
      }
    } catch (error) {
      console.error("Network Error:", error);
    }
  };

  return (
    <GoalContext.Provider
      value={{ goals, addGoal, deleteGoal, editGoal, getgoals, completeGoal }}
    >
      {props.children}
    </GoalContext.Provider>
  );
};

export default GoalState;
