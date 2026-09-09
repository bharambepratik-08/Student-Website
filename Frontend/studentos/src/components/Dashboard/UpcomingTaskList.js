import React, { useContext } from "react";
import TaskContext from "../../context/tasks/TaskContext";

const UpcomingTaskList = () => {
  const context = useContext(TaskContext);
  const { tasks } = context;

  // tell the border color for the card
  const borderColor = (priority) => {
    switch (priority) {
      case "High":
        return "#FF3B30";

      case "Medium":
        return "#f0e32d";

      case "Low":
        return "#38b338";

      default:
        return "gray";
    }
  };

  // to make the date in the format which comes from the server inorder to compare further
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedToday = `${year}-${month}-${day}`;

  // to get the special list for todays task
  const upcomingDate = () => {
    const tasklist = tasks.filter((task) => {
      const taskDateOnly = task.due.split("T")[0];
      return taskDateOnly > formattedToday;
    });

    return (
      <div>
        {tasklist.map((task) => {
          return (
            <div className="display alignItemsC padding-12 justifyItemsSpaceBtw">
              <div>
                <h3>{task.title}</h3>
              </div>
              <div
                className="InformationBoxDash PriorityCard borderRadius-16 display alignItemsC justifyItemsC"
                style={{ backgroundColor: `${borderColor(task.priority)}80` }}
              >
                <p>
                  <p className="taskDisplayDashP">{task.time}</p>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="display displayColumn taskListForDashboard padding-24 gap-12 borderRadius-8">
        <div className="upcomingListDashboardheader padding-12 display alignItemsC">
          <h2>Upcoming Deadlines</h2>
        </div>
        <div>{upcomingDate()}</div>
      </div>
    </div>
  );
};

export default UpcomingTaskList;