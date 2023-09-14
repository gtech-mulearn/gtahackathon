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
            <div className={styles.container}>
              <div className={styles.yellowCircle}></div>
              <PersonSvg />
              <div className={styles.inner}>
                <h3>September 01</h3>
                <p>Registration Starts</p>
              </div>
            </div>
            <div className={styles.strip1}></div>
            <div className={styles.container}>
              <div className={styles.yellowCircle}></div>
              <PersonSvg />
              <div className={styles.inner}>
                <h3>September 01</h3>
                <p>Registration Starts</p>
              </div>
            </div>
            <div className={styles.strip2}></div>
            <div className={styles.strip2Sub}></div>
            <div className={styles.strip2Sub2}></div>
            <div className={styles.container}>
              <div className={styles.yellowCircle}></div>
              <PersonSvg />
              <div className={styles.inner}>
                <h3>September 01</h3>
                <p>Registration Starts</p>
              </div>
            </div>
            <div className={styles.strip3}></div>
            <div className={styles.container}>
              <div className={styles.yellowCircle}></div>
              <PersonSvg />
              <div className={styles.inner}>
                <h3>September 01</h3>
                <p>Registration Starts</p>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.yellowCircle}></div>
              <PersonSvg />
              <div className={styles.inner}>
                <h3>September 01</h3>
                <p>Registration Starts</p>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.yellowCircle}></div>
              <PersonSvg />
              <div className={styles.inner}>
                <h3>September 01</h3>
                <p>Registration Starts</p>
              </div>
            </div>
            <div className={styles.container}>
              <div className={styles.yellowCircle}></div>
              <PersonSvg />
              <div className={styles.inner}>
                <h3>September 01</h3>
                <p>Registration Starts</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Journey;
