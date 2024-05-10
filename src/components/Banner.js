import React from "react";

const Banner = ({ title, message, img }) => {
  return (
    <div style={styles.banner}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.message}>{message}</p>
      <img src={img} alt="" />
    </div>
  );
};

const styles = {
  banner: {
    backgroundColor: "#f0f0f0",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  message: {
    fontSize: "16px",
  },
};

export default Banner;
