import React from 'react'
import NavHack from "../../Components/NavHack/Navbar";
import Footer from "../../Components/Footer/Footer";
import styles from "./GTACodestorm.module.css";
const GTACodestorm = () => {
  return (
    <div className={styles.codestormWrapper}>
      <NavHack />
      <Footer />
    </div>
  );
}

export default GTACodestorm
