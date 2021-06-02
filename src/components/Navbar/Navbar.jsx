import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="nav-list">
          <Link to="/">Úvodní stránka</Link>
        </li>
        <li className="nav-list">
          <Link to="/cv-generator">CV Generátor</Link>
        </li>
        <li className="nav-list">
          <Link to="/about">O nás</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
