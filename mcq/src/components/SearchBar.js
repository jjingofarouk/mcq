import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    // Handle keyboard shortcuts
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const clearSearch = () => {
    setQuery('');
    onSearch('');
    inputRef.current.focus();
  };

  return (
    <div className={`search-bar-container ${isFocused ? 'focused' : ''}`}>
      <Search size={18} className="search-icon" />
      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder="Search specialties..."
        value={query}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {query && (
        <button className="clear-button" onClick={clearSearch} aria-label="Clear search">
          <X size={16} />
        </button>
      )}
      <div className="keyboard-shortcut">
        <span>⌘</span>
        <span>K</span>
      </div>
    </div>
  );
}

export default SearchBar;