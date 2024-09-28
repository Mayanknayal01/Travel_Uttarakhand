// src/components/AdminDashboard.jsx
import React from "react";
import "./Dashboard.css";
import AddTrack from "../../components/AddTrack/AddTrack"

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AddTrack/>
    </div>
  );
};

export default AdminDashboard;
