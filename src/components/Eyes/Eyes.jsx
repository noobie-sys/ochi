"use client";
import React, { useEffect, useRef, useState } from "react";
import style from "@/Scss/components/_eyes.module.scss";
import { motion } from "framer-motion";

const Eyes = () => {
  const mousePosition = useRef(null);
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const current_element = mousePosition.current;

    const mouseMovePosition = (e) => {
      const { clientX, clientY } = e;
      let deltaX = clientX - window.innerWidth / 2;
      let deltaY = clientY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle);
    };

    window.addEventListener("mousemove", mouseMovePosition);

    return () => {
      window.removeEventListener("mousemove", mouseMovePosition);
    };
  }, []);

  return (
    <div className={style.eyes}>
      <div data-scroll  data-scroll-speed="-.7" className={`${style.eyes_element}`}>
        <div className={style.eye_balls}>
        <div className={`${style.eye_}`}>
          <motion.div
            className={`${style.eye_white_space}`}
            ref={mousePosition}
          >
            <h2 className="text-slate-200 text-3xl uppercase absolute ">
              Play
            </h2>
            <div
              style={{
                transform: `translate(-50% , -50%) rotate(${rotate - 180}deg)`,
              }}
              className={`${style.eye_white_space_inner}`}
            >
              <div className={`${style.eye_ball}`}></div>
            </div>
          </motion.div>
        </div>
        <div className={`${style.eye_}`}>
          <div className={`${style.eye_white_space}`}>
            <h2 className="text-slate-200 text-3xl uppercase absolute ">
              Play
            </h2>
            <div
              style={{
                transform: `translate(-50% , -50%) rotate(${rotate - 180}deg)`,
              }}
              className={`${style.eye_white_space_inner}`}
            >
              <div className={`${style.eye_ball}`}></div>
            </div>
          </div>
        </div></div>
      </div>
    </div>
  );
};

export default Eyes;
