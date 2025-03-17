import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const specialties = [
  { id: 1, name: 'Cardiology', route: 'cardiology' },
  { id: 2, name: 'Dermatology', route: 'dermatology' },
  { id: 3, name: 'Endocrinology', route: 'endocrinology' },
  { id: 4, name: 'Gastroenterology', route: 'gastroenterology' },
  { id: 5, name: 'Infectious Disease', route: 'infectiousdiseases' },
  { id: 6, name: 'Internal Medicine', route: 'internalMedicine' },
  { id: 7, name: 'Nephrology', route: 'nephrology' },
  { id: 8, name: 'Neurology', route: 'neurology' },
  { id: 9, name: 'Obstetrics', route: 'obstetricsGynecology' },
  { id: 10, name: 'Ophthalmology', route: 'ophthalmology' },
  { id: 11, name: 'Orthopedics', route: 'orthopedics' },
  { id: 12, name: 'Pediatrics', route: 'pediatrics' },
  { id: 13, name: 'Pulmonology', route: 'pulmonology' },
  { id: 14, name: 'Rheumatology', route: 'rheumatology' },
  { id: 15, name: 'Urology', route: 'urology' },
  { id: 16, name: 'Hematology', route: 'hematology' },
  { id: 17, name: 'Anesthesiology', route: 'anesthesiology' },
  { id: 18, name: 'Plastic Surgery', route: 'plasticSurgery' },
  { id: 19, name: 'Family Medicine', route: 'familyMedicine' },
  { id: 20, name: 'Pathology', route: 'pathology' },
  { id: 21, name: 'Otolaryngology', route: 'otolaryngology' },
  { id: 22, name: 'Emergency Medicine', route: 'emergencyMedicine' },
];

function SpecialtySelector() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSpecialties = specialties.filter((specialty) =>
    specialty.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="specialty-selector">
      <h2>Select a Specialty</h2>
      <SearchBar onSearch={setSearchQuery} />
      <ul>
        {filteredSpecialties.map((specialty) => (
          <li key={specialty.id}>
            <Link to={`/quiz/${specialty.route}`}>{specialty.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpecialtySelector;