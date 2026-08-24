import React, { useState, useEffect } from "react";
import SaveToHistoryFocusSession from "./SaveToHistoryFocusSession";
import FocusTaskExistForm from "./FocusTaskExistForm";
import FocusForm from "./FocusForm";

const FocusTimer = (props) => {
  //   const [mode, setMode] = useState("focus");

  const minSecTimer = props.mintimer * 60;

  const hrSecTimer = (props.hrtimer * 60) * 60;

  const totalTimer = minSecTimer + hrSecTimer + props.sectimer;

  const [timer, setTimer] = useState(totalTimer);
  const [smallBreak, setSmallBreak] = useState(5);

  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const [isPlayTimer, setIsPlayTimer] = useState(false);
  const [isPlayForm, setIsPlayForm] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [IsTaskSelectorOpen, setIsTaskSelectorOpen] = useState(false);
  const [isFocusOpen, setIsFocusOpen] = useState(false);

  const [valTrueUse, setValTrueUse] = useState(true)

  const breakTimer = smallBreak * 60;

  useEffect(() => {
    let timerId = null;

    if (isActive && timer > 0) {
      timerId = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && timer === 0) {
      clearInterval(timerId);
      setIsBreak(!isBreak);
      setTimer(!isBreak ? breakTimer : totalTimer);
      alert(
        isBreak
          ? "Break is over! Time to focus."
          : "Work session done! Take a break.",
      );
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isActive, isBreak, timer, breakTimer, totalTimer]);

  const handleReset = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimer(totalTimer);
  };

  const totalTime = isBreak ? breakTimer : totalTimer;

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const displayTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const size = 300;
  const strokeWidth = 8;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const percentage = (timer / totalTime) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="display displayColumn alignItemsC justifyItemsC gap-24">
      <div className="display displayColumn alignItemsC justifyItemsC gap-24">
        <h2>{isBreak ? "Break Time" : "Focus Mode"}</h2>
        <div
          className="countDownDiv display alignItemsC justifyItemsC displayColumn"
          style={{ width: size + 8, height: size + 8 }}
        >
          <div style={{ position: "relative", width: size, height: size }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="transparent"
                stroke="#e5e7eb"
                strokeWidth={strokeWidth}
              />
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="transparent"
                stroke={
                  isBreak ? "#10b981" : "var(--on-secondary-fixed-variant)"
                } // Green for break, Blue for focus
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                transform={`rotate(-90 ${center} ${center})`}
                style={{ transition: "stroke-dashoffset 1s linear" }} // 1s linear makes it tick smoothly with the timer
              />
            </svg>

            {/* Center Text (Time Remaining) */}
            <div className="FocusShowTimeDiv display alignItemsC justifyItemsC displayColumn">
              {displayTime}
              <div className="timeRemaning display alignItemsC justifyItemsC">
                Time Remaining
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="display gap-12">
        <button
          className="btnOutlineBorder btnTimerUses"
          onClick={() => {
            setIsActive(false);
          }}
        >
          <i className="fa-solid fa-pause"></i>
        </button>
        {isPlayForm && (
          <button
            className="btnOutlineBorder btnTimerUses"
            onClick={() => {
              setIsFormOpen(true);
            }}
          >
            <i className="fa-solid fa-play"></i>
          </button>
        )}
        {isPlayTimer && (
          <button
            className="btnOutlineBorder btnTimerUses"
            onClick={() => {
              setIsActive(true);
            }}
          >
            <i className="fa-solid fa-play"></i>
          </button>
        )}
        <button
          onClick={() => {
            handleReset();
            setIsPlayForm(true);
            setIsPlayTimer(false);
          }}
          className="btnOutlineBorder btnTimerUses"
        >
          <i className="fa-solid fa-rotate-left"></i>
        </button>
      </div>
      {isFormOpen && (
        <div className="backdrop" onClick={() => setIsFormOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <SaveToHistoryFocusSession
              onClose={() => setIsFormOpen(false)}
              NextForm={() => setIsTaskSelectorOpen(true)}
              PlayBtn={() => {
                setIsPlayForm(false);
                setIsPlayTimer(true);
              }}
            />
          </div>
        </div>
      )}

      {IsTaskSelectorOpen && (
        <div className="backdrop" onClick={() => setIsTaskSelectorOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FocusTaskExistForm
              onClose={() => setIsTaskSelectorOpen(false)}
              OpenNext={() => {
                setIsFocusOpen(true);
                setIsTaskSelectorOpen(false);
              }}
            />
          </div>
        </div>
      )}
      {isFocusOpen && (
        <div className="backdrop" onClick={() => false}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FocusForm
              onClose={() => setIsFocusOpen(false)}
              changeTimerBtn={() => {
                setIsPlayForm(false);
                setIsPlayTimer(true);
              }}
              valTrue={() => {return true}}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FocusTimer;
