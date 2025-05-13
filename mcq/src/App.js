// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import ProgressTracker from './components/ProgressTracker';
import QuestionCard from './components/QuestionCard';
import QuizSettings from './components/QuizSettings';
import ReviewAnswers from './components/ReviewAnswers';
import SearchBar from './components/SearchBar';
import SpecialtySelector from './components/SpecialtySelector';
import Timer from './components/Timer';
import UserProfile from './components/UserProfile';
import AuthPage from './components/AuthPage';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Router>
      <div className={`App ${isDarkMode ? 'dark' : ''}`}>
        <Navbar
          onSidebarToggle={toggleSidebar}
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
        />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <main style={{ paddingTop: '96px' }}> {/* Increased padding-top to account for navbar height + margin */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizzes" element={<SpecialtySelector />} />
            <Route path="/quiz/:specialtyId" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/progress" element={<ProgressTracker />} />
            <Route path="/leaderboard" element={<Home />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/settings" element={<Home />} />
            <Route path="/help" element={<Home />} />
            <Route path="/logout" element={<Home />} />
            <Route path="/review" element={<ReviewAnswers />} />
                        <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;