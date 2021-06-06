import React from 'react';
import '../Generator/style.scss';

const WorkExperience = ({
  position,
  setPosition,
  company,
  setCompany,
  city,
  setCity,
  jobDescription,
  setJobDescription,
}) => {
  return (
    <div>
      <h2>Work Experience</h2>
      <div className="label-input-container">
        <label className="label-block" htmlFor="position">
          Position:
        </label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          name="position"
          id="position"
        />
      </div>
      <div className="label-input-container">
        <label className="label-block" htmlFor="employer">
          Employer:
        </label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          name="employer"
          id="employer"
        />
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
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          name="city"
          id="city"
        />
      </div>
      <div className="label-input-container">
        <label className="label-block" htmlFor="job-description">
          Job description:
        </label>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          name="job-description"
          id="job-description"
          rows="10"
          cols="25"
          placeholder="Among my responsibilities was..."
        ></textarea>
        <button>+ Add position</button>
      </div>
    </div>
  );
};

export default WorkExperience;
