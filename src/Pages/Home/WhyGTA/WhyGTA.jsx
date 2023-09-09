import React from "react";
import styles from "./WhyGTA.module.css";
import image from "./assets/image.svg";
const WhyGTA = () => {
  return (
    <div id="Overview" className={styles.OverviewWrapper}>
      <div className={styles.InnerDiv}>
        <img src={image} alt="" />
        <div>
          <h1>Why GTA Hackathon Series?</h1>
          <ul>
            <li>
              Unleash your creativity and problem-solving skills in a
              tech-fueled environment.
            </li>
            <li>Forge invaluable connections with industry giants.</li>
            <li>Push your limits in a 24-hour format.</li>
            <li>
              Connect with potential employers, mentors, and fellow tech
              enthusiasts.
            </li>
            <li>GTA empowers youth by promoting skill development.</li>
            <li>
              Showcase your talents, tackle real-world challenges, and build
              lasting connections.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhyGTA;
