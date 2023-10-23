import React, { useState, useEffect } from "react";
import styles from "./Leaderboard.module.css";
import Footer from "../Footer/Footer";
import { BackButtonSvg } from "../../assets/svg/svg.tsx";
import { getLeaderboard } from "./LeaderboardApi";


const Leaderboard = (url) => {
    const [content, setContent] = useState();
    useEffect(() => {
		getLeaderboard(setContent, url.leaderboardUrl);
    }, []);
	console.log(url)
	console.log(url.backUrl)
    console.log("hello");
    return (
        <div className={styles.leaderboardWrapper}>
            <div className={styles.leaderboardNavigation}>
                <a href={url.backUrl}>
                    <BackButtonSvg />
                    <span>Back</span>
                </a>
                <h1>LEADERBOARD</h1>
                <a href={url.registerUrl} className={styles.register}>
                    REGISTER
                </a>
            </div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>College Name</th>
                        <th>Reg No's</th>
                    </tr>
                </thead>
                <tbody>
                    {content &&
                        Object.entries(content)
                            .slice(0, 15) // Slice the first 15 entries
                            .map(([college, regNo], i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{college}</td>
                                    <td>{regNo}</td>
                                </tr>
                            ))}
                </tbody>
            </table>
            <Footer />
        </div>
    );
};

export default Leaderboard;