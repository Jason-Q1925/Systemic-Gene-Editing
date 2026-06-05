import React from 'react';
import './Footer_REDESIGN.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>BioResonance</h4>
            <p>Exploring quantum biology and systemic genetic editing.</p>
            <div className="dev-status">
              <span className="status-badge active">Active Development</span>
            </div>
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
            <h4>Resources</h4>
            <ul>
              <li><a href="https://google.com">Original Article</a></li>
              <li><a href="/about">Learn More</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p><span className="copyright">&copy;</span> 2026 BioResonance · All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
