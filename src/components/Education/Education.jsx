import React from 'react';
import '../Generator/style.scss';
import { nanoid } from 'nanoid';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const Education = ({ education, setEducation }) => {
  return (
    <div className="education-container">
      <div className="section-header-container">
        <h2>Education</h2>
        <InfoTooltip
          content={
            <>
              <p>
                First, you do not have to include all of your schools. For
                example, in case you have a higher education, you do not have to
                mention your elementary or high school. Start with your highest
                achieved education and include one or two institutions you have
                attended before.
              </p>
              <p>
                If you studied at a university, do not forget to add your
                degree. In case you completed a requalification course or any
                other long-period course, and you have an ambition to work in
                this field, we recommend that you include the course into the
                education section.
              </p>
              <p>
                Description of the studied courses is optional, but it provides
                you with another space for using the key words which match the
                concrete job offer.
              </p>
            </>
          }
        />
      </div>
      {education.map((x, index) => {
        return (
          <div key={x.id} className="education-grid">
            <div className="uni-grid">
              <div className="label-input-container">
                <label className="label-block" htmlFor="universtiy">
                  University:
                </label>
                <input
                  className="input text-input"
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
                  className="input text-input"
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
                  className="input text-input"
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
                  className="input text-input"
                  type="text"
                  value={x.cityEducation}
                  onChange={(e) => {
                    const oldEducation = [...education];
                    oldEducation[index].cityEducation = e.target.value;
                    setEducation(oldEducation);
                  }}
                  name="city-education"
                  id="city-education"
                />
              </div>
            </div>
            <div className="uni-dates-grid">
              <div className="label-input-container">
                <label className="label-block" htmlFor="degree">
                  Degree:
                </label>
                <input
                  className="input text-input"
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
                  className="input date-input"
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
                  className="date-input input"
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
            </div>

            <div className="education-textarea-grid">
              <div className="label-input-container">
                <label className="label-block" htmlFor="education">
                  Description:
                </label>
                <textarea
                  className="input"
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
            </div>
            {education.length > 1 && (
              <button
                className="remove-button"
                type="button"
                onClick={() => {
                  const copiedEducation = [...education];
                  copiedEducation.splice(index, 1);
                  setEducation(copiedEducation);
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
              id: nanoid(),
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
