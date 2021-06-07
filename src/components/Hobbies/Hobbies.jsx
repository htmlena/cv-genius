import React from 'react';

const Hobbies = () => {
  return (
    
    <div className="work-experience-container">
      <h2>Hobbies</h2>
      {hobbies.map((x, index) => {
        return (
            <div className="we-textarea-grid">
              <div className="label-input-container">
                <label className="label-block" htmlFor="job-description">
                  Hobbies: 
                </label>
                <textarea
                  className="input"
                  value={x.jobDescription}
                  onChange={(e) => {
                    const oldWorkExperience = [...workExperience];
                    oldWorkExperience[index].jobDescription = e.target.value;
                    setWorkExperience(oldWorkExperience);
                  }}
                  name="job-description"
                  id="job-description"
                  rows="10"
                  cols="25"
                  placeholder="Among my responsibilities was..."
                ></textarea>
              </div>
            </div>
      
        ) 
       
       }

        
      )
      
} ) } 
