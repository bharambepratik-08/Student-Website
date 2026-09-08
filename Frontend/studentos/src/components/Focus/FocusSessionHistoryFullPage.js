import React, { useContext } from "react";
import FocusConetext from "../../context/Focus/FocusContext";

const FocusSessionHistoryFullPage = ({ onClose }) => {
  const context = useContext(FocusConetext);
  const { focusSession } = context;

  const timeExpansion = (v) => {
    const timing = v;
    if (timing >= 60) {
      const minutes = Math.floor(timing / 60);
      const minutess = timing - minutes * 60;
      return `${minutes}h ${minutess}m`;
    } else {
      return `${timing}m`;
    }
  };

  function formatDate(isoString) {
    const date = new Date(isoString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();

    return `${month}/${day}/${year}`;
  }

  return (
    <div className="fullHistoryDisplayPage gap-24 borderRadius-8 display displayColumn alignItemsC justifyItemsC padding-24">
      <div className="display alignItemsC justifyItemsSpaceBtw topBarOfHistoryFocusPage">
        <div className="display gap-8 alignItemsC recentSessionIH3">
          <i class="fa-solid fa-clock-rotate-left"></i>
          <h3>Session History</h3>
        </div>
        <button
          className="ClossAddTaskBtn btnOutlineBorder"
          type="button"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark fa-xl"></i>
        </button>
      </div>
      <div className="mainPartToHistory borderRadius-16 padding-12 display displayColumn alignItemsC">
        {focusSession.map((focus) => {
          return (
            <div className="specialHistoryFocus padding-12 display justifyItemsSpaceBtw alignItemsC">
              <div className="titleDesDiv display gap-12">
                <div className="focusSessionHistoryLogoComplete display alignItemsC justifyItemsC">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div>
                  <h4>{focus.title}</h4>
                  <p>{focus.description}</p>
                </div>
              </div>
              <div className="BrkFocusTimerWithDate display displayColumn gap-4">
                <p>
                  {timeExpansion(focus.duration)} /{" "}
                  {timeExpansion(focus.breakDuration)}
                </p>
                <p>{formatDate(focus.date)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FocusSessionHistoryFullPage;
