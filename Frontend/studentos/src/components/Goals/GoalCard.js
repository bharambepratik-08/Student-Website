import React, { useContext } from "react";

const GoalCard = (props) => {
  const { title, tag, date, progress } = props;


  const formattedDue = new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="GoalCard padding-12 display displayColumn borderRadius-8">
      <div className="goalCardUpper display padding-12 alignItemsC justifyItemsSpaceBtw">
        <div className="goalCardTitle">
          <p className="goalTitle">{title}</p>
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
              background: progress > 90 ? "black" : "green",
              height: "100%",
            }}
          />
        </div>
      </div>
      <div className="goalCardDateInfo padding-12">{formattedDue}</div>
    </div>
  );
};

export default GoalCard;
