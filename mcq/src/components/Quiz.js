import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import * as data from '../data'; // Import all specialty data

function Quiz() {
  const { specialtyId } = useParams(); // e.g., "anesthesiology"
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const questionSet = data[`${specialtyId}Questions`];
    setQuestions(questionSet || []);
  }, [specialtyId]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) setScore(score + 1);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/results', { state: { score, total: questions.length } });
    }
  };

  if (questions.length === 0) return <p>Loading questions...</p>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h1>{specialtyId.charAt(0).toUpperCase() + specialtyId.slice(1)} Quiz</h1>
      <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
      <QuestionCard
        question={currentQuestion.question}
        choices={currentQuestion.choices}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={handleAnswerSelect}
      />
      {showFeedback && (
        <div>
          <p>{selectedAnswer === currentQuestion.correctAnswer ? 'Correct!' : 'Incorrect'}</p>
          <p><strong>Explanation:</strong> {currentQuestion.explanation}</p>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
}

export default Quiz;