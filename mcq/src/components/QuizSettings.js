// src/components/QuizSettings.js
import React, { useState } from 'react';
import './QuizSettings.css';

function QuizSettings({ onSettingsChange }) {
  const [questionCount, setQuestionCount] = useState(10); // Default to 10 questions

  const handleChange = (e) => {
    const count = parseInt(e.target.value);
    setQuestionCount(count);
    onSettingsChange({ questionCount: count });
  };

  return (
    <div className="quiz-settings">
      <div className="settings-card">
        <h3 className="settings-title">Quiz Settings</h3>
        <div className="settings-option">
          <label htmlFor="questionCount" className="settings-label">
            Number of Questions
          </label>
          <select
            id="questionCount"
            value={questionCount}
            onChange={handleChange}
            className="settings-select"
          >
            <option value="5">5 Questions</option>
            <option value="10">10 Questions</option>
            <option value="15">15 Questions</option>
            <option value="20">20 Questions</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default QuizSettings;