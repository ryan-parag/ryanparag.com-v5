import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'

Font.register({
  family: 'Inter',
  fonts: [
    { src: '/fonts/inter/Inter-Regular.woff', fontWeight: 400 },
    { src: '/fonts/inter/Inter-Medium.woff', fontWeight: 500 },
    { src: '/fonts/inter/Inter-SemiBold.woff', fontWeight: 600 },
    { src: '/fonts/inter/Inter-Bold.woff', fontWeight: 700 }
  ]
})

const accent = '#0F9C8C'
const ink = '#0B0F19'
const body = '#374151'
const muted = '#6B7280'
const hairline = '#E5E7EB'

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 40,
    paddingHorizontal: 40,
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 9.5,
    color: body
  },

  // Header
  header: {
    marginBottom: 18,
    paddingBottom: 14,
    borderBottomWidth: 1.5,
    borderBottomColor: accent
  },
  name: {
    fontSize: 24,
    lineHeight: 1.2,
    fontWeight: 700,
    marginBottom: 5,
    color: ink
  },
  role: {
    fontSize: 11.5,
    lineHeight: 1.3,
    fontWeight: 600,
    color: accent,
    marginBottom: 8
  },
  contactRow: {
    fontSize: 9,
    lineHeight: 1.3,
    color: muted
  },

  summary: {
    fontSize: 9.5,
    lineHeight: 1.55,
    color: body
  },

  section: {
  },
  sectionTitle: {
    fontSize: 9.25,
    lineHeight: 1.2,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 1.1,
    marginTop: 18,
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 0.75,
    borderBottomColor: hairline,
    color: ink
  },

  // Experience
  positionBlock: {
    marginBottom: 14
  },
  positionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 5
  },
  companyRole: {
    fontWeight: 600,
    fontSize: 10.5,
    lineHeight: 1.3,
    color: ink
  },
  companyName: {
    fontWeight: 400,
    color: accent
  },
  datesLocation: {
    fontSize: 8.5,
    lineHeight: 1.3,
    color: muted,
    textAlign: 'right'
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 5,
    paddingLeft: 4
  },
  bulletPoint: {
    width: 12,
    fontSize: 9.5,
    lineHeight: 1.5,
    color: accent
  },
  bulletText: {
    flex: 1,
    fontSize: 9,
    lineHeight: 1.5,
    color: body
  },

  // Skills
  skillGroup: {
    marginBottom: 10
  },
  skillGroupLabel: {
    fontWeight: 500,
    fontSize: 8.5,
    lineHeight: 1.3,
    color: muted,
    marginBottom: 5
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  tag: {
    fontSize: 8.5,
    lineHeight: 1.3,
    color: body,
    backgroundColor: '#F3F4F6',
    borderWidth: 0.5,
    borderColor: hairline,
    borderRadius: 3,
    paddingVertical: 3,
    paddingHorizontal: 7,
    marginRight: 5,
    marginBottom: 5
  },

  // Education / Certifications
  miscBlock: {
    marginBottom: 10
  },
  miscPrimary: {
    fontWeight: 600,
    fontSize: 10,
    lineHeight: 1.3,
    color: ink,
    marginBottom: 2
  },
  miscSecondary: {
    fontSize: 9,
    lineHeight: 1.4,
    color: muted
  }
})

export const ResumePDFDocument = ({ data }) => (
  <Document title={`${data.name} — Resume`}>
    <Page size="LETTER" style={styles.page}>

      <View style={styles.header}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.role}>{data.role}</Text>
        <Text style={styles.contactRow}>
          {data.email}   •   {data.location}   •   ryanparag.com
        </Text>
      </View>

      <View style={styles.summary}>
        <Text>{data.description}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        {data.positions.map((pos, idx) => (
          <View key={idx} style={styles.positionBlock} wrap={false}>
            <View style={styles.positionHeader}>
              <Text style={styles.companyRole}>
                {pos.role} <Text style={styles.companyName}>— {pos.company}</Text>
              </Text>
              <Text style={styles.datesLocation}>{pos.start} – {pos.end} | {pos.location}</Text>
            </View>
            {pos.highlights.map((bullet, bIdx) => (
              <View key={bIdx} style={styles.bulletRow}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>{bullet}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>Skills & Technologies</Text>

        <View style={styles.skillGroup}>
          <Text style={styles.skillGroupLabel}>Leadership & strategy</Text>
          <View style={styles.tagRow}>
            {data.skills.leadership.map((skill, i) => (
              <Text key={i} style={styles.tag}>{skill}</Text>
            ))}
          </View>
        </View>

        <View style={styles.skillGroup}>
          <Text style={styles.skillGroupLabel}>Technical & engineering</Text>
          <View style={styles.tagRow}>
            {data.skills.technical.map((skill, i) => (
              <Text key={i} style={styles.tag}>{skill}</Text>
            ))}
          </View>
        </View>

        <View style={styles.skillGroup}>
          <Text style={styles.skillGroupLabel}>Tools & technologies</Text>
          <View style={styles.tagRow}>
            {data.tools.map((tool, i) => (
              <Text key={i} style={styles.tag}>{tool}</Text>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>Education</Text>
        {data.education.map((edu, idx) => (
          <View key={idx} style={styles.miscBlock}>
            <Text style={styles.miscPrimary}>{edu.institution}</Text>
            <Text style={styles.miscSecondary}>{edu.degree} ({edu.date})</Text>
          </View>
        ))}
      </View>

      <View style={styles.section} wrap={false}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        {data.certifications.map((cert, idx) => (
          <View key={idx} style={styles.miscBlock}>
            <Text style={styles.miscPrimary}>{cert.issuer}</Text>
            <Text style={styles.miscSecondary}>{cert.title} ({cert.date})</Text>
          </View>
        ))}
      </View>

    </Page>
  </Document>
)
