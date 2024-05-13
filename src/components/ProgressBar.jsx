// src/ProgressBar.js
import React, { useEffect, useState } from 'react';
import '../ProgressBar.css';

const ProgressBar = () => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage(prevPercentage => {
        const newPercentage = prevPercentage + 1;
        return newPercentage <= 100 ? newPercentage : 100;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-bar-container">
        <h1>Progress Bar</h1>
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        <div className="progress-text">{percentage}%</div>
      </div>
    </div>
  );
}

export default ProgressBar;
