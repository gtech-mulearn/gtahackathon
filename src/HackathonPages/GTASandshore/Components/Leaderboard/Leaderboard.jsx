import React from "react";
import styles from "./Leaderboard.module.css";
import Navbar from "../../../../Components/NavHack/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import { BackButtonSvg } from "../../../../assets/svg/svg.tsx";

const Leaderboard = () => {
  const Content = [
    {
      slno: 1,
      college: "Christ College of Engineering",
      regNo: 240,
    },
    {
      slno: 2,
      college: "Sahradaya College of Engineering",
      regNo: 200,
    },
    {
      slno: 3,
      college: "KKEM College of Architecture",
      regNo: 240,
    },
    {
      slno: 4,
      college: "Vidya College of Engineering",
      regNo: 200,
    },
    {
      slno: 5,
      college: "Thejus College of Engineering",
      regNo: 240,
    },
    {
      slno: 6,
      college: "Jyothi College of Engineering",
      regNo: 200,
    },
    {
      slno: 7,
      college: "KKEM College of Architecture",
      regNo: 240,
    },
    {
      slno: 8,
      college: "Vidya College of Engineering",
      regNo: 200,
    },
    {
      slno: 9,
      college: "Thejus College of Engineering",
      regNo: 240,
    },
    {
      slno: 10,
      college: "Jyothi College of Engineering",
      regNo: 200,
    },
  ];
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
          {Content.map(({slno,college,regNo},i)=>(
            <tr>
              <td>{slno}</td>
              <td>{college}</td>
              <td>{regNo}</td>
            </tr>
          ))}
        
        </tbody>
      </table>
      <Footer />
    </div>
  );
};

export default Leaderboard;
