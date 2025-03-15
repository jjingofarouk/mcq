// src/components/SpecialtySelector.js

import React from 'react';
import { Link } from 'react-router-dom';

const specialties = [
  { id: 1, name: 'Cardiology' },
  { id: 2, name: 'Dermatology' },
  { id: 3, name: 'Endocrinology' },
  { id: 4, name: 'Gastroenterology' },
  { id: 5, name: 'Infectious Disease' },
  { id: 6, name: 'Internal Medicine' },
  { id: 7, name: 'Nephrology' },
  { id: 8, name: 'Neurology' },
  { id: 9, name: 'Obstetrics' },
  { id: 10, name: 'Ophthalmology' },
  { id: 11, name: 'Orthopedics' },
  { id: 12, name: 'Pediatrics' },
  { id: 13, name: 'Pulmonology' },
  { id: 14, name: 'Rheumatology' },
  { id: 15, name: 'Urology' },
  { id: 16, name: 'Hematology' },
  { id: 17, name: 'Anesthesiology' },
  { id: 18, name: 'Plastic Surgery' },
  { id: 19, name: 'Family Medicine' },
  { id: 20, name: 'Pathology' },
  { id: 21, name: 'Otolaryngology' },
  { id: 22, name: 'Emergency Medicine' },
];

function SpecialtySelector() {
  return (
    <div>
      <h2>Select a Specialty</h2>
      <ul>
        {specialties.map((specialty) => (
          <li key={specialty.id}>
            <Link to={`/quiz/${specialty.id}/1`}>{specialty.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpecialtySelector;