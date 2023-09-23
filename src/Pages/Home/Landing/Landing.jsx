import React, { useRef, useState } from "react";
import styles from "./Landing.module.css";

const Landing = () => {
    return (
        <div className={styles.landingWrapper}>
            <div className={styles.videoWrapper}>
                <iframe
                    className={styles.iframeelement}
                    src="https://www.youtube.com/embed/CaQ8MmCdmwM?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&loop=1&playsinline=1&start=0&fs=0&playlist=CaQ8MmCdmwM"
                    allow="autoplay; fullscreen"
                ></iframe>
            </div>
            <div className={styles.landingContentWrapper}>
                <div className={styles.contentWrapper}>
                    <h3>GTA : SandShores</h3>
                    <h3>Registrations Open!</h3>
                    <p>
                        Experience the beach hackathon that you’ve<br></br>never
                        experienced before!
                    </p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <a href="/sandshores">EXPLORE HACKATHON</a>
                        <a href="https://gta-sandshores.devfolio.co/">
                            APPLY NOW
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
