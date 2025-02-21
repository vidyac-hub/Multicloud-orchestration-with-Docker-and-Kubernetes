import React, { useState, useEffect } from 'react';

function App() {
  const [backendData, setBackendData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.text())
      .then(data => setBackendData(data));
  }, []);

  return (
    <div>
      <h1>Frontend App</h1>
      <p>Backend Response: {backendData}</p>
    </div>
  );
}

export default App;