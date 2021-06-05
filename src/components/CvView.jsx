import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    paddingLeft: '50pt',
    paddingRight: '50pt',
    display: 'flex',
    flexDirection: 'column',
  },

  email: {
    fontSize: 20,
    marginBottom: '10pt',
  },

  mobile: {
    fontSize: 20,
  },

  name: {
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 400,
    fontSize: 30,
    marginBottom: '10pt',
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  elevatorspeech: {
    textAlign: 'center',
  },
});

export const CvView = () => {
  return (
    <Document>
      <Page style={styles.page} size="A4">
        <Text style={styles.name}>Paulína Palíková</Text>
        <View style={styles.container}>
          <Text style={styles.email}>paulipalik@gmail.com</Text>
          <Text style={styles.mobile}>730959461</Text>
        </View>
        <Text style={styles.elevatorspeech}>
          Experienced IT architect with strong background in programming in
          Java, PHP and other languages. Deep interest in educating women in IT.
        </Text>
      </Page>
    </Document>
  );
};
