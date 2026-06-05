import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-symbol">⟨ψ⟩</span>
          BioResonance
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
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/demo" 
              className={`nav-link ${isActive('/demo') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Demo
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/theory" 
              className={`nav-link ${isActive('/theory') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Theory
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/applications" 
              className={`nav-link ${isActive('/applications') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Applications
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
