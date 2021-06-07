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

  email: {
    fontSize: 17,
    marginBottom: '10pt',
  },

  mobile: {
    fontSize: 17,
    fontWeight: 400,
    marginBottom: '10pt',
  },

  name: {
    alignSelf: 'center',
    fontWeight: 400,
    fontSize: 30,
    marginBottom: '20pt',
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  elevatorSpeech: {
    display: 'block',
    textAlign: 'center',
    marginBottom: '20pt',
  },

  section: {
    marginBottom: '20pt',
  },

  experience: {
    display: 'block',
    fontSize: 20,
    fontWeight: 400,
    marginBottom: '17pt',
    borderBottom: '1pt solid black',
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

  city: {
    fontStyle: 'italic',
    marginBottom: '10pt',
  },

  containerDates: {
    display: 'flex',
    fontStyle: 'italic',
  },

  sectionJob: {
    display: 'block',
    marginBottom: '20pt',
  },

  sectionEducation: {
    display: 'block',
    marginBottom: '20pt',
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

  sectionLevel: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  skill: {
    display: 'flex',
  },

  level: {
    display: 'flex',
  },

  hobby: {
    display: 'flex',
  },
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
  courseName,
  organization,
  courseDescription,
  linkedinUrl,
  otherUrl,
}) => {
  return (
    <Document style={styles.document}>
      <Page style={styles.page} size="A4">
        <Text style={styles.name}>
          {userName} {userSurname}
        </Text>
        <View style={styles.section}>
          <View style={styles.container}>
            <Text style={styles.email}>{userEmail}</Text>
            <Text style={styles.mobile}>{userMobile}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.email}>{linkedinUrl}</Text>
            <Text style={styles.mobile}>{otherUrl}</Text>
          </View>
          <Text style={styles.elevatorSpeech}>{speech}</Text>
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
                  <Text style={styles.city}>{x.city}</Text>
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
              <Text style={styles.city}>Vancouver</Text>
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
              <Text style={styles.city}>Považská Bystrica, Slovensko</Text>
            </View>
            <Text style={styles.jobDescription}>
              Among my responsibilities was to hire new employees into our
              company.
            </Text>
          </View>
        </View>
        {/* Education 1 */}
        <View style={styles.section}>
          <Text style={styles.experience}>Education</Text>
          {education.map((x) => {
            return (
              <View style={styles.sectionEducation}>
                <View style={styles.container}>
                  <Text style={styles.position}>{x.university}</Text>
                  <View style={styles.containerDates}>
                    <Text style={styles.date}>
                      {x.startDate} - {x.endDate}
                    </Text>
                  </View>
                </View>
                <View style={styles.container}>
                  <Text style={styles.company}>{x.faculty}</Text>
                  <Text style={styles.city}>{x.cityEducation}</Text>
                </View>
                <Text style={styles.company}>
                  {x.fieldOfStudy}, {x.degree}
                </Text>
                <Text style={styles.jobDescription}>
                  {x.educationDescription}
                </Text>
              </View>
            );
          })}
        </View>
        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.experience}>Skills</Text>
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
          <Text style={styles.experience}>Languages</Text>
          <View style={styles.skillsLevels}>
            {languageLevel.map((x) => {
              return (
                <View style={styles.sectionSkills}>
                  <Text style={styles.skill}>{x.language}</Text>
                  <Text style={styles.level}>{x.level}</Text>
                </View>
              );
            })}
          </View>
        </View>
        {/* Hobbies */}
        <View style={styles.section}>
          <Text style={styles.experience}>Hobbies</Text>
          <View style={styles.skillsLevels}>
            <View style={styles.sectionSkills}>
              <Text style={styles.skill}>{hobbies}</Text>
            </View>
          </View>
        </View>
        {/* Courses */}
        <Text style={styles.name}>{courseName}</Text>
        <Text style={styles.name}>{organization}</Text>
        <View style={styles.section}>
          <Text style={styles.elevatorSpeech}>{courseDescription}</Text>
        </View>
      </Page>
    </Document>
  );
};
