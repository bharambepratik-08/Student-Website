import React from "react";

const FocusTaskExistForm = ({ onClose, OpenNext}) => {
  return (
    <div className="padding-24 display displayColumn gap-24">
      <div className="display alignItemsC gap-24">
        <div>
          <h3>What are you focusing on ?</h3>
          <p>
            Do you want to focus on a existing task or create a new focus
            session
          </p>
        </div>
        <button
          className="ClossAddTaskBtn btnOutlineBorder"
          type="button"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark fa-xl"></i>
        </button>
      </div>
      <div className="display displayColumn gap-12">
        <button className="ExistingTaskSelector btnOutlineBorder borderRadius-16 padding-24 display gap-24 alignItemsC">
          <i class="fa-solid fa-table-list"></i>
          <div className="existingTaskText">
            <h3>Focus on a Task</h3>
            <p>Choose from your existing task and start focusing</p>
          </div>
        </button>
        <button className="ExistingTaskSelector btnOutlineBorder borderRadius-16 padding-24 display gap-24 alignItemsC" onClick={OpenNext}>
          <i class="fa-solid fa-plus"></i>
          <div className="existingTaskText">
            <h3>New Focus Session</h3>
            <p>Create a custom focus session without a task</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FocusTaskExistForm;
