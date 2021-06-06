import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list__container">
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
          <Link className="nav-link" to="/about">
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
