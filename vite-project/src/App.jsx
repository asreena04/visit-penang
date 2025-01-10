import React from 'react';
import Navbar from './components/Navbar/Narbar';
import Home from './components/Home';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TouristSpot from './pages/TouristSpot';

const App = () => {
  return (
    <BrowserRouter>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/things-to-do" element={<TouristSpot />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
