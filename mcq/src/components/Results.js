// src/components/Results.js
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import ReviewAnswers from './ReviewAnswers';
import UserProfile from './UserProfile';
import '../styles/Results.css';

function Results() {
  const { state } = useLocation();
  const { 
    score = 0, 
    total = 0, 
    answers = [], 
    questions = [], 
    onQuizComplete 
  } = state || {};

  const percentage = total > 0 ? ((score / total) * 100).toFixed(1) : 0;
  const passingThreshold = 70;
  
  useEffect(() => {
    if (onQuizComplete && typeof onQuizComplete === 'function') {
      onQuizComplete({ score, total, percentage });
    }
  }, [score, total, percentage, onQuizComplete]);

  const getResultStatus = () => {
    if (percentage >= 80) return 'Excellent';
    if (percentage >= passingThreshold) return 'Good';
    return 'Needs Improvement';
  };

  if (!questions.length || !total) {
    return (
      <div className="results-container error">
        <h3>Error</h3>
        <p>No quiz data available</p>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="results-container">
      <header className="results-header">
        <h3>Medical Quiz Results</h3>
        <span className="timestamp">{new Date().toLocaleDateString()}</span>
      </header>

      <section className="score-summary">
        <p
          className={`result-message ${getResultStatus().toLowerCase().replace(' ', '-')}`}
          aria-label={`Score: ${score} out of ${total}`}
        >
          <span className="score-text">
            Your Score: {score}/{total} ({percentage}%)
          </span>
          <span className="status-text">{getResultStatus()}</span>
        </p>
        
        <div className="score-details">
          <p>Questions Answered: {answers.length}</p>
          <p>Passing Threshold: {passingThreshold}%</p>
        </div>
      </section>

      <section className="user-section">
        <UserProfile onQuizComplete={onQuizComplete} />
      </section>

      <section className="review-section">
        <ReviewAnswers 
          answers={answers} 
          questions={questions}
          showExplanations
        />
      </section>

      <nav className="results-navigation">
        <Link to="/" className="btn btn-primary">Back to Home</Link>
        <Link to="/quiz" className="btn btn-secondary">Try Again</Link>
      </nav>
    </div>
  );
}

export default Results;