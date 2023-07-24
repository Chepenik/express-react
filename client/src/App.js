import React, { useEffect, useState } from 'react';

function App() {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <p>Welcome to MassAdoption</p>
      <div>
        {backendData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          backendData.users.map((user, i) => <p key={i}>{user}</p>)
        )}
      </div>
    </>
  );
}

export default App;