import React from "react";
import Home from "./Components/Home/Home";
import NavHack from "../../Components/NavHack/Navbar";
import Sponsors from "./Components/Sponsors/Sponsors";
import styles from "./GTASandshore.module.css";

const GTASandshore = () => {
  return (
    <div className={styles.sandshoresWrapper}>
      <NavHack />
      <Home />
      <Sponsors />
    </div>
  );
};

export default GTASandshore;
