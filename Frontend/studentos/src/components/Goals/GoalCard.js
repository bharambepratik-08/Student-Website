import React, { useContext, useState } from "react";
import GoalContext from "../../context/Goals/GoalsContext";
import UpdateProgress from "../Goals/UpdateProgress";

const GoalCard = (props) => {
  const context = useContext(GoalContext);
  const { deleteGoal } = context;

  const { title, tag, date, progress, des, complete, id } = props;

  const formattedDue = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const [isUpdateProgress, setIsUpdateProgress] = useState(false);

  return (
    <div>
      <div className="GoalCard padding-12 display displayColumn borderRadius-8">
        <div className="goalCardUpper display padding-12 alignItemsC justifyItemsSpaceBtw">
          <div className="goalCardTitle display displayColumn gap-4">
            <p className="goalTitle">{title}</p>
            <p>{des}</p>
          </div>
          <div className="goalCardTag borderRadius-16">
            <p>{tag}</p>
          </div>
        </div>
        <div className="goalCardProgress padding-12 display displayColumn gap-8">
          <div className="progressInfo display alignItemsC justifyItemsSpaceBtw">
            <p>Progress</p>
            <p>{progress}%</p>
          </div>
          <div class="bar-sspec">
            <div
              style={{
                width: `${progress}%`,
                background: "green",
                height: "100%",
              }}
            />
          </div>
        </div>
        <div className="goalCardDateInfo padding-12 display justifyItemsSpaceBtw">
          {formattedDue}
          <div className="display gap-8">
            {!complete && <button
              className="btnOutlineBorder borderRadius-16 updateProgressButton"
              onClick={() => {
                setIsUpdateProgress(true);
              }}
            >
              Update Progress
            </button>}
            <button
              className="btnOutlineBorder borderRadius-16 updateProgressButton"
              onClick={() => deleteGoal(id)}
            >
              Delete Goal
            </button>
          </div>
        </div>
      </div>
      {isUpdateProgress && (
        <div className="backdrop" onClick={() => setIsUpdateProgress(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <UpdateProgress
              range={progress}
              id={id}
              onClose={() => setIsUpdateProgress(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalCard;
