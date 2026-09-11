import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TaskContext from "../../context/tasks/TaskContext";

const TaskListDisplay = () => {
  const context = useContext(TaskContext);
  const { tasks } = context;

  let navigate = useNavigate();

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

  // to add ! - in the starting of the priortiy
  const PrefixPriority = (priority) => {
    switch (priority) {
      case "High":
        return "!";

      case "Medium":
        return "-";

      case "Low":
        return "";

      default:
        return "|";
    }
  };

  // to make the date in the format which comes from the server inorder to compare further
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedToday = `${year}-${month}-${day}`;

  // to get the special list for todays task
  const currentDate = () => {
    const tasklist = tasks.filter((task) => {
      const taskDateOnly = task.due.split("T")[0];
      return taskDateOnly === formattedToday;
    });

    return (
      <div>
        {tasklist.map((task) => {
          return (
            <div className="display alignItemsC padding-12 justifyItemsSpaceBtw">
              <div>
                <h3>{task.title}</h3>
                <p className="taskDisplayDashP">Due today at {task.time}</p>
              </div>
              <div
                className="InformationBoxDash PriorityCard borderRadius-16 display alignItemsC justifyItemsC"
                style={{ backgroundColor: `${borderColor(task.priority)}80` }}
              >
                <p>
                  {PrefixPriority(task.priority)} {task.priority}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
      <div className="display displayColumn taskListForDashboard padding-24 gap-12 borderRadius-8">
        <div className="taskListDashboardheader padding-12 display alignItemsC justifyItemsSpaceBtw">
          <h2>Today's Task</h2>
          <button className="dashboardViewAll btnOutlineBorder fontBold" onClick={() => navigate('/tasks')}>
            view all
          </button>
        </div>
        <div>{currentDate()}</div>
      </div>
  );
};

export default TaskListDisplay;
