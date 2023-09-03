import React from "react";
import styles from "./Journey.module.css";
import map from "./assets/background.svg";
import {
  PersonSvg,
  CompusSvg,
  ComputerSvg,
} from "../../../../assets/svg/svg.tsx";
import Scissors from "./assets/Scissor.png";
import Check from "./assets/Checkpoint.png";
const Journey = () => {
  return (
    <div id="Journey" className={styles.outerWrapper}>
      <div className={styles.journeyWrapper}>
        <h1>Journey Map</h1>
        <div className={styles.mapWrapper}>
          <img className={styles.background} src={map} alt="" />
          <div className={styles.maskbg}></div>
          {/* <div className={styles.timelineWrapper}>
            
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Journey;
