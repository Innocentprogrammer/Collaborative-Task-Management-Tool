import React, { useState } from "react";
import "./project.css";
import axios from "axios";

function Project() {
  const [projectForm, setProjectForm] = useState({
    projectName: "",
    startDate: "",
    dueDate: "",
    projectHeadName: "",
    teamMemberName: "",
    Description: "",
    status: "",
  });
  const handleChange = (e) => {
    setProjectForm({ ...projectForm, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(projectForm);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/createproject/",
        projectForm
      );
      console.log("Project added successfully:", response.data);
      alert("Form Submitted");
      setProjectForm({
        projectName: "",
        startDate: "",
        dueDate: "",
        projectHeadName: "",
        teamMemberName: "",
        Description: "",
        status: "",
      });
    } catch (error) {
      console.error("There was an error adding the project!", error);
    }
  };

  return (
    <>
      <div className="project">
        <h1 class="heading">New Project</h1>
        <div class="project-container">
          <form method="POST" onSubmit={handleSubmit}>
            <table>
              <tr>
                <td>
                  <label>Project Name: </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="projectName"
                    placeholder="Project Name..."
                    value={projectForm.projectName}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Start Date: </label>
                </td>
                <td>
                  <input
                    type="date"
                    name="startDate"
                    value={projectForm.startDate}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Due Date: </label>
                </td>
                <td>
                  <input
                    type="date"
                    name="dueDate"
                    value={projectForm.dueDate}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Project Head Name: </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="projectHeadName"
                    placeholder="Project Head Name..."
                    value={projectForm.projectHeadName}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Team Member Names: </label>
                </td>
                <td>
                  <input
                    type="text"
                    name="teamMemberName"
                    placeholder="Team Member Names..."
                    value={projectForm.teamMemberName}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Short Description: </label>
                </td>
                <td>
                  <textarea
                    name="Description"
                    cols={50}
                    rows={4}
                    placeholder="Description (not more than 100 words)"
                    value={projectForm.Description}
                    onChange={handleChange}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Status: </label>
                </td>
                <td>
                  <select
                    name="status"
                    value={projectForm.status}
                    onChange={handleChange}
                  >
                    <option value={-1}>Status</option>
                    <option value={"In Progress"}>In Progress</option>
                    <option value={"Complete"}>Complete</option>
                    <option value={"Pending"}>Pending</option>
                    <option value={"On-Hold"}>On-Hold</option>
                  </select>
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

export default Project;
