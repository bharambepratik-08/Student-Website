import React from "react";

const GoalsTopBar = () => {
  return (
    <div className="display alignItemsC justifyItemsSpaceEvenly">
      <div>
        <h1>Goals</h1>
        <p className="goalPageTopP">Track and manage your long-term objectives.</p>
      </div>
      <div>
        <button
              type="button"
              // onClick={onOpenAddTask}
              className="addTaskBtn btnOutlineBorder borderRadius-8 colorWhite display alignItemsC justifyItemsC padding-12"
            >
              <i className="fa-solid fa-plus"></i>
              Add Goal
            </button>
      </div>
    </div>
  );
};

export default GoalsTopBar;
