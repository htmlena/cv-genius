import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import font from './Lato-Regular.ttf';

Font.register({
  family: 'Lato',
  src: font,
});

//-----------------------------------------PDF styles-------------------------------------

const styles = StyleSheet.create({
  page: {
    padding: 30,
    display: 'flex',
    flexDirection: 'column',
    fontSize: 12,
  },

  // Personal info

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  personalInfo: {
    fontFamily: 'Lato',
    backgroundColor: '#f2f5fa',
    color: '#3c64b1',
    marginBottom: '17pt',
    marginTop: '0pt',
    padding: '20pt',
  },

  name: {
    alignSelf: 'center',
    fontWeight: 400,
    fontSize: 25,
    marginBottom: '17pt',
  },

  email: {
    fontSize: 14,
    marginBottom: '10pt',
  },

  mobile: {
    fontSize: 14,
    fontWeight: 400,
    marginBottom: '10pt',
  },

  linkedin: {
    fontSize: 14,
    fontWeight: 400,
    marginBottom: '10pt',
  },

  otherurl: {
    fontSize: 14,
    fontWeight: 400,
    marginBottom: '10pt',
  },

  elevatorSpeech: {
    display: 'block',
    textAlign: 'center',
    textSize: '20pt',
    marginBottom: '15pt',
    marginTop: '20pt',
    lineHeight: '1.3pt',
  },

  experience: {
    display: 'block',
    fontSize: 20,
    color: '#3c64b1',
    marginBottom: '17pt',
    borderBottom: '1pt solid #3c64b1',
  },

  sectionJob: {
    display: 'block',
    marginBottom: '20pt',
  },

  position: {
    fontSize: 17,
    fontWeight: 900,
    marginBottom: '5pt',
  },

  containerDates: {
    display: 'flex',
    fontStyle: 'italic',
    fontSize: 14,
  },

  company: {
    display: 'block',
    fontSize: 14,
    fontWeight: 400,
    marginBottom: '10pt',
  },

  cityJob: {
    fontStyle: 'italic',
    fontSize: 14,
  },

  jobDescription: {
    display: 'block',
    textAlign: 'left',
    lineHeight: '1.3pt',
  },

  // Education

  education: {
    display: 'block',
    fontSize: 20,
    fontWeight: 400,
    marginBottom: '17pt',
    color: '#3c64b1',
    borderBottom: '1pt solid #3c64b1',
  },

  sectionEducation: {
    display: 'block',
    marginBottom: '20pt',
  },

  university: {
    fontSize: 17,
    fontWeight: 900,
    marginBottom: '5pt',
  },

  faculty: {
    display: 'block',
    fontSize: 14,
    fontWeight: 400,
    marginBottom: '10pt',
  },

  cityEducation: {
    fontStyle: 'italic',
  },

  fieldOfStudyDegree: {
    display: 'block',
    fontSize: 14,
    fontWeight: 400,
    marginBottom: '10pt',
  },

  educationDescription: {
    display: 'block',
    textAlign: 'left',
    lineHeight: '1.3pt',
  },

  // Skills

  skills: {
    display: 'block',
    fontSize: 20,
    fontWeight: 400,
    marginBottom: '17pt',
    color: '#3c64b1',
    borderBottom: '1pt solid #3c64b1',
  },

  skillsLevels: {
    display: 'block',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  },

  sectionSkills: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '17pt',
    width: '40%',
  },

  skill: {
    display: 'flex',
  },

  level: {
    display: 'flex',
  },

  // Languages

  languages: {
    display: 'block',
    fontSize: 20,
    fontWeight: 400,
    marginBottom: '17pt',
    color: '#3c64b1',
    borderBottom: '1pt solid #3c64b1',
  },

  languagesLevels: {
    display: 'block',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
  },

  sectionLanguages: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '20pt',
    width: '40%',
  },

  language: {
    display: 'flex',
  },

  // Courses

  sectionCourses: {
    display: 'flex',
    marginBottom: '20pt',
    justifyContent: 'space-between',
    width: '45%',
  },

  courses: {
    display: 'block',
    fontSize: 20,
    fontWeight: 400,
    marginBottom: '17pt',
    color: '#3c64b1',
    borderBottom: '1pt solid #3c64b1',
  },

  coursesLevels: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  course: {
    display: 'flex',
    fontSize: '14pt',
    fontWeight: 400,
    marginBottom: '5pt',
  },

  organization: {
    display: 'flex',
    marginBottom: '10pt',
  },

  courseDescription: {
    display: 'block',
    textAlign: 'left',
    lineHeight: '1.3pt',
  },

  // Hobbies

  sectionHobbies: {
    display: 'flex',
    marginBottom: '20pt',
    justifyContent: 'space-between',
  },

  hobbies: {
    display: 'block',
    fontSize: 20,
    fontWeight: 400,
    marginBottom: '17pt',
    color: '#3c64b1',
    borderBottom: '1pt solid #3c64b1',
  },

  hobby: {
    display: 'flex',
  },

  hobbiesTextArea: {
    display: 'block',
    textAlign: 'left',
    lineHeight: '1.3pt',
  },
});

const formatDate = (date) => {
  const splittedDate = date.split('-');
  return `${splittedDate[1]}.${splittedDate[0]}`;
};

