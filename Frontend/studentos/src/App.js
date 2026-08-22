import "./App.css";
import React from "react";
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
import TaskState from "./context/tasks/Taskstate";
import HomePage from "./pages/HomePage";
import "./CSS/SignInLoginPage.css";
import "./CSS/NavBar.css";
import "./CSS/AddTask.css";
import "./CSS/Tasks.css";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <TaskState>
      <Router>
        
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/login" element={<Login />} />
              
              <Route element={<MainLayout />}>
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/goals" element={<Goals />} />
                <Route path="/focus" element={<Focus />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/addTasks" />
              </Route>
            </Routes>
      </Router>
    </TaskState>
  );
}

export default App;
