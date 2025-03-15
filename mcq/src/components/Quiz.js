// src/components/Quiz.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import cardiologyQuestions from '../data/cardiology';
import neurologyQuestions from '../data/neurology'; // Import neurology questions
import QuestionCard from './QuestionCard';

const questionData = {
  cardiology: cardiologyQuestions,
  neurology: neurologyQuestions,
};

function Quiz() {
  const { specialtyId, questionId } = useParams();
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    const specialtyQuestions = questionData[specialtyId];
    const question = specialtyQuestions.find((q) => q.id === parseInt(questionId));
    setCurrentQuestion(question);
  }, [specialtyId, questionId]);

  const handleSubmit = () => {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    navigate('/results', { state: { isCorrect, explanation: currentQuestion.explanation } });
  };

  if (!currentQuestion) return <div>Loading...</div>;

  return (
    <div>
      <QuestionCard
        question={currentQuestion.question}
        choices={currentQuestion.choices}
        selectedAnswer={selectedAnswer}
        onAnswerSelect={setSelectedAnswer}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Quiz;
