import React from 'react';
import '../Generator/style.scss';

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
}) => {
  return (
    <div className="personal-info-container">
      <h2>Personal information</h2>
      <div className="personal-info-flex">
        <div name-surname-flex>
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
        </div>
        <div className="email-mobile-flex">
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
        </div>
        <div className="text-area-flex">
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
