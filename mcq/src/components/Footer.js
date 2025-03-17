import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Medical MCQ App. All rights reserved.</p>
      <p>
        Created by <a href="mailto:your-email@example.com">Your Name</a> | Powered by <a href="https://xai.com" target="_blank" rel="noopener noreferrer">xAI</a>
      </p>
    </footer>
  );
}

export default Footer;