import React from "react";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import styles from './Home.module.css'
import GTASandshores from '../../HackathonPages/GTASandshore/GTASandshore'

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <Navbar />
      <Landing />
      {/* <GTASandshores /> */}
    </div>
  );
};

export default Home;
