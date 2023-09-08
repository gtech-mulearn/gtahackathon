import React, { useState, useEffect } from "react";
import styles from "./Leaderboard.module.css";
import Navbar from "../../../../Components/NavHack/Navbar";
import Footer from "../../../../Components/Footer/Footer";
import { BackButtonSvg } from "../../../../assets/svg/svg.tsx";
import axios from "axios";

const Leaderboard = () => {
  const Content = [
    {
      slno: 1,
      college: "Christ College of Engineering",
      regNo: 13,
    },
    {
      slno: 2,
      college: "Kmea Engineering College",
      regNo: 5,
    },
    {
      slno: 3,
      college: "College of Engineering Karunagappally",
      regNo: 4,
    },
    {
      slno: 4,
      college: "Jyothi Engineering College",
      regNo: 4,
    },
    {
      slno: 5,
      college: "College of Engineering Trivandrum",
      regNo: 3,
    },
 
  ];

  // const amal = axios
  //   .get("https://devfolio.vez.social/rank")
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((axiosError) => {
  //     console.error("Error Message:", axiosError.message);
  //     if (axiosError.response) {
  //       console.error("Data:", axiosError.response.data);
  //       console.error("Status:", axiosError.response.status);
  //       console.error("Headers:", axiosError.response.headers);
  //     } else if (axiosError.request) {
  //       console.error("No response was received:", axiosError.request);
  //     } else {
  //       console.error(
  //         "Something went wrong setting up the request:",
  //         axiosError.message
  //       );
  //     }
  //   });
  console.log("hello");
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
          {Content.map(({ slno, college, regNo }, i) => (
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
