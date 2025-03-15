// src/data/cardiology.js

const cardiologyQuestions = [
  {
    id: 1,
    question: 'What is the most common cause of a heart attack?',
    choices: ['Smoking', 'High cholesterol', 'Low blood pressure', 'Obesity'],
    correctAnswer: 'High cholesterol',
    explanation:
      'High cholesterol is a major risk factor for atherosclerosis, which can lead to heart attacks.',
  },
  {
    id: 2,
    question: 'What is the normal range for blood pressure?',
    choices: ['120/80 mmHg', '100/60 mmHg', '140/90 mmHg', '160/100 mmHg'],
    correctAnswer: '120/80 mmHg',
    explanation:
      'A normal blood pressure reading is around 120/80 mmHg. Higher or lower readings may indicate hypertension or hypotension.',
  },
  // Add more cardiology questions
];

export default cardiologyQuestions;
