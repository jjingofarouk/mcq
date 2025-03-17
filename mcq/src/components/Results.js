import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Results() {
  const { state } = useLocation();
  const { score = 0, total = 0 } = state || {};

  return (
    <div className="results-container">
      <style>{`
        .results-container {
          max-width: 700px;
          margin: 2rem auto;
          padding: 2.5rem;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(46, 58, 58, 0.1);
        }
        h3 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 1.5rem;
        }
        .result-message {
          font-size: 1.25rem;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          background: ${score / total >= 0.7 ? '#d4edda' : '#f8d7da'};
          color: ${score / total >= 0.7 ? '#155724' : '#721c24'};
          border-left: 4px solid ${score / total >= 0.7 ? '#28a745' : '#dc3545'};
        }
        @media (max-width: 600px) {
          .results-container {
            margin: 1rem;
            padding: 1.5rem;
          }
          h3 {
            font-size: 2rem;
          }
          .result-message {
            font-size: 1.1rem;
          }
        }
      `}</style>
      <h3>Quiz Results</h3>
      <p className="result-message">
        Your Score: {score} / {total} ({((score / total) * 100).toFixed(1)}%)
      </p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Results;