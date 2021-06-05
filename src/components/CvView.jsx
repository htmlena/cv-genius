import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
// import font from './font.ttf';

// Font.register({ family: 'sans-serif', src: font, format: 'truetype' });

const styles = StyleSheet.create({
  document: {
    weight: '21cm',
  },

  page: {
    // fontFamily: 'sans-serif',
    paddingLeft: '50pt',
    paddingRight: '50pt',
    display: 'flex',
    flexDirection: 'column',
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

  section: {
    marginBottom: '10pt',
  },
});

export const CvView = () => {
  return (
    <Document style={styles.document}>
      <Page style={styles.page} size="A4">
        <Text style={styles.name}>Paulína Palíková</Text>
        <View style={styles.section}>
          <View style={styles.container}>
            <Text style={styles.email}>paulipalik@gmail.com</Text>
            <Text style={styles.mobile}>730959461</Text>
          </View>
          <Text style={styles.elevatorSpeech}>
            Experienced IT architect with strong background in programming in
            Java, PHP and other languages. Deep interest in educating women in
            IT.
          </Text>
        </View>
        {/* Job experience 1 */}
        <View style={styles.section}>
          <Text style={styles.experience}>Work experience</Text>
          <View style={styles.container}>
            <Text style={styles.position}>Junior recruiter</Text>
            <View style={styles.containerDates}>
              <Text style={styles.startDate}>1.6.2020 -&nbsp;</Text>
              <Text style={styles.endDate}>30.3.2021</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.company}>Apple</Text>
            <Text style={styles.city}>Prague</Text>
          </View>
          <Text style={styles.jobDescription}>
            Among my responsibilities was to hire new employees into our company
            by screening their CVs, schedule interviews and hgvbgjh jknkj jnjwe
            fewf zjuh sdssdc rgrtgb edfrgv getg thtzhj ewferg - fgevfbvefgbr -
            dfbdbrbgbdv
          </Text>
        </View>
        {/* Job experience 2 */}
        <View style={styles.section}>
          <View style={styles.container}>
            <Text style={styles.position}>Senior Executive</Text>
            <View style={styles.containerDates}>
              <Text style={styles.startDate}>1.8.2020 -&nbsp;</Text>
              <Text style={styles.endDate}>30.5.2021</Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.company}>
              Phillip and Morris company, s.r.o.
            </Text>
            <Text style={styles.city}>Vancouver</Text>
          </View>
          <Text style={styles.jobDescription}>
            Among my responsibilities was to hire new employees into our company
            by screening their CVs, schedule interviews and hgvbgjh jknkj jnjwe
            fewf zjuh sdssdc rgrtgb edfrgv getg thtzhj ewferg - fgevfbvefgbr -
            dfbdbrbgbdv dgvefinnvierngvjernjvnwkr ergvkefvfrbv Among my
            responsibilities was to hire new employees into our company by
            screening their CVs, schedule interviews and hgvbgjh jknkj jnjwe
            fewf zjuh sdssdc rgrtgb edfrgv getg thtzhj ewferg - fgevfbvefgbr -
            dfbdbrbgbdv dgvefinnvierngvjernjvnwkr ergvkefvfrbv
          </Text>
        </View>
        {/* Job experience 3 */}
        <View style={styles.section}>
          <View style={styles.container}>
            <Text style={styles.position}>PR manager</Text>
            <View style={styles.containerDates}>
              <Text style={styles.startDate}>1.8.2020 -&nbsp;</Text>
              <Text style={styles.endDate}>30.5.2021</Text>
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
        {/* Education 1 */}
        <View style={styles.section}>
          <Text style={styles.experience}>Education</Text>
          <View style={styles.container}>
            <Text style={styles.position}>University</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
