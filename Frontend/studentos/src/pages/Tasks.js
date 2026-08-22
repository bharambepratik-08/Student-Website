import React, { useContext, useEffect } from "react";
import TasksPageNavbar from "../components/Tasks/TasksPageNavbar";
import TasksCard from "../components/Tasks/TasksCard";
import TaskContext from "../context/tasks/TaskContext";

const Tasks = () => {
  const context = useContext(TaskContext);
  const { tasks, getTasks, deleteTask } = context;

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedToday = `${year}-${month}-${day}`;

  const currentDate = () => {
    const tasklist = tasks.filter((task) => {
      const taskDateOnly = task.due.split("T")[0];
      return taskDateOnly === formattedToday;
    });

    return tasklist;
  };

  const upcoming = () => {
    const upcomingList = tasks.filter((task) => {
      const taskDateOnly = task.due.split("T")[0];
      return taskDateOnly > formattedToday;
    });

    return upcomingList;
  };

  const pending = () => {
    const pendingList = tasks.filter((task) => {
      const taskDateOnly = task.due.split("T")[0];
      return taskDateOnly < formattedToday;
    });

    return pendingList;
  };

  return (
    <div className="TaskPage padding-24">
      <TasksPageNavbar />

      <div className="TaskCardCSection display">
        <div className="todayTaskSection">
          <h2 className="padding-left-12">Today's Task</h2>
          <div className="TaskCardAll padding-12 display displayColumn gap-12">
            {currentDate().map((task) => {
              return (
                <TasksCard
                  key={task._id}
                  deletetask={deleteTask}
                  id={task._id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  due={task.due}
                  time={task.time}
                  tag={task.tags}
                />
              );
            })}
          </div>
        </div>

        <div className="UpcomingTaskSection">
          <h2 className="padding-left-12">Upcoming Task</h2>
          <div className="TaskCardAll padding-12 display displayColumn gap-12">
            {upcoming().map((task) => {
              return (
                <TasksCard
                  key={task._id}
                  deletetask={deleteTask}
                  id={task._id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  due={task.due}
                  time={task.time}
                  tag={task.tags}
                />
              );
            })}
          </div>
        </div>

        <div className="PendingTaskSection">
          <h2 className="padding-left-12">Pending Task</h2>
          <div className="TaskCardAll padding-12 display displayColumn gap-12">
            {pending().map((task) => {
              return (
                <TasksCard
                  key={task._id}
                  deletetask={deleteTask}
                  id={task._id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  due={task.due}
                  time={task.time}
                  tag={task.tags}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
