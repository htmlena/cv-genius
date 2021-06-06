import React from 'react';
import '../Generator/style.scss';

const Skills = () => {
  return (
    <div>
      <h2>Skills</h2>
      <div className="label-input-container">
        <label htmlFor="skills"></label>
        <input type="text" />
        <label className="label-block" htmlFor="skills"></label>
        <select name="level" id="level">
          <option value="">Select</option>
          <option value="">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="expert">Expert</option>
        </select>
      </div>
      <div className="label-input-container">
        <label htmlFor="skills"></label>
        <input type="text" />
        <label className="label-block" htmlFor="skills"></label>
        <select name="level" id="level">
          <option value="">Select</option>
          <option value="">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="expert">Expert</option>
        </select>
      </div>
      <div className="label-input-container">
        <label htmlFor="skills"></label>
        <input type="text" />
        <label className="label-block" htmlFor="skills"></label>
        <select name="level" id="level">
          <option value="">Select</option>
          <option value="">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
          <option value="expert">Expert</option>
        </select>
      </div>
      <div>
        <button>+ Add Skill</button>
      </div>
    </div>
  );
};

export default Skills;
