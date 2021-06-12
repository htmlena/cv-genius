import React from 'react';
import Footer from '../Footer/Footer';
import './style.scss';

const About = () => {
  return (
    <>
      <div className="container-about">
        <h1 className="about-title">
          Two former recruiters wanted to share their knowledge and help others
          to write a CV that will stand out.
        </h1>
        <p className="about-citations">
          “Why have you not mentioned in your CV that you got accepted to
          Cambridge University for your Master studies starting in 2 months?”{' '}
        </p>
        <hr />
        <p className="about-citations">
          “Where in your CV is your long-term UX Design course which I know you
          are attending? It ends in 2 weeks only, you should have mentioned
          that...”
        </p>{' '}
        <hr />{' '}
        <p className="about-citations">
          “Did you really mention in your CV that “you like to travel”, without
          mentioning the fact that you are also writing a blog about your
          travels?”
        </p>
        <hr />
        <div className="about-text">
          These and other very similar stories were all around us while working
          as recruiters. Very smart people did not get the chance to even be
          invited to an interview, mainly in an environment of prestigious
          corporations where every word written in CV can decide your fate.
          <br /> Even though me and Lenka later found our passion in Frontend
          development rather than in HR and recruiting, we decided to do
          something about the lost chances of our current and future friends and
          so we put our thoughts into action. <br />
          While developing our IT skills within the Czechitas Digital Academy,
          we started to think about our final project, but we did not have to
          think for too long. CV Genius started to emerge in our minds and after
          a while, it started materializing firstly in Figma, and then in react
          application. <br />
          Today you are following a complex guide with specific tips on how to
          write your CV, that will increase your chances to get your dream job!
          And that is not even close to what we are planning. <br /> By putting
          together our shared knowledge as well as other recruiters' feedback,
          we can put CV Genius at your service. We really hope it will help you
          to get your dream job and make conscious career moves. <br />
          <div className="about-names">Paula and Lenka</div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default About;
