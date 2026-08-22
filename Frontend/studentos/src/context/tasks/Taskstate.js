import React, { useState } from "react";
import TaskContext from "./TaskContext";

const TaskState = (props) => {
  const host = "http://localhost:5000";
  const [tasks, setTasks] = useState([]);

  // Add a task

  const addTask = async (
    title,
    description,
    due,
    time,
    priority,
    catogery,
    tags,
  ) => {
    const response = await fetch(`${host}/api/task/addTask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
      body: JSON.stringify({
        title,
        description,
        due,
        time,
        priority,
        catogery,
        tags,
      }),
    });

    const json = await response.json();

    if (response.ok) {
      setTasks(tasks.concat(json));
    } else {
      console.error("Backend Error:", json);
      alert(json.errors ? json.errors[0].msg : "Failed to add task");
    }
  };

  // Get All Task
  const getTasks = async () => {
    const response = await fetch(`${host}/api/task/fetchAllTask`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
    });

    const json = await response.json();
    setTasks(json);
  };

  // Delete a Task
  const deleteTask = async (id) => {
    const response = await fetch(`${host}/api/task/deleteTask/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
    });

    const json = await response.json();

    console.log(json);

    // Update UI

    const newTasks = tasks.filter((task) => {
      return task._id !== id;
    });
    setTasks(newTasks);
  };

  // Edit a Task
  const editTask = async (
    id,
    title,
    description,
    due,
    time,
    priority,
    catogery,
    tags,
  ) => {
    const response = await fetch(`${host}/api/task/updateTask/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
      body: JSON.stringify({
        title,
        description,
        due,
        time,
        priority,
        catogery,
        tags,
      }),
    });

    const json = await response.json();

    // logic to edit

    let newTasks = JSON.parse(JSON.stringify(tasks));

    for (let index = 0; index < newTasks.length; index++) {
      const element = newTasks[index];
      if (element._id === id) {
        newTasks[index].title = title;
        newTasks[index].description = description;
        newTasks[index].due = due;
        newTasks[index].time = time;
        newTasks[index].priority = priority;
        newTasks[index].catogery = catogery;
        newTasks[index].tags = tags;
        break;
      }
    }

    setTasks(newTasks);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, editTask, getTasks }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
