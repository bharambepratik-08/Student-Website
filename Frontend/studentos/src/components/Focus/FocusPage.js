import React from "react";
import FocusTimer from "./FocusTimer";

const FocusPage = () => {
  return (
    <div>
      <div>
        <button>Promodo</button>
        <button>Normal</button>
      </div>
      <FocusTimer hrtimer={0} mintimer={25} sectimer={0}/>
    </div>
  );
};

export default FocusPage;
