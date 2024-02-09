import React from "react";
import style from "@/Scss/components/landingPage.module.scss";
import { FaArrowUpLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import aman from '../../../public/aman.jpg'
import Image from "next/image";

const LandingPage = () => {
  const heading__element = ["We Create", "eye-opening", "presentations"];
  const achievements = [
    "For public and private companies",
    "From the first pitch to IPO",
  ];
  return (
    <div data-scroll data-scroll-section  data-scroll-speed="-.3" className={`${style.landing} bg-slate-100  `}>
      <div className={`${style.text_structure}`}>
        {heading__element.map((el, i) => {
          return (
            <div className={`${style.masker}`} key={i}>
              {i === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className={`${style.heading__box}`}
                >
                  <Image src={aman} width={'auto'} height={'auto'} alt="Aman" />
                </motion.div>
              )}
              <div className="w-fit items-center flex">
                <h1 className={`${style.landing__heading}`}>{el}</h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className={`${style.landing__footer}`}>
        {achievements.map((el, i) => {
          return (
            <p className={`${style.landing__footer__text}`} key={i}>
              {el}
            </p>
          );
        })}
        <div className={style.start}>
          <div className={style.btn}>Start the Project</div>
          <div className={style.icon}>
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
