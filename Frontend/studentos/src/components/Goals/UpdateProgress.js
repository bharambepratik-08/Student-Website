import React, { useContext, useState } from "react";
import GoalContext from "../../context/Goals/GoalsContext";

const UpdateProgress = ({ range, id, onClose }) => {
  const context = useContext(GoalContext);
  const { updateProgress, completeGoal } = context;

  const [progressValue, setProgressValue] = useState(range);

  const handleChange = (e) => {
    setProgressValue(e.target.value);
  };

  const handleSubmit = () => {
    updateProgress(id, progressValue);
    if(progressValue > 99) {
        completeGoal(id)
    }
    if (onClose) onClose();
  };


  return (
    <div className="updateProgressForm padding-12 display displayColumn">
      <div className="upperUpdateProgress display alignItemsC justifyItemsSpaceBtw padding-12">
        <h3>Update Progress</h3>
        <button
          className="ClossAddTaskBtn btnOutlineBorder"
          type="button"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark fa-xl"></i>
        </button>
      </div>
      <div className="updateProgressLower display displayColumn gap-8">
        <input
        className="progressBarinput"
          type="range"
          value={progressValue}
          name="progress"
          onChange={handleChange}
        />
        <button
          className="btnOutlineBorder borderRadius-16 updateProgressOnClickBtn"
          onClick={() => {
            handleSubmit();
          }}
        >
          Update Progress
        </button>
      </div>
    </div>
  );
};

export default UpdateProgress;
