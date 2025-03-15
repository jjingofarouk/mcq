// src/components/Results.js

import React from 'react';
import { useLocation } from 'react-router-dom';

function Results() {
  const location = useLocation();
  const { isCorrect, explanation } = location.state || { isCorrect: false, explanation: '' };

  return (
    <div>
      <h3>Results</h3>
      {isCorrect ? (
        <p>Correct! Great job!</p>
      ) : (
        <p>Incorrect. Better luck next time!</p>
      )}
      <p><strong>Explanation:</strong> {explanation}</p>
    </div>
  );
}

export default Results;
