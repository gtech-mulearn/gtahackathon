import React from "react";
import styles from "./Journey.module.css";
import map from "./assets/Map.png";
import {
  PersonSvg,
  CompusSvg,
  ComputerSvg,
} from "../../../../assets/svg/svg.tsx";
import Scissors from "./assets/Scissor.png";
import Check from "./assets/Checkpoint.png";
const Journey = () => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.journeyWrapper}>
        <h1>SandShores Journey</h1>
        <div className={styles.mapWrapper}>
          <img className={styles.background} src={map} alt="" />
          <div className={styles.timelineWrapper}>
            <div className={styles.contentContainer}>
              <div className={styles.circle}></div>
              <PersonSvg />
              <div className={styles.ptagWrapper}>
                <p>1st Sept 2023</p>
                <p>Registration Starts</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
