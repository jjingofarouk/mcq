import React from 'react';
import SpecialtySelector from '../components/SpecialtySelector';

const Banner = () => (
  <div className="banner">
    <h1>Welcome to the ClinIQ App</h1>
    <p>Prepare for medical exams and expand your knowledge across specialties!</p>
  </div>
);

const Features = () => (
  <div className="features">
    <h2>Key Features:</h2>
    <ul>
      <li><strong>Diverse MCQ Categories:</strong> Choose from multiple medical specialties.</li>
      <li><strong>Detailed Explanations:</strong> Learn from detailed answer explanations.</li>
      <li><strong>Practice Mode:</strong> Track your progress with quizzes.</li>
      <li><strong>Accessible Anywhere:</strong> Study on any device.</li>
    </ul>
  </div>
);

const Home = () => (
  <div className="home-container">
    <Banner />
    <Features />
    <SpecialtySelector />
  </div>
);

export default Home;