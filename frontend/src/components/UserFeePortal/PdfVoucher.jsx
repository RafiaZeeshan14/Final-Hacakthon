import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: 'Poppins',
  fonts: [
    { src: 'http://fonts.gstatic.com/s/poppins/v1/TDTjCH39JjVycIF24TlO-Q.ttf', fontWeight: 'normal' }, 
  ]
});
const styles = StyleSheet.create({
  smallText: {
    fontSize: 8,
  },
  page: {
    fontSize: 10,
    padding: 10,
    fontFamily: 'Poppins',
  },
  section: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    borderStyle: "dashed",
  },
  borderContainer: {
    padding: 5,
    borderWidth: 2,
    borderColor: "#4B5563",
    borderRadius: 5,
    fontSize: 10,
  },
  header: {
    textAlign: "center",
    marginBottom: 10,
  },
  logo: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottom: "1pt solid grey",
    padding: "5pt 2",
  },
  col: {
    flexGrow: 1,
    flexBasis: "0",
    padding: "5pt",
    border: "1pt solid grey",
  },
  colHalf: {
    flexBasis: "50%",
  },
  colQuarter: {
    flexBasis: "25%",
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    padding: "2pt",
  },
  tableColHeader: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
  },
  signature: {
    textAlign: "center",
    borderTop: "1pt solid grey",
    paddingTop: 20,
    paddingBottom: 20,
  },
  signatureLine: {
    borderTop: "1pt solid grey",
    marginTop: 30,
    marginBottom: 10,
  },
});

const Voucher = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <View style={styles.borderContainer}>
            <View style={styles.logo}>
              <Image src="/Images/logo-stdnt.png" style={{ height: 50 }} />
            </View>

            <View style={[styles.grid, { borderTopWidth: 1 }]}>
              <View style={[styles.col, styles.colHalf]}>
                <Text >Shift: Morning</Text>
              </View>
              <View style={[styles.col, styles.colHalf]}>
                <Text>Voucher: Bank Copy</Text>
              </View>
            </View>

            <View style={{ ...styles.grid, borderBottomWidth: 0 }}>
              <View style={styles.col}>
                <Text>For The Credit Of: SMIT Morning Fee Collection</Text>
                <Text style={styles.smallText}>Pay at any Bank Branches *</Text>
              </View>
            </View>

            <View style={styles.grid}>
              <View style={[styles.col, styles.colQuarter]}>
                <Text>Date</Text>
              </View>
              <View style={[styles.col, styles.colQuarter]}>
                <Text></Text>
              </View>
              <View style={[styles.col, styles.colQuarter]}>
                <Text>Voucher No</Text>
              </View>
              <View style={[styles.col, styles.colQuarter]}>
                <Text></Text>
              </View>
            </View>

            <View style={styles.grid}>
              <View style={[styles.col, styles.colQuarter]}>
                <Text>Student ID</Text>
              </View>
              <View style={[styles.col, styles.colQuarter]}>
                <Text></Text>
              </View>
              <View style={[styles.col, styles.colQuarter]}>
                <Text>Batch</Text>
              </View>
              <View style={[styles.col, styles.colQuarter]}>
                <Text></Text>
              </View>
            </View>

            <View style={styles.grid}>
              <View style={[styles.col, styles.colHalf]}>
                <Text>Student Name</Text>
              </View>
              <View style={[styles.col, styles.colHalf]}>
                <Text></Text>
              </View>
            </View>

            <View style={styles.grid}>
              <View style={[styles.col, styles.colHalf]}>
                <Text>Course</Text>
              </View>
              <View style={[styles.col, styles.colHalf]}>
                <Text></Text>
              </View>
            </View>

            <View style={styles.table}>
              <View style={[styles.tableRow, styles.tableColHeader]}>
                <View style={[styles.tableCol, { width: "70%" }]}>
                  <Text>Fees Head</Text>
                </View>
                <View style={[styles.tableCol, { width: "30%" }]}>
                  <Text style={{ textAlign: "right" }}>Amount</Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={[styles.tableCol, { width: "70%" }]}>
                  <Text>Monthly Fees</Text>
                </View>
                <View style={[styles.tableCol, { width: "30%" }]}>
                  <Text style={{ textAlign: "right" }}>
                    
                  </Text>
                </View>
              </View>
              <View style={styles.tableRow}>
                <View style={[styles.tableCol, { width: "70%" }]}>
                  <Text>
                    Monthly Fees With Due Date 
                  </Text>
                </View>
                <View style={[styles.tableCol, { width: "30%" }]}>
                  <Text style={{ textAlign: "right" }}>Rs 1100/-</Text>
                </View>
              </View>
            </View>

            <View style={{ textAlign: "center", marginBottom: 10 }}>
              <Text>In words: One Thousand Only</Text>
            </View>

            <View style={styles.grid}>
              <View style={[styles.col, styles.colHalf, styles.signature]}>
                <View style={styles.signatureLine}></View>
                <Text>Applicant's Signature</Text>
              </View>
              <View style={[styles.col, styles.colHalf, styles.signature]}>
                <View style={styles.signatureLine}></View>
                <Text>Bank Authorized Signature & Stamp</Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Voucher;