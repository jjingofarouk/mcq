// src/components/ProgressTracker.js
import React from 'react';
import './ProgressTracker.css';

function ProgressTracker({ current, total }) {
  const progress = Math.min((current / total) * 100, 100).toFixed(1);

  return (
    <div className="progress-tracker">
      <div className="progress-header">
        <span className="progress-text">Question {current} of {total}</span>
        <span className="progress-percentage">{progress}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default ProgressTracker;