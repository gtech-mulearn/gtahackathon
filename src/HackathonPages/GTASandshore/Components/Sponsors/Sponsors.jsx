import React from "react";
import styles from "./Sponsors.module.css";

import twinkle from "./assets/singlestar.png";
import solana from "./assets/Solana.png";
import filecoin from "./assets/filecoin.png";
import devfolio from "./assets/devfolio.png";
import fundesign from "./assets/fundesign.png";
import polygon from "./assets/polygon.png";
import replict from "./assets/Replit.png";
import whitecard from "./assets/white-cut-rect.png";
import uparrow from "./assets/pink-up-arrow.png";
const Sponsors = () => {
  return (
    <section id="sponsors">
      <div className={styles.contactsWrapper}>
        <div className={styles.headingTeam}>
          <p>OUR SPONSORS</p>
        </div>

        <div className={styles.sponsorsLogoWrapper}>
          <div className={styles.divSponsorsTire}>
            <div className={styles.companySponsorsDiv}>
              <a href="https://fundesign.netlify.app/">
                {/* <img src={fundesign} alt="FUN DESIGN" /> */}
              </a>
            </div>
            <div className={styles.twinkleSponsors}>
              <img src={twinkle} alt="" />
              <img src={twinkle} alt="" />
              <img src={twinkle} alt="" />
            </div>
          </div>
          <div className={styles.lineOne}></div>
          <div className={styles.divSponsorsTire}>
            <div className={styles.companySponsorsDiv}>
              <a href="https://devfolio.co/">
                <img src={devfolio} alt="DEVFOLIO LOGO" />
              </a>
              <a href="https://polygon.technology/">
                <img src={polygon} alt="POLYGON LOGO" />
              </a>
            </div>
            <div className={styles.twinkleSponsors}>
              <img src={twinkle} alt="" />
              <img src={twinkle} alt="" />
            </div>
          </div>
          <div className={styles.lineTwo}></div>
          <div className={styles.divSponsorsTire}>
            <div className={styles.companySponsorsDiv}>
              <a href="https://replit.com">
                <img src={replict} alt="REPLIT LOGO" />
              </a>
              <a href="https://solana.com">
                <img src={solana} alt="SOLANA LOGO" />
              </a>
              <a href="https://filecoin.io">
                <img src={filecoin} alt="FILECOIN LOGO" />
              </a>
            </div>
            <div className={styles.twinkleSponsors}>
              <img src={twinkle} alt="" />
            </div>
          </div>
          <div className={styles.lineThree}></div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
