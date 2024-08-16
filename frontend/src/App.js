import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Report from "./Components/Report";
import Task from "./Components/Task";
import ReportForm from "./Components/ReportForm";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <div style={{ display: "flex" }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Navbar />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/project" element={<Project />} />
                <Route path="/task" element={<Task />} />
                <Route path="/report" element={<Report />} />
                <Route path="/reportform" element={<ReportForm />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
