import React from "react";
import "./home.css";
import { assets } from "../assest/assest";
import { Link } from "react-router-dom";

function Home() {
  const name = "Mratyunjay";
  return (
    <>
      <div className="home">
        <div className="welcome">
          <p>Welcome {name}</p>
        </div>
        <div className="home_container">
          <div className="home_content">
            <img src={assets.dashboard} alt="Dashboard" />
            <h4>Dashboard</h4>
            <Link to="/dashboard">
              <button>Click Here</button>
            </Link>
          </div>
          <div className="home_content">
            <img src={assets.planning} alt="Project" />
            <h4>Project</h4>
            <Link to="project">
              <button>Click Here</button>
            </Link>
          </div>
          <div className="home_content">
            <img src={assets.layer} alt="Tasks" />
            <h4>Tasks</h4>
            <Link to="task">
              <button>Click Here</button>
            </Link>
          </div>
          <div className="home_content">
            <img src={assets.Report} alt="Report" />
            <h4>Report</h4>
            <Link to="report">
              <button>Click Here</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
