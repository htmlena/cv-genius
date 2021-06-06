import React from 'react';
import '../Generator/style.scss';

const Education = ({
  university,
  setUniversity,
  faculty,
  setFaculty,
  fieldOfStudy,
  setFieldOfStudy,
  degree,
  setDegree,
  educationDescription,
  setEducationDescription,
  cityEducation,
  setCityEducation,
}) => {
  return (
    <div>
      <h2>Education</h2>
      <div className="label-input-container">
        <label className="label-block" htmlFor="universtiy">
          University:
        </label>
        <input
          type="text"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
          name="universtiy"
          id="universtiy"
        />
      </div>
      <div className="label-input-container">
        <label className="label-block" htmlFor="faculty">
          Faculty:
        </label>
        <input
          type="text"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
          name="faculty"
          id="faculty"
        />
      </div>
      <div className="label-input-container">
        <label className="label-block" htmlFor="field-of-study">
          Field of study:
        </label>
        <input
          type="text"
          value={fieldOfStudy}
          onChange={(e) => setFieldOfStudy(e.target.value)}
          name="field-of-study"
          id="field-of-study"
        />
      </div>

      <div className="label-input-container">
        <label className="label-block" htmlFor="city-education">
          City:
        </label>
        <input
          type="text"
          value={cityEducation}
          onChange={(e) => setCityEducation(e.target.value)}
          name="city-education"
          id="city-education"
        />
      </div>

      <div className="label-input-container">
        <label className="label-block" htmlFor="degree">
          Degree:
        </label>
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
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
          value={educationDescription}
          onChange={(e) => setEducationDescription(e.target.value)}
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
