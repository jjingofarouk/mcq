import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuestionCard from './QuestionCard';
import ProgressTracker from './ProgressTracker';
import Timer from './Timer';
import QuizSettings from './QuizSettings';
import anesthesiologyQuestions from '../data/anesthesiology';
import cardiologyQuestions from '../data/cardiology';
import dermatologyQuestions from '../data/dermatology';
import endocrinologyQuestions from '../data/endocrinology';
import gastroenterologyQuestions from '../data/gastroenterology'; // Static array
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
import familyMedicineQuestions from '../data/familyMedicine'; // Infinite generator
import pathologyQuestions from '../data/pathology';
import otolaryngologyQuestions from '../data/otolaryngology';
import emergencyMedicineQuestions from '../data/emergencyMedicine';

const specialtyMap = {
  anesthesiology: anesthesiologyQuestions,
  cardiology: cardiologyQuestions,
  dermatology: dermatologyQuestions,
  endocrinology: endocrinologyQuestions,
  gastroenterology: gastroenterologyQuestions, // Static array
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
  familyMedicine: familyMedicineQuestions, // Generator function
  pathology: pathologyQuestions,
  otolaryngology: otolaryngologyQuestions,
  emergencyMedicine: emergencyMedicineQuestions,
};

// Utility function to fetch questions from either a static array or a generator
function getQuestionsFromSource(source, count, startId = 1) {
  if (typeof source === 'function') {
    // Generator case (e.g., familyMedicineQuestions)
    const generator = source(startId);
    const questions = [];
    for (let i = 0; i < count; i++) {
      questions.push(generator.next().value);
    }
    return questions;
  } else {
    // Static array case (e.g., gastroenterologyQuestions)
    const shuffled = [...source].sort(() => 0.5 - Math.random());
    // If the array has fewer questions than requested, return all available
    return shuffled.slice(0, Math.min(count, source.length));
  }
}

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
    const questionSource = specialtyMap[specialtyId];
    if (questionSource) {
      const fetchedQuestions = getQuestionsFromSource(questionSource, questionCount, 2); // Start ID after existing
      setQuestions(fetchedQuestions);
    }
  }, [specialtyId, questionCount]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    const isCorrect = answer === questions[currentQuestionIndex].correctAnswer;
    if (isCorrect) setScore(score + 1);
    setUserAnswers((prev) => [
      ...prev.slice(0, currentQuestionIndex),
      answer,
      ...prev.slice(currentQuestionIndex + 1),
    ]);
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
          onQuizComplete: { score: (score / questions.length) * 100 },
        },
      });
    }
  };

  const handleTimeUp = () => {
    setShowFeedback(true);
    setUserAnswers((prev) => [
      ...prev.slice(0, currentQuestionIndex),
      null,
      ...prev.slice(currentQuestionIndex + 1),
    ]);
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
      <QuizSettings onSettingsChange={handleSettingsChange} />
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