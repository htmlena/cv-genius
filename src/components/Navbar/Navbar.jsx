import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-list__container">
        <li className="nav-list">
          <Link className="nav-link" to="/">
            Úvodní stránka
          </Link>
        </li>
        <li className="nav-list">
          <Link className="nav-link" to="/cv-generator">
            CV Generátor
          </Link>
        </li>
        <li className="nav-list">
          <Link className="nav-link" to="/about">
            O nás
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
