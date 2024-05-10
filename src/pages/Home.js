import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react";
import Header from "../components/Navbar"; // Change the import statement to match the correct casing
// import Carousel from "../components/Carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../assets/logo.png";
import image2 from "../assets/logo.png";
import image3 from "../assets/logo.png";
// Create an array of image paths

const Home = () => {
  return (
    <div>
      <Carousel className="crsl" autoPlay infiniteLoop emulateTouch>
        <div style={styles.Carousel}>
          <img src={image1} />
          <p className="legend">Legend 1</p>
        </div>
        <div style={styles.Carousel}>
          <img src={image2} />
          <p className="legend">Legend 2</p>
        </div>
        <div style={styles.Carousel}>
          <img src={image3} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      {/* <img style={{ width: 20 }} src={require("./logo.png")} alt="NUFT" /> */}
    </div>
  );
};

const styles = {
  Carousel: {
    marginTop: 50,
    width: "100%",
    height: "auto",
  },
};
export default Home;
