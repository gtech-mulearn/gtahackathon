import React from "react";
import Home from "./Components/Home/Home";
import NavHack from "../../Components/NavHack/Navbar";
import About from "./Components/About/About";
import Prizes from "./Components/Prizes/Prizes";
import Journey from "./Components/Journey/Journey";
import Faq from "./Components/Faq/FaqContent";
import Location from "./Components/Location/Location";
import Footer from "../../Components/Footer/Footer";
import styles from "./GTACodestorm.module.css";
const GTACodestorm = () => {
  return (
    <div className={styles.codestormWrapper}>
      <NavHack />
      <Home />
      <About />
      <Prizes />
      <Journey />
      <Faq />
      <Location />
      <Footer />
    </div>
  );
};

export default GTACodestorm;
