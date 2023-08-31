import React, { useState } from "react";
import styles from "./Faq.module.css";

import FAQ from "./Faq";
const Faq1 = () => {
  const faqArray = [
    {
      heading: "How can I become a GTA+ Member?",
      para: "GTA+ memberships can be purchased directly from the PlayStation Store, Microsoft Store, or from within GTA Online on PlayStation 5 and Xbox",
    },
    {
      heading: "What is included in the GTA+ Membership?",
      para: "The maximum team size is 2 people.",
    },
    {
      heading:
        "Once I’m a GTA+ Member, how do I claim my Membership Benefits for each Member-only Event?",
      para: "The output product of a designathon should be a working prototype of the team's ideas and solutions to the design challenge, and it should be presented in a way that effectively communicates the team's vision and approach.",
    },
    {
      heading: "How can I cancel my Subscription to GTA+?",
      para: "You’ll be selected on the criteria of your knowledge and proficiency in design sector. We prefer you having updated Behance & Dribbble profiles.",
    },
   
  ];

  return (
    <div className={styles.faqWrapper}>
      <h1 style={{color:"#fff"}}>Frequently Asked Questions</h1>

      <div style={{ display: "flex", flexDirection: "column",width:"100%" }}>
        {faqArray.map(({ heading, para }, i) => (
          <FAQ heading={heading} para={para} />
        ))}
      </div>
    </div>
  );
};

export default Faq1;
