import React from "react";
import ComponentList from "../components/Calendar/ComponentList";
import CalendarTopBar from "../components/Calendar/CalendarTopBar";

const Calendar = () => {
  return (
    <div className="CalendarPage">
      <div className="display padding-24">
        <CalendarTopBar />
      </div>
      <div className="LowerCalendar">
        <ComponentList />
      </div>
    </div>
  );
};

export default Calendar;
