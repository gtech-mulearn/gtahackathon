import React, { useEffect, useState } from "react";
import styles from "./Faq.module.css";
import img from "./assets/Details.png";
import { ArrowUp, ArrowDown } from "../../../../assets/svg/svg.tsx";

const Faq = ({ heading, para }) => {
  const [openmenu, setopenmenu] = useState(false);
  function openMenu() {
    setopenmenu(!openmenu);
  }
  return (
    <div className={styles.faqContentWrapper}>
      <div
        style={{
          background: openmenu
            ? `url(${img})center center/cover no-repeat`
            : "#000",
        }}
        className={styles.Container}
      >
        <div className={styles.header}>
          <h1>{heading}</h1>
          <button onClick={openMenu}>
            {openmenu ? <ArrowUp /> : <ArrowDown />}
          </button>{" "}
        </div>

        {openmenu && (
          <div>
            <p>{para}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
