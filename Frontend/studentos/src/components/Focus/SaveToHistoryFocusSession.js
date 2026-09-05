import React from "react";

const SaveToHistoryFocusSession = ({ onClose, PlayBtn, NextForm }) => {
  return (
    <div className="saveToHistoryFormDiv display displayColumn padding-24 gap-24">
      <div className="display alignItemsC gap-24">
        <h2>Do you want to save the focusing session in the history?</h2>
        <button
          className="ClossAddTaskBtn btnOutlineBorder"
          type="button"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark fa-xl"></i>
        </button>
      </div>
      <div className="display displayColumn gap-12">
        <button
          className="saveToHistoryFormBtn display padding-12 btnOutlineBorder borderRadius-16 gap-12 alignItemsC"
          onClick={() => {
            NextForm();
            onClose();
          }}
        >
          <i className="fa-solid fa-check"></i>
          <h3>Yes, Save the session</h3>
        </button>
        <button
          className="saveToHistoryFormBtn display padding-12 btnOutlineBorder borderRadius-16 gap-12 alignItemsC"
          onClick={() => {
            onClose();
            PlayBtn();
          }}
        >
          <i className="fa-solid fa-x"></i>
          <h3>No, Start without saving</h3>
        </button>
      </div>
    </div>
  );
};

export default SaveToHistoryFocusSession;
