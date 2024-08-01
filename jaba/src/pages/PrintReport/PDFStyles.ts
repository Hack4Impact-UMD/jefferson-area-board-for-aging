import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  doc: {
    padding: 0,
    margin: 0,
  },
  page: {
    overflow: "hidden",
    paddingTop: "40px",
    paddingBottom: "40px",
  },
  table: {
    width: "80vw",
    borderCollapse: "collapse",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
  boldHeader: {
    margin: "5 auto",
    fontSize: 15,
    padding: 10,
    fontWeight: 500,
    alignItems: "center",
    width: "100%",
  },
  activeCourses: {
    width: "100%",
    margin: "20px 0",
    flexDirection: "row",
    borderTop: "2px solid #D8D8D8",
    borderBottom: "2px solid #D8D8D8",
  },
  tableRow: {
    width: "80%",
    fontSize: 10,
    fontWeight: 300,
    marginTop: "5pt",
    flexDirection: "row",
  },
  rowTitle: {
    height: "35pt",
    width: "40%",
  },
  section: { color: "white", textAlign: "center" },

  name: {
    textAlign: "center",
    fontSize: "16px",
    fontWeight: 500,
  },

  coursesTableCol: {
    width: "100%",
    marginLeft: 0,
  },
  tableCol: {
    width: "25%",
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
    padding: "10px",
    fontWeight: 300,
  },
  coursesTableCell: {
    marginTop: 5,
    fontSize: 10,
    padding: "10px",
    fontWeight: 300,
    height: "20pt",
    width: "100%",
  },
  header: {
    textAlign: "center",
    paddingTop: "5px",
    paddingBottom: "20px",
    fontWeight: 500,
  },
});

export default styles;
