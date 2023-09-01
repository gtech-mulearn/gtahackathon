import React from "react";
import Home from "./Components/Home/Home";
import NavHack from "../../Components/NavHack/Navbar";
import About from "./Components/About/About"
import Prizes from "./Components/Prizes/Prizes";
import Journey from "./Components/Journey/Journey";
import Sponsors from "./Components/Sponsors/Sponsors";
import Faq from "./Components/Faq/FaqContent";
import Location from "./Components/Location/Location";
import Footer from "../../Components/Footer/Footer";
import styles from "./GTASandshore.module.css";

const GTASandshore = () => {
  return (
    <div className={styles.sandshoresWrapper}>
      <NavHack />
      <Home />
      <About />
      <Prizes />
      <Journey />
      <Sponsors />
      <Faq />
      <Location />
      <Footer />
    </div>
  );
};

export default GTASandshore;
