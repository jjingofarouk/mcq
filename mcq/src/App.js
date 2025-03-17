import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:specialtyId" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;