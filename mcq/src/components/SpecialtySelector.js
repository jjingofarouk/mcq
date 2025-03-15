// src/components/SpecialtySelector.js

import React from 'react';
import { Link } from 'react-router-dom';

function SpecialtySelector() {
  const specialties = ['Cardiology', 'Neurology', 'Pulmonology'];

  return (
    <div>
      <h2>Select a Specialty</h2>
      <ul>
        {specialties.map((specialty, index) => (
          <li key={specialty}>
            <Link to={`/quiz/${specialty.toLowerCase()}/1`}>{specialty}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpecialtySelector;
