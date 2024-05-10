import React, { useState } from "react";
import BelowHeader from "../components/BelowHeader";

function ScoreCalculator() {
  const [scores, setScores] = useState({
    sat1: "",
    sat2: "",
    gpa: "",
    calculationMethod: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setScores({ ...scores, [name]: value });
  };

  return (
    <div style={styles.container}>
      <div style={{ marginRight: 0 }}>
        <BelowHeader
          title="Equivalent Certificates Calculator"
          goTo="EquivalentCertificatesCalculator"
        ></BelowHeader>
      </div>
      <div style={styles.container}>
        <label>
          SAT 1 score:
          <input
            type="number"
            name="sat1"
            value={scores.sat1}
            onChange={handleInputChange}
            max="1600"
          />
          Out of 1600
        </label>
      </div>

      <div style={styles.container}>
        <label>
          SAT 2 score:
          <input
            type="number"
            name="sat2"
            value={scores.sat2}
            onChange={handleInputChange}
            max="1600"
          />
          Out of 1600
        </label>
      </div>

      <div style={styles.container}>
        <label>
          GPA score:
          <input
            type="number"
            name="gpa"
            value={scores.gpa}
            onChange={handleInputChange}
            max="40"
          />
          Out of 40
        </label>
      </div>

      <div style={styles.container}>
        <label>
          Calculation method:
          <select
            name="calculationMethod"
            value={scores.calculationMethod}
            onChange={handleInputChange}
          >
            <option value="">Select method</option>
            {/* Add other options here */}
            <option value="method1"> جامعة حكومية</option>
            <option value="method1"> جامعة خاصة</option>
            <option value="method1"> معاهد</option>
            {/* Translate this option as per actual content */}
            {/* Add more options as needed */}
          </select>
        </label>
      </div>

      {/* Implement calculation logic and display total score as needed */}
      {/* This button can be used to trigger the calculation */}
      <button onClick={() => console.log("Implement calculation logic")}>
        Calculate my score
      </button>
    </div>
  );
}
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

export default ScoreCalculator;
