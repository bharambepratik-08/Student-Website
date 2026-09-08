import React, { useContext, useEffect, useState } from "react";
import FocusConetext from "../../context/Focus/FocusContext";
import FocusSessionHistoryFullPage from "./FocusSessionHistoryFullPage";

const FocusSessionHistoyDisplay = () => {

  // context for getting the list for focus session
  const context = useContext(FocusConetext);
  const { focusSession, getFocusSession } = context;

  useEffect(() => {
    getFocusSession();
    // eslint-disable-next-line
  }, []);


  // changing the time format 
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

  const [isDisplayHistoryFullPageOn, setisDisplayHistoryFullPageOn ] = useState(false); // for DisplayHistoryFullPage.js 

  const list = (focusSession || []).slice(0, 3);

  return (
    <div className="displayHistoryFocussSession display displayColumn gap-24 padding-24 borderRadius-16">
      <div className="display justifyItemsSpaceBtw alignItemsC recentSessionIH3">
        <div className="display gap-12 alignItemsC recentSessionIH3">
          <i class="fa-solid fa-clock-rotate-left"></i>
          <h3>Recent Session</h3>
        </div>
        <div>
          <button className="btnOutlineBorder viewAllBtnforSessionHistory" onClick={() => {setisDisplayHistoryFullPageOn(true)}}>view all</button>
        </div>
      </div>
      <div className="display displayColumn gap-12">
        {list.map((focus) => {
          return (
            <div className="display justifyItemsSpaceBtw alignItemsC">
              <div className="focusSessionHistoryDisplayTitle display alignItemsC gap-12">
                <div className="focusSessionHistoryLogoComplete display alignItemsC justifyItemsC">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="display displayColumn gap-8">
                  <p className="fontBold">{focus.title}</p>
                  <p className="focusDescription">{focus.description}</p>
                </div>
              </div>
              <p>
                {timeExpansion(focus.duration)} /{" "}
                {timeExpansion(focus.breakDuration)}
              </p>
            </div>
          );
        })}
      </div>
      {isDisplayHistoryFullPageOn && (
        <div
          className="backdrop"
          onClick={() => setisDisplayHistoryFullPageOn(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FocusSessionHistoryFullPage
              onClose={() => setisDisplayHistoryFullPageOn(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FocusSessionHistoyDisplay;
