import React from "react";
import "./reportform.css";

function ReportForm() {
  return (
    <>
      <div className="reportForm">
        <h1 className="heading">Report Form</h1>
        <div className="report-container">
          <form method="POST">
            <table>
              <tr>
                <td>
                  <label>Report Type: </label>
                </td>
                <td>
                  <select name="reportType">
                    <option value={-1}>Select</option>
                    <option value={"Task Summary"}>Task Summary</option>
                    <option value={"Project Progress"}>Project Progress</option>
                    <option value={"Final Project"}>Final Project</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Project Name: </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="projectName"
                    placeholder="Project Name..."
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Attach Report File: </label>
                </td>
                <td>
                  <input
                    type="file"
                    name="reportfile"
                    className="file"
                    required
                  />
                </td>
              </tr>
            </table>
            <button type="submit">Add Project</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ReportForm;
