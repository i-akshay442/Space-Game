// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GalaxyBackground from './components/GalaxyBackground';
import PlaneSelector from './components/PlaneSelector'; // Updated to PlaneSelector
import AsteroidDodge from './pages/AsteroidDodge';
import FuelManagement from './pages/FuelManagement';
import SignalTransmission from './pages/SignalTransmission';
import './App.css'; // Importing the single CSS file

function App() {
  return (
    <Router>
      <GalaxyBackground />
      <Routes>
        <Route path="/" element={<PlaneSelector />} /> {/* Updated to PlaneSelector */}
        <Route path="/asteroid-dodge" element={<AsteroidDodge />} />
        <Route path="/fuel-management" element={<FuelManagement />} />
        <Route path="/signal-transmission" element={<SignalTransmission />} />
      </Routes>
    </Router>
  );
}

export default App;
