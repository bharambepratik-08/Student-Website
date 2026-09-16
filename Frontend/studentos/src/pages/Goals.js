import React, { useContext, useEffect, useState } from "react";
import GoalsTopBar from "../components/Goals/GoalsTopBar";
import AddGoal from "../components/Goals/AddGoal";
import GoalCard from "../components/Goals/GoalCard";
import GoalContext from "../context/Goals/GoalsContext";

const Goals = () => {
  const context = useContext(GoalContext);
  const { goals, getgoals } = context;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getgoals();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="GoalPage padding-24">
      <GoalsTopBar onClick={() => setIsOpen(true)} />
      {isOpen && (
        <div className="backdrop" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <AddGoal onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
      <div className="display gap-24 alignItemsC goalGrids padding-24">
        {goals.map((goal) => {
          return (
            <GoalCard
              title={goal.title}
              tag={goal.tag}
              date={goal.date}
              progress={goal.bar}
              des={goal.description}
              complete={goal.completed}
              id={goal._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Goals;
