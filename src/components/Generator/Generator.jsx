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
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [jobDescription, setJobDescription] = useState('');

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
          position={position}
          setPosition={setPosition}
          company={company}
          setCompany={setCompany}
          city={city}
          setCity={setCity}
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
        />
        <Education />
        <Skills />
        <Languages />

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
            <CvView
              userName={userName}
              userSurname={userSurname}
              userEmail={userEmail}
              userMobile={userMobile}
              speech={speech}
              position={position}
              company={company}
              jobDescription={jobDescription}
              city={city}
            />
          </div>
          <PDFDownloadLink
            document={
              <CvView
                userName={userName}
                userSurname={userSurname}
                userEmail={userEmail}
                userMobile={userMobile}
                speech={speech}
                position={position}
                company={company}
                jobDescription={jobDescription}
                city={city}
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
