// src/components/QuestionCard.js

import React from 'react';

function QuestionCard({ question, choices, selectedAnswer, onAnswerSelect }) {
  return (
    <div className="question-card">
      <style>{`
        .question-card {
          max-width: 600px;
          margin: 1.5rem auto;
          padding: 2rem;
          background: var(--white);
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(46, 58, 58, 0.1);
          transition: transform 0.3s ease;
        }

        .question-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--dark);
          margin-bottom: 1.5rem;
          line-height: 1.4;
          text-align: center;
          position: relative;
        }

        .question-card h3::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          background: var(--primary-color);
          border-radius: 2px;
        }

        .choice-container {
          display: flex;
          align-items: center;
          margin: 0.75rem 0;
          padding: 1rem;
          background: var(--off-white);
          border: 2px solid var(--light-gray);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .choice-container:hover {
          border-color: var(--primary-light);
          background: rgba(140, 197, 191, 0.1);
        }

        .choice-container input[type="radio"] {
          display: none; /* Hide default radio button */
        }

        .choice-container label {
          flex: 1;
          font-size: 1.1rem;
          color: var(--dark-gray);
          cursor: pointer;
          padding-left: 2.5rem;
          position: relative;
          transition: color 0.3s ease;
        }

        /* Custom radio button */
        .choice-container label::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          border: 2px solid var(--medium-gray);
          border-radius: 50%;
          background: var(--white);
          transition: all 0.3s ease;
        }

        .choice-container label::after {
          content: '';
          position: absolute;
          left: 6px;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--primary-color);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .choice-container input[type="radio"]:checked + label::before {
          border-color: var(--primary-color);
        }

        .choice-container input[type="radio"]:checked + label::after {
          opacity: 1;
        }

        .choice-container input[type="radio"]:checked + label {
          color: var(--primary-dark);
          font-weight: 500;
        }

        /* Animation */
        .question-card {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile Responsiveness */
        @media (max-width: 480px) {
          .question-card {
            margin: 1rem;
            padding: 1.5rem;
            border-radius: 12px;
          }

          .question-card h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
          }

          .choice-container {
            padding: 0.75rem;
            margin: 0.5rem 0;
          }

          .choice-container label {
            font-size: 1rem;
            padding-left: 2rem;
          }

          .choice-container label::before {
            width: 18px;
            height: 18px;
          }

          .choice-container label::after {
            width: 6px;
            height: 6px;
            left: 6px;
          }
        }

        /* Focus states for accessibility */
        .choice-container:focus-within {
          border-color: var(--primary-color);
          box-shadow: 0 0 0 3px rgba(58, 143, 133, 0.2);
        }
      `}</style>
      <h3>{question}</h3>
      {choices.map((choice) => (
        <div className="choice-container" key={choice}>
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