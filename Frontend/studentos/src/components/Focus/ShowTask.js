import React, { useContext } from "react";
import TaskContext from "../../context/tasks/TaskContext";
import FocusConetext from "../../context/Focus/FocusContext";

const ShowTask = ({ onClose, timerSetting }) => {
  const context = useContext(TaskContext);
  const { tasks, completeTask } = context;

  const contextTwo = useContext(FocusConetext);
  const { addFocusSession } = contextTwo;

  const selectiveList = tasks.filter((task) => {
    return !task.completed && task.focusSession;
  });

  const timeExpansion = (v) => {
    const timing = v;
    if (timing >= 60) {
      const minutes = Math.floor(timing / 60);
      const minutess = timing - minutes * 60;
      return `${minutes}h ${minutess}m`;
    } else {
      return `${timing}m`;
    }
  };

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
      <div className="TaskListSelectorFocus display displayColumn gap-12">
        {selectiveList.map((task) => {
          return (
            <button
              className="taskSelectorButtonFocus btnOutlineBorder borderRadius-8 padding-12"
              onClick={() => {
                onClose();
                timerSetting(task.focusSessionTimer);
                addFocusSession(
                  task.title,
                  task.description,
                  task.focusSessionTimer,
                  task.brkSessionTimer
                );
              }}
            >
              <div className="taskSelectorDivFocus display alignItemsC justifyItemsSpaceBtw">
                <h3>{task.title}</h3>
                <h3>{timeExpansion(task.focusSessionTimer)}</h3>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShowTask;
