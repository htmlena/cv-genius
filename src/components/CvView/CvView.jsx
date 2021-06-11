import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  BlobProvider,
} from '@react-pdf/renderer';
import '../PersonalInfo/PersonalInfo';

import font from './Lato-Regular.ttf';

const styles = StyleSheet.create({
  page: {
    paddingLeft: '50pt',
    paddingRight: '50pt',
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
    backgroundColor: '#3c64b1',
    color: 'white',
    marginBottom: '17pt',
    marginTop: '17pt',
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

  // section: {
  //   marginBottom: '20pt',
  // },

  // Job experience

  experience: {
    fontFamily: 'Lato',
    display: 'block',
    fontSize: 20,
    fontWeight: 400,
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    justifyContent: 'flex-start',
    width: '200pt',
  },

  sectionSkills: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '17pt',
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    justifyContent: 'flex-start',
    width: '200pt',
  },

  sectionLanguages: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20pt',
  },

  language: {
    display: 'flex',
  },

  // Courses

  sectionCourses: {
    display: 'flex',
    marginBottom: '20pt',
    justifyContent: 'space-between',
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
    flexDirection: 'column',
    justifyContent: 'space-between',
    justifyContent: 'flex-start',
    width: '200pt',
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

  // courseDescription: {
  //   display: 'block',
  //   textAlign: 'center',
  //   marginBottom: '20pt',
  // },

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

Font.register({ family: 'Lato', src: font, format: 'truetype' });

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
        {/* Job experience 1 */}
        <View style={styles.section}>
          <Text style={styles.experience}>Work experience</Text>
          {workExperience.map((x) => {
            return (
              <View style={styles.sectionJob}>
                <View style={styles.container}>
                  <Text style={styles.position}>{x.position}</Text>
                  <View style={styles.containerDates}>
                    <Text style={styles.date}>
                      {x.startDate} - {x.endDate}
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
          {/* Job experience 2 */}
          <View style={styles.sectionJob}>
            <View style={styles.container}>
              <Text style={styles.position}>Senior Executive</Text>
              <View style={styles.containerDates}>
                <Text style={styles.date}>1.8.2020 - 30.5.2021</Text>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.company}>
                Phillip and Morris company, s.r.o.
              </Text>
              <Text style={styles.cityJob}>Vancouver</Text>
            </View>
            <Text style={styles.jobDescription}>
              Among my responsibilities was to hire new employees into our
              company by screening their CVs, schedule interviews and hgvbgjh
              jknkj jnjwe fewf zjuh sdssdc rgrtgb edfrgv getg thtzhj ewferg -
              fgevfbvefgbr - dfbdbrbgbdv dgvefinnvierngvjernjvnwkr ergvkefvfrbv
              Among my responsibilities was to hire new employees into our
              company by screening their CVs, schedule interviews and hgvbgjh
              jknkj jnjwe fewf zjuh sdssdc rgrtgb edfrgv getg thtzhj ewferg -
              fgevfbvefgbr - dfbdbrbgbdv dgvefinnvierngvjernjvnwkr ergvkefvfrbv
            </Text>
          </View>
          {/* Job experience 3 */}
          <View style={styles.sectionJob}>
            <View style={styles.container}>
              <Text style={styles.position}>PR manager</Text>
              <View style={styles.containerDates}>
                <Text style={styles.date}>1.8.2020 - 30.5.2021</Text>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.company}>
                Phillip and Morris company, s.r.o.
              </Text>
              <Text style={styles.cityJob}>Považská Bystrica, Slovensko</Text>
            </View>
            <Text style={styles.jobDescription}>
              Among my responsibilities was to hire new employees into our
              company.
            </Text>
          </View>
        </View>
        {/* Education 1 */}
        <View style={styles.section}>
          <Text style={styles.education}>Education</Text>
          {education.map((x) => {
            return (
              <View style={styles.sectionEducation}>
                <View style={styles.container}>
                  <Text style={styles.university}>{x.university}</Text>
                  <View style={styles.containerDates}>
                    <Text style={styles.date}>
                      {x.startDate} - {x.endDate}
                    </Text>
                  </View>
                </View>
                <View style={styles.container}>
                  <Text style={styles.faculty}>{x.faculty}</Text>
                  <Text style={styles.cityEducation}>{x.cityEducation}</Text>
                </View>
                <Text style={styles.fieldOfStudyDegree}>
                  {x.fieldOfStudy} ,{x.degree}
                </Text>
                <Text style={styles.educationDescription}>
                  {x.educationDescription}
                </Text>
              </View>
            );
          })}
        </View>
        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.skills}>Skills</Text>
          <View style={styles.skillsLevels}>
            {skillLevel.map((x) => {
              return (
                <View style={styles.sectionSkills}>
                  <Text style={styles.skill}>{x.skill}</Text>
                  <Text style={styles.level}>{x.level}</Text>
                </View>
              );
            })}
          </View>
        </View>
        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.languages}>Languages</Text>
          <View style={styles.languagesLevels}>
            {languageLevel.map((x) => {
              return (
                <View style={styles.sectionLanguages}>
                  <Text style={styles.language}>{x.language}</Text>
                  <Text style={styles.level}>{x.level}</Text>
                </View>
              );
            })}
          </View>
        </View>
        {/* Courses */}
        <View style={styles.section}>
          <Text style={styles.courses}>Courses</Text>
          <View style={styles.coursesLevels}>
            {course.map((x) => {
              return (
                <View style={styles.sectionCourses}>
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
        {/* Hobbies */}
        <View style={styles.section}>
          <Text style={styles.hobbies}>Hobbies</Text>
          <View style={styles.hobbiesTextArea}>
            <View style={styles.sectionHobbies}>
              <Text style={styles.hobby}>{hobbies}</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
