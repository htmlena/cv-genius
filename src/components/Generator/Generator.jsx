import React, { useState } from 'react';
import './style.scss';
import { CvView } from '../CvView/CvView';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Languages from '../Languages/Languages';
import WorkExperience from '../WorkExperience/WorkExperience';
import Hobbies from '../Hobbies/Hobbies';
import Courses from '../Courses/Courses';

import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

const Generator = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [speech, setSpeech] = useState('');

  const [workExperience, setWorkExperience] = useState([
    {
      position: '',
      company: '',
      city: '',
      startDate: '01.01.1000',
      endDate: '01.01.2000',
      jobDescription: '',
    },
  ]);

  const [education, setEducation] = useState([
    {
      university: '',
      faculty: '',
      fieldOfStudy: '',
      cityEducation: '',
      degree: '',
      startDate: '',
      endDate: '',
      educationDescription: '',
    },
  ]);

  const [skillLevel, setSkillLevel] = useState([
    {
      skill: '',
      level: '',
    },
    {
      skill: '',
      level: '',
    },
    {
      skill: '',
      level: '',
    },
    {
      skill: '',
      level: '',
    },
    {
      skill: '',
      level: '',
    },
    {
      skill: '',
      level: '',
    },
  ]);

  const [languageLevel, setLanguageLevel] = useState([
    {
      language: '',
      level: '',
    },
    {
      language: '',
      level: '',
    },
  ]);

  const [hobbies, setHobbies] = useState('');
  const [course, setCourse] = useState('');

  return (
    <>
      {' '}
      {!previewVisible && (
        <>
          <form className="main-form-container">
            <PersonalInfo
              userName={userName}
              setUserName={setUserName}
              userSurname={userSurname}
              setUserSurname={setUserSurname}
              userEmail={userEmail}
              setUserEmail={setUserEmail}
              userMobile={userMobile}
              setUserMobile={setUserMobile}
              speech={speech}
              setSpeech={setSpeech}
            />
            <WorkExperience
              workExperience={workExperience}
              setWorkExperience={setWorkExperience}
            />
            <Education education={education} setEducation={setEducation} />

            <Skills skillLevel={skillLevel} setSkillLevel={setSkillLevel} />

            <Languages
              languageLevel={languageLevel}
              setLanguageLevel={setLanguageLevel}
            />
            <Hobbies hobbies={hobbies} setHobbies={setHobbies} />

            <Courses course={course} setCourse={setCourse} />
          </form>
          <div>
            <button
              className="preview-button"
              onClick={() => {
                if (previewVisible) {
                  setPreviewVisible(false);
                } else {
                  setPreviewVisible(true);
                }
              }}
            >
              Preview
            </button>
          </div>
        </>
      )}
      {previewVisible && (
        <>
          <div className="preview">
            <PDFViewer width="300px" height="500px">
              <CvView
                userName={userName}
                userSurname={userSurname}
                userEmail={userEmail}
                userMobile={userMobile}
                speech={speech}
                workExperience={workExperience}
                education={education}
                skillLevel={skillLevel}
                languageLevel={languageLevel}
                hobbies={hobbies}
                course={course}
              />
            </PDFViewer>
          </div>
          <PDFDownloadLink
            document={
              <CvView
                userName={userName}
                userSurname={userSurname}
                userEmail={userEmail}
                userMobile={userMobile}
                speech={speech}
                workExperience={workExperience}
                education={education}
                skillLevel={skillLevel}
                languageLevel={languageLevel}
                hobbies={hobbies}
                course={course}
              />
            }
          >
            <button>Download CV</button>
          </PDFDownloadLink>
        </>
      )}
    </>
  );
};

export default Generator;
