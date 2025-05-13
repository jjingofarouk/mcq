// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <Navbar onSidebarToggle={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:specialtyId" element={<Quiz />} />
          <Route path="/results" element={<Results />} />
          <Route path="/quizzes" element={<Home />} />
          <Route path="/progress" element={<Home />} />
          <Route path="/leaderboard" element={<Home />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/logout" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;