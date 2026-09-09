import React from "react";
import UpcomingTaskList from "../components/Dashboard/UpcomingTaskList";
import TaskListDisplay from "../components/Dashboard/TaskListDisplay";

const Dashboard = () => {
  return (
    <div className="DashboardPage padding-24 display displayColumn">
        <TaskListDisplay />
        <UpcomingTaskList />
    </div>
  );
};

export default Dashboard;
