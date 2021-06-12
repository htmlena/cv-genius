import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import './style.css';

const NavLinks = ({ resetNavbar }) => (
  <ul className="nav-list">
    <li className="nav-list-item">
      <Link onClick={resetNavbar} className="nav-link" to="/">
        Home
      </Link>
    </li>
    <li className="nav-list-item">
      <Link onClick={resetNavbar} className="nav-link" to="/cv-generator">
        CV Generator
      </Link>
    </li>
    <li className="nav-list-item">
      <Link onClick={resetNavbar} className="nav-link" to="/cv-guide">
        CV Guide
      </Link>
    </li>
    <li className="nav-list-item">
      <Link onClick={resetNavbar} className="nav-link" to="/about">
        About
      </Link>
    </li>
  </ul>
);

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="logo">
        <Link className="logo-link" to="/">
          CV Genius
        </Link>
      </div>
      <div className="nav--desktop">
        <NavLinks resetNavbar={() => setNavbarOpen(false)} />
      </div>

      <div className="nav--mobile">
        <Hamburger
          color="#3c64b1"
          toggle={setNavbarOpen}
          toggled={navbarOpen}
        />
        {navbarOpen && (
          <div className="mobile-nav-wrapper">
            <NavLinks resetNavbar={() => setNavbarOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
