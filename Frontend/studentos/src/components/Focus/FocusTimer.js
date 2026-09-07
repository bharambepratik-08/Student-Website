import React, { useState, useEffect } from "react";
import SaveToHistoryFocusSession from "./SaveToHistoryFocusSession";
import FocusTaskExistForm from "./FocusTaskExistForm";
import FocusForm from "./FocusForm";
import ShowTask from "./ShowTask";

const FocusTimer = (props) => {
  const [mode, setMode] = useState("focus");
  const [minute, setMinute] = useState(props.mintimer); // to set up the minutes 
  const [hour, setHour] = useState(props.hrtimer); // to set up the hours 
  const [second, setSecond] = useState(props.sectimer); // to set up the seconds 

  const [Brkminute, setBrkMinute] = useState(props.Brkmintimer); // to set up the minutes for the break 
  const [Brkhour, setBrkHour] = useState(props.Brkhrtimer); // to set up the hours for the break 
  const [Brksecond, setBrkSecond] = useState(props.Brksectimer); // to set up the seconds for the break 

  const [initialTotalSeconds, setInitialTotalSeconds] = useState(
    props.hrtimer * 3600 + props.mintimer * 60 + props.sectimer,
  ); // sets up the timer inital start for the focus session 

  const brkTimerhr = Brkhour * 60; 
  const brkTotalTimer = brkTimerhr + Brkminute;

  const setTimerFucntion = (hr, min, sec) => {
    const h = parseInt(hr) || 0;
    const m = parseInt(min) || 0;
    const s = parseInt(sec) || 0;

    setHour(hr);
    setMinute(min);
    setSecond(sec);

    const newTotalSeconds = h * 3600 + m * 60 + s;

    setTimer(newTotalSeconds);
    setInitialTotalSeconds(newTotalSeconds);
  }; // used to set the new focus session timer 

  const setBrkFucntion = (hr, min, sec) => {
    const h = parseInt(hr) || 0;
    const m = parseInt(min) || 0;
    const s = parseInt(sec) || 0;
    setBrkHour(hr);
    setBrkMinute(min);
    setBrkSecond(sec);

    const totalBreakSeconds = h * 3600 + m * 60 + s;
    setSmallBreak(totalBreakSeconds);
  }; // used to set the new break session timer 

  const timerSettingProps = (v) => {
    const minutes = Math.floor(v / 60);
    const minutess = v - minutes * 60;

    setHour(minutes);
    setMinute(minutess);

    const x = parseInt(Number(minutes) * 3600 + Number(minutess) * 60);

    setTimer(x);
    setInitialTotalSeconds(x);
  }; // used as props to pass on 

  const minSecTimer = minute * 60;
  const hrSecTimer = hour * 60 * 60;

  const totalTimer = hrSecTimer + minSecTimer + second;
  const [timer, setTimer] = useState(totalTimer);

  const [smallBreak, setSmallBreak] = useState(5);

  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const [isPlayTimer, setIsPlayTimer] = useState(false);
  const [isPlayForm, setIsPlayForm] = useState(true);
  const [isSaveToHistoryFocusSession, setisSaveToHistoryFocusSession] = useState(false); // for the SaveToHistoryFocusSession.js
  const [isFocusTaskExistForm, setisFocusTaskExistForm] = useState(false); // for the FocusTaskExistForm.js
  const [isFocusForm, setisFocusForm] = useState(false); // for the FocusForm.js
  const [isShowTask, setisShowTask] = useState(false); // for the ShowTask.js

  
  // resets the stopwatch to the promodo 
  const resetPromo = () => {
    setHour(0);
    setMinute(25);
    setSecond(0);
    setTimer(1500);
    setInitialTotalSeconds(1500);
  };

  const breakTimer = smallBreak * 60;

  useEffect(() => {
    let timerId = null;

    if (isActive && timer > 0) {
      timerId = setInterval(() => {
        setTimer((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isActive && timer === 0) {
      clearInterval(timerId);
      if (!isBreak) {
        setIsBreak(true);
        setTimer(smallBreak);
      } else {
        setIsBreak(false);
        setIsActive(false);
        setTimer(totalTimer);
      }
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  }, [isActive, isBreak, timer, breakTimer, totalTimer, smallBreak]);

  const handleReset = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimer(totalTimer);
    const resetTotal = hour * 3600 + minute * 60 + second;
    setTimer(resetTotal);
  };

  const totalTime = isBreak ? breakTimer : totalTimer;

  // below code is for the stopwatch that we see on the website in focus session 

  const displayHours = Math.floor(timer / 3600);
  const minutes = Math.floor((timer % 3600) / 60);
  const seconds = timer % 60;

  const displayTime =
    displayHours > 0
      ? `${String(displayHours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
      : `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const size = 300;
  const strokeWidth = 8;
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const totalDurationForProgress = isBreak
    ? smallBreak
    : initialTotalSeconds;
  const percentage = (timer / totalDurationForProgress) * 100;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;


  // used to convert the play button to start and again for the form to open 
  const PlayTrueFalse = () => {
    if (isPlayForm) {
      setIsPlayForm(false);
      setIsPlayTimer(true);
    } else if (isPlayTimer) {
      setIsPlayForm(true);
      setIsPlayTimer(false);
    }
  };

  return (
    <div className="display displayColumn alignItemsC justifyItemsC gap-24">
      <div className="display displayColumn alignItemsC justifyItemsC gap-24">
        <h1>{isBreak ? "Break Time" : "Focus Mode"}</h1>
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
              setisSaveToHistoryFocusSession(true);
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
            PlayTrueFalse();
            resetPromo();
          }}
          className="btnOutlineBorder btnTimerUses"
        >
          <i className="fa-solid fa-rotate-left"></i>
        </button>
      </div>

      {/* First page asking whether to save the focus session or not*/}
      {isSaveToHistoryFocusSession && (
        <div className="backdrop" onClick={() => setisSaveToHistoryFocusSession(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <SaveToHistoryFocusSession
              onClose={() => setisSaveToHistoryFocusSession(false)}
              NextForm={() => setisFocusTaskExistForm(true)}
              PlayBtn={() => {
                PlayTrueFalse();
              }}
            />
          </div>
        </div>
      )}

      {/* If Yes to save the focus session then it will procced here to ask whether to add new focus session or work on a task */}
      {isFocusTaskExistForm && (
        <div className="backdrop" onClick={() => setisFocusTaskExistForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FocusTaskExistForm
              onClose={() => setisFocusTaskExistForm(false)}
              OpenNext={() => {
                setisFocusForm(true);
                setisFocusTaskExistForm(false);
              }}
              TaskSelector={() => setisShowTask(true)}
            />
          </div>
        </div>
      )}

      {/* If user wants to add the focus session then he can add it via this form */}
      {isFocusForm && (
        <div className="backdrop" onClick={() => setisSaveToHistoryFocusSession(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FocusForm
              onClose={() => setisFocusForm(false)}
              changeTimerBtn={() => {
                PlayTrueFalse();
              }}
              valTrue={() => {
                return true;
              }}
              setTimerFucntion={setTimerFucntion}
              setBrkFucntion={setBrkFucntion}
            />
          </div>
        </div>
      )}

      {/* If user wants to work on a existing task then he can select from list */}
      {isShowTask && (
        <div
          className="backdrop"
          onClick={() => setisShowTask(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <ShowTask
              onClose={() => setisShowTask(false)}
              changeTimerBtn={() => {
                PlayTrueFalse();
              }}
              timerSetting={(v) => {
                timerSettingProps(v);
                PlayTrueFalse();
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FocusTimer;
