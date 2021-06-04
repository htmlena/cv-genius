import React from 'react';
import './style.scss';

const Home = () => {
  return (
    <div className="container">
      <h1>Create a CV that will land you a job</h1>
      <p>
        Looking for a job can be challenging, but we are here to empower you to
        make the best first impression with your CV.
      </p>
      <button className="create-cv">Create a CV</button>
      <img src={require('./img/13038.jpg')} alt="computer-cv"></img>
    </div>
  );
};

export default Home;
{
  /* <img src={require('./logo.jpeg')} /> */
}
