import React, { useContext, useState } from "react";
import TaskContext from "../../context/tasks/TaskContext";
import EditTask from "../Tasks/EditTask";

const TasksCard = (props) => {
  const { id, title, description, priority, due, time, tag, catogery, completed } = props;
  const context = useContext(TaskContext);
  const { deleteTask, completeTask, editTask } = context;

  // tell the border color for the card
  const borderColor = () => {
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
  const PrefixPriority = () => {
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

  // to make the time in 12hr format
  const formattedTime = (() => {
    if (!time) return "";

    const [hours, minutes] = time.split(":");
    let h = parseInt(hours, 10);

    const period = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    return `${String(h).padStart(2, "0")}:${minutes} ${period}`;
  })();

  // to make the date in the form dd/mm/yyyy
  const formattedDue = new Date(due).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  // to check that are there any tag and if there is a tag then to add the box for it
  const tagBox = () => {
    if (tag.length !== 0) {
      return (
        <div className="InformationBox borderRadius-8 display alignItemsC justifyItemsC">
          <p className="TaskCardDetailsPTag TaskPTagColor">{tag}</p>
        </div>
      );
    } else {
      return;
    }
  };

  // brings up the add task page with blured background
  const [isEditTaskOpen, setIsEditTaskOpen] = useState(false);

  const editTaskFn = (val) => {};

  return (
    <div
      className="TaskCard borderRadius-16 padding-12 display"
      style={{ borderLeft: `6px ${borderColor()} solid` }}
    >
      <div className="TaskCardBTN display displayColumn gap-12">
        {!completed && <button
          className="btnOutlineBorder TaskCardSpcBtn"
          onClick={() => {
            completeTask(id); // to make the task completed
          }}
        >
          <i class="fa-solid fa-check"></i>
        </button>}
        <button
          className="btnOutlineBorder TaskCardSpcBtn"
          onClick={() => {
            deleteTask(id); // to delete the task
          }}
        >
          <i class="fa-solid fa-trash"></i>
        </button>
        {!completed && <button
          className="btnOutlineBorder TaskCardSpcBtn"
          onClick={() => {
            editTaskFn(id); // to edit the task
            setIsEditTaskOpen(true);
          }}
        >
          <i class="fa-solid fa-pen"></i>
        </button>}
      </div>
      <div className="padding-8 TaskCardDetails">
        <div className="TaskCardTitle display alignItemsC padding-4 gap-8">
          <h4>{title}</h4>
          {completed && <div className="CompletedStatus borderRadius-16">
            <p>completed</p>
          </div>}
        </div>
        <div className="TaskCardDescription padding-4">
          <p className="TaskCardDescriptionPTag">{description}</p>
        </div>
        <div className="TaskCardInformationBox display alignItemsC gap-8">
          <div
            className="InformationBox PriorityCard borderRadius-8 display alignItemsC justifyItemsC"
            style={{ backgroundColor: `${borderColor()}80` }}
          >
            <p className="TaskCardDetailsPTag">
              {PrefixPriority()} {priority}
            </p>
          </div>
          {tagBox()}
          <div className="InformationBox borderRadius-8 display alignItemsC justifyItemsC">
            <p className="TaskCardDetailsPTag TaskPTagColor">{formattedTime}</p>
          </div>
          <div className="InformationBox borderRadius-8 display alignItemsC justifyItemsC">
            <p className="TaskCardDetailsPTag TaskPTagColor">{formattedDue}</p>
          </div>
        </div>
      </div>

      {isEditTaskOpen && (
        <div className="backdrop" onClick={() => setIsEditTaskOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <EditTask
              task={{
                id: id,
                title,
                description,
                priority,
                due,
                time,
                tag,
                catogery,
              }}
              onClose={() => setIsEditTaskOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TasksCard;
