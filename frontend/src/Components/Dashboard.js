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
  const [report, setReport] = useState([]);
  useEffect(() => {
    async function getAllReport() {
      try {
        const report = await axios.get("http://127.0.0.1:8000/api/report/");
        setReport(report.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllReport();
  }, []);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    async function getAllTask() {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/todos/");
        setTasks(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllTask();
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
                  <th>Project Head</th>
                  <th>Team Members</th>
                  <th>Status</th>
                  <th>Report</th>
                </tr>
                {projects.map((project, i) => {
                  const projectReport = report.find(
                    (report) => report.projectName === project.projectName
                  );
                  return (
                    <tr key={i}>
                      <td>{project.id}</td>
                      <td>{project.projectName}</td>
                      <td>{project.startDate}</td>
                      <td>{project.dueDate}</td>
                      <td>{project.projectHeadName}</td>
                      <td>{project.teamMemberName}</td>
                      <td>{project.status}</td>
                      <td>
                        {projectReport && projectReport.reportfile
                          ? projectReport.reportfile
                          : "Report not submitted yet"}
                      </td>
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
                <h2>{tasks.length}</h2>
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
