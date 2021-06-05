import React from 'react';
import './style.scss';

const Generator = () => {
  return (
    <form className="main-form-container">
      <div className="personal-info-container">
        <div>
          <h2>Personal information</h2>
          <div className="label-input-container">
            <label className="label-block" htmlFor="name">
              Name:
            </label>
            <input type="text" name="name" id="name" required />
          </div>
        </div>
        <div className="label-input-container">
          <label className="label-block" htmlFor="surname">
            Surname:
          </label>
          <input type="text" name="surname" id="surname" required />
        </div>
        <div className="label-input-container">
          <label className="label-block" htmlFor="email">
            E-mail:
          </label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="label-input-container">
          <label className="label-block" htmlFor="mobile">
            Mobile:
          </label>
          <input type="tel" name="mobile" id="mobile" required />
        </div>
        <div>
          <label className="label-block" htmlFor="elevator-speech">
            Elevator speech:
          </label>
          <textarea
            name="elevator-speech"
            id="elevator-speech"
            rows="10"
            cols="25"
            placeholder="Senior Account Executive with experience helping companies clean and enrich their data..."
          ></textarea>
        </div>
      </div>

      <div>
        <h2>Work Experience</h2>
        <div className="label-input-container">
          <label className="label-block" htmlFor="position">
            Position:
          </label>
          <input type="text" name="position" id="position" />
        </div>
        <div className="label-input-container">
          <label className="label-block" htmlFor="employer">
            Employer:
          </label>
          <input type="text" name="employer" id="employer" />
        </div>
        <div className="label-input-container date-container">
          <label className="label-block" htmlFor="start-date-job">
            Start date:
          </label>
          <input
            className="date-input"
            type="date"
            name="start-date-job"
            id="start-date-job"
          />
          <label className="label-block" htmlFor="end-date-job">
            End date:
          </label>
          <input
            className="date-input"
            type="date"
            name="end-date-job"
            id="end-date-job"
          />
        </div>
        <div className="label-input-container">
          <label className="label-block" htmlFor="city">
            City:
          </label>
          <input type="text" name="city" id="city" />
        </div>
        <div className="label-input-container">
          <label className="label-block" htmlFor="job-description">
            Job description:
          </label>
          <textarea
            name="job-description"
            id="job-description"
            rows="10"
            cols="25"
            placeholder="Among my responsibilities was..."
          ></textarea>
          <button>+ Add position</button>
        </div>

        <div>
          <h2>Education</h2>
          <div className="label-input-container">
            <label className="label-block" htmlFor="universtiy">
              University:
            </label>
            <input type="text" name="universtiy" id="universtiy" />
          </div>
          <div className="label-input-container">
            <label className="label-block" htmlFor="degree">
              Degree:
            </label>
            <input
              type="text"
              name="degree"
              id="universtiy"
              placeholder="Ex: Bachelor's"
            />
          </div>
          <div className="label-input-container date-container">
            <label className="label-block" htmlFor="start-date-education">
              Start date:
            </label>
            <input
              className="date-input"
              type="date"
              name="start-date-education"
              id="start-date"
            />
            <label className="label-block" htmlFor="end-date-education">
              End date:
            </label>
            <input
              className="date-input"
              type="date"
              name="end-date-education"
              id="end-date-education"
            />
          </div>
          <div className="label-input-container">
            <label className="label-block" htmlFor="education">
              Education:
            </label>
            <textarea
              name="education"
              id="education"
              rows="10"
              cols="25"
              placeholder="Among my courses was..."
            ></textarea>
            <button>+ Add education</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Generator;
