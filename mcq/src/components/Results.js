import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Results() {
  const { state } = useLocation();
  const { score = 0, total = 0 } = state || {};

  return (
    <div className="results-container">
      <h3>Quiz Results</h3>
      <p className="result-message" style={{
        backgroundColor: score / total >= 0.7 ? 'var(--success)' : 'var(--error)',
        color: score / total >= 0.7 ? 'var(--white)' : 'var(--white)',
      }}>
        Your Score: {score} / {total} ({((score / total) * 100).toFixed(1)}%)
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Results;