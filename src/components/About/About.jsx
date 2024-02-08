import React from "react";
import style from "@/Scss/components/_about.module.scss";
import Image from "next/image";
import image from '../../../public/image.jpg'

const About = () => {
  return (
    <div  className={`${style.about_element} `}>
      <h1>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className={`${style.about_detail} `}>
        <div  className={`${style.about_detail__text} `}>
            <h2>Our Approch:</h2>
            <button>Read more
                <div className={`${style.button__icon}`}></div>
            </button>
        </div>
        <div  className={`${style.about_detail__image} `}>
            <Image src={image} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default About;
