import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Quiz from './components/Quiz';
import Results from './components/Results';
import SpecialtySelector from './components/SpecialtySelector';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Welcome to the Medical MCQ Quiz</h1>
          <p>Your go-to app for practicing medical questions across specialties.</p>
        </header>

        <section className="cta">
          <h2>Start Practicing</h2>
          <Link to="/specialty" className="cta-btn">Select Specialty</Link>
        </section>

        <Routes>
          <Route path="/specialty" element={<SpecialtySelector />} />
          <Route path="/quiz/:specialtyId/:questionId" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;