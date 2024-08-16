import React, { useEffect, useState } from "react";
import "./reportform.css";
import axios from "axios";

function ReportForm() {
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

  const [reportForm, setNewReport] = useState({
    reportType: "",
    projectName: "",
    reportfile: "",
  });
  const handleChange = (e) => {
    setNewReport({ ...reportForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(reportForm);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/createreport/",
        reportForm
      );
      console.log("Project Add SuccessFully", response.data);
      alert("Report Submitted");
      setNewReport({
        reportType: "",
        projectName: "",
        reportfile: "",
      });
    } catch (e) {
      console.log("There was an error adding the project!", e);
    }
  };
  return (
    <>
      <div className="reportForm">
        <h1 className="heading">Report Form</h1>
        <div className="report-container">
          <form method="POST" onSubmit={handleSubmit}>
            <table>
              <tr>
                <td>
                  <label>Report Type: </label>
                </td>
                <td>
                  <select
                    name="reportType"
                    onChange={handleChange}
                    value={reportForm.reportType}
                  >
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
                  <select
                    name="projectName"
                    onChange={handleChange}
                    value={reportForm.projectName}
                  >
                    <option value="select">Select</option>
                    {projects.map((project, i) => {
                      return (
                        <option value={project.projectName} key={i}>
                          {project.projectName}
                        </option>
                      );
                    })}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Report Summary: </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="reportfile"
                    className="file"
                    onChange={handleChange}
                    value={reportForm.reportfile}
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
