// src/components/QuestionCard.js

import React from 'react';

function QuestionCard({ question, choices, selectedAnswer, onAnswerSelect }) {
  return (
    <div>
      <h3>{question}</h3>
      {choices.map((choice) => (
        <div key={choice}>
          <input
            type="radio"
            id={choice}
            name="answer"
            value={choice}
            checked={selectedAnswer === choice}
            onChange={(e) => onAnswerSelect(e.target.value)}
          />
          <label htmlFor={choice}>{choice}</label>
        </div>
      ))}
    </div>
  );
}

export default QuestionCard;
