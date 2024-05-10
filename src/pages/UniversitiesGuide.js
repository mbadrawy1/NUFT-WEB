import React from "react";
import Card from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";
import Card3 from "../components/Cards/Card3";
import Card4 from "../components/Cards/Card4";
import Card5 from "../components/Cards/Card5";
import Card6 from "../components/Cards/Card6";
import Card7 from "../components/Cards/Card7";
import BelowHeader from "../components/BelowHeader";
const UniversitiesGuide = () => {
  return (
    <div style={styles.container}>
      <div style={{}}>
        <BelowHeader title="CONTACT US" goTo="UniversitiesGuide" />
      </div>
      <h1>Universities Guide</h1>
      <p>Welcome to the Universities Guide page!</p>
      <div style={{ display: "flex", gap: "20px" }}>
        <Card img="/Academy.png" title="open" description="dicsover more" />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Card img="/Academy.png" title="open" description="dicsover more" />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Card img="/Academy.png" title="open" description="dicsover more" />
        <Card5 />
        <Card6 />
        <Card7 />
      </div>
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
export default UniversitiesGuide;
