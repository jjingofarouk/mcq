// src/components/ReviewAnswers.js
import React from 'react';

function ReviewAnswers({ answers, questions }) {
  return (
    <div className="review-answers">
      <h2>Review Your Answers</h2>
      {questions.map((q, index) => (
        <div key={q.id} className="review-item">
          <p><strong>Q{index + 1}:</strong> {q.question}</p>
          <p>Your Answer: {answers[index] || 'Not answered'} 
            {answers[index] === q.correctAnswer ? ' ✅' : ' ❌'}</p>
          <p>Correct Answer: {q.correctAnswer}</p>
          <details>
            <summary>Explanation</summary>
            <p>{q.explanation}</p>
          </details>
        </div>
      ))}
    </div>
  );
}

export default ReviewAnswers;