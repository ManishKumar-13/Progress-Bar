// src/App.js (continued)
import React, { useState, useEffect } from 'react';
import ProgressBar from './components/ProgressBar';

const App = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prevPercentage => {
        if (prevPercentage < 100) {
          return prevPercentage + 10;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <ProgressBar percentage={percentage} status={percentage < 100 ? "Loading" : "Complete"} />
    </div>
  );
}

export default App;
