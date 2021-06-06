import React from 'react';
import '../Generator/style.scss';

const Education = () => {
  return (
    <div>
      <h2>Education</h2>
      <div className="label-input-container">
        <label className="label-block" htmlFor="universtiy">
          University:
        </label>
        <input type="text" name="universtiy" id="universtiy" />
      </div>
      <div className="label-input-container">
        <label className="label-block" htmlFor="faculty">
          Faculty:
        </label>
        <input type="text" name="faculty" id="faculty" />
      </div>
      <div className="label-input-container">
        <label className="label-block" htmlFor="field-of-study">
          Field of study:
        </label>
        <input type="text" name="field-of-study" id="field-of-study" />
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
          Description:
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
  );
};

export default Education;
