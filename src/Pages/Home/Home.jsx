import React from "react";
import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.homeWrapper}>
      <Navbar />
      <Landing />
    </div>
  );
};

export default Home;
