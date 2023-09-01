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
        <h1>Codestorm Journey</h1>
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
            <div className={styles.stickone}></div>
            <div className={styles.contentContainer}>
              <div className={styles.circle}></div>
              <img src={Scissors} alt="" />
              <div className={styles.ptagWrapper}>
                <p>25th Sept 2023</p>
                <p>Registration Ends</p>
              </div>
            </div>
            <div className={styles.sticktwo}></div>
            <div className={`${styles.contentContainer} ${styles.phaseone}`}>
              <div className={styles.circle}></div>
              <ComputerSvg />
              <div className={styles.ptagWrapper}>
                <p>1st Oct 2023</p>
                <p>Phase 1 Problem Statement</p>
              </div>
            </div>
            <div className={styles.stickthree}></div>
            <div className={`${styles.contentContainer} ${styles.phasetwo}`}>
              <div className={styles.circle}></div>
              <CompusSvg />
              <div className={styles.ptagWrapper}>
                <p>3rd Oct 2023</p>
                <p>Phase 1 Submission</p>
              </div>
            </div>
            <div className={styles.stickfour}></div>
            <div className={styles.stickfourSub}></div>

            <div className={`${styles.contentContainer} ${styles.phasethree}`}>
              <div className={styles.ptagWrapper}>
                <p>14th Oct 2023</p>
                <p>Hack Starts</p>
              </div>{" "}
              <img src={Check} alt="" />
              <div className={styles.circle}></div>
            </div>
            <div className={styles.stickfive}></div>
            <div className={styles.stickfiveSub}></div>
            <div className={styles.sticksix}></div>
            <div className={`${styles.contentContainer} ${styles.phasefour}`}>
              <div className={styles.ptagWrapper}>
                <p>15th Oct 2023</p>
                <p>Hack Ends</p>
              </div>
              <img src={Check} alt="" />
              <div className={styles.circle}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
