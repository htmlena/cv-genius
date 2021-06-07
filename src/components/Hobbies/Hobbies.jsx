import React from 'react';
import '../Generator/style.scss';

const Hobbies = ({ hobbies, setHobbies }) => {
  return (
    <div className="hobbies-container">
      <h2>Hobbies</h2>
      <div>
        <div className="label-input-container">
          <label className="label-block" htmlFor="hobby">
            Hobbies:
          </label>
          <textarea
            className="input"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
            name="hobby"
            id="hobby"
            rows="10"
            cols="25"
            placeholder="I like to dedicate my free time to..."
          ></textarea>
        </div>
      </div>{' '}
    </div>
  );
};

export default Hobbies;
