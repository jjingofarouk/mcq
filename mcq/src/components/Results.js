import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ReviewAnswers from './ReviewAnswers';
import UserProfile from './UserProfile';

function Results() {
  const { state } = useLocation();
  const { score = 0, total = 0, answers = [], questions = [], onQuizComplete } = state || {};

  return (
    <div className="results-container">
      <h3>Quiz Results</h3>
      <p
        className="result-message"
        style={{
          backgroundColor: score / total >= 0.7 ? 'var(--success)' : 'var(--error)',
          color: score / total >= 0.7 ? 'var(--white)' : 'var(--white)',
        }}
      >
        Your Score: {score} / {total} ({((score / total) * 100).toFixed(1)}%)
      </p>
      <UserProfile onQuizComplete={onQuizComplete} />
      <ReviewAnswers answers={answers} questions={questions} />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Results;