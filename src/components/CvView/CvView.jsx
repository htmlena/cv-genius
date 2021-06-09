import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import '../PersonalInfo/PersonalInfo';

// import font from './font.ttf';

// Font.register({ family: 'sans-serif', src: font, format: 'truetype' });

const styles = StyleSheet.create({
  page: {
    // fontFamily: 'sans-serif',
    paddingLeft: '50pt',
    paddingRight: '50pt',
    display: 'flex',
    flexDirection: 'column',
    fontSize: 12,
  },

  // Personal info

  personalInfo: {
    backgroundColor: '#e8edf6',
    marginBottom: '17pt',
    marginTop: '17pt',
    padding: '20pt',
  },

  name: {
    alignSelf: 'center',
    fontWeight: 400,
    fontSize: 30,
    marginBottom: '17pt',
  },

  email: {
    fontSize: 17,
    marginBottom: '10pt',
  },

  mobile: {
    fontSize: 17,
    fontWeight: 400,
    marginBottom: '10pt',
  },

  linkedin: {
    fontSize: 17,
    fontWeight: 400,
    marginBottom: '10pt',
  },

  otherurl: {
    fontSize: 17,
    fontWeight: 400,
    marginBottom: '10pt',
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  elevatorSpeech: {
    display: 'block',
    textAlign: 'center',
    marginBottom: '17pt',
    marginTop: '25pt',
  },

  // section: {
  //   marginBottom: '20pt',
  // },

  // Job experience

  sectionJob: {
    display: 'block',
    marginBottom: '20pt',
  },

  experience: {
    display: 'block',
    fontSize: 20,
    fontWeight: 400,
    color: '#3c64b1',
    marginBottom: '17pt',
    borderBottom: '1pt solid #3c64b1',
  },

  position: {
    fontSize: 20,
    fontWeight: 400,
  },

  company: {
    display: 'block',
    fontSize: 17,
    fontWeight: 400,
  },

  cityJob: {
    fontStyle: 'italic',
    marginBottom: '10pt',
  },

  containerDates: {
    display: 'flex',
    fontStyle: 'italic',
  },

  jobDescription: {
    display: 'block',
    textAlign: 'left',
    marginBottom: '20pt',
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
    fontSize: 20,
    fontWeight: 400,
  },

  faculty: {
    display: 'block',
    fontSize: 17,
    fontWeight: 400,
  },

  cityEducation: {
    fontStyle: 'italic',
    marginBottom: '10pt',
  },

  fieldOfStudyDegree: {
    display: 'block',
    fontSize: 17,
    fontWeight: 400,
  },

  educationDescription: {
    display: 'block',
    textAlign: 'left',
    marginBottom: '20pt',
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
    marginBottom: '20pt',
    justifyContent: 'space-between',
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
    marginBottom: '20pt',
    justifyContent: 'space-between',
  },

  language: {
    display: 'flex',
  },

  // Hobbies

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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    justifyContent: 'flex-start',
    width: '200pt',
  },

  sectionHobbies: {
    display: 'flex',
    marginBottom: '20pt',
    justifyContent: 'space-between',
  },

  // Courses

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

  sectionCourses: {
    display: 'flex',
    marginBottom: '20pt',
    justifyContent: 'space-between',
  },

  course: {
    display: 'flex',
  },

  // courseDescription: {
  //   display: 'block',
  //   textAlign: 'center',
  //   marginBottom: '20pt',
  // },
});

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
                  {x.fieldOfStudy}, {x.degree}
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
        {/* Hobbies */}
        <View style={styles.section}>
          <Text style={styles.hobbies}>Hobbies</Text>
          <View style={styles.hobbiesTextArea}>
            <View style={styles.sectionHobbies}>
              <Text style={styles.hobby}>{hobbies}</Text>
            </View>
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
                  <Text style={styles.course}>{x.organization}</Text>
                  <Text style={styles.course}>{x.courseDescription}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </Page>
    </Document>
  );
};
