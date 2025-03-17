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

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import ProgressTracker from './ProgressTracker';
import Timer from './Timer';
import QuizSettings from './QuizSettings'; // Add this
import anesthesiologyQuestions from '../data/anesthesiology';
import cardiologyQuestions from '../data/cardiology';
// ... other imports


function Quiz() {
  const { specialtyId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [questionCount, setQuestionCount] = useState(10); // Default to 10

  useEffect(() => {
    const questionSet = specialtyMap[specialtyId];
    if (questionSet) {
      const shuffled = [...questionSet].sort(() => 0.5 - Math.random()); // Randomize
      setQuestions(shuffled.slice(0, questionCount)); // Limit to questionCount
    }
  }, [specialtyId, questionCount]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) setScore(score + 1);
    setUserAnswers((prev) => [...prev.slice(0, currentQuestionIndex), answer, ...prev.slice(currentQuestionIndex + 1)]);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/results', { 
        state: { 
          score, 
          total: questions.length, 
          answers: userAnswers, 
          questions,
          onQuizComplete: { score: (score / questions.length) * 100 }
        } 
      });
    }
  };

  const handleTimeUp = () => {
    setShowFeedback(true);
    setUserAnswers((prev) => [...prev.slice(0, currentQuestionIndex), null, ...prev.slice(currentQuestionIndex + 1)]);
  };

  const handleSettingsChange = (settings) => {
    setQuestionCount(settings.questionCount);
    setCurrentQuestionIndex(0); // Reset quiz
    setScore(0);
    setUserAnswers([]);
  };

  if (questions.length === 0) return <p>No questions found for this specialty.</p>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h1>{specialtyId.charAt(0).toUpperCase() + specialtyId.slice(1)} Quiz</h1>
      <QuizSettings onSettingsChange={handleSettingsChange} /> {/* Add here */}
      <ProgressTracker current={currentQuestionIndex + 1} total={questions.length} />
      <Timer timeLimit={60} onTimeUp={handleTimeUp} key={currentQuestionIndex} />
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