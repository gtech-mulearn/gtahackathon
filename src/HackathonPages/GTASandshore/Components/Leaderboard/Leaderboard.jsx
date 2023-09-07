import React from "react";
import styles from "./Leaderboard.module.css";
import Navbar from "../../../../Components/NavHack/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import { BackButtonSvg } from "../../../../assets/svg/svg.tsx";

const Leaderboard = () => {
  return (
    <div className={styles.leaderboardWrapper}>
      <div className={styles.leaderboardNavigation}>
        <a href="/sandshores">
          <BackButtonSvg />
          <span>Back</span>
        </a>
        <h1>LEADERBOARD</h1>
        <a
          href="https://gta-sandshores.devfolio.co/"
          className={styles.register}
        >
          REGISTER
        </a>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>College Name</th>
            <th>Reg No's</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Alpha College</td>
            <td>ALP123</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Beta Institute</td>
            <td>BET456</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Gamma University</td>
            <td>GAM789</td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Leaderboard;
