import React from 'react';

// A simple banner component to highlight the app's purpose
const Banner = () => {
  return (
    <div style={{ backgroundColor: '#4CAF50', color: 'white', padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to the Medical MCQ App</h1>
      <p>Prepare for medical exams and expand your knowledge across different specialties!</p>
    </div>
  );
};

// A section to introduce the app's features
const Features = () => {
  return (
    <div style={{ padding: '20px', marginTop: '30px', backgroundColor: '#f9f9f9' }}>
      <h2>Key Features:</h2>
      <ul>
        <li><strong>Diverse MCQ Categories:</strong> Choose from multiple medical specialties to focus on.</li>
        <li><strong>Detailed Explanations:</strong> Each question comes with an informative explanation to help you understand the correct answer.</li>
        <li><strong>Practice Mode:</strong> Take quizzes and track your progress as you go.</li>
        <li><strong>Accessible Anywhere:</strong> Study on the go with your mobile or desktop device.</li>
      </ul>
    </div>
  );
};

// A call-to-action section encouraging users to start practicing
const CallToAction = () => {
  return (
    <div style={{ padding: '20px', marginTop: '30px', textAlign: 'center', backgroundColor: '#ffeb3b' }}>
      <h2>Ready to Start Practicing?</h2>
      <p>Select a specialty from the menu and begin your journey towards mastering medical knowledge!</p>
      <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
        Start Now
      </button>
    </div>
  );
};

// The main Home component combining the sections
const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <CallToAction />
    </div>
  );
};

export default Home;