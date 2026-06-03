import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-symbol">⟨ψ⟩</span>
          QUANTUM ENTANGLEMENT BIO
        </Link>
        
        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/demo" className="nav-link nav-link-highlight" onClick={() => setMobileMenuOpen(false)}>
              Demo
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/theory" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Theory
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/applications" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              Applications
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
