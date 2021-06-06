import React from 'react';
import '../Generator/style.scss';

const Education = ({ education, setEducation }) => {
  return (
    <div>
      <h2>Education</h2>
      {education.map((x, index) => {
        return (
          <>
            <div className="label-input-container">
              <label className="label-block" htmlFor="universtiy">
                University:
              </label>
              <input
                type="text"
                value={x.university}
                onChange={(e) => {
                  const oldEducation = [...education];
                  oldEducation[index].university = e.target.value;
                  setEducation(oldEducation);
                }}
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
                value={x.faculty}
                onChange={(e) => {
                  const oldEducation = [...education];
                  oldEducation[index].faculty = e.target.value;
                  setEducation(oldEducation);
                }}
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
                value={x.fieldOfStudy}
                onChange={(e) => {
                  const oldEducation = [...education];
                  oldEducation[index].fieldOfStudy = e.target.value;
                  setEducation(oldEducation);
                }}
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
                value={x.city}
                onChange={(e) => {
                  const oldEducation = [...education];
                  oldEducation[index].city = e.target.value;
                  setEducation(oldEducation);
                }}
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
                value={x.degree}
                onChange={(e) => {
                  const oldEducation = [...education];
                  oldEducation[index].degree = e.target.value;
                  setEducation(oldEducation);
                }}
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
                value={x.startDate}
                onChange={(e) => {
                  const oldEducation = [...education];
                  oldEducation[index].startDate = e.target.value;
                  setEducation(oldEducation);
                }}
                name="start-date-education"
                id="start-date"
              />
              <label className="label-block" htmlFor="end-date-education">
                End date:
              </label>
              <input
                className="date-input"
                type="date"
                value={x.endDate}
                onChange={(e) => {
                  const oldEducation = [...education];
                  oldEducation[index].endDate = e.target.value;
                  setEducation(oldEducation);
                }}
                name="end-date-education"
                id="end-date-education"
              />
            </div>
            <div className="label-input-container">
              <label className="label-block" htmlFor="education">
                Description:
              </label>
              <textarea
                value={x.educationDescription}
                onChange={(e) => {
                  const oldEducation = [...education];
                  oldEducation[index].educationDescription = e.target.value;
                  setEducation(oldEducation);
                }}
                name="education"
                id="education"
                rows="10"
                cols="25"
                placeholder="Among my courses was..."
              ></textarea>
            </div>
          </>
        );
      })}

      <div>
        <button
          onClick={() => {
            const copiedEducation = [...education];
            copiedEducation.push({
              university: '',
              faculty: '',
              fieldOfStudy: '',
              cityEducation: '',
              degree: '',
              startDate: '',
              endDate: '',
              educationDescription: '',
            });

            setEducation(copiedEducation);
          }}
        >
          + Add education
        </button>
      </div>
    </div>
  );
};

export default Education;
