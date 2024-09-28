import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Footer from "./components/common/Footer/Footer";
import Login from "./pages/Login/Login";
import AdminDashboard from "./pages/Admin Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import Treks from "./pages/Treks&Homestays/Treks";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/treks" element={<Treks />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
