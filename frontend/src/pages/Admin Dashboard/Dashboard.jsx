// src/components/AdminDashboard.jsx
import React from "react";
import "./Dashboard.css";
import AddTrack from "../../components/AddTrack/AddTrack"
import "./Dashboard.css";
import AdminHeader from "../../components/common/Header/AdminHeader";

const AdminDashboard = () => {
  return (
    <>
      <AdminHeader />
      <div className="admin-dashboard">
        <AddTrack/>
      </div>
    </>
  );
};

export default AdminDashboard;
