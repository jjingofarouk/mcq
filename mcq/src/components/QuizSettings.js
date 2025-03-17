// src/components/QuizSettings.js
import React from 'react';

function QuizSettings({ onSettingsChange }) {
  const handleChange = (e) => {
    onSettingsChange({ questionCount: parseInt(e.target.value) });
  };

  return (
    <div className="quiz-settings">
      <label htmlFor="questionCount">Number of Questions:</label>
      <select id="questionCount" onChange={handleChange}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
      </select>
    </div>
  );
}

export default QuizSettings;