import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Banner from "./components/Banner/Banner";
import Login from "./pages/Login/Login";
import AdminDashboard from "./pages/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
