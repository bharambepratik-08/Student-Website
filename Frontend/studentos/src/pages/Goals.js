import React, { useContext, useEffect } from "react";
import GoalsTopBar from "../components/Goals/GoalsTopBar";
import AddGoal from "../components/Goals/AddGoal";
import GoalCard from "../components/Goals/GoalCard";
import GoalContext from "../context/Goals/GoalsContext";

const Goals = () => {
  const context = useContext(GoalContext);
  const { goals, getgoals } = context;

  useEffect(() => {
    getgoals();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="GoalPage padding-24">
      <GoalsTopBar />
      {/* <AddGoal />  */}
      <div className="display gap-24 alignItemsC goalGrids padding-24">
        {goals.map((goal) => {
          return (
            <GoalCard
              title={goal.title}
              tag={goal.tag}
              date={goal.date}
              progress={50}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Goals;
