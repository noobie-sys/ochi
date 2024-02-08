import React from "react";
import style from "@/Scss/components/landingPage.module.scss";
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  const heading__element = ["We Create", "eye-opening", "presentations"];
  const achievements = [
    "For public and private companies",
    "From the first pitch to IPO",
  ];
  return (
    <div className={`${style.landing} bg-slate-100  `}>
      <div className={`${style.text_structure}`}>
        {heading__element.map((el, i) => {
          return (
            <div className={`${style.masker}`}>
                {i === 1 && (
                    <div className={`${style.heading__box}`}></div>
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
          return <p className={`${style.landing__footer__text}`}>{el}</p>;
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
