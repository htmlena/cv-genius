import { nanoid } from 'nanoid';
import React from 'react';
import '../Generator/style.scss';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const Skills = ({ skillLevel, setSkillLevel }) => {
  return (
    <div className="skills-container">
      <div className="section-header-container">
        <h2>Skills</h2>
        <InfoTooltip content="Skill Level" />
      </div>
      <div className="skills-grid">
        {skillLevel.map((x, index) => {
          return (
            <div key={x.id} className="label-input-container">
              <label htmlFor="skills"></label>

              <input
                className="input text-input"
                type="text"
                value={x.skill}
                onChange={(e) => {
                  const oldSkillLevel = [...skillLevel];

                  oldSkillLevel[index].skill = e.target.value;
                  setSkillLevel(oldSkillLevel);
                }}
              />

              <label className="label-block" htmlFor="skills"></label>
              <select
                className="input"
                value={x.level}
                onChange={(e) => {
                  const oldSkillLevel = [...skillLevel];

                  oldSkillLevel[index].level = e.target.value;
                  setSkillLevel(oldSkillLevel);
                }}
                name="level"
                id="level"
              >
                <option value="">Select</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
                <option value="expert">Expert</option>
              </select>
              {skillLevel.length > 1 && (
                <button
                  className="remove-button"
                  type="button"
                  onClick={() => {
                    const copiedSkillLevel = [...skillLevel];
                    copiedSkillLevel.splice(index, 1);
                    setSkillLevel(copiedSkillLevel);
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
            const copiedSkillLevel = [...skillLevel];
            copiedSkillLevel.push({
              skill: '',
              level: '',
              id: nanoid(),
            });
            setSkillLevel(copiedSkillLevel);
          }}
        >
          + Add Skill
        </button>
      </div>
    </div>
  );
};

export default Skills;
