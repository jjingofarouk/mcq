// src/components/Timer.js
import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer({ timeLimit, onTimeUp }) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className={`timer ${timeLeft <= 10 ? 'warning' : ''}`}>
      <span className="timer-label">Time Left:</span>
      <span className="timer-value">{minutes}:{seconds}</span>
    </div>
  );
}

export default Timer;