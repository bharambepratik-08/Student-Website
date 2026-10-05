// This is for taking the last 90 days and upcoming 90 days tasks and goals for the shortlisting and making a short calendar where u see and only the dates where there is task......
import React, { useContext, useEffect } from "react";
import TaskContext from "../../context/tasks/TaskContext";
import GoalsContext from "../../context/Goals/GoalsContext";
import CalendarBlock from "./CalendarBlock";

const ComponentList = () => {
  const context = useContext(TaskContext);
  const { tasks, getTasks } = context;

  const contextTwo = useContext(GoalsContext);
  const { goals, getgoals } = contextTwo;

  useEffect(() => {
    getgoals();
    getTasks();
    // eslint-disable-next-line
  }, []);

  const date1 = new Date();
  const CalendarArray = [];

  const dateCheck = (date, title, name, numa, numb) => {
    if (!date) return;

    const targetDate = new Date(date).toISOString().split("T")[0];

    for (let i = numa; i < numb; i++) {
      const currentDate = new Date(date1);
      currentDate.setDate(date1.getDate() + i);

      if (currentDate.toISOString().split("T")[0] === targetDate) {
        CalendarArray.push({
          title: title,
          des: name,
          date: date,
        });
        break;
      }
    }
  };

  tasks.forEach((task) => {
    dateCheck(task.due, task.title, "Task", 0, 180);
  });

  goals.forEach((goal) => {
    dateCheck(goal.date, goal.title, "Goal", -90, 180);
  });

  return (
    <div>
      {CalendarArray.map((e) => {
        return (
          <p>
            <CalendarBlock title={e.title} date={e.date} des={e.des} />
          </p>
        );
      })}
    </div>
  );
};

export default ComponentList;
