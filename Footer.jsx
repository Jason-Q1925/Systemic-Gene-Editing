import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Quantum Entanglement Biology</h4>
            <p>Exploring the intersection of quantum mechanics and genetic engineering.</p>
          </div>
          
          <div className="footer-section">
            <h4>Navigation</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/demo">Demo</a></li>
              <li><a href="/theory">Theory</a></li>
              <li><a href="/applications">Applications</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>References</h4>
            <p>Based on peer-reviewed quantum biology research and genetic engineering studies.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Quantum Entanglement Biology Research. All rights reserved.</p>
          <p className="footer-note">This is a theoretical framework presented for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
