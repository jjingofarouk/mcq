// src/components/SpecialtySelector.js

import React from 'react';
import { Link } from 'react-router-dom';

const specialties = [
  { id: 1, name: 'Neurology' },
  { id: 2, name: 'Cardiology' },
  { id: 3, name: 'Orthopedics' },
  { id: 4, name: 'Pediatrics' },
  { id: 5, name: 'Psychiatry' },
  { id: 6, name: 'Endocrinology' },
  { id: 7, name: 'Dermatology' },
  { id: 8, name: 'Gastroenterology' },
  { id: 9, name: 'Rheumatology' },
  { id: 10, name: 'Infectious Diseases' },
  { id: 11, name: 'Obstetrics & Gynecology' },
  { id: 12, name: 'Urology' },
  { id: 13, name: 'Ophthalmology' },
  { id: 14, name: 'ENT' },
  { id: 15, name: 'Nephrology' },
  { id: 16, name: 'Pulmonology' },
  { id: 17, name: 'Cardiothoracic Surgery' },
  { id: 18, name: 'Orthopedic Surgery' },
  // Add more specialties as needed
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