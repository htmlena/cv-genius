import React from 'react';
import './style.scss';
import imagehome from './img/computer.jpg';
import cvexample from './img/cv-example.jpg';

const Home = () => {
  return (
    <div className="container-homepage">
      <div className="container-home">
        <h1>Create a CV that will land you a job</h1>
        <p>
          Looking for a job can be challenging, but we are here to empower you
          to make the best first impression with your CV.
        </p>
        <button className="create-cv">Create your CV</button>
        <img className="image-home" src={imagehome} alt="computer"></img>
      </div>
      <div className="container-home-guide">
        <h2 className="header-medium">
          Follow the tips that will lead you through the creation of your CV
        </h2>
        <p>
          This guide will help you to highlight your most relevant experience
          and skills in order to personalize your CV to the certain job offer
        </p>
        <p>
          Once you finish, you can download your CV in pdf format, ready to be
          sent.
        </p>
        <img className="cv-example" src={cvexample} alt="cv-example" />
      </div>
      <div className="container-home-statistics">
        <h2 className="header-medium">Did you know that...</h2>
        <div className="container-home-numbers-text">
          <div className="container-home-numbers">
            <p>7%</p>
            <p>10%</p>
            <p>55%</p>
          </div>
          <div className="container-home-text">
            <p>CV seen by recruiters.</p>
            <p>Get to the second round.</p>
            <p>Get the job.</p>
          </div>
        </div>
      </div>
      <div className="container-home-action">
        <h2 className="header-medium">Let the journey begin!</h2>
        <p>Create a custom CV for a position you are applying for.</p>
        <button className="create-cv">Create your CV</button>
      </div>
    </div>
  );
};

export default Home;
