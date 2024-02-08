import React from "react";
import style from "@/Scss/components/_marquee.module.scss";
const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className={`${style.marquee_header}`}>
      <div className={`${style.marquee__element} `}>
        <div className={`${style.marquee__group}`}>
          <span>We</span>
          <span>Are</span>
          <span>Ochi</span>
        </div>

        <div className={`${style.marquee__group}`}>
          <span>We</span>
          <span>Are</span>
          <span>Ochi</span>
        </div>
        <div className={`${style.marquee__group}`}>
          <span>We</span>
          <span>Are</span>
          <span>Ochi</span>
        </div>
        <div className={`${style.marquee__group}`}>
          <span>We</span>
          <span>Are</span>
          <span>Ochi</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;
