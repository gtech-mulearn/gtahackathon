import React, { useEffect, useState } from "react";
import { GTALogo } from "../../assets/svg/svg.tsx";
import styles from "./Navbar.module.css";
import { useReactPath } from "./path.hook.js";

const Navbar = () => {
  const [openmenu, setopenmenu] = useState(false);
  const [navbg, setNavBg] = useState(false);
  function openMenu() {
    setopenmenu(!openmenu);
  }
  const path = useReactPath();
  const navContent = [
    "Overview",
    "The-Series",
    "Why-GTA?",
    "Explore",
    "Support",
  ];
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
    <div
      className={styles.navbarWrapper}
      style={{
        background: navbg ? "rgba(0,0,0,0.4)" : "rgba(0, 0, 0, 0.85)",
      }}
    >
      <a href="/" className={styles.navLogoWrapper}>
        <GTALogo />
      </a>
      <div className={styles.navigationContentWrapper}>
        {" "}
        {navContent.map((content, i) => (
          <a
            href={`#${content}`}
            key={i.toString() + content}
            className={styles.atagWrapper}
          >
            <p
              style={{
                borderBottom: window.location.href.includes(`#${content}`)
                  ? "4px solid #fff"
                  : "",
                padding: "10px 5px 20px",
                margin: "0px 0px",
                color: window.location.href.includes(`#${content}`)
                  ? "#fff"
                  : "#E8E8E8",
                fontWeight: window.location.href.includes(`#${content}`)
                  ? 700
                  : 400,
              }}
            >
              {content}
            </p>
          </a>
        ))}
      </div>
      <a href="" className={styles.navRegisterButton}>
        REGISTER
      </a>
    </div>
  );
};

export default Navbar;
