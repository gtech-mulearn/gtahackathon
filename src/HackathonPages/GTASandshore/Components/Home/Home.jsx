import React from "react";
import styles from "./Home.module.css";
import sandshoreLogo from "../../../../assets/images/gtasandshoreLogo.png";
import fivestar from "../../assets/5stargrp.png";

const Home = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className={styles.HomeWrapper}>
        <div className={styles.homelogodevfolio}>
          <img src={sandshoreLogo} alt="" />
          <h2 style={{ textAlign: "center" }}>HACKATHON</h2>
          <img src={fivestar} alt="" />
          <div
            class="apply-button"
            data-hackathon-slug="gta-sandshores"
            data-button-theme="dark-inverted"
            style={{ height: "44px", width: "312px" }}
          ></div>
        </div>
      </div>
      <div className={styles.homeFooter}>
        <div>
          <h1>29</h1>
          <p>DAYS</p>
        </div>
        <div>
          <h1>30</h1>
          <p>HOURS</p>
        </div>
        <div>
          <h1>12</h1>
          <p>MINUTES</p>
        </div>
        <div>
          <h1>00</h1>
          <p>SECONDS</p>
        </div>
      </div>
    </>
  );
};

export default Home;
