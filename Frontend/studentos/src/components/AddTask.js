import React, { useState, useContext } from "react";
import TaskContext from "../context/tasks/TaskContext";


// Layout for the add task form (Frontend)
const AddTask = ({ onClose }) => {

  // To clear the form after submit 
  const context = useContext(TaskContext);
  const { addTask } = context;

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "High",
    time: "",
    category: "hi",
    tags: "",
    reminder: true,
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
    addTask(
      formData.title,
      formData.description,
      formData.dueDate,
      formData.time,
      formData.priority,
      formData.category,
      formData.tags,
    );
    if (onClose) onClose();
  };

  return (
    // Frontend 
    <div className="AddTaskDiv padding-24 borderRadius-16">
      <div className="UpperHeadAddTask display alignItemsC justifyItemsSpaceBtw padding-12">
        <h3>Add New Task</h3>
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
            <p className="AddTaskParagraph">Task Title</p>
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
            <p className="AddTaskParagraph">Task Description</p>
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
                  name="dueDate"
                  value={formData.dueDate}
                  onChange={handleChange}
                  className="InputBoxDateTime padding-8"
                />
              </div>

              <div className="PriortiyAddTaskSelect DivPriorityCatogery display displayColumn gap-8">
                <label className="AddTaskParagraph">Priority</label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange}
                  className="SelectBoxPriorityCatogery padding-8"
                >
                  <option value="High">High 🔴</option>
                  <option value="Medium">Medium 🟡</option>
                  <option value="Low">Low 🟢</option>
                </select>
              </div>
            </div>

            <div className="PriorityAndCatogeryDiv display alignItemsC justifyItemsSpaceBtw displayColumn gap-24">
              <div className="TimeAddTaskInput DivDateTime display displayColumn gap-8">
                <p className="AddTaskParagraph">Time</p>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="InputBoxDateTime padding-8"
                />
              </div>

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

          <div className="SetReminderDiv padding-12 display alignItemsC justifyItemsSpaceBtw">
            <div className="ReminderText display displayRow gap-8">
              <div className="IconSetReminder display alignItemsC justifyItemsC borderRadius-8">
                <i className="fa-regular fa-bell"></i>
              </div>
              <h4>Set Reminder</h4>
            </div>
            <div className="ReminderCheckbox">
              <input
                type="checkbox"
                name="reminder"
                checked={formData.reminder}
                onChange={handleChange}
                className="SetReminderBtn"
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
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
