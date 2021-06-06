import React from 'react';
import '../Generator/style.scss';

const WorkExperience = ({
  workExperience,
  setWorkExperience
}) => {
  return (
  <div>
      <h2>Work Experience</h2>
      {workExperience.map((x, index) => {
        return (
          <>
       <div className="label-input-container">
        <label className="label-block" htmlFor="position">
          Position:
        </label>
        <input
          type="text" 
          value={x.position}
          onChange={(e) => { const oldWorkExperience = [...workExperience]; 
            oldWorkExperience[index].position = 
          e.target.value;
          setWorkExperience(oldWorkExperience)
          }}
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
        </>
        )
      })}
      
      <div>
        <button>+ Add position</button>
      </div> 
    </div>
  );
};

export default WorkExperience;
