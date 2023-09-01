import React from "react";
import styles from "./Prizes.module.css";

const Prizes = () => {
  return (
    <div className={styles.prizeWrapper}>
      <div className={styles.amountWrapper}>
        <div>
          <h2>TITLE WINNER'S</h2>
          <h1>10,000 INR</h1>
        </div>
        <div>
          <h2>RUNNER UP'S</h2>
          <h1>5,000 INR</h1>
        </div>
      </div>
      <p style={{textAlign:"center"}}>** NOTE : For all track 1st and 2nd prize are available **</p>
    </div>
  );
};

export default Prizes;
