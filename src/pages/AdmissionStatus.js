import React from "react";
import BelowHeader from "../components/BelowHeader";
const AdmissionStatus = () => {
  // Your code here

  return (
    <div style={styles.container}>
      <div style={{}}>
        <BelowHeader title="AdmissionStatus" goTo="AdmissionStatus" />
      </div>
      <h1>Admission Status</h1>
      {/* Add your content here */}
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f7f7ff",
    margin: 0,
  },
};
export default AdmissionStatus;
