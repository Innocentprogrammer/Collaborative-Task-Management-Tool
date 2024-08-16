import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assest/assest";
import "./sidebar.css";

function Sidebar() {
  const [isVisible1, setIsVisible1] = useState(false);

  const showElement1 = () => {
    setIsVisible1(true);
  };
  const hideElement1 = () => {
    setIsVisible1(false);
  };
  const [isVisible2, setIsVisible2] = useState(false);

  const showElement2 = () => {
    setIsVisible2(true);
  };
  const hideElement2 = () => {
    setIsVisible2(false);
  };
  const [isVisible3, setIsVisible3] = useState(false);

  const showElement3 = () => {
    setIsVisible3(true);
  };
  const hideElement3 = () => {
    setIsVisible3(false);
  };
  const [isVisible4, setIsVisible4] = useState(false);

  const showElement4 = () => {
    setIsVisible4(true);
  };
  const hideElement4 = () => {
    setIsVisible4(false);
  };
  const [isVisible5, setIsVisible5] = useState(false);

  const showElement5 = () => {
    setIsVisible5(true);
  };
  const hideElement5 = () => {
    setIsVisible5(false);
  };
  return (
    <div class="sideBar">
      <header>
        <div>
          <div class="logo">
            <Link to="/">
              <img src={assets.menu} alt="logo" />
            </Link>
          </div>
          <div class="menu">
            <ul>
              <li>
                <Link to="/">
                  <img
                    src={assets.house}
                    alt="home"
                    onMouseOver={showElement1}
                    onMouseOut={hideElement1}
                  />
                </Link>
                <p id="p1" style={{ display: isVisible1 ? "block" : "none" }}>
                  Home
                </p>
              </li>
              <li>
                <Link to="/dashboard">
                  <img
                    src={assets.dashboard}
                    alt="dashboard"
                    onMouseOver={showElement2}
                    onMouseOut={hideElement2}
                  />
                </Link>
                <p id="p2" style={{ display: isVisible2 ? "block" : "none" }}>
                  Dashboard
                </p>
              </li>
              <li>
                <Link to="/project">
                  <img
                    src={assets.planning}
                    alt="project"
                    onMouseOver={showElement3}
                    onMouseOut={hideElement3}
                  />
                </Link>
                <p id="p3" style={{ display: isVisible3 ? "block" : "none" }}>
                  Projects
                </p>
              </li>
              <li>
                <Link to="/task">
                  <img
                    src={assets.layer}
                    alt="tasks"
                    onMouseOver={showElement4}
                    onMouseOut={hideElement4}
                  />
                </Link>
                <p id="p4" style={{ display: isVisible4 ? "block" : "none" }}>
                  Tasks
                </p>
              </li>
              <li>
                <Link to="report">
                  <img
                    src={assets.Report}
                    alt="report"
                    onMouseOver={showElement5}
                    onMouseOut={hideElement5}
                  />
                </Link>
                <p id="p5" style={{ display: isVisible5 ? "block" : "none" }}>
                  Reports
                </p>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Sidebar;
