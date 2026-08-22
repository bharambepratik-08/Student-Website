import React, { useContext } from "react";
import TaskContext from "../../context/tasks/TaskContext";

const TasksCard = ({
  key,
  id,
  title,
  description,
  priority,
  due,
  time,
  tag,
}) => {
  const context = useContext(TaskContext);
  const { deleteTask } = context;

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

  const formattedTime = (() => {
    if (!time) return "";

    const [hours, minutes] = time.split(":");
    let h = parseInt(hours, 10);

    const period = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;

    return `${String(h).padStart(2, "0")}:${minutes} ${period}`;
  })();

  const formattedDue = new Date(due).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

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

  return (
    <div
      className="TaskCard borderRadius-16 padding-12 display"
      style={{ borderLeft: `6px ${borderColor()} solid` }}
    >
      <div className="TaskCardBTN display displayColumn gap-12">
        <button className="btnOutlineBorder TaskCardSpcBtn">
          <i class="fa-solid fa-check"></i>
        </button>
        <button
          className="btnOutlineBorder TaskCardSpcBtn"
          onClick={() => {
            deleteTask(id);
          }}
        >
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
      <div className="padding-8 TaskCardDetails">
        <div className="TaskCardTitle padding-4">
          <h4>{title}</h4>
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
    </div>
  );
};

export default TasksCard;
