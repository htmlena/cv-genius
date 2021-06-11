import React from 'react';
import '../Generator/style.scss';
import { nanoid } from 'nanoid';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const WorkExperience = ({ workExperience, setWorkExperience }) => {
  return (
    <div className="work-experience-container">
      <div className="section-header-container">
        <h2>Work Experience</h2>
        <InfoTooltip content="Work Experience" />
      </div>
      {workExperience.map((x, index) => {
        return (
          <div key={x.id} className="work-experience-grid">
            <div className="position-empl-city-grid">
              <div className="label-input-container">
                <label className="label-block" htmlFor="position">
                  Position:
                </label>
                <input
                  className="input text-input"
                  type="text"
                  value={x.position}
                  onChange={(e) => {
                    const oldWorkExperience = [...workExperience];
                    oldWorkExperience[index].position = e.target.value;
                    setWorkExperience(oldWorkExperience);
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
                  className="input text-input"
                  type="text"
                  value={x.company}
                  onChange={(e) => {
                    const oldWorkExperience = [...workExperience];
                    oldWorkExperience[index].company = e.target.value;
                    setWorkExperience(oldWorkExperience);
                  }}
                  name="employer"
                  id="employer"
                />
              </div>

              <div className="label-input-container">
                <label className="label-block" htmlFor="city">
                  City:
                </label>
                <input
                  className="input text-input"
                  type="text"
                  value={x.city}
                  onChange={(e) => {
                    const oldWorkExperience = [...workExperience];
                    oldWorkExperience[index].city = e.target.value;
                    setWorkExperience(oldWorkExperience);
                  }}
                  name="city"
                  id="city"
                />
              </div>
            </div>

            <div className="dates-grid">
              <div className="label-input-container date-container">
                <label className="label-block" htmlFor="start-date-job">
                  Start date:
                </label>
                <input
                  className="date-input input"
                  type="date"
                  value={x.startDate}
                  onChange={(e) => {
                    const oldWorkExperience = [...workExperience];
                    oldWorkExperience[index].startDate = e.target.value;
                    setWorkExperience(oldWorkExperience);
                  }}
                  name="start-date-job"
                  id="start-date-job"
                />
                <label className="label-block" htmlFor="end-date-job">
                  End date:
                </label>
                <input
                  className="date-input input"
                  type="date"
                  value={x.endDate}
                  onChange={(e) => {
                    const oldWorkExperience = [...workExperience];
                    oldWorkExperience[index].endDate = e.target.value;
                    setWorkExperience(oldWorkExperience);
                  }}
                  name="end-date-job"
                  id="end-date-job"
                />
              </div>
            </div>
            <div className="we-textarea-grid">
              <div className="label-input-container">
                <label className="label-block" htmlFor="job-description">
                  Job description:
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
            {workExperience.length > 1 && (
              <button
                className="remove-button"
                type="button"
                onClick={() => {
                  const copiedWorkExperience = [...workExperience];
                  copiedWorkExperience.splice(index, 1);
                  setWorkExperience(copiedWorkExperience);
                }}
              >
                Remove
              </button>
            )}
          </div>
        );
      })}

      <div>
        <button
          className="add-button"
          type="button"
          onClick={() => {
            const copiedWorkExperience = [...workExperience];
            copiedWorkExperience.push({
              position: '',
              company: '',
              city: '',
              startDate: '',
              endDate: '',
              jobDescription: '',
              id: nanoid(),
            });
            setWorkExperience(copiedWorkExperience);
          }}
        >
          + Add position
        </button>
      </div>
    </div>
  );
};

export default WorkExperience;
