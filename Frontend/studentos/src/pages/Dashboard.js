import React from "react";
import UpcomingTaskList from "../components/Dashboard/UpcomingTaskList";
import TaskListDisplay from "../components/Dashboard/TaskListDisplay";

const Dashboard = () => {
  return (
    <div className="DashboardPage padding-24 display displayColumn">
      <div className="display justifyItemsSpaceEvenly">
        <TaskListDisplay />
        <UpcomingTaskList />
      </div>
    </div>
  );
};

export default Dashboard;
