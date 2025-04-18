import React, { useEffect, useState } from "react";
import "./report.css";
import { assets } from "../assest/assest";
import { Link } from "react-router-dom";
import axios from "axios";

function Report() {
  const [report, setReport] = useState([]);
  useEffect(() => {
    async function getAllReport() {
      try {
        const projects = await axios.get("http://127.0.0.1:8000/api/report/");
        setReport(projects.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllReport();
  }, []);
  return (
    <>
      <div className="report">
        <h1 className="heading">Report</h1>
        <div className="report-body">
          <div className="up">
            <div className="search">
              <input type="search" name="search" placeholder="Search..." />
              <button className="img">
                <img src={assets.search} alt="search" />
              </button>
            </div>
            <Link to="/reportform">
              <button className="add-report">Add New Report</button>
            </Link>
          </div>
          <div className="down">
            <table border={1}>
              <tr>
                <th>#</th>
                <th>Project Name</th>
                <th>Report Status</th>
                <th>Report File</th>
              </tr>
              {report.map((reports, i) => {
                return (
                  <tr key={i}>
                    <td>{reports.id}</td>
                    <td>{reports.projectName}</td>
                    <td>{reports.reportType}</td>
                    <td>{reports.reportfile}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
