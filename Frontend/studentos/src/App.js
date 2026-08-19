import "./App.css";
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

function App() {
  return (
    <Router>
      <div className="app-layout">
        <Navbar />

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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
