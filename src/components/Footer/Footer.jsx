import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="developed-info-container">
        <div className="developed-links-container">
          ©{' '}
          <a
            rel="noreferrer"
            className="developed-link"
            href="https://github.com/paulipa1"
            target="_blank"
          >
            Paula
          </a>{' '}
          &{' '}
          <a
            rel="noreferrer"
            className="developed-link"
            href="https://htmlena.dev/"
            target="_blank"
          >
            Lenka
          </a>{' '}
        </div>
      </div>
      <div className="resources-info">
        <a
          rel="noreferrer"
          className="resource-link"
          href="https://www.freepik.com/vectors/hand"
          target="_blank"
        >
          Hand vector created by pch.vector - www.freepik.com
        </a>
        <a
          rel="noreferrer"
          className="resource-link"
          href="https://zety.com/blog/resume-statistics"
          target="_blank"
        >
          {' '}
          Statistics from www.zety.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
