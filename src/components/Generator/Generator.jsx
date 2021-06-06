import React, { useState } from 'react';
import './style.scss';
import { CvView } from '../CvView/CvView';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Languages from '../Languages/Languages';
import WorkExperience from '../WorkExperience/WorkExperience';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

const Generator = () => {
  const [previewVisible, setPreviewVisible] = useState(true);
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
      jobDescription: '',
    },
  ]);
  // const [position, setPosition] = useState('');
  // const [company, setCompany] = useState('');
  // const [city, setCity] = useState('');
  // const [jobDescription, setJobDescription] = useState('');

  const [university, setUniversity] = useState('');
  const [faculty, setFaculty] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [cityEducation, setCityEducation] = useState('');
  const [degree, setDegree] = useState('');
  const [educationDescription, setEducationDescription] = useState('');

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
  ]);

  const [languageLevel, setLanguageLevel] = useState([
    {
      language: '',
      level: '',
    },
  ]);

  return (
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
          // position={position}
          // setPosition={setPosition}
          // company={company}
          // setCompany={setCompany}
          // city={city}
          // setCity={setCity}
          // jobDescription={jobDescription}
          // setJobDescription={setJobDescription}
        />
        <Education
          university={university}
          setUniversity={setUniversity}
          faculty={faculty}
          setFaculty={setFaculty}
          fieldOfStudy={fieldOfStudy}
          setFieldOfStudy={setFieldOfStudy}
          cityEducation={cityEducation}
          setCityEducation={setCityEducation}
          degree={degree}
          setDegree={setDegree}
          educationDescription={educationDescription}
          setEducationDescription={setEducationDescription}
        />

        <Skills skillLevel={skillLevel} setSkillLevel={setSkillLevel} />

        <Languages
          languageLevel={languageLevel}
          setLanguageLevel={setLanguageLevel}
        />

        <div>
          <button
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
      {previewVisible && (
        <>
          <div className="preview">
            <PDFViewer width="500px" height="700px">
              <CvView
                userName={userName}
                userSurname={userSurname}
                userEmail={userEmail}
                userMobile={userMobile}
                speech={speech}
                // position={position}
                // company={company}
                // jobDescription={jobDescription}
                // city={city}
                workExperience={workExperience}
                university={university}
                faculty={faculty}
                fieldOfStudy={fieldOfStudy}
                cityEducation={cityEducation}
                degree={degree}
                educationDescription={educationDescription}
                skillLevel={skillLevel}
                languageLevel={languageLevel}
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
                // position={position}
                // company={company}
                // jobDescription={jobDescription}
                // city={city}
                workExperience={workExperience}
                university={university}
                faculty={faculty}
                fieldOfStudy={fieldOfStudy}
                degree={degree}
                educationDescription={educationDescription}
                cityEducation={cityEducation}
                skillLevel={skillLevel}
                languageLevel={languageLevel}
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
