import { nanoid } from 'nanoid';
import React from 'react';
import '../Generator/style.scss';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const Courses = ({ course, setCourse }) => {
  return (
    <div className="courses-container">
      <div className="section-header-container">
        <h2>Courses</h2>
        <InfoTooltip content="Courses" />
      </div>
      <div className="courses-grid">
        {course.map((x, index) => {
          return (
            <div key={x.id}>
              <div className="label-input-container course-name-grid">
                <label className="label-block" htmlFor="course-name">
                  Course Name:
                </label>
                <input
                  className="input text-input"
                  type="text"
                  value={x.courseName}
                  onChange={(e) => {
                    const oldCourse = [...course];
                    oldCourse[index].courseName = e.target.value;
                    setCourse(oldCourse);
                  }}
                  name="course-name"
                  id="course-name"
                />
              </div>

              <div className="label-input-container organization-grid">
                <label className="label-block" htmlFor="organization">
                  Organization:
                </label>
                <input
                  className="input text-input"
                  type="text"
                  value={x.organization}
                  onChange={(e) => {
                    const oldCourse = [...course];
                    oldCourse[index].organization = e.target.value;
                    setCourse(oldCourse);
                  }}
                  name="organization"
                  id="organization"
                />
              </div>

              <div className="c-textarea-grid">
                <label className="label-block" htmlFor="course-description">
                  Course description:
                </label>
                <textarea
                  className="input"
                  value={x.courseDescription}
                  onChange={(e) => {
                    const oldCourse = [...course];
                    oldCourse[index].courseDescription = e.target.value;
                    setCourse(oldCourse);
                  }}
                  name="course-description"
                  id="course-description"
                  rows="3"
                  cols="25"
                  placeholder="3-month course about..."
                ></textarea>
              </div>
              {course.length > 1 && (
                <button
                  className="remove-button"
                  type="button"
                  onClick={() => {
                    const copiedCourse = [...course];
                    copiedCourse.splice(index, 1);
                    setCourse(copiedCourse);
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div>
        <button
          className="add-button"
          type="button"
          onClick={() => {
            const copiedCourse = [...course];
            copiedCourse.push({
              courseName: '',
              organization: '',
              courseDescription: '',
              id: nanoid(),
            });
            setCourse(copiedCourse);
          }}
        >
          + Add Course
        </button>
      </div>
    </div>
  );
};

export default Courses;
