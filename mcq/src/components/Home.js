import React from 'react';
import { Link } from 'react-router-dom';
import SpecialtySelector from './components/SpecialtySelector';

const Banner = () => (
  <div style={{ backgroundColor: '#4CAF50', color: 'white', padding: '20px', textAlign: 'center' }}>
    <h1>Welcome to the Medical MCQ App</h1>
    <p>Prepare for medical exams and expand your knowledge across specialties!</p>
  </div>
);

const Features = () => (
  <div style={{ padding: '20px', marginTop: '30px', backgroundColor: '#f9f9f9' }}>
    <h2>Key Features:</h2>
    <ul>
      <li><strong>Diverse MCQ Categories:</strong> Choose from multiple medical specialties.</li>
      <li><strong>Detailed Explanations:</strong> Learn from detailed answer explanations.</li>
      <li><strong>Practice Mode:</strong> Track your progress with quizzes.</li>
      <li><strong>Accessible Anywhere:</strong> Study on any device.</li>
    </ul>
  </div>
);

const CallToAction = () => (
  <div style={{ padding: '20px', marginTop: '30px', textAlign: 'center', backgroundColor: '#ffeb3b' }}>
    <h2>Ready to Start Practicing?</h2>
    <p>Select a specialty below to begin!</p>
    <Link to="/specialties">
      <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
        Start Now
      </button>
    </Link>
  </div>
);

const Home = () => (
  <div>
    <Banner />
    <Features />
    <CallToAction />
  </div>
);

export default Home;