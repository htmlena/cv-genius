import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Link className="logo-link" to="/">
          CV Genius
        </Link>
      </div>
      <ul>
        <li className="nav-list">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-list">
          <Link className="nav-link" to="/cv-generator">
            CV Generator
          </Link>
        </li>
        <li className="nav-list">
          <Link className="nav-link" to="/tips">
            Tips
          </Link>
        </li>
        <li className="nav-list">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
