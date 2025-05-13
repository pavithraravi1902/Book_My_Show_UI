import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HotelList from './pages/HotelList';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/hotel" element={<HotelList />} />
               <Route path="/hotel-booking" element={<Booking />} />
      </Routes>
    </Router>
  );
}

export default App;
