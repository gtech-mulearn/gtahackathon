import React from "react";
import styles from "./Footer.module.css";
import insta from "../../assets/images/instalogo.png";
import { Twitter, Facebook, Youtube } from "../../assets/svg/svg.tsx";

const Footer = () => {
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.FooterWrapper}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopContent}>
            <a href="">Explore µLearn</a>
            <a href="">About KKEM</a>
            <a href="">Privacy Policy</a>
            <a href="">Disclaimer</a>
          </div>
          <div className={styles.FooterSocialMedia}>
            <a href="https://www.instagram.com/gtechmulearn/" target="_blank">
              <img src={insta} alt="" />
            </a>
            <a href="https://twitter.com/GtechMulearn" target="_blank">
              <Twitter />
            </a>
            <a href="https://www.youtube.com/c/mulearn" target="_blank">
              <Youtube />
            </a>
            <a href="https://www.facebook.com/gtechmulearn" target="_blank">
              <Facebook />
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div>
            <a href="https://mulearn.org/" target="_blank">
              µLearn Foundation
            </a>
          </div>
          <div className={styles.footerHackName}>
            <a href="/codestorm">CodeStorm</a>
            <a href="/sandshores">SandShores</a>
          </div>
          <div>
            <a href="">MCMXCVIII</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
