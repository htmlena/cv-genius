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
import { nanoid } from 'nanoid';

const Generator = () => {
  const [previewVisible, setPreviewVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMobile, setUserMobile] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [otherUrl, setOtherUrl] = useState('');
  const [speech, setSpeech] = useState('');

  const [workExperience, setWorkExperience] = useState([
    {
      position: '',
      company: '',
      city: '',
      startDate: '2021-01-01',
      endDate: '2021-01-01',
      jobDescription: '',
      id: nanoid(),
    },
  ]);

  const [education, setEducation] = useState([
    {
      university: '',
      faculty: '',
      fieldOfStudy: '',
      cityEducation: '',
      degree: '',
      startDate: '2021-01-01',
      endDate: '2021-01-01',
      educationDescription: '',
      id: nanoid(),
    },
  ]);

  const [skillLevel, setSkillLevel] = useState([
    {
      skill: '',
      level: '',
      id: nanoid(),
    },
    {
      skill: '',
      level: '',
      id: nanoid(),
    },
    {
      skill: '',
      level: '',
      id: nanoid(),
    },
    {
      skill: '',
      level: '',
      id: nanoid(),
    },
    {
      skill: '',
      level: '',
      id: nanoid(),
    },
    {
      skill: '',
      level: '',
      id: nanoid(),
    },
  ]);

  const [languageLevel, setLanguageLevel] = useState([
    {
      language: '',
      level: '',
      id: nanoid(),
    },
    {
      language: '',
      level: '',
      id: nanoid(),
    },
  ]);

  const [hobbies, setHobbies] = useState('');

  const [course, setCourse] = useState([
    {
      courseName: '',
      organization: '',
      courseDescription: '',
      id: nanoid(),
    },
  ]);

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
              linkedinUrl={linkedinUrl}
              setLinkedinUrl={setLinkedinUrl}
              otherUrl={otherUrl}
              setOtherUrl={setOtherUrl}
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

            <Courses course={course} setCourse={setCourse} />

            <Hobbies hobbies={hobbies} setHobbies={setHobbies} />

            <div className="preview-button-container">
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
          </form>
        </>
      )}
      {previewVisible && (
        <>
          <div className="buttons-container">
            <button
              className="back-button"
              onClick={() => {
                if (previewVisible) {
                  setPreviewVisible(false);
                } else {
                  setPreviewVisible(true);
                }
              }}
            >
              Back to Form
            </button>
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
                  linkedinUrl={linkedinUrl}
                  otherUrl={otherUrl}
                />
              }
            >
              <button className="download-button">Download CV</button>
            </PDFDownloadLink>
          </div>
          <div className="preview">
            <PDFViewer className="pdf-viewer">
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
                linkedinUrl={linkedinUrl}
                otherUrl={otherUrl}
              />
            </PDFViewer>
          </div>
        </>
      )}
    </>
  );
};

export default Generator;