//--------------------------------------Components-------------------------------------

const PersonalInfo = ({
  userName,
  userSurname,
  userEmail,
  userMobile,
  linkedinUrl,
  otherUrl,
  speech,
}) => {
  return (
    <View style={styles.personalInfo}>
      <Text style={styles.name}>
        {userName} {userSurname}
      </Text>
      <View style={styles.section}>
        <View style={styles.container}>
          <Text style={styles.email}>{userEmail}</Text>
          <Text style={styles.mobile}>{userMobile}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.linkedin}>{linkedinUrl}</Text>
          <Text style={styles.otherurl}>{otherUrl}</Text>
        </View>
        <Text style={styles.elevatorSpeech}>{speech}</Text>
      </View>
    </View>
  );
};

const WorkExperience = ({ workExperience }) => {
  const validExperience = workExperience.filter(({ position }) => position);
  if (!validExperience.length) return null;

  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.experience}>Work experience</Text>
      {validExperience.map((x) => {
        return (
          <View key={x.id} style={styles.sectionJob}>
            <View style={styles.container}>
              <Text style={styles.position}>{x.position}</Text>
              <View style={styles.containerDates}>
                <Text style={styles.date}>
                  {formatDate(x.startDate)} - {formatDate(x.endDate)}
                </Text>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.company}>{x.company}</Text>
              <Text style={styles.cityJob}>{x.city}</Text>
            </View>
            <Text style={styles.jobDescription}>{x.jobDescription}</Text>
          </View>
        );
      })}
    </View>
  );
};

const Education = ({ education }) => {
  const validEducations = education.filter(({ university }) => university);
  if (!validEducations.length) return null;

  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.education}>Education</Text>
      {validEducations.map((x) => {
        return (
          <View key={x.id} style={styles.sectionEducation}>
            <View style={styles.container}>
              <Text style={styles.university}>{x.university}</Text>
              <View style={styles.containerDates}>
                <Text style={styles.date}>
                  {formatDate(x.startDate)} - {formatDate(x.endDate)}
                </Text>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.faculty}>{x.faculty}</Text>
              <Text style={styles.cityEducation}>{x.cityEducation}</Text>
            </View>
            {x.fieldOfStudy || x.degree ? (
              <Text style={styles.fieldOfStudyDegree}>
                {x.fieldOfStudy}, {x.degree}
              </Text>
            ) : null}
            <Text style={styles.educationDescription}>
              {x.educationDescription}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

const Skills = ({ skillLevel }) => {
  const validSkills = skillLevel.filter(({ skill }) => skill);
  if (!validSkills.length) return null;

  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.skills}>Skills</Text>
      <View style={styles.skillsLevels}>
        {validSkills.map((x) => {
          return (
            <View key={x.id} style={styles.sectionSkills}>
              <Text style={styles.skill}>{x.skill}</Text>
              <Text style={styles.level}>{x.level}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const Lanugages = ({ languageLevel }) => {
  const validLanguages = languageLevel.filter(({ language }) => language);
  if (!validLanguages.length) return null;

  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.languages}>Languages</Text>
      <View style={styles.languagesLevels}>
        {validLanguages.map((x) => {
          return (
            <View key={x.id} style={styles.sectionLanguages}>
              <Text style={styles.language}>{x.language}</Text>
              <Text style={styles.level}>{x.level}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const Courses = ({ course }) => {
  const validCourses = course.filter(
    ({ courseName, organization, courseDescription }) =>
      courseName || organization || courseDescription,
  );
  if (!validCourses.length) return null;

  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.courses}>Courses</Text>
      <View style={styles.coursesLevels}>
        {validCourses.map((x) => {
          return (
            <View key={x.id} style={styles.sectionCourses}>
              <Text style={styles.course}>{x.courseName}</Text>
              <Text style={styles.organization}>{x.organization}</Text>
              <Text style={styles.courseDescription}>
                {x.courseDescription}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const Hobbies = ({ hobbies }) => {
  if (!hobbies) return null;

  return (
    <View style={styles.section} wrap={false}>
      <Text style={styles.hobbies}>Hobbies</Text>
      <View style={styles.hobbiesTextArea}>
        <View style={styles.sectionHobbies}>
          <Text style={styles.hobby}>{hobbies}</Text>
        </View>
      </View>
    </View>
  );
};

//-----------------------------------------PDF structure-------------------------------------

export const CvView = ({
  userName,
  userSurname,
  userEmail,
  userMobile,
  speech,
  education,
  skillLevel,
  languageLevel,
  workExperience,
  hobbies,
  course,
  linkedinUrl,
  otherUrl,
}) => {
  return (
    <Document style={styles.document}>
      <Page style={styles.page} size="A4">
        <PersonalInfo
          userName={userName}
          userSurname={userSurname}
          userEmail={userEmail}
          userMobile={userMobile}
          linkedinUrl={linkedinUrl}
          otherUrl={otherUrl}
          speech={speech}
        />
        <WorkExperience workExperience={workExperience} />
        <Education education={education} />
        <Skills skillLevel={skillLevel} />
        <Lanugages languageLevel={languageLevel} />
        <Courses course={course} />
        <Hobbies hobbies={hobbies} />
      </Page>
    </Document>
  );
};
