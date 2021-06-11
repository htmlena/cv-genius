import React from 'react';
import '../Generator/style.scss';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const PersonalInfo = ({
  userName,
  setUserName,
  userSurname,
  setUserSurname,
  userEmail,
  setUserEmail,
  userMobile,
  setUserMobile,
  speech,
  setSpeech,
  linkedinUrl,
  setLinkedinUrl,
  otherUrl,
  setOtherUrl,
}) => {
  return (
    <div className="personal-info-container">
      <div className="section-header-container">
        <h2>Personal information</h2>
        <InfoTooltip
          content="This is the first section everyone sees when looking at your CV. We highly recommend to include your LinkedIn URL with a completed profile and one more URL to present your project, website or github repositories. This way you can provide more information about your work and your background. 

The Resume summary statement should give a quick introduction into who you are, what you have accomplished and where you are heading. It is a clear, brief message or “commercial” about you. It communicates who you are, what you’re looking for and how you can benefit an organization. Keep the message under 5 sentences. We recommend sticking to the point and taking into account  the position and company you are applying to. 

Example of a resume statement: Senior Account Executive with experience helping companies clean and enrich their data with sales intelligence tools in Salesforce and Eloqua. Managing big data effectively, I have helped over 200 clients reduce IT infrastructure overhead by up to 40%. My wish is  to share as well as continue enriching my know-how within the Big Data team in Apple."
        />
      </div>
      <div className="personal-info-grid">
        <div className="name-surname-grid">
          <div className="label-input-container">
            <label className="label-block" htmlFor="name">
              Name:
            </label>
            <input
              className="input text-input"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              name="name"
              id="name"
              required
            />
          </div>

          <div className="label-input-container">
            <label className="label-block" htmlFor="surname">
              Surname:
            </label>
            <input
              className="input text-input"
              type="text"
              value={userSurname}
              onChange={(e) => setUserSurname(e.target.value)}
              name="surname"
              id="surname"
              required
            />
          </div>

          <div className="label-input-container">
            <label className="label-block" htmlFor="linkedinUrl">
              Linkedin URL:
            </label>
            <input
              className="input text-input"
              type="url"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              name="linkedinUrl"
              id="linkedinUrl"
            />
          </div>
        </div>
        <div className="email-mobile-grid">
          <div className="label-input-container">
            <label className="label-block" htmlFor="email">
              E-mail:
            </label>
            <input
              className="input text-input"
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              name="email"
              id="email"
              required
            />
          </div>
          <div className="label-input-container">
            <label className="label-block" htmlFor="mobile">
              Mobile:
            </label>
            <input
              className="input text-input"
              type="tel"
              value={userMobile}
              onChange={(e) => setUserMobile(e.target.value)}
              name="mobile"
              id="mobile"
              required
            />
          </div>
          <div className="label-input-container">
            <label className="label-block" htmlFor="otherUrl">
              Other URL:
            </label>
            <input
              className="input text-input"
              type="url"
              value={otherUrl}
              onChange={(e) => setOtherUrl(e.target.value)}
              name="otherUrl"
              id="otherUrl"
            />
          </div>
        </div>

        <div className="pi-textarea-grid">
          <label className="label-block" htmlFor="elevator-speech">
            Elevator speech:
          </label>
          <textarea
            className="input"
            value={speech}
            onChange={(e) => setSpeech(e.target.value)}
            name="elevator-speech"
            id="elevator-speech"
            rows="10"
            cols="25"
            placeholder="Senior Account Executive with experience helping companies clean and enrich their data..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
