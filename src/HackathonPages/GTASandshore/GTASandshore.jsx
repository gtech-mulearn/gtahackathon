import React from "react";
import Home from "./Components/Home/Home";
import NavHack from "../../Components/NavHack/Navbar";
import About from "./Components/About/About"
import Sponsors from "./Components/Sponsors/Sponsors";
import styles from "./GTASandshore.module.css";

const GTASandshore = () => {
  return (
    <div className={styles.sandshoresWrapper}>
      <NavHack />
      <Home />
      <About />
      <Sponsors />
    </div>
  );
};

export default GTASandshore;
