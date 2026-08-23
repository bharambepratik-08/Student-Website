import React from "react";
import TasksPageNavbar from "../components/Tasks/TasksPageNavbar";
import TaskPage from "../components/Tasks/TaskPage";

const Tasks = () => {
  

  return (
    <div className="TaskPage padding-24">
      <TasksPageNavbar />
      <TaskPage />
    </div>
  );
};

export default Tasks;
