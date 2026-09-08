import React, { useContext } from "react";
import TaskContext from "../../context/tasks/TaskContext";

const TaskListDisplay = () => {
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

  return (
    <div>
      <div className="display displayColumn taskListForDashboard padding-24 borderRadius-8">
        <div className="taskListDashboardheader padding-12 display alignItemsC justifyItemsSpaceBtw">
          <h2>Today's Task</h2>
          <button className="dashboardViewAll btnOutlineBorder fontBold">
            view all
          </button>
        </div>
        <div>
          {tasks.map((task) => {
            return (
              <div className="display alignItemsC padding-12">
                <div>
                  <h3>{task.title}</h3>
                  <p className="taskDisplayDashP">Due today at {task.time}</p>
                </div>
                <div
                  className="InformationBox PriorityCard borderRadius-8 display alignItemsC justifyItemsC"
                  style={{ backgroundColor: `${borderColor()}80` }}
                >
                  <p className="TaskCardDetailsPTag">
                    {PrefixPriority(task.priority)} {task.priority}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TaskListDisplay;
