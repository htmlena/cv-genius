import React from 'react';
import '../Generator/style.scss';

const Languages = () => {
  return (
    <div>
      <h2>Languages</h2>
      <div className="label-input-container">
        <label htmlFor="language"></label>
        <input type="text" />
        <label className="label-block" htmlFor="language"></label>
        <select name="level" id="level">
          <option value="">Select</option>
          <option value="native">Native</option>
          <option value="intermediate">A1/A2</option>
          <option value="advanced">B1/B2</option>
          <option value="expert">C1/C2</option>
        </select>
      </div>
      <div className="label-input-container">
        <label htmlFor="language"></label>
        <input type="text" />
        <label className="label-block" htmlFor="language"></label>
        <select name="level" id="level">
          <option value="">Select</option>
          <option value="native">Native</option>
          <option value="intermediate">A1/A2</option>
          <option value="advanced">B1/B2</option>
          <option value="expert">C1/C2</option>
        </select>
      </div>
      <div>
        <button>+ Add Language</button>
      </div>
    </div>
  );
};

export default Languages;
