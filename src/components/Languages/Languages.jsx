import { nanoid } from 'nanoid';
import React from 'react';
import '../Generator/style.scss';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const Languages = ({ languageLevel, setLanguageLevel }) => {
  return (
    <div className="languages-container">
      <div className="section-header-container">
        <h2>Languages</h2>
        <InfoTooltip content="List all your language skills- including your native tongue. If you are not sure about your level, you can test your approximate level by completing a verified test online which will allow you to estimate your abilities. Moreover, in case a language test would be a part of the recruitment process, your results will match your CV data." />
      </div>
      <div className="languages-grid">
        {languageLevel.map((x, index) => {
          return (
            <div key={x.id} className="label-input-container">
              <label htmlFor="language"></label>
              <input
                className="input text-input"
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
                className="input"
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
              {languageLevel.length > 1 && (
                <button
                  className="remove-button"
                  type="button"
                  onClick={() => {
                    const copiedLanguageLevel = [...languageLevel];
                    copiedLanguageLevel.splice(index, 1);
                    setLanguageLevel(copiedLanguageLevel);
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
            const copiedLanguageLevel = [...languageLevel];
            copiedLanguageLevel.push({
              language: '',
              level: '',
              id: nanoid(),
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
