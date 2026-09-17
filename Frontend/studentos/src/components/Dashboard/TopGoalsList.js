import React, { useContext } from "react";
import GoalContext from "../../context/Goals/GoalsContext";

const TopGoalsList = () => {
  const context = useContext(GoalContext);
  const { goals } = context;

  const TopGoals = () => {
    const top = [];
    
    top.concat(goals.filter((goal) => {
      return goal.bar > 70;
    }));

    return top.map((e) => {
      return (
        <div>
          <p>{e.title}</p>
          <div class="bar-sspec">
            <div
              style={{
                width: `${e.bar}%`,
                background: "green",
                height: "100%",
              }}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="display displayColumn gap-8 borderRadius-16 TopGoalsDivDash padding-24">
      <div className="TopGoalsTitle padding-12">
        <h2>Top Goals</h2>
      </div>
      <div className="TopGoalList padding-12">{TopGoals}</div>
      
    </div>
  );
};

export default TopGoalsList;
