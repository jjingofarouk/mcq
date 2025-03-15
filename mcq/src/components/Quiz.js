// src/components/Quiz.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import neurologyQuestions from '../data/neurology';
import cardiologyQuestions from '../data/cardiology';
import orthopedicsQuestions from '../data/orthopedics';
import pediatricsQuestions from '../data/pediatrics';
import psychiatryQuestions from '../data/psychiatry';
import endocrinologyQuestions from '../data/endocrinology';
import dermatologyQuestions from '../data/dermatology';
import gastroenterologyQuestions from '../data/gastroenterology';
import rheumatologyQuestions from '../data/rheumatology';
import infectiousDiseasesQuestions from '../data/infectiousDiseases';
import obstetricsGynecologyQuestions from '../data/obstetricsGynecology';
import urologyQuestions from '../data/urology';
import ophthalmologyQuestions from '../data/ophthalmology';
import ENTQuestions from '../data/ent';
import nephrologyQuestions from '../data/nephrology';
import pulmonologyQuestions from '../data/pulmonology';
import cardiothoracicSurgeryQuestions from '../data/cardiothoracicSurgery';
import orthopedicSurgeryQuestions from '../data/orthopedicSurgery';

const allSpecialties = {
  1: neurologyQuestions,
  2: cardiologyQuestions,
  3: orthopedicsQuestions,
  4: pediatricsQuestions,
  5: psychiatryQuestions,
  6: endocrinologyQuestions,
  7: dermatologyQuestions,
  8: gastroenterologyQuestions,
  9: rheumatologyQuestions,
  10: infectiousDiseasesQuestions,
  11: obstetricsGynecologyQuestions,
  12: urologyQuestions,
  13: ophthalmologyQuestions,
  14: ENTQuestions,
  15: nephrologyQuestions,
  16: pulmonologyQuestions,
  17: cardiothoracicSurgeryQuestions,
  18: orthopedicSurgeryQuestions,
  // Add more specialties as needed
};

function Quiz() {
  const { specialtyId, questionId } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(null);

  useEffect(() => {
    const questions = allSpecialties[specialtyId];
    if (questions) {
      const question = questions.find(q => q.id === parseInt(questionId));
      setCurrentQuestion(question);
    }
  }, [specialtyId, questionId]);

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <ul>
        {currentQuestion.choices.map((choice, index) => (
          <li key={index}>{choice}</li>
        ))}
      </ul>
      <p><strong>Explanation:</strong> {currentQuestion.explanation}</p>
    </div>
  );
}

export default Quiz;