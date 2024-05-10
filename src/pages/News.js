// NewsCard.js
import React from "react";
import img1 from "../assets/Uni Logos/International/EUE.png";
import Banner from "../components/Banner";
import BelowHeader from "../components/BelowHeader";
function News({ title }) {
  return (
    <div>
      <BelowHeader title="News" goTo="News"></BelowHeader>
      <div style={{ display: "flex", padding: "20px" }}>
        <h4>
          <a href="#">{title}</a>
        </h4>
        <Banner
          title="Important"
          message="This is an important news"
          img="/GIU.png"
        />
        <Banner
          title="Important"
          message="This is an important news"
          img="/GIU.png"
        />
        <Banner
          title="Important"
          message="This is an important news"
          img="/AUC.png"
        />
      </div>
      <div>
        <img src={img1} alt="" />
      </div>
    </div>
  );
}
export default News;
