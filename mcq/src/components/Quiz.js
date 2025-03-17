import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuestionCard from './QuestionCard';

// Import all specialty question sets as default exports
import anesthesiologyQuestions from '../data/anesthesiology';
import cardiologyQuestions from '../data/cardiology';
import dermatologyQuestions from '../data/dermatology';
import endocrinologyQuestions from '../data/endocrinology';
import gastroenterologyQuestions from '../data/gastroenterology';
import infectiousdiseasesQuestions from '../data/infectiousdiseases';
import internalMedicineQuestions from '../data/internalMedicine';
import nephrologyQuestions from '../data/nephrology';
import neurologyQuestions from '../data/neurology';
import obstetricsGynecologyQuestions from '../data/obstetricsGynecology';
import ophthalmologyQuestions from '../data/ophthalmology';
import orthopedicsQuestions from '../data/orthopedics';
import pediatricsQuestions from '../data/pediatrics';
import pulmonologyQuestions from '../data/pulmonology';
import rheumatologyQuestions from '../data/rheumatology';
import urologyQuestions from '../data/urology';
import hematologyQuestions from '../data/hematology';
import plasticSurgeryQuestions from '../data/plasticSurgery';
import familyMedicineQuestions from '../data/familyMedicine';
import pathologyQuestions from '../data/pathology';
import otolaryngologyQuestions from '../data/otolaryngology';
import emergencyMedicineQuestions from '../data/emergencyMedicine';

// Map specialty IDs (routes) to their question sets
const specialtyMap = {
  anesthesiology: anesthesiologyQuestions,
  cardiology: cardiologyQuestions,
  dermatology: dermatologyQuestions,
  endocrinology: endocrinologyQuestions,
  gastroenterology: gastroenterologyQuestions,
  infectiousdiseases: infectiousdiseasesQuestions,
  internalMedicine: internalMedicineQuestions,
  nephrology: nephrologyQuestions,
  neurology: neurologyQuestions,
  obstetricsGynecology: obstetricsGynecologyQuestions,
  ophthalmology: ophthalmologyQuestions,
  orthopedics: orthopedicsQuestions,
  pediatrics: pediatricsQuestions,
  pulmonology: pulmonologyQuestions,
  rheumatology: rheumatologyQuestions,
  urology: urologyQuestions,
  hematology: hematologyQuestions,
  plasticSurgery: plasticSurgeryQuestions,
  familyMedicine: familyMedicineQuestions,
  pathology: pathologyQuestions,
  otolaryngology: otolaryngologyQuestions,
  emergencyMedicine: emergencyMedicineQuestions,
};

function Quiz() {
  const { specialtyId } = useParams(); // e.g., "anesthesiology"
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const questionSet = specialtyMap[specialtyId];
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

  if (questions.length === 0) return <p>No questions found for this specialty.</p>;

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