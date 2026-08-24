import React, { useState, useContext } from "react";
import FocusContext from "../../context/Focus/FocusContext";

// Layout for the add task form (Frontend)
const FocusForm = ({ onClose, changeTimerBtn, valTrue }) => {
  // To clear the form after submit
  const context = useContext(FocusContext);
  const { addFocusSession } = context;

  const [hour, setHour]= useState(0)
  const [minute, setMinute]= useState(0)
  const [seconds, setSeconds]= useState(0)

  const timerDuration = `${hour}:${minute}:${seconds}`

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFocusSession(formData.title, formData.description, timerDuration);
    if (onClose) onClose();
  };

  return (
    // Frontend
    <div className="AddTaskDiv padding-24 borderRadius-16">
      <div className="UpperHeadAddTask display alignItemsC justifyItemsSpaceBtw padding-12">
        <h3>Add New Focus Session</h3>
        <button
          className="ClossAddTaskBtn btnOutlineBorder"
          type="button"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark fa-xl"></i>
        </button>
      </div>

      <div className="AddTaskForm padding-24">
        <form
          id="addTaskFormId"
          onSubmit={handleSubmit}
          className="display displayColumn gap-24"
        >
          <div className="TaskTitleInput display displayColumn gap-8">
            <p className="AddTaskParagraph">Focus Session Title</p>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. Prepare Q3 Marketing Report"
              className="InputBoxString padding-8"
              required
            />
          </div>

          <div className="TaskDescriptionInput display displayColumn gap-8">
            <p className="AddTaskParagraph">Focus Session Description</p>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Add any details, links, or notes"
              className="InputBoxString InputAddTask padding-8 TaskTextArea"
            />
          </div>

          {valTrue && <div className="SetReminderDiv padding-12 display alignItemsC justifyItemsSpaceBtw">
            <div class="timer-input">
              <input
                type="number"
                id="hours"
                min="0"
                max="23"
                placeholder="HH"
                name='duration'
                onChange={(e) => setHour(e.target.value)}
              />
              <span>:</span>
              <input
                type="number"
                id="minutes"
                min="0"
                max="59"
                placeholder="MM"
                onChange={(e) => setMinute(e.target.value)}
              />
              <span>:</span>
              <input
                type="number"
                id="seconds"
                min="0"
                max="59"
                placeholder="SS"
                onChange={(e) => setSeconds(e.target.value)}
              />
            </div>
          </div>}
        </form>
      </div>
      <div className="CancelAndAddBtn display alignItemsC justifyItemsFlexEnd padding-24">
        <div>
          <button
            type="button"
            className="btnOutlineBorder borderRadius-8 CancelBtn"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
        <div>
          <button
            type="submit"
            form="addTaskFormId"
            className="addTaskBtn AddBtn btnOutlineBorder borderRadius-8"
            onClick={changeTimerBtn}
          >
            Add Focus Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default FocusForm;
