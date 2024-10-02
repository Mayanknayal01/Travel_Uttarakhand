// src/components/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import AdminHeader from "../../components/common/Header/AdminHeader";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  const [errorMessage, setErrorMessage] = useState(""); 

  const handleLogin = (e) => {
    e.preventDefault();

    
    const adminUsername = "admin";
    const adminPassword = "password";

    if (username === adminUsername && password === adminPassword) {
      // Redirect to Admin Dashboard on successful login
      navigate("/admin-dashboard");
    } else {
      setErrorMessage("Invalid credentials. Please try again."); // Set error message instead of alert
    }
  };

  return (
    <>
      <AdminHeader />
      <div className="login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <p className="error">{errorMessage}</p>}{" "}
          {/* Display error message */}
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
