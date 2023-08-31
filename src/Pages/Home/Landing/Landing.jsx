import React, { useRef, useState } from "react";
import styles from "./Landing.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/img1.png";
import hackathonLogo from "../../../assets/images/gtasandshoreLogo.png";

const Landing = () => {
  return (
    <div className={styles.landingWrapper}>
      <div className={styles.swiperWrapper}>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className={styles.swiper}
        >
          <SwiperSlide>
            <img src={img1} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={styles.landingContentWrapper}>
        <img src={hackathonLogo} alt="" />
        <div className={styles.contentWrapper}>
          <h3>GTA : SandShores</h3>
          <h3>Registrations Open!</h3>
          <p>
            Experience the beach hackathon that you’ve<br></br>never experienced
            before!
          </p>
          <div style={{ display: "flex", gap: "15px" }}>
            <a href="/sandshores">EXPLORE HACKATHON</a>
            <a href="/">APPLY NOW</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
