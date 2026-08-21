import React, {useState} from "react";
import TaskContext from "./TaskContext";

const TaskState = (props) => {
    const host = "http://localhost:5000";
    const [tasks, setTasks] = useState([]);

    // Add a task

    const addTask = async (title, descripition, due, time, priority, catogery, tags) => {
        const response = await fetch(`${host}/api/task/addTask`, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'auth-token' : localStorage.getItem('token') // to identify the user
            },
            body: JSON.stringify({title, descripition, due, time, priority, catogery, tags})
        });

        const task = await response.json();
        setTasks(tasks.concat(task)); 
    }


    return (
        <TaskContext.Provider value={{tasks, addTask}}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskState;