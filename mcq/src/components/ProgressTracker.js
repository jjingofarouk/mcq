// src/components/ProgressTracker.js
import React from 'react';

function ProgressTracker({ current, total }) {
  const progress = (current / total) * 100;

  return (
    <div className="progress-tracker">
      <p>Progress: {current} / {total}</p>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}

export default ProgressTracker;