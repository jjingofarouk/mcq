import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} ClinIQ. All rights reserved.</p>
      <p>
        Created by <a href="mailto:jjingofaroukk@gmail.com">Jjingo Farouk</a> 
      </p>
    </footer>
  );
}

export default Footer;