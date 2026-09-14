import React, { useState, useContext } from "react";
import GoalContext from "../../context/Goals/GoalsContext";

const AddGoal = ({ onClose }) => {
  const context = useContext(GoalContext);
  const { addGoal } = context;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    tags: "",
    bar: "",
    category: "",
    date: "",
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
    addGoal(
      formData.title,
      formData.description,
      formData.duration || 0,
      formData.tags,
      formData.bar || 0,
      formData.category,
      formData.date,
    );
    if (onClose) onClose();
  };

  return (
    <div className="borderRadius-8 AddGoalForm display displayColumn alignItemsC justifyItemsC">
      <div className="AddTaskDiv padding-24 borderRadius-16">
        <div className="UpperHeadAddTask display alignItemsC justifyItemsSpaceBtw padding-12">
          <h3>Add Goal</h3>
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
              <p className="AddTaskParagraph">Goal Title</p>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. DSA Que, Studies, Assignment..."
                className="InputBoxString padding-8"
              />
            </div>

            <div className="TaskDescriptionInput display displayColumn gap-8">
              <p className="AddTaskParagraph">Goal Description</p>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Add any details, links, or notes"
                className="InputBoxString InputAddTask padding-8 TaskTextArea"
              />
            </div>

            <div className="InputAndSelectOptionDiv display">
              <div className="DueDateAndTimeDiv display alignItemsC justifyItemsSpaceBtw displayColumn gap-24">
                <div className="DueDateAddTaskInput DivDateTime display displayColumn gap-8">
                  <p className="AddTaskParagraph">Due Date</p>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="InputBoxDateTime padding-8"
                  />
                </div>
              </div>

              <div className="PriorityAndCatogeryDiv display alignItemsC justifyItemsSpaceBtw displayColumn gap-24">
                <div className="CatogeryAddTaskSelect DivPriorityCatogery display displayColumn gap-8">
                  <label className="AddTaskParagraph">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="SelectBoxPriorityCatogery padding-8 display justifyItemsFlexEnd"
                  >
                    <option value="hi">Work</option>
                    <option value="hello">Personal</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="TagsAddTask">
              <p className="AddTaskParagraph">Tags</p>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Add Tags"
                className="InputBoxString padding-8"
              />
            </div>
            <div className="display alignItemsC justifyItemsSpaceBtw">
              <div className="ReminderText display displayRow gap-8 alignItemsC">
                <div className="IconSetReminder display alignItemsC justifyItemsC borderRadius-8 padding-4">
                  <i className="fa-solid fa-check"></i>
                </div>
                <h4>
                  Manually set the progress{" "}
                  <small>
                    (or else it will change itself according to the due date)
                  </small>
                </h4>
              </div>
              <div className="setCheckbox">
                <input
                  type="checkbox"
                  name="focusSession"
                  checked={formData.focusSession}
                  onChange={handleChange}
                  className="setBtn"
                />
              </div>
            </div>
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
            >
              Add Goal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGoal;
