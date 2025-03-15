import React, { useState } from 'react';

// Import all specialties
import cardiologyQuestions from '../data/cardiology';
import dermatologyQuestions from '../data/dermatology';
import endocrinologyQuestions from '../data/endocrinology';
import gastroenterologyQuestions from '../data/gastroenterology';
import infectiousDiseaseQuestions from '../data/infectiousdiseases';
import internalMedicineQuestions from '../data/internalMedicine';
import nephrologyQuestions from '../data/nephrology';
import neurologyQuestions from '../data/neurology';
import obstetricsQuestions from '../data/obstetricsGynecology';
import ophthalmologyQuestions from '../data/ophthalmology';
import orthopedicsQuestions from '../data/orthopedics';
import pediatricsQuestions from '../data/pediatrics';
import pulmonologyQuestions from '../data/pulmonology';
import rheumatologyQuestions from '../data/rheumatology';
import urologyQuestions from '../data/urology';
import hematologyQuestions from '../data/hematology';
import anesthesiologyQuestions from '../data/anesthesiology';
import plasticSurgeryQuestions from '../data/plasticSurgery';
import familyMedicineQuestions from '../data/familyMedicine';
import pathololgyQuestions from '../data/pathology';
import otolaryngologyQuestions from '../data/otolaryngology';
import emergencyMedicineQuestions from '../data/emergencyMedicine';

const specialties = [
  { name: 'Cardiology', questions: cardiologyQuestions },
  { name: 'Dermatology', questions: dermatologyQuestions },
  { name: 'Endocrinology', questions: endocrinologyQuestions },
  { name: 'Gastroenterology', questions: gastroenterologyQuestions },
  { name: 'Infectious Disease', questions: infectiousDiseaseQuestions },
  { name: 'Internal Medicine', questions: internalMedicineQuestions },
  { name: 'Nephrology', questions: nephrologyQuestions },
  { name: 'Neurology', questions: neurologyQuestions },
  { name: 'Obstetrics', questions: obstetricsQuestions },
  { name: 'Ophthalmology', questions: ophthalmologyQuestions },
  { name: 'Orthopedics', questions: orthopedicsQuestions },
  { name: 'Pediatrics', questions: pediatricsQuestions },
  { name: 'Pulmonology', questions: pulmonologyQuestions },
  { name: 'Rheumatology', questions: rheumatologyQuestions },
  { name: 'Urology', questions: urologyQuestions },
  { name: 'Hematology', questions: hematologyQuestions },
  { name: 'Anesthesiology', questions: anesthesiologyQuestions },
  { name: 'Plastic Surgery', questions: plasticSurgeryQuestions },
  { name: 'Family Medicine', questions: familyMedicineQuestions },
  { name: 'Pathology', questions: pathololgyQuestions },
  { name: 'Otolaryngology', questions: otolaryngologyQuestions },
  { name: 'Emergency Medicine', questions: emergencyMedicineQuestions },
];

const Quiz = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState(specialties[0].name);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer) => {
    const currentSpecialty = specialties.find(specialty => specialty.name === selectedSpecialty);
    const currentQuestion = currentSpecialty.questions[currentQuestionIndex];

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < currentSpecialty.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert(`Quiz Complete! Your score is: ${score + 1}`);
    }
  };

  const handleSpecialtyChange = (event) => {
    setSelectedSpecialty(event.target.value);
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const currentSpecialty = specialties.find(specialty => specialty.name === selectedSpecialty);
  const currentQuestion = currentSpecialty.questions[currentQuestionIndex];

  return (
    <div>
      <h1>Medical Specialty Quiz</h1>
      <select value={selectedSpecialty} onChange={handleSpecialtyChange}>
        {specialties.map((specialty, index) => (
          <option key={index} value={specialty.name}>
            {specialty.name}
          </option>
        ))}
      </select>

      <div>
        <h2>{currentQuestion.question}</h2>
        <div>
          {currentQuestion.choices.map((choice, index) => (
            <button key={index} onClick={() => handleAnswer(choice)}>
              {choice}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;