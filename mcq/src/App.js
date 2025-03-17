import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'; // Import the new Home component
import Quiz from './components/Quiz';
import Results from './components/Results';
import SpecialtySelector from './components/SpecialtySelector';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specialty" element={<SpecialtySelector />} />
          <Route path="/quiz/:specialtyId/:questionId" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;