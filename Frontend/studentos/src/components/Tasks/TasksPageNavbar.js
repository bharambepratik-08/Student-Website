import React from "react";

const TasksPageNavbar = () => {
  return (
    <div className="HeaderTasksNavbar display alignItemsC justifyItemsC">
      <div className="TasksPageNavbar display alignItemsC justifyItemsSpaceBtw padding-24">
        <div className="LeftNavbarTasks">
          <div className="TasksPageNavbarText">
            <h1>Tasks</h1>
            <p className="TaskPageNavBarPTag">Manage and track your action items.</p>
          </div>
        </div>
        {/* <div className="RightNavbarTasks">
          <input
            type="text"
            placeholder="Search tasks..."
            className="SearchBarTasksInput borderRadius-8 btnOutlineBorder padding-12"
          />
        </div> */}
      </div>
    </div>
  );
};

export default TasksPageNavbar;
