"use client";
import React from "react";
import style from "@/Scss/layout/_card.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

const Card = ({ image, heading, dir }) => {
  const splitHeading = heading.split("");
  return (
    <div className={style.card_div}>
      <div className={`${style.card_heading}`}>
        <div className={style.dot}></div>
        <h2>{heading}</h2>
      </div>
      <h1 className={`absolute top-1/2 ${dir}   ${style.card_image_alt}`}>
        {splitHeading.map((el, i) => {
          return <span key={i}>{el}</span>;
        })}
      </h1>
      <motion.div
        whileHover={{ scale: 0.95 }}
        transition={{ duration: 0.4 }}
        className={style.card_inner_container}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <Image alt="Image" src={image} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
