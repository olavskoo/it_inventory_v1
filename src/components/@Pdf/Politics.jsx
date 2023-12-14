import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import BorderOps from "../img/BorderOpsLogo/purple.png"

// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
    },
    section: {
      marginTop: 30,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 10,
      padding: 10,
      flexGrow: 1
    },
    title: {
      fontSize: 25
    }
  });
  
  // Create Document Component
  export const Politics = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>GE Healthcare</Text>
          <Text style={{fontSize: 10}}>Responsabilidad y manejo del equipo de IT de la compañia</Text>
        </View>
        <view>
          <Image src={BorderOps}/>
        </view>
      </Page>
    </Document>
  );