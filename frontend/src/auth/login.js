import React, { useState } from "react";
import "./login.css";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/token/", {
        username,
        password,
      });
      const { access } = response.data;
      localStorage.setItem('token', access);
      window.location.href = '/';
    } catch {
      setError(error.response.data.error);
    }
  };
  return (
    <>
      <div className="container">
        <h1 className="heading">Login</h1>
        <form className="form" method="POST" onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
          <br />
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            alue={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <br />
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
