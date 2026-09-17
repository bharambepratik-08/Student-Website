import React from "react";
import UpcomingTaskList from "../components/Dashboard/UpcomingTaskList";
import TaskListDisplay from "../components/Dashboard/TaskListDisplay";
import TopGoalsList from "../components/Dashboard/TopGoalsList";

const Dashboard = () => {
  return (
    <div className="DashboardPage padding-24 display displayColumn">
      <div className="display justifyItemsSpaceEvenly">
        <TaskListDisplay />
        <UpcomingTaskList />
      </div>
      <div className="display justifyItemsSpaceEvenly">
        <TopGoalsList/>
      </div>
    </div>
  );
};

export default Dashboard;
