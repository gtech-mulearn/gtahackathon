import React from "react";
import styles from "./Verticals.module.css";
import arvr from "./assets/arvr.png";
import aiml from "./assets/aiml.png";
import web from "./assets/website.png";
import app from "./assets/application.png";
const Verticals = () => {
  return (
    <div className={styles.verticalWrapper}>
      <h1>Our Verticals</h1>
      <div className={styles.contentContainer}>
        <div>
          <img src={aiml} alt="" />
        </div>
        <div>
          <img src={arvr} alt="" />
        </div>
        <div>
          <img src={web} alt="" />
        </div>
        <div>
          <img src={app} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Verticals;
