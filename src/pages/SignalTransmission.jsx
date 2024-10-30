// src/pages/SignalTransmission.jsx
import React, { useState } from 'react';

const SignalTransmission = () => {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    alert(`Message Sent: ${message}`);
    setMessage('');
  };

  return (
    <div className="signal-transmission">
      <h1>Signal Transmission</h1>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default SignalTransmission;
