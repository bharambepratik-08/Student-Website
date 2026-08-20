import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Goals from "./pages/Goals";
import Focus from "./pages/Focus";
import Notification from "./pages/Notification";
import Tasks from "./pages/Tasks";
import Setting from "./pages/Setting";
import Calendar from "./pages/Calendar";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import AddTask from "./components/AddTask";
import "./CSS/SignInLoginPage.css";
import "./CSS/NavBar.css";
import "./CSS/AddTask.css";

function App() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);

  return (
    <Router>
      <div className="app-layout">
        <Navbar onOpenAddTask={() => setIsAddTaskOpen(true)} />

        <main className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/focus" element={<Focus />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/addTasks" />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/tasks"
              element={<Tasks onOpenAddTask={() => setIsAddTaskOpen(true)} />}
            />
          </Routes>
        </main>

        {isAddTaskOpen && (
          <div className="backdrop" onClick={() => setIsAddTaskOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <AddTask onClose={() => setIsAddTaskOpen(false)} />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
