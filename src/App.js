import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';
import Banner from './components/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Header />
      <Banner />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Add other routes here if needed */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
