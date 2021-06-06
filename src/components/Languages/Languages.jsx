import React from 'react';
import '../Generator/style.scss';

const Languages = ({ languageLevel, setLanguageLevel }) => {
  return (
    <div>
      <h2>Languages</h2>
      {languageLevel.map((x, index) => {
        return (
          <div className="label-input-container">
            <label htmlFor="language"></label>
            <input
              type="text"
              value={x.language}
              onChange={(e) => {
                const oldLanguageLevel = [...languageLevel];
                oldLanguageLevel[index].language = e.target.value;
                setLanguageLevel(oldLanguageLevel);
              }}
            />

            <label className="label-block" htmlFor="language"></label>
            <select
              value={x.level}
              onChange={(e) => {
                const oldLanguageLevel = [...languageLevel];

                oldLanguageLevel[index].level = e.target.value;
                setLanguageLevel(oldLanguageLevel);
              }}
              name="level"
              id="level"
            >
              <option value="">Select</option>
              <option value="native">Native</option>
              <option value="intermediate">A1/A2</option>
              <option value="advanced">B1/B2</option>
              <option value="expert">C1/C2</option>
            </select>
          </div>
        );
      })}
      <div>
        <button
          onClick={() => {
            const copiedLanguageLevel = [...languageLevel];
            copiedLanguageLevel.push({
              language: '',
              level: '',
            });
            setLanguageLevel(copiedLanguageLevel);
          }}
        >
          + Add Language
        </button>
      </div>
    </div>
  );
};

export default Languages;
