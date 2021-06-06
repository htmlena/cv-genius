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
});

export const CvView = ({
  userName,
  userSurname,
  userEmail,
  userMobile,
  speech,
  position,
  company,
  city,
  jobDescription,
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
          <Text style={styles.elevatorSpeech}>{speech}</Text>
        </View>
        {/* Job experience 1 */}
        <View style={styles.section}>
          <Text style={styles.experience}>Work experience</Text>
          <View style={styles.sectionJob}>
            <View style={styles.container}>
              <Text style={styles.position}>{position}</Text>
              <View style={styles.containerDates}>
                <Text style={styles.date}>1.6.2020 - 30.3.2021</Text>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.company}>{company}</Text>
              <Text style={styles.city}>{city}</Text>
            </View>
            <Text style={styles.jobDescription}>{jobDescription}</Text>
          </View>
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
          <View style={styles.sectionEducation}>
            <View style={styles.container}>
              <Text style={styles.position}>
                Vysoká škola ekonomická v Praze
              </Text>
              <View style={styles.containerDates}>
                <Text style={styles.date}>1.6.2019 - 30.3.2021</Text>
              </View>
            </View>
            <View style={styles.container}>
              <Text style={styles.company}>Marketing</Text>
              <Text style={styles.city}>Prague</Text>
            </View>
            <Text style={styles.jobDescription}>
              Courses: PR strategy, online marketing
            </Text>
          </View>
        </View>
        {/* Skills */}
        <View style={styles.section}>
          <Text style={styles.experience}>Skills</Text>
          <View style={styles.skillsLevels}>
            <View style={styles.sectionSkills}>
              <Text style={styles.skill}>Project management</Text>
              <Text style={styles.level}>Advanced</Text>
            </View>
            <View style={styles.sectionLevel}>
              <Text style={styles.skill}>Bootstrap</Text>
              <Text style={styles.level}>Beginner</Text>
            </View>
          </View>
        </View>
        {/* Languages */}
        <View style={styles.section}>
          <Text style={styles.experience}>Languages</Text>
          <View style={styles.skillsLevels}>
            <View style={styles.sectionSkills}>
              <Text style={styles.skill}>English</Text>
              <Text style={styles.level}>Native</Text>
            </View>
            <View style={styles.sectionLevel}>
              <Text style={styles.skill}>Slovak</Text>
              <Text style={styles.level}>Beginner</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};
