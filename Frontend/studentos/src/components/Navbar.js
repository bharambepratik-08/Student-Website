import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onOpenAddTask }) => {
  return (
    <>
    {/* NavBar Component */}
      <div className="navBar display justifyItemsSpaceBtw displayColumn">
        <div className="navBarTopDiv display displayColumn">
          <div className="top">
            <h2 className="brandHead">StudentOs</h2>
            <p>Productivity suite</p>
          </div>
          <div className="addTask">
            <button
              type="button"
              onClick={onOpenAddTask}
              className="addTaskBtn btnOutlineBorder borderRadius-8 colorWhite display alignItemsC justifyItemsC padding-12"
            >
              <i className="fa-solid fa-plus"></i>
              Add Task
            </button>
          </div>
          <div className="navBarBtnDir display alignItemsC displayColumn borderRadius-8 ">
            <Link
              to="/dashboard"
              className="navBarRouterBtn dashboardNavBtn btnOutlineBorder borderRadius-8 bgTrans display alignItemsC padding-12"
            >
              <i className="fa-solid fa-tachograph-digital"></i>
              Dashboard
            </Link>
            <Link
              to="/tasks"
              className="navBarRouterBtn tasksNavBtn btnOutlineBorder borderRadius-8 bgTrans display alignItemsC padding-12"
            >
              <i className="fa-regular fa-circle-check"></i>
              Tasks
            </Link>
            <Link
              to="/calendar"
              className="navBarRouterBtn calendarNavBtn btnOutlineBorder borderRadius-8 bgTrans display alignItemsC padding-12"
            >
              <i className="fa-regular fa-calendar-days"></i>
              Calendar
            </Link>
            <Link
              to="/focus"
              className="navBarRouterBtn focusNavBtn btnOutlineBorder borderRadius-8 bgTrans display alignItemsC padding-12"
            >
              <i className="fa-solid fa-stopwatch"></i>
              Focus
            </Link>
            <Link
              to="/goals"
              className="navBarRouterBtn goalsNavBtn btnOutlineBorder borderRadius-8 bgTrans display alignItemsC padding-12"
            >
              <i className="fa-solid fa-crosshairs"></i>
              Goals
            </Link>
            <Link
              to="/analytics"
              className="navBarRouterBtn analyticsNavBar btnOutlineBorder borderRadius-8 bgTrans display alignItemsC padding-12"
            >
              <i className="fa-solid fa-chart-line"></i>
              Analytics
            </Link>
            <Link
              to="/notification"
              className="navBarRouterBtn notificationNavBtn btnOutlineBorder borderRadius-8 bgTrans display alignItemsC padding-12"
            >
              <i className="fa-regular fa-bell"></i>
              Notification
            </Link>
            <Link
              to="/setting"
              className="navBarRouterBtn settingNavBtn btnOutlineBorder borderRadius-8 bgTrans display alignItemsC padding-12"
            >
              <i className="fa-solid fa-gear"></i>
              Setting
            </Link>
          </div>
        </div>
        <div className="profileUserIden display alignItemsC justifyItemsC">
          ----
        </div>
      </div>
    </>
  );
};

export default Navbar;
