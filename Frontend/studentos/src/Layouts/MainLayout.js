import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import AddTask from "../components/AddTask";

const MainLayout = () => {

  // brings up the add task page with blured background 
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  return (
    <div>
      <div className="app-layout">
        <Navbar onOpenAddTask={() => setIsAddTaskOpen(true)} />
        <main className="WidthHeight-100">
          <Outlet context={{ setIsAddTaskOpen }} /> {/*Passes the function to others so they can use it*/}
        </main>

          {isAddTaskOpen && (
            <div className="backdrop" onClick={() => setIsAddTaskOpen(false)}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <AddTask onClose={() => setIsAddTaskOpen(false)} />
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default MainLayout;
