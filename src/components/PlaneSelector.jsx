// src/components/PlaneSelector.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PlaneSelector = () => {
  return (
    <div className="planet-selector">
      <h1>Select Your Planet</h1>
      <Link to="/asteroid-dodge">
        <button>Asteroid Dodge</button>
      </Link>
      <Link to="/fuel-management">
        <button>Fuel Management</button>
      </Link>
      <Link to="/signal-transmission">
        <button>Signal Transmission</button>
      </Link>
    </div>
  );
};

export default PlaneSelector;
