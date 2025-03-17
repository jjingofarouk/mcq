import React, { useState, useEffect } from 'react';

function UserProfile({ onQuizComplete, minimal = false }) {
  const [stats, setStats] = useState(() => JSON.parse(localStorage.getItem('quizStats')) || { quizzesTaken: 0, totalScore: 0 });
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (onQuizComplete) {
      setStats((prev) => {
        const newStats = { quizzesTaken: prev.quizzesTaken + 1, totalScore: prev.totalScore + onQuizComplete.score };
        localStorage.setItem('quizStats', JSON.stringify(newStats));
        return newStats;
      });
    }
  }, [onQuizComplete]);

  useEffect(() => {
    if (isDarkMode) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
  }, [isDarkMode]);

  if (minimal) {
    return (
      <button
        className="dark-mode-toggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
    );
  }

  return (
    <div className="user-profile">
      <h3>Your Stats</h3>
      <p>Quizzes Taken: {stats.quizzesTaken}</p>
      <p>Average Score: {stats.quizzesTaken ? (stats.totalScore / stats.quizzesTaken).toFixed(1) : 0}%</p>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default UserProfile;