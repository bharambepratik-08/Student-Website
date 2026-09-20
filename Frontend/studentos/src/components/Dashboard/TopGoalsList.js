import React, { useContext, useEffect } from "react";
import GoalContext from "../../context/Goals/GoalsContext";

const TopGoalsList = () => {
  const context = useContext(GoalContext);
  const { goals , getgoals } = context;

  useEffect(() => {
      getgoals();
      // eslint-disable-next-line
    }, []);

  return (
    <div className="display displayColumn gap-8 borderRadius-16 TopGoalsDivDash padding-24">
      <div className="TopGoalsTitle padding-12">
        <h2>Top Goals</h2>
      </div>
      <div className="TopGoalList padding-12">{goals.map((e) => {
        return (
          <div key={e.title}>
            <p>{e.title}</p>
            <div className="bar-sspec">
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
      })}</div>
    </div>
  );
};

export default TopGoalsList;
