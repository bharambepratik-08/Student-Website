import React, { useContext, useEffect } from "react"; 
import FocusConetext from "../../context/Focus/FocusContext";

const FocusSessionHistoyDisplay = () => {
  const context = useContext(FocusConetext);
  const { focusSession, getFocusSession } = context; 

  useEffect(() => {
    getFocusSession();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="displayHistoryFocussSession display displayColumn gap-12 padding-24 borderRadius-16">
      <div>
        <h3>Recent Session</h3>
      </div>
      <div>
        {focusSession.map((focus) => {
            return (
                <div>
                    <p>
                        {focus.title}
                    </p>
                    <p>
                        {focus.duration} / {focus.breakDuration}
                    </p>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default FocusSessionHistoyDisplay;