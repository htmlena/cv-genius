import React from 'react';

const Generator = () => {
  return (
    <form>
      <div>
        <div>
          <h2>Personal information</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" required />
          </div>
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input type="text" name="surname" id="surname" required />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div>
          <label htmlFor="mobile">Mobile:</label>
          <input type="tel" name="mobile" id="mobile" required />
        </div>
        <div>
          <label htmlFor="elevator-speech">Elevator speech:</label>
          <textarea
            name="elevator-speech"
            id="elevator-speech"
            rows="10"
            cols="33"
            placeholder="Senior Account Executive with experience helping companies clean and enrich their data..."
          ></textarea>
        </div>
      </div>
      <div>
        <h2>Work Experience</h2>
        <div>
          <label htmlFor="position">Position:</label>
          <input type="text" name="position" id="position" />
        </div>
        <div>
          <label htmlFor="employer">Employer:</label>
          <input type="text" name="employer" id="employer" />
        </div>
        <div>
          <label htmlFor="start-date-job">Start date:</label>
          <input type="date" name="start-date-job" id="start-date-job" />
          <label htmlFor="end-date-job">End date:</label>
          <input type="date" name="end-date-job" id="end-date-job" />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" name="city" id="city" />
        </div>
        <div>
          <label htmlFor="job-description">Job description:</label>
          <textarea
            name="job-description"
            id="job-description"
            rows="10"
            cols="33"
            placeholder="Among my responsibilities was..."
          ></textarea>
          <button>+ Add position</button>
        </div>
        <div>
          <h2>Education</h2>
          <div>
            <label htmlFor="universtiy">University:</label>
            <input type="text" name="universtiy" id="universtiy" />
          </div>
          <div>
            <label htmlFor="degree">Degree:</label>
            <input
              type="text"
              name="degree"
              id="universtiy"
              placeholder="Ex: Bachelor's"
            />
          </div>
          <div>
            <label htmlFor="start-date-education">Start date:</label>
            <input type="date" name="start-date-education" id="start-date" />
            <label htmlFor="end-date-education">End date:</label>
            <input
              type="date"
              name="end-date-education"
              id="end-date-education"
            />
          </div>
          <div>
            <label htmlFor="education">Education:</label>
            <textarea
              name="education"
              id="education"
              rows="10"
              cols="33"
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
