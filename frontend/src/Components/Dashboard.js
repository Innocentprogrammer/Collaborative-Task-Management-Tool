import React, { useEffect, useState } from "react";
import "./dashboard.css";
import { assets } from "../assest/assest";
import axios from "axios";

const Dashboard = (props) => {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    async function getAllProject() {
      try {
        const projects = await axios.get("http://127.0.0.1:8000/api/project/");
        setProject(projects.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllProject();
  }, []);

  return (
    <>
      <div className="content">
        <h1 class="heading">Dashboard</h1>
        <div className="row">
          <div class="container">
            <h3 className="heading">Projects & Its Report</h3>
            <div class="progress">
              <table border={1}>
                <tr>
                  <th>#</th>
                  <th>Project</th>
                  <th>Start Date</th>
                  <th>Due Date</th>
                  <th>Status</th>
                  <th>Final Report</th>
                </tr>
                {projects.map((project, i) => {
                  
                  return (
                    <tr key={i}>
                      <td>{project.id}</td>
                      <td>{project.projectName}</td>
                      <td>{project.startDate}</td>
                      <td>{project.dueDate}</td>
                      <td>{project.status}</td>
                      <td>View</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
          <div className="col">
            <div className="TProject">
              <div>
                <h2>{projects.length}</h2>
                <h4>Total Project</h4>
              </div>
              <div className="img1">
                <img src={assets.layer} alt=""></img>
              </div>
            </div>
            <div className="TTask">
              <div>
                <h2>6</h2>
                <h4>Total Task</h4>
              </div>
              <div className="img2">
                <img src={assets.planning} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
