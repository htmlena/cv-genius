import React from 'react';
import '../Generator/style.scss';

const Courses = ({
  courseName,
  setCourseName,
  organization,
  setOrganization,
  courseDescription,
  setCourseDescription,
}) => {
  return (
    <div className="courses-container">
      <h2>Courses</h2>
      <div className="courses-grid">
        <div className="course-company-grid">
          <div className="label-input-container">
            <label className="label-block" htmlFor="course-name">
              Course Name:
            </label>
            <input
              className="input text-input"
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              name="course-name"
              id="course-name"
            />
          </div>

          <div className="label-input-container">
            <label className="label-block" htmlFor="organization">
              Organization:
            </label>
            <input
              className="input text-input"
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              name="organization"
              id="organization"
            />
          </div>
        </div>
        <div className="c-textarea-grid">
          <label className="label-block" htmlFor="course-description">
            Course description:
          </label>
          <textarea
            className="input"
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            name="course-description"
            id="course-description"
            rows="10"
            cols="25"
            placeholder="3-month course about..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Courses;
