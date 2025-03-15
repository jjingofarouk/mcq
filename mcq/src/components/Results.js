// src/components/Results.js

import React from 'react';
import { useLocation } from 'react-router-dom';

function Results() {
  const location = useLocation();
  const { isCorrect, explanation } = location.state || { isCorrect: false, explanation: '' };

  return (
    <div className="results-container">
      <style>{`
        .results-container {
          max-width: 700px;
          margin: 2rem auto;
          padding: 2.5rem;
          background: linear-gradient(135deg, var(--off-white), var(--white));
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(46, 58, 58, 0.1);
          position: relative;
          overflow: hidden;
          animation: slideIn 0.5s ease-out;
        }

        .results-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: ${isCorrect 
            ? 'var(--success)' 
            : 'var(--error)'};
          transition: all 0.3s ease;
        }

        h3 {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--dark);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          position: relative;
          display: inline-block;
        }

        h3::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 50%;
          height: 3px;
          background: var(--primary-color);
          border-radius: 2px;
        }

        .result-message {
          font-size: 1.25rem;
          font-weight: 500;
          padding: 1rem 1.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          background: ${isCorrect 
            ? 'rgba(115, 158, 115, 0.1)' 
            : 'rgba(193, 123, 123, 0.1)'};
          color: ${isCorrect 
            ? 'var(--success)' 
            : 'var(--error)'};
          border-left: 4px solid ${isCorrect 
            ? 'var(--success)' 
            : 'var(--error)'};
          transition: transform 0.3s ease;
        }

        .result-message:hover {
          transform: translateX(5px);
        }

        .explanation {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--dark-gray);
          background: var(--white);
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
          position: relative;
        }

        .explanation strong {
          color: var(--primary-dark);
          font-weight: 600;
        }

        /* Fancy hover effect */
        .explanation::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent,
            var(--primary-light) 50%,
            transparent
          );
          opacity: 0;
          transition: all 0.5s ease;
          pointer-events: none;
        }

        .explanation:hover::before {
          opacity: 0.2;
          transform: translateX(100%);
        }

        /* Animations */
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
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
            padding: 0.75rem 1rem;
          }

          .explanation {
            font-size: 1rem;
            padding: 1rem;
          }
        }
      `}</style>
      <h3>Results</h3>
      {isCorrect ? (
        <p className="result-message">Correct! Great job!</p>
      ) : (
        <p className="result-message">Incorrect. Better luck next time!</p>
      )}
      <p className="explanation">
        <strong>Explanation:</strong> {explanation}
      </p>
    </div>
  );
}

export default Results;