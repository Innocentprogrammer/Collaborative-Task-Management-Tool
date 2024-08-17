import React, { useEffect, useState } from "react";
import "./task.css";
import axios from "axios";
import { assets } from "../assest/assest";
function Task() {
  const [tasks, setTasks] = useState([]);
  const [taskform, setTaskForm] = useState("");
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
  const handleChange = (e) => {
    setTaskForm({ ...taskform, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(taskform);
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/todos/",
        taskform
      );
      console.log("Task has Submitted", response.data);
      alert("Task Submitted");
      setTaskForm({
        task: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`);
    setTasks(tasks.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <div className="task">
        <h1 className="heading">Today's Tasks</h1>
        <div className="task-container">
          <div className="add-task">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="task"
                className="task-input"
                placeholder="Enter task name"
                onChange={handleChange}
                value={taskform.task}
                required
              />
              <button type="submit" className="add-btn">
                Add Task
              </button>
            </form>
          </div>
          <div className="show-task">
            <h4>Your Today's Task List</h4>
            <div className="tasklist">
              <table>
                {tasks.map((t) => (
                  <tr key={t.id}>
                    <td>{t.task}</td>
                    <td>
                      <img
                        src={assets.deleted}
                        alt=""
                        onClick={() => handleDelete(t.id)}
                        style={{ cursor: "pointer" }}
                      />
                    </td>
                  </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
