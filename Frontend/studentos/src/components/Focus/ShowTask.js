import React, { useContext } from "react";
import TaskContext from "../../context/tasks/TaskContext";

const ShowTask = ({ onClose }) => {
  const context = useContext(TaskContext);
  const { tasks, completeTask } = context;

  const selectiveList = tasks.filter((task) => {
    return !task.completed && task.focusSession;
  });

  return (
    <div className="ShowTaskSelectorForm display displayColumn borderRadius-8 padding-24 gap-24">
      <div className="headingTaskSelectorFocus display alignItemsC justifyItemsC displayColumn gap-12">
        <div className="display alignItemsC justifyItemsSpaceBtw width-100">
          <h2>Select A Task</h2>
          <button
          className="ClossAddTaskBtn btnOutlineBorder"
          type="button"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark fa-xl"></i>
        </button>
        </div>
        <p>
          Select a task and the session will be added to it and after the
          session task will be marked up completed
        </p>
      </div>
      <div className="TaskListSelectorFocus">
        {selectiveList.map((task) => {
          return (
            <button className="taskSelectorButtonFocus btnOutlineBorder borderRadius-8 padding-12">
              <div className="taskSelectorDivFocus display alignItemsC justifyItemsSpaceBtw">
                <h3>{task.title}</h3>
                <h3>time(TODO)</h3>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShowTask;
