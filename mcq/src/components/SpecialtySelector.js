import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, X, Tag } from 'lucide-react';
import SearchBar from './SearchBar';
import './SpecialtySelector.css';

// Specialty icons mapping
const getSpecialtyIcon = (specialty) => {
  // This would ideally use specific medical icons for each specialty
  // For this example, we're using a Tag icon for all
  return <Tag size={18} />;
};

function SpecialtySelector() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeSpecialties, setActiveSpecialties] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const specialties = [
    { id: 1, name: 'Cardiology', route: 'cardiology', category: 'Internal Medicine', popular: true },
    { id: 2, name: 'Dermatology', route: 'dermatology', category: 'Specialized', popular: true },
    { id: 3, name: 'Endocrinology', route: 'endocrinology', category: 'Internal Medicine' },
    { id: 4, name: 'Gastroenterology', route: 'gastroenterology', category: 'Internal Medicine' },
    { id: 5, name: 'Infectious Disease', route: 'infectiousdiseases', category: 'Internal Medicine' },
    { id: 6, name: 'Internal Medicine', route: 'internalMedicine', category: 'Internal Medicine', popular: true },
    { id: 7, name: 'Nephrology', route: 'nephrology', category: 'Internal Medicine' },
    { id: 8, name: 'Neurology', route: 'neurology', category: 'Specialized', popular: true },
    { id: 9, name: 'Obstetrics & Gynecology', route: 'obstetricsGynecology', category: 'Surgical', popular: true },
    { id: 10, name: 'Ophthalmology', route: 'ophthalmology', category: 'Specialized' },
    { id: 11, name: 'Orthopedics', route: 'orthopedics', category: 'Surgical' },
    { id: 12, name: 'Pediatrics', route: 'pediatrics', category: 'Primary Care', popular: true },
    { id: 13, name: 'Pulmonology', route: 'pulmonology', category: 'Internal Medicine' },
    { id: 14, name: 'Rheumatology', route: 'rheumatology', category: 'Internal Medicine' },
    { id: 15, name: 'Urology', route: 'urology', category: 'Surgical' },
    { id: 16, name: 'Hematology', route: 'hematology', category: 'Internal Medicine' },
    { id: 17, name: 'Anesthesiology', route: 'anesthesiology', category: 'Specialized' },
    { id: 18, name: 'Plastic Surgery', route: 'plasticSurgery', category: 'Surgical' },
    { id: 19, name: 'Family Medicine', route: 'familyMedicine', category: 'Primary Care', popular: true },
    { id: 20, name: 'Pathology', route: 'pathology', category: 'Specialized' },
    { id: 21, name: 'Otolaryngology', route: 'otolaryngology', category: 'Surgical' },
    { id: 22, name: 'Emergency Medicine', route: 'emergencyMedicine', category: 'Primary Care', popular: true },
  ];

  // All unique categories
  const categories = ['All', 'Popular', ...new Set(specialties.map(s => s.category))];

  useEffect(() => {
    // Filter specialties based on search query and category
    let filtered = specialties;
    
    if (searchQuery) {
      filtered = filtered.filter((specialty) =>
        specialty.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (selectedCategory === 'Popular') {
      filtered = filtered.filter(specialty => specialty.popular);
    } else if (selectedCategory !== 'All') {
      filtered = filtered.filter(specialty => specialty.category === selectedCategory);
    }
    
    setActiveSpecialties(filtered);
  }, [searchQuery, selectedCategory]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsFilterOpen(false);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
  };

  return (
    <div className="specialty-selector">
      <div className="specialty-selector-header">
        <div className="search-container">
          <SearchBar onSearch={handleSearch} />
          <button 
            className="filter-button"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            aria-label="Filter specialties"
          >
            <Filter size={20} />
          </button>
        </div>
        
        {(searchQuery || selectedCategory !== 'All') && (
          <div className="active-filters">
            <button className="clear-filters" onClick={clearFilters}>
              <X size={14} /> Clear filters
            </button>
          </div>
        )}
      </div>
      
      {isFilterOpen && (
        <div className="category-filters">
          {categories.map((category) => (
            <button 
              key={category}
              className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      
      <div className="specialties-grid">
        {activeSpecialties.length > 0 ? (
          activeSpecialties.map((specialty) => (
            <Link to={`/quiz/${specialty.route}`} key={specialty.id} className="specialty-card">
              <div className="specialty-icon">
                {getSpecialtyIcon(specialty.name)}
              </div>
              <div className="specialty-name">{specialty.name}</div>
              {specialty.popular && <div className="specialty-badge">Popular</div>}
            </Link>
          ))
        ) : (
          <div className="no-results">
            <p>No specialties match your search.</p>
            <button className="btn-secondary" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SpecialtySelector;