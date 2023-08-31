import React, { useEffect, useState } from "react";
import { ULearn, GTALogo } from "../../../assets/svg/svg.tsx";
import styles from "./Navbar.module.css";
import { useReactPath } from "./path.hook.js";

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);
  const [navbg, setNavBg] = useState(false);
  function openMenu() {
    setopenmenu(!openmenu);
  }
  const path = useReactPath();
  const navContent = ["O", "about", "team", "contact"];
  useEffect(() => {}, [path]);
  const changeNavBg = () => {
    window.scrollY >= 150 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);
  return (
    <div className={styles.navbarWrapper}>
      <div className={styles.navLogoWrapper}>
        <ULearn />
        <div></div>
        <GTALogo />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Navbar;
