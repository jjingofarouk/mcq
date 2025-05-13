// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { X, Home, BookOpen, ChartBar, Award, User, LogOut, Settings, HelpCircle } from 'lucide-react';
import './Sidebar.css';

function Sidebar({ isOpen, onClose }) {
  const sidebarItems = [
    { to: '/', label: 'Home', icon: <Home size={20} /> },
    { to: '/quizzes', label: 'Quizzes', icon: <BookOpen size={20} /> },
    { to: '/progress', label: 'Progress', icon: <ChartBar size={20} /> },
    { to: '/leaderboard', label: 'Leaderboard', icon: <Award size={20} /> },
    { to: '/profile', label: 'Profile', icon: <User size={20} /> },
    { to: '/settings', label: 'Settings', icon: <Settings size={20} /> },
    { to: '/help', label: 'Help', icon: <HelpCircle size={20} /> },
    { to: '/logout', label: 'Logout', icon: <LogOut size={20} /> },
  ];

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2 className="text-lg font-semibold text-primary-dark dark:text-primary-light">MediQuiz</h2>
          <button
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>

        <div className="sidebar-items">
          {sidebarItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="sidebar-item"
              onClick={onClose}
            >
              <span className="sidebar-item-icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="flex items-center gap-3 p-4 border-t border-light-gray">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-light dark:bg-primary-dark flex items-center justify-center">
              <User size={24} className="text-primary-dark dark:text-primary-light" />
            </div>
            <div>
              <p className="text-sm font-medium text-dark dark:text-off-white">Dr. Jane Smith</p>
              <p className="text-xs text-medium-gray dark:text-light-gray">jane.smith@medi.com</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sidebar-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
    </>
  );
}

export default Sidebar;