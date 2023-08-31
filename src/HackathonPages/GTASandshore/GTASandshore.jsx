import React from "react";
import Home from "./Components/Home/Home";
import NavHack from "../../Components/NavHack/Navbar";
import About from "./Components/About/About"
import Sponsors from "./Components/Sponsors/Sponsors";
import Journey from "./Components/Journey/Journey";
import Faq from "./Components/Faq/Faq";
import Location from "./Components/Location/Location";
import Footer from "../../Components/Footer/Footer";
import styles from "./GTASandshore.module.css";

const GTASandshore = () => {
  return (
    <div className={styles.sandshoresWrapper}>
      <NavHack />
      <Home />
      <About />
      <Journey />
      <Sponsors />
      <Faq />
      <Location />
      <Footer />
    </div>
  );
};

export default GTASandshore;
