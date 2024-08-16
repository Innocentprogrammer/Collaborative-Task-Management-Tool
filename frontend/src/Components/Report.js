import React from "react";
import "./report.css";
import { assets } from "../assest/assest";
import { Link } from "react-router-dom";

function Report() {
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
                <th>Start Date</th>
                <th>End Date</th>
                <th>Report Status</th>
                <th>Report File</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Collabrative Task Management System</td>
                <td>12/07/024</td>
                <td>09/08/024</td>
                <td>Task Summary</td>
                <td>View Report</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
