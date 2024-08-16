import React from "react";
import "./task.css";
function Task() {
  return (
    <>
      <div className="task">
        <h1 className="heading">Today's Tasks</h1>
        <div className="task-container">
          <div className="add-task">
            <input
              type="text"
              name="task"
              className="task-input"
              placeholder="Enter task name"
              required
            />
            <button type="submit" className="add-btn">
              Add Task
            </button>
          </div>
          <div className="show-task">
            <h4>Your Today's Task List</h4>
            <div className="tasklist"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
