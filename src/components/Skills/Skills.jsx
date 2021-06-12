import { nanoid } from 'nanoid';
import React from 'react';
import '../Generator/style.scss';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

const Skills = ({ skillLevel, setSkillLevel }) => {
  return (
    <div className="skills-container">
      <div className="section-header-container">
        <h2>Skills</h2>
        <InfoTooltip
          content={
            <>
              <p>
                Skills are your natural talents and the expertise you develop to
                perform a task or a job. Skills are usually divided into the
                Soft skills: a set of requirements necessary for the quality
                performance of work, which do not depend on specific expertise,
                but on the complex abilities of man. And the Hard skills: a set
                of professional requirements &#40;theoretical knowledge,
                practical skills&#41; needed to perform the profession.
              </p>
              <p>
                Think about your acquired skills and check whether they match
                the concrete job offer. If they do, use them in the exact key
                words as in the job offer. Be honest with your level, but do not
                underestimate yourself. We recommend using four hard and four
                soft skills, prioritized by the ones referred to in the certain
                job offer. If you are a student or graduate looking for your
                first job, you can only list your soft skills.
              </p>
            </>
          }
        />
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
