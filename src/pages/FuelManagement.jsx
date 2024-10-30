// src/pages/FuelManagement.jsx
import React, { useState } from 'react';

const FuelManagement = () => {
  const [fuel, setFuel] = useState(100);

  const consumeFuel = () => {
    setFuel((prev) => Math.max(prev - 10, 0));
  };

  return (
    <div className="fuel-management">
      <h1>Fuel Management</h1>
      <p>Current Fuel Level: {fuel}%</p>
      <button onClick={consumeFuel}>Consume Fuel</button>
      {fuel === 0 && <p>Out of Fuel!</p>}
    </div>
  );
};

export default FuelManagement;
