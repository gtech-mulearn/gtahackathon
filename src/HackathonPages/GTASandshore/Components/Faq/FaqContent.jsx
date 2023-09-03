import React, { useState } from "react";
import styles from "./Faq.module.css";

import FAQ from "./Faq";
const Faq1 = () => {
  const faqArray = [
    {
      heading: "What is the maximum team size allowed?",
      para: "Teams can consist of 2 to 4 members for participation in the hackathon.",
    },
    {
      heading: "Is there a registration fee for the hackathon?",
      para: "Registration is entirely free of charge. No fees are required for participation.",
    },
    {
      heading: "Can we work on pre-existing projects?",
      para: "No, participants are strictly required to develop a prototype within a 24-hour timeframe, based on the problem statements provided.",
    },
    {
      heading: "How can I qualify for participation?",
      para: "The hackathon follows a two-phase structure. Participants who successfully clear the first online phase will have the opportunity to participate in the subsequent offline hackathon. Problem statements for the first phase will be released on October 1st. Your performance in this phase will determine your eligibility for entry into the final offline hackathon.",
    },
  ];

  return (
    <div id="FAQs" className={styles.faqWrapper}>
      <h1 style={{ color: "#fff", textAlign: "center" }}>FAQs</h1>

      <div style={{ display: "flex", flexDirection: "column", width: "100%" ,gap:"7px"}}>
        {faqArray.map(({ heading, para }, i) => (
          <FAQ heading={heading} para={para} />
        ))}
      </div>
    </div>
  );
};

export default Faq1;
