import React, { useEffect, useContext, useState } from "react";
import TasksCard from "./TasksCard";
import TaskContext from "../../context/tasks/TaskContext";

const TaskPage = () => {
  const context = useContext(TaskContext);
  const { tasks, getTasks, deleteTask, completeTask } = context;
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    getTasks();
    // eslint-disable-next-line
  }, []);

  // to make the date in the format which comes from the server inorder to compare further
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedToday = `${year}-${month}-${day}`;

  // seperates task that are to be done today (& prints them)
  const currentDate = () => {
    const tasklist = tasks.filter((task) => {
      const taskDateOnly = task.due.split("T")[0];
      return taskDateOnly === formattedToday;
    });

    return (
      <div className="TaskCardCSection display">
        <div className="todayTaskSection">
          <h2 className="TaskSectionH2Tag padding-left-12">Today's Task</h2>
          <div className="TaskCardAll padding-12 display displayColumn gap-12">
            {tasklist.map((task) => {
              return (
                <TasksCard
                  key={task._id}
                  deletetask={deleteTask}
                  completeTask={completeTask}
                  id={task._id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  due={task.due}
                  time={task.time}
                  tag={task.tags}
                  completed={task.completed}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // seperates the task having due tmr or after tmr (& prints them)
  const upcoming = () => {
    const upcomingList = tasks.filter((task) => {
      const taskDateOnly = task.due.split("T")[0];
      return taskDateOnly > formattedToday && !task.completed;
    });

    return (
      <div className="UpcomingTaskSection">
        <h2 className="TaskSectionH2Tag padding-left-12">Upcoming Task</h2>
        <div className="TaskCardAll padding-12 display displayColumn gap-12">
          {upcomingList.map((task) => {
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
                completed={task.completed}
                completeTask={completeTask}
              />
            );
          })}
        </div>
      </div>
    );
  };

  // task that are marked uncompleted and the due date went off (& prints them)
  const incomplete = () => {
    const pendingList = tasks.filter((task) => {
      const taskDateOnly = task.due.split("T")[0];
      return taskDateOnly < formattedToday && !task.completed;
    });

    return (
      <div className="PendingTaskSection">
        <h2 className="TaskSectionH2Tag padding-left-12">Incomplete Task</h2>
        <div className="TaskCardAll padding-12 display displayColumn gap-12">
          {pendingList.map((task) => {
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
                completed={task.completed}
                completeTask={completeTask}
              />
            );
          })}
        </div>
      </div>
    );
  };

  // seperates the task that are completed (& prints them)
  const completeTaskList = () => {
    const completeList = tasks.filter((task) => {
      return task.completed;
    });

    return (
      <div className="CompleteTaskSection">
        <h2 className="TaskSectionH2Tag padding-left-12">Completed Task</h2>
        <div className="TaskCardAll padding-12 display displayColumn gap-12">
          {completeList.map((task) => {
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
                completed={task.completed}
                completeTask={completeTask}
              />
            );
          })}
        </div>
      </div>
    );
  };

  // all tasks (& prints them)
  const allTaskList = () => {
    return (
      <div className="allCardCSection display">
        <div className="todayTaskSection">
          <h2 className="TaskSectionH2Tag padding-left-12">All Task</h2>
          <div className="TaskCardAll padding-12 display displayColumn gap-12">
            {tasks.map((task) => {
              return (
                <TasksCard
                  key={task._id}
                  deletetask={deleteTask}
                  completeTask={completeTask}
                  id={task._id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  due={task.due}
                  time={task.time}
                  tag={task.tags}
                  completed={task.completed}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  // function that shows the task according to the selected filter
  const TaskFilter = (filter) => {
    switch (filter) {
      case "today":
        return currentDate();
      case "upcoming":
        return upcoming();
      case "incomplete":
        return incomplete();
      case "completed":
        return completeTaskList();
      case "all":
      default:
        return allTaskList();
    }
  };

  const buttons = [
    {
      id: "all",
      label: "All Task",
      class: "TaskSelectorAllBtn"
    },
    {
      id: "today",
      label: "Today",
      class: "TaskSelectorTodayBtn"
    },
    {
      id: "upcoming",
      label: "Upcoming",
      class: "TaskSelectorUpcomingBtn"
    },
    {
      id: "incomplete",
      label: "Incomplete",
      class: "TaskSelectorPendingBtn"
    },
    {
      id: "completed",
      label: "Completed",
      class: "TaskSelectorCompletedBtn"
    },
  ];

  return (
    <div className="TaskPageLowwerPart">
      <div className="TaskPageSelectionBtn display gap-8 padding-24">
        {buttons.map((btn) => {
          const isSelected = selectedFilter === btn.id;

          return (
            <button
              className={`TaskFilterBtn btnOutlineBorder borderRadius-16 ${btn.class}`}
              key={btn.id}
              onClick={() => setSelectedFilter(btn.id)}
              style={{
                backgroundColor: isSelected ? 'var(--secondary-container)' : 'var(--surface)',
                color: isSelected ? "#ffffff" : "var(--text-secondary)",
                border: `2px solid ${isSelected ? "var(--secondary-container)" : "var(--outline)"}`
              }}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
      <div className="TaskShowerDiv padding-12">{TaskFilter(selectedFilter)}</div>
    </div>
  );
};

export default TaskPage;
