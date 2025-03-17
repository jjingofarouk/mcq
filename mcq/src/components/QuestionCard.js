import React from 'react';

function QuestionCard({ question, choices, selectedAnswer, onAnswerSelect }) {
  return (
    <div className="question-card">
      <style>{`
        .question-card {
          max-width: 600px;
          margin: 1.5rem auto;
          padding: 2rem;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 6px 20px rgba(46, 58, 58, 0.1);
          transition: transform 0.3s ease;
        }
        .question-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 1.5rem;
          line-height: 1.4;
          text-align: center;
        }
        .choice-container {
          display: flex;
          align-items: center;
          margin: 0.75rem 0;
          padding: 1rem;
          background: #f9f9f9;
          border: 2px solid #ddd;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .choice-container:hover {
          border-color: #8cc5bf;
          background: rgba(140, 197, 191, 0.1);
        }
        .choice-container input[type="radio"] {
          display: none;
        }
        .choice-container label {
          flex: 1;
          font-size: 1.1rem;
          color: #666;
          cursor: pointer;
          padding-left: 2.5rem;
          position: relative;
        }
        .choice-container label::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 20px;
          height: 20px;
          border: 2px solid #999;
          border-radius: 50%;
          background: #fff;
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
          background: #3a8f85;
          opacity: 0;
        }
        .choice-container input[type="radio"]:checked + label::before {
          border-color: #3a8f85;
        }
        .choice-container input[type="radio"]:checked + label::after {
          opacity: 1;
        }
        @media (max-width: 480px) {
          .question-card {
            margin: 1rem;
            padding: 1.5rem;
          }
          .question-card h3 {
            font-size: 1.25rem;
          }
          .choice-container {
            padding: 0.75rem;
          }
          .choice-container label {
            font-size: 1rem;
          }
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
            disabled={selectedAnswer !== null}
          />
          <label htmlFor={choice}>{choice}</label>
        </div>
      ))}
    </div>
  );
}

export default QuestionCard;