// src/components/QuestionCard.js
import React from 'react';
import './QuestionCard.css';

function QuestionCard({ question, choices, selectedAnswer, onAnswerSelect }) {
  return (
    <div className="question-card">
      <h3 className="question-text">{question}</h3>
      <div className="choices-container">
        {choices.map((choice, index) => (
          <div
            className={`choice-container ${
              selectedAnswer === choice ? 'selected' : ''
            } ${selectedAnswer && selectedAnswer !== choice ? 'disabled' : ''}`}
            key={choice}
            onClick={() => !selectedAnswer && onAnswerSelect(choice)}
          >
            <input
              type="radio"
              id={`choice-${index}`}
              name="answer"
              value={choice}
              checked={selectedAnswer === choice}
              onChange={() => {}} // Prevent default behavior; handled by div click
              disabled={selectedAnswer !== null}
              className="choice-input"
            />
            <label htmlFor={`choice-${index}`} className="choice-label">
              <span className="choice-indicator"></span>
              {choice}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;