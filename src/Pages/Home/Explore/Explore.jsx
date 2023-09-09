import React from 'react'
import styles from './Explore.module.css'
import image from "./assets/image.svg";


const Explore = () => {
  return (
    <div id="Explore" className={styles.OverviewWrapper}>
      <div className={styles.InnerDiv}>
        <img src={image} alt="" />
        <div>
          <h1>
            KKEM -<br></br>Empowering Innovation<br></br>and Collaboration
          </h1>
          <p>
            KKEM drives the Grand Tech Adventure hackathon series with
            dedication to transform Kerala into a Knowledge Society. Their
            unwavering partnership elevates opportunities for aspiring hackers
            and tech enthusiasts, making the event a launchpad for job-oriented
            skills.<br></br> As the organizing partner of GTA Hackathon series, KKEM is
            playing a pivotal role in providing young minds with opportunities
            to showcase their talents, tackle real-world challenges, and forge
            meaningful connections with industry experts. Their vision of
            empowering the youth through gainful employment aligns seamlessly
            with the goals of the hackathon series.
          </p>
          <a href="">EXPLORE KKEM</a>
        </div>
      </div>
    </div>
  );
}

export default Explore
