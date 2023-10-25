import React from "react";
import styles from "./Verticals.module.css";
import arvr from "./assets/arvr.svg";
import Aiml from "./assets/aiml.svg";
import web from "./assets/website.svg";
import Appli from "./assets/application.svg";
const Verticals = () => {
  return (
    <>
      <div className={styles.verticalWrapper}>
        <h1>Our Verticals</h1>
        <div className={styles.contentContainer}>
          <div>
            <img src={Aiml} alt="" loading="lazy" />
          </div>
          <div>
            <img src={arvr} alt="" loading="lazy" />
          </div>
          <div>
            <img src={web} alt="" loading="lazy" />
          </div>
          <div>
            <img src={Appli} alt="" loading="lazy" />
          </div>
        </div>
      </div>
      <div className={styles.verticalWrapper}>
        <h1>Problem Stetements</h1>
        <div className={styles.contentContainer + " " + styles.problem}>
          <a href="">AI / ML</a>
          <a href="">AR / VR</a>
          <a href="">WEBSITE</a> <a href="">APPLICATION</a>
        </div>
      </div>
    </>
  );
};

export default Verticals;
